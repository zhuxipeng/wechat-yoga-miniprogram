

// https://api.m.taobao.com/rest/api3.do?api=mtop.common.getTimestamp
// https://developers.weixin.qq.com/miniprogram/dev/api/network/request/wx.request.html
function getJson(url) {
  return new Promise((resolve, reject) => {
    wx.request({
      url,
      success(res) {
        if (res.statusCode === 200) {
          resolve(res.data);
        } else {
          reject();
        }

      },
      fail(error) {
        reject(error);
      }
    })
  });

}
function postData(url, data) {
  return new Promise((resolve, reject) => {
    wx.request({
      url,
      data,
      method: 'POST',
      success(res) {
        if (res.statusCode === 200) {
          resolve(res.data);
        } else {
          reject();
        }

      },
      fail(error) {
        reject(error);
      }
    })
  });

}


// https://developers.weixin.qq.com/miniprogram/dev/api/open-api/login/wx.login.html
async function getLoginCode() {
  return new Promise((resolve, reject) => {
    wx.login({
      success: res => {
        if (res.code) {
          resolve(res.code)
        } else {
          reject();
        }
      },
      fail: () => {
        reject();
      }
    });
  });
}
// 异步化函数
function promisify(api) {
  return (opt, ...arg) => {
    return new Promise((resolve, reject) => {
      api(Object.assign({}, opt, {
        success: resolve,
        fail: reject
      }), ...arg)
    })
  }
}

async function getOpenId() {
  const code = await getLoginCode();
  const url = `${app.globalData.host}/yoga/auth?code=${code}`;
  const res = await getJson(url, code);
  return res.openid;
}
function getNavigationBarSize() {
  const {
    screenWidth,
    statusBarHeight
  } = wx.getSystemInfoSync();
  const {
    height,
    top,
    right
  } = wx.getMenuButtonBoundingClientRect();
  const paddingLeft = screenWidth - right;
  const navigationHeight = (top - statusBarHeight) * 2 + height;

  // console.log(`screenWidth = ${screenWidth}\n`,
  //   `statusBarHeight = ${statusBarHeight}\n`,
  //   `height = ${height}\n`,
  //   `top = ${top}\n`,
  //   `right = ${right}\n`, `paddingLeft = ${paddingLeft}\n`,
  //   `navigationHeight = ${navigationHeight}\n`);

  /* iPad
   screenWidth = 768
   statusBarHeight = 20
   height = 44
   top = 28
   right = 761
   paddingLeft = 7
   navigationHeight = 60
  */
  return {
    navigationHeight,
    navigationTop: statusBarHeight,
    paddingLeft,
  }
}

module.exports = {
  getJson,
  getLoginCode,
  postData,
  getOpenId,
  getNavigationBarSize
};