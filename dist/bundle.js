/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./gql-schema/vs/index.js":
/*!********************************!*\
  !*** ./gql-schema/vs/index.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nconst { resolvers } = __webpack_require__(/*! ./resolver */ \"./gql-schema/vs/resolver.js\");\nconst { schema } = __webpack_require__(/*! ./schema */ \"./gql-schema/vs/schema.js\");\n\nmodule.exports = { schema, resolvers }\n\n//# sourceURL=webpack:///./gql-schema/vs/index.js?");

/***/ }),

/***/ "./gql-schema/vs/resolver.js":
/*!***********************************!*\
  !*** ./gql-schema/vs/resolver.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const rp = __webpack_require__(/*! request-promise */ \"request-promise\")\nconst urlgenerator = __webpack_require__(/*! ../../utils */ \"./utils/index.js\");\nconst resolvers = {\n    Query: {\n        result: async (root, args, context) => {\n           \n            let { type, ...dArgs } = args;\n         \n            let url = urlgenerator(type, dArgs);\n            if (url) {\n                let resp = await rp.get(url)\n                return JSON.parse(resp)\n\n            }\n        }\n    },\n    searchresult: {\n        __resolveType(object, info) {\n            if(object.word!=undefined){\n                return 'VS'\n            }\n            return 'RV'\n        }\n    }\n}\n\nmodule.exports = { resolvers }\n\n//# sourceURL=webpack:///./gql-schema/vs/resolver.js?");

/***/ }),

/***/ "./gql-schema/vs/schema.js":
/*!*********************************!*\
  !*** ./gql-schema/vs/schema.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const { gql } = __webpack_require__(/*! apollo-server-express */ \"apollo-server-express\")\n\nconst schema = gql`\nunion searchresult = VS|RV\nenum type{\n    vs\n    rv\n}\ntype Query{\nresult(type:type!,word:String,category:String,mandal:Int):[searchresult!]\n}\n\ninput VSInput{\n    word:String,\n    category:String\n}\n\ntype VS{\n    id:ID,\n    word:String!,\n    nagari:String!,\n    description:String!,\n    category:String!\n}\n\ntype RV{\n    mandal:Int!,\n    sukta:Int!,\n    sungby:String!,\n    sungbycategory: String!,\n    sungfor: String!,\n    sungforcategory:String!,\n    meter: String!\n}\n\n`\n\nmodule.exports = { schema }\n\n\n//# sourceURL=webpack:///./gql-schema/vs/schema.js?");

/***/ }),

/***/ "./server.js":
/*!*******************!*\
  !*** ./server.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const express = __webpack_require__(/*! express */ \"express\")\nconst cookieParser = __webpack_require__(/*! cookie-parser */ \"cookie-parser\");\nconst { ApolloServer } = __webpack_require__(/*! apollo-server-express */ \"apollo-server-express\")\nconst configs = __webpack_require__(/*! ./gql-schema/vs */ \"./gql-schema/vs/index.js\")\n\n\nconst app = express();\n\napp.use(express.json());\napp.use(express.urlencoded({ extended: false }));\napp.use(cookieParser());\n\n\n\nconst server = new ApolloServer({\n    typeDefs: configs.schema, resolvers: configs.resolvers, tracing: false, context: async ({ req }) => {\n\n        return { 'obj': Date.now() };\n    },\n    formatError: (err) => { console.error(err); return err; },\n})\n\nserver.applyMiddleware({ app, path: \"/graphql\", });\n\n\n\napp.listen(3001, () => {\n    console.log('server started at 3001')\n})\n\nmodule.exports = { server }\n\n//# sourceURL=webpack:///./server.js?");

/***/ }),

/***/ "./utils/index.js":
/*!************************!*\
  !*** ./utils/index.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const {urlGenerator} = __webpack_require__(/*! ./urlgenerator */ \"./utils/urlgenerator.js\");\n\nmodule.exports = urlGenerator \n\n//# sourceURL=webpack:///./utils/index.js?");

/***/ }),

/***/ "./utils/urlconfig.js":
/*!****************************!*\
  !*** ./utils/urlconfig.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const baseURL = \"https://sheetlabs.com/IND/\";\n\n//We will just store the configs here. We do not need to \n//type validate the param values here as GraphQL Schema \n//should do that for us\n\nconst vs = {\n    path: \"vs\",\n    params: {\n        'word': \"word=\",\n        \"category\": \"category=\"\n    }\n}\n\nconst rv = {\n    path: \"rv\",\n    params: {\n        \"mandal\": \"mandal=\",\n        \"sukta\": \"sukta=\",\n        \"sungby\": \"sungby=\"\n    }\n}\n\nmodule.exports = { baseURL, vs, rv }\n\n//# sourceURL=webpack:///./utils/urlconfig.js?");

/***/ }),

/***/ "./utils/urlgenerator.js":
/*!*******************************!*\
  !*** ./utils/urlgenerator.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const urlconfig = __webpack_require__(/*! ./urlconfig */ \"./utils/urlconfig.js\");\n\nexports.urlGenerator = (config, args) => {\n    if (config && args && Object.keys(args).length > 0) {\n\n        let configObj = urlconfig[config];\n        if (configObj) {\n            let uri = `${urlconfig.baseURL}${configObj.path}?`\n            Object.entries(args).forEach(item => {\n                if (item[0] && item[0] in configObj.params && item[1]) {\n                    uri = `${uri}${configObj.params[item[0]]}${item[1]}&`\n                }\n            })\n            return uri;\n        }\n    }\n    return\n}\n\n//# sourceURL=webpack:///./utils/urlgenerator.js?");

/***/ }),

/***/ "apollo-server-express":
/*!****************************************!*\
  !*** external "apollo-server-express" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"apollo-server-express\");\n\n//# sourceURL=webpack:///external_%22apollo-server-express%22?");

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cookie-parser\");\n\n//# sourceURL=webpack:///external_%22cookie-parser%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "request-promise":
/*!**********************************!*\
  !*** external "request-promise" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"request-promise\");\n\n//# sourceURL=webpack:///external_%22request-promise%22?");

/***/ })

/******/ });