
var provinceZones = ["11", "31", "17", "71", "74", "83", "85", "89", "34", "50"];
document.onreadystatechange = function() {
    if (document.readyState === 'complete') {
        var firstPage = '';
        var classPage = '';
        var personPage = '';
        switch (location.hostname) {
            case "demo.mall.10010.com":
                firstPage = translateHref("/jf-mall/mobileIndex");
                classPage = translateHref('/jf-mall/mclassify');
                personPage = translateHref('/jf-order/mobSearchPoints/pointsIndex');
                break;

            case "weixin.pdmreader.com":
                firstPage = translateHref("/jf-mall/mobileIndex");
                classPage = translateHref('/jf-mall/mclassify');
                personPage = translateHref('/jf-order/mobSearchPoints/pointsIndex');
                break;

            case "m.jf.10010.com":
                firstPage = translateHref("/");
                classPage = translateHref('/cms/mclassify.html');
                personPage = translateHref('/jf-order/mobSearchPoints/pointsIndex');
                break;

            default:
                break;
        }

        var style = document.createElement('style');
        style.innerText = "#nav{position:fixed;display:-webkit-box;display:flex;justify-content:space-around;bottom:0;left:0;right:0;z-index:99999;margin:0 auto;background-color:#f4f4f4;width:7.5rem;height:1rem;font-size:.24rem}#nav a,#nav i,#nav em{box-sizing:content-box}#nav a{width:1.5rem;height:.9rem;padding-top:.1rem;display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;color:#606060;text-decoration:none}#nav a i{width:.47rem;height:.47rem;background:no-repeat 0 0;background-image:url(data:image/png;base64,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);background-size:2.18rem .96rem}#nav a em{height:.4rem;line-height:.4rem}#nav a .icon-home{background-position:.01rem -0.49rem}#nav a .icon-list{background-position:-0.44rem -0.49rem}#nav a .icon-find{background-position:-0.91rem -0.49rem}#nav a .icon-prov{background-position:-1.32rem -0.49rem}#nav a .icon-my{background-position:-1.79rem -0.49rem}#nav a.ac{color:#f89715}#nav a.ac .icon-home{background-position:.01rem 0}#nav a.ac .icon-list{background-position:-0.44rem 0}#nav a.ac .icon-find{background-position:-0.91rem 0}#nav a.ac .icon-prov{background-position:-1.32rem 0}#nav a.ac .icon-my{background-position:-1.79rem 0}";
        document.head.appendChild(style);
        var div = document.createElement('div');
        div.innerHTML = '<nav id="nav"><a href="' + firstPage + '"><i class="icon-home"></i><em>首页</em></a><a href="' + classPage + '"><i class="icon-list"></i><em>分类</em></a><a href="javascript:;" id="nav-provice"><i class="icon-prov"></i><em>省份</em></a><a href="' + personPage + '"><i class="icon-my"></i><em>我的</em></a></nav>';
        document.body.appendChild(div);

        (function() {
            var provice = document.getElementById('nav-provice');
            var all = document.querySelectorAll('#nav>a');
            var whichOne = -1;

            // 浜嬩欢缁戝畾
            all.forEach(function(e) {
                e.onclick = function() {
                    all.forEach(function(el) {
                        el.classList.remove('ac');
                    });
                    e.classList.add('ac');
                }
            });

            provice.onclick = function() {
                skipToFlowPkg();
            }

            // 椤甸潰鍒ゅ畾
            whichOne = (function() {
                var num = null;

                if (isThis('mobileIndex') || location.pathname === "/") {
                    num = 0;
                } else if (isThis('mclassify')) {
                    num = 1;
                } else if (isThis('mProvinceSearch')) {
                    num = 2;
                } else if (isThis('pointsIndex')) {
                    num = 3;
                } else {
                    num = -1;
                }

                function isThis(str) {
                    var bool = location.pathname.indexOf(str) > -1;
                    return bool;
                }

                return num;
            })();
            console.log(whichOne);

            if (whichOne > -1) {
                all[whichOne].classList.add('ac');
            }

        })();

        if (typeof Esf !== "object") {
            var Esf = {};
            switch (location.hostname) {
                case "demo.mall.10010.com":
                    Esf.contextPath = translateHref("");
                    Esf.index = translateHref("/jf-mall/mobileIndex");
                    Esf.callbackUrl = translateHref("/jf-mall/deal?state=");
                    Esf.loginUrl = "http://dev3000.uac.10010.com/oauth2/new_auth?display=wap&page_type=06&redirect_uri=" + translateHref("/jf-mall/deal&app_code=ECS-JF");
                    Esf.logoutUrl = "http://uac.10010.com/oauth2/signout";
                    break;

                case "m.jf.10010.com":
                    Esf.contextPath = translateHref("");
                    Esf.index = translateHref("/jf-mall/mobileIndex");
                    Esf.callbackUrl = translateHref("/deal?state=");
                    Esf.loginUrl = "https://uac.10010.com/oauth2/new_auth?display=wap&page_type=06&redirect_uri=" + translateHref("/deal&app_code=ECS-JF");
                    Esf.logoutUrl = "https://uac.10010.com/oauth2/signout";
                    break;

                
            }
        }

        function translateHref(targetHref) {
            var ua = window.navigator.userAgent.toLowerCase();

            //閫氳繃姝ｅ垯琛ㄨ揪寮忓尮閰島a涓槸鍚﹀惈鏈塎icroMessenger瀛楃涓�
            if (ua.match(/MicroMessenger/i) == 'micromessenger') {
                var pathname = window.location.pathname;
                if (!pathname.startsWith("jf-", 1) && !pathname.startsWith("item", 1) &&  !pathname.startsWith("cms", 1)) {
                    var channel = pathname.split('/')[1];
                    if (channel !== "" && channel !== null && channel != "undefined") {
                        return location.origin + '/' + channel + targetHref;
                    }
                }
            }
            return location.origin + targetHref;
        }

        function initProvinceZone() {
            if (provinceZones) {
                var cityCookie = $.cookie("jfcity");
                if (cityCookie != null && cityCookie != "") {
                    var jfprovince = cityCookie.split("|")[0];
                    if (jfprovince == null && jfprovince == "") {
                        return false;
                    }
                    if ($.inArray(jfprovince, provinceZones) < 0) {
                        window.location.href = Esf.contextPath + "/jf-mall/mwatting";
                    } else {
                        window.location.href = Esf.contextPath + "/jf-mall/mProvinceSearch/0-0-0-0-0-606-1-" + jfprovince + ".html";
                    }
                }
            }
        }

        function skipToFlowPkg() {
            $.ajax({
                url: Esf.contextPath + "/jf-order/auth/checklogin/02",
                type: "get",
                dataType: 'json',
                success: function(result) {
                    if ("0000" == result.resultcode) {
                        initProvinceZone();
                    } else if ("1001" == result.resultcode) {
                        App.showLoginPage(window.location.href, Esf.loginUrl, Esf.callbackUrl);
                    } else {
                        Message.showMessage(result.resultdesc);
                    }
                }
            });
        }

    }
}( jQuery );document.writeln("<script src='public/js/jquery.js'></script>");
