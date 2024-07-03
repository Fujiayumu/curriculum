//①onchangeで使用されている関数の中身を実装してください。
function changeLang(){
    id = document.getElementById('pd').value;
    if(id == '日本語'){
        document.getElementById('ja').style.display = ""; 
        document.getElementById('en').style.display = "none";
    }else if(id == 'English'){
        document.getElementById('ja').style.display = "none"; 
        document.getElementById('en').style.display = "";
    }else if(id == '全て表示'){
        document.getElementById('ja').style.display = ""; 
        document.getElementById('en').style.display = "";
    }
   window.onload = changeLang;
}