const ajax = {
  get: (url, data, callback) => {
    $.ajax({
      url: url,
      method: "GET",
      data: data,
      success: callback,
      error: (msg) => { lib.log(msg) }
      });
  },
  post: (url, data, callback) => {
    $.ajax({
      url: url,
      method: "POST",
      data: data,
      success: callback,
      error: (msg) => { lib.log(msg) }
      });
  }
}

export default ajax;