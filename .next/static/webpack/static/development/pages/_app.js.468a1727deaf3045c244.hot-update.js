webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./src/reducers/isDashboard.js":
/*!*************************************!*\
  !*** ./src/reducers/isDashboard.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const isDashboard = (state = false, action) => {
  switch (action.type) {
    case 'MOUSED_OVER_NEWS':
      return !state;

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (isDashboard);

/***/ }),

/***/ "./src/reducers/isNews.js":
/*!********************************!*\
  !*** ./src/reducers/isNews.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const isNews = (state = false, action) => {
  switch (action.type) {
    case 'MOUSED_OVER_DASHBOARD':
      return state = true;

    case 'MOUSED_OFF':
      return state = false;

    default:
      return state = false;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (isNews);

/***/ })

})
//# sourceMappingURL=_app.js.468a1727deaf3045c244.hot-update.js.map