var ua = navigator.userAgent;
var isGecko = ua.indexOf("Gecko") > -1 && ua.indexOf("KHTML") === -1;
if (!isGecko) {
  var s = document.createElement("script");
  s.src = "http://cdn.mathjax.org/mathjax/latest/MathJax.js?config=MML_HTMLorMML";
  document.querySelector('head').appendChild(s);
}
