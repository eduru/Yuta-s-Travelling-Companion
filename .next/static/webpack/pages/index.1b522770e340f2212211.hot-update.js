webpackHotUpdate_N_E("pages/index", {
  /***/ "./pages/api/flights sync recursive":
    /*!********************************!*\
  !*** ./pages/api/flights sync ***!
  \********************************/
    /*! no static exports found */
    /***/ function(module, exports) {
      eval(
        'function webpackEmptyContext(req) {\n\tvar e = new Error("Cannot find module \'" + req + "\'");\n\te.code = \'MODULE_NOT_FOUND\';\n\tthrow e;\n}\nwebpackEmptyContext.keys = function() { return []; };\nwebpackEmptyContext.resolve = webpackEmptyContext;\nmodule.exports = webpackEmptyContext;\nwebpackEmptyContext.id = "./pages/api/flights sync recursive";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXBpL2ZsaWdodHMgc3luYz8xMjI2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsV0FBVztBQUNsRDtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9wYWdlcy9hcGkvZmxpZ2h0cyBzeW5jIHJlY3Vyc2l2ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIHdlYnBhY2tFbXB0eUNvbnRleHQocmVxKSB7XG5cdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHR0aHJvdyBlO1xufVxud2VicGFja0VtcHR5Q29udGV4dC5rZXlzID0gZnVuY3Rpb24oKSB7IHJldHVybiBbXTsgfTtcbndlYnBhY2tFbXB0eUNvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tFbXB0eUNvbnRleHQ7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tFbXB0eUNvbnRleHQ7XG53ZWJwYWNrRW1wdHlDb250ZXh0LmlkID0gXCIuL3BhZ2VzL2FwaS9mbGlnaHRzIHN5bmMgcmVjdXJzaXZlXCI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/flights sync recursive\n'
      );

      /***/
    },

  /***/ "./pages/api/flights/Index.js":
    /*!************************************!*\
  !*** ./pages/api/flights/Index.js ***!
  \************************************/
    /*! no static exports found */
    /***/ function(module, exports, __webpack_require__) {
      eval(
        '/* WEBPACK VAR INJECTION */(function(module) {var require;var axios = require;\n__webpack_require__("./pages/api/flights sync recursive")({\n  "method": "GET",\n  "url": "https://travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com/v1/airline-directions",\n  "headers": {\n    "content-type": "application/octet-stream",\n    "x-rapidapi-host": "travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com",\n    "x-rapidapi-key": "c573d899fbmsh7f790eccbfa07a7p17edf7jsnf6b3cf11be53",\n    "useQueryString": true\n  },\n  "params": {\n    "limit": "100",\n    "airline_code": "SU"\n  }\n}).then(function (data) {\n  console.log(data);\n})["catch"](function (error) {\n  console.log(error);\n});\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we\'re in a\n    // browser context before continuing.\n    if (typeof self !== \'undefined\' &&\n        // AMP / No-JS mode does not inject these helpers:\n        \'$RefreshHelpers$\' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we\'ll check if it\'s\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we\'ll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it\'s possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXBpL2ZsaWdodHMvSW5kZXguanM/Y2JkOSJdLCJuYW1lcyI6WyJheGlvcyIsInJlcXVpcmUiLCJ0aGVuIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciJdLCJtYXBwaW5ncyI6IkFBQUEsOERBQU1BLEtBQUssR0FBR0MsT0FBZDtBQUdBRCwwREFBTTtBQUNGLFlBQVMsS0FEUDtBQUVGLFNBQU0seUZBRko7QUFHRixhQUFVO0FBQ1Ysb0JBQWUsMEJBREw7QUFFVix1QkFBa0IsMkRBRlI7QUFHVixzQkFBaUIsb0RBSFA7QUFJVixzQkFBaUI7QUFKUCxHQUhSO0FBUUEsWUFBUztBQUNYLGFBQVEsS0FERztBQUVYLG9CQUFlO0FBRko7QUFSVCxDQUFELENBQUwsQ0FhR0UsSUFiSCxDQWFRLFVBQUNDLElBQUQsRUFBVTtBQUNkQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsSUFBWjtBQUNELENBZkgsV0FnQlMsVUFBQ0csS0FBRCxFQUFXO0FBQ2hCRixTQUFPLENBQUNDLEdBQVIsQ0FBWUMsS0FBWjtBQUNELENBbEJIIiwiZmlsZSI6Ii4vcGFnZXMvYXBpL2ZsaWdodHMvSW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBheGlvcyA9IHJlcXVpcmU7XG5cblxuYXhpb3Moe1xuICAgIFwibWV0aG9kXCI6XCJHRVRcIixcbiAgICBcInVybFwiOlwiaHR0cHM6Ly90cmF2ZWxwYXlvdXRzLXRyYXZlbHBheW91dHMtZmxpZ2h0LWRhdGEtdjEucC5yYXBpZGFwaS5jb20vdjEvYWlybGluZS1kaXJlY3Rpb25zXCIsXG4gICAgXCJoZWFkZXJzXCI6e1xuICAgIFwiY29udGVudC10eXBlXCI6XCJhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW1cIixcbiAgICBcIngtcmFwaWRhcGktaG9zdFwiOlwidHJhdmVscGF5b3V0cy10cmF2ZWxwYXlvdXRzLWZsaWdodC1kYXRhLXYxLnAucmFwaWRhcGkuY29tXCIsXG4gICAgXCJ4LXJhcGlkYXBpLWtleVwiOlwiYzU3M2Q4OTlmYm1zaDdmNzkwZWNjYmZhMDdhN3AxN2VkZjdqc25mNmIzY2YxMWJlNTNcIixcbiAgICBcInVzZVF1ZXJ5U3RyaW5nXCI6dHJ1ZVxuICAgIH0sXCJwYXJhbXNcIjp7XG4gICAgXCJsaW1pdFwiOlwiMTAwXCIsXG4gICAgXCJhaXJsaW5lX2NvZGVcIjpcIlNVXCJcbiAgICB9XG4gICAgfSlcbiAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgfSlcbiAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgfSk7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/flights/Index.js\n'
      );

      /***/
    }
});
