j = {}
j.click = function (element, selector = null, callback) {
  if (selector != null)
    $(element).on('click', selector, callback);
  else
    $(element).click(callback);
}

j.focus = function (element, selector = null, callback) {
  $(element).on('focus', selector, callback);
}

function getTargetVal(event) {
  return $($(event.target).data('target')).val();
}

function getTargetPair(event) {
  obj = {};
  target_arr = $(event.target).data('target').split(' ');
  for( let t of target_arr ) {
    let re = t.match(/\[(\.(.+))\]/);
    obj[re[2]] = $(re[1]).val(); 
  }
  return obj;
  // return $(event.target).data('target')
}

