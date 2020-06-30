document.addEventListener('DOMContentLoaded', function(){


  var catalogPopup = document.querySelector(".catalog-popup-off");
  var navigationCatalog = document.querySelector(".site-navigation__catalog");
  var crutch = document.querySelector(".site-navigation__catalog-crutch");
  var site = document.querySelector("body");
  var modal = document.querySelector(".modal-overlay");
  var modalButtonOpen = document.querySelector(".contact-button");
  var modalButtonClose = document.querySelector(".feedback-modal__button-close");
  var loginModal = document.querySelector(".login-modal");
  var loginButtonOpen = document.querySelector(".login-button");
  var loginModalOn = document.querySelector(".login-modal-off");
  var searchButton = document.querySelector(".search-button");
  var searchModal = document.querySelector(".modal-search");
  var searchModalOff = document.querySelector(".modal-search-off");
  var modalCartOff = document.querySelector(".modal-cart-off");
  var modalCard = document.querySelector(".modal-cart");
  var cart = document.querySelector(".cart-button-catalog");


  navigationCatalog.addEventListener("mouseover", function (evt) {
    evt.preventDefault();
    catalogPopup.classList.add("catalog-popup");
  });

  site.addEventListener("click", function () {
    catalogPopup.classList.remove("catalog-popup");
  });

  searchButton.addEventListener("mouseover", function () {
    searchModalOff.classList.add("modal-search");
  });

  loginButtonOpen.addEventListener("mouseover", function () {
    loginModal.classList.remove("login-modal-off");
  });

  modalButtonOpen.addEventListener("click", function () {
    modal.classList.add("modal-overlay-on");
  });

  modalButtonClose.addEventListener("click", function () {
    modal.classList.remove("modal-overlay-on");
  });

  cart.addEventListener("mouseover", function () {
    modalCartOff.classList.add("modal-cart");
  });

});
