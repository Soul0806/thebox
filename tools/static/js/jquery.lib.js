const j = {
    click: (element, selector = null, callback) => {
        if (selector != null)
            $(element).on('click', selector, callback);
        else
            $(element).click(callback);
    },

    focus: (element, selector = null, callback) => {
        $(element).on('focus', selector, callback);
    },

    getTargetVal: (event) => {
        return $($(event.target).data('target')).val();
    },

    getTargetPair: (event) => {
        let obj = {};
        let target_arr = $(event.target).data('target').split(' ');
        for( let t of target_arr ) {
          let re = t.match(/\[(\.(.+))\]/);
          let key = re[2].match(/__(.+)/)[1] + 's'
          obj[key] = $(re[1]).val(); 
        }
        return obj;
    }
}

export default j;