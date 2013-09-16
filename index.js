/**
 * External references
 */

var toString = Object.prototype.toString;

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
 * Exports
 */
module.exports.get = typeGet;
module.exports.name = typeName;

for ( var n in TYPES ) {
  module.exports[ 'is' + TYPES[ n ] ] = make_fn( TYPES[ n ].toLowerCase() );
}

/**
 * Create individual type testing functions such as isArray, isFunction, and so on
 *
 * @param {string} n Name of the type
 * @api private
 */

function make_fn( type_name ) {
  return function ( v ) {
    return type_name === typeName( v );
  }
}

/**
 * Gets capitalized type name
 *
 * @param {object} v Value to check type
 * @return {string} Capitalized type name
 * @api private
 */

function typeNameCapitalized( v ) {
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

function typeGet( v ) {
  var name = typeNameCapitalized( v );
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

function typeName( v ) {
  return typeNameCapitalized( v ).toLowerCase();
}
