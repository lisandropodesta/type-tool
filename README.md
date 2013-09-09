type-tool
=======

Flexible type checking including isUndefined, isNull, isBoolean, isNumber, isDate, isString, isRegExp, isArray, isArguments, isFunction and isObject.

## Usage

### Specific type testing

Determines whether a value is of a specific type.

 * isUndefined( value )
 * isNull( value )
 * isBoolean( value )
 * isNumber( value )
 * isDate( value )
 * isString( value )
 * isRegExp( value )
 * isArray( value )
 * isArguments( value )
 * isFunction( value )
 * isObject( value )

```javascript
var type = require( "type-tool" );
if ( type.isFunction( value ) ) {
  // value is a function
}
```

### name( value )

Returns type name of value. Possible results are: "undefined", "null", "boolean", "number", "date", "string", "regexp", "array", "arguments", "function" and "object"

```javascript
var type = require( "type-tool" );
if ( type.name( value ) == "array" ) {
  // value is an array
}
```

### get( value )

Returns type information of value including name and specific type flags.

```javascript
var type = require( "type-tool" );
var ti = type.get( [] ); // -> ti == { name: "array", isArray: true }

ti = type.get( value );
if ( ti.isArray ) {
  // value is an array
}
else if ( ti.isFunction ) {
  // value is a function
}
else if ( ti.isNumber ) {
  // value is a number
}
```

## License

type-tool is available under the [MIT license] (http://opensource.org/licenses/MIT).
