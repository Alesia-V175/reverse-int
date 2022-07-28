module.exports = function reverse (n) {
   const str = n.toString();
   const reverseStr = str.replace("-", "").split("").reverse().join("");
   return +reverseStr;
}
