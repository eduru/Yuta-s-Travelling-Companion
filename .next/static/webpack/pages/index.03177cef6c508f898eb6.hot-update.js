webpackHotUpdate_N_E("pages/index", {
  /***/ "./pages/api/flights/Index.js":
    /*!************************************!*\
  !*** ./pages/api/flights/Index.js ***!
  \************************************/
    /*! no static exports found */
    /***/ function(module, exports, __webpack_require__) {
      eval(
        '/* WEBPACK VAR INJECTION */(function(module) {var axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");\n\naxios({\n  "method": "GET",\n  "url": "https://travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com/v1/airline-directions",\n  "headers": {\n    "content-type": "application/octet-stream",\n    "x-rapidapi-host": "travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com",\n    "x-rapidapi-key": "c573d899fbmsh7f790eccbfa07a7p17edf7jsnf6b3cf11be53",\n    "useQueryString": true\n  },\n  "params": {\n    "limit": "100",\n    "airline_code": "SU"\n  }\n}).then(function (data) {\n  console.log(data);\n})["catch"](function (error) {\n  console.log(error);\n});\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we\'re in a\n    // browser context before continuing.\n    if (typeof self !== \'undefined\' &&\n        // AMP / No-JS mode does not inject these helpers:\n        \'$RefreshHelpers$\' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we\'ll check if it\'s\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we\'ll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it\'s possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXBpL2ZsaWdodHMvSW5kZXguanM/Y2JkOSJdLCJuYW1lcyI6WyJheGlvcyIsInJlcXVpcmUiLCJ0aGVuIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciJdLCJtYXBwaW5ncyI6IkFBQUEsa0RBQU1BLEtBQUssR0FBR0MsbUJBQU8sQ0FBQyw0Q0FBRCxDQUFyQjs7QUFHQUQsS0FBSyxDQUFDO0FBQ0YsWUFBUyxLQURQO0FBRUYsU0FBTSx5RkFGSjtBQUdGLGFBQVU7QUFDVixvQkFBZSwwQkFETDtBQUVWLHVCQUFrQiwyREFGUjtBQUdWLHNCQUFpQixvREFIUDtBQUlWLHNCQUFpQjtBQUpQLEdBSFI7QUFRQSxZQUFTO0FBQ1gsYUFBUSxLQURHO0FBRVgsb0JBQWU7QUFGSjtBQVJULENBQUQsQ0FBTCxDQWFHRSxJQWJILENBYVEsVUFBQ0MsSUFBRCxFQUFVO0FBQ2RDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZRixJQUFaO0FBQ0QsQ0FmSCxXQWdCUyxVQUFDRyxLQUFELEVBQVc7QUFDaEJGLFNBQU8sQ0FBQ0MsR0FBUixDQUFZQyxLQUFaO0FBQ0QsQ0FsQkgiLCJmaWxlIjoiLi9wYWdlcy9hcGkvZmxpZ2h0cy9JbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGF4aW9zID0gcmVxdWlyZShcImF4aW9zXCIpO1xuXG5cbmF4aW9zKHtcbiAgICBcIm1ldGhvZFwiOlwiR0VUXCIsXG4gICAgXCJ1cmxcIjpcImh0dHBzOi8vdHJhdmVscGF5b3V0cy10cmF2ZWxwYXlvdXRzLWZsaWdodC1kYXRhLXYxLnAucmFwaWRhcGkuY29tL3YxL2FpcmxpbmUtZGlyZWN0aW9uc1wiLFxuICAgIFwiaGVhZGVyc1wiOntcbiAgICBcImNvbnRlbnQtdHlwZVwiOlwiYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtXCIsXG4gICAgXCJ4LXJhcGlkYXBpLWhvc3RcIjpcInRyYXZlbHBheW91dHMtdHJhdmVscGF5b3V0cy1mbGlnaHQtZGF0YS12MS5wLnJhcGlkYXBpLmNvbVwiLFxuICAgIFwieC1yYXBpZGFwaS1rZXlcIjpcImM1NzNkODk5ZmJtc2g3Zjc5MGVjY2JmYTA3YTdwMTdlZGY3anNuZjZiM2NmMTFiZTUzXCIsXG4gICAgXCJ1c2VRdWVyeVN0cmluZ1wiOnRydWVcbiAgICB9LFwicGFyYW1zXCI6e1xuICAgIFwibGltaXRcIjpcIjEwMFwiLFxuICAgIFwiYWlybGluZV9jb2RlXCI6XCJTVVwiXG4gICAgfVxuICAgIH0pXG4gIC50aGVuKChkYXRhKSA9PiB7XG4gICAgY29uc29sZS5sb2coZGF0YSk7XG4gIH0pXG4gIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gIH0pOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/flights/Index.js\n'
      );

      /***/
    }
});
