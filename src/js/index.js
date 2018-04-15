require.config({
    // baseUrl:'js'


    paths:{
        'jquery':'../lib/jquery-3.2.1',
        // 'zoom':'../lib/jquery.gdsZoom/jquery.gdsZoom'
        'lbt':'../lib/unslider.min'
    },

    shim:{
        // 设置依赖
        'lbt':['jquery'],
        // 'common':['jquery']
    }
});
require(['jquery','lbt'],function($){
    //引入头部尾部
    $('#pageHeader').load('html/header.html');
    $('#pageFooter').load('html/footer.html');
    //轮播图
    function imgReload(){
        var imgHeight = 0;
        var wtmp = $("body").width();
        $("#b01 ul li").each(function(){
            $(this).css({width:wtmp + "px"});
        });
        $(".sliderimg").each(function(){
            $(this).css({width:wtmp + "px"});
            imgHeight = $(this).height();
        });
    }
    $(window).resize(function(){imgReload();});
    $(document).ready(function(e) {
        imgReload();
        var unslider01 = $('#b01').unslider({
            dots: true,
            fluid: true
        }),
        data01 = unslider01.data('unslider');
        $('.unslider-arrow01').click(function(){
            var fn = this.className.split(' ')[1];
            data01[fn]();
        });
    });


    //返回顶部
    let toTop = document.querySelector('#toTop');
        toTop.onclick=function(){
            var timer = setInterval(function(){              
                var speed = parseInt(window.scrollY/5);
                if(scrollY<=10 || speed === 0){
                    clearInterval(timer);
                }
            scrollBy(0,-speed);}
        ,50)            
    }

    //吸顶效果
    var nav = document.querySelector('#nav');
    // console.log(nav);
    
    window.onscroll = function(){
        //获取滚动过的距离
        var scrollTop = window.scrollY;
        // console.log(scrollTop);
        if(scrollTop >= 36){
            nav.className = 'xiding';
        }else{
            nav.className = 'nav';
        }
    }

    // //首页商品传参
    $(".main_2").on("click","ul li",function(){
        var params = $(this).attr("data-id");
        location.href = "html/details.html?id="+params;
    })
});