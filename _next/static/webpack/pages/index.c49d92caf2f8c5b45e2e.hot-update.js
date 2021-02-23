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
var _jsxFileName = "/home/jw/code/resume/components/resume.js";

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
  }, "Projects")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
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
  }, resume.projects.map(function (project) {
    return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Item"], {
      key: project.name,
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
    }, project.name), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Item"].Description, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 23
      }
    }, __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 25
      }
    }, project.summary))));
  })))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 9
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
    width: 3,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 11
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 13
    }
  }, "Education")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
    width: 13,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 11
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Item"].Group, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 13
    }
  }, resume.education.map(function (item) {
    return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Item"], {
      key: item.institution,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 19
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Item"].Content, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 21
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Item"].Header, {
      className: "small",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 23
      }
    }, item.institution), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Item"].Meta, {
      style: {
        "float": "right"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149,
        columnNumber: 23
      }
    }, item.startDate, " - ", item.endDate), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Item"].Description, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152,
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9yZXN1bWUuanMiXSwibmFtZXMiOlsiUmVzdW1lIiwicmVzdW1lIiwibG9jYXRpb25TdHIiLCJiYXNpY3MiLCJsb2NhdGlvbiIsImNpdHkiLCJyZWdpb24iLCJjb3VudHJ5Q29kZSIsInNraWxsU3RyIiwia2V5d29yZHMiLCJfIiwiam9pbiIsImxpbmtzQnlLZXkiLCJrZXlCeSIsImxpbmtzIiwicGFkZGluZ1RvcCIsIm5hbWUiLCJwcm9maWxlcyIsIm1hcCIsInByb2ZpbGUiLCJ1cmwiLCJpY29uIiwiZW1haWwiLCJza2lsbHMiLCJzZXQiLCJ3b3JrIiwiY29tcGFueSIsInBvc2l0aW9uIiwic3RhcnREYXRlIiwiZW5kRGF0ZSIsInN1bW1hcnkiLCJoaWdobGlnaHRzIiwiaGlnaGxpZ2h0IiwiaWR4IiwicHJvamVjdHMiLCJwcm9qZWN0IiwiZWR1Y2F0aW9uIiwiaXRlbSIsImluc3RpdHV0aW9uIiwic3R1ZHlUeXBlIiwiYXJlYSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRWUsU0FBU0EsTUFBVCxPQUE0QjtBQUFBOztBQUFBLE1BQVZDLE1BQVUsUUFBVkEsTUFBVTtBQUN6QyxNQUFNQyxXQUFXLGFBQU1ELE1BQU0sQ0FBQ0UsTUFBUCxDQUFjQyxRQUFkLENBQXVCQyxJQUE3QixlQUFzQ0osTUFBTSxDQUFDRSxNQUFQLENBQWNDLFFBQWQsQ0FBdUJFLE1BQTdELGVBQXdFTCxNQUFNLENBQUNFLE1BQVAsQ0FBY0MsUUFBZCxDQUF1QkcsV0FBL0YsQ0FBakI7O0FBQ0EsTUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsUUFBRDtBQUFBLFdBQWNDLDZDQUFDLENBQUNDLElBQUYsQ0FBT0YsUUFBUCxFQUFpQixJQUFqQixDQUFkO0FBQUEsR0FBakI7O0FBQ0EsTUFBTUcsVUFBVSxHQUFHRiw2Q0FBQyxDQUFDRyxLQUFGLENBQVFaLE1BQU0sQ0FBQ2EsS0FBZixF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QSxLQUNFLE1BQUMsc0RBQUQsQ0FBTSxLQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRzdCLE1BQU0sQ0FBQ21DLFNBQVAsQ0FBaUJsQixHQUFqQixDQUFxQixVQUFDbUIsSUFBRCxFQUFVO0FBQzlCLFdBQ0UsTUFBQyxzREFBRDtBQUFNLFNBQUcsRUFBRUEsSUFBSSxDQUFDQyxXQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyxzREFBRCxDQUFNLE9BQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsc0RBQUQsQ0FBTSxNQUFOO0FBQWEsZUFBUyxFQUFDLE9BQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDR0QsSUFBSSxDQUFDQyxXQURSLENBREYsRUFJRSxNQUFDLHNEQUFELENBQU0sSUFBTjtBQUFXLFdBQUssRUFBRTtBQUFFLGlCQUFPO0FBQVQsT0FBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNHRCxJQUFJLENBQUNULFNBRFIsU0FDc0JTLElBQUksQ0FBQ1IsT0FEM0IsQ0FKRixFQU9FLE1BQUMsc0RBQUQsQ0FBTSxXQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDR1EsSUFBSSxDQUFDRSxTQURSLFVBQ3VCRixJQUFJLENBQUNHLElBRDVCLENBUEYsQ0FERixDQURGO0FBZUQsR0FoQkEsQ0FESCxDQURGLENBSkYsQ0E3SEYsQ0FERixDQURGO0FBNEpEO0tBakt1QnhDLE0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYzQ5ZDkyY2FmMmY4YzViNDVlMmUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpdmlkZXIsIEdyaWQsIEhlYWRlciwgSWNvbiwgSXRlbSwgTGlzdCB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xuaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZXN1bWUoeyByZXN1bWUgfSkge1xuICBjb25zdCBsb2NhdGlvblN0ciA9IGAke3Jlc3VtZS5iYXNpY3MubG9jYXRpb24uY2l0eX0sICR7cmVzdW1lLmJhc2ljcy5sb2NhdGlvbi5yZWdpb259LCAke3Jlc3VtZS5iYXNpY3MubG9jYXRpb24uY291bnRyeUNvZGV9YDtcbiAgY29uc3Qgc2tpbGxTdHIgPSAoa2V5d29yZHMpID0+IF8uam9pbihrZXl3b3JkcywgXCIsIFwiKTtcbiAgY29uc3QgbGlua3NCeUtleSA9IF8ua2V5QnkocmVzdW1lLmxpbmtzLCBcImtleVwiKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZ1RvcDogXCIyNXB4XCIgfX0+XG4gICAgICA8R3JpZCBzdGFja2FibGU+XG4gICAgICAgIDxHcmlkLlJvdz5cbiAgICAgICAgICA8R3JpZC5Db2x1bW4gd2lkdGg9ezEyfT5cbiAgICAgICAgICAgIDxIZWFkZXIgY2xhc3NOYW1lPVwiYmlnXCI+XG4gICAgICAgICAgICAgIDxzcGFuPntyZXN1bWUuYmFzaWNzLm5hbWV9IDwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAge3Jlc3VtZS5iYXNpY3MucHJvZmlsZXMgJiZcbiAgICAgICAgICAgICAgICAgIHJlc3VtZS5iYXNpY3MucHJvZmlsZXMubWFwKChwcm9maWxlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgPGEga2V5PXtwcm9maWxlLnVybH0gaHJlZj17cHJvZmlsZS51cmx9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gc2l6ZT1cInNtYWxsXCIgY29sb3I9XCJibGFja1wiIG5hbWU9e3Byb2ZpbGUuaWNvbn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9IZWFkZXI+XG4gICAgICAgICAgPC9HcmlkLkNvbHVtbj5cbiAgICAgICAgICA8R3JpZC5Db2x1bW4gd2lkdGg9ezR9PlxuICAgICAgICAgICAgPExpc3Q+XG4gICAgICAgICAgICAgIDxMaXN0Lkl0ZW0ga2V5PVwiZW1haWxcIj5cbiAgICAgICAgICAgICAgICA8YSBocmVmPXtgbWFpbHRvOiR7cmVzdW1lLmJhc2ljcy5lbWFpbH1gfT5cbiAgICAgICAgICAgICAgICAgIHtyZXN1bWUuYmFzaWNzLmVtYWlsfVxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9MaXN0Lkl0ZW0+XG4gICAgICAgICAgICAgIDxMaXN0Lkl0ZW0ga2V5PVwibG9jYXRpb25cIj57bG9jYXRpb25TdHJ9PC9MaXN0Lkl0ZW0+XG4gICAgICAgICAgICA8L0xpc3Q+XG4gICAgICAgICAgPC9HcmlkLkNvbHVtbj5cbiAgICAgICAgPC9HcmlkLlJvdz5cblxuICAgICAgICA8RGl2aWRlciAvPlxuXG4gICAgICAgIDxHcmlkLlJvdz5cbiAgICAgICAgICA8R3JpZC5Db2x1bW4gd2lkdGg9ezN9PlxuICAgICAgICAgICAgPEhlYWRlcj5Ta2lsbHM8L0hlYWRlcj5cbiAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxuICAgICAgICAgIDxHcmlkLkNvbHVtbiB3aWR0aD17MTN9PlxuICAgICAgICAgICAgPEl0ZW0uR3JvdXA+XG4gICAgICAgICAgICAgIDxMaXN0PlxuICAgICAgICAgICAgICAgIHtyZXN1bWUuc2tpbGxzLm1hcCgoc2V0KSA9PiB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8TGlzdC5JdGVtIGtleT17c2V0Lm5hbWV9PlxuICAgICAgICAgICAgICAgICAgICAgIHtza2lsbFN0cihzZXQua2V5d29yZHMpfVxuICAgICAgICAgICAgICAgICAgICA8L0xpc3QuSXRlbT5cbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgIDwvTGlzdD5cbiAgICAgICAgICAgIDwvSXRlbS5Hcm91cD5cbiAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxuICAgICAgICA8L0dyaWQuUm93PlxuXG4gICAgICAgIDxEaXZpZGVyIC8+XG5cbiAgICAgICAgPEdyaWQuUm93PlxuICAgICAgICAgIDxHcmlkLkNvbHVtbiB3aWR0aD17M30+XG4gICAgICAgICAgICA8SGVhZGVyPldvcms8L0hlYWRlcj5cbiAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxuICAgICAgICAgIDxHcmlkLkNvbHVtbiB3aWR0aD17MTN9PlxuICAgICAgICAgICAgPEl0ZW0uR3JvdXA+XG4gICAgICAgICAgICAgIHtyZXN1bWUud29yay5tYXAoKHdvcmspID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPEl0ZW0ga2V5PXt3b3JrLmNvbXBhbnl9PlxuICAgICAgICAgICAgICAgICAgICA8SXRlbS5Db250ZW50PlxuICAgICAgICAgICAgICAgICAgICAgIDxJdGVtLkhlYWRlciBjbGFzc05hbWU9XCJzbWFsbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge3dvcmsucG9zaXRpb259IGF0IHt3b3JrLmNvbXBhbnl9XG4gICAgICAgICAgICAgICAgICAgICAgPC9JdGVtLkhlYWRlcj5cbiAgICAgICAgICAgICAgICAgICAgICA8SXRlbS5NZXRhPlxuICAgICAgICAgICAgICAgICAgICAgICAge3dvcmsuc3RhcnREYXRlfSAtIHt3b3JrLmVuZERhdGV9XG4gICAgICAgICAgICAgICAgICAgICAgPC9JdGVtLk1ldGE+XG4gICAgICAgICAgICAgICAgICAgICAgPEl0ZW0uRGVzY3JpcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD57d29yay5zdW1tYXJ5fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt3b3JrLmhpZ2hsaWdodHMubWFwKChoaWdobGlnaHQsIGlkeCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPHAga2V5PXtpZHh9PntoaWdobGlnaHR9PC9wPjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgIDwvSXRlbS5EZXNjcmlwdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9JdGVtLkNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICA8L0l0ZW0+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L0l0ZW0uR3JvdXA+XG4gICAgICAgICAgPC9HcmlkLkNvbHVtbj5cbiAgICAgICAgPC9HcmlkLlJvdz5cblxuICAgICAgICB7LyogPEdyaWQuUm93PlxuICAgICAgICAgIDxHcmlkLkNvbHVtbiB3aWR0aD17M30gY2xhc3NOYW1lPVwiemVyb1wiPjwvR3JpZC5Db2x1bW4+XG4gICAgICAgICAgPEdyaWQuQ29sdW1uIHdpZHRoPXsxM30+XG4gICAgICAgICAgICA8TGlzdD5cbiAgICAgICAgICAgICAge3Jlc3VtZS53b3JrTGlua3MubWFwKChsaW5rKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxMaXN0Lkl0ZW0ga2V5PXtsaW5rLmtleX0+XG4gICAgICAgICAgICAgICAgICAgIFt7bGluay5rZXl9XSA8YSBocmVmPXtsaW5rLnVybH0+e2xpbmsudXJsfTwvYT5cbiAgICAgICAgICAgICAgICAgIDwvTGlzdC5JdGVtPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9MaXN0PlxuICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XG4gICAgICAgIDwvR3JpZC5Sb3c+ICovfVxuXG4gICAgICAgIDxEaXZpZGVyIC8+XG5cbiAgICAgICAgPEdyaWQuUm93PlxuICAgICAgICAgIDxHcmlkLkNvbHVtbiB3aWR0aD17M30+XG4gICAgICAgICAgICA8SGVhZGVyPlByb2plY3RzPC9IZWFkZXI+XG4gICAgICAgICAgPC9HcmlkLkNvbHVtbj5cbiAgICAgICAgICA8R3JpZC5Db2x1bW4gd2lkdGg9ezEzfT5cbiAgICAgICAgICAgIDxJdGVtLkdyb3VwPlxuICAgICAgICAgICAgICB7cmVzdW1lLnByb2plY3RzLm1hcCgocHJvamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8SXRlbSBrZXk9e3Byb2plY3QubmFtZX0+XG4gICAgICAgICAgICAgICAgICAgIDxJdGVtLkNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgPEl0ZW0uSGVhZGVyIGNsYXNzTmFtZT1cInNtYWxsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7cHJvamVjdC5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgIDwvSXRlbS5IZWFkZXI+XG4gICAgICAgICAgICAgICAgICAgICAgPEl0ZW0uRGVzY3JpcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD57cHJvamVjdC5zdW1tYXJ5fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8L0l0ZW0uRGVzY3JpcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDwvSXRlbS5Db250ZW50PlxuICAgICAgICAgICAgICAgICAgPC9JdGVtPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9JdGVtLkdyb3VwPlxuICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XG4gICAgICAgIDwvR3JpZC5Sb3c+XG5cbiAgICAgICAgPERpdmlkZXIgLz5cblxuICAgICAgICA8R3JpZC5Sb3c+XG4gICAgICAgICAgPEdyaWQuQ29sdW1uIHdpZHRoPXszfT5cbiAgICAgICAgICAgIDxIZWFkZXI+RWR1Y2F0aW9uPC9IZWFkZXI+XG4gICAgICAgICAgPC9HcmlkLkNvbHVtbj5cbiAgICAgICAgICA8R3JpZC5Db2x1bW4gd2lkdGg9ezEzfT5cbiAgICAgICAgICAgIDxJdGVtLkdyb3VwPlxuICAgICAgICAgICAgICB7cmVzdW1lLmVkdWNhdGlvbi5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPEl0ZW0ga2V5PXtpdGVtLmluc3RpdHV0aW9ufT5cbiAgICAgICAgICAgICAgICAgICAgPEl0ZW0uQ29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgICA8SXRlbS5IZWFkZXIgY2xhc3NOYW1lPVwic21hbGxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLmluc3RpdHV0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgIDwvSXRlbS5IZWFkZXI+XG4gICAgICAgICAgICAgICAgICAgICAgPEl0ZW0uTWV0YSBzdHlsZT17eyBmbG9hdDogXCJyaWdodFwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0uc3RhcnREYXRlfSAtIHtpdGVtLmVuZERhdGV9XG4gICAgICAgICAgICAgICAgICAgICAgPC9JdGVtLk1ldGE+XG4gICAgICAgICAgICAgICAgICAgICAgPEl0ZW0uRGVzY3JpcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5zdHVkeVR5cGV9IGluIHtpdGVtLmFyZWF9XG4gICAgICAgICAgICAgICAgICAgICAgPC9JdGVtLkRlc2NyaXB0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8L0l0ZW0uQ29udGVudD5cbiAgICAgICAgICAgICAgICAgIDwvSXRlbT5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvSXRlbS5Hcm91cD5cbiAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxuICAgICAgICA8L0dyaWQuUm93PlxuICAgICAgPC9HcmlkPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==