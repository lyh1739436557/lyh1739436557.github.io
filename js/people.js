// 上一页
$(function(){

	setTimeout(function(){
					$("#page22 ").removeClass("pageshow");
					$("#page0").addClass("pageshow");
				},5000);
	function loading(){
		var i=0;
		setInterval(function(){
			
			if(i<=100){
				$("#rate").text(i+'%');
				i++;
			}
			
		},40);
	}
	loading();

	 function start(obj1,obj2,obj3){
         $(obj1).click(function(){

			$(obj2).removeClass("pageshow");
			$(obj3).addClass("pageshow");

         });
		
	 };
		start(load,page0,page1);
		start(one,page1,page2);
		start(two,page2,page3);
		start(three,page3,page4);
		start(fore,page4,page5);
		start(fire,page5,page6);
		start(six,page6,page7);
		start(seven,page7,page8);
		start(eight,page8,page9);
		start(nine,page9,page10);
//点击返回主页
		start(read,page21,page0);
// 查看原著
		start(see,page11,page21);
		start(see,page12,page21);
		start(see,page13,page21);
		start(see,page14,page21);
		start(see,page15,page21);
		start(see,page16,page21);
		start(see,page17,page21);
		start(see,page18,page21);
		start(see,page19,page21);
		start(see,page20,page21);
// 结果不满意
	 	start(tun,page11,page1);
	 	start(tun,page12,page1);
	 	start(tun,page13,page1);
	 	start(tun,page14,page1);
	 	start(tun,page15,page1);
	 	start(tun,page16,page1);
	 	start(tun,page17,page1);
	 	start(tun,page18,page1);
	 	start(tun,page19,page1);
	 	start(tun,page20,page1);
		
// 下一页
	function ret(obj1,obj2,obj3){
			
		$(obj1).click(function(){
				$(obj2).removeClass("pageshow");
				$(obj3).addClass("pageshow");

			});
		};
		ret(s2,page2,page1);
		ret(s3,page3,page2);
		ret(s4,page4,page3);
		ret(s5,page5,page4);
		ret(s6,page6,page5);
		ret(s7,page7,page6);
		ret(s8,page8,page7);
		ret(s9,page9,page8);
		ret(s10,page10,page9);
// 获取点击选择的值

	function set(obj1,obj2,obj3,obj4){
		sum=0;
		$(obj1).click(function(){
				sum=sum+1;
			});
		$(obj2).click(function(){
				sum=sum+2;
			});
		$(obj3).click(function(){
				sum=sum+3;
			});
		$(obj4).click(function(){
				sum=sum+4;
			});
		};
		set(r1,e1,w1,q1);
		set(r2,e2,w2,q2);
		set(r3,e3,w3,q3);
		set(r4,e4,w4,q4);
		set(r5,e5,w5,q5);
		set(r6,e6,w6,q6);
		set(r7,e7,w7,q7);
		set(r8,e8,w8,q8);
		set(r9,e9,w9,q9);
		set(r10,e10,w10,q10);
	
		$("#ten").click(function(){
			$("#page10").removeClass("pageshow");
			if(sum<=10){
			$("#page11").addClass("pageshow");
			}

			if(sum>10 && sum<=20){
			$("#page12").addClass("pageshow");
			}

			if(sum>20 && sum<=25){
			$("#page13").addClass("pageshow");
			}

			if(sum>25 && sum<=30){
			$("#page14").addClass("pageshow");
			}

			if(sum>30 && sum<=33){
			$("#page15").addClass("pageshow");
			}

			if(sum>33 && sum<=35){
			$("#page16").addClass("pageshow");
			}

			if(sum>35 && sum<=37){
			$("#page17").addClass("pageshow");
			}

			if(sum>37 && sum<=40){
			$("#page18").addClass("pageshow");
			}

			if(sum>40 && sum<60){
			$("#page19").addClass("pageshow");
			}

			if(sum>60){
			$("#page20").addClass("pageshow");
			}
		    sum=null;
		});
		
		// $(".page .change").append('<div class="load5" id="see"><img src="img/查看原著.png" width="50%"></div>');
		// $(".page .change").append('<div class="load6" id="tun"><img src="img/结果不满意.png" width="50%"></div>');

 })

 

