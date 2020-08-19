webpackHotUpdate_N_E("pages/index", {
  /***/ "./pages/api/flights/Index.js":
    /*!************************************!*\
  !*** ./pages/api/flights/Index.js ***!
  \************************************/
    /*! no exports provided */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      eval(
        '__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar country = "Japan";\n\nvar fetchPlacesData = /*#__PURE__*/function () {\n  var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n    var _yield$axios$get, Places;\n\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.prev = 0;\n            _context.next = 3;\n            return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/UK/GBP/en-GB/", {\n              headers: {\n                "content-type": "application/json",\n                "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",\n                "x-rapidapi-key": "f3b72532e5mshf3212aa087d7ef8p170d42jsnb3b9bd882b75",\n                useQueryString: true\n              },\n              params: {\n                query: "".concat(country)\n              }\n            });\n\n          case 3:\n            _yield$axios$get = _context.sent;\n            Places = _yield$axios$get.data.Places;\n            Places.map(function (location) {\n              return console.log(location.PlaceName);\n            });\n            _context.next = 11;\n            break;\n\n          case 8:\n            _context.prev = 8;\n            _context.t0 = _context["catch"](0);\n            console.error(_context.t0);\n\n          case 11:\n          case "end":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[0, 8]]);\n  }));\n\n  return function fetchPlacesData() {\n    return _ref.apply(this, arguments);\n  };\n}();\n\nfetchPlacesData();\n\nvar fetchRoutesData = /*#__PURE__*/function () {\n  var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {\n    var data;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            _context2.prev = 0;\n            _context2.next = 3;\n            return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browseroutes/v1.0/US/USD/en-US/SFO-sky/ORD-sky/2019-09-01", {\n              headers: {\n                "content-type": "application/json",\n                "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",\n                "x-rapidapi-key": "c573d899fbmsh7f790eccbfa07a7p17edf7jsnf6b3cf11be53",\n                useQueryString: true\n              },\n              params: {\n                "inboundpartialdate": "2019-12-01"\n              }\n            });\n\n          case 3:\n            data = _context2.sent;\n            _context2.next = 9;\n            break;\n\n          case 6:\n            _context2.prev = 6;\n            _context2.t0 = _context2["catch"](0);\n            console.log(_context2.t0);\n\n          case 9:\n          case "end":\n            return _context2.stop();\n        }\n      }\n    }, _callee2, null, [[0, 6]]);\n  }));\n\n  return function fetchRoutesData() {\n    return _ref2.apply(this, arguments);\n  };\n}();\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we\'re in a\n    // browser context before continuing.\n    if (typeof self !== \'undefined\' &&\n        // AMP / No-JS mode does not inject these helpers:\n        \'$RefreshHelpers$\' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we\'ll check if it\'s\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we\'ll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it\'s possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXBpL2ZsaWdodHMvSW5kZXguanM/Y2JkOSJdLCJuYW1lcyI6WyJjb3VudHJ5IiwiZmV0Y2hQbGFjZXNEYXRhIiwiYXhpb3MiLCJnZXQiLCJoZWFkZXJzIiwidXNlUXVlcnlTdHJpbmciLCJwYXJhbXMiLCJxdWVyeSIsIlBsYWNlcyIsImRhdGEiLCJtYXAiLCJsb2NhdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJQbGFjZU5hbWUiLCJlcnJvciIsImZldGNoUm91dGVzRGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUVBLElBQU1BLE9BQU8sR0FBRyxPQUFoQjs7QUFFQSxJQUFNQyxlQUFlO0FBQUEsOExBQUc7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFFbUJDLDRDQUFLLENBQUNDLEdBQU4sQ0FBVSwwR0FBVixFQUFzSDtBQUNySkMscUJBQU8sRUFBRTtBQUNMLGdDQUFnQixrQkFEWDtBQUVMLG1DQUFtQix1REFGZDtBQUdMLGtDQUFrQixvREFIYjtBQUlMQyw4QkFBYyxFQUFFO0FBSlgsZUFENEk7QUFPckpDLG9CQUFNLEVBQUU7QUFDSkMscUJBQUssWUFBS1AsT0FBTDtBQUREO0FBUDZJLGFBQXRILENBRm5COztBQUFBO0FBQUE7QUFFQVEsa0JBRkEsb0JBRVJDLElBRlEsQ0FFQUQsTUFGQTtBQWNoQkEsa0JBQU0sQ0FBQ0UsR0FBUCxDQUFXLFVBQUFDLFFBQVE7QUFBQSxxQkFBSUMsT0FBTyxDQUFDQyxHQUFSLENBQVlGLFFBQVEsQ0FBQ0csU0FBckIsQ0FBSjtBQUFBLGFBQW5CO0FBZGdCO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBa0JoQkYsbUJBQU8sQ0FBQ0csS0FBUjs7QUFsQmdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQWZkLGVBQWU7QUFBQTtBQUFBO0FBQUEsR0FBckI7O0FBc0JBQSxlQUFlOztBQUVmLElBQU1lLGVBQWU7QUFBQSwrTEFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBR0dkLDRDQUFLLENBQUNDLEdBQU4sQ0FBVSxxSUFBVixFQUFpSjtBQUNoS0MscUJBQU8sRUFBRTtBQUNULGdDQUFpQixrQkFEUjtBQUVULG1DQUFtQix1REFGVjtBQUdULGtDQUFrQixvREFIVDtBQUlUQyw4QkFBYyxFQUFFO0FBSlAsZUFEdUo7QUFPaEtDLG9CQUFNLEVBQUM7QUFDUCxzQ0FBcUI7QUFEZDtBQVB5SixhQUFqSixDQUhIOztBQUFBO0FBR1ZHLGdCQUhVO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFpQmhCRyxtQkFBTyxDQUFDQyxHQUFSOztBQWpCZ0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBZkcsZUFBZTtBQUFBO0FBQUE7QUFBQSxHQUFyQiIsImZpbGUiOiIuL3BhZ2VzL2FwaS9mbGlnaHRzL0luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5jb25zdCBjb3VudHJ5ID0gXCJKYXBhblwiXG5cbmNvbnN0IGZldGNoUGxhY2VzRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCB7IGRhdGE6IHsgUGxhY2VzIH0gfSA9IGF3YWl0IGF4aW9zLmdldChcImh0dHBzOi8vc2t5c2Nhbm5lci1za3lzY2FubmVyLWZsaWdodC1zZWFyY2gtdjEucC5yYXBpZGFwaS5jb20vYXBpc2VydmljZXMvYXV0b3N1Z2dlc3QvdjEuMC9VSy9HQlAvZW4tR0IvXCIsIHtcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICBcImNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICAgICAgICBcIngtcmFwaWRhcGktaG9zdFwiOiBcInNreXNjYW5uZXItc2t5c2Nhbm5lci1mbGlnaHQtc2VhcmNoLXYxLnAucmFwaWRhcGkuY29tXCIsXG4gICAgICAgICAgICAgICAgXCJ4LXJhcGlkYXBpLWtleVwiOiBcImYzYjcyNTMyZTVtc2hmMzIxMmFhMDg3ZDdlZjhwMTcwZDQyanNuYjNiOWJkODgyYjc1XCIsXG4gICAgICAgICAgICAgICAgdXNlUXVlcnlTdHJpbmc6IHRydWUsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgcXVlcnk6IGAke2NvdW50cnl9YCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pXG5cbiAgICAgICAgUGxhY2VzLm1hcChsb2NhdGlvbiA9PiBjb25zb2xlLmxvZyhsb2NhdGlvbi5QbGFjZU5hbWUpKVxuXG5cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgIH1cbn1cblxuZmV0Y2hQbGFjZXNEYXRhKCk7XG5cbmNvbnN0IGZldGNoUm91dGVzRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgICBcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGF4aW9zLmdldChcImh0dHBzOi8vc2t5c2Nhbm5lci1za3lzY2FubmVyLWZsaWdodC1zZWFyY2gtdjEucC5yYXBpZGFwaS5jb20vYXBpc2VydmljZXMvYnJvd3Nlcm91dGVzL3YxLjAvVVMvVVNEL2VuLVVTL1NGTy1za3kvT1JELXNreS8yMDE5LTA5LTAxXCIsIHsgXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBcImNvbnRlbnQtdHlwZVwiIDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgICBcIngtcmFwaWRhcGktaG9zdFwiOiBcInNreXNjYW5uZXItc2t5c2Nhbm5lci1mbGlnaHQtc2VhcmNoLXYxLnAucmFwaWRhcGkuY29tXCIsXG4gICAgICAgICAgICBcIngtcmFwaWRhcGkta2V5XCI6IFwiYzU3M2Q4OTlmYm1zaDdmNzkwZWNjYmZhMDdhN3AxN2VkZjdqc25mNmIzY2YxMWJlNTNcIixcbiAgICAgICAgICAgIHVzZVF1ZXJ5U3RyaW5nOiB0cnVlXG4gICAgICAgICAgICB9LCBcbiAgICAgICAgICAgIHBhcmFtczp7XG4gICAgICAgICAgICBcImluYm91bmRwYXJ0aWFsZGF0ZVwiOlwiMjAxOS0xMi0wMVwiXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cblxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/flights/Index.js\n'
      );

      /***/
    }
});
