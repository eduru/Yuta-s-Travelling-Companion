webpackHotUpdate_N_E("pages/index", {
  /***/ "./pages/api/flights/Index.js":
    /*!************************************!*\
  !*** ./pages/api/flights/Index.js ***!
  \************************************/
    /*! no exports provided */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      eval(
        '__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nvar country = "Japan";\nvar URL = "{\\n        method: \\"GET\\",\\n        url:\\n      \\"https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/UK/GBP/en-GB/\\",\\n    headers: {\\n      \\"content-type\\": \\"application/json\\",\\n      \\"x-rapidapi-host\\": \\"skyscanner-skyscanner-flight-search-v1.p.rapidapi.com\\",\\n      \\"x-rapidapi-key\\": \\"f3b72532e5mshf3212aa087d7ef8p170d42jsnb3b9bd882b75\\",\\n      useQueryString: true,\\n    },\\n    params: {\\n      query: \\"".concat(country, "\\",\\n    },\\n  }");\naxios__WEBPACK_IMPORTED_MODULE_0___default()(URL).then(function (response) {\n  console.log(response);\n})["catch"](function (error) {\n  console.log(error);\n});\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we\'re in a\n    // browser context before continuing.\n    if (typeof self !== \'undefined\' &&\n        // AMP / No-JS mode does not inject these helpers:\n        \'$RefreshHelpers$\' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we\'ll check if it\'s\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we\'ll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it\'s possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXBpL2ZsaWdodHMvSW5kZXguanM/Y2JkOSJdLCJuYW1lcyI6WyJjb3VudHJ5IiwiVVJMIiwiYXhpb3MiLCJ0aGVuIiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0EsSUFBSUEsT0FBTyxHQUFHLE9BQWQ7QUFDQSxJQUFNQyxHQUFHLHlkQVlPRCxPQVpQLHFCQUFUO0FBZ0JBRSw0Q0FBSyxDQUFDRCxHQUFELENBQUwsQ0FDS0UsSUFETCxDQUNVLFVBQUNDLFFBQUQsRUFBYztBQUNoQkMsU0FBTyxDQUFDQyxHQUFSLENBQVlGLFFBQVo7QUFDSCxDQUhMLFdBSVcsVUFBQ0csS0FBRCxFQUFXO0FBQ2RGLFNBQU8sQ0FBQ0MsR0FBUixDQUFZQyxLQUFaO0FBQ0gsQ0FOTCIsImZpbGUiOiIuL3BhZ2VzL2FwaS9mbGlnaHRzL0luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xubGV0IGNvdW50cnkgPSBcIkphcGFuXCJcbmNvbnN0IFVSTCA9IFxuICAgIGB7XG4gICAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgICAgdXJsOlxuICAgICAgXCJodHRwczovL3NreXNjYW5uZXItc2t5c2Nhbm5lci1mbGlnaHQtc2VhcmNoLXYxLnAucmFwaWRhcGkuY29tL2FwaXNlcnZpY2VzL2F1dG9zdWdnZXN0L3YxLjAvVUsvR0JQL2VuLUdCL1wiLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgIFwiY29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgXCJ4LXJhcGlkYXBpLWhvc3RcIjogXCJza3lzY2FubmVyLXNreXNjYW5uZXItZmxpZ2h0LXNlYXJjaC12MS5wLnJhcGlkYXBpLmNvbVwiLFxuICAgICAgXCJ4LXJhcGlkYXBpLWtleVwiOiBcImYzYjcyNTMyZTVtc2hmMzIxMmFhMDg3ZDdlZjhwMTcwZDQyanNuYjNiOWJkODgyYjc1XCIsXG4gICAgICB1c2VRdWVyeVN0cmluZzogdHJ1ZSxcbiAgICB9LFxuICAgIHBhcmFtczoge1xuICAgICAgcXVlcnk6IFwiJHtjb3VudHJ5fVwiLFxuICAgIH0sXG4gIH1gXG5cbmF4aW9zKFVSTClcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpXG4gICAgfSlcbiAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9KTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/flights/Index.js\n'
      );

      /***/
    }
});
