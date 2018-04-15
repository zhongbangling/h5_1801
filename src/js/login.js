require(['config'],function(){
    require(['jquery'],function($){
    
    //引入头部尾部
    $('#pageHeader').load('header.html');
    $('#pageFooter').load('footer.html');

    $("#username").on('blur',function(){
        var str = $("#username").val();
        var ret = /^1[34578]\d{9}$/
        if(ret.test(str)){
                
        }else{
            $(".phone").html('手机号格式不正确');
        }
    })
    $(".btn").on("click", function(){
        $.ajax({
            url:"../api/login.php",
            data:{
                username:$("#username").val(),
                password:$("#password").val()
            },
            success:function(data){

                if(data == 'success'){
                    location.href = "../index.html";
                }
                else if(data == "fail"){
                    alert("该用户不存在");
                }
                // console.log(data);
            }
                
        });
        
    });

});
});