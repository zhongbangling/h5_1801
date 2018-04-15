require(['config'],function(){
    require(['jquery'],function($){

    //引入头部尾部
    $('#pageHeader').load('header.html');
    $('#pageFooter').load('footer.html');

    $('.btn').on('click',function(){

        $('#username').on('blur',function(){
            var str = $("#username").val();
            var ret = /^1[34578]\d{9}$/
            if(ret.test(str)){
                alert('ok');
            }else{
                alert('手机号格式不正确');
            }
        })
        $.ajax({
            url:'../api/reg.php',
            data:{
                username:$('#username').val(),
                password:$('#password').val()
            },
            success:function(data){
                if(data == 'success'){
                    location.href = "login.html";
                }
                else if(data == "fail"){
                    alert("注册失败");
                }
            }
        })   
    })
    var yam1 = document.querySelector('.yam1');
    function showCode(){
       function Code(){
       var res = parseInt(Math.random()*10000);
       if(res<10){
           res = '000' + res;
       }else if(res < 100){
           res = '00' + res;
       }else if(res < 1000){
           res = '0' + res;
       }
           return res;
       }
       yam1.innerHTML = Code();
       }
       showCode();
       yam1.onclick = function(){
           showCode();
       }
});
});
