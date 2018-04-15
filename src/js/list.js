require.config({
    // baseUrl:'js'


    paths:{
        'jquery':'../lib/jquery-3.2.1',
        // 'zoom':'../lib/jquery.gdsZoom/jquery.gdsZoom'
        // 'lbt':'../lib/unslider.min.js'
    },

    // shim:{
    //     // 设置依赖
    //     // 'zoom':['jquery'],
    //     // 'common':['jquery']
    // }
});
require(['jquery'],function($){
    //引入头部尾部
    $('#pageHeader').load('header.html');
    $('#pageFooter').load('footer.html');





    let main_list = document.querySelector('.main_list');

    // console.log(666);
    let xhr = new XMLHttpRequest();
    let status = [200,304];
    
    xhr.onreadystatechange = function(){
        
        if(status.includes(xhr.status)){
            let data = JSON.parse(xhr.responseText);
            
            
            rank();
            function rank(){
                main_list.innerHTML = data.map(item=>{
                    return `
                        <li data-id="${item.id}">
                            <img src="${item.img}" class="tp">
                            <p class="name">${item.name}
                            <span class="price">￥${item.price}</span></p>
                            <p class="qty">${item.qty}</p>
                            <p class="car"><img src="${item.imgs}"></p>
                        </li>
                    `
                }).join('');
            }

            //默认价格排序
            let btn1 = document.querySelector('.btn1');
            let btn2 = document.querySelector('.btn2');

            //价格从低到高排序
            // console.log(btn1);
            btn1.onclick = function(){
                for(var i=0;i<data.length;i++){
                    for(var j=i+1;j<data.length;j++){
                        if(Number(data[i].price)>Number(data[j].price)){
                            var sum = data[i];
                            data[i] = data[j];
                            data[j] = sum;
                        }
                    }
                }

                rank();
            } 

            //价格从高到低排序
            // console.log(btn2);
            btn2.onclick = function(){
                for(var i=0;i<data.length;i++){
                    for(var j=i+1;j<data.length;j++){
                        if(Number(data[i].price)<Number(data[j].price)){
                            var sum = data[i];
                            data[i] = data[j]
                            data[j] = sum;
                        }
                    }
                }

                rank();
            } 
        }
    }


    xhr.open('get','../api/goods.php',true);

    xhr.send();

    // main_list.onclick = function(e){
    //     if(e.target.tagName.toLowerCase() === 'img'){
    //         let id = e.target.parentNode.dataset.id
    //         location.href="../html/details.html?id="+id;
    //     }
    // } 
    $(".main_list").on("click", "li", function(){
        var id = $(this).attr("data-id");
        location.href = "../html/details.html?id="+id;
    });            

});