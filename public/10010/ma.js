(function() {
    var analytics = function () {
        var params = {};
        //Document对象数据
        if (document) {
            params.domain = document.domain || '';
            params.url = document.URL || '';
            params.title = document.title || '';
            params.referrer = document.referrer || '';
        }

        //Window对象数据
        if (window && window.screen) {
            params.sh = window.screen.height || 0;
            params.sw = window.screen.width || 0;
        }

        //navigator对象数据
        if (navigator) {
            params.lang = navigator.language || '';
            params.userAgent = navigator.userAgent || '';
        }

        params.t = (new Date()).valueOf();

        // 获取用户cookie中的cityid
        if (document.cookie.match(new RegExp('(^| )jfcity=([^;]*)(;|$)'))) {
            params.citycode = document.cookie.match(new RegExp('(^| )jfcity=([^;]*)(;|$)'))[2];
        } else {
            params.citycode = ''
        }

        if (document.cookie.match(new RegExp('(^| )jfuser=([^;]*)(;|$)'))) {
        	params.jfuser = document.cookie.match(new RegExp('(^| )jfuser=([^;]*)(;|$)'))[2];
        } else {
        	params.jfuser = ''
        }
        
        //拼接参数串
        var args = '';
        for (var i in params) {
            if (args != '') {
                args += '&';
            }
            args += i + '=' + encodeURIComponent(params[i]);
        }


        //通过Image对象请求后端脚本
        //var img1 = new Image(1, 1);
        var img2 = new Image(1, 1);
        //img1.src = 'http://114.251.172.66:7080/1.gif?' + args;
        img2.src = 'http://jf.10010.com/jf-log/1.gif?' + args;
    }

    
    //获取兄弟节点
    siblings = (o)=>{
	    let arr = [] ; //保存兄弟节点
	    let prev = o.previousSibling; //o的前一个同胞节点
	    //先往上查询兄弟节点
	    while(prev){
	        if(prev.nodeType == 1){
	            arr.unshift(prev);//数组首部插入数组，保证节点顺序
	        }
	        prev = prev.previousSibling;//把上一节点赋值给prev
	    }
	    //往下查询兄弟节点
	    let next = o.nextSibling;//o的后一个同胞节点
	    while(next){
	        if(next.nodeType == 1){
	            arr.push(next);//数组尾部插入，保证节点顺序
	        }
	        next = next.nextSibling;//下一节点赋值给next，用于循环
	    }
	    return arr;
	}

    var CA = {
        hasInit: 0, //是否初始化页面a标签属性
        arrImg: [], //用于工作的Image对象以及状态
        maxLength: 4, //同时工作的Image对象最大个数
        taskQueue: [], //需要排队等候的任务
        //初始化：监听body的mousedown事件，发送符合规则的埋点信息
        //仅作用于带有href属性的a节点（被点击的节点或者最靠近其的父节点）。
        init: function() {
            var _this = this;
            if (_this.hasInit || !document.body) return;
            document.body.addEventListener('click', function (e) {
                var o = e.target;
                var eventPath = e.path || (e.composedPath && e.composedPath());
                var href, aIndex, liIndex, eleIndex;
                var nodename = "", path = "", statistic= ""; //新版本参数，算上href
                if (eventPath) { //new
                    eventPath.forEach((element, key) => {
                        if (key < eventPath.length - 4) {
                        	var tempNode = element.nodeName;
                        	var index = Array.prototype.slice.call(element.parentNode.children).indexOf(element);
                        	var flag = true;
                        	if(element.className){
//                        		tempNode = (element.className.split(" "))[0];
                        		tempNode = element.className;
                        		
                        		if(element.className.indexOf(" ac") != -1) {
                        			tempNode = element.className.split(" ac")[0];
                        		}
                        		
                        		if(element.className.indexOf(" active") != -1) {
                        			tempNode = element.className.split(" active")[0];
                        		}
                        		
                        		if(element.className == "active") {
                        			tempNode = element.nodeName;
                        		}
                        	}
                        	
                        	if (element.id) {
                        		tempNode = element.id;
                        	}
                        	
                        	
                        	siblings(element).forEach((sibling, sibKey) => {
            	                if (sibling.nodeName != element.nodeName) {
            	                	flag = false;
            	                }
            	            })
                        	
                        	if( ((flag && siblings(element).length > 1) || path != "" || element.nodeName == "A" || element.nodeName == "BUTTON") && tempNode != "wrapper") {
                        		path += tempNode;
                        		if(element.parentNode.nodeName == "BODY" || element.parentNode.className == "wrapper"){
                            		path += "";
                        		} else {
                        			path += index;
                        		}
                        	}
                        }
                    });
                };
                while (o) {
                    // 仅监听a标签
                    //点击object标签会引发异常
                    try {
                        if (o.href || o.nodeName == "A") {
                        	href = o.href || o.id || "";
                        	if(href == "javascript:;"){
                        		href = o.id;
                        	}
                        	nodename = o.nodeName;
                        	aIndex = Array.prototype.slice.call(o.parentNode.children).indexOf(o);
                        }
                        
                        if (o.nodeName == "BUTTON") { //new
                            href = o.id;
                            if(document.querySelectorAll('input[statistic="statistic"]')[0]){
                                statistic = document.querySelectorAll('input[statistic="statistic"]')[0].value;
                            }
                            nodename = o.nodeName;
                        }
                        
                        if (o.attributes["statistic"] && o.nodeName != "INPUT") { //目标统计标签，且不是input
                            nodename = o.nodeName;
                        }
                        
                        if(window.location.href == "https://m.jf.10010.com/" || window.location.href.indexOf("https://m.jf.10010.com/?") != -1 || window.location.href.indexOf("https://m.jf.10010.com/#") != -1){

                            
                            if (o.tagName == "LI") {
                            	liIndex = Array.prototype.slice.call(o.parentNode.children).indexOf(o);
                            }
                            
                            if(o.className.indexOf("swiper-slide") != -1) {
                            	if (o.hasAttribute("data-swiper-slide-index")) {
                            		//其他正常排列的swiper
                                    eleIndex = o.attributes["data-swiper-slide-index"].value;   
                                } else {
                                	//类目下的商品index，按3个一排排列的商品
                                	eleIndex = Number(o.attributes["data-swiper-row"].value) * 3 + parseInt(Number(o.attributes["data-swiper-column"].value) / 3) * 3 + Number(o.attributes["data-swiper-column"].value);
                                }
                            }
                            
                            //获取bannerindex
                            if (o.className.indexOf("bannerImg") != -1) {
                            	path = "bannerIndex" + eleIndex;
                            }
                            //获取精品推荐index
                            if (o.className.indexOf("recommendList") != -1) {
                            	path = "recommendIndex" + eleIndex;
                            }
                            //获取公告index
                            if (o.className.indexOf("noticeWarp") != -1) {
                            	path = "noticeIndex" + eleIndex;
                            }
                            //获取类目热兑
                            if (o.className.indexOf("list_con") != -1) {
                            	path = "category" + Array.prototype.slice.call(o.parentNode.children).indexOf(o) + "goods" + eleIndex;
                            }
                            //获取底部导航index
                            if (o.id == "nav") {
                            	path = "navIndex" + aIndex;
                            }
                            
                        }
                        
                        if(o == document.body) { 
                        	if(nodename){
                            	//_this.log(href, "click", location.href, nodename, path, statistic, "http://114.251.172.66:7080/2.gif?");
                            	_this.log(href, "click", location.href, nodename, path, statistic, "http://jf.10010.com/jf-log/2.gif?");
                        	}
                        	return true;
                        }
                    } catch (err) {}
                    
                    o = o.parentNode;
                }
            }, false);
            _this.hasInit = 1;
        },
        /**
         * 记录统计数据——发CA,复杂的埋点统计方式
         * @param {String}href           a标签href
         * @param {String}operate        操作
         * @param {Json}details          细节信息
         * @param {String}serverUrl(opt) 统计服务器地址, 可选
         */
        log: function(href, operate, localUrl, nodename, path, statistic, serverUrl) {
            var _this = this,
                domain, p, v, citycode, jfuser,
                logUrl = (serverUrl || "http://114.251.172.66:7080/2.gif?");
            
            domain = document.domain || '';
            // 获取用户cookie中的cityid  jfuser
            if (document.cookie.match(new RegExp('(^| )jfcity=([^;]*)(;|$)'))) {
                citycode = document.cookie.match(new RegExp('(^| )jfcity=([^;]*)(;|$)'))[2];
            } else {
                citycode = ''
            }
            
            if (document.cookie.match(new RegExp('(^| )jfuser=([^;]*)(;|$)'))) {
            	jfuser = document.cookie.match(new RegExp('(^| )jfuser=([^;]*)(;|$)'))[2];
            } else {
            	jfuser = ''
            }
            
            _this.send(
                logUrl +
                "domain=" + encodeURIComponent(domain) +
                "&href=" + encodeURIComponent(href) +
                "&operation=" + encodeURIComponent(operate) +
                "&localUrl=" + encodeURIComponent(localUrl) +
                "&nodename=" + encodeURIComponent(nodename) +
                "&path=" + encodeURIComponent(path) +
                "&statistic=" + encodeURIComponent(statistic) +
                "&citycode=" + encodeURIComponent(citycode) +
                "&jfuser=" + encodeURIComponent(jfuser) +
                "&t=" + (new Date()).valueOf()
            );
        },
        send: function(url) {
            //如果参数为空，则不处理
            if (typeof(url) == "undefined" || url == "") return;
            var img = new Image(1, 1);
            img.src = url;
        }
    };

    var init = function () {
        analytics();
        window.onload = function () {
            CA.init();
        }
    }

    return init();

})();