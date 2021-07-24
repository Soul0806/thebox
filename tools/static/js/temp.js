 
  function padHide() {
    $('.choose-pad-container').css({ 'z-index': '-1', 'visibility': 'hidden' });
    $('.js-pad-cancel').css('z-index', '-1');
  }


  j.focus('.intellj', '.tag', function () {
    $('.choose-pad-container').css({ 'z-index': '2', 'visibility': 'visible' });
    $('.js-pad-cancel').css('z-index', '1');
  })
  let item_checked = []
  j.click('.js-item-ckbox', function (e) {
    val = $(e.target).val()
    item_checked.includes(val)
      ? item_checked.splice(item_checked.indexOf(val), 1)
      : item_checked.push(val)

    item_checked_str = '';
    for (let i in item_checked) {
      i == 0
        ? item_checked_str += item_checked[i]
        : item_checked_str += `, ${item_checked[i]}`
    }
    $('.tag').val(item_checked_str)
  })

  j.click('.js-intell-insert', function (e) {
    data = getTargetPair(e)
    data['csrfmiddlewaretoken'] = '{{ csrf_token }}'
    $.ajax({
      url: "{% url 'insert_question' %}",
      method: "POST",
      data: data,
      success: (res) => {
        log(res)
      },
      error: (msg) => {
        alert(msg)
      }
    });
  })

  j.click('.js-pad-cancel', padHide)
</script>
{% endblock %}
{% comment %}
{% block scripts %}
<script>

  $('.js-item-add').click(function () {
    let val = $('.intell-item').val();
    if (isEmpty($('.intell-item').val())) return
    let itemArr = $('.intell-item').val().split(',')
    itemArr.forEach(function trm(item, index) {
      this[index] = capitalizeFirstLetter(item.trim());
    }, itemArr)

    data = { 'tag': JSON.stringify(itemArr) }
    $.ajax({
      url: "{% url 'insert_category' %}",
      method: "GET",
      data: data,
      success: (res) => {
        log(res)
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
  })

  let delItem = []
  $('.item-list').on('click', '.item', function () {
    $(this).toggleClass('isSelected')
    if ($("[class~='isSelected']").length == 0) {
      $('.js-remove-btn').remove()
    }
    id = $(this).data('id')
    delItem.includes(id)
      ? delItem.splice(delItem.indexOf(id), 1)
      : delItem.push($(this).data('id'))
    $('.operate')
      .html($('.item-row:first').clone()
        .html('<button type="button" class="btn btn-sm btn-outline-danger js-remove-btn">remove</button>\
               <button type="button" class="btn btn-sm btn-outline-warning js-cancel-btn mx-2">cancel</button>\
              '))
    //  $('.item-row').clone().html('<button tpye="button" class="btn btn-sm btn-outline-danger js-remove-btn">remove</button>')
  })

  $('.operate').on('click', '.js-remove-btn', function () {
    data = { 'item': JSON.stringify(delItem) }
    $.ajax({
      url: "{{ url_for('intelligence', path='item-delete') }}",
      method: "GET",
      data: data,
      success: (res) => {
        $.map(delItem, function (i) {
          $("[data-id=" + i + "]").parent().remove()
          $('.js-remove-btn').remove()
        });
      },
      error: (msg) => {
        log(msg)
      }
    });
  })

  $('.operate').on('click', '.js-cancel-btn', function () {
    $('.js-remove-btn').remove()
    $('.item').removeClass('isSelected')
    $(this).remove()
  })

  //js-item-submit
  $('.intellj').on('click', '.js-item-submit', function () {
    padHide();
  })


  $('.choose-pad').blur(function () {
    $('.choose-pad-container').removeClass('show');
  })

  $('').click()


  let itemArr = val.split(',')
	  itemArr.forEach(function (item, index) {
		this[index] = lib.capitalizeFirstLetter(item.trim());
	  }, itemArr)