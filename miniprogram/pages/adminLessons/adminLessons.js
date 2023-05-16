const app = getApp();
const shared = require('../../utils/shared')

Page({
    data: {
        app,
        selected: 0,
        indexs: ["今天", "明天", "近七日", "近半月"]
    },
    async onLoad() {
        const date = new Date();
        date.setHours(0, 0, 0, 0);
        this.data.start = date.getTime() / 1000;
        this.data.end = this.data.start + 86400;
        this.loadData();
    },
    async loadData() {
        let lessons
        try {
            lessons = await
                new Promise((resolve, reject) => {
                    const url = `${app.globalData.host}/yoga/admin/lessons?start=${this.data.start}&end=${this.data.end}&openid=${app.globalData.openid}`
                    wx.request({
                        url,
                        success(res) {
                            if (res.statusCode === 200)
                                resolve(res.data);
                            else
                                reject()
                        },
                        fail(error) {
                            reject();
                        }
                    });
                });
        } catch (error) {
            this.setData({
                lessons: null
            })
            return
        }
        this.setData({
            lessons: lessons.sort((x, y) => {
                if (x.date_time === y.date_time)
                    return x.start_time - y.end_time;
                else
                    return x.date_time - y.date_time
            }).map(x => {
                x["date"] = formatLessonDateTime(x);
                const dif = x.peoples - x.count;
                x["dif"] = dif === 0 ? "已满额" : `差  ${dif} 人`;
                x['expired'] = checkIfLessonExpired(x);
                return x;
            })
        });
    },
    onIndex(e) {
        const selected = e.currentTarget.dataset.id;
        this.setData({
            selected
        })
        if (selected === 0) {
            const date = new Date();
            date.setHours(0, 0, 0, 0);
            this.data.start = date.getTime() / 1000;
            this.data.end = this.data.start + 86400;
            this.loadData();
        } else if (selected === 1) {
            const date = new Date();
            date.setHours(0, 0, 0, 0);
            this.data.start = date.getTime() / 1000 + 86400;
            this.data.end = this.data.start + 86400;
            this.loadData();
        } else if (selected === 2) {
            const date = new Date();
            date.setHours(0, 0, 0, 0);
            this.data.start = date.getTime() / 1000;
            this.data.end = this.data.start + 7 * 86400;
            this.loadData();
        } else if (selected === 3) {
            const date = new Date();
            date.setHours(0, 0, 0, 0);
            this.data.start = date.getTime() / 1000;
            this.data.end = this.data.start + 14 * 86400;
            this.loadData();
        }
    },
    navigate(e) {
        shared.navigate(e)
    },
});

function formatLessonDateTime(lesson) {
    const date = new Date(lesson.date_time * 1000);
    //  周${'日一二三四五六'[date.getDay()]} 
    //  ${lesson.start_time / 3600 | 0}:${((lesson.start_time % 3600) / 60 | 0).toString().padStart(2, '0')}
    return `${date.getMonth() + 1}月${date.getDate()}日${lesson.start_time < 43200 ? '上午' : '晚上'}`
}
function checkIfLessonExpired(lesson) {
    const now = new Date();
    const senconds = now.getHours() * 3600 + now.getMinutes() * 60;
    now.setHours(0, 0, 0, 0);
    if (lesson.date_time > now.getTime()/1000) {
        return false;
    }
    if (lesson['date_time'] == now.getTime()/1000 && lesson.start_time > senconds) {
        return false;
    }
    return true;
}