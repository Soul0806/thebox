  
  <script>
  $('.term_page').on('click', '.q', function () {
    $('.qa_group').find('.a').hide(400);
    $(this).siblings('.a').show(400);
  })

  let qaDelArr = [];
  $('.qa_group').on('click', '[type="checkbox"]', function() {
    $('.qa-delete-btn').addClass('visible')
    let val = $(this).val();
    qaDelArr.includes( val ) 
      ? qaDelArr.splice( qaDelArr.indexOf(val), 1)
      : qaDelArr.push(val)

    if(!qaDelArr.length) $('.qa-delete-btn').removeClass('visible')
      
    // data = { 'item': JSON.stringify(qaDelArr) }
    // $.ajax({
    //   url: "{{ url_for('intelligence', path='qa-delete') }}",
    //   method: "GET",
    //   data: data,
    //   success: (res) => {
    //     log(res)
    //   },
    //   error: (msg) => {log(msg)}
    // });
  })


  



</script>