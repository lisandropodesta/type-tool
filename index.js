//
// Exports
//
module.exports = Type.prototype;

//
// toString
//
var toString = Object.prototype.toString;

//
// Types mapping
//
var TYPES = {
  "[object Undefined]": "Undefined",
  "[object Null]": "Null",
  "[object Boolean]": "Boolean",
  "[object Number]": "Number",
  "[object Date]": "Date",
  "[object String]": "String",
  "[object RegExp]": "RegExp",
  "[object Array]": "Array",
  "[object Arguments]": "Arguments",
  "[object Function]": "Function",
  "[object Object]": "Object"
};

//
// Create individual type testing functions
//
function make_fn( n ) {
  var
    fun_name = "is" + TYPES[ n ],
    type_name = TYPES[ n ].toLowerCase();

  Type.prototype[ fun_name ] = function ( v ) {
    return type_name === Type.prototype.name( v );
  }
}

for ( var n in TYPES ) {
  make_fn( n );
}

//
// Constructor
//
function Type() {
}

//
// Gets capitalized type name
//
function getTypeName( v ) {
  var
    name;

  if ( null === v ) {
    return "Null";
  }

  if ( undefined === v ) {
    return "Undefined";
  }

  name = TYPES[ toString.call( v ) ];

  if ( !name )
  {
    name = typeof v;
    name = name[ 0 ].toUpperCase() + name.slice( 1 );
  }

  return name;
}

//
// Get type information
//
Type.prototype.get = function ( v ) {
  var
    name,
    ret = {};

  name = getTypeName( v );
  ret.name = name.toLowerCase();
  ret[ "is" + name ] = true;
  return ret;
}

//
// Get type as string
//
Type.prototype.name = function( v ) {
  return getTypeName( v ).toLowerCase();
}
