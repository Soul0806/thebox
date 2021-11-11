// Make the DIV element draggable:
// dragElement(document.getElementById("div0"));
// dragElement(document.getElementById("div1"));
// dragElement(document.getElementById("div2"));

let sortElmnts = document.querySelectorAll('.sort__item');
sortElmnts.forEach((elmnt, index) => {
  dragElement(elmnt);
  elmnt.style.top = (index * 100) + 'px';
})

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


  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // console.log(e.target.style.top, e.target.offsetTop);

    e.target.style['z-index'] = '9999';

    // calculate the new cursor position:
    // pos1 = pos3 - e.clientX;
    // pos3 = e.clientX;
    pos2 = pos4 - e.clientY;
    pos4 = e.clientY;
    let sort = parseInt(e.target.dataset.sort, 10);
    let prvs = sort - 1;
    let next = sort + 1;
    // const previousElmnt = document.querySelector(`#div${parseInt(sort - 1)}`);
    // const nextElmnt = document.querySelector(`#div${parseInt(sort + 1)}`);
    const previousElmnt = document.querySelector(`[data-sort="${prvs}"]`);
    const nextElmnt = document.querySelector(`[data-sort="${next}"]`);

    // console.log(sort, previousElmnt, `#div${sort++}`);
    // let offset = elmnt.offsetTop - start;
    // const previousCritial

    if (previousElmnt != null) {
      const previousCritial = previousElmnt.offsetTop + previousElmnt.offsetHeight;
      // const nextCtitical = nextElmnt.offsetTop;

      if (e.target.offsetTop <= previousCritial) {
        let move = (previousElmnt.offsetTop + 100) + 'px';
        previousElmnt.style.top = (previousElmnt.offsetTop + 100) + 'px';
        previousElmnt.dataset.sort++;
        e.target.dataset.sort--;
        sort--;
      }
      // // console.log(e.target.offsetTop, `#div${sort + 1}`);
    }
    // console.log(`#div${parseInt(sort + 1)}`, nextElmnt);
    if (nextElmnt != null) {
      // const previousCritial = previousElmnt.offsetTop + previousElmnt.offsetHeight;
      const nextCtitical = nextElmnt.offsetTop;
      if (e.target.offsetTop >= nextCtitical) {
        // console.log(previousElmnt.offsetTop + '100px');
        console.log(e.target.offsetTop, nextCtitical);
        nextElmnt.style.top = (nextElmnt.offsetTop - 100) + 'px';
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
    if (e.target.offsetTop > 210) {

    }
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";

    // elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement(e) {
    // stop moving when mouse button is released:
    let sort = e.target.dataset.sort;
    e.target.style.top = (sort - 1) * 100 + 'px';
    e.target.style['z-index'] = 'initial';
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
