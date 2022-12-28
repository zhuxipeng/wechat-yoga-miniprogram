document.querySelectorAll('[bind]').forEach(element => {
  if (element.getAttribute('bind')) {
    window[element.getAttribute('bind')] = element;
  }
  [...element.attributes].filter(attr => attr.nodeName.startsWith('@')).forEach(attr => {
    if (!attr.value) return;
    element.addEventListener(attr.nodeName.slice(1), evt => {
      window[attr.value](evt);
    });
  });
})
customActions.data= [{
        path: ` <path d="M12.984 15v-2.016h-1.969v2.016h1.969zM12.984 11.016v-6h-1.969v6h1.969zM20.016 2.016q0.797 0 1.383 0.586t0.586 1.383v12q0 0.797-0.586 1.406t-1.383 0.609h-14.016l-3.984 3.984v-18q0-0.797 0.586-1.383t1.383-0.586h16.031z"></path>`,
        title: '公告',
        href: 'notices'
      },{
        path: ` <path d="M20.016 14.016v-6h-5.109l2.109 2.813-1.641 1.172q-3-4.078-3.375-4.594-0.375 0.516-3.375 4.594l-1.641-1.172 2.109-2.813h-5.109v6h16.031zM20.016 18.984v-1.969h-16.031v1.969h16.031zM9 3.984q-0.422 0-0.703 0.305t-0.281 0.727 0.281 0.703 0.703 0.281 0.703-0.281 0.281-0.703-0.281-0.727-0.703-0.305zM15 3.984q-0.422 0-0.703 0.305t-0.281 0.727 0.281 0.703 0.703 0.281 0.703-0.281 0.281-0.703-0.281-0.727-0.703-0.305zM20.016 6q0.844 0 1.406 0.586t0.563 1.43v10.969q0 0.844-0.563 1.43t-1.406 0.586h-16.031q-0.844 0-1.406-0.586t-0.563-1.43v-10.969q0-0.844 0.563-1.43t1.406-0.586h2.203q-0.188-0.656-0.188-0.984 0-1.219 0.891-2.109t2.109-0.891q1.547 0 2.484 1.313l0.516 0.703 0.516-0.703q0.328-0.563 1.078-0.938t1.406-0.375q1.219 0 2.109 0.891t0.891 2.109q0 0.328-0.188 0.984h2.203z"></path>`,
        title: '营销',
        href: 'market'
      },
]
function showDrawer(evt) {
  evt.stopPropagation();
  customDrawer.setAttribute('expand', 'true');
}
let baseUri = window.location.host === "127.0.0.1:5500" ? 'http://127.0.0.1:8081' : ''
async function loadData() {
  const response = await fetch(`${baseUri}/v1/admin/notices`, {
    headers: {
      "Authorization": window.localStorage.getItem("Authorization")
    }
  })
  return response.json();
}
async function render() {
  const wrapper = document.querySelector('.wrapper');
  let obj;
  try {
    obj = await loadData();
    obj.forEach(value => {
      const div = document.createElement('div');
      div.textContent = value.title;
      div.addEventListener('click', evt => {
        evt.stopPropagation();
      });
      wrapper.appendChild(div);
    })
  } catch (error) {

  }
}
render();