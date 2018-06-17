

document.getElementById("addMe").addEventListener('click', () => {
 let para = createListElement();
 let button = createDeleteButton();

 button.addEventListener('click', () => {
  document.getElementById("items").remove();
 });

 let label = createLabelElement();

 var item = document.getElementById("item")
 var checkbox = createCheckBox();

 para.appendChild(checkbox)

 para.appendChild(label)
 para.appendChild(button)

 item.insertBefore(para, item.firstChild)
getStatus();
});

function createDeleteButton() {
let button = document.createElement("BUTTON")
 button.setAttribute("id", "delete");
 return button;
}

function createCheckBox() {
let  checkbox = document.createElement("INPUT")
checkbox.setAttribute("type", "checkbox")
checkbox.setAttribute("id", "check")

checkbox.addEventListener( 'change', function() {
  if(this.checked) {
   document.getElementById("text").style.color = "grey"
  }
  else {
    document.getElementById("text").style.color = "black";
  }
getStatus();
});
return checkbox;
}

function createListElement() {
let para = document.createElement("P")
para.setAttribute("id", "items")

return para;
}

function createLabelElement() {
let label = document.createElement("LABEL")
label.setAttribute("id", "text");
label.innerHTML = document.getElementById("value").value
return label;
}

function getStatus() {
  var checked = document.querySelectorAll("input[type='checkbox']:checked").length;
    var textinputs = document.querySelectorAll('input[type=checkbox]');

    var active = [].filter.call( textinputs, function( el ) {
  return !el.checked
}).length;

document.getElementById("active").innerHTML = active;
document.getElementById("completed").innerHTML = checked;
}
