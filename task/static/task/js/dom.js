import ajax from './ajax.js';

const iconDelete = document.querySelectorAll('.icon-delete');

const section = document.querySelector('section');


iconDelete.forEach(elmnt => {
  elmnt.onclick = function () {
    if (confirm('是否要刪除?')) {
      const pk = this.dataset.id;
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
    const btnConfim = document.querySelector('.confirm');
    btnConfim.classList.add('show');
    const html = e.target.innerHTML;
    const textarea =
      `<textarea>${html}</textarea>`;
    e.target.innerHTML = textarea;
  }
}
