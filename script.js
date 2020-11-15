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
});
function compute()
{
    p = document.getElementById("principal").value;
    r = document.getElementById("number_rate").value;
    t = document.getElementById("years").value;
  result = p * (1+(r/100*t));
  alert(result);
}
