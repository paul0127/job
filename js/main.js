/*首頁輪播主圖*/
$('.banner_slider').owlCarousel({
  loop: true,
  margin: 0,
  nav: false,
  dots: false,
  autoplay: true,
  responsive: {
    0: {
      items: 1,
    },
  },
})
/*首頁挑戰輪播*/
$('.challenge_slider').owlCarousel({
  loop: true,
  margin: 0,
  nav: true,
  dots: false,
  responsive: {
    0: {
      items: 1,
    },
  },
})
/*首頁消息輪播*/
$('.news_slider').owlCarousel({
  loop: true,
  nav: true,
  dots: false,
  responsive: {
    0: {
      items: 2,
      margin: 10,
    },
    1200: {
      items: 2,
      margin: 30,
    },
  },
})

/*頁尾選單 開合*/
let footer_menu = document.querySelector('.footer_menu')
let footer_menu_btn = document.querySelector('.footer_menu_btn')

let footer_menu_height = $('.footer_menu').height()
footer_menu.setAttribute('style', 'height: ' + footer_menu_height + 'px')

footer_menu_btn.addEventListener('click', () => {
  footer_menu_btn.classList.toggle('closed')
  if (footer_menu_btn.classList.contains('closed')) {
    footer_menu.setAttribute('style', 'height: 0')
  } else {
    footer_menu.setAttribute('style', 'height: ' + footer_menu_height + 'px')
  }
})

/*PC搜尋欄 開合*/
let search = document.querySelector('.head .search_btn')
let search_bar = document.querySelector('.head .search_bar')
let closed = document.querySelector('.pc_closed')

search.addEventListener('click', () => {
  search_bar.classList.toggle('active')
  console.log(search_bar.classList.contains('active'))
  if (search_bar.classList.contains('active')) {
    closed.classList.add('active')
  } else {
    closed.classList.remove('active')
  }
})
closed.addEventListener('click', () => {
  search_bar.classList.remove('active')
  closed.classList.remove('active')
})

/*手機板主選單 搜尋 開關*/
let mobile_search = document.querySelector('.mobile_head .search_btn .btn')
let mobile_search_bar = document.querySelector('.mobile_head .search_btn')
let menu_btn = document.querySelector('.menu_btn .btn')
let menu = document.querySelector('.menu_btn')
let mobile_closed = document.querySelector('.mobile_closed')

menu_btn.addEventListener('click', () => {
  mobile_search_bar.classList.remove('active')
  menu.classList.toggle('active')
  if (
    mobile_search_bar.classList.contains('active') ||
    menu.classList.contains('active')
  ) {
    mobile_closed.classList.add('active')
  } else {
    mobile_closed.classList.remove('active')
  }
})

mobile_search.addEventListener('click', () => {
  menu.classList.remove('active')
  mobile_search_bar.classList.toggle('active')
  if (
    mobile_search_bar.classList.contains('active') ||
    menu.classList.contains('active')
  ) {
    mobile_closed.classList.add('active')
  } else {
    mobile_closed.classList.remove('active')
  }
})

mobile_closed.addEventListener('click', () => {
  mobile_search_bar.classList.remove('active')
  menu.classList.remove('active')
  mobile_closed.classList.remove('active')
})

/*聯絡我們 彈出窗*/
let send_msg = document.querySelector('.send_msg')
let pop_msg = document.querySelector('.pop_msg')
let pop_msg_closed = document.querySelector('.pop_msg .closed')
let pop_closed = document.querySelector('.pop_closed')

if (pop_msg) {
  document.addEventListener('click', (e) => {
    let pop_toggle = pop_msg.classList.contains('active')
    if (!pop_msg.contains(e.target) && pop_toggle) {
      pop_msg.classList.remove('active')
      pop_closed.classList.remove('active')
    } else if (e.target == send_msg && !pop_toggle) {
      pop_msg.classList.add('active')
      pop_closed.classList.add('active')
    } else if (e.target == pop_msg_closed && pop_toggle) {
      pop_msg.classList.remove('active')
      pop_closed.classList.remove('active')
    }
  })
}
