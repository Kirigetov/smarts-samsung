$(document).ready(function() {

;(function(win,doc,callback){'use strict';callback=callback||function(){};function detach(){if(doc.addEventListener){doc.removeEventListener('DOMContentLoaded',completed);}else{doc.detachEvent('onreadystatechange',completed);}}function completed(){if(doc.addEventListener||event.type==='load'||doc.readyState==='complete'){detach();callback(window,window.jQuery);}}function init(){if (doc.addEventListener){doc.addEventListener('DOMContentLoaded',completed);}else{doc.attachEvent('onreadystatechange',completed);}}init();})(window,document,function(win,$){
	$(document).ready(function() {
	
	
	//replace here
	
		;(function($) {

	'use strict';

	var
		ua = navigator.userAgent,
		div = document.createElement('div'),

		ie = ua.match(/(?:msie ([0-9]+)|rv:([0-9\.]+)\) like gecko)/i),

		prefix = ['Webkit', 'Moz', 'O'],
		transition = 'transition',
		transform = 'transform',
		requestanimationframe = 'requestAnimationFrame',
		cancelanimationframe = 'CancelAnimationFrame',

		transforms = {
			translate3d: 'translate3d(0px, 0px, 0px)',
			translate: 'translate(0px, 0px)',
			scale3d: 'scale3d(1, 1, 1)',
			scale: 'scale(1, 1)'
		},

		browser = $.browser,
		support = $.support,
		version, i;


	if ( !browser ) {
		$.browser = browser = {};
	}
	browser.local = !(/^http:\/\//).test(location.href);
	browser.firefox = (/firefox/i).test(ua);
	browser.webkit = (/applewebkit/i).test(ua);
	browser.chrome = (/chrome/i).test(ua);
	browser.opera = (/opera/i).test(ua);
	browser.ios = (/ip(ad|hone|od)/i).test(ua);
	browser.android = (/android/i).test(ua);
	browser.safari = browser.webkit && !browser.chrome;

	support.touch = browser.ios || browser.android || (document.ontouchstart !== undefined && document.ontouchstart !== null);
	browser.mobile = support.touch && ( browser.ios || browser.android );

	for ( i in browser ) {
		if( !browser[i] ) {
			delete browser[i];
		}
	}
	browser.os = (navigator.appVersion).match(/(mac|win|linux)/i);
	browser.os = ( browser.os )? browser.os[1].toLowerCase() : '';
	
	if ( browser.ios || browser.android ) {
		version = ua.match(/applewebkit\/([0-9.]+)/i);
		if ( version && version.length > 1 ) {
			browser.webkitversion = version[1];
		}
		if ( browser.ios ) {
			version = ua.match(/version\/([0-9.]+)/i);
			if ( version && version.length > 1 ) {
				browser.ios = version[1];
			}
		} else if ( browser.android ) {
			version = ua.match(/android ([0-9.]+)/i);
			if ( version && version.length > 1 ) {
				browser.android = parseInt(version[1].replace(/\./g, ''));
			}
		}
	}

	support.svgimage = true;
	support.pointerevents = true;
	if ( ie ) {
		browser.ie = ie = parseInt( ie[1] || ie[2] );
		if ( 9 > ie ) {
			browser.oldie = true;
		} else if ( 9 == ie ) {
			prefix.push('ms');
		}
		if ( 11 > ie ) {
			support.pointerevents = false;
		}
		if ( 9 > ie ) {
			support.svgimage = false;
		}
	}

	support.pushstate = !!history.pushState;
	support.mediaquery = typeof(window.matchMedia) == 'function' || !browser.oldie;
	support.video = document.createElement('video').canPlayType !== undefined;
	support.backgroundsize = 'backgroundSize' in div.style;
	if ( support.backgroundsize ) {
		div.style.backgroundSize = 'cover';
		support.backgroundsize = div.style.backgroundSize == 'cover';
	}
	try {
		div.style.background = 'rgba(0, 0, 0, 0)';
		support.rgba = div.style.background == 'rgba(0, 0, 0, 0)';
	} catch(e) {
		support.rgba = false;
	}
	support.canvas = document.createElement('canvas');
	support.canvas = support.canvas.getContext && support.canvas.getContext('2d');

	if ( div.style[transform] != undefined ) {
		support.transform = transform;
	} else {
		transform = 'Transform';
		for ( i = 0; i < 4; i++ ) {
			if ( div.style[prefix[i]+transform] !== undefined ) {
				support.transform = prefix[i]+transform;
				break;
			}
		}
	}
	if ( support.transform ) {
		transform = support.transform;
		for ( i in transforms ) {
			div.style[transform] = '';
			div.style[transform] = transforms[i];
			support[i] = div.style[transform];
		}
		if ( browser.ie && 10 > browser.ie ) {
		}
		if ( browser.android && 430 > browser.android ) {
		}
	}
	if ( div.style[transition] != undefined ) {
		support.transition = transition;
	} else {
		transition = 'Transition';
		for ( i = 0; i < 4; i++ ) {
			if ( div.style[prefix[i]+transition] !== undefined ) {
				support.transition = prefix[i]+transition;
				break;
			}
		}
	}
	if ( window[requestanimationframe] ) {
		support.requestanimationframe = true;
	} else {
		requestanimationframe = 'RequestAnimationFrame';
		for ( i = 0; i < 4; i++ ) {
			if ( window[prefix[i]+requestanimationframe] !== undefined ) {
				window.requestAnimationFrame = window[prefix[i]+requestanimationframe];
				window.cancelAnimationFrame = window[prefix[i]+cancelanimationframe];
				support.requestanimationframe = true;
				break;
			}
		}
	}
	if ( !support.requestanimationframe ) {
		window.requestAnimationFrame = (function() {
			var lasttime = 0;
			return function(callback) {
				var currenttime = gettime();
				var timetocall = Math.max(0, 16-(currenttime-lasttime));
				lasttime = currenttime+timetocall;
				return setTimeout(function() { callback(currenttime+timetocall); }, timetocall);
			}
		})();
		window.cancelAnimationFrame = function(id) {
			clearTimeout(id);
		}
	}
	$._cookie = {
		set: function(name, value, term, path, domain) {
			var cookieset = name + '=' + value + ';',
				expdate;
			if ( term ) {
				expdate = new Date();
				expdate.setTime( expdate.getTime()+term*1000*60*60*24 ); 
				cookieset += 'expires=' + expdate.toGMTString() + ';';
			}
			if ( path ) {
				cookieset += 'path=' + path + ';';
			}
			if ( domain ) {
				cookieset += 'domain=' + domain + ';';
			}
			document.cookie = cookieset;
		},
		get: function(name) {
			var match = ( document.cookie || ' ' ).match( new RegExp(name+' *= *([^;]+)') );
			return ( match )? match[1] : null;
		}
	};
	$._query = {
		parse: (function() {
			var matches, i, max;
			function resetdata(v) {
				if ( v ) {
					v = decodeURIComponent(v).replace(/\+/g, ' ');
					if ( v.indexOf(',') != -1 ) {
						v = v.split(',');
						for ( i = 0, max = v.length; i < max; i++ ) {
							v[i] = resetdata(v[i]);
						}
					} else if ( expint.test(v) ) {
						v = parseFloat(v);
					}
				}
				return v;
			}
			return function(query) {
				var rv = {};
				query = ( (/^#/).test(query) )? query.substring(query.lastIndexOf('#')+1)
						: ( !query || (/\?/).test(query) )? ( query || location.href ).split('?')[1]
						: query;
				if ( query ) {
					query = query.split('#')[0];
					while ( matches = expqueries.exec(query) ) {
						rv[matches[1]] = resetdata(matches[2]);
					}
					return rv;
				} else {
					return false;
				}
			}
		})(),
		make: function(data) {
			var key, newdata, datatype = typeof(data);
			if ( datatype == 'string' ) {
				return data;
			} else if ( datatype == 'object' ) {
				newdata = [];
				for ( key in data ) {
					newdata.push( key +'='+ encodeURIComponent(data[key]));
				}
				return newdata.join('&');
			}
		}
	};

	var easings = {
			linear : function(t,b,c,d){return c*t/d+b;},
			easeInQuad : function(t,b,c,d){return c*(t/=d)*t+b;},
			easeOutQuad : function(t,b,c,d){return -c*(t/=d)*(t-2)+b;},
			easeInOutQuad : function(t,b,c,d){if((t/=d/2)<1)return c/2*t*t+b;return -c/2*((--t)*(t-2)-1)+b;},
			easeOutInQuad : function(t,b,c,d){if(t < d/2)return easings.easeOutQuad(t*2,b,c/2,d);return easings.easeInQuad((t*2)-d,b+c/2,c/2,d);},
			easeInCubic : function(t,b,c,d){return c*(t/=d)*t*t+b;},
			easeOutCubic : function(t,b,c,d){return c*((t=t/d-1)*t*t+1)+b;},
			easeInOutCubic : function(t,b,c,d){if((t/=d/2)<1)return c/2*t*t*t+b;return c/2*((t-=2)*t*t+2)+b;},
			easeOutInCubic : function(t,b,c,d){if(t<d/2)return easings.easeOutCubic(t*2,b,c/2,d);return easings.easeInCubic((t*2)-d,b+c/2,c/2,d);},
			easeInQuart : function(t,b,c,d){return c*(t/=d)*t*t*t+b;},
			easeOutQuart : function(t,b,c,d){return -c*((t=t/d-1)*t*t*t-1)+b;},
			easeInOutQuart : function(t,b,c,d){if((t/=d/2)<1)return c/2*t*t*t*t+b;return -c/2*((t-=2)*t*t*t-2)+b;},
			easeOutInQuart : function(t,b,c,d){if(t<d/2)return easings.easeOutQuart(t*2,b,c/2,d);return easings.easeInQuart((t*2)-d,b+c/2,c/2,d);},
			easeInQuint : function(t,b,c,d){return c*(t/=d)*t*t*t*t+b;},
			easeOutQuint : function(t,b,c,d){return c*((t=t/d-1)*t*t*t*t+1)+b;},
			easeInOutQuint : function(t,b,c,d){if((t/=d/2)<1)return c/2*t*t*t*t*t+b;return c/2*((t-=2)*t*t*t*t+2)+b;},
			easeOutInQuint : function(t,b,c,d){if(t<d/2)return easings.easeOutQuint(t*2,b,c/2,d);return easings.easeInQuint((t*2)-d,b+c/2,c/2,d);},
			easeInSine : function(t,b,c,d){return -c*Math.cos(t/d*(Math.PI/2))+c+b;},
			easeOutSine : function(t,b,c,d){return c*Math.sin(t/d*(Math.PI/2))+b;},
			easeInOutSine : function(t,b,c,d){return -c/2*(Math.cos(Math.PI*t/d)-1)+b;},
			easeOutInSine : function(t,b,c,d){if(t<d/2)return easings.easeOutSine(t*2,b,c/2,d);return easings.easeInSine((t*2)-d,b+c/2,c/2,d);},
			easeInExpo : function(t,b,c,d){return (t==0)? b : c*Math.pow(2,10*(t/d-1))+b-c*0.001;},
			easeOutExpo : function(t,b,c,d){return (t==d)? b+c : c*1.001*(-Math.pow(2,-10*t/d)+1)+b;},
			easeInOutExpo : function(t,b,c,d){if(t==0)return b;if(t==d)return b+c;if((t/=d/2)<1)return c/2*Math.pow(2,10*(t-1))+b-c*0.0005;return c/2*1.0005*(-Math.pow(2,-10*--t)+2)+b;},
			easeOutInExpo : function(t,b,c,d){if(t<d/2)return easings.easeOutExpo(t*2,b,c/2,d);return easings.easeInExpo((t*2)-d,b+c/2,c/2,d);},
			easeInCirc : function(t,b,c,d){return -c*(Math.sqrt(1-(t/=d)*t)-1)+b;},
			easeOutCirc : function(t,b,c,d){return c*Math.sqrt(1-(t=t/d-1)*t)+b;},
			easeInOutCirc : function(t,b,c,d){if((t/=d/2)<1)return -c/2*(Math.sqrt(1-t*t)-1)+b;return c/2*(Math.sqrt(1-(t-=2)*t)+1)+b;},
			easeOutInCirc : function(t,b,c,d){if (t<d/2)return easings.easeOutCirc(t*2,b,c/2,d);return easings.easeInCirc((t*2)-d,b+c/2,c/2,d);},
			easeInElastic : function(t,b,c,d,a,p){if(!t)return b;if((t/=d)==1)return b+c;var s,p=(!p||typeof(p)!='number')? d*.3 : p,a=(!a||typeof(a)!='number')? 0 : a;if(!a||a<Math.abs(c)){a=c;s=p/4;}else s=p/(2*Math.PI)*Math.asin(c/a);return -(a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p))+b;},
			easeOutElastic : function(t,b,c,d,a,p){if(!t)return b;if((t/=d)==1)return b+c;var s,p=(!p||typeof(p)!='number')? d*.3 : p,a=(!a||typeof(a)!='number')? 0 : a;if(!a||a<Math.abs(c)){a=c;s=p/4;}else s=p/(2*Math.PI)*Math.asin(c/a);return (a*Math.pow(2,-10*t)*Math.sin((t*d-s)*(2*Math.PI)/p)+c+b);},
			easeInOutElastic : function(t,b,c,d,a,p){if(t==0)return b;if((t/=d/2)==2)return b+c;var s,p=d*(.3*1.5),a=0;var s,p=(!p||typeof(p)!='number')? d*(.3*1.5) : p,a=(!a||typeof(a)!='number')? 0 : a;if(!a||a<Math.abs(c)){a=c;s=p/4;}else s=p/(2*Math.PI)*Math.asin(c/a);if(t<1)return -.5*(a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p))+b;return a*Math.pow(2,-10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p)*.5+c+b;},
			easeOutInElastic : function(t,b,c,d,a,p){if (t<d/2)return easings.easeOutElastic(t*2,b,c/2,d,a,p);return easings.easeInElastic((t*2)-d,b+c/2,c/2,d,a,p);},
			easeInBack : function(t,b,c,d,s){var s=(!s||typeof(s)!='number')? 1.70158 : s;return c*(t/=d)*t*((s+1)*t-s)+b;},
			easeOutBack : function(t,b,c,d,s){var s=(!s||typeof(s)!='number')? 1.70158 : s;return c*((t=t/d-1)*t*((s+1)*t+s)+1)+b;},
			easeInOutBack : function(t,b,c,d,s){var s=(!s||typeof(s)!='number')? 1.70158 : s;if((t/=d/2)<1)return c/2*(t*t*(((s*=(1.525))+1)*t-s))+b;return c/2*((t-=2)*t*(((s*=(1.525))+1)*t+s)+2)+b;},
			easeOutInBack : function(t,b,c,d,s){if(t<d/2)return easings.easeOutBack(t*2,b,c/2,d,s);return easings.easeInBack((t*2)-d,b+c/2,c/2,d,s);},
			easeInBounce : function(t,b,c,d){return c-easings.easeOutBounce(d-t,0,c,d)+b;},
			easeOutBounce : function(t,b,c,d){if((t/=d)<(1/2.75))return c*(7.5625*t*t)+b;else if(t<(2/2.75))return c*(7.5625*(t-=(1.5/2.75))*t+.75)+b;else if(t<(2.5/2.75))return c*(7.5625*(t-=(2.25/2.75))*t+.9375)+b;else return c*(7.5625*(t-=(2.625/2.75))*t+.984375)+b;},
			easeInOutBounce : function(t,b,c,d){if(t<d/2)return easings.easeInBounce(t*2,0,c,d)*.5+b;else return easings.easeOutBounce(t*2-d,0,c,d)*.5+c*.5+b;},
			easeOutInBounce : function(t,b,c,d){if(t<d/2)return easings.easeOutBounce(t*2,b,c/2,d);return easings.easeInBounce((t*2)-d,b+c/2,c/2,d);}
		},
		easing,

		cubicbeziers = {
			linear: '0.250, 0.250, 0.750, 0.750',
			ease: '0.250, 0.100, 0.250, 1.000',
			'ease-in': '0.420, 0.000, 1.000, 1.000',
			'ease-out': '0.000, 0.000, 0.580, 1.000',
			'ease-in-out': '0.420, 0.000, 0.580, 1.000',
			easeInQuad: '0.550, 0.085, 0.680, 0.530',
			easeInCubic: '0.550, 0.055, 0.675, 0.190',
			easeInQuart: '0.895, 0.030, 0.685, 0.220',
			easeInQuint: '0.755, 0.050, 0.855, 0.060',
			easeInSine: '0.470, 0.000, 0.745, 0.715',
			easeInExpo: '0.950, 0.050, 0.795, 0.035',
			easeInCirc: '0.600, 0.040, 0.980, 0.335',
			easeInBack: '0.600, -0.280, 0.735, 0.045',
			easeOutQuad: '0.250, 0.460, 0.450, 0.940',
			easeOutCubic: '0.215, 0.610, 0.355, 1.000',
			easeOutQuart: '0.165, 0.840, 0.440, 1.000',
			easeOutQuint: '0.230, 1.000, 0.320, 1.000',
			easeOutSine: '0.390, 0.575, 0.565, 1.000',
			easeOutExpo: '0.190, 1.000, 0.220, 1.000',
			easeOutCirc: '0.075, 0.820, 0.165, 1.000',
			easeOutBack: '0.175, 0.885, 0.320, 1.275',
			easeInOutQuad: '0.455, 0.030, 0.515, 0.955',
			easeInOutCubic: '0.645, 0.045, 0.355, 1.000',
			easeInOutQuart: '0.770, 0.000, 0.175, 1.000',
			easeInOutQuint: '0.860, 0.000, 0.070, 1.000',
			easeInOutSine: '0.445, 0.050, 0.550, 0.950',
			easeInOutExpo: '1.000, 0.000, 0.000, 1.000',
			easeInOutCirc: '0.785, 0.135, 0.150, 0.860',
			easeInOutBack: '0.680, -0.550, 0.265, 1.550'
		};

	for ( easing in easings ) {
		$.easing[easing] = (function(easingname) {
			return function(x, t, b, c, d) {
				return easings[easingname](t, b, c, d);
			}
		})(easing);
	}
	var
		poorbrowser = browser.ie && 9 > browser.ie,

		expint = /^-?[0-9\.]+$/,
		exprgb = /rgba?\(/,
		expisbody = /body/i,
		expiscolor = /color/i,
		expgetrgb = /rgba?\(([0-9]+), *([0-9]+), *([0-9]+)/,
		expqueries = /([^=&]+)=?([^=&]*)/g,

		transitionname = support.transition,
		transitionable = !!transitionname,
		transitionendnames = 'transitionend webkitTransitionEnd mozTransitionEnd oTransitionEnd msTransitionEnd',

		gettime = function() {
			return new Date().getTime();
		},

		isobject = $.isPlainObject,

		color = {
			getcode: function(target, property) {
				return this.tohex.apply( null, this.torgb( target, property, style.get(target, property) ) );
			},
			torgb: function(target, property, v) {
				var temp;
				if ( v == 'transparent' || v == 'rgba(0, 0, 0, 0)' ) {
					while ( !expisbody.test(target.nodeName) ) {
						target = target.parentNode;
						temp = style.get(target, property);
						if ( temp != 'transparent' && temp != 'rgba(0, 0, 0, 0)' ) {
							return this.torgb(target, property, temp);
						}
					}
					return [ 255, 255, 255 ];
				} else if ( v.match(exprgb) ) {
					v = v.match(expgetrgb);
					return [ parseInt(v[1]), parseInt(v[2]), parseInt(v[3]) ];
				} else {
					if ( v.length>5 ) {
						v = [ v.substr(1, 2), v.substr(3, 2), v.substr(5, 2) ];
					} else {
						v = [ v.substr(1, 1), v.substr(2, 1), v.substr(3, 1) ];
						v = [ v[0]+v[0], v[1]+v[1], v[2]+v[2] ];
					}
					return [
						parseInt( ( eval('0x'+v[0]) ).toString(10) ),
						parseInt( ( eval('0x'+v[1]) ).toString(10) ),
						parseInt( ( eval('0x'+v[2]) ).toString(10) )
					];
				}
			},
			tohex: function() {
				var temp, i = 0, rv = '';
				for ( ; i < 3; i++ ) {
					temp = Math.max( Math.min(255, arguments[i]), 0 ).toString(16);
					rv += ( 2 > temp.length )? '0'+temp : temp;
				}
				return '#'+rv;
			}
		},

		style = (function() {

			var
				supporttransform = support.transform,
				transforms = ['translate3d', 'translate', 'scale3d', 'scale', 'skew', 'skewX', 'skewY', 'rotate', 'rotateX', 'rotateY', 'rotateZ'],
				nex = '[e0-9\-\.]+', pxex = '(?:px)?', vex = '(?:(?:px|deg))?', xyzex = /(X|Y|Z)$/,
				expressions = {
					isxyztarget: /^(scale|scale3d|translate|translate3d)$/,
					nopx: /(zIndex)/
				},
				is3dtransform = /3d/, istranslate = /^translate/,
				isscale = /^scale/, isrotate = /^rotate/,
				isx = /X$/, isy = /Y$/,
				isstupidbrowser = browser.ie == 9,
				i = 0, max = transforms.length;

			for ( ; i < max; i++ ) {
				expressions[transforms[i]] = [
					new RegExp(transforms[i] + '\\(('+ nex +')'+ vex +'(?:, ('+ nex +')'+ vex +'(?:, ('+ nex +')'+ vex +')?)?'),
					new RegExp('('+transforms[i] + '\\()'+ nex + vex)
				];
				if ( !isrotate.test(transforms[i]) ) {
					expressions[transforms[i]][2] = new RegExp('('+transforms[i] + '\\('+ nex + vex +', )'+ nex + vex),
					expressions[transforms[i]][3] = new RegExp('('+transforms[i] + '\\('+ nex + vex +', '+ nex + vex +', )'+ nex + vex);
				}
			}

			function istransform(property) {
				property = css3(property);
				if ( (/^(matrix|translate|scale|rotate|skew|perspective)/).test(property) ) {
					return true;
				}
				return false;
			}

			function isxyztarget(property) {
				var check = property.match(expressions.isxyztarget);
				return ( check )? check[1] : false;
			}

			function issvg(target) {
				return window.SVGElement && target instanceof SVGElement;
			}

			function css3(property) {
				if ( istranslate.test(property) ) {
					if ( !support.translate ) {
						return (/X$/).test(property)? 'left' : 'top';
					} else if ( is3dtransform.test(property) && !support.translate3d ) {
						return property.replace('3d', '');
					}
				} else if ( isscale.test(property) ) {
					if ( is3dtransform.test(property) && !support.scale3d ) {
						return property.replace('3d', '');
					}
				}
				return property;
			}

			function ie9scale(target, property, value) {
				var temp = target.style[supporttransform].match(expressions.scale[0]),
					x, y;
				if ( !temp ) {
					return 1;
				} else {
					x = parseFloat(temp[1]);
					y = ( temp[2] !== undefined )? parseFloat(temp[2]) : x;
					if ( value !== undefined ) {
						if ( isx.test(property) ) {
							x = value;
						} else {
							y = value;
						}
						target.style[supporttransform] = target.style[supporttransform].replace(expressions.scale[0], 'scale('+ x +', '+ y);
					} else {
						return ( isx.test(property) )? x : y;
					}
				}
			}

			function get(target, property) {
				var rv, transform, xyz;
				property = css3(property);
				if ( istransform(property) ) {
					xyz = isxyztarget(property);
					if ( xyz ) {
						return get(target, xyz+'X');
					}
					transform = property;
					property = supporttransform;
				}
				if ( property == 'opacity' && !support.opacity ){
					property = 'filter';
				} else if ( property == 'scrollTop' ) {
					return target.scrollTop;
				}
				rv = (target) ? (issvg(target) && target.attributes[property]) ? parseInt(target.attributes[property].value) :
						(!target.style)? target[property] :
						(target.style[property])? target.style[property] :
							(target.currentStyle)? target.currentStyle[property] :
								document.defaultView.getComputedStyle(target, null)[property] : 0;
				if ( transform && supporttransform ) {
					xyz = transform.match(xyzex);
					xyz = ( xyz )? xyz[0] : '';
					if ( isrotate.test(transform) ) {
						rv = rv.match(expressions[transform][0]);
						return (!rv)? 0 : parseFloat(rv[1]);
					} else if ( isstupidbrowser && isscale.test(transform) ) {
						return ie9scale(target, transform);
					} else if( rv ) {
						rv = rv.match( expressions[transform.replace(xyzex, '')][0] );
						return (!rv)? ( isscale.test(transform) )? 1 : 0 : parseFloat(rv[( xyz == 'X' )? 1 : ( xyz == 'Y' )? 2 : 3]);
					}
				}
				if ( property == 'opacity' ) {
					return parseFloat(rv);
				}
				if ( property == 'filter' ) {
					rv = rv.match(/alpha *\( *opacity *[=:] *([0-9\.]+) *\)/i);
					rv = (rv)? parseFloat(rv[1]) : 1;
					return (rv || rv===0)? rv/100 : 1;

				}
				return (rv=='auto')? 0 : ((/(pt|px)$/).test(rv))? parseInt(rv) : rv;
			}

			function set(target, property, value) {
				var i, exist, transform, xyz;
				if ( typeof(property) == 'object' ) {
					for ( i in property) {
						style.set(target, i, property[i]);
					}
					return;
				}
				if ( value !== undefined ) {
					if ( issvg(target) && target.attributes[property] ) {
						target.attributes[property].value = value;
					} else if ( !target.style ) {
						target[property] = value;
					} else {
						property = css3(property);
						if ( istransform(property) && supporttransform ) {
							xyz = isxyztarget(property);
							if ( xyz ) {
								set(target, xyz+'X', value);
								set(target, xyz+'Y', value);
								set(target, xyz+'Z', value);
								return;
							}
							exist = target.style[supporttransform] || style.get(target, supporttransform);
							if (exist.indexOf('(') == -1) {
								exist = '';
							}
							if ( isrotate.test(property) ) {
								if ( !expressions[property][0].test(exist) ) {
									exist += property+'(0)';
								}
								target.style[supporttransform] = exist.replace(expressions[property][1], '$1'+ value +'deg');
							} else {
								transform = property.replace(xyzex, '');
								if ( !expressions[transform][0].test(exist) ) {
									exist += support[transform];
								}
								if ( isstupidbrowser && isscale.test(property) ) {
									ie9scale(target, property, value);
								} else {
									target.style[supporttransform] = exist.replace(
										expressions[transform][isx.test(property)? 1 : isy.test(property)? 2 : 3],
										'$1'+ value + ( isscale.test(transform)? '' : 'px' )
									);
								}
							}
						} else if ( property == 'opacity' ) {
							if ( !support.opacity ) {
								target.style.filter = ( value === '' )? '' : 'alpha(opacity='+(value*100)+')';
							} else {
								target.style.opacity = value;
							}
						} else if ( property == 'scrollTop' ) {
							target.scrollTop = value;
						} else {
							try {
								target.style[property] = ( value && !isNaN(value) && !expressions.nopx.test(property) )? value+'px' : value;
							} catch(e) {
								window.console && console.log(e.message+'('+target + ' : id="'+ target.id +'", class="'+ target.className +'", property="'+ property +'", value : "'+ value +'")');
							}

						}
					}
				}
			}

			return { get: get, set: set, istransform: istransform };

		})(),

		ani = (function() {

			var tweens = [],

				_fps = 60, _time = 1, _easing = 'easeOutCubic',

				nowframe = 0,
				totalframes = 0,
				starttime = 0,
				playing = false,

				getstyle = style.get, setstyle = style.set,

				torgb = color.torgb, tocolorcode = color.tohex,

				istransform = style.istransform,
				issplitxyztarget = style.issplitxyztarget,

				timer = null,
				timerdelay = 1000/_fps,

				isemptytween,

				i, max;

			function set(target, property, _option) {

				if ( !target ) {
					return;
				}

				if ( target.constructor == Array ) {
					for ( i = 0, max = target.length; i < max; i++ ) {
						set(target[i], property, _option);
					}
					return;
				}

				var tween,
					option = _option || {},
					time = option.time || _time,
					frames = Math.round( _fps*time ),
					delay = Math.round( _fps*( option.delay || 0 ) ),
					easing = option.easing || _easing,
					p, rounding, fromcolor, tocolor, rgb, i, temp,
					values = {};

				for ( p in property ) {
					rounding = ( option.rounding === false || p == 'opacity' )? false : !istransform(p);
					if ( property[p].constructor == Array ) {
						values[p] = property[p];
						frames = Math.max(frames, Math.round( _fps*values[p].length/_fps ));
					} else if ( expiscolor.test(p) ) {
						fromcolor = torgb(target, p, getstyle(target, p));
						tocolor = torgb(target, p, property[p]);
						rgb = [];
						for ( i = 0; i < 3; i++ ) {
							rgb[i] = getvalues(p, fromcolor[i], tocolor[i], frames, easing, true);
						}
						values[p] = [];
						for ( i = 0; i < frames; i++ ) {
							values[p][i] = tocolorcode(rgb[0][i], rgb[1][i], rgb[2][i]);
						}
					} else {
						values[p] = getvalues(p, getstyle(target, p), property[p], frames, easing, rounding);
					}
				}

				stop(target, property);

				tweens.push({
					el: target,
					vs: values,
					sf: option.bystep ? -1-delay : nowframe + delay,
					tf: frames,
					bs: option.bystep,
					es: option.onstart,
					eu: option.onupdate,
					ee: option.onend,
					lp: option.loop
				});

				totalframes = Math.max( totalframes, nowframe + delay + frames + _fps );

				if ( !playing ) {
					starttime = gettime();
					timer = window.requestAnimationFrame(action);
					playing = true;
				}

			}

			function stop(target, property, _jumptoend) {

				var i = 0, max = tweens.length,
					tween, p, properties;

				if ( property ) {
					if ( typeof(property) != 'string' ) {
						properties = [];
						for ( p in property ) {
							properties.push(p);
						}
						properties = properties.join(' ')+' ';
					} else {
						properties = property+' ';
					}
				}

				isemptytween = true;
				for ( ; i < max; i++ ) {
					tween = tweens[i];
					if ( tween && tween.el == target ) {
						if ( property ) {
							for ( p in tween.vs ) {
								if ( properties.indexOf(p+' ') != -1 ) {
									if ( _jumptoend ) {
										setstyle(tween.el, p, tween.vs[p][tween.tf-1]);
									}
									delete tween.vs[p];
								} else {
									isemptytween = false;
								}
							}
						}
						if ( isemptytween ) {
							if ( _jumptoend ) {
								jumptoend(tweens[i]);
							}
							tweens[i] = null;
						}
					}
				}

			}

			function jumptoend(tween) {
				var p, lastframe = tween.tf-1;
				for ( p in tween.vs ) {
					setstyle(tween.el, p, tween.vs[p][lastframe]);
				}
				tween.eu && tween.eu.call( tween.el, geteventvalue(tween, 'update', lastframe, lastframe) );
				tween.ee && tween.ee.call( tween.el, geteventvalue(tween, 'end', lastframe, lastframe) );
			}

			function sprite(target, framewidth, totalframe, property, time, loop) {
				var currentframe, temp = { };
				totalframe--;
				function onupdate(e) {
					var frame = Math.round(totalframe*e.v);
					if ( currentframe != frame ) {
						style.set(target, property, -framewidth*frame);
						currentframe = frame;
					}
				}
				function play() {
					_stop();
					set(temp, { v: 1 }, { time: time, loop: loop, rounding: false, easing: 'linear', onupdate: onupdate });
				}
				function _stop() {
					stop(temp);
					currentframe = -1;
					temp.v = 0;
				}
				return { play: play, stop: _stop }
			}

			function action() {
				nowframe = Math.floor( ( gettime()-starttime ) / timerdelay );
				if ( totalframes > nowframe ) {
					setproperties(nowframe);
					timer = window.requestAnimationFrame(action);
				} else {
					window.cancelAnimationFrame(timer);
					setproperties(totalframes);
					nowframe = totalframes = 0;
					tweens = [];
					playing = false;
				}
			}

			function setproperties(step) {

				var tween, mystep, myframes,
					p, i = 0, max = tweens.length;

				for ( ; i < max; i++ ) {

					tween = tweens[i];

					if ( tween && step >= tween.sf ) {

						myframes = tween.tf-1;

						if (tween.bs) {
							mystep = tween.sf = tween.sf+1;
						} else {
							mystep = Math.min( myframes, step-tween.sf );
						}

						if (mystep > -1) {

							if ( tween.es ) {
								tween.es.call( tween.el, geteventvalue(tween, 'start', 0, myframes) );
								delete tween.es;
							}

							if (!tweens[i]) {
								continue;
							}

							for ( p in tween.vs ) {
								setstyle(tween.el, p, tween.vs[p][mystep]);
							}

							tween.eu && tween.eu.call( tween.el, geteventvalue(tween, 'update', mystep, myframes) );

							if ( mystep == myframes ) {
								tween.ee && tween.ee.call( tween.el, geteventvalue(tween, 'end', mystep, myframes) );
								if ( tween.lp ) {
									tween.sf = tween.bs ? -1 : nowframe;
									totalframes += tweens[i].tf+_fps;
									if ( tween.lp == 'yoyo' ) {
										for ( p in tween.vs ) {
											tween.vs[p].reverse();
										}
									}
								} else {
									tweens[i] = null;
								}
							}
						}

					}
				}

			}

			function geteventvalue(tween, type, step, totalstep) {
				var values = tween.vs,
					eventvalue = { type: type, percent: step/totalstep },
					p;
				for ( p in values ) {
					eventvalue[p] = values[p][step];
				}
				return eventvalue;
			}

			function getvalues(property, from, to, totalframe, easing, rounding) {
				var nv, rv = [], gap = to-from, i = 0;
				totalframe--;
				for ( ; i <= totalframe; i++ ) {
					nv = easings[easing](i, from, gap, totalframe);
					rv.push( ( rounding )? Math.round(nv) : nv );
				}
				return rv;
			}

			return { set: set, stop: stop, sprite: sprite, getvalues: getvalues };

		})();


	$.fn._css = function(property, value) {
		var p;
		if ( isobject(property) ) {
			for ( p in property ) {
				this._css(p, property[p]);
			}
		} else if ( value !== undefined ) {
			this.each(function() {
				style.set(this, property, value);
			});
		} else {
			return style.get(this[0], property);
		}
		return this;
	}

	$.fn._animate = function(properties, d, e, c) {
		var delaybase, options = assignanimationoptions(d, e, c);
		if (options.autodelay) {
			delaybase = options.delay;
		}
		return this.each(function(i) {
			if (i) {
				options.step = options.complete = null;
			}
			if (delaybase) {
				options.delay = i*delaybase;
			}
			ani.set(this, properties, options);
		});
	}

	$.fn._spriteanimation = function sprite(framewidth, totalframe, property, time, loop) {
		return this.each(function(i) {
			$(this).data('spriteanimation', ani.sprite(this, framewidth, totalframe, property, time, loop));
		});
	}

	$._getanimationvalues = ani.getvalues;

	$.fn._stop = function(property, jumptoend) {
		if ( property === true || property === false ) {
			jumptoend = property;
			property = null;
		}
		return this._css(transitionname, '').each(function() {
			ani.stop(this, property, jumptoend);
		});
	}

	$.fn._transition = function(properties, d, e, c) {
		var $target = this,
			options = assignanimationoptions(d, e, c),
			p, setting, onend, onendfired;
		if ( transitionable ) {
			setting = [];
			for ( p in properties ) {
				if ( style.istransform(p) ) {
					p = support.transform;
				}
				setting.push([killcamels(p), ' ', options.time, 's ', (options.delay)? options.delay+'s ' : '', 'cubic-bezier(', ( cubicbeziers[options.easing] || cubicbeziers.ease ), ')'].join(''));
			}
			setting = setting.join(',');
			onend = options.onend;
			options.onend = function() {
				if ( !onendfired ) {
					$target.css(transitionname, '').unbind(transitionendnames, options.onend);
					setTimeout(function() {
						onend && onend.call($target[0]);
					}, 0);
					onendfired = true;
				}
			}
			setTimeout(function() {
				$target.each(function() {
					$(this).css(transitionname, setting)._css(properties).bind(transitionendnames, options.onend);
				});
			}, 0);
			return this;
		} else {
			return this.each(function() {
				ani.set(this, properties, options);
			});
		}
	}

	$.fn._fill = function($area, sizes) {
		return this.each(function() {
			filling(this, $area, sizes);
		});
	}

	$.fn.decideClass = function(classname, condition) {
		return this[condition ? 'addClass' : 'removeClass'](classname);
	}

	function filling(target, $area, _sizes) {

		if ( !$area ) {
			$area = $(target.parentNode);
		}
		if ( !$area.length ) {
			return false;
		}

		var position,
			sizes = _sizes || {},
			targetwidth = sizes.width || target.offsetWidth, targetheight = sizes.height || target.offsetHeight,
			areawidth = sizes.areawidth || $area[0].offsetWidth, areaheight = sizes.areaheight || $area[0].offsetHeight,
			rate, newwidth, newheight, marginleft, margintop;

		if (!targetwidth || !targetheight || !areawidth || !areaheight) {
			return false;
		}

		position = $area._css('backgroundPosition');
		if ( position ) {
			position = position.split(' ');
			position[0] = position[0] == 'center' ? 0.5 : position[0].indexOf('%') != -1 ? parseInt(position[0])/100 : 0;
			position[1] = position[1] == 'center' ? 0.5 : position[1].indexOf('%') != -1 ? parseInt(position[1])/100 : 0;
		}

		rate = ( targetwidth > targetheight )? areaheight/targetheight : areawidth/targetwidth;
		rate = ( areaheight > Math.round(targetheight*rate) )? areaheight/targetheight : ( areawidth > targetwidth*rate )? areawidth/targetwidth : rate;

		newwidth = Math.max(areawidth, Math.round(targetwidth*rate));
		newheight = Math.max(areaheight, Math.round(targetheight*rate));

		if (position) {
			if (position[0]) {
				marginleft = (areawidth-newwidth)*position[0];
			}
			if (position[1]) {
				margintop = (areaheight-newheight)*position[1];
			}
		}

		$(target).css({
			width: newwidth,
			height: newheight,
			marginLeft: marginleft || '',
			marginTop: margintop || ''
		});

	}

	function assignanimationoptions(d, e, c) {
		var options;
		if ( isobject(d) ) {
			options = { time: d.duration, loop: d.loop, delay: d.delay, bystep: d.bystep, rounding: d.rounding, easing: d.easing, onstart: d.start, onupdate: d.step, onend: d.complete };
		} else if ( typeof(c) == 'function' ) {
			options = { time: d, easing: e, onend: c };
		} else if ( typeof(e) == 'function' ) {
			options = ( typeof(d) == 'number' )? { time: d } : { easing: d }
			options.onend = e;
		} else if ( typeof(d) == 'function' ) {
			options = { onend: d };
		}
		if ( options.time === undefined ) {
			options.time = 400;
		}
		options.time /= 1000;
		if (options.delay && !isNaN(parseInt(options.delay))) {
			if (typeof(options.delay) == 'string') {
				options.autodelay = true;
			}
			options.delay = parseInt(options.delay)/1000;
		}
		return options;
	}

	function killcamels(property) {
		return property.replace(/([A-Z])/g, '-$1').toLowerCase();
	}

	$._event = (function() {

		var
			supporttouch = support.touch,
			typemap = supporttouch ? {mousedown: 'touchstart', mousemove: 'touchmove', mouseup: 'touchend'} : {};

		return {
			gettype: function(types) {
				var type, newtypes;
				if (supporttouch) {
					newtypes = {};
					for (type in types) {
						newtypes[typemap[type] || type] = types[type];
					}
					return newtypes;
				}
				return types;
			},
			getpoint: function(e) {
				e = e.originalEvent;
				if (e.touches || e.changedTouches) {
					return [
						e.touches[0] ? e.touches[0].pageX : e.changedTouches[0].pageX,
						e.touches[0] ? e.touches[0].pageY : e.changedTouches[0].pageY
					];
				}
				return [e.clientX, e.clientY];
			}
		}

	})();
	
	div = null;

	$(document.documentElement)
		.addClass(browser.os)
		.addClass(browser.chrome ? 'chrome' : browser.firefox ? 'firefox' : browser.opera ? 'opera' : browser.safari ? 'safari' : browser.ie ? 'ie ie'+browser.ie : '')
		.addClass(browser.webkit ? 'webkit' : '')
		.addClass(browser.ie && 8 > browser.ie ? 'ie8' : '')
		.addClass(browser.ios ? 'ios' : browser.android ? 'android' : '')
		.addClass(support.transition ? 'transition' : 'notransition')
		.addClass(support.transform ? 'transform' : 'notransform')
		.addClass(support.backgroundsize ? 'backgroundsize' : 'nobackgroundsize')
		.addClass(support.rgba ? 'rgba' : 'norgba')
		.addClass(support.svgimage ? 'svg' : 'nosvg')
		.addClass(support.pointerevents ? 'pointerevents' : 'nopointerevents')
		.addClass(support.opacity ? 'opacity' : 'noopacity');

	if (!window.console) {
		window.console = {};
		window.console.log = window.console.table = window.console.error = window.console.clear = function() {};
	}

	window.trace = (function() {
	
		var box = null,
			number = 1;
	
		function tostring(v) {
			var rv, i, max;
			if ( v === null ) {
				return 'null';
			} else if ( v === undefined ) {
				return 'undefined';
			} else if ( v == window ) {
				return '[object Window]';
			} else if ( v == document ) {
				return '[object HTMLDocument]';
			} else if ( v === true || v === false || typeof(v) == 'number' || typeof(v) == 'function' ) {
				return v;
			} else if ( typeof(v) == 'object' ) {
				if ( v.constructor == Array ) {
					rv = [];
					for ( i = 0, max = v.length; i < max; i++ ) {
						rv.push(tostring(v[i]));
					}
					return '['+ rv.join(',') +']';
				} else if ( v.constructor == String ) {
					return '"'+ v.replace(/\</g, '<') +'"';
				} else if ( v.constructor == Boolean || v.constructor === Number || v.constructor == RegExp ) {
					return v;
				} else if ( v.constructor == Date ) {
					return 'Date('+ v.getTime() +', '+ v +')';
				} else if ( v.each && v.bind ) {
					rv = [];
					for ( i = 0, max = v.length; i < max; i++ ) {
						rv.push(i +':'+ tostring(v[i]));
					}
					rv.push('length:'+ max);
					return '${'+ rv.join(',') +'}';
				} else if ( v.nodeType ) {
					return '[object '+ v.nodeName.toUpperCase() +' Element]';
				} else {
					rv = [];
					for ( i in v ) {
						rv.push('\''+ i +'\':'+ tostring(v[i]));
					}
					return '{'+ rv.join(',') +'}';
				}
			} else {
				return '"'+ ((v.replace)? v.replace(/\</g, '<') : v) +'"';
			}
		}
	
		function create() {
			if ( !box ) {
				box = document.createElement('ol');
				box.style.cssText = 'position:absolute;left:5px;top:5px;max-width:75%;font-family:verdana;font-size:9px;color:#000;line-height:1.35em;margin:0;padding:3px 3px 2px 38px;border:1px solid #000;background:#fff;display:none;z-index:10000;opacity:0.75;filter:alpha(opacity=75);';
				box.onclick = clear;
				addbox();
			}
		}

		function addbox() {
			if ( document.body ) {
				document.body.appendChild(box);
			} else {
				setTimeout(addbox, 10);
			}
		}

		function clear(){
			if ( box ) {
				box.innerHTML = '';
				box.style.display = 'none';
				number = 1;
			}
		}

		return {
			log: function() {
				for ( var i = 0, max = arguments.length, v = [], li = document.createElement('li'); i < max; i++ ) {
					v.push(tostring(arguments[i]));
				}
				li.style.cssText = 'list-style:decimal;margin-bottom:1px;padding:2px 3px 3px;background:'+ ((number%2)? '#eee;' : '#ddd;');
				li.innerHTML = v.join(', ');
				create();
				box.appendChild(li);
				box.style.display = 'block';
				number++;
			},
			fixed: function(flag) {
				create();
				box.style.position = ( flag === false )? 'absolute' : 'fixed';
			},
			clear: clear
		}
	
	})();

})(window.jQuery);

;(function($) {

	'use strict';

	if ( !$ || $.fn.xlider ) {
		return;
	}

	var
		$win = $(window),
		$doc = $(document.documentElement),
		$body = $(document.body),

		isMobile = $.browser.mobile,
		isIOS = $.browser.ios,
		isAndroid = $.browser.android,
		supportTransform = $.support.transform,
		supportTransition = $.support.transition,

		getEventType = $._event.gettype,
		getEventPoint = $._event.getpoint,

		regExpIsUL = /ul/i,

		windowWidth,
		resizeFunctions = [],

		last;

	$.fn.xlider = function(_option, value, pretendTo, noAnimation) {
		var forState;
		if (!_option || $.isPlainObject(_option)) {
			this.each(function() {
				xlider($(this), _option);
			});
		} else if (typeof(_option) == 'string') {
			if (_option == 'prev' || _option == 'next') {
				noAnimation = value;
			} else if (_option == 'toggleAuto') {
				forState = {v: 0, value: value};
				$(this).trigger('xlider-'+_option, forState, value);
				return forState.v;
			} else if (_option == 'change' || typeof pretendTo != 'string') {
				noAnimation = pretendTo;
			}
			this.trigger('xlider-'+_option, {to: value, pretendTo: pretendTo, noAnimation: noAnimation});
		}
		return this;
	}

	$win.resize(function() {
		windowWidth = $doc[0].clientWidth;
		$.each(resizeFunctions, function() {
			this();
		});
	});

	function xlider($box, option) {

		var option = option || {},

			endless = option.endless,
			arrows = option.arrows,
			arrowsTag = arrows ? arrows.constructor == Array ? 'pre' : typeof arrows == 'string' ? arrows : 'button' : '',
			paging = option.paging,
			pagingTag = paging ? paging.length && paging[0].nodeType ? 'pre' : typeof paging == 'string' ? paging : 'button' : '',
			useSwipe = option.swipe !== false,
			useFade = option.fade,
			animate = option.animate !== false,
			animateDuration = option.duration,
			autoPlay = option.autoPlay,
			useTransition = option.useTransition && supportTransition,
			numDisplay = option.numDisplay || 1,
			newstyle = option.newstyle || false,
			maxview = option.maxview || 5,
			mode = option.mode || 'all',

			eventMove = option.onMove,
			eventChange = option.onChange,
			eventChangeEnd = option.onChangeEnd,
			eventreset = option.reset,

			$wrapper,
			$arrows, $prev, $next,
			$paging, $pagingItems,

			$items = $box.children(),
			$fakeItem,

			$blocker,

			boxWidth, itemWidth, moveSize,
			downX, downY, baseX, swipeAngle, startTime, moved, realX, setX,

			multiMode = numDisplay > 1,
			classicMode = false,

			clickAble = true,
			blockerAdded = false,
			checkStart = false,
			changePhone = false,
			dragPoint = true,

			autoPlaying = !!autoPlay,
			autoPlayTimer = null,

			wrapperClassName = 'xlider-wrapper',

			zIndex = 0,
			limitCount = 1,
			lastX = 0,
			resetMover,
			realAni = true,
			resetting = false,

			i = 0, max = $items.length,

			nowPage = option.defaultPage && option.defaultPage > -1 ? Math.min(max-1, option.defaultPage) : 0,

			aniOption = {
				slide: {queue: false, step: onMove, easing: 'easeOutCubic', complete: changeEnd},
				back: {queue: false, step: onMove, easing: 'easeOutCubic', complete: changeEnd},
				fade: {queue: false, easing: 'easeOutSine', complete: changeEnd}
			};

		if (GALAXY.isPoorBrowser) {
			newstyle = false;
		}


		if (!$body.length) {
			$body = $(document.body);
		}

		if (!max) {
			return;
		}

		if (useFade) {
			useSwipe = true;
			endless = true;
		}

		if (regExpIsUL.test($box[0].nodeName)) {
			$wrapper = $box.addClass(wrapperClassName);
			$box = $wrapper.parent();
		} else if (2 > max && regExpIsUL.test($items[0].nodeName)) {
			$wrapper = $items.addClass(wrapperClassName);
			$items = $items.find('> li');
			max = $items.length;
		}
		if (!$wrapper) {
			$wrapper = $('<div class="'+ wrapperClassName +'" />').appendTo($box);
		}
		if ($wrapper.css('position') == 'static') {
			$wrapper.css('position', 'relative');
		}
		if ($wrapper.css('zIndex') == 'auto') {
			$wrapper.css('zIndex', 0);
		}
		$box.css('overflow', 'hidden');

		if (!useFade && endless && 2 > max) {
			endless = false;
		}

		if (arrows && max > 1) {
			if (arrowsTag == 'pre') {
				$prev = arrows[0];
				$next = arrows[1];
			} else {
				$arrows = $('<p class="arrows" />').appendTo($box);
				$prev = $('<'+ arrows +' class="prev">Prev</'+ arrows +'>').appendTo($arrows);
				$next = $('<'+ arrows +' class="next">Next</'+ arrows +'>').appendTo($arrows);
			}
			$prev.attr('data-flag', 'prev').click(toPrev);
			$next.attr('data-flag', 'next').click(toNext);
		} else if (2 > max) {
			if (arrows == 'pre') {
				arrows[0].remove();
				arrows[1].remove();
			}
			arrows = null;
		}

		if (paging) {
			if (pagingTag == 'pre') {
				$paging = $(paging);
				$pagingItems = $paging.children();
			} else {
				$paging = $('<p class="paging" />').appendTo($box);
				$pagingItems = [];
				for (i = 0; i < max; i++) {
					$pagingItems[i] = $('<'+pagingTag+' />');
					$pagingItems[i][0].innerHTML = i+1;
				}
			}
		}

		for (i = 0; i < max; i++) {
			$items[i] = $($items[i]);
			if (!newstyle) {
				$items[i] = $($items[i]).css({left: useFade ? 0 : '200%', top: 0, width: '100%', display: i == nowPage ? '' : 'none'});
				$items[i].appendTo($wrapper);
				$items[i].find('a, button, input, textarea').attr('data-xlider-page', i).focus(itemFocusablesFocused);
			} 
			if ($items[0].parent().parent().hasClass('g-contents')) {
				$items[i].addClass('hide');
			}
			if (paging) {
				$pagingItems[i] = $($pagingItems[i]).attr('data-page', i)
					.click(pagingClick)
					.appendTo($paging);
			}
		}

		function settingView() {
			if (newstyle) {
				if ($('html').hasClass('s'+mode) || (mode == 'all')) {
					if (!resetting) {
						if ($wrapper&&$wrapper.length) {
							for (i = 0; i < max; i++) {
								var actCounr = Math.ceil(maxview / 2);
								$items[i] =  $($items[i]).attr('data-call', i);
								if (i < actCounr) {
									var count = Math.ceil((max - 1) - i);
									$wrapper.prepend($items[count]);
								}
							}
						}
						resetting = true;
					}
					if ($wrapper&&$wrapper.length) {
						newcenterSet();
					}
				} else {
					if (resetting) {
						if ($wrapper&&$wrapper.length) {
							$wrapper.html('');
							for (i = 0; i < max; i++) {
								$items[i] =  $($items[i]).attr('data-call', i);
								$items[i].appendTo($wrapper);
								if (i == max-1) {
									eventreset && eventreset.call();
								}
							}
						}
						resetting = false;
					}
				}
			}
			
		}

		function pagingClick() {
			if (!newstyle) {
				jump({to: parseInt(this.getAttribute('data-page'))});
			} else {
				var page = $(this).attr('data-page');
				if (!clickAble || page == nowPage) {
					return false;
				}
				var center = $wrapper.find('> li.show').index();
				var allC = [];
				var full = $pagingItems.length;
				for (i = 0;i<full;i++) {
					allC[i] = $wrapper.find('> li').eq(i).attr('data-call');
				}
				var clickPAge = allC.indexOf(page);
				var countPage = clickPAge - center;
				if (realAni) {
					changeNew(countPage);
				}
			}
			return false;
		}

		function changeNew(idx) {
			realAni = false;
			var limitMg = Math.floor($wrapper.find(' > li').eq(max-1).css('marginLeft').replace('px', ''));
			var limit = $wrapper.find(' > li').eq(max-1).innerWidth() + (limitMg * 2);
			var thisinDex = $wrapper.find(' > li.show').index();
			var currinDex = $wrapper.find(' > li').eq(thisinDex+idx).attr('data-call');
			var field;
			var movedRe;
			var limitNew = 1;
			var half = limit / 2;
			var newCall;
			var transX = Math.ceil($wrapper.css('transform').split(',')[4]);
			if ($.browser.ie > 9) {
				transX = Math.ceil($wrapper.css('transform').split(',')[12]);
			}
			var caseOne = Math.abs(idx);
			var noX = 0;
			var fakeX = false;
			var time = 0;
			if ($.browser.mobile) {
				time = 10;
			}
			var remake = function () {
				if (idx > 0) {
					field = 0;
				} else {
					field = max - 1;
				}
				var lastCont = $wrapper.find('> li').eq(field).attr('data-call');
				$wrapper.find('> li').eq(field).remove();
				if (field != 0) {
					$wrapper.prepend($items[lastCont]);
				} else {
					$wrapper.append($items[lastCont]);
				}
				if (idx > 0) {
					noX = transX + (Math.abs(limit));
				} else {
					noX = transX - (Math.abs(limit));
				}
				limitNew++;
				fakeX = true;
			}
			newCall = setInterval(function () {
				var noWtransX = Math.ceil($wrapper.css('transform').split(',')[4]);
				if ($.browser.ie > 9) {
					noWtransX = Math.ceil($wrapper.css('transform').split(',')[12]);
				}
				if (fakeX) {
					movedRe = transX;
					fakeX = false;
				} else {
					if (idx > 0) {
						movedRe = noWtransX-(20);
					} else {
						movedRe = noWtransX+(20);
					}
				}
				$wrapper._css({translate3dX:movedRe});
				var noWtransX2 = Math.ceil($wrapper.css('transform').split(',')[4]);
				if ($.browser.ie > 9) {
					noWtransX2 = Math.ceil($wrapper.css('transform').split(',')[12]);
				}
				var movedRecheck = noWtransX2-transX;
				if (isMobile && changePhone) {
					movedRecheck = Math.abs(movedRecheck)+Math.abs(setX-transX);
				}
				if ((limit) < Math.abs(movedRecheck)) {
					remake();
				}
				if (limitNew == caseOne+1) {
					clearInterval(newCall);

					if (isMobile && changePhone) {
						$wrapper._css({translate3dX:setX});
					} else {
						$wrapper._css({translate3dX:transX});
					}
					nowPage = currinDex;
					setButtons();
					changeEnd();
					changePhone = false;
					if (isMobile) {
						setTimeout(function () {
							realAni = true;
							dragPoint = true;
						}, 100);
					} else {
						realAni = true;
						dragPoint = true;
					}
				}
			}, time);
		}

		if (useSwipe) {
			if (window.navigator.pointerEnabled) {
				$wrapper[0].style.cssText += 'touch-action: pan-y;';
			} else if (window.navigator.msPointerEnabled ){
				$wrapper[0].style.cssText += '-ms-touch-action: pan-y;';
			}
			$wrapper.bind(getEventType({mousedown: down}));
			$wrapper.bind('selectstart dragstart', function() {
				return false;
			});
		}

		function newcenterSet(idt) {
			if (newstyle) {
				var settingX = Math.ceil($wrapper.css('transform').split(',')[4]);
				if ($.browser.ie > 9) {
					settingX = Math.ceil($wrapper.css('transform').split(',')[12]);
				}
				var center = $win.width() / 2;
				var limitMg = Math.floor($wrapper.find(' > li').eq(max-1).css('marginLeft').replace('px', ''));
				var limit = $wrapper.find(' > li').eq(max-1).innerWidth();
				var thisIndex = $wrapper.find(' > li.show').offset().left;
				var moveAni = thisIndex + limit/2 - center;
				if (checkStart) {
					moveAni = thisIndex + limit/2 - center - settingX;
				}
				$wrapper._animate({translate3dX:-moveAni}, {duration: 550, easing: 'easeOutCubic', force3D: true});
				checkStart = true;
			}
		}

		

		$box.bind('xlider-prev', function(e, option) {
			toPrev(e, false, option.noAnimation);
		});
		$box.bind('xlider-next', function(e, option) {
			toNext(e, false, option.noAnimation);
		});
		$box.bind('xlider-jump', function(e, option) {
			jump(option);
		});
		$box.bind('xlider-change', function(e, option) {
			change(option);
		});
		$box.bind('xlider-toggleAuto', function(e, forState) {
			forState.v = toggleAuto(forState.value);
		});
		$box.bind('xlider-remove', function(e) {
			for (i = 0; i < max; i++) {
				$items[i].find('a, button, input, textarea').removeAttr('data-xlider-page');
				if (!regExpIsUL.test($wrapper[0].nodeName)) {
					$items[i].appendTo($box);
				}
				if (paging) {
					if (pagingTag != 'pre') {
						$pagingItems[i].remove();
					} else {
						$pagingItems[i].unbind('click');
					}
				}
			}
			$wrapper._css({position: '', translate3dX: ''}).removeClass(wrapperClassName);
			$wrapper.unbind(getEventType({mousedown: down}));
			if (!regExpIsUL.test($wrapper[0].nodeName)) {
				$wrapper.remove();
			}
			if (paging && pagingTag != 'pre') {
				$paging.remove();
			}
			if (arrows) { 
				if (arrowsTag != 'pre') {
					$prev.remove();
					$next.remove();
				} else {
					$prev.unbind('click');
					$next.unbind('click');
				}
			}
			$fakeItem && $fakeItem.remove();
			$blocker.remove();
			$box.unbind('xlider-prev xlider-next xlider-jump xlider-change xlider-toggleAuto xlider-remove');
			$box = $wrapper = $prev = $next = $pagingItems = null;
			for (i = 0, max = resizeFunctions.length; i < max; i++) {
				if (resizeFunctions[i] == resize) {
					resizeFunctions.splice(i, 1);
					break;
				}
			}
		});

		$blocker = $('<div class="blocker" style="position:absolute;left:0;top:0;width:100%;height:100%;background:#000;" />').css('opacity', 0);

		setButtons();
		resize();
		changeEnd();

		resizeFunctions.push(resize);

		function down(e) {

			clearAutoPlay();

			if (!clickAble) {
				realAni
			}

			downX = baseX = getEventPoint(e)[0];
			returnX = downX;

			if (isIOS && (15 > downX || downX > windowWidth-15)) {
				return true;
			}

			downY = getEventPoint(e)[1];
			startTime = new Date().getTime();

			moved = 0;
			swipeAngle = false;
			if  (!realAni && isMobile) {
				return false;
			}
			if (!dragPoint) {
				return false;
			}
			if ($.support.transform) {
				realX = Math.ceil($wrapper.css('transform').split(',')[4]);
				setX = Math.ceil($wrapper.css('transform').split(',')[4]);
				if ($.browser.ie > 9) {
					realX = Math.ceil($wrapper.css('transform').split(',')[12]);
					setX = Math.ceil($wrapper.css('transform').split(',')[12]);
				}
			}
			if (realX == undefined) {
				realX = 0;
				setX = 0;
			}
			$doc.bind(getEventType({mousemove: move, mouseup: up}));

		}

		var mapword = '',
			recount = true,
			returnX;

		function move(e) {
			var x = getEventPoint(e)[0],
				y = getEventPoint(e)[1],
				nowTime = new Date().getTime();


			if (swipeAngle === false) {
				swipeAngle = Math.abs((Math.atan2(downX-x, downY-y)*180)/Math.PI);
				if (45 > swipeAngle || swipeAngle > 135) {
					$doc.unbind(getEventType({mousemove: move, mouseup: up}));
					return true;
				}
			}
			if ($items[0].parent().parent().hasClass('g-contents')) {
				if (nowPage != 0) {
					$items[nowPage - 1].addClass('show');
					if ((max - 1) != nowPage) {
						$items[nowPage + 1].addClass('show');
					} else {
						$items[0].addClass('show');
					}
				} else {
					$items[nowPage + 1].addClass('show');
					$items[max - 1].addClass('show');
				} 
			}


			moved = x-downX;

			if (newstyle) {
				
				var movedcheck = x-returnX;
				var mapCheck = x-lastX;
				var faker = realX;
				var limitMg = Math.floor($wrapper.find(' > li').eq(max-1).css('marginLeft').replace('px', ''));
				var limit = $wrapper.find(' > li').eq(max-1).innerWidth() + (limitMg * 2);
				var half = limit / 2;
				if ((mapCheck > 0) && (lastX != 0) && (!isMobile)) {
					if (mapword == 'left') {
						recount = true;
						mapword = 'right';
					}
					if (recount) {
						limitCount = 1;
						recount = false;
						returnX = x;
					} 
					movedcheck = x-returnX;
					var caseOne = Math.abs(Math.floor((Math.abs(movedcheck) + limit) / limit) - limitCount + 1);
 					var remakeRi = function () {
						var lastCont = $wrapper.find('> li').eq(max-1).attr('data-call');
						$wrapper.find('> li').eq(max-1).remove();
						$wrapper.prepend($items[lastCont]);
						limitCount++;
						realX = faker - (Math.abs(limit) * caseOne);
					}
					if ((limit * limitCount) < (Math.abs(movedcheck) + half)) {
						for (i=0;i<caseOne;i++) {
							remakeRi();
						}
					}
					mapword = 'right';
				} else if ((mapCheck < 0) && (lastX != 0) && (!isMobile)) {
					if (mapword == 'right') {
						recount = true;
						mapword = 'left';
					}
					if (recount) {
						limitCount = 1;
						recount = false;
						returnX = x;
					}
					movedcheck = x-returnX;
					var caseOne = Math.abs(Math.floor((Math.abs(movedcheck) + limit) / limit) - limitCount + 1);
					var remakeLe = function () {
						var lastCont = $wrapper.find('> li').eq(0).attr('data-call');
						$wrapper.find('> li').eq(0).remove();
						$wrapper.append($items[lastCont]);
						limitCount++;
						realX = faker + (Math.abs(limit) * caseOne);
					}
					if ((limit * limitCount) < (Math.abs(movedcheck) + half)) {
						for (i=0;i<caseOne;i++) {
							remakeLe();
						}
					}
					mapword = 'left';
				}
				moved = realX+(x-downX);
			}
			if (!endless && (!nowPage || nowPage == max-1)) {
				moved /= 2;
			}

			if (!useFade) $wrapper._css('translate3dX', moved);
			onMove(moved);

			if (nowTime-300 > startTime) {
				startTime = nowTime;
				baseX = x;
			}

			if (!isMobile && !blockerAdded) {
				$blocker.appendTo($box);
				blockerAdded = true;
			}

			lastX = x;
			$(document).on('mouseleave', function () {
				if ($('html').hasClass('firefox')) {
					up(e)
				}
			});
			e.preventDefault();


		}

		function onMove(v, moveOnly) {
			var now = $.isPlainObject(v) ? v.translate3dX : v;
			moveOnly !== true && eventMove && eventMove.call($box, now);
		}

		function up(e) {

			var x = getEventPoint(e)[0],
				movedvalue = x - baseX;

			if (x != downX) {
				if (!newstyle) {
					if (10 > Math.abs(x-downX)) {
						back();
					} else if (!movedvalue || new Date().getTime()-startTime > 300) {
						if (moved > boxWidth/2 && (endless || nowPage)) {
							toPrev(false, true);
						} else if (-boxWidth/2 > moved && (endless || nowPage != max-1)) {
							toNext(false, true);
						} else {
							back();
						}
					} else {
						if (movedvalue > 0 && (endless || nowPage)) {
							toPrev(false, true);
						} else if (0 > movedvalue && (endless || nowPage != max-1)) {
							toNext(false, true);
						} else {
							back();
						}
					}
				} else {
					dragPoint = false;
					
					limitCount = 1;
					if (isMobile) {
						if (Math.abs(movedvalue) > 10) {
							if (movedvalue > 0) {
								if (realAni) {
									changeNew(-1);
								}
							} else {
								if (realAni) {
									changeNew(1);
								}
							}
							changePhone = true;
						} else {
							$wrapper._animate({translate3dX:setX}, {duration: 300, easing: 'easeOutCubic', force3D: true, complete: callEnd});
						}
					} else {
						$wrapper._animate({translate3dX:setX}, {duration: 300, easing: 'easeOutCubic', force3D: true, complete: callEnd});
					}
				}
			} else {
				setAutoPlay();
			}

			if (!isMobile && blockerAdded) {
				$blocker.detach();
				blockerAdded = false;
			}

			$doc.unbind(getEventType({mousemove: move, mouseup: up}));

		}
		function callEnd() {
			var center = $win.width() / 2;
			var allC = [];
			var allCsma = [];
			var full = $wrapper.find(' > li').length;
			for (i = 0;i<full;i++) {
				allC[i] = Math.abs($wrapper.find(' > li').eq(i).offset().left + ($wrapper.find(' > li').eq(i).innerWidth() / 2) - center);
				allCsma[i] = Math.ceil($wrapper.find(' > li').eq(i).offset().left + ($wrapper.find(' > li').eq(i).innerWidth() / 2) - center);
			}
			var currin = Math.min.apply(null, allC);
    		var curr;
    		if(!Array.indexOf){
		        for(var i=0; i<allC.length; i++){
		            if(allC[i]==currin){
		                curr = i;
		            }
		        }
			} else {
				curr = allC.indexOf(currin);
			}
			nowPage = $wrapper.find(' > li').eq(curr).attr('data-call');
			setButtons();
			changeEnd();
			dragPoint = true;
		}

		function back() {
			wrapperMove(0, 'back');
		}

		function change(option) {
			var nextPage, moveTo, page = parseInt(option.to);
			if (!clickAble) {
				return false;
			}
			nextPage = typeof page == 'number' && !isNaN(page) ? page : this.getAttribute ? parseInt(this.getAttribute('data-page')) : null;
			if ($items[0].parent().parent().hasClass('g-contents')) {
				if (nextPage != 0) {
					$items[nextPage - 1].addClass('show');
					if ((max - 1) != nextPage) {
						$items[nextPage + 1].addClass('show');
					}
				} else {
					$items[nextPage + 1].addClass('show');
				}
			}
			if (nextPage !== null && nextPage != nowPage && nextPage > -1 && max > nextPage) {

				resize();
				if (useFade) {
					fade(nextPage, option.noAnimation);
				} else {
					moveTo = (nowPage-nextPage)*moveSize;
					readyToMove(nextPage);
					wrapperMove(moveTo, 'slide', option.noAnimation);
				}
			}
			return false;
		}

		function toPrev(e, fromSwipe, noAnimation) {
			var nextPage;
			if (!clickAble || (!endless && !nowPage)) {
				return false;
			}
			if (!newstyle) {
				nextPage = !nowPage ? max-1 : nowPage-1;
				if (useFade) {
					fade(nextPage, noAnimation);
				} else {
					readyToMove(nextPage, 'prev', fromSwipe);
					wrapperMove(moveSize, 'slide', noAnimation);
				}
			} else {
				if (realAni) {
					changeNew(-1);
				}
			}
			e && e.preventDefault();
			return false;
		}

		function toNext(e, fromSwipe, noAnimation) {
			var nextPage;
			if (!clickAble || (!endless && nowPage == max-1)) {
				return false;
			}
			if (!newstyle) {
				nextPage = nowPage == max-1 ? 0 : nowPage+1;
				if (useFade) {
					fade(nextPage, noAnimation);
				} else {
					readyToMove(nextPage, 'next', fromSwipe);
					wrapperMove(-moveSize, 'slide', noAnimation);
				}
			} else {
				if (realAni) {
					changeNew(1);
				}
			}
			e && e.preventDefault();
			return false;
		}

		function jump(option) {
			var direction, page = option.to;
			if (!clickAble || page == nowPage) {
				return false;
			}
			if (useFade) {
				change(option);
			} else {
				for (i = 0; i < max; i++) {
					if (!$items[0].parent().parent().hasClass('g-contents')) {
						i != page && i != nowPage && $items[i].hide();
					} else {
						i != page && i != nowPage && $items[i].removeClass('show');
					}	
				}
				direction = option.pretendTo ? option.pretendTo : nowPage > page ? 'prev' : 'next';
				readyToMove(page, direction);
				wrapperMove(direction == 'prev' ? moveSize : -moveSize, 'slide', option.noAnimation);
			}
			return false;
		}

		function readyToMove(nextPage, prevOrNext, withoutDisplays) {
			var from, to;
			if (!withoutDisplays) {
				if (prevOrNext) {
					appendItem(nextPage, prevOrNext == 'next' ? '100%' : '-100%');
				} else {
					from = Math.min(nowPage, nextPage);
					to = Math.max(nowPage, nextPage);
					for (i = from; i <= to; i++) {
						if (i != nowPage) {
							appendItem(i, (i-nowPage)*100+'%');
						}
					}
				}
			}

			ready(nextPage);
		}

		function ready(nextPage) {
			clearAutoPlay();
			clickAble = false;
			nowPage = nextPage;
			setButtons();
			eventChange && eventChange.call($box, nowPage, max);
			resize();
		}

		function appendItem(target, left) {
			if (!newstyle) {
				(typeof target == 'number' ? $items[target] : target).css({position: 'absolute', left: left}).show();
			}
			if ((!$items[0].parent().parent().hasClass('g-contents')) && (!newstyle)) {
				(typeof target == 'number' ? $items[target] : target).addClass('show');
			}
			
		}

		function fade(nextPage, noAnimation) {
			var fadeDelay;
			clearTimeout(fadeDelay);

			if (animate && !noAnimation) {
				appendItem(nowPage, 0);
				if (useTransition) {
					$items[nowPage]._animate({opacity: 0}, aniOption.fade);
					fadeDelay = $items[nextPage].show()._animate({opacity: 1}, aniOption.fade);

				} else {
					$items[nowPage]._animate({opacity: 0}, aniOption.fade);
					fadeDelay = setTimeout(function () {
						$items[nextPage].show()._animate({opacity: 1}, aniOption.fade);
					},500);
				}
				nowPage = nextPage;
				setButtons();
				ready(nextPage)
			} else {
				changeEnd();
			}
		}

		function wrapperMove(value, aniOptionKey, noAnimation) {
			if ($items[0].parent().parent().hasClass('g-contents')) {
				$items[nowPage].addClass('show');
			}
			if (animate && !noAnimation) {
				if (useTransition) {
					$wrapper._transition({translate3dX: value}, aniOption[aniOptionKey]);
				} else {
					$wrapper._animate({translate3dX: value}, aniOption[aniOptionKey]);
				}
			} else {
				changeEnd();
			}
		}

		function setButtons() {
			for (i = 0; i < max; i++) {
				if (paging) {
					$pagingItems[i][ ( i == nowPage )? 'addClass' : 'removeClass' ]('on');
				}
			}
			if (!endless && arrows) {
				$prev[!nowPage ? 'addClass' : 'removeClass' ]('disabled');
				$next[nowPage == max-1 ? 'addClass' : 'removeClass' ]('disabled');
			}
		}

		function changeEnd() {
			var $prevItem, $nextItem, $nowItem;
			for (i = 0; i < max; i++) {
				if (i == nowPage) {
					$items[i].css({position: 'relative', left: 0}).addClass('xlider-current show');
					$prevItem = $items[!nowPage ? endless ? max-1 : -1 : nowPage-1],
					$nextItem = $items[nowPage == max-1 ? endless ? 0 : max : nowPage+1];
				} else {
					if ((!$items[0].parent().parent().hasClass('g-contents')) && (!newstyle)) {
						$items[i].hide().removeClass('xlider-current');
					} else {
						$items[i].removeClass('xlider-current show');
					}
				}
			}

			if ((!useFade) && (!newstyle)) {

				if ($fakeItem) {
					$fakeItem.remove();
					$fakeItem = null;
				}

				$wrapper._css('translate3dX', 0);

				$prevItem = $items[!nowPage ? endless ? max-1 : -1 : nowPage-1],
				$nextItem = $items[nowPage == max-1 ? endless ? 0 : max : nowPage+1],
				$nowItem = $items[nowPage];

				if (endless && $prevItem[0] == $nextItem[0]) {
					$fakeItem = $prevItem.clone().addClass('xlider-fake');
					$fakeItem.appendTo($wrapper);
					appendItem($fakeItem, itemWidth, true);
				}

				for (i = 0; i < max; i++) {
					if ($prevItem && $items[i][0] == $prevItem[0]) {
						appendItem(i, '-'+ itemWidth);
					} else if ($nextItem && $items[i][0] == $nextItem[0]) {
						appendItem(i, itemWidth);
					}
				}

			}
			if (newstyle) {
				$prevItem = $items[!nowPage ? endless ? max-1 : -1 : nowPage-1],
				$nextItem = $items[nowPage == max-1 ? endless ? 0 : max : nowPage+1],
				$nowItem = $items[nowPage];
			}


			clickAble = true;

			eventChangeEnd && eventChangeEnd.call($box, nowPage, max);

			setAutoPlay();

		}

		function autoPlayAction() {
			jump({to: nowPage == max-1 ? 0 : nowPage+1, pretendTo: 'next'});
		}

		function clearAutoPlay() {
			clearTimeout(autoPlayTimer);
		}

		function setAutoPlay() {
			clearAutoPlay();
			if (autoPlaying) {
				autoPlayTimer = setTimeout(autoPlayAction, autoPlay);
			}
		}

		function toggleAuto(value) {
			autoPlaying = typeof(value) == 'boolean' ? value : !autoPlaying;
			if (!autoPlaying) {
				clearAutoPlay();
			} else {
				setAutoPlay();
			}
			return autoPlaying;
		}

		function setWrapperMS() {
			if (animate) {
				aniOption.slide.duration = animateDuration || Math.max(450, Math.min(moveSize, 750));
				aniOption.back.duration = (animateDuration || aniOption.slide.duration)*0.75;
				aniOption.fade.duration = animateDuration || 200;
			}
		}

		function itemFocusablesFocused() {
			var index;
			if ($box) {
				index = parseInt(this.getAttribute('data-xlider-page'));
				$box[0].scrollLeft = 0;
				setTimeout(function() {
					$box[0].scrollLeft = 0;
				}, 0);
				$box.xlider('change', index, true);
			}
		}

		function resize() {
			boxWidth = $box[0].offsetWidth;
			itemWidth = multiMode ? $items[0][0].offsetWidth : '100%';
			moveSize = multiMode ? itemWidth : boxWidth;
			if (newstyle) {
				clearTimeout(resetMover);
				resetMover = setTimeout(function() {
					settingView();
				}, 100);
			}
			setWrapperMS();
		}
		
	}

	function cancelEvent(e) {
		e.preventDefault();
	}

	

})(window.jQuery);

;(function($) {

	window.GALAXY = {

		isMobile: $.browser.mobile,
		isPoorBrowser: $.browser.ie && 9 > $.browser.ie,

		swipeAble: !!(!!$.browser.mobile || window.PointerEvent || window.MSPointerEvent),
		parallaxAble: !($.browser.ie && 9 > $.browser.ie) && !$.browser.mobile && $.support.transition,

		areaWidth: 0,
		areaHeight: 0,

		prevSizeMode: -1,
		sizeMode: 0,

		scrollBarWidth: 0,
		scrollTop: 0,

		mediaBaseURL: window.MEDIA_BASE_URL || '/',

		isTestURL: location.href.indexOf('samsung.com') < 0,
		
		isGalaxy: location.pathname.indexOf('/global/galaxy') === 0 || window.IS_CAMPAIGN === true,

		isGPSI: navigator.userAgent.toLowerCase().replace(/ /g, '').indexOf('googlepagespeedinsights') != -1,

		scrollFunctions: [],
		resizeFunctions: [],
		readyFunctions: [],
		loadFunctions: [],
		
		initialized: false,
		
		dom: {
			header: $('#header').get(0) || $('header').get(0)
		},

		sections: function() {

			var
				$wrap = $('#galaxy-a-pdp-wrap'),
				$contents = $('#galaxy-a-pdp-contents'),
				$sections = $contents.children('[class^="m_"]'),
				$subNav = $wrap.find('#subnav'),

				$blocks = [],
				$children = null,

				keyvisual = null,
				keyvisualType2 = null,
				controls = [],

				isMobile = GALAXY.isMobile,
				isPoorBrowser = GALAXY.isPoorBrowser,

				transformName = $.support.transform,
				supportTransition = $.support.transition,
				supportTransform = $.support.transform,

				parallaxAble = GALAXY.parallaxAble,
				parallaxAbleTypes = /^(x|y|s|a|c)$/,
				parallaxFloatTypes = /^(s|a)$/,

				i = 0, j = 0, numSections = $sections.length,
				k, kmax,
				numBlocks;


			if ($.browser.ie && $.support.canvas) {
				!$(document.documentElement).hasClass('s1') && $sections.not('#kv, .m_spec_list').find('span[class*="ico_obj-"]').each(function() {
					GALAXY.imageResizeViaCanvas(this.children[0], this.children[0].offsetWidth, this.children[0].offsetHeight);
				});
				!$(document.documentElement).hasClass('s1') && !$(document.documentElement).hasClass('s2') && $sections.filter('.m_spec_list').find('span[class*="ico_obj-"]').each(function() {
					GALAXY.imageResizeViaCanvas(this.children[0], 200, 200);
				});
			}

			for (; i < numSections; i++, j++) {
				$blocks[j] = $($sections[i]);
				controls[j] = createControls($blocks[j]);
				if (!controls[j]) {
					for ($children = $blocks[j].children('[class^="m_"]'), k = 0, kmax = $children.length; k < kmax; j++, k++) {
						$blocks[j] = $($children[k]);
						controls[j] = createControls($blocks[j]);
					}
					if (kmax) {
						j--;
					} else {
						controls[j] = getArticleControl($blocks[j]);
					}
				}
			}
			numBlocks = $blocks.length;

			$contents.find('a[data-layer-toggle]').each(GALAXY.setLayerToggler);

			$.browser.ie && $('[class*="logo_galaxy-"] img').each(function() {
				var ieFix = this.getAttribute('data-ie-fix');
				if (ieFix != 'no') {
					this.src = this.src.replace('.png', (ieFix || '_ie') +'.png');
				}
			});


			keyvisual = (function() {

				var $visual = $sections.filter('#kv, #kv-type2'),
					$article = $visual.find('article'),
					$title = $article.find('[class*="f_header-"] .kv-title'),
					$text = $article.find('[class*="f_header-"] .kv-text'),
					$figure = $article.find('figure'),
					$image = $figure.find('img'),
					$video = $figure.find('video'),
					$preButton = $article.find('div.f_btn_pre'),

					imageDisplayed = false,
					tryToVideoPlay = false,

					minWidthBound = 0.75,
					sizeMode, areaWidth, areaHeight,
					show = false,
					type, setImage;


				if (!$visual.length) {
					GALAXY.header && GALAXY.header.onKeyVisualShow();
					return {resize: $.noop};
				}


				type = $visual.attr('id').match('kv-type([0-9])');
				type = type ? parseInt(type[1]) : 1;

				if (!isPoorBrowser) {
					$article.bind({'video-play-kv': videoPlay, 'video-pause-kv': videoPause});
				}
				$title.show();
				$text.show();
				$preButton.show();


				function videoPlay() {
					tryToVideoPlay = true;
					if (imageDisplayed) {
						$article.trigger('video-play');
					}
				}

				function videoPause() {
					tryToVideoPlay = false;
					$article.trigger('video-pause');
				}

				function onImageShow() {
					imageDisplayed = true;
					tryToVideoPlay && videoPlay();
				}

				function getMobileImageHeight() {
					for (var i = 0; i < $image.length; i++) {
						if ($image[i].offsetHeight) {
							return $image[i].offsetHeight;
						}
					}
				}

				setImage = {

					1: function() {

						var imageWidth = areaHeight/9*16,
							visualTop = '',
							visualWidth = Math.min(areaWidth, 1440),
							visualHeight = areaHeight;

						if (sizeMode > 2) {
							if (visualWidth > imageWidth) {
								imageWidth = visualWidth;
							}
							if (imageWidth*minWidthBound > visualWidth) {
								imageWidth = visualWidth/(minWidthBound*10)*10;
								visualHeight = Math.round(imageWidth/16*9);
							}
							if (imageWidth/16*9 > visualHeight) {
								visualTop = (visualHeight-imageWidth/16*9)/2;
							}
						} else {
							imageWidth = visualWidth = areaWidth;
							$figure.css('width', areaWidth);
							visualTop = (areaHeight-getMobileImageHeight())/2;
							visualHeight = areaHeight;
						}

						$visual.css({height: visualHeight});
						$figure.css({top: visualTop, width: imageWidth, marginLeft: Math.min(0, (visualWidth-imageWidth)/2)});
						$video.css('height', imageWidth*0.5625);

						setImage.after(500, 1500, $text.length ? 3000 : 2000, 1500);

					},

					2: function() {
						setImage.after(1000, 500, 2000);
					},

					after: function(delayForTitle, delayForText, delayForPreButton) {
						if (!show) {
							if ($title.get(0)) {
								$title.parent().show();
							} else {
								$text.parent().show();
							}
							if ($article.hasClass('invisible')) {
								onImageShow();
							} else {
								if (!isPoorBrowser) {
									if (GALAXY.sizeMode>1) {
									} else {
										onImageShow();
									}
								}
							}
							show = true;
						}
						GALAXY.header && GALAXY.header.onKeyVisualShow();
					}

				}

				return {
					scroll: function(v) {
					},
					resize: function resize(_sizeMode) {
						sizeMode = _sizeMode;
						areaWidth = Math.min(GALAXY.areaWidth, 1440);
						areaHeight = GALAXY.areaHeight;
						GALAXY.loadImage($image, setImage[type]);
					}
				};

			})();

			function createControls($section) {

				var className = $section.attr('class') || '',
					$children = $section.children().not('nav'),
					i = 0, numChildren = $children.length;

				if ((/^m_feature/).test(className) && (/article/i).test($section[0].nodeName)) {
					return getArticleControl($section);
				} else if (numChildren == 1) {
					if (className.indexOf('m_product_gallery') != -1) {
						return getProductGalleryControl($section);
					} else if (className.indexOf('m_content-colorset') != -1) {
						return getProductColorsetControl($children);
					} else if (className.indexOf('m_content-video') != -1) {
						return getVideoControl($children);
					} else {
						return getArticleControl($children);
					}
				} else if (className) {
					if (className.indexOf('m_spec_list') != -1) {
						return getSpecListControl($section);
					} else if (className.indexOf('m_content-slider') != -1) {
						return getSliderControl($section);
					} else if (className.indexOf('m_content-tab') != -1) {
						return getTabControl($section);
					}
				}

			}

			function getVideoControl($article) {

				var $figureContainer = $article.find('.f_container'),
					$playButton  = $figureContainer.find('a'),
					control = getArticleControl($article),
					added = false,
					videoId = '',
					videoParam = '';

				control.name = 'video';

				$playButton.click(function() {
					if (!added) {
						videoId = $playButton.attr('href').split('?v=')[1];
						videoParam = $playButton.attr('data-video-param');
						if (supportTransition) {
							GALAXY.setTransitionEndEvent($playButton.find('img.play'), addVideo);
							$article.parent().addClass('video-added');
						} else {
							addVideo();
						}
						added = true;
					}
					return false;
				});

				function addVideo() {
					$('<iframe frameborder="0" allowfullscreen="1" title="YouTube video player" src="'+ GALAXY.getYoutubePlayerLink(videoId, true, videoParam) +'"></iframe>')
						.appendTo($article).focus();
				}

				return control;

			}

			function getProductColorsetControl($article) {

				var $buttons = $article.find('nav a'),
					$images = $article.find('.f_container figure'),
					$fakeSlider = null,
					$fakeSliderItems = null,
					control = getArticleControl($article),
					prevColor = 0,
					nowColor = 0,
					i = 0, numColors = $buttons.length;
					
				
				if (!$images.get(0)||$images.length<2) {
					return getArticleControl($article);
				}

				control.name = 'colorset';

				if (GALAXY.swipeAble) {
					$fakeSlider = $('<div class="fake-slider" />');
					$fakeSliderItems = [];
				}
				for (; i < numColors; i++) {
					$buttons[i] = $($buttons[i]).attr('data-index', i)
						.bind('click', changeColor);
					$images[i] = $($images[i]).show();
					if (i && !isPoorBrowser) {
						$($images[i]).css('opacity', 0);
					}
					if ($fakeSlider) {
						$fakeSliderItems[i] = $('<div class="fake-slider-item" />').appendTo($fakeSlider);
					}
				}
				$images[0].css('zIndex', 1);

				if ($fakeSlider) {
					$fakeSlider.appendTo($article);
					$fakeSlider.xlider({
						endless: true,
						swipe: true,
						onMove: function(v) {
							var percent = Math.abs(v)/$fakeSlider[0].offsetWidth;
							$images[nowColor]._css({opacity: 1-percent});
							$images[0 > v ? nowColor == numColors-1 ? 0 : nowColor+1 : !nowColor ? numColors-1 : nowColor-1]
								.css('opacity', percent);
						},
						onChange: function(page) {
							setButtons(page);
						},
						onChangeEnd: function(page) {
							$images[nowColor]._css('translate3dX', 0);
							changed(page);
							onColorChanged();
						}
					});
				}

				function changeColor() {
					var index = parseInt(this.getAttribute('data-index'));
					if (nowColor != index) {
						setButtons(index);

						changed(index);
						
						$images[index].stop().css({zIndex: 1, opacity: 0, 'display': 'block'})
							.animate({opacity: 1}, 500, 'easeInOutSine', function () {
								onColorChanged();
							});
						$images[prevColor].stop().animate({'opacity': 0}, 500);
					}
					return false;
				}

				function setButtons(index) {
					$buttons[nowColor].removeClass('on');
					$buttons[index].addClass('on');
				}

				function changed(index) {
					prevColor = nowColor;
					nowColor = index;
				}

				function onChanging(v) {
					$images[prevColor].css('opacity', 1-v.opacity);
				}

				function onColorChanged() {
					$images[prevColor].css('zIndex', 0);
				}

				return control;

			}

			function getSpecListControl($section) {

				var
					$mask = $section.find('div.m_inner'),
					$list = $mask.find('> ul'),
					$moreButton = $section.find('div.m_more a'),
					$moreButtonText = $moreButton.find('em'),
					control = getArticleControl($section),
					opened = false;


				control.name = 'spec';

				$moreButton.click(more);
				$moreButtonText.html('Learn more');
				if (GALAXY.hashMenu == 'spec') {
					setTimeout(more, 1000);
				}


				function more() {
					if (!opened) {
						GALAXY.setHash('spec');
						GALAXY.setSmoothScrollTop($section[0].offsetTop + ($subNav.length ? -$subNav[0].offsetHeight : 0), 750);
						$mask._animate({height: $list[0].offsetHeight}, {queue: false, duration: 750, easing: 'easeInOutQuint', complete: onMore});
						opened = true;
					} else {
						less();
					}
					return false;
				}

				function onMore() {
					$mask.addClass('on').css('height', '');
					$moreButtonText.html('Close');
				}

				function less() {
					var $checker, lessHeight;
					if (opened) {
						GALAXY.setHash('');
						$checker = $mask.clone().removeClass('on').appendTo($mask.parent());
						lessHeight = $checker[0].offsetHeight;
						$checker.remove();
						$mask.__animate({height: lessHeight}, {queue: false, duration: 750, easing: 'easeInOutQuart', complete: onLess});
						opened = false;
					}
				}

				function onLess() {
					$mask.removeClass('on').css('height', '');
					$moreButtonText.html('Learn more');
				}

				return control;

			}

			function getProductGalleryControl($section) {

				var
					$body = $(document.body),

					$sliders = $section.find('div.m_list'),
					$sliderItems = [],
					$nav = $section.find('nav'),
					$prev = $nav.find('a[class$=prev]'),
					$next = $nav.find('a[class$=next]'),
					$colors = $nav.find('div.c_paging-type2 a'),
					$items = [],
					$opener = null,
					hashname = $section.attr('data-hash-name'),
					layerId = $section.attr('data-layer-id'),
					$layer = $((layerId===undefined||layerId==='') ? '#layer-gallery' : '#'+layerId),
					$layerColorName = $layer.find('.c_txt_ly-type1 em'),
					$layerList = $layer.find('ul.ly_gallery_list'),
					$layerPrev = $layer.find('button[class$=prev]'),
					$layerNext = $layer.find('button[class$=next]'),
					$layerPagingBox = $layer.find('div.m_paging_type1'),
					$layerClose = $layer.find('button.c_btn_close-type1'),
					$baseContentsArea = $('#galaxy-a-pdp-wrap'),
					$baseContentsClickable = null,

					$perspectiveImagesForRubbishIE,
					lastSettedPerspectiveImageName = 'ie...',

					layerAdded = false,
					layerSetted = false,
					layerPagingClick = false,

					hasListImage = $section.attr('data-has-list-image'),
					lastSizeMode = -1,
					regSizeModeImageName = /(_s[1-4])?\.png/,

					colorNames = [],

					nowPage = 0,
					nowLayerPage = 0,
					prevLayerPage = null,
					nowColor = 0,
					clickAble = true,
					isSincing = false,

					numSliderItems = $sliders.length,
					numPages = $sliders.first().find('> ul').length,
					numItems = $sliders.first().find('li').length,

					control = getArticleControl($section),
					
					readyClassName = 'product-gallery-ready-for-load',
					src = '',
					imageSizeMode = '',

					i = 0, j;

				if ((hashname === undefined) || (hashname === '')) {
					hashname = 'gallery';
				}


				if (hasListImage) {
					hasListImage += ',';
				}

				$colors.bind('click touchend', changeColor);

				for (; i < numSliderItems; i++) {
					$sliderItems[i] = $($sliders[i]);
					$colors[i] = $($colors[i]).attr('data-index', i);
					$items[i] = $sliderItems[i].find('li');
					for (j = 0; j < numItems; j++) {
						$items[i][j] = $($items[i][j]);
						$items[i][j].find('a').attr('data-index', j).click(showLayer);
						if (!isMobile && !isPoorBrowser) {
							$items[i][j].find('a').bind({mouseenter: itemHover, mouseleave: itemLeave, focus: itemHover, blur: itemLeave});
						}
						if (i==0) {
							src = GALAXY.setMediaBaseURL($items[i][j].find('img').attr('data-image'));
							if (hasListImage) {
								imageSizeMode = (hasListImage.indexOf(GALAXY.sizeMode+',') != -1) ? GALAXY.sizeMode : hasListImage.split(',')[0];
								src = src.replace(regSizeModeImageName, '_s'+ imageSizeMode +'.png');
							}
							$items[i][j].find('img').attr('src', src);
						} else {
							$items[i][j].find('img').addClass(readyClassName);
						}
					}
					colorNames[i] = $colors[i].text();
				}
				
				$section.bind('welcome', function() {
					$('.'+readyClassName).each(function() {
						src = GALAXY.setMediaBaseURL($(this).attr('data-image'));
						if (hasListImage) {
							imageSizeMode = (hasListImage.indexOf(GALAXY.sizeMode+',') != -1) ? GALAXY.sizeMode : hasListImage.split(',')[0];
							src = src.replace(regSizeModeImageName, '_s'+ imageSizeMode +'.png');
						}
						$(this).attr('src', src).removeClass(readyClassName);
					});
				});

				$sliders.xlider({
					swipe: GALAXY.swipeAble,
					onChange: function(page) {
						isSliding = true;
						if (!isSincing) {
							setButtons(page);
						}
					},
					onChangeEnd: function() {
						if (!isSincing) {
							isSliding = false;
						}
					}
				});
				$prev.click(function() {
					for (var i = 0; i < numSliderItems; i++) {
						isSincing = i != nowColor;
						$sliderItems[i].xlider('prev', i != nowColor);
					}
					isSincing = false;
					return false;
				});
				$next.click(function() {
					for (var i = 0; i < numSliderItems; i++) {
						isSincing = i != nowColor;
						$sliderItems[i].xlider('next', i != nowColor);
					}
					isSincing = false;
					return false;
				});

				control.setSizeMode = function(sizeMode) {
					if (lastSizeMode != sizeMode) {
						hasListImage && setSizeModeImages(sizeMode);
						lastSizeMode = sizeMode;
					}
					resizeLayer();
				}
				control.name = 'product-gallery';

				setButtons(0);
				colorChanged();

				if (GALAXY.hashMenu == hashname) {
					$sliderItems[nowColor].find('a').eq(0).click();
				}


				function setSizeModeImages(sizeMode) {
					var imageSizeMode = (hasListImage.indexOf(sizeMode+',') != -1) ? sizeMode : hasListImage.split(',')[0];
					$section.find('div.m_list img').each(function() {
						var src = this.src.replace(regSizeModeImageName, '_s'+ imageSizeMode +'.png');
						if (this.src!=src) {
							this.src = src;
						}
					});
				}

				function itemHover() {
					!isSliding && itemFocusing(parseInt(this.getAttribute('data-index')));
				}

				function itemLeave() {
					!isSliding && itemFocusing(-1);
				}

				function itemFocusing(index) {
					var sizeMode = GALAXY.sizeMode;
					for (i = 0, $currentItems = $items[nowColor]; i < numItems; i++) {
						$currentItems[i]._stop()._animate({opacity: (index == -1 || i == index) ? 1 : 0.5}, {queue: false, duration: 350, easing: 'easeOutQuad'});
					}
				}

				function showLayer() {
					var index = parseInt(this.getAttribute('data-index'));
					if (!layerAdded) {
						$baseContentsClickable = $baseContentsArea.find('a,input,select,textarea,button,video,iframe');
						$baseContentsClickable.each(function() {
							var tabindex = $(this).attr('tabindex');
							if (tabindex!==undefined&&tabindex!==null) {
								$(this).data('prev-tabindex', tabindex);
							}
							$(this).attr('tabindex','-1');
						});
						$opener = $(this);
						setLayerContent();
						$layerColorName.html(colorNames[nowColor]);
						$layerList.xlider('change', index, true);
						if (!isPoorBrowser) {
							$layerList[0].children[index].style.opacity = 1;
						}
						$layer.addClass('show');
						GALAXY.setHash(hashname);
						GALAXY.noScroll.on();
						layerAdded = true;
						resizeLayer();
					}
					return false;
				}

				function setLayerContent() {

					var $images = $sliderItems[nowColor].find('img'),
						$imageButtons = $sliderItems[nowColor].find('a'),
						$layerImages, i;

					if (!layerSetted) {
						for (i = 0; i < numItems; i++) {
							$('<li><span><img alt=""></span></li>').appendTo($layerList);
							$('<a href="#"><span>'+ $images[i].alt +'</span></a>').appendTo($layerPagingBox);
						}
						for ($layerImages = $layerList.find('img'), i = 0; i < numItems; i++) {
							$layerImages[i].alt = $images[i].alt;
						}
						$layerClose.bind('click touchend', hideLayer);
						$layerPagingBox.find('a').click(function() {
							layerPagingClick = true;
						}).each(function(i) {
							var omni = $imageButtons.eq(i).attr('data-omni');
							if (omni&&omni.length>0) {
								$(this).attr({'data-omni':omni}).click(GALAXY.tracking);
							}
						});
						$layerList.xlider({
							endless: true,
							swipe: GALAXY.swipeAble,
							onMove: !isPoorBrowser ? onLayerSliderMove : null,
							arrows: [$layerPrev, $layerNext],
							paging: $layerPagingBox,
							onChange: function(page) {
								prevLayerPage = nowLayerPage;
								nowLayerPage = page;
							},
							onChangeEnd: function(page) {
								prevLayerPage = null;
								layerPagingClick = false;
							}
						});
						$layer.bind('touchmove', GALAXY.preventDefault);
						layerSetted = true;
					}

					for ($layerImages = $layerList.find('img'), i = 0; i < numItems; i++) {
						$layerImages[i].src = $images[i].src.replace(regSizeModeImageName, '.png');
					}
					if (hasListImage && $.browser.ie) {
						$perspectiveImagesForRubbishIE = $layerList.find('img[src*="-perspective"]');
					}

				}

				function checkPerspectiveImageSize() {
					var imageName;
					if ($perspectiveImagesForRubbishIE) {
						imageName = $layerList[0].offsetHeight > 650 ? '' : '_m';
						if (imageName != lastSettedPerspectiveImageName) {
							$perspectiveImagesForRubbishIE.each(function() {
								this.src = this.src.replace(/(_m)?\.png/i, imageName +'.png');
							});
							lastSettedPerspectiveImageName = imageName;
						}
					}
				}

				function onLayerSliderMove(now) {

					if (layerPagingClick) {
						return;
					}

					return;

					var children = $layerList[0].children,
						minWidth = $layerList[0].offsetWidth/3,
						maxWidth = minWidth*2,
						currentIndex = prevLayerPage !== null ? prevLayerPage : nowLayerPage,
						percent, i = 0;

					for (; i < numItems; i++) {
						if (i == currentIndex) {
							percent = 1-Math.min(1, Math.abs(now)/minWidth);
							children[i].style.opacity = percent;
						} else if ((now > 0 && (i == currentIndex-1 || i == numItems-1)) ||
							(0 > now && (i == currentIndex+1 || i == 0))) {
							percent = Math.max(0, Math.min(1, (Math.abs(now)-maxWidth)/minWidth));
							children[i].style.opacity = percent;
						}
					}

				}

				function resizeLayer() {
					if (layerAdded) {
						$layerList.css('marginTop', ($layerList[0].parentNode.offsetHeight-$layerList[0].offsetHeight)/2);
						checkPerspectiveImageSize();
					}
				}

				function hideLayer() {
					$layer.removeClass('show');
					$baseContentsClickable.each(function() {
						var tabindex = $(this).data('prev-tabindex');
						if (tabindex!==undefined&&tabindex!==null) {
							$(this).attr('tabindex',tabindex);
						} else {
							$(this).removeAttr('tabindex');
						}
					});
					$opener && $opener.focus();
					$opener = null;
					GALAXY.setHash('');
					GALAXY.setTransitionEndEvent($layer, function() {
						GALAXY.noScroll.off();
					});
					layerAdded = false;
					lastSettedPerspectiveImageName = '...';
					return false;
				}

				function changeColor() {
					var index;
					if (clickAble) {
						index = parseInt(this.getAttribute('data-index'));
						if (index != nowColor) {
							clickAble = false;
							if (!isPoorBrowser) {
								$sliderItems[nowColor]._animate({opacity: 0}, {queue: false, duration: 500, easing: 'easeInOutQuad'});
								$sliderItems[index].addClass('over')
									.css({zIndex: 1, opacity: 0}).show()
									._animate({opacity: 1}, {queue: false, duration: 500, easing: 'easeInOutQuad', complete: colorChanged});
							}
							nowColor = index;
							for (i = 0; i < numSliderItems; i++) {
								$($colors[i]).decideClass('on', i == nowColor);
							}
							if (isPoorBrowser) {
								$sliderItems[index].css({zIndex: 1}).show();
								colorChanged();
							}
						}
					}
					return false;
				}

				function colorChanged() {
					clickAble = true;
					for (i = 0; i < numSliderItems; i++) {
						$sliderItems[i].removeClass('over').css({zIndex: 0});
						if (i != nowColor) {
							$sliderItems[i].hide();
						}
					}
				}

				function setButtons(_nowPage) {
					var i;
					nowPage = _nowPage;
					$prev.decideClass('hide', !nowPage);
					$next.decideClass('hide', nowPage == numPages-1);

					if (!nowPage) {
						$prev.attr('tabindex', -1).css('zIndex', -1);
						$prev.on('click', function () {
							$next.focus();
						});
					}else {
						$prev.attr('tabindex', 0).css('zIndex', 2);
					}
					if (nowPage == numPages-1) {
						$next.attr('tabindex', -1).css('zIndex', -1);
					}else {
						$next.attr('tabindex', 0).css('zIndex', 2);
						$next.on('click', function () {
							$prev.focus();
						});
					}
					isSincing = true;
					for (i = 0; i < numSliderItems; i++) {
						i != nowColor && $sliderItems[i].xlider('change', nowPage, true);
					}
					isSincing = false;
				}

				return control;
				
			}
			
			function getSliderControl($section) {

				var $nav = $section.find('> nav'),
					$items = $section.children().not('nav, .fixedCont'),
					$slider = $items.wrapAll('<div style="height: 100%;" />').parent(),
					$prev = $nav.find('a[class*=-prev]'),
					$next = $nav.find('a[class*=-next]'),
					$pagingBox = $nav.find('[class^="m_paging_type"]'),
					$paging = [],
					controls = [],
					pagingOmnitureBase = $pagingBox.attr('data-omni'),
					pagingNameBase = $pagingBox.attr('data-alt'),
					pagingIsNumbering = $pagingBox.hasClass('numbering'),
					lastVisiblePercent = 0,
					lastVisibility = false,
					lastInvisibility = true,
					regThemeArrow = /m_btn_type([0-9]+)/,
					regThemePage = /m_paging_type([0-9]+)/,
					themeArrowDefault = 1,
					themePageDefault = 1,
					nowPage = -1,
					i = 0, numItems = $items.length,
					gaer360Swipe = GALAXY.swipeAble;

				if (regThemeArrow.test($prev.attr('class'))) {
					themeArrowDefault = parseInt($prev.attr('class').match(regThemeArrow)[1]);
				}
				if (regThemePage.test($pagingBox.attr('class'))) {
					themePageDefault = parseInt($pagingBox.attr('class').match(regThemePage)[1]);
				}
				if (pagingNameBase == undefined) {
					pagingNameBase = $section[0].parentNode.className.indexOf('m_content_sub') != -1 ? 'Sub Feature' : 'Feature';
				}
				pagingNameBase = pagingNameBase ? pagingNameBase +' ' : '';

				for (; i < numItems; i++) {
					$items[i] = $($items[i]).bind('tab-changed', setTheme);
					if (!pagingIsNumbering) {
						$paging[i] = $('<a href="#" data-page="'+ i +'"'+ (
							pagingOmnitureBase ? ' data-omni="'+ pagingOmnitureBase.replace('<no>', (i+1)) +'"' : '') +'><span>'+ pagingNameBase + (i+1) +'</span></a>')
							.click(changePage)
							.appendTo($pagingBox);
					}
					controls[i] = createControls($($items[i]));
				}
				if (pagingIsNumbering) {
					$paging = $('<span />').appendTo($pagingBox);
				}
				if ( $section.hasClass('m_content-slider') ) {
					$section.each(function() {
						if ( $(this).hasClass('videos') ) {
							$(this).find('.m_paging_type2 a').each(function() {
								var index = $(this).index();
								$(this).attr('data-omni', ':banner_left:index_' + (index + 1));
							});
						} else if ( $(this).hasClass('banners') ) {
							$(this).find('.m_paging_type2 a').each(function() {
								var index = $(this).index();
								$(this).attr('data-omni', ':banner_right:index_' + (index + 1));
							});
						}
					});
				}
				if ($section.attr('id') == 'quality') gaer360Swipe = false;

				$slider.xlider({
					swipe: gaer360Swipe,
					onChange: setButtons,
					endless: $('.main_contents').find($section),
					onChangeEnd: setVisibles
				});
				$prev.click(function() {
					$slider.xlider('prev');
					return false;
				});
				$next.click(function() {
					$slider.xlider('next');
					return false;
				});
				setButtons(0);


				function changePage() {
					var page = parseInt(this.getAttribute('data-page'));
					$slider.xlider('jump', page);
					return false;
				}

				function setButtons(_nowPage) {
					nowPage = _nowPage;
					if (pagingIsNumbering) {
						$paging.html((nowPage+1) +'/'+ numItems);
					} else{
						for (i = 0; i < numItems; i++) {
							$paging[i].decideClass('on', i == nowPage);
						}
					}
					if ( ! $('.main_contents').find($section) ) {
						$prev.decideClass('hide', !nowPage);
						$next.decideClass('hide', nowPage == numItems-1);
					}
					setTheme();
					$section.trigger('xlider-changed', {page: nowPage});
				}

				function setTheme() {
					if (0 > nowPage) {
						return;
					}
					var $currentItem = controls[nowPage].name == 'tab' ? controls[nowPage].getCurrentItem() : $items[nowPage],
						themeArrow = $currentItem.attr('data-theme-arrow') || themeArrowDefault,
						themePage = $currentItem.attr('data-theme-page') || themePageDefault;
					$prev.attr('class', $prev.attr('class').replace(regThemeArrow, 'm_btn_type'+ themeArrow));
					$next.attr('class', $next.attr('class').replace(regThemeArrow, 'm_btn_type'+ themeArrow));
					$pagingBox.attr('class', $pagingBox.attr('class').replace(regThemePage, 'm_paging_type'+ themePage));
				}

				function setVisibles() {
					setParallax(lastVisiblePercent);
					setVisible(lastVisibility);
					setInvisible(lastInvisibility);
					for (i = 0; i < numItems; i++) {
						i != nowPage && controls[i].resetVideo();
					}
				}

				function setParallax(visiblePercent) {
					lastVisiblePercent = visiblePercent;
					for (var i = 0; i < numItems; i++) {
						controls[i].setParallax(visiblePercent);
					}
				}

				function setVisible(visible) {
					lastVisibility = visible;
					for (var i = 0; i < numItems; i++) {
						controls[i].setVisible(i == nowPage ? visible : false);
					}
				}

				function setInvisible(invisible) {
					lastInvisibility = invisible;
					for (var i = 0; i < numItems; i++) {
						controls[i].setInvisible(2 >Math.abs(nowPage-i) ? invisible : true);
					}
				}

				return {
					name: 'slider',
					resetVideo: function() {	
						for (var i = 0; i < numItems; i++) {
							controls[i].resetVideo();
						}
					},
					setSizeMode: function(sizeMode) {	
						for (var i = 0; i < numItems; i++) {
							controls[i].setSizeMode(sizeMode);
						}
					},
					setParallax: setParallax,
					setVisible: setVisible,
					setInvisible: setInvisible
				}

			}

			function getTabControl($section) {

				var $nav = $section.find('> nav'),
					$items = $section.children().not($nav),
					$tabs = $nav.find('a'),
					$itemHeaders = [],
					controls = [],
					lastVisibility = false,
					lastInvisibility = true,
					lastZIndex = 0,
					nowIndex = -1,
					isNewTabModule = $nav[0].className.indexOf('c_tab2-') != -1,
					isFirst = true,
					i = 0, numItems = $items.length;


				for (; i < numItems; i++) {
					$items[i] = $($items[i]);
					if (isNewTabModule) {
						$itemHeaders[i] = $items[i].find('[class*="f_header-"]');
					}
					controls[i] = createControls($items[i]);
				}
				$tabs.click(tabChange).eq(0).click();


				function tabChange() {
					var index = $tabs.index(this),
						i = 0;
					if (index != nowIndex) {
						nowIndex = index;
						$items[index].css({left: 0, zIndex: ++lastZIndex});
						if (!isPoorBrowser) {
							$items[index].css({opacity: 0})
								.animate({opacity: 1}, {queue: false, duration: 500, easing: 'easeInOutQuad', complete: setVisibles});
								if (!isFirst&&$.browser.firefox) {
									setVisibles();
								}
						}
						$nav.css('zIndex', lastZIndex+1);
						$tabs.removeClass('on').eq(index).addClass('on');
						$section.trigger('tab-changed');
						resize(GALAXY.sizeMode, !isFirst);
						if (isFirst) {
							$nav.show();
							isFirst = false;
						}
					}
					return false;
				}

				function setVisibles() {
					setVisible(lastVisibility);
					setInvisible(lastInvisibility);
				}

				function setVisible(visible) {
					lastVisibility = visible;
					for (var i = 0; i < numItems; i++) {
						controls[i].setVisible(i == nowIndex ? visible : false);
					}
				}

				function setInvisible(invisible) {
					lastInvisibility = invisible;
					for (var i = 0; i < numItems; i++) {
						controls[i].setInvisible(i == nowIndex ? invisible : true);
					}
				}

				function resize(sizeMode, animate) {
					for (var i = 0; i < numItems; i++) {
						controls[i].setSizeMode(sizeMode);
					}
					if (isNewTabModule) {
						$nav['_'+ (isPoorBrowser || animate !== true ? 'css' : 'animate')]({top: $itemHeaders[nowIndex][0].offsetTop+$itemHeaders[nowIndex][0].offsetHeight},
							{duration: 500, easing: 'easeInOutCubic'});
					}
				}

				return {
					name: 'tab',
					getCurrentItem: function() {
						return $items[nowIndex];
					},
					resetVideo: function() {	
						for (var i = 0; i < numItems; i++) {
							controls[i].resetVideo();
						}
					},
					setSizeMode: resize,
					setParallax: function(visiblePercent) {
						for (var i = 0; i < numItems; i++) {
							controls[i].setParallax(visiblePercent);
						}
					},
					setVisible: setVisible,
					setInvisible: setInvisible
				}

			}

			function getArticleControl($article) {

				var $figures = $article.find('figure'),
					$images = $article.find('figure img'),
					$parallaxs = null,

					imageSources = [],
					parallaxs = [],

					videos = [],
					hasVideo = false,
					videoPlaying = false,
					videoHided = false,

					show = false,
					visible = false,
					invisible = false,
					welcome = true,
					hello = [],

					isKeyvisual = $article.parent().attr('id') == 'kv',
					isParallaxVideo = false,

					$parallaxer = $({p: 0}),
					parallaxAnimateOption = {queue: false, duration: 850, bystep: false, rounding: false, easing: 'easeOutQuint', step: onParallaxAnimate},

					i, j, max;


				for (i = 0, max = $figures.length; i < max; i++) {

					$figures[i] = $($figures[i]);

					$images[i] = $($images[i]);
					imageSources[i] = GALAXY.getImageSources($images[i]);

					videos[i] = GALAXY.setVideoControl($figures[i], $article);

					hasVideo = hasVideo || videos[i];

					isParallaxVideo = isParallaxVideo || $figures[i].attr('data-parallax-video');

				}

				$parallaxs = $article.find('[data-parallax]');
				for (i = 0, max = $parallaxs.length; i < max; i++) {
					$parallaxs[i] = $($parallaxs[i]);
					parallaxs[i] = $parallaxs[i].attr('data-parallax');
					if (parallaxs[i]) {
						parallaxs[i] = parallaxs[i].split('|');
						for (j = 0; j < parallaxs[i].length; j++) {
							parallaxs[i][j] = parallaxs[i][j].split(',');
							if (parallaxAbleTypes.test(parallaxs[i][j][0])) {
								parallaxs[i][j][10] = parallaxs[i][j][0].toLowerCase();
								parallaxs[i][j].shift();
							} else {
								parallaxs[i][j][9] = 'y';
							}
							if (parallaxs[i][j][9] != 'c') {
								parallaxs[i][j][0] = parseFloat(parallaxs[i][j][0]);
								parallaxs[i][j][1] = parallaxs[i][j][0]-parseFloat(parallaxs[i][j][1]);
								if (parallaxs[i][j][2] !== undefined) {
									parallaxs[i][j][5] = parseFloat(parallaxs[i][j][2]);
								}
								if (parallaxs[i][j][3] !== undefined) {
									parallaxs[i][j][6] = parseFloat(parallaxs[i][j][3]);
								}
								parallaxs[i][j][2] = 0;
								parallaxs[i][j][3] = 0;
								parallaxs[i][j][4] = 0;
								if (parallaxs[i][j][9] == 's') {
									parallaxs[i][j][2] = parallaxs[i][j][0];
								}
							}
						}
					}
				}
				
				hello = $article.data('hello');
				if (!hello) {
					hello = [];
				}

				function onParallaxAnimate(v) {
					for (var properties, value, transform,
							i = 0, j, max = $parallaxs.length; i < max; i++) {
						for (j = 0, properties = {}, transform = '';
								j < parallaxs[i].length; j++) {
							if (parallaxs[i][j][9] == 'c') {
								continue;
							}
							value = parallaxs[i][j][3]+(parallaxs[i][j][4]-parallaxs[i][j][3])*v.p;
							properties[parallaxs[i][j][9]] = parallaxs[i][j][2] = value;
						}
						$parallaxs[i][0].style[transformName] = [
								'scale(', properties.s !== undefined ? properties.s : 1, ', ', properties.s !== undefined ? properties.s : 1, ')', ' ',
								'translate3d(', properties.x || 0, 'px, ', properties.y || 0, 'px, 0)'
							].join('');
						if (properties.a !== undefined) {
							$parallaxs[i][0].style.opacity = properties.a;
						}
					}
				}

				function resetVideo() {
					hasVideo && $article.trigger('video-reset');
				}
				

				return {

					name: 'article',
					resetVideo: resetVideo,

					setSizeMode: function(sizeMode) {
						for (var newSrc, i = 0, max = $figures.length; i < max; i++) {
							newSrc = ''+imageSources[i][sizeMode];
							if ($images[i][0] && $images[i][0].src && ($images[i][0].src.indexOf(newSrc.replace('/','')) == -1)) {
								$images[i][0].src = GALAXY.setMediaBaseURL(newSrc);
							}
							if (hasVideo) {
								$article.trigger('video-change');
								if (3 > sizeMode && !videoHided) {
									$article.trigger('video-hide');
									videoHided = true;
								} else if (sizeMode > 2) {
									if (videoHided) {
										$article.trigger('video-show');
										videoHided = false;
									} else {
										if (GALAXY.prevSizeMode!==sizeMode) {
											$article.trigger(isKeyvisual ? 'video-play-kv' : 'video-play');
										}
									}
								}
							}
						}
					},

					setParallax: function(visiblePercent) {
						var i, j, max, valueTo, sizeMode;
						if (parallaxAble) {
							visiblePercent = Math.max(0, visiblePercent, Math.min(1, visiblePercent));
							sizeMode = GALAXY.sizeMode;
							$parallaxer._stop();
							if (3 > sizeMode) {
								for (i = 0, max = $parallaxs.length; i < max; i++) {
									for (j = 0; j < parallaxs[i].length; j++) {
										parallaxs[i][j][2] = 0;
									}
									$parallaxs[i][0].style[transformName] = $parallaxs[i][0].style.opacity = '';
								}
							} else {
								for (i = 0, max = $parallaxs.length; i < max; i++) {
									for (j = 0; j < parallaxs[i].length; j++) {
										if (parallaxs[i][j][9] == 'c') {
											window[parallaxs[i][j][0]] && window[parallaxs[i][j][0]](visiblePercent);
										} else {
											parallaxs[i][j][3] = parallaxs[i][j][2];
											valueTo = parallaxs[i][j][0]-parallaxs[i][j][1]*visiblePercent;
											if (parallaxs[i][j][5] !== undefined) {
												valueTo = Math.max(parallaxs[i][j][5], valueTo);
											}
											if (parallaxs[i][j][6] !== undefined) {
												valueTo = Math.min(parallaxs[i][j][6], valueTo);
											}
											if (sizeMode == 3 && parallaxs[i][j][9] != 's' && parallaxs[i][j][9] != 'a') {
												valueTo *= 0.75;
											}
											if (!parallaxFloatTypes.test(parallaxs[i][j][9])) {
												valueTo = Math.round(valueTo);
											}
											parallaxs[i][j][4] = valueTo;
										}
									}
								}
								$parallaxer[0].p = 0;
								$parallaxer._animate({p: 1}, parallaxAnimateOption);
							}

							if (hasVideo && !videoHided && isParallaxVideo && visiblePercent && 1 > visiblePercent) {
								$article.trigger('video-parallax', visiblePercent);
							}

						}
					},

					setVisible: function(_visible) {
						if (_visible) {
							if (!show) {
								$article.addClass('show');
								show = true;
							}
							if (!visible) {
								$article.addClass('visible').trigger('visible');
								visible = true;
							}
							if (hasVideo && !videoPlaying && !isParallaxVideo) {
								$article.trigger(isKeyvisual ? 'video-play-kv' : 'video-play');
								videoPlaying = true;
							}
						} else {
							if (visible) {
								$article.removeClass('visible');
								visible = false;
							}
						}
					},

					setInvisible: function(_invisible) {
						if (_invisible) {
							if (!invisible) {
								if (hasVideo && videoPlaying && !isParallaxVideo) {
									$article.trigger(isKeyvisual ? 'video-pause-kv' : 'video-pause');
									videoPlaying = false;
								}
								if (hello.length) {
									$.each(hello, function(i) {
										if ($article.hasClass(this.css)) {
											if (typeof(this.off)=='function') {
												this.off();
											}
											$article.removeClass(this.css);
										}
									});
								}
								$article.addClass('invisible').trigger('inactive').trigger('invisible');
								resetVideo();
								invisible = true;
								this.updateHelloPosition();
							}
						} else {
							if (invisible) {
								$article.removeClass('invisible').trigger('active');
								invisible = false;
							} else {
								if (welcome) {
									$article.trigger('active');
								}
							}
							if (welcome) {
								$article.trigger('welcome');
								welcome = false;
							}
							this.updateHelloPosition();
						}
						
						if (!invisible) {
							this.checkHello();
						}
						
						
						
					},
					
					updateHelloPosition: function() {
						if (hello.length) {
							$.each(hello, function() {
								this.helloTop = this.$elementTop.offset().top;
								this.helloBottom = this.$elementBottom.offset().top + this.$elementBottom.height();
								this.viewportHeight = $(window).height();
							});
						}
					},
					
					checkHello: function() {
						if (hello.length) {
							$.each(hello, function(i) {
								var baseLine = ((''+this.baseLine).toLowerCase().indexOf('px')>-1)
													? parseInt(this.baseLine)
													: this.viewportHeight/parseInt(this.baseLine,10);
								
								if (this.helloTop<GALAXY.scrollTop+this.viewportHeight-baseLine
									&&this.helloBottom>GALAXY.scrollTop+baseLine) {
									if (!$article.hasClass(this.css)) {
										$article.addClass(this.css);
										if (typeof(this.on)=='function') {
											this.on();
										}
									}
								}
							});
						}
					}

				}

			}

			function scroll(scrollTop, maxScrollTop) {

				var sizeMode = GALAXY.sizeMode,
					areaHeight = GALAXY.areaHeight,
					blockTop, blockHeight,
					visibleSize, visibleHeight, visiblePercent, visibleBase,
					i = 0, j, jmax;

				for (; i < numBlocks; i++) {
					blockTop = !i ? $blocks[i][0].offsetTop-scrollTop : $blocks[i][0].getBoundingClientRect().top;
					
					if (blockTop>0||$blocks[i].css('display')!='none') {
						
						blockHeight = $blocks[i][0].offsetHeight;
		
						if (!i) {
							visibleSize = 1-((blockHeight+blockTop)/blockHeight);
						} else {
							visibleSize = -(blockTop-areaHeight)/(areaHeight+blockHeight);
						}
						if (parallaxAble) {
							visiblePercent = visibleSize;
							if (visiblePercent >= -0.15 && 1.15 >= visiblePercent) {
								controls[i].setParallax(visiblePercent);
							}
						}
		
						visibleBase = Math.min(blockHeight*0.66, GALAXY.areaHeight*0.66);
						visibleHeight = Math.min(areaHeight, 0 >= blockTop ? blockHeight+blockTop : Math.min(blockHeight, areaHeight-blockTop));
						controls[i].setVisible(visibleHeight >= visibleBase);
		
						controls[i].setInvisible(0 > visibleSize || visibleSize > 1);
					}

				}

				keyvisual.scroll && keyvisual.scroll(scrollTop);

			}

			function resize() {

				var i = 0, sizeMode = GALAXY.sizeMode;

				for (; i < numBlocks; i++) {
					controls[i].setSizeMode(sizeMode);
				}

				keyvisual.resize(sizeMode);

			}

			return {
				scroll: scroll,
				resize: resize
			}

		},

		setVideoControl: function($figure, $article, $cover) {
			var $video = null,
				source = '',
				setVideoimg = $figure.find('.setting-img'),
				isKeyvisual = ($article.attr('class') || '').indexOf('-kv') != -1,
				ready = false,
				tryToPlay = false,
				coverHided = false,
				videoHided = false,
				preferWebm = false,
				justOne = true,
				tweener = null,
				invisible = true,
				duration = 0,
				sizeMode = 0,
				noneplay = $figure.attr('data-none-play'),
				autoplayText = '',
				coverImg = $figure.attr('data-set-img'),
				newVideo = $figure.attr('data-media-v4'),
				canvasLoop = $figure.attr('data-canvas-loop'),
				mobileCheck = GALAXY.isMobile;


			if (newVideo != undefined) {
				mobileCheck = false;
			}
			if ((10 > $.browser.ie) || mobileCheck || GALAXY.isPoorNetwork) {
				if ($cover == undefined) {
					removeReady();
					return false;
				}
			}
			if ($cover == undefined) {
				$cover = $figure.find('img:not(".setting-img")');
			}


			source = $figure.attr('data-media-video') || $figure.attr('data-media-v4');
			if (newVideo != undefined) {
				source = newVideo;
				var isCount = 0;
				$(document).on('touchstart', function () {
					if (isCount == 0) {
						isCount = 1;
						$('video').each(function () {
							$(this)[0].load();
						});
					}
				});
			}
			if (!source) {
				return false;
			}
			if (noneplay === undefined) {
				autoplayText = ' autoplay'
			}
			source = GALAXY.setMediaBaseURL(source);
			source = {
				mp4: '<source src="'+ source +'.mp4" type="video/mp4">',
				webm: '<source src="'+ source +'.webm" type="video/webm">',
				ogv: '<source src="'+ source +'.ogv" type="video/ogg">'
			}
			preferWebm = $figure.attr('data-video-prefer-webm');

			if ((newVideo != undefined) && !$.browser.android && !$('html').hasClass('desktop')) {
				$canvers = $figure.append('<canvas class="canvas"></canvas>');
			}
			var videoTitle = $figure.attr('data-video-title');
			$video = $([
				'<video muted' , $.browser.firefox ? autoplayText : '', ' ', $figure.attr('data-video-setting'), '>',
					preferWebm ? source.webm : source.mp4,
					preferWebm ? source.mp4 : source.webm,
					source.ogv,
				'</video>'].join(''))
				.bind({
					play: function() {
						if (invisible && newVideo == undefined) {
							$video[0].pause();
							$video[0].currentTime = 0;
						} else {
							$video[0].play();
						}
					},
					playing: function() {
						if (justOne && (newVideo != undefined) && $.browser.android && !$('html').hasClass('desktop')) {
							justOne = false;
							setTimeout(function () {
								$video[0].pause();
								$video[0].currentTime = -0.1;
							}, 1000);
							
						}
					},
					canplay: function() {
						if (!ready) {
							ready = true;
							duration = this.duration;
							if (mobileCheck) {
								!isKeyvisual && GALAXY.sizeMode > 2 && hideCover();
							}
							tryToPlay && play();
						}
						if (justOne && (newVideo != undefined) && $.browser.android && !$('html').hasClass('desktop')) {
							$video[0].play();
						} 
						removeReady();
					},
					ended: function() {
						$video.addClass('playend');
					},
					error: function() {
						removeReady();
					}
				})
				.insertBefore($cover);

			if ($.browser.android) {
				$video.on('click', function () {
					$video[0].play();
				});
			}

			setTimeout(function() {
				if ((newVideo != undefined) && !$.browser.android && !$('html').hasClass('desktop')) {
					if (canvasLoop == 'loop') {
						var canvasVideo = new CanvasVideoPlayer({
							videoSelector: $video,
							canvasSelector: $figure.find('canvas'),
							loop: true
						});
					} else {
						var canvasVideo = new CanvasVideoPlayer({
							videoSelector: $video,
							canvasSelector: $figure.find('canvas')
						});
					}
				} else if (newVideo == undefined){
					$video[0].load();
				}
			}, 100);

			$article.bind({
				visible: function() {
					invisible = false;
					if ((newVideo != undefined) && !$.browser.android && !$('html').hasClass('desktop')) {
						coverHided = false;
						videoHided = true;
						if (noneplay != 'none') {
							$figure.find('canvas').click();
						}
					} else if ((newVideo != undefined) && $.browser.android && !$('html').hasClass('desktop')) {
						coverHided = true;
						videoHided = false;
						if ((noneplay != 'none') && ($(this).find('video').length > 0)) {
							$(this).find('video')[0].play();
						}
					} else if (newVideo != undefined) {
						coverHided = true;
						videoHided = false;
						if (noneplay != 'none') {
							$(this).find('video')[0].play();
						}
					}
					else {
						if ( GALAXY.sizeMode < 3 ) {
							coverHided = true;
							videoHided = false;
						} else {
							coverHided = false;
							videoHided = false;
						}
					}
				}, invisible: function() {
					invisible = true;
					if ((newVideo != undefined) && $(this).find('video').length > 0 && $('html').hasClass('firefox')) {
						$(this).find('video')[0].pause();
						$(this).find('video')[0].currentTime = 0;

					}
				},
				'video-play': play, 'video-pause': pause, 'video-reset': reset, 'video-show': show, 'video-hide': hide, 'video-change': changSrc, 'video-parallax': parallax});


			function removeReady() {
				if(setVideoimg) {
					setVideoimg.remove();
				}
			}

			function play() {
				tryToPlay = true;
				if (ready && !videoHided && (noneplay != 'none')) {
					hideCover();
					videoPlay();
				}
			}

			function videoPlay() {
				if (!$video.hasClass('playend')) {
					$video.css('opacity', '')[0].play();
					coverHided = false;
				}
			}

			function hideCover() {
				if (ready && !coverHided) {
					$cover.css('visibility', 'hidden');
					$video.css('visibility', '');
					coverHided = true;
				}
			}

			function pause() {
				tryToPlay = false;
				ready && $video[0].pause();
			}

			function reset() {
				if (ready) {
					$video[0].pause();
					$video[0].currentTime = 0;
					$video.removeClass('playend');
				}

			}

			function show() {
				hideCover();
				ready && tryToPlay && videoPlay();
				videoHided = false;
			}

			function hide() {
				if (newVideo == undefined) {
					if (coverHided || GALAXY.sizeMode<3) {
						$video[0].pause();
						$cover.css('visibility', '');
						$video.css('visibility', 'hidden');
						coverHided = false;
						videoHided = true;
					}
				} else {
					videoHided = false;
				}
			}

			function changSrc() {
				if (newVideo != undefined) {
					var getVideoSources = function($figure) {
						var s3 = $figure.attr('data-media-v3') ,
							s2 = $figure.attr('data-media-v2') || s3,
							s1 = $figure.attr('data-media-v1') || s2;
						return [null, s1, s2, s3];
					}
					var _sizeMode = GALAXY.sizeMode;
					if (_sizeMode != sizeMode) {
						sizeMode = _sizeMode;
						if (getVideoSources($figure)[sizeMode] == 'none' || getVideoSources($figure)[sizeMode] == 'NONE') {
							$video[0].pause();
							$cover.css('visibility', '');
							$video.css('visibility', 'hidden');
							coverHided = false;
							videoHided = true;
						} else {
							$cover.css('visibility', 'hidden');
							$video.css('visibility', '');
							var crateSouce = '<source src="' + getVideoSources($figure)[sizeMode] + '.mp4" type="video/mp4"><source src="'+ getVideoSources($figure)[sizeMode] +'.webm" type="video/webm"><source src="'+ getVideoSources($figure)[sizeMode] +'.ogv" type="video/ogg">'
							$video.innerHTML = crateSouce;
							$video[0].load();
							coverHided = false;
							videoHided = true;
						}
						
					}
				}
			}

			var parallaxer = {currentTime: 0},
				prevVideoTime = 0;

			function parallax(e, visiblePercent) {
				if (ready) {
					visiblePercent = Math.max(0, Math.min(1, (visiblePercent*1.25)-0.125));
					tweener && tweener.kill();
					tweener = TweenMax.to(parallaxer, 0.5, {
						startAt: {currentTime: $video[0].currentTime},
						currentTime: Math.min(duration-0.05, duration*visiblePercent),
						ease: 'easeOutQuad',
						lazy: true,
						onUpdate: function() {
							$video[0].currentTime = parallaxer.currentTime;
							return;
							var current = Math.round(parallaxer.currentTime*10000)/10000;
							if (prevVideoTime != current) {
								$video[0].currentTime = current;
								prevVideoTime = current;
							}
						}
					});
				}
			}

			return true;

		},

		setLayerToggler: function() {

			var $button = $(this),
				$layer = $($button.attr('href')),
				$layerTitle = $layer.find('.layer-title'),
				$opener = null,
				opened = false;

			if (!$layer.length) {
				return;
			}

			$button.click(function() {
				$opener = $button;
				show();
				return false;
			});

			$layer.find('button[class*="c_btn_close"]').click(hide);

			function show() {
				if (!opened) {
					$layer.addClass('show');
					GALAXY.noScroll.on();
					$layerTitle.focus();
					opened = true;
				}
			}

			function hide() {
				if (opened) {
					$layer.removeClass('show');
					$opener && $opener.focus();
					$opener = null;
					GALAXY.setTransitionEndEvent($layer, function() {
						GALAXY.noScroll.off();
					});
					opened = false;
				}
			}

		},

		vodPlayer: (function() {

			var $layer, $layerTitle, $iframeBox, $iframe, $closeButton,
				$opener = null,
				opened = false,
				$baseContentsArea = null,
				$baseContentsClickable = null,
				isKeydown = false;


			function show(url, opener, autoplay) {

				var id = url.split('?v=')[1];
				
				if (!$layer) {
					$layer = $([
						'<div id="layer-youtube" class="m_layer-youtube"><div class="m_ly_inner">',
							'<span class="layer-title" tabindex="0">Movie player Layer</span>',
							'<div class="m_ly_header">',
								'<h3 class="c_txt_ly-type1 heading">Official introduction</h3>',
							'</div>',
							'<div class="m_ly_contents">',
								'<div class="m_video_view"><iframe frameborder="0" allowfullscreen="1" title="YouTube video player" src="about:blank"></iframe></div>',
							'</div>',
							'<nav><button type="button" class="c_btn_close-type1">Youtube Close</button></nav>',
						'</div></div>'
					].join(''));
					$layerTitle = $layer.find('span.layer-title');
					$iframe = $layer.find('iframe');
					$iframeBox = $iframe.parent();
					$closeButton = $layer.find('button[class*="_btn_close"]');
					$closeButton.one('keydown', function() {
						isKeydown = true;
					});
					$closeButton.bind('click touchend', hide);
					$layer.bind('touchmove', GALAXY.preventDefault)
						.appendTo(document.body);
				}
				$baseContentsArea = $('#wrap');
				$baseContentsClickable = $baseContentsArea.find('a,input,select,textarea,button,video,iframe');
				$baseContentsClickable.each(function() {
					var tabindex = $(this).attr('tabindex');
					if (tabindex!==undefined&&tabindex!==null) {
						$(this).data('prev-tabindex', tabindex);
					}
					$(this).attr('tabindex','-1');
				});

				if (!opened) {
					if (opener) {
						$opener = $(opener);
					}
					$iframe.attr('src', GALAXY.getYoutubePlayerLink(id, autoplay)).appendTo($iframeBox);
					$layer.addClass('show');
					$layerTitle.focus();
					GALAXY.noScroll.on();
					opened = true;
				}

			}

			function hide() {
				if (opened) {
					$layer.removeClass('show');
					$baseContentsClickable.each(function() {
						var tabindex = $(this).data('prev-tabindex');
						if (tabindex!==undefined&&tabindex!==null) {
							$(this).attr('tabindex',tabindex);
						} else {
							$(this).removeAttr('tabindex');
						}
					});
					isKeydown && $opener && $opener.focus();
					$opener = null;
					GALAXY.setTransitionEndEvent($layer, function() {
						$iframe.attr('src', 'about:blank').detach();
						GALAXY.noScroll.off();
					});
					opened = false;
				}
				isKeydown = false;
			}

			return {
				show: show,
				hide: hide
			}

		})(),

		getYoutubePlayerLink: function(id, autoplay, option) {
			return 'https://www.youtube.com/embed/'+ id +'?enablejsapi=1&version=3&autoplay='+ (autoplay ? 1 : 0) +'&wmode=opaque' + (option&&option!=''?'&'+option:'');
		},

		imageResizeViaCanvas: (function() {

			function canvasResizer(_image, width, height, widthTo, heightTo, callback) {
				var canvas = document.createElement('canvas'),
					context = canvas.getContext('2d'),
					image = new Image();
				image.onload = function() {
					canvas.width = widthTo;
					canvas.height = heightTo;
					context.drawImage(image, 0, 0, widthTo, heightTo);
					this.onload = null;
					this.src = canvas.toDataURL();
					callback(this);
				}
				image.src = _image.src;
			}

			return function(image, widthTo, heightTo) {

				var resizedImage = new Image(),
					nowWidth, nowHeight;

				resizedImage.onload = function() {
					nowWidth = this.width;
					nowHeight = this.height;
					this.onload = null;
					check(this);
				}
				resizedImage.src = image.src;

				function check(_image) {
					resizedImage = _image;
					if (nowWidth/2 > widthTo && nowHeight/2 > heightTo) {
						canvasResizer(resizedImage, nowWidth, nowHeight, nowWidth/2, nowHeight/2, check);
						nowWidth = nowWidth/2;
						nowHeight = nowHeight/2;
					} else if (nowWidth) {
						canvasResizer(resizedImage, nowWidth, nowHeight, widthTo, heightTo, check);
						nowWidth = nowHeight = 0;
					} else {
						image.src = resizedImage.src;
					}
				}

			}

		})(),

		noScroll: (function() {

			var $documentElement,
				$wrap,
				$header,
				$headerButtonBox,
				$gnbBox,
				$gnbCloseButton,
				$subNavGnbBox,
				$topButtonBox,
				scrollBarWidth;

			function assign() {
				$documentElement = $(document.documentElement);
				$wrap = $('#wrap');
				$header = $(GALAXY.isGalaxy?'#header':GALAXY.dom.header);
				$headerButtonBox = $header.find('p.link');
				$gnbBox = $('#gnb');
				$gnbContentsBox = $gnbBox.find('.g-contents');
				$gnbCloseButton = $gnbBox.find('p.g-close a');
				$subNavGnbBox = $('#subnav p.gnb');
				$subNavPreButton = $('#subnav p.pre-button');
				$topButtonBox = $('div.f_backtotop');
				scrollBarWidth = GALAXY.scrollBarWidth;
			}

			return {
				activated: false,
				on: function() {
					var paddingRight = 0;
					!$documentElement && assign();
					GALAXY.scrollFixSkip = true;
					$documentElement.addClass('no-scroll').css('paddingRight', scrollBarWidth);
					if (GALAXY.areaWidth > 1440+scrollBarWidth) {
						paddingRight = scrollBarWidth;
						$gnbBox.css('paddingRight', paddingRight);
						$gnbBox.addClass('wide');
					} else {
						$gnbBox.removeClass('wide');
					}
					$topButtonBox.css('paddingRight', scrollBarWidth);
					if ($wrap.hasClass('subnav-fixed')) {
						$subNavGnbBox.css('marginRight', scrollBarWidth-paddingRight);
						$subNavPreButton.css('marginRight', scrollBarWidth-paddingRight);
					}
					GALAXY.noScroll.activated = true;
					GALAXY.noScroll.resize();
				},
				off: function() {
					GALAXY.noScroll.activated = false;
					GALAXY.scrollFixSkip = false;
					$documentElement.removeClass('no-scroll').css('paddingRight', '');
					$gnbBox.css('paddingRight', '');
					$gnbContentsBox.css('right', '');
					$gnbCloseButton.css('marginRight', '');
					$topButtonBox.css('paddingRight', '');
					$subNavGnbBox.css('marginRight', '');
					$subNavPreButton.css('marginRight', '');
					GALAXY.noScroll.resize();
				},
				resize: function() {
					!$documentElement && assign();
					if (GALAXY.isPoorBrowser) {
						return;
					}
					var marginRight = Math.round((GALAXY.areaWidth-(($header[0])?$header[0].offsetWidth:0))/2);
					if (GALAXY.noScroll.activated) {
						marginRight += GALAXY.scrollBarWidth;
					}
					$headerButtonBox.css('marginRight', marginRight);
				}
			}

		})(),
		
		bodyTabKeyControls: (function() {
			
			var $baseContentsArea, $baseContentsClickable;
			
			return {
				on: function() {
					$baseContentsClickable.each(function() {
						var tabindex = $(this).data('o-prev-tabindex');
						if (tabindex!==undefined&&tabindex!==null) {
							$(this).attr('tabindex',tabindex);
						} else {
							$(this).removeAttr('tabindex');
						}
						$(this).removeData('o-prev-tabindex');
					});
					$baseContentsArea = $baseContentsClickable = null;
				},
				off: function($base) {
					$baseContentsArea = $base ? $base : $('#galaxy-a-pdp-wrap');
					$baseContentsClickable = $baseContentsArea.find('a,input,select,textarea,button,video,iframe');
					$baseContentsClickable.each(function() {
						var tabindex = $(this).attr('tabindex');
						var prevTabindex = $(this).data('o-prev-tabindex');
						if (prevTabindex==undefined||prevTabindex==null||prevTabindex=="") {
							if (tabindex!==undefined&&tabindex!==null) {
								$(this).data('o-prev-tabindex', tabindex);
							}
							$(this).attr('tabindex','-1');
						}
					});
					
				},
			}
		})(),

		setOverflowYEdges: function($target) {

			var pointYAtStart, getPoint = $._event.getpoint;

			$target.bind('touchstart', function(e) {
				pointYAtStart = GALAXY.getEventPoint(e)[1];
			});

			$target.bind('touchmove', function(e) {
				var pointY = GALAXY.getEventPoint(e)[1];
				if (
					( this.scrollTop === 0 && pointY > pointYAtStart ) ||
					( this.scrollTop >= this.scrollHeight-this.offsetHeight && pointYAtStart > pointY )
				) {
					e.preventDefault();
					return false;
				}
				e.stopPropagation();
				return true;
			});

		},

		getImageSources: function($image) {
			var s3 = $image.attr('data-media-s3') || $image.attr('src')
				s2 = $image.attr('data-media-s2') || s3,
				s1 = $image.attr('data-media-s1') || s2;
			return [null, s1, s2, s3];
		},

		setTabFocusTrap: function($box, $toFocus, tabIndex) {
			$('<div tabindex="'+ (tabIndex || 0) +'" />')
				.focus(function() {
					$toFocus.focus();
				})
				.appendTo($box);
		},

		getEventType: $._event.gettype,
		getEventPoint: $._event.getpoint,

		setTransitionEndEvent: (function() {
			var supportTransition = $.support.transition,
				transitionEndName = 'transitionend webkitTransitionEnd mozTransitionEnd oTransitionEnd msTransitionEnd';
			return function($target, callback) {
				if (supportTransition) {
					$target.bind(transitionEndName, function(e) {
						if (e.target == this) {
							callback.call(this);
							$target.unbind(transitionEndName);
						}
					});
				} else {
					callback.call($target[0]);
				}
			}
		})(),

		loadImage: function($image, callback) {
			if ($image[0].complete) {
				$image.unbind({load: callback});
				callback.call($image);
			} else {
				if ($image[0].src==$image[0].src) {
					if ($image[0].complete) {
						$image.unbind({load: callback});
						callback.call($image);
					} else {
						$image.unbind({load: callback}).bind({load: callback});
					}
				} else {
					$image.bind({load: callback});
					$image[0].src = $image[0].src;
				}
			}
		},

		setMediaBaseURL: function(mediaBaseURL) {
			return function(src) {
				return (/^(http|\/global\/)/).test(src)||(''+src).indexOf('.')==0 ? src : mediaBaseURL+src;
			}
		},

		sharing: function() {

			var
				$body = $(document.body),
				provider = GALAXY.stripTags(this.innerHTML).replace(/ /g, '').toLowerCase(),
				url = encodeURIComponent(location.href),
				message = encodeURIComponent(this.getAttribute('data-share-msg') || $body.attr('data-msg') || ''),
				tags = encodeURIComponent(this.getAttribute('data-share-tags') || $body.attr('data-tags') || 'SamsungMobile'),
				popupSize, popupURL, popup;
				
			if (provider == 'facebook') {
				popupSize = [560, 525];
				popupURL = 'https://www.facebook.com/sharer/sharer.php?u='+ url;
			} else if (provider == 'twitter') {
			
				popupSize = [680, 400];
				popupURL = 'https://twitter.com/intent/tweet?text='+ message +'&hashtags='+ tags + (url ? '&url='+ url : '');
			} else if (provider == 'googleplus' || provider == 'google+') {
				popupSize = [510, 510];
				popupURL = 'https://plus.google.com/share?url='+ url;
			} else if (provider == 'linkedin') {
				popupSize = [550, 500];
				popupURL = 'https://www.linkedin.com/shareArticle?url='+ url;
			}

			popup = GALAXY.popup(popupURL, popupSize[0], popupSize[1], 'shareWindow');
			popup && popup.focus();

			return false;	
		
		},

		setHash: function(hash) {
			var href = location.href.split('#')[0];
			location.replace(href +'#!/'+ (hash || ''));
		},
		
		scrollTracking: function() {
			var omniCode = $(this).data('omni-scroll-code');
			var prevOmniCode = GALAXY.___scroll_omniCode;
			GALAXY.___scroll_omniCode = omniCode;
			if (omniCode!=null&&omniCode!=''&&omniCode!=prevOmniCode) {
				GALAXY.omniture('scroll:'+omniCode);
			}
		},

		tracking: function() {
			var omniCode = this.getAttribute('data-omni');
			var omniType = this.getAttribute('data-omni-type');
			if (omniCode!=null&&omniCode!='') {
				GALAXY.omniture(omniCode, omniType);
			}
		},

		omniture: function(name, type) {
			var omniTag,
				isMicrositeAction = (type&&type!='') ? false : true;
			if (GALAXY.isGalaxy) {
				omniTag = [
					'global:', (window.OMNI_CAMPAIGN_NAME || ''),
					name.indexOf(':') !== 0 ? ':'+ (window.OMNI_PAGE_NAME || '') +':'+ name : name
				].join('');
				if (GALAXY.isTestURL) {
					console.log('omniture: "'+ omniTag +'"');
				} else {
					window.omniture_click && omniture_click(omniTag);
				}
			} else {
				type = (isMicrositeAction) ? 'microsite_action' : type;
				if (isMicrositeAction) {
					
					omniTag = name.indexOf(':') !== 0 ? (window.OMNI_PAGE_NAME || '') +':'+ name : name.substring(1);
				} else {
					omniTag = name;
				}
				if (GALAXY.isTestURL) {
					console.log('omniture : "'+ type +'", "'+ omniTag +'"');
				} else {
					window.sendClickCode && sendClickCode(type, omniTag);
				}
			}
		},

		svgFillTween: (function() {
			if (!$.browser.ie) {
				return function(element, color) {
					element.setAttribute('fill', color);
				}
			} else {
				return function(element, color) {
					$('span').css('color', element.getAttribute('fill'))
						._animate({color: color}, {queue: false, duration: 250, easing: 'easeInOutQuad', step: function(v) {
							element.setAttribute('fill', v.color);
						}});
				}
			}
		})(),

		popup: function(url, width, height, name) {
			return window.open(url, name || '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,width='+ (width+GALAXY.scrollBarWidth) +',height='+ height);
		},

		stripTags: function(text) {
			return text.replace(/<[^>]+>/g, '');
		},

		addZero: function(value) {
			return 10 > value ? '0'+ value : value;
		},

		preventDefault: function(e) {
			e.preventDefault();
		},

		returnFalse: function() {
			return false;
		},

		getScrollTop: function() {
			return document.documentElement.scrollTop || document.body.scrollTop || 0;
		},

		getScrollHeight: function() {
			return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
		},

		getMaxScrollTop: function() {
			return GALAXY.getScrollHeight()-GALAXY.areaHeight;
		},

		setScrollTop: function(v) {
			$(window).scrollTop(v);
		},

		setSmoothScrollTop: function(v, time, callback) {
			$('html, body')._animate({scrollTop: v}, {queue: false, duration: time || 1000, easing: 'easeInOutQuart', complete: callback});
		},

		getScrollBarWidth: function() {
			var div = document.createElement('div'), scrollBarWidth;
			div.style.cssText = 'position: absolute; left: -999em; width: 100px; height: 100px; overflow: scroll;';
			document.body.appendChild(div);
			scrollBarWidth = 100-div.clientWidth;
			document.body.removeChild(div);
			div = null;
			return scrollBarWidth;
		},
		
		scroll: (function(e) {
			
			var
				ie = navigator.userAgent.match(/(?:msie ([0-9]+)|rv:([0-9\.]+)\) like gecko)/i),
				webkit = (/applewebkit/i).test(navigator.userAgent),
				documentElement = document.documentElement,
				scrollCaptured = false,
				lastScrollTop = 0,
				maxScrollTop = 0;

			if ((/win/i).test(navigator.appVersion) && ie) {
				$(documentElement)
					.bind('mousewheel', function(e) {
						if (GALAXY.scrollFixSkip === true) {
							return true;
						}
						scrollFix(e.originalEvent.wheelDelta*-1);
						e.preventDefault();
					})
					.bind('keydown', function(e) {
						if (GALAXY.scrollFixSkip) {
							return true;
						}
						var keyCode = e.keyCode, documentHeight = documentElement.clientHeight, newScrollTop;
						if ((/^(32|33|34|38|40)$/).test(keyCode)) {
							scrollFix(keyCode == 32 || keyCode == 34 ? documentHeight : keyCode == 33 ? -documentHeight : keyCode == 38 ? -75 : 75);
							e.preventDefault();
						}
					});
			}

			function scrollFix(scrollBy) {
				var newScrollTop = Math.min(getMaxScrollTop(), Math.max(0, getScrollTop()+scrollBy));
				if (newScrollTop != lastScrollTop) {
					scroll(newScrollTop);
					scrollCaptured = true;
					document[webkit ? 'body' : 'documentElement'].scrollTop = newScrollTop;
				}
			}

			function getScrollTop() {
				return documentElement.scrollTop || (document.body ? document.body.scrollTop : 0) || 0;
			}

			function getMaxScrollTop() {
				return Math.max(document.body ? document.body.scrollHeight : 0, documentElement.scrollHeight)-Math.min(documentElement.offsetHeight, documentElement.clientHeight);
			}

			function scroll(_scrollTop) {

				var scrollTop = typeof(_scrollTop) == 'number' ? _scrollTop : getScrollTop();
				lastScrollTop = scrollTop;
				if (scrollCaptured) {
					scrollCaptured = false;
					return false;
				}

				GALAXY.scrollTop = scrollTop;
				maxScrollTop = getMaxScrollTop();

				GALAXY.scrollTop = scrollTop;
				GALAXY.header && GALAXY.header.scroll && GALAXY.header.scroll(scrollTop, maxScrollTop);
				GALAXY.sections && GALAXY.sections.scroll && GALAXY.sections.scroll(scrollTop, maxScrollTop);
				GALAXY.footer && GALAXY.footer.scroll && GALAXY.footer.scroll(scrollTop, maxScrollTop);

				if (GALAXY.scrollFunctions.length) {
					$.each(GALAXY.scrollFunctions, function() {
						this(scrollTop, maxScrollTop);
					});
				}

			}

			return scroll;

		})(),
		
		
		hello: function(selector, opt) {
			var $element = $(selector), arr,
				$article = $element.closest('section[class^="m_"] > article');
			if ($article&&$article.get(0)) {
				arr = $article.data('hello');
				if (!arr) {
					arr = [];
				}
				if (!opt) {
					opt = {};
				}
				opt.css = (!opt.css) ? (arr.length) ? 'hello-'+(arr.length+1) : 'hello' : opt.css;
				opt.$elementTop = $element;
				opt.$elementBottom = (!opt.bottom) ? $element : $(opt.bottom);
				opt.baseLine = (!opt.baseLine) ? 3 : opt.baseLine;
				arr.push(opt);
				$article.data('hello', arr);
			}
			return this;
		},
		
		

		resize: function(func) {
			
			if (typeof(func)=='function') {
				this.resizeFunctions.push(func);
				return this;
			}

			var documentElement = document.documentElement,
				width, height, sizeMode;

			width = documentElement.clientWidth;
			if (GALAXY.isPoorBrowser) {
				width = Math.max(document.getElementById('pdp-wrap').offsetWidth, width);
			}
			height = $(window).height();
			
			if (func !== true) {
				if (!$.browser.mobile && width == GALAXY.areaWidth && height == GALAXY.areaHeight) {
					return;
				} else if ($.browser.mobile && width == GALAXY.areaWidth) {
					return;
				}
			}

			sizeMode = width > 1023 ? 3 : width > 719 ? 2 : 1;
			GALAXY.prevSizeMode = GALAXY.sizeMode;
			if (sizeMode != GALAXY.sizeMode) {
				GALAXY.sizeMode = sizeMode;
				documentElement.className = documentElement.className.replace(/ *s[1-4][1-4]?/g, '') +' s'+ sizeMode +' s'+ (sizeMode > 2 ? 34 : 12);
			}
			documentElement.className = documentElement.className.replace(/ *s0/, '') + (360 > width ? ' s0' : '');

			GALAXY.areaWidth = width;
			GALAXY.areaHeight = height;

			GALAXY.header && GALAXY.header.resize && GALAXY.header.resize();
			GALAXY.sections && GALAXY.sections.resize && GALAXY.sections.resize();
			GALAXY.footer && GALAXY.footer.resize && GALAXY.footer.resize();
			GALAXY.noScroll.resize();

			if (GALAXY.resizeFunctions.length) {
				$.each(GALAXY.resizeFunctions, function() {
					this();
				});
			}

			GALAXY.scroll();

		},
		
		ready: function(func) {
			if (func===undefined) {
				if (this.readyFunctions.length) {
					$.each(this.readyFunctions, function() {
						this();
					});
				}
			} else {
				if (typeof(func)=='function') {
					this.readyFunctions.push(func);
				}
			}
			return this;
		},
		
		load: function(func) {
			if (func===undefined) {
				if (this.loadFunctions.length) {
					$.each(this.loadFunctions, function() {
						this();
					});
				}
			} else {
				if (typeof(func)=='function') {
					this.loadFunctions.push(func);
				}
			}
			var checkGnb = location.href.split('/#')[1];
			var gnbhash = ['gnb_products', 'gnb_how-tos', 'gnb_gallery', 'gnb_events', 'gnb_apps'];
			var hash = gnbhash.indexOf(checkGnb);
			if (checkGnb != undefined && hash != -1) {
				$('#header p.menu a').click();
			}
			return this;
			
		},

		initialize: function() {
			
			if (this.initialized) {
				return;
			}
			this.initialized = true;
			
			
			(function() {
				var lt = 3, key = '___GALAXY_SPEED', st = (window.___GALAXY_START_TIME)?___GALAXY_START_TIME:(new Date()).getTime(), 
					val = $._cookie.get(key), speed = (val=='L') ? 'L' : (val=='H') ? 'H' : ((new Date()).getTime()-st>lt*1000) ? 'L' : 'H';
				
				var $footer = GALAXY.isGalaxy ? $('#footer') : $('.m_dotcom_footer'),
					$network = $footer.find('.select-network a.network'),
					$networkOptions = $footer.find('.select-network .option'),
					statusText = $network.text(),
					speedText = '',
					setNetworkSpeed = function(speed) {
						$._cookie.set(key, speed, 1, '/');
						return this;
					};
					
				GALAXY.isPoorNetwork = $(document.documentElement).addClass('s'+speed).hasClass('sL');
				if (val!='L' && val!='H') setNetworkSpeed(speed);
				
				$networkOptions.each(function() {
					var val = $(this).data('speed');
					if (val==speed) {
						speedText = ' '+$(this).data('label');
					}
					$(this).on('click', function(e) {
						e.preventDefault();
						setNetworkSpeed(val);
						try {window.scrollTo(0,0);} catch(e) {}
						location.reload();
					});
				});
				$network.on('click', function(e) {
					e.preventDefault();
					e.stopPropagation();
					var $select = $(this).closest('.select-network');
					if (!$select.hasClass('opened')) {
						$select.addClass('opened');
						$(document).one('click', function(e) {
							if (!$(this).closest('.select-network').get(0)) {
								$select.removeClass('opened');
							}
						});
					} else {
						$select.removeClass('opened');
					}
				}).text(statusText+(speedText!=''?speedText:''));
			})();
			
			
			this.ready();
			
			$(document.documentElement)
				.addClass($.browser.mobile ? 'mobile' : 'desktop')
				.decideClass('oldandroid', $.browser.android && 430 > $.browser.android)
				.decideClass('color_yb', $._cookie.get('highContrastMode') == '1');


			this.hashMenu = location.href.split('#!/')[1];
			this.hashMenu && this.isTestURL && console.log('hash menu: "'+ this.hashMenu + '"');

			this.mediaBaseURL = this.mediaBaseURL.replace(/\/$/, '');
			this.setMediaBaseURL = this.setMediaBaseURL(this.mediaBaseURL);

			this.scrollBarWidth = this.getScrollBarWidth();

			$('body style').each(function() {
				this.removeAttribute('scoped');
			});


			if (GALAXY.isGPSI) {
				this.resize(true);
				$('body img')
					.not('#kv [class*="f_header-"] img')
					.not('#kv-type2 [class*="f_header-"] img')
					.not('div.gift_header .heading img')
					.not('div.theme-steps div.img img')
					.each(function(i) {
						var $image = $(this),
							source = GALAXY.setMediaBaseURL(GALAXY.getImageSources($image)[GALAXY.sizeMode].replace(/^\./, ''));
						$image.attr('src', GALAXY.path.root+'/common/images/blank.gif');
						$image.css({
							backgroundImage: 'url('+ source +')',
							backgroundRepeat: 'no-repeat',
							backgroundSize: GALAXY.sizeMode > 2 ? 'cover' : '100% auto',
							backgroundPosition: '50% 50%'
						});
					});
				$('#kv,#kv-type2').find('[class*="f_header-"]').find('.kv-title, .kv-text, div').show();
				$('#kv,#kv-type2').css({width: '100%', height: $(window).height()+100})
					.find('div.f_container figure')
						.css({left: 'auto', width: '100%', marginLeft: 'auto'})
						.css($.support.transform, 'none')
					.find('img').css({width: '100%', height: '100%'});
				$('#kv,#kv-type2').find('div.f_container figure').each(function() {
					this.style.marginLeft = Math.min(0, (this.parentNode.offsetWidth-this.offsetWidth)/2) +'px';
				});
				if ($('#kv').hasClass('m_content-slider')||$('#kv-type2').hasClass('m_content-slider')) {
					$('#kv,#kv-type2').children().not('nav').not(':first').hide();
				}
				return;
			}

			this.sections = this.sections();
			
			if (GALAXY.isGalaxy) {
				$('a[data-omni], button[data-omni]')
					.unbind('click', GALAXY.tracking)
					.bind('click', GALAXY.tracking);
			} else {
				$('#galaxy-a-pdp-contents a[data-omni], #galaxy-a-pdp-contents button[data-omni], .m_dotcom_footer a[data-omni]')
					.unbind('click', GALAXY.tracking)
					.bind('click', GALAXY.tracking);
			}

			$(window).resize(this.resize)
					.scroll(this.scroll);

			if (!GALAXY.isGalaxy&&$('html').attr('lang')=='ja') {
				$('body').on('scroll', function() {
					if (GALAXY.sizeMode<3) {
						GALAXY.scroll();
					}
				});
			}

			this.resize(true);

			setTimeout(function() {
				window.initBuyNowButtons && window.initBuyNowButtons();
				$(document.documentElement).addClass('load');
				GALAXY.load();
				
				setTimeout(function() {
					var hash = location.hash, $section, pattern = /#[A-Z0-9-_]+$/i;
					pattern.test(hash) && ($section = $(hash)).length && GALAXY.setScrollTop($section.offset().top, 750);
				}, 100);
			}, 100);
		}
	};


	$(window).load(function() {
		setTimeout(function() {
			GALAXY.initialize();
		}, 0);
	});

	$(function() {

		var waveStart,
			scrollWave = false;

		function waveView() {
			if ( $('.m_content-sound .sound-btm-arti').hasClass('visible') ) {
				( GALAXY.sizeMode == 1 ) ? scrollWave = false : scrollWave = true;
				if ( scrollWave ) {
					scrollWave = false;
					$('.m_content-sound .sound-btm-arti .wave').addClass('show');
	    			clearInterval(waveStart); 
	    			waveStart = setInterval(function() {
	    				$('.m_content-sound .sound-btm-arti .wave').removeClass('show');
	    				setTimeout(function() {
	    					$('.m_content-sound .sound-btm-arti .wave').removeClass('show').addClass('show');
	    				}, 100);
	    			}, 5500);
				}
			} else {
				$('.m_content-sound .sound-btm-arti .wave').removeClass('show');
    			clearInterval(waveStart);
    			scrollWave = false;
			}
		}

		var $captureList = $('.capture-slide .slide-list'),
			$capturePrev = $('.capture-slide').find('.slide_arrow a[class$=prev]'),
			$captureNext = $('.capture-slide').find('.slide_arrow a[class$=next]'),
			$capturePaging = $('.capture-slide').find('.slide_page'),
			$captureThumb = $('.capture-slide').find('.img-pagenation'),
			moveScrollPoint;

		$captureList.find('li').each(function(i) {
			var imgSrc = $(this).find('img').attr('data-media-s3'),
				galleryAlt = $(this).find('img').attr('alt');
			$capturePaging.append('<a href="#"><span>slide '+ (i+1) +'</span></a>');
			$captureThumb.append('<a href="#"><span><img src='+ imgSrc +' alt="' + galleryAlt + '" /></span></a>');
			$captureThumb.find('a').eq(0).addClass('on');
		});

		$('.capture-slide .slide-list').xlider({
			swipe: GALAXY.swipeAble,
			endless: true,
			arrows: [$capturePrev, $captureNext],
			paging: $capturePaging,
			onChange: function(page) {
				$captureThumb.find('a').removeClass('on').eq(page).addClass('on');
				capturethumbRe(page);
			}

		});
		$captureThumb.find('a').on('click', function(e) {
			e.preventDefault();
			var thumbIndex = $(this).index();
			$captureThumb.find('a').removeClass('on').eq(thumbIndex).addClass('on');
			$capturePaging.find('a').eq(thumbIndex).click();
		});

		function capturethumbRe(idx) {
			var thumbWidth = $captureThumb.find('img').width(),
				thumbMl = $captureThumb.find('a').not(':first-child').css('margin-left'),
				moveScrollX = idx * (thumbWidth + parseInt(thumbMl, 10)),
				windCenter = ($(window).width()/2)-parseInt($captureThumb.css('padding-left'), 10),
				pageMove = moveScrollX - windCenter + (thumbWidth/2);

			if ( idx == 0 ) pageMove = 0;
			if (  windCenter <= moveScrollX + (thumbWidth/2)) {
				$('.thumbnail').animate({
					scrollLeft: pageMove
				}, 250, 'easeInOutSine');
			} else {
				$('.thumbnail').animate({
					scrollLeft: 0
				}, 250, 'easeInOutSine');
			}
		}

		function captureResize() {
			if ( GALAXY.sizeMode == 1 ) {
				var thumbWrapWidth = $captureThumb.outerWidth(),
					thumbIdx = $captureThumb.find('a.on').index();

				if ( $(window).width() > thumbWrapWidth ) {
					$('.thumbnail').css({
						left: '50%',
						width: thumbWrapWidth,
						marginLeft : -(thumbWrapWidth/2)
					});
				} else {
					$('.thumbnail').css({
						left: 'auto',
						width: '100%',
						marginLeft : '0'
					});
				}
				moveScrollPoint = setTimeout(function() {
					clearTimeout(moveScrollPoint);
					capturethumbRe(thumbIdx);
				}, 100);
			} else {
				$('.thumbnail').css({
					left: '',
					width: '',
					marginLeft : ''
				});
			}
		}

		var $filterMode = $('.filter-mode a'),
			$filterSlideWrap = $('.filter-slide'),
			$filterList = $('.filter-slide .img-list'),
			$filterImg = $('.filter-slide .img-list li'),
			$filterSlideArrow = $('.filter-slide .slide_arrow a'),
			$thumbNav = $('.thumb-nav'),
			thumbNavCenter = $thumbNav.width()/2,
			filterImgTotal = $filterImg.size(),
			filterImgH,
			containerH,
			setSlide = true,
			resetSlide = true;

		$('.filter-slide-box').append('<span class="dummy"><img src="http://images.samsung.com/is/image/samsung/ua-feature-samsung-galaxy-a7-2017-a720f-61216562?$Download-Source$" alt="" /></span>');
		$filterMode.on('click', function(e) {
			e.preventDefault();
			$filterMode.removeClass('current');
			$(this).addClass('current');
			if ( $(this).parent().index() == 0 ) {
				$('.m_content-filter .food-mode').removeClass('view');
				$('.m_content-filter .filter-slide').addClass('view');
				filterImgH = $('.filter-slide-box .dummy').height();
				controlsWidth();
				$filterList.css('height',filterImgH);
				filterResize();
			} else {
				$('.m_content-filter .filter-slide').removeClass('view');
				$('.m_content-filter .food-mode').addClass('view');
			}
		});

		$filterImg.each(function(i) {
			var imgSrc = $(this).find('img').attr('data-media-s3'),
				filterName = $(this).find('img').attr('data-filter-name'),
				filterAlt = $(this).find('img').attr('alt');
			$thumbNav.find('.paging').append('<a href="#" class="thumbPage"><img src="'+ imgSrc +'" alt="' + filterAlt +'" /><strong>' + filterName + '</strong></a>');
		});

		var $filterNavUl = $thumbNav.find('.paging'),
			$filterNavItem = $thumbNav.find('a'),
			$navControls = $('.filter-slide .controls'),
			$controlBar = $navControls.find('.bar'),
			$controlAnchor = $navControls.find('.anchor'),
			itemSize = $filterNavItem.size(),
			itemWidth, 
			itemMl, 
			filterNavWidth,
			startMove = false,
			movePageScroll,
			anchorX,
			anchorW = $controlAnchor.width(),
			barW = $controlBar.width(),
			leftX,
			keyPaging = 0;

		$navControls.find('.num em').text(itemSize);
		$filterList.xlider({
			swipe: GALAXY.swipeAble,
			fade: true,
			useTransition: true,
			endless: true,
			arrows: [$filterSlideWrap.find('.slide-prev'), $filterSlideWrap.find('.slide-next')],
			paging: $filterNavUl,
			onChange: function(page) {
				controlsResize(page);
				$navControls.find('.num .now').text(page+1);
			}
		});

		function controlsWidth() {
			anchorW = $controlAnchor.width();
			barW = $controlBar.width();
		}

		function controlsResize(onPage) {
			var thumbWidth = $filterNavItem.find('img').width(),
				thumbMl = $filterNavItem.not(':first-child').css('margin-left'),
				moveScrollX = onPage * (thumbWidth + parseInt(thumbMl, 10)),
				tgCenter =$thumbNav.width()/2,
				pageMove = (moveScrollX - tgCenter) + (thumbWidth/2);
			
			if ( !startMove ) {
				if ( onPage == 0 ) pageMove = 0;
				if (  tgCenter <= moveScrollX+(thumbWidth/2) ) {
					$thumbNav.animate({
						scrollLeft : pageMove
					}, 250);
				} else {
					$thumbNav.animate({
						scrollLeft : 0
					}, 250);
				}
			}
		}

		function filterResize() {
			filterSecWidth = $('.m_content-filter').width();
			filterImgH = $('.filter-slide-box .dummy').height();
			itemWidth = $filterNavItem.width();
			itemMl = parseInt($filterNavItem.not(':first-child').css('margin-left'), 10);
			filterNavWidth = (itemWidth*itemSize) + (itemMl*(itemSize-1));

			var onPageIdx = $filterNavUl.find('a.on').index();
			
			$filterNavUl.css('width', filterNavWidth);
			$filterList.css('height',filterImgH);

			movePageScroll = setTimeout(function() {
				clearTimeout(movePageScroll);
				controlsWidth();
				controlsResize(onPageIdx);
			}, 100);
		};

		$controlAnchor.on('mousedown touchstart', function(e) {
			e.preventDefault();
			anchorX = $(this).position().left;
			anchorW = $(this).width();
			barW = $controlBar.width();
			leftX = e.pageX;
			if (e.type == 'touchstart') {
				leftX = e.originalEvent.touches[0].pageX;
			}
			startMove = true;
		});
		$filterSlideWrap.on('mousemove touchmove', function(e) {
			var moveLeftX = e.pageX;
			if ( startMove ) {
				if (e.type == 'touchmove') {
					moveLeftX = e.originalEvent.touches[0].pageX;
				}
				movePoint = moveLeftX - leftX;
				moveAnhcor();
			}
		});
		$(document).on('mouseup touchend', function() {
			startMove = false;
		});

		$controlAnchor.on('keydown', function (e) {
			keyPaging = $filterNavUl.find('a.on').index();
			if (e.keyCode == '37') {
				( 0 >= keyPaging ) ? keyPaging = itemSize-1 : keyPaging--;
			} else if (e.keyCode == '39') {
				( itemSize-1 <= keyPaging ) ? keyPaging = 0 : keyPaging++;
			}
			$filterNavUl.find('a').eq(keyPaging).click();
			keyPaging = $filterNavUl.find('a.on').index();
		});

		function moveAnhcor() {
			var leftMoveData =  anchorX + movePoint,
				max = barW-anchorW,
				min = 0,
				windowW = $(window).width(),
				thumbScrollLeft = Math.floor( ((filterNavWidth-barW)*leftMoveData ) / max );

			var moveData = function() {
				$controlAnchor.css('left', leftMoveData);
				$thumbNav.scrollLeft(thumbScrollLeft);
			}

			if ( (leftMoveData >= min) && (leftMoveData <= max) ) {
				moveData();
			} else if ( leftMoveData < min ) {
				leftMoveData = min;
				moveData();
			} else if ( leftMoveData > max ) {
				leftMoveData = max;
				moveData();
			}

		}

		$thumbNav.scroll(function() {
			var navLeftScroll = $(this).scrollLeft(),
				scrollWidth = ($thumbNav[0].scrollWidth-$thumbNav.width()),
				leftScrollData = ($controlBar.width()-$controlAnchor.width())*navLeftScroll/scrollWidth;
			if (!startMove ) {
				if ( leftScrollData >= barW-anchorW ) {
					leftScrollData = barW-anchorW;
				}
				$controlAnchor.css('left', leftScrollData);
			}
		});

		$('.food-mode button').on('click', function() {
			$('.food-mode button').removeClass('on');
			$(this).addClass('on');
			if ( $(this).hasClass('btn-off')) {
				$('.food-mode-img figure').removeClass('show');
				$('.food-mode-img figure.off').addClass('show');
			} else {
				$('.food-mode-img figure').removeClass('show');
				$('.food-mode-img figure.on').addClass('show');
			}
		});

		var $accRightList = $('.acc-right ul li');
		$('.acc-list li').each(function(i) {
			$('.m_content-choose .slide_page').append('<a href="#"><span>slide '+ (i+1) +'</span></a>');
		});
		function addResizeSet() {
			var setAcc;
			clearTimeout(setAcc);
			setAcc = setTimeout(function() {
				var sizeOK = true;
				if ( sizeOK ) {
					if ( GALAXY.sizeMode == 1 ) {
						$('.acc-list').xlider({
							swipe: GALAXY.swipeAble,
							endless: true,
							paging: $('.m_content-choose .slide_page')

						});
					} else {
						$('.acc-list').xlider('remove');
						$('.m_content-choose .acc-list').removeClass('xlider-wrapper').removeAttr('style');
						$('.m_content-choose .acc-list li').each(function() {
							$(this).removeAttr('style');
							if ( $(this).hasClass('xlider-current')) {
								$(this).removeClass('xlider-current');
							}
						});
						
					}
					sizeOK = false;
				}
			}, 100);
		}

		var sizeMode = 0,
			$sliderBox = $('.slide-list-box'),
			$sliderUl = $sliderBox.find('.slider'),
			$instantItem = $('.instant-con').find('li'),
			$colorItem = $('.color-list').find('li');

		function setResize() {
			var _sizeMode = GALAXY.sizeMode;
			if (_sizeMode != sizeMode) {
				var resetCall = function () {
					$sliderUl.xlider('remove');
					$sliderUl.removeAttr('style');
					$sliderUl.find('li').removeClass('xlider-current').attr('style', '');
					$sliderBox.find('.slide_page').empty();
					$('.instant-con .slider').append($instantItem);
					$('.color-list').append($colorItem);
				};
				resetCall();

				if ( _sizeMode == 1 ) {
					$sliderBox.each(function() {
						var $slider = $(this).find('.slider'),
							$sliderList = $slider.find('li');

						$sliderList.each(function(i) {
							$(this).parents('.slide-list-box').find('.slide_page').append('<a href="#"><span>slide '+ (i+1) +'</span></a>')
						});
						$slider.xlider({
							swipe: true, 
							useTransition: false,
							paging: $(this).find('.slide_page'), 
							newstyle:true, 
							maxview:1, 
							endless:true,
							mode: 12,
							onChangeEnd: function() {
								$sliderList.last().css('opacity', '');
							}
						});
						$sliderList.last().css('opacity', '0');
					});

				} else {
					resetCall();
				}
				sizeMode = _sizeMode;
			}
		} 

		$(window).scroll(function() {
			waveView();
		});

		GALAXY.resize(function() {
			thumbNavCenter = $thumbNav.width()/2;
			controlsWidth();
			captureResize();
			addResizeSet();
			setResize();
			filterResize();
		});

		GALAXY.load(function () {
			waveView();
		});
	});
})(window.jQuery);
			
	});
});

});