$(function() {
	//加载函数
	function fnLoad() {
		var iTime = new Date().getTime(),
			oTimer = 0,
			n = 0;
		oTimer = setInterval(function() {
			if(new Date().getTime() - iTime >= 2400 && Number(n) >= 100) {
				clearInterval(oTimer);
				$('#welcome').hide(800, function() {
					$(this).remove();
				});
			}
			$('#page0').find('.num').text(Math.floor(n) + '%');
			n += 8;
			if(Number(n) >= 100) {
				n = 100;
			}
		}, 250);
	}
	fnLoad();
	
	var boMusic=1;
	var music=document.getElementById('music');
    music.addEventListener("touchstart",function(){
		boMusic++;
		if(boMusic%2==0){
			$("#bgMusic1")[0].pause();
			$("#music").find("img").attr('src','images/0music2@2x.png');
			$("#music").find("img").removeClass("playMusic");
		}else{
			$("#bgMusic1")[0].play();	
			$("#music").find("img").attr('src','images/0music@2x.png');
			$("#music").find("img").addClass("playMusic");
		}
	});
	
/*0 to 1 start*/
	setTimeout(function(){
		$("#page0").hide();
		$("#page1").show();
	},4000);
/*0 to 1 end*/

	var page1=document.getElementById("page1");
	var page2=document.getElementById("page2");
	var page3=document.getElementById("page3");
	var page4=document.getElementById("page4");
	var page5=document.getElementById("page5");
	/**
	 * LeftOrRight():左右滑动
	 * before是前一个页面
	 * now是当前页面
	 * after是后一个页面
	 */
	function LeftOrRight(before,now,after){
		var startX=0;//手势的起点x值
		var moveX=0;//手势移动当前点的x值
		var dX=0;//起点和当前点的差值
		var flag=0;//1表示左滑动，2表示右滑动
		now.addEventListener("touchstart",function(e){
			//获取手势的起点x位置
			startX=e.touches[0].clientX;
		});
		now.addEventListener("touchmove",function(e){
			//取消浏览器默认设置
			e.preventDefault();
			//获取手势的当前x位置
			moveX=e.touches[0].clientX;
			//计算滑动的距离
			dX=startX-moveX;
			//左滑
			if(dX>20){
				flag=1;
				now.classList.remove("pageShow");
				after.classList.add("pageShow");
				if(now==page4){
					beidou();
					$("#bgMusic1")[0].pause();
					$("#bgMusic1").css("src","");
				}
			}
			//右滑
			if(dX<-20){
				flag=2;
				now.classList.remove("pageShow");
				before.classList.add("pageShow");
			}
		});
		now.addEventListener("touchend",function(e){
			if(flag==1){
				after.classList.add("pageShow");
			}
			if(flag==2){
				before.classList.add("pageShow");
			}
		});
	}
	
	/*1的左右滑动start*/
	LeftOrRight(page1,page1,page2);
	/*1的左右滑动end*/
	
	/*2的左右滑动start*/
	LeftOrRight(page1,page2,page3);
	/*2的左右滑动end*/
	
	/*3的左右滑动start*/
	LeftOrRight(page2,page3,page4);
	/*3的左右滑动end*/
	
	/*4的左右滑动start*/
	LeftOrRight(page3,page4,page5);
	/*4的左右滑动end*/
	
	/*5的左右滑动start*/
	/*LeftOrRight(page4,page5,page5);*/
	/*5的左右滑动end*/
	
/*北斗七星闪光变换*/
	function beidou(){
		setTimeout(function(){
			$("#Dipper").attr('src','images/5img1.png');
			$("#bing")[0].play();
		},2300);
		setTimeout(function(){
			$("#Dipper").attr('src','images/5img2.png');
			$("#bing")[0].pause();
		},2700);
		setTimeout(function(){
			$("#Dipper").attr('src','images/5img3.png');
			$("#bing")[0].play();
		},3100);
		setTimeout(function(){
			$("#Dipper").attr('src','images/5img4.png');
			$("#bing")[0].pause();
		},3500);
		setTimeout(function(){
			$("#Dipper").attr('src','images/5img5.png');
			$("#bing")[0].play();
		},3900);
		setTimeout(function(){
			$("#Dipper").attr('src','images/5img6.png');
			$("#bing")[0].pause();
		},4300);
		setTimeout(function(){
			$("#Dipper").attr('src','images/5img7.png');
			$("#bing")[0].play();
		},4700);
		setTimeout(function(){
			$("#bing")[0].pause();
			$("#popWindow").show();
			$("#button5").show();
			$("#page5 p").show();
		},5200);
	}
/*点击圆点弹出黑洞*/
	var page5=document.getElementById('button5');
    page5.addEventListener("touchstart",function(){
            $("#popWindow").hide();
			$("#button5").hide();
			$("#page5 p").hide();
			$("#blackhole").show();
			$("#hei")[0].play();
			setTimeout(function(){
				$("#page0").removeClass("pageShow");
				$("#page1").hide();
				$("#page5").removeClass("pageShow");
				$("#hei")[0].pause();
				$("#blackhole").hide();
				$(".stage").css('display','block');
				$("#bgMusic1").css("src","music/bgmusic.mp3");
				if(boMusic%2==0){
					$("#bgMusic1")[0].pause();	
					$("#music").find("img").attr('src','images/0music2@2x.png');
				}else{
					$("#bgMusic1")[0].play();	
					$("#music").find("img").attr('src','images/0music@2x.png');
				}
			},3000);
		});
	
/*事件上下滑动函数*/
function zoom(touch_obj) {
        var starY=0;
        var endY=0;
        var moveY=0;
        var sum=0;
        var b=false;//是否到最后一页
        touch_obj.addEventListener("touchstart",function (e) {
        	starY=e.touches[0].clientY;
        });
        touch_obj.addEventListener("touchmove",function (e) {
            e.preventDefault();
            endY=e.touches[0].clientY;
            moveY=endY-starY;
            sum-=moveY;
			if(sum>=0){
	            touch_obj.style.transform='translateZ('+sum+'px'+')';
	            touch_obj.style.transform='webkitTranslateZ('+sum+'px'+')';
	        }else if(sum<0){
	            touch_obj.style.transform='translateZ('+0+'px'+')';
	            touch_obj.style.transform='webkitTranslateZ('+0+'px'+')';
	            sum=0;
	        }
	        var directU=document.getElementById("directU");
	        if(sum>1700&&sum<2100){
	        	touch_obj.style.transform='translateZ('+2000+'px'+')';
	        	directU.src="images/1directionUD.png";
	        }else if(sum>3700&&sum<4100){
	        	touch_obj.style.transform='translateZ('+4000+'px'+')';
	        }else if(sum>5700&&sum<6100){
	        	touch_obj.style.transform='translateZ('+6000+'px'+')';
	        }else if(sum>7700&&sum<8100){
	        	touch_obj.style.transform='translateZ('+8000+'px'+')';
	        }else if(sum>9700&&sum<10100){
	        	touch_obj.style.transform='translateZ('+10000+'px'+')';
	        }else if(sum>11700&&sum<12100){
	        	touch_obj.style.transform='translateZ('+12000+'px'+')';
	        }else if(sum>13700&&sum<14100){
	        	touch_obj.style.transform='translateZ('+14000+'px'+')';
	        }else if(sum>15700&&sum<16100){
	        	touch_obj.style.transform='translateZ('+16000+'px'+')';
	        }else if(sum>17700&&sum<18100){
	        	touch_obj.style.transform='translateZ('+18000+'px'+')';
	        }else if(sum>19700&&sum<20100){
	        	touch_obj.style.transform='translateZ('+20000+'px'+')';
	        }else if(sum>21700&&sum<22100){
	        	touch_obj.style.transform='translateZ('+22000+'px'+')';
	        }else if(sum>23700&&sum<24100){
	        	touch_obj.style.transform='translateZ('+24000+'px'+')';
	        }else if(sum>25700&&sum<26100){
	        	touch_obj.style.transform='translateZ('+26000+'px'+')';
				b=true;
	        }
	        if(b){
	        	$(".stage").css('display','none');
	        	$("#page13").show();
	        }
        });
        touch_obj.addEventListener("touchend",function (e) {
        
        });
    }

	/*6-12start*/
	var con=document.getElementById("con");
	zoom(con);
	/*6-12end*/
});