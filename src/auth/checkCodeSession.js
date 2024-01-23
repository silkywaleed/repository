export default (to, from, next) => {
    if (
      localStorage.getItem("codeSuccess") == 'success' 
    ) {
      const default_url = JSON.parse(localStorage.getItem("userInfo"))?.default_url
      if(default_url) {
        next(default_url)
      } else {
        next('access-forbidden')
      }
    } else {
      next();
    }
  };