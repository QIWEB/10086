
var Render = {
    /*
     *  @config:
     *       text：提示框的提示字；
     *  依赖部分 style
     */
    alert: function (config) {
        // DOM绘制
        var $div = '<div id="big"><div class="alertDiv"><div class="contentDiv"></div><div class="bottomDiv"><div class="btnDiv oneReceive" style="cursor: pointer">' + config + '</div></div></div><div class="close" style="cursor: pointer"></div></div><div class="mask1"></div>';

        $('body').append($div);

        //点击关闭弹出框
        $('.close').on('click', removeMask);

        //点击立即领取
        $('.oneReceive').on('click', function () {
            
            /*if($(this).attr('data-disabled') == "false"){
                return;
            }else{
                $(this).attr('data-disabled','false');
            }*/

            $.ajax({
                url: Esf.contextPath + "/jf-order/auth/checklogin/02",
                type: "get",
                dataType: 'json',
                success: function (result) {
                    if (result.resultcode == "0000") {
                        oneReceive();
                    } else {
                        //delCookie("is_first");
                        window.location.href = Esf.loginUrl;
                    }
                }
            });

        });

        function removeMask() {
            $(this).parents('#big').remove();
            $('.mask1').remove();
            move();
        }

        function oneReceive() {
            window.location.href = Esf.contextPath + "/jf-order/coupon/doubleFastival/detail";
        }
    }
}

/***禁止滑动***/
function stop() {
    $('body').css('overflow', 'hidden');
}

/***取消滑动限制***/
function move() {
    $('body').css('overflow', '');
}

// Render.alert 的 style 依赖
$(function() {
    var style = document.createElement('style');
    style.innerText = "body{font-size:.24rem;}.mask1{width:100%;height:100%;background:rgba(0,0,0,0.3);z-index:999990;position:fixed;top:0;left:0}#big{width:4.8rem;height:6.1rem;border-radius:.2rem;position:fixed;top:0;bottom:0;right:0;left:0;margin:auto;z-index:999999}#big .alertDiv{width:4.8rem;height:6.1rem;border-radius:.2rem;overflow:hidden}#big .alertDiv .contentDiv{width:4.8rem;height:5.15rem;background:url('"+ Esf.baseResPath +"/mobile/images/coupon/alertDiv.png');background-size:100% 100%}#big .alertDiv .bottomDiv{background-color:#fff;height:.9rem}#big .alertDiv .bottomDiv .btnDiv{width:-webkit-fit-content;width:fit-content;height:0.6rem;line-height:0.6rem;font-size:0.28rem;background:-webkit-linear-gradient(#ff7c43, #fc5954);background:linear-gradient(#ff7c43, #fc5954);border-radius:.2rem;color:#fff;text-align:center;position:absolute;bottom:.25rem;left:0;right:0;margin:auto;padding-left:.3rem;padding-right:.3rem}#big .close{width:.6rem;height:.6rem;background:url('"+ Esf.baseResPath +"/mobile/images/coupon/close.png');background-size:100% 100%;position:absolute;bottom:-1.2rem;right:0;left:0;margin:auto}";
    document.head.appendChild(style);
    stop();
});



// Render.alert();