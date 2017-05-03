"use strict";

(function() {
	
	angular.module("interactiveResume", [
        "preventBsStickyClicks",
		"jumbotron",
        "navigation",
        "segment",
        "profile",
        "projects",
        "skills",
        "education",
        "workExperience",
        "contact"
	]);

})();
"use strict";

(function() {
	
	angular.module("collapseOnClick", [

	]);

})();
"use strict";

(function() {
	
	angular.module("collapseOnMobileBtn", [

	]);

})();
"use strict";

(function() {
	
	angular.module("preventBsStickyClicks", [

	]);

})();
"use strict";

(function() {
	
	angular.module("scrollOnClick", [
        
	]);

})();
"use strict";

(function() {
	
	angular.module("contact", [
    "sectionHeader"
	]);

})();
"use strict";

(function() {
	
	angular.module("education", [
    "sectionHeader"
	]);

})();
"use strict";

(function() {
	
	angular.module("jumbotron", [
		"scrollOnClick"
	]);

})();
"use strict";

(function() {
	
	angular.module("navigation", [
    "scrollOnClick",
    "collapseOnClick" 
	]);

})();
"use strict";

(function() {
	
	angular.module("profile", [
    "sectionHeader"
	]);

})();
"use strict";

(function() {
	
	angular.module("projects", [
    "sectionHeader"
	]);

})();
"use strict";

(function() {
	
	angular.module("sectionHeader", [
	]);

})();
"use strict";

(function() {
	
	angular.module("segment", [

	]);

})();
"use strict";

(function() {
	
	angular.module("skills", [
    "sectionHeader"
	]);

})();
"use strict";

(function() {
	
	angular.module("workExperience", [
    "collapseOnMobileBtn",
    "sectionHeader"
	]);

})();
/*! Backstretch - v2.1.15 - 2016-11-10\n* Copyright (c) 2016 Scott Robbin;* Fork of improvements - by Daniel Cohen Gindi (danielgindi@gmail.com) Licensed MIT */!function(a,b,c){"use strict";var d=/^.*(youtu\.be\/|youtube\.com\/v\/|youtube\.com\/embed\/|youtube\.com\/watch\?v=|youtube\.com\/watch\?.*\&v=)([^#\&\?]*).*/i;a.fn.backstretch=function(d,e){var f=arguments;0===a(b).scrollTop()&&b.scrollTo(0,0);var g;return this.each(function(b){var h=a(this),i=h.data("backstretch");if(i){if("string"==typeof f[0]&&"function"==typeof i[f[0]]){var j=i[f[0]].apply(i,Array.prototype.slice.call(f,1));return j===i&&(j=c),void(j!==c&&(g=g||[],g[b]=j))}e=a.extend(i.options,e),i.hasOwnProperty("destroy")&&i.destroy(!0)}if(!d||d&&0===d.length){var k=h.css("background-image");k&&"none"!==k?d=[{url:h.css("backgroundImage").replace(/url\(|\)|"|'/g,"")}]:a.error("No images were supplied for Backstretch, or element must have a CSS-defined background image.")}i=new l(this,d,e||{}),h.data("backstretch",i)}),g?1===g.length?g[0]:g:this},a.backstretch=function(b,c){return a("body").backstretch(b,c).data("backstretch")},a.expr[":"].backstretch=function(b){return a(b).data("backstretch")!==c},a.fn.backstretch.defaults={duration:5e3,transition:"fade",transitionDuration:0,animateFirst:!0,alignX:.5,alignY:.5,paused:!1,start:0,preload:2,preloadSize:1,resolutionRefreshRate:2500,resolutionChangeRatioThreshold:.1};var e={wrap:{left:0,top:0,overflow:"hidden",margin:0,padding:0,height:"100%",width:"100%",zIndex:-999999},itemWrapper:{position:"absolute",display:"none",margin:0,padding:0,border:"none",width:"100%",height:"100%",zIndex:-999999},item:{position:"absolute",margin:0,padding:0,border:"none",width:"100%",height:"100%",maxWidth:"none"}},f=function(){var c=function(a){for(var b=1;b<a.length;b++){for(var c=a[b],d=b;a[d-1]&&parseInt(a[d-1].width,10)>parseInt(c.width,10);)a[d]=a[d-1],--d;a[d]=c}return a},d=function(a,c,d){for(var e,f,g=b.devicePixelRatio||1,h=o(),i=(p(),c>a?"portrait":a>c?"landscape":"square"),j=0,k=0;k<d.length&&(f=d[k],"string"==typeof f&&(f=d[k]={url:f}),f.pixelRatio&&"auto"!==f.pixelRatio&&parseFloat(f.pixelRatio)!==g||f.deviceOrientation&&f.deviceOrientation!==h||f.windowOrientation&&f.windowOrientation!==h||f.orientation&&f.orientation!==i||(j=k,e=a,"auto"===f.pixelRatio&&(a*=g),!(f.width>=e)));k++);return d[Math.min(k,j)]},e=function(a,b){if("string"==typeof a)a=a.replace(/{{(width|height)}}/g,b);else if(a instanceof Array)for(var c=0;c<a.length;c++)a[c].src?a[c].src=e(a[c].src,b):a[c]=e(a[c],b);return a};return function(b,f){for(var g=b.width(),h=b.height(),i=[],j=function(a,b){return"width"===b?g:"height"===b?h:a},k=0;k<f.length;k++)if(a.isArray(f[k])){f[k]=c(f[k]);var l=d(g,h,f[k]);i.push(l)}else{"string"==typeof f[k]&&(f[k]={url:f[k]});var m=a.extend({},f[k]);m.url=e(m.url,j),i.push(m)}return i}}(),g=function(a){return d.test(a.url)||a.isVideo},h=function(b,c,d,e,f){var h=[],i=function(a){for(var b=0;b<h.length;b++)if(h[b].src===a.src)return h[b];return h.push(a),a},j=function(a,b,c){"function"==typeof b&&b.call(a,c)};return function b(c,d,e,f,h){if("undefined"!=typeof c){a.isArray(c)||(c=[c]),arguments.length<5&&"function"==typeof arguments[arguments.length-1]&&(h=arguments[arguments.length-1]),d="function"!=typeof d&&d?d:0,e="function"==typeof e||!e||e<0?c.length:Math.min(e,c.length),f="function"!=typeof f&&f?f:1,d>=c.length&&(d=0,e=0),f<0&&(f=e),f=Math.min(f,e);var k=c.slice(d+f,e-f);if(c=c.slice(d,f),e=c.length,!e)return void j(c,h,!0);for(var l,m=0,n=function(){m++,m===e&&(j(c,h,!k),b(k,0,0,f,h))},o=0;o<c.length;o++)g(c[o])||(l=new Image,l.src=c[o].url,l=i(l),l.complete?n():a(l).on("load error",n))}}}(),i=function(b){for(var c=[],d=0;d<b.length;d++)"string"==typeof b[d]?c.push({url:b[d]}):a.isArray(b[d])?c.push(i(b[d])):c.push(j(b[d]));return c},j=function(a,d){return(a.centeredX||a.centeredY)&&(b.console&&b.console.log&&b.console.log("jquery.backstretch: `centeredX`/`centeredY` is deprecated, please use `alignX`/`alignY`"),a.centeredX&&(a.alignX=.5),a.centeredY&&(a.alignY=.5)),a.speed!==c&&(b.console&&b.console.log&&b.console.log("jquery.backstretch: `speed` is deprecated, please use `transitionDuration`"),a.transitionDuration=a.speed,a.transition="fade"),a.resolutionChangeRatioTreshold!==c&&(b.console.log("jquery.backstretch: `treshold` is a typo!"),a.resolutionChangeRatioThreshold=a.resolutionChangeRatioTreshold),a.fadeFirst!==c&&(a.animateFirst=a.fadeFirst),a.fade!==c&&(a.transitionDuration=a.fade,a.transition="fade"),k(a)},k=function(a,b){return"left"===a.alignX?a.alignX=0:"center"===a.alignX?a.alignX=.5:"right"===a.alignX?a.alignX=1:(a.alignX!==c||b)&&(a.alignX=parseFloat(a.alignX),isNaN(a.alignX)&&(a.alignX=.5)),"top"===a.alignY?a.alignY=0:"center"===a.alignY?a.alignY=.5:"bottom"===a.alignY?a.alignY=1:(a.alignX!==c||b)&&(a.alignY=parseFloat(a.alignY),isNaN(a.alignY)&&(a.alignY=.5)),a},l=function(c,d,g){this.options=a.extend({},a.fn.backstretch.defaults,g||{}),this.firstShow=!0,j(this.options,!0),this.images=i(a.isArray(d)?d:[d]),this.options.paused&&(this.paused=!0),this.options.start>=this.images.length&&(this.options.start=this.images.length-1),this.options.start<0&&(this.options.start=0),this.isBody=c===document.body;var k=a(b);this.$container=a(c),this.$root=this.isBody?q?k:a(document):this.$container,this.originalImages=this.images,this.images=f(this.options.alwaysTestWindowResolution?k:this.$root,this.originalImages),h(this.images,this.options.start||0,this.options.preload||1);var l=this.$container.children(".backstretch").first();if(this.$wrap=l.length?l:a('<div class="backstretch"></div>').css(this.options.bypassCss?{}:e.wrap).appendTo(this.$container),!this.options.bypassCss){if(!this.isBody){var m=this.$container.css("position"),n=this.$container.css("zIndex");this.$container.css({position:"static"===m?"relative":m,zIndex:"auto"===n?0:n}),this.$wrap.css({zIndex:-999998})}this.$wrap.css({position:this.isBody&&q?"fixed":"absolute"})}this.index=this.options.start,this.show(this.index),k.on("resize.backstretch",a.proxy(this.resize,this)).on("orientationchange.backstretch",a.proxy(function(){this.isBody&&0===b.pageYOffset&&(b.scrollTo(0,1),this.resize())},this))},m=function(b){var d=b.transition||"fade";"string"==typeof d&&d.indexOf("|")>-1&&(d=d.split("|")),d instanceof Array&&(d=d[Math.round(Math.random()*(d.length-1))]);var e=b.new,f=b.old?b.old:a([]);switch(d.toString().toLowerCase()){default:case"fade":e.fadeIn({duration:b.duration,complete:b.complete,easing:b.easing||c});break;case"fadeinout":case"fade_in_out":var g=function(){e.fadeIn({duration:b.duration/2,complete:b.complete,easing:b.easing||c})};f.length?f.fadeOut({duration:b.duration/2,complete:g,easing:b.easing||c}):g();break;case"pushleft":case"push_left":case"pushright":case"push_right":case"pushup":case"push_up":case"pushdown":case"push_down":case"coverleft":case"cover_left":case"coverright":case"cover_right":case"coverup":case"cover_up":case"coverdown":case"cover_down":var h=d.match(/^(cover|push)_?(.*)$/),i="left"===h[2]?"right":"right"===h[2]?"left":"down"===h[2]?"top":"up"===h[2]?"bottom":"right",j={display:""},k={};if(j[i]="-100%",k[i]=0,e.css(j).animate(k,{duration:b.duration,complete:function(){e.css(i,""),b.complete.apply(this,arguments)},easing:b.easing||c}),"push"===h[1]&&f.length){var l={};l[i]="100%",f.animate(l,{duration:b.duration,complete:function(){f.css("display","none")},easing:b.easing||c})}}};l.prototype={resize:function(){try{var d=this.options.alwaysTestWindowResolution?a(b):this.$root,e=d.width(),g=d.height(),i=e/(this._lastResizeContainerWidth||0),j=g/(this._lastResizeContainerHeight||0),k=this.options.resolutionChangeRatioThreshold||0;if((e!==this._lastResizeContainerWidth||g!==this._lastResizeContainerHeight)&&(Math.abs(i-1)>=k||isNaN(i)||Math.abs(j-1)>=k||isNaN(j))&&(this._lastResizeContainerWidth=e,this._lastResizeContainerHeight=g,this.images=f(d,this.originalImages),this.options.preload&&h(this.images,(this.index+1)%this.images.length,this.options.preload),1===this.images.length&&this._currentImage.url!==this.images[0].url)){var l=this;clearTimeout(l._selectAnotherResolutionTimeout),l._selectAnotherResolutionTimeout=setTimeout(function(){l.show(0)},this.options.resolutionRefreshRate)}var m,n={left:0,top:0,right:"auto",bottom:"auto"},o=this.isBody?this.$root.width():this.$root.innerWidth(),p=this.isBody?b.innerHeight?b.innerHeight:this.$root.height():this.$root.innerHeight(),q=o,r=q/this.$itemWrapper.data("ratio"),s=a.Event("backstretch.resize",{relatedTarget:this.$container[0]}),t=this._currentImage.alignX===c?this.options.alignX:this._currentImage.alignX,u=this._currentImage.alignY===c?this.options.alignY:this._currentImage.alignY;r>=p?n.top=-(r-p)*u:(r=p,q=r*this.$itemWrapper.data("ratio"),m=(q-o)/2,n.left=-(q-o)*t),this.options.bypassCss||this.$wrap.css({width:o,height:p}).find(">.backstretch-item").not(".deleteable").each(function(){var b=a(this);b.find("img,video,iframe").css({width:q,height:r}).css(n)}),this.$container.trigger(s,this)}catch(a){}return this},show:function(b,d){if(!(Math.abs(b)>this.images.length-1)){var f=this,h=f.$wrap.find(">.backstretch-item").addClass("deleteable"),i=f.videoWrapper,j={relatedTarget:f.$container[0]};f.$container.trigger(a.Event("backstretch.before",j),[f,b]),this.index=b;var k=f.images[b];clearTimeout(f._cycleTimeout),delete f.videoWrapper;var l=g(k);return l?(f.videoWrapper=new n(k),f.$item=f.videoWrapper.$video.css("pointer-events","none")):f.$item=a("<img />"),f.$itemWrapper=a('<div class="backstretch-item">').append(f.$item),this.options.bypassCss?f.$itemWrapper.css({display:"none"}):(f.$itemWrapper.css(e.itemWrapper),f.$item.css(e.item)),f.$item.bind(l?"canplay":"load",function(e){var g=a(this),k=g.parent(),n=k.data("options");d&&(n=a.extend({},n,d));var o=this.naturalWidth||this.videoWidth||this.width,p=this.naturalHeight||this.videoHeight||this.height;k.data("ratio",o/p);var q=function(a){return n[a]!==c?n[a]:f.options[a]},r=q("transition"),s=q("transitionEasing"),t=q("transitionDuration"),u=function(){i&&(i.stop(),i.destroy()),h.remove(),!f.paused&&f.images.length>1&&f.cycle(),f.options.bypassCss||f.isBody||f.$container.css("background-image","none"),a(["after","show"]).each(function(){f.$container.trigger(a.Event("backstretch."+this,j),[f,b])}),l&&f.videoWrapper.play()};f.firstShow&&!f.options.animateFirst||!t||!r?(k.show(),u()):m({new:k,old:h,transition:r,duration:t,easing:s,complete:u}),f.firstShow=!1,f.resize()}),f.$itemWrapper.appendTo(f.$wrap),f.$item.attr("alt",k.alt||""),f.$itemWrapper.data("options",k),l||f.$item.attr("src",k.url),f._currentImage=k,f}},current:function(){return this.index},next:function(){var a=Array.prototype.slice.call(arguments,0);return a.unshift(this.index<this.images.length-1?this.index+1:0),this.show.apply(this,a)},prev:function(){var a=Array.prototype.slice.call(arguments,0);return a.unshift(0===this.index?this.images.length-1:this.index-1),this.show.apply(this,a)},pause:function(){return this.paused=!0,this.videoWrapper&&this.videoWrapper.pause(),this},resume:function(){return this.paused=!1,this.videoWrapper&&this.videoWrapper.play(),this.cycle(),this},cycle:function(){if(this.images.length>1){clearTimeout(this._cycleTimeout);var b=this._currentImage&&this._currentImage.duration||this.options.duration,c=g(this._currentImage),d=function(){this.$item.off(".cycle"),this.paused||this.next()};if(c){if(!this._currentImage.loop){var e=0;this.$item.on("playing.cycle",function(){var b=a(this).data("player");clearTimeout(e),e=setTimeout(function(){b.pause(),b.$video.trigger("ended")},1e3*(b.getDuration()-b.getCurrentTime()))}).on("ended.cycle",function(){clearTimeout(e)})}this.$item.on("error.cycle initerror.cycle",a.proxy(d,this))}c&&!this._currentImage.duration?this.$item.on("ended.cycle",a.proxy(d,this)):this._cycleTimeout=setTimeout(a.proxy(d,this),b)}return this},destroy:function(c){a(b).off("resize.backstretch orientationchange.backstretch"),this.videoWrapper&&this.videoWrapper.destroy(),clearTimeout(this._cycleTimeout),c||this.$wrap.remove(),this.$container.removeData("backstretch")}};var n=function(){this.init.apply(this,arguments)};n.prototype.init=function(e){var f,g=this,h=function(){g.$video=f,g.video=f[0]},i="video";if(e.url instanceof Array||!d.test(e.url)||(i="youtube"),g.type=i,"youtube"===i){n.loadYoutubeAPI(),g.ytId=e.url.match(d)[2];var j="https://www.youtube.com/embed/"+g.ytId+"?rel=0&autoplay=0&showinfo=0&controls=0&modestbranding=1&cc_load_policy=0&disablekb=1&iv_load_policy=3&loop=0&enablejsapi=1&origin="+encodeURIComponent(b.location.origin);g.__ytStartMuted=!!e.mute||e.mute===c,f=a("<iframe />").attr({src_to_load:j}).css({border:0,margin:0,padding:0}).data("player",g),e.loop&&f.on("ended.loop",function(){g.__manuallyStopped||g.play()}),g.ytReady=!1,h(),b.YT?(g._initYoutube(),f.trigger("initsuccess")):a(b).one("youtube_api_load",function(){g._initYoutube(),f.trigger("initsuccess")})}else{f=a("<video>").prop("autoplay",!1).prop("controls",!1).prop("loop",!!e.loop).prop("muted",!!e.mute||e.mute===c).prop("preload","auto").prop("poster",e.poster||"");for(var k=e.url instanceof Array?e.url:[e.url],l=0;l<k.length;l++){var m=k[l];"string"==typeof m&&(m={src:m}),a("<source>").attr("src",m.src).attr("type",m.type||null).appendTo(f)}f[0].canPlayType&&k.length?f.trigger("initsuccess"):f.trigger("initerror"),h()}},n.prototype._initYoutube=function(){var c=this,d=b.YT;c.$video.attr("src",c.$video.attr("src_to_load")).removeAttr("src_to_load");var e=!!c.$video[0].parentNode;if(!e){var f=a("<div>").css("display","none !important").appendTo(document.body);c.$video.appendTo(f)}var g=new d.Player(c.video,{events:{onReady:function(){c.__ytStartMuted&&g.mute(),e||(c.$video[0].parentNode===f[0]&&c.$video.detach(),f.remove()),c.ytReady=!0,c._updateYoutubeSize(),c.$video.trigger("canplay")},onStateChange:function(a){switch(a.data){case d.PlayerState.PLAYING:c.$video.trigger("playing");break;case d.PlayerState.ENDED:c.$video.trigger("ended");break;case d.PlayerState.PAUSED:c.$video.trigger("pause");break;case d.PlayerState.BUFFERING:c.$video.trigger("waiting");break;case d.PlayerState.CUED:c.$video.trigger("canplay")}},onPlaybackQualityChange:function(){c._updateYoutubeSize(),c.$video.trigger("resize")},onError:function(a){c.hasError=!0,c.$video.trigger({type:"error",error:a})}}});return c.ytPlayer=g,c},n.prototype._updateYoutubeSize=function(){var a=this;switch(a.ytPlayer.getPlaybackQuality()||"medium"){case"small":a.video.videoWidth=426,a.video.videoHeight=240;break;case"medium":a.video.videoWidth=640,a.video.videoHeight=360;break;default:case"large":a.video.videoWidth=854,a.video.videoHeight=480;break;case"hd720":a.video.videoWidth=1280,a.video.videoHeight=720;break;case"hd1080":a.video.videoWidth=1920,a.video.videoHeight=1080;break;case"highres":a.video.videoWidth=2560,a.video.videoHeight=1440}return a},n.prototype.play=function(){var a=this;return a.__manuallyStopped=!1,"youtube"===a.type?a.ytReady&&(a.$video.trigger("play"),a.ytPlayer.playVideo()):a.video.play(),a},n.prototype.pause=function(){var a=this;return a.__manuallyStopped=!1,"youtube"===a.type?a.ytReady&&a.ytPlayer.pauseVideo():a.video.pause(),a},n.prototype.stop=function(){var a=this;return a.__manuallyStopped=!0,"youtube"===a.type?a.ytReady&&(a.ytPlayer.pauseVideo(),a.ytPlayer.seekTo(0)):(a.video.pause(),a.video.currentTime=0),a},n.prototype.destroy=function(){var a=this;return a.ytPlayer&&a.ytPlayer.destroy(),a.$video.remove(),a},n.prototype.getCurrentTime=function(a){var b=this;return"youtube"!==b.type?b.video.currentTime:b.ytReady?b.ytPlayer.getCurrentTime():0},n.prototype.setCurrentTime=function(a){var b=this;return"youtube"===b.type?b.ytReady&&b.ytPlayer.seekTo(a,!0):b.video.currentTime=a,b},n.prototype.getDuration=function(){var a=this;return"youtube"!==a.type?a.video.duration:a.ytReady?a.ytPlayer.getDuration():0},n.loadYoutubeAPI=function(){if(!b.YT){a("script[src*=www\\.youtube\\.com\\/iframe_api]").length||a('<script type="text/javascript" src="https://www.youtube.com/iframe_api">').appendTo("body");var c=setInterval(function(){b.YT&&b.YT.loaded&&(a(b).trigger("youtube_api_load"),clearTimeout(c))},50)}};var o=function(){if("matchMedia"in b){if(b.matchMedia("(orientation: portrait)").matches)return"portrait";if(b.matchMedia("(orientation: landscape)").matches)return"landscape"}return screen.height>screen.width?"portrait":"landscape"},p=function(){return b.innerHeight>b.innerWidth?"portrait":b.innerWidth>b.innerHeight?"landscape":"square"},q=function(){var a=navigator.userAgent,c=navigator.platform,d=a.match(/AppleWebKit\/([0-9]+)/),e=!!d&&d[1],f=a.match(/Fennec\/([0-9]+)/),g=!!f&&f[1],h=a.match(/Opera Mobi\/([0-9]+)/),i=!!h&&h[1],j=a.match(/MSIE ([0-9]+)/),k=!!j&&j[1];return!((c.indexOf("iPhone")>-1||c.indexOf("iPad")>-1||c.indexOf("iPod")>-1)&&e&&e<534||b.operamini&&"[object OperaMini]"==={}.toString.call(b.operamini)||h&&i<7458||a.indexOf("Android")>-1&&e&&e<533||g&&g<6||"palmGetResource"in b&&e&&e<534||a.indexOf("MeeGo")>-1&&a.indexOf("NokiaBrowser/8.5.0")>-1||k&&k<=6)}()}(jQuery,window);
"use strict";

(function() {
	
	angular
		.module("collapseOnClick")
		.directive("collapseOnClick", [function() {
      return {
        restrict: "A",
        link: function(scope, element, attrs) {
          var selectorToCollapse = attrs.collapseThis;
          element.on("click", function() {
            var $target;
            if (selectorToCollapse) {
              $target = $(selectorToCollapse);
            } else {
              $target = element;
            }
            if ($target.data("bs.collapse")) {
              $target.collapse("hide");
            }
          })
        }
      }
		}]);

})();
"use strict";

(function() {
	
	angular
		.module("collapseOnMobileBtn")
		.directive("collapseOnMobileBtn", ["$compile", function($compile) {
      return {
        restrict: "A",
        priority: 1011,
        compile: function(element) {
          element.removeAttr("collapse-on-mobile-btn");
          element.addClass("collapse-on-mobile-btn");
          element.attr("aria-expanded", element.hasClass("active"));
          element.attr("data-toggle", "collapse");
          return function(scope, element) {
            element.on("click", function() {
              element.toggleClass("active");
            })
          };
        }
      }
		}]);

})();
"use strict";

(function() {
	
	angular
		.module("preventBsStickyClicks")
		.directive("preventBsStickyClicks", [function() {
      return {
        restrict: "A",
        link: function(scope, element, attrs) {
          var elIsBody = (element[0] === $("body")[0]);
          if (elIsBody) {
            element.on("mouseup", "button, a[data-trigger!='focus'], input[type='submit'], input[type='reset']", function() {
              $(this).blur();
            });
          } else {
            element.on("mouseup", function() {
              element.blur();
            })
          }
        }
      }
		}]);

})();
"use strict";

(function() {
	
	angular
		.module("scrollOnClick")
		.directive("scrollOnClick", ["$window", "$document", function($window, $document) {
      return {
        restrict: "A",
        link: function(scope, element, attrs) {
          var idToScroll = attrs.href || attrs.ngHref;
          element.on("click", function(e) {
            e.preventDefault();
            var $target;
            if (idToScroll) {
              $target = $(idToScroll);
            } else {
              $target = element;
            }
            $("html, body").animate({scrollTop: $target.offset().top}, "slow");

          })
        }
      }
		}]);

})();
"use strict";

(function() {
	
	angular
		.module("contact")
		.directive("contact", function(){
      return {
        restrict: "E",
        scope: {},
        templateUrl: "app/components/contact/contact.html",
      }
			
		});

})();
"use strict";

(function() {
	
	angular
		.module("education")
		.directive("education", [function() {
      var educationLis = [
        {
          school: "California Polytechnic State University",
          location: "San Luis Obispo, CA",
          dateStart: new Date(2011, 8),
          dateEnd: new Date(2015, 2),
          educationType: "Bachelor of Science",
          subject: "Biological Sciences",
          description: [
            "Cumulative GPA: 4.0",
            "Graduated as the top-ranked student in the College of Science and Math"
          ]
        }
      ];

      return {
        restrict: "E",
        scope: {},
        templateUrl: "app/components/education/education.html",
        link: function(scope, element, attrs) {
          scope.educationLis = educationLis;
        }
      }
		}]);

})();
"use strict";

(function() {
	
	angular
		.module("jumbotron")
		.directive("jumbotron", function() {
      return {
        restrict: "E",
        replace: true,
        scope: {},
        templateUrl: "app/components/jumbotron/jumbotron.html",
        link: function(scope, element, attrs) {
          element.backstretch();
        }
      };
		});

})();
"use strict";

(function() {
	
	angular
		.module("navigation")
		.directive("navLink", [function() {
      return {
        restrict: "E",
        replace: true,
        scope: {
          goesTo: "@"
        },
        transclude: true,
        //template needs <li> portion to make scrollspy work
        template: "<a ng-href='{{goesTo}}' scroll-on-click collapse-on-click collapse-this='.navbar-collapse'><ng-transclude></a>",
        link: function(scope, element, attrs, parentCtrl) {
        }
      }
		}]);

})();
"use strict";

(function() {
	
	angular
		.module("navigation")
		.directive("navigation", [ "$window", function($window) {
      return {
        restrict: "E",
        scope: {},
        templateUrl: "app/components/navigation/navigation.html",
        link: function(scope, element, attrs) {
          var $affixedEl = element.find("nav");

          function calculateOffset() {
            var windowHeight = $window.innerHeight;
            var navTop = parseInt(getCSS("top", ["navbar", "affix"]));
            return windowHeight - navTop;
          }

          function getCSS (prop, withClasses) {
            var inspector = $("<div>").css("display", "none")
            withClasses.forEach(function(klass) {
              inspector.addClass(klass);  
            });
            $("body").append(inspector);
            try {
              return inspector.css(prop);
            } finally {
              inspector.remove();
            }
          }

          function onResize() {
            $affixedEl.data("bs.affix").options.offset.top = calculateOffset();
            $affixedEl.affix("checkPosition");
            scope.$digest();
          }

          function cleanUp() {
            angular.element($window).off("resize", onResize);
            $("body").removeData("bs.scrollspy");
          }

          var scrollSpySelector = ".navbar-collapse"

          $("body").scrollspy({
            target: scrollSpySelector,
            offset: 50
          });
          $affixedEl.affix({
            offset: {
              top: calculateOffset()
            }
          })
          angular.element($window).on("resize", onResize);
          scope.$on("$destroy", cleanUp);
        }
      }
		}]);

})();
"use strict";

(function() {
	
	angular
		.module("profile")
		.directive("profile", function() {
      return {
        restrict: "E",
        scope: {},
        templateUrl: "app/components/profile/profile.html",
        link: function(scope, element, attrs) {
          scope.calcAge = function calculateAge(birthMonth, birthDay, birthYear) {
            var todayDate = new Date();
            var todayYear = todayDate.getFullYear();
            var todayMonth = todayDate.getMonth();
            var todayDay = todayDate.getDate();
            var age = todayYear - birthYear; 

            if (todayMonth < birthMonth - 1) age--;
            if (birthMonth - 1 == todayMonth && todayDay < birthDay) age--;
            
            return age;
          }
        }
      };
		});

})();
"use strict";

(function() {
	
	angular
		.module("projects")
		.directive("projects", function() {
      return {
        restrict: "E",
        scope: {},
        templateUrl: "app/components/projects/projects.html",
      };
		});

})();
"use strict";

(function() {
	
	angular
		.module("sectionHeader")
		.directive("sectionHeader", function() {
      return {
        restrict: "E",
        scope: {},
        transclude: {
          title: "sectionTitle",
          subtitle: "sectionSubtitle"
        },
        template: [
          "<h2 ng-transclude='title'></h2>",
          "<p class='lead with-separator' ng-transclude='subtitle'></p>"
        ].join('')
      }
		});

})();
"use strict";

(function() {
	
	angular
		.module("segment")
		.directive("segment", function() {
      return {
        restrict: "E",
        transclude: true,
        scope: {},
        template: "<section><div class='wrapper'><ng-transclude></ng-transclude></div></section>"
      }
		});

})();
"use strict";

(function() {
	
	angular
		.module("skills")
		.directive("skills", function() {
      var skillGroups = [
        {
          title: "Web Technologies",
          lis: [
            {
              name: "HTML5",
              symbol: "fa fa-html5"
            },
            {
              name: "CSS3",
              symbol: "fa fa-css3"
            },
            {
              name: "JavaScript",
            },
            {
              name: "jQuery",
            },
            {
              name: "AngularJS",
            },
            {
              name: "Bootstrap",
            },
            {
              name: "Sass",
            },
            {
              name: "Sinatra",
            },
            {
              name: "AJAX",
            },
            {
              name: "JSON",
            },
          ]
        },
        {
          title: "Programming Languages",
          lis: [
            {
              name: "Ruby",
            },
            {
              name: "JavaScript",
            }
          ]
        },
        {
          title: "Databases",
          lis: [
            {
              name: "SQL",
            },
            {
              name: "MongoDB",
            },
            {
              name: "DynamoDB",
            },
            {
              name: "Redis",
            }
          ]
        },
        {
          title: "Tools",
          lis: [
            {
              name: "Git",
              symbol: "fa fa-github"
            },
            {
              name: "Adobe Photoshop",
            },
            {
              name: "Adobe Illustrator",
            }
          ]
        }
      ]
      return {
        restrict: "E",
        scope: {},
        templateUrl: "app/components/skills/skills.html",
        link: function(scope, element, attrs) {
          scope.skillGroups = skillGroups;
          skillGroups.forEach(function(skillGroup) {
            var len = skillGroup.lis.length;
            var mid = len / 2 + .5; // the .5 is to make the left column have the spare if there is an odd number
            skillGroup.left = skillGroup.lis.slice(0, mid);
            skillGroup.right = skillGroup.lis.slice(mid, len);
          });
        }
      }
			
		});

})();
"use strict";

(function() {
	
	angular
		.module("workExperience")
		.directive("workExperience", [function() {
      var jobs = [
        {
          title: "Graphic Artist",
          dateStart: new Date(2011, 0),
          dateEnd: null,
          company: "Freelance work for various businesses and individuals",
          description: [
            "Used Adobe Photoshop and Adobe Illustrator to design business logos, tattoos, and posters"
          ],
          location: null
        },
        {
          title: "Exercise Technician",
          dateStart: new Date(2015, 6),
          dateEnd: new Date(2016, 6),
          company: "G2 Sports + Physical Therapy",
          description: [
            "Instructed and oversaw patient exercises in an outpatient clinic",
            "Performed modalities on patients, including electrical stimulation, ultrasound therapy, and traction"
          ],
          location: "Sammamish, WA"
        },
        {
          title: "Library Student Assistant",
          dateStart: new Date(2012, 8),
          dateEnd: new Date(2015, 2),
          company: "Cal Poly Kennedy Library PolyConnect Desk",
          description: [
            "Checked out laptops and AV equipment to students and staff",
            "Assisted users with basic software and computer troubleshooting"
          ],
          location: "San Luis Obispo, CA"
        },
        {
          title: "Anatomy Lab Teaching Assistant",
          dateStart: new Date(2014, 8),
          dateEnd: new Date(2015, 2),
          company: "Allan Hancock Community College",
          description: [
            "Oversaw weekly open lab sessions, addressing anatomy-related inquiries and guiding student studies"
          ],
          location: "Santa Maria, CA"
        },
        {
          title: "Biology Student Assistant",
          dateStart: new Date(2014, 8),
          dateEnd: new Date(2015, 2),
          company: "Cal Poly Biological Sciences Department",
          description: [
            "Graded assignments for Principles of Physiology and Vertebrate Anatomy/Physiology courses"
          ],
          location: "San Luis Obispo, CA"
        },
        {
          title: "Physical Therapy Aide",
          dateStart: new Date(2013, 3),
          dateEnd: new Date(2014, 5),
          company: "San Luis Sports Therapy and Orthopedic Rehabilitation",
          description: [
            "Instructed and oversaw patient exercises in an outpatient clinic and performed patient modalities",
            "Fulfilled office managerial duties, and assisted therapists in writing of medical paperwork"
          ],
          location: "Morro Bay, CA"
        }
      ];

      return {
        restrict: "E",
        scope: {},
        templateUrl: "app/components/work-experience/work-experience.html",
        link: function(scope, element, attrs) {
          scope.jobs = jobs;
        }
      }
		}]);

})();