webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ "./src/components/Layout.js");
/* harmony import */ var _components_Dock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Dock */ "./src/components/Dock.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Business__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Business */ "./src/components/Business.js");
/* harmony import */ var _components_Consumer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Consumer */ "./src/components/Consumer.js");
/* harmony import */ var _components_Menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Menu */ "./src/components/Menu.js");
/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Nav */ "./src/components/Nav.js");
/* harmony import */ var _components_Iris__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Iris */ "./src/components/Iris.js");
/* harmony import */ var _components_BalloonWrench__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/BalloonWrench */ "./src/components/BalloonWrench.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../reducers */ "./src/reducers/index.js");
var _jsxFileName = "/Users/websites/Documents/OEA-Redux/src/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;













const store = Object(redux__WEBPACK_IMPORTED_MODULE_10__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_12__["default"]);
const balloonWrench = "/balloon-wrench.svg";
const balloonWrenchFilled = "/balloon-wrench-filled.svg";
let isNews = false;
function Index() {
  const {
    0: state,
    1: setState
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])();
  state = {
    soundBoolean: false,
    balloonBoolean: true,
    panelOpen: false,
    businessBoolean: true,
    menuBoolean: true,
    navBoolean: true,
    irisBoolean: true
  };

  this.twirlFunction = () => {
    this.setState({
      businessBoolean: !this.state.businessBoolean
    });

    if (this.state.businessBoolean) {
      let business = document.querySelector(".business");
      business.style.display = "flex";
      let consumer = document.querySelector(".consumer");
      consumer.style.display = "none";
    } else if (!this.state.businessBoolean) {
      let consumer = document.querySelector(".consumer");
      consumer.style.display = "flex";
      let business = document.querySelector(".business");
      business.style.display = "none";
    }
  };

  this.soundFunction = () => {
    this.setState({
      soundBoolean: !this.state.soundBoolean
    });
  };

  this.menuFunction = () => {
    this.setState({
      menuBoolean: !this.state.menuBoolean
    });

    if (this.state.menuBoolean) {
      let menu = document.querySelector(".menu");
      menu.style.display = "flex";
      let mainContainer = document.querySelector(".main-container");
      mainContainer.style.display = "none";
    } else if (!this.state.menuBoolean) {
      let menu = document.querySelector(".menu");
      menu.style.display = "none";
      let mainContainer = document.querySelector(".main-container");
      mainContainer.style.display = "flex";
    }
  };

  this.navFunction = () => {
    this.setState({
      navBoolean: !this.state.navBoolean
    });

    if (this.state.navBoolean) {
      let nav = document.querySelector(".nav");
      nav.style.display = "flex";
      let mainContainer = document.querySelector(".main-container");
      mainContainer.style.display = "none";
    } else if (!this.state.navBoolean) {
      let nav = document.querySelector(".nav");
      nav.style.display = "none";
      let mainContainer = document.querySelector(".main-container");
      mainContainer.style.display = "flex";
    }
  };

  this.balloonFunction = () => {
    this.setState({
      balloonBoolean: !this.state.balloonBoolean
    });

    if (this.state.balloonBoolean) {
      let balloon = document.querySelector(".balloon-cursor");
      balloon.style.display = "flex";
      let balloonImage = document.querySelector(".balloon-image ");
      balloonImage.style.display = "flex";
      let indexParent = document.querySelector(".index-parent");
      indexParent.style.cursor = "none";
    } else if (!this.state.balloonBoolean) {
      let balloon = document.querySelector(".balloon-cursor");
      balloon.style.display = "none";
      let balloonImage = document.querySelector(".balloon-image ");
      balloonImage.style.display = "none";
      let indexParent = document.querySelector(".index-parent");
      indexParent.style.cursor = "default";
    }
  };

  this.irisFunction = () => {
    this.setState({
      irisBoolean: !this.state.irisBoolean
    });

    if (this.state.irisBoolean) {
      let iris = document.querySelector(".iris");
      iris.style.display = "flex";
      let mainContainer = document.querySelector(".main-container");
      mainContainer.style.display = "none";
    } else if (!this.state.irisBoolean) {
      let iris = document.querySelector(".iris");
      iris.style.display = "none";
      let mainContainer = document.querySelector(".main-container");
      mainContainer.style.display = "flex";
    }
  };

  return __jsx(react_redux__WEBPACK_IMPORTED_MODULE_11__["Provider"], {
    store: store,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }, __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3654663849" + " " + "index-parent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3654663849" + " " + "index-child",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }, __jsx(_components_Dock__WEBPACK_IMPORTED_MODULE_2__["default"], {
    iris: this.irisFunction,
    balloon: this.balloonFunction,
    nav: this.navFunction,
    twirl: this.twirlFunction,
    sound: this.soundFunction,
    menu: this.menuFunction,
    onClick: this.toggleDock,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-3654663849" + " " + "balloon-cursor",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }, __jsx("img", {
    src: isNews ? balloonWrench : balloonWrenchFilled,
    alt: "-",
    className: "jsx-3654663849" + " " + "balloon-image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-3654663849" + " " + "main-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3654663849" + " " + "business",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }, __jsx(_components_Business__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-3654663849" + " " + "consumer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  }, __jsx(_components_Consumer__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  }))), __jsx("div", {
    className: "jsx-3654663849" + " " + "menu-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3654663849" + " " + "menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  }, __jsx(_components_Menu__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  }))), __jsx("div", {
    className: "jsx-3654663849" + " " + "nav",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  }, __jsx(_components_Nav__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-3654663849" + " " + "balloon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }, __jsx(_components_BalloonWrench__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-3654663849" + " " + "iris",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: this
  }, __jsx(_components_Iris__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3654663849",
    __self: this
  }, ".index-parent.jsx-3654663849{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:1623px;height:2149px;background-image:url('./iPadRim.png');margin-top:30px;}.index-child.jsx-3654663849{-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.balloon-cursor.jsx-3654663849{position:absolute;border-radius:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);display:none;z-index:100;pointer-events:none;}.balloon-cursor.jsx-3654663849 img.jsx-3654663849{display:none;width:33px;height:33px;cursor:none;pointer-events:none;}.main-container.jsx-3654663849{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.consumer.jsx-3654663849{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-left:312px;}.business.jsx-3654663849{display:none;}.nav.jsx-3654663849{display:none;margin-left:30px;}.menu.jsx-3654663849{display:none;margin-left:30px;}.balloon.jsx-3654663849{display:none;margin-left:30px;}.iris.jsx-3654663849{display:none;margin-left:30px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ZWJzaXRlcy9Eb2N1bWVudHMvT0VBLVJlZHV4L3NyYy9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2SmdCLEFBSTRCLEFBVUksQUFJTCxBQVNMLEFBUUEsQUFLQSxBQUtBLEFBSUEsQUFLQSxBQUtBLEFBS0EsYUFwQ0YsQUFrQmYsQUFJcUIsQUFLQSxBQUtBLEFBS0EsS0E5Q0MsTUFVTixNQXNCaEIsQUFLQSxBQUtBLEFBS0EsTUE5Q29DLEFBVXBCLFlBQ1Esb0JBQ3hCLE1BSTJCLEFBS0wsa0JBQ3RCLENBckMyQixNQVUzQiwwQ0FNaUIsYUFDRCxZQUNRLE9BY3hCLGFBYkEsTUFsQmlCLGFBQ0MsY0FDd0Isc0NBQ3RCLGdCQUNkIiwiZmlsZSI6Ii9Vc2Vycy93ZWJzaXRlcy9Eb2N1bWVudHMvT0VBLVJlZHV4L3NyYy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuaW1wb3J0IERvY2sgZnJvbSAnLi4vY29tcG9uZW50cy9Eb2NrJztcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBCdXNpbmVzcyBmcm9tICcuLi9jb21wb25lbnRzL0J1c2luZXNzJztcbmltcG9ydCBDb25zdW1lciBmcm9tICcuLi9jb21wb25lbnRzL0NvbnN1bWVyJztcbmltcG9ydCBNZW51IGZyb20gJy4uL2NvbXBvbmVudHMvTWVudSc7XG5pbXBvcnQgTmF2IGZyb20gJy4uL2NvbXBvbmVudHMvTmF2JztcbmltcG9ydCBJcmlzIGZyb20gJy4uL2NvbXBvbmVudHMvSXJpcyc7XG5pbXBvcnQgQmFsbG9vbldyZW5jaCBmcm9tICcuLi9jb21wb25lbnRzL0JhbGxvb25XcmVuY2gnO1xuaW1wb3J0IHsgY3JlYXRlU3RvcmUgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBhbGxSZWR1Y2VyIGZyb20gJy4uL3JlZHVjZXJzJztcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5jb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKGFsbFJlZHVjZXIpO1xuY29uc3QgYmFsbG9vbldyZW5jaCA9IFwiL2JhbGxvb24td3JlbmNoLnN2Z1wiO1xuY29uc3QgYmFsbG9vbldyZW5jaEZpbGxlZCA9IFwiL2JhbGxvb24td3JlbmNoLWZpbGxlZC5zdmdcIlxubGV0IGlzTmV3cyA9IGZhbHNlOyBcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcblxuICAgIFxuICAgIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoKVxuICAgIHN0YXRlID0ge1xuICAgICAgICBzb3VuZEJvb2xlYW46IGZhbHNlLFxuICAgICAgICBiYWxsb29uQm9vbGVhbjogdHJ1ZSxcbiAgICAgICAgcGFuZWxPcGVuOiBmYWxzZSxcbiAgICAgICAgYnVzaW5lc3NCb29sZWFuOiB0cnVlLFxuICAgICAgICBtZW51Qm9vbGVhbjogdHJ1ZSxcbiAgICAgICAgbmF2Qm9vbGVhbjogdHJ1ZSxcbiAgICAgICAgaXJpc0Jvb2xlYW46IHRydWVcbiAgICB9XG5cblxuXG4gICAgdGhpcy50d2lybEZ1bmN0aW9uID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtidXNpbmVzc0Jvb2xlYW46ICF0aGlzLnN0YXRlLmJ1c2luZXNzQm9vbGVhbn0pXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmJ1c2luZXNzQm9vbGVhbikge1xuICAgICAgICAgICAgbGV0IGJ1c2luZXNzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idXNpbmVzc1wiKVxuICAgICAgICAgICAgYnVzaW5lc3Muc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiXG4gICAgICAgICAgICBsZXQgY29uc3VtZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnN1bWVyXCIpXG4gICAgICAgICAgICBjb25zdW1lci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcbiAgICAgICAgfSBlbHNlIGlmICghdGhpcy5zdGF0ZS5idXNpbmVzc0Jvb2xlYW4pIHtcbiAgICAgICAgICAgIGxldCBjb25zdW1lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29uc3VtZXJcIilcbiAgICAgICAgICAgIGNvbnN1bWVyLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIlxuICAgICAgICAgICAgbGV0IGJ1c2luZXNzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idXNpbmVzc1wiKVxuICAgICAgICAgICAgYnVzaW5lc3Muc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnNvdW5kRnVuY3Rpb24gPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3NvdW5kQm9vbGVhbjogIXRoaXMuc3RhdGUuc291bmRCb29sZWFufSlcbiAgICB9XG5cbiAgICB0aGlzLm1lbnVGdW5jdGlvbiA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bWVudUJvb2xlYW46ICF0aGlzLnN0YXRlLm1lbnVCb29sZWFufSlcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUubWVudUJvb2xlYW4pIHsgXG4gICAgICAgICAgICBsZXQgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudVwiKVxuICAgICAgICAgICAgbWVudS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCJcbiAgICAgICAgICAgIGxldCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluLWNvbnRhaW5lclwiKVxuICAgICAgICAgICAgbWFpbkNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcbiAgICAgICAgfSBlbHNlIGlmICghdGhpcy5zdGF0ZS5tZW51Qm9vbGVhbikge1xuICAgICAgICAgICAgbGV0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnVcIilcbiAgICAgICAgICAgIG1lbnUuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXG4gICAgICAgICAgICBsZXQgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi1jb250YWluZXJcIilcbiAgICAgICAgICAgIG1haW5Db250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLm5hdkZ1bmN0aW9uID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtuYXZCb29sZWFuOiAhdGhpcy5zdGF0ZS5uYXZCb29sZWFufSlcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUubmF2Qm9vbGVhbikgeyBcbiAgICAgICAgICAgIGxldCBuYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdlwiKVxuICAgICAgICAgICAgbmF2LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIlxuICAgICAgICAgICAgbGV0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4tY29udGFpbmVyXCIpXG4gICAgICAgICAgICBtYWluQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxuICAgICAgICB9IGVsc2UgaWYgKCF0aGlzLnN0YXRlLm5hdkJvb2xlYW4pIHtcbiAgICAgICAgICAgIGxldCBuYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdlwiKVxuICAgICAgICAgICAgbmF2LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxuICAgICAgICAgICAgbGV0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4tY29udGFpbmVyXCIpXG4gICAgICAgICAgICBtYWluQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIlxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5iYWxsb29uRnVuY3Rpb24gPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2JhbGxvb25Cb29sZWFuOiAhdGhpcy5zdGF0ZS5iYWxsb29uQm9vbGVhbn0pXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmJhbGxvb25Cb29sZWFuKSB7IFxuICAgICAgICAgICAgbGV0IGJhbGxvb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJhbGxvb24tY3Vyc29yXCIpXG4gICAgICAgICAgICBiYWxsb29uLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIlxuICAgICAgICAgICAgbGV0IGJhbGxvb25JbWFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmFsbG9vbi1pbWFnZSBcIilcbiAgICAgICAgICAgIGJhbGxvb25JbWFnZS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCJcbiAgICAgICAgICAgIGxldCBpbmRleFBhcmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5kZXgtcGFyZW50XCIpXG4gICAgICAgICAgICBpbmRleFBhcmVudC5zdHlsZS5jdXJzb3IgPSBcIm5vbmVcIlxuICAgICAgICB9IGVsc2UgaWYgKCF0aGlzLnN0YXRlLmJhbGxvb25Cb29sZWFuKSB7XG4gICAgICAgICAgICBsZXQgYmFsbG9vbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmFsbG9vbi1jdXJzb3JcIilcbiAgICAgICAgICAgIGJhbGxvb24uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXG4gICAgICAgICAgICBsZXQgYmFsbG9vbkltYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5iYWxsb29uLWltYWdlIFwiKVxuICAgICAgICAgICAgYmFsbG9vbkltYWdlLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxuICAgICAgICAgICAgbGV0IGluZGV4UGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbmRleC1wYXJlbnRcIilcbiAgICAgICAgICAgIGluZGV4UGFyZW50LnN0eWxlLmN1cnNvciA9IFwiZGVmYXVsdFwiXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmlyaXNGdW5jdGlvbiA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aXJpc0Jvb2xlYW46ICF0aGlzLnN0YXRlLmlyaXNCb29sZWFufSlcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuaXJpc0Jvb2xlYW4pIHtcbiAgICAgICAgICAgIGxldCBpcmlzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pcmlzXCIpXG4gICAgICAgICAgICBpcmlzLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIlxuICAgICAgICAgICAgbGV0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4tY29udGFpbmVyXCIpXG4gICAgICAgICAgICBtYWluQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxuICAgICAgICB9IGVsc2UgaWYgKCF0aGlzLnN0YXRlLmlyaXNCb29sZWFuKSB7XG4gICAgICAgICAgICBsZXQgaXJpcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaXJpc1wiKVxuICAgICAgICAgICAgaXJpcy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcbiAgICAgICAgICAgIGxldCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluLWNvbnRhaW5lclwiKVxuICAgICAgICAgICAgbWFpbkNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCJcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICA8TGF5b3V0PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5kZXgtcGFyZW50XCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJpbmRleC1jaGlsZFwiPlxuICAgIDxEb2NrIGlyaXM9e3RoaXMuaXJpc0Z1bmN0aW9ufSBiYWxsb29uPXt0aGlzLmJhbGxvb25GdW5jdGlvbn0gbmF2PXt0aGlzLm5hdkZ1bmN0aW9ufSB0d2lybD17dGhpcy50d2lybEZ1bmN0aW9ufSBzb3VuZD17IHRoaXMuc291bmRGdW5jdGlvbiB9IG1lbnU9e3RoaXMubWVudUZ1bmN0aW9ufSBvbkNsaWNrPXt0aGlzLnRvZ2dsZURvY2t9PjwvRG9jaz5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJhbGxvb24tY3Vyc29yXCI+PGltZyBjbGFzc05hbWU9XCJiYWxsb29uLWltYWdlXCIgc3JjPXtpc05ld3MgPyBiYWxsb29uV3JlbmNoIDogYmFsbG9vbldyZW5jaEZpbGxlZH0gYWx0PVwiLVwiLz48L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tY29udGFpbmVyXCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJidXNpbmVzc1wiPlxuICAgIDxCdXNpbmVzcz48L0J1c2luZXNzPlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb25zdW1lclwiPlxuICAgIDxDb25zdW1lcj48L0NvbnN1bWVyPlxuICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudS1jb250YWluZXJcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnVcIj5cbiAgICA8TWVudT48L01lbnU+XG4gICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgXG4gICAgPGRpdiBjbGFzc05hbWU9XCJuYXZcIj5cbiAgICA8TmF2PjwvTmF2PlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzc05hbWU9XCJiYWxsb29uXCI+XG4gICAgPEJhbGxvb25XcmVuY2g+PC9CYWxsb29uV3JlbmNoPlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzc05hbWU9XCJpcmlzXCI+XG4gICAgPElyaXM+PC9JcmlzPlxuICAgIDwvZGl2PlxuXG4gICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8c3R5bGUganN4PntgIFxuXG4gICAgLmluZGV4LXBhcmVudCB7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICB3aWR0aDogMTYyM3B4O1xuICAgICAgICBoZWlnaHQ6IDIxNDlweDtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuL2lQYWRSaW0ucG5nJyk7XG4gICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgICAgICAgfVxuICAgIFxuICAgIFxuICAgIC5pbmRleC1jaGlsZCB7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIH1cblxuICAgIC5iYWxsb29uLWN1cnNvciB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgei1pbmRleDogMTAwO1xuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICB9XG5cbiAgICAuYmFsbG9vbi1jdXJzb3IgaW1nIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgd2lkdGg6IDMzcHg7XG4gICAgICAgIGhlaWdodDogMzNweDtcbiAgICAgICAgY3Vyc29yOiBub25lO1xuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICB9XG5cbiAgICAubWFpbi1jb250YWluZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB9XG5cbiAgICAuY29uc3VtZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBtYXJnaW4tbGVmdDogMzEycHg7XG4gICAgfVxuXG4gICAgLmJ1c2luZXNzIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG5cbiAgICAubmF2e1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICBtYXJnaW4tbGVmdDogMzBweDtcbiAgICB9XG5cbiAgICAubWVudSB7IFxuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICBtYXJnaW4tbGVmdDogMzBweDtcbiAgICB9XG5cbiAgICAuYmFsbG9vbiB7IFxuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICBtYXJnaW4tbGVmdDogMzBweDtcbiAgICB9XG5cbiAgICAuaXJpcyB7IFxuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICBtYXJnaW4tbGVmdDogMzBweDtcbiAgICB9XG5cblxuXG4gIGB9PC9zdHlsZT5cbiAgICA8L0xheW91dD5cbiAgICA8L1Byb3ZpZGVyPlxuICAgICAgICApXG4gICAgfVxuXG5cblxuLy8gPHZpZGVvIHByZWxvYWQ9XCJhdXRvXCIgYXV0b1BsYXkgbG9vcCBjbGFzc05hbWU9XCJmdWxsc2NyZWVuLXZpZGVvXCIgd2lkdGg9XCIxNTM2XCIgaGVpZ2h0PVwiMjA0OFwiPlxuLy8gPHNvdXJjZSBzcmM9XCIvVHJlZS5tcDRcIiBcbi8vICAgICB0eXBlPVwidmlkZW8vbXA0XCI+PC9zb3VyY2U+XG4vLyAgIDwvdmlkZW8+XG5cbi8vIGNvbXBvbmVudERpZE1vdW50KCkge1xuLy8gICAgIGNvbnN0IHZpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZnVsbHNjcmVlbi12aWRlb1wiKVxuLy8gICAgIGNvbnNvbGUubG9nKHZpZClcbi8vICAgICB2aWQucGxheSgpXG4vLyB9XG4iXX0= */\n/*@ sourceURL=/Users/websites/Documents/OEA-Redux/src/pages/index.js */")));
} // <video preload="auto" autoPlay loop className="fullscreen-video" width="1536" height="2048">
// <source src="/Tree.mp4" 
//     type="video/mp4"></source>
//   </video>
// componentDidMount() {
//     const vid = document.querySelector(".fullscreen-video")
//     console.log(vid)
//     vid.play()
// }

/***/ })

})
//# sourceMappingURL=index.js.a9dc71458551eaac69d7.hot-update.js.map