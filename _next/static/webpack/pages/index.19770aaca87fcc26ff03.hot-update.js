webpackHotUpdate_N_E("pages/index",{

/***/ "./components/resume.js":
/*!******************************!*\
  !*** ./components/resume.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Resume; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/home/j/code/resume/components/resume.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Resume(_ref) {
  var _this = this;

  var resume = _ref.resume;
  var locationStr = "".concat(resume.basics.location.city, ", ").concat(resume.basics.location.region, ", ").concat(resume.basics.location.countryCode);

  var skillStr = function skillStr(keywords) {
    return lodash__WEBPACK_IMPORTED_MODULE_2___default.a.join(keywords, ", ");
  };

  var linksByKey = lodash__WEBPACK_IMPORTED_MODULE_2___default.a.keyBy(resume.links, "key");

  return __jsx("div", {
    style: {
      paddingTop: "25px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    stackable: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
    width: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 11
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"], {
    className: "big",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 15
    }
  }, resume.basics.name, " "), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 15
    }
  }, resume.basics.profiles && resume.basics.profiles.map(function (profile) {
    return __jsx("a", {
      key: profile.url,
      href: profile.url,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 23
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
      size: "small",
      color: "black",
      name: profile.icon,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 25
      }
    }));
  })))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
    width: 4,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Item, {
    key: "email",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 15
    }
  }, __jsx("a", {
    href: "mailto:".concat(resume.basics.email),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 17
    }
  }, resume.basics.email)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Item, {
    key: "location",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 15
    }
  }, locationStr)))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
    width: 3,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 11
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  }, "Skills")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
    width: 13,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 11
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Item"].Group, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 15
    }
  }, resume.skills.map(function (set) {
    return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Item, {
      key: set.name,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 21
      }
    }, skillStr(set.keywords));
  }))))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 9
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
    width: 3,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 11
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
    }
  }, "Work")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
    width: 13,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 11
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Item"].Group, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 13
    }
  }, resume.work.map(function (work) {
    return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Item"], {
      key: work.company,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 19
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Item"].Content, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 21
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Item"].Header, {
      className: "small",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 23
      }
    }, work.position, " at ", work.company), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Item"].Meta, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 23
      }
    }, work.startDate, " - ", work.endDate), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Item"].Description, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 23
      }
    }, __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 25
      }
    }, work.summary), work.highlights.map(function (highlight, idx) {
      return __jsx("p", {
        key: idx,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 34
        }
      }, highlight);
    }))));
  })))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
    width: 3,
    className: "zero",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 11
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
    width: 13,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 11
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 13
    }
  }, resume.workLinks.map(function (link) {
    return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Item, {
      key: link.key,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 19
      }
    }, "[", link.key, "] ", __jsx("a", {
      href: link.url,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 34
      }
    }, link.url));
  })))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 9
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
    width: 3,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 11
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 13
    }
  }, "Education")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
    width: 13,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 11
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Item"].Group, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 13
    }
  }, resume.education.map(function (item) {
    return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Item"], {
      key: item.institution,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 19
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Item"].Content, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 21
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Item"].Header, {
      className: "small",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 23
      }
    }, item.institution), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Item"].Meta, {
      style: {
        "float": "right"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 23
      }
    }, item.startDate, " - ", item.endDate), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Item"].Description, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 23
      }
    }, item.studyType, " in ", item.area)));
  }))))));
}
_c = Resume;

var _c;

$RefreshReg$(_c, "Resume");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9yZXN1bWUuanMiXSwibmFtZXMiOlsiUmVzdW1lIiwicmVzdW1lIiwibG9jYXRpb25TdHIiLCJiYXNpY3MiLCJsb2NhdGlvbiIsImNpdHkiLCJyZWdpb24iLCJjb3VudHJ5Q29kZSIsInNraWxsU3RyIiwia2V5d29yZHMiLCJfIiwiam9pbiIsImxpbmtzQnlLZXkiLCJrZXlCeSIsImxpbmtzIiwicGFkZGluZ1RvcCIsIm5hbWUiLCJwcm9maWxlcyIsIm1hcCIsInByb2ZpbGUiLCJ1cmwiLCJpY29uIiwiZW1haWwiLCJza2lsbHMiLCJzZXQiLCJ3b3JrIiwiY29tcGFueSIsInBvc2l0aW9uIiwic3RhcnREYXRlIiwiZW5kRGF0ZSIsInN1bW1hcnkiLCJoaWdobGlnaHRzIiwiaGlnaGxpZ2h0IiwiaWR4Iiwid29ya0xpbmtzIiwibGluayIsImtleSIsImVkdWNhdGlvbiIsIml0ZW0iLCJpbnN0aXR1dGlvbiIsInN0dWR5VHlwZSIsImFyZWEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVlLFNBQVNBLE1BQVQsT0FBNEI7QUFBQTs7QUFBQSxNQUFWQyxNQUFVLFFBQVZBLE1BQVU7QUFDekMsTUFBTUMsV0FBVyxhQUFNRCxNQUFNLENBQUNFLE1BQVAsQ0FBY0MsUUFBZCxDQUF1QkMsSUFBN0IsZUFBc0NKLE1BQU0sQ0FBQ0UsTUFBUCxDQUFjQyxRQUFkLENBQXVCRSxNQUE3RCxlQUF3RUwsTUFBTSxDQUFDRSxNQUFQLENBQWNDLFFBQWQsQ0FBdUJHLFdBQS9GLENBQWpCOztBQUNBLE1BQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLFFBQUQ7QUFBQSxXQUFjQyw2Q0FBQyxDQUFDQyxJQUFGLENBQU9GLFFBQVAsRUFBaUIsSUFBakIsQ0FBZDtBQUFBLEdBQWpCOztBQUNBLE1BQU1HLFVBQVUsR0FBR0YsNkNBQUMsQ0FBQ0csS0FBRixDQUFRWixNQUFNLENBQUNhLEtB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RSxNQUFDLHNEQUFELENBQU0sTUFBTjtBQUFhLGVBQVMsRUFBQyxPQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0dELElBQUksQ0FBQ0MsV0FEUixDQURGLEVBSUUsTUFBQyxzREFBRCxDQUFNLElBQU47QUFBVyxXQUFLLEVBQUU7QUFBRSxpQkFBTztBQUFULE9BQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDR0QsSUFBSSxDQUFDVixTQURSLFNBQ3NCVSxJQUFJLENBQUNULE9BRDNCLENBSkYsRUFPRSxNQUFDLHNEQUFELENBQU0sV0FBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0dTLElBQUksQ0FBQ0UsU0FEUixVQUN1QkYsSUFBSSxDQUFDRyxJQUQ1QixDQVBGLENBREYsQ0FERjtBQWVELEdBaEJBLENBREgsQ0FERixDQUpGLENBbkdGLENBREYsQ0FERjtBQWtJRDtLQXZJdUJ6QyxNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjE5NzcwYWFjYTg3ZmNjMjZmZjAzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXZpZGVyLCBHcmlkLCBIZWFkZXIsIEljb24sIEl0ZW0sIExpc3QgfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcbmltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmVzdW1lKHsgcmVzdW1lIH0pIHtcbiAgY29uc3QgbG9jYXRpb25TdHIgPSBgJHtyZXN1bWUuYmFzaWNzLmxvY2F0aW9uLmNpdHl9LCAke3Jlc3VtZS5iYXNpY3MubG9jYXRpb24ucmVnaW9ufSwgJHtyZXN1bWUuYmFzaWNzLmxvY2F0aW9uLmNvdW50cnlDb2RlfWA7XG4gIGNvbnN0IHNraWxsU3RyID0gKGtleXdvcmRzKSA9PiBfLmpvaW4oa2V5d29yZHMsIFwiLCBcIik7XG4gIGNvbnN0IGxpbmtzQnlLZXkgPSBfLmtleUJ5KHJlc3VtZS5saW5rcywgXCJrZXlcIik7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmdUb3A6IFwiMjVweFwiIH19PlxuICAgICAgPEdyaWQgc3RhY2thYmxlPlxuICAgICAgICA8R3JpZC5Sb3c+XG4gICAgICAgICAgPEdyaWQuQ29sdW1uIHdpZHRoPXsxMn0+XG4gICAgICAgICAgICA8SGVhZGVyIGNsYXNzTmFtZT1cImJpZ1wiPlxuICAgICAgICAgICAgICA8c3Bhbj57cmVzdW1lLmJhc2ljcy5uYW1lfSA8L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgIHtyZXN1bWUuYmFzaWNzLnByb2ZpbGVzICYmXG4gICAgICAgICAgICAgICAgICByZXN1bWUuYmFzaWNzLnByb2ZpbGVzLm1hcCgocHJvZmlsZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxhIGtleT17cHJvZmlsZS51cmx9IGhyZWY9e3Byb2ZpbGUudXJsfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIHNpemU9XCJzbWFsbFwiIGNvbG9yPVwiYmxhY2tcIiBuYW1lPXtwcm9maWxlLmljb259IC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvSGVhZGVyPlxuICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XG4gICAgICAgICAgPEdyaWQuQ29sdW1uIHdpZHRoPXs0fT5cbiAgICAgICAgICAgIDxMaXN0PlxuICAgICAgICAgICAgICA8TGlzdC5JdGVtIGtleT1cImVtYWlsXCI+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj17YG1haWx0bzoke3Jlc3VtZS5iYXNpY3MuZW1haWx9YH0+XG4gICAgICAgICAgICAgICAgICB7cmVzdW1lLmJhc2ljcy5lbWFpbH1cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvTGlzdC5JdGVtPlxuICAgICAgICAgICAgICA8TGlzdC5JdGVtIGtleT1cImxvY2F0aW9uXCI+e2xvY2F0aW9uU3RyfTwvTGlzdC5JdGVtPlxuICAgICAgICAgICAgPC9MaXN0PlxuICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XG4gICAgICAgIDwvR3JpZC5Sb3c+XG5cbiAgICAgICAgPERpdmlkZXIgLz5cblxuICAgICAgICA8R3JpZC5Sb3c+XG4gICAgICAgICAgPEdyaWQuQ29sdW1uIHdpZHRoPXszfT5cbiAgICAgICAgICAgIDxIZWFkZXI+U2tpbGxzPC9IZWFkZXI+XG4gICAgICAgICAgPC9HcmlkLkNvbHVtbj5cbiAgICAgICAgICA8R3JpZC5Db2x1bW4gd2lkdGg9ezEzfT5cbiAgICAgICAgICAgIDxJdGVtLkdyb3VwPlxuICAgICAgICAgICAgICA8TGlzdD5cbiAgICAgICAgICAgICAgICB7cmVzdW1lLnNraWxscy5tYXAoKHNldCkgPT4ge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPExpc3QuSXRlbSBrZXk9e3NldC5uYW1lfT5cbiAgICAgICAgICAgICAgICAgICAgICB7c2tpbGxTdHIoc2V0LmtleXdvcmRzKX1cbiAgICAgICAgICAgICAgICAgICAgPC9MaXN0Lkl0ZW0+XG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICA8L0xpc3Q+XG4gICAgICAgICAgICA8L0l0ZW0uR3JvdXA+XG4gICAgICAgICAgPC9HcmlkLkNvbHVtbj5cbiAgICAgICAgPC9HcmlkLlJvdz5cblxuICAgICAgICA8RGl2aWRlciAvPlxuXG4gICAgICAgIDxHcmlkLlJvdz5cbiAgICAgICAgICA8R3JpZC5Db2x1bW4gd2lkdGg9ezN9PlxuICAgICAgICAgICAgPEhlYWRlcj5Xb3JrPC9IZWFkZXI+XG4gICAgICAgICAgPC9HcmlkLkNvbHVtbj5cbiAgICAgICAgICA8R3JpZC5Db2x1bW4gd2lkdGg9ezEzfT5cbiAgICAgICAgICAgIDxJdGVtLkdyb3VwPlxuICAgICAgICAgICAgICB7cmVzdW1lLndvcmsubWFwKCh3b3JrKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxJdGVtIGtleT17d29yay5jb21wYW55fT5cbiAgICAgICAgICAgICAgICAgICAgPEl0ZW0uQ29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgICA8SXRlbS5IZWFkZXIgY2xhc3NOYW1lPVwic21hbGxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt3b3JrLnBvc2l0aW9ufSBhdCB7d29yay5jb21wYW55fVxuICAgICAgICAgICAgICAgICAgICAgIDwvSXRlbS5IZWFkZXI+XG4gICAgICAgICAgICAgICAgICAgICAgPEl0ZW0uTWV0YT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt3b3JrLnN0YXJ0RGF0ZX0gLSB7d29yay5lbmREYXRlfVxuICAgICAgICAgICAgICAgICAgICAgIDwvSXRlbS5NZXRhPlxuICAgICAgICAgICAgICAgICAgICAgIDxJdGVtLkRlc2NyaXB0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3dvcmsuc3VtbWFyeX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICB7d29yay5oaWdobGlnaHRzLm1hcCgoaGlnaGxpZ2h0LCBpZHgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxwIGtleT17aWR4fT57aGlnaGxpZ2h0fTwvcD47XG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICA8L0l0ZW0uRGVzY3JpcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDwvSXRlbS5Db250ZW50PlxuICAgICAgICAgICAgICAgICAgPC9JdGVtPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9JdGVtLkdyb3VwPlxuICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XG4gICAgICAgIDwvR3JpZC5Sb3c+XG5cbiAgICAgICAgPEdyaWQuUm93PlxuICAgICAgICAgIDxHcmlkLkNvbHVtbiB3aWR0aD17M30gY2xhc3NOYW1lPVwiemVyb1wiPjwvR3JpZC5Db2x1bW4+XG4gICAgICAgICAgPEdyaWQuQ29sdW1uIHdpZHRoPXsxM30+XG4gICAgICAgICAgICA8TGlzdD5cbiAgICAgICAgICAgICAge3Jlc3VtZS53b3JrTGlua3MubWFwKChsaW5rKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxMaXN0Lkl0ZW0ga2V5PXtsaW5rLmtleX0+XG4gICAgICAgICAgICAgICAgICAgIFt7bGluay5rZXl9XSA8YSBocmVmPXtsaW5rLnVybH0+e2xpbmsudXJsfTwvYT5cbiAgICAgICAgICAgICAgICAgIDwvTGlzdC5JdGVtPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9MaXN0PlxuICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XG4gICAgICAgIDwvR3JpZC5Sb3c+XG5cbiAgICAgICAgPERpdmlkZXIgLz5cblxuICAgICAgICA8R3JpZC5Sb3c+XG4gICAgICAgICAgPEdyaWQuQ29sdW1uIHdpZHRoPXszfT5cbiAgICAgICAgICAgIDxIZWFkZXI+RWR1Y2F0aW9uPC9IZWFkZXI+XG4gICAgICAgICAgPC9HcmlkLkNvbHVtbj5cbiAgICAgICAgICA8R3JpZC5Db2x1bW4gd2lkdGg9ezEzfT5cbiAgICAgICAgICAgIDxJdGVtLkdyb3VwPlxuICAgICAgICAgICAgICB7cmVzdW1lLmVkdWNhdGlvbi5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPEl0ZW0ga2V5PXtpdGVtLmluc3RpdHV0aW9ufT5cbiAgICAgICAgICAgICAgICAgICAgPEl0ZW0uQ29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgICA8SXRlbS5IZWFkZXIgY2xhc3NOYW1lPVwic21hbGxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLmluc3RpdHV0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgIDwvSXRlbS5IZWFkZXI+XG4gICAgICAgICAgICAgICAgICAgICAgPEl0ZW0uTWV0YSBzdHlsZT17eyBmbG9hdDogXCJyaWdodFwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0uc3RhcnREYXRlfSAtIHtpdGVtLmVuZERhdGV9XG4gICAgICAgICAgICAgICAgICAgICAgPC9JdGVtLk1ldGE+XG4gICAgICAgICAgICAgICAgICAgICAgPEl0ZW0uRGVzY3JpcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5zdHVkeVR5cGV9IGluIHtpdGVtLmFyZWF9XG4gICAgICAgICAgICAgICAgICAgICAgPC9JdGVtLkRlc2NyaXB0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8L0l0ZW0uQ29udGVudD5cbiAgICAgICAgICAgICAgICAgIDwvSXRlbT5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvSXRlbS5Hcm91cD5cbiAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxuICAgICAgICA8L0dyaWQuUm93PlxuICAgICAgPC9HcmlkPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==