require(['config'],function(){
    require(['jquery'],function($){

        //引入头部尾部
        $('#pageHeader').load('header.html');
        $('#pageFooter').load('footer.html');
         
        function html(){
        // 读取cookie
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

        // 将cookie写入结构
         
            var html = goodslist.map(function(item, index, array){
                return `
                    <li id="${item.id}">
                        <img class="fl" src="${item.imgurl}">
                        <p class="ti fl">${item.title}</p>
                        <p class="sie fl">${item.size}</p>
                        <p class="fl price_t">￥<span class="price_t1">${item.price_o}</span></p>
                        <div class="fl btn">
                            <input class="down" type="button" value="-">
                            <input class="text" type="text" value="${item.qty}" disabled>
                            <input class="up" type="button" value="+">
                        </div>
                        <span class="close fl">&times;</span>
                    </li>
                    `;
            }).join("");
            console.log(html);
            $("#car .car_l").html(html);
        }

        html();
        // 增加和减少按钮
        $(".down").on("click", function(e){
            var text = $(this).next(".text").val()*1;
            text--;
            if(text <= 0){
                text = 1;
            }
            $(this).next(".text").attr("value",text);
        });

        $(".up").on("click", function(){
            var text = $(this).prev(".text").val()*1;
            text++;
            $(this).prev(".text").attr("value",text);
        });


        function total(){
            var total = 0;
            var li =document.querySelectorAll("#car li");
            console.log(li);
            var price_t1 = document.getElementsByClassName("price_t1")[0].innerHTML*1;
            console.log(price_t1);
            var text = document.getElementsByClassName("text")[0].value*1;
            console.log(text);
            li.forEach(function(item, index, array){
                total += price_t1 * text;
            });
            return (total.toFixed(2));
            console.log(total);
        };

        $(".total").html(total());

        $(".up").on("click", function(){
            $(".total").html(total());
        });

        $(".down").on("click", function(){
            $(".total").html(total());
        });

        var car = document.getElementById("car");
        car.onclick = function(e){
            var goodslist1 = [];
            var id = e.target.parentNode.id;
            // console.log(id);
            // 删除按钮
            if(e.target.className == "close"){
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
                        var iddel = goodslist1.indexOf(item);
                        goodslist1.splice(iddel, 1);
                    }
                });

                    document.cookie = "goodslist="+JSON.stringify(goodslist1);
                    html();
                    $(".total").html(total());
                }
            }
    })
});

