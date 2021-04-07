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

$('.news_slider').owlCarousel({
  loop: true,
  margin: 30,
  nav: true,
  dots: false,
  responsive: {
    0: {
      items: 2,
    },
  },
})

$('.table_slider').owlCarousel({
  loop: false,
  margin: 30,
  nav: true,
  dots: false,
  responsive: {
    0: {
      items: 1,
    },
  },
})

/*頁尾選單 開合*/
let footer_menu = document.querySelector('.footer_menu')
let footer_menu_btn = document.querySelector('.footer_menu_btn')

const footer_menu_height = footer_menu.offsetHeight
footer_menu.setAttribute('style', 'height: ' + footer_menu_height + 'px')

footer_menu_btn.addEventListener('click', () => {
  footer_menu_btn.classList.toggle('closed')
  if (footer_menu_btn.classList.contains('closed')) {
    footer_menu.setAttribute('style', 'height: 0')
  } else {
    footer_menu.setAttribute('style', 'height: ' + footer_menu_height + 'px')
  }
  console.log(footer_menu.offsetHeight)
})

let search = document.querySelector('.head .search_btn')
let search_bar = document.querySelector('.head .search_bar')

let closed = document.querySelector('.head .close')
search.addEventListener('click',()=>{
  search_bar.classList.toggle('active')
  if(search_bar.classList.contains('active')){
    closed.classList.add('active')
  }
})

closed.addEventListener('click',()=>{
  search_bar.classList.remove('active')
  closed.classList.remove('active')
})

/*手機板主選單 搜尋 開關*/
let mobile_search = document.querySelector('.mobile_head .search_btn .btn')
let mobile_search_bar = document.querySelector('.mobile_head .search_btn')

let menu_btn = document.querySelector('.menu_btn .btn')
let menu = document.querySelector('.menu_btn')

let mobile_closed = document.querySelector('.mobile_head .close')
menu_btn.addEventListener('click',()=>{
  mobile_search_bar.classList.remove('active')
  menu.classList.toggle('active')
  if(mobile_search_bar.classList.contains('active') || menu.classList.contains('active')){
    mobile_closed.classList.add('active')
  }
})

mobile_search.addEventListener('click',()=>{
  menu.classList.remove('active')
  mobile_search_bar.classList.toggle('active')
  if(mobile_search_bar.classList.contains('active') || menu.classList.contains('active')){
    mobile_closed.classList.add('active')
  }
})

mobile_closed.addEventListener('click',()=>{
  mobile_search_bar.classList.remove('active')
  menu.classList.remove('active')
  mobile_closed.classList.remove('active')
})

