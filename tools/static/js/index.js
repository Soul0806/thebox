import lib from './base.js'
import j from './jquery.lib.js'
import ajax from './ajax.js'


j.click('#js_category_add', e => {
	let term = j.getTargetVal(e);
	if (!lib.isEmpty(term)) {
	  let data = { 'term': term}
	  ajax.get(url_insert_category, data, (res) => {
      var target = [...document.querySelectorAll('.term__list')].pop()
      let clone = target.cloneNode();
      clone.innerHTML = res; 
      target.parentNode.insertBefore(clone, target.nextSibling);
	  });
	}
})

j.click('.term__list, .term__form', e => {
	let term = $(e.target).data('term');
	let data = { 'term': term }
  ajax.get(url_term_page, data, res => {
    if (res == 'default') {
      $('.default').siblings().remove()
      $('.default').show();
      return
    }
    $('.default').hide()
    $('.default').siblings().remove()
    $('.intellj').append(res)
  })
})

  