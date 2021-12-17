
window.function = function (txt, number) {

  txt = txt.value ?? "";
  number = number.value ?? 0;
  let index = txt.indexOf("/");
  let len = txt.length;
  number = Math.round(number);

  if (index == -1 || number == "")
    txt = "0 " + txt.substring(index+1,len);

  else if (number > 1 || number == 0 || number < -1)
    txt = number + " " + txt.substring(index+1,len);

  else
    txt = number + " " + txt.substring(0,index);

  return txt;
}
