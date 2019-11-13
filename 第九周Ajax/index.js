function ajax(methods,url ,callback,data,falg){
    var xhr = null;
    if(window.XMLHttpRequest){
        xhr = new XMLHttpRequest();
    }else{
        xhr = new ActiveXObject('Micorsoft.XMLHttp');
    }
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4){
            console.log(xhr.status)
            if(xhr.status == 200 ){
                callback(xhr.responseText);
                console.log(xhr.getResponseHeader('Date'));
            }else{
                callback('error111');
            }
        }
    }
    method = method.toUpperCase();
    if(method == 'GET'){
        var data = new Date(),
        timer = data.getTime();
        xhr.open(method,url + '?' + data + '&timer=' + timer,flag);
        xhr.send();
    }else if(method = 'POST'){
        xhr.open(method ,url ,flag);
        xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');
        xhr.send(data);
    }else if(method == 'PUT'){
            xhr.open(method,url ,true);
            xhr.setRequestHeader('person','zhangfeng');
            xhr.send();
        }
    }
    var oSubmit = document.getElementById('submit'),
    oBtn = document.getElementById('getNews');
    oSubmit.onclick = function (e){
        e.preventDefault();
        var oUsername = document.getElementById('username'),
        oAge = document.getElementById('age'),
        str = oUsername.name + '=' + oUsername.value + '&' + oAge.name + '=' + oAge.value;
        ajax('post', './post.php',showPerson,str,true);
    }
    oBtn.onclick = function(){
        ajax('get', './getNews.php' , getNews , '' ,true);
    }
    function getNews(data){
        console.log(data);
        var value = JSON.parse(data),
        oNewsList = document.getElementById('newsList'),
        htmlStr = '';
        oNewsList.innerHTML = '';
        value.forEach(function (ele,index){
            htmlStr += '<li><a href="#">' + ele.title + '['+ ele.data + ']</a></li>';
        })
        oNewsList.innerHTML = htmlStr;
    }
    function showPerson(data){
        console.log(data);
        alert(data)
    }