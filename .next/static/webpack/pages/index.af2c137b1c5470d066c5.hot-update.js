webpackHotUpdate_N_E("pages/index", {
  /***/ "./pages/api/flights/Index.js":
    /*!************************************!*\
  !*** ./pages/api/flights/Index.js ***!
  \************************************/
    /*! no static exports found */
    /***/ function(module, exports, __webpack_require__) {
      eval(
        '/* WEBPACK VAR INJECTION */(function(module) {var axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");\n\naxios({\n  "method": "GET",\n  "url": "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/%7Bcountry%7D/GBP/en-GB/",\n  "headers": {\n    \'Content-Type\': \'application/json\',\n    "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",\n    "x-rapidapi-key": "c573d899fbmsh7f790eccbfa07a7p17edf7jsnf6b3cf11be53",\n    "useQueryString": true\n  },\n  "params": {\n    "Country": "JP"\n  }\n}).then(function (response) {\n  console.log(response);\n})["catch"](function (error) {\n  console.log(error);\n});\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we\'re in a\n    // browser context before continuing.\n    if (typeof self !== \'undefined\' &&\n        // AMP / No-JS mode does not inject these helpers:\n        \'$RefreshHelpers$\' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we\'ll check if it\'s\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we\'ll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it\'s possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXBpL2ZsaWdodHMvSW5kZXguanM/Y2JkOSJdLCJuYW1lcyI6WyJheGlvcyIsInJlcXVpcmUiLCJ0aGVuIiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiXSwibWFwcGluZ3MiOiJBQUFBLGtEQUFNQSxLQUFLLEdBQUdDLG1CQUFPLENBQUMsNENBQUQsQ0FBckI7O0FBRUFELEtBQUssQ0FBQztBQUNGLFlBQVUsS0FEUjtBQUVGLFNBQU8scUhBRkw7QUFHRixhQUFXO0FBQ1Asb0JBQWdCLGtCQURUO0FBRVAsdUJBQW1CLHVEQUZaO0FBR1Asc0JBQWtCLG9EQUhYO0FBSVAsc0JBQWtCO0FBSlgsR0FIVDtBQVFDLFlBQVU7QUFDVCxlQUFXO0FBREY7QUFSWCxDQUFELENBQUwsQ0FZS0UsSUFaTCxDQVlVLFVBQUNDLFFBQUQsRUFBYztBQUNoQkMsU0FBTyxDQUFDQyxHQUFSLENBQVlGLFFBQVo7QUFDSCxDQWRMLFdBZVcsVUFBQ0csS0FBRCxFQUFXO0FBQ2RGLFNBQU8sQ0FBQ0MsR0FBUixDQUFZQyxLQUFaO0FBQ0gsQ0FqQkwiLCJmaWxlIjoiLi9wYWdlcy9hcGkvZmxpZ2h0cy9JbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGF4aW9zID0gcmVxdWlyZShcImF4aW9zXCIpO1xuXG5heGlvcyh7XG4gICAgXCJtZXRob2RcIjogXCJHRVRcIixcbiAgICBcInVybFwiOiBcImh0dHBzOi8vc2t5c2Nhbm5lci1za3lzY2FubmVyLWZsaWdodC1zZWFyY2gtdjEucC5yYXBpZGFwaS5jb20vYXBpc2VydmljZXMvYXV0b3N1Z2dlc3QvdjEuMC8lN0Jjb3VudHJ5JTdEL0dCUC9lbi1HQi9cIixcbiAgICBcImhlYWRlcnNcIjoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICBcIngtcmFwaWRhcGktaG9zdFwiOiBcInNreXNjYW5uZXItc2t5c2Nhbm5lci1mbGlnaHQtc2VhcmNoLXYxLnAucmFwaWRhcGkuY29tXCIsXG4gICAgICAgIFwieC1yYXBpZGFwaS1rZXlcIjogXCJjNTczZDg5OWZibXNoN2Y3OTBlY2NiZmEwN2E3cDE3ZWRmN2pzbmY2YjNjZjExYmU1M1wiLFxuICAgICAgICBcInVzZVF1ZXJ5U3RyaW5nXCI6IHRydWVcbiAgICB9LCBcInBhcmFtc1wiOiB7XG4gICAgICAgIFwiQ291bnRyeVwiOiBcIkpQXCIsXG4gICAgfVxufSlcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpXG4gICAgfSlcbiAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9KTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/flights/Index.js\n'
      );

      /***/
    }
});
