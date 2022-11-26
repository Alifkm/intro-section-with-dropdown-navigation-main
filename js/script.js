$(document).ready(function() {
  $('#bar').click(function() {
    $('body').toggleClass('dark');
    $('.image-section').toggleClass('dark');
    $('.content-section__button').toggleClass('dark');
    $('.content-section__logo-wrapper').toggleClass('dark');
    $('.nav__bar').toggleClass('open');
    $('.nav__menu').toggleClass('active');
  });

  // layout mobile
  $('#features').click(function() {
    $('.nav__item--left:nth-child(1) .nav__icon').toggleClass('active');
    $('.nav__menu-list--features').toggleClass('active');
  })

  $('#company').click(function() {
    $('.nav__item--left:nth-child(2) .nav__icon').toggleClass('active');
    $('.nav__menu-list--company').toggleClass('active');
  })

  // layout tab or desktop
  $('#features').hover(function() {
    $('.nav__item--left:nth-child(1) .nav__icon').toggleClass('active');
    $('.nav__menu-list--features').toggleClass('active');
  })

  $('#company').hover(function() {
    $('.nav__item--left:nth-child(2) .nav__icon').toggleClass('active');
    $('.nav__menu-list--company').toggleClass('active');
  })
});