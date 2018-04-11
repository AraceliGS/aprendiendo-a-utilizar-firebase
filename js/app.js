function getId(id) {
  return document.getElementById(id);
}

function getRadioValue(name) {
  var radios = document.getElementsByName(name);

  for(var i = 0; length = radios.length; i++) {
    if(radios[i].checked) {
      return radios[i].value;
    }
  }

  return false;
}