webpackJsonp([64, 62], {
    0: function(e, t, i) {
        "use strict";
        var n = u(i(5)),
            o = u(i(2195)),
            a = u(i(120)),
            s = (u(i(19)), u(i(100))),
            r = u(i(78)),
            c = u(i(1)),
            l = u(i(3));

        function u(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        n.default.use(a.default, {
            preLoad: 1.3,
            error: s.default,
            loading: s.default,
            attempt: 1,
            listenEvents: ["scroll"]
        }), i(605), n.default.use(r.default), n.default.prototype.maxScreenWidth = 750, n.default.prototype.gotoUrlByChannel = function(e, t, i) {
            if (c.default.isClient) {
                var n = -1;
                c.default.isH5 ? -1 == e.indexOf("http") && (e = c.default.clientUrl + e) : l.default.getosType() ? "noRootUrl" != i ? -1 == e.indexOf("http") && (e = c.default.clientUrl + e) : n = 1 : -1 == e.indexOf("http") && (e = c.default.clientUrl + e), l.default.go(e, null, t, n, !0, 1)
            }else{
                // alert(e);
                window.location.href = 'https://m.jf.10086.cn' + e
            }
        }, new n.default({
            el: "#index",
            template: "<App/>",
            components: {
                App: o.default
            },
            data: function() {
                return {
                    isLogin: "00",
                    checkLoginSwitch: !0,
                    isHasSwiper: "00"
                }
            }
        })
    },
    1: function(e, t) {
        "use strict";
        var i = "";

        function n() {
            var e = navigator.userAgent,
                t = (navigator.appVersion, !!e.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)),
                i = e.indexOf("iPhone") > -1 || e.indexOf("Mac") > -1,
                n = e.indexOf("iPad") > -1;
            return !!(t || i || n)
        }
        var o = {
            isClient: window.context.isClient,
            isWechat: window.context.isWechat,
            isH5: function() {
                var e = navigator.userAgent.toLowerCase();
                if ("leadeon" == e.match(/leadeon/i)) {
                    if (window.context.isClient && n()) {
                        var t = e.substring(e.indexOf("leadeon/") + 8);
                        console.log("客户端版本" + t);
                        var i = window.iosH5Version.split(".");
                        console.log("iosH5Version=" + i + "split=" + i[0] + i[1] + i[2]);
                        var o = parseInt(t.substring(0, 1)),
                            a = parseInt(t.substring(2, 3)),
                            s = parseInt(t.substring(4, 5));
                        return o < i[0] || o == i[0] && a < i[1] || o == i[0] && a == i[1] && s < i[2] ? (console.log("客户端版本if：" + t), !1) : (console.log("客户端版本else：" + t), !0)
                    }
                    return !0
                }
                return !1
            }(),
            isCQ: "CqmcClient" == navigator.userAgent.match(/CqmcClient/i) && (function() {
                if (!window.JFH5Uid) {
                    var e = navigator.userAgent.toLowerCase(),
                        t = null != e.match(/(iphone|ipad|ios)/i),
                        i = null != e.match(/(android)/i);
                    t ? (window.webkit.messageHandlers.getUid.postMessage(null), window.setUid = function(e) {
                        window.JFH5Uid = e
                    }) : i && (AppFunLoader.getUid(), window.setUid = function(e) {
                        window.JFH5Uid = e
                    })
                }
            }(), !0),
            isHeBao: "hebao" == navigator.userAgent.toLowerCase().match(/hebao/i) && (window.JFH5Uid = "unlogin", !0),
            isIOS: n(),
            clientUrl: i,
            serverUrl: i,
            integralAssigneeUrl: "https://open.jf.10086.cn",
            pcUrl: "http://jf.10086.cn/index.html?from=m"
        };
        e.exports = o
    },
    3: function(e, t, i) {
        "use strict";
        var n = m(i(51)),
            o = m(i(50)),
            a = m(i(47)),
            s = m(i(12)),
            r = m(i(17)),
            c = m(i(1)),
            l = i(11),
            u = m(i(7)),
            d = m(i(21)),
            f = m(i(4)),
            h = m(i(10)),
            p = m(i(48)),
            g = m(i(19));
        m(i(5));

        function m(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var w = {
            go: function(e, t, i, n, o, a) {
                c.default.isClient && !c.default.isH5 ? (e.indexOf("http://") < 0 && e.indexOf("https://") < 0 && (e = c.default.clientUrl + e), 1 == a ? u.default.openNewPage(e, t, i, n, o) : u.default.openPage(e, t, i, n, o)) : (c.default.isClient && c.default.isH5 && "" != i && (e = e + "?title=" + i), window.location.href = e), window.event.returnValue = !1
            },
            toggle: function(e) {
                e ? window.clickObj = new function() {
                    this.leftButtonClick = e
                } : window.clickObj && delete window.clickObj
            },
            href: function(e, t, i) {
                e += "#", t && t.length > 0 && (e += "/" + t);
                for (var n in i) e += "/" + i[n];
                return e
            },
            index: function() {
                c.default.isClient && !c.default.isH5 ? u.default.back(-1) : window.location.href = "/module/index.html"
            },
            toLogin: function(e) {
                var t = this;
                if (c.default.isH5 && c.default.isClient) g.default.toLoginView();
                else if (c.default.isClient) u.default.toLoginView();
                else {
                    var i = window.location.href;
                    i = "", i = escape(i);
                    var n = e || i,
                        o = "false";
                    c.default.isWechat && (o = "true"), new r.default(function(e, i) {
                        t.post("/user/UserLoginAction/goAuthLoginPageVue", {
                            target: n,
                            isWechat: o
                        }).then(function(t) {
                            e(f.default.getData(t))
                        })
                    }).then(function(e) {
                        window.location.href = e.authLoginPage
                    })
                }
            },
            isWechatBrowser: function() {
                if ("micromessenger" == navigator.userAgent.toLowerCase().match(/MicroMessenger/i)) return !0;
                window.location.href = "/module/weChat.html#/notWechatBrowser"
            },
            getChannel: function() {
                return c.default.isClient ? "APP" : "TOUCH"
            },
            setPageTitle: function(e) {
                c.default.isH5 ? (c.default.isIOS && g.default.setPageTitle(e), document.title = e) : u.default.setPageTitle(e)
            },
            setGoTitleForH5Client: function() {
                var e = window.location.href;
                if (e.indexOf("?title=") > -1) {
                    var t = e.substring(e.indexOf("?title=") + 7);
                    console.log(decodeURIComponent(t)), t.indexOf("#/") > -1 && (t = t.substring(0, t.indexOf("#/"))), this.setPageTitle(decodeURIComponent(t))
                }
            },
            getosType: function(e) {
                c.default.isH5 || u.default.androidClient()
            },
            back: function() {
                c.default.isClient && !c.default.isH5 ? u.default.backView(1) : window.history.go(-1)
            },
            post: function(e, t) {
                var i = this;
                if (!c.default.isClient || !c.default.isH5) return new r.default(function(n, o) {
                    !c.default.isClient && (c.default.isH5 || c.default.isCQ || c.default.isHeBao) ? (i.checkUidForH5(), i.interceptPostCheck(function() {
                        console.log(e + "  " + new Date + " 新 " + window.JFH5Uid), t = i.addToken(t), i.sendPost(e, t).then(function(e) {
                            n(e)
                        })
                    })) : i.sendPost(e, t).then(function(e) {
                        n(e)
                    })
                });
                if ((t = this.addChannel(t)).token && t.encryptUid || (t = this.addToken(t)), e && (e = w.reflectUrl(e))) {
                    var n = e.indexOf("b2cInter") > -1 ? c.default.integralAssigneeUrl : c.default.serverUrl,
                        o = p.default.create();
                    return o.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded", o.defaults.withCredentials = !0, o.post(n + e, w.stringify(t))
                }
            },
            sendPost: function(e, t) {
                if (t = this.addChannel(t), c.default.isH5 || c.default.isCQ || c.default.isHeBao) {
                    if (e && (e = w.reflectUrl(e))) {
                        var i = e.indexOf("b2cInter") > -1 ? c.default.integralAssigneeUrl : c.default.serverUrl,
                            n = p.default.create();
                        return n.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded", n.defaults.withCredentials = !0, n.post(i + e, w.stringify(t))
                    }
                } else if (e && (e = w.reflectUrl(e))) {
                    var o = e.indexOf("b2cInter") > -1 ? c.default.integralAssigneeUrl : c.default.serverUrl;
                    if (c.default.isClient) return new r.default(function(i, n) {
                        u.default.httpPost(t || {}, e, function(e) {
                            return i(e)
                        })
                    });
                    var a = p.default.create();
                    return a.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded", a.defaults.withCredentials = !0, a.post(o + e, w.stringify(t))
                }
            },
            addChannel: function(e) {
                var t = {
                    channel: c.default.isClient ? l.$channelCons.CHANNEL_APP : l.$channelCons.CHANNEL_MOBILE,
                    isWechat: c.default.isWechat,
                    isH5: c.default.isH5
                };
                return e && "object" === (void 0 === e ? "undefined" : (0, s.default)(e)) && (t = (0, a.default)(e, t)), t
            },
            addToken: function(e) {
                var t = {
                    UID: window.JFH5Uid,
                    token: h.default.get("JF_H5_UID"),
                    encryptUid: h.default.get("JF_H5_ENCRYPT_UID"),
                    isHeBao: c.default.isHeBao
                };
                return e && "object" === (void 0 === e ? "undefined" : (0, s.default)(e)) && (t = (0, a.default)(e, t)), t
            },
            getToken: function() {
                var e = (0, o.default)(n.default.mark(function e() {
                    return n.default.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                leadeon.init = function() {
                                    g.default.getTokenFromLeadeon()
                                };
                            case 1:
                            case "end":
                                return e.stop()
                        }
                    }, e, this)
                }));
                return function() {
                    return e.apply(this, arguments)
                }
            }(),
            reflectUrl: function(e) {
                var t = e.split("/"),
                    i = (t[1], e.substring(t[1].length + 1, e.length));
                return e = d.default.get(t[1]).get(i)
            },
            stringify: function(e) {
                var t = "";
                for (var i in e) t += i + "=" + e[i] + "&";
                return t.substring(0, t.length - 1)
            },
            interceptPostCheck: function(e) {
                var t = e;
                (e = function() {
                    window.JFH5Uid ? t() : setTimeout(e, 500)
                })()
            },
            checkUidForH5: function() {
                if (c.default.isH5) {
                    var e = window.location.href,
                        t = e.indexOf("UID=");
                    if (t > -1) return window.JFH5Uid = e.substring(t + 4, t + 36), void h.default.set("JF_H5_UID", window.JFH5Uid);
                    if (window.JFH5Uid) return;
                    if (window.JFH5Uid = h.default.get("JF_H5_UID"), window.JFH5Uid) return;
                    (t = (e = window.location.href).indexOf("UID=")) > -1 && (window.JFH5Uid = e.substring(t + 4, t + 32 + 4), h.default.set("JF_H5_UID", window.JFH5Uid))
                }
            }
        };
        e.exports = w
    },
    4: function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n, o = i(12),
            a = (n = o) && n.__esModule ? n : {
                default: n
            };
        var s = {
            trim: function(e) {
                return e ? e.replace(/(^\s*)|(\s*$)/g, "") : ""
            },
            isArray: function(e) {
                return "[object Array]" == Object.prototype.toString.call(e)
            },
            getObj: function(e) {
                if ("object" === (void 0 === e ? "undefined" : (0, a.default)(e))) return e;
                try {
                    return JSON.parse(e)
                } catch (e) {
                    return new Object
                }
            },
            getData: function(e) {
                return e && "data" in e ? e.data : e
            },
            dealPostData: function(e) {
                return e.data.data ? e.data : e
            }
        };
        t.default = s
    },
    7: function(e, t, i) {
        "use strict";
        o(i(45));
        var n = o(i(1));

        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var a = "kConnectToNative";

        function s(e) {
            window.WebViewJavascriptBridge ? e(WebViewJavascriptBridge) : document.addEventListener("WebViewJavascriptBridgeReady", function() {
                e(WebViewJavascriptBridge)
            }, !1)
        }

        function r(e, t, i) {
            var n, o, r, c;
            n = t ? {
                key: e,
                value: t
            } : {
                key: e
            }, i ? (r = n, c = i, s(function(e) {
                e.callHandler(a, r, c)
            })) : (o = n, s(function(e) {
                e.callHandler(a, o, null)
            }))
        }

        function c(e, t) {
            s(function(i) {
                i.registerHandler(e, t)
            })
        }
        s(function(e) {
            c(l, function(e) {
                alert(e)
            }), c(u, function(e) {
                var t = e.key;
                e.value, "right" == t ? clickObj.rightButtonClick() : clickObj.leftButtonClick()
            }), e.init(function(e, t) {
                t(data)
            })
        });
        var l = "kLoginStateChangedToJS",
            u = "kEventActionToJS";
        var d = new function() {
            var e = !1,
                t = !1;
            return this.androidClient = function() {
                return t
            }, this.IOSClient = function() {
                return e
            }, this.checkHostApp = function(e) {
                if (!n.default.isH5)
                    if (t) {
                        var i = 0,
                            o = e;
                        (e = function() {
                            !window.HostApp && i++ < 15 ? setTimeout(e, 100) : o()
                        })()
                    } else e()
            }, this.httpPost = function(i, n, o) {
                if (t) this.checkHostApp(function() {
                    HostApp.httpPost(i, n, o)
                });
                else if (e) {
                    var a = {
                        url: n
                    };
                    null != i && (a.param = i), r("sendHttpRequest:completion:", a, o)
                }
            }, this.openPage = function(i, n, o, a, s) {
                if (n || (n = {}), s || (s = !1), t) HostApp.openPage(i, n, o, a, s);
                else if (e) {
                    var c = {
                        pagePath: i,
                        title: o,
                        isInter: a,
                        isEncrpty: s
                    };
                    n && (c.param = n), r("openPage:", c)
                }
            }, this.openNewPage = function(i, n, o, a, s) {
                n || (n = {}), s || (s = !1), t ? HostApp.openNewPage(i, n, o, a, s) : e && this.openPage(i, n, o, a, s)
            }, this.getParamValue = function(e) {
                this.getUrlParam(e, function(t) {
                    if (null != t && "" != t) return t;
                    this.getParam(e, function(e) {
                        return e
                    })
                })
            }, this.getUrlParam = function(i, n) {
                t ? HostApp.getUrlParam(i, n) : e && r("getUrlParam:", i, n)
            }, this.getParam = function(i, n) {
                t ? HostApp.getParam(i, n) : e && r("getParam:", i, n)
            }, this.back = function(i) {
                if (-1 != i && (i = 0), t) HostApp.goBack(i);
                else if (e) {
                    var n = !1;
                    null == i && (i = 0), null == n && (n = !1), r("popByCount:", {
                        count: i,
                        needReload: n
                    })
                }
            }, this.backView = function(i) {
                if (t) HostApp.back(i);
                else if (e) {
                    var n = !1;
                    null == i && (i = 0), null == n && (n = !1), r("popByCount:", {
                        count: i,
                        needReload: n
                    })
                }
            }, this.saveWebViewData = function(e, i) {
                t && HostApp.saveWebViewData(e, i)
            }, this.getWebViewData = function(e, i) {
                t && this.checkHostApp(function() {
                    HostApp.getWebViewData(e, i)
                })
            }, this.getPhoneNumber = function(i) {
                t ? HostApp.getPhoneNumber(i) : e && r("getPhoneNumber", null, i)
            }, this.getJFMallCachePath = function(i) {
                t ? HostApp.getJFMallCachePath(i) : e && r("getJFMallCachePath", null, i)
            }, this.getToken = function(i) {
                t ? HostApp.getToken(i) : e && r("getToken", null, i)
            }, this.isLogin = function(i) {
                t ? HostApp.isLogin(i) : e && r("isLogin", null, i)
            }, this.outTime = function() {
                if (t) return HostApp.timeOut();
                e && r("outTime")
            }, this.showDialog1 = function(e) {
                t && HostApp.showDialog(e)
            }, this.showDialog2 = function(e, i, n) {
                t && HostApp.showDialog(e, i, n)
            }, this.dismissDialog = function() {
                t && HostApp.dismissDialog()
            }, this.dismissProgressDialog = function() {
                t && HostApp.dismissProgressDialog()
            }, this.showToast = function(e) {
                t && HostApp.showToast(e)
            }, this.share = function(i, n) {
                t ? HostApp.showShareMenu(i, n) : e && r("share")
            }, this.toLoginView = function() {
                t ? HostApp.showLoginWindow() : e && r("toLoginView")
            }, this.setPageTitle = function(i) {
                t ? this.checkHostApp(function() {
                    HostApp.setPageTitle(i)
                }) : e && r("setPageTitle:", i)
            }, this.setRightButtonText = function(i) {
                t ? this.checkHostApp(function() {
                    HostApp.setRightButtonText(i)
                }) : e && r("setRightBarItem:", i)
            }, this.init = new function() {
                var i = navigator.userAgent,
                    n = (navigator.appVersion, i.indexOf("Trident"), i.indexOf("Presto"), i.indexOf("AppleWebKit"), i.indexOf("Gecko") > -1 && i.indexOf("KHTML"), !!i.match(/AppleWebKit.*Mobile.*/) || i.match(/AppleWebKit/), !!i.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)),
                    o = i.indexOf("Android") > -1 || i.indexOf("Linux") > -1,
                    a = i.indexOf("iPhone") > -1 || i.indexOf("Mac") > -1,
                    s = i.indexOf("iPad") > -1;
                i.indexOf("Safari");
                n || a || s ? e = !0 : o && (t = !0)
            }, d
        };
        e.exports = d
    },
    8: function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.addEventCode = function(e, t, i, a) {
            try {
                if (1 == arguments.length) "undefined" != typeof _tag && Webtrends.multiTrack({
                    argsa: ["DCS.dcsuri", "/nopv.gif", "WT.event", e]
                });
                else if ("undefined" != typeof _tag) {
                    var s = "",
                        r = "";
                    t && "" != t ? (s = o.default.isClient ? n.default.$appCode[t][i] : n.default.$touchCode[t][i], r = o.default.isClient ? n.default.$appCode[t][a] : n.default.$touchCode[t][a]) : (s = i && "" != i ? i : "", r = a && "" != a ? a : ""), void 0 == s && (s = i && "" != i ? i : ""), "pageEvent" == e ? Webtrends.multiTrack({
                        argsa: ["DCS.dcsuri", "/nopv.gif", "WT.event", s]
                    }) : "pageFunctionData" == e ? Webtrends.multiTrack({
                        argsa: ["DCS.dcsuri", s]
                    }) : "hotSearchWords" == e ? Webtrends.multiTrack({
                        argsa: ["WT.oss", s]
                    }) : "business" == e ? Webtrends.multiTrack({
                        argsa: ["WT.si_n", s, "WT.si_x", r]
                    }) : "combineEvent" == e && Webtrends.multiTrack({
                        argsa: ["DCS.dcsuri", s, "WT.event", r]
                    })
                }
            } catch (e) {
                console.log(e)
            }
        };
        var n = a(i(11)),
            o = a(i(1));

        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        i(22)
    },
    9: function(e, t) {},
    10: function(e, t, i) {
        "use strict";
        n(i(1)), n(i(7));

        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        e.exports = {
            set: function(e, t) {
                if ("localStorage" in window && null !== window.localStorage) this.isInPrivate() || localStorage.setItem(e, t);
                else {
                    var i = new Date;
                    i.setTime(i.getTime() + 2592e6), window.document.cookie = e + "=" + t + ";path=/;expires=" + i.toGMTString()
                }
            },
            get: function(e) {
                var t;
                return "localStorage" in window && null !== window.localStorage ? (t = localStorage.getItem(e)) || null : (t = window.document.cookie.match("(^|;) ?" + e + "=([^;]*)(;|$)")) ? t[2] : null
            },
            isExist: function(e) {
                return !(!localStorage || !localStorage.getItem(e))
            },
            delete: function(e) {
                localStorage.removeItem(e)
            },
            isInPrivate: function() {
                try {
                    return localStorage.setItem("local_storage_test", "1"), localStorage.removeItem("local_storage_test"), !1
                } catch (e) {
                    return !0
                }
            }
        }
    },
    11: function(e, t) {
        "use strict";
        e.exports = {
            $payTypeConstant: {
                INTEGRAL: "01",
                INTEGRAL_CASH: "02",
                INTEGRAL_AND_CASH: "01,02",
                HP_ONLINE: "01",
                HP_OFFLINE: "02"
            },
            $deliverTypeConstant: {
                AIR_MILES_WARE: "16",
                DIM_CODE_WARE: "15",
                ELE_PASSWD_WARE: "12",
                PROV_BUSINESS_WARE: "17",
                POINT_DONATE_WARE: "18",
                PROV_BUSI_OFFICE_WARE: "02"
            },
            $channelCons: {
                CHANNEL_APP: "3",
                CHANNEL_MOBILE: "9"
            },
            $appCode: {
                eventCode: {
                    giftdetailpage_1: "APP_Giftdetailpage_1",
                    giftdetailpage_2: "APP_Giftdetailpage_2",
                    giftdetailpage_3: "APP_Giftdetailpage_3",
                    giftdetailpage_4: "APP_Giftdetailpage_4",
                    giftdetailpage_5: "APP_Giftdetailpage_5",
                    giftdetailpage_6: "APP_Giftdetailpage_6",
                    orderconfirmpage_1: "APP_Orderconfirmpage_1",
                    orderconfirmpage_2: "APP_Orderconfirmpage_2",
                    orderconfirmpage_3: "APP_Orderconfirmpage_3",
                    orderconfirmpage_4: "APP_Orderconfirmpage_4",
                    orderconfirmpage_5: "APP_Orderconfirmpage_5",
                    wndh_jfz: "APP_WNDH_jfz",
                    wndh_new: "APP_WNDH_new",
                    wndh_qh: "APP_WNDH_qh",
                    wndh_shx: "APP_WNDH_shx",
                    wndh_dhph: "APP_WNDH_dhph",
                    wndh_dhph_yhpf: "APP_WNDH_dhph_yhpf",
                    wndh_dhph_dhph: "APP_WNDH_dhph_dhph",
                    ss_jfqj_1: "APP_SS_jfqj_1",
                    ss_jfqj_2: "APP_SS_jfqj_2",
                    ss_jfqj_3: "APP_SS_jfqj_3",
                    ss_jfqj_4: "APP_SS_jfqj_4",
                    ss_jfqj_5: "APP_SS_jfqj_5",
                    ss_jfqj_6: "APP_SS_jfqj_6",
                    ss_jfqj_7: "APP_SS_jfqj_7",
                    dhb_month: "APP_DHB_month",
                    dhb_year: "APP_DHB_year",
                    dhb_histor: "APP_DHB_histor",
                    dhb_new: "APP_DHB_new",
                    ptlpxqy_title: "APP_PTLPXQY_title",
                    ptlpxqy_sc: "APP_PTLPXQY_sc",
                    ptlpxqy_tzjf: "APP_PTLPXQY_tzjf",
                    ptlpxqy_shdztz: "APP_PTLPXQY_shdztz",
                    ptlpxqy_flbl: "APP_PTLPXQY_flbl",
                    ptlpxqy_ssldjz: "APP_PTLPXQY_ssldjz",
                    ptlpxqy_ckgwc: "APP_PTLPXQY_ckgwc",
                    ptlpxqy_ljdh: "APP_PTLPXQY_ljdh",
                    ptlpxqy_fhsy: "APP_PTLPXQY_fhsy",
                    ptlpxqy_zz: "APP_PTLPXQY_zz",
                    ptlpxqy_zz_qr: "APP_PTLPXQY_zz_qr",
                    fzlpxqy_title: "APP_FZLPXQY_title",
                    fzlpxqy_sc: "APP_FZLPXQY_sc",
                    fzlpxqy_tzjf: "APP_FZLPXQY_tzjf",
                    fzlpxqy_ssldjz: "APP_FZLPXQY_ssldjz",
                    fzlpxqy_shdztz: "APP_FZLPXQY_shdztz",
                    fzlpxqy_ggsx: "APP_FZLPXQY_ggsx",
                    fzlpxqy_flbl: "APP_FZLPXQY_flbl",
                    fzlpxqy_fhsy: "APP_FZLPXQY_fhsy",
                    fzlpxqy_ckgwc: "APP_FZLPXQY_ckgwc",
                    fzlpxqy_jrgwc: "APP_FZLPXQY_jrgwc",
                    fzlpxqy_ljdh: "APP_FZLPXQY_ljdh",
                    my_dfk: "APP_MY_dfk",
                    my_dsh: "APP_MY_dsh",
                    my_ywc: "APP_MY_ywc",
                    my_jfzz: "APP_MY_jfzz",
                    my_gwc: "APP_MY_gwc",
                    my_wdsc: "APP_MY_wdsc",
                    my_shdz: "APP_MY_shdz",
                    my_wdll: "APP_MY_wdll",
                    my_jfgz: "APP_MY_jfgz",
                    my_fhsy: "APP_MY_fhsy",
                    my_dd: "APP_MY_DD",
                    my_dd_dfk: "APP_MY_DD_dfk",
                    my_dd_wwj: "APP_MY_DD_wwj",
                    my_dd_ywj: "APP_MY_DD_ywj",
                    my_dd_yqx: "APP_MY_DD_yqx",
                    my_srr: "APP_MY_SRR",
                    my_srr_tj: "APP_MY_SRR_tj",
                    my_srr_cx: "APP_MY_SRR_cx",
                    my_srr_gz: "APP_MY_SRR_gz",
                    ddqry_hqyzm: "APP_DDQRY_hqyzm",
                    ddqry_bjshdz: "APP_DDQRY_bjshdz",
                    ddqry_bjshsj: "APP_DDQRY_bjshsj",
                    ddqry_tjdd: "APP_DDQRY_tjdd",
                    dhcgy_ckdd: "APP_DHCGY_ckdd",
                    dhcgy_fhsy: "APP_DHCGY_fhsy",
                    gwc_left_del: "APP_GWC_left_del",
                    gwc_left_col: "APP_GWC_left_col",
                    gwc_jfbg: "APP_GWC_jfbg",
                    gwc_qjs: "APP_GWC_qjs",
                    DJT_gdlink: "DJTAPP_gdlink",
                    DJT: "DJTAPP_",
                    DJT_fhsy: "DJTAPP_fhsy"
                },
                businessCode: {
                    dhlp_1: "APP_DHLP",
                    dhlp_10: "APP_DHLP",
                    dhlp_20: "APP_DHLP",
                    dhlp_99: "APP_DHLP",
                    dhlp_1_value: "1",
                    dhlp_10_value: "10",
                    dhlp_20_value: "20",
                    dhlp_99_value: "99"
                },
                specialEventCode: {
                    code: "rushbuyAPP_"
                }
            },
            $touchCode: {
                eventCode: {
                    giftdetailpage_1: "Touch_Giftdetailpage_1",
                    giftdetailpage_2: "Touch_Giftdetailpage_2",
                    giftdetailpage_3: "Touch_Giftdetailpage_3",
                    giftdetailpage_4: "Touch_Giftdetailpage_4",
                    giftdetailpage_5: "Touch_Giftdetailpage_5",
                    giftdetailpage_6: "Touch_Giftdetailpage_6",
                    orderconfirmpage_1: "Touch_Orderconfirmpage_1",
                    orderconfirmpage_2: "Touch_Orderconfirmpage_2",
                    orderconfirmpage_3: "Touch_Orderconfirmpage_3",
                    orderconfirmpage_4: "Touch_Orderconfirmpage_4",
                    orderconfirmpage_5: "Touch_Orderconfirmpage_5",
                    wndh_jfz: "Touch_WNDH_jfz",
                    wndh_new: "Touch_WNDH_new",
                    wndh_qh: "Touch_WNDH_qh",
                    wndh_shx: "Touch_WNDH_shx",
                    wndh_dhph: "Touch_WNDH_dhph",
                    wndh_dhph_yhpf: "Touch_WNDH_dhph_yhpf",
                    wndh_dhph_dhph: "Touch_WNDH_dhph_dhph",
                    ss_jfqj_1: "Touch_SS_jfqj_1",
                    ss_jfqj_2: "Touch_SS_jfqj_2",
                    ss_jfqj_3: "Touch_SS_jfqj_3",
                    ss_jfqj_4: "Touch_SS_jfqj_4",
                    ss_jfqj_5: "Touch_SS_jfqj_5",
                    ss_jfqj_6: "Touch_SS_jfqj_6",
                    ss_jfqj_7: "Touch_SS_jfqj_7",
                    dhb_month: "Touch_DHB_month",
                    dhb_year: "Touch_DHB_year",
                    dhb_histor: "Touch_DHB_histor",
                    dhb_new: "Touch_DHB_new",
                    ptlpxqy_title: "Touch_PTLPXQY_title",
                    ptlpxqy_sc: "Touch_PTLPXQY_sc",
                    ptlpxqy_tzjf: "Touch_PTLPXQY_tzjf",
                    ptlpxqy_shdztz: "Touch_PTLPXQY_shdztz",
                    ptlpxqy_flbl: "Touch_PTLPXQY_flbl",
                    ptlpxqy_ssldjz: "Touch_PTLPXQY_ssldjz",
                    ptlpxqy_ckgwc: "Touch_PTLPXQY_ckgwc",
                    ptlpxqy_ljdh: "Touch_PTLPXQY_ljdh",
                    ptlpxqy_fhsy: "Touch_PTLPXQY_fhsy",
                    ptlpxqy_zz: "Touch_PTLPXQY_zz",
                    ptlpxqy_zz_qr: "Touch_PTLPXQY_zz_qr",
                    fzlpxqy_title: "Touch_FZLPXQY_title",
                    fzlpxqy_sc: "Touch_FZLPXQY_sc",
                    fzlpxqy_tzjf: "Touch_FZLPXQY_tzjf",
                    fzlpxqy_ssldjz: "Touch_FZLPXQY_ssldjz",
                    fzlpxqy_shdztz: "Touch_FZLPXQY_shdztz",
                    fzlpxqy_ggsx: "Touch_FZLPXQY_ggsx",
                    fzlpxqy_flbl: "Touch_FZLPXQY_flbl",
                    fzlpxqy_fhsy: "Touch_FZLPXQY_fhsy",
                    fzlpxqy_ckgwc: "Touch_FZLPXQY_ckgwc",
                    fzlpxqy_jrgwc: "Touch_FZLPXQY_jrgwc",
                    fzlpxqy_ljdh: "Touch_FZLPXQY_ljdh",
                    my_dfk: "Touch_MY_dfk",
                    my_dsh: "Touch_MY_dsh",
                    my_ywc: "Touch_MY_ywc",
                    my_jfzz: "Touch_MY_jfzz",
                    my_gwc: "Touch_MY_gwc",
                    my_wdsc: "Touch_MY_wdsc",
                    my_shdz: "Touch_MY_shdz",
                    my_wdll: "Touch_MY_wdll",
                    my_jfgz: "Touch_MY_jfgz",
                    my_fhsy: "Touch_MY_fhsy",
                    my_dd: "Touch_MY_DD",
                    my_dd_dfk: "Touch_MY_DD_dfk",
                    my_dd_wwj: "Touch_MY_DD_wwj",
                    my_dd_ywj: "Touch_MY_DD_ywj",
                    my_dd_yqx: "Touch_MY_DD_yqx",
                    my_srr: "Touch_MY_SRR",
                    my_srr_tj: "Touch_MY_SRR_tj",
                    my_srr_cx: "Touch_MY_SRR_cx",
                    my_srr_gz: "Touch_MY_SRR_gz",
                    ddqry_hqyzm: "Touch_DDQRY_hqyzm",
                    ddqry_bjshdz: "Touch_DDQRY_bjshdz",
                    ddqry_bjshsj: "Touch_DDQRY_bjshsj",
                    ddqry_tjdd: "Touch_DDQRY_tjdd",
                    dhcgy_ckdd: "Touch_DHCGY_ckdd",
                    dhcgy_fhsy: "Touch_DHCGY_fhsy",
                    gwc_left_del: "Touch_GWC_left_del",
                    gwc_left_col: "Touch_GWC_left_col",
                    gwc_jfbg: "Touch_GWC_jfbg",
                    gwc_qjs: "Touch_GWC_qjs",
                    DJT_gdlink: "DJTTouch_gdlink",
                    DJT: "DJTTouch_",
                    DJT_fhsy: "DJTTouch_fhsy",
                    more_sy: "Touch_more_sy",
                    more_ss: "Touch_more_ss",
                    more_gwc: "Touch_more_gwc",
                    more_wdaj: "Touch_more_wdaj"
                },
                businessCode: {
                    dhlp_1: "Touch_DHLP",
                    dhlp_10: "Touch_DHLP",
                    dhlp_20: "Touch_DHLP",
                    dhlp_99: "Touch_DHLP",
                    dhlp_1_value: "1",
                    dhlp_10_value: "10",
                    dhlp_20_value: "20",
                    dhlp_99_value: "99"
                },
                specialEventCode: {
                    code: "rushbuytouch_"
                }
            }
        }
    },
    13: function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.handleParam = b;
        var n = s(i(1)),
            o = s(i(3)),
            a = s(i(4));

        function s(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var r = "/analyzeVesopera.gif",
            c = "/banalyzeVesopera.gif",
            l = 1,
            u = "",
            d = "",
            f = "",
            h = "";

        function p(e, t, i) {
            var n = new Date;
            n.setTime(n.getTime() + 3600 * i * 1e3), document.cookie = e + "=" + escape(t) + "; path=/" + (null == i ? "" : "; expires=" + n.toGMTString())
        }

        function g(e) {
            if (document.cookie.length > 0) {
                var t = document.cookie.indexOf(e + "=");
                if (-1 != t) {
                    t += e.length + 1;
                    var i = document.cookie.indexOf(";", t);
                    return -1 == i && (i = document.cookie.length), unescape(document.cookie.substring(t, i))
                }
                return null
            }
            return null
        }
        n.default.isClient && o.default.post("/user/UserLoginAction/getUserInfoCache", {
            channel: 3
        }).then(function(e) {
            var t = a.default.getData(e);
            if ("Y" == t.status) {
                var i = t.userInfo;
                u = i.authUserId, f = i.userCurrentIntegral, d = i.provCode, h = i.userStarLevel
            }
        });
        var m = screen.width + "x" + screen.height,
            w = "";
        w = "Netscape" != navigator.appName ? screen.colorDepth : screen.pixelDepth;
        var _ = g("AWSUSER_ID"),
            v = g("AWSSESSION_ID"),
            A = Math.floor(1e20 * Math.random());
        null != _ && "" != _ || (_ = A), null != v && "" != v || (v = A, l = 0), p("AWSUSER_ID", _, 1e4), p("AWSSESSION_ID", v, 1), _ = "", _ = g("AWSUSER_ID"), v = "", v = g("AWSSESSION_ID");
        var y = "";

        function b() {
            var e = [],
                t = arguments.length;
            if (t > 0) {
                for (var i = "", n = 0; n < t; n++) 0 == n && (i = arguments[n + 1]), e = e.concat(arguments[n] + "=" + arguments[n + 1]), n++;
                e = (e = e.concat(["uid=" + _], ["sessionId=" + v], ["channel=" + y], ["countlog=" + (new Date).getTime()])).concat("aui=" + u), 1 == i && (e = (e = (e = e.concat("star=" + h)).concat("pro=" + d)).concat("curInte=" + f));
                var o = new Image;
                o.style.width = 0, o.style.height = 0, o.style.display = "none", o.src = c + "?" + e.join("&")
            }
        }
        y = n.default.isClient ? "3" : "9", window.onload = function() {
            var e = encodeURI(document.title),
                t = window.performance.timing.domComplete - window.performance.timing.navigationStart,
                i = escape(document.title),
                n = escape(document.referrer);
            ! function() {
                var e = [],
                    t = arguments.length;
                if (t > 0)
                    for (var i = 0; i < t; i++) e = e.concat(arguments[i] + "=" + arguments[i + 1]), i++;
                var n = new Image;
                n.style.width = 0, n.style.height = 0, n.style.display = "none", n.src = r + "?" + e.join("&")
            }("screenSize", m, "screenColor", w, "pageTitle", i, "referrerPage", n, "siteType", "0", "uid", _, "sid", v, "sflag", l, "countlog", (new Date).getTime(), "onloadTotalTime", t, "channel", y), b("type", "1", "screenSize", m, "screenColor", w, "pageTitle", e, "siteType", "0", "sflag", l, "onloadTotalTime", t)
        }
    },
    15: function(e, t, i) {
        "use strict";
        n(i(1)), n(i(7));

        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        e.exports = {
            set: function(e, t, i) {
                var n = new Date;
                n.setTime(n.getTime() + i), window.document.cookie = e + "=" + t + ";path=/;expires=" + n.toGMTString()
            },
            get: function(e) {
                var t = window.document.cookie.match("(^|;) ?" + e + "=([^;]*)(;|$)");
                return t ? t[2] : null
            },
            delete: function(e) {
                this.set(e, "", -1)
            },
            deleteDomain: function(e, t) {
                var i = new Date;
                i.setTime(i.getTime() + -864e5), window.document.cookie = e + "=;path=/;expires=" + i.toGMTString() + ";domain=" + t
            }
        }
    },
    16: function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = {
            getClientHeight: function() {
                var e = 0;
                return e = document.body.clientHeight && document.documentElement.clientHeight ? document.body.clientHeight < document.documentElement.clientHeight ? document.body.clientHeight : document.documentElement.clientHeight : document.body.clientHeight > document.documentElement.clientHeight ? document.body.clientHeight : document.documentElement.clientHeight, window.innerHeight && (e = window.innerHeight > e ? window.innerHeight : e), e
            },
            getScrollTop: function() {
                var e = 0;
                return document.documentElement && document.documentElement.scrollTop ? e = document.documentElement.scrollTop : document.body && (e = document.body.scrollTop), e
            },
            getScrollHeight: function() {
                return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
            }
        }
    },
    18: function(e, t, i) {
        i(26);
        var n = i(2)(i(25), i(27), null, null);
        e.exports = n.exports
    },
    19: function(e, t, i) {
        "use strict";
        var n = s(i(17)),
            o = s(i(1)),
            a = s(i(10));

        function s(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var r = new function() {
            return this.getTokenFromLeadeon = function() {
                for (;
                    "undefined" == typeof leadeon;) setTimeout("", 500);
                return new n.default(function(e) {
                    leadeon.getUserInfo({
                        debug: !1,
                        success: function(e) {
                            e.token && "undefined" != typeof leadeon && void 0 !== leadeon.callbackSuccess_checkSessionIsvalid && leadeon.checkSessionIsvalid({
                                debug: !1,
                                success: function(e) {
                                    "1" == e.status && leadeon.checkUID({
                                        debug: !1,
                                        domain: o.default.clientUrl,
                                        chanelId: "12020",
                                        success: function(e) {
                                            a.default.set("JF_H5_ENCRYPT_UID", e.uid)
                                        },
                                        error: function(e) {}
                                    })
                                },
                                error: function(e) {
                                    e.errCode
                                }
                            }), a.default.set("JF_H5_UID", e.token)
                        },
                        error: function(e) {}
                    })
                })
            }, this.toLoginView = function() {
                for (;
                    "undefined" == typeof leadeon;) setTimeout("", 500);
                leadeon.getUserInfo({
                    debug: !1,
                    success: function(e) {
                        e.token ? (leadeon.quitLogin({
                            debug: !1,
                            success: function(e) {},
                            error: function(e) {}
                        }), leadeon.showLogin()) : leadeon.showLogin()
                    },
                    error: function(e) {
                        leadeon.showLogin()
                    }
                })
            }, this.setPageTitle = function(e) {
                for (;
                    "undefined" == typeof leadeon;) setTimeout("", 500);
                return new n.default(function(t) {
                    leadeon.setTitle({
                        debug: !1,
                        title: e,
                        success: function(e) {},
                        error: function(e) {}
                    })
                })
            }, this.openNewPage = function(e) {
                for (;
                    "undefined" == typeof leadeon;) setTimeout("", 500);
                leadeon.newWebview({
                    debug: !1,
                    url: e,
                    success: function(e) {},
                    error: function(e) {}
                })
            }, this.backView = function() {
                for (;
                    "undefined" == typeof leadeon;) setTimeout("", 500);
                leadeon.closeCurrentWebView({
                    debug: !1,
                    success: function(e) {},
                    error: function(e) {}
                })
            }, r
        };
        e.exports = r
    },
    21: function(e, t, i) {
        "use strict";
        var n, o = i(49),
            a = (n = o) && n.__esModule ? n : {
                default: n
            };
        var s = new a.default;
        s.set("/ClubMarketActiviAction/inTimeRange", "/portal/activity/web/ClubMarketActiviAction?action=inTimeRange"), s.set("/ClubMarketActiviAction/isActivityWare", "/portal/activity/web/ClubMarketActiviAction?action=isActivityWare"), s.set("/ClubMarketActiviAction/getTipInfo", "/portal/activity/web/ClubMarketActiviAction?action=&channel=mobile&isConvertOrLottery=1"), s.set("/ExamNaireAction/checkUserAvailable", "/portal/activity/web/ExamNaireAction?action=checkUserAvailable"), s.set("/ExamNaireAction/saveExamSurvey", "/portal/activity/web/ExamNaireAction?action=saveExamSurvey"), s.set("/AmassWisdomActiviAction/queryActivityWare", "/portal/wechat/web/AmassWisdomActiviAction?action=queryActivityWare");
        var r = new a.default;
        r.set("/TopicAction/getExterPartnerInfo", "/portal/topic/web/TopicAction?action=getExterPartnerInfo");
        var c = new a.default;
        c.set("/ClassifyAction/getSecdAndThridKinds", "/portal/common/web/ClassifyAction?action=getSecdAndThridKinds_"), c.set("/PageAdAction/queryMobileAdJson", window.location.protocol+"//"+window.location.host+"/api.php?action=queryMobileAdJson");
        var l = new a.default;
        l.set("/JFLegeonAction/getActParam", "/portal/jfLegeon/web/JFLegeonAction?action=getActParam"), l.set("/JFLegeonAction/getRecordsParam", "/portal/jfLegeon/web/JFLegeonAction?action=getRecordsParam");
        var u = new a.default;
        u.set("/MyJFTicketsAction/queryJfVoucherActInfo", "/portal/jfTickets/web/MyJFTicketsAction?action=queryJfVoucherActInfo"), u.set("/JFTicketsRechargeAction/sendConfirmCode", "/portal/jfTickets/web/JFTicketsRechargeAction?action=sendConfirmCode"), u.set("/JFTicketsRechargeAction/getRechargeRecords", "/portal/jfTickets/web/JFTicketsRechargeAction?action=getRechargeRecords"), u.set("/JFTicketsRechargeAction/doRecharge", "/portal/jfTickets/web/JFTicketsRechargeAction?action=doRecharge"), u.set("/JFTicketsRechargeAction/showTicketInfo", "/portal/jfTickets/web/JFTicketsRechargeAction?action=showTicketInfo"), u.set("/JFTicketsBindAction/sendConfirmCode", "/portal/jfTickets/web/JFTicketsBindAction?action=sendConfirmCode"), u.set("/JFTicketsBindAction/userJFTicketBind", "/portal/jfTickets/web/JFTicketsBindAction?action=userJFTicketBind"), u.set("/MyJFTicketsAction/receiveJfVoucher", "/portal/jfTickets/web/MyJFTicketsAction?action=receiveJfVoucher"), u.set("/MyJFTicketsAction/queryWareJfVoucher", "/portal/jfTickets/web/MyJFTicketsAction?action=queryWareJfVoucher"), u.set("/MyJFTicketsAction/getJFTicketForConfirmPage", "/portal/jfTickets/web/MyJFTicketsAction?action=getJFTicketForConfirmPage"), u.set("/MyJFTicketsAction/getNoUsedJFTicket", "/portal/jfTickets/web/MyJFTicketsAction?action=getNoUsedJFTicket"), u.set("/MyJFTicketsAction/getTimeLimitTicket", "/portal/jfTickets/web/MyJFTicketsAction?action=getTimeLimitTicket"), u.set("/MyJFTicketsAction/getUsedTicket", "/portal/jfTickets/web/MyJFTicketsAction?action=getUsedTicket"), u.set("/MyJFTicketsAction/getJFVoucherActivityStatus", "/portal/jfTickets/web/MyJFTicketsAction?action=getJFVoucherActivityStatus");
        var d = new a.default;
        d.set("/LotteryDrawAction/getFreeReceiveInfo", "/portal/lottery/web/LotteryDrawAction?action=getFreeReceiveInfo"), d.set("/LotteryDrawAction/getGifts", "/portal/ngves.asiainfo.portal.lottery.web.LotteryDrawAction?action=getGifts"), d.set("/LotteryDrawAction/openGiftPacks", "/portal/ngves.asiainfo.portal.lottery.web.LotteryDrawAction?action=openGiftPacks"), d.set("/GsmActivityAction/answerAndDraw", "/portal/lottery/web/GsmActivityAction?action=answerAndDraw"), d.set("/GsmActivityAction/queryJSAPIConf", "/portal/lottery/web/GsmActivityAction?action=queryJSAPIConf"), d.set("/GsmActivityAction/getOpenIdSilent", "/portal/lottery/web/GsmActivityAction?action=getOpenIdSilent");
        var f = new a.default;
        f.set("/ShoppingCartAction/checkCurUserLogin", "/portal/order/web/ShoppingCartAction?action=checkCurUserLogin"), f.set("/ShoppingCartAction/modifyShopInfoAmount", "/portal/order/web/ShoppingCartAction?action=modifyShopInfoAmount"), f.set("/ShoppingCartAction/showUserShopInfo", "/portal/order/web/ShoppingCartAction?action=showUserShopInfo"), f.set("/ShoppingCartAction/deleteUserShopInfo", "/portal/order/web/ShoppingCartAction?action=deleteUserShopInfo"), f.set("/UserOrderAction/sendTranferConfirmCode", "/portal/order/web/UserOrderAction?action=sendTranferConfirmCode"), f.set("/ShoppingCartAction/updateDynamicPrice", "/portal/order/web/ShoppingCartAction?action=updateDynamicPrice"), f.set("/UserOrderAction/checkUserInfo", "/portal/order/web/UserOrderAction?action=checkUserInfo"), f.set("/UserOrderAction/orderDeliverInfo", "/portal/order/web/UserOrderAction?action=orderDeliverInfo"), f.set("/UserOrderAction/directExchangeWare", "/portal/order/web/UserOrderAction?action=directExchangeWare"), f.set("/UserOrderAction/orderBusinessInfo", "/portal/order/web/UserOrderAction?action=orderBusinessInfo"), f.set("/UserOrderAction/orderDirBusinessInfo", "/portal/order/web/UserOrderAction?action=orderDirBusinessInfo"), f.set("/UserOrderAction/sendConfirmCode", "/portal/order/web/UserOrderAction?action=sendConfirmCode"), f.set("/UserOrderAction/getSmsCodeByWareCode", "/portal/order/web/UserOrderAction?action=getSmsCodeByWareCode"), f.set("/ShoppingCartAction/checkPayMode", "/portal/order/web/ShoppingCartAction?action=checkPayMode"), f.set("/UserOrderAction/checkPayType", "/portal/order/web/UserOrderAction?action=checkPayType"), f.set("/UserOrderAction/getSettlementWareVoucherIntegral", "/portal/order/web/UserOrderAction?action=getSettlementWareVoucherIntegral");
        var h = new a.default;
        h.set("/PaymentAction/skipPayPlatform", "/portal/pay/web/PaymentAction?action=skipPayPlatform");
        var p = new a.default;
        p.set("/RedEnvelopeAction/queryGetReaEnveInfos", "/portal/redenve/web/RedEnvelopeAction?action=queryGetReaEnveInfos"), p.set("/RedEnvelopeAction/getGrantRedEnveInfo", "/portal/redenve/web/RedEnvelopeAction?action=getGrantRedEnveInfo"), p.set("/RedEnvelopeAction/getGrantRedEnveDetailInfo", "/portal/redenve/web/RedEnvelopeAction?action=getGrantRedEnveDetailInfo");
        var g = new a.default;
        g.set("/RushBuyAction/getActivityAllInfo", "/portal/rushbuy/web/RushBuyAction?action=getActivityAllInfo"), g.set("/RushBuyAction/getActivityWareInfoGson", "/portal/rushbuy/web/RushBuyAction?action=getActivityWareInfoGson"), g.set("/RushBuyAction/getDeliverInfo", "/portal/rushbuy/web/RushBuyAction?action=getDeliverInfo"), g.set("/RushBuyAction/rushBuyWare", "/portal/rushbuy/web/RushBuyAction?action=rushBuyWare"), g.set("/RushBuyAction/creatOrder", "/portal/rushbuy/web/RushBuyAction?action=creatOrder");
        var m = new a.default;
        m.set("/HotWordsAction/getHotWorlds", "/portal/search/web/HotWordsAction?action=getActiveHotWords");
        var w = new a.default;
        w.set("/UserAccountAction/isShowIntegralQuery", "https://m.jf.10086.cn/portal/user/web/UserAccountAction?action=isShowIntegralQuery"), w.set("/UserAccountAction/queryUserJF", "https://m.jf.10086.cn/portal/user/web/UserAccountAction?action=queryUserJF"), w.set("/UserOrderForVueQueryAction/initOrderQueryVue", "https://m.jf.10086.cn/portal/user/web/UserOrderForVueQueryAction?action=initOrderQueryVue"), w.set("/LoginUtilAction/getLogout", "https://m.jf.10086.cn/portal/user/web/LoginUtilAction?action=getLogout"), w.set("/UserLoginAction/isUserLogin", "https://m.jf.10086.cn/portal/user/web/UserLoginAction?action=isUserLogin"), w.set("/UserLoginAction/getUserInfoCache", "https://m.jf.10086.cn/portal/user/web/UserAccountAction?action=getUserInfoCache"), w.set("/UserAccountAction/checkUserInfo", "https://m.jf.10086.cn/portal/user/web/UserAccountAction?action=checkUserInfo"), w.set("/UserAccountAction/getWareInfoPortalValueByIds", "https://m.jf.10086.cn/portal/user/web/UserAccountAction?action=getWareInfoPortalValueByIds"), w.set("/UserAccountAction/getRulesFromMemcached", "https://m.jf.10086.cn/portal/user/web/UserAccountAction?action=getRulesFromMemcached"), w.set("/UserAccountAction/getCurrentIntegral", "https://m.jf.10086.cn/portal/user/web/UserAccountAction?action=getCurrentIntegral"), w.set("/UserAccountAction/transferPoints", "https://m.jf.10086.cn/portal/user/web/UserAccountAction?action=transferPoints"), w.set("/UserAccountAction/queryTransferPoints", "https://m.jf.10086.cn/portal/user/web/UserAccountAction?action=queryTransferPoints"), w.set("/UserAccountAction/queryAssigneeInfo", "https://m.jf.10086.cn/portal/user/web/UserAccountAction?action=queryAssigneeInfo"), w.set("/UserAccountAction/addFavourite", "https://m.jf.10086.cn/portal/user/web/UserAccountAction?action=addFavourite"), w.set("/UserAccountAction/showCollectMark", "https://m.jf.10086.cn/portal/user/web/UserAccountAction?action=showCollectMark"), w.set("/UserAccountAction/delUserCollectWare", "https://m.jf.10086.cn/portal/user/web/UserAccountAction?action=delUserCollectWare"), w.set("/UserAccountAction/getAddressList", "https://m.jf.10086.cn/portal/user/web/UserAccountAction?action=getAddressList"), w.set("/UserAccountAction/setMainUserAddr", "https://m.jf.10086.cn/portal/user/web/UserAccountAction?action=setMainUserAddr"), w.set("/UserAccountAction/deteleAddress", "https://m.jf.10086.cn/portal/user/web/UserAccountAction?action=deteleAddress"), w.set("/UserAccountAction/getProvince", "https://m.jf.10086.cn/portal/user/web/UserAccountAction?action=getProvince"), w.set("/UserAccountAction/saveAddress", "https://m.jf.10086.cn/portal/user/web/UserAccountAction?action=saveAddress"), w.set("/UserAccountAction/updateAddress", "https://m.jf.10086.cn/portal/user/web/UserAccountAction?action=updateAddress"), w.set("/UserLoginAction/goAuthLoginPage", "https://m.jf.10086.cn/portal/user/web/UserLoginAction?action=goAuthLoginPage"), w.set("/UserLoginAction/goAuthLoginPageVue", "https://m.jf.10086.cn/portal/user/web/UserLoginAction?action=goAuthLoginPageVue"), w.set("/UserAccountAction/getAddrInfoById", "https://m.jf.10086.cn/portal/user/web/UserAccountAction?action=getAddrInfoById"), w.set("/UserLotteryAction/getUserLotteryInfos", "https://m.jf.10086.cn/portal/user/web/UserLotteryAction?action=getUserLotteryInfos"), w.set("/UserAccountAction/reuseAssigneeInfos", "https://m.jf.10086.cn/portal/user/web/UserAccountAction?action=reuseAssigneeInfos"), w.set("/UserAccountAction/queryMaintenanceRecord", "https://m.jf.10086.cn/portal/user/web/UserAccountAction?action=queryMaintenanceRecord"), w.set("/UserAccountAction/saveAssigneeInfo", "https://m.jf.10086.cn/portal/user/web/UserAccountAction?action=saveAssigneeInfo"), w.set("/UserAccountAction/manageAssigneeInfo", "https://m.jf.10086.cn/portal/user/web/UserAccountAction?action=manageAssigneeInfo"), w.set("/UserAccountAction/showUserFavoriteWareByAjaxForAngularjs", "https://m.jf.10086.cn/portal/user/web/UserAccountAction?action=showUserFavoriteWareByAjaxForAngularjs"), w.set("/UserAccountAction/deleteUserFavoriteWare", "https://m.jf.10086.cn/portal/user/web/UserAccountAction?action=deleteUserFavoriteWare"), w.set("/UserAccountAction/queryUserInfo", "https://m.jf.10086.cn/portal/user/web/UserAccountAction?action=queryUserInfo"), w.set("/UserAccountAction/getHelpContentByHelpCentreId", "https://m.jf.10086.cn/portal/user/web/UserAccountAction?action=getHelpContentByHelpCentreId"), w.set("/UserOrderQueryAction/unPayOrderCancel", "https://m.jf.10086.cn/portal/user/web/UserOrderQueryAction?action=unPayOrderCancel"), w.set("/UserOrderQueryAction/queryDelivStatus", "https://m.jf.10086.cn/portal/user/web/UserOrderQueryAction?action=queryDelivStatus"), w.set("/UserOrderQueryAction/orderQueryDetail", "https://m.jf.10086.cn/portal/user/web/UserOrderQueryAction?action=orderQueryDetail"), w.set("/UserOrderQueryAction/reSendSms", "https://m.jf.10086.cn/portal/user/web/UserOrderQueryAction?action=reSendSms"), w.set("/UserAccountAction/userFavouriteWare", "https://m.jf.10086.cn/portal/user/web/UserAccountAction?action=userFavouriteWare"), w.set("/FlexibleBusiAction/busiOrderInitInfo", "/portal/flexibleBusi/FlexibleBusiAction?action=busiOrderInitInfo"), w.set("/FlexibleBusiAction/busiOrderSubmit", "/portal/flexibleBusi/web/FlexibleBusiAction?action=busiOrderSubmit"), w.set("/FlexibleBusiAction/busiOrderQuery", "/portal/flexibleBusi/FlexibleBusiAction?action=busiOrderQuery");
        var _ = new a.default;
        _.set("/InvoiceDetailsAction/queryInvoiceDetails", "/portal/invoice/web/InvoiceDetailsAction?action=queryInvoiceDetails");
        var v = new a.default;
        v.set("/ExchangeIntegralAction/getExchangeWares", "https://m.jf.10086.cn/portal/ware/web/ExchangeIntegralAction?action=getExchangeWares"), v.set("/BroByScoreAction/getScoreList", "https://m.jf.10086.cn/portal/ware/web/BroByScoreAction?action=getScore"), v.set("/SearchWareAction/searchWareInfoByCode", "https://m.jf.10086.cn/portal/ware/web/SearchWareAction?action=searchWareInfoByCode"), v.set("/SearchWareAction/incrHotWordsHitCount", "https://m.jf.10086.cn/portal/ware/web/SearchWareAction?action=incrHotWordsHitCount"), v.set("/SearchWareAction/getSuggest", "https://m.jf.10086.cn/portal/ware/web/SearchWareAction?action=getSuggest"), v.set("/SearchWareAction/searchWareInfo", "https://m.jf.10086.cn/portal/ware/web/SearchWareAction?action=searchWareInfo"), v.set("/SearchWareAction/searchWareInfoBySkind", "https://m.jf.10086.cn/portal/ware/web/SearchWareAction?action=searchWareInfoBySkind"), v.set("/SearchWareAction/searchMyExchangeWareInfo", "https://m.jf.10086.cn/portal/ware/web/SearchWareAction?action=searchMyExchangeWareInfo"), v.set("/SearchWareAction/searchWareInfoByBrand", "https://m.jf.10086.cn/portal/ware/web/SearchWareAction?action=searchWareInfoByBrand"), v.set("/SearchWareAction/searchWareInfoByMkind", "https://m.jf.10086.cn/portal/ware/web/SearchWareAction?action=searchWareInfoByMkind"), v.set("/SearchWareAction/searchLocalWareInfo", "https://m.jf.10086.cn/portal/ware/web/SearchWareAction?action=searchLocalWareInfo"), v.set("/SearchWareAction/searchWareySkindForSubject", "https://m.jf.10086.cn/portal/ware/web/SearchWareAction?action=searchWareySkindForSubject"), v.set("/SubjectAction/getKindInfo", "https://m.jf.10086.cn/portal/ware/web/SubjectAction?action=getKindInfo"), v.set("/WareRankAction/wareRankDispatch", "https://m.jf.10086.cn/portal/ware/web/WareRankAction?action=wareRankDispatch"), v.set("/DataUtilAction/getCommonParaUtilData", "https://m.jf.10086.cn/portal/ware/web/DataUtilAction?action=getCommonParaUtilData"), v.set("/WareDetailAction/getWareAllElement", "https://m.jf.10086.cn/portal/ware/web/WareDetailAction?action=getWareAllElement"), v.set("/WareDetailAction/getLessStorage", "https://m.jf.10086.cn/portal/ware/web/WareDetailAction?action=getLessStorage"), v.set("/WareDetailAction/getUserStartIntegral", "https://m.jf.10086.cn/portal/ware/web/WareDetailAction?action=getUserStartIntegral"), v.set("/WareDetailAction/getWareDescValue", "https://m.jf.10086.cn/portal/ware/web/WareDetailAction?action=getWareDescValue"), v.set("/WareDetailAction/showUserShopNum", "https://m.jf.10086.cn/portal/ware/web/WareDetailAction?action=showUserShopNum"), v.set("/WareDetailAction/addShoppingCart", "/portal/ngves.asiainfo.portal.ware.web.WareDetailAction?action=addShoppingCart"), v.set("/DataUtilAction/getUserCollectAndCartNum", "https://m.jf.10086.cn/portal/ware/web/DataUtilAction?action=getUserCollectAndCartNum"), v.set("/ExchangeIntegralAction/getAccountRule", "https://m.jf.10086.cn/portal/ware/web/ExchangeIntegralAction?action=getAccountRule"), v.set("/ClassifyAction/getClassifyNavigation", "https://m.jf.10086.cn/portal/ware/web/ClassifyAction?action=getClassifyNavigation"), v.set("/WareRankAction/qryAllIndexContent", window.location.protocol+"//"+window.location.host+"/api.php?action=qryAllIndexContent"), v.set("/DataUtilAction/getSubKindTopInfo", "https://m.jf.10086.cn/portal/ware/web/DataUtilAction?action=getSubKindTopInfo"), v.set("/WareDetailAction/getWareChangeInfo", "https://m.jf.10086.cn/portal/ware/web/WareDetailAction?action=getWareChangeInfo"), v.set("/WareShowFunc/getALLBulletinListMap", "https://m.jf.10086.cn/portal/ware/web/WareShowFunc?action=getALLBulletinListMap"), v.set("/WareShowFunc/getBulletinListRevision", "https://m.jf.10086.cn/portal/ware/web/WareShowFunc?action=getBulletinListRevision"), v.set("/WareShowFunc/getALLBulletinList", "https://m.jf.10086.cn/portal/ware/web/WareShowFunc?action=getALLBulletinList"), v.set("/BroByScoreAction/getScore", "https://m.jf.10086.cn/portal/ware/web/BroByScoreAction?action=getScore"), v.set("/SearchWareAction/getWareInfosByWareIds", "https://m.jf.10086.cn/portal/ware/web/SearchWareAction?action=getWareInfosByWareIds"), v.set("/WareDetailAction/isDynamicPriceOK", "https://m.jf.10086.cn/portal/ware/web/WareDetailAction?action=isDynamicPriceOK"), v.set("/WareDetailAction/getChildWareImages", "https://m.jf.10086.cn/portal/ware/web/WareDetailAction?action=getChildWareImages"), v.set("/SmsExchangeConfirmAction/getSmsExchangeConfirmInfo", "https://m.jf.10086.cn/portal/ware/web/SmsExchangeConfirmAction?action=getSmsExchangeConfirmInfo"), v.set("/SmsExchangeConfirmAction/getConfirmResult", "https://m.jf.10086.cn/portal/ware/web/SmsExchangeConfirmAction?action=getConfirmResult"), v.set("/SmsExchangeConfirmAction/sendConfirmCode", "https://m.jf.10086.cn/portal/ware/web/SmsExchangeConfirmAction?action=sendConfirmCode"), v.set("/SmsExchangeConfirmAction/submitOrderExchange", "https://m.jf.10086.cn/portal/ware/web/SmsExchangeConfirmAction?action=submitOrderExchange"), v.set("/SmsExchangeConfirmAction/getFlushTimes", "https://m.jf.10086.cn/portal/ware/web/SmsExchangeConfirmAction?action=getFlushTimes"), v.set("/SmsExchangeConfirmAction/getValidateImg", "https://m.jf.10086.cn/portal/ware/web/SmsExchangeConfirmAction?action=getValidateImg"), v.set("/SearchWareAction/quanyiActivityWareList", "https://m.jf.10086.cn/portal/ware/web/SearchWareAction?action=quanyiActivityWareList");
        var A = new a.default;
        A.set("/b2cInter", "/b2cInter");
        var y = new a.default;
        y.set("/InitAction/isWechatBind", "/portal/wechat/web/InitAction?action=isWechatBind"), y.set("/HelpCenterAction/queryFatherProblemList", "/portal/wechat/web/HelpCenterAction?action=queryFatherProblemList"), y.set("/HelpCenterAction/querySonProblemList", "/portal/wechat/web/HelpCenterAction?action=querySonProblemList"), y.set("/HelpCenterAction/queryProblemDetail", "/portal/wechat/web/HelpCenterAction?action=queryProblemDetail"), y.set("/HotRecommendAction/getHotRecommends", "/portal/wechat/web/HotRecommendAction?action=getHotRecommends"), y.set("/WechatUserInfoAction/getAuthenticationMethod", "/portal/wechat/web/WechatUserInfoAction?action=getAuthenticationMethod"), y.set("/WechatUserInfoAction/sendSmsConfirmCode", "/portal/wechat/web/WechatUserInfoAction?action=sendSmsConfirmCode"), y.set("/WechatUserInfoAction/wechatAuthentication", "/portal/wechat/web/WechatUserInfoAction?action=wechatAuthentication"), y.set("/WechatUserInfoAction/correlationRemoval", "/portal/wechat/web/WechatUserInfoAction?action=correlationRemoval"), y.set("/ReceivingAction/activityInfo", "/portal/wechat/web/ReceivingAction?action=activityInfo"), y.set("/ReceivingAction/receivedRollList", "/portal/wechat/web/ReceivingAction?action=receivedRollList"), y.set("/ReceivingAction/receiveGift", "/portal/wechat/web/ReceivingAction?action=receiveGift"), y.set("/ReceivingAction/queryJSAPIConf", "/portal/wechat/web/ReceivingAction?action=queryJSAPIConf"), y.set("/ReceivingAction/getOpenIdSilent", "/portal/wechat/web/ReceivingAction?action=getOpenIdSilent"), y.set("/AmassWisdomActiviAction/generateAnswerInfo", "/portal/wechat/web/AmassWisdomActiviAction?action=generateAnswerInfo"), y.set("/AmassWisdomActiviAction/saveAnswerData", "/portal/wechat/web/AmassWisdomActiviAction?action=saveAnswerData"), y.set("/AmassWisdomActiviAction/queryJSAPIConf", "/portal/wechat/web/AmassWisdomActiviAction?action=queryJSAPIConf"), y.set("/AmassWisdomActiviAction/getOpenIdSilent", "/portal/wechat/web/AmassWisdomActiviAction?action=getOpenIdSilent"), y.set("/WechatUserInfoAction/activateBindCard", "/portal/wechat/web/WechatUserInfoAction?action=activateBindCard");
        var b = new a.default;
        b.set("/MyRightsAction/getJFTicketList", "/portal/jfTickets/web/MyRightsAction?action=getJFTicketList"), b.set("/MyRightsAction/getJFTicketDetail", "/portal/jfTickets/web/MyRightsAction?action=getJFTicketDetail");
        var C = new a.default;
        C.set("/CommentAction/getEvaluateData", "/portal/comment/web/CommentAction?action=getEvaluateData"), C.set("/CommentAction/getReviewEvaluateData", "/portal/comment/web/CommentAction?action=getReviewEvaluateData"), C.set("/CommentAction/getCommentWare", "/portal/comment/web/CommentAction?action=getCommentWare"), C.set("/CommentAction/saveComment", "/portal/comment/web/CommentAction?action=saveComment"), C.set("/CommentAction/appendComment", "/portal/comment/web/CommentAction?action=appendComment");
        var x = new a.default;
        x.set("jfTickets", u), x.set("order", f), x.set("pay", h), x.set("user", w), x.set("ware", v), x.set("redenve", p), x.set("search", m), x.set("lottery", d), x.set("common", c), x.set("activity", s), x.set("jfLegeon", l), x.set("rushbuy", g), x.set("integralAlliance", A), x.set("weChat", y), x.set("comment", C), x.set("myRight", b), x.set("invoice", _), x.set("topic", r), e.exports = x
    },
    22: function(e, t, i) {
        "use strict";
        if (window.jfWebtrends ? window.jfWebtrends.isDelay = !0 : window.jfWebtrends = {
            isDelay: !0
        }, window.webtrendsAsyncInit = function() {
            var e = (new Webtrends.dcs).init({
                domain: "sdc2.10086.cn",
                dcsid: "dcsc5w2rs1wpwoa2xtqwotuaa_4o2x",
                fpcdom: ".10086.cn",
                timezone: 8,
                i18n: !0,
                dcsdelay: 500,
                plugins: {}
            });
            e.WT.branch = "jf", e.track(), e.addSelector("input,a", {
                transform: function(e, t) {
                    var i, n, o = t.element || {},
                        a = t.event || {};
                    o.type ? (i = o.id || o.name || "Unknown", n = o.type) : (i = o.id || (o.pathname ? 0 != o.pathname.indexOf("/") ? "/" + o.pathname : o.pathname : "/"), n = "Link"), t.argsa.push("DCS.dcsuri", "/event.gif", "WT.event", i, "WT.obj", n, "WT.nv", _tag.N(a), "WT.pos", _tag.P(a))
                },
                delayTime: 100
            }), window.jfWebtrends && window.jfWebtrends.isReset && (window.jfWebtrends.dcs = e)
        }, window.jfWebtrends && window.jfWebtrends.isDelay && window.webtrendsAsyncInit && (window.webtrendsAsyncInit.hasRun = !0), !window._tag) {
            var n = function() {};
            n.prototype.trackEvent = function() {}, n.prototype.E = function(e, t) {
                for (var i = e.target || e.srcElement; i.tagName && i.tagName.toLowerCase() != t.toLowerCase();) i = (i = i.parentElement || i.parentNode) || {};
                return i
            }, n.prototype.P = function(e) {
                var t = e.clientX,
                    i = e.clientY,
                    n = void 0 != document.documentElement && 0 != document.documentElement.clientHeight ? document.documentElement : document.body;
                return t + (void 0 == window.pageXOffset ? n.scrollLeft : window.pageXOffset) + "x" + (i + (void 0 == window.pageYOffset ? n.scrollTop : window.pageYOffset))
            }, n.prototype.N = function(e) {
                var t, i, n, o = "",
                    a = "",
                    s = ["div", "table"],
                    r = s.length;
                for (t = 0; t < r && !((n = s[t]).length && (o = (i = this.E(e, n)).getAttribute && i.getAttribute("id") ? i.getAttribute("id") : "", a = i.className || "", o.length || a.length)); t++);
                return o.length ? o : a
            }, Function.prototype.wtbind = function(e) {
                var t = this;
                return function() {
                    return t.apply(e, arguments)
                }
            }, n.prototype.dcsMultiTrack = function() {
                Webtrends.multiTrack({
                    argsa: arguments,
                    delayTime: 100
                })
            }, window._tag = new n
        }
        i(23)
    },
    23: function(e, t, i) {
        "use strict";
        var n, o = i(12),
            a = (n = o) && n.__esModule ? n : {
                default: n
            };
        ! function(e, t, i, n) {
            function o(e) {
                return e && (e.forEach || (e.forEach = function(e, t) {
                    for (var i = t || window, n = 0, o = this.length; n < o; ++n) e.call(i, this[n], n, this)
                }), e.filter || (e.filter = function(e, t) {
                    for (var i = t || window, n = [], o = 0, a = this.length; o < a; ++o) e.call(i, this[o], o, this) && n.push(this[o]);
                    return n
                }), e.indexOf || (e.indexOf = function(e) {
                    for (var t = 0; t < this.length; ++t)
                        if (this[t] === e) return t;
                    return -1
                })), e
            }
            if (!e.Ra) {
                var r = {
                        f: {},
                        xa: 0,
                        e: {},
                        addEventListener: e.addEventListener ? function(e, t, i) {
                            e.addEventListener && e.addEventListener(t, i, !1)
                        } : function(e, t, i) {
                            e.attachEvent && e.attachEvent("on" + t, i, !1)
                        },
                        g: {},
                        version: "10.4.12",
                        j: {},
                        Fa: !1,
                        m: 25,
                        H: function() {
                            n.search && (r.j = r.S(n.search)), e.webtrendsAsyncInit && !e.webtrendsAsyncInit.hasRun && (e.webtrendsAsyncInit(), e.webtrendsAsyncInit.hasRun = !0), r.addEventListener(e, "load", function() {
                                r.Fa = !0
                            })
                        },
                        o: function(e) {
                            return "[object Function]" === Object.prototype.toString.call(e)
                        },
                        Ia: function(e) {
                            var t = [];
                            for (var i in e) e.hasOwnProperty(i) && "" != e[i] && void 0 != e[i] && "function" != typeof e[i] && t.push({
                                k: i,
                                v: e[i]
                            });
                            return t
                        },
                        extend: function(e, t, i) {
                            for (var n in t)(i || void 0 === e[n]) && (e[n] = t[n]);
                            return e
                        },
                        find: function(e) {
                            return r.Y || (r.Y = r.Da()), r.Y(e)
                        },
                        Da: function() {
                            var n = (n = /MSIE (\d+)/.exec(i.userAgent)) ? n[1] : 99;
                            if (t.querySelectorAll && t.body && n > 8) {
                                var o = t.body;
                                return function(e) {
                                    return o.querySelectorAll(e)
                                }
                            }
                            return e.jQuery ? e.jQuery.find : e.Sizzle ? e.Sizzle : e.YAHOO && YAHOO.aa && YAHOO.aa.ba ? YAHOO.aa.ba.bb : "qwery" in e ? qwery : (e.YUI && YUI().eb("node", function(e) {
                                return e.all
                            }), t.querySelectorAll && (o = t.body) ? function(e) {
                                return o.querySelectorAll(e)
                            } : function() {
                                return []
                            })
                        },
                        S: function(e) {
                            e = e.split(/[&?]/g);
                            var t = {};
                            try {
                                for (var i = 0, n = e.length; i < n; ++i) {
                                    var o = e[i].match(/^([^=]+)(?:=([\s\S]*))?/);
                                    if (o && o[1]) {
                                        var a = decodeURIComponent(o[1]);
                                        t[a] ? (t[a] = [t[a]], t[a].push(decodeURIComponent(o[2]))) : t[a] = decodeURIComponent(o[2])
                                    }
                                }
                            } catch (e) {
                                this.D.push(e), this.B(e)
                            }
                            return t
                        },
                        Ga: function(e, i, n) {
                            arguments.length < 2 && (i = !0), s = t.createElement("script"), s.type = "text/javascript", s.async = i, s.src = e, s2 = t.getElementsByTagName("script")[0], s2.parentNode.insertBefore(s, s2)
                        },
                        O: function(e, t) {
                            var i = e.target || e.srcElement;
                            for ("string" == typeof t && (t[t] = 1); i && i.tagName && !t[i.tagName.toUpperCase()];) i = i.parentElement || i.parentNode;
                            return i
                        },
                        K: function(e) {
                            return "function" == typeof encodeURIComponent ? encodeURIComponent(e) : escape(e)
                        },
                        Ha: function(e) {
                            for (var t in r.f) r.f[t].L(e);
                            return !1
                        },
                        s: function(e, t, i) {
                            return t || (t = "collect"), i ? r.t("transform." + t, e, i) : r.t("transform." + t, e), this
                        },
                        t: function(e, n, a) {
                            function s(t, i) {
                                r.g[e][t.i] || (r.g[e][t.i] = o([])), r.g[e][t.i].push(i)
                            }
                            if (e && n && "" != e && r.o(n)) {
                                if ("wtmouseup" === e && (e = "wtmouse"), "wtmouse" === e && !r.U) {
                                    var c = /MSIE (\d+)/.exec(i.userAgent);
                                    r.addEventListener(t, (c ? c[1] : 99) >= 8 ? "mousedown" : "mouseup", function(t) {
                                        t || (t = window.event), r.ia(e, {
                                            event: t
                                        })
                                    }), r.U = !0
                                }
                                if (r.g[e] || (r.g[e] = {}), a) s(a, n);
                                else
                                    for (var l in r.f) s(r.f[l], n)
                            }
                        },
                        ia: function(e, t) {
                            for (var i in r.f) r.fireEvent(e, r.f[i], t)
                        },
                        ca: function(e, t, i, n) {
                            if ("function" == typeof t) return t.onetime ? (i.push(t), !0) : (t(e, n), !1)
                        },
                        fireEvent: function(e, t, i) {
                            var n = o([]);
                            if (r.g[e] && r.g[e][t.i]) {
                                if (!(e = r.g[e][t.i]).length) return;
                                for (var a = e.length - 1; a >= 0; a--) r.ca(t, e[a], n, i) && e.pop()
                            }
                            n.forEach(function(e) {
                                e(t, i)
                            })
                        }
                    },
                    c = r.fireEvent,
                    l = r.t;
                r.b = function() {
                    return this.Q = e.RegExp ? /dcs(uri)|(ref)|(aut)|(met)|(sta)|(sip)|(pro)|(byt)|(dat)|(p3p)|(cfg)|(redirect)|(cip)/i : "", this.X = {}, this.d = this.WT = {}, this.h = this.DCS = {}, this.l = this.DCSext = {}, this.i = this.dcssID = "dcsobj_" + r.xa++, this.images = this.images = [], this.D = this.errors = [], this.a = this.FPCConfig = {}, this.c = this.TPCConfig = {}, this.Xa = {}, this.images = [], this.ab = [], this.Sa = [], this.Qa = !1, this.F = this.R = "", this.U = !1, this
                }, r.b.prototype = {
                    H: function(t) {
                        function i(e, i) {
                            return t.hasOwnProperty(e) ? t[e] : i
                        }

                        function n(e, t, i) {
                            return e && e.hasOwnProperty(t) ? e[t] : i
                        }
                        return this.Ua = t, this.B = i("errorlogger", function() {}), this.wa = this.dcsid = t.dcsid, this.q = this.queue = i("queue", []), this.domain = this.domain = i("domain", ".mysite.cn"), this.Oa = this.timezone = i("timezone", -8), this.enabled = this.enabled = i("enabled", !0), this.G = this.i18n = i("i18n", !0), this.X = e.RegExp ? this.G ? {
                            "%25": /\%/g,
                            "%26": /\&/g,
                            "%23": /\#/g
                        } : {
                            "%09": /\t/g,
                            "%20": / /g,
                            "%23": /\#/g,
                            "%26": /\&/g,
                            "%2B": /\+/g,
                            "%3F": /\?/g,
                            "%5C": /\\/g,
                            "%22": /\"/g,
                            "%7F": /\x7F/g,
                            "%A0": /\xA0/g
                        } : "", t.metanames && (this.T = o(t.metanames.toLowerCase().split(","))), this.r = this.vtid = i("vtid", void 0), this.V = i("paidsearchparams", "gclid"), this.Na = this.splitvalue = i("splitvalue", ""), r.m = t.dcsdelay || r.m, this.ya = this.delayAll = i("delayAll", !1), this.W = this.preserve = i("preserve", !0), this.a.enabled = this.FPCConfig.enabled = n(t.FPCConfig, "enabled", !0), this.a.domain = this.FPCConfig.domain = n(t.FPCConfig, "domain", i("fpcdom", "")), this.a.name = this.FPCConfig.name = n(t.FPCConfig, "name", i("fpc", "WT_FPC")), this.a.n = this.FPCConfig.expiry = n(t.FPCConfig, "expires", i("cookieexpires", 63113851500)), this.a.n = this.a.n < 63113851500 ? this.a.n : 63113851500, this.a.Aa = new Date(this.getTime() + this.a.n), this.a.Ma = 0 === this.a.n, this.c.enabled = this.TPCConfig.enabled = n(t.TPCConfig, "enabled", !i("disablecookie", !0)), this.c.u = this.TPCConfig.cfgType = n(t.TPCConfig, "cfgType", this.c.enabled ? "" : "1"), t.cookieTypes && ("none" === t.cookieTypes.toLowerCase() ? (this.a.enabled = !1, this.c.enabled = !1, this.c.u = "1") : "firstpartyonly" === t.cookieTypes.toLowerCase() ? (this.a.enabled = !0, this.c.enabled = !1, this.c.u = "1") : "all" === t.cookieTypes.toLowerCase() && (this.a.enabled = !0, this.c.enabled = !0, this.c.u = n(t.TPCConfig, "cfgType", ""))), this.Ya = this.fpc = this.a.name, this.Za = this.fpcdom = this.a.domain, this.Wa = this.cookieExp = this.a.n, i("privateFlag", !1) || (r.f[this.i] = this), r.e[this.domain] || (r.e[this.domain] = ""), !i("privateFlag", !1) && this.a.enabled ? this.oa(this.i) : this.I(), this
                    },
                    pa: function(e) {
                        void 0 !== e && (!r.e[this.domain] && e.gTempWtId && (r.e[this.domain] = e.gTempWtId), this.F = e.gTempWtId, !r.e[this.domain] && e.gWtId && (r.e[this.domain] = e.gWtId), this.R = e.gWtAccountRollup), this.I()
                    },
                    oa: function(e) {
                        return -1 == t.cookie.indexOf(this.a.name + "=") && -1 == t.cookie.indexOf("WTLOPTOUT=") && this.c.enabled ? (this.enabled && r.Ga("//" + this.domain + "/" + this.wa + "/wtid.js?callback=Webtrends.dcss." + e + ".dcsGetIdCallback", !0), !1) : (this.I(), !0)
                    },
                    I: function() {
                        this.da || (c("onready", this), this.Ea(), this.La(), this.da = !0)
                    },
                    Ea: function() {
                        for (var e = 0; e < this.q.length; e++) this.N(this.q[e]);
                        this.q = []
                    },
                    La: function() {
                        var e = this;
                        this.q.push = function(t) {
                            e.N(t)
                        }
                    },
                    s: function(e, t) {
                        r.s(e, t, this)
                    },
                    ga: function(e, t) {
                        var i = this,
                            n = r.extend({
                                domEvent: "click",
                                callback: void 0,
                                argsa: [],
                                args: {},
                                delayTime: void 0,
                                transform: void 0,
                                filter: void 0,
                                actionElems: {
                                    A: 1,
                                    INPUT: 1
                                },
                                finish: void 0
                            }, t, !0);
                        return l("wtmouse", function(t, o) {
                            i.ha(i, e, r.extend(o, n, !0))
                        }, i), this
                    },
                    Z: function(e, t, i, n) {
                        t.element = i, "form" !== n && "input" !== n && "button" !== n || (t.domEvent = "submit"), e.J(t)
                    },
                    ha: function(e, t, i) {
                        if ((a = r.find) && i.event && i.actionElems) {
                            var n = r.O(i.event, i.actionElems),
                                o = n.tagName ? n.tagName.toLowerCase() : "";
                            if (t.toUpperCase() in i.actionElems && i.actionElems[o.toUpperCase()]) return this.Z(e, i, n, o);
                            if ((t = a(t)) && n && t && t.length)
                                for (var a = 0; a < t.length; a++)
                                    if (t[a] === n) {
                                        this.Z(e, i, n, o);
                                        break
                                    }
                        }
                    },
                    C: function(e, i) {
                        var n = o(t.cookie.split("; ")).filter(function(t) {
                            return -1 != t.indexOf(e + "=")
                        })[0];
                        return !(!n || n.length < e.length + 1) && (o(n.split(e + "=")[1].split(":")).forEach(function(e) {
                            e = e.split("="), i[e[0]] = e[1]
                        }), !0)
                    },
                    ta: function(e, i, n) {
                        var a = [];
                        o(i = r.Ia(i)).forEach(function(e) {
                            a.push(e.k + "=" + e.v)
                        }), a = a.sort().join(":"), t.cookie = e + "=" + a + n
                    },
                    qa: function(e, t, i, n) {
                        var o = {};
                        return this.C(e, o) ? t == o.id && i == o.lv && n == o.ss ? 0 : 3 : 2
                    },
                    na: function() {
                        var e = {};
                        return this.C(this.a.name, e), e
                    },
                    ma: function() {
                        if (-1 == t.cookie.indexOf("WTLOPTOUT="))
                            if (this.a.enabled) {
                                var e = this.d,
                                    i = this.a.name,
                                    n = new Date,
                                    o = 6e4 * n.getTimezoneOffset() + 36e5 * this.Oa;
                                n.setTime(n.getTime() + o);
                                var a = new Date(n.getTime());
                                e.co_f = e.vtid = e.vtvs = e.vt_f = e.vt_f_a = e.vt_f_s = e.vt_f_d = e.vt_f_tlh = e.vt_f_tlv = "";
                                var s = {};
                                if (this.C(i, s)) {
                                    var c = s.id,
                                        l = parseInt(s.lv),
                                        u = parseInt(s.ss);
                                    if (null == c || "null" == c || isNaN(l) || isNaN(u)) return;
                                    e.co_f = c, c = new Date(l), e.vt_f_tlh = Math.floor((c.getTime() - o) / 1e3), a.setTime(u), (n.getTime() > c.getTime() + 18e5 || n.getTime() > a.getTime() + 288e5) && (e.vt_f_tlv = Math.floor((a.getTime() - o) / 1e3), a.setTime(n.getTime()), e.vt_f_s = "1"), n.getDate() == c.getDate() && n.getMonth() == c.getMonth() && n.getFullYear() == c.getFullYear() || (e.vt_f_d = "1")
                                } else {
                                    if (this.F.length) e.co_f = r.e[this.domain].length ? r.e[this.domain] : this.F, e.vt_f = "1";
                                    else if (r.e[this.domain].length) e.co_f = r.e[this.domain];
                                    else {
                                        e.co_f = "2", u = n.getTime().toString();
                                        for (c = 2; c <= 32 - u.length; c++) e.co_f += Math.floor(16 * Math.random()).toString(16);
                                        e.co_f += u, e.vt_f = "1"
                                    }
                                    0 == this.R.length && (e.vt_f_a = "1"), e.vt_f_s = e.vt_f_d = "1", e.vt_f_tlh = e.vt_f_tlv = "0"
                                }
                                e.co_f = escape(e.co_f), e.vtid = void 0 === this.r ? e.co_f : this.r || "", e.vtvs = (a.getTime() - o).toString(), o = (this.a.Ma ? "" : "; expires=" + this.a.Aa.toGMTString()) + "; path=/" + ("" != this.a.domain ? "; domain=" + this.a.domain : ""), n = n.getTime().toString(), a = a.getTime().toString(), s.id = e.co_f, s.lv = n, s.ss = a, this.ta(i, s, o), 0 != (i = this.qa(i, e.co_f, n, a)) && (e.co_f = e.vtvs = e.vt_f_s = e.vt_f_d = e.vt_f_tlh = e.vt_f_tlv = "", void 0 === this.r && (e.vtid = ""), e.vt_f = e.vt_f_a = i)
                            } else this.d.vt_f = "4", this.d.vtid = this.r ? this.r : ""
                    },
                    Pa: function() {
                        try {
                            var e;
                            return arguments && arguments.length > 1 ? e = {
                                argsa: Array.prototype.slice.call(arguments)
                            } : 1 === arguments.length && (e = arguments[0]), void 0 === e && (e = {
                                element: void 0,
                                event: void 0,
                                Ta: []
                            }), void 0 === e.argsa && (e.argsa = []), this.P("collect", e), this
                        } catch (e) {
                            this.D.push(e), this.B(e)
                        }
                    },
                    L: function(e) {
                        e && e.length > 1 && (e = {
                            argsa: Array.prototype.slice.call(arguments)
                        }), this.J(e)
                    },
                    J: function(e) {
                        try {
                            return void 0 === e && (e = {}), this.P("multitrack", e), !1
                        } catch (e) {
                            this.D.push(e), this.B(e)
                        }
                    },
                    ja: function() {
                        this.h = {}, this.d = {}, this.l = {}, arguments.length % 2 == 0 && this.z(arguments)
                    },
                    z: function(e) {
                        if (e)
                            for (var t = 0, i = e.length; t < i; t += 2) 0 == e[t].indexOf("WT.") ? this.d[e[t].substring(3)] = e[t + 1] : 0 == e[t].indexOf("DCS.") ? this.h[e[t].substring(4)] = e[t + 1] : 0 == e[t].indexOf("DCSext.") && (this.l[e[t].substring(7)] = e[t + 1])
                    },
                    ua: function(e) {
                        var t, i;
                        if (this.W) {
                            this.p = [];
                            for (var n = 0, o = e.length; n < o; n += 2) 0 == (i = e[n]).indexOf("WT.") ? (t = i.substring(3), this.p.push(i, this.d[t] || "")) : 0 == i.indexOf("DCS.") ? (t = i.substring(4), this.p.push(i, this.h[t] || "")) : 0 == i.indexOf("DCSext.") && (t = i.substring(7), this.p.push(i, this.l[t] || ""))
                        }
                    },
                    sa: function() {
                        this.W && (this.z(this.p), this.p = [])
                    },
                    va: function() {
                        var o = new Date,
                            s = this.d,
                            c = this.h;
                        if (s.tz = parseInt(o.getTimezoneOffset() / 60 * -1) || "0", s.bh = o.getHours() || "0", s.ul = "Netscape" == i.appName ? i.language : i.fb, "object" == ("undefined" == typeof screen ? "undefined" : (0, a.default)(screen)) && (s.cd = "Netscape" == i.appName ? screen.pixelDepth : screen.colorDepth, s.sr = screen.width + "x" + screen.height), "boolean" == typeof i.javaEnabled() && (s.jo = i.javaEnabled() ? "Yes" : "No"), t.title && (s.ti = e.RegExp ? t.title.replace(RegExp("^" + n.protocol + "//" + n.hostname + "\\s-\\s"), "") : t.title), s.js = "Yes", s.ct = "unknown", t.body && t.body.addBehavior) try {
                            t.body.addBehavior("#default#clientCaps"), s.ct = t.body.Va || "unknown", t.body.addBehavior("#default#homePage"), s.hp = t.body.$a(location.href) ? "1" : "0"
                        } catch (e) {
                            this.B(e)
                        }
                        var l = 0,
                            u = 0;
                        if ("number" == typeof e.innerWidth ? (l = e.innerWidth, u = e.innerHeight) : t.documentElement && (t.documentElement.clientWidth || t.documentElement.clientHeight) ? (l = t.documentElement.clientWidth, u = t.documentElement.clientHeight) : t.body && (t.body.clientWidth || t.body.clientHeight) && (l = t.body.clientWidth, u = t.body.clientHeight), s.bs = l + "x" + u, this.G && (s.le = "string" == typeof t.defaultCharset ? t.defaultCharset : "string" == typeof t.characterSet ? t.characterSet : "unknown"), s.tv = r.version, s.sp = this.Na, s.dl = "0", r.j && r.j.Ba && (s.fb_ref = r.j.Ba), r.j && r.j.Ca && (s.fb_source = r.j.Ca), s.ssl = 0 == n.protocol.indexOf("https:") ? "1" : "0", c.dcsdat = o.getTime(), c.dcssip = n.hostname, c.dcsuri = n.pathname, s.es = c.dcssip + c.dcsuri, n.search && (c.dcsqry = n.search), c.dcsqry) {
                            o = c.dcsqry.toLowerCase(), l = this.V.length ? this.V.toLowerCase().split(",") : [];
                            for (u = 0; u < l.length; u++)
                                if (-1 != o.indexOf(l[u] + "=")) {
                                    s.srch = "1";
                                    break
                                }
                        }
                        "" == t.referrer || "-" == t.referrer || "Microsoft Internet Explorer" == i.appName && parseInt(i.appVersion) < 4 || (c.dcsref = t.referrer), c.dcscfg = this.c.u
                    },
                    la: function(e, t) {
                        if ("" != t) {
                            if (null === e || void 0 === e) return "";
                            e = e.toString();
                            for (var i in t) t[i] instanceof RegExp && (e = e.replace(t[i], i));
                            return e
                        }
                        return escape(e)
                    },
                    w: function(e, t) {
                        if (this.G && "" != this.Q && !this.Q.test(e))
                            if ("dcsqry" == e) {
                                for (var i = "", n = t.substring(1).split("&"), o = 0; o < n.length; o++) {
                                    var a = (c = n[o]).indexOf("=");
                                    if (-1 != a) {
                                        var s = c.substring(0, a),
                                            c = c.substring(a + 1);
                                        0 != o && (i += "&"), i += s + "=" + r.K(c)
                                    }
                                }
                                t = t.substring(0, 1) + i
                            } else t = r.K(t);
                        return "&" + e + "=" + this.la(t, this.X)
                    },
                    ka: function(i, n) {
                        if (t.images) {
                            var o = new Image;
                            this.images.push(o);
                            try {
                                var a, s, c = !1,
                                    l = null;
                                l = r.o(n.callback) ? n.callback : function(e, t) {}, a = this, o.onload = function() {
                                    if (!c) return c = !0, l(a, n), !0
                                }, s = e.setTimeout(function() {
                                    if (!c) return o.removeAttribute("src"), c = !0, l(a, n), !0
                                }, r.m), o.onload = function() {
                                    if (!c) return clearTimeout(s), c = !0, l(a, n), !0
                                }
                            } catch (e) {}
                            o.src = i
                        }
                    },
                    ra: function() {
                        var e;
                        if (t.documentElement ? e = t.getElementsByTagName("meta") : t.all && (e = t.all.cb("meta")), void 0 !== e)
                            for (var i = e.length, n = 0; n < i; n++) {
                                var o = e.item(n).name,
                                    a = e.item(n).content;
                                e.item(n), o.length > 0 && (0 == (o = o.toLowerCase()).toUpperCase().indexOf("WT.") ? this.d[o.substring(3)] = a : 0 == o.toUpperCase().indexOf("DCSEXT.") ? this.l[o.substring(7)] = a : 0 == o.toUpperCase().indexOf("DCS.") ? this.h[o.substring(4)] = a : this.T && -1 != this.T.indexOf(o) && (this.l["meta_" + o] = a))
                            }
                    },
                    M: function(e) {
                        if (-1 == t.cookie.indexOf("WTLOPTOUT=")) {
                            var o = this.d,
                                a = this.h,
                                s = this.l,
                                r = this.i18n,
                                c = "http" + (0 == n.protocol.indexOf("https:") ? "s" : "") + "://" + this.domain + ("" == this.dcsid ? "" : "/" + this.dcsid) + "/dcs.gif?";
                            r && (o.dep = "");
                            for (var l in a) "" != a[l] && void 0 != a[l] && "function" != typeof a[l] && (c += this.w(l, a[l]));
                            for (var l in o) "" != o[l] && void 0 != o[l] && "function" != typeof o[l] && (c += this.w("WT." + l, o[l]));
                            for (var l in s) "" != s[l] && void 0 != s[l] && "function" != typeof s[l] && (r && (o.dep = 0 == o.dep.length ? l : o.dep + ";" + l), c += this.w(l, s[l]));
                            r && o.dep.length > 0 && (c += this.w("WT.dep", o.dep)), c.length > 2048 && i.userAgent.indexOf("MSIE") >= 0 && (c = c.substring(0, 2040) + "&WT.tu=1"), this.ka(c, e), this.d.ad = ""
                        }
                    },
                    Ja: function() {
                        this.va(), this.ra(), this.Ka = !0
                    },
                    getTime: function() {
                        return (new Date).getTime()
                    },
                    za: 0,
                    $: function(e) {
                        for (var t = this.getTime(); this.getTime() - t < e;) this.za++
                    },
                    P: function(e, t) {
                        e || (e = "collect"), this.q.push({
                            action: e,
                            message: t
                        })
                    },
                    N: function(e) {
                        if (this.enabled) {
                            var t = "action_" + e.action,
                                i = e.message;
                            if (this.Ka || this.Ja(), i.event && !i.element && (i.element = r.O(i.event, {
                                A: 1
                            })), !r.o(i.filter) || !i.filter(this, i)) {
                                if (i.args) {
                                    i.argsa = i.argsa || [];
                                    for (var n in i.args) i.argsa.push(n, i.args[n])
                                }
                                i.element && i.element.getAttribute && i.element.getAttribute("data-wtmt") && (i.argsa = i.argsa.concat(i.element.getAttribute("data-wtmt").split(","))), c("transform." + e.action, this, i), c("transform.all", this, i), i.transform && r.o(i.transform) && i.transform(this, i), this.ma(), r.o(this[t]) && this[t](i), c("finish." + e.action, this, i), c("finish.all", this, i), i.finish && r.o(i.finish) && i.finish(this, i)
                            }
                        }
                    },
                    fa: function(e) {
                        var t = e && e.argsa && e.argsa.length % 2 == 0;
                        t && (this.ua(e.argsa), this.z(e.argsa)), this.h.dcsdat = this.getTime(), this.M(e), t && this.sa()
                    },
                    ea: function(e) {
                        e && e.argsa && e.argsa.length % 2 == 0 && this.z(e.argsa), this.M(e)
                    }
                }, r.b.prototype.action_multitrack = r.b.prototype.fa, r.b.prototype.action_collect = r.b.prototype.ea, e.Webtrends = r, e.WebTrends = r, e.WT = e.Webtrends, r.multiTrack = r.Ha, r.dcs = r.b, r.dcss = r.f, r.addTransform = r.s, r.bindEvent = r.t, r.getQryParams = r.S, r.dcsdelay = r.m, r.find = r.find, r.b.prototype.init = r.b.prototype.H, r.b.prototype.dcsMultiTrack = r.b.prototype.L, r.b.prototype.track = r.b.prototype.Pa, r.b.prototype.addSelector = r.b.prototype.ga, r.b.prototype.dcsGetIdCallback = r.b.prototype.pa, r.b.prototype.dcsCleanUp = r.b.prototype.ja, r.b.prototype.dcsGetFPC = r.b.prototype.na, r.b.prototype.addTransform = r.b.prototype.s, r.H()
            }
        }(window, window.document, window.navigator, window.location)
    },
    24: function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n, o = i(5),
            a = (n = o) && n.__esModule ? n : {
                default: n
            };
        t.default = new a.default
    },
    25: function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n, o = p(i(6)),
            a = p(i(5));
        i(9);
        var s = p(i(1)),
            r = p(i(15)),
            c = p(i(16)),
            l = p(i(3)),
            u = p(i(4)),
            d = p(i(57)),
            f = i(8),
            h = (i(13), p(i(24)));

        function p(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        a.default.use(d.default), t.default = (n = {
            metaInfo: function() {
                return {
                    meta: [{
                        name: "WT.plat",
                        content: this.channelMeta
                    }, {
                        name: "WT.mobile",
                        content: this.mobileNumber
                    }]
                }
            },
            data: function() {
                return {
                    isClient: s.default.isClient,
                    isWechat: s.default.isWechat,
                    isH5: s.default.isH5,
                    isCQ: s.default.isCQ,
                    isHeBao: s.default.isHeBao,
                    pcUrl: s.default.pcUrl,
                    user_login_status_not_login: "USER_LOGIN_STATUS_NOT_LOGIN",
                    isGoTop: !1,
                    islogin: !1,
                    userClass: "",
                    showName: "",
                    isUserLogin: "/user/UserLoginAction/isUserLogin",
                    loginOut: "/user/LoginUtilAction/getLogout",
                    channelMeta: "",
                    mobileNumber: "",
                    question: {
                        view: "",
                        endTime: new Date(2018, 7, 21).getTime(),
                        examId: "100000583"
                    }
                }
            },
            props: ["isShowFooter", "isShowHomeBtn", "wareType", "isInitWebtrends"]
        }, (0, o.default)(n, "props", {
            isShowFooter: {
                type: String,
                default: "0"
            },
            isShowHomeBtn: {
                type: String,
                default: "0"
            },
            wareType: {
                type: String,
                default: "-1"
            },
            isInitWebtrends: {
                type: Boolean,
                default: !0
            }
        }), (0, o.default)(n, "components", {
            questionnaire: function(e) {
                i.e(0, function(t) {
                    var i = [t(56)];
                    e.apply(null, i)
                }.bind(this))
            }
        }), (0, o.default)(n, "methods", {
            goindex: function() {
                "/module/myAccount.html" == window.location.pathname && (0, f.addEventCode)("pageEvent", "eventCode", "my_fhsy"), "/module/wareDetail.html" == window.location.pathname && ("0" == this.wareType ? (0, f.addEventCode)("pageEvent", "eventCode", "ptlpxqy_fhsy") : "1" == this.wareType && (0, f.addEventCode)("pageEvent", "eventCode", "fzlpxqy_fhsy")), l.default.index()
            },
            toPcHome: function() {
                s.default.isClient || s.default.isWechat || (0, f.addEventCode)("pageEvent", "eventCode", "Touch_home_btm_pc"), this.isClient || (window.location.href = this.pcUrl)
            },
            firstToLogin: function() {
                s.default.isClient || s.default.isWechat || (0, f.addEventCode)("pageEvent", "eventCode", "Touch_home_btm_login");
                l.default.toLogin()
            },
            goOut: function() {
                var e = this;
                s.default.isClient || s.default.isWechat || (0, f.addEventCode)("pageEvent", "eventCode", "Touch_home_btm_quit"), l.default.post(this.loginOut, {
                    isLogOut: "true"
                }).then(function(t) {
                    "success" == u.default.getData(t).msg && (r.default.deleteDomain("c", ".10086.cn"), r.default.deleteDomain("is_login", ".10086.cn"), r.default.deleteDomain("loginName", ".10086.cn"), e.goindex())
                })
            },
            dealData: function(e) {
                var t = e.info,
                    i = e.nickName,
                    n = t ? t.mobileNumber : null;
                this.mobileNumber = t ? t.mobileNumber : null;
                t && t.userStarLevel;
                var o = e.status != this.user_login_status_not_login && t;
                this.islogin = !!o, n && (n = n.substring(0, 3) + "****" + n.substring(7), this.showName = i || n), this.userClass = "gotone", h.default.$emit("isUserLogin", this.islogin), this.initWebtrends()
            },
            distanceVal: function() {
                var e = c.default.getClientHeight(),
                    t = c.default.getScrollTop();
                this.isGoTop = t > e
            },
            goTop: function() {
                scrollTo(0, 0)
            },
            queryUserLogin: function() {
                var e = this;
                this.isClient ? this.initWebtrends() : l.default.post(this.isUserLogin).then(function(t) {
                    var i = u.default.getData(t);
                    i && e.dealData(i)
                })
            },
            setMetaInfo: function() {
                this.isClient ? (this.channelMeta = "APP", this.mobileNumber = null) : (this.channelMeta = "TOUCH", this.mobileNumber = null)
            },
            initWebtrends: function() {
                this.$nextTick(function() {
                    window.jfWebtrends && window.jfWebtrends.isDelay && this.isInitWebtrends && window.webtrendsAsyncInit()
                })
            },
            initExam: function() {
                s.default.isClient || s.default.isWechat || (new Date).getTime() < this.question.endTime && (this.question.view = "questionnaire")
            }
        }), (0, o.default)(n, "created", function() {
            this.setMetaInfo(), this.queryUserLogin()
        }), (0, o.default)(n, "beforeCreate", function() {
            s.default.isClient && s.default.isH5 && setTimeout(function() {
                l.default.getToken()
            }, 4e3)
        }), (0, o.default)(n, "mounted", function() {
            this.initExam(), this.$nextTick(function() {
                "0" === this.isShowFooter && window.addEventListener("scroll", this.distanceVal)
            })
        }), n)
    },
    26: function(e, t) {},
    27: function(e, t) {
        e.exports = {
            render: function() {
                var e = this,
                    t = e.$createElement,
                    i = e._self._c || t;
                return i("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: !(e.isClient || e.isH5 || e.isCQ || e.isHeBao),
                        expression: "!(isClient || isH5 || isCQ || isHeBao)"
                    }]
                }, ["0" == e.isShowFooter ? i("footer", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: !e.isWechat,
                        expression: "!isWechat"
                    }],
                    staticClass: "footColor"
                }, [i("div", {
                    staticClass: "all_infor clearfix"
                }, [i("span", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: !e.islogin,
                        expression: "!islogin"
                    }]
                }, [i("a", {
                    staticClass: "back_info",
                    on: {
                        click: function(t) {
                            e.toPcHome()
                        }
                    }
                }, [e._v("电脑版")]), e._v("\n                        \n                "), i("a", {
                    staticClass: "back_info",
                    on: {
                        click: function(t) {
                            e.firstToLogin()
                        }
                    }
                }, [e._v("登录")])]), e._v(" "), i("span", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: e.islogin,
                        expression: "islogin"
                    }]
                }, [e._v("\n            \t  \n                "), e._v("\n                        \n                 "), i("a", {
                    staticClass: "back_info",
                    attrs: {
                        href: "javascript:void(0);"
                    },
                    on: {
                        click: function(t) {
                            e.toPcHome()
                        }
                    }
                }, [e._v("电脑版")]), e._v("\n                         \n              "), i("a", {
                    staticClass: "back_info",
                    attrs: {
                        href: "javascript:void(0);"
                    },
                    on: {
                        click: function(t) {
                            e.goOut()
                        }
                    }
                }, [e._v("退出")]), e._v("\n            \t         \n            ")])]), e._v(" "), e._m(0)]) : e._e(), e._v(" "), i(e.question.view, {
                    tag: "conpoment",
                    attrs: {
                        quesEndTime: e.question.endTime,
                        examId: e.question.examId
                    },
                    on: {
                        "update:quesEndTime": function(t) {
                            e.$set(e.question, "endTime", t)
                        },
                        "update:examId": function(t) {
                            e.$set(e.question, "examId", t)
                        }
                    }
                }), e._v(" "), i("div", {
                    staticClass: "gotop"
                }, [i("span", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: e.isGoTop,
                        expression: "isGoTop"
                    }],
                    staticClass: "top",
                    attrs: {
                        id: "indextop"
                    },
                    on: {
                        click: function(t) {
                            e.goTop()
                        }
                    }
                }), e._v(" "), i("span", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: "0" == e.isShowHomeBtn,
                        expression: "isShowHomeBtn == '0'"
                    }],
                    staticClass: "goindex",
                    on: {
                        click: function(t) {
                            e.goindex()
                        }
                    }
                })])], 1)
            },
            staticRenderFns: [
                function() {
                    var e = this.$createElement,
                        t = this._self._c || e;
                    return t("div", {
                        staticClass: "footer"
                    }, [t("span", [this._v("\n              京ICP备05002571号 | 中国移动通信版权所有\n            ")])])
                }
            ]
        }
    },
    41: function(e, t, i) {
        i(43);
        var n = i(2)(i(42), i(44), null, null);
        e.exports = n.exports
    },
    42: function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n, o, a = i(6),
            s = (n = a) && n.__esModule ? n : {
                default: n
            };
        i(9), t.default = (o = {
            data: function() {
                return {
                    isShowBox: !1
                }
            },
            props: ["showConfirm", "showCancel", "buttonText", "cancelText", "msg", "ok", "cancel"]
        }, (0, s.default)(o, "props", {
            showConfirm: {
                type: Boolean,
                default: !0
            },
            showCancel: {
                type: Boolean,
                default: !0
            },
            buttonText: {
                type: String,
                default: "确定"
            },
            cancelText: {
                type: String,
                default: "取消"
            },
            msg: {
                type: String,
                default: ""
            },
            ok: {
                type: Function,
                default: function() {}
            },
            cancel: {
                type: Function,
                default: function() {}
            }
        }), (0, s.default)(o, "methods", {
            close: function() {
                this.isShowBox = !1
            },
            open: function() {
                this.isShowBox = !0
            }
        }), o)
    },
    43: function(e, t) {},
    44: function(e, t) {
        e.exports = {
            render: function() {
                var e = this,
                    t = e.$createElement,
                    i = e._self._c || t;
                return i("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: e.isShowBox,
                        expression: "isShowBox"
                    }],
                    staticClass: "maskl"
                }, [i("div", {
                    ref: "dialog",
                    staticClass: "dialog detailDialog"
                }, [i("h2", {
                    on: {
                        click: e.close
                    }
                }), e._v(" "), i("div", {
                    staticClass: "layer"
                }, [i("p", {
                    domProps: {
                        innerHTML: e._s(e.msg)
                    }
                }, [e._v("?")]), e._v(" "), i("div", {
                    staticClass: "btn_g",
                    on: {
                        click: e.close
                    }
                }, [i("a", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: e.showConfirm,
                        expression: "showConfirm"
                    }],
                    staticClass: "btnCar",
                    on: {
                        click: function(t) {
                            e.ok()
                        }
                    }
                }, [e._v(e._s(e.buttonText))]), e._v(" "), i("a", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: e.showCancel,
                        expression: "showCancel"
                    }],
                    staticClass: "btnBuy",
                    on: {
                        click: function(t) {
                            e.cancel()
                        }
                    }
                }, [e._v(e._s(e.cancelText))])])])])])
            },
            staticRenderFns: []
        }
    },
    88: function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = {
            name: "swiper-slide",
            data: function() {
                return {
                    slideClass: "swiper-slide"
                }
            },
            ready: function() {
                this.update()
            },
            mounted: function() {
                this.update(), this.$parent.options.slideClass && (this.slideClass = this.$parent.options.slideClass)
            },
            updated: function() {
                this.update()
            },
            attached: function() {
                this.update()
            },
            methods: {
                update: function() {
                    this.$parent && this.$parent.swiper && this.$parent.swiper.update && (this.$parent.swiper.update(!0), this.$parent.options.loop && this.$parent.swiper.reLoop())
                }
            }
        }
    },
    89: function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = "undefined" != typeof window;
        n && (window.Swiper = i(119)), t.default = {
            name: "swiper",
            props: {
                options: {
                    type: Object,
                    default: function() {
                        return {
                            autoplay: 3500
                        }
                    }
                },
                notNextTick: {
                    type: Boolean,
                    default: function() {
                        return !1
                    }
                }
            },
            data: function() {
                return {
                    defaultSwiperClasses: {
                        wrapperClass: "swiper-wrapper"
                    }
                }
            },
            ready: function() {
                !this.swiper && n && (this.swiper = new Swiper(this.$el, this.options))
            },
            mounted: function() {
                var e = this,
                    t = function() {
                        if (!e.swiper && n) {
                            delete e.options.notNextTick;
                            var t = !1;
                            for (var i in e.defaultSwiperClasses) e.defaultSwiperClasses.hasOwnProperty(i) && e.options[i] && (t = !0, e.defaultSwiperClasses[i] = e.options[i]);
                            var o = function() {
                                e.swiper = new Swiper(e.$el, e.options)
                            };
                            t ? e.$nextTick(o) : o()
                        }
                    }(this.options.notNextTick || this.notNextTick) ? t() : this.$nextTick(t)
            },
            updated: function() {
                this.swiper && this.swiper.update()
            },
            beforeDestroy: function() {
                this.swiper && (this.swiper.destroy(), delete this.swiper)
            }
        }
    },
    100: function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAMAAAAoyzS7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RTMzMEVCQjBERjFDMTFFN0JBQ0NBNkE2N0MzODU2Q0EiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RTMzMEVCQjFERjFDMTFFN0JBQ0NBNkE2N0MzODU2Q0EiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpFMzMwRUJBRURGMUMxMUU3QkFDQ0E2QTY3QzM4NTZDQSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpFMzMwRUJBRkRGMUMxMUU3QkFDQ0E2QTY3QzM4NTZDQSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PopwB7AAAAAGUExURf///wAAAFXC034AAAABdFJOUwBA5thmAAAADElEQVR42mJgAAgwAAACAAFPbVnhAAAAAElFTkSuQmCC"
    },
    107: function(e, t) {
        e.exports = {
            render: function() {
                var e = this.$createElement;
                return (this._self._c || e)("div", {
                    class: this.slideClass
                }, [this._t("default")], 2)
            },
            staticRenderFns: []
        }
    },
    108: function(e, t) {
        e.exports = {
            render: function() {
                var e = this.$createElement,
                    t = this._self._c || e;
                return t("div", {
                    staticClass: "swiper-container"
                }, [this._t("parallax-bg"), this._v(" "), t("div", {
                    class: this.defaultSwiperClasses.wrapperClass
                }, [this._t("default")], 2), this._v(" "), this._t("pagination"), this._v(" "), this._t("button-prev"), this._v(" "), this._t("button-next"), this._v(" "), this._t("scrollbar")], 2)
            },
            staticRenderFns: []
        }
    },
    121: function(e, t, i) {
        i(155);
        var n = i(2)(i(124), i(181), null, null);
        e.exports = n.exports
    },
    124: function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n, o = c(i(6)),
            a = i(78),
            s = c(i(1)),
            r = i(8);

        function c(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        t.default = (n = {
            data: function() {
                return {
                    swiperOption: {
                        autoplay: 3500,
                        setWrapperSize: !0,
                        autoHeight: !1,
                        loop: !0,
                        pagination: ".swiper-pagination",
                        spaceBetween: 0,
                        autoplayDisableOnInteraction: !1,
                        paginationClickable: !0,
                        observeParents: !0
                    }
                }
            },
            props: ["isLink", "items", "gotoUrlByCarousel"]
        }, (0, o.default)(n, "props", {
            isLink: {
                type: Boolean,
                default: !0
            },
            items: {
                type: Array,
                default: function() {
                    return []
                }
            },
            gotoUrlByCarousel: {
                type: Function,
                default: function(e) {}
            }
        }), (0, o.default)(n, "computed", {
            swiper: function() {
                return this.$refs.comSwiper.swiper
            }
        }), (0, o.default)(n, "components", {
            swiper: a.swiper,
            swiperSlide: a.swiperSlide
        }), (0, o.default)(n, "methods", {
            go: function(e) {
                var t = this.items.length;
                0 == e ? (s.default.isClient || s.default.isWechat || (0, r.addEventCode)("pageEvent", "eventCode", "Touch_home_banner_" + t), this.gotoUrlByCarousel(this.items[t - 1].goToUrl)) : e == t + 1 ? (s.default.isClient || s.default.isWechat || (0, r.addEventCode)("pageEvent", "eventCode", "Touch_home_banner_1"), this.gotoUrlByCarousel(this.items[0].goToUrl)) : (s.default.isClient || s.default.isWechat || (0, r.addEventCode)("pageEvent", "eventCode", "Touch_home_banner_" + e), this.gotoUrlByCarousel(this.items[e - 1].goToUrl))
            }
        }), (0, o.default)(n, "mounted", function() {
            this.items.length <= 1 && this.$refs.comSwiper.swiper.stopAutoplay()
        }), n)
    },
    155: function(e, t) {},
    160: function(e, t, i) {
        e.exports = "https://m.jf.10086.cn/static/images/loading.b1d469b.jpg"
    },
    173: function(e, t, i) {
        var n = i(2)(i(88), i(107), null, null);
        e.exports = n.exports
    },
    174: function(e, t, i) {
        var n = i(2)(i(89), i(108), null, null);
        e.exports = n.exports
    },
    181: function(e, t) {
        e.exports = {
            render: function() {
                var e = this,
                    t = e.$createElement,
                    i = e._self._c || t;
                return e.isLink ? i("div", [i("swiper", {
                    ref: "comSwiper",
                    attrs: {
                        options: e.swiperOption
                    },
                    nativeOn: {
                        click: function(t) {
                            e.go(e.swiper.activeIndex)
                        }
                    }
                }, [e._l(e.items, function(e) {
                    return i("swiper-slide", [i("img", {
                        attrs: {
                            src: e.imgPath,
                            alt: ""
                        }
                    })])
                }), e._v(" "), i("div", {
                    staticClass: "swiper-pagination",
                    attrs: {
                        slot: "pagination"
                    },
                    slot: "pagination"
                })], 2)], 1) : e.isLink ? e._e() : i("div", [i("swiper", {
                    ref: "comSwiper",
                    attrs: {
                        options: e.swiperOption
                    }
                }, [e._l(e.items, function(e) {
                    return i("swiper-slide", [i("img", {
                        attrs: {
                            src: e.imgPath,
                            alt: ""
                        }
                    })])
                }), e._v(" "), i("div", {
                    staticClass: "swiper-pagination",
                    attrs: {
                        slot: "pagination"
                    },
                    slot: "pagination"
                })], 2)], 1)
            },
            staticRenderFns: []
        }
    },
    246: function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n, o, a = i(6),
            s = (n = a) && n.__esModule ? n : {
                default: n
            },
            r = i(78);
        t.default = (o = {
            data: function() {
                return {
                    swiperOption: {
                        autoplay: 2500,
                        setWrapperSize: !0,
                        autoHeight: !1,
                        loop: !0,
                        spaceBetween: 30,
                        autoplayDisableOnInteraction: !1,
                        paginationClickable: !0,
                        observeParents: !0
                    }
                }
            },
            props: ["brandInfosList", "gotoUrlByCarousel"]
        }, (0, s.default)(o, "props", {
            brandInfosList: {
                type: Array,
                required: !0
            },
            gotoUrlByCarousel: {
                type: Function,
                default: function(e) {
                    console.log(e)
                }
            }
        }), (0, s.default)(o, "computed", {
            swiper: function() {
                return this.$refs.comSwiper.swiper
            }
        }), (0, s.default)(o, "components", {
            swiper: r.swiper,
            swiperSlide: r.swiperSlide
        }), (0, s.default)(o, "methods", {}), (0, s.default)(o, "mounted", function() {
            var e = this;
            window.multilSwiper || (window.multilSwiper = {
                go: function(t) {
                    var i, n, o, a, s = void 0;
                    o = (s = t.currentTarget.attributes.name.value).split(",")[0], a = s.split(",")[1], i = e.brandInfosList[o][a].linkUrl, n = e.brandInfosList[o][a].title, e.gotoUrlByCarousel(i, n)
                }
            })
        }), o)
    },
    252: function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n, o, a = i(6),
            s = (n = a) && n.__esModule ? n : {
                default: n
            };
        i(9), t.default = (o = {
            data: function() {
                return {
                    isShowBox: !1
                }
            },
            props: ["showCancel", "buttonText", "cancelText", "msg", "btnClass", "ok", "cancel"]
        }, (0, s.default)(o, "props", {
            showCancel: {
                type: Boolean,
                default: !1
            },
            buttonText: {
                type: String,
                default: "确定"
            },
            cancelText: {
                type: String,
                default: "取消"
            },
            msg: {
                type: String,
                default: ""
            },
            btnClass: {
                type: String,
                default: "btnBack"
            },
            ok: {
                type: Function,
                default: function() {}
            },
            cancel: {
                type: Function,
                default: function() {}
            }
        }), (0, s.default)(o, "methods", {
            close: function() {
                this.isShowBox = !1
            },
            open: function() {
                this.isShowBox = !0
            }
        }), o)
    },
    292: function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = l(i(1)),
            o = l(i(2198)),
            a = l(i(2197)),
            s = l(i(2196)),
            r = l(i(18)),
            c = l(i(41));
        l(i(3));

        function l(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        t.default = {
            data: function() {
                return {
                    footInfo: {
                        isShowFooter: "0",
                        isShowHomeBtn: "-1"
                    },
                    msgInfo: {
                        showCancel: !1,
                        msg: ""
                    },
                    mobileInfo: 0
                }
            },
            components: {
                topSwiper: o.default,
                navList: a.default,
                indexContent: s.default,
                comFoot: r.default,
                msgBox: c.default
            },
            methods: {
                showMsgBox: function(e) {
                    this.msgInfo = e, this.$nextTick(function() {
                        this.$refs.msgbox.open()
                    })
                },
                changeIndex: function(e) {
                    this.mobileInfo = e
                }
            },
            mounted: function() {
                n.default.isClient || (document.getElementById("indexPage").style.minHeight = window.screen.height + "px")
            }
        }
    },
    293: function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n, o = m(i(6)),
            a = m(i(442)),
            s = m(i(1)),
            r = m(i(16)),
            c = m(i(3)),
            l = m(i(15)),
            u = i(78),
            d = i(8),
            f = m(i(438)),
            h = m(i(2150)),
            p = m(i(4)),
            g = m(i(10));

        function m(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        t.default = (n = {
            props: ["openMobile"]
        }, (0, o.default)(n, "props", {
            openMobile: {
                type: Number,
                default: 0
            }
        }), (0, o.default)(n, "data", function() {
            return {
                isClient: s.default.isClient,
                indexContentUrl: "/ware/WareRankAction/qryAllIndexContent",
                getALLBulletinListUrl: "/ware/WareShowFunc/getALLBulletinList",
                getScoreForIndex: "/ware/BroByScoreAction/getScore",
                collectWareUrl: "/user/UserAccountAction/addFavourite",
                delCollectWareUrl: "/user/UserAccountAction/delUserCollectWare",
                checkUserLoginUrl: "/user/UserAccountAction/checkUserInfo",
                userFavouriteWareUrl: "/user/UserAccountAction/userFavouriteWare",
                busiOrderInitInfoUrl: "/user/FlexibleBusiAction/busiOrderInitInfo",
                bulletinList: [],
                bulleAutoScrollTimer: null,
                bulleAnimate: !1,
                imgMOStyle: {},
                showMOSwiper: !1,
                mobileOwnMaxNum: 4,
                mobileOwnWareSize: 0,
                mobileOwnWareInfos: [],
                moblieOwnSwiperOpt: {
                    slidesPerView: "3.34",
                    freeMode: !0,
                    setWrapperSize: !0,
                    lazyLoading: !0,
                    observer: !0,
                    observeParents: !0
                },
                showScoreSwiper: !1,
                scoreValInfo: [],
                scoreSwiperOpt: {
                    freeMode: !0,
                    slidesPerView: "auto",
                    spaceBetween: 0,
                    observer: !0,
                    observeParents: !0
                },
                multLintSwiperOpt: {
                    brandInfosList: (0, a.default)()
                },
                hotExchangeList: [],
                floorInfoList: [],
                floorSwiperOpt: {
                    freeMode: !0,
                    slidesPerView: 2.2,
                    spaceBetween: 0,
                    observer: !0,
                    observeParents: !0
                },
                pageNum_WR: 1,
                pageSize_WR: 10,
                maxPageNum_WR: 1,
                maxNum_WR: 0,
                wareInfoArray: "",
                guessLikeInfos: "",
                checkLoginSwitch: !0,
                loading: !1,
                collectLock: !1,
                userCollectStr: "",
                colloctAjaxEnd: !1,
                contentAjaxEnd: !1,
                collectDialog: {
                    showDialog: !1,
                    showCloseBtn: !1,
                    msg: "",
                    showLogin: !1
                },
                chargeMsg: {
                    flowModal: !1,
                    telModal: !1,
                    flowBtn: !1,
                    telBtn: !1,
                    flowIndex: -1,
                    telIndex: -1,
                    msgShow: !1,
                    promptMsg: ""
                },
                changeHeight: "",
                currentFlow: 0,
                currentAccount: 0,
                currentInput: "",
                flowValues: [{
                    flow: "30",
                    wareId: "100000000523655"
                }, {
                    flow: "100",
                    wareId: "100000031224666"
                }, {
                    flow: "210",
                    wareId: "100000031224654"
                }, {
                    flow: "420",
                    wareId: "100000031224663"
                }, {
                    flow: "450",
                    wareId: "100000031224657"
                }, {
                    flow: "900",
                    wareId: "100000031224664"
                }, {
                    flow: "1500",
                    wareId: "100000031224660"
                }, {
                    flow: "3000",
                    wareId: "100000031224665"
                }],
                amountM: ["5", "20", "40", "80"],
                busiId: "1000000001",
                wareId: "",
                isNative: !1,
                alertShow: !1
            }
        }), (0, o.default)(n, "components", {
            swiper: u.swiper,
            swiperSlide: u.swiperSlide,
            multilineSwiper: h.default
        }), (0, o.default)(n, "methods", {
            goWareDetail: function(e, t, i) {
                (0, d.addEventCode)("business", "businessCode", "dhlp_1", "dhlp_1_value"), s.default.isClient || s.default.isWechat || (0, d.addEventCode)("pageEvent", "eventCode", "Touch_home_ydzy_" + (i + 1)), this.gotoUrlByChannel("/module/wareDetail.html#/" + e + "index", t)
            },
            gotoRecommendPage: function(e, t, i, n) {
                var o = "";
                "001" == e ? (s.default.isClient || s.default.isWechat || (0, d.addEventCode)("pageEvent", "eventCode", "Touch_home_yxzx_" + (n + 2)), o = "/module/subjectList.html#/" + t + "_0") : "002" == e ? o = "/module/topic.html#/" + t + "/" + i + "/" : "003" == e ? o = "/topic/jfhd.html" : "004" == e ? o = "/module/wareList.html#/ware/searchWareInfoBySkind_index//" + t + "/////////" : "005" == e && (s.default.isClient || s.default.isWechat || (0, d.addEventCode)("pageEvent", "eventCode", "Touch_home_pzsh_" + (n + 2)), o = "/module/wareList.html#/ware/searchWareInfoByMkind_index/////" + t + "//////"), this.gotoUrlByChannel(o, i)
            },
            goBrandArea: function(e, t) {
                var i = e.split("/")[e.split("/").length - 2];
                i = i.substring(5, i.length), s.default.isClient || s.default.isWechat || (0, d.addEventCode)("pageEvent", "eventCode", "Touch_home_ppqjd_" + i), this.gotoUrlByChannel(e, t)
            },
            goWareDetailRecommend: function(e, t, i) {
                (0, d.addEventCode)("business", "businessCode", "dhlp_1", "dhlp_1_value"), s.default.isClient || s.default.isWechat || (0, d.addEventCode)("pageEvent", "eventCode", "Touch_home_wntj_" + (i + 1)), this.gotoUrlByChannel("/module/wareDetail.html#/" + e + "index", t)
            },
            initWareInfo: function(e) {
                for (var t = new Array(e), i = 0; i < e; i++) t[i] = this.wareInfoArray[i];
                return t
            },
            viewMore: function() {
                this.loading = !0;
                var e = parseInt((this.pageNum_WR + 1) * this.pageSize_WR);
                e > this.wareInfoArray.length && (e = this.wareInfoArray.length), this.guessLikeInfos = this.initWareInfo(e), this.loading = !1, this.pageNum_WR += 1
            },
            scrollEvent: function() {
                r.default.getScrollHeight() - r.default.getScrollTop() - r.default.getClientHeight() < 10 && !this.loading && this.pageNum_WR <= this.maxPageNum_WR && 1 != this.maxPageNum_WR && this.viewMore()
            },
            toDetailPage: function(e, t) {
                this.gotoUrlByChannel(e, t)
            },
            bulleAutoScroll: function(e) {
                var t = this;
                this.bulleAnimate = !0, setTimeout(function() {
                    t.bulletinList.push(t.bulletinList[0]), t.bulletinList.shift(), t.bulleAnimate = !1
                }, 500)
            },
            getBullenList: function() {
                var e = this;
                c.default.post(this.getALLBulletinListUrl, {}).then(function(t) {
                    var i = p.default.getData(t),
                        n = [];
                    if (i && i.length > 0)
                        for (var o = 0; o < i.length; o++) n.push(i[o].m_back);
                    e.bulletinList = n, e.bulletinList.length > 1 && e.$nextTick(function() {
                        var e = this,
                            t = document.getElementById("scroll-news").getElementsByTagName("li")[0];
                        this.bulleAutoScrollTimer = setInterval(function() {
                            e.bulleAutoScroll(t)
                        }, 3e3)
                    })
                })
            },
            goBulleDetailPage: function(e) {
                s.default.isClient || s.default.isWechat || (0, d.addEventCode)("pageEvent", "eventCode", "Touch_home_Notice"), this.gotoUrlByChannel("/module/noticeInfo.html#/" + e + "/0", "公告详情")
            },
            goBulleListPage: function() {
                s.default.isClient || context.isWechat || (0, d.addEventCode)("pageEvent", "eventCode", "Touch_home_Notice_more"), this.gotoUrlByChannel("/module/noticeInfo.html#/list", "公告中心")
            },
            initMoblieOwnStyle: function() {
                var e = "";
                window.screen.width > this.maxScreenWidth ? (e = .026 * this.maxScreenWidth + "px", this.moblieOwnSwiperOpt.spaceBetween = .069 * this.maxScreenWidth) : (e = .026 * window.screen.width + "px", this.moblieOwnSwiperOpt.spaceBetween = .069 * window.screen.width), this.imgMOStyle = {
                    "padding-left": e
                }
            },
            goMoreMobileOwn: function() {
                s.default.isClient || s.default.isWechat || (0, d.addEventCode)("pageEvent", "eventCode", "Touch_home_ydzy_more"), this.gotoUrlByChannel("/module/wareList.html#/ware/searchWareInfoByMkind_index/////100000000000002//////", "基础通信")
            },
            getScoreData: function() {
                var e = this;
                c.default.post(this.getScoreForIndex, {}).then(function(t) {
                    var i = p.default.getData(t);
                    i && i.length > 0 && (e.scoreValInfo = i, e.showScoreSwiper = !0)
                })
            },
            goSearchByValue: function(e) {
                var t = e;
                "20000及以上" == e && (t = "over20000"), s.default.isClient || s.default.isWechat || (0, d.addEventCode)("pageEvent", "eventCode", "Touch_home_ajfzll_" + t);
                var i = -1;
                "0-1000" == e ? i = 1 : "1000-2000" == e ? i = 2 : "2000-3000" == e ? i = 3 : "3000-5000" == e ? i = 4 : "5000-10000" == e ? i = 5 : "10000-20000" == e ? i = 6 : "20000及以上" == e && (i = 7), this.gotoUrlByChannel("/module/wareList.html#/ware/searchWareInfo_index///////" + i + "////", "礼品列表")
            },
            getContentData: function() {
                var e = this;
                c.default.post(this.indexContentUrl, {}).then(function(t) {
                    var i = p.default.getData(t),
                        n = JSON.parse(i.hotExchangeJson);
                    if (n && n.length >= e.mobileOwnMaxNum && (e.mobileOwnWareSize = n.length, e.mobileOwnWareInfos = n), e.initMoblieOwnStyle(), e.showMOSwiper = !0, e.wareInfoArray = JSON.parse(i.wareRecommendJson), e.wareInfoArray) {
                        e.maxNum_WR = e.wareInfoArray.length, e.maxPageNum_WR = e.maxNum_WR % e.pageSize_WR == 0 ? e.maxNum_WR / e.pageSize_WR : parseInt(e.maxNum_WR / e.pageSize_WR) + 1;
                        for (var o = e.wareInfoArray.length < e.pageSize_WR ? e.wareInfoArray.length : e.pageSize_WR, a = 0; a < e.wareInfoArray.length; a++) e.wareInfoArray[a].isLikeWare = !1;
                        e.guessLikeInfos = e.initWareInfo(o), e.contentAjaxEnd = !0
                    }
                })
            },
            getHotAreaData: function() {
                this.hotExchangeList = f.default.hotExchangeList
            },
            getBrandAreaData: function() {
                this.multLintSwiperOpt.brandInfosList = f.default.brandInfosList, this.multLintSwiperOpt.gotoUrlByCarousel = this.goBrandArea
            },
            goTopicPage: function(e, t, i) {
                s.default.isClient || s.default.isWechat || (0, d.addEventCode)("pageEvent", "eventCode", "Touch_home_rmdh_" + i + 1), this.gotoUrlByChannel(e, t)
            },
            getFloorData: function() {
                this.floorInfoList = f.default.floorInfoList
            },
            initSearchHead: function() {
                if (this.isClient) {
                    if (this.$root.checkLoginSwitch)
                        if (s.default.isH5) {
                            var e = this;
                            s.default.isIOS ? leadeon.init = function() {
                                e.syncPost()
                            } : e.syncPost()
                        } else this.checkUserLogin(null, null)
                } else this.checkUserLogin(null, null)
            },
            checkUserLogin: function(e, t) {
                var i = this;
                c.default.post(this.checkUserLoginUrl, {
                    tokenH5: e,
                    encryptUidH5: t
                }).then(function(e) {
                    var t = p.default.getData(e);
                    "Y" == t.status ? (i.$root.isLogin = "02", "true" == t.isShowExistPro && (i.isNative = !0), i.getUserCollectWareInfo()) : i.$root.isLogin = "01"
                })
            },
            getUserCollectWareInfo: function() {
                var e = this;
                c.default.post(this.userFavouriteWareUrl, {}).then(function(t) {
                    var i = p.default.getData(t);
                    i && "success" == i.msg && (e.userCollectStr = i.content, e.colloctAjaxEnd = !0, e.updateCollect())
                })
            },
            updateCollect: function() {
                if (this.colloctAjaxEnd && this.contentAjaxEnd) {
                    for (var e = 0; e < this.wareInfoArray.length; e++) this.userCollectStr.indexOf(this.wareInfoArray[e].wareId) > -1 && (this.wareInfoArray[e].isLikeWare = !0);
                    this.guessLikeInfos = this.initWareInfo(this.guessLikeInfos.length)
                }
            },
            collect: function(e, t, i) {
                this.collectLock || (t ? this.deleteFavor(e, i) : this.collectWare(e, i))
            },
            collectWare: function(e, t) {
                var i = this;
                this.collectLock = !0;
                var n = "很抱歉，本礼品暂不支持您的手机品牌，您无法收藏",
                    o = "";
                void 0 != l.default.get("USER_INFO_REDIS_KEY") && (o = l.default.get("USER_INFO_REDIS_KEY").substring(0, 16)), c.default.post(this.collectWareUrl, {
                    wareIds: t,
                    vt: o
                }).then(function(t) {
                    var o = p.default.getData(t);
                    "success" == o.msg ? (n = "收藏成功，您可以到收藏夹查看礼品", i.guessLikeInfos[e].isLikeWare = !0, i.showDialog(n, !1, !1, !0)) : "login" == o.msg ? s.default.isWechat ? c.default.toLogin() : (n = "您好，要收藏此礼品，请先登录！", i.showDialog(n, !0, !0, !1)) : "INCONSISTENT_BRAND" == o.msg ? i.showDialog(n, !1, !1, !0) : i.showDialog(o.content, !1, !1, !0), i.collectLock = !1
                })
            },
            deleteFavor: function(e, t) {
                var i = this;
                this.collectLock = !0;
                var n = "很抱歉，取消收藏失败";
                c.default.post(this.delCollectWareUrl, {
                    wareId: t
                }).then(function(t) {
                    var o = p.default.getData(t);
                    "success" == o.msg ? (n = "取消收藏成功！", i.guessLikeInfos[e].isLikeWare = !1, i.showDialog(n, !1, !1, !0)) : "login" == o.msg ? s.default.isWechat ? c.default.toLogin() : (n = "您好，您还未登录，请先登录！", i.showDialog(n, !0, !0, !1)) : "failure" == o.msg && i.showDialog(n, !1, !1, !0), i.collectLock = !1
                })
            },
            showDialog: function(e, t, i, n) {
                if (this.collectDialog.msg = e, this.collectDialog.showLogin = t, this.collectDialog.showCloseBtn = i, this.collectDialog.showDialog = !0, n) {
                    var o = this;
                    setTimeout(function() {
                        o.collectDialog.showDialog = !1
                    }, 3e3)
                }
            },
            closeDialog: function() {
                this.collectDialog.showDialog = !1
            },
            goLogin: function() {
                c.default.toLogin()
            },
            getIsWechatMemberCard: function() {
                var e = [window.location.href, !1],
                    t = e[1];
                return e[0].indexOf("openid=") > -1 && (t = !0), t
            },
            checkUserInfo: function() {
                var e = this;
                c.default.post(this.checkUserLoginUrl).then(function(t) {
                    var i = p.default.getData(t);
                    "Y" != i.status && ("true" == i.isShowExistPro && (e.isNative = !0), s.default.isWechat && (e.$root.$children[0].showMsgBox({
                        msg: "请您关联积分商城账号后继续访问，即将跳转。",
                        showCancel: !1,
                        showConfirm: !1
                    }), setTimeout(function() {
                        e.$root.$children[0].$refs.msgbox.close(), c.default.toLogin()
                    }, 2e3)))
                })
            },
            syncPost: function() {
                for (var e = this;
                    "undefined" == typeof leadeon;) setTimeout("", 500);
                leadeon.getUserInfo({
                    debug: !1,
                    success: function(t) {
                        var i = g.default.get("JF_H5_ENCRYPT_UID");
                        !t.token || t.token == g.default.get("JF_H5_UID") && "undefined" == i && null == i ? (t.token ? g.default.set("JF_H5_UID", t.token) : (g.default.set("JF_H5_ENCRYPT_UID", null), g.default.set("JF_H5_UID", null)), e.checkUserLogin(null, null)) : (g.default.set("JF_H5_UID", t.token), leadeon.checkUID({
                            debug: !1,
                            domain: s.default.clientUrl,
                            chanelId: "12020",
                            success: function(i) {
                                g.default.set("JF_H5_ENCRYPT_UID", i.uid), e.checkUserLogin(t.token, i.uid), e.queryUserInfo(t.token, i.uid)
                            },
                            error: function(t) {
                                g.default.set("JF_H5_ENCRYPT_UID", null), e.checkUserLogin(null, null)
                            }
                        }))
                    },
                    error: function(t) {
                        g.default.set("JF_H5_UID", null), e.checkUserLogin(null, null)
                    }
                })
            },
            changeTel: function() {
                this.chargeMsg.flowModal = !1, this.chargeMsg.flowBtn = !1, this.chargeMsg.telModal = !0, this.chargeMsg.telBtn = !0, this.changeHeight = "21.85rem"
            },
            changeFlow: function() {
                this.chargeMsg.flowModal = !0, this.chargeMsg.flowBtn = !0, this.chargeMsg.telModal = !1, this.chargeMsg.telBtn = !1, this.changeHeight = "21.85rem"
            },
            closeModal: function() {
                this.chargeMsg.flowBtn = !1, this.chargeMsg.telBtn = !1, this.changeHeight = "0rem"
            },
            chooseFlow: function(e, t, i) {
                this.wareId = i, this.chargeMsg.flowIndex = e, this.currentFlow = this.flowValues[e]
            },
            chooseTel: function(e, t) {
                this.chargeMsg.msgShow = !1, this.chargeMsg.telIndex = e;
                var i = t.currentTarget.innerHTML;
                this.currentInput = parseInt(i), this.currentAccount = 100 * parseInt(i)
            },
            exchange: function() {
                -1 !== this.chargeMsg.flowIndex && this.goWareDetail(this.wareId, "礼品详情", this.chargeMsg.flowIndex)
            },
            checkAllGift: function() {
                this.gotoUrlByChannel("/module/wareList.html#/ware/searchWareInfo_index/%25E6%25B5%2581%25E9%2587%258F%25E5%258C%2585//////////", "流量兑换")
            },
            changeRealNum: function() {
                "" != this.currentInput && (this.currentInput = this.currentAccount / 100)
            },
            goOrder: function(e, t) {
                var i = this;
                if ("number" == typeof e) {
                    var n = e / 100;
                    0 == n ? (this.chargeMsg.promptMsg = "请输入充值金额", this.chargeMsg.msgShow = !0) : n < 5 ? (this.chargeMsg.promptMsg = "单笔充值最低5元", this.chargeMsg.msgShow = !0) : n > 1e3 ? (this.chargeMsg.promptMsg = "单笔充值最高1000元", this.chargeMsg.msgShow = !0) : c.default.post(this.busiOrderInitInfoUrl, {
                        busiId: this.busiId,
                        isDonate: t,
                        payType: "03",
                        exchangePrice: n,
                        exchangePoint: e
                    }).then(function(o) {
                        var a = p.default.getData(o);
                        if ("0000" == a.returnCode) {
                            var r = c.default.href("/module/telOrderConf.html", "c", [i.busiId, t, "03", n, e, ""]);
                            i.gotoUrlByChannel(r, "订单确认")
                        } else if ("9000" == a.returnCode)
                            if (s.default.isWechat || !s.default.isClient) c.default.toLogin();
                            else {
                                var l = a.message;
                                i.showDialog(l, !0, !0, !1)
                            } else if ("Q103" == a.returnCode || "Q204" == a.returnCode) c.default.toLogin();
                        else {
                            var u = "";
                            u = "9999" == a.returnCode ? "网络忙，请稍后再试" : "Q102" == a.returnCode ? "客户手机号与客户标识不匹配，如有疑问，请咨询当地10086" : "Q111" == a.returnCode ? "积分扣减失败，用户积分不足，如有疑问，请咨询当地10086" : "Q112" == a.returnCode ? "积分扣减失败，用户手机状态异常，如有疑问，请咨询当地10086" : "Q113" == a.returnCode || "Q115" == a.returnCode ? "积分扣减失败，如有疑问，请咨询当地10086" : "Q114" == a.returnCode ? "当前渠道不支持此类业务办理" : "Q116" == a.returnCode ? "系统升级，请稍后重试" : a.message, i.showDialog(u, !1, !0, !0)
                        }
                    })
                }
            },
            goNative: function() {
                this.gotoUrlByChannel("/module/wareList.html#/ware/searchLocalWareInfo_index///////////", "本地礼品")
            }
        }), (0, o.default)(n, "filters", {
            formatScore: function(e) {
                var t = e.indexOf("-");
                return t > -1 ? "0+" == (e = e.substring(0, t) + "+") && (e = "1+") : e = e.replace(/[^0-9]/gi, "") + "+", e
            }
        }), (0, o.default)(n, "created", function() {
            var e = this;
            this.initSearchHead(), this.getBullenList(), this.getContentData(), this.getScoreData(), this.getHotAreaData(), this.getFloorData(), this.getBrandAreaData();
            var t = sessionStorage.getItem("isJf");
            this.isClient && null == t && (this.alertShow = !0, setTimeout(function() {
                e.alertShow = !1
            }, 3e3)), sessionStorage.setItem("isJf", "true")
        }), (0, o.default)(n, "mounted", function() {
            window.addEventListener("scroll", this.scrollEvent), this.getIsWechatMemberCard() && this.checkUserInfo()
        }), (0, o.default)(n, "destroyed", function() {
            window.removeEventListener("scroll", this.scrollEvent)
        }), (0, o.default)(n, "watch", {
            currentInput: function(e, t) {
                !/^[0-9]*$/.test(e) || e > 9999 ? this.currentInput = t : this.currentAccount = "" == e ? 0 : 100 * this.currentInput
            },
            openMobile: function(e, t) {
                this.changeTel()
            }
        }), n)
    },
    294: function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = c(i(6)),
            o = c(i(3)),
            a = c(i(1)),
            s = c(i(4)),
            r = i(8);

        function c(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        t.default = {
            data: function() {
                return {
                    checkUserInfo: "/user/UserAccountAction/checkUserInfo",
                    category: "/module/category.html",
                    wareRankList: "/module/rankList.html#/rank/0///",
                    searchMyExchangeWareInfo: "/module/wareList.html#/ware/searchMyExchangeWareInfo_index///////////",
                    myAccount: "/module/myAccount.html",
                    brandArea: "/module/newActivity.html#/outlink/brandArea/isIndex",
                    discount: "/module/wareList.html#/ware/searchWareInfo_index////2//////4Sale/",
                    exchange: "/module/jfhd.html#/mutual/0",
                    digitalLife: "/module/newActivity.html#/outlink/enjoyLife/isIndex",
                    superExchange: "/module/newActivity.html#/outlink/superExchange/isIndex",
                    potence: "/module/potence.html",
                    index: 0
                }
            },
            components: {},
            methods: {
                gotoUrl: function(e, t, i, c, l) {
                    var u = this;
                    a.default.isClient || a.default.isWechat || (0, r.addEventCode)("pageEvent", "eventCode", "Touch_home_icon_" + i), c ? o.default.post(this.checkUserInfo, {}).then(function(i) {
                        var r;
                        "Y" == s.default.getData(i).status.trim() ? u.gotoUrlByChannel(e, t) : a.default.isWechat ? o.default.toLogin(e) : u.$root.$children[0].showMsgBox((r = {
                            showCancel: !0,
                            msg: "您好，要访问我能兑换的礼品，请先登录！",
                            buttonText: "登录"
                        }, (0, n.default)(r, "showCancel", !1), (0, n.default)(r, "ok", function() {
                            o.default.toLogin(e)
                        }), r))
                    }) : this.gotoUrlByChannel(e, t, l)
                },
                showMobile: function() {
                    this.$emit("mobileShow", ++this.index);
                    var e = 25 * window.getComputedStyle(document.getElementsByTagName("html")[0]).fontSize.replace("px", "");
                    window.scrollTo({
                        top: e,
                        behavior: "smooth"
                    })
                }
            }
        }
    },
    295: function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = l(i(121)),
            o = l(i(1)),
            a = l(i(3)),
            s = l(i(2156)),
            r = (l(i(15)), i(8), l(i(16))),
            c = l(i(4));

        function l(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        t.default = {
            data: function() {
                return {
                    isClient: o.default.isClient,
                    mobileAdUrl: "/common/PageAdAction/queryMobileAdJson",
                    searchUrl: "/module/search.html#/",
                    topSwiperOpt: {},
                    isShowTopSwiper: !1
                }
            },
            components: {
                activityMsgBox: s.default,
                comSwiper: n.default
            },
            methods: {
                getAdInfo: function() {
                    var e = this;
                    a.default.post(this.mobileAdUrl, {}).then(function(t) {
                        var i = c.default.getData(t);
                        if (0 != i.length) {
                            e.showSwiper = !0;
                            for (var n = [], o = 0; o < i.length; o++) {
                                var a = i[o],
                                    s = a.clickTransferUrl;
                                if (s.indexOf("searchWareInfoBySkind") > -1 && (s = a.clickTransferUrl.replace("searchWareInfoBySkind", "searchWareInfoBySkind_index")), s.indexOf("topic.html") > -1) s.substr(s.length - 1, 1).indexOf("/") > -1 && (s = s.substr(0, s.length - 1)), s += "_index/";
                                n.push({
                                    goToUrl: s,
                                    imgPath: i[o].pageAdFileName
                                })
                            }
                            e.topSwiperOpt.isLink = !0, e.topSwiperOpt.items = n, e.topSwiperOpt.gotoUrlByCarousel = function(e) {
                                e && this.gotoUrlByChannel(e, "")
                            }, e.isShowTopSwiper = !0
                        } else e.$root.isHasSwiper = e.isClient ? "02" : "01"
                    })
                },
                goSearchWarePage: function() {
                    this.gotoUrlByChannel(this.searchUrl + encodeURIComponent(encodeURIComponent("流量加油包")), "搜索页")
                },
                goLoginPage: function() {
                    "02" == this.$root.isLogin ? this.gotoUrlByChannel("/module/myAccount.html", "我的积分", "noRootUrl") : a.default.toLogin()
                },
                setCoverOpacity: function() {
                    if ("00" == this.$root.isHasSwiper) {
                        var e = document.getElementById("index-header-search"),
                            t = window.screen.width,
                            i = (t > this.maxScreenWidth ? .4 * this.maxScreenWidth : .4 * t) - e.offsetHeight,
                            n = r.default.getScrollTop();
                        document.getElementById("search-box-cover").style.opacity = n / i > 1 ? 1 : n / i
                    }
                }
            },
            created: function() {
                this.getAdInfo()
            },
            mounted: function() {
                window.addEventListener("scroll", this.setCoverOpacity), window.addEventListener("resize", this.setCoverOpacity)
            },
            destroyed: function() {
                window.removeEventListener("scroll", this.setCoverOpacity), window.addEventListener("resize", this.setCoverOpacity)
            }
        }
    },
    438: function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = {
            hotExchangeList: [{
                adImgPath: i(898),
                forwardUrl: "/module/newActivity.html#/outlink/mglove/isIndex",
                title: "咪咕"
            }, {
                adImgPath: i(884),
                forwardUrl: "/module/newActivity.html#/outlink/khjlb/isIndex",
                title: "中国移动客户俱乐部"
            }, {
                adImgPath: i(896),
                forwardUrl: "/module/newActivity.html#/outlink/zywl/isIndex",
                title: "中国移动物联网"
            }, {
                adImgPath: i(897),
                forwardUrl: "/module/newActivity.html#/outlink/hfty/isIndex",
                title: "讯飞"
            }],
            floorInfoList: [{
                floorInfo: {
                    floorId: "100000000000001",
                    floorName: "用心之选",
                    floorNameImg: i(863),
                    floorAdImg: i(868),
                    floorAdTitle: "",
                    showTemplateType: "001",
                    recommendId: "100000000040008",
                    recommendName: "洗护/保健",
                    recommendType: "001"
                },
                floorRLts: [{
                    showPicFile: i(869),
                    recommendId: "100000000040003",
                    recommendName: "家居/家纺/家装/厨具",
                    recommendType: "001"
                }, {
                    showPicFile: i(870),
                    recommendId: "100000000040009",
                    recommendName: "汽车用品/运动户外",
                    recommendType: "001"
                }, {
                    showPicFile: i(871),
                    recommendId: "100000000040004",
                    recommendName: "母婴/玩具/童装/童靴",
                    recommendType: "001"
                }, {
                    showPicFile: i(872),
                    recommendId: "100000000040001",
                    recommendName: "家用电器",
                    recommendType: "001"
                }, {
                    showPicFile: i(873),
                    recommendId: "100000000040006",
                    recommendName: "手机数码/电脑办公",
                    recommendType: "001"
                }, {
                    showPicFile: i(874),
                    recommendId: "100000000040002",
                    recommendName: "服饰/鞋靴/箱包",
                    recommendType: "001"
                }, {
                    showPicFile: i(875),
                    recommendId: "100000000040010",
                    recommendName: "珠宝首饰/手表",
                    recommendType: "001"
                }]
            }, {
                floorInfo: {
                    floorId: "",
                    floorName: "品质生活",
                    floorNameImg: i(864),
                    floorAdImg: i(876),
                    floorAdTitle: "",
                    showTemplateType: "001",
                    recommendId: "100000000021816",
                    recommendName: "便民服务",
                    recommendType: "005"
                },
                floorRLts: [{
                    showPicFile: i(883),
                    recommendId: "100000000016813",
                    recommendName: "出行",
                    recommendType: "005"
                }, {
                    showPicFile: i(877),
                    recommendId: "100000000016012",
                    recommendName: "移动社交",
                    recommendType: "005"
                }, {
                    showPicFile: i(878),
                    recommendId: "100000000021812",
                    recommendName: "洗护服务",
                    recommendType: "005"
                }, {
                    showPicFile: i(879),
                    recommendId: "100000000021815",
                    recommendName: "运动健康",
                    recommendType: "005"
                }, {
                    showPicFile: i(880),
                    recommendId: "100000000021814",
                    recommendName: "休闲娱乐",
                    recommendType: "005"
                }, {
                    showPicFile: i(881),
                    recommendId: "100000000021014",
                    recommendName: "快递配送",
                    recommendType: "005"
                }, {
                    showPicFile: i(882),
                    recommendId: "100000000024412",
                    recommendName: "手机保障",
                    recommendType: "005"
                }]
            }],
            brandInfosList: [
                [{
                    picPath: i(844),
                    linkUrl: "/module/newActivity.html#/outlink/jfwapjoyoung/isIndex",
                    title: "九阳"
                }, {
                    picPath: i(852),
                    linkUrl: "/module/newActivity.html#/outlink/jfwapmidea/isIndex",
                    title: "美的"
                }, {
                    picPath: i(859),
                    linkUrl: "/module/newActivity.html#/outlink/jfwapmi/isIndex",
                    title: "MI小米"
                }, {
                    picPath: i(845),
                    linkUrl: "/module/newActivity.html#/outlink/jfwaplogi/isIndex",
                    title: "罗技"
                }, {
                    picPath: i(853),
                    linkUrl: "/module/newActivity.html#/outlink/jfwapsupor/isIndex",
                    title: "苏泊尔"
                }, {
                    picPath: i(854),
                    linkUrl: "/module/newActivity.html#/outlink/jfwaplanmoon/isIndex",
                    title: "蓝月亮"
                }, {
                    picPath: i(846),
                    linkUrl: "/module/newActivity.html#/outlink/jfwapzwilling/isIndex",
                    title: "双立人"
                }, {
                    picPath: i(847),
                    linkUrl: "/module/newActivity.html#/outlink/jfwapflyco/isIndex",
                    title: "飞科"
                }],
                [{
                    picPath: i(855),
                    linkUrl: "/module/newActivity.html#/outlink/jfwapkonka/isIndex",
                    title: "康佳"
                }, {
                    picPath: i(856),
                    linkUrl: "/module/newActivity.html#/outlink/jfwapasd/isIndex",
                    title: "爱仕达"
                }, {
                    picPath: i(848),
                    linkUrl: "/module/newActivity.html#/outlink/jfwapbed/isIndex",
                    title: "被窝窝"
                }, {
                    picPath: i(849),
                    linkUrl: "/module/newActivity.html#/outlink/jfwaplock/isIndex",
                    title: "乐扣乐扣"
                }, {
                    picPath: i(857),
                    linkUrl: "/module/newActivity.html#/outlink/jfwaplittlebear/isIndex",
                    title: "小熊"
                }, {
                    picPath: i(858),
                    linkUrl: "/module/newActivity.html#/outlink/jfwapzhuoyu/isIndex",
                    title: "卓御"
                }, {
                    picPath: i(850),
                    linkUrl: "/module/newActivity.html#/outlink/jfwaprelee/isIndex",
                    title: "Relee"
                }, {
                    picPath: i(851),
                    linkUrl: "/module/newActivity.html#/outlink/jfwapmeiling/isIndex",
                    title: "美菱"
                }]
            ]
        }
    },
    605: function(e, t) {},
    606: function(e, t) {},
    673: function(e, t) {},
    700: function(e, t) {},
    746: function(e, t) {},
    782: function(e, t) {},
    784: function(e, t) {},
    844: function(e, t, i) {
        e.exports = "https://m.jf.10086.cn/static/images/brand-1.fc35887.jpg"
    },
    845: function(e, t, i) {
        e.exports = "https://m.jf.10086.cn/static/images/brand-10.42e4053.jpg"
    },
    846: function(e, t, i) {
        e.exports = "https://m.jf.10086.cn/static/images/brand-11.3380004.jpg"
    },
    847: function(e, t, i) {
        e.exports = "https://m.jf.10086.cn/static/images/brand-12.a6debf1.jpg"
    },
    848: function(e, t, i) {
        e.exports = "https://m.jf.10086.cn/static/images/brand-13.9288a9f.jpg"
    },
    849: function(e, t, i) {
        e.exports = "https://m.jf.10086.cn/static/images/brand-14.5cbe006.jpg"
    },
    850: function(e, t, i) {
        e.exports = "https://m.jf.10086.cn/static/images/brand-15.f8b8208.jpg"
    },
    851: function(e, t, i) {
        e.exports = "https://m.jf.10086.cn/static/images/brand-16.925e6ef.jpg"
    },
    852: function(e, t, i) {
        e.exports = "https://m.jf.10086.cn/static/images/brand-2.8b560d6.jpg"
    },
    853: function(e, t, i) {
        e.exports = "https://m.jf.10086.cn/static/images/brand-3.2e034a3.jpg"
    },
    854: function(e, t, i) {
        e.exports = "https://m.jf.10086.cn/static/images/brand-4.2f16ce4.jpg"
    },
    855: function(e, t, i) {
        e.exports = "https://m.jf.10086.cn/static/images/brand-5.bafe604.jpg"
    },
    856: function(e, t, i) {
        e.exports = "https://m.jf.10086.cn/static/images/brand-6.033ee82.jpg"
    },
    857: function(e, t, i) {
        e.exports = "https://m.jf.10086.cn/static/images/brand-7.107eaf4.jpg"
    },
    858: function(e, t, i) {
        e.exports = "https://m.jf.10086.cn/static/images/brand-8.8f5d583.jpg"
    },
    859: function(e, t, i) {
        e.exports = "https://m.jf.10086.cn/static/images/brand-9.75f3494.jpg"
    },
    860: function(e, t, i) {
        e.exports = "https://m.jf.10086.cn/static/images/discharge.b5820ad.png"
    },
    861: function(e, t, i) {
        e.exports = "https://m.jf.10086.cn/static/images/dischargeBlue.56b855d.png"
    },
    862: function(e, t, i) {
        e.exports = "https://m.jf.10086.cn/static/images/floor-title01.6912fbb.png"
    },
    863: function(e, t, i) {
        e.exports = "https://m.jf.10086.cn/static/images/floor-title02.167a73f.png"
    },
    864: function(e, t, i) {
        e.exports = "https://m.jf.10086.cn/static/images/floor-title03.28d6098.png"
    },
    865: function(e, t, i) {
        e.exports = "https://m.jf.10086.cn/static/images/floor-title04.2b1602b.png"
    },
    866: function(e, t, i) {
        e.exports = "https://m.jf.10086.cn/static/images/floor00-main.90b8d24.jpg"
    },
    867: function(e, t, i) {
        e.exports = "https://m.jf.10086.cn/static/images/floor00-strict.448a7ac.jpg"
    },
    868: function(e, t, i) {
        e.exports = "https://m.jf.10086.cn/static/images/floor01-main.a872fad.jpg"
    },
    869: function(e, t, i) {
        e.exports = "https://m.jf.10086.cn/static/images/floor01-scroll01.aa3e635.jpg"
    },
    870: function(e, t, i) {
        e.exports = "https://m.jf.10086.cn/static/images/floor01-scroll02.040e897.jpg"
    },
    871: function(e, t, i) {
        e.exports = "https://m.jf.10086.cn/static/images/floor01-scroll03.93c5207.jpg"
    },
    872: function(e, t, i) {
        e.exports = "https://m.jf.10086.cn/static/images/floor01-scroll04.b3ec9ad.jpg"
    },
    873: function(e, t, i) {
        e.exports = "https://m.jf.10086.cn/static/images/floor01-scroll05.3af1ab4.jpg"
    },
    874: function(e, t, i) {
        e.exports = "https://m.jf.10086.cn/static/images/floor01-scroll06.c353ad6.jpg"
    },
    875: function(e, t, i) {
        e.exports = "https://m.jf.10086.cn/static/images/floor01-scroll07.83163d2.jpg"
    },
    876: function(e, t, i) {
        e.exports = "https://m.jf.10086.cn/static/images/floor02-main.9cbb487.jpg"
    },
    877: function(e, t, i) {
        e.exports = "https://m.jf.10086.cn/static/images/floor02-scroll01.0be03dc.jpg"
    },
    878: function(e, t, i) {
        e.exports = "https://m.jf.10086.cn/static/images/floor02-scroll02.f2ce584.jpg"
    },
    879: function(e, t, i) {
        e.exports = "https://m.jf.10086.cn/static/images/floor02-scroll03.46c6cb7.jpg"
    },
    880: function(e, t, i) {
        e.exports = "https://m.jf.10086.cn/static/images/floor02-scroll04.e513f27.jpg"
    },
    881: function(e, t, i) {
        e.exports = "https://m.jf.10086.cn/static/images/floor02-scroll05.f1d3d34.jpg"
    },
    882: function(e, t, i) {
        e.exports = "https://m.jf.10086.cn/static/images/floor02-scroll06.9789a4b.jpg"
    },
    883: function(e, t, i) {
        e.exports = "https://m.jf.10086.cn/static/images/floor02-scroll07.981070e.jpg"
    },
    884: function(e, t, i) {
        e.exports = "https://m.jf.10086.cn/static/images/index-club.2eea034.jpg"
    },
    885: function(e, t, i) {
        e.exports = "https://m.jf.10086.cn/static/images/index-head-logo.0caafb3.png"
    },
    886: function(e, t, i) {
        e.exports = "https://m.jf.10086.cn/static/images/index-icon01.70cfd12.png"
    },
    887: function(e, t, i) {
        e.exports = "https://m.jf.10086.cn/static/images/index-icon02.cec3d9b.png"
    },
    888: function(e, t, i) {
        e.exports = "https://m.jf.10086.cn/static/images/index-icon03.d65b022.png"
    },
    889: function(e, t, i) {
        e.exports = "https://m.jf.10086.cn/static/images/index-icon04.67adab8.png"
    },
    890: function(e, t, i) {
        e.exports = "https://m.jf.10086.cn/static/images/index-icon05.4cc0160.png"
    },
    891: function(e, t, i) {
        e.exports = "https://m.jf.10086.cn/static/images/index-icon06.daa6aa0.png"
    },
    892: function(e, t, i) {
        e.exports = "https://m.jf.10086.cn/static/images/index-icon07.fd421f1.png"
    },
    893: function(e, t, i) {
        e.exports = "https://m.jf.10086.cn/static/images/index-icon08.c51021a.png"
    },
    894: function(e, t, i) {
        e.exports = "https://m.jf.10086.cn/static/images/index-icon09.404755d.png"
    },
    895: function(e, t, i) {
        e.exports = "https://m.jf.10086.cn/static/images/index-icon10.5be7ec4.png"
    },
    896: function(e, t, i) {
        e.exports = "https://m.jf.10086.cn/static/images/index-oneNet.586e86b.jpg"
    },
    897: function(e, t, i) {
        e.exports = "https://m.jf.10086.cn/static/images/index-toycloud.db54217.jpg"
    },
    898: function(e, t, i) {
        e.exports = "https://m.jf.10086.cn/static/images/migu-index.c8fc675.jpg"
    },
    899: function(e, t, i) {
        e.exports = "https://m.jf.10086.cn/static/images/navGift.d598228.png"
    },
    900: function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAAcCAYAAAD815boAAADgklEQVRYhcWXW4iVZRSGn7xICsMog6KBuQyN6i0iSrSZjgYWQoXkdNAosMaLSI2OJBUY0fEqK4tOdqDDTUEZmlBDFJ1mCZVKRQh2E0k3gRTVxBreP7528+/+f/aeWlf7W99hPXt9h/X+B01MTNDWIqLbjLXAK8C+ugGSWkWc1Zqw3o4DPgEeBHYCZ/dr4X5B3g/sBk51+wjgXeAlYE6vi/cKeTLwAbDe7W3AmcAmty8DdgEX/F+Qmb3PgYXAH8AVwPnAGDAKLAL2AgPA28CrwCH/CWREnAS8V2Qvf88HXugYmhleALzo9qXO6nltY7a63RGxEbi1cF0NPNNg6pD/xLFuvwyslPRr3yAjYjFwF3CWXW8a9ssmQWyHAfcB17v9LXCzpNd7hoyIhLuzcK0GnmgB12lDzuTR9m8BVkn6vW5C7ZmMiIURsa0AfCtvs6ReACnO8Ga388J9FREX102YMpMRcQdwT+EalbSp6O+Jsqo4EXGuL9ZR7noWuKYzq3/LZEQMR8RYAfgacEIJ2E+TtN2V6gEvuxLYExFXlWH+ymRE3ALcW/TdKOmRqZj6lcmONZf4BTjSrqckXTsJOT4+vso37jR3vgFskFRL0gXyGOB2C4z320B63QS8zSIFF4MnZ7kyVID5JCzrBtjFluYFANb4cqxpu4Ck/ZLWARcCPwGDwPLJ7Y6IhPxF0s4mi3Vkcl7+W2CZ2z8XouJj4DpgvAOmSYxcd76ksV715BK/c/PczupzE3Al8FAxJUEfbwNZ2nQFxuG++VsN+DUw7DL5I/Cw38J3PP4x4EPgxOkEm47AuMhC4RK7ngaO9zksbbcl2gbgN+B0i+HRtjEbb3dEzPHWVmcvb94KZ+jfbMBH4RyPS9jLJTWq/Y0yGRFLnb0K8HnLsCaA+Hsnq8vdQFaTlHtfRMTqJpO7ZjIiDgWeK7b2e2Ck2xvYwAZd/oY8NIXziKQ9dVO7CYwRv3sVYB7+BZJ6AUzbK2nYj/YB4BQLjPV1E/6RyYiY7ewtt+uHPHuSdhRjeqIsBMaAP9YWuetTx/qmHN8pMKoPpwpwsx/UHcyASdonabFL6QF/be6KiLVltKrizPZTssL+/anzJG2dCm2GBMags3qGXR/5rH6XAiOV9w3AXHdmpdiYdbQuyExAFmvnO5rF4GC7tlTbnYBZc1NcrOsGONMm6VFXq88mY8HcPwGweT4MO0lGtwAAAABJRU5ErkJggg=="
    },
    901: function(e, t, i) {
        e.exports = "https://m.jf.10086.cn/static/images/telRecharge.be6cc77.png"
    },
    902: function(e, t, i) {
        e.exports = "https://m.jf.10086.cn/static/images/telRechargeBlue.114c6b0.png"
    },
    2150: function(e, t, i) {
        i(673);
        var n = i(2)(i(246), i(2407), null, null);
        e.exports = n.exports
    },
    2156: function(e, t, i) {
        i(784);
        var n = i(2)(i(252), i(2531), null, null);
        e.exports = n.exports
    },
    2195: function(e, t, i) {
        i(606);
        var n = i(2)(i(292), i(2341), null, null);
        e.exports = n.exports
    },
    2196: function(e, t, i) {
        i(782);
        var n = i(2)(i(293), i(2529), null, null);
        e.exports = n.exports
    },
    2197: function(e, t, i) {
        i(700);
        var n = i(2)(i(294), i(2432), null, null);
        e.exports = n.exports
    },
    2198: function(e, t, i) {
        i(746);
        var n = i(2)(i(295), i(2485), null, null);
        e.exports = n.exports
    },
    2341: function(e, t) {
        e.exports = {
            render: function() {
                var e = this.$createElement,
                    t = this._self._c || e;
                return t("div", {
                    staticClass: "pageBox"
                }, [t("div", {
                    staticClass: "index",
                    attrs: {
                        id: "indexPage"
                    }
                }, [t("top-swiper"), this._v(" "), t("nav-list", {
                    on: {
                        mobileShow: this.changeIndex
                    }
                }), this._v(" "), t("index-content", {
                    attrs: {
                        openMobile: this.mobileInfo
                    }
                })], 1), this._v(" "), t("com-foot", this._b({}, "com-foot", this.footInfo, !1)), this._v(" "), t("msg-box", this._b({
                    ref: "msgbox"
                }, "msg-box", this.msgInfo, !1))], 1)
            },
            staticRenderFns: []
        }
    },
    2407: function(e, t) {
        e.exports = {
            render: function() {
                var e = this,
                    t = e.$createElement,
                    i = e._self._c || t;
                return i("div", [i("swiper", {
                    ref: "comSwiper",
                    attrs: {
                        options: e.swiperOption
                    }
                }, e._l(e.brandInfosList, function(t, n) {
                    return i("swiper-slide", [i("ul", {
                        staticClass: "container clearfix"
                    }, e._l(t, function(e, t) {
                        return i("li", {
                            attrs: {
                                name: n + "," + t,
                                onclick: "multilSwiper.go(event)"
                            }
                        }, [i("img", {
                            attrs: {
                                src: e.picPath
                            }
                        })])
                    }))])
                }))], 1)
            },
            staticRenderFns: []
        }
    },
    2432: function(e, t, i) {
        e.exports = {
            render: function() {
                var e = this,
                    t = e.$createElement,
                    i = e._self._c || t;
                return i("div", [i("nav", {
                    staticClass: "SortBtn",
                    class: {
                        noSwiperHead: "00" != e.$root.isHasSwiper
                    }
                }, [i("ul", {
                    staticClass: "wid675 clearfix"
                }, [i("li", {
                    on: {
                        click: function(t) {
                            e.gotoUrl(e.category, "礼品类目页", 1)
                        }
                    }
                }, [e._m(0), e._v(" "), e._m(1)]), e._v(" "), i("li", {
                    on: {
                        click: function(t) {
                            e.gotoUrl(e.wareRankList, "兑换排行榜", 2)
                        }
                    }
                }, [e._m(2), e._v(" "), e._m(3)]), e._v(" "), i("li", {
                    on: {
                        click: function(t) {
                            e.gotoUrl(e.searchMyExchangeWareInfo, "我能兑换的礼品", 3, !0)
                        }
                    }
                }, [e._m(4), e._v(" "), e._m(5)]), e._v(" "), i("li", {
                    on: {
                        click: function(t) {
                            e.gotoUrl(e.myAccount, "我的账户", 4, !1, "noRootUrl")
                        }
                    }
                }, [e._m(6), e._v(" "), e._m(7)]), e._v(" "), i("li", {
                    on: {
                        click: function(t) {
                            e.gotoUrl(e.potence, "星享权益专区", 9)
                        }
                    }
                }, [e._m(8), e._v(" "), e._m(9)])]), e._v(" "), i("ul", {
                    staticClass: "wid675 clearfix"
                }, [i("li", {
                    on: {
                        click: function(t) {
                            e.gotoUrl(e.brandArea, "品牌专区", 5)
                        }
                    }
                }, [e._m(10), e._v(" "), e._m(11)]), e._v(" "), i("li", {
                    on: {
                        click: function(t) {
                            e.gotoUrl(e.discount, "折扣专区", 6)
                        }
                    }
                }, [e._m(12), e._v(" "), e._m(13)]), e._v(" "), i("li", {
                    on: {
                        click: function(t) {
                            e.gotoUrl(e.exchange, "积分互换", 7)
                        }
                    }
                }, [e._m(14), e._v(" "), e._m(15)]), e._v(" "), i("li", {
                    on: {
                        click: function(t) {
                            e.gotoUrl(e.digitalLife, "乐享生活", 8, !1, "noRootUrl")
                        }
                    }
                }, [e._m(16), e._v(" "), e._m(17)]), e._v(" "), i("li", {
                    on: {
                        click: e.showMobile
                    }
                }, [e._m(18), e._v(" "), e._m(19)])])])])
            },
            staticRenderFns: [
                function() {
                    var e = this.$createElement,
                        t = this._self._c || e;
                    return t("div", [t("span", [t("img", {
                        attrs: {
                            src: i(886),
                            alt: ""
                        }
                    })])])
                },
                function() {
                    var e = this.$createElement,
                        t = this._self._c || e;
                    return t("p", [t("a", {
                        attrs: {
                            href: "javascript:void(0);"
                        }
                    }, [this._v("礼品分类")])])
                },
                function() {
                    var e = this.$createElement,
                        t = this._self._c || e;
                    return t("div", [t("span", [t("img", {
                        attrs: {
                            src: i(887),
                            alt: ""
                        }
                    })])])
                },
                function() {
                    var e = this.$createElement,
                        t = this._self._c || e;
                    return t("p", [t("a", {
                        attrs: {
                            href: "javascript:void(0);"
                        }
                    }, [this._v("兑换排行")])])
                },
                function() {
                    var e = this.$createElement,
                        t = this._self._c || e;
                    return t("div", [t("span", [t("img", {
                        attrs: {
                            src: i(888),
                            alt: ""
                        }
                    })])])
                },
                function() {
                    var e = this.$createElement,
                        t = this._self._c || e;
                    return t("p", [t("a", {
                        attrs: {
                            href: "javascript:void(0);"
                        }
                    }, [this._v("我能兑换")])])
                },
                function() {
                    var e = this.$createElement,
                        t = this._self._c || e;
                    return t("div", [t("span", [t("img", {
                        attrs: {
                            src: i(889),
                            alt: ""
                        }
                    })])])
                },
                function() {
                    var e = this.$createElement,
                        t = this._self._c || e;
                    return t("p", [t("a", {
                        attrs: {
                            href: "javascript:void(0);"
                        }
                    }, [this._v("我的账户")])])
                },
                function() {
                    var e = this.$createElement,
                        t = this._self._c || e;
                    return t("div", [t("span", [t("img", {
                        attrs: {
                            src: i(894),
                            alt: ""
                        }
                    })])])
                },
                function() {
                    var e = this.$createElement,
                        t = this._self._c || e;
                    return t("p", [t("a", {
                        attrs: {
                            href: "javascript:void(0);"
                        }
                    }, [this._v("权益专区")])])
                },
                function() {
                    var e = this.$createElement,
                        t = this._self._c || e;
                    return t("div", [t("span", [t("img", {
                        attrs: {
                            src: i(890),
                            alt: ""
                        }
                    })])])
                },
                function() {
                    var e = this.$createElement,
                        t = this._self._c || e;
                    return t("p", [t("a", {
                        attrs: {
                            href: "javascript:void(0);"
                        }
                    }, [this._v("品牌专区")])])
                },
                function() {
                    var e = this.$createElement,
                        t = this._self._c || e;
                    return t("div", [t("span", [t("img", {
                        attrs: {
                            src: i(891),
                            alt: ""
                        }
                    })])])
                },
                function() {
                    var e = this.$createElement,
                        t = this._self._c || e;
                    return t("p", [t("a", {
                        attrs: {
                            href: "javascript:void(0);"
                        }
                    }, [this._v("折扣专区")])])
                },
                function() {
                    var e = this.$createElement,
                        t = this._self._c || e;
                    return t("div", [t("span", [t("img", {
                        attrs: {
                            src: i(892),
                            alt: ""
                        }
                    })])])
                },
                function() {
                    var e = this.$createElement,
                        t = this._self._c || e;
                    return t("p", [t("a", {
                        attrs: {
                            href: "javascript:void(0);"
                        }
                    }, [this._v("积分互换")])])
                },
                function() {
                    var e = this.$createElement,
                        t = this._self._c || e;
                    return t("div", [t("span", [t("img", {
                        attrs: {
                            src: i(893),
                            alt: ""
                        }
                    })])])
                },
                function() {
                    var e = this.$createElement,
                        t = this._self._c || e;
                    return t("p", [t("a", {
                        attrs: {
                            href: "javascript:void(0);"
                        }
                    }, [this._v("乐享生活")])])
                },
                function() {
                    var e = this.$createElement,
                        t = this._self._c || e;
                    return t("div", [t("span", [t("img", {
                        attrs: {
                            src: i(895),
                            alt: ""
                        }
                    })])])
                },
                function() {
                    var e = this.$createElement,
                        t = this._self._c || e;
                    return t("p", [t("a", {
                        attrs: {
                            href: "javascript:void(0);"
                        }
                    }, [this._v("移动专区")])])
                }
            ]
        }
    },
    2485: function(e, t, i) {
        e.exports = {
            render: function() {
                var e = this,
                    t = e.$createElement,
                    i = e._self._c || t;
                return i("div", [i("div", {
                    staticClass: "index-header-search",
                    attrs: {
                        id: "index-header-search"
                    }
                }, [i("div", {
                    staticClass: "search-box-cover",
                    class: {
                        cHeadColor: "01" == e.$root.isHasSwiper,
                        aHeadColor: "02" == e.$root.isHasSwiper
                    },
                    attrs: {
                        id: "search-box-cover"
                    }
                }), e._v(" "), i("div", {
                    staticClass: "search-content"
                }, [e._m(0), e._v(" "), i("p", {
                    on: {
                        click: function(t) {
                            e.goSearchWarePage()
                        }
                    }
                }, [i("input", {
                    attrs: {
                        type: "text",
                        value: "",
                        placeholder: "流量加油包",
                        disabled: "disabled"
                    }
                })]), e._v(" "), !e.isClient || e.$root.checkLoginSwitch ? i("span", {
                    staticClass: "hideBtn",
                    class: {
                        "head-logined": "02" == e.$root.isLogin,
                        "head-login": "01" == e.$root.isLogin,
                        aLoginColor: "02" == e.$root.isHasSwiper
                    },
                    on: {
                        click: function(t) {
                            e.goLoginPage()
                        }
                    }
                }, [e._v("登录")]) : e._e()])]), e._v(" "), e.isShowTopSwiper ? i("com-swiper", e._b({
                    staticClass: "bitmap bitmap750-300"
                }, "com-swiper", e.topSwiperOpt, !1)) : e._e()], 1)
            },
            staticRenderFns: [
                function() {
                    var e = this.$createElement,
                        t = this._self._c || e;
                    return t("span", {
                        staticClass: "head-logo"
                    }, [t("img", {
                        attrs: {
                            src: i(885)
                        }
                    })])
                }
            ]
        }
    },
    2529: function(e, t, i) {
        e.exports = {
            render: function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", [e.bulletinList.length > 0 ? n("div", {
                    staticClass: "bulle"
                }, [n("a", {
                    staticClass: "bulle-logo",
                    attrs: {
                        href: "javascript:void(0);"
                    },
                    on: {
                        click: function(t) {
                            e.goBulleListPage()
                        }
                    }
                }, [e._v("公告")]), e._v(" "), n("div", {
                    staticClass: "bulle-scroll"
                }, [n("ul", {
                    class: {
                        "bulle-animate": e.bulleAnimate
                    },
                    attrs: {
                        id: "scroll-news"
                    }
                }, e._l(e.bulletinList, function(t, i) {
                    return n("li", {
                        key: i,
                        on: {
                            click: function(i) {
                                e.goBulleDetailPage(t.BULLETIN_ID)
                            }
                        }
                    }, [n("p", {
                        attrs: {
                            name: "bulle.BULLETIN_ID"
                        }
                    }, [e._v(e._s(t.BULLETIN_TITLE))])])
                }))]), e._v(" "), n("a", {
                    staticClass: "bulle-more",
                    attrs: {
                        href: "javascript:void(0);"
                    },
                    on: {
                        click: function(t) {
                            e.goBulleListPage()
                        }
                    }
                }, [e._v("更多")])]) : e._e(), e._v(" "), [e._m(0), e._v(" "), n("div", {
                    staticClass: "iconChoose"
                }, [n("a", {
                    attrs: {
                        href: "javascript:void(0);"
                    },
                    on: {
                        click: e.changeTel
                    }
                }, [n("img", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: !e.chargeMsg.telBtn,
                        expression: "!chargeMsg.telBtn"
                    }],
                    attrs: {
                        src: i(901),
                        alt: ""
                    }
                }), n("img", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: e.chargeMsg.telBtn,
                        expression: "chargeMsg.telBtn"
                    }],
                    attrs: {
                        src: i(902),
                        alt: ""
                    }
                })]), e._v(" "), n("a", {
                    attrs: {
                        href: "javascript:void(0);"
                    },
                    on: {
                        click: e.changeFlow
                    }
                }, [n("img", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: !e.chargeMsg.flowBtn,
                        expression: "!chargeMsg.flowBtn"
                    }],
                    attrs: {
                        src: i(860),
                        alt: ""
                    }
                }), n("img", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: e.chargeMsg.flowBtn,
                        expression: "chargeMsg.flowBtn"
                    }],
                    attrs: {
                        src: i(861),
                        alt: ""
                    }
                })]), e._v(" "), n("span")]), e._v(" "), n("div", {
                    staticClass: "slideShow",
                    style: {
                        height: e.changeHeight
                    }
                }, [n("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: e.chargeMsg.flowModal,
                        expression: "chargeMsg.flowModal"
                    }],
                    staticClass: "flowShow"
                }, [n("span", [e._v("请选择充值流量:")]), e._v(" "), n("div", {
                    staticClass: "mobileList clearfix"
                }, e._l(e.flowValues, function(t, i) {
                    return n("a", {
                        key: i,
                        staticClass: "count fl",
                        class: {
                            blue: i == e.chargeMsg.flowIndex
                        },
                        attrs: {
                            href: "javascript:void(0);"
                        },
                        on: {
                            click: function(n) {
                                e.chooseFlow(i, n, t.wareId)
                            }
                        }
                    }, [e._v(e._s(t.flow) + "M")])
                })), e._v(" "), n("div", {
                    staticClass: "btnGroup marginTop3 clearfix"
                }, [n("a", {
                    staticClass: "fl btnLeft",
                    attrs: {
                        href: "javascript:void(0);"
                    },
                    on: {
                        click: e.exchange
                    }
                }, [e._v("立即兑换")]), e._v(" "), n("a", {
                    staticClass: "fl btnRight",
                    attrs: {
                        href: "javascript:void(0);"
                    },
                    on: {
                        click: e.checkAllGift
                    }
                }, [e._v("查看全部礼品")])])]), e._v(" "), n("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: e.chargeMsg.telModal,
                        expression: "chargeMsg.telModal"
                    }],
                    staticClass: "telShow"
                }, [n("div", {
                    staticClass: "telShowTitle"
                }, [n("span", [e._v("请输入兑换金额")]), e._v(" "), n("p", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: e.chargeMsg.msgShow,
                        expression: "chargeMsg.msgShow"
                    }]
                }, [e._v(e._s(e.chargeMsg.promptMsg))]), e._v(" "), n("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: e.currentInput,
                        expression: "currentInput"
                    }],
                    attrs: {
                        type: "text"
                    },
                    domProps: {
                        value: e.currentInput
                    },
                    on: {
                        focus: function(t) {
                            e.chargeMsg.msgShow = !1, e.chargeMsg.telIndex = "-1"
                        },
                        blur: e.changeRealNum,
                        input: function(t) {
                            t.target.composing || (e.currentInput = t.target.value)
                        }
                    }
                }), e._v(" "), n("i", [e._v("元")])]), e._v(" "), n("div", {
                    staticClass: "mobileList clearfix"
                }, e._l(e.amountM, function(t, i) {
                    return n("a", {
                        key: i,
                        staticClass: "count fl",
                        class: {
                            blue: i == e.chargeMsg.telIndex
                        },
                        attrs: {
                            href: "javascript:void(0);"
                        },
                        on: {
                            click: function(t) {
                                e.chooseTel(i, t)
                            }
                        }
                    }, [e._v(e._s(t) + "元")])
                })), e._v(" "), n("div", {
                    staticClass: "text"
                }, [n("p", [e._v("使用:"), n("i", [e._v(e._s(e.currentAccount))]), e._v("积分")])]), e._v(" "), n("div", {
                    staticClass: "btnGroup clearfix"
                }, [n("a", {
                    staticClass: "fl btnLeft",
                    attrs: {
                        href: "javascript:void(0);"
                    },
                    on: {
                        click: function(t) {
                            e.goOrder(e.currentAccount, "01")
                        }
                    }
                }, [e._v("立即兑换")]), e._v(" "), n("a", {
                    staticClass: "fl btnRight",
                    staticStyle: {
                        border: "1px solid #f5f5f5",
                        background: "#f5f5f5",
                        cursor: "default",
                        color: "#949494"
                    },
                    attrs: {
                        href: "javascript:void(0);"
                    }
                }, [e._v("转赠")])])]), e._v(" "), n("a", {
                    staticClass: "slideUp",
                    attrs: {
                        href: "javascript:void(0);"
                    },
                    on: {
                        click: e.closeModal
                    }
                }, [n("img", {
                    staticStyle: {
                        width: "100%"
                    },
                    attrs: {
                        src: i(900),
                        alt: ""
                    }
                })])])], e._v(" "), e.isNative ? n("div", {
                    staticClass: "nativeGift"
                }, [n("a", {
                    attrs: {
                        href: "javascript:;"
                    },
                    on: {
                        click: function(t) {
                            e.goNative()
                        }
                    }
                }, [n("img", {
                    attrs: {
                        src: i(899),
                        alt: ""
                    }
                })])]) : e._e(), e._v(" "), e.showScoreSwiper ? n("div", {
                    staticClass: "jfValue"
                }, [n("h2", [e._v("按积分值浏览")]), e._v(" "), n("swiper", {
                    staticClass: "range",
                    attrs: {
                        options: e.scoreSwiperOpt
                    }
                }, e._l(e.scoreValInfo, function(t, i) {
                    return n("swiper-slide", {
                        key: i,
                        nativeOn: {
                            click: function(i) {
                                e.goSearchByValue(t)
                            }
                        }
                    }, [n("span", [e._v(e._s(e._f("formatScore")(t, t)))])])
                }))], 1) : e._e(), e._v(" "), [n("div", {
                    staticClass: "floor"
                }, [n("ul", {
                    staticClass: "floor-hot-ad"
                }, [n("li", {
                    staticClass: "bitmap bitmap750-240",
                    on: {
                        click: function(t) {
                            e.gotoUrlByChannel("/module/newActivity.html#/outlink/helpfarmers/isIndex", "爱心助农积分购")
                        }
                    }
                }, [n("img", {
                    attrs: {
                        src: i(866),
                        alt: ""
                    }
                })])])])], e._v(" "), e.hotExchangeList.length > 0 ? [n("div", {
                    staticClass: "floor"
                }, [e._m(1), e._v(" "), n("ul", {
                    staticClass: "floor-hot-ad"
                }, e._l(e.hotExchangeList, function(t, i) {
                    return n("li", {
                        key: i,
                        staticClass: "bitmap bitmap750-240",
                        on: {
                            click: function(n) {
                                e.goTopicPage(t.forwardUrl, t.title, i)
                            }
                        }
                    }, [n("img", {
                        directives: [{
                            name: "lazy",
                            rawName: "v-lazy",
                            value: t.adImgPath,
                            expression: "hotArea.adImgPath"
                        }],
                        attrs: {
                            alt: ""
                        }
                    })])
                }))])] : e._e(), e._v(" "), e.floorInfoList.length > 0 ? e._l(e.floorInfoList, function(t, i) {
                    return n("section", {
                        key: i
                    }, ["001" == t.floorInfo.showTemplateType ? n("div", {
                        staticClass: "floor floor-type01"
                    }, [n("div", {
                        staticClass: "floor-title"
                    }, [n("span", [n("img", {
                        attrs: {
                            src: t.floorInfo.floorNameImg,
                            alt: "floor.floorInfo.floorName"
                        }
                    })])]), e._v(" "), n("a", {
                        staticClass: "floor-ad bitmap bitmap750-300",
                        attrs: {
                            href: "javascript:void(0);"
                        },
                        on: {
                            click: function(i) {
                                e.gotoRecommendPage(t.floorInfo.recommendType, t.floorInfo.recommendId, t.floorInfo.recommendName, -1)
                            }
                        }
                    }, [n("img", {
                        directives: [{
                            name: "lazy",
                            rawName: "v-lazy",
                            value: t.floorInfo.floorAdImg,
                            expression: "floor.floorInfo.floorAdImg"
                        }],
                        attrs: {
                            alt: "floor.floorInfo.floorAdTitle"
                        }
                    })]), e._v(" "), n("swiper", {
                        staticClass: "floor-scroll bitmapBGTColor bitmap750-180",
                        attrs: {
                            options: e.floorSwiperOpt
                        }
                    }, e._l(t.floorRLts, function(t, i) {
                        return n("swiper-slide", {
                            key: i,
                            nativeOn: {
                                click: function(n) {
                                    e.gotoRecommendPage(t.recommendType, t.recommendId, t.recommendName, i)
                                }
                            }
                        }, [n("a", {
                            staticClass: "bitmap bitmap330-180",
                            attrs: {
                                href: "javascript:void(0);"
                            }
                        }, [n("img", {
                            directives: [{
                                name: "lazy",
                                rawName: "v-lazy",
                                value: t.showPicFile,
                                expression: "rlt.showPicFile"
                            }],
                            attrs: {
                                alt: ""
                            }
                        })])])
                    }))], 1) : e._e()])
                }) : e._e(), e._v(" "), n("div", [e._m(2), e._v(" "), n("multiline-swiper", e._b({}, "multiline-swiper", e.multLintSwiperOpt, !1))], 1), e._v(" "), n("div", {
                    staticClass: "floor-strict"
                }, [n("a", {
                    attrs: {
                        href: "javascript:void(0);"
                    },
                    on: {
                        click: function(t) {
                            e.gotoUrlByChannel("/module/wareList.html#/ware/searchWareInfoByMkind/////100000000029212//////", "网易严选")
                        }
                    }
                }, [n("img", {
                    attrs: {
                        src: i(867),
                        alt: ""
                    }
                })])]), e._v(" "), e.guessLikeInfos.length > 0 ? n("div", {
                    staticClass: "guessLike"
                }, [e._m(3), e._v(" "), n("div", {
                    staticClass: "imgList clearfix"
                }, [n("ul", e._l(e.guessLikeInfos, function(t, i) {
                    return n("li", {
                        key: i
                    }, [n("a", {
                        staticClass: "bitmap bitmap1-1",
                        attrs: {
                            href: "javascript:void(0);"
                        },
                        on: {
                            click: function(n) {
                                e.goWareDetailRecommend(t.wareId, "礼品详情", i)
                            }
                        }
                    }, [n("img", {
                        directives: [{
                            name: "lazy",
                            rawName: "v-lazy",
                            value: "/pic/ware/" + t.mainPicFile.replace(".jpg", "_480.jpg"),
                            expression: "'/pic/ware/' + guessLikeInfo.mainPicFile.replace('.jpg', '_480.jpg')"
                        }]
                    })]), e._v(" "), n("div", {
                        staticClass: "title",
                        on: {
                            click: function(n) {
                                e.goWareDetailRecommend(t.wareId, "礼品详情", i)
                            }
                        }
                    }, [e._v(e._s(t.wareName))]), e._v(" "), n("div", {
                        staticClass: "inter"
                    }, [n("span", {
                        staticClass: "price"
                    }, [n("i", [e._v(e._s(t.oriIntegral))]), e._v("积分")]), e._v(" "), !e.isClient || e.$root.checkLoginSwitch ? n("cite", {
                        class: {
                            like: 1 == t.isLikeWare,
                            unlike: 0 == t.isLikeWare
                        },
                        on: {
                            click: function(n) {
                                e.collect(i, t.isLikeWare, t.wareId)
                            }
                        }
                    }) : e._e()])])
                }))])]) : e._e(), e._v(" "), n("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: e.loading,
                        expression: "loading"
                    }],
                    staticClass: "list-state",
                    attrs: {
                        id: "loading"
                    }
                }, [e._m(4)]), e._v(" "), n("transition", {
                    attrs: {
                        name: "fade"
                    }
                }, [n("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: e.collectDialog.showDialog,
                        expression: "collectDialog.showDialog"
                    }],
                    staticClass: "collect-mask"
                }, [n("div", {
                    staticClass: "collect-dialog"
                }, [n("h2", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: e.collectDialog.showCloseBtn,
                        expression: "collectDialog.showCloseBtn"
                    }],
                    on: {
                        click: function(t) {
                            e.closeDialog()
                        }
                    }
                }), e._v(" "), n("div", {
                    staticClass: "content"
                }, [n("p", {
                    domProps: {
                        textContent: e._s(e.collectDialog.msg)
                    }
                }), e._v(" "), n("div", {
                    staticClass: "btn"
                }, [e.collectDialog.showLogin ? n("a", {
                    staticClass: "btnBuy",
                    on: {
                        click: function(t) {
                            e.goLogin()
                        }
                    }
                }, [e._v("登录")]) : e._e()])])])])]), e._v(" "), e.alertShow ? n("div", {
                    staticClass: "dialogTip"
                }, [n("p", [e._v("本服务由中国移动积分商城提供")])]) : e._e()], 2)
            },
            staticRenderFns: [
                function() {
                    var e = this.$createElement,
                        t = this._self._c || e;
                    return t("h2", {
                        staticClass: "title",
                        staticStyle: {
                            background: "#ffffff",
                            "padding-bottom": "0"
                        }
                    }, [t("span", [this._v("移动自有")])])
                },
                function() {
                    var e = this.$createElement,
                        t = this._self._c || e;
                    return t("div", {
                        staticClass: "floor-title"
                    }, [t("span", [t("img", {
                        attrs: {
                            src: i(862),
                            alt: ""
                        }
                    })])])
                },
                function() {
                    var e = this.$createElement,
                        t = this._self._c || e;
                    return t("div", {
                        staticClass: "brand-title"
                    }, [t("img", {
                        attrs: {
                            src: i(865),
                            alt: ""
                        }
                    })])
                },
                function() {
                    var e = this.$createElement,
                        t = this._self._c || e;
                    return t("h2", [t("span", [this._v("为您推荐")])])
                },
                function() {
                    var e = this.$createElement,
                        t = this._self._c || e;
                    return t("p", {
                        staticClass: "list-loading"
                    }, [t("img", {
                        staticStyle: {
                            width: "38px",
                            "vertical-align": "middle"
                        },
                        attrs: {
                            src: i(160),
                            alt: ""
                        }
                    }), this._v(" "), t("span", [this._v("加载中,请稍候")])])
                }
            ]
        }
    },
    2531: function(e, t) {
        e.exports = {
            render: function() {
                var e = this,
                    t = e.$createElement,
                    i = e._self._c || t;
                return i("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: e.isShowBox,
                        expression: "isShowBox"
                    }],
                    staticClass: "campusMask"
                }, [i("div", {
                    staticClass: "campusPopIndex"
                }, [i("a", {
                    staticClass: "campusClose",
                    attrs: {
                        href: "javascript:void(0);"
                    },
                    on: {
                        click: e.close
                    }
                }), e._v(" "), i("p", {
                    staticClass: "campusPop-text",
                    domProps: {
                        innerHTML: e._s(e.msg)
                    }
                }, [e._v("?")]), e._v(" "), i("div", {
                    staticClass: "btnBackLogin",
                    on: {
                        click: e.close
                    }
                }, [i("a", {
                    class: e.btnClass,
                    on: {
                        click: function(t) {
                            e.ok()
                        }
                    }
                }, [e._v(e._s(e.buttonText))]), e._v(" "), i("a", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: e.showCancel,
                        expression: "showCancel"
                    }],
                    staticClass: "btnBackTB",
                    class: e.btnClass,
                    on: {
                        click: function(t) {
                            e.cancel()
                        }
                    }
                }, [e._v(e._s(e.cancelText))])])])])
            },
            staticRenderFns: []
        }
    }
});