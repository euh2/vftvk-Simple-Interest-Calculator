window.addEventListener('load', (event) => {
  for(var i=1; i<=40; i++){
      var select = document.getElementById("years");
      var option = document.createElement("OPTION");
      select.options.add(option);
      option.text = i;
      option.value = i;
  }
});
function compute()
{
    p = document.getElementById("principal").value;
    
}
        
