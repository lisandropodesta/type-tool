/**
 * External references
 */

var toString = Object.prototype.toString;

/**
 * Exports
 */

module.exports = Type.prototype;

/**
 * Types mapping
 */

var TYPES = {
  '[object Undefined]': 'Undefined',
  '[object Null]': 'Null',
  '[object Boolean]': 'Boolean',
  '[object Number]': 'Number',
  '[object Date]': 'Date',
  '[object String]': 'String',
  '[object RegExp]': 'RegExp',
  '[object Array]': 'Array',
  '[object Arguments]': 'Arguments',
  '[object Function]': 'Function',
  '[object Object]': 'Object'
};

/**
 * Create individual type testing functions such as isArray, isFunction, and so on
 *
 * @param {string} n Name of the type
 * @api private
 */

function make_fn( n ) {

  var fun_name = 'is' + TYPES[ n ];
  var type_name = TYPES[ n ].toLowerCase();

  Type.prototype[ fun_name ] = function ( v ) {
    return type_name === Type.prototype.name( v );
  }
}

for ( var n in TYPES ) {
  make_fn( n );
}

/**
 * Type class function
 *
 * @api public
 */

function Type() {
}

/**
 * Gets capitalized type name
 *
 * @param {object} v Value to check type
 * @return {string} Capitalized type name
 * @api private
 */

function getTypeName( v ) {

  if ( null === v ) {
    return 'Null';
  }

  if ( undefined === v ) {
    return 'Undefined';
  }

  var name = TYPES[ toString.call( v ) ];

  if ( !name )
  {
    name = typeof v;
    name = name[ 0 ].toUpperCase() + name.slice( 1 );
  }

  return name;
}

/**
 * Gets type information
 *
 * @param {object} v Value to check type
 * @return {object} Type information object
 * @api public
 */

Type.prototype.get = function ( v ) {

  var name = getTypeName( v );
  var ret = {};
  ret.name = name.toLowerCase();
  ret[ 'is' + name ] = true;
  return ret;
}

/**
 * Gets type as lowercase string
 *
 * @param {object} v Value to check type
 * @return {object} Type name
 * @api public
 */

Type.prototype.name = function( v ) {
  return getTypeName( v ).toLowerCase();
}
