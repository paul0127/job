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
let panels = $('.tabs_panel>li')
tabs.forEach((item) => {
  item.addEventListener('click', () => {
    let btn = item.dataset.local
    $('.tabs>li').removeClass('active')
    panels.removeClass('active')

    item.classList.add('active')

    let show = $('li.'+btn)
    show.addClass('active')
  })
})
