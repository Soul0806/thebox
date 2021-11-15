import ajax from './ajax.js';

const iconDelete = document.querySelectorAll('.icon-delete');
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