j.click('#js_category_add', function (e) {
    let val = getTargetVal(e);
    if (!isEmpty(val)) {
      let itemArr = val.split(',')
      itemArr.forEach(function (item, index) {
        this[index] = capitalizeFirstLetter(item.trim());
      }, itemArr)
      data = { 'tag': JSON.stringify(itemArr) }
      $.ajax({
        url: url_insert_category,
        method: "GET",
        data: data,
        success: (res) => {
          // for (let i of res) {
          //   log(i)
          //   let inner = `<div class="col item" data-id="${i.item_no}">${i.item}</div>`
          //   let element = `<div class="item-row row row-cols-auto">${inner}</div>`
          //   $('.item-list').append(element)
          //   $('.intell-item').val(null);
          // }
        },
        error: (msg) => { log(msg) }
      });
    }
  })