(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("express"), require("path"), require("react"), require("object-assign"), require("stream"), require("react-router-dom"), require("react-dom"), require("flux"), require("react-router"), require("underscore"), require("events"), require("jquery"), require("socket.io-client"), require("react-bootstrap"), require("classnames"), require("prop-types"), require("invariant"), require("create-react-class"), require("uncontrollable"), require("keycode"), require("warning"), require("http"), require("mongoose"), require("express-session"), require("body-parser"), require("socket.io"));
	else if(typeof define === 'function' && define.amd)
		define(["express", "path", "react", "object-assign", "stream", "react-router-dom", "react-dom", "flux", "react-router", "underscore", "events", "jquery", "socket.io-client", "react-bootstrap", "classnames", "prop-types", "invariant", "create-react-class", "uncontrollable", "keycode", "warning", "http", "mongoose", "express-session", "body-parser", "socket.io"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("express"), require("path"), require("react"), require("object-assign"), require("stream"), require("react-router-dom"), require("react-dom"), require("flux"), require("react-router"), require("underscore"), require("events"), require("jquery"), require("socket.io-client"), require("react-bootstrap"), require("classnames"), require("prop-types"), require("invariant"), require("create-react-class"), require("uncontrollable"), require("keycode"), require("warning"), require("http"), require("mongoose"), require("express-session"), require("body-parser"), require("socket.io")) : factory(root["express"], root["path"], root["react"], root["object-assign"], root["stream"], root["react-router-dom"], root["react-dom"], root["flux"], root["react-router"], root["underscore"], root["events"], root["jquery"], root["socket.io-client"], root["react-bootstrap"], root["classnames"], root["prop-types"], root["invariant"], root["create-react-class"], root["uncontrollable"], root["keycode"], root["warning"], root["http"], root["mongoose"], root["express-session"], root["body-parser"], root["socket.io"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_9__, __WEBPACK_EXTERNAL_MODULE_15__, __WEBPACK_EXTERNAL_MODULE_26__, __WEBPACK_EXTERNAL_MODULE_29__, __WEBPACK_EXTERNAL_MODULE_33__, __WEBPACK_EXTERNAL_MODULE_35__, __WEBPACK_EXTERNAL_MODULE_37__, __WEBPACK_EXTERNAL_MODULE_38__, __WEBPACK_EXTERNAL_MODULE_40__, __WEBPACK_EXTERNAL_MODULE_42__, __WEBPACK_EXTERNAL_MODULE_45__, __WEBPACK_EXTERNAL_MODULE_138__, __WEBPACK_EXTERNAL_MODULE_139__, __WEBPACK_EXTERNAL_MODULE_146__, __WEBPACK_EXTERNAL_MODULE_156__, __WEBPACK_EXTERNAL_MODULE_166__, __WEBPACK_EXTERNAL_MODULE_188__, __WEBPACK_EXTERNAL_MODULE_190__, __WEBPACK_EXTERNAL_MODULE_209__, __WEBPACK_EXTERNAL_MODULE_211__, __WEBPACK_EXTERNAL_MODULE_216__, __WEBPACK_EXTERNAL_MODULE_217__, __WEBPACK_EXTERNAL_MODULE_219__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _express = __webpack_require__(2);
	
	var _express2 = _interopRequireDefault(_express);
	
	var _path = __webpack_require__(3);
	
	var _path2 = _interopRequireDefault(_path);
	
	var _routesJs = __webpack_require__(4);
	
	var _routesJs2 = _interopRequireDefault(_routesJs);
	
	var _react = __webpack_require__(5);
	
	var _react2 = _interopRequireDefault(_react);
	
	var router = _express2['default'].Router();
	
	var app = (0, _express2['default'])();
	app.get('/', _routesJs2['default']);
	var http = __webpack_require__(209);
	var serv = http.Server(app);
	
	//var Layout=React.createFactory(require('./../shared/components/layout.jsx').Layout)
	//Mongoose schema files
	var Userlist = __webpack_require__(210);
	var PurchasedPdt = __webpack_require__(212);
	var ProductDetails = __webpack_require__(213);
	var PurchasedSchema = __webpack_require__(214);
	var ChatDataSchema = __webpack_require__(215);
	//creating a session;
	var sessions = __webpack_require__(216);
	var session;
	var parser = __webpack_require__(217);
	__webpack_require__(218);
	app.use(_express2['default']['static']('public'));
	app.set('view engine', 'ejs');
	app.use(parser.json());
	app.use(parser.urlencoded({ extended: false }));
	app.use(sessions({
	  secret: 'aksdfklaiw7498rqwekflanlsdf',
	  resave: false,
	  saveUninitialized: true
	}));
	
	serv.listen(4000, function (req, res) {
	  console.log("running on port 4000");
	});
	var users = [];
	
	var io = __webpack_require__(219)(serv, {});
	io.on('connection', function (socket) {
	  console.log("socketio io initialized");
	  socket.on('new user', function (data) {
	    console.log("emitted new user");
	    socket.username = data.username;
	    users[socket.username] = socket;
	    //send usernames to display in the client side.
	    updateUsernames();
	  });
	  socket.on('send message', function (data, callback) {
	    var msg = data.text.trim();
	    var name = data.threadID.substr(2, data.threadID.length - 1);
	    var receiver = data.threadID.substr(2, data.threadID.length - 1);
	    if (name in users) {
	      users[name].emit('whisper', { Message: msg, Sender: socket.username, Receiver: receiver });
	      console.log(msg);
	      console.log(socket.username);
	      console.log("whisperint to " + receiver);
	    } else {
	      callback("Error! enter a valid user");
	    }
	  });
	  //remove the user when they are not available.
	  socket.on('disconnect', function () {
	    console.log(socket.username);
	    if (!socket.username) {
	      return;
	    } else {
	      delete users[socket.username];
	      updateUsernames();
	    }
	  });
	
	  function updateUsernames() {
	    io.sockets.emit('usernames', Object.keys(users));
	    //console.log(users);
	  }
	});
	
	app.post('/login', function (req, res) {
	  var cred = req.body;
	  session = req.session;
	  PurchasedPdt.find(function (err, pdt) {
	    pdt.forEach(function (item) {
	      ProductDetails.findOne({ pdtCode: item.pdtCode }, 'pdtCode feedbackDetails', function (err, productDetails) {
	        /*Calculating average feedback*/
	        var total = 0;
	        productDetails.feedbackDetails.forEach(function (item) {
	          total += parseInt(item.rating);
	        });
	        var avgRating = total / productDetails.feedbackDetails.length;
	        avgRating = avgRating.toFixed(2);
	        avgRating = Math.round(avgRating * 100) / 100;
	        PurchasedPdt.update({ pdtCode: item.pdtCode, avgFeedback: 0 }, { $set: { "avgFeedback": avgRating } }).exec(function (err, ret) {});
	      });
	    });
	  });
	  Userlist.find(function (error, doc) {
	    for (var i = 0; i < doc.length; i++) {
	      if (doc[i].username == cred.username && doc[i].password == cred.password) {
	        session.username = cred.username;
	        //console.log("emitting socketio io event");
	        //io.sockets.emit("new user",cred.username);
	        res.send(doc[i]);
	      } else {}
	    }
	  });
	});
	
	app.post('/purchasedItems', function (req, res) {
	  var data = req.body;
	  //console.log(data);
	  var userProducts = [];
	  PurchasedSchema.find(function (err, purUsers) {
	    purUsers.forEach(function (perItem) {
	      if (data.username == perItem.purchasedUser) {
	        userProducts.push(perItem.pdtCode);
	      }
	    });
	    //console.log(userProducts);
	    PurchasedPdt.find(function (err, prod) {
	      var filteredPdt = [];
	      prod.forEach(function (item) {
	        for (var i = 0; i < userProducts.length; i++) {
	          if (item.pdtCode == userProducts[i]) {
	            filteredPdt.push(item);
	          }
	        }
	      });
	      res.send(filteredPdt);
	    });
	  });
	});
	
	app.post('/productDetails', function (req, res) {
	  console.log("inside pdt details");
	  var pid = req.body;
	  var feedback = [];
	  PurchasedPdt.findOne({ _id: pid.pdtId }, function (err, data) {
	    ProductDetails.findOne({ pdtCode: data.pdtCode }, function (err, feedbackDetails) {
	      var retObj = { pdtDetails: data, fbDetails: feedbackDetails };
	      res.send(retObj);
	    });
	  });
	});
	
	app.post('/submitFeedback', function (req, res) {
	  console.log("inside submit  feedback");
	  var feedbackData = req.body;
	  console.log(feedbackData);
	  ProductDetails.findOne({ pdtCode: feedbackData.productId }, 'pdtCode feedbackDetails', function (err, productDetails) {
	    /*Calculating average feedback*/
	    var total = 0;
	    productDetails.feedbackDetails.forEach(function (item) {
	      total += parseInt(item.rating);
	    });
	    total += parseInt(feedbackData.rating);
	    var avgRating = total / (productDetails.feedbackDetails.length + 1);
	    avgRating = avgRating.toFixed(2);
	    /*Calculating average feedback end*/
	    console.log("average:" + avgRating);
	    PurchasedPdt.update({ pdtCode: feedbackData.productId }, { $set: { "avgFeedback": avgRating } }).exec(function (err, ret) {
	      console.log("avg updated");
	    });
	    ProductDetails.update({ pdtCode: feedbackData.productId }, { $push: { "feedbackDetails": { user: session.username, body: feedbackData.feedback, rating: feedbackData.rating, updatedAt: Date.now() } } }, function (err, data) {
	      res.send(data);
	    });
	  });
	});
	
	app.post('/dashboard', function (req, res) {
	  //var pdtDetails=[];
	  PurchasedPdt.find(function (err, data) {
	    ProductDetails.find(function (err, feedbackDetails) {
	      var retObj = { feedbackDetails: feedbackDetails, productDetails: data };
	      res.send(retObj);
	    });
	  });
	});
	
	app.post('/discontinue', function (req, res) {
	  console.log("prodID");
	  console.log(req.body.pdtCode);
	  PurchasedPdt.update({ pdtCode: req.body.pdtCode }, { $set: { "isDiscontinued": true } }).exec(function (err, ret) {
	    console.log("pdt discontinued");
	    res.send(ret);
	  });
	});
	
	app.post('/getChatData', function (req, res) {
	  console.log(req.body);
	  ChatDataSchema.find(function (err, data) {
	    res.send(data);
	  });
	});
	
	app.post('/productDetails/getChatData', function (req, res) {
	  ChatDataSchema.find(function (err, data) {
	    res.send(data);
	  });
	});
	
	app.post('/logout', function (req, res) {
	  console.log("inside  logout");
	  res.redirect('/');
	});

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	module.exports = require("express");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	module.exports = require("path");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(5);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDomServer = __webpack_require__(6);
	
	var _reactRouterDom = __webpack_require__(26);
	
	var _sharedRoutesJs = __webpack_require__(27);
	
	var _sharedRoutesJs2 = _interopRequireDefault(_sharedRoutesJs);
	
	var _$history = __webpack_require__(205);
	
	var _$history2 = _interopRequireDefault(_$history);
	
	var _sharedComponentsLoginFormJsx = __webpack_require__(28);
	
	var _sharedComponentsLoginFormJsx2 = _interopRequireDefault(_sharedComponentsLoginFormJsx);
	
	var _sharedRoutes = __webpack_require__(27);
	
	var _sharedRoutes2 = _interopRequireDefault(_sharedRoutes);
	
	module.exports = function (req, res) {
	  console.log(_sharedRoutesJs2['default']);
	  _sharedRoutesJs2['default'].some(function (route) {
	    var match = (0, _reactRouterDom.matchPath)(req.url, route);
	    if (match) {
	      var context = {};
	      var markup = (0, _reactDomServer.renderToString)(_react2['default'].createElement(
	        _reactRouterDom.StaticRouter,
	        {
	          location: req.url,
	          context: context
	        },
	        _react2['default'].createElement(
	          'div',
	          null,
	          _sharedRoutes2['default'].map(function (route) {
	            return _react2['default'].createElement(_reactRouterDom.Route, route);
	          })
	        )
	      ));
	      console.log("server side rendering", markup);
	      res.render('pages/index', { "title": "React Case Study", "html": markup, data: JSON.stringify(markup), signInCss: "css/Signin.css", cssPath: " " });
	    }
	  });
	};

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	module.exports = require("react");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = __webpack_require__(7);

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	if (process.env.NODE_ENV === 'production') {
	  module.exports = __webpack_require__(8);
	} else {
	  module.exports = __webpack_require__(16);
	}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	/** @license React v16.2.0
	 * react-dom-server.node.production.min.js
	 *
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	
	'use strict';var k = __webpack_require__(9),
	    r = __webpack_require__(5),
	    aa = __webpack_require__(10),
	    t = __webpack_require__(11),
	    ba = __webpack_require__(12),
	    ca = __webpack_require__(14),
	    da = __webpack_require__(15);
	function w(a) {
	  for (var b = arguments.length - 1, g = "Minified React error #" + a + "; visit http://facebook.github.io/react/docs/error-decoder.html?invariant\x3d" + a, c = 0; c < b; c++) g += "\x26args[]\x3d" + encodeURIComponent(arguments[c + 1]);b = Error(g + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.");b.name = "Invariant Violation";b.framesToPop = 1;throw b;
	}
	var x = { children: !0, dangerouslySetInnerHTML: !0, defaultValue: !0, defaultChecked: !0, innerHTML: !0, suppressContentEditableWarning: !0, suppressHydrationWarning: !0, style: !0 };function z(a, b) {
	  return (a & b) === b;
	}
	var B = { MUST_USE_PROPERTY: 1, HAS_BOOLEAN_VALUE: 4, HAS_NUMERIC_VALUE: 8, HAS_POSITIVE_NUMERIC_VALUE: 24, HAS_OVERLOADED_BOOLEAN_VALUE: 32, HAS_STRING_BOOLEAN_VALUE: 64, injectDOMPropertyConfig: function injectDOMPropertyConfig(a) {
	    var b = B,
	        g = a.Properties || {},
	        c = a.DOMAttributeNamespaces || {},
	        h = a.DOMAttributeNames || {};a = a.DOMMutationMethods || {};for (var f in g) {
	      C.hasOwnProperty(f) ? w("48", f) : void 0;var e = f.toLowerCase(),
	          d = g[f];e = { attributeName: e, attributeNamespace: null, propertyName: f, mutationMethod: null, mustUseProperty: z(d, b.MUST_USE_PROPERTY),
	        hasBooleanValue: z(d, b.HAS_BOOLEAN_VALUE), hasNumericValue: z(d, b.HAS_NUMERIC_VALUE), hasPositiveNumericValue: z(d, b.HAS_POSITIVE_NUMERIC_VALUE), hasOverloadedBooleanValue: z(d, b.HAS_OVERLOADED_BOOLEAN_VALUE), hasStringBooleanValue: z(d, b.HAS_STRING_BOOLEAN_VALUE) };1 >= e.hasBooleanValue + e.hasNumericValue + e.hasOverloadedBooleanValue ? void 0 : w("50", f);h.hasOwnProperty(f) && (e.attributeName = h[f]);c.hasOwnProperty(f) && (e.attributeNamespace = c[f]);a.hasOwnProperty(f) && (e.mutationMethod = a[f]);C[f] = e;
	    }
	  } },
	    C = {};
	function ea(a, b) {
	  if (x.hasOwnProperty(a) || 2 < a.length && ("o" === a[0] || "O" === a[0]) && ("n" === a[1] || "N" === a[1])) return !1;if (null === b) return !0;switch (typeof b) {case "boolean":
	      return D(a);case "undefined":case "number":case "string":case "object":
	      return !0;default:
	      return !1;}
	}function E(a) {
	  return C.hasOwnProperty(a) ? C[a] : null;
	}
	function D(a) {
	  if (x.hasOwnProperty(a)) return !0;var b = E(a);if (b) return b.hasBooleanValue || b.hasStringBooleanValue || b.hasOverloadedBooleanValue;a = a.toLowerCase().slice(0, 5);return "data-" === a || "aria-" === a;
	}
	var F = B,
	    G = F.MUST_USE_PROPERTY,
	    H = F.HAS_BOOLEAN_VALUE,
	    I = F.HAS_NUMERIC_VALUE,
	    J = F.HAS_POSITIVE_NUMERIC_VALUE,
	    K = F.HAS_OVERLOADED_BOOLEAN_VALUE,
	    L = F.HAS_STRING_BOOLEAN_VALUE,
	    fa = { Properties: { allowFullScreen: H, async: H, autoFocus: H, autoPlay: H, capture: K, checked: G | H, cols: J, contentEditable: L, controls: H, "default": H, defer: H, disabled: H, download: K, draggable: L, formNoValidate: H, hidden: H, loop: H, multiple: G | H, muted: G | H, noValidate: H, open: H, playsInline: H, readOnly: H, required: H, reversed: H, rows: J, rowSpan: I, scoped: H, seamless: H,
	    selected: G | H, size: J, start: I, span: J, spellCheck: L, style: 0, tabIndex: 0, itemScope: H, acceptCharset: 0, className: 0, htmlFor: 0, httpEquiv: 0, value: L }, DOMAttributeNames: { acceptCharset: "accept-charset", className: "class", htmlFor: "for", httpEquiv: "http-equiv" }, DOMMutationMethods: { value: function value(a, b) {
	      if (null == b) return a.removeAttribute("value");"number" !== a.type || !1 === a.hasAttribute("value") ? a.setAttribute("value", "" + b) : a.validity && !a.validity.badInput && a.ownerDocument.activeElement !== a && a.setAttribute("value", "" + b);
	    } } },
	    M = F.HAS_STRING_BOOLEAN_VALUE,
	    N = { xlink: "http://www.w3.org/1999/xlink", xml: "http://www.w3.org/XML/1998/namespace" },
	    O = { Properties: { autoReverse: M, externalResourcesRequired: M, preserveAlpha: M }, DOMAttributeNames: { autoReverse: "autoReverse", externalResourcesRequired: "externalResourcesRequired", preserveAlpha: "preserveAlpha" }, DOMAttributeNamespaces: { xlinkActuate: N.xlink, xlinkArcrole: N.xlink, xlinkHref: N.xlink, xlinkRole: N.xlink, xlinkShow: N.xlink, xlinkTitle: N.xlink, xlinkType: N.xlink, xmlBase: N.xml, xmlLang: N.xml,
	    xmlSpace: N.xml } },
	    ha = /[\-\:]([a-z])/g;function ia(a) {
	  return a[1].toUpperCase();
	}
	"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode x-height xlink:actuate xlink:arcrole xlink:href xlink:role xlink:show xlink:title xlink:type xml:base xmlns:xlink xml:lang xml:space".split(" ").forEach(function (a) {
	  var b = a.replace(ha, ia);O.Properties[b] = 0;O.DOMAttributeNames[b] = a;
	});F.injectDOMPropertyConfig(fa);F.injectDOMPropertyConfig(O);var P = "function" === typeof Symbol && Symbol["for"] ? Symbol["for"]("react.fragment") : 60107,
	    ja = /["'&<>]/;
	function Q(a) {
	  if ("boolean" === typeof a || "number" === typeof a) return "" + a;a = "" + a;var b = ja.exec(a);if (b) {
	    var g = "",
	        c,
	        h = 0;for (c = b.index; c < a.length; c++) {
	      switch (a.charCodeAt(c)) {case 34:
	          b = "\x26quot;";break;case 38:
	          b = "\x26amp;";break;case 39:
	          b = "\x26#x27;";break;case 60:
	          b = "\x26lt;";break;case 62:
	          b = "\x26gt;";break;default:
	          continue;}h !== c && (g += a.substring(h, c));h = c + 1;g += b;
	    }a = h !== c ? g + a.substring(h, c) : g;
	  }return a;
	}
	var ka = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
	    R = {},
	    S = {};function la(a) {
	  if (S.hasOwnProperty(a)) return !0;if (R.hasOwnProperty(a)) return !1;if (ka.test(a)) return S[a] = !0;R[a] = !0;return !1;
	}
	function ma(a, b) {
	  var g = E(a);if (g) {
	    if (null == b || g.hasBooleanValue && !b || g.hasNumericValue && isNaN(b) || g.hasPositiveNumericValue && 1 > b || g.hasOverloadedBooleanValue && !1 === b) return "";var c = g.attributeName;if (g.hasBooleanValue || g.hasOverloadedBooleanValue && !0 === b) return c + '\x3d""';if ("boolean" !== typeof b || D(a)) return c + "\x3d" + ('"' + Q(b) + '"');
	  } else if (ea(a, b)) return null == b ? "" : a + "\x3d" + ('"' + Q(b) + '"');return null;
	}var T = { html: "http://www.w3.org/1999/xhtml", mathml: "http://www.w3.org/1998/Math/MathML", svg: "http://www.w3.org/2000/svg" };
	function U(a) {
	  switch (a) {case "svg":
	      return "http://www.w3.org/2000/svg";case "math":
	      return "http://www.w3.org/1998/Math/MathML";default:
	      return "http://www.w3.org/1999/xhtml";}
	}
	var V = { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 },
	    na = k({ menuitem: !0 }, V),
	    W = { animationIterationCount: !0, borderImageOutset: !0, borderImageSlice: !0, borderImageWidth: !0, boxFlex: !0, boxFlexGroup: !0, boxOrdinalGroup: !0, columnCount: !0, columns: !0, flex: !0, flexGrow: !0, flexPositive: !0, flexShrink: !0, flexNegative: !0, flexOrder: !0, gridRow: !0, gridRowEnd: !0, gridRowSpan: !0, gridRowStart: !0, gridColumn: !0, gridColumnEnd: !0, gridColumnSpan: !0, gridColumnStart: !0,
	  fontWeight: !0, lineClamp: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, tabSize: !0, widows: !0, zIndex: !0, zoom: !0, fillOpacity: !0, floodOpacity: !0, stopOpacity: !0, strokeDasharray: !0, strokeDashoffset: !0, strokeMiterlimit: !0, strokeOpacity: !0, strokeWidth: !0 },
	    oa = ["Webkit", "ms", "Moz", "O"];Object.keys(W).forEach(function (a) {
	  oa.forEach(function (b) {
	    b = b + a.charAt(0).toUpperCase() + a.substring(1);W[b] = W[a];
	  });
	});var X = r.Children.toArray,
	    pa = aa.thatReturns(""),
	    qa = { listing: !0, pre: !0, textarea: !0 };
	function ra(a) {
	  return "string" === typeof a ? a : "function" === typeof a ? a.displayName || a.name : null;
	}var sa = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,
	    ta = {},
	    ua = ca(function (a) {
	  return ba(a);
	});function va(a) {
	  var b = "";r.Children.forEach(a, function (a) {
	    null == a || "string" !== typeof a && "number" !== typeof a || (b += a);
	  });return b;
	}function wa(a, b) {
	  if (a = a.contextTypes) {
	    var g = {},
	        c;for (c in a) g[c] = b[c];b = g;
	  } else b = t;return b;
	}var xa = { children: null, dangerouslySetInnerHTML: null, suppressContentEditableWarning: null, suppressHydrationWarning: null };
	function ya(a, b) {
	  void 0 === a && w("152", ra(b) || "Component");
	}
	function za(a, b) {
	  for (; r.isValidElement(a);) {
	    var g = a,
	        c = g.type;if ("function" !== typeof c) break;a = wa(c, b);var h = [],
	        f = !1,
	        e = { isMounted: function isMounted() {
	        return !1;
	      }, enqueueForceUpdate: function enqueueForceUpdate() {
	        if (null === h) return null;
	      }, enqueueReplaceState: function enqueueReplaceState(a, b) {
	        f = !0;h = [b];
	      }, enqueueSetState: function enqueueSetState(a, b) {
	        if (null === h) return null;h.push(b);
	      } };if (c.prototype && c.prototype.isReactComponent) var d = new c(g.props, a, e);else if ((d = c(g.props, a, e), null == d || null == d.render)) {
	      a = d;ya(a, c);continue;
	    }d.props = g.props;d.context = a;d.updater = e;e = d.state;
	    void 0 === e && (d.state = e = null);if (d.componentWillMount) if ((d.componentWillMount(), h.length)) {
	      e = h;var n = f;h = null;f = !1;if (n && 1 === e.length) d.state = e[0];else {
	        var p = n ? e[0] : d.state,
	            l = !0;for (n = n ? 1 : 0; n < e.length; n++) {
	          var m = e[n];if (m = "function" === typeof m ? m.call(d, p, g.props, a) : m) l ? (l = !1, p = k({}, p, m)) : k(p, m);
	        }d.state = p;
	      }
	    } else h = null;a = d.render();ya(a, c);if ("function" === typeof d.getChildContext && (g = c.childContextTypes, "object" === typeof g)) {
	      var A = d.getChildContext();for (var y in A) y in g ? void 0 : w("108", ra(c) || "Unknown", y);
	    }A && (b = k({}, b, A));
	  }return { child: a, context: b };
	}
	var Y = (function () {
	  function a(b, g) {
	    if (!(this instanceof a)) throw new TypeError("Cannot call a class as a function");r.isValidElement(b) ? b.type !== P ? b = [b] : (b = b.props.children, b = r.isValidElement(b) ? [b] : X(b)) : b = X(b);this.stack = [{ domNamespace: T.html, children: b, childIndex: 0, context: t, footer: "" }];this.exhausted = !1;this.currentSelectValue = null;this.previousWasTextNode = !1;this.makeStaticMarkup = g;
	  }a.prototype.read = function (a) {
	    if (this.exhausted) return null;for (var b = ""; b.length < a;) {
	      if (0 === this.stack.length) {
	        this.exhausted = !0;break;
	      }var c = this.stack[this.stack.length - 1];if (c.childIndex >= c.children.length) {
	        var h = c.footer;b += h;"" !== h && (this.previousWasTextNode = !1);this.stack.pop();"select" === c.tag && (this.currentSelectValue = null);
	      } else h = c.children[c.childIndex++], b += this.render(h, c.context, c.domNamespace);
	    }return b;
	  };a.prototype.render = function (a, g, c) {
	    if ("string" === typeof a || "number" === typeof a) {
	      c = "" + a;if ("" === c) return "";if (this.makeStaticMarkup) return Q(c);if (this.previousWasTextNode) return "\x3c!-- --\x3e" + Q(c);this.previousWasTextNode = !0;return Q(c);
	    }g = za(a, g);a = g.child;g = g.context;if (null === a || !1 === a) return "";if (r.isValidElement(a)) return a.type === P ? (a = X(a.props.children), this.stack.push({ domNamespace: c, children: a, childIndex: 0, context: g, footer: "" }), "") : this.renderDOM(a, g, c);a = X(a);this.stack.push({ domNamespace: c, children: a, childIndex: 0, context: g, footer: "" });return "";
	  };a.prototype.renderDOM = function (a, g, c) {
	    var b = a.type.toLowerCase();c === T.html && U(b);ta.hasOwnProperty(b) || (sa.test(b) ? void 0 : w("65", b), ta[b] = !0);var f = a.props;if ("input" === b) f = k({ type: void 0 }, f, { defaultChecked: void 0, defaultValue: void 0, value: null != f.value ? f.value : f.defaultValue, checked: null != f.checked ? f.checked : f.defaultChecked });else if ("textarea" === b) {
	      var e = f.value;if (null == e) {
	        e = f.defaultValue;var d = f.children;null != d && (null != e ? w("92") : void 0, Array.isArray(d) && (1 >= d.length ? void 0 : w("93"), d = d[0]), e = "" + d);null == e && (e = "");
	      }f = k({}, f, { value: void 0, children: "" + e });
	    } else if ("select" === b) this.currentSelectValue = null != f.value ? f.value : f.defaultValue, f = k({}, f, { value: void 0 });else if ("option" === b) {
	      d = this.currentSelectValue;var n = va(f.children);if (null != d) {
	        var p = null != f.value ? f.value + "" : n;e = !1;if (Array.isArray(d)) for (var l = 0; l < d.length; l++) {
	          if ("" + d[l] === p) {
	            e = !0;break;
	          }
	        } else e = "" + d === p;f = k({ selected: void 0, children: void 0 }, f, { selected: e, children: n });
	      }
	    }if (e = f) na[b] && (null != e.children || null != e.dangerouslySetInnerHTML ? w("137", b, pa()) : void 0), null != e.dangerouslySetInnerHTML && (null != e.children ? w("60") : void 0, "object" === typeof e.dangerouslySetInnerHTML && "__html" in e.dangerouslySetInnerHTML ? void 0 : w("61")), null != e.style && "object" !== typeof e.style ? w("62", pa()) : void 0;e = f;d = this.makeStaticMarkup;n = 1 === this.stack.length;p = "\x3c" + a.type;for (q in e) if (e.hasOwnProperty(q)) {
	      var m = e[q];if (null != m) {
	        if ("style" === q) {
	          l = void 0;var A = "",
	              y = "";for (l in m) if (m.hasOwnProperty(l)) {
	            var u = 0 === l.indexOf("--"),
	                v = m[l];null != v && (A += y + ua(l) + ":", y = l, u = null == v || "boolean" === typeof v || "" === v ? "" : u || "number" !== typeof v || 0 === v || W.hasOwnProperty(y) && W[y] ? ("" + v).trim() : v + "px", A += u, y = ";");
	          }m = A || null;
	        }l = null;b: if ((u = b, v = e, -1 === u.indexOf("-"))) u = "string" === typeof v.is;else switch (u) {case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":
	            u = !1;break b;default:
	            u = !0;}u ? xa.hasOwnProperty(q) || (l = q, l = la(l) && null != m ? l + "\x3d" + ('"' + Q(m) + '"') : "") : l = ma(q, m);l && (p += " " + l);
	      }
	    }d || n && (p += ' data-reactroot\x3d""');var q = p;e = "";V.hasOwnProperty(b) ? q += "/\x3e" : (q += "\x3e", e = "\x3c/" + a.type + "\x3e");a: {
	      d = f.dangerouslySetInnerHTML;if (null != d) {
	        if (null != d.__html) {
	          d = d.__html;break a;
	        }
	      } else if ((d = f.children, "string" === typeof d || "number" === typeof d)) {
	        d = Q(d);break a;
	      }d = null;
	    }null != d ? (f = [], qa[b] && "\n" === d.charAt(0) && (q += "\n"), q += d) : f = X(f.children);a = a.type;c = null == c || "http://www.w3.org/1999/xhtml" === c ? U(a) : "http://www.w3.org/2000/svg" === c && "foreignObject" === a ? "http://www.w3.org/1999/xhtml" : c;this.stack.push({ domNamespace: c, tag: b, children: f, childIndex: 0, context: g, footer: e });this.previousWasTextNode = !1;return q;
	  };return a;
	})();
	function Aa(a, b) {
	  if ("function" !== typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b);a.prototype = Object.create(b && b.prototype, { constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 } });b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b);
	}
	var Ba = (function (a) {
	  function b(g, c) {
	    if (!(this instanceof b)) throw new TypeError("Cannot call a class as a function");var h = a.call(this, {});if (!this) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");h = !h || "object" !== typeof h && "function" !== typeof h ? this : h;h.partialRenderer = new Y(g, c);return h;
	  }Aa(b, a);b.prototype._read = function (a) {
	    try {
	      this.push(this.partialRenderer.read(a));
	    } catch (c) {
	      this.emit("error", c);
	    }
	  };return b;
	})(da.Readable),
	    Ca = { renderToString: function renderToString(a) {
	    return new Y(a, !1).read(Infinity);
	  }, renderToStaticMarkup: function renderToStaticMarkup(a) {
	    return new Y(a, !0).read(Infinity);
	  }, renderToNodeStream: function renderToNodeStream(a) {
	    return new Ba(a, !1);
	  }, renderToStaticNodeStream: function renderToStaticNodeStream(a) {
	    return new Ba(a, !0);
	  }, version: "16.2.0" },
	    Da = Object.freeze({ "default": Ca }),
	    Z = Da && Ca || Da;module.exports = Z["default"] ? Z["default"] : Z;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

	module.exports = require("object-assign");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

	"use strict";
	
	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */
	
	function makeEmptyFunction(arg) {
	  return function () {
	    return arg;
	  };
	}
	
	/**
	 * This function accepts and discards inputs; it has no side effects. This is
	 * primarily useful idiomatically for overridable function endpoints which
	 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
	 */
	var emptyFunction = function emptyFunction() {};
	
	emptyFunction.thatReturns = makeEmptyFunction;
	emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
	emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
	emptyFunction.thatReturnsNull = makeEmptyFunction(null);
	emptyFunction.thatReturnsThis = function () {
	  return this;
	};
	emptyFunction.thatReturnsArgument = function (arg) {
	  return arg;
	};
	
	module.exports = emptyFunction;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */
	
	'use strict';
	
	var emptyObject = {};
	
	if (process.env.NODE_ENV !== 'production') {
	  Object.freeze(emptyObject);
	}
	
	module.exports = emptyObject;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * @typechecks
	 */
	
	'use strict';
	
	var hyphenate = __webpack_require__(13);
	
	var msPattern = /^ms-/;
	
	/**
	 * Hyphenates a camelcased CSS property name, for example:
	 *
	 *   > hyphenateStyleName('backgroundColor')
	 *   < "background-color"
	 *   > hyphenateStyleName('MozTransition')
	 *   < "-moz-transition"
	 *   > hyphenateStyleName('msTransition')
	 *   < "-ms-transition"
	 *
	 * As Modernizr suggests (http://modernizr.com/docs/#prefixed), an `ms` prefix
	 * is converted to `-ms-`.
	 *
	 * @param {string} string
	 * @return {string}
	 */
	function hyphenateStyleName(string) {
	  return hyphenate(string).replace(msPattern, '-ms-');
	}
	
	module.exports = hyphenateStyleName;

/***/ }),
/* 13 */
/***/ (function(module, exports) {

	'use strict';
	
	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * @typechecks
	 */
	
	var _uppercasePattern = /([A-Z])/g;
	
	/**
	 * Hyphenates a camelcased string, for example:
	 *
	 *   > hyphenate('backgroundColor')
	 *   < "background-color"
	 *
	 * For CSS style names, use `hyphenateStyleName` instead which works properly
	 * with all vendor prefixes, including `ms`.
	 *
	 * @param {string} string
	 * @return {string}
	 */
	function hyphenate(string) {
	  return string.replace(_uppercasePattern, '-$1').toLowerCase();
	}
	
	module.exports = hyphenate;

/***/ }),
/* 14 */
/***/ (function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 * @typechecks static-only
	 */
	
	'use strict';
	
	/**
	 * Memoizes the return value of a function that accepts one string argument.
	 */
	
	function memoizeStringOnly(callback) {
	  var cache = {};
	  return function (string) {
	    if (!cache.hasOwnProperty(string)) {
	      cache[string] = callback.call(this, string);
	    }
	    return cache[string];
	  };
	}
	
	module.exports = memoizeStringOnly;

/***/ }),
/* 15 */
/***/ (function(module, exports) {

	module.exports = require("stream");

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	/** @license React v16.2.0
	 * react-dom-server.node.development.js
	 *
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	
	'use strict';
	
	if (process.env.NODE_ENV !== "production") {
	  (function () {
	    'use strict';
	
	    var invariant = __webpack_require__(17);
	    var _assign = __webpack_require__(9);
	    var React = __webpack_require__(5);
	    var emptyFunction = __webpack_require__(10);
	    var emptyObject = __webpack_require__(11);
	    var hyphenateStyleName = __webpack_require__(12);
	    var memoizeStringOnly = __webpack_require__(14);
	    var warning = __webpack_require__(18);
	    var checkPropTypes = __webpack_require__(19);
	    var camelizeStyleName = __webpack_require__(24);
	    var stream = __webpack_require__(15);
	
	    /**
	     * WARNING: DO NOT manually require this module.
	     * This is a replacement for `invariant(...)` used by the error code system
	     * and will _only_ be required by the corresponding babel pass.
	     * It always throws.
	     */
	
	    // These attributes should be all lowercase to allow for
	    // case insensitive checks
	    var RESERVED_PROPS = {
	      children: true,
	      dangerouslySetInnerHTML: true,
	      defaultValue: true,
	      defaultChecked: true,
	      innerHTML: true,
	      suppressContentEditableWarning: true,
	      suppressHydrationWarning: true,
	      style: true
	    };
	
	    function checkMask(value, bitmask) {
	      return (value & bitmask) === bitmask;
	    }
	
	    var DOMPropertyInjection = {
	      /**
	       * Mapping from normalized, camelcased property names to a configuration that
	       * specifies how the associated DOM property should be accessed or rendered.
	       */
	      MUST_USE_PROPERTY: 0x1,
	      HAS_BOOLEAN_VALUE: 0x4,
	      HAS_NUMERIC_VALUE: 0x8,
	      HAS_POSITIVE_NUMERIC_VALUE: 0x10 | 0x8,
	      HAS_OVERLOADED_BOOLEAN_VALUE: 0x20,
	      HAS_STRING_BOOLEAN_VALUE: 0x40,
	
	      /**
	       * Inject some specialized knowledge about the DOM. This takes a config object
	       * with the following properties:
	       *
	       * Properties: object mapping DOM property name to one of the
	       * DOMPropertyInjection constants or null. If your attribute isn't in here,
	       * it won't get written to the DOM.
	       *
	       * DOMAttributeNames: object mapping React attribute name to the DOM
	       * attribute name. Attribute names not specified use the **lowercase**
	       * normalized name.
	       *
	       * DOMAttributeNamespaces: object mapping React attribute name to the DOM
	       * attribute namespace URL. (Attribute names not specified use no namespace.)
	       *
	       * DOMPropertyNames: similar to DOMAttributeNames but for DOM properties.
	       * Property names not specified use the normalized name.
	       *
	       * DOMMutationMethods: Properties that require special mutation methods. If
	       * `value` is undefined, the mutation method should unset the property.
	       *
	       * @param {object} domPropertyConfig the config as described above.
	       */
	      injectDOMPropertyConfig: function injectDOMPropertyConfig(domPropertyConfig) {
	        var Injection = DOMPropertyInjection;
	        var Properties = domPropertyConfig.Properties || {};
	        var DOMAttributeNamespaces = domPropertyConfig.DOMAttributeNamespaces || {};
	        var DOMAttributeNames = domPropertyConfig.DOMAttributeNames || {};
	        var DOMMutationMethods = domPropertyConfig.DOMMutationMethods || {};
	
	        for (var propName in Properties) {
	          !!properties.hasOwnProperty(propName) ? invariant(false, "injectDOMPropertyConfig(...): You're trying to inject DOM property '%s' which has already been injected. You may be accidentally injecting the same DOM property config twice, or you may be injecting two configs that have conflicting property names.", propName) : void 0;
	
	          var lowerCased = propName.toLowerCase();
	          var propConfig = Properties[propName];
	
	          var propertyInfo = {
	            attributeName: lowerCased,
	            attributeNamespace: null,
	            propertyName: propName,
	            mutationMethod: null,
	
	            mustUseProperty: checkMask(propConfig, Injection.MUST_USE_PROPERTY),
	            hasBooleanValue: checkMask(propConfig, Injection.HAS_BOOLEAN_VALUE),
	            hasNumericValue: checkMask(propConfig, Injection.HAS_NUMERIC_VALUE),
	            hasPositiveNumericValue: checkMask(propConfig, Injection.HAS_POSITIVE_NUMERIC_VALUE),
	            hasOverloadedBooleanValue: checkMask(propConfig, Injection.HAS_OVERLOADED_BOOLEAN_VALUE),
	            hasStringBooleanValue: checkMask(propConfig, Injection.HAS_STRING_BOOLEAN_VALUE)
	          };
	          !(propertyInfo.hasBooleanValue + propertyInfo.hasNumericValue + propertyInfo.hasOverloadedBooleanValue <= 1) ? invariant(false, "DOMProperty: Value can be one of boolean, overloaded boolean, or numeric value, but not a combination: %s", propName) : void 0;
	
	          if (DOMAttributeNames.hasOwnProperty(propName)) {
	            var attributeName = DOMAttributeNames[propName];
	
	            propertyInfo.attributeName = attributeName;
	          }
	
	          if (DOMAttributeNamespaces.hasOwnProperty(propName)) {
	            propertyInfo.attributeNamespace = DOMAttributeNamespaces[propName];
	          }
	
	          if (DOMMutationMethods.hasOwnProperty(propName)) {
	            propertyInfo.mutationMethod = DOMMutationMethods[propName];
	          }
	
	          // Downcase references to whitelist properties to check for membership
	          // without case-sensitivity. This allows the whitelist to pick up
	          // `allowfullscreen`, which should be written using the property configuration
	          // for `allowFullscreen`
	          properties[propName] = propertyInfo;
	        }
	      }
	    };
	
	    /* eslint-disable max-len */
	    var ATTRIBUTE_NAME_START_CHAR = ':A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD';
	    /* eslint-enable max-len */
	    var ATTRIBUTE_NAME_CHAR = ATTRIBUTE_NAME_START_CHAR + '\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040';
	
	    var ROOT_ATTRIBUTE_NAME = 'data-reactroot';
	
	    /**
	     * Map from property "standard name" to an object with info about how to set
	     * the property in the DOM. Each object contains:
	     *
	     * attributeName:
	     *   Used when rendering markup or with `*Attribute()`.
	     * attributeNamespace
	     * propertyName:
	     *   Used on DOM node instances. (This includes properties that mutate due to
	     *   external factors.)
	     * mutationMethod:
	     *   If non-null, used instead of the property or `setAttribute()` after
	     *   initial render.
	     * mustUseProperty:
	     *   Whether the property must be accessed and mutated as an object property.
	     * hasBooleanValue:
	     *   Whether the property should be removed when set to a falsey value.
	     * hasNumericValue:
	     *   Whether the property must be numeric or parse as a numeric and should be
	     *   removed when set to a falsey value.
	     * hasPositiveNumericValue:
	     *   Whether the property must be positive numeric or parse as a positive
	     *   numeric and should be removed when set to a falsey value.
	     * hasOverloadedBooleanValue:
	     *   Whether the property can be used as a flag as well as with a value.
	     *   Removed when strictly equal to false; present without a value when
	     *   strictly equal to true; present with a value otherwise.
	     */
	    var properties = {};
	
	    /**
	     * Checks whether a property name is a writeable attribute.
	     * @method
	     */
	    function shouldSetAttribute(name, value) {
	      if (isReservedProp(name)) {
	        return false;
	      }
	      if (name.length > 2 && (name[0] === 'o' || name[0] === 'O') && (name[1] === 'n' || name[1] === 'N')) {
	        return false;
	      }
	      if (value === null) {
	        return true;
	      }
	      switch (typeof value) {
	        case 'boolean':
	          return shouldAttributeAcceptBooleanValue(name);
	        case 'undefined':
	        case 'number':
	        case 'string':
	        case 'object':
	          return true;
	        default:
	          // function, symbol
	          return false;
	      }
	    }
	
	    function getPropertyInfo(name) {
	      return properties.hasOwnProperty(name) ? properties[name] : null;
	    }
	
	    function shouldAttributeAcceptBooleanValue(name) {
	      if (isReservedProp(name)) {
	        return true;
	      }
	      var propertyInfo = getPropertyInfo(name);
	      if (propertyInfo) {
	        return propertyInfo.hasBooleanValue || propertyInfo.hasStringBooleanValue || propertyInfo.hasOverloadedBooleanValue;
	      }
	      var prefix = name.toLowerCase().slice(0, 5);
	      return prefix === 'data-' || prefix === 'aria-';
	    }
	
	    /**
	     * Checks to see if a property name is within the list of properties
	     * reserved for internal React operations. These properties should
	     * not be set on an HTML element.
	     *
	     * @private
	     * @param {string} name
	     * @return {boolean} If the name is within reserved props
	     */
	    function isReservedProp(name) {
	      return RESERVED_PROPS.hasOwnProperty(name);
	    }
	
	    var injection = DOMPropertyInjection;
	
	    var MUST_USE_PROPERTY = injection.MUST_USE_PROPERTY;
	    var HAS_BOOLEAN_VALUE = injection.HAS_BOOLEAN_VALUE;
	    var HAS_NUMERIC_VALUE = injection.HAS_NUMERIC_VALUE;
	    var HAS_POSITIVE_NUMERIC_VALUE = injection.HAS_POSITIVE_NUMERIC_VALUE;
	    var HAS_OVERLOADED_BOOLEAN_VALUE = injection.HAS_OVERLOADED_BOOLEAN_VALUE;
	    var HAS_STRING_BOOLEAN_VALUE = injection.HAS_STRING_BOOLEAN_VALUE;
	
	    var HTMLDOMPropertyConfig = {
	      // When adding attributes to this list, be sure to also add them to
	      // the `possibleStandardNames` module to ensure casing and incorrect
	      // name warnings.
	      Properties: {
	        allowFullScreen: HAS_BOOLEAN_VALUE,
	        // specifies target context for links with `preload` type
	        async: HAS_BOOLEAN_VALUE,
	        // Note: there is a special case that prevents it from being written to the DOM
	        // on the client side because the browsers are inconsistent. Instead we call focus().
	        autoFocus: HAS_BOOLEAN_VALUE,
	        autoPlay: HAS_BOOLEAN_VALUE,
	        capture: HAS_OVERLOADED_BOOLEAN_VALUE,
	        checked: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,
	        cols: HAS_POSITIVE_NUMERIC_VALUE,
	        contentEditable: HAS_STRING_BOOLEAN_VALUE,
	        controls: HAS_BOOLEAN_VALUE,
	        'default': HAS_BOOLEAN_VALUE,
	        defer: HAS_BOOLEAN_VALUE,
	        disabled: HAS_BOOLEAN_VALUE,
	        download: HAS_OVERLOADED_BOOLEAN_VALUE,
	        draggable: HAS_STRING_BOOLEAN_VALUE,
	        formNoValidate: HAS_BOOLEAN_VALUE,
	        hidden: HAS_BOOLEAN_VALUE,
	        loop: HAS_BOOLEAN_VALUE,
	        // Caution; `option.selected` is not updated if `select.multiple` is
	        // disabled with `removeAttribute`.
	        multiple: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,
	        muted: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,
	        noValidate: HAS_BOOLEAN_VALUE,
	        open: HAS_BOOLEAN_VALUE,
	        playsInline: HAS_BOOLEAN_VALUE,
	        readOnly: HAS_BOOLEAN_VALUE,
	        required: HAS_BOOLEAN_VALUE,
	        reversed: HAS_BOOLEAN_VALUE,
	        rows: HAS_POSITIVE_NUMERIC_VALUE,
	        rowSpan: HAS_NUMERIC_VALUE,
	        scoped: HAS_BOOLEAN_VALUE,
	        seamless: HAS_BOOLEAN_VALUE,
	        selected: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,
	        size: HAS_POSITIVE_NUMERIC_VALUE,
	        start: HAS_NUMERIC_VALUE,
	        // support for projecting regular DOM Elements via V1 named slots ( shadow dom )
	        span: HAS_POSITIVE_NUMERIC_VALUE,
	        spellCheck: HAS_STRING_BOOLEAN_VALUE,
	        // Style must be explicitly set in the attribute list. React components
	        // expect a style object
	        style: 0,
	        // Keep it in the whitelist because it is case-sensitive for SVG.
	        tabIndex: 0,
	        // itemScope is for for Microdata support.
	        // See http://schema.org/docs/gs.html
	        itemScope: HAS_BOOLEAN_VALUE,
	        // These attributes must stay in the white-list because they have
	        // different attribute names (see DOMAttributeNames below)
	        acceptCharset: 0,
	        className: 0,
	        htmlFor: 0,
	        httpEquiv: 0,
	        // Attributes with mutation methods must be specified in the whitelist
	        // Set the string boolean flag to allow the behavior
	        value: HAS_STRING_BOOLEAN_VALUE
	      },
	      DOMAttributeNames: {
	        acceptCharset: 'accept-charset',
	        className: 'class',
	        htmlFor: 'for',
	        httpEquiv: 'http-equiv'
	      },
	      DOMMutationMethods: {
	        value: function value(node, _value) {
	          if (_value == null) {
	            return node.removeAttribute('value');
	          }
	
	          // Number inputs get special treatment due to some edge cases in
	          // Chrome. Let everything else assign the value attribute as normal.
	          // https://github.com/facebook/react/issues/7253#issuecomment-236074326
	          if (node.type !== 'number' || node.hasAttribute('value') === false) {
	            node.setAttribute('value', '' + _value);
	          } else if (node.validity && !node.validity.badInput && node.ownerDocument.activeElement !== node) {
	            // Don't assign an attribute if validation reports bad
	            // input. Chrome will clear the value. Additionally, don't
	            // operate on inputs that have focus, otherwise Chrome might
	            // strip off trailing decimal places and cause the user's
	            // cursor position to jump to the beginning of the input.
	            //
	            // In ReactDOMInput, we have an onBlur event that will trigger
	            // this function again when focus is lost.
	            node.setAttribute('value', '' + _value);
	          }
	        }
	      }
	    };
	
	    var HAS_STRING_BOOLEAN_VALUE$1 = injection.HAS_STRING_BOOLEAN_VALUE;
	
	    var NS = {
	      xlink: 'http://www.w3.org/1999/xlink',
	      xml: 'http://www.w3.org/XML/1998/namespace'
	    };
	
	    /**
	     * This is a list of all SVG attributes that need special casing,
	     * namespacing, or boolean value assignment.
	     *
	     * When adding attributes to this list, be sure to also add them to
	     * the `possibleStandardNames` module to ensure casing and incorrect
	     * name warnings.
	     *
	     * SVG Attributes List:
	     * https://www.w3.org/TR/SVG/attindex.html
	     * SMIL Spec:
	     * https://www.w3.org/TR/smil
	     */
	    var ATTRS = ['accent-height', 'alignment-baseline', 'arabic-form', 'baseline-shift', 'cap-height', 'clip-path', 'clip-rule', 'color-interpolation', 'color-interpolation-filters', 'color-profile', 'color-rendering', 'dominant-baseline', 'enable-background', 'fill-opacity', 'fill-rule', 'flood-color', 'flood-opacity', 'font-family', 'font-size', 'font-size-adjust', 'font-stretch', 'font-style', 'font-variant', 'font-weight', 'glyph-name', 'glyph-orientation-horizontal', 'glyph-orientation-vertical', 'horiz-adv-x', 'horiz-origin-x', 'image-rendering', 'letter-spacing', 'lighting-color', 'marker-end', 'marker-mid', 'marker-start', 'overline-position', 'overline-thickness', 'paint-order', 'panose-1', 'pointer-events', 'rendering-intent', 'shape-rendering', 'stop-color', 'stop-opacity', 'strikethrough-position', 'strikethrough-thickness', 'stroke-dasharray', 'stroke-dashoffset', 'stroke-linecap', 'stroke-linejoin', 'stroke-miterlimit', 'stroke-opacity', 'stroke-width', 'text-anchor', 'text-decoration', 'text-rendering', 'underline-position', 'underline-thickness', 'unicode-bidi', 'unicode-range', 'units-per-em', 'v-alphabetic', 'v-hanging', 'v-ideographic', 'v-mathematical', 'vector-effect', 'vert-adv-y', 'vert-origin-x', 'vert-origin-y', 'word-spacing', 'writing-mode', 'x-height', 'xlink:actuate', 'xlink:arcrole', 'xlink:href', 'xlink:role', 'xlink:show', 'xlink:title', 'xlink:type', 'xml:base', 'xmlns:xlink', 'xml:lang', 'xml:space'];
	
	    var SVGDOMPropertyConfig = {
	      Properties: {
	        autoReverse: HAS_STRING_BOOLEAN_VALUE$1,
	        externalResourcesRequired: HAS_STRING_BOOLEAN_VALUE$1,
	        preserveAlpha: HAS_STRING_BOOLEAN_VALUE$1
	      },
	      DOMAttributeNames: {
	        autoReverse: 'autoReverse',
	        externalResourcesRequired: 'externalResourcesRequired',
	        preserveAlpha: 'preserveAlpha'
	      },
	      DOMAttributeNamespaces: {
	        xlinkActuate: NS.xlink,
	        xlinkArcrole: NS.xlink,
	        xlinkHref: NS.xlink,
	        xlinkRole: NS.xlink,
	        xlinkShow: NS.xlink,
	        xlinkTitle: NS.xlink,
	        xlinkType: NS.xlink,
	        xmlBase: NS.xml,
	        xmlLang: NS.xml,
	        xmlSpace: NS.xml
	      }
	    };
	
	    var CAMELIZE = /[\-\:]([a-z])/g;
	    var capitalize = function capitalize(token) {
	      return token[1].toUpperCase();
	    };
	
	    ATTRS.forEach(function (original) {
	      var reactName = original.replace(CAMELIZE, capitalize);
	
	      SVGDOMPropertyConfig.Properties[reactName] = 0;
	      SVGDOMPropertyConfig.DOMAttributeNames[reactName] = original;
	    });
	
	    injection.injectDOMPropertyConfig(HTMLDOMPropertyConfig);
	    injection.injectDOMPropertyConfig(SVGDOMPropertyConfig);
	
	    // TODO: this is special because it gets imported during build.
	
	    var ReactVersion = '16.2.0';
	
	    var describeComponentFrame = function describeComponentFrame(name, source, ownerName) {
	      return '\n    in ' + (name || 'Unknown') + (source ? ' (at ' + source.fileName.replace(/^.*[\\\/]/, '') + ':' + source.lineNumber + ')' : ownerName ? ' (created by ' + ownerName + ')' : '');
	    };
	
	    var ReactInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
	
	    var ReactCurrentOwner = ReactInternals.ReactCurrentOwner;
	    var ReactDebugCurrentFrame = ReactInternals.ReactDebugCurrentFrame;
	
	    // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
	    // nor polyfill, then a plain number is used for performance.
	    var hasSymbol = typeof Symbol === 'function' && Symbol['for'];
	
	    var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol['for']('react.fragment') : 0xeacb;
	
	    // code copied and modified from escape-html
	    /**
	     * Module variables.
	     * @private
	     */
	
	    var matchHtmlRegExp = /["'&<>]/;
	
	    /**
	     * Escapes special characters and HTML entities in a given html string.
	     *
	     * @param  {string} string HTML string to escape for later insertion
	     * @return {string}
	     * @public
	     */
	
	    function escapeHtml(string) {
	      var str = '' + string;
	      var match = matchHtmlRegExp.exec(str);
	
	      if (!match) {
	        return str;
	      }
	
	      var escape;
	      var html = '';
	      var index = 0;
	      var lastIndex = 0;
	
	      for (index = match.index; index < str.length; index++) {
	        switch (str.charCodeAt(index)) {
	          case 34:
	            // "
	            escape = '&quot;';
	            break;
	          case 38:
	            // &
	            escape = '&amp;';
	            break;
	          case 39:
	            // '
	            escape = '&#x27;'; // modified from escape-html; used to be '&#39'
	            break;
	          case 60:
	            // <
	            escape = '&lt;';
	            break;
	          case 62:
	            // >
	            escape = '&gt;';
	            break;
	          default:
	            continue;
	        }
	
	        if (lastIndex !== index) {
	          html += str.substring(lastIndex, index);
	        }
	
	        lastIndex = index + 1;
	        html += escape;
	      }
	
	      return lastIndex !== index ? html + str.substring(lastIndex, index) : html;
	    }
	    // end code copied and modified from escape-html
	
	    /**
	     * Escapes text to prevent scripting attacks.
	     *
	     * @param {*} text Text value to escape.
	     * @return {string} An escaped string.
	     */
	    function escapeTextForBrowser(text) {
	      if (typeof text === 'boolean' || typeof text === 'number') {
	        // this shortcircuit helps perf for types that we know will never have
	        // special characters, especially given that this function is used often
	        // for numeric dom ids.
	        return '' + text;
	      }
	      return escapeHtml(text);
	    }
	
	    /**
	     * Escapes attribute value to prevent scripting attacks.
	     *
	     * @param {*} value Value to escape.
	     * @return {string} An escaped string.
	     */
	    function quoteAttributeValueForBrowser(value) {
	      return '"' + escapeTextForBrowser(value) + '"';
	    }
	
	    // isAttributeNameSafe() is currently duplicated in DOMPropertyOperations.
	    // TODO: Find a better place for this.
	    var VALID_ATTRIBUTE_NAME_REGEX = new RegExp('^[' + ATTRIBUTE_NAME_START_CHAR + '][' + ATTRIBUTE_NAME_CHAR + ']*$');
	    var illegalAttributeNameCache = {};
	    var validatedAttributeNameCache = {};
	    function isAttributeNameSafe(attributeName) {
	      if (validatedAttributeNameCache.hasOwnProperty(attributeName)) {
	        return true;
	      }
	      if (illegalAttributeNameCache.hasOwnProperty(attributeName)) {
	        return false;
	      }
	      if (VALID_ATTRIBUTE_NAME_REGEX.test(attributeName)) {
	        validatedAttributeNameCache[attributeName] = true;
	        return true;
	      }
	      illegalAttributeNameCache[attributeName] = true;
	      {
	        warning(false, 'Invalid attribute name: `%s`', attributeName);
	      }
	      return false;
	    }
	
	    // shouldIgnoreValue() is currently duplicated in DOMPropertyOperations.
	    // TODO: Find a better place for this.
	    function shouldIgnoreValue(propertyInfo, value) {
	      return value == null || propertyInfo.hasBooleanValue && !value || propertyInfo.hasNumericValue && isNaN(value) || propertyInfo.hasPositiveNumericValue && value < 1 || propertyInfo.hasOverloadedBooleanValue && value === false;
	    }
	
	    /**
	     * Operations for dealing with DOM properties.
	     */
	
	    /**
	     * Creates markup for the ID property.
	     *
	     * @param {string} id Unescaped ID.
	     * @return {string} Markup string.
	     */
	
	    function createMarkupForRoot() {
	      return ROOT_ATTRIBUTE_NAME + '=""';
	    }
	
	    /**
	     * Creates markup for a property.
	     *
	     * @param {string} name
	     * @param {*} value
	     * @return {?string} Markup string, or null if the property was invalid.
	     */
	    function createMarkupForProperty(name, value) {
	      var propertyInfo = getPropertyInfo(name);
	      if (propertyInfo) {
	        if (shouldIgnoreValue(propertyInfo, value)) {
	          return '';
	        }
	        var attributeName = propertyInfo.attributeName;
	        if (propertyInfo.hasBooleanValue || propertyInfo.hasOverloadedBooleanValue && value === true) {
	          return attributeName + '=""';
	        } else if (typeof value !== 'boolean' || shouldAttributeAcceptBooleanValue(name)) {
	          return attributeName + '=' + quoteAttributeValueForBrowser(value);
	        }
	      } else if (shouldSetAttribute(name, value)) {
	        if (value == null) {
	          return '';
	        }
	        return name + '=' + quoteAttributeValueForBrowser(value);
	      }
	      return null;
	    }
	
	    /**
	     * Creates markup for a custom property.
	     *
	     * @param {string} name
	     * @param {*} value
	     * @return {string} Markup string, or empty string if the property was invalid.
	     */
	    function createMarkupForCustomAttribute(name, value) {
	      if (!isAttributeNameSafe(name) || value == null) {
	        return '';
	      }
	      return name + '=' + quoteAttributeValueForBrowser(value);
	    }
	
	    var HTML_NAMESPACE = 'http://www.w3.org/1999/xhtml';
	    var MATH_NAMESPACE = 'http://www.w3.org/1998/Math/MathML';
	    var SVG_NAMESPACE = 'http://www.w3.org/2000/svg';
	
	    var Namespaces = {
	      html: HTML_NAMESPACE,
	      mathml: MATH_NAMESPACE,
	      svg: SVG_NAMESPACE
	    };
	
	    // Assumes there is no parent namespace.
	    function getIntrinsicNamespace(type) {
	      switch (type) {
	        case 'svg':
	          return SVG_NAMESPACE;
	        case 'math':
	          return MATH_NAMESPACE;
	        default:
	          return HTML_NAMESPACE;
	      }
	    }
	
	    function getChildNamespace(parentNamespace, type) {
	      if (parentNamespace == null || parentNamespace === HTML_NAMESPACE) {
	        // No (or default) parent namespace: potential entry point.
	        return getIntrinsicNamespace(type);
	      }
	      if (parentNamespace === SVG_NAMESPACE && type === 'foreignObject') {
	        // We're leaving SVG.
	        return HTML_NAMESPACE;
	      }
	      // By default, pass namespace below.
	      return parentNamespace;
	    }
	
	    var ReactControlledValuePropTypes = {
	      checkPropTypes: null
	    };
	
	    {
	      var hasReadOnlyValue = {
	        button: true,
	        checkbox: true,
	        image: true,
	        hidden: true,
	        radio: true,
	        reset: true,
	        submit: true
	      };
	
	      var propTypes = {
	        value: function value(props, propName, componentName) {
	          if (!props[propName] || hasReadOnlyValue[props.type] || props.onChange || props.readOnly || props.disabled) {
	            return null;
	          }
	          return new Error('You provided a `value` prop to a form field without an ' + '`onChange` handler. This will render a read-only field. If ' + 'the field should be mutable use `defaultValue`. Otherwise, ' + 'set either `onChange` or `readOnly`.');
	        },
	        checked: function checked(props, propName, componentName) {
	          if (!props[propName] || props.onChange || props.readOnly || props.disabled) {
	            return null;
	          }
	          return new Error('You provided a `checked` prop to a form field without an ' + '`onChange` handler. This will render a read-only field. If ' + 'the field should be mutable use `defaultChecked`. Otherwise, ' + 'set either `onChange` or `readOnly`.');
	        }
	      };
	
	      /**
	       * Provide a linked `value` attribute for controlled forms. You should not use
	       * this outside of the ReactDOM controlled form components.
	       */
	      ReactControlledValuePropTypes.checkPropTypes = function (tagName, props, getStack) {
	        checkPropTypes(propTypes, props, 'prop', tagName, getStack);
	      };
	    }
	
	    // For HTML, certain tags should omit their close tag. We keep a whitelist for
	    // those special-case tags.
	
	    var omittedCloseTags = {
	      area: true,
	      base: true,
	      br: true,
	      col: true,
	      embed: true,
	      hr: true,
	      img: true,
	      input: true,
	      keygen: true,
	      link: true,
	      meta: true,
	      param: true,
	      source: true,
	      track: true,
	      wbr: true
	    };
	
	    // For HTML, certain tags cannot have children. This has the same purpose as
	    // `omittedCloseTags` except that `menuitem` should still have its closing tag.
	
	    var voidElementTags = _assign({
	      menuitem: true
	    }, omittedCloseTags);
	
	    var HTML = '__html';
	
	    function assertValidProps(tag, props, getStack) {
	      if (!props) {
	        return;
	      }
	      // Note the use of `==` which checks for null or undefined.
	      if (voidElementTags[tag]) {
	        !(props.children == null && props.dangerouslySetInnerHTML == null) ? invariant(false, '%s is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.%s', tag, getStack()) : void 0;
	      }
	      if (props.dangerouslySetInnerHTML != null) {
	        !(props.children == null) ? invariant(false, 'Can only set one of `children` or `props.dangerouslySetInnerHTML`.') : void 0;
	        !(typeof props.dangerouslySetInnerHTML === 'object' && HTML in props.dangerouslySetInnerHTML) ? invariant(false, '`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://fb.me/react-invariant-dangerously-set-inner-html for more information.') : void 0;
	      }
	      {
	        warning(props.suppressContentEditableWarning || !props.contentEditable || props.children == null, 'A component is `contentEditable` and contains `children` managed by ' + 'React. It is now your responsibility to guarantee that none of ' + 'those nodes are unexpectedly modified or duplicated. This is ' + 'probably not intentional.%s', getStack());
	      }
	      !(props.style == null || typeof props.style === 'object') ? invariant(false, 'The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + \'em\'}} when using JSX.%s', getStack()) : void 0;
	    }
	
	    /**
	     * CSS properties which accept numbers but are not in units of "px".
	     */
	    var isUnitlessNumber = {
	      animationIterationCount: true,
	      borderImageOutset: true,
	      borderImageSlice: true,
	      borderImageWidth: true,
	      boxFlex: true,
	      boxFlexGroup: true,
	      boxOrdinalGroup: true,
	      columnCount: true,
	      columns: true,
	      flex: true,
	      flexGrow: true,
	      flexPositive: true,
	      flexShrink: true,
	      flexNegative: true,
	      flexOrder: true,
	      gridRow: true,
	      gridRowEnd: true,
	      gridRowSpan: true,
	      gridRowStart: true,
	      gridColumn: true,
	      gridColumnEnd: true,
	      gridColumnSpan: true,
	      gridColumnStart: true,
	      fontWeight: true,
	      lineClamp: true,
	      lineHeight: true,
	      opacity: true,
	      order: true,
	      orphans: true,
	      tabSize: true,
	      widows: true,
	      zIndex: true,
	      zoom: true,
	
	      // SVG-related properties
	      fillOpacity: true,
	      floodOpacity: true,
	      stopOpacity: true,
	      strokeDasharray: true,
	      strokeDashoffset: true,
	      strokeMiterlimit: true,
	      strokeOpacity: true,
	      strokeWidth: true
	    };
	
	    /**
	     * @param {string} prefix vendor-specific prefix, eg: Webkit
	     * @param {string} key style name, eg: transitionDuration
	     * @return {string} style name prefixed with `prefix`, properly camelCased, eg:
	     * WebkitTransitionDuration
	     */
	    function prefixKey(prefix, key) {
	      return prefix + key.charAt(0).toUpperCase() + key.substring(1);
	    }
	
	    /**
	     * Support style names that may come passed in prefixed by adding permutations
	     * of vendor prefixes.
	     */
	    var prefixes = ['Webkit', 'ms', 'Moz', 'O'];
	
	    // Using Object.keys here, or else the vanilla for-in loop makes IE8 go into an
	    // infinite loop, because it iterates over the newly added props too.
	    Object.keys(isUnitlessNumber).forEach(function (prop) {
	      prefixes.forEach(function (prefix) {
	        isUnitlessNumber[prefixKey(prefix, prop)] = isUnitlessNumber[prop];
	      });
	    });
	
	    /**
	     * Convert a value into the proper css writable value. The style name `name`
	     * should be logical (no hyphens), as specified
	     * in `CSSProperty.isUnitlessNumber`.
	     *
	     * @param {string} name CSS property name such as `topMargin`.
	     * @param {*} value CSS property value such as `10px`.
	     * @return {string} Normalized style value with dimensions applied.
	     */
	    function dangerousStyleValue(name, value, isCustomProperty) {
	      // Note that we've removed escapeTextForBrowser() calls here since the
	      // whole string will be escaped when the attribute is injected into
	      // the markup. If you provide unsafe user data here they can inject
	      // arbitrary CSS which may be problematic (I couldn't repro this):
	      // https://www.owasp.org/index.php/XSS_Filter_Evasion_Cheat_Sheet
	      // http://www.thespanner.co.uk/2007/11/26/ultimate-xss-css-injection/
	      // This is not an XSS hole but instead a potential CSS injection issue
	      // which has lead to a greater discussion about how we're going to
	      // trust URLs moving forward. See #2115901
	
	      var isEmpty = value == null || typeof value === 'boolean' || value === '';
	      if (isEmpty) {
	        return '';
	      }
	
	      if (!isCustomProperty && typeof value === 'number' && value !== 0 && !(isUnitlessNumber.hasOwnProperty(name) && isUnitlessNumber[name])) {
	        return value + 'px'; // Presumes implicit 'px' suffix for unitless numbers
	      }
	
	      return ('' + value).trim();
	    }
	
	    function isCustomComponent(tagName, props) {
	      if (tagName.indexOf('-') === -1) {
	        return typeof props.is === 'string';
	      }
	      switch (tagName) {
	        // These are reserved SVG and MathML elements.
	        // We don't mind this whitelist too much because we expect it to never grow.
	        // The alternative is to track the namespace in a few places which is convoluted.
	        // https://w3c.github.io/webcomponents/spec/custom/#custom-elements-core-concepts
	        case 'annotation-xml':
	        case 'color-profile':
	        case 'font-face':
	        case 'font-face-src':
	        case 'font-face-uri':
	        case 'font-face-format':
	        case 'font-face-name':
	        case 'missing-glyph':
	          return false;
	        default:
	          return true;
	      }
	    }
	
	    var warnValidStyle = emptyFunction;
	
	    {
	      // 'msTransform' is correct, but the other prefixes should be capitalized
	      var badVendoredStyleNamePattern = /^(?:webkit|moz|o)[A-Z]/;
	
	      // style values shouldn't contain a semicolon
	      var badStyleValueWithSemicolonPattern = /;\s*$/;
	
	      var warnedStyleNames = {};
	      var warnedStyleValues = {};
	      var warnedForNaNValue = false;
	      var warnedForInfinityValue = false;
	
	      var warnHyphenatedStyleName = function warnHyphenatedStyleName(name, getStack) {
	        if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
	          return;
	        }
	
	        warnedStyleNames[name] = true;
	        warning(false, 'Unsupported style property %s. Did you mean %s?%s', name, camelizeStyleName(name), getStack());
	      };
	
	      var warnBadVendoredStyleName = function warnBadVendoredStyleName(name, getStack) {
	        if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
	          return;
	        }
	
	        warnedStyleNames[name] = true;
	        warning(false, 'Unsupported vendor-prefixed style property %s. Did you mean %s?%s', name, name.charAt(0).toUpperCase() + name.slice(1), getStack());
	      };
	
	      var warnStyleValueWithSemicolon = function warnStyleValueWithSemicolon(name, value, getStack) {
	        if (warnedStyleValues.hasOwnProperty(value) && warnedStyleValues[value]) {
	          return;
	        }
	
	        warnedStyleValues[value] = true;
	        warning(false, "Style property values shouldn't contain a semicolon. " + 'Try "%s: %s" instead.%s', name, value.replace(badStyleValueWithSemicolonPattern, ''), getStack());
	      };
	
	      var warnStyleValueIsNaN = function warnStyleValueIsNaN(name, value, getStack) {
	        if (warnedForNaNValue) {
	          return;
	        }
	
	        warnedForNaNValue = true;
	        warning(false, '`NaN` is an invalid value for the `%s` css style property.%s', name, getStack());
	      };
	
	      var warnStyleValueIsInfinity = function warnStyleValueIsInfinity(name, value, getStack) {
	        if (warnedForInfinityValue) {
	          return;
	        }
	
	        warnedForInfinityValue = true;
	        warning(false, '`Infinity` is an invalid value for the `%s` css style property.%s', name, getStack());
	      };
	
	      warnValidStyle = function (name, value, getStack) {
	        if (name.indexOf('-') > -1) {
	          warnHyphenatedStyleName(name, getStack);
	        } else if (badVendoredStyleNamePattern.test(name)) {
	          warnBadVendoredStyleName(name, getStack);
	        } else if (badStyleValueWithSemicolonPattern.test(value)) {
	          warnStyleValueWithSemicolon(name, value, getStack);
	        }
	
	        if (typeof value === 'number') {
	          if (isNaN(value)) {
	            warnStyleValueIsNaN(name, value, getStack);
	          } else if (!isFinite(value)) {
	            warnStyleValueIsInfinity(name, value, getStack);
	          }
	        }
	      };
	    }
	
	    var warnValidStyle$1 = warnValidStyle;
	
	    var ariaProperties = {
	      'aria-current': 0, // state
	      'aria-details': 0,
	      'aria-disabled': 0, // state
	      'aria-hidden': 0, // state
	      'aria-invalid': 0, // state
	      'aria-keyshortcuts': 0,
	      'aria-label': 0,
	      'aria-roledescription': 0,
	      // Widget Attributes
	      'aria-autocomplete': 0,
	      'aria-checked': 0,
	      'aria-expanded': 0,
	      'aria-haspopup': 0,
	      'aria-level': 0,
	      'aria-modal': 0,
	      'aria-multiline': 0,
	      'aria-multiselectable': 0,
	      'aria-orientation': 0,
	      'aria-placeholder': 0,
	      'aria-pressed': 0,
	      'aria-readonly': 0,
	      'aria-required': 0,
	      'aria-selected': 0,
	      'aria-sort': 0,
	      'aria-valuemax': 0,
	      'aria-valuemin': 0,
	      'aria-valuenow': 0,
	      'aria-valuetext': 0,
	      // Live Region Attributes
	      'aria-atomic': 0,
	      'aria-busy': 0,
	      'aria-live': 0,
	      'aria-relevant': 0,
	      // Drag-and-Drop Attributes
	      'aria-dropeffect': 0,
	      'aria-grabbed': 0,
	      // Relationship Attributes
	      'aria-activedescendant': 0,
	      'aria-colcount': 0,
	      'aria-colindex': 0,
	      'aria-colspan': 0,
	      'aria-controls': 0,
	      'aria-describedby': 0,
	      'aria-errormessage': 0,
	      'aria-flowto': 0,
	      'aria-labelledby': 0,
	      'aria-owns': 0,
	      'aria-posinset': 0,
	      'aria-rowcount': 0,
	      'aria-rowindex': 0,
	      'aria-rowspan': 0,
	      'aria-setsize': 0
	    };
	
	    var warnedProperties = {};
	    var rARIA = new RegExp('^(aria)-[' + ATTRIBUTE_NAME_CHAR + ']*$');
	    var rARIACamel = new RegExp('^(aria)[A-Z][' + ATTRIBUTE_NAME_CHAR + ']*$');
	
	    var hasOwnProperty = Object.prototype.hasOwnProperty;
	
	    function getStackAddendum$1() {
	      var stack = ReactDebugCurrentFrame.getStackAddendum();
	      return stack != null ? stack : '';
	    }
	
	    function validateProperty(tagName, name) {
	      if (hasOwnProperty.call(warnedProperties, name) && warnedProperties[name]) {
	        return true;
	      }
	
	      if (rARIACamel.test(name)) {
	        var ariaName = 'aria-' + name.slice(4).toLowerCase();
	        var correctName = ariaProperties.hasOwnProperty(ariaName) ? ariaName : null;
	
	        // If this is an aria-* attribute, but is not listed in the known DOM
	        // DOM properties, then it is an invalid aria-* attribute.
	        if (correctName == null) {
	          warning(false, 'Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.%s', name, getStackAddendum$1());
	          warnedProperties[name] = true;
	          return true;
	        }
	        // aria-* attributes should be lowercase; suggest the lowercase version.
	        if (name !== correctName) {
	          warning(false, 'Invalid ARIA attribute `%s`. Did you mean `%s`?%s', name, correctName, getStackAddendum$1());
	          warnedProperties[name] = true;
	          return true;
	        }
	      }
	
	      if (rARIA.test(name)) {
	        var lowerCasedName = name.toLowerCase();
	        var standardName = ariaProperties.hasOwnProperty(lowerCasedName) ? lowerCasedName : null;
	
	        // If this is an aria-* attribute, but is not listed in the known DOM
	        // DOM properties, then it is an invalid aria-* attribute.
	        if (standardName == null) {
	          warnedProperties[name] = true;
	          return false;
	        }
	        // aria-* attributes should be lowercase; suggest the lowercase version.
	        if (name !== standardName) {
	          warning(false, 'Unknown ARIA attribute `%s`. Did you mean `%s`?%s', name, standardName, getStackAddendum$1());
	          warnedProperties[name] = true;
	          return true;
	        }
	      }
	
	      return true;
	    }
	
	    function warnInvalidARIAProps(type, props) {
	      var invalidProps = [];
	
	      for (var key in props) {
	        var isValid = validateProperty(type, key);
	        if (!isValid) {
	          invalidProps.push(key);
	        }
	      }
	
	      var unknownPropString = invalidProps.map(function (prop) {
	        return '`' + prop + '`';
	      }).join(', ');
	
	      if (invalidProps.length === 1) {
	        warning(false, 'Invalid aria prop %s on <%s> tag. ' + 'For details, see https://fb.me/invalid-aria-prop%s', unknownPropString, type, getStackAddendum$1());
	      } else if (invalidProps.length > 1) {
	        warning(false, 'Invalid aria props %s on <%s> tag. ' + 'For details, see https://fb.me/invalid-aria-prop%s', unknownPropString, type, getStackAddendum$1());
	      }
	    }
	
	    function validateProperties(type, props) {
	      if (isCustomComponent(type, props)) {
	        return;
	      }
	      warnInvalidARIAProps(type, props);
	    }
	
	    var didWarnValueNull = false;
	
	    function getStackAddendum$2() {
	      var stack = ReactDebugCurrentFrame.getStackAddendum();
	      return stack != null ? stack : '';
	    }
	
	    function validateProperties$1(type, props) {
	      if (type !== 'input' && type !== 'textarea' && type !== 'select') {
	        return;
	      }
	
	      if (props != null && props.value === null && !didWarnValueNull) {
	        didWarnValueNull = true;
	        if (type === 'select' && props.multiple) {
	          warning(false, '`value` prop on `%s` should not be null. ' + 'Consider using an empty array when `multiple` is set to `true` ' + 'to clear the component or `undefined` for uncontrolled components.%s', type, getStackAddendum$2());
	        } else {
	          warning(false, '`value` prop on `%s` should not be null. ' + 'Consider using an empty string to clear the component or `undefined` ' + 'for uncontrolled components.%s', type, getStackAddendum$2());
	        }
	      }
	    }
	
	    /**
	     * Registers plugins so that they can extract and dispatch events.
	     *
	     * @see {EventPluginHub}
	     */
	
	    /**
	     * Ordered list of injected plugins.
	     */
	
	    /**
	     * Mapping from event name to dispatch config
	     */
	
	    /**
	     * Mapping from registration name to plugin module
	     */
	    var registrationNameModules = {};
	
	    /**
	     * Mapping from registration name to event name
	     */
	
	    /**
	     * Mapping from lowercase registration names to the properly cased version,
	     * used to warn in the case of missing event handlers. Available
	     * only in true.
	     * @type {Object}
	     */
	    var possibleRegistrationNames = {};
	    // Trust the developer to only use possibleRegistrationNames in true
	
	    /**
	     * Injects an ordering of plugins (by plugin name). This allows the ordering
	     * to be decoupled from injection of the actual plugins so that ordering is
	     * always deterministic regardless of packaging, on-the-fly injection, etc.
	     *
	     * @param {array} InjectedEventPluginOrder
	     * @internal
	     * @see {EventPluginHub.injection.injectEventPluginOrder}
	     */
	
	    /**
	     * Injects plugins to be used by `EventPluginHub`. The plugin names must be
	     * in the ordering injected by `injectEventPluginOrder`.
	     *
	     * Plugins can be injected as part of page initialization or on-the-fly.
	     *
	     * @param {object} injectedNamesToPlugins Map from names to plugin modules.
	     * @internal
	     * @see {EventPluginHub.injection.injectEventPluginsByName}
	     */
	
	    // When adding attributes to the HTML or SVG whitelist, be sure to
	    // also add them to this module to ensure casing and incorrect name
	    // warnings.
	    var possibleStandardNames = {
	      // HTML
	      accept: 'accept',
	      acceptcharset: 'acceptCharset',
	      'accept-charset': 'acceptCharset',
	      accesskey: 'accessKey',
	      action: 'action',
	      allowfullscreen: 'allowFullScreen',
	      alt: 'alt',
	      as: 'as',
	      async: 'async',
	      autocapitalize: 'autoCapitalize',
	      autocomplete: 'autoComplete',
	      autocorrect: 'autoCorrect',
	      autofocus: 'autoFocus',
	      autoplay: 'autoPlay',
	      autosave: 'autoSave',
	      capture: 'capture',
	      cellpadding: 'cellPadding',
	      cellspacing: 'cellSpacing',
	      challenge: 'challenge',
	      charset: 'charSet',
	      checked: 'checked',
	      children: 'children',
	      cite: 'cite',
	      'class': 'className',
	      classid: 'classID',
	      classname: 'className',
	      cols: 'cols',
	      colspan: 'colSpan',
	      content: 'content',
	      contenteditable: 'contentEditable',
	      contextmenu: 'contextMenu',
	      controls: 'controls',
	      controlslist: 'controlsList',
	      coords: 'coords',
	      crossorigin: 'crossOrigin',
	      dangerouslysetinnerhtml: 'dangerouslySetInnerHTML',
	      data: 'data',
	      datetime: 'dateTime',
	      'default': 'default',
	      defaultchecked: 'defaultChecked',
	      defaultvalue: 'defaultValue',
	      defer: 'defer',
	      dir: 'dir',
	      disabled: 'disabled',
	      download: 'download',
	      draggable: 'draggable',
	      enctype: 'encType',
	      'for': 'htmlFor',
	      form: 'form',
	      formmethod: 'formMethod',
	      formaction: 'formAction',
	      formenctype: 'formEncType',
	      formnovalidate: 'formNoValidate',
	      formtarget: 'formTarget',
	      frameborder: 'frameBorder',
	      headers: 'headers',
	      height: 'height',
	      hidden: 'hidden',
	      high: 'high',
	      href: 'href',
	      hreflang: 'hrefLang',
	      htmlfor: 'htmlFor',
	      httpequiv: 'httpEquiv',
	      'http-equiv': 'httpEquiv',
	      icon: 'icon',
	      id: 'id',
	      innerhtml: 'innerHTML',
	      inputmode: 'inputMode',
	      integrity: 'integrity',
	      is: 'is',
	      itemid: 'itemID',
	      itemprop: 'itemProp',
	      itemref: 'itemRef',
	      itemscope: 'itemScope',
	      itemtype: 'itemType',
	      keyparams: 'keyParams',
	      keytype: 'keyType',
	      kind: 'kind',
	      label: 'label',
	      lang: 'lang',
	      list: 'list',
	      loop: 'loop',
	      low: 'low',
	      manifest: 'manifest',
	      marginwidth: 'marginWidth',
	      marginheight: 'marginHeight',
	      max: 'max',
	      maxlength: 'maxLength',
	      media: 'media',
	      mediagroup: 'mediaGroup',
	      method: 'method',
	      min: 'min',
	      minlength: 'minLength',
	      multiple: 'multiple',
	      muted: 'muted',
	      name: 'name',
	      nonce: 'nonce',
	      novalidate: 'noValidate',
	      open: 'open',
	      optimum: 'optimum',
	      pattern: 'pattern',
	      placeholder: 'placeholder',
	      playsinline: 'playsInline',
	      poster: 'poster',
	      preload: 'preload',
	      profile: 'profile',
	      radiogroup: 'radioGroup',
	      readonly: 'readOnly',
	      referrerpolicy: 'referrerPolicy',
	      rel: 'rel',
	      required: 'required',
	      reversed: 'reversed',
	      role: 'role',
	      rows: 'rows',
	      rowspan: 'rowSpan',
	      sandbox: 'sandbox',
	      scope: 'scope',
	      scoped: 'scoped',
	      scrolling: 'scrolling',
	      seamless: 'seamless',
	      selected: 'selected',
	      shape: 'shape',
	      size: 'size',
	      sizes: 'sizes',
	      span: 'span',
	      spellcheck: 'spellCheck',
	      src: 'src',
	      srcdoc: 'srcDoc',
	      srclang: 'srcLang',
	      srcset: 'srcSet',
	      start: 'start',
	      step: 'step',
	      style: 'style',
	      summary: 'summary',
	      tabindex: 'tabIndex',
	      target: 'target',
	      title: 'title',
	      type: 'type',
	      usemap: 'useMap',
	      value: 'value',
	      width: 'width',
	      wmode: 'wmode',
	      wrap: 'wrap',
	
	      // SVG
	      about: 'about',
	      accentheight: 'accentHeight',
	      'accent-height': 'accentHeight',
	      accumulate: 'accumulate',
	      additive: 'additive',
	      alignmentbaseline: 'alignmentBaseline',
	      'alignment-baseline': 'alignmentBaseline',
	      allowreorder: 'allowReorder',
	      alphabetic: 'alphabetic',
	      amplitude: 'amplitude',
	      arabicform: 'arabicForm',
	      'arabic-form': 'arabicForm',
	      ascent: 'ascent',
	      attributename: 'attributeName',
	      attributetype: 'attributeType',
	      autoreverse: 'autoReverse',
	      azimuth: 'azimuth',
	      basefrequency: 'baseFrequency',
	      baselineshift: 'baselineShift',
	      'baseline-shift': 'baselineShift',
	      baseprofile: 'baseProfile',
	      bbox: 'bbox',
	      begin: 'begin',
	      bias: 'bias',
	      by: 'by',
	      calcmode: 'calcMode',
	      capheight: 'capHeight',
	      'cap-height': 'capHeight',
	      clip: 'clip',
	      clippath: 'clipPath',
	      'clip-path': 'clipPath',
	      clippathunits: 'clipPathUnits',
	      cliprule: 'clipRule',
	      'clip-rule': 'clipRule',
	      color: 'color',
	      colorinterpolation: 'colorInterpolation',
	      'color-interpolation': 'colorInterpolation',
	      colorinterpolationfilters: 'colorInterpolationFilters',
	      'color-interpolation-filters': 'colorInterpolationFilters',
	      colorprofile: 'colorProfile',
	      'color-profile': 'colorProfile',
	      colorrendering: 'colorRendering',
	      'color-rendering': 'colorRendering',
	      contentscripttype: 'contentScriptType',
	      contentstyletype: 'contentStyleType',
	      cursor: 'cursor',
	      cx: 'cx',
	      cy: 'cy',
	      d: 'd',
	      datatype: 'datatype',
	      decelerate: 'decelerate',
	      descent: 'descent',
	      diffuseconstant: 'diffuseConstant',
	      direction: 'direction',
	      display: 'display',
	      divisor: 'divisor',
	      dominantbaseline: 'dominantBaseline',
	      'dominant-baseline': 'dominantBaseline',
	      dur: 'dur',
	      dx: 'dx',
	      dy: 'dy',
	      edgemode: 'edgeMode',
	      elevation: 'elevation',
	      enablebackground: 'enableBackground',
	      'enable-background': 'enableBackground',
	      end: 'end',
	      exponent: 'exponent',
	      externalresourcesrequired: 'externalResourcesRequired',
	      fill: 'fill',
	      fillopacity: 'fillOpacity',
	      'fill-opacity': 'fillOpacity',
	      fillrule: 'fillRule',
	      'fill-rule': 'fillRule',
	      filter: 'filter',
	      filterres: 'filterRes',
	      filterunits: 'filterUnits',
	      floodopacity: 'floodOpacity',
	      'flood-opacity': 'floodOpacity',
	      floodcolor: 'floodColor',
	      'flood-color': 'floodColor',
	      focusable: 'focusable',
	      fontfamily: 'fontFamily',
	      'font-family': 'fontFamily',
	      fontsize: 'fontSize',
	      'font-size': 'fontSize',
	      fontsizeadjust: 'fontSizeAdjust',
	      'font-size-adjust': 'fontSizeAdjust',
	      fontstretch: 'fontStretch',
	      'font-stretch': 'fontStretch',
	      fontstyle: 'fontStyle',
	      'font-style': 'fontStyle',
	      fontvariant: 'fontVariant',
	      'font-variant': 'fontVariant',
	      fontweight: 'fontWeight',
	      'font-weight': 'fontWeight',
	      format: 'format',
	      from: 'from',
	      fx: 'fx',
	      fy: 'fy',
	      g1: 'g1',
	      g2: 'g2',
	      glyphname: 'glyphName',
	      'glyph-name': 'glyphName',
	      glyphorientationhorizontal: 'glyphOrientationHorizontal',
	      'glyph-orientation-horizontal': 'glyphOrientationHorizontal',
	      glyphorientationvertical: 'glyphOrientationVertical',
	      'glyph-orientation-vertical': 'glyphOrientationVertical',
	      glyphref: 'glyphRef',
	      gradienttransform: 'gradientTransform',
	      gradientunits: 'gradientUnits',
	      hanging: 'hanging',
	      horizadvx: 'horizAdvX',
	      'horiz-adv-x': 'horizAdvX',
	      horizoriginx: 'horizOriginX',
	      'horiz-origin-x': 'horizOriginX',
	      ideographic: 'ideographic',
	      imagerendering: 'imageRendering',
	      'image-rendering': 'imageRendering',
	      in2: 'in2',
	      'in': 'in',
	      inlist: 'inlist',
	      intercept: 'intercept',
	      k1: 'k1',
	      k2: 'k2',
	      k3: 'k3',
	      k4: 'k4',
	      k: 'k',
	      kernelmatrix: 'kernelMatrix',
	      kernelunitlength: 'kernelUnitLength',
	      kerning: 'kerning',
	      keypoints: 'keyPoints',
	      keysplines: 'keySplines',
	      keytimes: 'keyTimes',
	      lengthadjust: 'lengthAdjust',
	      letterspacing: 'letterSpacing',
	      'letter-spacing': 'letterSpacing',
	      lightingcolor: 'lightingColor',
	      'lighting-color': 'lightingColor',
	      limitingconeangle: 'limitingConeAngle',
	      local: 'local',
	      markerend: 'markerEnd',
	      'marker-end': 'markerEnd',
	      markerheight: 'markerHeight',
	      markermid: 'markerMid',
	      'marker-mid': 'markerMid',
	      markerstart: 'markerStart',
	      'marker-start': 'markerStart',
	      markerunits: 'markerUnits',
	      markerwidth: 'markerWidth',
	      mask: 'mask',
	      maskcontentunits: 'maskContentUnits',
	      maskunits: 'maskUnits',
	      mathematical: 'mathematical',
	      mode: 'mode',
	      numoctaves: 'numOctaves',
	      offset: 'offset',
	      opacity: 'opacity',
	      operator: 'operator',
	      order: 'order',
	      orient: 'orient',
	      orientation: 'orientation',
	      origin: 'origin',
	      overflow: 'overflow',
	      overlineposition: 'overlinePosition',
	      'overline-position': 'overlinePosition',
	      overlinethickness: 'overlineThickness',
	      'overline-thickness': 'overlineThickness',
	      paintorder: 'paintOrder',
	      'paint-order': 'paintOrder',
	      panose1: 'panose1',
	      'panose-1': 'panose1',
	      pathlength: 'pathLength',
	      patterncontentunits: 'patternContentUnits',
	      patterntransform: 'patternTransform',
	      patternunits: 'patternUnits',
	      pointerevents: 'pointerEvents',
	      'pointer-events': 'pointerEvents',
	      points: 'points',
	      pointsatx: 'pointsAtX',
	      pointsaty: 'pointsAtY',
	      pointsatz: 'pointsAtZ',
	      prefix: 'prefix',
	      preservealpha: 'preserveAlpha',
	      preserveaspectratio: 'preserveAspectRatio',
	      primitiveunits: 'primitiveUnits',
	      property: 'property',
	      r: 'r',
	      radius: 'radius',
	      refx: 'refX',
	      refy: 'refY',
	      renderingintent: 'renderingIntent',
	      'rendering-intent': 'renderingIntent',
	      repeatcount: 'repeatCount',
	      repeatdur: 'repeatDur',
	      requiredextensions: 'requiredExtensions',
	      requiredfeatures: 'requiredFeatures',
	      resource: 'resource',
	      restart: 'restart',
	      result: 'result',
	      results: 'results',
	      rotate: 'rotate',
	      rx: 'rx',
	      ry: 'ry',
	      scale: 'scale',
	      security: 'security',
	      seed: 'seed',
	      shaperendering: 'shapeRendering',
	      'shape-rendering': 'shapeRendering',
	      slope: 'slope',
	      spacing: 'spacing',
	      specularconstant: 'specularConstant',
	      specularexponent: 'specularExponent',
	      speed: 'speed',
	      spreadmethod: 'spreadMethod',
	      startoffset: 'startOffset',
	      stddeviation: 'stdDeviation',
	      stemh: 'stemh',
	      stemv: 'stemv',
	      stitchtiles: 'stitchTiles',
	      stopcolor: 'stopColor',
	      'stop-color': 'stopColor',
	      stopopacity: 'stopOpacity',
	      'stop-opacity': 'stopOpacity',
	      strikethroughposition: 'strikethroughPosition',
	      'strikethrough-position': 'strikethroughPosition',
	      strikethroughthickness: 'strikethroughThickness',
	      'strikethrough-thickness': 'strikethroughThickness',
	      string: 'string',
	      stroke: 'stroke',
	      strokedasharray: 'strokeDasharray',
	      'stroke-dasharray': 'strokeDasharray',
	      strokedashoffset: 'strokeDashoffset',
	      'stroke-dashoffset': 'strokeDashoffset',
	      strokelinecap: 'strokeLinecap',
	      'stroke-linecap': 'strokeLinecap',
	      strokelinejoin: 'strokeLinejoin',
	      'stroke-linejoin': 'strokeLinejoin',
	      strokemiterlimit: 'strokeMiterlimit',
	      'stroke-miterlimit': 'strokeMiterlimit',
	      strokewidth: 'strokeWidth',
	      'stroke-width': 'strokeWidth',
	      strokeopacity: 'strokeOpacity',
	      'stroke-opacity': 'strokeOpacity',
	      suppresscontenteditablewarning: 'suppressContentEditableWarning',
	      suppresshydrationwarning: 'suppressHydrationWarning',
	      surfacescale: 'surfaceScale',
	      systemlanguage: 'systemLanguage',
	      tablevalues: 'tableValues',
	      targetx: 'targetX',
	      targety: 'targetY',
	      textanchor: 'textAnchor',
	      'text-anchor': 'textAnchor',
	      textdecoration: 'textDecoration',
	      'text-decoration': 'textDecoration',
	      textlength: 'textLength',
	      textrendering: 'textRendering',
	      'text-rendering': 'textRendering',
	      to: 'to',
	      transform: 'transform',
	      'typeof': 'typeof',
	      u1: 'u1',
	      u2: 'u2',
	      underlineposition: 'underlinePosition',
	      'underline-position': 'underlinePosition',
	      underlinethickness: 'underlineThickness',
	      'underline-thickness': 'underlineThickness',
	      unicode: 'unicode',
	      unicodebidi: 'unicodeBidi',
	      'unicode-bidi': 'unicodeBidi',
	      unicoderange: 'unicodeRange',
	      'unicode-range': 'unicodeRange',
	      unitsperem: 'unitsPerEm',
	      'units-per-em': 'unitsPerEm',
	      unselectable: 'unselectable',
	      valphabetic: 'vAlphabetic',
	      'v-alphabetic': 'vAlphabetic',
	      values: 'values',
	      vectoreffect: 'vectorEffect',
	      'vector-effect': 'vectorEffect',
	      version: 'version',
	      vertadvy: 'vertAdvY',
	      'vert-adv-y': 'vertAdvY',
	      vertoriginx: 'vertOriginX',
	      'vert-origin-x': 'vertOriginX',
	      vertoriginy: 'vertOriginY',
	      'vert-origin-y': 'vertOriginY',
	      vhanging: 'vHanging',
	      'v-hanging': 'vHanging',
	      videographic: 'vIdeographic',
	      'v-ideographic': 'vIdeographic',
	      viewbox: 'viewBox',
	      viewtarget: 'viewTarget',
	      visibility: 'visibility',
	      vmathematical: 'vMathematical',
	      'v-mathematical': 'vMathematical',
	      vocab: 'vocab',
	      widths: 'widths',
	      wordspacing: 'wordSpacing',
	      'word-spacing': 'wordSpacing',
	      writingmode: 'writingMode',
	      'writing-mode': 'writingMode',
	      x1: 'x1',
	      x2: 'x2',
	      x: 'x',
	      xchannelselector: 'xChannelSelector',
	      xheight: 'xHeight',
	      'x-height': 'xHeight',
	      xlinkactuate: 'xlinkActuate',
	      'xlink:actuate': 'xlinkActuate',
	      xlinkarcrole: 'xlinkArcrole',
	      'xlink:arcrole': 'xlinkArcrole',
	      xlinkhref: 'xlinkHref',
	      'xlink:href': 'xlinkHref',
	      xlinkrole: 'xlinkRole',
	      'xlink:role': 'xlinkRole',
	      xlinkshow: 'xlinkShow',
	      'xlink:show': 'xlinkShow',
	      xlinktitle: 'xlinkTitle',
	      'xlink:title': 'xlinkTitle',
	      xlinktype: 'xlinkType',
	      'xlink:type': 'xlinkType',
	      xmlbase: 'xmlBase',
	      'xml:base': 'xmlBase',
	      xmllang: 'xmlLang',
	      'xml:lang': 'xmlLang',
	      xmlns: 'xmlns',
	      'xml:space': 'xmlSpace',
	      xmlnsxlink: 'xmlnsXlink',
	      'xmlns:xlink': 'xmlnsXlink',
	      xmlspace: 'xmlSpace',
	      y1: 'y1',
	      y2: 'y2',
	      y: 'y',
	      ychannelselector: 'yChannelSelector',
	      z: 'z',
	      zoomandpan: 'zoomAndPan'
	    };
	
	    function getStackAddendum$3() {
	      var stack = ReactDebugCurrentFrame.getStackAddendum();
	      return stack != null ? stack : '';
	    }
	
	    {
	      var warnedProperties$1 = {};
	      var hasOwnProperty$1 = Object.prototype.hasOwnProperty;
	      var EVENT_NAME_REGEX = /^on./;
	      var INVALID_EVENT_NAME_REGEX = /^on[^A-Z]/;
	      var rARIA$1 = new RegExp('^(aria)-[' + ATTRIBUTE_NAME_CHAR + ']*$');
	      var rARIACamel$1 = new RegExp('^(aria)[A-Z][' + ATTRIBUTE_NAME_CHAR + ']*$');
	
	      var validateProperty$1 = function validateProperty$1(tagName, name, value, canUseEventSystem) {
	        if (hasOwnProperty$1.call(warnedProperties$1, name) && warnedProperties$1[name]) {
	          return true;
	        }
	
	        var lowerCasedName = name.toLowerCase();
	        if (lowerCasedName === 'onfocusin' || lowerCasedName === 'onfocusout') {
	          warning(false, 'React uses onFocus and onBlur instead of onFocusIn and onFocusOut. ' + 'All React events are normalized to bubble, so onFocusIn and onFocusOut ' + 'are not needed/supported by React.');
	          warnedProperties$1[name] = true;
	          return true;
	        }
	
	        // We can't rely on the event system being injected on the server.
	        if (canUseEventSystem) {
	          if (registrationNameModules.hasOwnProperty(name)) {
	            return true;
	          }
	          var registrationName = possibleRegistrationNames.hasOwnProperty(lowerCasedName) ? possibleRegistrationNames[lowerCasedName] : null;
	          if (registrationName != null) {
	            warning(false, 'Invalid event handler property `%s`. Did you mean `%s`?%s', name, registrationName, getStackAddendum$3());
	            warnedProperties$1[name] = true;
	            return true;
	          }
	          if (EVENT_NAME_REGEX.test(name)) {
	            warning(false, 'Unknown event handler property `%s`. It will be ignored.%s', name, getStackAddendum$3());
	            warnedProperties$1[name] = true;
	            return true;
	          }
	        } else if (EVENT_NAME_REGEX.test(name)) {
	          // If no event plugins have been injected, we are in a server environment.
	          // So we can't tell if the event name is correct for sure, but we can filter
	          // out known bad ones like `onclick`. We can't suggest a specific replacement though.
	          if (INVALID_EVENT_NAME_REGEX.test(name)) {
	            warning(false, 'Invalid event handler property `%s`. ' + 'React events use the camelCase naming convention, for example `onClick`.%s', name, getStackAddendum$3());
	          }
	          warnedProperties$1[name] = true;
	          return true;
	        }
	
	        // Let the ARIA attribute hook validate ARIA attributes
	        if (rARIA$1.test(name) || rARIACamel$1.test(name)) {
	          return true;
	        }
	
	        if (lowerCasedName === 'innerhtml') {
	          warning(false, 'Directly setting property `innerHTML` is not permitted. ' + 'For more information, lookup documentation on `dangerouslySetInnerHTML`.');
	          warnedProperties$1[name] = true;
	          return true;
	        }
	
	        if (lowerCasedName === 'aria') {
	          warning(false, 'The `aria` attribute is reserved for future use in React. ' + 'Pass individual `aria-` attributes instead.');
	          warnedProperties$1[name] = true;
	          return true;
	        }
	
	        if (lowerCasedName === 'is' && value !== null && value !== undefined && typeof value !== 'string') {
	          warning(false, 'Received a `%s` for a string attribute `is`. If this is expected, cast ' + 'the value to a string.%s', typeof value, getStackAddendum$3());
	          warnedProperties$1[name] = true;
	          return true;
	        }
	
	        if (typeof value === 'number' && isNaN(value)) {
	          warning(false, 'Received NaN for the `%s` attribute. If this is expected, cast ' + 'the value to a string.%s', name, getStackAddendum$3());
	          warnedProperties$1[name] = true;
	          return true;
	        }
	
	        var isReserved = isReservedProp(name);
	
	        // Known attributes should match the casing specified in the property config.
	        if (possibleStandardNames.hasOwnProperty(lowerCasedName)) {
	          var standardName = possibleStandardNames[lowerCasedName];
	          if (standardName !== name) {
	            warning(false, 'Invalid DOM property `%s`. Did you mean `%s`?%s', name, standardName, getStackAddendum$3());
	            warnedProperties$1[name] = true;
	            return true;
	          }
	        } else if (!isReserved && name !== lowerCasedName) {
	          // Unknown attributes should have lowercase casing since that's how they
	          // will be cased anyway with server rendering.
	          warning(false, 'React does not recognize the `%s` prop on a DOM element. If you ' + 'intentionally want it to appear in the DOM as a custom ' + 'attribute, spell it as lowercase `%s` instead. ' + 'If you accidentally passed it from a parent component, remove ' + 'it from the DOM element.%s', name, lowerCasedName, getStackAddendum$3());
	          warnedProperties$1[name] = true;
	          return true;
	        }
	
	        if (typeof value === 'boolean' && !shouldAttributeAcceptBooleanValue(name)) {
	          if (value) {
	            warning(false, 'Received `%s` for a non-boolean attribute `%s`.\n\n' + 'If you want to write it to the DOM, pass a string instead: ' + '%s="%s" or %s={value.toString()}.%s', value, name, name, value, name, getStackAddendum$3());
	          } else {
	            warning(false, 'Received `%s` for a non-boolean attribute `%s`.\n\n' + 'If you want to write it to the DOM, pass a string instead: ' + '%s="%s" or %s={value.toString()}.\n\n' + 'If you used to conditionally omit it with %s={condition && value}, ' + 'pass %s={condition ? value : undefined} instead.%s', value, name, name, value, name, name, name, getStackAddendum$3());
	          }
	          warnedProperties$1[name] = true;
	          return true;
	        }
	
	        // Now that we've validated casing, do not validate
	        // data types for reserved props
	        if (isReserved) {
	          return true;
	        }
	
	        // Warn when a known attribute is a bad type
	        if (!shouldSetAttribute(name, value)) {
	          warnedProperties$1[name] = true;
	          return false;
	        }
	
	        return true;
	      };
	    }
	
	    var warnUnknownProperties = function warnUnknownProperties(type, props, canUseEventSystem) {
	      var unknownProps = [];
	      for (var key in props) {
	        var isValid = validateProperty$1(type, key, props[key], canUseEventSystem);
	        if (!isValid) {
	          unknownProps.push(key);
	        }
	      }
	
	      var unknownPropString = unknownProps.map(function (prop) {
	        return '`' + prop + '`';
	      }).join(', ');
	      if (unknownProps.length === 1) {
	        warning(false, 'Invalid value for prop %s on <%s> tag. Either remove it from the element, ' + 'or pass a string or number value to keep it in the DOM. ' + 'For details, see https://fb.me/react-attribute-behavior%s', unknownPropString, type, getStackAddendum$3());
	      } else if (unknownProps.length > 1) {
	        warning(false, 'Invalid values for props %s on <%s> tag. Either remove them from the element, ' + 'or pass a string or number value to keep them in the DOM. ' + 'For details, see https://fb.me/react-attribute-behavior%s', unknownPropString, type, getStackAddendum$3());
	      }
	    };
	
	    function validateProperties$2(type, props, canUseEventSystem) {
	      if (isCustomComponent(type, props)) {
	        return;
	      }
	      warnUnknownProperties(type, props, canUseEventSystem);
	    }
	
	    function _classCallCheck(instance, Constructor) {
	      if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	      }
	    }
	
	    // Based on reading the React.Children implementation. TODO: type this somewhere?
	
	    var toArray = React.Children.toArray;
	
	    var getStackAddendum = emptyFunction.thatReturns('');
	
	    {
	      var validatePropertiesInDevelopment = function validatePropertiesInDevelopment(type, props) {
	        validateProperties(type, props);
	        validateProperties$1(type, props);
	        validateProperties$2(type, props, /* canUseEventSystem */false);
	      };
	
	      var describeStackFrame = function describeStackFrame(element) {
	        var source = element._source;
	        var type = element.type;
	        var name = getComponentName(type);
	        var ownerName = null;
	        return describeComponentFrame(name, source, ownerName);
	      };
	
	      var currentDebugStack = null;
	      var currentDebugElementStack = null;
	      var setCurrentDebugStack = function setCurrentDebugStack(stack) {
	        var frame = stack[stack.length - 1];
	        currentDebugElementStack = frame.debugElementStack;
	        // We are about to enter a new composite stack, reset the array.
	        currentDebugElementStack.length = 0;
	        currentDebugStack = stack;
	        ReactDebugCurrentFrame.getCurrentStack = getStackAddendum;
	      };
	      var pushElementToDebugStack = function pushElementToDebugStack(element) {
	        if (currentDebugElementStack !== null) {
	          currentDebugElementStack.push(element);
	        }
	      };
	      var resetCurrentDebugStack = function resetCurrentDebugStack() {
	        currentDebugElementStack = null;
	        currentDebugStack = null;
	        ReactDebugCurrentFrame.getCurrentStack = null;
	      };
	      getStackAddendum = function () {
	        if (currentDebugStack === null) {
	          return '';
	        }
	        var stack = '';
	        var debugStack = currentDebugStack;
	        for (var i = debugStack.length - 1; i >= 0; i--) {
	          var frame = debugStack[i];
	          var _debugElementStack = frame.debugElementStack;
	          for (var ii = _debugElementStack.length - 1; ii >= 0; ii--) {
	            stack += describeStackFrame(_debugElementStack[ii]);
	          }
	        }
	        return stack;
	      };
	    }
	
	    var didWarnDefaultInputValue = false;
	    var didWarnDefaultChecked = false;
	    var didWarnDefaultSelectValue = false;
	    var didWarnDefaultTextareaValue = false;
	    var didWarnInvalidOptionChildren = false;
	    var didWarnAboutNoopUpdateForComponent = {};
	    var valuePropNames = ['value', 'defaultValue'];
	    var newlineEatingTags = {
	      listing: true,
	      pre: true,
	      textarea: true
	    };
	
	    function getComponentName(type) {
	      return typeof type === 'string' ? type : typeof type === 'function' ? type.displayName || type.name : null;
	    }
	
	    // We accept any tag to be rendered but since this gets injected into arbitrary
	    // HTML, we want to make sure that it's a safe tag.
	    // http://www.w3.org/TR/REC-xml/#NT-Name
	    var VALID_TAG_REGEX = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/; // Simplified subset
	    var validatedTagCache = {};
	    function validateDangerousTag(tag) {
	      if (!validatedTagCache.hasOwnProperty(tag)) {
	        !VALID_TAG_REGEX.test(tag) ? invariant(false, 'Invalid tag: %s', tag) : void 0;
	        validatedTagCache[tag] = true;
	      }
	    }
	
	    var processStyleName = memoizeStringOnly(function (styleName) {
	      return hyphenateStyleName(styleName);
	    });
	
	    function createMarkupForStyles(styles) {
	      var serialized = '';
	      var delimiter = '';
	      for (var styleName in styles) {
	        if (!styles.hasOwnProperty(styleName)) {
	          continue;
	        }
	        var isCustomProperty = styleName.indexOf('--') === 0;
	        var styleValue = styles[styleName];
	        {
	          if (!isCustomProperty) {
	            warnValidStyle$1(styleName, styleValue, getStackAddendum);
	          }
	        }
	        if (styleValue != null) {
	          serialized += delimiter + processStyleName(styleName) + ':';
	          serialized += dangerousStyleValue(styleName, styleValue, isCustomProperty);
	
	          delimiter = ';';
	        }
	      }
	      return serialized || null;
	    }
	
	    function warnNoop(publicInstance, callerName) {
	      {
	        var constructor = publicInstance.constructor;
	        var componentName = constructor && getComponentName(constructor) || 'ReactClass';
	        var warningKey = componentName + '.' + callerName;
	        if (didWarnAboutNoopUpdateForComponent[warningKey]) {
	          return;
	        }
	
	        warning(false, '%s(...): Can only update a mounting component. ' + 'This usually means you called %s() outside componentWillMount() on the server. ' + 'This is a no-op.\n\nPlease check the code for the %s component.', callerName, callerName, componentName);
	        didWarnAboutNoopUpdateForComponent[warningKey] = true;
	      }
	    }
	
	    function shouldConstruct(Component) {
	      return Component.prototype && Component.prototype.isReactComponent;
	    }
	
	    function getNonChildrenInnerMarkup(props) {
	      var innerHTML = props.dangerouslySetInnerHTML;
	      if (innerHTML != null) {
	        if (innerHTML.__html != null) {
	          return innerHTML.__html;
	        }
	      } else {
	        var content = props.children;
	        if (typeof content === 'string' || typeof content === 'number') {
	          return escapeTextForBrowser(content);
	        }
	      }
	      return null;
	    }
	
	    function flattenTopLevelChildren(children) {
	      if (!React.isValidElement(children)) {
	        return toArray(children);
	      }
	      var element = children;
	      if (element.type !== REACT_FRAGMENT_TYPE) {
	        return [element];
	      }
	      var fragmentChildren = element.props.children;
	      if (!React.isValidElement(fragmentChildren)) {
	        return toArray(fragmentChildren);
	      }
	      var fragmentChildElement = fragmentChildren;
	      return [fragmentChildElement];
	    }
	
	    function flattenOptionChildren(children) {
	      var content = '';
	      // Flatten children and warn if they aren't strings or numbers;
	      // invalid types are ignored.
	      React.Children.forEach(children, function (child) {
	        if (child == null) {
	          return;
	        }
	        if (typeof child === 'string' || typeof child === 'number') {
	          content += child;
	        } else {
	          {
	            if (!didWarnInvalidOptionChildren) {
	              didWarnInvalidOptionChildren = true;
	              warning(false, 'Only strings and numbers are supported as <option> children.');
	            }
	          }
	        }
	      });
	      return content;
	    }
	
	    function maskContext(type, context) {
	      var contextTypes = type.contextTypes;
	      if (!contextTypes) {
	        return emptyObject;
	      }
	      var maskedContext = {};
	      for (var contextName in contextTypes) {
	        maskedContext[contextName] = context[contextName];
	      }
	      return maskedContext;
	    }
	
	    function checkContextTypes(typeSpecs, values, location) {
	      {
	        checkPropTypes(typeSpecs, values, location, 'Component', getStackAddendum);
	      }
	    }
	
	    function processContext(type, context) {
	      var maskedContext = maskContext(type, context);
	      {
	        if (type.contextTypes) {
	          checkContextTypes(type.contextTypes, maskedContext, 'context');
	        }
	      }
	      return maskedContext;
	    }
	
	    var STYLE = 'style';
	    var RESERVED_PROPS$1 = {
	      children: null,
	      dangerouslySetInnerHTML: null,
	      suppressContentEditableWarning: null,
	      suppressHydrationWarning: null
	    };
	
	    function createOpenTagMarkup(tagVerbatim, tagLowercase, props, namespace, makeStaticMarkup, isRootElement) {
	      var ret = '<' + tagVerbatim;
	
	      for (var propKey in props) {
	        if (!props.hasOwnProperty(propKey)) {
	          continue;
	        }
	        var propValue = props[propKey];
	        if (propValue == null) {
	          continue;
	        }
	        if (propKey === STYLE) {
	          propValue = createMarkupForStyles(propValue);
	        }
	        var markup = null;
	        if (isCustomComponent(tagLowercase, props)) {
	          if (!RESERVED_PROPS$1.hasOwnProperty(propKey)) {
	            markup = createMarkupForCustomAttribute(propKey, propValue);
	          }
	        } else {
	          markup = createMarkupForProperty(propKey, propValue);
	        }
	        if (markup) {
	          ret += ' ' + markup;
	        }
	      }
	
	      // For static pages, no need to put React ID and checksum. Saves lots of
	      // bytes.
	      if (makeStaticMarkup) {
	        return ret;
	      }
	
	      if (isRootElement) {
	        ret += ' ' + createMarkupForRoot();
	      }
	      return ret;
	    }
	
	    function validateRenderResult(child, type) {
	      if (child === undefined) {
	        invariant(false, '%s(...): Nothing was returned from render. This usually means a return statement is missing. Or, to render nothing, return null.', getComponentName(type) || 'Component');
	      }
	    }
	
	    function resolve(child, context) {
	      while (React.isValidElement(child)) {
	        // Safe because we just checked it's an element.
	        var element = child;
	        {
	          pushElementToDebugStack(element);
	        }
	        var Component = element.type;
	        if (typeof Component !== 'function') {
	          break;
	        }
	        var publicContext = processContext(Component, context);
	        var inst;
	        var queue = [];
	        var replace = false;
	        var updater = {
	          isMounted: function isMounted(publicInstance) {
	            return false;
	          },
	          enqueueForceUpdate: function enqueueForceUpdate(publicInstance) {
	            if (queue === null) {
	              warnNoop(publicInstance, 'forceUpdate');
	              return null;
	            }
	          },
	          enqueueReplaceState: function enqueueReplaceState(publicInstance, completeState) {
	            replace = true;
	            queue = [completeState];
	          },
	          enqueueSetState: function enqueueSetState(publicInstance, partialState) {
	            if (queue === null) {
	              warnNoop(publicInstance, 'setState');
	              return null;
	            }
	            queue.push(partialState);
	          }
	        };
	
	        if (shouldConstruct(Component)) {
	          inst = new Component(element.props, publicContext, updater);
	        } else {
	          inst = Component(element.props, publicContext, updater);
	          if (inst == null || inst.render == null) {
	            child = inst;
	            validateRenderResult(child, Component);
	            continue;
	          }
	        }
	
	        inst.props = element.props;
	        inst.context = publicContext;
	        inst.updater = updater;
	
	        var initialState = inst.state;
	        if (initialState === undefined) {
	          inst.state = initialState = null;
	        }
	        if (inst.componentWillMount) {
	          inst.componentWillMount();
	          if (queue.length) {
	            var oldQueue = queue;
	            var oldReplace = replace;
	            queue = null;
	            replace = false;
	
	            if (oldReplace && oldQueue.length === 1) {
	              inst.state = oldQueue[0];
	            } else {
	              var nextState = oldReplace ? oldQueue[0] : inst.state;
	              var dontMutate = true;
	              for (var i = oldReplace ? 1 : 0; i < oldQueue.length; i++) {
	                var partial = oldQueue[i];
	                var partialState = typeof partial === 'function' ? partial.call(inst, nextState, element.props, publicContext) : partial;
	                if (partialState) {
	                  if (dontMutate) {
	                    dontMutate = false;
	                    nextState = _assign({}, nextState, partialState);
	                  } else {
	                    _assign(nextState, partialState);
	                  }
	                }
	              }
	              inst.state = nextState;
	            }
	          } else {
	            queue = null;
	          }
	        }
	        child = inst.render();
	
	        {
	          if (child === undefined && inst.render._isMockFunction) {
	            // This is probably bad practice. Consider warning here and
	            // deprecating this convenience.
	            child = null;
	          }
	        }
	        validateRenderResult(child, Component);
	
	        var childContext;
	        if (typeof inst.getChildContext === 'function') {
	          var childContextTypes = Component.childContextTypes;
	          if (typeof childContextTypes === 'object') {
	            childContext = inst.getChildContext();
	            for (var contextKey in childContext) {
	              !(contextKey in childContextTypes) ? invariant(false, '%s.getChildContext(): key "%s" is not defined in childContextTypes.', getComponentName(Component) || 'Unknown', contextKey) : void 0;
	            }
	          } else {
	            warning(false, '%s.getChildContext(): childContextTypes must be defined in order to ' + 'use getChildContext().', getComponentName(Component) || 'Unknown');
	          }
	        }
	        if (childContext) {
	          context = _assign({}, context, childContext);
	        }
	      }
	      return { child: child, context: context };
	    }
	
	    var ReactDOMServerRenderer = (function () {
	      function ReactDOMServerRenderer(children, makeStaticMarkup) {
	        _classCallCheck(this, ReactDOMServerRenderer);
	
	        var flatChildren = flattenTopLevelChildren(children);
	
	        var topFrame = {
	          // Assume all trees start in the HTML namespace (not totally true, but
	          // this is what we did historically)
	          domNamespace: Namespaces.html,
	          children: flatChildren,
	          childIndex: 0,
	          context: emptyObject,
	          footer: ''
	        };
	        {
	          topFrame.debugElementStack = [];
	        }
	        this.stack = [topFrame];
	        this.exhausted = false;
	        this.currentSelectValue = null;
	        this.previousWasTextNode = false;
	        this.makeStaticMarkup = makeStaticMarkup;
	      }
	      // TODO: type this more strictly:
	
	      ReactDOMServerRenderer.prototype.read = function read(bytes) {
	        if (this.exhausted) {
	          return null;
	        }
	
	        var out = '';
	        while (out.length < bytes) {
	          if (this.stack.length === 0) {
	            this.exhausted = true;
	            break;
	          }
	          var frame = this.stack[this.stack.length - 1];
	          if (frame.childIndex >= frame.children.length) {
	            var footer = frame.footer;
	            out += footer;
	            if (footer !== '') {
	              this.previousWasTextNode = false;
	            }
	            this.stack.pop();
	            if (frame.tag === 'select') {
	              this.currentSelectValue = null;
	            }
	            continue;
	          }
	          var child = frame.children[frame.childIndex++];
	          {
	            setCurrentDebugStack(this.stack);
	          }
	          out += this.render(child, frame.context, frame.domNamespace);
	          {
	            // TODO: Handle reentrant server render calls. This doesn't.
	            resetCurrentDebugStack();
	          }
	        }
	        return out;
	      };
	
	      ReactDOMServerRenderer.prototype.render = function render(child, context, parentNamespace) {
	        if (typeof child === 'string' || typeof child === 'number') {
	          var text = '' + child;
	          if (text === '') {
	            return '';
	          }
	          if (this.makeStaticMarkup) {
	            return escapeTextForBrowser(text);
	          }
	          if (this.previousWasTextNode) {
	            return '<!-- -->' + escapeTextForBrowser(text);
	          }
	          this.previousWasTextNode = true;
	          return escapeTextForBrowser(text);
	        } else {
	          var nextChild;
	
	          var _resolve = resolve(child, context);
	
	          nextChild = _resolve.child;
	          context = _resolve.context;
	
	          if (nextChild === null || nextChild === false) {
	            return '';
	          } else if (!React.isValidElement(nextChild)) {
	            var nextChildren = toArray(nextChild);
	            var frame = {
	              domNamespace: parentNamespace,
	              children: nextChildren,
	              childIndex: 0,
	              context: context,
	              footer: ''
	            };
	            {
	              frame.debugElementStack = [];
	            }
	            this.stack.push(frame);
	            return '';
	          } else if (nextChild.type === REACT_FRAGMENT_TYPE) {
	            var _nextChildren = toArray(nextChild.props.children);
	            var _frame = {
	              domNamespace: parentNamespace,
	              children: _nextChildren,
	              childIndex: 0,
	              context: context,
	              footer: ''
	            };
	            {
	              _frame.debugElementStack = [];
	            }
	            this.stack.push(_frame);
	            return '';
	          } else {
	            // Safe because we just checked it's an element.
	            var nextElement = nextChild;
	            return this.renderDOM(nextElement, context, parentNamespace);
	          }
	        }
	      };
	
	      ReactDOMServerRenderer.prototype.renderDOM = function renderDOM(element, context, parentNamespace) {
	        var tag = element.type.toLowerCase();
	
	        var namespace = parentNamespace;
	        if (parentNamespace === Namespaces.html) {
	          namespace = getIntrinsicNamespace(tag);
	        }
	
	        {
	          if (namespace === Namespaces.html) {
	            // Should this check be gated by parent namespace? Not sure we want to
	            // allow <SVG> or <mATH>.
	            warning(tag === element.type, '<%s /> is using uppercase HTML. Always use lowercase HTML tags ' + 'in React.', element.type);
	          }
	        }
	
	        validateDangerousTag(tag);
	
	        var props = element.props;
	        if (tag === 'input') {
	          {
	            ReactControlledValuePropTypes.checkPropTypes('input', props, getStackAddendum);
	
	            if (props.checked !== undefined && props.defaultChecked !== undefined && !didWarnDefaultChecked) {
	              warning(false, '%s contains an input of type %s with both checked and defaultChecked props. ' + 'Input elements must be either controlled or uncontrolled ' + '(specify either the checked prop, or the defaultChecked prop, but not ' + 'both). Decide between using a controlled or uncontrolled input ' + 'element and remove one of these props. More info: ' + 'https://fb.me/react-controlled-components', 'A component', props.type);
	              didWarnDefaultChecked = true;
	            }
	            if (props.value !== undefined && props.defaultValue !== undefined && !didWarnDefaultInputValue) {
	              warning(false, '%s contains an input of type %s with both value and defaultValue props. ' + 'Input elements must be either controlled or uncontrolled ' + '(specify either the value prop, or the defaultValue prop, but not ' + 'both). Decide between using a controlled or uncontrolled input ' + 'element and remove one of these props. More info: ' + 'https://fb.me/react-controlled-components', 'A component', props.type);
	              didWarnDefaultInputValue = true;
	            }
	          }
	
	          props = _assign({
	            type: undefined
	          }, props, {
	            defaultChecked: undefined,
	            defaultValue: undefined,
	            value: props.value != null ? props.value : props.defaultValue,
	            checked: props.checked != null ? props.checked : props.defaultChecked
	          });
	        } else if (tag === 'textarea') {
	          {
	            ReactControlledValuePropTypes.checkPropTypes('textarea', props, getStackAddendum);
	            if (props.value !== undefined && props.defaultValue !== undefined && !didWarnDefaultTextareaValue) {
	              warning(false, 'Textarea elements must be either controlled or uncontrolled ' + '(specify either the value prop, or the defaultValue prop, but not ' + 'both). Decide between using a controlled or uncontrolled textarea ' + 'and remove one of these props. More info: ' + 'https://fb.me/react-controlled-components');
	              didWarnDefaultTextareaValue = true;
	            }
	          }
	
	          var initialValue = props.value;
	          if (initialValue == null) {
	            var defaultValue = props.defaultValue;
	            // TODO (yungsters): Remove support for children content in <textarea>.
	            var textareaChildren = props.children;
	            if (textareaChildren != null) {
	              {
	                warning(false, 'Use the `defaultValue` or `value` props instead of setting ' + 'children on <textarea>.');
	              }
	              !(defaultValue == null) ? invariant(false, 'If you supply `defaultValue` on a <textarea>, do not pass children.') : void 0;
	              if (Array.isArray(textareaChildren)) {
	                !(textareaChildren.length <= 1) ? invariant(false, '<textarea> can only have at most one child.') : void 0;
	                textareaChildren = textareaChildren[0];
	              }
	
	              defaultValue = '' + textareaChildren;
	            }
	            if (defaultValue == null) {
	              defaultValue = '';
	            }
	            initialValue = defaultValue;
	          }
	
	          props = _assign({}, props, {
	            value: undefined,
	            children: '' + initialValue
	          });
	        } else if (tag === 'select') {
	          {
	            ReactControlledValuePropTypes.checkPropTypes('select', props, getStackAddendum);
	
	            for (var i = 0; i < valuePropNames.length; i++) {
	              var propName = valuePropNames[i];
	              if (props[propName] == null) {
	                continue;
	              }
	              var isArray = Array.isArray(props[propName]);
	              if (props.multiple && !isArray) {
	                warning(false, 'The `%s` prop supplied to <select> must be an array if ' + '`multiple` is true.%s', propName, '');
	              } else if (!props.multiple && isArray) {
	                warning(false, 'The `%s` prop supplied to <select> must be a scalar ' + 'value if `multiple` is false.%s', propName, '');
	              }
	            }
	
	            if (props.value !== undefined && props.defaultValue !== undefined && !didWarnDefaultSelectValue) {
	              warning(false, 'Select elements must be either controlled or uncontrolled ' + '(specify either the value prop, or the defaultValue prop, but not ' + 'both). Decide between using a controlled or uncontrolled select ' + 'element and remove one of these props. More info: ' + 'https://fb.me/react-controlled-components');
	              didWarnDefaultSelectValue = true;
	            }
	          }
	          this.currentSelectValue = props.value != null ? props.value : props.defaultValue;
	          props = _assign({}, props, {
	            value: undefined
	          });
	        } else if (tag === 'option') {
	          var selected = null;
	          var selectValue = this.currentSelectValue;
	          var optionChildren = flattenOptionChildren(props.children);
	          if (selectValue != null) {
	            var value;
	            if (props.value != null) {
	              value = props.value + '';
	            } else {
	              value = optionChildren;
	            }
	            selected = false;
	            if (Array.isArray(selectValue)) {
	              // multiple
	              for (var j = 0; j < selectValue.length; j++) {
	                if ('' + selectValue[j] === value) {
	                  selected = true;
	                  break;
	                }
	              }
	            } else {
	              selected = '' + selectValue === value;
	            }
	
	            props = _assign({
	              selected: undefined,
	              children: undefined
	            }, props, {
	              selected: selected,
	              children: optionChildren
	            });
	          }
	        }
	
	        {
	          validatePropertiesInDevelopment(tag, props);
	        }
	
	        assertValidProps(tag, props, getStackAddendum);
	
	        var out = createOpenTagMarkup(element.type, tag, props, namespace, this.makeStaticMarkup, this.stack.length === 1);
	        var footer = '';
	        if (omittedCloseTags.hasOwnProperty(tag)) {
	          out += '/>';
	        } else {
	          out += '>';
	          footer = '</' + element.type + '>';
	        }
	        var children;
	        var innerMarkup = getNonChildrenInnerMarkup(props);
	        if (innerMarkup != null) {
	          children = [];
	          if (newlineEatingTags[tag] && innerMarkup.charAt(0) === '\n') {
	            // text/html ignores the first character in these tags if it's a newline
	            // Prefer to break application/xml over text/html (for now) by adding
	            // a newline specifically to get eaten by the parser. (Alternately for
	            // textareas, replacing "^\n" with "\r\n" doesn't get eaten, and the first
	            // \r is normalized out by HTMLTextAreaElement#value.)
	            // See: <http://www.w3.org/TR/html-polyglot/#newlines-in-textarea-and-pre>
	            // See: <http://www.w3.org/TR/html5/syntax.html#element-restrictions>
	            // See: <http://www.w3.org/TR/html5/syntax.html#newlines>
	            // See: Parsing of "textarea" "listing" and "pre" elements
	            //  from <http://www.w3.org/TR/html5/syntax.html#parsing-main-inbody>
	            out += '\n';
	          }
	          out += innerMarkup;
	        } else {
	          children = toArray(props.children);
	        }
	        var frame = {
	          domNamespace: getChildNamespace(parentNamespace, element.type),
	          tag: tag,
	          children: children,
	          childIndex: 0,
	          context: context,
	          footer: footer
	        };
	        {
	          frame.debugElementStack = [];
	        }
	        this.stack.push(frame);
	        this.previousWasTextNode = false;
	        return out;
	      };
	
	      return ReactDOMServerRenderer;
	    })();
	
	    /**
	     * Render a ReactElement to its initial HTML. This should only be used on the
	     * server.
	     * See https://reactjs.org/docs/react-dom-server.html#rendertostring
	     */
	    function renderToString(element) {
	      var renderer = new ReactDOMServerRenderer(element, false);
	      var markup = renderer.read(Infinity);
	      return markup;
	    }
	
	    /**
	     * Similar to renderToString, except this doesn't create extra DOM attributes
	     * such as data-react-id that React uses internally.
	     * See https://reactjs.org/docs/react-dom-server.html#rendertostaticmarkup
	     */
	    function renderToStaticMarkup(element) {
	      var renderer = new ReactDOMServerRenderer(element, true);
	      var markup = renderer.read(Infinity);
	      return markup;
	    }
	
	    function _classCallCheck$1(instance, Constructor) {
	      if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	      }
	    }
	
	    function _possibleConstructorReturn(self, call) {
	      if (!self) {
	        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	      }return call && (typeof call === "object" || typeof call === "function") ? call : self;
	    }
	
	    function _inherits(subClass, superClass) {
	      if (typeof superClass !== "function" && superClass !== null) {
	        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	      }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	    }
	
	    // This is a Readable Node.js stream which wraps the ReactDOMPartialRenderer.
	
	    var ReactMarkupReadableStream = (function (_Readable) {
	      _inherits(ReactMarkupReadableStream, _Readable);
	
	      function ReactMarkupReadableStream(element, makeStaticMarkup) {
	        _classCallCheck$1(this, ReactMarkupReadableStream);
	
	        var _this = _possibleConstructorReturn(this, _Readable.call(this, {}));
	        // Calls the stream.Readable(options) constructor. Consider exposing built-in
	        // features like highWaterMark in the future.
	
	        _this.partialRenderer = new ReactDOMServerRenderer(element, makeStaticMarkup);
	        return _this;
	      }
	
	      ReactMarkupReadableStream.prototype._read = function _read(size) {
	        try {
	          this.push(this.partialRenderer.read(size));
	        } catch (err) {
	          this.emit('error', err);
	        }
	      };
	
	      return ReactMarkupReadableStream;
	    })(stream.Readable);
	    /**
	     * Render a ReactElement to its initial HTML. This should only be used on the
	     * server.
	     * See https://reactjs.org/docs/react-dom-stream.html#rendertonodestream
	     */
	
	    function renderToNodeStream(element) {
	      return new ReactMarkupReadableStream(element, false);
	    }
	
	    /**
	     * Similar to renderToNodeStream, except this doesn't create extra DOM attributes
	     * such as data-react-id that React uses internally.
	     * See https://reactjs.org/docs/react-dom-stream.html#rendertostaticnodestream
	     */
	    function renderToStaticNodeStream(element) {
	      return new ReactMarkupReadableStream(element, true);
	    }
	
	    // Note: when changing this, also consider https://github.com/facebook/react/issues/11526
	    var ReactDOMServerNode = {
	      renderToString: renderToString,
	      renderToStaticMarkup: renderToStaticMarkup,
	      renderToNodeStream: renderToNodeStream,
	      renderToStaticNodeStream: renderToStaticNodeStream,
	      version: ReactVersion
	    };
	
	    var ReactDOMServerNode$1 = Object.freeze({
	      'default': ReactDOMServerNode
	    });
	
	    var ReactDOMServer = ReactDOMServerNode$1 && ReactDOMServerNode || ReactDOMServerNode$1;
	
	    // TODO: decide on the top-level export form.
	    // This is hacky but makes it work with both Rollup and Jest
	    var server_node = ReactDOMServer['default'] ? ReactDOMServer['default'] : ReactDOMServer;
	
	    module.exports = server_node;
	  })();
	}

/***/ }),
/* 17 */
/***/ (function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */
	
	'use strict';
	
	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */
	
	var validateFormat = function validateFormat(format) {};
	
	if (process.env.NODE_ENV !== 'production') {
	  validateFormat = function validateFormat(format) {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  };
	}
	
	function invariant(condition, format, a, b, c, d, e, f) {
	  validateFormat(format);
	
	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(format.replace(/%s/g, function () {
	        return args[argIndex++];
	      }));
	      error.name = 'Invariant Violation';
	    }
	
	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	}
	
	module.exports = invariant;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2014-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */
	
	'use strict';
	
	var emptyFunction = __webpack_require__(10);
	
	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */
	
	var warning = emptyFunction;
	
	if (process.env.NODE_ENV !== 'production') {
	  var printWarning = function printWarning(format) {
	    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	      args[_key - 1] = arguments[_key];
	    }
	
	    var argIndex = 0;
	    var message = 'Warning: ' + format.replace(/%s/g, function () {
	      return args[argIndex++];
	    });
	    if (typeof console !== 'undefined') {
	      console.error(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) {}
	  };
	
	  warning = function warning(condition, format) {
	    if (format === undefined) {
	      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
	    }
	
	    if (format.indexOf('Failed Composite propType: ') === 0) {
	      return; // Ignore CompositeComponent proptype check.
	    }
	
	    if (!condition) {
	      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
	        args[_key2 - 2] = arguments[_key2];
	      }
	
	      printWarning.apply(undefined, [format].concat(args));
	    }
	  };
	}
	
	module.exports = warning;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	
	'use strict';
	
	if (process.env.NODE_ENV !== 'production') {
	  var invariant = __webpack_require__(20);
	  var warning = __webpack_require__(21);
	  var ReactPropTypesSecret = __webpack_require__(23);
	  var loggedTypeFailures = {};
	}
	
	/**
	 * Assert that the values match with the type specs.
	 * Error messages are memorized and will only be shown once.
	 *
	 * @param {object} typeSpecs Map of name to a ReactPropType
	 * @param {object} values Runtime values that need to be type-checked
	 * @param {string} location e.g. "prop", "context", "child context"
	 * @param {string} componentName Name of the component for error messages.
	 * @param {?Function} getStack Returns the component stack.
	 * @private
	 */
	function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
	  if (process.env.NODE_ENV !== 'production') {
	    for (var typeSpecName in typeSpecs) {
	      if (typeSpecs.hasOwnProperty(typeSpecName)) {
	        var error;
	        // Prop type validation may throw. In case they do, we don't want to
	        // fail the render phase where it didn't fail before. So we log it.
	        // After these have been cleaned up, we'll let them throw.
	        try {
	          // This is intentionally an invariant that gets caught. It's the same
	          // behavior as without this statement except with a better message.
	          invariant(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'the `prop-types` package, but received `%s`.', componentName || 'React class', location, typeSpecName, typeof typeSpecs[typeSpecName]);
	          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
	        } catch (ex) {
	          error = ex;
	        }
	        warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error);
	        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
	          // Only monitor this failure once because there tends to be a lot of the
	          // same error.
	          loggedTypeFailures[error.message] = true;
	
	          var stack = getStack ? getStack() : '';
	
	          warning(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
	        }
	      }
	    }
	  }
	}
	
	module.exports = checkPropTypes;

/***/ }),
/* 20 */
/***/ (function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */
	
	'use strict';
	
	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */
	
	var validateFormat = function validateFormat(format) {};
	
	if (process.env.NODE_ENV !== 'production') {
	  validateFormat = function validateFormat(format) {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  };
	}
	
	function invariant(condition, format, a, b, c, d, e, f) {
	  validateFormat(format);
	
	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(format.replace(/%s/g, function () {
	        return args[argIndex++];
	      }));
	      error.name = 'Invariant Violation';
	    }
	
	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	}
	
	module.exports = invariant;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2014-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */
	
	'use strict';
	
	var emptyFunction = __webpack_require__(22);
	
	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */
	
	var warning = emptyFunction;
	
	if (process.env.NODE_ENV !== 'production') {
	  var printWarning = function printWarning(format) {
	    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	      args[_key - 1] = arguments[_key];
	    }
	
	    var argIndex = 0;
	    var message = 'Warning: ' + format.replace(/%s/g, function () {
	      return args[argIndex++];
	    });
	    if (typeof console !== 'undefined') {
	      console.error(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) {}
	  };
	
	  warning = function warning(condition, format) {
	    if (format === undefined) {
	      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
	    }
	
	    if (format.indexOf('Failed Composite propType: ') === 0) {
	      return; // Ignore CompositeComponent proptype check.
	    }
	
	    if (!condition) {
	      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
	        args[_key2 - 2] = arguments[_key2];
	      }
	
	      printWarning.apply(undefined, [format].concat(args));
	    }
	  };
	}
	
	module.exports = warning;

/***/ }),
/* 22 */
/***/ (function(module, exports) {

	"use strict";
	
	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */
	
	function makeEmptyFunction(arg) {
	  return function () {
	    return arg;
	  };
	}
	
	/**
	 * This function accepts and discards inputs; it has no side effects. This is
	 * primarily useful idiomatically for overridable function endpoints which
	 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
	 */
	var emptyFunction = function emptyFunction() {};
	
	emptyFunction.thatReturns = makeEmptyFunction;
	emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
	emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
	emptyFunction.thatReturnsNull = makeEmptyFunction(null);
	emptyFunction.thatReturnsThis = function () {
	  return this;
	};
	emptyFunction.thatReturnsArgument = function (arg) {
	  return arg;
	};
	
	module.exports = emptyFunction;

/***/ }),
/* 23 */
/***/ (function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	
	'use strict';
	
	var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
	
	module.exports = ReactPropTypesSecret;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * @typechecks
	 */
	
	'use strict';
	
	var camelize = __webpack_require__(25);
	
	var msPattern = /^-ms-/;
	
	/**
	 * Camelcases a hyphenated CSS property name, for example:
	 *
	 *   > camelizeStyleName('background-color')
	 *   < "backgroundColor"
	 *   > camelizeStyleName('-moz-transition')
	 *   < "MozTransition"
	 *   > camelizeStyleName('-ms-transition')
	 *   < "msTransition"
	 *
	 * As Andi Smith suggests
	 * (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
	 * is converted to lowercase `ms`.
	 *
	 * @param {string} string
	 * @return {string}
	 */
	function camelizeStyleName(string) {
	  return camelize(string.replace(msPattern, 'ms-'));
	}
	
	module.exports = camelizeStyleName;

/***/ }),
/* 25 */
/***/ (function(module, exports) {

	"use strict";
	
	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * @typechecks
	 */
	
	var _hyphenPattern = /-(.)/g;
	
	/**
	 * Camelcases a hyphenated string, for example:
	 *
	 *   > camelize('background-color')
	 *   < "backgroundColor"
	 *
	 * @param {string} string
	 * @return {string}
	 */
	function camelize(string) {
	  return string.replace(_hyphenPattern, function (_, character) {
	    return character.toUpperCase();
	  });
	}
	
	module.exports = camelize;

/***/ }),
/* 26 */
/***/ (function(module, exports) {

	module.exports = require("react-router-dom");

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _react = __webpack_require__(5);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouterDom = __webpack_require__(26);
	
	var _componentsLoginForm = __webpack_require__(28);
	
	var _componentsLoginForm2 = _interopRequireDefault(_componentsLoginForm);
	
	var _componentsApp = __webpack_require__(46);
	
	var _componentsApp2 = _interopRequireDefault(_componentsApp);
	
	var _componentsPurchasedItems = __webpack_require__(47);
	
	var _componentsPurchasedItems2 = _interopRequireDefault(_componentsPurchasedItems);
	
	var _componentsProductDetails = __webpack_require__(196);
	
	var _componentsProductDetails2 = _interopRequireDefault(_componentsProductDetails);
	
	var _componentsDashboard = __webpack_require__(203);
	
	var _componentsDashboard2 = _interopRequireDefault(_componentsDashboard);
	
	var routes = [{
	  path: '/',
	  component: _componentsLoginForm2["default"],
	  exact: true
	}, {
	  path: '/purchasedItems',
	  component: _componentsPurchasedItems2["default"]
	}, {
	  path: '/dashboard',
	  component: _componentsDashboard2["default"]
	}, {
	  path: '/productDetails/:id',
	  component: _componentsProductDetails2["default"]
	}];
	
	exports["default"] = routes;
	module.exports = exports["default"];

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(5);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(29);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _LoginJsx = __webpack_require__(30);
	
	var _LoginJsx2 = _interopRequireDefault(_LoginJsx);
	
	var LoginForm = (function (_React$Component) {
	  _inherits(LoginForm, _React$Component);
	
	  function LoginForm() {
	    _classCallCheck(this, LoginForm);
	
	    _get(Object.getPrototypeOf(LoginForm.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  _createClass(LoginForm, [{
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement(
	        'div',
	        null,
	        _react2['default'].createElement(
	          'div',
	          null,
	          _react2['default'].createElement(
	            'a',
	            { href: '/', style: { "paddingLeft": "15px" } },
	            _react2['default'].createElement('img', { width: 'auto', height: '75px', src: 'Images/csp1.png' })
	          )
	        ),
	        _react2['default'].createElement(
	          'div',
	          { className: 'jumbotron' },
	          _react2['default'].createElement(
	            'div',
	            { className: 'container' },
	            _react2['default'].createElement(
	              'h1',
	              null,
	              'Customer Service Portal'
	            ),
	            _react2['default'].createElement(
	              'p',
	              null,
	              'Your one point contact for issues related to the purchased products.'
	            )
	          )
	        ),
	        _react2['default'].createElement(
	          'div',
	          { className: "container", id: 'wrap' },
	          _react2['default'].createElement(
	            'div',
	            { className: "row bgClass" },
	            _react2['default'].createElement(
	              'div',
	              { className: "col-md-5 col-md-offset-7" },
	              _react2['default'].createElement(_LoginJsx2['default'], null)
	            )
	          )
	        )
	      );
	    }
	  }], [{
	    key: 'getCredentials',
	    value: function getCredentials() {
	      return [{ request: "getCredentials" }];
	    }
	  }]);
	
	  return LoginForm;
	})(_react2['default'].Component);
	
	exports['default'] = LoginForm;
	module.exports = exports['default'];

/***/ }),
/* 29 */
/***/ (function(module, exports) {

	module.exports = require("react-dom");

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(5);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _ActionsActionJsx = __webpack_require__(31);
	
	var _ActionsActionJsx2 = _interopRequireDefault(_ActionsActionJsx);
	
	var _reactRouter = __webpack_require__(35);
	
	var _StoresApplicationStore = __webpack_require__(36);
	
	var _StoresApplicationStore2 = _interopRequireDefault(_StoresApplicationStore);
	
	var _reactBootstrap = __webpack_require__(45);
	
	var Login = (function (_React$Component) {
	  _inherits(Login, _React$Component);
	
	  function Login(props, context) {
	    _classCallCheck(this, Login);
	
	    _get(Object.getPrototypeOf(Login.prototype), 'constructor', this).call(this, props);
	    this.handleSubmit = this.handleSubmit.bind(this);
	    this.handleUsernameChange = this.handleUsernameChange.bind(this);
	    this.handlePasswordChange = this.handlePasswordChange.bind(this);
	    this.onFnf = this.onFnf.bind(this);
	    this.state = { username: "", password: "", authenticated: _StoresApplicationStore2['default'].isAuthenticated };
	  }
	
	  _createClass(Login, [{
	    key: 'onFnf',
	    value: function onFnf() {
	      alert("This functionality is yet to be implemented.");
	    }
	  }, {
	    key: 'handleUsernameChange',
	    value: function handleUsernameChange(e) {
	      this.setState({ username: e.target.value });
	    }
	  }, {
	    key: 'handlePasswordChange',
	    value: function handlePasswordChange(e) {
	      this.setState({ password: e.target.value });
	    }
	  }, {
	    key: 'handleSubmit',
	    value: function handleSubmit(event) {
	      event.preventDefault();
	      var user = { 'username': this.state.username,
	        'password': this.state.password };
	      _ActionsActionJsx2['default'].Login(user);
	      console.log("from login compoennt", this.props);
	      if (this.state.authenticated && sessionStorage.getItem('role') == "customer") {
	        this.props.history.push('/purchasedItems');
	      } else {
	        this.props.history.push('/dashboard');
	      }
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      document.body.style.background = "url('Images/bg2.jpg') no-repeat center center fixed";
	      document.body.style.backgroundSize = "cover";
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	
	      return _react2['default'].createElement(
	        'div',
	        { className: 'form-layout' },
	        _react2['default'].createElement(
	          'div',
	          { className: "panel-heading" },
	          _react2['default'].createElement(
	            'div',
	            { className: 'panel-heading-left' },
	            _react2['default'].createElement(
	              'h3',
	              null,
	              'Sign up now'
	            ),
	            _react2['default'].createElement(
	              'p',
	              null,
	              'Get access to your orders and chat for support.'
	            )
	          ),
	          _react2['default'].createElement(
	            'div',
	            { className: 'panel-heading-right' },
	            _react2['default'].createElement('span', { className: 'glyphicon glyphicon-pencil' })
	          )
	        ),
	        _react2['default'].createElement(
	          'div',
	          { id: 'divLogin', className: "bgImage panel-body" },
	          _react2['default'].createElement(
	            _reactBootstrap.Form,
	            { horizontal: true, onSubmit: this.handleSubmit },
	            _react2['default'].createElement(
	              _reactBootstrap.FormGroup,
	              { controlId: 'formHorizontalUsername' },
	              _react2['default'].createElement(
	                _reactBootstrap.Col,
	                { sm: 12 },
	                _react2['default'].createElement(_reactBootstrap.FormControl, { bsSize: 'lg', value: this.state.username, name: 'username',
	                  onChange: this.handleUsernameChange, ref: 'username', type: 'text', placeholder: 'Enter Username' })
	              )
	            ),
	            _react2['default'].createElement(
	              _reactBootstrap.FormGroup,
	              { controlId: 'formHorizontalPassword' },
	              _react2['default'].createElement(
	                _reactBootstrap.Col,
	                { sm: 12 },
	                _react2['default'].createElement(_reactBootstrap.FormControl, { bsSize: 'lg', value: this.state.password, name: 'password',
	                  onChange: this.handlePasswordChange, ref: 'password', type: 'password', placeholder: 'Password' })
	              )
	            ),
	            _react2['default'].createElement(
	              _reactBootstrap.FormGroup,
	              null,
	              _react2['default'].createElement(
	                _reactBootstrap.Col,
	                { sm: 4 },
	                _react2['default'].createElement(
	                  _reactBootstrap.Button,
	                  { bsStyle: 'success', bsSize: 'lg', block: true, type: 'submit' },
	                  'Sign in'
	                )
	              ),
	              _react2['default'].createElement(
	                _reactBootstrap.Col,
	                { smOffset: 2, sm: 5 },
	                _react2['default'].createElement(
	                  _reactBootstrap.Button,
	                  { bsStyle: 'link', bsSize: 'lg', block: true, onClick: this.onFnf },
	                  'Terms and Conditions'
	                )
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);
	
	  return Login;
	})(_react2['default'].Component);
	
	exports['default'] = (0, _reactRouter.withRouter)(Login);
	module.exports = exports['default'];

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var Dispatcher = __webpack_require__(32).AppDispatcher;
	var IssueConstants = __webpack_require__(34);
	
	module.exports = {
	
	  Login: function Login(data) {
	    Dispatcher.handleAction({
	      actionType: IssueConstants.LOGIN,
	      data: data
	    });
	  },
	  Logout: function Logout() {
	    Dispatcher.handleAction({
	      actionType: IssueConstants.LOGOUT,
	      data: ""
	    });
	  },
	  SubmitFeedback: function SubmitFeedback(data) {
	    Dispatcher.handleAction({
	      actionType: IssueConstants.SUBMIT_FEEDBACK,
	      data: data
	    });
	  },
	  DiscontinueProduct: function DiscontinueProduct(data) {
	    Dispatcher.handleAction({
	      actionType: IssueConstants.DISC_PDT,
	      data: data
	    });
	  }
	
	};

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var Dispatcher = __webpack_require__(33).Dispatcher;
	
	var AppDispatcher = new Dispatcher();
	
	AppDispatcher.handleAction = function (action) {
	  this.dispatch({
	    source: 'DISPATCH',
	    action: action
	  });
	};
	
	module.exports.AppDispatcher = AppDispatcher;

/***/ }),
/* 33 */
/***/ (function(module, exports) {

	module.exports = require("flux");

/***/ }),
/* 34 */
/***/ (function(module, exports) {

	"use strict";
	
	module.exports = {
	  LOGIN: "LOGIN",
	  PURCHASED_ITEMS: "PURCHASED_ITEMS",
	  SUBMIT_FEEDBACK: "SUBMIT_FEEDBACK",
	  DISC_PDT: "DISC_PDT",
	  LOGOUT: "LOGOUT"
	};

/***/ }),
/* 35 */
/***/ (function(module, exports) {

	module.exports = require("react-router");

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(5);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouterDom = __webpack_require__(26);
	
	var Dispatcher = __webpack_require__(32).AppDispatcher;
	var _ = __webpack_require__(37);
	var EventEmitter = __webpack_require__(38).EventEmitter;
	var AjaxHelper = __webpack_require__(39);
	var ChatWebAPIUtils = __webpack_require__(41);
	var Router = __webpack_require__(35);
	var IssueConstants = __webpack_require__(34);
	
	var CHANGE_EVENT = "change";
	var _purchasedItems = [];
	var _productDetails = [];
	var _feedbackDetails = [];
	var _notifications = [];
	
	function ValidateCreds(cred) {
	  var data = AjaxHelper.login("/login", cred);
	  sessionStorage.setItem("username", cred.username);
	  sessionStorage.setItem("role", data.role);
	  console.log("inside validatecreds");
	}
	
	function AddFeedback(feedbackDetails) {
	  AjaxHelper.submitFeedback('/submitFeedback', feedbackDetails);
	}
	
	function DiscontinueProd(pdtCode) {
	  AjaxHelper.discontinueProd('/discontinue', pdtCode);
	}
	
	function Logout() {
	  ChatWebAPIUtils.disconnect();
	  AjaxHelper.logout('/logout', {});
	  console.log('from logout store');
	  sessionStorage.clear();
	  console.log("loggedout", sessionStorage.getItem('username'));
	}
	
	var ApplicationStore = _.extend({}, EventEmitter.prototype, {
	  FetchAdminNotifications: function FetchAdminNotifications() {
	    _notifications = AjaxHelper.fetchAdminNotifications('/dashboard', null);
	    return _notifications;
	  },
	  FetchPurchasedItems: function FetchPurchasedItems(user) {
	    _purchasedItems = AjaxHelper.fetchItems("/purchasedItems", user);
	    return _purchasedItems;
	  },
	  FetchProductDetails: function FetchProductDetails(pdtId) {
	    _productDetails = AjaxHelper.pdtDetails("/productDetails", pdtId);
	    return _productDetails;
	  },
	  emitChange: function emitChange() {
	    this.emit(CHANGE_EVENT);
	  },
	  addChangeListener: function addChangeListener(callback) {
	    this.on(CHANGE_EVENT, callback);
	  },
	  removeChangeListener: function removeChangeListener(callback) {
	    this.removeListener(CHANGE_EVENT, callback);
	  },
	  isAuthenticated: function isAuthenticated() {
	    if (sessionStorage.getItem('username')) {
	      return true;
	    }
	    return false;
	  },
	  isLogout: function isLogout() {
	    if (!sessionStorage.getItem('username')) {
	      return true;
	    } else {
	      return false;
	    }
	  }
	});
	
	Dispatcher.register(function (payload) {
	  var action = payload.action;
	  switch (action.actionType) {
	
	    case IssueConstants.LOGIN:
	      ValidateCreds(payload.action.data);
	      break;
	
	    case IssueConstants.PURCHASED_ITEMS:
	      FetchPurchasedItems(payload.action.data);
	      break;
	
	    case IssueConstants.SUBMIT_FEEDBACK:
	      AddFeedback(payload.action.data);
	      break;
	
	    case IssueConstants.DISC_PDT:
	      console.log(payload.action.data);
	      DiscontinueProd(payload.action.data);
	      break;
	
	    case IssueConstants.LOGOUT:
	      console.log("YOU ARE GONNA LOGGEDOUT");
	      Logout();
	      break;
	
	    default:
	      return true;
	  }
	
	  ApplicationStore.emitChange();
	
	  return true;
	});
	
	module.exports = ApplicationStore;

/***/ }),
/* 37 */
/***/ (function(module, exports) {

	module.exports = require("underscore");

/***/ }),
/* 38 */
/***/ (function(module, exports) {

	module.exports = require("events");

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var $ = __webpack_require__(40);
	
	function PostRequest(url, data) {
	  var data;
	  $.ajax({
	    url: url,
	    type: 'POST',
	    data: data,
	    async: false,
	    success: function success(retObj) {
	      data = retObj;
	    },
	    error: function error(err) {
	      data = err;
	    }
	  });
	  return data;
	}
	
	module.exports = {
	  login: PostRequest,
	  fetchItems: PostRequest,
	  pdtDetails: PostRequest,
	  submitFeedback: PostRequest,
	  fetchAdminNotifications: PostRequest,
	  discontinueProd: PostRequest,
	  logout: PostRequest
	};

/***/ }),
/* 40 */
/***/ (function(module, exports) {

	module.exports = require("jquery");

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _socketIoClient = __webpack_require__(42);
	
	var _socketIoClient2 = _interopRequireDefault(_socketIoClient);
	
	var ChatServerActionCreators = __webpack_require__(43);
	
	var socket = (0, _socketIoClient2['default'])("http://localhost:4000");
	module.exports = {
	
	  getAllMessages: function getAllMessages(url, data) {
	    this.socket = socket;
	    console.log("socketio initialized");
	    this.socket.emit('new user', { "username": sessionStorage.getItem("username") });
	    var rawMessages;
	    console.log("form ChatWebAPIUtils");
	
	    this.socket.on('usernames', function (data) {
	      var rawMsgs = [];
	      console.log("captured usernames fired from server");
	      console.log(data);
	      data.forEach(function (item, index) {
	        if (item != sessionStorage.getItem("username")) {
	          rawMsgs.push({
	            authorName: "",
	            id: 'm_' + Date.now() + "_" + index + "$",
	            text: "",
	            threadID: 't_' + item,
	            threadName: item,
	            timestamp: Date.now()
	          });
	        } else if (item == sessionStorage.getItem("username") && data.length == 1) {
	          console.log("single me");
	          rawMsgs = [];
	        }
	      });
	      console.log("after updating usernames");
	      console.log(rawMsgs);
	      ChatServerActionCreators.receiveAll(rawMsgs);
	    });
	
	    socket.on('new message', function (data) {
	      console.log("from new message in ChatWebAPIUtils");
	      console.log(data);
	      var rawMsgs = [];
	      if (data.Username == sessionStorage.getItem("username")) {
	        rawMsgs.push({
	          authorName: "",
	          id: 'm_' + Date.now() + "_",
	          text: data.Message,
	          threadID: 't_' + data.Username,
	          threadName: data.Username,
	          timestamp: Date.now()
	        });
	      }
	      ChatServerActionCreators.receiveAll(rawMsgs);
	    });
	
	    socket.on('whisper', function (data) {
	      console.log("from whisper in ChatWebAPIUtils");
	      console.log(data);
	      var rawMsgs = [];
	      if (data.Receiver == sessionStorage.getItem("username")) {
	        console.log("identified receiver");
	        rawMsgs.push({
	          authorName: data.Sender,
	          id: 'm_' + Date.now() + "_",
	          text: data.Message,
	          threadID: 't_' + data.Sender,
	          threadName: data.Sender,
	          timestamp: Date.now()
	        });
	      }
	      console.log("from whispering message");
	      console.log(rawMsgs);
	      ChatServerActionCreators.receiveAll(rawMsgs);
	    });
	
	    //ChatServerActionCreators.receiveAll(rawMessages);
	  },
	
	  createMessage: function createMessage(message, threadName) {
	    // simulate writing to a database
	    //var rawMessages = JSON.parse(localStorage.getItem('messages'));
	    var timestamp = Date.now();
	    var id = 'm_' + timestamp;
	    var threadID = null;
	    if (sessionStorage.getItem("role") == "customer") {
	      threadID = 't_krishna';
	    } else {
	      threadID = message.threadID;
	    }
	    var createdMessage = {
	      id: id,
	      threadID: threadID,
	      threadName: threadName,
	      authorName: message.authorName,
	      text: message.text,
	      timestamp: timestamp
	    };
	    //rawMessages.push(createdMessage);
	    //localStorage.setItem('messages', JSON.stringify(rawMessages));
	
	    setTimeout(function () {
	      ChatServerActionCreators.receiveCreatedMessage(createdMessage);
	    }, 0);
	    this.socket.emit("send message", createdMessage);
	  },
	
	  disconnect: function disconnect() {
	    this.socket = socket;
	    this.socket.disconnect();
	  }
	};

/***/ }),
/* 42 */
/***/ (function(module, exports) {

	module.exports = require("socket.io-client");

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var ChatAppDispatcher = __webpack_require__(32).AppDispatcher;
	var ChatConstants = __webpack_require__(44);
	
	//var ActionTypes = ChatConstants.ActionTypes;
	
	module.exports = {
	
	  receiveAll: function receiveAll(rawMessages) {
	    console.log("inside chat server action creators");
	    console.log(rawMessages);
	    ChatAppDispatcher.handleAction({
	      actionType: ChatConstants.RECEIVE_RAW_MESSAGES,
	      data: rawMessages
	    });
	  },
	
	  receiveCreatedMessage: function receiveCreatedMessage(createdMessage) {
	    ChatAppDispatcher.handleAction({
	      actionType: ChatConstants.RECEIVE_RAW_CREATED_MESSAGE,
	      data: createdMessage
	    });
	  }
	
	};

/***/ }),
/* 44 */
/***/ (function(module, exports) {

	"use strict";
	
	module.exports = {
	    CLICK_THREAD: "CLICK_THREAD",
	    CREATE_MESSAGE: "CREATE_MESSAGE",
	    RECEIVE_RAW_CREATED_MESSAGE: "RECEIVE_RAW_CREATED_MESSAGE",
	    RECEIVE_RAW_MESSAGES: "RECEIVE_RAW_MESSAGES"
	};

/***/ }),
/* 45 */
/***/ (function(module, exports) {

	module.exports = require("react-bootstrap");

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(5);
	
	var _react2 = _interopRequireDefault(_react);
	
	var App = (function (_React$Component) {
	  _inherits(App, _React$Component);
	
	  function App() {
	    _classCallCheck(this, App);
	
	    _get(Object.getPrototypeOf(App.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  _createClass(App, [{
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement(
	        'div',
	        null,
	        this.props.children
	      );
	    }
	  }]);
	
	  return App;
	})(_react2['default'].Component);
	
	exports['default'] = App;
	module.exports = exports['default'];

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _ProductJsx = __webpack_require__(48);
	
	var _ProductJsx2 = _interopRequireDefault(_ProductJsx);
	
	var _ActionsAction = __webpack_require__(31);
	
	var _ActionsAction2 = _interopRequireDefault(_ActionsAction);
	
	var _StoresApplicationStore = __webpack_require__(36);
	
	var _StoresApplicationStore2 = _interopRequireDefault(_StoresApplicationStore);
	
	var _ChatApp = __webpack_require__(150);
	
	var _ChatApp2 = _interopRequireDefault(_ChatApp);
	
	var React = __webpack_require__(5);
	
	var Navigation = __webpack_require__(164).Navigation;
	var Footer = __webpack_require__(194);
	
	var MessageSection = __webpack_require__(151);
	var ThreadSection = __webpack_require__(160);
	var ChatExampleData = __webpack_require__(195);
	var ChatWebAPIUtils = __webpack_require__(41);
	
	function getProductState() {
	  var user = { 'username': sessionStorage.getItem("username") };
	  var ret = _StoresApplicationStore2['default'].FetchPurchasedItems(user);
	  return ret;
	}
	
	var PurchasedItems = (function (_React$Component) {
	  _inherits(PurchasedItems, _React$Component);
	
	  function PurchasedItems(props) {
	    _classCallCheck(this, PurchasedItems);
	
	    _get(Object.getPrototypeOf(PurchasedItems.prototype), 'constructor', this).call(this, props);
	    this.state = {
	      products: null
	    };
	  }
	
	  _createClass(PurchasedItems, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      //called before render method.
	      this.setState({ products: getProductState() });
	
	      //ChatExampleData.init(); // load example data into localstorage
	      var ret = ChatWebAPIUtils.getAllMessages();
	      console.log(ret);
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      //called after render method.
	      document.body.style.backgroundImage = "none";
	      //AppStore.addChangeListener(this._onChange);
	      setInterval(this._onChange, 1000);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var items = [];
	      console.log("from render", this.state.products);
	      if (this.state.products) {
	        this.state.products.forEach((function (item, index) {
	          items.push(React.createElement(
	            'div',
	            { key: item._id, className: "col-sm-6 col-md-6" },
	            React.createElement(_ProductJsx2['default'], { pid: item._id, price: item.pdtPrice, name: item.pdtName, desc: item.pdtDescription, img: item.pdtImg, rating: item.avgFeedback, status: item.isDiscontinued })
	          ));
	        }).bind(this));
	      }
	      return React.createElement(
	        'div',
	        null,
	        React.createElement(Navigation, null),
	        React.createElement(
	          'div',
	          { className: 'container-fluid' },
	          React.createElement(
	            'div',
	            { className: 'row' },
	            React.createElement(
	              'div',
	              { className: 'col-sm-7' },
	              items
	            ),
	            React.createElement(
	              'div',
	              { className: 'col-sm-5' },
	              React.createElement(_ChatApp2['default'], null)
	            )
	          )
	        ),
	        React.createElement(Footer, null)
	      );
	    }
	  }, {
	    key: '_onChange',
	    value: function _onChange() {
	      this.setState({ products: getProductState() });
	    }
	  }]);
	
	  return PurchasedItems;
	})(React.Component);
	
	exports['default'] = PurchasedItems;
	module.exports = exports['default'];

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _reactRouterDom = __webpack_require__(26);
	
	var React = __webpack_require__(5);
	var Rater = __webpack_require__(49).Rater;
	var Button = __webpack_require__(50);
	
	var Product = (function (_React$Component) {
	  _inherits(Product, _React$Component);
	
	  function Product() {
	    _classCallCheck(this, Product);
	
	    _get(Object.getPrototypeOf(Product.prototype), 'constructor', this).call(this);
	    this.state = {
	      rating: ''
	    };
	  }
	
	  _createClass(Product, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.setState({ rating: this.props.rating });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return React.createElement(
	        'div',
	        { className: "thumbnail" },
	        React.createElement('img', { src: this.props.img, className: "img img-rounded img-responsive" }),
	        React.createElement(
	          'div',
	          { className: "caption", style: { "textAlign": "center" } },
	          React.createElement(
	            _reactRouterDom.Link,
	            { to: '/productDetails/' + this.props.pid },
	            React.createElement(
	              'h3',
	              null,
	              this.props.name
	            )
	          ),
	          React.createElement(
	            'h4',
	            null,
	            React.createElement(
	              'span',
	              { style: { "color": "red" } },
	              'Rs.',
	              this.props.price
	            )
	          ),
	          this.props.status ? React.createElement(
	            'h5',
	            { style: { "color": "red", "font-weight": "bold" } },
	            'The product is discontinued.'
	          ) : React.createElement(
	            'p',
	            { className: "description" },
	            this.props.desc
	          ),
	          React.createElement(Rater, { value: this.props.rating, maxlength: '6' }),
	          '  ',
	          React.createElement(
	            'span',
	            { style: { "fontSize": "9px" } },
	            this.props.rating,
	            '/5'
	          )
	        )
	      );
	    }
	  }]);
	
	  return Product;
	})(React.Component);
	
	exports['default'] = Product;
	module.exports = exports['default'];

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var React = __webpack_require__(5);
	
	var Rater = (function (_React$Component) {
	  _inherits(Rater, _React$Component);
	
	  function Rater() {
	    _classCallCheck(this, Rater);
	
	    _get(Object.getPrototypeOf(Rater.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  _createClass(Rater, [{
	    key: 'render',
	    value: function render() {
	      var items = [];
	      for (var i = 1; i < this.props.maxlength; i++) {
	        var clickHandler = this.props.onSelected && this.props.onSelected.bind(null, i);
	        items.push(React.createElement(
	          'li',
	          { className: i <= this.props.value && 'filled', onClick: clickHandler },
	          '★'
	        ));
	      }
	      return React.createElement(
	        'ul',
	        { className: 'rating' },
	        items
	      );
	    }
	  }]);
	
	  return Rater;
	})(React.Component);
	
	module.exports.Rater = Rater;

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _values = __webpack_require__(51);
	
	var _values2 = _interopRequireDefault(_values);
	
	var _objectWithoutProperties2 = __webpack_require__(86);
	
	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
	
	var _extends3 = __webpack_require__(87);
	
	var _extends4 = _interopRequireDefault(_extends3);
	
	var _classCallCheck2 = __webpack_require__(94);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _possibleConstructorReturn2 = __webpack_require__(95);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(130);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _classnames = __webpack_require__(138);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _react = __webpack_require__(5);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(139);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _elementType = __webpack_require__(140);
	
	var _elementType2 = _interopRequireDefault(_elementType);
	
	var _bootstrapUtils = __webpack_require__(142);
	
	var _StyleConfig = __webpack_require__(147);
	
	var _SafeAnchor = __webpack_require__(148);
	
	var _SafeAnchor2 = _interopRequireDefault(_SafeAnchor);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}
	
	var propTypes = {
	  active: _propTypes2['default'].bool,
	  disabled: _propTypes2['default'].bool,
	  block: _propTypes2['default'].bool,
	  onClick: _propTypes2['default'].func,
	  componentClass: _elementType2['default'],
	  href: _propTypes2['default'].string,
	  /**
	   * Defines HTML button type attribute
	   * @defaultValue 'button'
	   */
	  type: _propTypes2['default'].oneOf(['button', 'reset', 'submit'])
	};
	
	var defaultProps = {
	  active: false,
	  block: false,
	  disabled: false
	};
	
	var Button = (function (_React$Component) {
	  (0, _inherits3['default'])(Button, _React$Component);
	
	  function Button() {
	    (0, _classCallCheck3['default'])(this, Button);
	    return (0, _possibleConstructorReturn3['default'])(this, _React$Component.apply(this, arguments));
	  }
	
	  Button.prototype.renderAnchor = function renderAnchor(elementProps, className) {
	    return _react2['default'].createElement(_SafeAnchor2['default'], (0, _extends4['default'])({}, elementProps, {
	      className: (0, _classnames2['default'])(className, elementProps.disabled && 'disabled')
	    }));
	  };
	
	  Button.prototype.renderButton = function renderButton(_ref, className) {
	    var componentClass = _ref.componentClass,
	        elementProps = (0, _objectWithoutProperties3['default'])(_ref, ['componentClass']);
	
	    var Component = componentClass || 'button';
	
	    return _react2['default'].createElement(Component, (0, _extends4['default'])({}, elementProps, {
	      type: elementProps.type || 'button',
	      className: className
	    }));
	  };
	
	  Button.prototype.render = function render() {
	    var _extends2;
	
	    var _props = this.props,
	        active = _props.active,
	        block = _props.block,
	        className = _props.className,
	        props = (0, _objectWithoutProperties3['default'])(_props, ['active', 'block', 'className']);
	
	    var _splitBsProps = (0, _bootstrapUtils.splitBsProps)(props),
	        bsProps = _splitBsProps[0],
	        elementProps = _splitBsProps[1];
	
	    var classes = (0, _extends4['default'])({}, (0, _bootstrapUtils.getClassSet)(bsProps), (_extends2 = {
	      active: active
	    }, _extends2[(0, _bootstrapUtils.prefix)(bsProps, 'block')] = block, _extends2));
	    var fullClassName = (0, _classnames2['default'])(className, classes);
	
	    if (elementProps.href) {
	      return this.renderAnchor(elementProps, fullClassName);
	    }
	
	    return this.renderButton(elementProps, fullClassName);
	  };
	
	  return Button;
	})(_react2['default'].Component);
	
	Button.propTypes = propTypes;
	Button.defaultProps = defaultProps;
	
	exports['default'] = (0, _bootstrapUtils.bsClass)('btn', (0, _bootstrapUtils.bsSizes)([_StyleConfig.Size.LARGE, _StyleConfig.Size.SMALL, _StyleConfig.Size.XSMALL], (0, _bootstrapUtils.bsStyles)([].concat((0, _values2['default'])(_StyleConfig.State), [_StyleConfig.Style.DEFAULT, _StyleConfig.Style.PRIMARY, _StyleConfig.Style.LINK]), _StyleConfig.Style.DEFAULT, Button)));
	module.exports = exports['default'];

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	module.exports = { "default": __webpack_require__(52), __esModule: true };

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(53);
	module.exports = __webpack_require__(56).Object.values;

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-object-values-entries
	'use strict';
	
	var $export = __webpack_require__(54);
	var $values = __webpack_require__(69)(false);
	
	$export($export.S, 'Object', {
	  values: function values(it) {
	    return $values(it);
	  }
	});

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var global = __webpack_require__(55);
	var core = __webpack_require__(56);
	var ctx = __webpack_require__(57);
	var hide = __webpack_require__(59);
	var PROTOTYPE = 'prototype';
	
	var $export = function $export(type, name, source) {
	  var IS_FORCED = type & $export.F;
	  var IS_GLOBAL = type & $export.G;
	  var IS_STATIC = type & $export.S;
	  var IS_PROTO = type & $export.P;
	  var IS_BIND = type & $export.B;
	  var IS_WRAP = type & $export.W;
	  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
	  var expProto = exports[PROTOTYPE];
	  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
	  var key, own, out;
	  if (IS_GLOBAL) source = name;
	  for (key in source) {
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if (own && key in exports) continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function (C) {
	      var F = function F(a, b, c) {
	        if (this instanceof C) {
	          switch (arguments.length) {
	            case 0:
	              return new C();
	            case 1:
	              return new C(a);
	            case 2:
	              return new C(a, b);
	          }return new C(a, b, c);
	        }return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	      // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if (IS_PROTO) {
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1; // forced
	$export.G = 2; // global
	$export.S = 4; // static
	$export.P = 8; // proto
	$export.B = 16; // bind
	$export.W = 32; // wrap
	$export.U = 64; // safe
	$export.R = 128; // real proto method for `library`
	module.exports = $export;

/***/ }),
/* 55 */
/***/ (function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	'use strict';
	
	var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self
	// eslint-disable-next-line no-new-func
	: Function('return this')();
	if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef

/***/ }),
/* 56 */
/***/ (function(module, exports) {

	'use strict';
	
	var core = module.exports = { version: '2.5.1' };
	if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

	// optional / simple context binding
	'use strict';
	
	var aFunction = __webpack_require__(58);
	module.exports = function (fn, that, length) {
	  aFunction(fn);
	  if (that === undefined) return fn;
	  switch (length) {
	    case 1:
	      return function (a) {
	        return fn.call(that, a);
	      };
	    case 2:
	      return function (a, b) {
	        return fn.call(that, a, b);
	      };
	    case 3:
	      return function (a, b, c) {
	        return fn.call(that, a, b, c);
	      };
	  }
	  return function () /* ...args */{
	    return fn.apply(that, arguments);
	  };
	};

/***/ }),
/* 58 */
/***/ (function(module, exports) {

	'use strict';
	
	module.exports = function (it) {
	  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var dP = __webpack_require__(60);
	var createDesc = __webpack_require__(68);
	module.exports = __webpack_require__(64) ? function (object, key, value) {
	  return dP.f(object, key, createDesc(1, value));
	} : function (object, key, value) {
	  object[key] = value;
	  return object;
	};

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var anObject = __webpack_require__(61);
	var IE8_DOM_DEFINE = __webpack_require__(63);
	var toPrimitive = __webpack_require__(67);
	var dP = Object.defineProperty;
	
	exports.f = __webpack_require__(64) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if (IE8_DOM_DEFINE) try {
	    return dP(O, P, Attributes);
	  } catch (e) {/* empty */}
	  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
	  if ('value' in Attributes) O[P] = Attributes.value;
	  return O;
	};

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var isObject = __webpack_require__(62);
	module.exports = function (it) {
	  if (!isObject(it)) throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ }),
/* 62 */
/***/ (function(module, exports) {

	'use strict';
	
	module.exports = function (it) {
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = !__webpack_require__(64) && !__webpack_require__(65)(function () {
	  return Object.defineProperty(__webpack_require__(66)('div'), 'a', { get: function get() {
	      return 7;
	    } }).a != 7;
	});

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	'use strict';
	
	module.exports = !__webpack_require__(65)(function () {
	  return Object.defineProperty({}, 'a', { get: function get() {
	      return 7;
	    } }).a != 7;
	});

/***/ }),
/* 65 */
/***/ (function(module, exports) {

	"use strict";
	
	module.exports = function (exec) {
	  try {
	    return !!exec();
	  } catch (e) {
	    return true;
	  }
	};

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var isObject = __webpack_require__(62);
	var document = __webpack_require__(55).document;
	// typeof document.createElement is 'object' in old IE
	var is = isObject(document) && isObject(document.createElement);
	module.exports = function (it) {
	  return is ? document.createElement(it) : {};
	};

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	'use strict';
	
	var isObject = __webpack_require__(62);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function (it, S) {
	  if (!isObject(it)) return it;
	  var fn, val;
	  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
	  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
	  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ }),
/* 68 */
/***/ (function(module, exports) {

	"use strict";
	
	module.exports = function (bitmap, value) {
	  return {
	    enumerable: !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable: !(bitmap & 4),
	    value: value
	  };
	};

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var getKeys = __webpack_require__(70);
	var toIObject = __webpack_require__(73);
	var isEnum = __webpack_require__(85).f;
	module.exports = function (isEntries) {
	  return function (it) {
	    var O = toIObject(it);
	    var keys = getKeys(O);
	    var length = keys.length;
	    var i = 0;
	    var result = [];
	    var key;
	    while (length > i) if (isEnum.call(O, key = keys[i++])) {
	      result.push(isEntries ? [key, O[key]] : O[key]);
	    }return result;
	  };
	};

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	'use strict';
	
	var $keys = __webpack_require__(71);
	var enumBugKeys = __webpack_require__(84);
	
	module.exports = Object.keys || function keys(O) {
	  return $keys(O, enumBugKeys);
	};

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var has = __webpack_require__(72);
	var toIObject = __webpack_require__(73);
	var arrayIndexOf = __webpack_require__(77)(false);
	var IE_PROTO = __webpack_require__(81)('IE_PROTO');
	
	module.exports = function (object, names) {
	  var O = toIObject(object);
	  var i = 0;
	  var result = [];
	  var key;
	  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while (names.length > i) if (has(O, key = names[i++])) {
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

/***/ }),
/* 72 */
/***/ (function(module, exports) {

	"use strict";
	
	var hasOwnProperty = ({}).hasOwnProperty;
	module.exports = function (it, key) {
	  return hasOwnProperty.call(it, key);
	};

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	'use strict';
	
	var IObject = __webpack_require__(74);
	var defined = __webpack_require__(76);
	module.exports = function (it) {
	  return IObject(defined(it));
	};

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	'use strict';
	
	var cof = __webpack_require__(75);
	// eslint-disable-next-line no-prototype-builtins
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ }),
/* 75 */
/***/ (function(module, exports) {

	"use strict";
	
	var toString = ({}).toString;
	
	module.exports = function (it) {
	  return toString.call(it).slice(8, -1);
	};

/***/ }),
/* 76 */
/***/ (function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	"use strict";
	
	module.exports = function (it) {
	  if (it == undefined) throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	'use strict';
	
	var toIObject = __webpack_require__(73);
	var toLength = __webpack_require__(78);
	var toAbsoluteIndex = __webpack_require__(80);
	module.exports = function (IS_INCLUDES) {
	  return function ($this, el, fromIndex) {
	    var O = toIObject($this);
	    var length = toLength(O.length);
	    var index = toAbsoluteIndex(fromIndex, length);
	    var value;
	    // Array#includes uses SameValueZero equality algorithm
	    // eslint-disable-next-line no-self-compare
	    if (IS_INCLUDES && el != el) while (length > index) {
	      value = O[index++];
	      // eslint-disable-next-line no-self-compare
	      if (value != value) return true;
	      // Array#indexOf ignores holes, Array#includes - not
	    } else for (; length > index; index++) if (IS_INCLUDES || index in O) {
	        if (O[index] === el) return IS_INCLUDES || index || 0;
	      }return !IS_INCLUDES && -1;
	  };
	};

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	'use strict';
	
	var toInteger = __webpack_require__(79);
	var min = Math.min;
	module.exports = function (it) {
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ }),
/* 79 */
/***/ (function(module, exports) {

	// 7.1.4 ToInteger
	"use strict";
	
	var ceil = Math.ceil;
	var floor = Math.floor;
	module.exports = function (it) {
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var toInteger = __webpack_require__(79);
	var max = Math.max;
	var min = Math.min;
	module.exports = function (index, length) {
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var shared = __webpack_require__(82)('keys');
	var uid = __webpack_require__(83);
	module.exports = function (key) {
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var global = __webpack_require__(55);
	var SHARED = '__core-js_shared__';
	var store = global[SHARED] || (global[SHARED] = {});
	module.exports = function (key) {
	  return store[key] || (store[key] = {});
	};

/***/ }),
/* 83 */
/***/ (function(module, exports) {

	'use strict';
	
	var id = 0;
	var px = Math.random();
	module.exports = function (key) {
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ }),
/* 84 */
/***/ (function(module, exports) {

	// IE 8- don't enum bug keys
	'use strict';
	
	module.exports = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(',');

/***/ }),
/* 85 */
/***/ (function(module, exports) {

	"use strict";
	
	exports.f = ({}).propertyIsEnumerable;

/***/ }),
/* 86 */
/***/ (function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	
	exports["default"] = function (obj, keys) {
	  var target = {};
	
	  for (var i in obj) {
	    if (keys.indexOf(i) >= 0) continue;
	    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
	    target[i] = obj[i];
	  }
	
	  return target;
	};

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _assign = __webpack_require__(88);
	
	var _assign2 = _interopRequireDefault(_assign);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { "default": obj };
	}
	
	exports["default"] = _assign2["default"] || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];
	
	    for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }
	
	  return target;
	};

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	module.exports = { "default": __webpack_require__(89), __esModule: true };

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(90);
	module.exports = __webpack_require__(56).Object.assign;

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	'use strict';
	
	var $export = __webpack_require__(54);
	
	$export($export.S + $export.F, 'Object', { assign: __webpack_require__(91) });

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	var getKeys = __webpack_require__(70);
	var gOPS = __webpack_require__(92);
	var pIE = __webpack_require__(85);
	var toObject = __webpack_require__(93);
	var IObject = __webpack_require__(74);
	var $assign = Object.assign;
	
	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(65)(function () {
	  var A = {};
	  var B = {};
	  // eslint-disable-next-line no-undef
	  var S = Symbol();
	  var K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function (k) {
	    B[k] = k;
	  });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	}) ? function assign(target, source) {
	  // eslint-disable-line no-unused-vars
	  var T = toObject(target);
	  var aLen = arguments.length;
	  var index = 1;
	  var getSymbols = gOPS.f;
	  var isEnum = pIE.f;
	  while (aLen > index) {
	    var S = IObject(arguments[index++]);
	    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
	    var length = keys.length;
	    var j = 0;
	    var key;
	    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
	  }return T;
	} : $assign;

/***/ }),
/* 92 */
/***/ (function(module, exports) {

	"use strict";
	
	exports.f = Object.getOwnPropertySymbols;

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	'use strict';
	
	var defined = __webpack_require__(76);
	module.exports = function (it) {
	  return Object(defined(it));
	};

/***/ }),
/* 94 */
/***/ (function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	
	exports["default"] = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _typeof2 = __webpack_require__(96);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { "default": obj };
	}
	
	exports["default"] = function (self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }
	
	  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3["default"])(call)) === "object" || typeof call === "function") ? call : self;
	};

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _iterator = __webpack_require__(97);
	
	var _iterator2 = _interopRequireDefault(_iterator);
	
	var _symbol = __webpack_require__(117);
	
	var _symbol2 = _interopRequireDefault(_symbol);
	
	var _typeof = typeof _symbol2["default"] === "function" && typeof _iterator2["default"] === "symbol" ? function (obj) {
	  return typeof obj;
	} : function (obj) {
	  return obj && typeof _symbol2["default"] === "function" && obj.constructor === _symbol2["default"] && obj !== _symbol2["default"].prototype ? "symbol" : typeof obj;
	};
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { "default": obj };
	}
	
	exports["default"] = typeof _symbol2["default"] === "function" && _typeof(_iterator2["default"]) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
	} : function (obj) {
	  return obj && typeof _symbol2["default"] === "function" && obj.constructor === _symbol2["default"] && obj !== _symbol2["default"].prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
	};

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	module.exports = { "default": __webpack_require__(98), __esModule: true };

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(99);
	__webpack_require__(112);
	module.exports = __webpack_require__(116).f('iterator');

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $at = __webpack_require__(100)(true);
	
	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(101)(String, 'String', function (iterated) {
	  this._t = String(iterated); // target
	  this._i = 0; // next index
	  // 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function () {
	  var O = this._t;
	  var index = this._i;
	  var point;
	  if (index >= O.length) return { value: undefined, done: true };
	  point = $at(O, index);
	  this._i += point.length;
	  return { value: point, done: false };
	});

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var toInteger = __webpack_require__(79);
	var defined = __webpack_require__(76);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function (TO_STRING) {
	  return function (that, pos) {
	    var s = String(defined(that));
	    var i = toInteger(pos);
	    var l = s.length;
	    var a, b;
	    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff ? TO_STRING ? s.charAt(i) : a : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY = __webpack_require__(102);
	var $export = __webpack_require__(54);
	var redefine = __webpack_require__(103);
	var hide = __webpack_require__(59);
	var has = __webpack_require__(72);
	var Iterators = __webpack_require__(104);
	var $iterCreate = __webpack_require__(105);
	var setToStringTag = __webpack_require__(109);
	var getPrototypeOf = __webpack_require__(111);
	var ITERATOR = __webpack_require__(110)('iterator');
	var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
	var FF_ITERATOR = '@@iterator';
	var KEYS = 'keys';
	var VALUES = 'values';
	
	var returnThis = function returnThis() {
	  return this;
	};
	
	module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function getMethod(kind) {
	    if (!BUGGY && kind in proto) return proto[kind];
	    switch (kind) {
	      case KEYS:
	        return function keys() {
	          return new Constructor(this, kind);
	        };
	      case VALUES:
	        return function values() {
	          return new Constructor(this, kind);
	        };
	    }return function entries() {
	      return new Constructor(this, kind);
	    };
	  };
	  var TAG = NAME + ' Iterator';
	  var DEF_VALUES = DEFAULT == VALUES;
	  var VALUES_BUG = false;
	  var proto = Base.prototype;
	  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
	  var $default = $native || getMethod(DEFAULT);
	  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
	  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
	  var methods, key, IteratorPrototype;
	  // Fix native
	  if ($anyNative) {
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
	    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if (DEF_VALUES && $native && $native.name !== VALUES) {
	    VALUES_BUG = true;
	    $default = function values() {
	      return $native.call(this);
	    };
	  }
	  // Define iterator
	  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG] = returnThis;
	  if (DEFAULT) {
	    methods = {
	      values: DEF_VALUES ? $default : getMethod(VALUES),
	      keys: IS_SET ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if (FORCED) for (key in methods) {
	      if (!(key in proto)) redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ }),
/* 102 */
/***/ (function(module, exports) {

	"use strict";
	
	module.exports = true;

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = __webpack_require__(59);

/***/ }),
/* 104 */
/***/ (function(module, exports) {

	"use strict";
	
	module.exports = {};

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var create = __webpack_require__(106);
	var descriptor = __webpack_require__(68);
	var setToStringTag = __webpack_require__(109);
	var IteratorPrototype = {};
	
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(59)(IteratorPrototype, __webpack_require__(110)('iterator'), function () {
	  return this;
	});
	
	module.exports = function (Constructor, NAME, next) {
	  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	'use strict';
	
	var anObject = __webpack_require__(61);
	var dPs = __webpack_require__(107);
	var enumBugKeys = __webpack_require__(84);
	var IE_PROTO = __webpack_require__(81)('IE_PROTO');
	var Empty = function Empty() {/* empty */};
	var PROTOTYPE = 'prototype';
	
	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var _createDict = function createDict() {
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(66)('iframe');
	  var i = enumBugKeys.length;
	  var lt = '<';
	  var gt = '>';
	  var iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(108).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  _createDict = iframeDocument.F;
	  while (i--) delete _createDict[PROTOTYPE][enumBugKeys[i]];
	  return _createDict();
	};
	
	module.exports = Object.create || function create(O, Properties) {
	  var result;
	  if (O !== null) {
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty();
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = _createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var dP = __webpack_require__(60);
	var anObject = __webpack_require__(61);
	var getKeys = __webpack_require__(70);
	
	module.exports = __webpack_require__(64) ? Object.defineProperties : function defineProperties(O, Properties) {
	  anObject(O);
	  var keys = getKeys(Properties);
	  var length = keys.length;
	  var i = 0;
	  var P;
	  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var document = __webpack_require__(55).document;
	module.exports = document && document.documentElement;

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var def = __webpack_require__(60).f;
	var has = __webpack_require__(72);
	var TAG = __webpack_require__(110)('toStringTag');
	
	module.exports = function (it, tag, stat) {
	  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
	};

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var store = __webpack_require__(82)('wks');
	var uid = __webpack_require__(83);
	var Symbol = __webpack_require__(55).Symbol;
	var USE_SYMBOL = typeof Symbol == 'function';
	
	var $exports = module.exports = function (name) {
	  return store[name] || (store[name] = USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};
	
	$exports.store = store;

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	'use strict';
	
	var has = __webpack_require__(72);
	var toObject = __webpack_require__(93);
	var IE_PROTO = __webpack_require__(81)('IE_PROTO');
	var ObjectProto = Object.prototype;
	
	module.exports = Object.getPrototypeOf || function (O) {
	  O = toObject(O);
	  if (has(O, IE_PROTO)) return O[IE_PROTO];
	  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
	    return O.constructor.prototype;
	  }return O instanceof Object ? ObjectProto : null;
	};

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(113);
	var global = __webpack_require__(55);
	var hide = __webpack_require__(59);
	var Iterators = __webpack_require__(104);
	var TO_STRING_TAG = __webpack_require__(110)('toStringTag');
	
	var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' + 'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' + 'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' + 'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' + 'TextTrackList,TouchList').split(',');
	
	for (var i = 0; i < DOMIterables.length; i++) {
	  var NAME = DOMIterables[i];
	  var Collection = global[NAME];
	  var proto = Collection && Collection.prototype;
	  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
	  Iterators[NAME] = Iterators.Array;
	}

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(114);
	var step = __webpack_require__(115);
	var Iterators = __webpack_require__(104);
	var toIObject = __webpack_require__(73);
	
	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(101)(Array, 'Array', function (iterated, kind) {
	  this._t = toIObject(iterated); // target
	  this._i = 0; // next index
	  this._k = kind; // kind
	  // 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function () {
	  var O = this._t;
	  var kind = this._k;
	  var index = this._i++;
	  if (!O || index >= O.length) {
	    this._t = undefined;
	    return step(1);
	  }
	  if (kind == 'keys') return step(0, index);
	  if (kind == 'values') return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');
	
	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;
	
	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ }),
/* 114 */
/***/ (function(module, exports) {

	"use strict";
	
	module.exports = function () {/* empty */};

/***/ }),
/* 115 */
/***/ (function(module, exports) {

	"use strict";
	
	module.exports = function (done, value) {
	  return { value: value, done: !!done };
	};

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.f = __webpack_require__(110);

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	module.exports = { "default": __webpack_require__(118), __esModule: true };

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(119);
	__webpack_require__(127);
	__webpack_require__(128);
	__webpack_require__(129);
	module.exports = __webpack_require__(56).Symbol;

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var global = __webpack_require__(55);
	var has = __webpack_require__(72);
	var DESCRIPTORS = __webpack_require__(64);
	var $export = __webpack_require__(54);
	var redefine = __webpack_require__(103);
	var META = __webpack_require__(120).KEY;
	var $fails = __webpack_require__(65);
	var shared = __webpack_require__(82);
	var setToStringTag = __webpack_require__(109);
	var uid = __webpack_require__(83);
	var wks = __webpack_require__(110);
	var wksExt = __webpack_require__(116);
	var wksDefine = __webpack_require__(121);
	var enumKeys = __webpack_require__(122);
	var isArray = __webpack_require__(123);
	var anObject = __webpack_require__(61);
	var toIObject = __webpack_require__(73);
	var toPrimitive = __webpack_require__(67);
	var createDesc = __webpack_require__(68);
	var _create = __webpack_require__(106);
	var gOPNExt = __webpack_require__(124);
	var $GOPD = __webpack_require__(126);
	var $DP = __webpack_require__(60);
	var $keys = __webpack_require__(70);
	var gOPD = $GOPD.f;
	var dP = $DP.f;
	var gOPN = gOPNExt.f;
	var $Symbol = global.Symbol;
	var $JSON = global.JSON;
	var _stringify = $JSON && $JSON.stringify;
	var PROTOTYPE = 'prototype';
	var HIDDEN = wks('_hidden');
	var TO_PRIMITIVE = wks('toPrimitive');
	var isEnum = ({}).propertyIsEnumerable;
	var SymbolRegistry = shared('symbol-registry');
	var AllSymbols = shared('symbols');
	var OPSymbols = shared('op-symbols');
	var ObjectProto = Object[PROTOTYPE];
	var USE_NATIVE = typeof $Symbol == 'function';
	var QObject = global.QObject;
	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;
	
	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function () {
	  return _create(dP({}, 'a', {
	    get: function get() {
	      return dP(this, 'a', { value: 7 }).a;
	    }
	  })).a != 7;
	}) ? function (it, key, D) {
	  var protoDesc = gOPD(ObjectProto, key);
	  if (protoDesc) delete ObjectProto[key];
	  dP(it, key, D);
	  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
	} : dP;
	
	var wrap = function wrap(tag) {
	  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
	  sym._k = tag;
	  return sym;
	};
	
	var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
	  return typeof it == 'symbol';
	} : function (it) {
	  return it instanceof $Symbol;
	};
	
	var $defineProperty = function defineProperty(it, key, D) {
	  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
	  anObject(it);
	  key = toPrimitive(key, true);
	  anObject(D);
	  if (has(AllSymbols, key)) {
	    if (!D.enumerable) {
	      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
	      D = _create(D, { enumerable: createDesc(0, false) });
	    }return setSymbolDesc(it, key, D);
	  }return dP(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P) {
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P));
	  var i = 0;
	  var l = keys.length;
	  var key;
	  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P) {
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key) {
	  var E = isEnum.call(this, key = toPrimitive(key, true));
	  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
	  it = toIObject(it);
	  key = toPrimitive(key, true);
	  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
	  var D = gOPD(it, key);
	  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it) {
	  var names = gOPN(toIObject(it));
	  var result = [];
	  var i = 0;
	  var key;
	  while (names.length > i) {
	    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
	  }return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
	  var IS_OP = it === ObjectProto;
	  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
	  var result = [];
	  var i = 0;
	  var key;
	  while (names.length > i) {
	    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
	  }return result;
	};
	
	// 19.4.1.1 Symbol([description])
	if (!USE_NATIVE) {
	  $Symbol = function Symbol() {
	    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
	    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
	    var $set = function $set(value) {
	      if (this === ObjectProto) $set.call(OPSymbols, value);
	      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    };
	    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
	    return wrap(tag);
	  };
	  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
	    return this._k;
	  });
	
	  $GOPD.f = $getOwnPropertyDescriptor;
	  $DP.f = $defineProperty;
	  __webpack_require__(125).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(85).f = $propertyIsEnumerable;
	  __webpack_require__(92).f = $getOwnPropertySymbols;
	
	  if (DESCRIPTORS && !__webpack_require__(102)) {
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }
	
	  wksExt.f = function (name) {
	    return wrap(wks(name));
	  };
	}
	
	$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });
	
	for (var es6Symbols =
	// 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
	'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'.split(','), j = 0; es6Symbols.length > j;) wks(es6Symbols[j++]);
	
	for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);
	
	$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function _for(key) {
	    return has(SymbolRegistry, key += '') ? SymbolRegistry[key] : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(sym) {
	    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
	    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
	  },
	  useSetter: function useSetter() {
	    setter = true;
	  },
	  useSimple: function useSimple() {
	    setter = false;
	  }
	});
	
	$export($export.S + $export.F * !USE_NATIVE, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});
	
	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
	})), 'JSON', {
	  stringify: function stringify(it) {
	    if (it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
	    var args = [it];
	    var i = 1;
	    var replacer, $replacer;
	    while (arguments.length > i) args.push(arguments[i++]);
	    replacer = args[1];
	    if (typeof replacer == 'function') $replacer = replacer;
	    if ($replacer || !isArray(replacer)) replacer = function (key, value) {
	      if ($replacer) value = $replacer.call(this, key, value);
	      if (!isSymbol(value)) return value;
	    };
	    args[1] = replacer;
	    return _stringify.apply($JSON, args);
	  }
	});
	
	// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
	$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(59)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var META = __webpack_require__(83)('meta');
	var isObject = __webpack_require__(62);
	var has = __webpack_require__(72);
	var setDesc = __webpack_require__(60).f;
	var id = 0;
	var isExtensible = Object.isExtensible || function () {
	  return true;
	};
	var FREEZE = !__webpack_require__(65)(function () {
	  return isExtensible(Object.preventExtensions({}));
	});
	var setMeta = function setMeta(it) {
	  setDesc(it, META, { value: {
	      i: 'O' + ++id, // object ID
	      w: {} // weak collections IDs
	    } });
	};
	var fastKey = function fastKey(it, create) {
	  // return primitive with prefix
	  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if (!has(it, META)) {
	    // can't set metadata to uncaught frozen object
	    if (!isExtensible(it)) return 'F';
	    // not necessary to add metadata
	    if (!create) return 'E';
	    // add missing metadata
	    setMeta(it);
	    // return object ID
	  }return it[META].i;
	};
	var getWeak = function getWeak(it, create) {
	  if (!has(it, META)) {
	    // can't set metadata to uncaught frozen object
	    if (!isExtensible(it)) return true;
	    // not necessary to add metadata
	    if (!create) return false;
	    // add missing metadata
	    setMeta(it);
	    // return hash weak collections IDs
	  }return it[META].w;
	};
	// add metadata on freeze-family methods calling
	var onFreeze = function onFreeze(it) {
	  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
	  return it;
	};
	var meta = module.exports = {
	  KEY: META,
	  NEED: false,
	  fastKey: fastKey,
	  getWeak: getWeak,
	  onFreeze: onFreeze
	};

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var global = __webpack_require__(55);
	var core = __webpack_require__(56);
	var LIBRARY = __webpack_require__(102);
	var wksExt = __webpack_require__(116);
	var defineProperty = __webpack_require__(60).f;
	module.exports = function (name) {
	  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
	  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
	};

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	'use strict';
	
	var getKeys = __webpack_require__(70);
	var gOPS = __webpack_require__(92);
	var pIE = __webpack_require__(85);
	module.exports = function (it) {
	  var result = getKeys(it);
	  var getSymbols = gOPS.f;
	  if (getSymbols) {
	    var symbols = getSymbols(it);
	    var isEnum = pIE.f;
	    var i = 0;
	    var key;
	    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
	  }return result;
	};

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	'use strict';
	
	var cof = __webpack_require__(75);
	module.exports = Array.isArray || function isArray(arg) {
	  return cof(arg) == 'Array';
	};

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	'use strict';
	
	var toIObject = __webpack_require__(73);
	var gOPN = __webpack_require__(125).f;
	var toString = ({}).toString;
	
	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
	
	var getWindowNames = function getWindowNames(it) {
	  try {
	    return gOPN(it);
	  } catch (e) {
	    return windowNames.slice();
	  }
	};
	
	module.exports.f = function getOwnPropertyNames(it) {
	  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
	};

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	'use strict';
	
	var $keys = __webpack_require__(71);
	var hiddenKeys = __webpack_require__(84).concat('length', 'prototype');
	
	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
	  return $keys(O, hiddenKeys);
	};

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var pIE = __webpack_require__(85);
	var createDesc = __webpack_require__(68);
	var toIObject = __webpack_require__(73);
	var toPrimitive = __webpack_require__(67);
	var has = __webpack_require__(72);
	var IE8_DOM_DEFINE = __webpack_require__(63);
	var gOPD = Object.getOwnPropertyDescriptor;
	
	exports.f = __webpack_require__(64) ? gOPD : function getOwnPropertyDescriptor(O, P) {
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if (IE8_DOM_DEFINE) try {
	    return gOPD(O, P);
	  } catch (e) {/* empty */}
	  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
	};

/***/ }),
/* 127 */
/***/ (function(module, exports) {

	"use strict";

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(121)('asyncIterator');

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(121)('observable');

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _setPrototypeOf = __webpack_require__(131);
	
	var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);
	
	var _create = __webpack_require__(135);
	
	var _create2 = _interopRequireDefault(_create);
	
	var _typeof2 = __webpack_require__(96);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { "default": obj };
	}
	
	exports["default"] = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3["default"])(superClass)));
	  }
	
	  subClass.prototype = (0, _create2["default"])(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) _setPrototypeOf2["default"] ? (0, _setPrototypeOf2["default"])(subClass, superClass) : subClass.__proto__ = superClass;
	};

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	module.exports = { "default": __webpack_require__(132), __esModule: true };

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(133);
	module.exports = __webpack_require__(56).Object.setPrototypeOf;

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	'use strict';
	
	var $export = __webpack_require__(54);
	$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(134).set });

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	'use strict';
	
	var isObject = __webpack_require__(62);
	var anObject = __webpack_require__(61);
	var check = function check(O, proto) {
	  anObject(O);
	  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	  (function (test, buggy, set) {
	    try {
	      set = __webpack_require__(57)(Function.call, __webpack_require__(126).f(Object.prototype, '__proto__').set, 2);
	      set(test, []);
	      buggy = !(test instanceof Array);
	    } catch (e) {
	      buggy = true;
	    }
	    return function setPrototypeOf(O, proto) {
	      check(O, proto);
	      if (buggy) O.__proto__ = proto;else set(O, proto);
	      return O;
	    };
	  })({}, false) : undefined),
	  check: check
	};

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	module.exports = { "default": __webpack_require__(136), __esModule: true };

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(137);
	var $Object = __webpack_require__(56).Object;
	module.exports = function create(P, D) {
	  return $Object.create(P, D);
	};

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var $export = __webpack_require__(54);
	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	$export($export.S, 'Object', { create: __webpack_require__(106) });

/***/ }),
/* 138 */
/***/ (function(module, exports) {

	module.exports = require("classnames");

/***/ }),
/* 139 */
/***/ (function(module, exports) {

	module.exports = require("prop-types");

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
	  return typeof obj;
	} : function (obj) {
	  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
	};
	
	var _react = __webpack_require__(5);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _createChainableTypeChecker = __webpack_require__(141);
	
	var _createChainableTypeChecker2 = _interopRequireDefault(_createChainableTypeChecker);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { "default": obj };
	}
	
	function elementType(props, propName, componentName, location, propFullName) {
	  var propValue = props[propName];
	  var propType = typeof propValue === 'undefined' ? 'undefined' : _typeof(propValue);
	
	  if (_react2["default"].isValidElement(propValue)) {
	    return new Error('Invalid ' + location + ' `' + propFullName + '` of type ReactElement ' + ('supplied to `' + componentName + '`, expected an element type (a string ') + 'or a ReactClass).');
	  }
	
	  if (propType !== 'function' && propType !== 'string') {
	    return new Error('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected an element type (a string ') + 'or a ReactClass).');
	  }
	
	  return null;
	}
	
	exports["default"] = (0, _createChainableTypeChecker2["default"])(elementType);
	module.exports = exports['default'];

/***/ }),
/* 141 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports['default'] = createChainableTypeChecker;
	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */
	
	// Mostly taken from ReactPropTypes.
	
	function createChainableTypeChecker(validate) {
	  function checkType(isRequired, props, propName, componentName, location, propFullName) {
	    var componentNameSafe = componentName || '<<anonymous>>';
	    var propFullNameSafe = propFullName || propName;
	
	    if (props[propName] == null) {
	      if (isRequired) {
	        return new Error('Required ' + location + ' `' + propFullNameSafe + '` was not specified ' + ('in `' + componentNameSafe + '`.'));
	      }
	
	      return null;
	    }
	
	    for (var _len = arguments.length, args = Array(_len > 6 ? _len - 6 : 0), _key = 6; _key < _len; _key++) {
	      args[_key - 6] = arguments[_key];
	    }
	
	    return validate.apply(undefined, [props, propName, componentNameSafe, location, propFullNameSafe].concat(args));
	  }
	
	  var chainedCheckType = checkType.bind(null, false);
	  chainedCheckType.isRequired = checkType.bind(null, true);
	
	  return chainedCheckType;
	}
	module.exports = exports['default'];

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports._curry = exports.bsSizes = exports.bsStyles = exports.bsClass = undefined;
	
	var _entries = __webpack_require__(143);
	
	var _entries2 = _interopRequireDefault(_entries);
	
	var _extends2 = __webpack_require__(87);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	exports.prefix = prefix;
	exports.getClassSet = getClassSet;
	exports.splitBsProps = splitBsProps;
	exports.splitBsPropsAndOmit = splitBsPropsAndOmit;
	exports.addStyle = addStyle;
	
	var _invariant = __webpack_require__(146);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _propTypes = __webpack_require__(139);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _StyleConfig = __webpack_require__(147);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}
	
	function curry(fn) {
	  return function () {
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    var last = args[args.length - 1];
	    if (typeof last === 'function') {
	      return fn.apply(undefined, args);
	    }
	    return function (Component) {
	      return fn.apply(undefined, args.concat([Component]));
	    };
	  };
	} // TODO: The publicly exposed parts of this should be in lib/BootstrapUtils.
	
	function prefix(props, variant) {
	  !(props.bsClass != null) ? process.env.NODE_ENV !== 'production' ? (0, _invariant2['default'])(false, 'A `bsClass` prop is required for this component') : (0, _invariant2['default'])(false) : void 0;
	  return props.bsClass + (variant ? '-' + variant : '');
	}
	
	var bsClass = exports.bsClass = curry(function (defaultClass, Component) {
	  var propTypes = Component.propTypes || (Component.propTypes = {});
	  var defaultProps = Component.defaultProps || (Component.defaultProps = {});
	
	  propTypes.bsClass = _propTypes2['default'].string;
	  defaultProps.bsClass = defaultClass;
	
	  return Component;
	});
	
	var bsStyles = exports.bsStyles = curry(function (styles, defaultStyle, Component) {
	  if (typeof defaultStyle !== 'string') {
	    Component = defaultStyle;
	    defaultStyle = undefined;
	  }
	
	  var existing = Component.STYLES || [];
	  var propTypes = Component.propTypes || {};
	
	  styles.forEach(function (style) {
	    if (existing.indexOf(style) === -1) {
	      existing.push(style);
	    }
	  });
	
	  var propType = _propTypes2['default'].oneOf(existing);
	
	  // expose the values on the propType function for documentation
	  Component.STYLES = existing;
	  propType._values = existing;
	
	  Component.propTypes = (0, _extends3['default'])({}, propTypes, {
	    bsStyle: propType
	  });
	
	  if (defaultStyle !== undefined) {
	    var defaultProps = Component.defaultProps || (Component.defaultProps = {});
	    defaultProps.bsStyle = defaultStyle;
	  }
	
	  return Component;
	});
	
	var bsSizes = exports.bsSizes = curry(function (sizes, defaultSize, Component) {
	  if (typeof defaultSize !== 'string') {
	    Component = defaultSize;
	    defaultSize = undefined;
	  }
	
	  var existing = Component.SIZES || [];
	  var propTypes = Component.propTypes || {};
	
	  sizes.forEach(function (size) {
	    if (existing.indexOf(size) === -1) {
	      existing.push(size);
	    }
	  });
	
	  var values = [];
	  existing.forEach(function (size) {
	    var mappedSize = _StyleConfig.SIZE_MAP[size];
	    if (mappedSize && mappedSize !== size) {
	      values.push(mappedSize);
	    }
	
	    values.push(size);
	  });
	
	  var propType = _propTypes2['default'].oneOf(values);
	  propType._values = values;
	
	  // expose the values on the propType function for documentation
	  Component.SIZES = existing;
	
	  Component.propTypes = (0, _extends3['default'])({}, propTypes, {
	    bsSize: propType
	  });
	
	  if (defaultSize !== undefined) {
	    if (!Component.defaultProps) {
	      Component.defaultProps = {};
	    }
	    Component.defaultProps.bsSize = defaultSize;
	  }
	
	  return Component;
	});
	
	function getClassSet(props) {
	  var _classes;
	
	  var classes = (_classes = {}, _classes[prefix(props)] = true, _classes);
	
	  if (props.bsSize) {
	    var bsSize = _StyleConfig.SIZE_MAP[props.bsSize] || props.bsSize;
	    classes[prefix(props, bsSize)] = true;
	  }
	
	  if (props.bsStyle) {
	    classes[prefix(props, props.bsStyle)] = true;
	  }
	
	  return classes;
	}
	
	function getBsProps(props) {
	  return {
	    bsClass: props.bsClass,
	    bsSize: props.bsSize,
	    bsStyle: props.bsStyle,
	    bsRole: props.bsRole
	  };
	}
	
	function isBsProp(propName) {
	  return propName === 'bsClass' || propName === 'bsSize' || propName === 'bsStyle' || propName === 'bsRole';
	}
	
	function splitBsProps(props) {
	  var elementProps = {};
	  (0, _entries2['default'])(props).forEach(function (_ref) {
	    var propName = _ref[0],
	        propValue = _ref[1];
	
	    if (!isBsProp(propName)) {
	      elementProps[propName] = propValue;
	    }
	  });
	
	  return [getBsProps(props), elementProps];
	}
	
	function splitBsPropsAndOmit(props, omittedPropNames) {
	  var isOmittedProp = {};
	  omittedPropNames.forEach(function (propName) {
	    isOmittedProp[propName] = true;
	  });
	
	  var elementProps = {};
	  (0, _entries2['default'])(props).forEach(function (_ref2) {
	    var propName = _ref2[0],
	        propValue = _ref2[1];
	
	    if (!isBsProp(propName) && !isOmittedProp[propName]) {
	      elementProps[propName] = propValue;
	    }
	  });
	
	  return [getBsProps(props), elementProps];
	}
	
	/**
	 * Add a style variant to a Component. Mutates the propTypes of the component
	 * in order to validate the new variant.
	 */
	function addStyle(Component) {
	  for (var _len2 = arguments.length, styleVariant = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
	    styleVariant[_key2 - 1] = arguments[_key2];
	  }
	
	  bsStyles(styleVariant, Component);
	}
	
	var _curry = exports._curry = curry;

/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	module.exports = { "default": __webpack_require__(144), __esModule: true };

/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(145);
	module.exports = __webpack_require__(56).Object.entries;

/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-object-values-entries
	'use strict';
	
	var $export = __webpack_require__(54);
	var $entries = __webpack_require__(69)(true);
	
	$export($export.S, 'Object', {
	  entries: function entries(it) {
	    return $entries(it);
	  }
	});

/***/ }),
/* 146 */
/***/ (function(module, exports) {

	module.exports = require("invariant");

/***/ }),
/* 147 */
/***/ (function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	var Size = exports.Size = {
	  LARGE: 'large',
	  SMALL: 'small',
	  XSMALL: 'xsmall'
	};
	
	var SIZE_MAP = exports.SIZE_MAP = {
	  large: 'lg',
	  medium: 'md',
	  small: 'sm',
	  xsmall: 'xs',
	  lg: 'lg',
	  md: 'md',
	  sm: 'sm',
	  xs: 'xs'
	};
	
	var DEVICE_SIZES = exports.DEVICE_SIZES = ['lg', 'md', 'sm', 'xs'];
	
	var State = exports.State = {
	  SUCCESS: 'success',
	  WARNING: 'warning',
	  DANGER: 'danger',
	  INFO: 'info'
	};
	
	var Style = exports.Style = {
	  DEFAULT: 'default',
	  PRIMARY: 'primary',
	  LINK: 'link',
	  INVERSE: 'inverse'
	};

/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends2 = __webpack_require__(87);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _objectWithoutProperties2 = __webpack_require__(86);
	
	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
	
	var _classCallCheck2 = __webpack_require__(94);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _possibleConstructorReturn2 = __webpack_require__(95);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(130);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(5);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(139);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _elementType = __webpack_require__(140);
	
	var _elementType2 = _interopRequireDefault(_elementType);
	
	var _createChainedFunction = __webpack_require__(149);
	
	var _createChainedFunction2 = _interopRequireDefault(_createChainedFunction);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}
	
	var propTypes = {
	  href: _propTypes2['default'].string,
	  onClick: _propTypes2['default'].func,
	  onKeyDown: _propTypes2['default'].func,
	  disabled: _propTypes2['default'].bool,
	  role: _propTypes2['default'].string,
	  tabIndex: _propTypes2['default'].oneOfType([_propTypes2['default'].number, _propTypes2['default'].string]),
	  /**
	   * this is sort of silly but needed for Button
	   */
	  componentClass: _elementType2['default']
	};
	
	var defaultProps = {
	  componentClass: 'a'
	};
	
	function isTrivialHref(href) {
	  return !href || href.trim() === '#';
	}
	
	/**
	 * There are situations due to browser quirks or Bootstrap CSS where
	 * an anchor tag is needed, when semantically a button tag is the
	 * better choice. SafeAnchor ensures that when an anchor is used like a
	 * button its accessible. It also emulates input `disabled` behavior for
	 * links, which is usually desirable for Buttons, NavItems, MenuItems, etc.
	 */
	
	var SafeAnchor = (function (_React$Component) {
	  (0, _inherits3['default'])(SafeAnchor, _React$Component);
	
	  function SafeAnchor(props, context) {
	    (0, _classCallCheck3['default'])(this, SafeAnchor);
	
	    var _this = (0, _possibleConstructorReturn3['default'])(this, _React$Component.call(this, props, context));
	
	    _this.handleClick = _this.handleClick.bind(_this);
	    _this.handleKeyDown = _this.handleKeyDown.bind(_this);
	    return _this;
	  }
	
	  SafeAnchor.prototype.handleClick = function handleClick(event) {
	    var _props = this.props,
	        disabled = _props.disabled,
	        href = _props.href,
	        onClick = _props.onClick;
	
	    if (disabled || isTrivialHref(href)) {
	      event.preventDefault();
	    }
	
	    if (disabled) {
	      event.stopPropagation();
	      return;
	    }
	
	    if (onClick) {
	      onClick(event);
	    }
	  };
	
	  SafeAnchor.prototype.handleKeyDown = function handleKeyDown(event) {
	    if (event.key === ' ') {
	      event.preventDefault();
	      this.handleClick(event);
	    }
	  };
	
	  SafeAnchor.prototype.render = function render() {
	    var _props2 = this.props,
	        Component = _props2.componentClass,
	        disabled = _props2.disabled,
	        onKeyDown = _props2.onKeyDown,
	        props = (0, _objectWithoutProperties3['default'])(_props2, ['componentClass', 'disabled', 'onKeyDown']);
	
	    if (isTrivialHref(props.href)) {
	      props.role = props.role || 'button';
	      // we want to make sure there is a href attribute on the node
	      // otherwise, the cursor incorrectly styled (except with role='button')
	      props.href = props.href || '#';
	    }
	
	    if (disabled) {
	      props.tabIndex = -1;
	      props.style = (0, _extends3['default'])({ pointerEvents: 'none' }, props.style);
	    }
	
	    return _react2['default'].createElement(Component, (0, _extends3['default'])({}, props, {
	      onClick: this.handleClick,
	      onKeyDown: (0, _createChainedFunction2['default'])(this.handleKeyDown, onKeyDown)
	    }));
	  };
	
	  return SafeAnchor;
	})(_react2['default'].Component);
	
	SafeAnchor.propTypes = propTypes;
	SafeAnchor.defaultProps = defaultProps;
	
	exports['default'] = SafeAnchor;
	module.exports = exports['default'];

/***/ }),
/* 149 */
/***/ (function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	/**
	 * Safe chained function
	 *
	 * Will only create a new function if needed,
	 * otherwise will pass back existing functions or null.
	 *
	 * @param {function} functions to chain
	 * @returns {function|null}
	 */
	function createChainedFunction() {
	  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
	    funcs[_key] = arguments[_key];
	  }
	
	  return funcs.filter(function (f) {
	    return f != null;
	  }).reduce(function (acc, f) {
	    if (typeof f !== 'function') {
	      throw new Error('Invalid Argument Type, must only provide functions, undefined, or null.');
	    }
	
	    if (acc === null) {
	      return f;
	    }
	
	    return function chainedFunction() {
	      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	        args[_key2] = arguments[_key2];
	      }
	
	      acc.apply(this, args);
	      f.apply(this, args);
	    };
	  }, null);
	}
	
	exports['default'] = createChainedFunction;
	module.exports = exports['default'];

/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(5);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _MessageSection = __webpack_require__(151);
	
	var _MessageSection2 = _interopRequireDefault(_MessageSection);
	
	var _ThreadSection = __webpack_require__(160);
	
	var _ThreadSection2 = _interopRequireDefault(_ThreadSection);
	
	var ChatApp = (function (_React$Component) {
	  _inherits(ChatApp, _React$Component);
	
	  function ChatApp(props) {
	    _classCallCheck(this, ChatApp);
	
	    _get(Object.getPrototypeOf(ChatApp.prototype), 'constructor', this).call(this, props);
	  }
	
	  _createClass(ChatApp, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {}
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement(
	        'div',
	        null,
	        sessionStorage.getItem("role") == "customer" ? _react2['default'].createElement(
	          'div',
	          { className: 'chatapp row' },
	          _react2['default'].createElement(
	            'div',
	            { className: 'col-sm-12', style: { "padding": "0" } },
	            _react2['default'].createElement(_MessageSection2['default'], null)
	          )
	        ) : _react2['default'].createElement(
	          'div',
	          { className: 'chatapp row' },
	          _react2['default'].createElement(
	            'div',
	            { className: 'col-sm-4', style: { "padding": "0" } },
	            _react2['default'].createElement(_ThreadSection2['default'], null)
	          ),
	          _react2['default'].createElement(
	            'div',
	            { className: 'col-sm-8', style: { "padding": "0" } },
	            _react2['default'].createElement(_MessageSection2['default'], null)
	          )
	        )
	      );
	    }
	  }]);
	
	  return ChatApp;
	})(_react2['default'].Component);
	
	exports['default'] = ChatApp;
	module.exports = exports['default'];

/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var MessageComposer = __webpack_require__(152);
	var MessageListItem = __webpack_require__(157);
	var MessageStore = __webpack_require__(158);
	var React = __webpack_require__(5);
	var createReactClass = __webpack_require__(156);
	var ThreadStore = __webpack_require__(159);
	
	function getStateFromStores() {
	  return {
	    messages: MessageStore.getAllForCurrentThread(),
	    thread: ThreadStore.getCurrent()
	  };
	}
	
	function getMessageListItem(message) {
	  return React.createElement(MessageListItem, {
	    key: message.id,
	    message: message
	  });
	}
	
	var MessageSection = createReactClass({
	
	  getInitialState: function getInitialState() {
	    var ret = getStateFromStores();
	    return ret;
	  },
	
	  componentDidMount: function componentDidMount() {
	    this._scrollToBottom();
	    MessageStore.addChangeListener(this._onChange);
	    ThreadStore.addChangeListener(this._onChange);
	  },
	
	  componentWillUnmount: function componentWillUnmount() {
	    MessageStore.removeChangeListener(this._onChange);
	    ThreadStore.removeChangeListener(this._onChange);
	  },
	
	  render: function render() {
	    var messageListItems = this.state.messages.map(getMessageListItem);
	    console.log("from messagesection");
	    console.log(this.state.thread);
	    return React.createElement(
	      'div',
	      { className: 'message-section', style: { "width": "100%" } },
	      this.state.thread && sessionStorage.getItem("role") == "customer" ? React.createElement(
	        'div',
	        { className: 'chat-notify' },
	        '  Need any help regarding the products purchased..? Ask here'
	      ) : null,
	      React.createElement(
	        'ul',
	        { className: 'message-list', ref: 'messageList' },
	        messageListItems
	      ),
	      this.state.thread ? React.createElement(MessageComposer, { threadID: this.state.thread.id }) : React.createElement(
	        'div',
	        { className: 'alert alert-danger fade in' },
	        sessionStorage.getItem('role') == "customer" ? "Chat window will be enabled when the customer care admin is online." : "Chat window will be enabled when atleast one user is available"
	      )
	    );
	  },
	
	  componentDidUpdate: function componentDidUpdate() {
	    this._scrollToBottom();
	  },
	
	  _scrollToBottom: function _scrollToBottom() {
	    var ul = this.refs.messageList;
	    ul.scrollTop = ul.scrollHeight;
	  },
	
	  _onChange: function _onChange() {
	    this.setState(getStateFromStores());
	  }
	
	});
	
	module.exports = MessageSection;

/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var ChatMessageActionCreators = __webpack_require__(153);
	var React = __webpack_require__(5);
	var createReactClass = __webpack_require__(156);
	var propTypes = __webpack_require__(139);
	
	var ENTER_KEY_CODE = 13;
	
	var MessageComposer = createReactClass({
	  getInitialState: function getInitialState() {
	    return { text: '' };
	  },
	
	  render: function render() {
	    return React.createElement('textarea', {
	      className: 'message-composer',
	      name: 'message',
	      value: this.state.text,
	      onChange: this._onChange,
	      onKeyDown: this._onKeyDown
	    });
	  },
	
	  _onChange: function _onChange(event, value) {
	    this.setState({ text: event.target.value });
	  },
	
	  _onKeyDown: function _onKeyDown(event) {
	    if (event.keyCode === ENTER_KEY_CODE) {
	      event.preventDefault();
	      var text = this.state.text.trim();
	      var threadId;
	      if (text) {
	        console.log("from message composer.jsx");
	        //console.log(this.props.threadID.substr(2,this.props.threadID.length-1));
	        //var receiver=this.props.threadID.substr(2,this.props.threadID.length-1);
	        //var msg="/w "+receiver+text;
	
	        ChatMessageActionCreators.createMessage(text, this.props.threadID);
	      }
	      this.setState({ text: '' });
	    }
	  }
	
	});
	
	MessageComposer.propTypes = {
	  threadID: propTypes.string.isRequired
	}, module.exports = MessageComposer;

/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var ChatAppDispatcher = __webpack_require__(32).AppDispatcher;
	var ChatConstants = __webpack_require__(154);
	var ChatWebAPIUtils = __webpack_require__(41);
	var ChatMessageUtils = __webpack_require__(155);
	
	//var ActionTypes = ChatConstants.ActionTypes;
	
	module.exports = {
	
	  createMessage: function createMessage(text, currentThreadID) {
	    console.log("from message actionscreators createMessage method");
	    ChatAppDispatcher.handleAction({
	      actionType: ChatConstants.CREATE_MESSAGE,
	      data: text,
	      currentThreadID: currentThreadID
	    });
	    var message = ChatMessageUtils.getCreatedMessageData(text, currentThreadID);
	    ChatWebAPIUtils.createMessage(message);
	  }
	
	};

/***/ }),
/* 154 */
/***/ (function(module, exports) {

	"use strict";
	
	module.exports = {
	    CLICK_THREAD: "CLICK_THREAD",
	    CREATE_MESSAGE: "CREATE_MESSAGE",
	    RECEIVE_RAW_CREATED_MESSAGE: "RECEIVE_RAW_CREATED_MESSAGE",
	    RECEIVE_RAW_MESSAGES: "RECEIVE_RAW_MESSAGES"
	};

/***/ }),
/* 155 */
/***/ (function(module, exports) {

	"use strict";
	
	module.exports = {
	
	  convertRawMessage: function convertRawMessage(rawMessage, currentThreadID) {
	    return {
	      id: rawMessage.id,
	      threadID: rawMessage.threadID,
	      authorName: rawMessage.authorName,
	      date: new Date(rawMessage.timestamp),
	      text: rawMessage.text,
	      isRead: rawMessage.threadID === currentThreadID
	    };
	  },
	
	  getCreatedMessageData: function getCreatedMessageData(text, currentThreadID) {
	    var timestamp = Date.now();
	    return {
	      id: 'm_' + timestamp,
	      threadID: currentThreadID,
	      authorName: sessionStorage.getItem("username"), // hard coded for the example
	      date: new Date(timestamp),
	      text: text,
	      isRead: true
	    };
	  }
	
	};

/***/ }),
/* 156 */
/***/ (function(module, exports) {

	module.exports = require("create-react-class");

/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(5);
	var createReactClass = __webpack_require__(156);
	var propTypes = __webpack_require__(139);
	
	var MessageListItem = createReactClass({
	  render: function render() {
	    var message = this.props.message;
	    //console.log(message);
	    return React.createElement(
	      'li',
	      { className: 'message-list-item' },
	      React.createElement(
	        'h5',
	        { className: 'message-author-name' },
	        message.authorName
	      ),
	      React.createElement('div', { className: 'message-time' }),
	      React.createElement(
	        'div',
	        { className: 'message-text' },
	        message.text
	      )
	    );
	  }
	
	});
	
	MessageListItem.propTypes = {
	  message: propTypes.object
	};
	
	module.exports = MessageListItem;

/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var ChatAppDispatcher = __webpack_require__(32).AppDispatcher;
	var ChatConstants = __webpack_require__(44);
	var ChatMessageUtils = __webpack_require__(155);
	var EventEmitter = __webpack_require__(38).EventEmitter;
	var ThreadStore = __webpack_require__(159);
	var assign = __webpack_require__(9);
	
	var CHANGE_EVENT = 'change';
	
	var _messages = {};
	
	function _addMessages(rawMessages) {
	  rawMessages.forEach(function (message) {
	    if (!_messages[message.id]) {
	      _messages[message.id] = ChatMessageUtils.convertRawMessage(message, ThreadStore.getCurrentID());
	    }
	  });
	}
	
	function _markAllInThreadRead(threadID) {
	  for (var id in _messages) {
	    if (_messages[id].threadID === threadID) {
	      _messages[id].isRead = true;
	    }
	  }
	}
	
	var MessageStore = assign({}, EventEmitter.prototype, {
	
	  emitChange: function emitChange() {
	    this.emit(CHANGE_EVENT);
	  },
	  addChangeListener: function addChangeListener(callback) {
	    this.on(CHANGE_EVENT, callback);
	  },
	
	  removeChangeListener: function removeChangeListener(callback) {
	    this.removeListener(CHANGE_EVENT, callback);
	  },
	
	  get: function get(id) {
	    return _messages[id];
	  },
	
	  getAll: function getAll() {
	    return _messages;
	  },
	  getAllForThread: function getAllForThread(threadID) {
	    var threadMessages = [];
	    for (var id in _messages) {
	      if (_messages[id].threadID === threadID) {
	        threadMessages.push(_messages[id]);
	      }
	    }
	    threadMessages.sort(function (a, b) {
	      if (a.date < b.date) {
	        return -1;
	      } else if (a.date > b.date) {
	        return 1;
	      }
	      return 0;
	    });
	    return threadMessages;
	  },
	
	  getAllForCurrentThread: function getAllForCurrentThread() {
	    return this.getAllForThread(ThreadStore.getCurrentID());
	  }
	
	});
	
	MessageStore.dispatchToken = ChatAppDispatcher.register(function (payload) {
	
	  switch (payload.action.actionType) {
	
	    case ChatConstants.CLICK_THREAD:
	      console.log("inside msg store click thread method");
	      ChatAppDispatcher.waitFor([ThreadStore.dispatchToken]);
	      _markAllInThreadRead(ThreadStore.getCurrentID());
	      MessageStore.emitChange();
	      break;
	
	    case ChatConstants.CREATE_MESSAGE:
	      console.log("inside message store create msg method");
	      var message = ChatMessageUtils.getCreatedMessageData(payload.action.data, payload.action.currentThreadID);
	      _messages[message.id] = message;
	      MessageStore.emitChange();
	      break;
	
	    case ChatConstants.RECEIVE_RAW_MESSAGES:
	      console.log("inside message store receive raw msg method");
	      _addMessages(payload.action.data);
	      ChatAppDispatcher.waitFor([ThreadStore.dispatchToken]);
	      _markAllInThreadRead(ThreadStore.getCurrentID());
	      MessageStore.emitChange();
	      break;
	
	    default:
	    // do nothing
	  }
	});
	
	module.exports = MessageStore;

/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _socketIoClient = __webpack_require__(42);
	
	var _socketIoClient2 = _interopRequireDefault(_socketIoClient);
	
	var ChatAppDispatcher = __webpack_require__(32).AppDispatcher;
	var ChatConstants = __webpack_require__(44);
	var ChatMessageUtils = __webpack_require__(155);
	var EventEmitter = __webpack_require__(38).EventEmitter;
	var assign = __webpack_require__(9);
	
	var socket = (0, _socketIoClient2['default'])("http://localhost:4000");
	
	var CHANGE_EVENT = 'change';
	
	var _currentID = null;
	var _threads = {};
	
	var ThreadStore = assign({}, EventEmitter.prototype, {
	
	  init: function init(rawMessages) {
	    //this.socket=socket;
	    console.log("from threadstore init");
	    console.log(rawMessages);
	    rawMessages.forEach(function (msg) {
	      if (msg.id.indexOf("$") == msg.id.length - 1) {
	        _threads = {};
	      }
	    });
	    rawMessages.forEach(function (message) {
	      console.log("inside foreach init method");
	      console.log(message);
	      var threadID = message.threadID;
	      var thread = _threads[threadID];
	      if (thread && thread.lastMessage.timestamp > message.timestamp) {
	        return;
	      }
	      _threads[threadID] = {
	        id: threadID,
	        name: message.threadName,
	        lastMessage: ChatMessageUtils.convertRawMessage(message, _currentID)
	      };
	    }, this);
	    if (rawMessages.length == 0) {
	      console.log("inside 0 rawmsgs threadstore ");
	      _threads = {};
	    }
	    if (rawMessages.length != 0) {
	
	      if (!_currentID) {
	        var allChrono = this.getAllChrono();
	        console.log("from threadstore null currentThreadID");
	        console.log(allChrono);
	        _currentID = allChrono[allChrono.length - 1].id;
	      }
	      _threads[_currentID].lastMessage.isRead = true;
	    } else {
	      _currentID = null;
	    }
	  },
	
	  emitChange: function emitChange() {
	    this.emit(CHANGE_EVENT);
	  },
	  addChangeListener: function addChangeListener(callback) {
	    this.on(CHANGE_EVENT, callback);
	  },
	  removeChangeListener: function removeChangeListener(callback) {
	    this.removeListener(CHANGE_EVENT, callback);
	  },
	  get: function get(id) {
	    //console.log(id);
	    return _threads[id];
	  },
	  getAll: function getAll() {
	    return _threads;
	  },
	  getAllChrono: function getAllChrono() {
	    var orderedThreads = [];
	    console.log("from getAllChrono");
	    console.log(_threads);
	    for (var id in _threads) {
	      var thread = _threads[id];
	      orderedThreads.push(thread);
	    }
	    orderedThreads.sort(function (a, b) {
	      if (a.lastMessage.date < b.lastMessage.date) {
	        return -1;
	      } else if (a.lastMessage.date > b.lastMessage.date) {
	        return 1;
	      }
	      return 0;
	    });
	    return orderedThreads;
	  },
	
	  getCurrentID: function getCurrentID() {
	    return _currentID;
	  },
	
	  getCurrent: function getCurrent() {
	    console.log("inside threadstore getcurrent");
	    console.log(_currentID);
	    if (sessionStorage.getItem("role") == "customer") {
	      _currentID = "t_krishna";
	    }
	    return this.get(this.getCurrentID());
	  }
	
	});
	
	ThreadStore.dispatchToken = ChatAppDispatcher.register(function (payload) {
	
	  switch (payload.action.actionType) {
	
	    case ChatConstants.CLICK_THREAD:
	      console.log("from threadstore CLICK_THREAD");
	      _currentID = payload.action.threadID;
	      _threads[_currentID].lastMessage.isRead = true;
	      ThreadStore.emitChange();
	      break;
	
	    case ChatConstants.RECEIVE_RAW_MESSAGES:
	      console.log("from threadstore RECEIVE_RAW_MESSAGES");
	      console.log(payload.action.data);
	      ThreadStore.init(payload.action.data);
	      ThreadStore.emitChange();
	      break;
	
	    default:
	    // do nothing
	  }
	});
	
	module.exports = ThreadStore;

/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _socketIoClient = __webpack_require__(42);
	
	var _socketIoClient2 = _interopRequireDefault(_socketIoClient);
	
	var React = __webpack_require__(5);
	var createReactClass = __webpack_require__(156);
	var ThreadListItem = __webpack_require__(161);
	var ThreadStore = __webpack_require__(159);
	var UnreadThreadStore = __webpack_require__(163);
	
	var socket = (0, _socketIoClient2['default'])("http://localhost:4000");
	
	function getStateFromStores() {
	  return {
	    threads: ThreadStore.getAllChrono(),
	    currentThreadID: ThreadStore.getCurrentID(),
	    unreadCount: UnreadThreadStore.getCount()
	  };
	}
	
	var ThreadSection = createReactClass({
	
	  getInitialState: function getInitialState() {
	    return getStateFromStores();
	  },
	
	  componentDidMount: function componentDidMount() {
	    ThreadStore.addChangeListener(this._onChange);
	    UnreadThreadStore.addChangeListener(this._onChange);
	  },
	
	  componentWillUnmount: function componentWillUnmount() {
	    ThreadStore.removeChangeListener(this._onChange);
	    UnreadThreadStore.removeChangeListener(this._onChange);
	  },
	
	  render: function render() {
	    var threadListItems = this.state.threads.map(function (thread) {
	      return React.createElement(ThreadListItem, {
	        key: thread.id,
	        thread: thread,
	        currentThreadID: this.state.currentThreadID
	      });
	    }, this);
	    var unread = this.state.unreadCount === 0 ? null : React.createElement(
	      'span',
	      null,
	      'Unread threads: ',
	      this.state.unreadCount
	    );
	    return React.createElement(
	      'div',
	      { className: 'thread-section' },
	      React.createElement(
	        'ul',
	        { className: 'thread-list' },
	        threadListItems
	      ),
	      React.createElement(
	        'div',
	        { className: 'thread-count' },
	        unread
	      )
	    );
	  },
	
	  _onChange: function _onChange() {
	    this.setState(getStateFromStores());
	  }
	
	});
	
	module.exports = ThreadSection;

/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var ChatThreadActionCreators = __webpack_require__(162);
	var React = __webpack_require__(5);
	var createReactClass = __webpack_require__(156);
	var classNames = __webpack_require__(138);
	var propTypes = __webpack_require__(139);
	
	var ThreadListItem = createReactClass({
	
	  render: function render() {
	    var thread = this.props.thread;
	    var lastMessage = thread.lastMessage;
	    return React.createElement(
	      'li',
	      {
	        className: classNames({
	          'thread-list-item': true,
	          'active': thread.id === this.props.currentThreadID
	        }),
	        onClick: this._onClick },
	      React.createElement(
	        'h5',
	        { className: 'thread-name' },
	        thread.name
	      ),
	      React.createElement(
	        'div',
	        { className: 'thread-time' },
	        lastMessage.date.toLocaleTimeString()
	      ),
	      React.createElement(
	        'div',
	        { className: 'thread-last-message' },
	        lastMessage.text.substr(0, 15) + "..."
	      )
	    );
	  },
	
	  _onClick: function _onClick() {
	    ChatThreadActionCreators.clickThread(this.props.thread.id);
	  }
	
	});
	
	ThreadListItem.propTypes = {
	  thread: propTypes.object,
	  currentThreadID: propTypes.string
	};
	
	module.exports = ThreadListItem;

/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var Dispatcher = __webpack_require__(32).AppDispatcher;
	var ChatConstants = __webpack_require__(154);
	
	//var ActionTypes = ChatConstants.ActionTypes;
	
	module.exports = {
	
	  clickThread: function clickThread(threadID) {
	    Dispatcher.handleAction({
	      actionType: ChatConstants.CLICK_THREAD,
	      threadID: threadID
	    });
	  }
	
	};

/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var ChatAppDispatcher = __webpack_require__(32).AppDispatcher;
	var ChatConstants = __webpack_require__(44);
	var EventEmitter = __webpack_require__(38).EventEmitter;
	var MessageStore = __webpack_require__(158);
	var ThreadStore = __webpack_require__(159);
	var assign = __webpack_require__(9);
	
	var CHANGE_EVENT = 'change';
	
	var UnreadThreadStore = assign({}, EventEmitter.prototype, {
	
	  emitChange: function emitChange() {
	    this.emit(CHANGE_EVENT);
	  },
	  addChangeListener: function addChangeListener(callback) {
	    this.on(CHANGE_EVENT, callback);
	  },
	  removeChangeListener: function removeChangeListener(callback) {
	    this.removeListener(CHANGE_EVENT, callback);
	  },
	  getCount: function getCount() {
	    var threads = ThreadStore.getAll();
	    var unreadCount = 0;
	    for (var id in threads) {
	      if (!threads[id].lastMessage.isRead) {
	        unreadCount++;
	      }
	    }
	    return unreadCount;
	  }
	
	});
	
	UnreadThreadStore.dispatchToken = ChatAppDispatcher.register(function (payload) {
	  ChatAppDispatcher.waitFor([ThreadStore.dispatchToken, MessageStore.dispatchToken]);
	
	  switch (payload.action.actionType) {
	
	    case ChatConstants.CLICK_THREAD:
	      UnreadThreadStore.emitChange();
	      break;
	
	    case ChatConstants.RECEIVE_RAW_MESSAGES:
	      UnreadThreadStore.emitChange();
	      break;
	
	    default:
	    // do nothing
	  }
	});
	
	module.exports = UnreadThreadStore;

/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _ActionsActionJsx = __webpack_require__(31);
	
	var _ActionsActionJsx2 = _interopRequireDefault(_ActionsActionJsx);
	
	var _reactRouter = __webpack_require__(35);
	
	var _StoresApplicationStoreJs = __webpack_require__(36);
	
	var _StoresApplicationStoreJs2 = _interopRequireDefault(_StoresApplicationStoreJs);
	
	var React = __webpack_require__(5);
	var createReactClass = __webpack_require__(156);
	var Navbar = __webpack_require__(165);
	var NavItem = __webpack_require__(186);
	var Nav = __webpack_require__(187);
	var Button = __webpack_require__(50);
	var Form = __webpack_require__(192);
	var Glyphicon = __webpack_require__(193);
	
	var Navigation = createReactClass({
	  onLogout: function onLogout() {
	    event.preventDefault();
	    alert("from logout", this.props);
	    this.props.history.push('/');
	    _ActionsActionJsx2['default'].Logout();
	  },
	  onFnf: function onFnf() {
	    alert("This functionality is yet to be implemented.");
	  },
	  render: function render() {
	    return React.createElement(
	      'div',
	      null,
	      React.createElement(
	        Navbar,
	        { inverse: true, style: { "height": "75px" } },
	        React.createElement(
	          Navbar.Header,
	          null,
	          React.createElement(
	            Navbar.Brand,
	            null,
	            React.createElement(
	              'a',
	              { href: '#' },
	              React.createElement('img', { height: '75px', src: '../Images/csp1.png' })
	            )
	          ),
	          React.createElement(Navbar.Toggle, null)
	        ),
	        React.createElement(
	          Navbar.Collapse,
	          null,
	          React.createElement(
	            Navbar.Form,
	            { pullRight: true },
	            React.createElement(
	              Form,
	              null,
	              React.createElement(
	                Button,
	                { type: 'submit', bsStyle: 'link', onClick: this.onLogout },
	                'Logout ',
	                React.createElement(Glyphicon, { glyph: 'log-out' })
	              )
	            )
	          ),
	          React.createElement(
	            Navbar.Form,
	            { pullRight: true },
	            React.createElement(
	              Button,
	              { type: 'submit', bsStyle: 'link' },
	              'hi ',
	              sessionStorage.getItem("username"),
	              '  ',
	              React.createElement(Glyphicon, { glyph: 'user' })
	            )
	          ),
	          React.createElement(
	            Navbar.Form,
	            { pullRight: true },
	            React.createElement(
	              Form,
	              null,
	              React.createElement(
	                Button,
	                { onClick: this.onFnf, type: 'button', bsStyle: 'link' },
	                'Notifications  ',
	                React.createElement(Glyphicon, { glyph: 'globe' })
	              )
	            )
	          ),
	          React.createElement(
	            Navbar.Form,
	            { pullRight: true },
	            React.createElement(
	              Form,
	              null,
	              React.createElement(
	                Button,
	                { onClick: this.onFnf, type: 'button', bsStyle: 'link' },
	                'Download App ',
	                React.createElement(Glyphicon, { glyph: 'download-alt' })
	              )
	            )
	          )
	        )
	      )
	    );
	  }
	});
	
	module.exports.Navigation = (0, _reactRouter.withRouter)(Navigation);

/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends3 = __webpack_require__(87);
	
	var _extends4 = _interopRequireDefault(_extends3);
	
	var _objectWithoutProperties2 = __webpack_require__(86);
	
	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
	
	var _classCallCheck2 = __webpack_require__(94);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _possibleConstructorReturn2 = __webpack_require__(95);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(130);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _classnames = __webpack_require__(138);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _react = __webpack_require__(5);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(139);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _elementType = __webpack_require__(140);
	
	var _elementType2 = _interopRequireDefault(_elementType);
	
	var _uncontrollable = __webpack_require__(166);
	
	var _uncontrollable2 = _interopRequireDefault(_uncontrollable);
	
	var _Grid = __webpack_require__(167);
	
	var _Grid2 = _interopRequireDefault(_Grid);
	
	var _NavbarBrand = __webpack_require__(168);
	
	var _NavbarBrand2 = _interopRequireDefault(_NavbarBrand);
	
	var _NavbarCollapse = __webpack_require__(169);
	
	var _NavbarCollapse2 = _interopRequireDefault(_NavbarCollapse);
	
	var _NavbarHeader = __webpack_require__(184);
	
	var _NavbarHeader2 = _interopRequireDefault(_NavbarHeader);
	
	var _NavbarToggle = __webpack_require__(185);
	
	var _NavbarToggle2 = _interopRequireDefault(_NavbarToggle);
	
	var _bootstrapUtils = __webpack_require__(142);
	
	var _StyleConfig = __webpack_require__(147);
	
	var _createChainedFunction = __webpack_require__(149);
	
	var _createChainedFunction2 = _interopRequireDefault(_createChainedFunction);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}
	
	var propTypes = {
	  /**
	   * Create a fixed navbar along the top of the screen, that scrolls with the
	   * page
	   */
	  fixedTop: _propTypes2['default'].bool,
	  /**
	   * Create a fixed navbar along the bottom of the screen, that scrolls with
	   * the page
	   */
	  fixedBottom: _propTypes2['default'].bool,
	  /**
	   * Create a full-width navbar that scrolls away with the page
	   */
	  staticTop: _propTypes2['default'].bool,
	  /**
	   * An alternative dark visual style for the Navbar
	   */
	  inverse: _propTypes2['default'].bool,
	  /**
	   * Allow the Navbar to fluidly adjust to the page or container width, instead
	   * of at the predefined screen breakpoints
	   */
	  fluid: _propTypes2['default'].bool,
	
	  /**
	   * Set a custom element for this component.
	   */
	  componentClass: _elementType2['default'],
	  /**
	   * A callback fired when the `<Navbar>` body collapses or expands. Fired when
	   * a `<Navbar.Toggle>` is clicked and called with the new `expanded`
	   * boolean value.
	   *
	   * @controllable expanded
	   */
	  onToggle: _propTypes2['default'].func,
	  /**
	   * A callback fired when a descendant of a child `<Nav>` is selected. Should
	   * be used to execute complex closing or other miscellaneous actions desired
	   * after selecting a descendant of `<Nav>`. Does nothing if no `<Nav>` or `<Nav>`
	   * descendants exist. The callback is called with an eventKey, which is a
	   * prop from the selected `<Nav>` descendant, and an event.
	   *
	   * ```js
	   * function (
	   *  Any eventKey,
	   *  SyntheticEvent event?
	   * )
	   * ```
	   *
	   * For basic closing behavior after all `<Nav>` descendant onSelect events in
	   * mobile viewports, try using collapseOnSelect.
	   *
	   * Note: If you are manually closing the navbar using this `OnSelect` prop,
	   * ensure that you are setting `expanded` to false and not *toggling* between
	   * true and false.
	   */
	  onSelect: _propTypes2['default'].func,
	  /**
	   * Sets `expanded` to `false` after the onSelect event of a descendant of a
	   * child `<Nav>`. Does nothing if no `<Nav>` or `<Nav>` descendants exist.
	   *
	   * The onSelect callback should be used instead for more complex operations
	   * that need to be executed after the `select` event of `<Nav>` descendants.
	   */
	  collapseOnSelect: _propTypes2['default'].bool,
	  /**
	   * Explicitly set the visiblity of the navbar body
	   *
	   * @controllable onToggle
	   */
	  expanded: _propTypes2['default'].bool,
	
	  role: _propTypes2['default'].string
	}; // TODO: Remove this pragma once we upgrade eslint-config-airbnb.
	/* eslint-disable react/no-multi-comp */
	
	var defaultProps = {
	  componentClass: 'nav',
	  fixedTop: false,
	  fixedBottom: false,
	  staticTop: false,
	  inverse: false,
	  fluid: false,
	  collapseOnSelect: false
	};
	
	var childContextTypes = {
	  $bs_navbar: _propTypes2['default'].shape({
	    bsClass: _propTypes2['default'].string,
	    expanded: _propTypes2['default'].bool,
	    onToggle: _propTypes2['default'].func.isRequired,
	    onSelect: _propTypes2['default'].func
	  })
	};
	
	var Navbar = (function (_React$Component) {
	  (0, _inherits3['default'])(Navbar, _React$Component);
	
	  function Navbar(props, context) {
	    (0, _classCallCheck3['default'])(this, Navbar);
	
	    var _this = (0, _possibleConstructorReturn3['default'])(this, _React$Component.call(this, props, context));
	
	    _this.handleToggle = _this.handleToggle.bind(_this);
	    _this.handleCollapse = _this.handleCollapse.bind(_this);
	    return _this;
	  }
	
	  Navbar.prototype.getChildContext = function getChildContext() {
	    var _props = this.props,
	        bsClass = _props.bsClass,
	        expanded = _props.expanded,
	        onSelect = _props.onSelect,
	        collapseOnSelect = _props.collapseOnSelect;
	
	    return {
	      $bs_navbar: {
	        bsClass: bsClass,
	        expanded: expanded,
	        onToggle: this.handleToggle,
	        onSelect: (0, _createChainedFunction2['default'])(onSelect, collapseOnSelect ? this.handleCollapse : null)
	      }
	    };
	  };
	
	  Navbar.prototype.handleCollapse = function handleCollapse() {
	    var _props2 = this.props,
	        onToggle = _props2.onToggle,
	        expanded = _props2.expanded;
	
	    if (expanded) {
	      onToggle(false);
	    }
	  };
	
	  Navbar.prototype.handleToggle = function handleToggle() {
	    var _props3 = this.props,
	        onToggle = _props3.onToggle,
	        expanded = _props3.expanded;
	
	    onToggle(!expanded);
	  };
	
	  Navbar.prototype.render = function render() {
	    var _extends2;
	
	    var _props4 = this.props,
	        Component = _props4.componentClass,
	        fixedTop = _props4.fixedTop,
	        fixedBottom = _props4.fixedBottom,
	        staticTop = _props4.staticTop,
	        inverse = _props4.inverse,
	        fluid = _props4.fluid,
	        className = _props4.className,
	        children = _props4.children,
	        props = (0, _objectWithoutProperties3['default'])(_props4, ['componentClass', 'fixedTop', 'fixedBottom', 'staticTop', 'inverse', 'fluid', 'className', 'children']);
	
	    var _splitBsPropsAndOmit = (0, _bootstrapUtils.splitBsPropsAndOmit)(props, ['expanded', 'onToggle', 'onSelect', 'collapseOnSelect']),
	        bsProps = _splitBsPropsAndOmit[0],
	        elementProps = _splitBsPropsAndOmit[1];
	
	    // will result in some false positives but that seems better
	    // than false negatives. strict `undefined` check allows explicit
	    // "nulling" of the role if the user really doesn't want one
	
	    if (elementProps.role === undefined && Component !== 'nav') {
	      elementProps.role = 'navigation';
	    }
	
	    if (inverse) {
	      bsProps.bsStyle = _StyleConfig.Style.INVERSE;
	    }
	
	    var classes = (0, _extends4['default'])({}, (0, _bootstrapUtils.getClassSet)(bsProps), (_extends2 = {}, _extends2[(0, _bootstrapUtils.prefix)(bsProps, 'fixed-top')] = fixedTop, _extends2[(0, _bootstrapUtils.prefix)(bsProps, 'fixed-bottom')] = fixedBottom, _extends2[(0, _bootstrapUtils.prefix)(bsProps, 'static-top')] = staticTop, _extends2));
	
	    return _react2['default'].createElement(Component, (0, _extends4['default'])({}, elementProps, {
	      className: (0, _classnames2['default'])(className, classes)
	    }), _react2['default'].createElement(_Grid2['default'], { fluid: fluid }, children));
	  };
	
	  return Navbar;
	})(_react2['default'].Component);
	
	Navbar.propTypes = propTypes;
	Navbar.defaultProps = defaultProps;
	Navbar.childContextTypes = childContextTypes;
	
	(0, _bootstrapUtils.bsClass)('navbar', Navbar);
	
	var UncontrollableNavbar = (0, _uncontrollable2['default'])(Navbar, { expanded: 'onToggle' });
	
	function createSimpleWrapper(tag, suffix, displayName) {
	  var Wrapper = function Wrapper(_ref, _ref2) {
	    var _ref2$$bs_navbar = _ref2.$bs_navbar,
	        navbarProps = _ref2$$bs_navbar === undefined ? { bsClass: 'navbar' } : _ref2$$bs_navbar;
	    var Component = _ref.componentClass,
	        className = _ref.className,
	        pullRight = _ref.pullRight,
	        pullLeft = _ref.pullLeft,
	        props = (0, _objectWithoutProperties3['default'])(_ref, ['componentClass', 'className', 'pullRight', 'pullLeft']);
	    return _react2['default'].createElement(Component, (0, _extends4['default'])({}, props, {
	      className: (0, _classnames2['default'])(className, (0, _bootstrapUtils.prefix)(navbarProps, suffix), pullRight && (0, _bootstrapUtils.prefix)(navbarProps, 'right'), pullLeft && (0, _bootstrapUtils.prefix)(navbarProps, 'left'))
	    }));
	  };
	
	  Wrapper.displayName = displayName;
	
	  Wrapper.propTypes = {
	    componentClass: _elementType2['default'],
	    pullRight: _propTypes2['default'].bool,
	    pullLeft: _propTypes2['default'].bool
	  };
	
	  Wrapper.defaultProps = {
	    componentClass: tag,
	    pullRight: false,
	    pullLeft: false
	  };
	
	  Wrapper.contextTypes = {
	    $bs_navbar: _propTypes2['default'].shape({
	      bsClass: _propTypes2['default'].string
	    })
	  };
	
	  return Wrapper;
	}
	
	UncontrollableNavbar.Brand = _NavbarBrand2['default'];
	UncontrollableNavbar.Header = _NavbarHeader2['default'];
	UncontrollableNavbar.Toggle = _NavbarToggle2['default'];
	UncontrollableNavbar.Collapse = _NavbarCollapse2['default'];
	
	UncontrollableNavbar.Form = createSimpleWrapper('div', 'form', 'NavbarForm');
	UncontrollableNavbar.Text = createSimpleWrapper('p', 'text', 'NavbarText');
	UncontrollableNavbar.Link = createSimpleWrapper('a', 'link', 'NavbarLink');
	
	// Set bsStyles here so they can be overridden.
	exports['default'] = (0, _bootstrapUtils.bsStyles)([_StyleConfig.Style.DEFAULT, _StyleConfig.Style.INVERSE], _StyleConfig.Style.DEFAULT, UncontrollableNavbar);
	module.exports = exports['default'];

/***/ }),
/* 166 */
/***/ (function(module, exports) {

	module.exports = require("uncontrollable");

/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends2 = __webpack_require__(87);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _objectWithoutProperties2 = __webpack_require__(86);
	
	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
	
	var _classCallCheck2 = __webpack_require__(94);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _possibleConstructorReturn2 = __webpack_require__(95);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(130);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _classnames = __webpack_require__(138);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _react = __webpack_require__(5);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(139);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _elementType = __webpack_require__(140);
	
	var _elementType2 = _interopRequireDefault(_elementType);
	
	var _bootstrapUtils = __webpack_require__(142);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}
	
	var propTypes = {
	  /**
	   * Turn any fixed-width grid layout into a full-width layout by this property.
	   *
	   * Adds `container-fluid` class.
	   */
	  fluid: _propTypes2['default'].bool,
	  /**
	   * You can use a custom element for this component
	   */
	  componentClass: _elementType2['default']
	};
	
	var defaultProps = {
	  componentClass: 'div',
	  fluid: false
	};
	
	var Grid = (function (_React$Component) {
	  (0, _inherits3['default'])(Grid, _React$Component);
	
	  function Grid() {
	    (0, _classCallCheck3['default'])(this, Grid);
	    return (0, _possibleConstructorReturn3['default'])(this, _React$Component.apply(this, arguments));
	  }
	
	  Grid.prototype.render = function render() {
	    var _props = this.props,
	        fluid = _props.fluid,
	        Component = _props.componentClass,
	        className = _props.className,
	        props = (0, _objectWithoutProperties3['default'])(_props, ['fluid', 'componentClass', 'className']);
	
	    var _splitBsProps = (0, _bootstrapUtils.splitBsProps)(props),
	        bsProps = _splitBsProps[0],
	        elementProps = _splitBsProps[1];
	
	    var classes = (0, _bootstrapUtils.prefix)(bsProps, fluid && 'fluid');
	
	    return _react2['default'].createElement(Component, (0, _extends3['default'])({}, elementProps, {
	      className: (0, _classnames2['default'])(className, classes)
	    }));
	  };
	
	  return Grid;
	})(_react2['default'].Component);
	
	Grid.propTypes = propTypes;
	Grid.defaultProps = defaultProps;
	
	exports['default'] = (0, _bootstrapUtils.bsClass)('container', Grid);
	module.exports = exports['default'];

/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends2 = __webpack_require__(87);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _objectWithoutProperties2 = __webpack_require__(86);
	
	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
	
	var _classCallCheck2 = __webpack_require__(94);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _possibleConstructorReturn2 = __webpack_require__(95);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(130);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _classnames = __webpack_require__(138);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _react = __webpack_require__(5);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(139);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _bootstrapUtils = __webpack_require__(142);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}
	
	var contextTypes = {
	  $bs_navbar: _propTypes2['default'].shape({
	    bsClass: _propTypes2['default'].string
	  })
	};
	
	var NavbarBrand = (function (_React$Component) {
	  (0, _inherits3['default'])(NavbarBrand, _React$Component);
	
	  function NavbarBrand() {
	    (0, _classCallCheck3['default'])(this, NavbarBrand);
	    return (0, _possibleConstructorReturn3['default'])(this, _React$Component.apply(this, arguments));
	  }
	
	  NavbarBrand.prototype.render = function render() {
	    var _props = this.props,
	        className = _props.className,
	        children = _props.children,
	        props = (0, _objectWithoutProperties3['default'])(_props, ['className', 'children']);
	
	    var navbarProps = this.context.$bs_navbar || { bsClass: 'navbar' };
	
	    var bsClassName = (0, _bootstrapUtils.prefix)(navbarProps, 'brand');
	
	    if (_react2['default'].isValidElement(children)) {
	      return _react2['default'].cloneElement(children, {
	        className: (0, _classnames2['default'])(children.props.className, className, bsClassName)
	      });
	    }
	
	    return _react2['default'].createElement('span', (0, _extends3['default'])({}, props, { className: (0, _classnames2['default'])(className, bsClassName) }), children);
	  };
	
	  return NavbarBrand;
	})(_react2['default'].Component);
	
	NavbarBrand.contextTypes = contextTypes;
	
	exports['default'] = NavbarBrand;
	module.exports = exports['default'];

/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends2 = __webpack_require__(87);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _objectWithoutProperties2 = __webpack_require__(86);
	
	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
	
	var _classCallCheck2 = __webpack_require__(94);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _possibleConstructorReturn2 = __webpack_require__(95);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(130);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(5);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(139);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _Collapse = __webpack_require__(170);
	
	var _Collapse2 = _interopRequireDefault(_Collapse);
	
	var _bootstrapUtils = __webpack_require__(142);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}
	
	var contextTypes = {
	  $bs_navbar: _propTypes2['default'].shape({
	    bsClass: _propTypes2['default'].string,
	    expanded: _propTypes2['default'].bool
	  })
	};
	
	var NavbarCollapse = (function (_React$Component) {
	  (0, _inherits3['default'])(NavbarCollapse, _React$Component);
	
	  function NavbarCollapse() {
	    (0, _classCallCheck3['default'])(this, NavbarCollapse);
	    return (0, _possibleConstructorReturn3['default'])(this, _React$Component.apply(this, arguments));
	  }
	
	  NavbarCollapse.prototype.render = function render() {
	    var _props = this.props,
	        children = _props.children,
	        props = (0, _objectWithoutProperties3['default'])(_props, ['children']);
	
	    var navbarProps = this.context.$bs_navbar || { bsClass: 'navbar' };
	
	    var bsClassName = (0, _bootstrapUtils.prefix)(navbarProps, 'collapse');
	
	    return _react2['default'].createElement(_Collapse2['default'], (0, _extends3['default'])({ 'in': navbarProps.expanded }, props), _react2['default'].createElement('div', { className: bsClassName }, children));
	  };
	
	  return NavbarCollapse;
	})(_react2['default'].Component);
	
	NavbarCollapse.contextTypes = contextTypes;
	
	exports['default'] = NavbarCollapse;
	module.exports = exports['default'];

/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends2 = __webpack_require__(87);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _objectWithoutProperties2 = __webpack_require__(86);
	
	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
	
	var _classCallCheck2 = __webpack_require__(94);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _possibleConstructorReturn2 = __webpack_require__(95);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(130);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _classnames = __webpack_require__(138);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _style = __webpack_require__(171);
	
	var _style2 = _interopRequireDefault(_style);
	
	var _react = __webpack_require__(5);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(139);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _Transition = __webpack_require__(181);
	
	var _Transition2 = _interopRequireDefault(_Transition);
	
	var _capitalize = __webpack_require__(183);
	
	var _capitalize2 = _interopRequireDefault(_capitalize);
	
	var _createChainedFunction = __webpack_require__(149);
	
	var _createChainedFunction2 = _interopRequireDefault(_createChainedFunction);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}
	
	var MARGINS = {
	  height: ['marginTop', 'marginBottom'],
	  width: ['marginLeft', 'marginRight']
	};
	
	// reading a dimension prop will cause the browser to recalculate,
	// which will let our animations work
	function triggerBrowserReflow(node) {
	  node.offsetHeight; // eslint-disable-line no-unused-expressions
	}
	
	function getDimensionValue(dimension, elem) {
	  var value = elem['offset' + (0, _capitalize2['default'])(dimension)];
	  var margins = MARGINS[dimension];
	
	  return value + parseInt((0, _style2['default'])(elem, margins[0]), 10) + parseInt((0, _style2['default'])(elem, margins[1]), 10);
	}
	
	var propTypes = {
	  /**
	   * Show the component; triggers the expand or collapse animation
	   */
	  'in': _propTypes2['default'].bool,
	
	  /**
	   * Wait until the first "enter" transition to mount the component (add it to the DOM)
	   */
	  mountOnEnter: _propTypes2['default'].bool,
	
	  /**
	   * Unmount the component (remove it from the DOM) when it is collapsed
	   */
	  unmountOnExit: _propTypes2['default'].bool,
	
	  /**
	   * Run the expand animation when the component mounts, if it is initially
	   * shown
	   */
	  transitionAppear: _propTypes2['default'].bool,
	
	  /**
	   * Duration of the collapse animation in milliseconds, to ensure that
	   * finishing callbacks are fired even if the original browser transition end
	   * events are canceled
	   */
	  timeout: _propTypes2['default'].number,
	
	  /**
	   * Callback fired before the component expands
	   */
	  onEnter: _propTypes2['default'].func,
	  /**
	   * Callback fired after the component starts to expand
	   */
	  onEntering: _propTypes2['default'].func,
	  /**
	   * Callback fired after the component has expanded
	   */
	  onEntered: _propTypes2['default'].func,
	  /**
	   * Callback fired before the component collapses
	   */
	  onExit: _propTypes2['default'].func,
	  /**
	   * Callback fired after the component starts to collapse
	   */
	  onExiting: _propTypes2['default'].func,
	  /**
	   * Callback fired after the component has collapsed
	   */
	  onExited: _propTypes2['default'].func,
	
	  /**
	   * The dimension used when collapsing, or a function that returns the
	   * dimension
	   *
	   * _Note: Bootstrap only partially supports 'width'!
	   * You will need to supply your own CSS animation for the `.width` CSS class._
	   */
	  dimension: _propTypes2['default'].oneOfType([_propTypes2['default'].oneOf(['height', 'width']), _propTypes2['default'].func]),
	
	  /**
	   * Function that returns the height or width of the animating DOM node
	   *
	   * Allows for providing some custom logic for how much the Collapse component
	   * should animate in its specified dimension. Called with the current
	   * dimension prop value and the DOM node.
	   */
	  getDimensionValue: _propTypes2['default'].func,
	
	  /**
	   * ARIA role of collapsible element
	   */
	  role: _propTypes2['default'].string
	};
	
	var defaultProps = {
	  'in': false,
	  timeout: 300,
	  mountOnEnter: false,
	  unmountOnExit: false,
	  transitionAppear: false,
	
	  dimension: 'height',
	  getDimensionValue: getDimensionValue
	};
	
	var Collapse = (function (_React$Component) {
	  (0, _inherits3['default'])(Collapse, _React$Component);
	
	  function Collapse(props, context) {
	    (0, _classCallCheck3['default'])(this, Collapse);
	
	    var _this = (0, _possibleConstructorReturn3['default'])(this, _React$Component.call(this, props, context));
	
	    _this.handleEnter = _this.handleEnter.bind(_this);
	    _this.handleEntering = _this.handleEntering.bind(_this);
	    _this.handleEntered = _this.handleEntered.bind(_this);
	    _this.handleExit = _this.handleExit.bind(_this);
	    _this.handleExiting = _this.handleExiting.bind(_this);
	    return _this;
	  }
	
	  Collapse.prototype._dimension = function _dimension() {
	    return typeof this.props.dimension === 'function' ? this.props.dimension() : this.props.dimension;
	  };
	
	  // for testing
	
	  Collapse.prototype._getScrollDimensionValue = function _getScrollDimensionValue(elem, dimension) {
	    return elem['scroll' + (0, _capitalize2['default'])(dimension)] + 'px';
	  };
	
	  /* -- Expanding -- */
	
	  Collapse.prototype.handleEnter = function handleEnter(elem) {
	    var dimension = this._dimension();
	    elem.style[dimension] = '0';
	  };
	
	  Collapse.prototype.handleEntered = function handleEntered(elem) {
	    var dimension = this._dimension();
	    elem.style[dimension] = null;
	  };
	
	  Collapse.prototype.handleEntering = function handleEntering(elem) {
	    var dimension = this._dimension();
	    elem.style[dimension] = this._getScrollDimensionValue(elem, dimension);
	  };
	
	  /* -- Collapsing -- */
	
	  Collapse.prototype.handleExit = function handleExit(elem) {
	    var dimension = this._dimension();
	    elem.style[dimension] = this.props.getDimensionValue(dimension, elem) + 'px';
	    triggerBrowserReflow(elem);
	  };
	
	  Collapse.prototype.handleExiting = function handleExiting(elem) {
	    var dimension = this._dimension();
	    elem.style[dimension] = '0';
	  };
	
	  Collapse.prototype.render = function render() {
	    var _props = this.props,
	        onEnter = _props.onEnter,
	        onEntering = _props.onEntering,
	        onEntered = _props.onEntered,
	        onExit = _props.onExit,
	        onExiting = _props.onExiting,
	        className = _props.className,
	        props = (0, _objectWithoutProperties3['default'])(_props, ['onEnter', 'onEntering', 'onEntered', 'onExit', 'onExiting', 'className']);
	
	    delete props.dimension;
	    delete props.getDimensionValue;
	
	    var handleEnter = (0, _createChainedFunction2['default'])(this.handleEnter, onEnter);
	    var handleEntering = (0, _createChainedFunction2['default'])(this.handleEntering, onEntering);
	    var handleEntered = (0, _createChainedFunction2['default'])(this.handleEntered, onEntered);
	    var handleExit = (0, _createChainedFunction2['default'])(this.handleExit, onExit);
	    var handleExiting = (0, _createChainedFunction2['default'])(this.handleExiting, onExiting);
	
	    var classes = {
	      width: this._dimension() === 'width'
	    };
	
	    return _react2['default'].createElement(_Transition2['default'], (0, _extends3['default'])({}, props, {
	      'aria-expanded': props.role ? props['in'] : null,
	      className: (0, _classnames2['default'])(className, classes),
	      exitedClassName: 'collapse',
	      exitingClassName: 'collapsing',
	      enteredClassName: 'collapse in',
	      enteringClassName: 'collapsing',
	      onEnter: handleEnter,
	      onEntering: handleEntering,
	      onEntered: handleEntered,
	      onExit: handleExit,
	      onExiting: handleExiting
	    }));
	  };
	
	  return Collapse;
	})(_react2['default'].Component);
	
	Collapse.propTypes = propTypes;
	Collapse.defaultProps = defaultProps;
	
	exports['default'] = Collapse;
	module.exports = exports['default'];

/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports['default'] = style;
	
	var _camelizeStyle = __webpack_require__(172);
	
	var _camelizeStyle2 = _interopRequireDefault(_camelizeStyle);
	
	var _hyphenateStyle = __webpack_require__(174);
	
	var _hyphenateStyle2 = _interopRequireDefault(_hyphenateStyle);
	
	var _getComputedStyle2 = __webpack_require__(176);
	
	var _getComputedStyle3 = _interopRequireDefault(_getComputedStyle2);
	
	var _removeStyle = __webpack_require__(177);
	
	var _removeStyle2 = _interopRequireDefault(_removeStyle);
	
	var _properties = __webpack_require__(178);
	
	var _isTransform = __webpack_require__(180);
	
	var _isTransform2 = _interopRequireDefault(_isTransform);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}
	
	function style(node, property, value) {
	  var css = '';
	  var transforms = '';
	  var props = property;
	
	  if (typeof property === 'string') {
	    if (value === undefined) {
	      return node.style[(0, _camelizeStyle2['default'])(property)] || (0, _getComputedStyle3['default'])(node).getPropertyValue((0, _hyphenateStyle2['default'])(property));
	    } else {
	      (props = {})[property] = value;
	    }
	  }
	
	  Object.keys(props).forEach(function (key) {
	    var value = props[key];
	    if (!value && value !== 0) {
	      (0, _removeStyle2['default'])(node, (0, _hyphenateStyle2['default'])(key));
	    } else if ((0, _isTransform2['default'])(key)) {
	      transforms += key + '(' + value + ') ';
	    } else {
	      css += (0, _hyphenateStyle2['default'])(key) + ': ' + value + ';';
	    }
	  });
	
	  if (transforms) {
	    css += _properties.transform + ': ' + transforms + ';';
	  }
	
	  node.style.cssText += ';' + css;
	}
	module.exports = exports['default'];

/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports['default'] = camelizeStyleName;
	
	var _camelize = __webpack_require__(173);
	
	var _camelize2 = _interopRequireDefault(_camelize);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}
	
	var msPattern = /^-ms-/; /**
	                          * Copyright 2014-2015, Facebook, Inc.
	                          * All rights reserved.
	                          * https://github.com/facebook/react/blob/2aeb8a2a6beb00617a4217f7f8284924fa2ad819/src/vendor/core/camelizeStyleName.js
	                          */
	function camelizeStyleName(string) {
	  return (0, _camelize2['default'])(string.replace(msPattern, 'ms-'));
	}
	module.exports = exports['default'];

/***/ }),
/* 173 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = camelize;
	var rHyphen = /-(.)/g;
	
	function camelize(string) {
	  return string.replace(rHyphen, function (_, chr) {
	    return chr.toUpperCase();
	  });
	}
	module.exports = exports["default"];

/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports['default'] = hyphenateStyleName;
	
	var _hyphenate = __webpack_require__(175);
	
	var _hyphenate2 = _interopRequireDefault(_hyphenate);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}
	
	var msPattern = /^ms-/; /**
	                         * Copyright 2013-2014, Facebook, Inc.
	                         * All rights reserved.
	                         * https://github.com/facebook/react/blob/2aeb8a2a6beb00617a4217f7f8284924fa2ad819/src/vendor/core/hyphenateStyleName.js
	                         */
	
	function hyphenateStyleName(string) {
	  return (0, _hyphenate2['default'])(string).replace(msPattern, '-ms-');
	}
	module.exports = exports['default'];

/***/ }),
/* 175 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports['default'] = hyphenate;
	
	var rUpper = /([A-Z])/g;
	
	function hyphenate(string) {
	  return string.replace(rUpper, '-$1').toLowerCase();
	}
	module.exports = exports['default'];

/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports['default'] = _getComputedStyle;
	
	var _camelizeStyle = __webpack_require__(172);
	
	var _camelizeStyle2 = _interopRequireDefault(_camelizeStyle);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}
	
	var rposition = /^(top|right|bottom|left)$/;
	var rnumnonpx = /^([+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|))(?!px)[a-z%]+$/i;
	
	function _getComputedStyle(node) {
	  if (!node) throw new TypeError('No Element passed to `getComputedStyle()`');
	  var doc = node.ownerDocument;
	
	  return 'defaultView' in doc ? doc.defaultView.opener ? node.ownerDocument.defaultView.getComputedStyle(node, null) : window.getComputedStyle(node, null) : {
	    //ie 8 "magic" from: https://github.com/jquery/jquery/blob/1.11-stable/src/css/curCSS.js#L72
	    getPropertyValue: function getPropertyValue(prop) {
	      var style = node.style;
	
	      prop = (0, _camelizeStyle2['default'])(prop);
	
	      if (prop == 'float') prop = 'styleFloat';
	
	      var current = node.currentStyle[prop] || null;
	
	      if (current == null && style && style[prop]) current = style[prop];
	
	      if (rnumnonpx.test(current) && !rposition.test(prop)) {
	        // Remember the original values
	        var left = style.left;
	        var runStyle = node.runtimeStyle;
	        var rsLeft = runStyle && runStyle.left;
	
	        // Put in the new values to get a computed value out
	        if (rsLeft) runStyle.left = node.currentStyle.left;
	
	        style.left = prop === 'fontSize' ? '1em' : current;
	        current = style.pixelLeft + 'px';
	
	        // Revert the changed values
	        style.left = left;
	        if (rsLeft) runStyle.left = rsLeft;
	      }
	
	      return current;
	    }
	  };
	}
	module.exports = exports['default'];

/***/ }),
/* 177 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports['default'] = removeStyle;
	function removeStyle(node, key) {
	  return 'removeProperty' in node.style ? node.style.removeProperty(key) : node.style.removeAttribute(key);
	}
	module.exports = exports['default'];

/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.animationEnd = exports.animationDelay = exports.animationTiming = exports.animationDuration = exports.animationName = exports.transitionEnd = exports.transitionDuration = exports.transitionDelay = exports.transitionTiming = exports.transitionProperty = exports.transform = undefined;
	
	var _inDOM = __webpack_require__(179);
	
	var _inDOM2 = _interopRequireDefault(_inDOM);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}
	
	var transform = 'transform';
	var prefix = void 0,
	    transitionEnd = void 0,
	    animationEnd = void 0;
	var transitionProperty = void 0,
	    transitionDuration = void 0,
	    transitionTiming = void 0,
	    transitionDelay = void 0;
	var animationName = void 0,
	    animationDuration = void 0,
	    animationTiming = void 0,
	    animationDelay = void 0;
	
	if (_inDOM2['default']) {
	  var _getTransitionPropert = getTransitionProperties();
	
	  prefix = _getTransitionPropert.prefix;
	  exports.transitionEnd = transitionEnd = _getTransitionPropert.transitionEnd;
	  exports.animationEnd = animationEnd = _getTransitionPropert.animationEnd;
	
	  exports.transform = transform = prefix + '-' + transform;
	  exports.transitionProperty = transitionProperty = prefix + '-transition-property';
	  exports.transitionDuration = transitionDuration = prefix + '-transition-duration';
	  exports.transitionDelay = transitionDelay = prefix + '-transition-delay';
	  exports.transitionTiming = transitionTiming = prefix + '-transition-timing-function';
	
	  exports.animationName = animationName = prefix + '-animation-name';
	  exports.animationDuration = animationDuration = prefix + '-animation-duration';
	  exports.animationTiming = animationTiming = prefix + '-animation-delay';
	  exports.animationDelay = animationDelay = prefix + '-animation-timing-function';
	}
	
	exports.transform = transform;
	exports.transitionProperty = transitionProperty;
	exports.transitionTiming = transitionTiming;
	exports.transitionDelay = transitionDelay;
	exports.transitionDuration = transitionDuration;
	exports.transitionEnd = transitionEnd;
	exports.animationName = animationName;
	exports.animationDuration = animationDuration;
	exports.animationTiming = animationTiming;
	exports.animationDelay = animationDelay;
	exports.animationEnd = animationEnd;
	exports['default'] = {
	  transform: transform,
	  end: transitionEnd,
	  property: transitionProperty,
	  timing: transitionTiming,
	  delay: transitionDelay,
	  duration: transitionDuration
	};
	
	function getTransitionProperties() {
	  var style = document.createElement('div').style;
	
	  var vendorMap = {
	    O: function O(e) {
	      return 'o' + e.toLowerCase();
	    },
	    Moz: function Moz(e) {
	      return e.toLowerCase();
	    },
	    Webkit: function Webkit(e) {
	      return 'webkit' + e;
	    },
	    ms: function ms(e) {
	      return 'MS' + e;
	    }
	  };
	
	  var vendors = Object.keys(vendorMap);
	
	  var transitionEnd = void 0,
	      animationEnd = void 0;
	  var prefix = '';
	
	  for (var i = 0; i < vendors.length; i++) {
	    var vendor = vendors[i];
	
	    if (vendor + 'TransitionProperty' in style) {
	      prefix = '-' + vendor.toLowerCase();
	      transitionEnd = vendorMap[vendor]('TransitionEnd');
	      animationEnd = vendorMap[vendor]('AnimationEnd');
	      break;
	    }
	  }
	
	  if (!transitionEnd && 'transitionProperty' in style) transitionEnd = 'transitionend';
	
	  if (!animationEnd && 'animationName' in style) animationEnd = 'animationend';
	
	  style = null;
	
	  return { animationEnd: animationEnd, transitionEnd: transitionEnd, prefix: prefix };
	}

/***/ }),
/* 179 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports['default'] = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
	module.exports = exports['default'];

/***/ }),
/* 180 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = isTransform;
	var supportedTransforms = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
	
	function isTransform(property) {
	  return !!(property && supportedTransforms.test(property));
	}
	module.exports = exports["default"];

/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.EXITING = exports.ENTERED = exports.ENTERING = exports.EXITED = exports.UNMOUNTED = undefined;
	
	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};
	
	var _classnames = __webpack_require__(138);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _on = __webpack_require__(182);
	
	var _on2 = _interopRequireDefault(_on);
	
	var _properties = __webpack_require__(178);
	
	var _properties2 = _interopRequireDefault(_properties);
	
	var _propTypes = __webpack_require__(139);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _react = __webpack_require__(5);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(29);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}
	
	function _objectWithoutProperties(obj, keys) {
	  var target = {};for (var i in obj) {
	    if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
	  }return target;
	}
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}
	
	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && (typeof call === "object" || typeof call === "function") ? call : self;
	}
	
	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	var transitionEndEvent = _properties2['default'].end;
	
	var UNMOUNTED = exports.UNMOUNTED = 0;
	var EXITED = exports.EXITED = 1;
	var ENTERING = exports.ENTERING = 2;
	var ENTERED = exports.ENTERED = 3;
	var EXITING = exports.EXITING = 4;
	
	/**
	 * The Transition component lets you define and run css transitions with a simple declarative api.
	 * It works similar to React's own [CSSTransitionGroup](http://facebook.github.io/react/docs/animation.html#high-level-api-reactcsstransitiongroup)
	 * but is specifically optimized for transitioning a single child "in" or "out".
	 *
	 * You don't even need to use class based css transitions if you don't want to (but it is easiest).
	 * The extensive set of lifecycle callbacks means you have control over
	 * the transitioning now at each step of the way.
	 */
	
	var Transition = (function (_React$Component) {
	  _inherits(Transition, _React$Component);
	
	  function Transition(props, context) {
	    _classCallCheck(this, Transition);
	
	    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));
	
	    _this.updateStatus = function () {
	      if (_this.nextStatus !== null) {
	        // nextStatus will always be ENTERING or EXITING.
	        _this.cancelNextCallback();
	        var node = _reactDom2['default'].findDOMNode(_this);
	
	        if (_this.nextStatus === ENTERING) {
	          _this.props.onEnter(node);
	
	          _this.safeSetState({ status: ENTERING }, function () {
	            _this.props.onEntering(node);
	
	            _this.onTransitionEnd(node, function () {
	              _this.safeSetState({ status: ENTERED }, function () {
	                _this.props.onEntered(node);
	              });
	            });
	          });
	        } else {
	          _this.props.onExit(node);
	
	          _this.safeSetState({ status: EXITING }, function () {
	            _this.props.onExiting(node);
	
	            _this.onTransitionEnd(node, function () {
	              _this.safeSetState({ status: EXITED }, function () {
	                _this.props.onExited(node);
	              });
	            });
	          });
	        }
	
	        _this.nextStatus = null;
	      } else if (_this.props.unmountOnExit && _this.state.status === EXITED) {
	        _this.setState({ status: UNMOUNTED });
	      }
	    };
	
	    _this.cancelNextCallback = function () {
	      if (_this.nextCallback !== null) {
	        _this.nextCallback.cancel();
	        _this.nextCallback = null;
	      }
	    };
	
	    _this.safeSetState = function (nextState, callback) {
	      // This shouldn't be necessary, but there are weird race conditions with
	      // setState callbacks and unmounting in testing, so always make sure that
	      // we can cancel any pending setState callbacks after we unmount.
	      _this.setState(nextState, _this.setNextCallback(callback));
	    };
	
	    _this.setNextCallback = function (callback) {
	      var active = true;
	
	      _this.nextCallback = function (event) {
	        if (active) {
	          active = false;
	          _this.nextCallback = null;
	
	          callback(event);
	        }
	      };
	
	      _this.nextCallback.cancel = function () {
	        active = false;
	      };
	
	      return _this.nextCallback;
	    };
	
	    _this.onTransitionEnd = function (node, handler) {
	      _this.setNextCallback(handler);
	
	      if (node) {
	        (0, _on2['default'])(node, transitionEndEvent, _this.nextCallback);
	        setTimeout(_this.nextCallback, _this.props.timeout);
	      } else {
	        setTimeout(_this.nextCallback, 0);
	      }
	    };
	
	    var initialStatus = void 0;
	    _this.nextStatus = null;
	
	    if (props['in']) {
	      if (props.transitionAppear) {
	        initialStatus = EXITED;
	        _this.nextStatus = ENTERING;
	      } else {
	        initialStatus = ENTERED;
	      }
	    } else {
	      if (props.unmountOnExit || props.mountOnEnter) {
	        initialStatus = UNMOUNTED;
	      } else {
	        initialStatus = EXITED;
	      }
	    }
	
	    _this.state = { status: initialStatus };
	
	    _this.nextCallback = null;
	    return _this;
	  }
	
	  Transition.prototype.componentDidMount = function componentDidMount() {
	    this.updateStatus();
	  };
	
	  Transition.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	    var status = this.state.status;
	
	    if (nextProps['in']) {
	      if (status === UNMOUNTED) {
	        this.setState({ status: EXITED });
	      }
	      if (status !== ENTERING && status !== ENTERED) {
	        this.nextStatus = ENTERING;
	      }
	    } else {
	      if (status === ENTERING || status === ENTERED) {
	        this.nextStatus = EXITING;
	      }
	    }
	  };
	
	  Transition.prototype.componentDidUpdate = function componentDidUpdate() {
	    this.updateStatus();
	  };
	
	  Transition.prototype.componentWillUnmount = function componentWillUnmount() {
	    this.cancelNextCallback();
	  };
	
	  Transition.prototype.render = function render() {
	    var status = this.state.status;
	    if (status === UNMOUNTED) {
	      return null;
	    }
	
	    var _props = this.props,
	        children = _props.children,
	        className = _props.className,
	        childProps = _objectWithoutProperties(_props, ['children', 'className']);
	
	    Object.keys(Transition.propTypes).forEach(function (key) {
	      return delete childProps[key];
	    });
	
	    var transitionClassName = void 0;
	    if (status === EXITED) {
	      transitionClassName = this.props.exitedClassName;
	    } else if (status === ENTERING) {
	      transitionClassName = this.props.enteringClassName;
	    } else if (status === ENTERED) {
	      transitionClassName = this.props.enteredClassName;
	    } else if (status === EXITING) {
	      transitionClassName = this.props.exitingClassName;
	    }
	
	    var child = _react2['default'].Children.only(children);
	    return _react2['default'].cloneElement(child, _extends({}, childProps, {
	      className: (0, _classnames2['default'])(child.props.className, className, transitionClassName)
	    }));
	  };
	
	  return Transition;
	})(_react2['default'].Component);
	
	Transition.propTypes = {
	  /**
	   * Show the component; triggers the enter or exit animation
	   */
	  'in': _propTypes2['default'].bool,
	
	  /**
	   * Wait until the first "enter" transition to mount the component (add it to the DOM)
	   */
	  mountOnEnter: _propTypes2['default'].bool,
	
	  /**
	   * Unmount the component (remove it from the DOM) when it is not shown
	   */
	  unmountOnExit: _propTypes2['default'].bool,
	
	  /**
	   * Run the enter animation when the component mounts, if it is initially
	   * shown
	   */
	  transitionAppear: _propTypes2['default'].bool,
	
	  /**
	   * A Timeout for the animation, in milliseconds, to ensure that a node doesn't
	   * transition indefinately if the browser transitionEnd events are
	   * canceled or interrupted.
	   *
	   * By default this is set to a high number (5 seconds) as a failsafe. You should consider
	   * setting this to the duration of your animation (or a bit above it).
	   */
	  timeout: _propTypes2['default'].number,
	
	  /**
	   * CSS class or classes applied when the component is exited
	   */
	  exitedClassName: _propTypes2['default'].string,
	  /**
	   * CSS class or classes applied while the component is exiting
	   */
	  exitingClassName: _propTypes2['default'].string,
	  /**
	   * CSS class or classes applied when the component is entered
	   */
	  enteredClassName: _propTypes2['default'].string,
	  /**
	   * CSS class or classes applied while the component is entering
	   */
	  enteringClassName: _propTypes2['default'].string,
	
	  /**
	   * Callback fired before the "entering" classes are applied
	   */
	  onEnter: _propTypes2['default'].func,
	  /**
	   * Callback fired after the "entering" classes are applied
	   */
	  onEntering: _propTypes2['default'].func,
	  /**
	   * Callback fired after the "enter" classes are applied
	   */
	  onEntered: _propTypes2['default'].func,
	  /**
	   * Callback fired before the "exiting" classes are applied
	   */
	  onExit: _propTypes2['default'].func,
	  /**
	   * Callback fired after the "exiting" classes are applied
	   */
	  onExiting: _propTypes2['default'].func,
	  /**
	   * Callback fired after the "exited" classes are applied
	   */
	  onExited: _propTypes2['default'].func
	};
	
	// Name the function so it is clearer in the documentation
	function noop() {}
	
	Transition.displayName = 'Transition';
	
	Transition.defaultProps = {
	  'in': false,
	  unmountOnExit: false,
	  transitionAppear: false,
	
	  timeout: 5000,
	
	  onEnter: noop,
	  onEntering: noop,
	  onEntered: noop,
	
	  onExit: noop,
	  onExiting: noop,
	  onExited: noop
	};
	
	exports['default'] = Transition;

/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _inDOM = __webpack_require__(179);
	
	var _inDOM2 = _interopRequireDefault(_inDOM);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}
	
	var on = function on() {};
	if (_inDOM2['default']) {
	  on = (function () {
	
	    if (document.addEventListener) return function (node, eventName, handler, capture) {
	      return node.addEventListener(eventName, handler, capture || false);
	    };else if (document.attachEvent) return function (node, eventName, handler) {
	      return node.attachEvent('on' + eventName, function (e) {
	        e = e || window.event;
	        e.target = e.target || e.srcElement;
	        e.currentTarget = node;
	        handler.call(node, e);
	      });
	    };
	  })();
	}
	
	exports['default'] = on;
	module.exports = exports['default'];

/***/ }),
/* 183 */
/***/ (function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	exports["default"] = capitalize;
	function capitalize(string) {
	  return "" + string.charAt(0).toUpperCase() + string.slice(1);
	}
	module.exports = exports["default"];

/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends2 = __webpack_require__(87);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _objectWithoutProperties2 = __webpack_require__(86);
	
	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
	
	var _classCallCheck2 = __webpack_require__(94);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _possibleConstructorReturn2 = __webpack_require__(95);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(130);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _classnames = __webpack_require__(138);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _react = __webpack_require__(5);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(139);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _bootstrapUtils = __webpack_require__(142);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}
	
	var contextTypes = {
	  $bs_navbar: _propTypes2['default'].shape({
	    bsClass: _propTypes2['default'].string
	  })
	};
	
	var NavbarHeader = (function (_React$Component) {
	  (0, _inherits3['default'])(NavbarHeader, _React$Component);
	
	  function NavbarHeader() {
	    (0, _classCallCheck3['default'])(this, NavbarHeader);
	    return (0, _possibleConstructorReturn3['default'])(this, _React$Component.apply(this, arguments));
	  }
	
	  NavbarHeader.prototype.render = function render() {
	    var _props = this.props,
	        className = _props.className,
	        props = (0, _objectWithoutProperties3['default'])(_props, ['className']);
	
	    var navbarProps = this.context.$bs_navbar || { bsClass: 'navbar' };
	
	    var bsClassName = (0, _bootstrapUtils.prefix)(navbarProps, 'header');
	
	    return _react2['default'].createElement('div', (0, _extends3['default'])({}, props, { className: (0, _classnames2['default'])(className, bsClassName) }));
	  };
	
	  return NavbarHeader;
	})(_react2['default'].Component);
	
	NavbarHeader.contextTypes = contextTypes;
	
	exports['default'] = NavbarHeader;
	module.exports = exports['default'];

/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends2 = __webpack_require__(87);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _objectWithoutProperties2 = __webpack_require__(86);
	
	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
	
	var _classCallCheck2 = __webpack_require__(94);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _possibleConstructorReturn2 = __webpack_require__(95);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(130);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _classnames = __webpack_require__(138);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _react = __webpack_require__(5);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(139);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _bootstrapUtils = __webpack_require__(142);
	
	var _createChainedFunction = __webpack_require__(149);
	
	var _createChainedFunction2 = _interopRequireDefault(_createChainedFunction);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}
	
	var propTypes = {
	  onClick: _propTypes2['default'].func,
	  /**
	   * The toggle content, if left empty it will render the default toggle (seen above).
	   */
	  children: _propTypes2['default'].node
	};
	
	var contextTypes = {
	  $bs_navbar: _propTypes2['default'].shape({
	    bsClass: _propTypes2['default'].string,
	    expanded: _propTypes2['default'].bool,
	    onToggle: _propTypes2['default'].func.isRequired
	  })
	};
	
	var NavbarToggle = (function (_React$Component) {
	  (0, _inherits3['default'])(NavbarToggle, _React$Component);
	
	  function NavbarToggle() {
	    (0, _classCallCheck3['default'])(this, NavbarToggle);
	    return (0, _possibleConstructorReturn3['default'])(this, _React$Component.apply(this, arguments));
	  }
	
	  NavbarToggle.prototype.render = function render() {
	    var _props = this.props,
	        onClick = _props.onClick,
	        className = _props.className,
	        children = _props.children,
	        props = (0, _objectWithoutProperties3['default'])(_props, ['onClick', 'className', 'children']);
	
	    var navbarProps = this.context.$bs_navbar || { bsClass: 'navbar' };
	
	    var buttonProps = (0, _extends3['default'])({
	      type: 'button'
	    }, props, {
	      onClick: (0, _createChainedFunction2['default'])(onClick, navbarProps.onToggle),
	      className: (0, _classnames2['default'])(className, (0, _bootstrapUtils.prefix)(navbarProps, 'toggle'), !navbarProps.expanded && 'collapsed')
	    });
	
	    if (children) {
	      return _react2['default'].createElement('button', buttonProps, children);
	    }
	
	    return _react2['default'].createElement('button', buttonProps, _react2['default'].createElement('span', { className: 'sr-only' }, 'Toggle navigation'), _react2['default'].createElement('span', { className: 'icon-bar' }), _react2['default'].createElement('span', { className: 'icon-bar' }), _react2['default'].createElement('span', { className: 'icon-bar' }));
	  };
	
	  return NavbarToggle;
	})(_react2['default'].Component);
	
	NavbarToggle.propTypes = propTypes;
	NavbarToggle.contextTypes = contextTypes;
	
	exports['default'] = NavbarToggle;
	module.exports = exports['default'];

/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends2 = __webpack_require__(87);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _objectWithoutProperties2 = __webpack_require__(86);
	
	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
	
	var _classCallCheck2 = __webpack_require__(94);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _possibleConstructorReturn2 = __webpack_require__(95);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(130);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _classnames = __webpack_require__(138);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _react = __webpack_require__(5);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(139);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _SafeAnchor = __webpack_require__(148);
	
	var _SafeAnchor2 = _interopRequireDefault(_SafeAnchor);
	
	var _createChainedFunction = __webpack_require__(149);
	
	var _createChainedFunction2 = _interopRequireDefault(_createChainedFunction);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}
	
	var propTypes = {
	  active: _propTypes2['default'].bool,
	  disabled: _propTypes2['default'].bool,
	  role: _propTypes2['default'].string,
	  href: _propTypes2['default'].string,
	  onClick: _propTypes2['default'].func,
	  onSelect: _propTypes2['default'].func,
	  eventKey: _propTypes2['default'].any
	};
	
	var defaultProps = {
	  active: false,
	  disabled: false
	};
	
	var NavItem = (function (_React$Component) {
	  (0, _inherits3['default'])(NavItem, _React$Component);
	
	  function NavItem(props, context) {
	    (0, _classCallCheck3['default'])(this, NavItem);
	
	    var _this = (0, _possibleConstructorReturn3['default'])(this, _React$Component.call(this, props, context));
	
	    _this.handleClick = _this.handleClick.bind(_this);
	    return _this;
	  }
	
	  NavItem.prototype.handleClick = function handleClick(e) {
	    if (this.props.onSelect) {
	      e.preventDefault();
	
	      if (!this.props.disabled) {
	        this.props.onSelect(this.props.eventKey, e);
	      }
	    }
	  };
	
	  NavItem.prototype.render = function render() {
	    var _props = this.props,
	        active = _props.active,
	        disabled = _props.disabled,
	        onClick = _props.onClick,
	        className = _props.className,
	        style = _props.style,
	        props = (0, _objectWithoutProperties3['default'])(_props, ['active', 'disabled', 'onClick', 'className', 'style']);
	
	    delete props.onSelect;
	    delete props.eventKey;
	
	    // These are injected down by `<Nav>` for building `<SubNav>`s.
	    delete props.activeKey;
	    delete props.activeHref;
	
	    if (!props.role) {
	      if (props.href === '#') {
	        props.role = 'button';
	      }
	    } else if (props.role === 'tab') {
	      props['aria-selected'] = active;
	    }
	
	    return _react2['default'].createElement('li', {
	      role: 'presentation',
	      className: (0, _classnames2['default'])(className, { active: active, disabled: disabled }),
	      style: style
	    }, _react2['default'].createElement(_SafeAnchor2['default'], (0, _extends3['default'])({}, props, {
	      disabled: disabled,
	      onClick: (0, _createChainedFunction2['default'])(onClick, this.handleClick)
	    })));
	  };
	
	  return NavItem;
	})(_react2['default'].Component);
	
	NavItem.propTypes = propTypes;
	NavItem.defaultProps = defaultProps;
	
	exports['default'] = NavItem;
	module.exports = exports['default'];

/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends3 = __webpack_require__(87);
	
	var _extends4 = _interopRequireDefault(_extends3);
	
	var _objectWithoutProperties2 = __webpack_require__(86);
	
	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
	
	var _classCallCheck2 = __webpack_require__(94);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _possibleConstructorReturn2 = __webpack_require__(95);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(130);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _classnames = __webpack_require__(138);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _keycode = __webpack_require__(188);
	
	var _keycode2 = _interopRequireDefault(_keycode);
	
	var _react = __webpack_require__(5);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(139);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactDom = __webpack_require__(29);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _all = __webpack_require__(189);
	
	var _all2 = _interopRequireDefault(_all);
	
	var _warning = __webpack_require__(190);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	var _bootstrapUtils = __webpack_require__(142);
	
	var _createChainedFunction = __webpack_require__(149);
	
	var _createChainedFunction2 = _interopRequireDefault(_createChainedFunction);
	
	var _ValidComponentChildren = __webpack_require__(191);
	
	var _ValidComponentChildren2 = _interopRequireDefault(_ValidComponentChildren);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}
	
	// TODO: Should we expose `<NavItem>` as `<Nav.Item>`?
	
	// TODO: This `bsStyle` is very unlike the others. Should we rename it?
	
	// TODO: `pullRight` and `pullLeft` don't render right outside of `navbar`.
	// Consider renaming or replacing them.
	
	var propTypes = {
	  /**
	   * Marks the NavItem with a matching `eventKey` as active. Has a
	   * higher precedence over `activeHref`.
	   */
	  activeKey: _propTypes2['default'].any,
	
	  /**
	   * Marks the child NavItem with a matching `href` prop as active.
	   */
	  activeHref: _propTypes2['default'].string,
	
	  /**
	   * NavItems are be positioned vertically.
	   */
	  stacked: _propTypes2['default'].bool,
	
	  justified: (0, _all2['default'])(_propTypes2['default'].bool, function (_ref) {
	    var justified = _ref.justified,
	        navbar = _ref.navbar;
	    return justified && navbar ? Error('justified navbar `Nav`s are not supported') : null;
	  }),
	
	  /**
	   * A callback fired when a NavItem is selected.
	   *
	   * ```js
	   * function (
	   *  Any eventKey,
	   *  SyntheticEvent event?
	   * )
	   * ```
	   */
	  onSelect: _propTypes2['default'].func,
	
	  /**
	   * ARIA role for the Nav, in the context of a TabContainer, the default will
	   * be set to "tablist", but can be overridden by the Nav when set explicitly.
	   *
	   * When the role is set to "tablist" NavItem focus is managed according to
	   * the ARIA authoring practices for tabs:
	   * https://www.w3.org/TR/2013/WD-wai-aria-practices-20130307/#tabpanel
	   */
	  role: _propTypes2['default'].string,
	
	  /**
	   * Apply styling an alignment for use in a Navbar. This prop will be set
	   * automatically when the Nav is used inside a Navbar.
	   */
	  navbar: _propTypes2['default'].bool,
	
	  /**
	   * Float the Nav to the right. When `navbar` is `true` the appropriate
	   * contextual classes are added as well.
	   */
	  pullRight: _propTypes2['default'].bool,
	
	  /**
	   * Float the Nav to the left. When `navbar` is `true` the appropriate
	   * contextual classes are added as well.
	   */
	  pullLeft: _propTypes2['default'].bool
	};
	
	var defaultProps = {
	  justified: false,
	  pullRight: false,
	  pullLeft: false,
	  stacked: false
	};
	
	var contextTypes = {
	  $bs_navbar: _propTypes2['default'].shape({
	    bsClass: _propTypes2['default'].string,
	    onSelect: _propTypes2['default'].func
	  }),
	
	  $bs_tabContainer: _propTypes2['default'].shape({
	    activeKey: _propTypes2['default'].any,
	    onSelect: _propTypes2['default'].func.isRequired,
	    getTabId: _propTypes2['default'].func.isRequired,
	    getPaneId: _propTypes2['default'].func.isRequired
	  })
	};
	
	var Nav = (function (_React$Component) {
	  (0, _inherits3['default'])(Nav, _React$Component);
	
	  function Nav() {
	    (0, _classCallCheck3['default'])(this, Nav);
	    return (0, _possibleConstructorReturn3['default'])(this, _React$Component.apply(this, arguments));
	  }
	
	  Nav.prototype.componentDidUpdate = function componentDidUpdate() {
	    var _this2 = this;
	
	    if (!this._needsRefocus) {
	      return;
	    }
	
	    this._needsRefocus = false;
	
	    var children = this.props.children;
	
	    var _getActiveProps = this.getActiveProps(),
	        activeKey = _getActiveProps.activeKey,
	        activeHref = _getActiveProps.activeHref;
	
	    var activeChild = _ValidComponentChildren2['default'].find(children, function (child) {
	      return _this2.isActive(child, activeKey, activeHref);
	    });
	
	    var childrenArray = _ValidComponentChildren2['default'].toArray(children);
	    var activeChildIndex = childrenArray.indexOf(activeChild);
	
	    var childNodes = _reactDom2['default'].findDOMNode(this).children;
	    var activeNode = childNodes && childNodes[activeChildIndex];
	
	    if (!activeNode || !activeNode.firstChild) {
	      return;
	    }
	
	    activeNode.firstChild.focus();
	  };
	
	  Nav.prototype.getActiveProps = function getActiveProps() {
	    var tabContainer = this.context.$bs_tabContainer;
	
	    if (tabContainer) {
	      process.env.NODE_ENV !== 'production' ? (0, _warning2['default'])(this.props.activeKey == null && !this.props.activeHref, 'Specifying a `<Nav>` `activeKey` or `activeHref` in the context of ' + 'a `<TabContainer>` is not supported. Instead use `<TabContainer ' + ('activeKey={' + this.props.activeKey + '} />`.')) : void 0;
	
	      return tabContainer;
	    }
	
	    return this.props;
	  };
	
	  Nav.prototype.getNextActiveChild = function getNextActiveChild(offset) {
	    var _this3 = this;
	
	    var children = this.props.children;
	
	    var validChildren = children.filter(function (child) {
	      return child.props.eventKey != null && !child.props.disabled;
	    });
	
	    var _getActiveProps2 = this.getActiveProps(),
	        activeKey = _getActiveProps2.activeKey,
	        activeHref = _getActiveProps2.activeHref;
	
	    var activeChild = _ValidComponentChildren2['default'].find(children, function (child) {
	      return _this3.isActive(child, activeKey, activeHref);
	    });
	
	    // This assumes the active child is not disabled.
	    var activeChildIndex = validChildren.indexOf(activeChild);
	    if (activeChildIndex === -1) {
	      // Something has gone wrong. Select the first valid child we can find.
	      return validChildren[0];
	    }
	
	    var nextIndex = activeChildIndex + offset;
	    var numValidChildren = validChildren.length;
	
	    if (nextIndex >= numValidChildren) {
	      nextIndex = 0;
	    } else if (nextIndex < 0) {
	      nextIndex = numValidChildren - 1;
	    }
	
	    return validChildren[nextIndex];
	  };
	
	  Nav.prototype.getTabProps = function getTabProps(child, tabContainer, navRole, active, onSelect) {
	    var _this4 = this;
	
	    if (!tabContainer && navRole !== 'tablist') {
	      // No tab props here.
	      return null;
	    }
	
	    var _child$props = child.props,
	        id = _child$props.id,
	        controls = _child$props['aria-controls'],
	        eventKey = _child$props.eventKey,
	        role = _child$props.role,
	        onKeyDown = _child$props.onKeyDown,
	        tabIndex = _child$props.tabIndex;
	
	    if (tabContainer) {
	      process.env.NODE_ENV !== 'production' ? (0, _warning2['default'])(!id && !controls, 'In the context of a `<TabContainer>`, `<NavItem>`s are given ' + 'generated `id` and `aria-controls` attributes for the sake of ' + 'proper component accessibility. Any provided ones will be ignored. ' + 'To control these attributes directly, provide a `generateChildId` ' + 'prop to the parent `<TabContainer>`.') : void 0;
	
	      id = tabContainer.getTabId(eventKey);
	      controls = tabContainer.getPaneId(eventKey);
	    }
	
	    if (navRole === 'tablist') {
	      role = role || 'tab';
	      onKeyDown = (0, _createChainedFunction2['default'])(function (event) {
	        return _this4.handleTabKeyDown(onSelect, event);
	      }, onKeyDown);
	      tabIndex = active ? tabIndex : -1;
	    }
	
	    return {
	      id: id,
	      role: role,
	      onKeyDown: onKeyDown,
	      'aria-controls': controls,
	      tabIndex: tabIndex
	    };
	  };
	
	  Nav.prototype.handleTabKeyDown = function handleTabKeyDown(onSelect, event) {
	    var nextActiveChild = void 0;
	
	    switch (event.keyCode) {
	      case _keycode2['default'].codes.left:
	      case _keycode2['default'].codes.up:
	        nextActiveChild = this.getNextActiveChild(-1);
	        break;
	      case _keycode2['default'].codes.right:
	      case _keycode2['default'].codes.down:
	        nextActiveChild = this.getNextActiveChild(1);
	        break;
	      default:
	        // It was a different key; don't handle this keypress.
	        return;
	    }
	
	    event.preventDefault();
	
	    if (onSelect && nextActiveChild && nextActiveChild.props.eventKey != null) {
	      onSelect(nextActiveChild.props.eventKey);
	    }
	
	    this._needsRefocus = true;
	  };
	
	  Nav.prototype.isActive = function isActive(_ref2, activeKey, activeHref) {
	    var props = _ref2.props;
	
	    if (props.active || activeKey != null && props.eventKey === activeKey || activeHref && props.href === activeHref) {
	      return true;
	    }
	
	    return props.active;
	  };
	
	  Nav.prototype.render = function render() {
	    var _extends2,
	        _this5 = this;
	
	    var _props = this.props,
	        stacked = _props.stacked,
	        justified = _props.justified,
	        onSelect = _props.onSelect,
	        propsRole = _props.role,
	        propsNavbar = _props.navbar,
	        pullRight = _props.pullRight,
	        pullLeft = _props.pullLeft,
	        className = _props.className,
	        children = _props.children,
	        props = (0, _objectWithoutProperties3['default'])(_props, ['stacked', 'justified', 'onSelect', 'role', 'navbar', 'pullRight', 'pullLeft', 'className', 'children']);
	
	    var tabContainer = this.context.$bs_tabContainer;
	    var role = propsRole || (tabContainer ? 'tablist' : null);
	
	    var _getActiveProps3 = this.getActiveProps(),
	        activeKey = _getActiveProps3.activeKey,
	        activeHref = _getActiveProps3.activeHref;
	
	    delete props.activeKey; // Accessed via this.getActiveProps().
	    delete props.activeHref; // Accessed via this.getActiveProps().
	
	    var _splitBsProps = (0, _bootstrapUtils.splitBsProps)(props),
	        bsProps = _splitBsProps[0],
	        elementProps = _splitBsProps[1];
	
	    var classes = (0, _extends4['default'])({}, (0, _bootstrapUtils.getClassSet)(bsProps), (_extends2 = {}, _extends2[(0, _bootstrapUtils.prefix)(bsProps, 'stacked')] = stacked, _extends2[(0, _bootstrapUtils.prefix)(bsProps, 'justified')] = justified, _extends2));
	
	    var navbar = propsNavbar != null ? propsNavbar : this.context.$bs_navbar;
	    var pullLeftClassName = void 0;
	    var pullRightClassName = void 0;
	
	    if (navbar) {
	      var navbarProps = this.context.$bs_navbar || { bsClass: 'navbar' };
	
	      classes[(0, _bootstrapUtils.prefix)(navbarProps, 'nav')] = true;
	
	      pullRightClassName = (0, _bootstrapUtils.prefix)(navbarProps, 'right');
	      pullLeftClassName = (0, _bootstrapUtils.prefix)(navbarProps, 'left');
	    } else {
	      pullRightClassName = 'pull-right';
	      pullLeftClassName = 'pull-left';
	    }
	
	    classes[pullRightClassName] = pullRight;
	    classes[pullLeftClassName] = pullLeft;
	
	    return _react2['default'].createElement('ul', (0, _extends4['default'])({}, elementProps, {
	      role: role,
	      className: (0, _classnames2['default'])(className, classes)
	    }), _ValidComponentChildren2['default'].map(children, function (child) {
	      var active = _this5.isActive(child, activeKey, activeHref);
	      var childOnSelect = (0, _createChainedFunction2['default'])(child.props.onSelect, onSelect, navbar && navbar.onSelect, tabContainer && tabContainer.onSelect);
	
	      return (0, _react.cloneElement)(child, (0, _extends4['default'])({}, _this5.getTabProps(child, tabContainer, role, active, childOnSelect), {
	        active: active,
	        activeKey: activeKey,
	        activeHref: activeHref,
	        onSelect: childOnSelect
	      }));
	    }));
	  };
	
	  return Nav;
	})(_react2['default'].Component);
	
	Nav.propTypes = propTypes;
	Nav.defaultProps = defaultProps;
	Nav.contextTypes = contextTypes;
	
	exports['default'] = (0, _bootstrapUtils.bsClass)('nav', (0, _bootstrapUtils.bsStyles)(['tabs', 'pills'], Nav));
	module.exports = exports['default'];

/***/ }),
/* 188 */
/***/ (function(module, exports) {

	module.exports = require("keycode");

/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports['default'] = all;
	
	var _createChainableTypeChecker = __webpack_require__(141);
	
	var _createChainableTypeChecker2 = _interopRequireDefault(_createChainableTypeChecker);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}
	
	function all() {
	  for (var _len = arguments.length, validators = Array(_len), _key = 0; _key < _len; _key++) {
	    validators[_key] = arguments[_key];
	  }
	
	  function allPropTypes() {
	    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	      args[_key2] = arguments[_key2];
	    }
	
	    var error = null;
	
	    validators.forEach(function (validator) {
	      if (error != null) {
	        return;
	      }
	
	      var result = validator.apply(undefined, args);
	      if (result != null) {
	        error = result;
	      }
	    });
	
	    return error;
	  }
	
	  return (0, _createChainableTypeChecker2['default'])(allPropTypes);
	}
	module.exports = exports['default'];

/***/ }),
/* 190 */
/***/ (function(module, exports) {

	module.exports = require("warning");

/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(5);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}
	
	/**
	 * Iterates through children that are typically specified as `props.children`,
	 * but only maps over children that are "valid components".
	 *
	 * The mapFunction provided index will be normalised to the components mapped,
	 * so an invalid component would not increase the index.
	 *
	 * @param {?*} children Children tree container.
	 * @param {function(*, int)} func.
	 * @param {*} context Context for func.
	 * @return {object} Object containing the ordered map of results.
	 */
	function map(children, func, context) {
	  var index = 0;
	
	  return _react2['default'].Children.map(children, function (child) {
	    if (!_react2['default'].isValidElement(child)) {
	      return child;
	    }
	
	    return func.call(context, child, index++);
	  });
	}
	
	/**
	 * Iterates through children that are "valid components".
	 *
	 * The provided forEachFunc(child, index) will be called for each
	 * leaf child with the index reflecting the position relative to "valid components".
	 *
	 * @param {?*} children Children tree container.
	 * @param {function(*, int)} func.
	 * @param {*} context Context for context.
	 */
	// TODO: This module should be ElementChildren, and should use named exports.
	
	function forEach(children, func, context) {
	  var index = 0;
	
	  _react2['default'].Children.forEach(children, function (child) {
	    if (!_react2['default'].isValidElement(child)) {
	      return;
	    }
	
	    func.call(context, child, index++);
	  });
	}
	
	/**
	 * Count the number of "valid components" in the Children container.
	 *
	 * @param {?*} children Children tree container.
	 * @returns {number}
	 */
	function count(children) {
	  var result = 0;
	
	  _react2['default'].Children.forEach(children, function (child) {
	    if (!_react2['default'].isValidElement(child)) {
	      return;
	    }
	
	    ++result;
	  });
	
	  return result;
	}
	
	/**
	 * Finds children that are typically specified as `props.children`,
	 * but only iterates over children that are "valid components".
	 *
	 * The provided forEachFunc(child, index) will be called for each
	 * leaf child with the index reflecting the position relative to "valid components".
	 *
	 * @param {?*} children Children tree container.
	 * @param {function(*, int)} func.
	 * @param {*} context Context for func.
	 * @returns {array} of children that meet the func return statement
	 */
	function filter(children, func, context) {
	  var index = 0;
	  var result = [];
	
	  _react2['default'].Children.forEach(children, function (child) {
	    if (!_react2['default'].isValidElement(child)) {
	      return;
	    }
	
	    if (func.call(context, child, index++)) {
	      result.push(child);
	    }
	  });
	
	  return result;
	}
	
	function find(children, func, context) {
	  var index = 0;
	  var result = void 0;
	
	  _react2['default'].Children.forEach(children, function (child) {
	    if (result) {
	      return;
	    }
	    if (!_react2['default'].isValidElement(child)) {
	      return;
	    }
	
	    if (func.call(context, child, index++)) {
	      result = child;
	    }
	  });
	
	  return result;
	}
	
	function every(children, func, context) {
	  var index = 0;
	  var result = true;
	
	  _react2['default'].Children.forEach(children, function (child) {
	    if (!result) {
	      return;
	    }
	    if (!_react2['default'].isValidElement(child)) {
	      return;
	    }
	
	    if (!func.call(context, child, index++)) {
	      result = false;
	    }
	  });
	
	  return result;
	}
	
	function some(children, func, context) {
	  var index = 0;
	  var result = false;
	
	  _react2['default'].Children.forEach(children, function (child) {
	    if (result) {
	      return;
	    }
	    if (!_react2['default'].isValidElement(child)) {
	      return;
	    }
	
	    if (func.call(context, child, index++)) {
	      result = true;
	    }
	  });
	
	  return result;
	}
	
	function toArray(children) {
	  var result = [];
	
	  _react2['default'].Children.forEach(children, function (child) {
	    if (!_react2['default'].isValidElement(child)) {
	      return;
	    }
	
	    result.push(child);
	  });
	
	  return result;
	}
	
	exports['default'] = {
	  map: map,
	  forEach: forEach,
	  count: count,
	  find: find,
	  filter: filter,
	  every: every,
	  some: some,
	  toArray: toArray
	};
	module.exports = exports['default'];

/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends2 = __webpack_require__(87);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _objectWithoutProperties2 = __webpack_require__(86);
	
	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
	
	var _classCallCheck2 = __webpack_require__(94);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _possibleConstructorReturn2 = __webpack_require__(95);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(130);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _classnames = __webpack_require__(138);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _react = __webpack_require__(5);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(139);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _elementType = __webpack_require__(140);
	
	var _elementType2 = _interopRequireDefault(_elementType);
	
	var _bootstrapUtils = __webpack_require__(142);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}
	
	var propTypes = {
	  horizontal: _propTypes2['default'].bool,
	  inline: _propTypes2['default'].bool,
	  componentClass: _elementType2['default']
	};
	
	var defaultProps = {
	  horizontal: false,
	  inline: false,
	  componentClass: 'form'
	};
	
	var Form = (function (_React$Component) {
	  (0, _inherits3['default'])(Form, _React$Component);
	
	  function Form() {
	    (0, _classCallCheck3['default'])(this, Form);
	    return (0, _possibleConstructorReturn3['default'])(this, _React$Component.apply(this, arguments));
	  }
	
	  Form.prototype.render = function render() {
	    var _props = this.props,
	        horizontal = _props.horizontal,
	        inline = _props.inline,
	        Component = _props.componentClass,
	        className = _props.className,
	        props = (0, _objectWithoutProperties3['default'])(_props, ['horizontal', 'inline', 'componentClass', 'className']);
	
	    var _splitBsProps = (0, _bootstrapUtils.splitBsProps)(props),
	        bsProps = _splitBsProps[0],
	        elementProps = _splitBsProps[1];
	
	    var classes = [];
	    if (horizontal) {
	      classes.push((0, _bootstrapUtils.prefix)(bsProps, 'horizontal'));
	    }
	    if (inline) {
	      classes.push((0, _bootstrapUtils.prefix)(bsProps, 'inline'));
	    }
	
	    return _react2['default'].createElement(Component, (0, _extends3['default'])({}, elementProps, {
	      className: (0, _classnames2['default'])(className, classes)
	    }));
	  };
	
	  return Form;
	})(_react2['default'].Component);
	
	Form.propTypes = propTypes;
	Form.defaultProps = defaultProps;
	
	exports['default'] = (0, _bootstrapUtils.bsClass)('form', Form);
	module.exports = exports['default'];

/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends3 = __webpack_require__(87);
	
	var _extends4 = _interopRequireDefault(_extends3);
	
	var _objectWithoutProperties2 = __webpack_require__(86);
	
	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
	
	var _classCallCheck2 = __webpack_require__(94);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _possibleConstructorReturn2 = __webpack_require__(95);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(130);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _classnames = __webpack_require__(138);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _react = __webpack_require__(5);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(139);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _bootstrapUtils = __webpack_require__(142);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}
	
	var propTypes = {
	  /**
	   * An icon name without "glyphicon-" prefix. See e.g. http://getbootstrap.com/components/#glyphicons
	   */
	  glyph: _propTypes2['default'].string.isRequired
	};
	
	var Glyphicon = (function (_React$Component) {
	  (0, _inherits3['default'])(Glyphicon, _React$Component);
	
	  function Glyphicon() {
	    (0, _classCallCheck3['default'])(this, Glyphicon);
	    return (0, _possibleConstructorReturn3['default'])(this, _React$Component.apply(this, arguments));
	  }
	
	  Glyphicon.prototype.render = function render() {
	    var _extends2;
	
	    var _props = this.props,
	        glyph = _props.glyph,
	        className = _props.className,
	        props = (0, _objectWithoutProperties3['default'])(_props, ['glyph', 'className']);
	
	    var _splitBsProps = (0, _bootstrapUtils.splitBsProps)(props),
	        bsProps = _splitBsProps[0],
	        elementProps = _splitBsProps[1];
	
	    var classes = (0, _extends4['default'])({}, (0, _bootstrapUtils.getClassSet)(bsProps), (_extends2 = {}, _extends2[(0, _bootstrapUtils.prefix)(bsProps, glyph)] = true, _extends2));
	
	    return _react2['default'].createElement('span', (0, _extends4['default'])({}, elementProps, {
	      className: (0, _classnames2['default'])(className, classes)
	    }));
	  };
	
	  return Glyphicon;
	})(_react2['default'].Component);
	
	Glyphicon.propTypes = propTypes;
	
	exports['default'] = (0, _bootstrapUtils.bsClass)('glyphicon', Glyphicon);
	module.exports = exports['default'];

/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(5);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(29);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var Footer = (function (_React$Component) {
	  _inherits(Footer, _React$Component);
	
	  function Footer() {
	    _classCallCheck(this, Footer);
	
	    _get(Object.getPrototypeOf(Footer.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  _createClass(Footer, [{
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement(
	        'div',
	        null,
	        _react2['default'].createElement(
	          'footer',
	          { className: 'footer', id: 'footer' },
	          _react2['default'].createElement(
	            'div',
	            { className: 'container-fluid' },
	            _react2['default'].createElement(
	              'div',
	              { className: 'row' },
	              _react2['default'].createElement(
	                'div',
	                { className: 'col-sm-4' },
	                _react2['default'].createElement(
	                  'address',
	                  null,
	                  _react2['default'].createElement(
	                    'strong',
	                    null,
	                    'Contact Us'
	                  ),
	                  _react2['default'].createElement('br', null),
	                  'email: reactcasestudy@infy.colm',
	                  _react2['default'].createElement('br', null),
	                  'Fax Number:91-1-1234567890',
	                  _react2['default'].createElement('br', null)
	                )
	              ),
	              _react2['default'].createElement(
	                'div',
	                { className: 'col-sm-4' },
	                _react2['default'].createElement(
	                  'center',
	                  null,
	                  _react2['default'].createElement(
	                    'p',
	                    { className: 'text-muted credit' },
	                    'React JS casestudy Copyright @ infy.com'
	                  )
	                )
	              ),
	              _react2['default'].createElement(
	                'div',
	                { className: 'col-sm-4', style: { "textAlign": 'right' } },
	                _react2['default'].createElement(
	                  'address',
	                  null,
	                  _react2['default'].createElement(
	                    'strong',
	                    null,
	                    'Infosys Ltd'
	                  ),
	                  _react2['default'].createElement('br', null),
	                  'Bantwal Taluk',
	                  _react2['default'].createElement('br', null),
	                  'Dakshina Kannada Dist',
	                  _react2['default'].createElement('br', null),
	                  _react2['default'].createElement(
	                    'abbr',
	                    { title: 'Phone' },
	                    'P:'
	                  ),
	                  ' (123) 456-7890'
	                )
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);
	
	  return Footer;
	})(_react2['default'].Component);
	
	exports['default'] = Footer;
	module.exports = exports['default'];

/***/ }),
/* 195 */
/***/ (function(module, exports) {

	/**
	 * This file is provided by Facebook for testing and evaluation purposes
	 * only. Facebook reserves all rights not expressly granted.
	 *
	 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
	 * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN
	 * AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
	 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
	 */
	
	'use strict';
	
	module.exports = {
	
	  init: function init() {
	    localStorage.clear();
	    localStorage.setItem('messages', JSON.stringify([{
	      id: 'm_1',
	      threadID: 't_1',
	      threadName: 'Khalid',
	      authorName: 'Krishna',
	      text: 'Hey Khalid, you want a replacement for the product you recently purchased?',
	      timestamp: Date.now() - 99999
	    }, {
	      id: 'm_2',
	      threadID: 't_1',
	      threadName: 'Khalid',
	      authorName: 'Khalid',
	      text: 'Hi. Definitely. Its malfunctioning.',
	      timestamp: Date.now() - 89999
	    }, {
	      id: 'm_3',
	      threadID: 't_1',
	      threadName: 'Khalid',
	      authorName: 'Krishna',
	      text: 'Please send a mail to CSA@abc.com pointing the issues.',
	      timestamp: Date.now() - 79999
	    }, {
	      id: 'm_4',
	      threadID: 't_2',
	      threadName: 'Roopa',
	      authorName: 'Krishna',
	      text: 'Hi Roopa, this is from customer care regarding the product you recently purchased',
	      timestamp: Date.now() - 69999
	    }, {
	      id: 'm_5',
	      threadID: 't_2',
	      threadName: 'Roopa',
	      authorName: 'Roopa',
	      text: 'Hi. ',
	      timestamp: Date.now() - 59999
	    }, {
	      id: 'm_6',
	      threadID: 't_3',
	      threadName: 'Functional Heads',
	      authorName: 'Krishna',
	      text: 'Hey Rimika, are you satisfied with the product you recently purchased?',
	      timestamp: Date.now() - 49999
	    }, {
	      id: 'm_7',
	      threadID: 't_3',
	      threadName: 'Rimika',
	      authorName: 'Rimika',
	      text: 'Hi. Yeah, of course.  Thank you',
	      timestamp: Date.now() - 39999
	    }]));
	  }
	
	};

/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(5);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _ProductJsx = __webpack_require__(48);
	
	var _ProductJsx2 = _interopRequireDefault(_ProductJsx);
	
	var _FeedbackCompJsx = __webpack_require__(197);
	
	var _FeedbackCompJsx2 = _interopRequireDefault(_FeedbackCompJsx);
	
	var _StoresApplicationStore = __webpack_require__(36);
	
	var _StoresApplicationStore2 = _interopRequireDefault(_StoresApplicationStore);
	
	var _ActionsAction = __webpack_require__(31);
	
	var _ActionsAction2 = _interopRequireDefault(_ActionsAction);
	
	var _ChatApp = __webpack_require__(150);
	
	var _ChatApp2 = _interopRequireDefault(_ChatApp);
	
	var Navigation = __webpack_require__(164).Navigation;
	var Footer = __webpack_require__(194);
	
	var MessageSection = __webpack_require__(151);
	var ThreadSection = __webpack_require__(160);
	var ChatExampleData = __webpack_require__(195);
	var ChatWebAPIUtils = __webpack_require__(41);
	var productId;
	
	function getProductDetailsState() {
	  var params = { "pdtId": productId };
	  var retData = _StoresApplicationStore2['default'].FetchProductDetails(params);
	  return {
	    productDetails: retData.pdtDetails,
	    feedbackDetails: retData.fbDetails.feedbackDetails,
	    productId: retData.fbDetails.pdtCode
	  };
	}
	
	var ProductDetails = (function (_React$Component) {
	  _inherits(ProductDetails, _React$Component);
	
	  function ProductDetails(props) {
	    _classCallCheck(this, ProductDetails);
	
	    _get(Object.getPrototypeOf(ProductDetails.prototype), 'constructor', this).call(this, props);
	    this.handleSubmitFeedback = this.handleSubmitFeedback.bind(this);
	    this._onChange = this._onChange.bind(this);
	    this.state = {
	      productDetails: {},
	      feedbackDetails: [],
	      pdtId: ""
	    };
	  }
	
	  _createClass(ProductDetails, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      ChatExampleData.init(); // load example data into localstorage
	      var ret = ChatWebAPIUtils.getAllMessages();
	      productId = this.props.match.params.id;
	      var stateObj = getProductDetailsState();
	      this.setState({ productDetails: stateObj.productDetails, feedbackDetails: stateObj.feedbackDetails, pdtId: stateObj.productId });
	    }
	  }, {
	    key: 'handleSubmitFeedback',
	    value: function handleSubmitFeedback(rating, feedback) {
	      var fbData = { 'feedback': feedback,
	        'rating': rating,
	        'productId': this.state.pdtId };
	      _ActionsAction2['default'].SubmitFeedback(fbData);
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      _StoresApplicationStore2['default'].addChangeListener(this._onChange);
	      //setInterval(this._onChange,1000);
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      _StoresApplicationStore2['default'].removeChangeListener(this._onChange);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement(
	        'div',
	        null,
	        _react2['default'].createElement(Navigation, null),
	        _react2['default'].createElement(
	          'div',
	          { className: "container-fluid" },
	          _react2['default'].createElement(
	            'div',
	            { className: "row", style: { "maxWidth": "100%" } },
	            _react2['default'].createElement(
	              'div',
	              { className: "col-sm-3" },
	              _react2['default'].createElement(_ProductJsx2['default'], { status: this.state.productDetails.isDiscontinued, pid: this.state.productDetails._id, price: this.state.productDetails.pdtPrice, name: this.state.productDetails.pdtName, desc: this.state.productDetails.pdtDescription, img: this.state.productDetails.pdtImg, rating: this.state.productDetails.avgFeedback })
	            ),
	            _react2['default'].createElement(
	              'div',
	              { className: "col-sm-4" },
	              this.state.productDetails.isDiscontinued,
	              _react2['default'].createElement(_FeedbackCompJsx2['default'], { status: this.state.productDetails.isDiscontinued, feedbacks: this.state.feedbackDetails, pdtCode: this.state.pdtId, onFeedback: this.handleSubmitFeedback })
	            ),
	            _react2['default'].createElement(
	              'div',
	              { className: "col-sm-5" },
	              _react2['default'].createElement(_ChatApp2['default'], null)
	            )
	          )
	        ),
	        _react2['default'].createElement(Footer, null)
	      );
	    }
	  }, {
	    key: '_onChange',
	    value: function _onChange() {
	      var stateObj = getProductDetailsState();
	      this.setState({ productDetails: stateObj.productDetails, feedbackDetails: stateObj.feedbackDetails, pdtId: stateObj.productId });
	    }
	  }]);
	
	  return ProductDetails;
	})(_react2['default'].Component);
	
	exports['default'] = ProductDetails;
	module.exports = exports['default'];

/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(5);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactBootstrapLibButton = __webpack_require__(50);
	
	var _reactBootstrapLibButton2 = _interopRequireDefault(_reactBootstrapLibButton);
	
	var _reactBootstrapLibForm = __webpack_require__(192);
	
	var _reactBootstrapLibForm2 = _interopRequireDefault(_reactBootstrapLibForm);
	
	var _reactBootstrapLibFormGroup = __webpack_require__(198);
	
	var _reactBootstrapLibFormGroup2 = _interopRequireDefault(_reactBootstrapLibFormGroup);
	
	var _reactBootstrapLibCol = __webpack_require__(199);
	
	var _reactBootstrapLibCol2 = _interopRequireDefault(_reactBootstrapLibCol);
	
	var _reactBootstrapLibFormControl = __webpack_require__(200);
	
	var _reactBootstrapLibFormControl2 = _interopRequireDefault(_reactBootstrapLibFormControl);
	
	var Rater = __webpack_require__(49).Rater;
	
	var FeedbackComp = (function (_React$Component) {
	  _inherits(FeedbackComp, _React$Component);
	
	  function FeedbackComp() {
	    _classCallCheck(this, FeedbackComp);
	
	    _get(Object.getPrototypeOf(FeedbackComp.prototype), 'constructor', this).call(this);
	    this.state = {
	      latestFeedback: "",
	      rating: '5'
	    };
	    this.feedbackSubmitHandler = this.feedbackSubmitHandler.bind(this);
	    this.handleFeedbackChange = this.handleFeedbackChange.bind(this);
	    this.handleClick = this.handleClick.bind(this);
	  }
	
	  _createClass(FeedbackComp, [{
	    key: 'handleFeedbackChange',
	    value: function handleFeedbackChange(e) {
	      this.setState({ latestFeedback: e.target.value });
	    }
	  }, {
	    key: 'handleClick',
	    value: function handleClick(rating) {
	      this.setState({ rating: rating });
	    }
	  }, {
	    key: 'feedbackSubmitHandler',
	    value: function feedbackSubmitHandler(e) {
	      this.props.onFeedback(this.state.rating, this.state.latestFeedback);
	      this.setState({ latestFeedback: "", rating: "5" });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var items = [];
	      this.props.feedbacks.forEach(function (fb) {
	        items.push(_react2['default'].createElement(
	          'div',
	          { key: fb.pdtCode },
	          _react2['default'].createElement(
	            'a',
	            { href: '#' },
	            _react2['default'].createElement(
	              'h4',
	              null,
	              fb.user
	            )
	          ),
	          _react2['default'].createElement(Rater, { value: fb.rating, maxlength: '6' }),
	          '  ',
	          _react2['default'].createElement(
	            'span',
	            { style: { "fontSize": "9px" } },
	            fb.rating,
	            '/5'
	          ),
	          _react2['default'].createElement('br', null),
	          _react2['default'].createElement(
	            'div',
	            null,
	            fb.body
	          ),
	          _react2['default'].createElement(
	            'h6',
	            { style: { "fontStyle": "italic", "color": "lightgrey" } },
	            '-',
	            fb.updatedAt.substr(0, 10)
	          )
	        ));
	      });
	      return _react2['default'].createElement(
	        'div',
	        null,
	        items,
	        this.props.status ? null : _react2['default'].createElement(
	          _reactBootstrapLibForm2['default'],
	          { horizontal: true, className: "" },
	          _react2['default'].createElement(
	            'div',
	            { className: "form-group" },
	            _react2['default'].createElement('textarea', { className: "form-control", rows: '5', cols: '12', value: this.state.latestFeedback, name: 'username', onChange: this.handleFeedbackChange, ref: 'username' })
	          ),
	          _react2['default'].createElement(
	            'div',
	            null,
	            _react2['default'].createElement(Rater, { value: this.state.rating, maxlength: '6', onSelected: this.handleClick }),
	            '  ',
	            _react2['default'].createElement(
	              'span',
	              { style: { "fontSize": "9px" } },
	              this.state.rating,
	              '/5'
	            )
	          ),
	          _react2['default'].createElement('br', null),
	          _react2['default'].createElement(
	            _reactBootstrapLibFormGroup2['default'],
	            null,
	            _react2['default'].createElement(
	              _reactBootstrapLibCol2['default'],
	              { sm: 8 },
	              _react2['default'].createElement(
	                _reactBootstrapLibButton2['default'],
	                { bsStyle: 'primary', onClick: this.feedbackSubmitHandler },
	                'Submit Feedback'
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);
	
	  return FeedbackComp;
	})(_react2['default'].Component);
	
	exports['default'] = FeedbackComp;
	module.exports = exports['default'];

/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends2 = __webpack_require__(87);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _objectWithoutProperties2 = __webpack_require__(86);
	
	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
	
	var _classCallCheck2 = __webpack_require__(94);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _possibleConstructorReturn2 = __webpack_require__(95);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(130);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _classnames = __webpack_require__(138);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _react = __webpack_require__(5);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(139);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _bootstrapUtils = __webpack_require__(142);
	
	var _StyleConfig = __webpack_require__(147);
	
	var _ValidComponentChildren = __webpack_require__(191);
	
	var _ValidComponentChildren2 = _interopRequireDefault(_ValidComponentChildren);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}
	
	var propTypes = {
	  /**
	   * Sets `id` on `<FormControl>` and `htmlFor` on `<FormGroup.Label>`.
	   */
	  controlId: _propTypes2['default'].string,
	  validationState: _propTypes2['default'].oneOf(['success', 'warning', 'error', null])
	};
	
	var childContextTypes = {
	  $bs_formGroup: _propTypes2['default'].object.isRequired
	};
	
	var FormGroup = (function (_React$Component) {
	  (0, _inherits3['default'])(FormGroup, _React$Component);
	
	  function FormGroup() {
	    (0, _classCallCheck3['default'])(this, FormGroup);
	    return (0, _possibleConstructorReturn3['default'])(this, _React$Component.apply(this, arguments));
	  }
	
	  FormGroup.prototype.getChildContext = function getChildContext() {
	    var _props = this.props,
	        controlId = _props.controlId,
	        validationState = _props.validationState;
	
	    return {
	      $bs_formGroup: {
	        controlId: controlId,
	        validationState: validationState
	      }
	    };
	  };
	
	  FormGroup.prototype.hasFeedback = function hasFeedback(children) {
	    var _this2 = this;
	
	    return _ValidComponentChildren2['default'].some(children, function (child) {
	      return child.props.bsRole === 'feedback' || child.props.children && _this2.hasFeedback(child.props.children);
	    });
	  };
	
	  FormGroup.prototype.render = function render() {
	    var _props2 = this.props,
	        validationState = _props2.validationState,
	        className = _props2.className,
	        children = _props2.children,
	        props = (0, _objectWithoutProperties3['default'])(_props2, ['validationState', 'className', 'children']);
	
	    var _splitBsPropsAndOmit = (0, _bootstrapUtils.splitBsPropsAndOmit)(props, ['controlId']),
	        bsProps = _splitBsPropsAndOmit[0],
	        elementProps = _splitBsPropsAndOmit[1];
	
	    var classes = (0, _extends3['default'])({}, (0, _bootstrapUtils.getClassSet)(bsProps), {
	      'has-feedback': this.hasFeedback(children)
	    });
	    if (validationState) {
	      classes['has-' + validationState] = true;
	    }
	
	    return _react2['default'].createElement('div', (0, _extends3['default'])({}, elementProps, {
	      className: (0, _classnames2['default'])(className, classes)
	    }), children);
	  };
	
	  return FormGroup;
	})(_react2['default'].Component);
	
	FormGroup.propTypes = propTypes;
	FormGroup.childContextTypes = childContextTypes;
	
	exports['default'] = (0, _bootstrapUtils.bsClass)('form-group', (0, _bootstrapUtils.bsSizes)([_StyleConfig.Size.LARGE, _StyleConfig.Size.SMALL], FormGroup));
	module.exports = exports['default'];

/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends2 = __webpack_require__(87);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _objectWithoutProperties2 = __webpack_require__(86);
	
	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
	
	var _classCallCheck2 = __webpack_require__(94);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _possibleConstructorReturn2 = __webpack_require__(95);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(130);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _classnames = __webpack_require__(138);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _react = __webpack_require__(5);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(139);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _elementType = __webpack_require__(140);
	
	var _elementType2 = _interopRequireDefault(_elementType);
	
	var _bootstrapUtils = __webpack_require__(142);
	
	var _StyleConfig = __webpack_require__(147);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}
	
	var propTypes = {
	  componentClass: _elementType2['default'],
	
	  /**
	   * The number of columns you wish to span
	   *
	   * for Extra small devices Phones (<768px)
	   *
	   * class-prefix `col-xs-`
	   */
	  xs: _propTypes2['default'].number,
	  /**
	   * The number of columns you wish to span
	   *
	   * for Small devices Tablets (≥768px)
	   *
	   * class-prefix `col-sm-`
	   */
	  sm: _propTypes2['default'].number,
	  /**
	   * The number of columns you wish to span
	   *
	   * for Medium devices Desktops (≥992px)
	   *
	   * class-prefix `col-md-`
	   */
	  md: _propTypes2['default'].number,
	  /**
	   * The number of columns you wish to span
	   *
	   * for Large devices Desktops (≥1200px)
	   *
	   * class-prefix `col-lg-`
	   */
	  lg: _propTypes2['default'].number,
	  /**
	   * Hide column
	   *
	   * on Extra small devices Phones
	   *
	   * adds class `hidden-xs`
	   */
	  xsHidden: _propTypes2['default'].bool,
	  /**
	   * Hide column
	   *
	   * on Small devices Tablets
	   *
	   * adds class `hidden-sm`
	   */
	  smHidden: _propTypes2['default'].bool,
	  /**
	   * Hide column
	   *
	   * on Medium devices Desktops
	   *
	   * adds class `hidden-md`
	   */
	  mdHidden: _propTypes2['default'].bool,
	  /**
	   * Hide column
	   *
	   * on Large devices Desktops
	   *
	   * adds class `hidden-lg`
	   */
	  lgHidden: _propTypes2['default'].bool,
	  /**
	   * Move columns to the right
	   *
	   * for Extra small devices Phones
	   *
	   * class-prefix `col-xs-offset-`
	   */
	  xsOffset: _propTypes2['default'].number,
	  /**
	   * Move columns to the right
	   *
	   * for Small devices Tablets
	   *
	   * class-prefix `col-sm-offset-`
	   */
	  smOffset: _propTypes2['default'].number,
	  /**
	   * Move columns to the right
	   *
	   * for Medium devices Desktops
	   *
	   * class-prefix `col-md-offset-`
	   */
	  mdOffset: _propTypes2['default'].number,
	  /**
	   * Move columns to the right
	   *
	   * for Large devices Desktops
	   *
	   * class-prefix `col-lg-offset-`
	   */
	  lgOffset: _propTypes2['default'].number,
	  /**
	   * Change the order of grid columns to the right
	   *
	   * for Extra small devices Phones
	   *
	   * class-prefix `col-xs-push-`
	   */
	  xsPush: _propTypes2['default'].number,
	  /**
	   * Change the order of grid columns to the right
	   *
	   * for Small devices Tablets
	   *
	   * class-prefix `col-sm-push-`
	   */
	  smPush: _propTypes2['default'].number,
	  /**
	   * Change the order of grid columns to the right
	   *
	   * for Medium devices Desktops
	   *
	   * class-prefix `col-md-push-`
	   */
	  mdPush: _propTypes2['default'].number,
	  /**
	   * Change the order of grid columns to the right
	   *
	   * for Large devices Desktops
	   *
	   * class-prefix `col-lg-push-`
	   */
	  lgPush: _propTypes2['default'].number,
	  /**
	   * Change the order of grid columns to the left
	   *
	   * for Extra small devices Phones
	   *
	   * class-prefix `col-xs-pull-`
	   */
	  xsPull: _propTypes2['default'].number,
	  /**
	   * Change the order of grid columns to the left
	   *
	   * for Small devices Tablets
	   *
	   * class-prefix `col-sm-pull-`
	   */
	  smPull: _propTypes2['default'].number,
	  /**
	   * Change the order of grid columns to the left
	   *
	   * for Medium devices Desktops
	   *
	   * class-prefix `col-md-pull-`
	   */
	  mdPull: _propTypes2['default'].number,
	  /**
	   * Change the order of grid columns to the left
	   *
	   * for Large devices Desktops
	   *
	   * class-prefix `col-lg-pull-`
	   */
	  lgPull: _propTypes2['default'].number
	};
	
	var defaultProps = {
	  componentClass: 'div'
	};
	
	var Col = (function (_React$Component) {
	  (0, _inherits3['default'])(Col, _React$Component);
	
	  function Col() {
	    (0, _classCallCheck3['default'])(this, Col);
	    return (0, _possibleConstructorReturn3['default'])(this, _React$Component.apply(this, arguments));
	  }
	
	  Col.prototype.render = function render() {
	    var _props = this.props,
	        Component = _props.componentClass,
	        className = _props.className,
	        props = (0, _objectWithoutProperties3['default'])(_props, ['componentClass', 'className']);
	
	    var _splitBsProps = (0, _bootstrapUtils.splitBsProps)(props),
	        bsProps = _splitBsProps[0],
	        elementProps = _splitBsProps[1];
	
	    var classes = [];
	
	    _StyleConfig.DEVICE_SIZES.forEach(function (size) {
	      function popProp(propSuffix, modifier) {
	        var propName = '' + size + propSuffix;
	        var propValue = elementProps[propName];
	
	        if (propValue != null) {
	          classes.push((0, _bootstrapUtils.prefix)(bsProps, '' + size + modifier + '-' + propValue));
	        }
	
	        delete elementProps[propName];
	      }
	
	      popProp('', '');
	      popProp('Offset', '-offset');
	      popProp('Push', '-push');
	      popProp('Pull', '-pull');
	
	      var hiddenPropName = size + 'Hidden';
	      if (elementProps[hiddenPropName]) {
	        classes.push('hidden-' + size);
	      }
	      delete elementProps[hiddenPropName];
	    });
	
	    return _react2['default'].createElement(Component, (0, _extends3['default'])({}, elementProps, {
	      className: (0, _classnames2['default'])(className, classes)
	    }));
	  };
	
	  return Col;
	})(_react2['default'].Component);
	
	Col.propTypes = propTypes;
	Col.defaultProps = defaultProps;
	
	exports['default'] = (0, _bootstrapUtils.bsClass)('col', Col);
	module.exports = exports['default'];

/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends2 = __webpack_require__(87);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _objectWithoutProperties2 = __webpack_require__(86);
	
	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
	
	var _classCallCheck2 = __webpack_require__(94);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _possibleConstructorReturn2 = __webpack_require__(95);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(130);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _classnames = __webpack_require__(138);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _react = __webpack_require__(5);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(139);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _elementType = __webpack_require__(140);
	
	var _elementType2 = _interopRequireDefault(_elementType);
	
	var _warning = __webpack_require__(190);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	var _FormControlFeedback = __webpack_require__(201);
	
	var _FormControlFeedback2 = _interopRequireDefault(_FormControlFeedback);
	
	var _FormControlStatic = __webpack_require__(202);
	
	var _FormControlStatic2 = _interopRequireDefault(_FormControlStatic);
	
	var _bootstrapUtils = __webpack_require__(142);
	
	var _StyleConfig = __webpack_require__(147);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}
	
	var propTypes = {
	  componentClass: _elementType2['default'],
	  /**
	   * Only relevant if `componentClass` is `'input'`.
	   */
	  type: _propTypes2['default'].string,
	  /**
	   * Uses `controlId` from `<FormGroup>` if not explicitly specified.
	   */
	  id: _propTypes2['default'].string,
	  /**
	   * Attaches a ref to the `<input>` element. Only functions can be used here.
	   *
	   * ```js
	   * <FormControl inputRef={ref => { this.input = ref; }} />
	   * ```
	   */
	  inputRef: _propTypes2['default'].func
	};
	
	var defaultProps = {
	  componentClass: 'input'
	};
	
	var contextTypes = {
	  $bs_formGroup: _propTypes2['default'].object
	};
	
	var FormControl = (function (_React$Component) {
	  (0, _inherits3['default'])(FormControl, _React$Component);
	
	  function FormControl() {
	    (0, _classCallCheck3['default'])(this, FormControl);
	    return (0, _possibleConstructorReturn3['default'])(this, _React$Component.apply(this, arguments));
	  }
	
	  FormControl.prototype.render = function render() {
	    var formGroup = this.context.$bs_formGroup;
	    var controlId = formGroup && formGroup.controlId;
	
	    var _props = this.props,
	        Component = _props.componentClass,
	        type = _props.type,
	        _props$id = _props.id,
	        id = _props$id === undefined ? controlId : _props$id,
	        inputRef = _props.inputRef,
	        className = _props.className,
	        bsSize = _props.bsSize,
	        props = (0, _objectWithoutProperties3['default'])(_props, ['componentClass', 'type', 'id', 'inputRef', 'className', 'bsSize']);
	
	    var _splitBsProps = (0, _bootstrapUtils.splitBsProps)(props),
	        bsProps = _splitBsProps[0],
	        elementProps = _splitBsProps[1];
	
	    process.env.NODE_ENV !== 'production' ? (0, _warning2['default'])(controlId == null || id === controlId, '`controlId` is ignored on `<FormControl>` when `id` is specified.') : void 0;
	
	    // input[type="file"] should not have .form-control.
	    var classes = void 0;
	    if (type !== 'file') {
	      classes = (0, _bootstrapUtils.getClassSet)(bsProps);
	    }
	
	    // If user provides a size, make sure to append it to classes as input-
	    // e.g. if bsSize is small, it will append input-sm
	    if (bsSize) {
	      var size = _StyleConfig.SIZE_MAP[bsSize] || bsSize;
	      classes[(0, _bootstrapUtils.prefix)({ bsClass: 'input' }, size)] = true;
	    }
	
	    return _react2['default'].createElement(Component, (0, _extends3['default'])({}, elementProps, {
	      type: type,
	      id: id,
	      ref: inputRef,
	      className: (0, _classnames2['default'])(className, classes)
	    }));
	  };
	
	  return FormControl;
	})(_react2['default'].Component);
	
	FormControl.propTypes = propTypes;
	FormControl.defaultProps = defaultProps;
	FormControl.contextTypes = contextTypes;
	
	FormControl.Feedback = _FormControlFeedback2['default'];
	FormControl.Static = _FormControlStatic2['default'];
	
	exports['default'] = (0, _bootstrapUtils.bsClass)('form-control', (0, _bootstrapUtils.bsSizes)([_StyleConfig.Size.SMALL, _StyleConfig.Size.LARGE], FormControl));
	module.exports = exports['default'];

/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _objectWithoutProperties2 = __webpack_require__(86);
	
	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
	
	var _extends2 = __webpack_require__(87);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _classCallCheck2 = __webpack_require__(94);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _possibleConstructorReturn2 = __webpack_require__(95);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(130);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _classnames = __webpack_require__(138);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _react = __webpack_require__(5);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(139);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _Glyphicon = __webpack_require__(193);
	
	var _Glyphicon2 = _interopRequireDefault(_Glyphicon);
	
	var _bootstrapUtils = __webpack_require__(142);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}
	
	var defaultProps = {
	  bsRole: 'feedback'
	};
	
	var contextTypes = {
	  $bs_formGroup: _propTypes2['default'].object
	};
	
	var FormControlFeedback = (function (_React$Component) {
	  (0, _inherits3['default'])(FormControlFeedback, _React$Component);
	
	  function FormControlFeedback() {
	    (0, _classCallCheck3['default'])(this, FormControlFeedback);
	    return (0, _possibleConstructorReturn3['default'])(this, _React$Component.apply(this, arguments));
	  }
	
	  FormControlFeedback.prototype.getGlyph = function getGlyph(validationState) {
	    switch (validationState) {
	      case 'success':
	        return 'ok';
	      case 'warning':
	        return 'warning-sign';
	      case 'error':
	        return 'remove';
	      default:
	        return null;
	    }
	  };
	
	  FormControlFeedback.prototype.renderDefaultFeedback = function renderDefaultFeedback(formGroup, className, classes, elementProps) {
	    var glyph = this.getGlyph(formGroup && formGroup.validationState);
	    if (!glyph) {
	      return null;
	    }
	
	    return _react2['default'].createElement(_Glyphicon2['default'], (0, _extends3['default'])({}, elementProps, {
	      glyph: glyph,
	      className: (0, _classnames2['default'])(className, classes)
	    }));
	  };
	
	  FormControlFeedback.prototype.render = function render() {
	    var _props = this.props,
	        className = _props.className,
	        children = _props.children,
	        props = (0, _objectWithoutProperties3['default'])(_props, ['className', 'children']);
	
	    var _splitBsProps = (0, _bootstrapUtils.splitBsProps)(props),
	        bsProps = _splitBsProps[0],
	        elementProps = _splitBsProps[1];
	
	    var classes = (0, _bootstrapUtils.getClassSet)(bsProps);
	
	    if (!children) {
	      return this.renderDefaultFeedback(this.context.$bs_formGroup, className, classes, elementProps);
	    }
	
	    var child = _react2['default'].Children.only(children);
	    return _react2['default'].cloneElement(child, (0, _extends3['default'])({}, elementProps, {
	      className: (0, _classnames2['default'])(child.props.className, className, classes)
	    }));
	  };
	
	  return FormControlFeedback;
	})(_react2['default'].Component);
	
	FormControlFeedback.defaultProps = defaultProps;
	FormControlFeedback.contextTypes = contextTypes;
	
	exports['default'] = (0, _bootstrapUtils.bsClass)('form-control-feedback', FormControlFeedback);
	module.exports = exports['default'];

/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends2 = __webpack_require__(87);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _objectWithoutProperties2 = __webpack_require__(86);
	
	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
	
	var _classCallCheck2 = __webpack_require__(94);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _possibleConstructorReturn2 = __webpack_require__(95);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(130);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _classnames = __webpack_require__(138);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _react = __webpack_require__(5);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _elementType = __webpack_require__(140);
	
	var _elementType2 = _interopRequireDefault(_elementType);
	
	var _bootstrapUtils = __webpack_require__(142);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}
	
	var propTypes = {
	  componentClass: _elementType2['default']
	};
	
	var defaultProps = {
	  componentClass: 'p'
	};
	
	var FormControlStatic = (function (_React$Component) {
	  (0, _inherits3['default'])(FormControlStatic, _React$Component);
	
	  function FormControlStatic() {
	    (0, _classCallCheck3['default'])(this, FormControlStatic);
	    return (0, _possibleConstructorReturn3['default'])(this, _React$Component.apply(this, arguments));
	  }
	
	  FormControlStatic.prototype.render = function render() {
	    var _props = this.props,
	        Component = _props.componentClass,
	        className = _props.className,
	        props = (0, _objectWithoutProperties3['default'])(_props, ['componentClass', 'className']);
	
	    var _splitBsProps = (0, _bootstrapUtils.splitBsProps)(props),
	        bsProps = _splitBsProps[0],
	        elementProps = _splitBsProps[1];
	
	    var classes = (0, _bootstrapUtils.getClassSet)(bsProps);
	
	    return _react2['default'].createElement(Component, (0, _extends3['default'])({}, elementProps, {
	      className: (0, _classnames2['default'])(className, classes)
	    }));
	  };
	
	  return FormControlStatic;
	})(_react2['default'].Component);
	
	FormControlStatic.propTypes = propTypes;
	FormControlStatic.defaultProps = defaultProps;
	
	exports['default'] = (0, _bootstrapUtils.bsClass)('form-control-static', FormControlStatic);
	module.exports = exports['default'];

/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _ChatApp = __webpack_require__(150);
	
	var _ChatApp2 = _interopRequireDefault(_ChatApp);
	
	var React = __webpack_require__(5);
	var createReactClass = __webpack_require__(156);
	var MessageSection = __webpack_require__(151);
	var ThreadSection = __webpack_require__(160);
	var Navigation = __webpack_require__(164).Navigation;
	var Footer = __webpack_require__(194);
	var AppStore = __webpack_require__(36);
	var ProdDisc = __webpack_require__(204);
	var Action = __webpack_require__(31);
	var ChatExampleData = __webpack_require__(195);
	var ChatWebAPIUtils = __webpack_require__(41);
	var ThreadStore = __webpack_require__(159);
	
	function getDashboardNotification() {
	  var notifications = AppStore.FetchAdminNotifications();
	  return {
	    Notifications: notifications
	  };
	}
	
	var Dashboard = createReactClass({
	  getInitialState: function getInitialState() {
	    var obj = getDashboardNotification();
	    return obj;
	  },
	  componentDidMount: function componentDidMount() {
	    document.body.style.backgroundImage = "none";
	    AppStore.addChangeListener(this._onChange);
	  },
	  componentWillMount: function componentWillMount() {
	    var ret = ChatWebAPIUtils.getAllMessages();
	  },
	  componentWillUnmount: function componentWillUnmount() {
	    AppStore.removeChangeListener(this._onChange);
	  },
	  handleDiscontinue: function handleDiscontinue(pdtCode) {
	    var productCode = { "pdtCode": pdtCode };
	    Action.DiscontinueProduct(productCode);
	  },
	  render: function render() {
	    var items = [];
	    this.state.Notifications.productDetails.forEach(function (item) {
	      items.push(React.createElement(
	        'div',
	        { className: "col-sm-6" },
	        React.createElement(ProdDisc, { key: item.pdtCode, status: item.isDiscontinued, onDisc: this.handleDiscontinue, pdtId: item.pdtCode, img: item.pdtImg, name: item.pdtName, rating: item.avgFeedback })
	      ));
	    }, this);
	    return React.createElement(
	      'div',
	      null,
	      React.createElement(Navigation, null),
	      React.createElement(
	        'div',
	        { className: 'container-fluid' },
	        React.createElement(
	          'div',
	          { className: 'row' },
	          React.createElement(
	            'div',
	            { className: 'col-sm-7' },
	            items
	          ),
	          React.createElement(
	            'div',
	            { className: 'col-sm-5' },
	            React.createElement(_ChatApp2['default'], null)
	          )
	        )
	      ),
	      React.createElement(Footer, null)
	    );
	  },
	  _onChange: function _onChange() {
	    var stateObj = getDashboardNotification();
	    //console.log(stateObj);
	    this.setState(stateObj);
	    //console.log("stateObj Notifications");
	    //console.log(this.state.Notifications);
	  }
	});
	
	module.exports = Dashboard;

/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _reactRouter = __webpack_require__(35);
	
	var React = __webpack_require__(5);
	var Rater = __webpack_require__(49).Rater;
	var ProductDetails = __webpack_require__(196);
	
	var ProductDisc = (function (_React$Component) {
	  _inherits(ProductDisc, _React$Component);
	
	  function ProductDisc() {
	    _classCallCheck(this, ProductDisc);
	
	    _get(Object.getPrototypeOf(ProductDisc.prototype), 'constructor', this).call(this);
	    this.state = {
	      rating: '',
	      prodId: ""
	    };
	    this.handleDisc = this.handleDisc.bind(this);
	  }
	
	  _createClass(ProductDisc, [{
	    key: 'handleDisc',
	    value: function handleDisc() {
	      this.props.onDisc(this.state.prodId);
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.setState({ rating: this.props.rating, prodId: this.props.pdtId });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return React.createElement(
	        'div',
	        null,
	        React.createElement(
	          'div',
	          { className: "thumbnail" },
	          React.createElement('img', { src: this.props.img, className: "img img-rounded img-responsive" }),
	          React.createElement(
	            'div',
	            { className: "caption", style: { "textAlign": "center" } },
	            React.createElement(
	              'a',
	              { href: '#' },
	              React.createElement(
	                'h3',
	                null,
	                this.props.name
	              )
	            ),
	            React.createElement(Rater, { value: this.props.rating, maxlength: '6' }),
	            React.createElement(
	              'p',
	              { className: "description" },
	              'Average rating for the product is ',
	              this.props.rating,
	              '/5.'
	            ),
	            this.props.status ? React.createElement(
	              'h5',
	              { style: { "color": "red", "font-weight": "bold" } },
	              'The product is discontinued.'
	            ) : React.createElement(
	              'button',
	              { onClick: this.handleDisc, className: "btn btn-danger", type: 'button', disabled: !(parseInt(this.props.rating) <= 2.5) },
	              'Discontinue the product'
	            )
	          )
	        )
	      );
	    }
	  }]);
	
	  return ProductDisc;
	})(React.Component);
	
	exports['default'] = ProductDisc;
	module.exports = exports['default'];

/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

	//import warning from 'warning'
	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}
	
	var _Actions = __webpack_require__(206);
	
	var _parsePath = __webpack_require__(207);
	
	var _parsePath2 = _interopRequireDefault(_parsePath);
	
	function createLocation() {
	  var location = arguments.length <= 0 || arguments[0] === undefined ? '/' : arguments[0];
	  var action = arguments.length <= 1 || arguments[1] === undefined ? _Actions.POP : arguments[1];
	  var key = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];
	
	  var _fourthArg = arguments.length <= 3 || arguments[3] === undefined ? null : arguments[3];
	
	  if (typeof location === 'string') location = _parsePath2['default'](location);
	
	  if (typeof action === 'object') {
	    //warning(
	    //  false,
	    //  'The state (2nd) argument to createLocation is deprecated; use a ' +
	    //  'location descriptor instead'
	    //)
	
	    location = _extends({}, location, { state: action });
	
	    action = key || _Actions.POP;
	    key = _fourthArg;
	  }
	
	  var pathname = location.pathname || '/';
	  var search = location.search || '';
	  var hash = location.hash || '';
	  var state = location.state || null;
	
	  return {
	    pathname: pathname,
	    search: search,
	    hash: hash,
	    state: state,
	    action: action,
	    key: key
	  };
	}
	
	exports['default'] = createLocation;
	module.exports = exports['default'];

/***/ }),
/* 206 */
/***/ (function(module, exports) {

	/**
	 * Indicates that navigation was caused by a call to history.push.
	 */
	'use strict';
	
	exports.__esModule = true;
	var PUSH = 'PUSH';
	
	exports.PUSH = PUSH;
	/**
	 * Indicates that navigation was caused by a call to history.replace.
	 */
	var REPLACE = 'REPLACE';
	
	exports.REPLACE = REPLACE;
	/**
	 * Indicates that navigation was caused by some other action such
	 * as using a browser's back/forward buttons and/or manually manipulating
	 * the URL in a browser's location bar. This is the default.
	 *
	 * See https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onpopstate
	 * for more information.
	 */
	var POP = 'POP';
	
	exports.POP = POP;
	exports['default'] = {
	  PUSH: PUSH,
	  REPLACE: REPLACE,
	  POP: POP
	};

/***/ }),
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}
	
	var _warning = __webpack_require__(190);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	var _extractPath = __webpack_require__(208);
	
	var _extractPath2 = _interopRequireDefault(_extractPath);
	
	function parsePath(path) {
	  var pathname = _extractPath2['default'](path);
	  var search = '';
	  var hash = '';
	
	  process.env.NODE_ENV !== 'production' ? _warning2['default'](path === pathname, 'A path must be pathname + search + hash only, not a fully qualified URL like "%s"', path) : undefined;
	
	  var hashIndex = pathname.indexOf('#');
	  if (hashIndex !== -1) {
	    hash = pathname.substring(hashIndex);
	    pathname = pathname.substring(0, hashIndex);
	  }
	
	  var searchIndex = pathname.indexOf('?');
	  if (searchIndex !== -1) {
	    search = pathname.substring(searchIndex);
	    pathname = pathname.substring(0, searchIndex);
	  }
	
	  if (pathname === '') pathname = '/';
	
	  return {
	    pathname: pathname,
	    search: search,
	    hash: hash
	  };
	}
	
	exports['default'] = parsePath;
	module.exports = exports['default'];

/***/ }),
/* 208 */
/***/ (function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	function extractPath(string) {
	  var match = string.match(/^https?:\/\/[^\/]*/);
	
	  if (match == null) return string;
	
	  return string.substring(match[0].length);
	}
	
	exports["default"] = extractPath;
	module.exports = exports["default"];

/***/ }),
/* 209 */
/***/ (function(module, exports) {

	module.exports = require("http");

/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var mongoose = __webpack_require__(211);
	var Schema = mongoose.Schema;
	
	var UserlistSchema = new Schema({
	  slNo: Number,
	  username: String,
	  password: String,
	  role: String,
	  availabilityStatus: String
	});
	
	module.exports = mongoose.model("Userlist", UserlistSchema);

/***/ }),
/* 211 */
/***/ (function(module, exports) {

	module.exports = require("mongoose");

/***/ }),
/* 212 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var mongoose = __webpack_require__(211);
	var Schema = mongoose.Schema;
	
	var ProductSchema = new Schema({
	  pdtName: String,
	  pdtPrice: Number,
	  pdtCode: String,
	  pdtDescription: String,
	  pdtCategory: String,
	  avgFeedback: Number,
	  purchasedUser: String,
	  pdtImg: String,
	  isDiscontinued: Boolean
	});
	
	module.exports = mongoose.model("ProductSchema", ProductSchema, "Products");

/***/ }),
/* 213 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var mongoose = __webpack_require__(211);
	var Schema = mongoose.Schema;
	
	var ProductDetailSchema = new Schema({
	  pdtCode: String,
	  feedbackDetails: [{ user: String, body: String, rating: Number, updatedAt: {
	      type: Date,
	      "default": Date.now
	    } }]
	});
	
	module.exports = mongoose.model("ProductDetailsSchema", ProductDetailSchema, "ProductsDetail");

/***/ }),
/* 214 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var mongoose = __webpack_require__(211);
	var Schema = mongoose.Schema;
	
	var PurchasedSchema = new Schema({
	  pdtCode: String,
	  purchasedUser: String
	});
	
	module.exports = mongoose.model("PurchasedSchema", PurchasedSchema);

/***/ }),
/* 215 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var mongoose = __webpack_require__(211);
	var Schema = mongoose.Schema;
	
	var ChatDetailsSchema = new Schema({
	  id: String,
	  threadID: String,
	  threadName: String,
	  authorName: String,
	  text: String,
	  timestamp: Date
	});
	
	module.exports = mongoose.model("ChatDetailsSchema", ChatDetailsSchema);

/***/ }),
/* 216 */
/***/ (function(module, exports) {

	module.exports = require("express-session");

/***/ }),
/* 217 */
/***/ (function(module, exports) {

	module.exports = require("body-parser");

/***/ }),
/* 218 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var mongoose = __webpack_require__(211);
	var Userlist = __webpack_require__(210);
	var ProductSchema = __webpack_require__(212);
	var ProductDetails = __webpack_require__(213);
	var PurchasedSchema = __webpack_require__(214);
	var ChatDataSchema = __webpack_require__(215);
	
	mongoose.connect("mongodb://localhost/Users", function () {
	  console.log("db connected");
	  //mongoose.connection.once('connected',()=>{
	  mongoose.connection.db.dropDatabase();
	  //});
	
	  var users = [{
	    username: "krishna",
	    password: "krishna@123",
	    role: "admin",
	    availabilityStatus: "Available"
	  }, {
	    username: "roopa",
	    password: "roopa@123",
	    role: "customer",
	    availabilityStatus: "Available"
	  }, {
	    username: "rimika",
	    password: "rimika@123",
	    role: "customer",
	    availabilityStatus: "Offline"
	  }, {
	    username: "arun",
	    password: "arun@123",
	    role: "customer",
	    availabilityStatus: "Available"
	  }, {
	    username: "roshan",
	    password: "roshan@123",
	    role: "customer",
	    availabilityStatus: "Available"
	  }, {
	    username: "khalid",
	    password: "khalid@123",
	    role: "customer",
	    availabilityStatus: "Available"
	  }];
	
	  users.forEach(function (user) {
	    new Userlist(user).save();
	  });
	
	  var purchasedUserDetails = [{ pdtCode: "lt-023", purchasedUser: "roopa" }, { pdtCode: "im-022", purchasedUser: "roopa" }, { pdtCode: "ks-029", purchasedUser: "roopa" }, { pdtCode: "im-022", purchasedUser: "rimika" }, { pdtCode: "pb-099", purchasedUser: "rimika" }, { pdtCode: "lt-023", purchasedUser: "arun" }, { pdtCode: "lt-023", purchasedUser: "khalid" }, { pdtCode: "ks-029", purchasedUser: "khalid" }, { pdtCode: "ks-029", purchasedUser: "roshan" }, { pdtCode: "pb-099", purchasedUser: "khalid" }];
	  purchasedUserDetails.forEach(function (pdt) {
	    new PurchasedSchema(pdt).save();
	  });
	
	  var products = [{
	    pdtName: "Ind Mobile EX321",
	    pdtPrice: 8999,
	    pdtCode: "im-022",
	    pdtDescription: "This will take you to next level of communication.",
	    pdtCategory: "Electronics",
	    avgFeedback: 0,
	    pdtImg: "/Images/Mobile.jpg",
	    isDiscontinued: false
	  }, {
	    pdtName: "Gamia Laptop",
	    pdtPrice: 33000,
	    pdtCode: "lt-023",
	    pdtDescription: "An excellent choice for an awesome gaming experience.",
	    pdtCategory: "Electronics",
	    avgFeedback: 0,
	    pdtImg: "/Images/Laptop.jpg",
	    isDiscontinued: false
	  }, {
	    pdtName: "Khaadi Shirt",
	    pdtPrice: 982,
	    pdtCode: "ks-029",
	    pdtDescription: "Best suitable for tropical climate.",
	    pdtCategory: "Costumes",
	    avgFeedback: 0,
	    pdtImg: "/Images/Shirt.jpg",
	    isDiscontinued: false
	  }, {
	    pdtName: "NI Power Bank",
	    pdtPrice: 599,
	    pdtCode: "pb-099",
	    pdtDescription: "Execellent power bank having usb connector.",
	    pdtCategory: "Electronics",
	    avgFeedback: 0,
	    pdtImg: "/Images/PowerBank.jpg",
	    isDiscontinued: false
	  }];
	
	  products.forEach(function (pdt) {
	    new ProductSchema(pdt).save();
	  });
	
	  var productDetails = [{
	    pdtCode: "lt-023",
	    feedbackDetails: [{
	      user: "roopa",
	      body: "Awesome product at an affordable range. Go for it.",
	      rating: 4
	    }, {
	      user: "rimika",
	      body: "Not upto the mark. Gets heated soon",
	      rating: 3
	    }, {
	      user: "khalid",
	      body: "Worst product. First of all , received very late. Forget about it",
	      rating: 2
	    }]
	  }, {
	    pdtCode: "im-022",
	    feedbackDetails: [{
	      user: "roopa",
	      body: "Looks fine",
	      rating: 4
	    }, {
	      user: "rimika",
	      body: "good one at this range of price.",
	      rating: 4
	    }, {
	      user: "khalid",
	      body: "GPS less accurate. Rest everything is fine.",
	      rating: 2
	    }]
	  }, {
	    pdtCode: "ks-029",
	    feedbackDetails: [{
	      user: "roopa",
	      body: "Good for the climate.",
	      rating: 4
	    }]
	  }, {
	    pdtCode: "pb-099",
	    feedbackDetails: [{
	      user: "khalid",
	      body: "Very bad product. Discharge rate is very high and getting heated quickly.",
	      rating: 2
	    }, {
	      user: "arun",
	      body: "Average",
	      rating: 3
	    }]
	  }];
	
	  productDetails.forEach(function (pdt) {
	    new ProductDetails(pdt).save();
	  });
	
	  var chatData = [{
	    id: 'm_1',
	    threadID: 't_1',
	    threadName: 'Khalid',
	    authorName: 'Krishna',
	    text: 'Hey Khalid, you want a replacement for the product you recently purchased?',
	    timestamp: Date.now() - 99999
	  }, {
	    id: 'm_2',
	    threadID: 't_1',
	    threadName: 'Khalid',
	    authorName: 'Khalid',
	    text: 'Hi. Definitely. Its malfunctioning.',
	    timestamp: Date.now() - 89999
	  }, {
	    id: 'm_3',
	    threadID: 't_1',
	    threadName: 'Khalid',
	    authorName: 'Krishna',
	    text: 'Please send a mail to CSA@abc.com pointing the issues.',
	    timestamp: Date.now() - 79999
	  }, {
	    id: 'm_4',
	    threadID: 't_2',
	    threadName: 'Roopa',
	    authorName: 'Krishna',
	    text: 'Hi Roopa, this is from customer care regarding the product you recently purchased',
	    timestamp: Date.now() - 69999
	  }, {
	    id: 'm_5',
	    threadID: 't_2',
	    threadName: 'Roopa',
	    authorName: 'Roopa',
	    text: 'Hi. ',
	    timestamp: Date.now() - 59999
	  }, {
	    id: 'm_6',
	    threadID: 't_3',
	    threadName: 'Rimika',
	    authorName: 'Krishna',
	    text: 'Hey Rimika, are you satisfied with the product you recently purchased?',
	    timestamp: Date.now() - 49999
	  }, {
	    id: 'm_7',
	    threadID: 't_3',
	    threadName: 'Rimika',
	    authorName: 'Rimika',
	    text: 'Hi. Yeah, of course.  Thank you',
	    timestamp: Date.now() - 39999
	  }];
	
	  chatData.forEach(function (chat) {
	    new ChatDataSchema(chat).save();
	  });
	
	  console.log("data stored successfully");
	});

/***/ }),
/* 219 */
/***/ (function(module, exports) {

	module.exports = require("socket.io");

/***/ })
/******/ ])
});
;
//# sourceMappingURL=server.js.map