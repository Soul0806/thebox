const ajax = {
  get: (url, data, callback) => {
    $.ajax({
      url: url,
      method: "GET",
      data: data,
      success: callback,
      error: (msg) => { console.log(msg) }
    });
  },
  post: (url, data, callback) => {
    console.log(data);
    $.ajax({
      url: url,
      method: "POST",
      data: data,
      success: callback,
      error: (msg) => { console.log(msg) }
    });
  }
}

export default ajax;