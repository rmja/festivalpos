(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~settings"],{

/***/ "./node_modules/jiff/jiff.js":
/*!***********************************!*\
  !*** ./node_modules/jiff/jiff.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/** @license MIT License (c) copyright 2010-2014 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

var lcs = __webpack_require__(/*! ./lib/lcs */ "./node_modules/jiff/lib/lcs.js");
var array = __webpack_require__(/*! ./lib/array */ "./node_modules/jiff/lib/array.js");
var patch = __webpack_require__(/*! ./lib/jsonPatch */ "./node_modules/jiff/lib/jsonPatch.js");
var inverse = __webpack_require__(/*! ./lib/inverse */ "./node_modules/jiff/lib/inverse.js");
var jsonPointer = __webpack_require__(/*! ./lib/jsonPointer */ "./node_modules/jiff/lib/jsonPointer.js");
var encodeSegment = jsonPointer.encodeSegment;

exports.diff = diff;
exports.patch = patch.apply;
exports.patchInPlace = patch.applyInPlace;
exports.inverse = inverse;
exports.clone = patch.clone;

// Errors
exports.InvalidPatchOperationError = __webpack_require__(/*! ./lib/InvalidPatchOperationError */ "./node_modules/jiff/lib/InvalidPatchOperationError.js");
exports.TestFailedError = __webpack_require__(/*! ./lib/TestFailedError */ "./node_modules/jiff/lib/TestFailedError.js");
exports.PatchNotInvertibleError = __webpack_require__(/*! ./lib/PatchNotInvertibleError */ "./node_modules/jiff/lib/PatchNotInvertibleError.js");

var isValidObject = patch.isValidObject;
var defaultHash = patch.defaultHash;

/**
 * Compute a JSON Patch representing the differences between a and b.
 * @param {object|array|string|number|null} a
 * @param {object|array|string|number|null} b
 * @param {?function|?object} options if a function, see options.hash
 * @param {?function(x:*):String|Number} options.hash used to hash array items
 *  in order to recognize identical objects, defaults to JSON.stringify
 * @param {?function(index:Number, array:Array):object} options.makeContext
 *  used to generate patch context. If not provided, context will not be generated
 * @returns {array} JSON Patch such that patch(diff(a, b), a) ~ b
 */
function diff(a, b, options) {
	return appendChanges(a, b, '', initState(options, [])).patch;
}

/**
 * Create initial diff state from the provided options
 * @param {?function|?object} options @see diff options above
 * @param {array} patch an empty or existing JSON Patch array into which
 *  the diff should generate new patch operations
 * @returns {object} initialized diff state
 */
function initState(options, patch) {
	if(typeof options === 'object') {
		return {
			patch: patch,
			hash: orElse(isFunction, options.hash, defaultHash),
			makeContext: orElse(isFunction, options.makeContext, defaultContext),
			invertible: !(options.invertible === false)
		};
	} else {
		return {
			patch: patch,
			hash: orElse(isFunction, options, defaultHash),
			makeContext: defaultContext,
			invertible: true
		};
	}
}

/**
 * Given two JSON values (object, array, number, string, etc.), find their
 * differences and append them to the diff state
 * @param {object|array|string|number|null} a
 * @param {object|array|string|number|null} b
 * @param {string} path
 * @param {object} state
 * @returns {Object} updated diff state
 */
function appendChanges(a, b, path, state) {
	if(Array.isArray(a) && Array.isArray(b)) {
		return appendArrayChanges(a, b, path, state);
	}

	if(isValidObject(a) && isValidObject(b)) {
		return appendObjectChanges(a, b, path, state);
	}

	return appendValueChanges(a, b, path, state);
}

/**
 * Given two objects, find their differences and append them to the diff state
 * @param {object} o1
 * @param {object} o2
 * @param {string} path
 * @param {object} state
 * @returns {Object} updated diff state
 */
function appendObjectChanges(o1, o2, path, state) {
	var keys = Object.keys(o2);
	var patch = state.patch;
	var i, key;

	for(i=keys.length-1; i>=0; --i) {
		key = keys[i];
		var keyPath = path + '/' + encodeSegment(key);
		if(o1[key] !== void 0) {
			appendChanges(o1[key], o2[key], keyPath, state);
		} else {
			patch.push({ op: 'add', path: keyPath, value: o2[key] });
		}
	}

	keys = Object.keys(o1);
	for(i=keys.length-1; i>=0; --i) {
		key = keys[i];
		if(o2[key] === void 0) {
			var p = path + '/' + encodeSegment(key);
			if(state.invertible) {
				patch.push({ op: 'test', path: p, value: o1[key] });
			}
			patch.push({ op: 'remove', path: p });
		}
	}

	return state;
}

/**
 * Given two arrays, find their differences and append them to the diff state
 * @param {array} a1
 * @param {array} a2
 * @param {string} path
 * @param {object} state
 * @returns {Object} updated diff state
 */
function appendArrayChanges(a1, a2, path, state) {
	var a1hash = array.map(state.hash, a1);
	var a2hash = array.map(state.hash, a2);

	var lcsMatrix = lcs.compare(a1hash, a2hash);

	return lcsToJsonPatch(a1, a2, path, state, lcsMatrix);
}

/**
 * Transform an lcsMatrix into JSON Patch operations and append
 * them to state.patch, recursing into array elements as necessary
 * @param {array} a1
 * @param {array} a2
 * @param {string} path
 * @param {object} state
 * @param {object} lcsMatrix
 * @returns {object} new state with JSON Patch operations added based
 *  on the provided lcsMatrix
 */
function lcsToJsonPatch(a1, a2, path, state, lcsMatrix) {
	var offset = 0;
	return lcs.reduce(function(state, op, i, j) {
		var last, context;
		var patch = state.patch;
		var p = path + '/' + (j + offset);

		if (op === lcs.REMOVE) {
			// Coalesce adjacent remove + add into replace
			last = patch[patch.length-1];
			context = state.makeContext(j, a1);

			if(state.invertible) {
				patch.push({ op: 'test', path: p, value: a1[j], context: context });
			}

			if(last !== void 0 && last.op === 'add' && last.path === p) {
				last.op = 'replace';
				last.context = context;
			} else {
				patch.push({ op: 'remove', path: p, context: context });
			}

			offset -= 1;

		} else if (op === lcs.ADD) {
			// See https://tools.ietf.org/html/rfc6902#section-4.1
			// May use either index===length *or* '-' to indicate appending to array
			patch.push({ op: 'add', path: p, value: a2[i],
				context: state.makeContext(j, a1)
			});

			offset += 1;

		} else {
			appendChanges(a1[j], a2[i], p, state);
		}

		return state;

	}, state, lcsMatrix);
}

/**
 * Given two number|string|null values, if they differ, append to diff state
 * @param {string|number|null} a
 * @param {string|number|null} b
 * @param {string} path
 * @param {object} state
 * @returns {object} updated diff state
 */
function appendValueChanges(a, b, path, state) {
	if(a !== b) {
		if(state.invertible) {
			state.patch.push({ op: 'test', path: path, value: a });
		}

		state.patch.push({ op: 'replace', path: path, value: b });
	}

	return state;
}

/**
 * @param {function} predicate
 * @param {*} x
 * @param {*} y
 * @returns {*} x if predicate(x) is truthy, otherwise y
 */
function orElse(predicate, x, y) {
	return predicate(x) ? x : y;
}

/**
 * Default patch context generator
 * @returns {undefined} undefined context
 */
function defaultContext() {
	return void 0;
}

/**
 * @param {*} x
 * @returns {boolean} true if x is a function, false otherwise
 */
function isFunction(x) {
	return typeof x === 'function';
}


/***/ }),

/***/ "./node_modules/jiff/lib/InvalidPatchOperationError.js":
/*!*************************************************************!*\
  !*** ./node_modules/jiff/lib/InvalidPatchOperationError.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = InvalidPatchOperationError;

function InvalidPatchOperationError(message) {
	Error.call(this);
	this.name = this.constructor.name;
	this.message = message;
	if(typeof Error.captureStackTrace === 'function') {
		Error.captureStackTrace(this, this.constructor);
	}
}

InvalidPatchOperationError.prototype = Object.create(Error.prototype);
InvalidPatchOperationError.prototype.constructor = InvalidPatchOperationError;

/***/ }),

/***/ "./node_modules/jiff/lib/PatchNotInvertibleError.js":
/*!**********************************************************!*\
  !*** ./node_modules/jiff/lib/PatchNotInvertibleError.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = PatchNotInvertibleError;

function PatchNotInvertibleError(message) {
	Error.call(this);
	this.name = this.constructor.name;
	this.message = message;
	if(typeof Error.captureStackTrace === 'function') {
		Error.captureStackTrace(this, this.constructor);
	}
}

PatchNotInvertibleError.prototype = Object.create(Error.prototype);
PatchNotInvertibleError.prototype.constructor = PatchNotInvertibleError;

/***/ }),

/***/ "./node_modules/jiff/lib/TestFailedError.js":
/*!**************************************************!*\
  !*** ./node_modules/jiff/lib/TestFailedError.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = TestFailedError;

function TestFailedError(message) {
	Error.call(this);
	this.name = this.constructor.name;
	this.message = message;
	if(typeof Error.captureStackTrace === 'function') {
		Error.captureStackTrace(this, this.constructor);
	}
}

TestFailedError.prototype = Object.create(Error.prototype);
TestFailedError.prototype.constructor = TestFailedError;

/***/ }),

/***/ "./node_modules/jiff/lib/array.js":
/*!****************************************!*\
  !*** ./node_modules/jiff/lib/array.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** @license MIT License (c) copyright 2010-2014 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

exports.cons = cons;
exports.tail = tail;
exports.map = map;

/**
 * Prepend x to a, without mutating a. Faster than a.unshift(x)
 * @param {*} x
 * @param {Array} a array-like
 * @returns {Array} new Array with x prepended
 */
function cons(x, a) {
	var l = a.length;
	var b = new Array(l+1);
	b[0] = x;
	for(var i=0; i<l; ++i) {
		b[i+1] = a[i];
	}

	return b;
}

/**
 * Create a new Array containing all elements in a, except the first.
 *  Faster than a.slice(1)
 * @param {Array} a array-like
 * @returns {Array} new Array, the equivalent of a.slice(1)
 */
function tail(a) {
	var l = a.length-1;
	var b = new Array(l);
	for(var i=0; i<l; ++i) {
		b[i] = a[i+1];
	}

	return b;
}

/**
 * Map any array-like. Faster than Array.prototype.map
 * @param {function} f
 * @param {Array} a array-like
 * @returns {Array} new Array mapped by f
 */
function map(f, a) {
	var b = new Array(a.length);
	for(var i=0; i< a.length; ++i) {
		b[i] = f(a[i]);
	}
	return b;
}

/***/ }),

/***/ "./node_modules/jiff/lib/clone.js":
/*!****************************************!*\
  !*** ./node_modules/jiff/lib/clone.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** @license MIT License (c) copyright 2010-2014 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

/**
 * Create a deep copy of x which must be a legal JSON object/array/value
 * @param {object|array|string|number|null} x object/array/value to clone
 * @returns {object|array|string|number|null} clone of x
 */
module.exports = clone;

function clone(x) {
	if(x == null || typeof x !== 'object') {
		return x;
	}

	if(Array.isArray(x)) {
		return cloneArray(x);
	}

	return cloneObject(x);
}

function cloneArray (x) {
	var l = x.length;
	var y = new Array(l);

	for (var i = 0; i < l; ++i) {
		y[i] = clone(x[i]);
	}

	return y;
}

function cloneObject (x) {
	var keys = Object.keys(x);
	var y = {};

	for (var k, i = 0, l = keys.length; i < l; ++i) {
		k = keys[i];
		y[k] = clone(x[k]);
	}

	return y;
}


/***/ }),

/***/ "./node_modules/jiff/lib/commutePaths.js":
/*!***********************************************!*\
  !*** ./node_modules/jiff/lib/commutePaths.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var jsonPointer = __webpack_require__(/*! ./jsonPointer */ "./node_modules/jiff/lib/jsonPointer.js");

/**
 * commute the patch sequence a,b to b,a
 * @param {object} a patch operation
 * @param {object} b patch operation
 */
module.exports = function commutePaths(a, b) {
	// TODO: cases for special paths: '' and '/'
	var left = jsonPointer.parse(a.path);
	var right = jsonPointer.parse(b.path);
	var prefix = getCommonPathPrefix(left, right);
	var isArray = isArrayPath(left, right, prefix.length);

	// Never mutate the originals
	var ac = copyPatch(a);
	var bc = copyPatch(b);

	if(prefix.length === 0 && !isArray) {
		// Paths share no common ancestor, simple swap
		return [bc, ac];
	}

	if(isArray) {
		return commuteArrayPaths(ac, left, bc, right);
	} else {
		return commuteTreePaths(ac, left, bc, right);
	}
};

function commuteTreePaths(a, left, b, right) {
	if(a.path === b.path) {
		throw new TypeError('cannot commute ' + a.op + ',' + b.op + ' with identical object paths');
	}
	// FIXME: Implement tree path commutation
	return [b, a];
}

/**
 * Commute two patches whose common ancestor (which may be the immediate parent)
 * is an array
 * @param a
 * @param left
 * @param b
 * @param right
 * @returns {*}
 */
function commuteArrayPaths(a, left, b, right) {
	if(left.length === right.length) {
		return commuteArraySiblings(a, left, b, right);
	}

	if (left.length > right.length) {
		// left is longer, commute by "moving" it to the right
		left = commuteArrayAncestor(b, right, a, left, -1);
		a.path = jsonPointer.absolute(jsonPointer.join(left));
	} else {
		// right is longer, commute by "moving" it to the left
		right = commuteArrayAncestor(a, left, b, right, 1);
		b.path = jsonPointer.absolute(jsonPointer.join(right));
	}

	return [b, a];
}

function isArrayPath(left, right, index) {
	return jsonPointer.isValidArrayIndex(left[index])
		&& jsonPointer.isValidArrayIndex(right[index]);
}

/**
 * Commute two patches referring to items in the same array
 * @param l
 * @param lpath
 * @param r
 * @param rpath
 * @returns {*[]}
 */
function commuteArraySiblings(l, lpath, r, rpath) {

	var target = lpath.length-1;
	var lindex = +lpath[target];
	var rindex = +rpath[target];

	var commuted;

	if(lindex < rindex) {
		// Adjust right path
		if(l.op === 'add' || l.op === 'copy') {
			commuted = rpath.slice();
			commuted[target] = Math.max(0, rindex - 1);
			r.path = jsonPointer.absolute(jsonPointer.join(commuted));
		} else if(l.op === 'remove') {
			commuted = rpath.slice();
			commuted[target] = rindex + 1;
			r.path = jsonPointer.absolute(jsonPointer.join(commuted));
		}
	} else if(r.op === 'add' || r.op === 'copy') {
		// Adjust left path
		commuted = lpath.slice();
		commuted[target] = lindex + 1;
		l.path = jsonPointer.absolute(jsonPointer.join(commuted));
	} else if (lindex > rindex && r.op === 'remove') {
		// Adjust left path only if remove was at a (strictly) lower index
		commuted = lpath.slice();
		commuted[target] = Math.max(0, lindex - 1);
		l.path = jsonPointer.absolute(jsonPointer.join(commuted));
	}

	return [r, l];
}

/**
 * Commute two patches with a common array ancestor
 * @param l
 * @param lpath
 * @param r
 * @param rpath
 * @param direction
 * @returns {*}
 */
function commuteArrayAncestor(l, lpath, r, rpath, direction) {
	// rpath is longer or same length

	var target = lpath.length-1;
	var lindex = +lpath[target];
	var rindex = +rpath[target];

	// Copy rpath, then adjust its array index
	var rc = rpath.slice();

	if(lindex > rindex) {
		return rc;
	}

	if(l.op === 'add' || l.op === 'copy') {
		rc[target] = Math.max(0, rindex - direction);
	} else if(l.op === 'remove') {
		rc[target] = Math.max(0, rindex + direction);
	}

	return rc;
}

function getCommonPathPrefix(p1, p2) {
	var p1l = p1.length;
	var p2l = p2.length;
	if(p1l === 0 || p2l === 0 || (p1l < 2 && p2l < 2)) {
		return [];
	}

	// If paths are same length, the last segment cannot be part
	// of a common prefix.  If not the same length, the prefix cannot
	// be longer than the shorter path.
	var l = p1l === p2l
		? p1l - 1
		: Math.min(p1l, p2l);

	var i = 0;
	while(i < l && p1[i] === p2[i]) {
		++i
	}

	return p1.slice(0, i);
}

function copyPatch(p) {
	if(p.op === 'remove') {
		return { op: p.op, path: p.path };
	}

	if(p.op === 'copy' || p.op === 'move') {
		return { op: p.op, path: p.path, from: p.from };
	}

	// test, add, replace
	return { op: p.op, path: p.path, value: p.value };
}

/***/ }),

/***/ "./node_modules/jiff/lib/deepEquals.js":
/*!*********************************************!*\
  !*** ./node_modules/jiff/lib/deepEquals.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = deepEquals;

/**
 * Compare 2 JSON values, or recursively compare 2 JSON objects or arrays
 * @param {object|array|string|number|boolean|null} a
 * @param {object|array|string|number|boolean|null} b
 * @returns {boolean} true iff a and b are recursively equal
 */
function deepEquals(a, b) {
	if(a === b) {
		return true;
	}

	if(Array.isArray(a) && Array.isArray(b)) {
		return compareArrays(a, b);
	}

	if(typeof a === 'object' && typeof b === 'object') {
		return compareObjects(a, b);
	}

	return false;
}

function compareArrays(a, b) {
	if(a.length !== b.length) {
		return false;
	}

	for(var i = 0; i<a.length; ++i) {
		if(!deepEquals(a[i], b[i])) {
			return false;
		}
	}

	return true;
}

function compareObjects(a, b) {
	if((a === null && b !== null) || (a !== null && b === null)) {
		return false;
	}

	var akeys = Object.keys(a);
	var bkeys = Object.keys(b);

	if(akeys.length !== bkeys.length) {
		return false;
	}

	for(var i = 0, k; i<akeys.length; ++i) {
		k = akeys[i];
		if(!(k in b && deepEquals(a[k], b[k]))) {
			return false;
		}
	}

	return true;
}

/***/ }),

/***/ "./node_modules/jiff/lib/inverse.js":
/*!******************************************!*\
  !*** ./node_modules/jiff/lib/inverse.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var patches = __webpack_require__(/*! ./patches */ "./node_modules/jiff/lib/patches.js");

module.exports = function inverse(p) {
	var pr = [];
	var i, skip;
	for(i = p.length-1; i>= 0; i -= skip) {
		skip = invertOp(pr, p[i], i, p);
	}

	return pr;
};

function invertOp(patch, c, i, context) {
	var op = patches[c.op];
	return op !== void 0 && typeof op.inverse === 'function'
		? op.inverse(patch, c, i, context)
		: 1;
}


/***/ }),

/***/ "./node_modules/jiff/lib/jsonPatch.js":
/*!********************************************!*\
  !*** ./node_modules/jiff/lib/jsonPatch.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/** @license MIT License (c) copyright 2010-2014 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

var patches = __webpack_require__(/*! ./patches */ "./node_modules/jiff/lib/patches.js");
var clone = __webpack_require__(/*! ./clone */ "./node_modules/jiff/lib/clone.js");
var InvalidPatchOperationError = __webpack_require__(/*! ./InvalidPatchOperationError */ "./node_modules/jiff/lib/InvalidPatchOperationError.js");

exports.apply = patch;
exports.applyInPlace = patchInPlace;
exports.clone = clone;
exports.isValidObject = isValidObject;
exports.defaultHash = defaultHash;

var defaultOptions = {};

/**
 * Apply the supplied JSON Patch to x
 * @param {array} changes JSON Patch
 * @param {object|array|string|number} x object/array/value to patch
 * @param {object} options
 * @param {function(index:Number, array:Array, context:object):Number} options.findContext
 *  function used adjust array indexes for smarty/fuzzy patching, for
 *  patches containing context
 * @returns {object|array|string|number} patched version of x. If x is
 *  an array or object, it will be mutated and returned. Otherwise, if
 *  x is a value, the new value will be returned.
 */
function patch(changes, x, options) {
	return patchInPlace(changes, clone(x), options);
}

function patchInPlace(changes, x, options) {
	if(!options) {
		options = defaultOptions;
	}

	// TODO: Consider throwing if changes is not an array
	if(!Array.isArray(changes)) {
		return x;
	}

	var patch, p;
	for(var i=0; i<changes.length; ++i) {
		p = changes[i];
		patch = patches[p.op];

		if(patch === void 0) {
			throw new InvalidPatchOperationError('invalid op ' + JSON.stringify(p));
		}

		x = patch.apply(x, p, options);
	}

	return x;
}

function defaultHash(x) {
	return isValidObject(x) || isArray(x) ? JSON.stringify(x) : x;
}

function isValidObject (x) {
	return x !== null && Object.prototype.toString.call(x) === '[object Object]';
}

function isArray (x) {
	return Object.prototype.toString.call(x) === '[object Array]';
}


/***/ }),

/***/ "./node_modules/jiff/lib/jsonPointer.js":
/*!**********************************************!*\
  !*** ./node_modules/jiff/lib/jsonPointer.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/** @license MIT License (c) copyright 2010-2014 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

var _parse = __webpack_require__(/*! ./jsonPointerParse */ "./node_modules/jiff/lib/jsonPointerParse.js");

exports.find = find;
exports.join = join;
exports.absolute = absolute;
exports.parse = parse;
exports.contains = contains;
exports.encodeSegment = encodeSegment;
exports.decodeSegment = decodeSegment;
exports.parseArrayIndex = parseArrayIndex;
exports.isValidArrayIndex = isValidArrayIndex;

// http://tools.ietf.org/html/rfc6901#page-2
var separator = '/';
var separatorRx = /\//g;
var encodedSeparator = '~1';
var encodedSeparatorRx = /~1/g;

var escapeChar = '~';
var escapeRx = /~/g;
var encodedEscape = '~0';
var encodedEscapeRx = /~0/g;

/**
 * Find the parent of the specified path in x and return a descriptor
 * containing the parent and a key.  If the parent does not exist in x,
 * return undefined, instead.
 * @param {object|array} x object or array in which to search
 * @param {string} path JSON Pointer string (encoded)
 * @param {?function(index:Number, array:Array, context:object):Number} findContext
 *  optional function used adjust array indexes for smarty/fuzzy patching, for
 *  patches containing context.  If provided, context MUST also be provided.
 * @param {?{before:Array, after:Array}} context optional patch context for
 *  findContext to use to adjust array indices.  If provided, findContext MUST
 *  also be provided.
 * @returns {{target:object|array|number|string, key:string}|undefined}
 */
function find(x, path, findContext, context) {
	if(typeof path !== 'string') {
		return;
	}

	if(path === '') {
		// whole document
		return { target: x, key: void 0 };
	}

	if(path === separator) {
		return { target: x, key: '' };
	}

	var parent = x, key;
	var hasContext = context !== void 0;

	_parse(path, function(segment) {
		// hm... this seems like it should be if(typeof x === 'undefined')
		if(x == null) {
			// Signal that we prematurely hit the end of the path hierarchy.
			parent = null;
			return false;
		}

		if(Array.isArray(x)) {
			key = hasContext
				? findIndex(findContext, parseArrayIndex(segment), x, context)
				: segment === '-' ? segment : parseArrayIndex(segment);
		} else {
			key = segment;
		}

		parent = x;
		x = x[key];
	});

	return parent === null
		? void 0
		: { target: parent, key: key };
}

function absolute(path) {
	return path[0] === separator ? path : separator + path;
}

function join(segments) {
	return segments.join(separator);
}

function parse(path) {
	var segments = [];
	_parse(path, segments.push.bind(segments));
	return segments;
}

function contains(a, b) {
	return b.indexOf(a) === 0 && b[a.length] === separator;
}

/**
 * Decode a JSON Pointer path segment
 * @see http://tools.ietf.org/html/rfc6901#page-3
 * @param {string} s encoded segment
 * @returns {string} decoded segment
 */
function decodeSegment(s) {
	// See: http://tools.ietf.org/html/rfc6901#page-3
	return s.replace(encodedSeparatorRx, separator).replace(encodedEscapeRx, escapeChar);
}

/**
 * Encode a JSON Pointer path segment
 * @see http://tools.ietf.org/html/rfc6901#page-3
 * @param {string} s decoded segment
 * @returns {string} encoded segment
 */
function encodeSegment(s) {
	return s.replace(escapeRx, encodedEscape).replace(separatorRx, encodedSeparator);
}

var arrayIndexRx = /^(0|[1-9]\d*)$/;

/**
 * Return true if s is a valid JSON Pointer array index
 * @param {String} s
 * @returns {boolean}
 */
function isValidArrayIndex(s) {
	return arrayIndexRx.test(s);
}

/**
 * Safely parse a string into a number >= 0. Does not check for decimal numbers
 * @param {string} s numeric string
 * @returns {number} number >= 0
 */
function parseArrayIndex (s) {
	if(isValidArrayIndex(s)) {
		return +s;
	}

	throw new SyntaxError('invalid array index ' + s);
}

function findIndex (findContext, start, array, context) {
	var index = start;

	if(index < 0) {
		throw new Error('array index out of bounds ' + index);
	}

	if(context !== void 0 && typeof findContext === 'function') {
		index = findContext(start, array, context);
		if(index < 0) {
			throw new Error('could not find patch context ' + context);
		}
	}

	return index;
}

/***/ }),

/***/ "./node_modules/jiff/lib/jsonPointerParse.js":
/*!***************************************************!*\
  !*** ./node_modules/jiff/lib/jsonPointerParse.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** @license MIT License (c) copyright 2010-2014 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

module.exports = jsonPointerParse;

var parseRx = /\/|~1|~0/g;
var separator = '/';
var escapeChar = '~';
var encodedSeparator = '~1';

/**
 * Parse through an encoded JSON Pointer string, decoding each path segment
 * and passing it to an onSegment callback function.
 * @see https://tools.ietf.org/html/rfc6901#section-4
 * @param {string} path encoded JSON Pointer string
 * @param {{function(segment:string):boolean}} onSegment callback function
 * @returns {string} original path
 */
function jsonPointerParse(path, onSegment) {
	var pos, accum, matches, match;

	pos = path.charAt(0) === separator ? 1 : 0;
	accum = '';
	parseRx.lastIndex = pos;

	while(matches = parseRx.exec(path)) {

		match = matches[0];
		accum += path.slice(pos, parseRx.lastIndex - match.length);
		pos = parseRx.lastIndex;

		if(match === separator) {
			if (onSegment(accum) === false) return path;
			accum = '';
		} else {
			accum += match === encodedSeparator ? separator : escapeChar;
		}
	}

	accum += path.slice(pos);
	onSegment(accum);

	return path;
}


/***/ }),

/***/ "./node_modules/jiff/lib/lcs.js":
/*!**************************************!*\
  !*** ./node_modules/jiff/lib/lcs.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** @license MIT License (c) copyright 2010-2014 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

exports.compare = compare;
exports.reduce = reduce;

var REMOVE, RIGHT, ADD, DOWN, SKIP;

exports.REMOVE = REMOVE = RIGHT = -1;
exports.ADD    = ADD    = DOWN  =  1;
exports.EQUAL  = SKIP   = 0;

/**
 * Create an lcs comparison matrix describing the differences
 * between two array-like sequences
 * @param {array} a array-like
 * @param {array} b array-like
 * @returns {object} lcs descriptor, suitable for passing to reduce()
 */
function compare(a, b) {
	var cols = a.length;
	var rows = b.length;

	var prefix = findPrefix(a, b);
	var suffix = prefix < cols && prefix < rows
		? findSuffix(a, b, prefix)
		: 0;

	var remove = suffix + prefix - 1;
	cols -= remove;
	rows -= remove;
	var matrix = createMatrix(cols, rows);

	for (var j = cols - 1; j >= 0; --j) {
		for (var i = rows - 1; i >= 0; --i) {
			matrix[i][j] = backtrack(matrix, a, b, prefix, j, i);
		}
	}

	return {
		prefix: prefix,
		matrix: matrix,
		suffix: suffix
	};
}

/**
 * Reduce a set of lcs changes previously created using compare
 * @param {function(result:*, type:number, i:number, j:number)} f
 *  reducer function, where:
 *  - result is the current reduce value,
 *  - type is the type of change: ADD, REMOVE, or SKIP
 *  - i is the index of the change location in b
 *  - j is the index of the change location in a
 * @param {*} r initial value
 * @param {object} lcs results returned by compare()
 * @returns {*} the final reduced value
 */
function reduce(f, r, lcs) {
	var i, j, k, op;

	var m = lcs.matrix;

	// Reduce shared prefix
	var l = lcs.prefix;
	for(i = 0;i < l; ++i) {
		r = f(r, SKIP, i, i);
	}

	// Reduce longest change span
	k = i;
	l = m.length;
	i = 0;
	j = 0;
	while(i < l) {
		op = m[i][j].type;
		r = f(r, op, i+k, j+k);

		switch(op) {
			case SKIP:  ++i; ++j; break;
			case RIGHT: ++j; break;
			case DOWN:  ++i; break;
		}
	}

	// Reduce shared suffix
	i += k;
	j += k;
	l = lcs.suffix;
	for(k = 0;k < l; ++k) {
		r = f(r, SKIP, i+k, j+k);
	}

	return r;
}

function findPrefix(a, b) {
	var i = 0;
	var l = Math.min(a.length, b.length);
	while(i < l && a[i] === b[i]) {
		++i;
	}
	return i;
}

function findSuffix(a, b) {
	var al = a.length - 1;
	var bl = b.length - 1;
	var l = Math.min(al, bl);
	var i = 0;
	while(i < l && a[al-i] === b[bl-i]) {
		++i;
	}
	return i;
}

function backtrack(matrix, a, b, start, j, i) {
	if (a[j+start] === b[i+start]) {
		return { value: matrix[i + 1][j + 1].value, type: SKIP };
	}
	if (matrix[i][j + 1].value < matrix[i + 1][j].value) {
		return { value: matrix[i][j + 1].value + 1, type: RIGHT };
	}

	return { value: matrix[i + 1][j].value + 1, type: DOWN };
}

function createMatrix (cols, rows) {
	var m = [], i, j, lastrow;

	// Fill the last row
	lastrow = m[rows] = [];
	for (j = 0; j<cols; ++j) {
		lastrow[j] = { value: cols - j, type: RIGHT };
	}

	// Fill the last col
	for (i = 0; i<rows; ++i) {
		m[i] = [];
		m[i][cols] = { value: rows - i, type: DOWN };
	}

	// Fill the last cell
	m[rows][cols] = { value: 0, type: SKIP };

	return m;
}


/***/ }),

/***/ "./node_modules/jiff/lib/patches.js":
/*!******************************************!*\
  !*** ./node_modules/jiff/lib/patches.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var jsonPointer = __webpack_require__(/*! ./jsonPointer */ "./node_modules/jiff/lib/jsonPointer.js");
var clone = __webpack_require__(/*! ./clone */ "./node_modules/jiff/lib/clone.js");
var deepEquals = __webpack_require__(/*! ./deepEquals */ "./node_modules/jiff/lib/deepEquals.js");
var commutePaths = __webpack_require__(/*! ./commutePaths */ "./node_modules/jiff/lib/commutePaths.js");

var array = __webpack_require__(/*! ./array */ "./node_modules/jiff/lib/array.js");

var TestFailedError = __webpack_require__(/*! ./TestFailedError */ "./node_modules/jiff/lib/TestFailedError.js");
var InvalidPatchOperationError = __webpack_require__(/*! ./InvalidPatchOperationError */ "./node_modules/jiff/lib/InvalidPatchOperationError.js");
var PatchNotInvertibleError = __webpack_require__(/*! ./PatchNotInvertibleError */ "./node_modules/jiff/lib/PatchNotInvertibleError.js");

var find = jsonPointer.find;
var parseArrayIndex = jsonPointer.parseArrayIndex;

exports.test = {
	apply: applyTest,
	inverse: invertTest,
	commute: commuteTest
};

exports.add = {
	apply: applyAdd,
	inverse: invertAdd,
	commute: commuteAddOrCopy
};

exports.remove = {
	apply: applyRemove,
	inverse: invertRemove,
	commute: commuteRemove
};

exports.replace = {
	apply: applyReplace,
	inverse: invertReplace,
	commute: commuteReplace
};

exports.move = {
	apply: applyMove,
	inverse: invertMove,
	commute: commuteMove
};

exports.copy = {
	apply: applyCopy,
	inverse: notInvertible,
	commute: commuteAddOrCopy
};

/**
 * Apply a test operation to x
 * @param {object|array} x
 * @param {object} test test operation
 * @throws {TestFailedError} if the test operation fails
 */

function applyTest(x, test, options) {
	var pointer = find(x, test.path, options.findContext, test.context);
	var target = pointer.target;
	var index, value;

	if(Array.isArray(target)) {
		index = parseArrayIndex(pointer.key);
		//index = findIndex(options.findContext, index, target, test.context);
		value = target[index];
	} else {
		value = pointer.key === void 0 ? pointer.target : pointer.target[pointer.key];
	}

	if(!deepEquals(value, test.value)) {
		throw new TestFailedError('test failed ' + JSON.stringify(test));
	}

	return x;
}

/**
 * Invert the provided test and add it to the inverted patch sequence
 * @param pr
 * @param test
 * @returns {number}
 */
function invertTest(pr, test) {
	pr.push(test);
	return 1;
}

function commuteTest(test, b) {
	if(test.path === b.path && b.op === 'remove') {
		throw new TypeError('Can\'t commute test,remove -> remove,test for same path');
	}

	if(b.op === 'test' || b.op === 'replace') {
		return [b, test];
	}

	return commutePaths(test, b);
}

/**
 * Apply an add operation to x
 * @param {object|array} x
 * @param {object} change add operation
 */
function applyAdd(x, change, options) {
	var pointer = find(x, change.path, options.findContext, change.context);

	if(notFound(pointer)) {
		throw new InvalidPatchOperationError('path does not exist ' + change.path);
	}

	if(change.value === void 0) {
		throw new InvalidPatchOperationError('missing value');
	}

	var val = clone(change.value);

	// If pointer refers to whole document, replace whole document
	if(pointer.key === void 0) {
		return val;
	}

	_add(pointer, val);
	return x;
}

function _add(pointer, value) {
	var target = pointer.target;

	if(Array.isArray(target)) {
		// '-' indicates 'append' to array
		if(pointer.key === '-') {
			target.push(value);
		} else if (pointer.key > target.length) {
			throw new InvalidPatchOperationError('target of add outside of array bounds')
		} else {
			target.splice(pointer.key, 0, value);
		}
	} else if(isValidObject(target)) {
		target[pointer.key] = value;
	} else {
		throw new InvalidPatchOperationError('target of add must be an object or array ' + pointer.key);
	}
}

function invertAdd(pr, add) {
	var context = add.context;
	if(context !== void 0) {
		context = {
			before: context.before,
			after: array.cons(add.value, context.after)
		}
	}
	pr.push({ op: 'test', path: add.path, value: add.value, context: context });
	pr.push({ op: 'remove', path: add.path, context: context });
	return 1;
}

function commuteAddOrCopy(add, b) {
	if(add.path === b.path && b.op === 'remove') {
		throw new TypeError('Can\'t commute add,remove -> remove,add for same path');
	}

	return commutePaths(add, b);
}

/**
 * Apply a replace operation to x
 * @param {object|array} x
 * @param {object} change replace operation
 */
function applyReplace(x, change, options) {
	var pointer = find(x, change.path, options.findContext, change.context);

	if(notFound(pointer) || missingValue(pointer)) {
		throw new InvalidPatchOperationError('path does not exist ' + change.path);
	}

	if(change.value === void 0) {
		throw new InvalidPatchOperationError('missing value');
	}

	var value = clone(change.value);

	// If pointer refers to whole document, replace whole document
	if(pointer.key === void 0) {
		return value;
	}

	var target = pointer.target;

	if(Array.isArray(target)) {
		target[parseArrayIndex(pointer.key)] = value;
	} else {
		target[pointer.key] = value;
	}

	return x;
}

function invertReplace(pr, c, i, patch) {
	var prev = patch[i-1];
	if(prev === void 0 || prev.op !== 'test' || prev.path !== c.path) {
		throw new PatchNotInvertibleError('cannot invert replace w/o test');
	}

	var context = prev.context;
	if(context !== void 0) {
		context = {
			before: context.before,
			after: array.cons(prev.value, array.tail(context.after))
		}
	}

	pr.push({ op: 'test', path: prev.path, value: c.value });
	pr.push({ op: 'replace', path: prev.path, value: prev.value });
	return 2;
}

function commuteReplace(replace, b) {
	if(replace.path === b.path && b.op === 'remove') {
		throw new TypeError('Can\'t commute replace,remove -> remove,replace for same path');
	}

	if(b.op === 'test' || b.op === 'replace') {
		return [b, replace];
	}

	return commutePaths(replace, b);
}

/**
 * Apply a remove operation to x
 * @param {object|array} x
 * @param {object} change remove operation
 */
function applyRemove(x, change, options) {
	var pointer = find(x, change.path, options.findContext, change.context);

	// key must exist for remove
	if(notFound(pointer) || pointer.target[pointer.key] === void 0) {
		throw new InvalidPatchOperationError('path does not exist ' + change.path);
	}

	_remove(pointer);
	return x;
}

function _remove (pointer) {
	var target = pointer.target;

	var removed;
	if (Array.isArray(target)) {
		removed = target.splice(parseArrayIndex(pointer.key), 1);
		return removed[0];

	} else if (isValidObject(target)) {
		removed = target[pointer.key];
		delete target[pointer.key];
		return removed;

	} else {
		throw new InvalidPatchOperationError('target of remove must be an object or array');
	}
}

function invertRemove(pr, c, i, patch) {
	var prev = patch[i-1];
	if(prev === void 0 || prev.op !== 'test' || prev.path !== c.path) {
		throw new PatchNotInvertibleError('cannot invert remove w/o test');
	}

	var context = prev.context;
	if(context !== void 0) {
		context = {
			before: context.before,
			after: array.tail(context.after)
		}
	}

	pr.push({ op: 'add', path: prev.path, value: prev.value, context: context });
	return 2;
}

function commuteRemove(remove, b) {
	if(remove.path === b.path && b.op === 'remove') {
		return [b, remove];
	}

	return commutePaths(remove, b);
}

/**
 * Apply a move operation to x
 * @param {object|array} x
 * @param {object} change move operation
 */
function applyMove(x, change, options) {
	if(jsonPointer.contains(change.path, change.from)) {
		throw new InvalidPatchOperationError('move.from cannot be ancestor of move.path');
	}

	var pto = find(x, change.path, options.findContext, change.context);
	var pfrom = find(x, change.from, options.findContext, change.fromContext);

	_add(pto, _remove(pfrom));
	return x;
}

function invertMove(pr, c) {
	pr.push({ op: 'move',
		path: c.from, context: c.fromContext,
		from: c.path, fromContext: c.context });
	return 1;
}

function commuteMove(move, b) {
	if(move.path === b.path && b.op === 'remove') {
		throw new TypeError('Can\'t commute move,remove -> move,replace for same path');
	}

	return commutePaths(move, b);
}

/**
 * Apply a copy operation to x
 * @param {object|array} x
 * @param {object} change copy operation
 */
function applyCopy(x, change, options) {
	var pto = find(x, change.path, options.findContext, change.context);
	var pfrom = find(x, change.from, options.findContext, change.fromContext);

	if(notFound(pfrom) || missingValue(pfrom)) {
		throw new InvalidPatchOperationError('copy.from must exist');
	}

	var target = pfrom.target;
	var value;

	if(Array.isArray(target)) {
		value = target[parseArrayIndex(pfrom.key)];
	} else {
		value = target[pfrom.key];
	}

	_add(pto, clone(value));
	return x;
}

// NOTE: Copy is not invertible
// See https://github.com/cujojs/jiff/issues/9
// This needs more thought. We may have to extend/amend JSON Patch.
// At first glance, this seems like it should just be a remove.
// However, that's not correct.  It violates the involution:
// invert(invert(p)) ~= p.  For example:
// invert(copy) -> remove
// invert(remove) -> add
// thus: invert(invert(copy)) -> add (DOH! this should be copy!)

function notInvertible(_, c) {
	throw new PatchNotInvertibleError('cannot invert ' + c.op);
}

function notFound (pointer) {
	return pointer === void 0 || (pointer.target == null && pointer.key !== void 0);
}

function missingValue(pointer) {
	return pointer.key !== void 0 && pointer.target[pointer.key] === void 0;
}

/**
 * Return true if x is a non-null object
 * @param {*} x
 * @returns {boolean}
 */
function isValidObject (x) {
	return x !== null && typeof x === 'object';
}


/***/ }),

/***/ "./node_modules/ur-jsonpatch/dist/esm/diff.js":
/*!****************************************************!*\
  !*** ./node_modules/ur-jsonpatch/dist/esm/diff.js ***!
  \****************************************************/
/*! exports provided: diff */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "diff", function() { return diff; });
/* harmony import */ var _typed_path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typed-path */ "./node_modules/ur-jsonpatch/dist/esm/typed-path.js");
/* harmony import */ var jiff__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jiff */ "./node_modules/jiff/jiff.js");
/* harmony import */ var jiff__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jiff__WEBPACK_IMPORTED_MODULE_1__);


function diff(from, to, basePath) {
    var operations = Object(jiff__WEBPACK_IMPORTED_MODULE_1__["diff"])(from, to, {
        invertible: false // Do not include test operations at the moment
    });
    var resolvedBasePath = '';
    if (basePath) {
        resolvedBasePath = Object(_typed_path__WEBPACK_IMPORTED_MODULE_0__["resolvePath"])(basePath);
    }
    if (resolvedBasePath.endsWith('/')) {
        resolvedBasePath = resolvedBasePath.substr(0, resolvedBasePath.length - 1);
    }
    for (var _i = 0, operations_1 = operations; _i < operations_1.length; _i++) {
        var operation = operations_1[_i];
        operation.path = resolvedBasePath + operation.path;
        if (operation.from) {
            operation.from = resolvedBasePath + operation.from;
        }
        // jiff.diff inserts a context property for each operation
        delete operation.context;
    }
    return operations;
}
//# sourceMappingURL=diff.js.map

/***/ }),

/***/ "./node_modules/ur-jsonpatch/dist/esm/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/ur-jsonpatch/dist/esm/index.js ***!
  \*****************************************************/
/*! exports provided: diff, typedPath, Patch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _diff__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./diff */ "./node_modules/ur-jsonpatch/dist/esm/diff.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "diff", function() { return _diff__WEBPACK_IMPORTED_MODULE_0__["diff"]; });

/* harmony import */ var _typed_path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./typed-path */ "./node_modules/ur-jsonpatch/dist/esm/typed-path.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "typedPath", function() { return _typed_path__WEBPACK_IMPORTED_MODULE_1__["typedPath"]; });

/* harmony import */ var _patch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./patch */ "./node_modules/ur-jsonpatch/dist/esm/patch.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Patch", function() { return _patch__WEBPACK_IMPORTED_MODULE_2__["Patch"]; });




//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/ur-jsonpatch/dist/esm/patch.js":
/*!*****************************************************!*\
  !*** ./node_modules/ur-jsonpatch/dist/esm/patch.js ***!
  \*****************************************************/
/*! exports provided: Patch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Patch", function() { return Patch; });
/* harmony import */ var _typed_path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typed-path */ "./node_modules/ur-jsonpatch/dist/esm/typed-path.js");

var Patch = /** @class */ (function () {
    function Patch() {
        this.operations = [];
    }
    Patch.prototype.add = function (path, value) {
        var resolvedPath = Object(_typed_path__WEBPACK_IMPORTED_MODULE_0__["resolvePath"])(path);
        if (!/^.*[0-9]$/.test(resolvedPath)) {
            resolvedPath += "/-"; // Append
        }
        this.operations.push({ op: 'add', path: resolvedPath, value: value });
        return this;
    };
    Patch.prototype.remove = function (path) {
        this.operations.push({ op: 'remove', path: Object(_typed_path__WEBPACK_IMPORTED_MODULE_0__["resolvePath"])(path) });
        return this;
    };
    Patch.prototype.replace = function (path, value) {
        this.operations.push({ op: 'replace', path: Object(_typed_path__WEBPACK_IMPORTED_MODULE_0__["resolvePath"])(path), value: value });
        return this;
    };
    Patch.prototype.copy = function (from, path) {
        this.operations.push({ op: 'copy', from: Object(_typed_path__WEBPACK_IMPORTED_MODULE_0__["resolvePath"])(from), path: Object(_typed_path__WEBPACK_IMPORTED_MODULE_0__["resolvePath"])(path) });
        return this;
    };
    Patch.prototype.move = function (from, path) {
        this.operations.push({ op: 'move', from: Object(_typed_path__WEBPACK_IMPORTED_MODULE_0__["resolvePath"])(from), path: Object(_typed_path__WEBPACK_IMPORTED_MODULE_0__["resolvePath"])(path) });
        return this;
    };
    Patch.prototype.test = function (path, value) {
        this.operations.push({ op: 'test', path: Object(_typed_path__WEBPACK_IMPORTED_MODULE_0__["resolvePath"])(path), value: value });
        return this;
    };
    return Patch;
}());

//# sourceMappingURL=patch.js.map

/***/ }),

/***/ "./node_modules/ur-jsonpatch/dist/esm/typed-path.js":
/*!**********************************************************!*\
  !*** ./node_modules/ur-jsonpatch/dist/esm/typed-path.js ***!
  \**********************************************************/
/*! exports provided: typedPath, resolvePath */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "typedPath", function() { return typedPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolvePath", function() { return resolvePath; });
// https://github.com/Microsoft/TypeScript/issues/3496#issuecomment-128553540
var toStringMethods = [
    'toString',
    'path',
    Symbol.toStringTag,
    'valueOf'
];
function pathToString(path) {
    return path.reduce(function (accumulated, current) {
        if (+current === +current) {
            return accumulated + ("/" + current);
        }
        else if (accumulated !== '/') {
            return accumulated + ("/" + current);
        }
        else {
            return accumulated + current;
        }
    }, '/');
}
function typedPath(path) {
    if (path === void 0) { path = []; }
    return new Proxy({}, {
        get: function (target, name) {
            if (toStringMethods.includes(name)) {
                return function () { return pathToString(path); };
            }
            return typedPath(path.concat([name.toString()]));
        }
    });
}
function resolvePath(path) {
    if (typeof path === 'string') {
        return path;
    }
    else if (isBuiltPath(path)) {
        return path.path();
    }
    else {
        return path(typedPath()).path();
    }
}
function isBuiltPath(path) {
    return typeof path.path === 'function';
}
//# sourceMappingURL=typed-path.js.map

/***/ }),

/***/ "@fortawesome/free-solid-svg-icons/faArrowRight":
/*!************************************************************************!*\
  !*** ./node_modules/@fortawesome/free-solid-svg-icons/faArrowRight.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, '__esModule', { value: true });
var prefix = 'fas';
var iconName = 'arrow-right';
var width = 448;
var height = 512;
var ligatures = [];
var unicode = 'f061';
var svgPathData = 'M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z';

exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [
    width,
    height,
    ligatures,
    unicode,
    svgPathData
  ]};

exports.faArrowRight = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = ligatures;
exports.unicode = unicode;
exports.svgPathData = svgPathData;

/***/ }),

/***/ "@fortawesome/free-solid-svg-icons/faEdit":
/*!******************************************************************!*\
  !*** ./node_modules/@fortawesome/free-solid-svg-icons/faEdit.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, '__esModule', { value: true });
var prefix = 'fas';
var iconName = 'edit';
var width = 576;
var height = 512;
var ligatures = [];
var unicode = 'f044';
var svgPathData = 'M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z';

exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [
    width,
    height,
    ligatures,
    unicode,
    svgPathData
  ]};

exports.faEdit = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = ligatures;
exports.unicode = unicode;
exports.svgPathData = svgPathData;

/***/ }),

/***/ "@fortawesome/free-solid-svg-icons/faList":
/*!******************************************************************!*\
  !*** ./node_modules/@fortawesome/free-solid-svg-icons/faList.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, '__esModule', { value: true });
var prefix = 'fas';
var iconName = 'list';
var width = 512;
var height = 512;
var ligatures = [];
var unicode = 'f03a';
var svgPathData = 'M128 116V76c0-8.837 7.163-16 16-16h352c8.837 0 16 7.163 16 16v40c0 8.837-7.163 16-16 16H144c-8.837 0-16-7.163-16-16zm16 176h352c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H144c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h352c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H144c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zM16 144h64c8.837 0 16-7.163 16-16V64c0-8.837-7.163-16-16-16H16C7.163 48 0 55.163 0 64v64c0 8.837 7.163 16 16 16zm0 160h64c8.837 0 16-7.163 16-16v-64c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v64c0 8.837 7.163 16 16 16zm0 160h64c8.837 0 16-7.163 16-16v-64c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v64c0 8.837 7.163 16 16 16z';

exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [
    width,
    height,
    ligatures,
    unicode,
    svgPathData
  ]};

exports.faList = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = ligatures;
exports.unicode = unicode;
exports.svgPathData = svgPathData;

/***/ }),

/***/ "@fortawesome/free-solid-svg-icons/faPlus":
/*!******************************************************************!*\
  !*** ./node_modules/@fortawesome/free-solid-svg-icons/faPlus.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, '__esModule', { value: true });
var prefix = 'fas';
var iconName = 'plus';
var width = 448;
var height = 512;
var ligatures = [];
var unicode = 'f067';
var svgPathData = 'M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z';

exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [
    width,
    height,
    ligatures,
    unicode,
    svgPathData
  ]};

exports.faPlus = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = ligatures;
exports.unicode = unicode;
exports.svgPathData = svgPathData;

/***/ }),

/***/ "@fortawesome/free-solid-svg-icons/faSave":
/*!******************************************************************!*\
  !*** ./node_modules/@fortawesome/free-solid-svg-icons/faSave.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, '__esModule', { value: true });
var prefix = 'fas';
var iconName = 'save';
var width = 448;
var height = 512;
var ligatures = [];
var unicode = 'f0c7';
var svgPathData = 'M433.941 129.941l-83.882-83.882A48 48 0 0 0 316.118 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V163.882a48 48 0 0 0-14.059-33.941zM224 416c-35.346 0-64-28.654-64-64 0-35.346 28.654-64 64-64s64 28.654 64 64c0 35.346-28.654 64-64 64zm96-304.52V212c0 6.627-5.373 12-12 12H76c-6.627 0-12-5.373-12-12V108c0-6.627 5.373-12 12-12h228.52c3.183 0 6.235 1.264 8.485 3.515l3.48 3.48A11.996 11.996 0 0 1 320 111.48z';

exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [
    width,
    height,
    ligatures,
    unicode,
    svgPathData
  ]};

exports.faSave = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = ligatures;
exports.unicode = unicode;
exports.svgPathData = svgPathData;

/***/ }),

/***/ "@fortawesome/free-solid-svg-icons/faTimes":
/*!*******************************************************************!*\
  !*** ./node_modules/@fortawesome/free-solid-svg-icons/faTimes.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, '__esModule', { value: true });
var prefix = 'fas';
var iconName = 'times';
var width = 352;
var height = 512;
var ligatures = [];
var unicode = 'f00d';
var svgPathData = 'M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z';

exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [
    width,
    height,
    ligatures,
    unicode,
    svgPathData
  ]};

exports.faTimes = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = ligatures;
exports.unicode = unicode;
exports.svgPathData = svgPathData;

/***/ }),

/***/ "@fortawesome/free-solid-svg-icons/faTrash":
/*!*******************************************************************!*\
  !*** ./node_modules/@fortawesome/free-solid-svg-icons/faTrash.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, '__esModule', { value: true });
var prefix = 'fas';
var iconName = 'trash';
var width = 448;
var height = 512;
var ligatures = [];
var unicode = 'f1f8';
var svgPathData = 'M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z';

exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [
    width,
    height,
    ligatures,
    unicode,
    svgPathData
  ]};

exports.faTrash = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = ligatures;
exports.unicode = unicode;
exports.svgPathData = svgPathData;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvamlmZi9qaWZmLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9qaWZmL2xpYi9JbnZhbGlkUGF0Y2hPcGVyYXRpb25FcnJvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvamlmZi9saWIvUGF0Y2hOb3RJbnZlcnRpYmxlRXJyb3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ppZmYvbGliL1Rlc3RGYWlsZWRFcnJvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvamlmZi9saWIvYXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ppZmYvbGliL2Nsb25lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9qaWZmL2xpYi9jb21tdXRlUGF0aHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ppZmYvbGliL2RlZXBFcXVhbHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ppZmYvbGliL2ludmVyc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ppZmYvbGliL2pzb25QYXRjaC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvamlmZi9saWIvanNvblBvaW50ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ppZmYvbGliL2pzb25Qb2ludGVyUGFyc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ppZmYvbGliL2xjcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvamlmZi9saWIvcGF0Y2hlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdXItanNvbnBhdGNoL2Rpc3QvZXNtL2RpZmYuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3VyLWpzb25wYXRjaC9kaXN0L2VzbS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdXItanNvbnBhdGNoL2Rpc3QvZXNtL3BhdGNoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91ci1qc29ucGF0Y2gvZGlzdC9lc20vdHlwZWQtcGF0aC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhQXJyb3dSaWdodC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhRWRpdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhTGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhUGx1cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhU2F2ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhVGltZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYVRyYXNoLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxVQUFVLG1CQUFPLENBQUMsaURBQVc7QUFDN0IsWUFBWSxtQkFBTyxDQUFDLHFEQUFhO0FBQ2pDLFlBQVksbUJBQU8sQ0FBQyw2REFBaUI7QUFDckMsY0FBYyxtQkFBTyxDQUFDLHlEQUFlO0FBQ3JDLGtCQUFrQixtQkFBTyxDQUFDLGlFQUFtQjtBQUM3Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUNBQXFDLG1CQUFPLENBQUMsK0ZBQWtDO0FBQy9FLDBCQUEwQixtQkFBTyxDQUFDLHlFQUF1QjtBQUN6RCxrQ0FB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Q0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBVTtBQUNWOztBQUVBO0FBQ0EsVUFBVTtBQUNWOztBQUVBO0FBQ0EsU0FBUztBQUNULEM7Ozs7Ozs7Ozs7O0FDakxBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLHdDQUF3QztBQUNuRCxXQUFXLHdDQUF3QztBQUNuRCxhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZUFBZSxZQUFZO0FBQzNCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FB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O0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQzs7Ozs7Ozs7Ozs7O0FDNUJhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQzs7Ozs7Ozs7Ozs7O0FDNUJhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQzs7Ozs7Ozs7Ozs7O0FDNUJhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQzs7Ozs7Ozs7Ozs7O0FDNUJhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQyIsImZpbGUiOiJ2ZW5kb3JzfnNldHRpbmdzLjBjZTAwMWFkNTQ4ZTAxOGFlZjZhLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBsaWNlbnNlIE1JVCBMaWNlbnNlIChjKSBjb3B5cmlnaHQgMjAxMC0yMDE0IG9yaWdpbmFsIGF1dGhvciBvciBhdXRob3JzICovXG4vKiogQGF1dGhvciBCcmlhbiBDYXZhbGllciAqL1xuLyoqIEBhdXRob3IgSm9obiBIYW5uICovXG5cbnZhciBsY3MgPSByZXF1aXJlKCcuL2xpYi9sY3MnKTtcbnZhciBhcnJheSA9IHJlcXVpcmUoJy4vbGliL2FycmF5Jyk7XG52YXIgcGF0Y2ggPSByZXF1aXJlKCcuL2xpYi9qc29uUGF0Y2gnKTtcbnZhciBpbnZlcnNlID0gcmVxdWlyZSgnLi9saWIvaW52ZXJzZScpO1xudmFyIGpzb25Qb2ludGVyID0gcmVxdWlyZSgnLi9saWIvanNvblBvaW50ZXInKTtcbnZhciBlbmNvZGVTZWdtZW50ID0ganNvblBvaW50ZXIuZW5jb2RlU2VnbWVudDtcblxuZXhwb3J0cy5kaWZmID0gZGlmZjtcbmV4cG9ydHMucGF0Y2ggPSBwYXRjaC5hcHBseTtcbmV4cG9ydHMucGF0Y2hJblBsYWNlID0gcGF0Y2guYXBwbHlJblBsYWNlO1xuZXhwb3J0cy5pbnZlcnNlID0gaW52ZXJzZTtcbmV4cG9ydHMuY2xvbmUgPSBwYXRjaC5jbG9uZTtcblxuLy8gRXJyb3JzXG5leHBvcnRzLkludmFsaWRQYXRjaE9wZXJhdGlvbkVycm9yID0gcmVxdWlyZSgnLi9saWIvSW52YWxpZFBhdGNoT3BlcmF0aW9uRXJyb3InKTtcbmV4cG9ydHMuVGVzdEZhaWxlZEVycm9yID0gcmVxdWlyZSgnLi9saWIvVGVzdEZhaWxlZEVycm9yJyk7XG5leHBvcnRzLlBhdGNoTm90SW52ZXJ0aWJsZUVycm9yID0gcmVxdWlyZSgnLi9saWIvUGF0Y2hOb3RJbnZlcnRpYmxlRXJyb3InKTtcblxudmFyIGlzVmFsaWRPYmplY3QgPSBwYXRjaC5pc1ZhbGlkT2JqZWN0O1xudmFyIGRlZmF1bHRIYXNoID0gcGF0Y2guZGVmYXVsdEhhc2g7XG5cbi8qKlxuICogQ29tcHV0ZSBhIEpTT04gUGF0Y2ggcmVwcmVzZW50aW5nIHRoZSBkaWZmZXJlbmNlcyBiZXR3ZWVuIGEgYW5kIGIuXG4gKiBAcGFyYW0ge29iamVjdHxhcnJheXxzdHJpbmd8bnVtYmVyfG51bGx9IGFcbiAqIEBwYXJhbSB7b2JqZWN0fGFycmF5fHN0cmluZ3xudW1iZXJ8bnVsbH0gYlxuICogQHBhcmFtIHs/ZnVuY3Rpb258P29iamVjdH0gb3B0aW9ucyBpZiBhIGZ1bmN0aW9uLCBzZWUgb3B0aW9ucy5oYXNoXG4gKiBAcGFyYW0gez9mdW5jdGlvbih4OiopOlN0cmluZ3xOdW1iZXJ9IG9wdGlvbnMuaGFzaCB1c2VkIHRvIGhhc2ggYXJyYXkgaXRlbXNcbiAqICBpbiBvcmRlciB0byByZWNvZ25pemUgaWRlbnRpY2FsIG9iamVjdHMsIGRlZmF1bHRzIHRvIEpTT04uc3RyaW5naWZ5XG4gKiBAcGFyYW0gez9mdW5jdGlvbihpbmRleDpOdW1iZXIsIGFycmF5OkFycmF5KTpvYmplY3R9IG9wdGlvbnMubWFrZUNvbnRleHRcbiAqICB1c2VkIHRvIGdlbmVyYXRlIHBhdGNoIGNvbnRleHQuIElmIG5vdCBwcm92aWRlZCwgY29udGV4dCB3aWxsIG5vdCBiZSBnZW5lcmF0ZWRcbiAqIEByZXR1cm5zIHthcnJheX0gSlNPTiBQYXRjaCBzdWNoIHRoYXQgcGF0Y2goZGlmZihhLCBiKSwgYSkgfiBiXG4gKi9cbmZ1bmN0aW9uIGRpZmYoYSwgYiwgb3B0aW9ucykge1xuXHRyZXR1cm4gYXBwZW5kQ2hhbmdlcyhhLCBiLCAnJywgaW5pdFN0YXRlKG9wdGlvbnMsIFtdKSkucGF0Y2g7XG59XG5cbi8qKlxuICogQ3JlYXRlIGluaXRpYWwgZGlmZiBzdGF0ZSBmcm9tIHRoZSBwcm92aWRlZCBvcHRpb25zXG4gKiBAcGFyYW0gez9mdW5jdGlvbnw/b2JqZWN0fSBvcHRpb25zIEBzZWUgZGlmZiBvcHRpb25zIGFib3ZlXG4gKiBAcGFyYW0ge2FycmF5fSBwYXRjaCBhbiBlbXB0eSBvciBleGlzdGluZyBKU09OIFBhdGNoIGFycmF5IGludG8gd2hpY2hcbiAqICB0aGUgZGlmZiBzaG91bGQgZ2VuZXJhdGUgbmV3IHBhdGNoIG9wZXJhdGlvbnNcbiAqIEByZXR1cm5zIHtvYmplY3R9IGluaXRpYWxpemVkIGRpZmYgc3RhdGVcbiAqL1xuZnVuY3Rpb24gaW5pdFN0YXRlKG9wdGlvbnMsIHBhdGNoKSB7XG5cdGlmKHR5cGVvZiBvcHRpb25zID09PSAnb2JqZWN0Jykge1xuXHRcdHJldHVybiB7XG5cdFx0XHRwYXRjaDogcGF0Y2gsXG5cdFx0XHRoYXNoOiBvckVsc2UoaXNGdW5jdGlvbiwgb3B0aW9ucy5oYXNoLCBkZWZhdWx0SGFzaCksXG5cdFx0XHRtYWtlQ29udGV4dDogb3JFbHNlKGlzRnVuY3Rpb24sIG9wdGlvbnMubWFrZUNvbnRleHQsIGRlZmF1bHRDb250ZXh0KSxcblx0XHRcdGludmVydGlibGU6ICEob3B0aW9ucy5pbnZlcnRpYmxlID09PSBmYWxzZSlcblx0XHR9O1xuXHR9IGVsc2Uge1xuXHRcdHJldHVybiB7XG5cdFx0XHRwYXRjaDogcGF0Y2gsXG5cdFx0XHRoYXNoOiBvckVsc2UoaXNGdW5jdGlvbiwgb3B0aW9ucywgZGVmYXVsdEhhc2gpLFxuXHRcdFx0bWFrZUNvbnRleHQ6IGRlZmF1bHRDb250ZXh0LFxuXHRcdFx0aW52ZXJ0aWJsZTogdHJ1ZVxuXHRcdH07XG5cdH1cbn1cblxuLyoqXG4gKiBHaXZlbiB0d28gSlNPTiB2YWx1ZXMgKG9iamVjdCwgYXJyYXksIG51bWJlciwgc3RyaW5nLCBldGMuKSwgZmluZCB0aGVpclxuICogZGlmZmVyZW5jZXMgYW5kIGFwcGVuZCB0aGVtIHRvIHRoZSBkaWZmIHN0YXRlXG4gKiBAcGFyYW0ge29iamVjdHxhcnJheXxzdHJpbmd8bnVtYmVyfG51bGx9IGFcbiAqIEBwYXJhbSB7b2JqZWN0fGFycmF5fHN0cmluZ3xudW1iZXJ8bnVsbH0gYlxuICogQHBhcmFtIHtzdHJpbmd9IHBhdGhcbiAqIEBwYXJhbSB7b2JqZWN0fSBzdGF0ZVxuICogQHJldHVybnMge09iamVjdH0gdXBkYXRlZCBkaWZmIHN0YXRlXG4gKi9cbmZ1bmN0aW9uIGFwcGVuZENoYW5nZXMoYSwgYiwgcGF0aCwgc3RhdGUpIHtcblx0aWYoQXJyYXkuaXNBcnJheShhKSAmJiBBcnJheS5pc0FycmF5KGIpKSB7XG5cdFx0cmV0dXJuIGFwcGVuZEFycmF5Q2hhbmdlcyhhLCBiLCBwYXRoLCBzdGF0ZSk7XG5cdH1cblxuXHRpZihpc1ZhbGlkT2JqZWN0KGEpICYmIGlzVmFsaWRPYmplY3QoYikpIHtcblx0XHRyZXR1cm4gYXBwZW5kT2JqZWN0Q2hhbmdlcyhhLCBiLCBwYXRoLCBzdGF0ZSk7XG5cdH1cblxuXHRyZXR1cm4gYXBwZW5kVmFsdWVDaGFuZ2VzKGEsIGIsIHBhdGgsIHN0YXRlKTtcbn1cblxuLyoqXG4gKiBHaXZlbiB0d28gb2JqZWN0cywgZmluZCB0aGVpciBkaWZmZXJlbmNlcyBhbmQgYXBwZW5kIHRoZW0gdG8gdGhlIGRpZmYgc3RhdGVcbiAqIEBwYXJhbSB7b2JqZWN0fSBvMVxuICogQHBhcmFtIHtvYmplY3R9IG8yXG4gKiBAcGFyYW0ge3N0cmluZ30gcGF0aFxuICogQHBhcmFtIHtvYmplY3R9IHN0YXRlXG4gKiBAcmV0dXJucyB7T2JqZWN0fSB1cGRhdGVkIGRpZmYgc3RhdGVcbiAqL1xuZnVuY3Rpb24gYXBwZW5kT2JqZWN0Q2hhbmdlcyhvMSwgbzIsIHBhdGgsIHN0YXRlKSB7XG5cdHZhciBrZXlzID0gT2JqZWN0LmtleXMobzIpO1xuXHR2YXIgcGF0Y2ggPSBzdGF0ZS5wYXRjaDtcblx0dmFyIGksIGtleTtcblxuXHRmb3IoaT1rZXlzLmxlbmd0aC0xOyBpPj0wOyAtLWkpIHtcblx0XHRrZXkgPSBrZXlzW2ldO1xuXHRcdHZhciBrZXlQYXRoID0gcGF0aCArICcvJyArIGVuY29kZVNlZ21lbnQoa2V5KTtcblx0XHRpZihvMVtrZXldICE9PSB2b2lkIDApIHtcblx0XHRcdGFwcGVuZENoYW5nZXMobzFba2V5XSwgbzJba2V5XSwga2V5UGF0aCwgc3RhdGUpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRwYXRjaC5wdXNoKHsgb3A6ICdhZGQnLCBwYXRoOiBrZXlQYXRoLCB2YWx1ZTogbzJba2V5XSB9KTtcblx0XHR9XG5cdH1cblxuXHRrZXlzID0gT2JqZWN0LmtleXMobzEpO1xuXHRmb3IoaT1rZXlzLmxlbmd0aC0xOyBpPj0wOyAtLWkpIHtcblx0XHRrZXkgPSBrZXlzW2ldO1xuXHRcdGlmKG8yW2tleV0gPT09IHZvaWQgMCkge1xuXHRcdFx0dmFyIHAgPSBwYXRoICsgJy8nICsgZW5jb2RlU2VnbWVudChrZXkpO1xuXHRcdFx0aWYoc3RhdGUuaW52ZXJ0aWJsZSkge1xuXHRcdFx0XHRwYXRjaC5wdXNoKHsgb3A6ICd0ZXN0JywgcGF0aDogcCwgdmFsdWU6IG8xW2tleV0gfSk7XG5cdFx0XHR9XG5cdFx0XHRwYXRjaC5wdXNoKHsgb3A6ICdyZW1vdmUnLCBwYXRoOiBwIH0pO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBzdGF0ZTtcbn1cblxuLyoqXG4gKiBHaXZlbiB0d28gYXJyYXlzLCBmaW5kIHRoZWlyIGRpZmZlcmVuY2VzIGFuZCBhcHBlbmQgdGhlbSB0byB0aGUgZGlmZiBzdGF0ZVxuICogQHBhcmFtIHthcnJheX0gYTFcbiAqIEBwYXJhbSB7YXJyYXl9IGEyXG4gKiBAcGFyYW0ge3N0cmluZ30gcGF0aFxuICogQHBhcmFtIHtvYmplY3R9IHN0YXRlXG4gKiBAcmV0dXJucyB7T2JqZWN0fSB1cGRhdGVkIGRpZmYgc3RhdGVcbiAqL1xuZnVuY3Rpb24gYXBwZW5kQXJyYXlDaGFuZ2VzKGExLCBhMiwgcGF0aCwgc3RhdGUpIHtcblx0dmFyIGExaGFzaCA9IGFycmF5Lm1hcChzdGF0ZS5oYXNoLCBhMSk7XG5cdHZhciBhMmhhc2ggPSBhcnJheS5tYXAoc3RhdGUuaGFzaCwgYTIpO1xuXG5cdHZhciBsY3NNYXRyaXggPSBsY3MuY29tcGFyZShhMWhhc2gsIGEyaGFzaCk7XG5cblx0cmV0dXJuIGxjc1RvSnNvblBhdGNoKGExLCBhMiwgcGF0aCwgc3RhdGUsIGxjc01hdHJpeCk7XG59XG5cbi8qKlxuICogVHJhbnNmb3JtIGFuIGxjc01hdHJpeCBpbnRvIEpTT04gUGF0Y2ggb3BlcmF0aW9ucyBhbmQgYXBwZW5kXG4gKiB0aGVtIHRvIHN0YXRlLnBhdGNoLCByZWN1cnNpbmcgaW50byBhcnJheSBlbGVtZW50cyBhcyBuZWNlc3NhcnlcbiAqIEBwYXJhbSB7YXJyYXl9IGExXG4gKiBAcGFyYW0ge2FycmF5fSBhMlxuICogQHBhcmFtIHtzdHJpbmd9IHBhdGhcbiAqIEBwYXJhbSB7b2JqZWN0fSBzdGF0ZVxuICogQHBhcmFtIHtvYmplY3R9IGxjc01hdHJpeFxuICogQHJldHVybnMge29iamVjdH0gbmV3IHN0YXRlIHdpdGggSlNPTiBQYXRjaCBvcGVyYXRpb25zIGFkZGVkIGJhc2VkXG4gKiAgb24gdGhlIHByb3ZpZGVkIGxjc01hdHJpeFxuICovXG5mdW5jdGlvbiBsY3NUb0pzb25QYXRjaChhMSwgYTIsIHBhdGgsIHN0YXRlLCBsY3NNYXRyaXgpIHtcblx0dmFyIG9mZnNldCA9IDA7XG5cdHJldHVybiBsY3MucmVkdWNlKGZ1bmN0aW9uKHN0YXRlLCBvcCwgaSwgaikge1xuXHRcdHZhciBsYXN0LCBjb250ZXh0O1xuXHRcdHZhciBwYXRjaCA9IHN0YXRlLnBhdGNoO1xuXHRcdHZhciBwID0gcGF0aCArICcvJyArIChqICsgb2Zmc2V0KTtcblxuXHRcdGlmIChvcCA9PT0gbGNzLlJFTU9WRSkge1xuXHRcdFx0Ly8gQ29hbGVzY2UgYWRqYWNlbnQgcmVtb3ZlICsgYWRkIGludG8gcmVwbGFjZVxuXHRcdFx0bGFzdCA9IHBhdGNoW3BhdGNoLmxlbmd0aC0xXTtcblx0XHRcdGNvbnRleHQgPSBzdGF0ZS5tYWtlQ29udGV4dChqLCBhMSk7XG5cblx0XHRcdGlmKHN0YXRlLmludmVydGlibGUpIHtcblx0XHRcdFx0cGF0Y2gucHVzaCh7IG9wOiAndGVzdCcsIHBhdGg6IHAsIHZhbHVlOiBhMVtqXSwgY29udGV4dDogY29udGV4dCB9KTtcblx0XHRcdH1cblxuXHRcdFx0aWYobGFzdCAhPT0gdm9pZCAwICYmIGxhc3Qub3AgPT09ICdhZGQnICYmIGxhc3QucGF0aCA9PT0gcCkge1xuXHRcdFx0XHRsYXN0Lm9wID0gJ3JlcGxhY2UnO1xuXHRcdFx0XHRsYXN0LmNvbnRleHQgPSBjb250ZXh0O1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cGF0Y2gucHVzaCh7IG9wOiAncmVtb3ZlJywgcGF0aDogcCwgY29udGV4dDogY29udGV4dCB9KTtcblx0XHRcdH1cblxuXHRcdFx0b2Zmc2V0IC09IDE7XG5cblx0XHR9IGVsc2UgaWYgKG9wID09PSBsY3MuQUREKSB7XG5cdFx0XHQvLyBTZWUgaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzY5MDIjc2VjdGlvbi00LjFcblx0XHRcdC8vIE1heSB1c2UgZWl0aGVyIGluZGV4PT09bGVuZ3RoICpvciogJy0nIHRvIGluZGljYXRlIGFwcGVuZGluZyB0byBhcnJheVxuXHRcdFx0cGF0Y2gucHVzaCh7IG9wOiAnYWRkJywgcGF0aDogcCwgdmFsdWU6IGEyW2ldLFxuXHRcdFx0XHRjb250ZXh0OiBzdGF0ZS5tYWtlQ29udGV4dChqLCBhMSlcblx0XHRcdH0pO1xuXG5cdFx0XHRvZmZzZXQgKz0gMTtcblxuXHRcdH0gZWxzZSB7XG5cdFx0XHRhcHBlbmRDaGFuZ2VzKGExW2pdLCBhMltpXSwgcCwgc3RhdGUpO1xuXHRcdH1cblxuXHRcdHJldHVybiBzdGF0ZTtcblxuXHR9LCBzdGF0ZSwgbGNzTWF0cml4KTtcbn1cblxuLyoqXG4gKiBHaXZlbiB0d28gbnVtYmVyfHN0cmluZ3xudWxsIHZhbHVlcywgaWYgdGhleSBkaWZmZXIsIGFwcGVuZCB0byBkaWZmIHN0YXRlXG4gKiBAcGFyYW0ge3N0cmluZ3xudW1iZXJ8bnVsbH0gYVxuICogQHBhcmFtIHtzdHJpbmd8bnVtYmVyfG51bGx9IGJcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoXG4gKiBAcGFyYW0ge29iamVjdH0gc3RhdGVcbiAqIEByZXR1cm5zIHtvYmplY3R9IHVwZGF0ZWQgZGlmZiBzdGF0ZVxuICovXG5mdW5jdGlvbiBhcHBlbmRWYWx1ZUNoYW5nZXMoYSwgYiwgcGF0aCwgc3RhdGUpIHtcblx0aWYoYSAhPT0gYikge1xuXHRcdGlmKHN0YXRlLmludmVydGlibGUpIHtcblx0XHRcdHN0YXRlLnBhdGNoLnB1c2goeyBvcDogJ3Rlc3QnLCBwYXRoOiBwYXRoLCB2YWx1ZTogYSB9KTtcblx0XHR9XG5cblx0XHRzdGF0ZS5wYXRjaC5wdXNoKHsgb3A6ICdyZXBsYWNlJywgcGF0aDogcGF0aCwgdmFsdWU6IGIgfSk7XG5cdH1cblxuXHRyZXR1cm4gc3RhdGU7XG59XG5cbi8qKlxuICogQHBhcmFtIHtmdW5jdGlvbn0gcHJlZGljYXRlXG4gKiBAcGFyYW0geyp9IHhcbiAqIEBwYXJhbSB7Kn0geVxuICogQHJldHVybnMgeyp9IHggaWYgcHJlZGljYXRlKHgpIGlzIHRydXRoeSwgb3RoZXJ3aXNlIHlcbiAqL1xuZnVuY3Rpb24gb3JFbHNlKHByZWRpY2F0ZSwgeCwgeSkge1xuXHRyZXR1cm4gcHJlZGljYXRlKHgpID8geCA6IHk7XG59XG5cbi8qKlxuICogRGVmYXVsdCBwYXRjaCBjb250ZXh0IGdlbmVyYXRvclxuICogQHJldHVybnMge3VuZGVmaW5lZH0gdW5kZWZpbmVkIGNvbnRleHRcbiAqL1xuZnVuY3Rpb24gZGVmYXVsdENvbnRleHQoKSB7XG5cdHJldHVybiB2b2lkIDA7XG59XG5cbi8qKlxuICogQHBhcmFtIHsqfSB4XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gdHJ1ZSBpZiB4IGlzIGEgZnVuY3Rpb24sIGZhbHNlIG90aGVyd2lzZVxuICovXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHgpIHtcblx0cmV0dXJuIHR5cGVvZiB4ID09PSAnZnVuY3Rpb24nO1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBJbnZhbGlkUGF0Y2hPcGVyYXRpb25FcnJvcjtcblxuZnVuY3Rpb24gSW52YWxpZFBhdGNoT3BlcmF0aW9uRXJyb3IobWVzc2FnZSkge1xuXHRFcnJvci5jYWxsKHRoaXMpO1xuXHR0aGlzLm5hbWUgPSB0aGlzLmNvbnN0cnVjdG9yLm5hbWU7XG5cdHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG5cdGlmKHR5cGVvZiBFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKHRoaXMsIHRoaXMuY29uc3RydWN0b3IpO1xuXHR9XG59XG5cbkludmFsaWRQYXRjaE9wZXJhdGlvbkVycm9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRXJyb3IucHJvdG90eXBlKTtcbkludmFsaWRQYXRjaE9wZXJhdGlvbkVycm9yLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEludmFsaWRQYXRjaE9wZXJhdGlvbkVycm9yOyIsIm1vZHVsZS5leHBvcnRzID0gUGF0Y2hOb3RJbnZlcnRpYmxlRXJyb3I7XG5cbmZ1bmN0aW9uIFBhdGNoTm90SW52ZXJ0aWJsZUVycm9yKG1lc3NhZ2UpIHtcblx0RXJyb3IuY2FsbCh0aGlzKTtcblx0dGhpcy5uYW1lID0gdGhpcy5jb25zdHJ1Y3Rvci5uYW1lO1xuXHR0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuXHRpZih0eXBlb2YgRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UgPT09ICdmdW5jdGlvbicpIHtcblx0XHRFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSh0aGlzLCB0aGlzLmNvbnN0cnVjdG9yKTtcblx0fVxufVxuXG5QYXRjaE5vdEludmVydGlibGVFcnJvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEVycm9yLnByb3RvdHlwZSk7XG5QYXRjaE5vdEludmVydGlibGVFcnJvci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBQYXRjaE5vdEludmVydGlibGVFcnJvcjsiLCJtb2R1bGUuZXhwb3J0cyA9IFRlc3RGYWlsZWRFcnJvcjtcblxuZnVuY3Rpb24gVGVzdEZhaWxlZEVycm9yKG1lc3NhZ2UpIHtcblx0RXJyb3IuY2FsbCh0aGlzKTtcblx0dGhpcy5uYW1lID0gdGhpcy5jb25zdHJ1Y3Rvci5uYW1lO1xuXHR0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuXHRpZih0eXBlb2YgRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UgPT09ICdmdW5jdGlvbicpIHtcblx0XHRFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSh0aGlzLCB0aGlzLmNvbnN0cnVjdG9yKTtcblx0fVxufVxuXG5UZXN0RmFpbGVkRXJyb3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShFcnJvci5wcm90b3R5cGUpO1xuVGVzdEZhaWxlZEVycm9yLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFRlc3RGYWlsZWRFcnJvcjsiLCIvKiogQGxpY2Vuc2UgTUlUIExpY2Vuc2UgKGMpIGNvcHlyaWdodCAyMDEwLTIwMTQgb3JpZ2luYWwgYXV0aG9yIG9yIGF1dGhvcnMgKi9cbi8qKiBAYXV0aG9yIEJyaWFuIENhdmFsaWVyICovXG4vKiogQGF1dGhvciBKb2huIEhhbm4gKi9cblxuZXhwb3J0cy5jb25zID0gY29ucztcbmV4cG9ydHMudGFpbCA9IHRhaWw7XG5leHBvcnRzLm1hcCA9IG1hcDtcblxuLyoqXG4gKiBQcmVwZW5kIHggdG8gYSwgd2l0aG91dCBtdXRhdGluZyBhLiBGYXN0ZXIgdGhhbiBhLnVuc2hpZnQoeClcbiAqIEBwYXJhbSB7Kn0geFxuICogQHBhcmFtIHtBcnJheX0gYSBhcnJheS1saWtlXG4gKiBAcmV0dXJucyB7QXJyYXl9IG5ldyBBcnJheSB3aXRoIHggcHJlcGVuZGVkXG4gKi9cbmZ1bmN0aW9uIGNvbnMoeCwgYSkge1xuXHR2YXIgbCA9IGEubGVuZ3RoO1xuXHR2YXIgYiA9IG5ldyBBcnJheShsKzEpO1xuXHRiWzBdID0geDtcblx0Zm9yKHZhciBpPTA7IGk8bDsgKytpKSB7XG5cdFx0YltpKzFdID0gYVtpXTtcblx0fVxuXG5cdHJldHVybiBiO1xufVxuXG4vKipcbiAqIENyZWF0ZSBhIG5ldyBBcnJheSBjb250YWluaW5nIGFsbCBlbGVtZW50cyBpbiBhLCBleGNlcHQgdGhlIGZpcnN0LlxuICogIEZhc3RlciB0aGFuIGEuc2xpY2UoMSlcbiAqIEBwYXJhbSB7QXJyYXl9IGEgYXJyYXktbGlrZVxuICogQHJldHVybnMge0FycmF5fSBuZXcgQXJyYXksIHRoZSBlcXVpdmFsZW50IG9mIGEuc2xpY2UoMSlcbiAqL1xuZnVuY3Rpb24gdGFpbChhKSB7XG5cdHZhciBsID0gYS5sZW5ndGgtMTtcblx0dmFyIGIgPSBuZXcgQXJyYXkobCk7XG5cdGZvcih2YXIgaT0wOyBpPGw7ICsraSkge1xuXHRcdGJbaV0gPSBhW2krMV07XG5cdH1cblxuXHRyZXR1cm4gYjtcbn1cblxuLyoqXG4gKiBNYXAgYW55IGFycmF5LWxpa2UuIEZhc3RlciB0aGFuIEFycmF5LnByb3RvdHlwZS5tYXBcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZcbiAqIEBwYXJhbSB7QXJyYXl9IGEgYXJyYXktbGlrZVxuICogQHJldHVybnMge0FycmF5fSBuZXcgQXJyYXkgbWFwcGVkIGJ5IGZcbiAqL1xuZnVuY3Rpb24gbWFwKGYsIGEpIHtcblx0dmFyIGIgPSBuZXcgQXJyYXkoYS5sZW5ndGgpO1xuXHRmb3IodmFyIGk9MDsgaTwgYS5sZW5ndGg7ICsraSkge1xuXHRcdGJbaV0gPSBmKGFbaV0pO1xuXHR9XG5cdHJldHVybiBiO1xufSIsIi8qKiBAbGljZW5zZSBNSVQgTGljZW5zZSAoYykgY29weXJpZ2h0IDIwMTAtMjAxNCBvcmlnaW5hbCBhdXRob3Igb3IgYXV0aG9ycyAqL1xuLyoqIEBhdXRob3IgQnJpYW4gQ2F2YWxpZXIgKi9cbi8qKiBAYXV0aG9yIEpvaG4gSGFubiAqL1xuXG4vKipcbiAqIENyZWF0ZSBhIGRlZXAgY29weSBvZiB4IHdoaWNoIG11c3QgYmUgYSBsZWdhbCBKU09OIG9iamVjdC9hcnJheS92YWx1ZVxuICogQHBhcmFtIHtvYmplY3R8YXJyYXl8c3RyaW5nfG51bWJlcnxudWxsfSB4IG9iamVjdC9hcnJheS92YWx1ZSB0byBjbG9uZVxuICogQHJldHVybnMge29iamVjdHxhcnJheXxzdHJpbmd8bnVtYmVyfG51bGx9IGNsb25lIG9mIHhcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBjbG9uZTtcblxuZnVuY3Rpb24gY2xvbmUoeCkge1xuXHRpZih4ID09IG51bGwgfHwgdHlwZW9mIHggIT09ICdvYmplY3QnKSB7XG5cdFx0cmV0dXJuIHg7XG5cdH1cblxuXHRpZihBcnJheS5pc0FycmF5KHgpKSB7XG5cdFx0cmV0dXJuIGNsb25lQXJyYXkoeCk7XG5cdH1cblxuXHRyZXR1cm4gY2xvbmVPYmplY3QoeCk7XG59XG5cbmZ1bmN0aW9uIGNsb25lQXJyYXkgKHgpIHtcblx0dmFyIGwgPSB4Lmxlbmd0aDtcblx0dmFyIHkgPSBuZXcgQXJyYXkobCk7XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsOyArK2kpIHtcblx0XHR5W2ldID0gY2xvbmUoeFtpXSk7XG5cdH1cblxuXHRyZXR1cm4geTtcbn1cblxuZnVuY3Rpb24gY2xvbmVPYmplY3QgKHgpIHtcblx0dmFyIGtleXMgPSBPYmplY3Qua2V5cyh4KTtcblx0dmFyIHkgPSB7fTtcblxuXHRmb3IgKHZhciBrLCBpID0gMCwgbCA9IGtleXMubGVuZ3RoOyBpIDwgbDsgKytpKSB7XG5cdFx0ayA9IGtleXNbaV07XG5cdFx0eVtrXSA9IGNsb25lKHhba10pO1xuXHR9XG5cblx0cmV0dXJuIHk7XG59XG4iLCJ2YXIganNvblBvaW50ZXIgPSByZXF1aXJlKCcuL2pzb25Qb2ludGVyJyk7XG5cbi8qKlxuICogY29tbXV0ZSB0aGUgcGF0Y2ggc2VxdWVuY2UgYSxiIHRvIGIsYVxuICogQHBhcmFtIHtvYmplY3R9IGEgcGF0Y2ggb3BlcmF0aW9uXG4gKiBAcGFyYW0ge29iamVjdH0gYiBwYXRjaCBvcGVyYXRpb25cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjb21tdXRlUGF0aHMoYSwgYikge1xuXHQvLyBUT0RPOiBjYXNlcyBmb3Igc3BlY2lhbCBwYXRoczogJycgYW5kICcvJ1xuXHR2YXIgbGVmdCA9IGpzb25Qb2ludGVyLnBhcnNlKGEucGF0aCk7XG5cdHZhciByaWdodCA9IGpzb25Qb2ludGVyLnBhcnNlKGIucGF0aCk7XG5cdHZhciBwcmVmaXggPSBnZXRDb21tb25QYXRoUHJlZml4KGxlZnQsIHJpZ2h0KTtcblx0dmFyIGlzQXJyYXkgPSBpc0FycmF5UGF0aChsZWZ0LCByaWdodCwgcHJlZml4Lmxlbmd0aCk7XG5cblx0Ly8gTmV2ZXIgbXV0YXRlIHRoZSBvcmlnaW5hbHNcblx0dmFyIGFjID0gY29weVBhdGNoKGEpO1xuXHR2YXIgYmMgPSBjb3B5UGF0Y2goYik7XG5cblx0aWYocHJlZml4Lmxlbmd0aCA9PT0gMCAmJiAhaXNBcnJheSkge1xuXHRcdC8vIFBhdGhzIHNoYXJlIG5vIGNvbW1vbiBhbmNlc3Rvciwgc2ltcGxlIHN3YXBcblx0XHRyZXR1cm4gW2JjLCBhY107XG5cdH1cblxuXHRpZihpc0FycmF5KSB7XG5cdFx0cmV0dXJuIGNvbW11dGVBcnJheVBhdGhzKGFjLCBsZWZ0LCBiYywgcmlnaHQpO1xuXHR9IGVsc2Uge1xuXHRcdHJldHVybiBjb21tdXRlVHJlZVBhdGhzKGFjLCBsZWZ0LCBiYywgcmlnaHQpO1xuXHR9XG59O1xuXG5mdW5jdGlvbiBjb21tdXRlVHJlZVBhdGhzKGEsIGxlZnQsIGIsIHJpZ2h0KSB7XG5cdGlmKGEucGF0aCA9PT0gYi5wYXRoKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignY2Fubm90IGNvbW11dGUgJyArIGEub3AgKyAnLCcgKyBiLm9wICsgJyB3aXRoIGlkZW50aWNhbCBvYmplY3QgcGF0aHMnKTtcblx0fVxuXHQvLyBGSVhNRTogSW1wbGVtZW50IHRyZWUgcGF0aCBjb21tdXRhdGlvblxuXHRyZXR1cm4gW2IsIGFdO1xufVxuXG4vKipcbiAqIENvbW11dGUgdHdvIHBhdGNoZXMgd2hvc2UgY29tbW9uIGFuY2VzdG9yICh3aGljaCBtYXkgYmUgdGhlIGltbWVkaWF0ZSBwYXJlbnQpXG4gKiBpcyBhbiBhcnJheVxuICogQHBhcmFtIGFcbiAqIEBwYXJhbSBsZWZ0XG4gKiBAcGFyYW0gYlxuICogQHBhcmFtIHJpZ2h0XG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xuZnVuY3Rpb24gY29tbXV0ZUFycmF5UGF0aHMoYSwgbGVmdCwgYiwgcmlnaHQpIHtcblx0aWYobGVmdC5sZW5ndGggPT09IHJpZ2h0Lmxlbmd0aCkge1xuXHRcdHJldHVybiBjb21tdXRlQXJyYXlTaWJsaW5ncyhhLCBsZWZ0LCBiLCByaWdodCk7XG5cdH1cblxuXHRpZiAobGVmdC5sZW5ndGggPiByaWdodC5sZW5ndGgpIHtcblx0XHQvLyBsZWZ0IGlzIGxvbmdlciwgY29tbXV0ZSBieSBcIm1vdmluZ1wiIGl0IHRvIHRoZSByaWdodFxuXHRcdGxlZnQgPSBjb21tdXRlQXJyYXlBbmNlc3RvcihiLCByaWdodCwgYSwgbGVmdCwgLTEpO1xuXHRcdGEucGF0aCA9IGpzb25Qb2ludGVyLmFic29sdXRlKGpzb25Qb2ludGVyLmpvaW4obGVmdCkpO1xuXHR9IGVsc2Uge1xuXHRcdC8vIHJpZ2h0IGlzIGxvbmdlciwgY29tbXV0ZSBieSBcIm1vdmluZ1wiIGl0IHRvIHRoZSBsZWZ0XG5cdFx0cmlnaHQgPSBjb21tdXRlQXJyYXlBbmNlc3RvcihhLCBsZWZ0LCBiLCByaWdodCwgMSk7XG5cdFx0Yi5wYXRoID0ganNvblBvaW50ZXIuYWJzb2x1dGUoanNvblBvaW50ZXIuam9pbihyaWdodCkpO1xuXHR9XG5cblx0cmV0dXJuIFtiLCBhXTtcbn1cblxuZnVuY3Rpb24gaXNBcnJheVBhdGgobGVmdCwgcmlnaHQsIGluZGV4KSB7XG5cdHJldHVybiBqc29uUG9pbnRlci5pc1ZhbGlkQXJyYXlJbmRleChsZWZ0W2luZGV4XSlcblx0XHQmJiBqc29uUG9pbnRlci5pc1ZhbGlkQXJyYXlJbmRleChyaWdodFtpbmRleF0pO1xufVxuXG4vKipcbiAqIENvbW11dGUgdHdvIHBhdGNoZXMgcmVmZXJyaW5nIHRvIGl0ZW1zIGluIHRoZSBzYW1lIGFycmF5XG4gKiBAcGFyYW0gbFxuICogQHBhcmFtIGxwYXRoXG4gKiBAcGFyYW0gclxuICogQHBhcmFtIHJwYXRoXG4gKiBAcmV0dXJucyB7KltdfVxuICovXG5mdW5jdGlvbiBjb21tdXRlQXJyYXlTaWJsaW5ncyhsLCBscGF0aCwgciwgcnBhdGgpIHtcblxuXHR2YXIgdGFyZ2V0ID0gbHBhdGgubGVuZ3RoLTE7XG5cdHZhciBsaW5kZXggPSArbHBhdGhbdGFyZ2V0XTtcblx0dmFyIHJpbmRleCA9ICtycGF0aFt0YXJnZXRdO1xuXG5cdHZhciBjb21tdXRlZDtcblxuXHRpZihsaW5kZXggPCByaW5kZXgpIHtcblx0XHQvLyBBZGp1c3QgcmlnaHQgcGF0aFxuXHRcdGlmKGwub3AgPT09ICdhZGQnIHx8IGwub3AgPT09ICdjb3B5Jykge1xuXHRcdFx0Y29tbXV0ZWQgPSBycGF0aC5zbGljZSgpO1xuXHRcdFx0Y29tbXV0ZWRbdGFyZ2V0XSA9IE1hdGgubWF4KDAsIHJpbmRleCAtIDEpO1xuXHRcdFx0ci5wYXRoID0ganNvblBvaW50ZXIuYWJzb2x1dGUoanNvblBvaW50ZXIuam9pbihjb21tdXRlZCkpO1xuXHRcdH0gZWxzZSBpZihsLm9wID09PSAncmVtb3ZlJykge1xuXHRcdFx0Y29tbXV0ZWQgPSBycGF0aC5zbGljZSgpO1xuXHRcdFx0Y29tbXV0ZWRbdGFyZ2V0XSA9IHJpbmRleCArIDE7XG5cdFx0XHRyLnBhdGggPSBqc29uUG9pbnRlci5hYnNvbHV0ZShqc29uUG9pbnRlci5qb2luKGNvbW11dGVkKSk7XG5cdFx0fVxuXHR9IGVsc2UgaWYoci5vcCA9PT0gJ2FkZCcgfHwgci5vcCA9PT0gJ2NvcHknKSB7XG5cdFx0Ly8gQWRqdXN0IGxlZnQgcGF0aFxuXHRcdGNvbW11dGVkID0gbHBhdGguc2xpY2UoKTtcblx0XHRjb21tdXRlZFt0YXJnZXRdID0gbGluZGV4ICsgMTtcblx0XHRsLnBhdGggPSBqc29uUG9pbnRlci5hYnNvbHV0ZShqc29uUG9pbnRlci5qb2luKGNvbW11dGVkKSk7XG5cdH0gZWxzZSBpZiAobGluZGV4ID4gcmluZGV4ICYmIHIub3AgPT09ICdyZW1vdmUnKSB7XG5cdFx0Ly8gQWRqdXN0IGxlZnQgcGF0aCBvbmx5IGlmIHJlbW92ZSB3YXMgYXQgYSAoc3RyaWN0bHkpIGxvd2VyIGluZGV4XG5cdFx0Y29tbXV0ZWQgPSBscGF0aC5zbGljZSgpO1xuXHRcdGNvbW11dGVkW3RhcmdldF0gPSBNYXRoLm1heCgwLCBsaW5kZXggLSAxKTtcblx0XHRsLnBhdGggPSBqc29uUG9pbnRlci5hYnNvbHV0ZShqc29uUG9pbnRlci5qb2luKGNvbW11dGVkKSk7XG5cdH1cblxuXHRyZXR1cm4gW3IsIGxdO1xufVxuXG4vKipcbiAqIENvbW11dGUgdHdvIHBhdGNoZXMgd2l0aCBhIGNvbW1vbiBhcnJheSBhbmNlc3RvclxuICogQHBhcmFtIGxcbiAqIEBwYXJhbSBscGF0aFxuICogQHBhcmFtIHJcbiAqIEBwYXJhbSBycGF0aFxuICogQHBhcmFtIGRpcmVjdGlvblxuICogQHJldHVybnMgeyp9XG4gKi9cbmZ1bmN0aW9uIGNvbW11dGVBcnJheUFuY2VzdG9yKGwsIGxwYXRoLCByLCBycGF0aCwgZGlyZWN0aW9uKSB7XG5cdC8vIHJwYXRoIGlzIGxvbmdlciBvciBzYW1lIGxlbmd0aFxuXG5cdHZhciB0YXJnZXQgPSBscGF0aC5sZW5ndGgtMTtcblx0dmFyIGxpbmRleCA9ICtscGF0aFt0YXJnZXRdO1xuXHR2YXIgcmluZGV4ID0gK3JwYXRoW3RhcmdldF07XG5cblx0Ly8gQ29weSBycGF0aCwgdGhlbiBhZGp1c3QgaXRzIGFycmF5IGluZGV4XG5cdHZhciByYyA9IHJwYXRoLnNsaWNlKCk7XG5cblx0aWYobGluZGV4ID4gcmluZGV4KSB7XG5cdFx0cmV0dXJuIHJjO1xuXHR9XG5cblx0aWYobC5vcCA9PT0gJ2FkZCcgfHwgbC5vcCA9PT0gJ2NvcHknKSB7XG5cdFx0cmNbdGFyZ2V0XSA9IE1hdGgubWF4KDAsIHJpbmRleCAtIGRpcmVjdGlvbik7XG5cdH0gZWxzZSBpZihsLm9wID09PSAncmVtb3ZlJykge1xuXHRcdHJjW3RhcmdldF0gPSBNYXRoLm1heCgwLCByaW5kZXggKyBkaXJlY3Rpb24pO1xuXHR9XG5cblx0cmV0dXJuIHJjO1xufVxuXG5mdW5jdGlvbiBnZXRDb21tb25QYXRoUHJlZml4KHAxLCBwMikge1xuXHR2YXIgcDFsID0gcDEubGVuZ3RoO1xuXHR2YXIgcDJsID0gcDIubGVuZ3RoO1xuXHRpZihwMWwgPT09IDAgfHwgcDJsID09PSAwIHx8IChwMWwgPCAyICYmIHAybCA8IDIpKSB7XG5cdFx0cmV0dXJuIFtdO1xuXHR9XG5cblx0Ly8gSWYgcGF0aHMgYXJlIHNhbWUgbGVuZ3RoLCB0aGUgbGFzdCBzZWdtZW50IGNhbm5vdCBiZSBwYXJ0XG5cdC8vIG9mIGEgY29tbW9uIHByZWZpeC4gIElmIG5vdCB0aGUgc2FtZSBsZW5ndGgsIHRoZSBwcmVmaXggY2Fubm90XG5cdC8vIGJlIGxvbmdlciB0aGFuIHRoZSBzaG9ydGVyIHBhdGguXG5cdHZhciBsID0gcDFsID09PSBwMmxcblx0XHQ/IHAxbCAtIDFcblx0XHQ6IE1hdGgubWluKHAxbCwgcDJsKTtcblxuXHR2YXIgaSA9IDA7XG5cdHdoaWxlKGkgPCBsICYmIHAxW2ldID09PSBwMltpXSkge1xuXHRcdCsraVxuXHR9XG5cblx0cmV0dXJuIHAxLnNsaWNlKDAsIGkpO1xufVxuXG5mdW5jdGlvbiBjb3B5UGF0Y2gocCkge1xuXHRpZihwLm9wID09PSAncmVtb3ZlJykge1xuXHRcdHJldHVybiB7IG9wOiBwLm9wLCBwYXRoOiBwLnBhdGggfTtcblx0fVxuXG5cdGlmKHAub3AgPT09ICdjb3B5JyB8fCBwLm9wID09PSAnbW92ZScpIHtcblx0XHRyZXR1cm4geyBvcDogcC5vcCwgcGF0aDogcC5wYXRoLCBmcm9tOiBwLmZyb20gfTtcblx0fVxuXG5cdC8vIHRlc3QsIGFkZCwgcmVwbGFjZVxuXHRyZXR1cm4geyBvcDogcC5vcCwgcGF0aDogcC5wYXRoLCB2YWx1ZTogcC52YWx1ZSB9O1xufSIsIm1vZHVsZS5leHBvcnRzID0gZGVlcEVxdWFscztcblxuLyoqXG4gKiBDb21wYXJlIDIgSlNPTiB2YWx1ZXMsIG9yIHJlY3Vyc2l2ZWx5IGNvbXBhcmUgMiBKU09OIG9iamVjdHMgb3IgYXJyYXlzXG4gKiBAcGFyYW0ge29iamVjdHxhcnJheXxzdHJpbmd8bnVtYmVyfGJvb2xlYW58bnVsbH0gYVxuICogQHBhcmFtIHtvYmplY3R8YXJyYXl8c3RyaW5nfG51bWJlcnxib29sZWFufG51bGx9IGJcbiAqIEByZXR1cm5zIHtib29sZWFufSB0cnVlIGlmZiBhIGFuZCBiIGFyZSByZWN1cnNpdmVseSBlcXVhbFxuICovXG5mdW5jdGlvbiBkZWVwRXF1YWxzKGEsIGIpIHtcblx0aWYoYSA9PT0gYikge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0aWYoQXJyYXkuaXNBcnJheShhKSAmJiBBcnJheS5pc0FycmF5KGIpKSB7XG5cdFx0cmV0dXJuIGNvbXBhcmVBcnJheXMoYSwgYik7XG5cdH1cblxuXHRpZih0eXBlb2YgYSA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIGIgPT09ICdvYmplY3QnKSB7XG5cdFx0cmV0dXJuIGNvbXBhcmVPYmplY3RzKGEsIGIpO1xuXHR9XG5cblx0cmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBjb21wYXJlQXJyYXlzKGEsIGIpIHtcblx0aWYoYS5sZW5ndGggIT09IGIubGVuZ3RoKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0Zm9yKHZhciBpID0gMDsgaTxhLmxlbmd0aDsgKytpKSB7XG5cdFx0aWYoIWRlZXBFcXVhbHMoYVtpXSwgYltpXSkpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gY29tcGFyZU9iamVjdHMoYSwgYikge1xuXHRpZigoYSA9PT0gbnVsbCAmJiBiICE9PSBudWxsKSB8fCAoYSAhPT0gbnVsbCAmJiBiID09PSBudWxsKSkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdHZhciBha2V5cyA9IE9iamVjdC5rZXlzKGEpO1xuXHR2YXIgYmtleXMgPSBPYmplY3Qua2V5cyhiKTtcblxuXHRpZihha2V5cy5sZW5ndGggIT09IGJrZXlzLmxlbmd0aCkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdGZvcih2YXIgaSA9IDAsIGs7IGk8YWtleXMubGVuZ3RoOyArK2kpIHtcblx0XHRrID0gYWtleXNbaV07XG5cdFx0aWYoIShrIGluIGIgJiYgZGVlcEVxdWFscyhhW2tdLCBiW2tdKSkpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gdHJ1ZTtcbn0iLCJ2YXIgcGF0Y2hlcyA9IHJlcXVpcmUoJy4vcGF0Y2hlcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGludmVyc2UocCkge1xuXHR2YXIgcHIgPSBbXTtcblx0dmFyIGksIHNraXA7XG5cdGZvcihpID0gcC5sZW5ndGgtMTsgaT49IDA7IGkgLT0gc2tpcCkge1xuXHRcdHNraXAgPSBpbnZlcnRPcChwciwgcFtpXSwgaSwgcCk7XG5cdH1cblxuXHRyZXR1cm4gcHI7XG59O1xuXG5mdW5jdGlvbiBpbnZlcnRPcChwYXRjaCwgYywgaSwgY29udGV4dCkge1xuXHR2YXIgb3AgPSBwYXRjaGVzW2Mub3BdO1xuXHRyZXR1cm4gb3AgIT09IHZvaWQgMCAmJiB0eXBlb2Ygb3AuaW52ZXJzZSA9PT0gJ2Z1bmN0aW9uJ1xuXHRcdD8gb3AuaW52ZXJzZShwYXRjaCwgYywgaSwgY29udGV4dClcblx0XHQ6IDE7XG59XG4iLCIvKiogQGxpY2Vuc2UgTUlUIExpY2Vuc2UgKGMpIGNvcHlyaWdodCAyMDEwLTIwMTQgb3JpZ2luYWwgYXV0aG9yIG9yIGF1dGhvcnMgKi9cbi8qKiBAYXV0aG9yIEJyaWFuIENhdmFsaWVyICovXG4vKiogQGF1dGhvciBKb2huIEhhbm4gKi9cblxudmFyIHBhdGNoZXMgPSByZXF1aXJlKCcuL3BhdGNoZXMnKTtcbnZhciBjbG9uZSA9IHJlcXVpcmUoJy4vY2xvbmUnKTtcbnZhciBJbnZhbGlkUGF0Y2hPcGVyYXRpb25FcnJvciA9IHJlcXVpcmUoJy4vSW52YWxpZFBhdGNoT3BlcmF0aW9uRXJyb3InKTtcblxuZXhwb3J0cy5hcHBseSA9IHBhdGNoO1xuZXhwb3J0cy5hcHBseUluUGxhY2UgPSBwYXRjaEluUGxhY2U7XG5leHBvcnRzLmNsb25lID0gY2xvbmU7XG5leHBvcnRzLmlzVmFsaWRPYmplY3QgPSBpc1ZhbGlkT2JqZWN0O1xuZXhwb3J0cy5kZWZhdWx0SGFzaCA9IGRlZmF1bHRIYXNoO1xuXG52YXIgZGVmYXVsdE9wdGlvbnMgPSB7fTtcblxuLyoqXG4gKiBBcHBseSB0aGUgc3VwcGxpZWQgSlNPTiBQYXRjaCB0byB4XG4gKiBAcGFyYW0ge2FycmF5fSBjaGFuZ2VzIEpTT04gUGF0Y2hcbiAqIEBwYXJhbSB7b2JqZWN0fGFycmF5fHN0cmluZ3xudW1iZXJ9IHggb2JqZWN0L2FycmF5L3ZhbHVlIHRvIHBhdGNoXG4gKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuICogQHBhcmFtIHtmdW5jdGlvbihpbmRleDpOdW1iZXIsIGFycmF5OkFycmF5LCBjb250ZXh0Om9iamVjdCk6TnVtYmVyfSBvcHRpb25zLmZpbmRDb250ZXh0XG4gKiAgZnVuY3Rpb24gdXNlZCBhZGp1c3QgYXJyYXkgaW5kZXhlcyBmb3Igc21hcnR5L2Z1enp5IHBhdGNoaW5nLCBmb3JcbiAqICBwYXRjaGVzIGNvbnRhaW5pbmcgY29udGV4dFxuICogQHJldHVybnMge29iamVjdHxhcnJheXxzdHJpbmd8bnVtYmVyfSBwYXRjaGVkIHZlcnNpb24gb2YgeC4gSWYgeCBpc1xuICogIGFuIGFycmF5IG9yIG9iamVjdCwgaXQgd2lsbCBiZSBtdXRhdGVkIGFuZCByZXR1cm5lZC4gT3RoZXJ3aXNlLCBpZlxuICogIHggaXMgYSB2YWx1ZSwgdGhlIG5ldyB2YWx1ZSB3aWxsIGJlIHJldHVybmVkLlxuICovXG5mdW5jdGlvbiBwYXRjaChjaGFuZ2VzLCB4LCBvcHRpb25zKSB7XG5cdHJldHVybiBwYXRjaEluUGxhY2UoY2hhbmdlcywgY2xvbmUoeCksIG9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiBwYXRjaEluUGxhY2UoY2hhbmdlcywgeCwgb3B0aW9ucykge1xuXHRpZighb3B0aW9ucykge1xuXHRcdG9wdGlvbnMgPSBkZWZhdWx0T3B0aW9ucztcblx0fVxuXG5cdC8vIFRPRE86IENvbnNpZGVyIHRocm93aW5nIGlmIGNoYW5nZXMgaXMgbm90IGFuIGFycmF5XG5cdGlmKCFBcnJheS5pc0FycmF5KGNoYW5nZXMpKSB7XG5cdFx0cmV0dXJuIHg7XG5cdH1cblxuXHR2YXIgcGF0Y2gsIHA7XG5cdGZvcih2YXIgaT0wOyBpPGNoYW5nZXMubGVuZ3RoOyArK2kpIHtcblx0XHRwID0gY2hhbmdlc1tpXTtcblx0XHRwYXRjaCA9IHBhdGNoZXNbcC5vcF07XG5cblx0XHRpZihwYXRjaCA9PT0gdm9pZCAwKSB7XG5cdFx0XHR0aHJvdyBuZXcgSW52YWxpZFBhdGNoT3BlcmF0aW9uRXJyb3IoJ2ludmFsaWQgb3AgJyArIEpTT04uc3RyaW5naWZ5KHApKTtcblx0XHR9XG5cblx0XHR4ID0gcGF0Y2guYXBwbHkoeCwgcCwgb3B0aW9ucyk7XG5cdH1cblxuXHRyZXR1cm4geDtcbn1cblxuZnVuY3Rpb24gZGVmYXVsdEhhc2goeCkge1xuXHRyZXR1cm4gaXNWYWxpZE9iamVjdCh4KSB8fCBpc0FycmF5KHgpID8gSlNPTi5zdHJpbmdpZnkoeCkgOiB4O1xufVxuXG5mdW5jdGlvbiBpc1ZhbGlkT2JqZWN0ICh4KSB7XG5cdHJldHVybiB4ICE9PSBudWxsICYmIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh4KSA9PT0gJ1tvYmplY3QgT2JqZWN0XSc7XG59XG5cbmZ1bmN0aW9uIGlzQXJyYXkgKHgpIHtcblx0cmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh4KSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbn1cbiIsIi8qKiBAbGljZW5zZSBNSVQgTGljZW5zZSAoYykgY29weXJpZ2h0IDIwMTAtMjAxNCBvcmlnaW5hbCBhdXRob3Igb3IgYXV0aG9ycyAqL1xuLyoqIEBhdXRob3IgQnJpYW4gQ2F2YWxpZXIgKi9cbi8qKiBAYXV0aG9yIEpvaG4gSGFubiAqL1xuXG52YXIgX3BhcnNlID0gcmVxdWlyZSgnLi9qc29uUG9pbnRlclBhcnNlJyk7XG5cbmV4cG9ydHMuZmluZCA9IGZpbmQ7XG5leHBvcnRzLmpvaW4gPSBqb2luO1xuZXhwb3J0cy5hYnNvbHV0ZSA9IGFic29sdXRlO1xuZXhwb3J0cy5wYXJzZSA9IHBhcnNlO1xuZXhwb3J0cy5jb250YWlucyA9IGNvbnRhaW5zO1xuZXhwb3J0cy5lbmNvZGVTZWdtZW50ID0gZW5jb2RlU2VnbWVudDtcbmV4cG9ydHMuZGVjb2RlU2VnbWVudCA9IGRlY29kZVNlZ21lbnQ7XG5leHBvcnRzLnBhcnNlQXJyYXlJbmRleCA9IHBhcnNlQXJyYXlJbmRleDtcbmV4cG9ydHMuaXNWYWxpZEFycmF5SW5kZXggPSBpc1ZhbGlkQXJyYXlJbmRleDtcblxuLy8gaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNjkwMSNwYWdlLTJcbnZhciBzZXBhcmF0b3IgPSAnLyc7XG52YXIgc2VwYXJhdG9yUnggPSAvXFwvL2c7XG52YXIgZW5jb2RlZFNlcGFyYXRvciA9ICd+MSc7XG52YXIgZW5jb2RlZFNlcGFyYXRvclJ4ID0gL34xL2c7XG5cbnZhciBlc2NhcGVDaGFyID0gJ34nO1xudmFyIGVzY2FwZVJ4ID0gL34vZztcbnZhciBlbmNvZGVkRXNjYXBlID0gJ34wJztcbnZhciBlbmNvZGVkRXNjYXBlUnggPSAvfjAvZztcblxuLyoqXG4gKiBGaW5kIHRoZSBwYXJlbnQgb2YgdGhlIHNwZWNpZmllZCBwYXRoIGluIHggYW5kIHJldHVybiBhIGRlc2NyaXB0b3JcbiAqIGNvbnRhaW5pbmcgdGhlIHBhcmVudCBhbmQgYSBrZXkuICBJZiB0aGUgcGFyZW50IGRvZXMgbm90IGV4aXN0IGluIHgsXG4gKiByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkLlxuICogQHBhcmFtIHtvYmplY3R8YXJyYXl9IHggb2JqZWN0IG9yIGFycmF5IGluIHdoaWNoIHRvIHNlYXJjaFxuICogQHBhcmFtIHtzdHJpbmd9IHBhdGggSlNPTiBQb2ludGVyIHN0cmluZyAoZW5jb2RlZClcbiAqIEBwYXJhbSB7P2Z1bmN0aW9uKGluZGV4Ok51bWJlciwgYXJyYXk6QXJyYXksIGNvbnRleHQ6b2JqZWN0KTpOdW1iZXJ9IGZpbmRDb250ZXh0XG4gKiAgb3B0aW9uYWwgZnVuY3Rpb24gdXNlZCBhZGp1c3QgYXJyYXkgaW5kZXhlcyBmb3Igc21hcnR5L2Z1enp5IHBhdGNoaW5nLCBmb3JcbiAqICBwYXRjaGVzIGNvbnRhaW5pbmcgY29udGV4dC4gIElmIHByb3ZpZGVkLCBjb250ZXh0IE1VU1QgYWxzbyBiZSBwcm92aWRlZC5cbiAqIEBwYXJhbSB7P3tiZWZvcmU6QXJyYXksIGFmdGVyOkFycmF5fX0gY29udGV4dCBvcHRpb25hbCBwYXRjaCBjb250ZXh0IGZvclxuICogIGZpbmRDb250ZXh0IHRvIHVzZSB0byBhZGp1c3QgYXJyYXkgaW5kaWNlcy4gIElmIHByb3ZpZGVkLCBmaW5kQ29udGV4dCBNVVNUXG4gKiAgYWxzbyBiZSBwcm92aWRlZC5cbiAqIEByZXR1cm5zIHt7dGFyZ2V0Om9iamVjdHxhcnJheXxudW1iZXJ8c3RyaW5nLCBrZXk6c3RyaW5nfXx1bmRlZmluZWR9XG4gKi9cbmZ1bmN0aW9uIGZpbmQoeCwgcGF0aCwgZmluZENvbnRleHQsIGNvbnRleHQpIHtcblx0aWYodHlwZW9mIHBhdGggIT09ICdzdHJpbmcnKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0aWYocGF0aCA9PT0gJycpIHtcblx0XHQvLyB3aG9sZSBkb2N1bWVudFxuXHRcdHJldHVybiB7IHRhcmdldDogeCwga2V5OiB2b2lkIDAgfTtcblx0fVxuXG5cdGlmKHBhdGggPT09IHNlcGFyYXRvcikge1xuXHRcdHJldHVybiB7IHRhcmdldDogeCwga2V5OiAnJyB9O1xuXHR9XG5cblx0dmFyIHBhcmVudCA9IHgsIGtleTtcblx0dmFyIGhhc0NvbnRleHQgPSBjb250ZXh0ICE9PSB2b2lkIDA7XG5cblx0X3BhcnNlKHBhdGgsIGZ1bmN0aW9uKHNlZ21lbnQpIHtcblx0XHQvLyBobS4uLiB0aGlzIHNlZW1zIGxpa2UgaXQgc2hvdWxkIGJlIGlmKHR5cGVvZiB4ID09PSAndW5kZWZpbmVkJylcblx0XHRpZih4ID09IG51bGwpIHtcblx0XHRcdC8vIFNpZ25hbCB0aGF0IHdlIHByZW1hdHVyZWx5IGhpdCB0aGUgZW5kIG9mIHRoZSBwYXRoIGhpZXJhcmNoeS5cblx0XHRcdHBhcmVudCA9IG51bGw7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0aWYoQXJyYXkuaXNBcnJheSh4KSkge1xuXHRcdFx0a2V5ID0gaGFzQ29udGV4dFxuXHRcdFx0XHQ/IGZpbmRJbmRleChmaW5kQ29udGV4dCwgcGFyc2VBcnJheUluZGV4KHNlZ21lbnQpLCB4LCBjb250ZXh0KVxuXHRcdFx0XHQ6IHNlZ21lbnQgPT09ICctJyA/IHNlZ21lbnQgOiBwYXJzZUFycmF5SW5kZXgoc2VnbWVudCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGtleSA9IHNlZ21lbnQ7XG5cdFx0fVxuXG5cdFx0cGFyZW50ID0geDtcblx0XHR4ID0geFtrZXldO1xuXHR9KTtcblxuXHRyZXR1cm4gcGFyZW50ID09PSBudWxsXG5cdFx0PyB2b2lkIDBcblx0XHQ6IHsgdGFyZ2V0OiBwYXJlbnQsIGtleToga2V5IH07XG59XG5cbmZ1bmN0aW9uIGFic29sdXRlKHBhdGgpIHtcblx0cmV0dXJuIHBhdGhbMF0gPT09IHNlcGFyYXRvciA/IHBhdGggOiBzZXBhcmF0b3IgKyBwYXRoO1xufVxuXG5mdW5jdGlvbiBqb2luKHNlZ21lbnRzKSB7XG5cdHJldHVybiBzZWdtZW50cy5qb2luKHNlcGFyYXRvcik7XG59XG5cbmZ1bmN0aW9uIHBhcnNlKHBhdGgpIHtcblx0dmFyIHNlZ21lbnRzID0gW107XG5cdF9wYXJzZShwYXRoLCBzZWdtZW50cy5wdXNoLmJpbmQoc2VnbWVudHMpKTtcblx0cmV0dXJuIHNlZ21lbnRzO1xufVxuXG5mdW5jdGlvbiBjb250YWlucyhhLCBiKSB7XG5cdHJldHVybiBiLmluZGV4T2YoYSkgPT09IDAgJiYgYlthLmxlbmd0aF0gPT09IHNlcGFyYXRvcjtcbn1cblxuLyoqXG4gKiBEZWNvZGUgYSBKU09OIFBvaW50ZXIgcGF0aCBzZWdtZW50XG4gKiBAc2VlIGh0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzY5MDEjcGFnZS0zXG4gKiBAcGFyYW0ge3N0cmluZ30gcyBlbmNvZGVkIHNlZ21lbnRcbiAqIEByZXR1cm5zIHtzdHJpbmd9IGRlY29kZWQgc2VnbWVudFxuICovXG5mdW5jdGlvbiBkZWNvZGVTZWdtZW50KHMpIHtcblx0Ly8gU2VlOiBodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM2OTAxI3BhZ2UtM1xuXHRyZXR1cm4gcy5yZXBsYWNlKGVuY29kZWRTZXBhcmF0b3JSeCwgc2VwYXJhdG9yKS5yZXBsYWNlKGVuY29kZWRFc2NhcGVSeCwgZXNjYXBlQ2hhcik7XG59XG5cbi8qKlxuICogRW5jb2RlIGEgSlNPTiBQb2ludGVyIHBhdGggc2VnbWVudFxuICogQHNlZSBodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM2OTAxI3BhZ2UtM1xuICogQHBhcmFtIHtzdHJpbmd9IHMgZGVjb2RlZCBzZWdtZW50XG4gKiBAcmV0dXJucyB7c3RyaW5nfSBlbmNvZGVkIHNlZ21lbnRcbiAqL1xuZnVuY3Rpb24gZW5jb2RlU2VnbWVudChzKSB7XG5cdHJldHVybiBzLnJlcGxhY2UoZXNjYXBlUngsIGVuY29kZWRFc2NhcGUpLnJlcGxhY2Uoc2VwYXJhdG9yUngsIGVuY29kZWRTZXBhcmF0b3IpO1xufVxuXG52YXIgYXJyYXlJbmRleFJ4ID0gL14oMHxbMS05XVxcZCopJC87XG5cbi8qKlxuICogUmV0dXJuIHRydWUgaWYgcyBpcyBhIHZhbGlkIEpTT04gUG9pbnRlciBhcnJheSBpbmRleFxuICogQHBhcmFtIHtTdHJpbmd9IHNcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5mdW5jdGlvbiBpc1ZhbGlkQXJyYXlJbmRleChzKSB7XG5cdHJldHVybiBhcnJheUluZGV4UngudGVzdChzKTtcbn1cblxuLyoqXG4gKiBTYWZlbHkgcGFyc2UgYSBzdHJpbmcgaW50byBhIG51bWJlciA+PSAwLiBEb2VzIG5vdCBjaGVjayBmb3IgZGVjaW1hbCBudW1iZXJzXG4gKiBAcGFyYW0ge3N0cmluZ30gcyBudW1lcmljIHN0cmluZ1xuICogQHJldHVybnMge251bWJlcn0gbnVtYmVyID49IDBcbiAqL1xuZnVuY3Rpb24gcGFyc2VBcnJheUluZGV4IChzKSB7XG5cdGlmKGlzVmFsaWRBcnJheUluZGV4KHMpKSB7XG5cdFx0cmV0dXJuICtzO1xuXHR9XG5cblx0dGhyb3cgbmV3IFN5bnRheEVycm9yKCdpbnZhbGlkIGFycmF5IGluZGV4ICcgKyBzKTtcbn1cblxuZnVuY3Rpb24gZmluZEluZGV4IChmaW5kQ29udGV4dCwgc3RhcnQsIGFycmF5LCBjb250ZXh0KSB7XG5cdHZhciBpbmRleCA9IHN0YXJ0O1xuXG5cdGlmKGluZGV4IDwgMCkge1xuXHRcdHRocm93IG5ldyBFcnJvcignYXJyYXkgaW5kZXggb3V0IG9mIGJvdW5kcyAnICsgaW5kZXgpO1xuXHR9XG5cblx0aWYoY29udGV4dCAhPT0gdm9pZCAwICYmIHR5cGVvZiBmaW5kQ29udGV4dCA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdGluZGV4ID0gZmluZENvbnRleHQoc3RhcnQsIGFycmF5LCBjb250ZXh0KTtcblx0XHRpZihpbmRleCA8IDApIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignY291bGQgbm90IGZpbmQgcGF0Y2ggY29udGV4dCAnICsgY29udGV4dCk7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGluZGV4O1xufSIsIi8qKiBAbGljZW5zZSBNSVQgTGljZW5zZSAoYykgY29weXJpZ2h0IDIwMTAtMjAxNCBvcmlnaW5hbCBhdXRob3Igb3IgYXV0aG9ycyAqL1xuLyoqIEBhdXRob3IgQnJpYW4gQ2F2YWxpZXIgKi9cbi8qKiBAYXV0aG9yIEpvaG4gSGFubiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGpzb25Qb2ludGVyUGFyc2U7XG5cbnZhciBwYXJzZVJ4ID0gL1xcL3x+MXx+MC9nO1xudmFyIHNlcGFyYXRvciA9ICcvJztcbnZhciBlc2NhcGVDaGFyID0gJ34nO1xudmFyIGVuY29kZWRTZXBhcmF0b3IgPSAnfjEnO1xuXG4vKipcbiAqIFBhcnNlIHRocm91Z2ggYW4gZW5jb2RlZCBKU09OIFBvaW50ZXIgc3RyaW5nLCBkZWNvZGluZyBlYWNoIHBhdGggc2VnbWVudFxuICogYW5kIHBhc3NpbmcgaXQgdG8gYW4gb25TZWdtZW50IGNhbGxiYWNrIGZ1bmN0aW9uLlxuICogQHNlZSBodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNjkwMSNzZWN0aW9uLTRcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIGVuY29kZWQgSlNPTiBQb2ludGVyIHN0cmluZ1xuICogQHBhcmFtIHt7ZnVuY3Rpb24oc2VnbWVudDpzdHJpbmcpOmJvb2xlYW59fSBvblNlZ21lbnQgY2FsbGJhY2sgZnVuY3Rpb25cbiAqIEByZXR1cm5zIHtzdHJpbmd9IG9yaWdpbmFsIHBhdGhcbiAqL1xuZnVuY3Rpb24ganNvblBvaW50ZXJQYXJzZShwYXRoLCBvblNlZ21lbnQpIHtcblx0dmFyIHBvcywgYWNjdW0sIG1hdGNoZXMsIG1hdGNoO1xuXG5cdHBvcyA9IHBhdGguY2hhckF0KDApID09PSBzZXBhcmF0b3IgPyAxIDogMDtcblx0YWNjdW0gPSAnJztcblx0cGFyc2VSeC5sYXN0SW5kZXggPSBwb3M7XG5cblx0d2hpbGUobWF0Y2hlcyA9IHBhcnNlUnguZXhlYyhwYXRoKSkge1xuXG5cdFx0bWF0Y2ggPSBtYXRjaGVzWzBdO1xuXHRcdGFjY3VtICs9IHBhdGguc2xpY2UocG9zLCBwYXJzZVJ4Lmxhc3RJbmRleCAtIG1hdGNoLmxlbmd0aCk7XG5cdFx0cG9zID0gcGFyc2VSeC5sYXN0SW5kZXg7XG5cblx0XHRpZihtYXRjaCA9PT0gc2VwYXJhdG9yKSB7XG5cdFx0XHRpZiAob25TZWdtZW50KGFjY3VtKSA9PT0gZmFsc2UpIHJldHVybiBwYXRoO1xuXHRcdFx0YWNjdW0gPSAnJztcblx0XHR9IGVsc2Uge1xuXHRcdFx0YWNjdW0gKz0gbWF0Y2ggPT09IGVuY29kZWRTZXBhcmF0b3IgPyBzZXBhcmF0b3IgOiBlc2NhcGVDaGFyO1xuXHRcdH1cblx0fVxuXG5cdGFjY3VtICs9IHBhdGguc2xpY2UocG9zKTtcblx0b25TZWdtZW50KGFjY3VtKTtcblxuXHRyZXR1cm4gcGF0aDtcbn1cbiIsIi8qKiBAbGljZW5zZSBNSVQgTGljZW5zZSAoYykgY29weXJpZ2h0IDIwMTAtMjAxNCBvcmlnaW5hbCBhdXRob3Igb3IgYXV0aG9ycyAqL1xuLyoqIEBhdXRob3IgQnJpYW4gQ2F2YWxpZXIgKi9cbi8qKiBAYXV0aG9yIEpvaG4gSGFubiAqL1xuXG5leHBvcnRzLmNvbXBhcmUgPSBjb21wYXJlO1xuZXhwb3J0cy5yZWR1Y2UgPSByZWR1Y2U7XG5cbnZhciBSRU1PVkUsIFJJR0hULCBBREQsIERPV04sIFNLSVA7XG5cbmV4cG9ydHMuUkVNT1ZFID0gUkVNT1ZFID0gUklHSFQgPSAtMTtcbmV4cG9ydHMuQUREICAgID0gQUREICAgID0gRE9XTiAgPSAgMTtcbmV4cG9ydHMuRVFVQUwgID0gU0tJUCAgID0gMDtcblxuLyoqXG4gKiBDcmVhdGUgYW4gbGNzIGNvbXBhcmlzb24gbWF0cml4IGRlc2NyaWJpbmcgdGhlIGRpZmZlcmVuY2VzXG4gKiBiZXR3ZWVuIHR3byBhcnJheS1saWtlIHNlcXVlbmNlc1xuICogQHBhcmFtIHthcnJheX0gYSBhcnJheS1saWtlXG4gKiBAcGFyYW0ge2FycmF5fSBiIGFycmF5LWxpa2VcbiAqIEByZXR1cm5zIHtvYmplY3R9IGxjcyBkZXNjcmlwdG9yLCBzdWl0YWJsZSBmb3IgcGFzc2luZyB0byByZWR1Y2UoKVxuICovXG5mdW5jdGlvbiBjb21wYXJlKGEsIGIpIHtcblx0dmFyIGNvbHMgPSBhLmxlbmd0aDtcblx0dmFyIHJvd3MgPSBiLmxlbmd0aDtcblxuXHR2YXIgcHJlZml4ID0gZmluZFByZWZpeChhLCBiKTtcblx0dmFyIHN1ZmZpeCA9IHByZWZpeCA8IGNvbHMgJiYgcHJlZml4IDwgcm93c1xuXHRcdD8gZmluZFN1ZmZpeChhLCBiLCBwcmVmaXgpXG5cdFx0OiAwO1xuXG5cdHZhciByZW1vdmUgPSBzdWZmaXggKyBwcmVmaXggLSAxO1xuXHRjb2xzIC09IHJlbW92ZTtcblx0cm93cyAtPSByZW1vdmU7XG5cdHZhciBtYXRyaXggPSBjcmVhdGVNYXRyaXgoY29scywgcm93cyk7XG5cblx0Zm9yICh2YXIgaiA9IGNvbHMgLSAxOyBqID49IDA7IC0taikge1xuXHRcdGZvciAodmFyIGkgPSByb3dzIC0gMTsgaSA+PSAwOyAtLWkpIHtcblx0XHRcdG1hdHJpeFtpXVtqXSA9IGJhY2t0cmFjayhtYXRyaXgsIGEsIGIsIHByZWZpeCwgaiwgaSk7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHtcblx0XHRwcmVmaXg6IHByZWZpeCxcblx0XHRtYXRyaXg6IG1hdHJpeCxcblx0XHRzdWZmaXg6IHN1ZmZpeFxuXHR9O1xufVxuXG4vKipcbiAqIFJlZHVjZSBhIHNldCBvZiBsY3MgY2hhbmdlcyBwcmV2aW91c2x5IGNyZWF0ZWQgdXNpbmcgY29tcGFyZVxuICogQHBhcmFtIHtmdW5jdGlvbihyZXN1bHQ6KiwgdHlwZTpudW1iZXIsIGk6bnVtYmVyLCBqOm51bWJlcil9IGZcbiAqICByZWR1Y2VyIGZ1bmN0aW9uLCB3aGVyZTpcbiAqICAtIHJlc3VsdCBpcyB0aGUgY3VycmVudCByZWR1Y2UgdmFsdWUsXG4gKiAgLSB0eXBlIGlzIHRoZSB0eXBlIG9mIGNoYW5nZTogQURELCBSRU1PVkUsIG9yIFNLSVBcbiAqICAtIGkgaXMgdGhlIGluZGV4IG9mIHRoZSBjaGFuZ2UgbG9jYXRpb24gaW4gYlxuICogIC0gaiBpcyB0aGUgaW5kZXggb2YgdGhlIGNoYW5nZSBsb2NhdGlvbiBpbiBhXG4gKiBAcGFyYW0geyp9IHIgaW5pdGlhbCB2YWx1ZVxuICogQHBhcmFtIHtvYmplY3R9IGxjcyByZXN1bHRzIHJldHVybmVkIGJ5IGNvbXBhcmUoKVxuICogQHJldHVybnMgeyp9IHRoZSBmaW5hbCByZWR1Y2VkIHZhbHVlXG4gKi9cbmZ1bmN0aW9uIHJlZHVjZShmLCByLCBsY3MpIHtcblx0dmFyIGksIGosIGssIG9wO1xuXG5cdHZhciBtID0gbGNzLm1hdHJpeDtcblxuXHQvLyBSZWR1Y2Ugc2hhcmVkIHByZWZpeFxuXHR2YXIgbCA9IGxjcy5wcmVmaXg7XG5cdGZvcihpID0gMDtpIDwgbDsgKytpKSB7XG5cdFx0ciA9IGYociwgU0tJUCwgaSwgaSk7XG5cdH1cblxuXHQvLyBSZWR1Y2UgbG9uZ2VzdCBjaGFuZ2Ugc3BhblxuXHRrID0gaTtcblx0bCA9IG0ubGVuZ3RoO1xuXHRpID0gMDtcblx0aiA9IDA7XG5cdHdoaWxlKGkgPCBsKSB7XG5cdFx0b3AgPSBtW2ldW2pdLnR5cGU7XG5cdFx0ciA9IGYociwgb3AsIGkraywgaitrKTtcblxuXHRcdHN3aXRjaChvcCkge1xuXHRcdFx0Y2FzZSBTS0lQOiAgKytpOyArK2o7IGJyZWFrO1xuXHRcdFx0Y2FzZSBSSUdIVDogKytqOyBicmVhaztcblx0XHRcdGNhc2UgRE9XTjogICsraTsgYnJlYWs7XG5cdFx0fVxuXHR9XG5cblx0Ly8gUmVkdWNlIHNoYXJlZCBzdWZmaXhcblx0aSArPSBrO1xuXHRqICs9IGs7XG5cdGwgPSBsY3Muc3VmZml4O1xuXHRmb3IoayA9IDA7ayA8IGw7ICsraykge1xuXHRcdHIgPSBmKHIsIFNLSVAsIGkraywgaitrKTtcblx0fVxuXG5cdHJldHVybiByO1xufVxuXG5mdW5jdGlvbiBmaW5kUHJlZml4KGEsIGIpIHtcblx0dmFyIGkgPSAwO1xuXHR2YXIgbCA9IE1hdGgubWluKGEubGVuZ3RoLCBiLmxlbmd0aCk7XG5cdHdoaWxlKGkgPCBsICYmIGFbaV0gPT09IGJbaV0pIHtcblx0XHQrK2k7XG5cdH1cblx0cmV0dXJuIGk7XG59XG5cbmZ1bmN0aW9uIGZpbmRTdWZmaXgoYSwgYikge1xuXHR2YXIgYWwgPSBhLmxlbmd0aCAtIDE7XG5cdHZhciBibCA9IGIubGVuZ3RoIC0gMTtcblx0dmFyIGwgPSBNYXRoLm1pbihhbCwgYmwpO1xuXHR2YXIgaSA9IDA7XG5cdHdoaWxlKGkgPCBsICYmIGFbYWwtaV0gPT09IGJbYmwtaV0pIHtcblx0XHQrK2k7XG5cdH1cblx0cmV0dXJuIGk7XG59XG5cbmZ1bmN0aW9uIGJhY2t0cmFjayhtYXRyaXgsIGEsIGIsIHN0YXJ0LCBqLCBpKSB7XG5cdGlmIChhW2orc3RhcnRdID09PSBiW2krc3RhcnRdKSB7XG5cdFx0cmV0dXJuIHsgdmFsdWU6IG1hdHJpeFtpICsgMV1baiArIDFdLnZhbHVlLCB0eXBlOiBTS0lQIH07XG5cdH1cblx0aWYgKG1hdHJpeFtpXVtqICsgMV0udmFsdWUgPCBtYXRyaXhbaSArIDFdW2pdLnZhbHVlKSB7XG5cdFx0cmV0dXJuIHsgdmFsdWU6IG1hdHJpeFtpXVtqICsgMV0udmFsdWUgKyAxLCB0eXBlOiBSSUdIVCB9O1xuXHR9XG5cblx0cmV0dXJuIHsgdmFsdWU6IG1hdHJpeFtpICsgMV1bal0udmFsdWUgKyAxLCB0eXBlOiBET1dOIH07XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1hdHJpeCAoY29scywgcm93cykge1xuXHR2YXIgbSA9IFtdLCBpLCBqLCBsYXN0cm93O1xuXG5cdC8vIEZpbGwgdGhlIGxhc3Qgcm93XG5cdGxhc3Ryb3cgPSBtW3Jvd3NdID0gW107XG5cdGZvciAoaiA9IDA7IGo8Y29sczsgKytqKSB7XG5cdFx0bGFzdHJvd1tqXSA9IHsgdmFsdWU6IGNvbHMgLSBqLCB0eXBlOiBSSUdIVCB9O1xuXHR9XG5cblx0Ly8gRmlsbCB0aGUgbGFzdCBjb2xcblx0Zm9yIChpID0gMDsgaTxyb3dzOyArK2kpIHtcblx0XHRtW2ldID0gW107XG5cdFx0bVtpXVtjb2xzXSA9IHsgdmFsdWU6IHJvd3MgLSBpLCB0eXBlOiBET1dOIH07XG5cdH1cblxuXHQvLyBGaWxsIHRoZSBsYXN0IGNlbGxcblx0bVtyb3dzXVtjb2xzXSA9IHsgdmFsdWU6IDAsIHR5cGU6IFNLSVAgfTtcblxuXHRyZXR1cm4gbTtcbn1cbiIsInZhciBqc29uUG9pbnRlciA9IHJlcXVpcmUoJy4vanNvblBvaW50ZXInKTtcbnZhciBjbG9uZSA9IHJlcXVpcmUoJy4vY2xvbmUnKTtcbnZhciBkZWVwRXF1YWxzID0gcmVxdWlyZSgnLi9kZWVwRXF1YWxzJyk7XG52YXIgY29tbXV0ZVBhdGhzID0gcmVxdWlyZSgnLi9jb21tdXRlUGF0aHMnKTtcblxudmFyIGFycmF5ID0gcmVxdWlyZSgnLi9hcnJheScpO1xuXG52YXIgVGVzdEZhaWxlZEVycm9yID0gcmVxdWlyZSgnLi9UZXN0RmFpbGVkRXJyb3InKTtcbnZhciBJbnZhbGlkUGF0Y2hPcGVyYXRpb25FcnJvciA9IHJlcXVpcmUoJy4vSW52YWxpZFBhdGNoT3BlcmF0aW9uRXJyb3InKTtcbnZhciBQYXRjaE5vdEludmVydGlibGVFcnJvciA9IHJlcXVpcmUoJy4vUGF0Y2hOb3RJbnZlcnRpYmxlRXJyb3InKTtcblxudmFyIGZpbmQgPSBqc29uUG9pbnRlci5maW5kO1xudmFyIHBhcnNlQXJyYXlJbmRleCA9IGpzb25Qb2ludGVyLnBhcnNlQXJyYXlJbmRleDtcblxuZXhwb3J0cy50ZXN0ID0ge1xuXHRhcHBseTogYXBwbHlUZXN0LFxuXHRpbnZlcnNlOiBpbnZlcnRUZXN0LFxuXHRjb21tdXRlOiBjb21tdXRlVGVzdFxufTtcblxuZXhwb3J0cy5hZGQgPSB7XG5cdGFwcGx5OiBhcHBseUFkZCxcblx0aW52ZXJzZTogaW52ZXJ0QWRkLFxuXHRjb21tdXRlOiBjb21tdXRlQWRkT3JDb3B5XG59O1xuXG5leHBvcnRzLnJlbW92ZSA9IHtcblx0YXBwbHk6IGFwcGx5UmVtb3ZlLFxuXHRpbnZlcnNlOiBpbnZlcnRSZW1vdmUsXG5cdGNvbW11dGU6IGNvbW11dGVSZW1vdmVcbn07XG5cbmV4cG9ydHMucmVwbGFjZSA9IHtcblx0YXBwbHk6IGFwcGx5UmVwbGFjZSxcblx0aW52ZXJzZTogaW52ZXJ0UmVwbGFjZSxcblx0Y29tbXV0ZTogY29tbXV0ZVJlcGxhY2Vcbn07XG5cbmV4cG9ydHMubW92ZSA9IHtcblx0YXBwbHk6IGFwcGx5TW92ZSxcblx0aW52ZXJzZTogaW52ZXJ0TW92ZSxcblx0Y29tbXV0ZTogY29tbXV0ZU1vdmVcbn07XG5cbmV4cG9ydHMuY29weSA9IHtcblx0YXBwbHk6IGFwcGx5Q29weSxcblx0aW52ZXJzZTogbm90SW52ZXJ0aWJsZSxcblx0Y29tbXV0ZTogY29tbXV0ZUFkZE9yQ29weVxufTtcblxuLyoqXG4gKiBBcHBseSBhIHRlc3Qgb3BlcmF0aW9uIHRvIHhcbiAqIEBwYXJhbSB7b2JqZWN0fGFycmF5fSB4XG4gKiBAcGFyYW0ge29iamVjdH0gdGVzdCB0ZXN0IG9wZXJhdGlvblxuICogQHRocm93cyB7VGVzdEZhaWxlZEVycm9yfSBpZiB0aGUgdGVzdCBvcGVyYXRpb24gZmFpbHNcbiAqL1xuXG5mdW5jdGlvbiBhcHBseVRlc3QoeCwgdGVzdCwgb3B0aW9ucykge1xuXHR2YXIgcG9pbnRlciA9IGZpbmQoeCwgdGVzdC5wYXRoLCBvcHRpb25zLmZpbmRDb250ZXh0LCB0ZXN0LmNvbnRleHQpO1xuXHR2YXIgdGFyZ2V0ID0gcG9pbnRlci50YXJnZXQ7XG5cdHZhciBpbmRleCwgdmFsdWU7XG5cblx0aWYoQXJyYXkuaXNBcnJheSh0YXJnZXQpKSB7XG5cdFx0aW5kZXggPSBwYXJzZUFycmF5SW5kZXgocG9pbnRlci5rZXkpO1xuXHRcdC8vaW5kZXggPSBmaW5kSW5kZXgob3B0aW9ucy5maW5kQ29udGV4dCwgaW5kZXgsIHRhcmdldCwgdGVzdC5jb250ZXh0KTtcblx0XHR2YWx1ZSA9IHRhcmdldFtpbmRleF07XG5cdH0gZWxzZSB7XG5cdFx0dmFsdWUgPSBwb2ludGVyLmtleSA9PT0gdm9pZCAwID8gcG9pbnRlci50YXJnZXQgOiBwb2ludGVyLnRhcmdldFtwb2ludGVyLmtleV07XG5cdH1cblxuXHRpZighZGVlcEVxdWFscyh2YWx1ZSwgdGVzdC52YWx1ZSkpIHtcblx0XHR0aHJvdyBuZXcgVGVzdEZhaWxlZEVycm9yKCd0ZXN0IGZhaWxlZCAnICsgSlNPTi5zdHJpbmdpZnkodGVzdCkpO1xuXHR9XG5cblx0cmV0dXJuIHg7XG59XG5cbi8qKlxuICogSW52ZXJ0IHRoZSBwcm92aWRlZCB0ZXN0IGFuZCBhZGQgaXQgdG8gdGhlIGludmVydGVkIHBhdGNoIHNlcXVlbmNlXG4gKiBAcGFyYW0gcHJcbiAqIEBwYXJhbSB0ZXN0XG4gKiBAcmV0dXJucyB7bnVtYmVyfVxuICovXG5mdW5jdGlvbiBpbnZlcnRUZXN0KHByLCB0ZXN0KSB7XG5cdHByLnB1c2godGVzdCk7XG5cdHJldHVybiAxO1xufVxuXG5mdW5jdGlvbiBjb21tdXRlVGVzdCh0ZXN0LCBiKSB7XG5cdGlmKHRlc3QucGF0aCA9PT0gYi5wYXRoICYmIGIub3AgPT09ICdyZW1vdmUnKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignQ2FuXFwndCBjb21tdXRlIHRlc3QscmVtb3ZlIC0+IHJlbW92ZSx0ZXN0IGZvciBzYW1lIHBhdGgnKTtcblx0fVxuXG5cdGlmKGIub3AgPT09ICd0ZXN0JyB8fCBiLm9wID09PSAncmVwbGFjZScpIHtcblx0XHRyZXR1cm4gW2IsIHRlc3RdO1xuXHR9XG5cblx0cmV0dXJuIGNvbW11dGVQYXRocyh0ZXN0LCBiKTtcbn1cblxuLyoqXG4gKiBBcHBseSBhbiBhZGQgb3BlcmF0aW9uIHRvIHhcbiAqIEBwYXJhbSB7b2JqZWN0fGFycmF5fSB4XG4gKiBAcGFyYW0ge29iamVjdH0gY2hhbmdlIGFkZCBvcGVyYXRpb25cbiAqL1xuZnVuY3Rpb24gYXBwbHlBZGQoeCwgY2hhbmdlLCBvcHRpb25zKSB7XG5cdHZhciBwb2ludGVyID0gZmluZCh4LCBjaGFuZ2UucGF0aCwgb3B0aW9ucy5maW5kQ29udGV4dCwgY2hhbmdlLmNvbnRleHQpO1xuXG5cdGlmKG5vdEZvdW5kKHBvaW50ZXIpKSB7XG5cdFx0dGhyb3cgbmV3IEludmFsaWRQYXRjaE9wZXJhdGlvbkVycm9yKCdwYXRoIGRvZXMgbm90IGV4aXN0ICcgKyBjaGFuZ2UucGF0aCk7XG5cdH1cblxuXHRpZihjaGFuZ2UudmFsdWUgPT09IHZvaWQgMCkge1xuXHRcdHRocm93IG5ldyBJbnZhbGlkUGF0Y2hPcGVyYXRpb25FcnJvcignbWlzc2luZyB2YWx1ZScpO1xuXHR9XG5cblx0dmFyIHZhbCA9IGNsb25lKGNoYW5nZS52YWx1ZSk7XG5cblx0Ly8gSWYgcG9pbnRlciByZWZlcnMgdG8gd2hvbGUgZG9jdW1lbnQsIHJlcGxhY2Ugd2hvbGUgZG9jdW1lbnRcblx0aWYocG9pbnRlci5rZXkgPT09IHZvaWQgMCkge1xuXHRcdHJldHVybiB2YWw7XG5cdH1cblxuXHRfYWRkKHBvaW50ZXIsIHZhbCk7XG5cdHJldHVybiB4O1xufVxuXG5mdW5jdGlvbiBfYWRkKHBvaW50ZXIsIHZhbHVlKSB7XG5cdHZhciB0YXJnZXQgPSBwb2ludGVyLnRhcmdldDtcblxuXHRpZihBcnJheS5pc0FycmF5KHRhcmdldCkpIHtcblx0XHQvLyAnLScgaW5kaWNhdGVzICdhcHBlbmQnIHRvIGFycmF5XG5cdFx0aWYocG9pbnRlci5rZXkgPT09ICctJykge1xuXHRcdFx0dGFyZ2V0LnB1c2godmFsdWUpO1xuXHRcdH0gZWxzZSBpZiAocG9pbnRlci5rZXkgPiB0YXJnZXQubGVuZ3RoKSB7XG5cdFx0XHR0aHJvdyBuZXcgSW52YWxpZFBhdGNoT3BlcmF0aW9uRXJyb3IoJ3RhcmdldCBvZiBhZGQgb3V0c2lkZSBvZiBhcnJheSBib3VuZHMnKVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR0YXJnZXQuc3BsaWNlKHBvaW50ZXIua2V5LCAwLCB2YWx1ZSk7XG5cdFx0fVxuXHR9IGVsc2UgaWYoaXNWYWxpZE9iamVjdCh0YXJnZXQpKSB7XG5cdFx0dGFyZ2V0W3BvaW50ZXIua2V5XSA9IHZhbHVlO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBJbnZhbGlkUGF0Y2hPcGVyYXRpb25FcnJvcigndGFyZ2V0IG9mIGFkZCBtdXN0IGJlIGFuIG9iamVjdCBvciBhcnJheSAnICsgcG9pbnRlci5rZXkpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGludmVydEFkZChwciwgYWRkKSB7XG5cdHZhciBjb250ZXh0ID0gYWRkLmNvbnRleHQ7XG5cdGlmKGNvbnRleHQgIT09IHZvaWQgMCkge1xuXHRcdGNvbnRleHQgPSB7XG5cdFx0XHRiZWZvcmU6IGNvbnRleHQuYmVmb3JlLFxuXHRcdFx0YWZ0ZXI6IGFycmF5LmNvbnMoYWRkLnZhbHVlLCBjb250ZXh0LmFmdGVyKVxuXHRcdH1cblx0fVxuXHRwci5wdXNoKHsgb3A6ICd0ZXN0JywgcGF0aDogYWRkLnBhdGgsIHZhbHVlOiBhZGQudmFsdWUsIGNvbnRleHQ6IGNvbnRleHQgfSk7XG5cdHByLnB1c2goeyBvcDogJ3JlbW92ZScsIHBhdGg6IGFkZC5wYXRoLCBjb250ZXh0OiBjb250ZXh0IH0pO1xuXHRyZXR1cm4gMTtcbn1cblxuZnVuY3Rpb24gY29tbXV0ZUFkZE9yQ29weShhZGQsIGIpIHtcblx0aWYoYWRkLnBhdGggPT09IGIucGF0aCAmJiBiLm9wID09PSAncmVtb3ZlJykge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ0NhblxcJ3QgY29tbXV0ZSBhZGQscmVtb3ZlIC0+IHJlbW92ZSxhZGQgZm9yIHNhbWUgcGF0aCcpO1xuXHR9XG5cblx0cmV0dXJuIGNvbW11dGVQYXRocyhhZGQsIGIpO1xufVxuXG4vKipcbiAqIEFwcGx5IGEgcmVwbGFjZSBvcGVyYXRpb24gdG8geFxuICogQHBhcmFtIHtvYmplY3R8YXJyYXl9IHhcbiAqIEBwYXJhbSB7b2JqZWN0fSBjaGFuZ2UgcmVwbGFjZSBvcGVyYXRpb25cbiAqL1xuZnVuY3Rpb24gYXBwbHlSZXBsYWNlKHgsIGNoYW5nZSwgb3B0aW9ucykge1xuXHR2YXIgcG9pbnRlciA9IGZpbmQoeCwgY2hhbmdlLnBhdGgsIG9wdGlvbnMuZmluZENvbnRleHQsIGNoYW5nZS5jb250ZXh0KTtcblxuXHRpZihub3RGb3VuZChwb2ludGVyKSB8fCBtaXNzaW5nVmFsdWUocG9pbnRlcikpIHtcblx0XHR0aHJvdyBuZXcgSW52YWxpZFBhdGNoT3BlcmF0aW9uRXJyb3IoJ3BhdGggZG9lcyBub3QgZXhpc3QgJyArIGNoYW5nZS5wYXRoKTtcblx0fVxuXG5cdGlmKGNoYW5nZS52YWx1ZSA9PT0gdm9pZCAwKSB7XG5cdFx0dGhyb3cgbmV3IEludmFsaWRQYXRjaE9wZXJhdGlvbkVycm9yKCdtaXNzaW5nIHZhbHVlJyk7XG5cdH1cblxuXHR2YXIgdmFsdWUgPSBjbG9uZShjaGFuZ2UudmFsdWUpO1xuXG5cdC8vIElmIHBvaW50ZXIgcmVmZXJzIHRvIHdob2xlIGRvY3VtZW50LCByZXBsYWNlIHdob2xlIGRvY3VtZW50XG5cdGlmKHBvaW50ZXIua2V5ID09PSB2b2lkIDApIHtcblx0XHRyZXR1cm4gdmFsdWU7XG5cdH1cblxuXHR2YXIgdGFyZ2V0ID0gcG9pbnRlci50YXJnZXQ7XG5cblx0aWYoQXJyYXkuaXNBcnJheSh0YXJnZXQpKSB7XG5cdFx0dGFyZ2V0W3BhcnNlQXJyYXlJbmRleChwb2ludGVyLmtleSldID0gdmFsdWU7XG5cdH0gZWxzZSB7XG5cdFx0dGFyZ2V0W3BvaW50ZXIua2V5XSA9IHZhbHVlO1xuXHR9XG5cblx0cmV0dXJuIHg7XG59XG5cbmZ1bmN0aW9uIGludmVydFJlcGxhY2UocHIsIGMsIGksIHBhdGNoKSB7XG5cdHZhciBwcmV2ID0gcGF0Y2hbaS0xXTtcblx0aWYocHJldiA9PT0gdm9pZCAwIHx8IHByZXYub3AgIT09ICd0ZXN0JyB8fCBwcmV2LnBhdGggIT09IGMucGF0aCkge1xuXHRcdHRocm93IG5ldyBQYXRjaE5vdEludmVydGlibGVFcnJvcignY2Fubm90IGludmVydCByZXBsYWNlIHcvbyB0ZXN0Jyk7XG5cdH1cblxuXHR2YXIgY29udGV4dCA9IHByZXYuY29udGV4dDtcblx0aWYoY29udGV4dCAhPT0gdm9pZCAwKSB7XG5cdFx0Y29udGV4dCA9IHtcblx0XHRcdGJlZm9yZTogY29udGV4dC5iZWZvcmUsXG5cdFx0XHRhZnRlcjogYXJyYXkuY29ucyhwcmV2LnZhbHVlLCBhcnJheS50YWlsKGNvbnRleHQuYWZ0ZXIpKVxuXHRcdH1cblx0fVxuXG5cdHByLnB1c2goeyBvcDogJ3Rlc3QnLCBwYXRoOiBwcmV2LnBhdGgsIHZhbHVlOiBjLnZhbHVlIH0pO1xuXHRwci5wdXNoKHsgb3A6ICdyZXBsYWNlJywgcGF0aDogcHJldi5wYXRoLCB2YWx1ZTogcHJldi52YWx1ZSB9KTtcblx0cmV0dXJuIDI7XG59XG5cbmZ1bmN0aW9uIGNvbW11dGVSZXBsYWNlKHJlcGxhY2UsIGIpIHtcblx0aWYocmVwbGFjZS5wYXRoID09PSBiLnBhdGggJiYgYi5vcCA9PT0gJ3JlbW92ZScpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5cXCd0IGNvbW11dGUgcmVwbGFjZSxyZW1vdmUgLT4gcmVtb3ZlLHJlcGxhY2UgZm9yIHNhbWUgcGF0aCcpO1xuXHR9XG5cblx0aWYoYi5vcCA9PT0gJ3Rlc3QnIHx8IGIub3AgPT09ICdyZXBsYWNlJykge1xuXHRcdHJldHVybiBbYiwgcmVwbGFjZV07XG5cdH1cblxuXHRyZXR1cm4gY29tbXV0ZVBhdGhzKHJlcGxhY2UsIGIpO1xufVxuXG4vKipcbiAqIEFwcGx5IGEgcmVtb3ZlIG9wZXJhdGlvbiB0byB4XG4gKiBAcGFyYW0ge29iamVjdHxhcnJheX0geFxuICogQHBhcmFtIHtvYmplY3R9IGNoYW5nZSByZW1vdmUgb3BlcmF0aW9uXG4gKi9cbmZ1bmN0aW9uIGFwcGx5UmVtb3ZlKHgsIGNoYW5nZSwgb3B0aW9ucykge1xuXHR2YXIgcG9pbnRlciA9IGZpbmQoeCwgY2hhbmdlLnBhdGgsIG9wdGlvbnMuZmluZENvbnRleHQsIGNoYW5nZS5jb250ZXh0KTtcblxuXHQvLyBrZXkgbXVzdCBleGlzdCBmb3IgcmVtb3ZlXG5cdGlmKG5vdEZvdW5kKHBvaW50ZXIpIHx8IHBvaW50ZXIudGFyZ2V0W3BvaW50ZXIua2V5XSA9PT0gdm9pZCAwKSB7XG5cdFx0dGhyb3cgbmV3IEludmFsaWRQYXRjaE9wZXJhdGlvbkVycm9yKCdwYXRoIGRvZXMgbm90IGV4aXN0ICcgKyBjaGFuZ2UucGF0aCk7XG5cdH1cblxuXHRfcmVtb3ZlKHBvaW50ZXIpO1xuXHRyZXR1cm4geDtcbn1cblxuZnVuY3Rpb24gX3JlbW92ZSAocG9pbnRlcikge1xuXHR2YXIgdGFyZ2V0ID0gcG9pbnRlci50YXJnZXQ7XG5cblx0dmFyIHJlbW92ZWQ7XG5cdGlmIChBcnJheS5pc0FycmF5KHRhcmdldCkpIHtcblx0XHRyZW1vdmVkID0gdGFyZ2V0LnNwbGljZShwYXJzZUFycmF5SW5kZXgocG9pbnRlci5rZXkpLCAxKTtcblx0XHRyZXR1cm4gcmVtb3ZlZFswXTtcblxuXHR9IGVsc2UgaWYgKGlzVmFsaWRPYmplY3QodGFyZ2V0KSkge1xuXHRcdHJlbW92ZWQgPSB0YXJnZXRbcG9pbnRlci5rZXldO1xuXHRcdGRlbGV0ZSB0YXJnZXRbcG9pbnRlci5rZXldO1xuXHRcdHJldHVybiByZW1vdmVkO1xuXG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IEludmFsaWRQYXRjaE9wZXJhdGlvbkVycm9yKCd0YXJnZXQgb2YgcmVtb3ZlIG11c3QgYmUgYW4gb2JqZWN0IG9yIGFycmF5Jyk7XG5cdH1cbn1cblxuZnVuY3Rpb24gaW52ZXJ0UmVtb3ZlKHByLCBjLCBpLCBwYXRjaCkge1xuXHR2YXIgcHJldiA9IHBhdGNoW2ktMV07XG5cdGlmKHByZXYgPT09IHZvaWQgMCB8fCBwcmV2Lm9wICE9PSAndGVzdCcgfHwgcHJldi5wYXRoICE9PSBjLnBhdGgpIHtcblx0XHR0aHJvdyBuZXcgUGF0Y2hOb3RJbnZlcnRpYmxlRXJyb3IoJ2Nhbm5vdCBpbnZlcnQgcmVtb3ZlIHcvbyB0ZXN0Jyk7XG5cdH1cblxuXHR2YXIgY29udGV4dCA9IHByZXYuY29udGV4dDtcblx0aWYoY29udGV4dCAhPT0gdm9pZCAwKSB7XG5cdFx0Y29udGV4dCA9IHtcblx0XHRcdGJlZm9yZTogY29udGV4dC5iZWZvcmUsXG5cdFx0XHRhZnRlcjogYXJyYXkudGFpbChjb250ZXh0LmFmdGVyKVxuXHRcdH1cblx0fVxuXG5cdHByLnB1c2goeyBvcDogJ2FkZCcsIHBhdGg6IHByZXYucGF0aCwgdmFsdWU6IHByZXYudmFsdWUsIGNvbnRleHQ6IGNvbnRleHQgfSk7XG5cdHJldHVybiAyO1xufVxuXG5mdW5jdGlvbiBjb21tdXRlUmVtb3ZlKHJlbW92ZSwgYikge1xuXHRpZihyZW1vdmUucGF0aCA9PT0gYi5wYXRoICYmIGIub3AgPT09ICdyZW1vdmUnKSB7XG5cdFx0cmV0dXJuIFtiLCByZW1vdmVdO1xuXHR9XG5cblx0cmV0dXJuIGNvbW11dGVQYXRocyhyZW1vdmUsIGIpO1xufVxuXG4vKipcbiAqIEFwcGx5IGEgbW92ZSBvcGVyYXRpb24gdG8geFxuICogQHBhcmFtIHtvYmplY3R8YXJyYXl9IHhcbiAqIEBwYXJhbSB7b2JqZWN0fSBjaGFuZ2UgbW92ZSBvcGVyYXRpb25cbiAqL1xuZnVuY3Rpb24gYXBwbHlNb3ZlKHgsIGNoYW5nZSwgb3B0aW9ucykge1xuXHRpZihqc29uUG9pbnRlci5jb250YWlucyhjaGFuZ2UucGF0aCwgY2hhbmdlLmZyb20pKSB7XG5cdFx0dGhyb3cgbmV3IEludmFsaWRQYXRjaE9wZXJhdGlvbkVycm9yKCdtb3ZlLmZyb20gY2Fubm90IGJlIGFuY2VzdG9yIG9mIG1vdmUucGF0aCcpO1xuXHR9XG5cblx0dmFyIHB0byA9IGZpbmQoeCwgY2hhbmdlLnBhdGgsIG9wdGlvbnMuZmluZENvbnRleHQsIGNoYW5nZS5jb250ZXh0KTtcblx0dmFyIHBmcm9tID0gZmluZCh4LCBjaGFuZ2UuZnJvbSwgb3B0aW9ucy5maW5kQ29udGV4dCwgY2hhbmdlLmZyb21Db250ZXh0KTtcblxuXHRfYWRkKHB0bywgX3JlbW92ZShwZnJvbSkpO1xuXHRyZXR1cm4geDtcbn1cblxuZnVuY3Rpb24gaW52ZXJ0TW92ZShwciwgYykge1xuXHRwci5wdXNoKHsgb3A6ICdtb3ZlJyxcblx0XHRwYXRoOiBjLmZyb20sIGNvbnRleHQ6IGMuZnJvbUNvbnRleHQsXG5cdFx0ZnJvbTogYy5wYXRoLCBmcm9tQ29udGV4dDogYy5jb250ZXh0IH0pO1xuXHRyZXR1cm4gMTtcbn1cblxuZnVuY3Rpb24gY29tbXV0ZU1vdmUobW92ZSwgYikge1xuXHRpZihtb3ZlLnBhdGggPT09IGIucGF0aCAmJiBiLm9wID09PSAncmVtb3ZlJykge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ0NhblxcJ3QgY29tbXV0ZSBtb3ZlLHJlbW92ZSAtPiBtb3ZlLHJlcGxhY2UgZm9yIHNhbWUgcGF0aCcpO1xuXHR9XG5cblx0cmV0dXJuIGNvbW11dGVQYXRocyhtb3ZlLCBiKTtcbn1cblxuLyoqXG4gKiBBcHBseSBhIGNvcHkgb3BlcmF0aW9uIHRvIHhcbiAqIEBwYXJhbSB7b2JqZWN0fGFycmF5fSB4XG4gKiBAcGFyYW0ge29iamVjdH0gY2hhbmdlIGNvcHkgb3BlcmF0aW9uXG4gKi9cbmZ1bmN0aW9uIGFwcGx5Q29weSh4LCBjaGFuZ2UsIG9wdGlvbnMpIHtcblx0dmFyIHB0byA9IGZpbmQoeCwgY2hhbmdlLnBhdGgsIG9wdGlvbnMuZmluZENvbnRleHQsIGNoYW5nZS5jb250ZXh0KTtcblx0dmFyIHBmcm9tID0gZmluZCh4LCBjaGFuZ2UuZnJvbSwgb3B0aW9ucy5maW5kQ29udGV4dCwgY2hhbmdlLmZyb21Db250ZXh0KTtcblxuXHRpZihub3RGb3VuZChwZnJvbSkgfHwgbWlzc2luZ1ZhbHVlKHBmcm9tKSkge1xuXHRcdHRocm93IG5ldyBJbnZhbGlkUGF0Y2hPcGVyYXRpb25FcnJvcignY29weS5mcm9tIG11c3QgZXhpc3QnKTtcblx0fVxuXG5cdHZhciB0YXJnZXQgPSBwZnJvbS50YXJnZXQ7XG5cdHZhciB2YWx1ZTtcblxuXHRpZihBcnJheS5pc0FycmF5KHRhcmdldCkpIHtcblx0XHR2YWx1ZSA9IHRhcmdldFtwYXJzZUFycmF5SW5kZXgocGZyb20ua2V5KV07XG5cdH0gZWxzZSB7XG5cdFx0dmFsdWUgPSB0YXJnZXRbcGZyb20ua2V5XTtcblx0fVxuXG5cdF9hZGQocHRvLCBjbG9uZSh2YWx1ZSkpO1xuXHRyZXR1cm4geDtcbn1cblxuLy8gTk9URTogQ29weSBpcyBub3QgaW52ZXJ0aWJsZVxuLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9jdWpvanMvamlmZi9pc3N1ZXMvOVxuLy8gVGhpcyBuZWVkcyBtb3JlIHRob3VnaHQuIFdlIG1heSBoYXZlIHRvIGV4dGVuZC9hbWVuZCBKU09OIFBhdGNoLlxuLy8gQXQgZmlyc3QgZ2xhbmNlLCB0aGlzIHNlZW1zIGxpa2UgaXQgc2hvdWxkIGp1c3QgYmUgYSByZW1vdmUuXG4vLyBIb3dldmVyLCB0aGF0J3Mgbm90IGNvcnJlY3QuICBJdCB2aW9sYXRlcyB0aGUgaW52b2x1dGlvbjpcbi8vIGludmVydChpbnZlcnQocCkpIH49IHAuICBGb3IgZXhhbXBsZTpcbi8vIGludmVydChjb3B5KSAtPiByZW1vdmVcbi8vIGludmVydChyZW1vdmUpIC0+IGFkZFxuLy8gdGh1czogaW52ZXJ0KGludmVydChjb3B5KSkgLT4gYWRkIChET0ghIHRoaXMgc2hvdWxkIGJlIGNvcHkhKVxuXG5mdW5jdGlvbiBub3RJbnZlcnRpYmxlKF8sIGMpIHtcblx0dGhyb3cgbmV3IFBhdGNoTm90SW52ZXJ0aWJsZUVycm9yKCdjYW5ub3QgaW52ZXJ0ICcgKyBjLm9wKTtcbn1cblxuZnVuY3Rpb24gbm90Rm91bmQgKHBvaW50ZXIpIHtcblx0cmV0dXJuIHBvaW50ZXIgPT09IHZvaWQgMCB8fCAocG9pbnRlci50YXJnZXQgPT0gbnVsbCAmJiBwb2ludGVyLmtleSAhPT0gdm9pZCAwKTtcbn1cblxuZnVuY3Rpb24gbWlzc2luZ1ZhbHVlKHBvaW50ZXIpIHtcblx0cmV0dXJuIHBvaW50ZXIua2V5ICE9PSB2b2lkIDAgJiYgcG9pbnRlci50YXJnZXRbcG9pbnRlci5rZXldID09PSB2b2lkIDA7XG59XG5cbi8qKlxuICogUmV0dXJuIHRydWUgaWYgeCBpcyBhIG5vbi1udWxsIG9iamVjdFxuICogQHBhcmFtIHsqfSB4XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gaXNWYWxpZE9iamVjdCAoeCkge1xuXHRyZXR1cm4geCAhPT0gbnVsbCAmJiB0eXBlb2YgeCA9PT0gJ29iamVjdCc7XG59XG4iLCJpbXBvcnQgeyByZXNvbHZlUGF0aCB9IGZyb20gJy4vdHlwZWQtcGF0aCc7XHJcbmltcG9ydCB7IGRpZmYgYXMgamlmZkRpZmYgfSBmcm9tICdqaWZmJztcclxuZXhwb3J0IGZ1bmN0aW9uIGRpZmYoZnJvbSwgdG8sIGJhc2VQYXRoKSB7XHJcbiAgICB2YXIgb3BlcmF0aW9ucyA9IGppZmZEaWZmKGZyb20sIHRvLCB7XHJcbiAgICAgICAgaW52ZXJ0aWJsZTogZmFsc2UgLy8gRG8gbm90IGluY2x1ZGUgdGVzdCBvcGVyYXRpb25zIGF0IHRoZSBtb21lbnRcclxuICAgIH0pO1xyXG4gICAgdmFyIHJlc29sdmVkQmFzZVBhdGggPSAnJztcclxuICAgIGlmIChiYXNlUGF0aCkge1xyXG4gICAgICAgIHJlc29sdmVkQmFzZVBhdGggPSByZXNvbHZlUGF0aChiYXNlUGF0aCk7XHJcbiAgICB9XHJcbiAgICBpZiAocmVzb2x2ZWRCYXNlUGF0aC5lbmRzV2l0aCgnLycpKSB7XHJcbiAgICAgICAgcmVzb2x2ZWRCYXNlUGF0aCA9IHJlc29sdmVkQmFzZVBhdGguc3Vic3RyKDAsIHJlc29sdmVkQmFzZVBhdGgubGVuZ3RoIC0gMSk7XHJcbiAgICB9XHJcbiAgICBmb3IgKHZhciBfaSA9IDAsIG9wZXJhdGlvbnNfMSA9IG9wZXJhdGlvbnM7IF9pIDwgb3BlcmF0aW9uc18xLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgIHZhciBvcGVyYXRpb24gPSBvcGVyYXRpb25zXzFbX2ldO1xyXG4gICAgICAgIG9wZXJhdGlvbi5wYXRoID0gcmVzb2x2ZWRCYXNlUGF0aCArIG9wZXJhdGlvbi5wYXRoO1xyXG4gICAgICAgIGlmIChvcGVyYXRpb24uZnJvbSkge1xyXG4gICAgICAgICAgICBvcGVyYXRpb24uZnJvbSA9IHJlc29sdmVkQmFzZVBhdGggKyBvcGVyYXRpb24uZnJvbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gamlmZi5kaWZmIGluc2VydHMgYSBjb250ZXh0IHByb3BlcnR5IGZvciBlYWNoIG9wZXJhdGlvblxyXG4gICAgICAgIGRlbGV0ZSBvcGVyYXRpb24uY29udGV4dDtcclxuICAgIH1cclxuICAgIHJldHVybiBvcGVyYXRpb25zO1xyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRpZmYuanMubWFwIiwiZXhwb3J0IHsgZGlmZiB9IGZyb20gJy4vZGlmZic7XHJcbmV4cG9ydCB7IHR5cGVkUGF0aCB9IGZyb20gJy4vdHlwZWQtcGF0aCc7XHJcbmV4cG9ydCB7IFBhdGNoIH0gZnJvbSAnLi9wYXRjaCc7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsImltcG9ydCB7IHJlc29sdmVQYXRoIH0gZnJvbSAnLi90eXBlZC1wYXRoJztcclxudmFyIFBhdGNoID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gUGF0Y2goKSB7XHJcbiAgICAgICAgdGhpcy5vcGVyYXRpb25zID0gW107XHJcbiAgICB9XHJcbiAgICBQYXRjaC5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gKHBhdGgsIHZhbHVlKSB7XHJcbiAgICAgICAgdmFyIHJlc29sdmVkUGF0aCA9IHJlc29sdmVQYXRoKHBhdGgpO1xyXG4gICAgICAgIGlmICghL14uKlswLTldJC8udGVzdChyZXNvbHZlZFBhdGgpKSB7XHJcbiAgICAgICAgICAgIHJlc29sdmVkUGF0aCArPSBcIi8tXCI7IC8vIEFwcGVuZFxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm9wZXJhdGlvbnMucHVzaCh7IG9wOiAnYWRkJywgcGF0aDogcmVzb2x2ZWRQYXRoLCB2YWx1ZTogdmFsdWUgfSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgUGF0Y2gucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uIChwYXRoKSB7XHJcbiAgICAgICAgdGhpcy5vcGVyYXRpb25zLnB1c2goeyBvcDogJ3JlbW92ZScsIHBhdGg6IHJlc29sdmVQYXRoKHBhdGgpIH0pO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuICAgIFBhdGNoLnByb3RvdHlwZS5yZXBsYWNlID0gZnVuY3Rpb24gKHBhdGgsIHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5vcGVyYXRpb25zLnB1c2goeyBvcDogJ3JlcGxhY2UnLCBwYXRoOiByZXNvbHZlUGF0aChwYXRoKSwgdmFsdWU6IHZhbHVlIH0pO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuICAgIFBhdGNoLnByb3RvdHlwZS5jb3B5ID0gZnVuY3Rpb24gKGZyb20sIHBhdGgpIHtcclxuICAgICAgICB0aGlzLm9wZXJhdGlvbnMucHVzaCh7IG9wOiAnY29weScsIGZyb206IHJlc29sdmVQYXRoKGZyb20pLCBwYXRoOiByZXNvbHZlUGF0aChwYXRoKSB9KTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcbiAgICBQYXRjaC5wcm90b3R5cGUubW92ZSA9IGZ1bmN0aW9uIChmcm9tLCBwYXRoKSB7XHJcbiAgICAgICAgdGhpcy5vcGVyYXRpb25zLnB1c2goeyBvcDogJ21vdmUnLCBmcm9tOiByZXNvbHZlUGF0aChmcm9tKSwgcGF0aDogcmVzb2x2ZVBhdGgocGF0aCkgfSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgUGF0Y2gucHJvdG90eXBlLnRlc3QgPSBmdW5jdGlvbiAocGF0aCwgdmFsdWUpIHtcclxuICAgICAgICB0aGlzLm9wZXJhdGlvbnMucHVzaCh7IG9wOiAndGVzdCcsIHBhdGg6IHJlc29sdmVQYXRoKHBhdGgpLCB2YWx1ZTogdmFsdWUgfSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFBhdGNoO1xyXG59KCkpO1xyXG5leHBvcnQgeyBQYXRjaCB9O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1wYXRjaC5qcy5tYXAiLCIvLyBodHRwczovL2dpdGh1Yi5jb20vTWljcm9zb2Z0L1R5cGVTY3JpcHQvaXNzdWVzLzM0OTYjaXNzdWVjb21tZW50LTEyODU1MzU0MFxyXG52YXIgdG9TdHJpbmdNZXRob2RzID0gW1xyXG4gICAgJ3RvU3RyaW5nJyxcclxuICAgICdwYXRoJyxcclxuICAgIFN5bWJvbC50b1N0cmluZ1RhZyxcclxuICAgICd2YWx1ZU9mJ1xyXG5dO1xyXG5mdW5jdGlvbiBwYXRoVG9TdHJpbmcocGF0aCkge1xyXG4gICAgcmV0dXJuIHBhdGgucmVkdWNlKGZ1bmN0aW9uIChhY2N1bXVsYXRlZCwgY3VycmVudCkge1xyXG4gICAgICAgIGlmICgrY3VycmVudCA9PT0gK2N1cnJlbnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGFjY3VtdWxhdGVkICsgKFwiL1wiICsgY3VycmVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGFjY3VtdWxhdGVkICE9PSAnLycpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGFjY3VtdWxhdGVkICsgKFwiL1wiICsgY3VycmVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gYWNjdW11bGF0ZWQgKyBjdXJyZW50O1xyXG4gICAgICAgIH1cclxuICAgIH0sICcvJyk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVkUGF0aChwYXRoKSB7XHJcbiAgICBpZiAocGF0aCA9PT0gdm9pZCAwKSB7IHBhdGggPSBbXTsgfVxyXG4gICAgcmV0dXJuIG5ldyBQcm94eSh7fSwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKHRhcmdldCwgbmFtZSkge1xyXG4gICAgICAgICAgICBpZiAodG9TdHJpbmdNZXRob2RzLmluY2x1ZGVzKG5hbWUpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkgeyByZXR1cm4gcGF0aFRvU3RyaW5nKHBhdGgpOyB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0eXBlZFBhdGgocGF0aC5jb25jYXQoW25hbWUudG9TdHJpbmcoKV0pKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZVBhdGgocGF0aCkge1xyXG4gICAgaWYgKHR5cGVvZiBwYXRoID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgIHJldHVybiBwYXRoO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoaXNCdWlsdFBhdGgocGF0aCkpIHtcclxuICAgICAgICByZXR1cm4gcGF0aC5wYXRoKCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICByZXR1cm4gcGF0aCh0eXBlZFBhdGgoKSkucGF0aCgpO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIGlzQnVpbHRQYXRoKHBhdGgpIHtcclxuICAgIHJldHVybiB0eXBlb2YgcGF0aC5wYXRoID09PSAnZnVuY3Rpb24nO1xyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXR5cGVkLXBhdGguanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBwcmVmaXggPSAnZmFzJztcbnZhciBpY29uTmFtZSA9ICdhcnJvdy1yaWdodCc7XG52YXIgd2lkdGggPSA0NDg7XG52YXIgaGVpZ2h0ID0gNTEyO1xudmFyIGxpZ2F0dXJlcyA9IFtdO1xudmFyIHVuaWNvZGUgPSAnZjA2MSc7XG52YXIgc3ZnUGF0aERhdGEgPSAnTTE5MC41IDY2LjlsMjIuMi0yMi4yYzkuNC05LjQgMjQuNi05LjQgMzMuOSAwTDQ0MSAyMzljOS40IDkuNCA5LjQgMjQuNiAwIDMzLjlMMjQ2LjYgNDY3LjNjLTkuNCA5LjQtMjQuNiA5LjQtMzMuOSAwbC0yMi4yLTIyLjJjLTkuNS05LjUtOS4zLTI1IC40LTM0LjNMMzExLjQgMjk2SDI0Yy0xMy4zIDAtMjQtMTAuNy0yNC0yNHYtMzJjMC0xMy4zIDEwLjctMjQgMjQtMjRoMjg3LjRMMTkwLjkgMTAxLjJjLTkuOC05LjMtMTAtMjQuOC0uNC0zNC4zeic7XG5cbmV4cG9ydHMuZGVmaW5pdGlvbiA9IHtcbiAgcHJlZml4OiBwcmVmaXgsXG4gIGljb25OYW1lOiBpY29uTmFtZSxcbiAgaWNvbjogW1xuICAgIHdpZHRoLFxuICAgIGhlaWdodCxcbiAgICBsaWdhdHVyZXMsXG4gICAgdW5pY29kZSxcbiAgICBzdmdQYXRoRGF0YVxuICBdfTtcblxuZXhwb3J0cy5mYUFycm93UmlnaHQgPSBleHBvcnRzLmRlZmluaXRpb247XG5leHBvcnRzLnByZWZpeCA9IHByZWZpeDtcbmV4cG9ydHMuaWNvbk5hbWUgPSBpY29uTmFtZTtcbmV4cG9ydHMud2lkdGggPSB3aWR0aDtcbmV4cG9ydHMuaGVpZ2h0ID0gaGVpZ2h0O1xuZXhwb3J0cy5saWdhdHVyZXMgPSBsaWdhdHVyZXM7XG5leHBvcnRzLnVuaWNvZGUgPSB1bmljb2RlO1xuZXhwb3J0cy5zdmdQYXRoRGF0YSA9IHN2Z1BhdGhEYXRhOyIsIid1c2Ugc3RyaWN0Jztcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgcHJlZml4ID0gJ2Zhcyc7XG52YXIgaWNvbk5hbWUgPSAnZWRpdCc7XG52YXIgd2lkdGggPSA1NzY7XG52YXIgaGVpZ2h0ID0gNTEyO1xudmFyIGxpZ2F0dXJlcyA9IFtdO1xudmFyIHVuaWNvZGUgPSAnZjA0NCc7XG52YXIgc3ZnUGF0aERhdGEgPSAnTTQwMi42IDgzLjJsOTAuMiA5MC4yYzMuOCAzLjggMy44IDEwIDAgMTMuOEwyNzQuNCA0MDUuNmwtOTIuOCAxMC4zYy0xMi40IDEuNC0yMi45LTkuMS0yMS41LTIxLjVsMTAuMy05Mi44TDM4OC44IDgzLjJjMy44LTMuOCAxMC0zLjggMTMuOCAwem0xNjItMjIuOWwtNDguOC00OC44Yy0xNS4yLTE1LjItMzkuOS0xNS4yLTU1LjIgMGwtMzUuNCAzNS40Yy0zLjggMy44LTMuOCAxMCAwIDEzLjhsOTAuMiA5MC4yYzMuOCAzLjggMTAgMy44IDEzLjggMGwzNS40LTM1LjRjMTUuMi0xNS4zIDE1LjItNDAgMC01NS4yek0zODQgMzQ2LjJWNDQ4SDY0VjEyOGgyMjkuOGMzLjIgMCA2LjItMS4zIDguNS0zLjVsNDAtNDBjNy42LTcuNiAyLjItMjAuNS04LjUtMjAuNUg0OEMyMS41IDY0IDAgODUuNSAwIDExMnYzNTJjMCAyNi41IDIxLjUgNDggNDggNDhoMzUyYzI2LjUgMCA0OC0yMS41IDQ4LTQ4VjMwNi4yYzAtMTAuNy0xMi45LTE2LTIwLjUtOC41bC00MCA0MGMtMi4yIDIuMy0zLjUgNS4zLTMuNSA4LjV6JztcblxuZXhwb3J0cy5kZWZpbml0aW9uID0ge1xuICBwcmVmaXg6IHByZWZpeCxcbiAgaWNvbk5hbWU6IGljb25OYW1lLFxuICBpY29uOiBbXG4gICAgd2lkdGgsXG4gICAgaGVpZ2h0LFxuICAgIGxpZ2F0dXJlcyxcbiAgICB1bmljb2RlLFxuICAgIHN2Z1BhdGhEYXRhXG4gIF19O1xuXG5leHBvcnRzLmZhRWRpdCA9IGV4cG9ydHMuZGVmaW5pdGlvbjtcbmV4cG9ydHMucHJlZml4ID0gcHJlZml4O1xuZXhwb3J0cy5pY29uTmFtZSA9IGljb25OYW1lO1xuZXhwb3J0cy53aWR0aCA9IHdpZHRoO1xuZXhwb3J0cy5oZWlnaHQgPSBoZWlnaHQ7XG5leHBvcnRzLmxpZ2F0dXJlcyA9IGxpZ2F0dXJlcztcbmV4cG9ydHMudW5pY29kZSA9IHVuaWNvZGU7XG5leHBvcnRzLnN2Z1BhdGhEYXRhID0gc3ZnUGF0aERhdGE7IiwiJ3VzZSBzdHJpY3QnO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBwcmVmaXggPSAnZmFzJztcbnZhciBpY29uTmFtZSA9ICdsaXN0JztcbnZhciB3aWR0aCA9IDUxMjtcbnZhciBoZWlnaHQgPSA1MTI7XG52YXIgbGlnYXR1cmVzID0gW107XG52YXIgdW5pY29kZSA9ICdmMDNhJztcbnZhciBzdmdQYXRoRGF0YSA9ICdNMTI4IDExNlY3NmMwLTguODM3IDcuMTYzLTE2IDE2LTE2aDM1MmM4LjgzNyAwIDE2IDcuMTYzIDE2IDE2djQwYzAgOC44MzctNy4xNjMgMTYtMTYgMTZIMTQ0Yy04LjgzNyAwLTE2LTcuMTYzLTE2LTE2em0xNiAxNzZoMzUyYzguODM3IDAgMTYtNy4xNjMgMTYtMTZ2LTQwYzAtOC44MzctNy4xNjMtMTYtMTYtMTZIMTQ0Yy04LjgzNyAwLTE2IDcuMTYzLTE2IDE2djQwYzAgOC44MzcgNy4xNjMgMTYgMTYgMTZ6bTAgMTYwaDM1MmM4LjgzNyAwIDE2LTcuMTYzIDE2LTE2di00MGMwLTguODM3LTcuMTYzLTE2LTE2LTE2SDE0NGMtOC44MzcgMC0xNiA3LjE2My0xNiAxNnY0MGMwIDguODM3IDcuMTYzIDE2IDE2IDE2ek0xNiAxNDRoNjRjOC44MzcgMCAxNi03LjE2MyAxNi0xNlY2NGMwLTguODM3LTcuMTYzLTE2LTE2LTE2SDE2QzcuMTYzIDQ4IDAgNTUuMTYzIDAgNjR2NjRjMCA4LjgzNyA3LjE2MyAxNiAxNiAxNnptMCAxNjBoNjRjOC44MzcgMCAxNi03LjE2MyAxNi0xNnYtNjRjMC04LjgzNy03LjE2My0xNi0xNi0xNkgxNmMtOC44MzcgMC0xNiA3LjE2My0xNiAxNnY2NGMwIDguODM3IDcuMTYzIDE2IDE2IDE2em0wIDE2MGg2NGM4LjgzNyAwIDE2LTcuMTYzIDE2LTE2di02NGMwLTguODM3LTcuMTYzLTE2LTE2LTE2SDE2Yy04LjgzNyAwLTE2IDcuMTYzLTE2IDE2djY0YzAgOC44MzcgNy4xNjMgMTYgMTYgMTZ6JztcblxuZXhwb3J0cy5kZWZpbml0aW9uID0ge1xuICBwcmVmaXg6IHByZWZpeCxcbiAgaWNvbk5hbWU6IGljb25OYW1lLFxuICBpY29uOiBbXG4gICAgd2lkdGgsXG4gICAgaGVpZ2h0LFxuICAgIGxpZ2F0dXJlcyxcbiAgICB1bmljb2RlLFxuICAgIHN2Z1BhdGhEYXRhXG4gIF19O1xuXG5leHBvcnRzLmZhTGlzdCA9IGV4cG9ydHMuZGVmaW5pdGlvbjtcbmV4cG9ydHMucHJlZml4ID0gcHJlZml4O1xuZXhwb3J0cy5pY29uTmFtZSA9IGljb25OYW1lO1xuZXhwb3J0cy53aWR0aCA9IHdpZHRoO1xuZXhwb3J0cy5oZWlnaHQgPSBoZWlnaHQ7XG5leHBvcnRzLmxpZ2F0dXJlcyA9IGxpZ2F0dXJlcztcbmV4cG9ydHMudW5pY29kZSA9IHVuaWNvZGU7XG5leHBvcnRzLnN2Z1BhdGhEYXRhID0gc3ZnUGF0aERhdGE7IiwiJ3VzZSBzdHJpY3QnO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBwcmVmaXggPSAnZmFzJztcbnZhciBpY29uTmFtZSA9ICdwbHVzJztcbnZhciB3aWR0aCA9IDQ0ODtcbnZhciBoZWlnaHQgPSA1MTI7XG52YXIgbGlnYXR1cmVzID0gW107XG52YXIgdW5pY29kZSA9ICdmMDY3JztcbnZhciBzdmdQYXRoRGF0YSA9ICdNNDE2IDIwOEgyNzJWNjRjMC0xNy42Ny0xNC4zMy0zMi0zMi0zMmgtMzJjLTE3LjY3IDAtMzIgMTQuMzMtMzIgMzJ2MTQ0SDMyYy0xNy42NyAwLTMyIDE0LjMzLTMyIDMydjMyYzAgMTcuNjcgMTQuMzMgMzIgMzIgMzJoMTQ0djE0NGMwIDE3LjY3IDE0LjMzIDMyIDMyIDMyaDMyYzE3LjY3IDAgMzItMTQuMzMgMzItMzJWMzA0aDE0NGMxNy42NyAwIDMyLTE0LjMzIDMyLTMydi0zMmMwLTE3LjY3LTE0LjMzLTMyLTMyLTMyeic7XG5cbmV4cG9ydHMuZGVmaW5pdGlvbiA9IHtcbiAgcHJlZml4OiBwcmVmaXgsXG4gIGljb25OYW1lOiBpY29uTmFtZSxcbiAgaWNvbjogW1xuICAgIHdpZHRoLFxuICAgIGhlaWdodCxcbiAgICBsaWdhdHVyZXMsXG4gICAgdW5pY29kZSxcbiAgICBzdmdQYXRoRGF0YVxuICBdfTtcblxuZXhwb3J0cy5mYVBsdXMgPSBleHBvcnRzLmRlZmluaXRpb247XG5leHBvcnRzLnByZWZpeCA9IHByZWZpeDtcbmV4cG9ydHMuaWNvbk5hbWUgPSBpY29uTmFtZTtcbmV4cG9ydHMud2lkdGggPSB3aWR0aDtcbmV4cG9ydHMuaGVpZ2h0ID0gaGVpZ2h0O1xuZXhwb3J0cy5saWdhdHVyZXMgPSBsaWdhdHVyZXM7XG5leHBvcnRzLnVuaWNvZGUgPSB1bmljb2RlO1xuZXhwb3J0cy5zdmdQYXRoRGF0YSA9IHN2Z1BhdGhEYXRhOyIsIid1c2Ugc3RyaWN0Jztcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgcHJlZml4ID0gJ2Zhcyc7XG52YXIgaWNvbk5hbWUgPSAnc2F2ZSc7XG52YXIgd2lkdGggPSA0NDg7XG52YXIgaGVpZ2h0ID0gNTEyO1xudmFyIGxpZ2F0dXJlcyA9IFtdO1xudmFyIHVuaWNvZGUgPSAnZjBjNyc7XG52YXIgc3ZnUGF0aERhdGEgPSAnTTQzMy45NDEgMTI5Ljk0MWwtODMuODgyLTgzLjg4MkE0OCA0OCAwIDAgMCAzMTYuMTE4IDMySDQ4QzIxLjQ5IDMyIDAgNTMuNDkgMCA4MHYzNTJjMCAyNi41MSAyMS40OSA0OCA0OCA0OGgzNTJjMjYuNTEgMCA0OC0yMS40OSA0OC00OFYxNjMuODgyYTQ4IDQ4IDAgMCAwLTE0LjA1OS0zMy45NDF6TTIyNCA0MTZjLTM1LjM0NiAwLTY0LTI4LjY1NC02NC02NCAwLTM1LjM0NiAyOC42NTQtNjQgNjQtNjRzNjQgMjguNjU0IDY0IDY0YzAgMzUuMzQ2LTI4LjY1NCA2NC02NCA2NHptOTYtMzA0LjUyVjIxMmMwIDYuNjI3LTUuMzczIDEyLTEyIDEySDc2Yy02LjYyNyAwLTEyLTUuMzczLTEyLTEyVjEwOGMwLTYuNjI3IDUuMzczLTEyIDEyLTEyaDIyOC41MmMzLjE4MyAwIDYuMjM1IDEuMjY0IDguNDg1IDMuNTE1bDMuNDggMy40OEExMS45OTYgMTEuOTk2IDAgMCAxIDMyMCAxMTEuNDh6JztcblxuZXhwb3J0cy5kZWZpbml0aW9uID0ge1xuICBwcmVmaXg6IHByZWZpeCxcbiAgaWNvbk5hbWU6IGljb25OYW1lLFxuICBpY29uOiBbXG4gICAgd2lkdGgsXG4gICAgaGVpZ2h0LFxuICAgIGxpZ2F0dXJlcyxcbiAgICB1bmljb2RlLFxuICAgIHN2Z1BhdGhEYXRhXG4gIF19O1xuXG5leHBvcnRzLmZhU2F2ZSA9IGV4cG9ydHMuZGVmaW5pdGlvbjtcbmV4cG9ydHMucHJlZml4ID0gcHJlZml4O1xuZXhwb3J0cy5pY29uTmFtZSA9IGljb25OYW1lO1xuZXhwb3J0cy53aWR0aCA9IHdpZHRoO1xuZXhwb3J0cy5oZWlnaHQgPSBoZWlnaHQ7XG5leHBvcnRzLmxpZ2F0dXJlcyA9IGxpZ2F0dXJlcztcbmV4cG9ydHMudW5pY29kZSA9IHVuaWNvZGU7XG5leHBvcnRzLnN2Z1BhdGhEYXRhID0gc3ZnUGF0aERhdGE7IiwiJ3VzZSBzdHJpY3QnO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBwcmVmaXggPSAnZmFzJztcbnZhciBpY29uTmFtZSA9ICd0aW1lcyc7XG52YXIgd2lkdGggPSAzNTI7XG52YXIgaGVpZ2h0ID0gNTEyO1xudmFyIGxpZ2F0dXJlcyA9IFtdO1xudmFyIHVuaWNvZGUgPSAnZjAwZCc7XG52YXIgc3ZnUGF0aERhdGEgPSAnTTI0Mi43MiAyNTZsMTAwLjA3LTEwMC4wN2MxMi4yOC0xMi4yOCAxMi4yOC0zMi4xOSAwLTQ0LjQ4bC0yMi4yNC0yMi4yNGMtMTIuMjgtMTIuMjgtMzIuMTktMTIuMjgtNDQuNDggMEwxNzYgMTg5LjI4IDc1LjkzIDg5LjIxYy0xMi4yOC0xMi4yOC0zMi4xOS0xMi4yOC00NC40OCAwTDkuMjEgMTExLjQ1Yy0xMi4yOCAxMi4yOC0xMi4yOCAzMi4xOSAwIDQ0LjQ4TDEwOS4yOCAyNTYgOS4yMSAzNTYuMDdjLTEyLjI4IDEyLjI4LTEyLjI4IDMyLjE5IDAgNDQuNDhsMjIuMjQgMjIuMjRjMTIuMjggMTIuMjggMzIuMiAxMi4yOCA0NC40OCAwTDE3NiAzMjIuNzJsMTAwLjA3IDEwMC4wN2MxMi4yOCAxMi4yOCAzMi4yIDEyLjI4IDQ0LjQ4IDBsMjIuMjQtMjIuMjRjMTIuMjgtMTIuMjggMTIuMjgtMzIuMTkgMC00NC40OEwyNDIuNzIgMjU2eic7XG5cbmV4cG9ydHMuZGVmaW5pdGlvbiA9IHtcbiAgcHJlZml4OiBwcmVmaXgsXG4gIGljb25OYW1lOiBpY29uTmFtZSxcbiAgaWNvbjogW1xuICAgIHdpZHRoLFxuICAgIGhlaWdodCxcbiAgICBsaWdhdHVyZXMsXG4gICAgdW5pY29kZSxcbiAgICBzdmdQYXRoRGF0YVxuICBdfTtcblxuZXhwb3J0cy5mYVRpbWVzID0gZXhwb3J0cy5kZWZpbml0aW9uO1xuZXhwb3J0cy5wcmVmaXggPSBwcmVmaXg7XG5leHBvcnRzLmljb25OYW1lID0gaWNvbk5hbWU7XG5leHBvcnRzLndpZHRoID0gd2lkdGg7XG5leHBvcnRzLmhlaWdodCA9IGhlaWdodDtcbmV4cG9ydHMubGlnYXR1cmVzID0gbGlnYXR1cmVzO1xuZXhwb3J0cy51bmljb2RlID0gdW5pY29kZTtcbmV4cG9ydHMuc3ZnUGF0aERhdGEgPSBzdmdQYXRoRGF0YTsiLCIndXNlIHN0cmljdCc7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIHByZWZpeCA9ICdmYXMnO1xudmFyIGljb25OYW1lID0gJ3RyYXNoJztcbnZhciB3aWR0aCA9IDQ0ODtcbnZhciBoZWlnaHQgPSA1MTI7XG52YXIgbGlnYXR1cmVzID0gW107XG52YXIgdW5pY29kZSA9ICdmMWY4JztcbnZhciBzdmdQYXRoRGF0YSA9ICdNNDMyIDMySDMxMmwtOS40LTE4LjdBMjQgMjQgMCAwIDAgMjgxLjEgMEgxNjYuOGEyMy43MiAyMy43MiAwIDAgMC0yMS40IDEzLjNMMTM2IDMySDE2QTE2IDE2IDAgMCAwIDAgNDh2MzJhMTYgMTYgMCAwIDAgMTYgMTZoNDE2YTE2IDE2IDAgMCAwIDE2LTE2VjQ4YTE2IDE2IDAgMCAwLTE2LTE2ek01My4yIDQ2N2E0OCA0OCAwIDAgMCA0Ny45IDQ1aDI0NS44YTQ4IDQ4IDAgMCAwIDQ3LjktNDVMNDE2IDEyOEgzMnonO1xuXG5leHBvcnRzLmRlZmluaXRpb24gPSB7XG4gIHByZWZpeDogcHJlZml4LFxuICBpY29uTmFtZTogaWNvbk5hbWUsXG4gIGljb246IFtcbiAgICB3aWR0aCxcbiAgICBoZWlnaHQsXG4gICAgbGlnYXR1cmVzLFxuICAgIHVuaWNvZGUsXG4gICAgc3ZnUGF0aERhdGFcbiAgXX07XG5cbmV4cG9ydHMuZmFUcmFzaCA9IGV4cG9ydHMuZGVmaW5pdGlvbjtcbmV4cG9ydHMucHJlZml4ID0gcHJlZml4O1xuZXhwb3J0cy5pY29uTmFtZSA9IGljb25OYW1lO1xuZXhwb3J0cy53aWR0aCA9IHdpZHRoO1xuZXhwb3J0cy5oZWlnaHQgPSBoZWlnaHQ7XG5leHBvcnRzLmxpZ2F0dXJlcyA9IGxpZ2F0dXJlcztcbmV4cG9ydHMudW5pY29kZSA9IHVuaWNvZGU7XG5leHBvcnRzLnN2Z1BhdGhEYXRhID0gc3ZnUGF0aERhdGE7Il0sInNvdXJjZVJvb3QiOiIifQ==