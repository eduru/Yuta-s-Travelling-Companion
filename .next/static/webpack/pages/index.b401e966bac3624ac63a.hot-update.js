webpackHotUpdate_N_E("pages/index", {
  /***/ "./pages/api/flights/Index.js":
    /*!************************************!*\
  !*** ./pages/api/flights/Index.js ***!
  \************************************/
    /*! no exports provided */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      eval(
        '__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectDestructuringEmpty */ "./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nvar country = "Japan";\nvar originPlace = "NRT-sky";\nvar destinationPlace = "OSAA-sky";\nvar outboundpartialdate = "2020-09-01";\n\nvar fetchPlacesData = /*#__PURE__*/function () {\n  var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {\n    var _yield$axios$get, Places;\n\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.prev = 0;\n            _context.next = 3;\n            return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/UK/GBP/en-GB/", {\n              headers: {\n                "content-type": "application/json",\n                "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",\n                "x-rapidapi-key": "f3b72532e5mshf3212aa087d7ef8p170d42jsnb3b9bd882b75",\n                useQueryString: true\n              },\n              params: {\n                query: "".concat(country)\n              }\n            });\n\n          case 3:\n            _yield$axios$get = _context.sent;\n            Places = _yield$axios$get.data.Places;\n            console.log(Places);\n            _context.next = 11;\n            break;\n\n          case 8:\n            _context.prev = 8;\n            _context.t0 = _context["catch"](0);\n            console.error(_context.t0);\n\n          case 11:\n          case "end":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[0, 8]]);\n  }));\n\n  return function fetchPlacesData() {\n    return _ref.apply(this, arguments);\n  };\n}();\n\nfetchPlacesData();\n\nvar fetchRoutesData = /*#__PURE__*/function () {\n  var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {\n    var _yield$axios$get2;\n\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            _context2.prev = 0;\n            _context2.next = 3;\n            return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browseroutes/v1.0/US/USD/en-US/".concat(originPlace, "/").concat(destinationPlace, "/").concat(outboundpartialdate), {\n              headers: {\n                "content-type": "application/json",\n                "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",\n                "x-rapidapi-key": "f3b72532e5mshf3212aa087d7ef8p170d42jsnb3b9bd882b75",\n                useQueryString: true\n              }\n            });\n\n          case 3:\n            _yield$axios$get2 = _context2.sent;\n\n            Object(_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__["default"])(_yield$axios$get2.data);\n\n            console.log(data);\n            _context2.next = 11;\n            break;\n\n          case 8:\n            _context2.prev = 8;\n            _context2.t0 = _context2["catch"](0);\n            console.log(_context2.t0);\n\n          case 11:\n          case "end":\n            return _context2.stop();\n        }\n      }\n    }, _callee2, null, [[0, 8]]);\n  }));\n\n  return function fetchRoutesData() {\n    return _ref2.apply(this, arguments);\n  };\n}();\n\nfetchRoutesData();\n\nvar fetchQuotesData = /*#__PURE__*/function () {\n  var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3() {\n    var _yield$axios$get3, _data;\n\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {\n      while (1) {\n        switch (_context3.prev = _context3.next) {\n          case 0:\n            _context3.prev = 0;\n            _context3.next = 3;\n            return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/USD/en-US/SFO-sky/JFK-sky/2020-09-01", {\n              headers: {\n                "content-type": "application/json",\n                "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",\n                "x-rapidapi-key": "c573d899fbmsh7f790eccbfa07a7p17edf7jsnf6b3cf11be53",\n                useQueryString: true\n              }\n            });\n\n          case 3:\n            _yield$axios$get3 = _context3.sent;\n            _data = _yield$axios$get3.data;\n            _context3.next = 10;\n            break;\n\n          case 7:\n            _context3.prev = 7;\n            _context3.t0 = _context3["catch"](0);\n            console.log(_context3.t0);\n\n          case 10:\n          case "end":\n            return _context3.stop();\n        }\n      }\n    }, _callee3, null, [[0, 7]]);\n  }));\n\n  return function fetchQuotesData() {\n    return _ref3.apply(this, arguments);\n  };\n}();\n\nfetchQuotesData();\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we\'re in a\n    // browser context before continuing.\n    if (typeof self !== \'undefined\' &&\n        // AMP / No-JS mode does not inject these helpers:\n        \'$RefreshHelpers$\' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we\'ll check if it\'s\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we\'ll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it\'s possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXBpL2ZsaWdodHMvSW5kZXguanM/Y2JkOSJdLCJuYW1lcyI6WyJjb3VudHJ5Iiwib3JpZ2luUGxhY2UiLCJkZXN0aW5hdGlvblBsYWNlIiwib3V0Ym91bmRwYXJ0aWFsZGF0ZSIsImZldGNoUGxhY2VzRGF0YSIsImF4aW9zIiwiZ2V0IiwiaGVhZGVycyIsInVzZVF1ZXJ5U3RyaW5nIiwicGFyYW1zIiwicXVlcnkiLCJQbGFjZXMiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwiZmV0Y2hSb3V0ZXNEYXRhIiwiZmV0Y2hRdW90ZXNEYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFJQSxJQUFNQSxPQUFPLEdBQUcsT0FBaEI7QUFDQSxJQUFNQyxXQUFXLEdBQUcsU0FBcEI7QUFDQSxJQUFNQyxnQkFBZ0IsR0FBRyxVQUF6QjtBQUNBLElBQU1DLG1CQUFtQixHQUFHLFlBQTVCOztBQUVBLElBQU1DLGVBQWU7QUFBQSw4TEFBRztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUVpQkMsNENBQUssQ0FBQ0MsR0FBTixDQUFVLDBHQUFWLEVBQzdCO0FBQ0lDLHFCQUFPLEVBQUU7QUFDTCxnQ0FBZ0Isa0JBRFg7QUFFTCxtQ0FBbUIsdURBRmQ7QUFHTCxrQ0FBa0Isb0RBSGI7QUFJTEMsOEJBQWMsRUFBRTtBQUpYLGVBRGI7QUFPSUMsb0JBQU0sRUFBRTtBQUNKQyxxQkFBSyxZQUFLVixPQUFMO0FBREQ7QUFQWixhQUQ2QixDQUZqQjs7QUFBQTtBQUFBO0FBRURXLGtCQUZDLG9CQUVUQyxJQUZTLENBRURELE1BRkM7QUFnQmhCRSxtQkFBTyxDQUFDQyxHQUFSLENBQVlILE1BQVo7QUFoQmdCO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBa0JoQkUsbUJBQU8sQ0FBQ0UsS0FBUjs7QUFsQmdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQWZYLGVBQWU7QUFBQTtBQUFBO0FBQUEsR0FBckI7O0FBc0JBQSxlQUFlOztBQUVmLElBQU1ZLGVBQWU7QUFBQSwrTEFBRztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUVXWCw0Q0FBSyxDQUFDQyxHQUFOLG9IQUFzSEwsV0FBdEgsY0FBcUlDLGdCQUFySSxjQUF5SkMsbUJBQXpKLEdBQ3ZCO0FBQ0lJLHFCQUFPLEVBQUU7QUFDTCxnQ0FBZ0Isa0JBRFg7QUFFTCxtQ0FBbUIsdURBRmQ7QUFHTCxrQ0FBa0Isb0RBSGI7QUFJTEMsOEJBQWMsRUFBRTtBQUpYO0FBRGIsYUFEdUIsQ0FGWDs7QUFBQTtBQUFBOztBQUFBLGtJQUVSSSxJQUZROztBQWFoQkMsbUJBQU8sQ0FBQ0MsR0FBUixDQUFZRixJQUFaO0FBYmdCO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBZWhCQyxtQkFBTyxDQUFDQyxHQUFSOztBQWZnQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFmRSxlQUFlO0FBQUE7QUFBQTtBQUFBLEdBQXJCOztBQW1CQUEsZUFBZTs7QUFHZixJQUFNQyxlQUFlO0FBQUEsK0xBQUc7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFFS1osNENBQUssQ0FBQ0MsR0FBTixDQUFVLHFJQUFWLEVBQ3JCO0FBQ0lDLHFCQUFPLEVBQUU7QUFDVCxnQ0FBZSxrQkFETjtBQUVULG1DQUFrQix1REFGVDtBQUdULGtDQUFpQixvREFIUjtBQUlUQyw4QkFBYyxFQUFDO0FBSk47QUFEYixhQURxQixDQUZMOztBQUFBO0FBQUE7QUFFVEksaUJBRlMscUJBRVRBLElBRlM7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQWFoQkMsbUJBQU8sQ0FBQ0MsR0FBUjs7QUFiZ0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBZkcsZUFBZTtBQUFBO0FBQUE7QUFBQSxHQUFyQjs7QUFpQkFBLGVBQWUiLCJmaWxlIjoiLi9wYWdlcy9hcGkvZmxpZ2h0cy9JbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuXG5cbmNvbnN0IGNvdW50cnkgPSBcIkphcGFuXCI7XG5jb25zdCBvcmlnaW5QbGFjZSA9IFwiTlJULXNreVwiO1xuY29uc3QgZGVzdGluYXRpb25QbGFjZSA9IFwiT1NBQS1za3lcIjtcbmNvbnN0IG91dGJvdW5kcGFydGlhbGRhdGUgPSBcIjIwMjAtMDktMDFcIjtcblxuY29uc3QgZmV0Y2hQbGFjZXNEYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHtkYXRhOiB7IFBsYWNlcyB9fSA9IGF3YWl0IGF4aW9zLmdldChcImh0dHBzOi8vc2t5c2Nhbm5lci1za3lzY2FubmVyLWZsaWdodC1zZWFyY2gtdjEucC5yYXBpZGFwaS5jb20vYXBpc2VydmljZXMvYXV0b3N1Z2dlc3QvdjEuMC9VSy9HQlAvZW4tR0IvXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICBcImNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICAgICAgICAgICAgXCJ4LXJhcGlkYXBpLWhvc3RcIjogXCJza3lzY2FubmVyLXNreXNjYW5uZXItZmxpZ2h0LXNlYXJjaC12MS5wLnJhcGlkYXBpLmNvbVwiLFxuICAgICAgICAgICAgICAgICAgICBcIngtcmFwaWRhcGkta2V5XCI6IFwiZjNiNzI1MzJlNW1zaGYzMjEyYWEwODdkN2VmOHAxNzBkNDJqc25iM2I5YmQ4ODJiNzVcIixcbiAgICAgICAgICAgICAgICAgICAgdXNlUXVlcnlTdHJpbmc6IHRydWVcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgICAgICBxdWVyeTogYCR7Y291bnRyeX1gXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKFBsYWNlcyk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICB9XG59O1xuXG5mZXRjaFBsYWNlc0RhdGEoKTtcblxuY29uc3QgZmV0Y2hSb3V0ZXNEYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHsgZGF0YToge30gfSA9IGF3YWl0IGF4aW9zLmdldChgaHR0cHM6Ly9za3lzY2FubmVyLXNreXNjYW5uZXItZmxpZ2h0LXNlYXJjaC12MS5wLnJhcGlkYXBpLmNvbS9hcGlzZXJ2aWNlcy9icm93c2Vyb3V0ZXMvdjEuMC9VUy9VU0QvZW4tVVMvJHtvcmlnaW5QbGFjZX0vJHtkZXN0aW5hdGlvblBsYWNlfS8ke291dGJvdW5kcGFydGlhbGRhdGV9YCxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgIFwiY29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgICAgICAgICAgICBcIngtcmFwaWRhcGktaG9zdFwiOiBcInNreXNjYW5uZXItc2t5c2Nhbm5lci1mbGlnaHQtc2VhcmNoLXYxLnAucmFwaWRhcGkuY29tXCIsXG4gICAgICAgICAgICAgICAgICAgIFwieC1yYXBpZGFwaS1rZXlcIjogXCJmM2I3MjUzMmU1bXNoZjMyMTJhYTA4N2Q3ZWY4cDE3MGQ0MmpzbmIzYjliZDg4MmI3NVwiLFxuICAgICAgICAgICAgICAgICAgICB1c2VRdWVyeVN0cmluZzogdHJ1ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcblxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICB9XG59O1xuXG5mZXRjaFJvdXRlc0RhdGEoKTtcblxuXG5jb25zdCBmZXRjaFF1b3Rlc0RhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3Qge2RhdGF9ID0gYXdhaXQgYXhpb3MuZ2V0KFwiaHR0cHM6Ly9za3lzY2FubmVyLXNreXNjYW5uZXItZmxpZ2h0LXNlYXJjaC12MS5wLnJhcGlkYXBpLmNvbS9hcGlzZXJ2aWNlcy9icm93c2VxdW90ZXMvdjEuMC9VUy9VU0QvZW4tVVMvU0ZPLXNreS9KRkstc2t5LzIwMjAtMDktMDFcIiwgXG4gICAgICAgIHtcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIFwiY29udGVudC10eXBlXCI6XCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgICBcIngtcmFwaWRhcGktaG9zdFwiOlwic2t5c2Nhbm5lci1za3lzY2FubmVyLWZsaWdodC1zZWFyY2gtdjEucC5yYXBpZGFwaS5jb21cIixcbiAgICAgICAgICAgIFwieC1yYXBpZGFwaS1rZXlcIjpcImM1NzNkODk5ZmJtc2g3Zjc5MGVjY2JmYTA3YTdwMTdlZGY3anNuZjZiM2NmMTFiZTUzXCIsXG4gICAgICAgICAgICB1c2VRdWVyeVN0cmluZzp0cnVlXG4gICAgICAgICAgICB9fSk7XG5cbiAgICAgICAgICAgIFxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgIH1cbn07XG5cbmZldGNoUXVvdGVzRGF0YSgpOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/flights/Index.js\n'
      );

      /***/
    }
});
