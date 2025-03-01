console.log("Hello World");

//using slugify package
const slugify = require('slugify');
let a = slugify('Some string to be slugified');
console.log(a);

//using slugify package with custom separator
let b = slugify('Some %string^ to# be& slugified$', '_');
console.log(b);