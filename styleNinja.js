/*   									styleNinja.js v0.1

..::: A versatile script to apply any CSS styling to non-english based characters. :::..

- Licenced under: MIT.
- Fork on GitHub -- github.com/Gigacore/styleNinja.js

*/

var default_selectors = "p, a, span, strong, em, td, tr, th, h1, h2, h3, h4, h5, h6, label, option, select, li";

// For targeting div id and classes where script cannot be applied (items should be comma delimited).
var custom_selectors = "#foo, #bar, .foobar";

var selectors = default_selectors + ", " + custom_selectors;
jQuery(selectors).filter(function () {
    return (/[^\x00-\x80®©™+]/).test(jQuery(this).text());
}).css({
    'background': '#FF0000'
});
