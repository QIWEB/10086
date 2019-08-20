

$(function() {//编辑文章时阻止a标签跳转
    var JF_domain = "";
    switch (location.hostname) {
        case "demo.mall.10010.com":
            JF_domain = "http://demo.mall.10010.com:8104";
            break;
        case "m.jf.10010.com":
            JF_domain = "https://m.jf.10010.com";
            break;
        default:
            break;
    }

    if(isWeiXinByHtml()) {
        $.ajax({
            url: translateHref(JF_domain + "/jf-order/auth/checklogin/02"),
            type: "get",
            dataType: 'json',
            success: function (result) {
                if (result.resultcode != "0000") {
                    window.location.href = JF_domain + "/jf-auth/wx/auth/authorize?state=" + window.location.href;
                }
            }
        });
    }



    $("a").on('click', function (e) {
        //如果提供了事件对象，则这是一个非IE浏览器
        var toUrl = $(this).attr('href');
        e.preventDefault();
        var hr = translateHref(toUrl);
        window.location.href = hr;
    });
    $(document).on('submit', function (file, q) {
        var url = file.target.action;
        file.target.action= translateHref(url);
    });
    hookAjax({
        open: function (arg) {
            var toUrl = arg[1];
            arg[1] = translateHref(toUrl);
        }
    });

});
function translateHref(targetHref) {
    if(!targetHref.startsWith("http")){
        return targetHref;
    }
    if(isWeiXinByHtml() && (targetHref.startsWith("https://m.jf.10010.com") || targetHref.startsWith("http://jf.10010.com") || targetHref.startsWith("http://m.jf.10010.com") || targetHref.startsWith("http://demo.mall.10010.com"))){
        var pathname = window.location.pathname;
        var channel = pathname.split("/")[1];
        var targetPath = targetHref.substring(0, targetHref.indexOf('?') === -1 ? targetHref.length : targetHref.indexOf('?'));
        var targetOrigin = targetPath.substring(0, targetPath.indexOf('/',targetPath.indexOf('10010.com')));
        var targetUri = targetHref.substring(targetOrigin.length);
        if((targetOrigin.indexOf("res.mall.10010.cn") === -1 || targetUri.indexOf("jf-res") === -1) && !targetUri.startsWith("wx", 1)) {
            return targetOrigin + '/' + channel + targetUri;
        }
    }
    return targetHref;
}

function isWeiXinByHtml() {
    var ua = window.navigator.userAgent.toLowerCase();
    //ͨ微信浏览器
    if(ua.match(/MicroMessenger/i) == 'micromessenger') {
        var pathname = window.location.pathname;
        if(!pathname.startsWith("jf-", 1) && !pathname.startsWith("item", 1) && !pathname.startsWith("cms", 1)
            && !pathname.startsWith("m", 1)
            && (location.hostname === "m.jf.10010.com" || location.hostname === "demo.mall.10010.com")){
            var channel = pathname.split("/")[1];
            if(channel != "" && channel != null && channel != "undefined"){
                return true;
            }
        }
    }
    return false;
}