let sortElmnts = document.querySelectorAll('.sort__item');
sortElmnts.forEach((elmnt, index) => {
  dragElement(elmnt);
  elmnt.style.top = (index * 100) + 'px';
})

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  // otherwise, move the DIV from anywhere inside the DIV:
  elmnt.onmousedown = dragMouseDown;
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


  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    e.target.style['z-index'] = '1';
    // calculate the new cursor position:
    // pos1 = pos3 - e.clientX;
    // pos3 = e.clientX;
    pos2 = pos4 - e.clientY;
    pos4 = e.clientY;
    let sort = parseInt(e.target.dataset.sort, 10);
    let prvs = sort - 1;
    let next = sort + 1;
    const previousElmnt = document.querySelector(`[data-sort="${prvs}"]`);
    const nextElmnt = document.querySelector(`[data-sort="${next}"]`);

    if (previousElmnt != null) {
      const previousCritial = previousElmnt.offsetTop + previousElmnt.offsetHeight;
      if (e.target.offsetTop <= previousCritial) {
        let move = (previousElmnt.offsetTop + 100) + 'px';
        previousElmnt.style.top = move;
        previousElmnt.dataset.sort++;
        e.target.dataset.sort--;
        sort--;
      }
    }
    if (nextElmnt != null) {
      console.log(e.target.offsetTop);
      const nextCtitical = nextElmnt.offsetTop;
      if (e.target.offsetTop > nextCtitical) {
        let move = (nextElmnt.offsetTop - 100) + 'px';
        nextElmnt.style.top = move;
        nextElmnt.dataset.sort--;
        e.target.dataset.sort++;
        sort++;
      }
    }

    // console.log(previousCritial);

    // const nextCritial =
    // console.log(offset);
    // console.log(Math.floor(offset / 80));
    // if (Math.floor(offset / 60) == base + 1) {
    //   order++;
    //   let target = document.querySelector(`#div${order}`);
    //   console.log(target.offsetTop);
    //   target.style.top = (target.offsetTop - 100) + 'px';
    //   base += 1;
    // } else {
    // order--;
    // let target = document.querySelector(`#div${order}`);
    // console.log(target.offsetTop);
    // target.style.top = (target.offsetTop + 100) + 'px';
    // base -= 1;
    // // document.querySelector(`#div${order}`).style.top += '100';
    // base -= 1;

    // let rect = e.target.getBoundingClientRect();
    // console.log(rect.top + window.scrollY) 
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
  }

  function closeDragElement(e) {
    // stop moving when mouse button is released:
    e.target.style['z-index'] = 'initial';
    let sort = e.target.dataset.sort;
    e.target.style.top = (sort - 1) * 100 + 'px';
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
