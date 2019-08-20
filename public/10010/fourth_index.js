$(function () {
    // swiper 对象创建
    swiperForPage();

    // 页面效果
    pageAnimation();

    $('.area_title_05 .area_more').on('click', function () {
        var index = $('.list_top .border').index();
        console.log(index);
        if(index==0){
            location.href = Esf.contextPath + '/jf-mall/msearchKeyword?firstMenu=1020000';
        }else if(index==1){
            location.href = Esf.contextPath + '/jf-mall/msearchKeyword?firstMenu=1030000';
        }else if(index==2){
            location.href = Esf.contextPath + '/jf-mall/msearchKeyword?firstMenu=1110000';
        }else if(index==3){
            location.href = Esf.contextPath + '/jf-mall/msearchKeyword?firstMenu=1040000';
        }else if(index==4){
            location.href = Esf.contextPath + '/jf-mall/msearchKeyword?firstMenu=1060000';
        }else if(index==5){
            location.href = Esf.contextPath + '/jf-mall/msearchKeyword?firstMenu=1050000';
        }
    });

});

var mySwiper;
function bannerSwiperForPage(){
    mySwiper = new Swiper('.bannerImg', {
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.bannerImg_page',
            type: 'bullets',
        },
        loop: true
    });
}

function swiperForPage() {

    bannerSwiperForPage();


    new Swiper('.noticeWarp', {
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        direction: 'vertical',
        loop: true
    });

    new Swiper('.recommendBanner', {
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        slidesPerView: 3,
        spaceBetween: 0,
        slidesPerGroup: 3,
        loop: true,
        loopAdditionalSlides: 3
    });

    // new Swiper('.ad_banner', {
    //     autoplay: {
    //         delay: 3000,
    //         disableOnInteraction: false,
    //     },
    //     pagination: {
    //         el: '.ad_banner_page',
    //         type: 'bullets',
    //     },
    //     loop: true
    // });
}

function pageAnimation() {
    var toph = $('#top_search').height();
    // 顶部吸顶条
    $(window).on('scroll', function () {
        var $top = $('#top_search');

        if (scrollY > toph) {
            $top.addClass('ac');
        } else {
            $top.removeClass('ac');
        }
    });
    // if($.cookie("acFlag")){
    //     $($('.line-body .li')[$.cookie("acFlag")])
    //         .addClass('ac')
    //         .siblings().removeClass('ac');
    //     $('.cont-all>.cont-list')
    //         .eq($.cookie("acFlag")).addClass('ac')
    //         .siblings().removeClass('ac');
    //     $.cookie("acFlag",$.cookie("acFlag"));
    //     if($.cookie("acFlag")>2){
    //         $('.line-body').scrollLeft($($('.line-body .li')[1]).width()*($.cookie("acFlag")-2));
    //     }
    // }


    var data = sessionStorage.getItem('acFlag');
    if (data){
        $($('.line-body .li')[data])
            .addClass('ac')
            .siblings().removeClass('ac');
        $('.cont-all>.cont-list')
            .eq(data).addClass('ac')
            .siblings().removeClass('ac');
        $.cookie("acFlag",data);
        if(data>2){
            $('.line-body').scrollLeft($($('.line-body .li')[1]).width()*(data-2));
        }
    }



    // 为您推荐 切换
    $('.line-body').on('click', '.li', function () {
        var $this = $(this);
        $this.addClass('ac')
            .siblings().removeClass('ac');
        $('.cont-all>.cont-list')
            .eq($this.index()).addClass('ac')
            .siblings().removeClass('ac');
        // $.cookie("acFlag",$this.index());
        sessionStorage.setItem('acFlag', $this.index());
    });

    function Trim(str) {
        return str.replace(/(^\s*)|(\s*$)/g, "");
    }

    $('.more_foryou_now').on('click', function () {
        var index = $('.line-body>.ac').index() + 1;
        //2019年1月24应产品组要求0-1000查所有商品 其余的只查实物商品
        if(index==1){
            location.href = Esf.contextPath + "/jf-mall/msearchPointNew?pointCode=" + index+"&type=5";
        }else {
            location.href = Esf.contextPath + "/jf-mall/msearchPointNew?pointCode=" + index + "&type=2";
        }
    });

    //点击滑动积分值选择
    $('.line-end').on('click',function(){

        var scr =  $('.line-body').scrollLeft();
        scr += 30;
        $('.line-body').scrollLeft(scr);

    });
    $('.line-body').scrollLeft($(".line-body").width()*0.23);
    $('.line-left').on('click',function(){

        var scr =  $('.line-body').scrollLeft();
        scr = scr - 30;
        $('.line-body').scrollLeft(scr);

    });


    //品牌优选手动切换
    $('.brand_title .brand_item').on('click',function(){
        var i = $(this).index();
        $(this).children('.text').addClass('border').parent().siblings().find('.text').removeClass('border');
        $('.brand_contents .brand_bottom').eq(i).css('display','flex').siblings().hide();
        $('.brand_contents .brand_bottom').scrollLeft(0);
        sessionStorage.setItem('brandFlag',i);
    });

    var record = sessionStorage.getItem('brandFlag');
    if(record){
        $($('.brand_title .brand_item')[record]).children('.text').addClass('border').parent().siblings().find('.text').removeClass('border');
        $('.brand_contents .brand_bottom').eq(record).css('display','flex').siblings().hide();
        $.cookie("brandFlag",record);
    }

    // 类目热兑手动切换
    // $('.list_top .list_tit').on('click',function(){
    //     var i = $(this).index();
    //     $(this).addClass('border').siblings().removeClass('border');
    //     $('.classfication .list_con').eq(i).show().siblings().hide();
    // })
    // $('.list_con1').show().siblings().hide();
    var m=0;//初始记录用户鼠标经过是第几个li
    var canmove=true;
    // $('.list_top .list_tit').click(function(){
    //     canmove=false;
    //     clearInterval(tit_timer);
    //     m=$(this).index();
    //     var b = $(this).index();
    //     $(this).addClass('border').siblings().removeClass('border');
    //     // $('.classfication .list_con').eq(m).show().siblings().hide();
    //     clearInterval(tit_timer);
    //         setTimeout(function(){canmove=true;},9000);//秒后自动切换
    //         sessionStorage.setItem('flag',b);
    //         // swiper1.slideTo(0, 0.001);
    //         // swiper2.slideTo(0, 0.001);
    //         // swiper3.slideTo(0, 0.001);
    //         // swiper4.slideTo(0, 0.001);
    //         // swiper5.slideTo(0, 0.001);
    //         // swiper6.slideTo(0, 0.001);

    // });
    // var flag = sessionStorage.getItem('flag');
    // if(flag){
    //     $($('.list_top .list_tit')[flag]).addClass('border').siblings().removeClass('border');
    //     // $('.list_bottom .list_con').eq(flag).show().siblings().hide();
    //     $.cookie("flag",flag);
    // }

    // function tit_timer(){
    //     if(canmove){
    //         m++;
    //         if(m==$('.list_top .list_tit').length){
    //             m=0;
    //         }
    //         $('.list_top .list_tit').eq(m).addClass('border').siblings().removeClass('border');
    //         $('.classfication .list_con').eq(m).show().siblings().hide();
    //     }

    // }
    // setInterval(tit_timer,9000);//每两秒切换


//     new Swiper('.list_con1', {
//     //     autoplay: {
//     //        delay: 4000,
//     //        disableOnInteraction: false,
//     //    },
//        pagination: {
//            el: '.swiper-pagination',
//          },
//          slidesPerColumn: 2,
//          slidesPerView : 3,//一行显示3个
//   slidesPerGroup : 3,//3个一组
//   slidesPerGroup : 6,

//     //    slidesPerView: 1,
//     //    spaceBetween: 0,
//     //    slidesPerGroup: 1,
//     //    loop: true,

//     //    loopAdditionalSlides: 6
// });

// var swiper1 = new Swiper('.list_con1', {
//     pagination: {
//                    el: '.swiper-pagination',
//                 },
//     slidesPerView: 3,
//     spaceBetween: 0,
//     slidesPerGroup: 3,
//     // loop: true,
//     loopAdditionalSlides: 3,
//     slidesPerColumn: 2,
//     updateTranslate:true,
//     observer:true,
//     observeParents:true,
// });
// var swiper2 = new Swiper('.list_con2', {
//     pagination: {
//                    el: '.swiper-pagination',
//                 },
//     slidesPerView: 3,
//     spaceBetween: 0,
//     slidesPerGroup: 3,
//     // loop: true,
//     loopAdditionalSlides: 3,
//     slidesPerColumn: 2,
//     observer:true,
//     observeParents:true,
// });
// var swiper3 = new Swiper('.list_con3', {
//     pagination: {
//                    el: '.swiper-pagination',
//                 },
//     slidesPerView: 3,
//     spaceBetween: 0,
//     slidesPerGroup: 3,
//     // loop: true,
//     loopAdditionalSlides: 3,
//     slidesPerColumn: 2,
//     observer:true,
//     observeParents:true,
// });
// var swiper4  = new Swiper('.list_con4', {
//     pagination: {
//                    el: '.swiper-pagination',
//                 },
//     slidesPerView: 3,
//     spaceBetween: 0,
//     slidesPerGroup: 3,
//     // loop: true,
//     loopAdditionalSlides: 3,
//     slidesPerColumn: 2,
//     observer:true,
//     observeParents:true,
// });
// var swiper5 =new Swiper('.list_con5', {
//     pagination: {
//                    el: '.swiper-pagination',
//                 },
//     slidesPerView: 3,
//     spaceBetween: 0,
//     slidesPerGroup: 3,
//     // loop: true,
//     loopAdditionalSlides: 3,
//     slidesPerColumn: 2,
//     observer:true,
//     observeParents:true,
// });
// var swiper6 = new Swiper('.list_con6', {
//     pagination: {
//                    el: '.swiper-pagination',
//                 },
//     slidesPerView: 3,
//     spaceBetween: 0,
//     slidesPerGroup: 3,
//     // loop: true,
//     loopAdditionalSlides: 3,
//     slidesPerColumn: 2,
//     observer:true,
//     observeParents:true,
// });

    var swiperList = new Swiper('.list .swiper-container',{
        on: {
            slideChangeTransitionEnd: function(){
                //   console.log(this.activeIndex);
                if(this.activeIndex<= 2){
                    $('.list_top .list_tit:eq(0)').addClass('border').siblings().removeClass('border');
                }else if(this.activeIndex>=3&&this.activeIndex<6){
                    $('.list_top .list_tit:eq(1)').addClass('border').siblings().removeClass('border');
                }else if(this.activeIndex >= 6&&this.activeIndex<9){
                    $('.list_top .list_tit:eq(2)').addClass('border').siblings().removeClass('border');
                }else if(this.activeIndex >= 9&&this.activeIndex<12){
                    $('.list_top .list_tit:eq(3)').addClass('border').siblings().removeClass('border');
                }else if(this.activeIndex >= 12&&this.activeIndex<15){
                    $('.list_top .list_tit:eq(4)').addClass('border').siblings().removeClass('border');
                }else if(this.activeIndex >= 15){
                    $('.list_top .list_tit:eq(5)').addClass('border').siblings().removeClass('border');
                }

                if(this.activeIndex % 3 == 0){
                    $('.circleBullets .circle:eq(0)').addClass('active').siblings().removeClass('active');
                }else if(this.activeIndex % 3 ==1){
                    $('.circleBullets .circle:eq(1)').addClass('active').siblings().removeClass('active');
                }else if(this.activeIndex % 3 == 2){
                    $('.circleBullets .circle:eq(2)').addClass('active').siblings().removeClass('active');
                }

            },
        },
        // pagination:{
        //     el:'.swiper-pagination'
        // },
        autoplay:{
            delay:3000,
            disableOnInteraction:false,
        },
        // loop: true,
    })

    $('.list_top .list_tit').click(function(){
        var i = $(this).index();
        var b = $(this).index();
        $(this).addClass('border').siblings().removeClass('border');
        swiperList.slideTo(3*i);
        // console.log(3*i);
        sessionStorage.setItem('flag',b);
    })
    var flag = sessionStorage.getItem('flag');
    if(flag){
        $($('.list_top .list_tit')[flag]).addClass('border').siblings().removeClass('border');
        swiperList.slideTo(3*flag);
        $.cookie("flag",flag);
    }

}