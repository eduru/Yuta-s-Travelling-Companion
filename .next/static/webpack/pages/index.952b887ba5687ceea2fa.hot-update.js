webpackHotUpdate_N_E("pages/index", {
  /***/ "./pages/api/flights/Index.js":
    /*!************************************!*\
  !*** ./pages/api/flights/Index.js ***!
  \************************************/
    /*! no exports provided */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      eval(
        '__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar country = "Dominica";\n\nvar fetchCountryData = /*#__PURE__*/function () {\n  var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n    var data;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.prev = 0;\n            _context.next = 3;\n            return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/UK/GBP/en-GB/", {\n              method: "GET",\n              headers: {\n                "content-type": "application/json",\n                "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",\n                "x-rapidapi-key": "f3b72532e5mshf3212aa087d7ef8p170d42jsnb3b9bd882b75",\n                useQueryString: true\n              },\n              params: {\n                query: "".concat(country)\n              }\n            });\n\n          case 3:\n            data = _context.sent;\n            console.log(data);\n            _context.next = 10;\n            break;\n\n          case 7:\n            _context.prev = 7;\n            _context.t0 = _context["catch"](0);\n            console.error(_context.t0);\n\n          case 10:\n          case "end":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[0, 7]]);\n  }));\n\n  return function fetchCountryData() {\n    return _ref.apply(this, arguments);\n  };\n}();\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we\'re in a\n    // browser context before continuing.\n    if (typeof self !== \'undefined\' &&\n        // AMP / No-JS mode does not inject these helpers:\n        \'$RefreshHelpers$\' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we\'ll check if it\'s\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we\'ll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it\'s possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXBpL2ZsaWdodHMvSW5kZXguanM/Y2JkOSJdLCJuYW1lcyI6WyJjb3VudHJ5IiwiZmV0Y2hDb3VudHJ5RGF0YSIsImF4aW9zIiwiZ2V0IiwibWV0aG9kIiwiaGVhZGVycyIsInVzZVF1ZXJ5U3RyaW5nIiwicGFyYW1zIiwicXVlcnkiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImVycm9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBRUEsSUFBTUEsT0FBTyxHQUFHLFVBQWhCOztBQUVBLElBQU1DLGdCQUFnQjtBQUFBLDhMQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFFRUMsNENBQUssQ0FBQ0MsR0FBTixDQUFVLDBHQUFWLEVBQXNIO0FBQ3JJQyxvQkFBTSxFQUFFLEtBRDZIO0FBRXJJQyxxQkFBTyxFQUFFO0FBQ0wsZ0NBQWdCLGtCQURYO0FBRUwsbUNBQW1CLHVEQUZkO0FBR0wsa0NBQWtCLG9EQUhiO0FBSUxDLDhCQUFjLEVBQUU7QUFKWCxlQUY0SDtBQVFySUMsb0JBQU0sRUFBRTtBQUNKQyxxQkFBSyxZQUFLUixPQUFMO0FBREQ7QUFSNkgsYUFBdEgsQ0FGRjs7QUFBQTtBQUVYUyxnQkFGVztBQWVqQkMsbUJBQU8sQ0FBQ0MsR0FBUixDQUFZRixJQUFaO0FBZmlCO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBaUJqQkMsbUJBQU8sQ0FBQ0UsS0FBUjs7QUFqQmlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQWhCWCxnQkFBZ0I7QUFBQTtBQUFBO0FBQUEsR0FBdEIiLCJmaWxlIjoiLi9wYWdlcy9hcGkvZmxpZ2h0cy9JbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuY29uc3QgY291bnRyeSA9IFwiRG9taW5pY2FcIlxuXG5jb25zdCBmZXRjaENvdW50cnlEYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBheGlvcy5nZXQoXCJodHRwczovL3NreXNjYW5uZXItc2t5c2Nhbm5lci1mbGlnaHQtc2VhcmNoLXYxLnAucmFwaWRhcGkuY29tL2FwaXNlcnZpY2VzL2F1dG9zdWdnZXN0L3YxLjAvVUsvR0JQL2VuLUdCL1wiLCB7XG4gICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgXCJjb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgICAgICAgXCJ4LXJhcGlkYXBpLWhvc3RcIjogXCJza3lzY2FubmVyLXNreXNjYW5uZXItZmxpZ2h0LXNlYXJjaC12MS5wLnJhcGlkYXBpLmNvbVwiLFxuICAgICAgICAgICAgICAgIFwieC1yYXBpZGFwaS1rZXlcIjogXCJmM2I3MjUzMmU1bXNoZjMyMTJhYTA4N2Q3ZWY4cDE3MGQ0MmpzbmIzYjliZDg4MmI3NVwiLFxuICAgICAgICAgICAgICAgIHVzZVF1ZXJ5U3RyaW5nOiB0cnVlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgIHF1ZXJ5OiBgJHtjb3VudHJ5fWAsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KVxuXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/flights/Index.js\n'
      );

      /***/
    }
});
