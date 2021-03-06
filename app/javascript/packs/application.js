// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("turbolinks").start();
require("partial_replacement");

import JQuery from "jquery";
window.$ = window.JQuery = JQuery;

require("popper.js/dist/umd/popper");
//require('bootstrap/dist/js/bootstrap');
import "custom-bootstrap";
import "../utility/trubolink-patch";

// need google analytic is service worker, expose this globaly
import GoogleAnalytic from "../utility/analytic";
global.GoogleAnalytic = GoogleAnalytic;

require("service-worker-companion");

import "controllers";

document.addEventListener("turbolinks:request-start", function(event) {
  var xhr = event.data.xhr;
  xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
});

$(document).on("click", ".dropdown-menu", function(e) {
  // don't close dropdown on click, within
  e.stopPropagation();
});

require("../stylesheets/application.scss");

// fonts are moved to rails assets pipeline
//require.context("../fonts/quran_fonts", true);
//require.context("../images", true);
