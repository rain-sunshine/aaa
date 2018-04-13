// -------------------  头部购物车划出
void function () {
    $('.shop_cart').on('mouseenter',function () {
        $('.shop_msg').stop(true,false).css({"display":"block"}).animate({
            height:100,
        },200);
    }).on('mouseleave',function () {
        $('.shop_msg').stop(true,false).css({"display":"block"}).animate({
            height:0,
        },200,function () {
            $(this).css({"display":"none"});
        });
    })
}();
// -------------------  头部搜索点击效果
void function () {
    $('.search_form').on('click',function (event) {
        event.stopPropagation();
        $('.keyword_list').removeClass('hide');
        $('.search_form input').css({"border-color":"#ff6700"});
        console.log(1);
        $('.search_hot_words').fadeOut(200);
    })
    $('body').on('click',function () {
        $('.keyword_list').addClass('hide');
        $('.search_form input').css({"border-color":"#e0e0e0"});
        $('.search_hot_words').fadeIn(200);
    })
}();

// -------------------   导航栏 下拉商品信息列表
void function () {
    // 给隐藏商品列表添加移入移出事件
    $('.head_sub_lit_hd').on('mouseenter',function () {
        headSubLitIn();
    }).on('mouseleave',function () {
        headSubLitOut()
    });
    //  导航栏的移入移出时间
    $('.head_nav .nav_item').on('mouseenter',function (event) {
        event.stopPropagation();
        headSubLitIn();
        $('.head_nav .nav_item').off('mouseover');
    }).on('mouseleave',function (event) {
        event.stopPropagation();
        headSubLitOut()
    });
    //----------------------------------------
    $('.head_sub_lit_hd').on('mouseleave',function () {
        navItemOver()
    });
    navItemOver();
    function navItemOver() {
        $('.head_nav .nav_item').on('mouseover',function (event) {
            event.stopPropagation();
            $($(this)[0].firstElementChild).mouseenter();
        });
    }
    //    导航链接添加 下拉内容到下拉框中
    $('.head_nav .nav_item .list_lin').on('mouseenter',function (event) {
        event.stopPropagation();
        headSubLitIn();
        $('.head_sub_lit_hd').html($($(this)[0].nextElementSibling.firstElementChild).clone(true));
    });
    //  给最后两个导航做清除动作处理
    $('.head_nav .nav_item .out_lin').on('mouseenter',function (event) {
        event.stopPropagation();
        headSubLitOut()
        //    移除最后两个导航的下拉动作
        $(this).parents('.nav_item').off('mouseenter');
        $($(this).parents('.nav_item')[0].nextElementSibling).off('mouseenter');
    })

function headSubLitIn() {
    $('.head_sub_lit_hd').css({"display":"block"}).stop(true,false).animate(
        {height:'229'},300);
};
function headSubLitOut() {
    $('.head_sub_lit_hd').animate(
        {height:'0'},300,function () {
            $(this).css({"display":"none"});
        });
};
}();

//---------------------------------------- 轮播菜单
void function () {
    $('.cate_item').on({
        "mouseenter": function () {
            $(this).addClass('cate_item_active')[0].lastElementChild.style.display = 'block';
        },
        "mouseleave": function () {
            $(this).removeClass('cate_item_active')[0].lastElementChild.style.display = 'none';
        }
    })
}();

//---------------------------------------- 轮播图
void function () {
    var index = 0, aut;
    //  下一张
    function nextIMG() {
        index++;
        if( index == 5 ) index = 0;
        change(index);
    };
    $('.next').click(function (event) {
        event.stopPropagation();
        nextIMG();
    });
    //  上一张
    function prevIMG() {
        index--;
        if( index == -1 ) index = 4;
        change(index);
    };
    $('.prev').click(function (event) {
        event.stopPropagation();
        prevIMG();
    });
    $('.ban_arrow').on('mouseenter',function () {
        event.stopPropagation();
        clearInterval(aut);
    });

    //  动作
    function change(num) {
        $('.banner .side:eq('+ num +')').addClass('active').siblings().removeClass('active');
        $('.inde .bean:eq('+ num +')').addClass('active').siblings().removeClass('active');
    }
    aut = setInterval( nextIMG,3000);

//    鼠标移入移出事件
    $('.banner').on({
        "mouseenter":function (event) {
            clearInterval(aut);
        },
        "mouseleave":function (event) {
            aut = setInterval(nextIMG,3000);
        }
    });
//    小豆豆事件
    $('.inde').on('mouseenter',function (event) {
        clearInterval(aut);
    });
    $('.inde .bean').on('click',function (event) {
        event.stopPropagation();
        index = $(this).index();
        change(index);
    })
}();











