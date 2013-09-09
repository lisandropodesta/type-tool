is-type
=======

Flexible type checking including isUndefined, isNull, isBoolean, isNumber, isDate, isString, isRegExp, isArray, isArguments, isFunction and isObject.

## Usage

### isUndefined, isNull, isBoolean, isNumber, isDate, isString, isRegExp, isArray, isArguments, isFunction and isObject
Determines whether a value is of a specific type.

```javascript
var type = require( "type-tool" );
if ( type.isFunction( value ) ) {
  // value is a function
}
```

### type.name( value )

Returns type name of value. Possible results are: "undefined", "null", "boolean", "number", "date", "string", "regexp", "array", "arguments", "function" and "object"

```javascript
var type = require( "type-tool" );
if ( type.name( value ) == "array" ) {
  // value is an array
}
```

### type.get( value )

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
