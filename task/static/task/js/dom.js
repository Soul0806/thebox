import ajax from './ajax.js';

const iconDelete = document.querySelectorAll('.icon-delete');

const section = document.querySelector('section');


iconDelete.forEach(elmnt => {
  elmnt.onclick = e => {
    if (confirm('是否要刪除?')) {
      const pk = e.target.dataset.id;
      ajax.get(url_delete_item, { pk }, result => {
        const item = document.getElementById(pk);
        item.classList.add('hide');
        item.addEventListener('animationend', () => {
          item.remove();
        })
      })
    }
  }
})


section.ondblclick = e => {
  if (e.target.id == "content") {
    console.log(e.target);
    const textarea = '<textarea></textarea>';
    e.target.innerHTML = textarea;
  }
}
