webpackHotUpdate_N_E("pages/index", {
  /***/ "./pages/api/flights/Index.js":
    /*!************************************!*\
  !*** ./pages/api/flights/Index.js ***!
  \************************************/
    /*! no static exports found */
    /***/ function(module, exports, __webpack_require__) {
      eval(
        '/* WEBPACK VAR INJECTION */(function(module) {var axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");\n\naxios({\n  method: "GET",\n  url: "https://hotels4.p.rapidapi.com/locations/search",\n  headers: {\n    // "content-type": "application/octet-stream",\n    "x-rapidapi-host": "hotels4.p.rapidapi.com",\n    "x-rapidapi-key": "f3b72532e5mshf3212aa087d7ef8p170d42jsnb3b9bd882b75",\n    useQueryString: true\n  },\n  params: {\n    locale: "en_US",\n    query: "new york"\n  }\n}).then(function (data) {})["catch"](function (error) {\n  console.log(error);\n});\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we\'re in a\n    // browser context before continuing.\n    if (typeof self !== \'undefined\' &&\n        // AMP / No-JS mode does not inject these helpers:\n        \'$RefreshHelpers$\' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we\'ll check if it\'s\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we\'ll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it\'s possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXBpL2ZsaWdodHMvSW5kZXguanM/Y2JkOSJdLCJuYW1lcyI6WyJheGlvcyIsInJlcXVpcmUiLCJtZXRob2QiLCJ1cmwiLCJoZWFkZXJzIiwidXNlUXVlcnlTdHJpbmciLCJwYXJhbXMiLCJsb2NhbGUiLCJxdWVyeSIsInRoZW4iLCJkYXRhIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiQUFDQSxrREFBTUEsS0FBSyxHQUFHQyxtQkFBTyxDQUFDLDRDQUFELENBQXJCOztBQUNBRCxLQUFLLENBQUM7QUFDSkUsUUFBTSxFQUFFLEtBREo7QUFFSkMsS0FBRyxFQUFFLGlEQUZEO0FBR0pDLFNBQU8sRUFBRTtBQUNQO0FBQ0EsdUJBQW1CLHdCQUZaO0FBR1Asc0JBQWtCLG9EQUhYO0FBSVBDLGtCQUFjLEVBQUU7QUFKVCxHQUhMO0FBU0pDLFFBQU0sRUFBRTtBQUNOQyxVQUFNLEVBQUUsT0FERjtBQUVOQyxTQUFLLEVBQUU7QUFGRDtBQVRKLENBQUQsQ0FBTCxDQWNHQyxJQWRILENBY1EsVUFBQ0MsSUFBRCxFQUFVLENBRWYsQ0FoQkgsV0FpQlMsVUFBQ0MsS0FBRCxFQUFXO0FBQ2hCQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBWjtBQUNELENBbkJIIiwiZmlsZSI6Ii4vcGFnZXMvYXBpL2ZsaWdodHMvSW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmNvbnN0IGF4aW9zID0gcmVxdWlyZShcImF4aW9zXCIpO1xuYXhpb3Moe1xuICBtZXRob2Q6IFwiR0VUXCIsXG4gIHVybDogXCJodHRwczovL2hvdGVsczQucC5yYXBpZGFwaS5jb20vbG9jYXRpb25zL3NlYXJjaFwiLFxuICBoZWFkZXJzOiB7XG4gICAgLy8gXCJjb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW1cIixcbiAgICBcIngtcmFwaWRhcGktaG9zdFwiOiBcImhvdGVsczQucC5yYXBpZGFwaS5jb21cIixcbiAgICBcIngtcmFwaWRhcGkta2V5XCI6IFwiZjNiNzI1MzJlNW1zaGYzMjEyYWEwODdkN2VmOHAxNzBkNDJqc25iM2I5YmQ4ODJiNzVcIixcbiAgICB1c2VRdWVyeVN0cmluZzogdHJ1ZSxcbiAgfSxcbiAgcGFyYW1zOiB7XG4gICAgbG9jYWxlOiBcImVuX1VTXCIsXG4gICAgcXVlcnk6IFwibmV3IHlvcmtcIixcbiAgfSxcbn0pXG4gIC50aGVuKChkYXRhKSA9PiB7XG4gICAgXG4gIH0pXG4gIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gIH0pOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/flights/Index.js\n'
      );

      /***/
    }
});
