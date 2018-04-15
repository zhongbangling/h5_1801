require(['config'],function(){
    require(['jquery','zoom'],function($){

    //引入头部尾部
    $('#pageHeader').load('header.html');
    $('#pageFooter').load('footer.html');

    //从商品列表过来
    var id = location.search;
    id = id.replace("?id=","");
    
    //根据id将数据写入详情页
    $.ajax({
        url:"../api/details.php",
        dataType:"json",
        data:{
            id:id
        },
        success:function(data){
            // console.log(data);
            data = data;
            //替换大图片
            $(".zoom img").attr({src:data.img});
            $(".main_timg").on("mouseover","ul li",function(e){
                $(".zoom img").attr({
                    src:$(this).find("img").attr("src")
                });
                $(this).css({
                    border:"1px solid #DDDDDD"
                }).siblings().css({
                    "border":"1px solid #fff"
                });
            });

            //小图片
            var img_arr = data.details_img.split(",");
            var html = img_arr.map(function(item, index, array){
                return `
                        <li>
                            <img src="${item}" alt="" />
                        </li> 
                    `;
            }).join("");
            $(".main_timg ul").html(html);
            // 替换商品名称
            $(".title").html(data.name);
            $(".pt span").html(data.name);
            // 替换价格
            $(".price_o span").html(data.price);
            // 替换数量
            $(".size span").html(data.qty);

        }
    });

    // 点击加入购物车按钮显示成功加入到购物车
    var goodslist = [];
        $(".add").on("click", function(){
            // $(".success").fadeIn();
            // 实现飞入购物车效果
            $img =  $(".zoom img")
            $copyImg = $img.clone();
            $carlist = $(".car_t1");

            $copyImg.css({
                position:'absolute',
                left:$img.offset().left,
                top:$img.offset().top,
                width:$img.outerWidth()
            });

            $('body').append($copyImg);
            $copyImg.animate({
                left:$carlist.offset().left,
                top:$carlist.offset().top + $carlist.height(),
                    width:0
            },function(){
                $copyImg.remove();
            });



        
            //存取cookie
            // var goodslist = [];
            for(var i=0; i<goodslist.length; i++){
                if(goodslist[i].id == id){
                    goodslist[i].qty ++;
                    break;
                }
            }
            if(i == goodslist.length){
                var car_goods = {
                                id:id,
                                imgurl:$(".zoom img").attr("src"),
                                title:$(".title").html(),
                                price_o:$(".price_o span").html(),
                                size:$(".size span").html(),
                                qty:$(".qty")[0].value*1
                        }
                goodslist.push(car_goods);
            }
            document.cookie = "goodslist="+JSON.stringify(goodslist);
            console.log(goodslist);
    
            // 根据cookie写入结构
            var car_t2 = document.getElementsByClassName("car_t2")[0];
            var car_t = car_t2.getElementsByTagName("ul")[0];
            console.log(car_t2);
            console.log(car_t);
            function html(){
                var goodslist;
                var cookies = document.cookie;
                    cookies = cookies.split("; ");
                    cookies.forEach(function(item, index, array){
                        var arr = item.split("=");
                        if(arr[0] == "goodslist"){
                            goodslist = JSON.parse(arr[1]);
                        }
                    });

                console.log(goodslist);

                var zongji = document.querySelector('.zongji');
                var total_t = 0;
                var html = goodslist.map(function(item, index, array){
                    total_t+=item.price_o*item.qty;
                    return `
                            <li id="${item.id}" class="fl">
                                <img class="fl" src="${item.imgurl}">
                                <p class="tit fl">${item.title}</p>
                                <div class="fr">
                                    <p class="jg fl">￥${item.price_o}</p>
                                    <p class="fl">${item.size}</p>
                                    <p>${item.qty}</p>
                                    <span>删除</span>
                                </div>
                            <li>
                        `;
                }).join("");
                car_t.innerHTML = html;
                zongji.innerHTML = '商品小计￥'+total_t.toFixed(2);
                }


                html();

                // 删除按钮
                car_t.onclick = function(e){
                var goodslist1 = [];
                var id = e.target.parentNode.parentNode.id;
                // 删除按钮
                if(e.target.tagName.toLowerCase() == "span"){ 
                    var cookies = document.cookie;
                    cookies = cookies.split("; ");
                    cookies.forEach(function(item, index, array){
                        var arr = item.split("=");
                        if(arr[0] == "goodslist"){
                            goodslist1 = JSON.parse(arr[1]);
                        }
                    });

                    goodslist1.forEach(function(item, index, array){
                        if(item.id == id){
                            var idde = goodslist1.indexOf(item);
                            goodslist1.splice(idde, 1);
                        }
                    });

                    document.cookie = "goodslist="+JSON.stringify(goodslist1);
                    html();
                }
                }

                // 读取cookie
                var cookies = document.cookie;
                    cookies = cookies.split("; ");
                    cookies.forEach(function(item, index, array){
                        var arr = item.split("=");
                        if(arr[0] == "goodslist"){
                            goodslist = JSON.parse(arr[1]);
                        }
                    });

            });
            //放大镜
            $('.zoom').gdsZoom({
   
                position:'right'
            });

            $('.main_timg .main_t2').on('click','img',function(){
                $('.zoom img').attr({
                    src:this.src,
                    'data-big':this.dataset.big || this.src
                })
            });
    });    


    var main_b = document.getElementsByClassName('main_b')[0];
    var main_bItem = main_b.children[0].children;
    var main_bContent = main_b.children[1].children;

    for(var i=0;i<main_bItem.length;i++){
        if(i===0){
            main_bItem[i].className = 'active';

        }else{
            main_bContent[i].style.display = 'none';
        }

        main_bItem[i].onmouseover = function(){

            for(var j=0;j<main_bItem.length;j++){

                if(main_bItem[j] === this){
                    main_bItem[j].className = 'active';
                    main_bContent[j].style.display = 'block';
                }else{
                    main_bItem[j].className = '';
                    main_bContent[j].style.display = 'none';
                }
            }
        }
    }

    //评论区吸顶效果
    var main_b1 = document.querySelector('.main_b1');
    // console.log(main_b1);
    
    window.onscroll = function(){
        //获取滚动过的距离
        var scrollTop = window.scrollY;
        // console.log(scrollTop);
        if(scrollTop >= 943){
            main_b1.className = 'xiding';
        }else{
            main_b1.className = 'main_b1';
        }
    }
});
