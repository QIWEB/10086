$(function () {
    $(".nav_line").find(".skipToPkg").click(function () {
        skipToFlowPkg();
    });


});
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
        success: function (result) {
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

function searchGoodsF(firstCode, secondCode, threeCode) {
    var req = "/";
    if ("" == firstCode){
        firstCode="F";
    }
    if ("" == secondCode){
        secondCode="S";
    }
    if ("" == threeCode){
        threeCode="T";
    }
    req += firstCode + "/" + secondCode + "/" + threeCode;
    window.location.href = Esf.contextPath + "/jf-mall/mSearchClassifyLevel/intoMSearchFtl" + req;
}

function searchGoodsF(titleType) {
    var req = "/";
    if(""==titleType){
        titleType="TT";
    }
    req += titleType;
    window.location.href  = Esf.contextPath + "/jf-mall/mSearchClassifyLevel/intoMSearchFtlNew" + req;
}