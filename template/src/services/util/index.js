export default {
  formatDateTime(millisecond, format) {
    var thisTime = new Date(millisecond);
    var o = {
        "M+": (thisTime.getMonth() + 1) || '', //月份
        "D+": thisTime.getDate() || '', //日
        "h+": thisTime.getHours() || '', //小时
        "m+": thisTime.getMinutes() || '', //分
        "s+": thisTime.getSeconds() || '', //秒
        "q+": Math.floor((thisTime.getMonth() + 3) / 3) || '', //季度
        "S": thisTime.getMilliseconds() || '' //毫秒
    };
    if (/(Y+)/.test(format)) format = format.replace(RegExp.$1, ((thisTime.getFullYear() || "") + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(format)) format = format.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return format;
  },
  lsJSON(key,value){
    let ls = window.localStorage;
    key = [`${document.domain}_km_`,key].join("");
    if(!value && typeof value == 'undefined'){
      let result = JSON.parse(ls.getItem(key));
      return result;
    }else{
      ls.setItem(key,JSON.stringify(value));
    }
  },
  ls(key,value){
    let ls = window.localStorage;
    key = [`${document.domain}_km_`,key].join("");
    if(typeof value === 'undefined'){
      let result = ls.getItem(key);
      return result;
    }else{
      ls.setItem(key,value);
    }
  },
  ss(key,value){
    let ss = window.sessionStorage;
    key = [`${document.domain}_km_`,key].join("");
    if(typeof value === 'undefined'){
      let result = ss.getItem(key);
      return result;
    }else{
      ss.setItem(key,value);
    }
  },
  /**
   * 是否在纷享app打开
   * @return {Boolean} [description]
   */
  isFromFs(){
    return /fsbrowser/.test(navigator.userAgent.toLowerCase());
  },
  checkDevice(){
    if(/iphone|ipod|ipad/i.test(navigator.userAgent.toLowerCase())){
      return "ios";
    }else if(/android/i.test(navigator.userAgent.toLowerCase())){
      return "android";
    }
  },
  getpfName(){
    if(/iphone|ipod|ipad/i.test(navigator.userAgent.toLowerCase())){
      return "iOS";
    }else if(/android/i.test(navigator.userAgent.toLowerCase())){
      return "Android";
    }
  },
  object2query(object, excludes) {
    excludes = excludes || {}
    var result = []
    for (var key in object) {
      if (excludes[key]) {
        continue
      }
      if (object.hasOwnProperty(key) && object[key]) {
        result.push(key + '=' + object[key])
      }
    }
    return result.join('&')
  },
  query2object(queryString) {
    var params = {}
    if (queryString && (queryString = queryString.split('#')[0])) {
      for (var i = 0, array = queryString.split('&'), pair; i < array.length; ++i) {
        pair = array[i].split('=')
        pair[0] && (params[pair[0]] = pair[1])
      }
    }
    return params
  },
  getParam(name) {
    const reg = new RegExp(`(^|&)${name}=(.*)(&|#|$)`);
    const search = window.location.search.slice(1);
    const match = search.match(reg);
    return match ? decodeURIComponent(match[2]) : null;
  },
    /**
   * 获取富文本，目前只支持换行
   * @param  {[type]} text [description]
   * @return {[type]}      [description]
   */
  getRichTxt(text){
    if(!text){
      return '';
    }
    let parts = text.split("\n");
    let resultHtml = '';
    parts.forEach((item,i)=>{
      item = item.replace(/\&/,"&amp;").replace(/\s/g,"&nbsp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\"/g, "&quot;").replace(/\'/g, "&#39;");
      resultHtml = `${resultHtml}${item}${i<parts.length-1?"<br />":""}`;
    });
    return resultHtml;
  },
  sessionStorage(key, value) {
    if( !key ) { return; }
    if(typeof value !== 'undefined') {
      sessionStorage.setItem(key, JSON.stringify(value));
    } else {
      return JSON.parse(sessionStorage.getItem(key));
    }
  },
  rmSessionStorage(key) {
    if (!key) {
      return;
    }
    sessionStorage.removeItem(key);
  },
  /**
   * 检测字符串只包含英文字母或数字
   * @return {[type]} [description]
   */
  checkCharNumStr(str) {
    let reg = /^\w+$/;
    console.log(reg);
    return true; //reg.test(str);
  },
  getDisplaySizeByByte(size, toFixedNum) {
    var displaySize_num,displaySize_unit;
    if(size >= 1024 * 1024 * 1024 ){
        displaySize_num = size/1024/1024/1024;
        displaySize_unit = 'GB';
    } else if(size >= 1024 * 1024 ){
        displaySize_num = size/1024/1024;
        displaySize_unit = 'MB';
    } else if(size >= 1024 ){
        displaySize_num = size/1024;
        displaySize_unit = 'KB';
    } else if(size < 1024 ){
        displaySize_num = size;
        displaySize_unit = 'B';
    }
    return displaySize_num.toFixed(toFixedNum)+displaySize_unit;
  },
  /*价格单位分转换元方法*/
  priceFormat(price) {
    return (price/100).toFixed(2);
  },
}
