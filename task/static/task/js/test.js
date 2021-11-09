// Make the DIV element draggable:
dragElement(document.getElementById("div1"));
dragElement(document.getElementById("div2"));
dragElement(document.getElementById("div3"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    // pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  let order = elmnt.dataset.sort;
  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    // pos1 = pos3 - e.clientX;
    // pos3 = e.clientX;
    pos2 = pos4 - e.clientY;
    pos4 = e.clientY;

    if (elmnt.offsetTop != 0 && elmnt.offsetTop % 80 == 0) {
      console.log(order++);
    }
    // let rect = e.target.getBoundingClientRect();
    // console.log(rect.top + window.scrollY) 
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    // elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

const ele = document.querySelectorAll('.drag');

ele.forEach((e, index) => {
  e.style.top = (index * 100) + 'px';
})