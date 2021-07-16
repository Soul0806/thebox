j = {}
j.click = function(element, selector=null, callback) {
		if(selector !=null )
			$(element).on('click', selector, callback);
		else
    	$(element).click(callback);
}

j.focus = function(element, selector=null, callback) {
	$(element).on('focus', selector, callback);
}


function log(output) {
    console.log(output)
}

function isEmpty(str) {
    return !str.trim().length;
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

function trm(item, index) {
    this[index] = item.trim();
}

function isEmpty(el) {
    return !el.trim().length;
}
