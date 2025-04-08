/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/auth/google/route";
exports.ids = ["app/api/auth/google/route"];
exports.modules = {

/***/ "(rsc)/./app/api/auth/google/route.ts":
/*!**************************************!*\
  !*** ./app/api/auth/google/route.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   OPTIONS: () => (/* binding */ OPTIONS),\n/* harmony export */   dynamic: () => (/* binding */ dynamic)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n\nconst dynamic = 'force-dynamic';\nasync function GET(request) {\n    console.log('🔍 Google OAuth Route Called');\n    console.log('Request Details:', {\n        url: request.url,\n        method: request.method,\n        headers: Object.fromEntries(request.headers)\n    });\n    try {\n        // Determine backend URL with explicit logging\n        const backendUrl =  true ? 'http://127.0.0.1:8000/auth/google/login' : 0;\n        console.log('Backend Redirect URL:', backendUrl);\n        // Create a response that allows for CORS\n        const response = new next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse(null, {\n            status: 302,\n            headers: {\n                'Location': backendUrl,\n                'Content-Type': 'application/json',\n                'X-Google-Auth-Redirect': 'Initiated',\n                'X-Trace-ID': Date.now().toString(),\n                // Add CORS headers\n                'Access-Control-Allow-Origin': '*',\n                'Access-Control-Allow-Methods': 'GET, OPTIONS',\n                'Access-Control-Allow-Headers': 'Content-Type, Authorization'\n            }\n        });\n        console.log('Redirect Response Created');\n        return response;\n    } catch (error) {\n        console.error('🚨 Google OAuth Redirect Error', {\n            errorName: error instanceof Error ? error.name : 'UnknownError',\n            errorMessage: error instanceof Error ? error.message : 'Unknown error',\n            errorStack: error instanceof Error ? error.stack : 'No stack trace'\n        });\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: 'Google OAuth Initiation Failed',\n            details: error instanceof Error ? error.message : 'Unhandled error'\n        }, {\n            status: 500,\n            headers: {\n                'Access-Control-Allow-Origin': '*',\n                'Access-Control-Allow-Methods': 'GET, OPTIONS',\n                'Access-Control-Allow-Headers': 'Content-Type, Authorization'\n            }\n        });\n    }\n}\n// Handle preflight OPTIONS request\nasync function OPTIONS() {\n    return new next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse(null, {\n        status: 204,\n        headers: {\n            'Access-Control-Allow-Origin': '*',\n            'Access-Control-Allow-Methods': 'GET, OPTIONS',\n            'Access-Control-Allow-Headers': 'Content-Type, Authorization'\n        }\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2F1dGgvZ29vZ2xlL3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBMkM7QUFHcEMsTUFBTUMsVUFBVSxnQkFBZ0I7QUFFaEMsZUFBZUMsSUFBSUMsT0FBb0I7SUFDNUNDLFFBQVFDLEdBQUcsQ0FBQztJQUNaRCxRQUFRQyxHQUFHLENBQUMsb0JBQW9CO1FBQzlCQyxLQUFLSCxRQUFRRyxHQUFHO1FBQ2hCQyxRQUFRSixRQUFRSSxNQUFNO1FBQ3RCQyxTQUFTQyxPQUFPQyxXQUFXLENBQUNQLFFBQVFLLE9BQU87SUFDN0M7SUFFQSxJQUFJO1FBQ0YsOENBQThDO1FBQzlDLE1BQU1HLGFBQWFDLEtBQXNDLEdBQ3JELDRDQUNBLENBQXVDO1FBRTNDUixRQUFRQyxHQUFHLENBQUMseUJBQXlCTTtRQUVyQyx5Q0FBeUM7UUFDekMsTUFBTUUsV0FBVyxJQUFJYixxREFBWUEsQ0FBQyxNQUFNO1lBQ3RDYyxRQUFRO1lBQ1JOLFNBQVM7Z0JBQ1AsWUFBWUc7Z0JBQ1osZ0JBQWdCO2dCQUNoQiwwQkFBMEI7Z0JBQzFCLGNBQWNJLEtBQUtDLEdBQUcsR0FBR0MsUUFBUTtnQkFDakMsbUJBQW1CO2dCQUNuQiwrQkFBK0I7Z0JBQy9CLGdDQUFnQztnQkFDaEMsZ0NBQWdDO1lBQ2xDO1FBQ0Y7UUFFQWIsUUFBUUMsR0FBRyxDQUFDO1FBQ1osT0FBT1E7SUFFVCxFQUFFLE9BQU9LLE9BQU87UUFDZGQsUUFBUWMsS0FBSyxDQUFDLGtDQUFrQztZQUM5Q0MsV0FBV0QsaUJBQWlCRSxRQUFRRixNQUFNRyxJQUFJLEdBQUc7WUFDakRDLGNBQWNKLGlCQUFpQkUsUUFBUUYsTUFBTUssT0FBTyxHQUFHO1lBQ3ZEQyxZQUFZTixpQkFBaUJFLFFBQVFGLE1BQU1PLEtBQUssR0FBRztRQUNyRDtRQUVBLE9BQU96QixxREFBWUEsQ0FBQzBCLElBQUksQ0FDdEI7WUFDRVIsT0FBTztZQUNQUyxTQUFTVCxpQkFBaUJFLFFBQVFGLE1BQU1LLE9BQU8sR0FBRztRQUNwRCxHQUNBO1lBQ0VULFFBQVE7WUFDUk4sU0FBUztnQkFDUCwrQkFBK0I7Z0JBQy9CLGdDQUFnQztnQkFDaEMsZ0NBQWdDO1lBQ2xDO1FBQ0Y7SUFFSjtBQUNGO0FBRUEsbUNBQW1DO0FBQzVCLGVBQWVvQjtJQUNwQixPQUFPLElBQUk1QixxREFBWUEsQ0FBQyxNQUFNO1FBQzVCYyxRQUFRO1FBQ1JOLFNBQVM7WUFDUCwrQkFBK0I7WUFDL0IsZ0NBQWdDO1lBQ2hDLGdDQUFnQztRQUNsQztJQUNGO0FBQ0YiLCJzb3VyY2VzIjpbIi93b3Jrc3BhY2VzL3RyYWluNWQuY29tL2FwcC9hcGkvYXV0aC9nb29nbGUvcm91dGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSAnbmV4dC9zZXJ2ZXInO1xuaW1wb3J0IHsgTmV4dFJlcXVlc3QgfSBmcm9tICduZXh0L3NlcnZlcic7XG5cbmV4cG9ydCBjb25zdCBkeW5hbWljID0gJ2ZvcmNlLWR5bmFtaWMnO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gR0VUKHJlcXVlc3Q6IE5leHRSZXF1ZXN0KSB7XG4gIGNvbnNvbGUubG9nKCfwn5SNIEdvb2dsZSBPQXV0aCBSb3V0ZSBDYWxsZWQnKTtcbiAgY29uc29sZS5sb2coJ1JlcXVlc3QgRGV0YWlsczonLCB7XG4gICAgdXJsOiByZXF1ZXN0LnVybCxcbiAgICBtZXRob2Q6IHJlcXVlc3QubWV0aG9kLFxuICAgIGhlYWRlcnM6IE9iamVjdC5mcm9tRW50cmllcyhyZXF1ZXN0LmhlYWRlcnMpXG4gIH0pO1xuXG4gIHRyeSB7XG4gICAgLy8gRGV0ZXJtaW5lIGJhY2tlbmQgVVJMIHdpdGggZXhwbGljaXQgbG9nZ2luZ1xuICAgIGNvbnN0IGJhY2tlbmRVcmwgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JyBcbiAgICAgID8gJ2h0dHA6Ly8xMjcuMC4wLjE6ODAwMC9hdXRoL2dvb2dsZS9sb2dpbidcbiAgICAgIDogJ2h0dHBzOi8vdHJhaW41ZC5jb20vYXV0aC9nb29nbGUvbG9naW4nO1xuICAgIFxuICAgIGNvbnNvbGUubG9nKCdCYWNrZW5kIFJlZGlyZWN0IFVSTDonLCBiYWNrZW5kVXJsKTtcblxuICAgIC8vIENyZWF0ZSBhIHJlc3BvbnNlIHRoYXQgYWxsb3dzIGZvciBDT1JTXG4gICAgY29uc3QgcmVzcG9uc2UgPSBuZXcgTmV4dFJlc3BvbnNlKG51bGwsIHtcbiAgICAgIHN0YXR1czogMzAyLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnTG9jYXRpb24nOiBiYWNrZW5kVXJsLFxuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAnWC1Hb29nbGUtQXV0aC1SZWRpcmVjdCc6ICdJbml0aWF0ZWQnLFxuICAgICAgICAnWC1UcmFjZS1JRCc6IERhdGUubm93KCkudG9TdHJpbmcoKSxcbiAgICAgICAgLy8gQWRkIENPUlMgaGVhZGVyc1xuICAgICAgICAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJzogJyonLFxuICAgICAgICAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctTWV0aG9kcyc6ICdHRVQsIE9QVElPTlMnLFxuICAgICAgICAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctSGVhZGVycyc6ICdDb250ZW50LVR5cGUsIEF1dGhvcml6YXRpb24nXG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zb2xlLmxvZygnUmVkaXJlY3QgUmVzcG9uc2UgQ3JlYXRlZCcpO1xuICAgIHJldHVybiByZXNwb25zZTtcblxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ/CfmqggR29vZ2xlIE9BdXRoIFJlZGlyZWN0IEVycm9yJywge1xuICAgICAgZXJyb3JOYW1lOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubmFtZSA6ICdVbmtub3duRXJyb3InLFxuICAgICAgZXJyb3JNZXNzYWdlOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdVbmtub3duIGVycm9yJyxcbiAgICAgIGVycm9yU3RhY2s6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5zdGFjayA6ICdObyBzdGFjayB0cmFjZSdcbiAgICB9KTtcblxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcbiAgICAgIHsgXG4gICAgICAgIGVycm9yOiAnR29vZ2xlIE9BdXRoIEluaXRpYXRpb24gRmFpbGVkJyxcbiAgICAgICAgZGV0YWlsczogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnVW5oYW5kbGVkIGVycm9yJ1xuICAgICAgfSwgXG4gICAgICB7IFxuICAgICAgICBzdGF0dXM6IDUwMCxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nOiAnKicsXG4gICAgICAgICAgJ0FjY2Vzcy1Db250cm9sLUFsbG93LU1ldGhvZHMnOiAnR0VULCBPUFRJT05TJyxcbiAgICAgICAgICAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctSGVhZGVycyc6ICdDb250ZW50LVR5cGUsIEF1dGhvcml6YXRpb24nXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICApO1xuICB9XG59XG5cbi8vIEhhbmRsZSBwcmVmbGlnaHQgT1BUSU9OUyByZXF1ZXN0XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gT1BUSU9OUygpIHtcbiAgcmV0dXJuIG5ldyBOZXh0UmVzcG9uc2UobnVsbCwge1xuICAgIHN0YXR1czogMjA0LFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nOiAnKicsXG4gICAgICAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctTWV0aG9kcyc6ICdHRVQsIE9QVElPTlMnLFxuICAgICAgJ0FjY2Vzcy1Db250cm9sLUFsbG93LUhlYWRlcnMnOiAnQ29udGVudC1UeXBlLCBBdXRob3JpemF0aW9uJ1xuICAgIH1cbiAgfSk7XG59Il0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsImR5bmFtaWMiLCJHRVQiLCJyZXF1ZXN0IiwiY29uc29sZSIsImxvZyIsInVybCIsIm1ldGhvZCIsImhlYWRlcnMiLCJPYmplY3QiLCJmcm9tRW50cmllcyIsImJhY2tlbmRVcmwiLCJwcm9jZXNzIiwicmVzcG9uc2UiLCJzdGF0dXMiLCJEYXRlIiwibm93IiwidG9TdHJpbmciLCJlcnJvciIsImVycm9yTmFtZSIsIkVycm9yIiwibmFtZSIsImVycm9yTWVzc2FnZSIsIm1lc3NhZ2UiLCJlcnJvclN0YWNrIiwic3RhY2siLCJqc29uIiwiZGV0YWlscyIsIk9QVElPTlMiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/auth/google/route.ts\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fauth%2Fgoogle%2Froute&page=%2Fapi%2Fauth%2Fgoogle%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Fgoogle%2Froute.ts&appDir=%2Fworkspaces%2Ftrain5d.com%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fworkspaces%2Ftrain5d.com&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fauth%2Fgoogle%2Froute&page=%2Fapi%2Fauth%2Fgoogle%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Fgoogle%2Froute.ts&appDir=%2Fworkspaces%2Ftrain5d.com%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fworkspaces%2Ftrain5d.com&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _workspaces_train5d_com_app_api_auth_google_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/auth/google/route.ts */ \"(rsc)/./app/api/auth/google/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/auth/google/route\",\n        pathname: \"/api/auth/google\",\n        filename: \"route\",\n        bundlePath: \"app/api/auth/google/route\"\n    },\n    resolvedPagePath: \"/workspaces/train5d.com/app/api/auth/google/route.ts\",\n    nextConfigOutput,\n    userland: _workspaces_train5d_com_app_api_auth_google_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZhdXRoJTJGZ29vZ2xlJTJGcm91dGUmcGFnZT0lMkZhcGklMkZhdXRoJTJGZ29vZ2xlJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGYXV0aCUyRmdvb2dsZSUyRnJvdXRlLnRzJmFwcERpcj0lMkZ3b3Jrc3BhY2VzJTJGdHJhaW41ZC5jb20lMkZhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPSUyRndvcmtzcGFjZXMlMkZ0cmFpbjVkLmNvbSZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBK0Y7QUFDdkM7QUFDcUI7QUFDSTtBQUNqRjtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IseUdBQW1CO0FBQzNDO0FBQ0EsY0FBYyxrRUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNEQUFzRDtBQUM5RDtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUMwRjs7QUFFMUYiLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiL3dvcmtzcGFjZXMvdHJhaW41ZC5jb20vYXBwL2FwaS9hdXRoL2dvb2dsZS9yb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvYXV0aC9nb29nbGUvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9hdXRoL2dvb2dsZVwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvYXV0aC9nb29nbGUvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCIvd29ya3NwYWNlcy90cmFpbjVkLmNvbS9hcHAvYXBpL2F1dGgvZ29vZ2xlL3JvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgd29ya0FzeW5jU3RvcmFnZSxcbiAgICAgICAgd29ya1VuaXRBc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fauth%2Fgoogle%2Froute&page=%2Fapi%2Fauth%2Fgoogle%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Fgoogle%2Froute.ts&appDir=%2Fworkspaces%2Ftrain5d.com%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fworkspaces%2Ftrain5d.com&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "../app-render/after-task-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist/server/app-render/after-task-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fauth%2Fgoogle%2Froute&page=%2Fapi%2Fauth%2Fgoogle%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Fgoogle%2Froute.ts&appDir=%2Fworkspaces%2Ftrain5d.com%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fworkspaces%2Ftrain5d.com&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();