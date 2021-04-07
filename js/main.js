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

let tabs = document.querySelectorAll('.tabs>li')
tabs.forEach((item) => {
  item.addEventListener('click', () => {
    let btn = item.dataset.local
    tabs.forEach((el)=>{
      el.classList.remove('active')
    })
    item.classList.add('active')

    let hide = document.querySelector('.tabs_panel>li.active')
    hide.classList.remove('active')

    let show = document.querySelector('li.'+btn)
    show.classList.add('active')
  })
})

/*手機板主選單 開關*/
let menu_btn = document.querySelector('.menu_btn .btn')
let menu = document.querySelector('.menu_btn')
menu_btn.addEventListener('click',()=>{
  menu.classList.toggle('active')
})
