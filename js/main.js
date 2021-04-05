$('.banner_slider').owlCarousel({
  loop: true,
  margin: 0,
  nav: false,
  dots:false,
  autoplay:true,
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
  dots:false,
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
  dots:false,
  responsive: {
    0: {
      items: 2,
    },
  },
})
