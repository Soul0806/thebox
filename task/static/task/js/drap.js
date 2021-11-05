const sort = document.querySelector('.sort');

const sortLi = sort.querySelectorAll('.sort__li');
const sortItem = sort.querySelectorAll('.sort__item');

let fromDrag;

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
  fromDrag = ev.target.parentNode;
}

function drop(ev) {
  ev.preventDefault();
  let data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
  fromDrag.appendChild(ev.target.querySelector('.sort__item'));
}

sortLi.forEach(elmnt => {
  elmnt.ondrop = drop;
  elmnt.ondragover = allowDrop;
})

sortItem.forEach(elmnt => {
  elmnt.ondragstart= drag;
})

  // var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  // elemnt.onmousedown = dragMouseDown;
  
  // function dragMouseDown(e) {
  //   e = e || window.event;
  //   e.preventDefault();
  //   // get the mouse cursor position at startup:
  //   pos3 = e.clientX;
  //   pos4 = e.clientY;
  //   console.log(pos3, pos4);
  //   document.onmouseup = closeDragElement;
  //   // call a function whenever the cursor moves:
  //   document.onmousemove = elementDrag;
  // }
  
  // function elementDrag(e) {
  //   e = e || window.event;
  //   e.preventDefault();
  //   // calculate the new cursor position:
  //   pos1 = pos3 - e.clientX;
  //   pos2 = pos4 - e.clientY;
  //   console.log(pos1, pos2,  elemnt.offsetTop ,  elemnt.offsetLeft );
  //   pos3 = e.clientX;
  //   pos4 = e.clientY;
  //   // set the element's new position:
  //   elemnt.style.top = (elemnt.offsetTop - pos2) + "px";
  //   elemnt.style.left = (elemnt.offsetLeft - pos1) + "px";
  // }
  
  // function closeDragElement() {
  //   // stop moving when mouse button is released:
  //   document.onmouseup = null;
  //   document.onmousemove = null;
  //  }