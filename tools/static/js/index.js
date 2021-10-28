import lib from './base.js'
import j from './jquery.lib.js'
import ajax from './ajax.js'

function cleanForm() {
  searchAdd.classList.toggle('hidden');
  form.classList.toggle('visible');
  overlay.classList.toggle('visible');
  term.forEach(e => { e.classList.remove('selected')} )
  tag.value = ''; 
}

form.addEventListener('click', e => {
  if(!e.target.matches('.insertbtn')) return;
  let data = j.getTargetPair(e, csrf);
  if(!data) {
    formTip.classList.add('show')
  } else {
    ajax.post(url_insert_question, data, res => {
      navTip.animate([
        {top: '0px'},
        {top: '30px'},
        {top: '-20px'}
      ], 2000);  
    });
    cleanForm();    
  }
})
  
searchInput.addEventListener('input', (e) => {
  // if(!e.target.matches('.js_page_search')) return;
  if(e.target.value.length == 0) return;
  let search = { "search": e.target.value}
  ajax.get(url_select_question, search, res => {
    $('.knowledge__main').html(res)
  })
})


// j.click('#js_category_add', e => {
//   let term = j.getTargetVal(e);
//   if (!lib.isEmpty(term)) {
//     let data = { 'term': term }
//     ajax.get(url_insert_category, data, (res) => {
//       var target = [...document.querySelectorAll('.term__list')].pop()
//       let clone = target.cloneNode();
//       clone.innerHTML = res;
//       target.parentNode.insertBefore(clone, target.nextSibling);
//     });
//   }
// })

// j.click('.term__list, .term__form', e => {
//   let term = $(e.target).data('term');
//   let data = { 'term': term }
//   ajax.get(url_term_page, data, res => {
//     if (res == 'default') {
//       $('.default').siblings().remove()
//       $('.default').show();
//       return
//     }
//     $('.default').hide()
//     $('.default').siblings().remove()
//     $('.layout').append(res)
//   })
// })

// j.click('.insertbtn', e => {
//   let data = j.getTargetPair(e, csrf);

// })







