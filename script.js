// adapted from https://www.w3schools.com/howto/howto_js_rangeslider.asp
function change_rate_value()
{
  var slider = document.getElementById("slider_rate");
  var number = document.getElementById("number_rate");
  // slider.onload = function() {
  //   slider.value = number.value;
  // }

  // Update the current slider value (each time you drag the slider handle)
  slider.oninput = function() {
    number.value = this.value;
  }
  number.oninput = function() {
    slider.value = number.value;
  }
}
function show_result(p, r, t, resultEarn, resultTotal, resultYear){
  var answer = document.getElementById("answer");
  var el_result__total = document.getElementById("result__total");
  var el_result__principal = document.getElementById("result__principal");
  var el_result__rate = document.getElementById("result__rate");
  var el_result__earn = document.getElementById("result__earn");
  var el_result__year = document.getElementById("result__year");
  answer.style.display = "block";
  el_result__total.innerHTML = resultTotal;
  el_result__principal.innerHTML = p;
  el_result__rate.innerHTML = r;
  el_result__earn.innerHTML = resultEarn;
  el_result__year.innerHTML = resultYear;
  // alert(result);
}
// adapted from https://css-tricks.com/snippets/javascript/comma-values-in-numbers/
function CommaFormatted(amount) {
  var delimiter = ","; // replace comma if desired
  // var a = amount.split('.',2)
  var d = amount;
  var i = parseInt(amount);
  if(isNaN(i)) { return ''; }
  // var minus = '';
  // if(i < 0) { minus = '-'; }
  i = Math.abs(i);
  var n = new String(i);
  var a = [];
  while(n.length > 3) {
    var nn = n.substr(n.length-3);
    a.unshift(nn);
    n = n.substr(0,n.length-3);
  }
  if(n.length > 0) { a.unshift(n); }
  n = a.join(delimiter);
  // if(d.length < 1) { amount = n; }
  // else { amount = n + '.' + d; }
  amount = n;
  // amount = minus + amount;
  return amount;
}
function compute()
{
    p = document.getElementById("principal").value;
    r = document.getElementById("number_rate").value;
    t = document.getElementById("years").value;
  resultTotal = p * (1+(r/100*t));
  resultEarn = resultTotal - p;
  var year = new Date().getFullYear();
  // var year_as_int = year.parse(year);
  resultYear = Number(year) + Number(t);
  p = CommaFormatted(p)
  resultEarn = CommaFormatted(resultEarn)
  resultTotal = CommaFormatted(resultTotal)
  show_result(p, r, t, resultEarn, resultTotal, resultYear);
}
function principal_comma_format() {
  var inp_principal = document.getElementById("principal");
  inp_principal.oninput = inp_principal.onload = function() {
    inp_principal.value = CommaFormatted(inp_principal.value);
  }
}
window.addEventListener('load', (event) => {
  for(var i=1; i<=40; i++){
      var select = document.getElementById("years");
      var option = document.createElement("OPTION");
      select.options.add(option);
      option.text = i;
      option.value = i;
  }
  select.selectedIndex = 4;
  change_rate_value();
  // principal_comma_format();
});
