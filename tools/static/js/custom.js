let dev = false;

$('.js-search-q').click(function () {
  val = $('#q').val();
})

$('textarea').each(function () {
  this.setAttribute("style", "height:" + (this.scrollHeight) + "px;overflow-y:hidden;");
}).on("input", function () {
  this.style.height = "auto";
  this.style.height = (this.scrollHeight) + "px";
});

tpl = {
  checkbox: function (cls, val) {
    return `<input type="checkbox" class="${cls}" value="${val}">`
  }
}

$('.dev-mode-switch svg').click(function () {
  dev = !dev ? true : false;
  $(this).toggleClass('open')
  $(this).parent().toggleClass('limegreen')
});

$('.row').children('[class*="col"]')
  .mouseenter(function () {
    if (dev) {
      $(this).css({ 'border': '1px solid #ccc' })
      $(this).append(`<div class="test">${$(this).attr('id')}</div>`);
    }
  })
  .mouseleave(function () {
    if (dev) {
      $(this).css({ 'border': '' })
      $('.test').remove();
    }
  })
// $('.row, .col').hover(function (e) {
//   // e.stopPropagation();
//   $(this).toggleClass('border border-dark', e.type === 'mouseenter');
//   $(this).append('<span class="test">test</span>')
// });

// $("main, body, nav, .row, .col").hover(function (e) {
//   // e.stopPropagation();
//   $(this).toggleClass('border border-dark', e.type === 'mouseenter');
// });
// $('.row').hover(function () {
//   // alert(123)
//   // $(this).addClass('border border-dark')
// })

// $('#q').keyup(function (e) {
//   if (e.key === 'Enter') {
//     val = $(this).val()
//     $.ajax({
//       url: "./search",
//       method: "GET",
//       data: { q: val },
//       dataType: "html",
//       success: (res) => {
//         alert(res)
//       },
//       error: (msg) => {
//         alert(msg)
//       }
//     });
//   }
// })