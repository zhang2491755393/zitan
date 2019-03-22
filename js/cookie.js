function getCookie(key) {
    var str = document.cookie;
    if (str) {
        var cookieList = str.split("; "); //["key1=value1","key2=value2"]
        var cookieItem = cookieList.filter(function (item) { //key1=value1,key2=valu2
            return item.indexOf(decodeURIComponent(key)) == 0;
        }); //返回的是一个集合
        if (cookieItem.length == 0) {
            return "";
        } else {
            return decodeURIComponent(cookieItem[0].split("=")[1]); //cookie名称是唯一的
            //找到的话 集合中只有一个元素  key=value  我们要value
        }
    } else {
        return "";
    }
}

function setCookie(key, value, days, path = "/") {
    var date = new Date();
    date.setDate(date.getDate() + days);
    document.cookie = encodeURIComponent(key) + "=" + encodeURIComponent(value) + ";expires=" + date + ";path=" + path;
}