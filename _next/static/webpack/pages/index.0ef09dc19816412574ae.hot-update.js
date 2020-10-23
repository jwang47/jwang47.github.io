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
    floated: "right",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9yZXN1bWUuanMiXSwibmFtZXMiOlsiUmVzdW1lIiwicmVzdW1lIiwibG9jYXRpb25TdHIiLCJiYXNpY3MiLCJsb2NhdGlvbiIsImNpdHkiLCJyZWdpb24iLCJjb3VudHJ5Q29kZSIsInNraWxsU3RyIiwia2V5d29yZHMiLCJfIiwiam9pbiIsImxpbmtzQnlLZXkiLCJrZXlCeSIsImxpbmtzIiwicGFkZGluZ1RvcCIsIm5hbWUiLCJwcm9maWxlcyIsIm1hcCIsInByb2ZpbGUiLCJ1cmwiLCJpY29uIiwiZW1haWwiLCJza2lsbHMiLCJzZXQiLCJ3b3JrIiwiY29tcGFueSIsInBvc2l0aW9uIiwic3RhcnREYXRlIiwiZW5kRGF0ZSIsInN1bW1hcnkiLCJoaWdobGlnaHRzIiwiaGlnaGxpZ2h0IiwiaWR4Iiwid29ya0xpbmtzIiwibGluayIsImtleSIsImVkdWNhdGlvbiIsIml0ZW0iLCJpbnN0aXR1dGlvbiIsInN0dWR5VHlwZSIsImFyZWEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVlLFNBQVNBLE1BQVQsT0FBNEI7QUFBQTs7QUFBQSxNQUFWQyxNQUFVLFFBQVZBLE1BQVU7QUFDekMsTUFBTUMsV0FBVyxhQUFNRCxNQUFNLENBQUNFLE1BQVAsQ0FBY0MsUUFBZCxDQUF1QkMsSUFBN0IsZUFBc0NKLE1BQU0sQ0FBQ0UsTUFBUCxDQUFjQyxRQUFkLENBQXVCRSxNQUE3RCxlQUF3RUwsTUFBTSxDQUFDRSxNQUFQLENBQWNDLFFBQWQsQ0FBdUJHLFdBQS9GLENBQWpCOztBQUNBLE1BQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLFFBQUQ7QUFBQSxXQUFjQyw2Q0FBQyxDQUFDQyxJQUFGLENBQU9GLFFBQVAsRUFBaUIsSUFBakIsQ0FBZDtBQUFBLEdBQWpCOztBQUNBLE1BQU1HLFVBQVUsR0FBR0YsNkNBQUMsQ0FBQ0csS0FBRixDQUFRWixNQUFNLENBQUNhLEtB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TUFBQyxzREFBRCxDQUFNLE1BQU47QUFBYSxlQUFTLEVBQUMsT0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNHRCxJQUFJLENBQUNDLFdBRFIsQ0FERixFQUlFLE1BQUMsc0RBQUQsQ0FBTSxJQUFOO0FBQVcsV0FBSyxFQUFFO0FBQUUsaUJBQU87QUFBVCxPQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0dELElBQUksQ0FBQ1YsU0FEUixTQUNzQlUsSUFBSSxDQUFDVCxPQUQzQixDQUpGLEVBT0UsTUFBQyxzREFBRCxDQUFNLFdBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNHUyxJQUFJLENBQUNFLFNBRFIsVUFDdUJGLElBQUksQ0FBQ0csSUFENUIsQ0FQRixDQURGLENBREY7QUFlRCxHQWhCQSxDQURILENBREYsQ0FKRixDQW5HRixDQURGLENBREY7QUFrSUQ7S0F2SXVCekMsTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4wZWYwOWRjMTk4MTY0MTI1NzRhZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGl2aWRlciwgR3JpZCwgSGVhZGVyLCBJY29uLCBJdGVtLCBMaXN0IH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XG5pbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlc3VtZSh7IHJlc3VtZSB9KSB7XG4gIGNvbnN0IGxvY2F0aW9uU3RyID0gYCR7cmVzdW1lLmJhc2ljcy5sb2NhdGlvbi5jaXR5fSwgJHtyZXN1bWUuYmFzaWNzLmxvY2F0aW9uLnJlZ2lvbn0sICR7cmVzdW1lLmJhc2ljcy5sb2NhdGlvbi5jb3VudHJ5Q29kZX1gO1xuICBjb25zdCBza2lsbFN0ciA9IChrZXl3b3JkcykgPT4gXy5qb2luKGtleXdvcmRzLCBcIiwgXCIpO1xuICBjb25zdCBsaW5rc0J5S2V5ID0gXy5rZXlCeShyZXN1bWUubGlua3MsIFwia2V5XCIpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nVG9wOiBcIjI1cHhcIiB9fT5cbiAgICAgIDxHcmlkIHN0YWNrYWJsZT5cbiAgICAgICAgPEdyaWQuUm93PlxuICAgICAgICAgIDxHcmlkLkNvbHVtbiB3aWR0aD17MTJ9PlxuICAgICAgICAgICAgPEhlYWRlciBjbGFzc05hbWU9XCJiaWdcIj5cbiAgICAgICAgICAgICAgPHNwYW4+e3Jlc3VtZS5iYXNpY3MubmFtZX0gPC9zcGFuPlxuICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICB7cmVzdW1lLmJhc2ljcy5wcm9maWxlcyAmJlxuICAgICAgICAgICAgICAgICAgcmVzdW1lLmJhc2ljcy5wcm9maWxlcy5tYXAoKHByb2ZpbGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICA8YSBrZXk9e3Byb2ZpbGUudXJsfSBocmVmPXtwcm9maWxlLnVybH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBzaXplPVwic21hbGxcIiBjb2xvcj1cImJsYWNrXCIgbmFtZT17cHJvZmlsZS5pY29ufSAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L0hlYWRlcj5cbiAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxuICAgICAgICAgIDxHcmlkLkNvbHVtbiB3aWR0aD17NH0+XG4gICAgICAgICAgICA8TGlzdCBmbG9hdGVkPVwicmlnaHRcIj5cbiAgICAgICAgICAgICAgPExpc3QuSXRlbSBrZXk9XCJlbWFpbFwiPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9e2BtYWlsdG86JHtyZXN1bWUuYmFzaWNzLmVtYWlsfWB9PlxuICAgICAgICAgICAgICAgICAge3Jlc3VtZS5iYXNpY3MuZW1haWx9XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L0xpc3QuSXRlbT5cbiAgICAgICAgICAgICAgPExpc3QuSXRlbSBrZXk9XCJsb2NhdGlvblwiPntsb2NhdGlvblN0cn08L0xpc3QuSXRlbT5cbiAgICAgICAgICAgIDwvTGlzdD5cbiAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxuICAgICAgICA8L0dyaWQuUm93PlxuXG4gICAgICAgIDxEaXZpZGVyIC8+XG5cbiAgICAgICAgPEdyaWQuUm93PlxuICAgICAgICAgIDxHcmlkLkNvbHVtbiB3aWR0aD17M30+XG4gICAgICAgICAgICA8SGVhZGVyPlNraWxsczwvSGVhZGVyPlxuICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XG4gICAgICAgICAgPEdyaWQuQ29sdW1uIHdpZHRoPXsxM30+XG4gICAgICAgICAgICA8SXRlbS5Hcm91cD5cbiAgICAgICAgICAgICAgPExpc3Q+XG4gICAgICAgICAgICAgICAge3Jlc3VtZS5za2lsbHMubWFwKChzZXQpID0+IHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0Lkl0ZW0ga2V5PXtzZXQubmFtZX0+XG4gICAgICAgICAgICAgICAgICAgICAge3NraWxsU3RyKHNldC5rZXl3b3Jkcyl9XG4gICAgICAgICAgICAgICAgICAgIDwvTGlzdC5JdGVtPlxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgPC9MaXN0PlxuICAgICAgICAgICAgPC9JdGVtLkdyb3VwPlxuICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XG4gICAgICAgIDwvR3JpZC5Sb3c+XG5cbiAgICAgICAgPERpdmlkZXIgLz5cblxuICAgICAgICA8R3JpZC5Sb3c+XG4gICAgICAgICAgPEdyaWQuQ29sdW1uIHdpZHRoPXszfT5cbiAgICAgICAgICAgIDxIZWFkZXI+V29yazwvSGVhZGVyPlxuICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XG4gICAgICAgICAgPEdyaWQuQ29sdW1uIHdpZHRoPXsxM30+XG4gICAgICAgICAgICA8SXRlbS5Hcm91cD5cbiAgICAgICAgICAgICAge3Jlc3VtZS53b3JrLm1hcCgod29yaykgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8SXRlbSBrZXk9e3dvcmsuY29tcGFueX0+XG4gICAgICAgICAgICAgICAgICAgIDxJdGVtLkNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgPEl0ZW0uSGVhZGVyIGNsYXNzTmFtZT1cInNtYWxsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7d29yay5wb3NpdGlvbn0gYXQge3dvcmsuY29tcGFueX1cbiAgICAgICAgICAgICAgICAgICAgICA8L0l0ZW0uSGVhZGVyPlxuICAgICAgICAgICAgICAgICAgICAgIDxJdGVtLk1ldGE+XG4gICAgICAgICAgICAgICAgICAgICAgICB7d29yay5zdGFydERhdGV9IC0ge3dvcmsuZW5kRGF0ZX1cbiAgICAgICAgICAgICAgICAgICAgICA8L0l0ZW0uTWV0YT5cbiAgICAgICAgICAgICAgICAgICAgICA8SXRlbS5EZXNjcmlwdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPnt3b3JrLnN1bW1hcnl9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAge3dvcmsuaGlnaGxpZ2h0cy5tYXAoKGhpZ2hsaWdodCwgaWR4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8cCBrZXk9e2lkeH0+e2hpZ2hsaWdodH08L3A+O1xuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgPC9JdGVtLkRlc2NyaXB0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8L0l0ZW0uQ29udGVudD5cbiAgICAgICAgICAgICAgICAgIDwvSXRlbT5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvSXRlbS5Hcm91cD5cbiAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxuICAgICAgICA8L0dyaWQuUm93PlxuXG4gICAgICAgIDxHcmlkLlJvdz5cbiAgICAgICAgICA8R3JpZC5Db2x1bW4gd2lkdGg9ezN9PjwvR3JpZC5Db2x1bW4+XG4gICAgICAgICAgPEdyaWQuQ29sdW1uIHdpZHRoPXsxM30+XG4gICAgICAgICAgICA8TGlzdD5cbiAgICAgICAgICAgICAge3Jlc3VtZS53b3JrTGlua3MubWFwKChsaW5rKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxMaXN0Lkl0ZW0ga2V5PXtsaW5rLmtleX0+XG4gICAgICAgICAgICAgICAgICAgIFt7bGluay5rZXl9XSA8YSBocmVmPXtsaW5rLnVybH0+e2xpbmsudXJsfTwvYT5cbiAgICAgICAgICAgICAgICAgIDwvTGlzdC5JdGVtPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9MaXN0PlxuICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XG4gICAgICAgIDwvR3JpZC5Sb3c+XG5cbiAgICAgICAgPERpdmlkZXIgLz5cblxuICAgICAgICA8R3JpZC5Sb3c+XG4gICAgICAgICAgPEdyaWQuQ29sdW1uIHdpZHRoPXszfT5cbiAgICAgICAgICAgIDxIZWFkZXI+RWR1Y2F0aW9uPC9IZWFkZXI+XG4gICAgICAgICAgPC9HcmlkLkNvbHVtbj5cbiAgICAgICAgICA8R3JpZC5Db2x1bW4gd2lkdGg9ezEzfT5cbiAgICAgICAgICAgIDxJdGVtLkdyb3VwPlxuICAgICAgICAgICAgICB7cmVzdW1lLmVkdWNhdGlvbi5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPEl0ZW0ga2V5PXtpdGVtLmluc3RpdHV0aW9ufT5cbiAgICAgICAgICAgICAgICAgICAgPEl0ZW0uQ29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgICA8SXRlbS5IZWFkZXIgY2xhc3NOYW1lPVwic21hbGxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLmluc3RpdHV0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgIDwvSXRlbS5IZWFkZXI+XG4gICAgICAgICAgICAgICAgICAgICAgPEl0ZW0uTWV0YSBzdHlsZT17eyBmbG9hdDogXCJyaWdodFwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0uc3RhcnREYXRlfSAtIHtpdGVtLmVuZERhdGV9XG4gICAgICAgICAgICAgICAgICAgICAgPC9JdGVtLk1ldGE+XG4gICAgICAgICAgICAgICAgICAgICAgPEl0ZW0uRGVzY3JpcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5zdHVkeVR5cGV9IGluIHtpdGVtLmFyZWF9XG4gICAgICAgICAgICAgICAgICAgICAgPC9JdGVtLkRlc2NyaXB0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8L0l0ZW0uQ29udGVudD5cbiAgICAgICAgICAgICAgICAgIDwvSXRlbT5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvSXRlbS5Hcm91cD5cbiAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxuICAgICAgICA8L0dyaWQuUm93PlxuICAgICAgPC9HcmlkPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==