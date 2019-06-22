var firname = 2;
var secname = 3;
var thrname = 5;
var forname = (firname + thrname - secname * firname / secname) % 3;
var fivname = (thrname - firname + secname) * secname / firname % 2;

console.log(forname);
console.log(fivname);
console.log(forname == fivname);