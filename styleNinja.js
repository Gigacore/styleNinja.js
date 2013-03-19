/*   									styleNinja.js v0.1

..::: A versatile script to apply any CSS styling to non-english based characters. :::..

- Licenced under: MIT.
- Fork on GitHub -- github.com/Gigacore/styleNinja.js

*/

jQuery("p, a, span").filter(function () {
    return !(/^[a-zA-Z0-9_ .,:;~!#-@|®©'*^$?\(\)[\]{\}"]+$/).test(jQuery(this).text());
}).css({
    'color': '#FF0000'
});
