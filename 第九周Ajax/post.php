if(isset($_GET["username"])&& isset($_GET["pwd"])){
    
     if($_GET["username"]=='wq'&& $_GET["pwd"]=="123"){
            echo "登陆成功！";
        }else{
            echo "登陆失败！";
        }
}

if(isset($_POST["username"])&& isset($_POST["pwd"])){
    
     if($_POST["username"]=='wq'&& $_POST["pwd"]=="123"){
            echo "登陆成功！";
        }else{
            echo "登陆失败！";
        }
}