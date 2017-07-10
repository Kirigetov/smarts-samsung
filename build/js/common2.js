$(document).ready(function() {

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
		}
	}
});

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


});