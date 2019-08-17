$(function(){	
	loading();
	setTimeout(function(){				
					$("#load").removeClass("pageshow");
					$("#index").addClass("pageshow");
					$("#m1")[0].play();
					
				},10000);
				$("#index .main img:nth-child(12)").click(function(){
					$("#index .flims img:nth-child(5)").removeClass("flim5");
					$("#index .flims img:nth-child(5)").addClass("f5");
					setTimeout(function(){	
						$("#index").removeClass("back");
						$("#index").addClass("mov");
					setTimeout(function(){	
					$("#index").removeClass("pageshow");
					$("#production").addClass("pageshow");
					$("#production").addClass("mo");
					},1000);
					},2500);
				});
				$("#index .main img:nth-child(10)").click(function(){
					$("#index .flims img:nth-child(3)").removeClass("flim3");
					$("#index .flims img:nth-child(3)").addClass("f3");
					setTimeout(function(){	
						$("#index").removeClass("back");
						$("#index").addClass("mov");
					setTimeout(function(){	
					$("#index").removeClass("pageshow");
					$("#history").addClass("pageshow");
					$("#history").addClass("mo");
					},1000);
					},2500);
				});
				$("#index .main img:nth-child(9)").click(function(){
					$("#index .flims img:nth-child(2)").removeClass("flim2");
					$("#index .flims img:nth-child(2)").addClass("f2");
					setTimeout(function(){	
						$("#index").removeClass("back");
						$("#index").addClass("mov");
					setTimeout(function(){	
					$("#index").removeClass("pageshow");
					$("#introduce").addClass("pageshow");
					$("#introduce").addClass("mo");
					},1000);
					},2500);
				});
				$("#index .main img:nth-child(11)").click(function(){
					$("#index .flims img:nth-child(4)").removeClass("flim4");
					$("#index .flims img:nth-child(4)").addClass("f4");
					setTimeout(function(){	
						$("#index").removeClass("back");
						$("#index").addClass("mov");
					setTimeout(function(){	
					$("#index").removeClass("pageshow");
					$("#ry").addClass("pageshow");
					$("#ry").addClass("mo");
					},1000);
					},2500);
				});
				zoom("page123");
				comeback("introduce","#introduce");
                comeback("ry","#ry")
                comeback("production","#production")

var str1={
      "first":"2008",
      "second":"获湖北省",
      "third":"发改委医药专项基金"
 };


var str2={
      "first":"2009",
      "second":"获湖北省",
      "third":"科技厅创新基金"
 };



var str3={
      "first":"2009",
      "second":"获湖北省",
      "third":"经信委技改基金"
 };
 
var str4={
      "first":"2009",
      "second":"获湖北省",
      "third":"药监局绿色通道企业"
 };

var str5={
      "first":"2010",
      "second":"获湖北省",
      "third":"发改委创新基金"
 };

var str6={
      "first":"2011",
      "second":"获湖北省",
      "third":"科技厅创新型 试点企业基金"
 };
 
 var str7={
      "first":"2011",
      "second":"获湖北省",
      "third":"企业技术中心"
 };
 
 var str8={
      "first":"2011",
      "second":"获湖北省",
      "third":"经信委产学研发展专项基金"
 };
 
var str9={
      "first":"2007",
      "second":"获国家",
      "third":"科学技术部中小企业"
 };

var str10={
      "first":"2009",
      "second":"获国家",
      "third":"发改委综合节能项目资助"
 };

var str11={
      "first":"2010",
      "second":"获国家",
      "third":"发改委产业振兴项目资助"
 };

var str12={
      "first":"2011",
      "second":"获国家",
      "third":"工信部重大科技成果转化资助"
 };


var arr_count=[str1,str2,str3,str4,str5,str6,str7,str8,str9,str10,str11,str12];



var i=0;


  var time=setInterval(function(){
     i++;
     if(i<12){
    
	$("#ttt").text(arr_count[i].first);
	
	$("#tA").text(arr_count[i].second);
	
	$("#tB").text(arr_count[i].third)
	}
     if(i>=11){ 	
	i=1;
}
    },2000);


});	
function loading(){
					var i=0;
					setInterval(function(){
						
						if(i<=100){
							$("#rate").text(i+'%');
							i++;
						}
						
					},40);
						
				
				}



   function zoom(obj) {
                        var starY=0;
                        var endY=0;
                        var moveY=0;
                        var starX=0;
                        var endX=0;
                        var moveX=0;
                        var  sum=0;
                        var  touch_obj=document.getElementById(obj);
                        console.log(touch_obj);
                       
                        touch_obj.addEventListener("touchstart",function (e) {
                         starY=e.touches[0].clientY;
                         starX=e.touches[0].clientX;
                        });
                        touch_obj.addEventListener("touchmove",function (e) {
                            e.preventDefault();
                            endY=e.touches[0].clientY;
                             endX=e.touches[0].clientX;
                            moveY=endY-starY;
                            moveX=endX-starX;
                            sum+=moveY;
                         console.log(sum);
                            if(sum<0){
                            	sum=0;
                               
                            }
                            
                             if(sum>100){
                            	$("#u").addClass("disable")
                               $("#t").addClass("disable")
                            }
                            
                            if(sum>14500){
                           sum=0;
                            }
                           
                           if(moveX>100){
                           	history.back();
                           	
                           	$("#history").removeClass("pageshow");
                           	$("#index").addClass("pageshow");
                           	$("#index").addClass("back");
//                         	
                           	$("#index .flims img:nth-child(1)").removeClass("flim1");	
                           	 $("#index .flims img:nth-child(2)").removeClass("flim2");	
                           $("#index .flims img:nth-child(2)").removeClass("f2");	
                            $("#index .flims img:nth-child(3)").removeClass("flim3");	
                           $("#index .flims img:nth-child(3)").removeClass("f3");	
                            $("#index .flims img:nth-child(4)").removeClass("flim4");	
                           $("#index .flims img:nth-child(4)").removeClass("f4");	
                           $("#index .flims img:nth-child(5)").removeClass("flim5");	
                           $("#index .flims img:nth-child(5)").removeClass("f5");	
                           $("#index .flims img:nth-child(6)").removeClass("flim6");	
                           $("#index .flims img:nth-child(7)").removeClass("flim7");	
                           $("#index .flims img:nth-child(8)").removeClass("flim8");	
                           $("#index .flims img:nth-child(9)").removeClass("flim9");
                           $("#index .flims img:nth-child(10)").removeClass("flim9");	
                           $("#index .flims img:nth-child(11)").removeClass("flim9");	
                           $("#index .flims img:nth-child(12)").removeClass("flim9");	
                            $("#index .flims img:nth-child(9)").addClass("flim9show");
                           $("#index .flims img:nth-child(10)").addClass("flim9show");
                           $("#index .flims img:nth-child(11)").addClass("flim9show");	
                           $("#index .flims img:nth-child(12)").addClass("flim9show");
                           }
                            touch_obj.style.transform='translateZ('+sum/3+'px'+')';
                            
                        });
                    }
                   
            function comeback(obj1,obj2) {            
                        var starX=0;
                        var endX=0;
                        var moveX=0;
                        var  sum=0;
                        var  touch_obj=document.getElementById(obj1);
                       
                        touch_obj.addEventListener("touchstart",function (e) {
                     
                         starX=e.touches[0].clientX;
                        });
                        touch_obj.addEventListener("touchmove",function (e) {
                            e.preventDefault();
                             endX=e.touches[0].clientX;
                            moveX=endX-starX; 
                           if(moveX>100){
                           
                           	
                           	$(obj2).removeClass("pageshow");
                           	$("#index").addClass("pageshow");
                           	$("#index").addClass("back");
//                         	
                           	$("#index .flims img:nth-child(1)").removeClass("flim1");	
                           	 $("#index .flims img:nth-child(2)").removeClass("flim2");	
                           $("#index .flims img:nth-child(2)").removeClass("f2");	
                            $("#index .flims img:nth-child(3)").removeClass("flim3");	
                           $("#index .flims img:nth-child(3)").removeClass("f3");	
                            $("#index .flims img:nth-child(4)").removeClass("flim4");	
                           $("#index .flims img:nth-child(4)").removeClass("f4");	
                           $("#index .flims img:nth-child(5)").removeClass("flim5");	
                           $("#index .flims img:nth-child(5)").removeClass("f5");	
                           $("#index .flims img:nth-child(6)").removeClass("flim6");	
                           $("#index .flims img:nth-child(7)").removeClass("flim7");	
                           $("#index .flims img:nth-child(8)").removeClass("flim8");	
                           $("#index .flims img:nth-child(9)").removeClass("flim9");
                           $("#index .flims img:nth-child(10)").removeClass("flim9");	
                           $("#index .flims img:nth-child(11)").removeClass("flim9");	
                           $("#index .flims img:nth-child(12)").removeClass("flim9");	
                            $("#index .flims img:nth-child(9)").addClass("flim9show");
                           $("#index .flims img:nth-child(10)").addClass("flim9show");
                           $("#index .flims img:nth-child(11)").addClass("flim9show");	
                           $("#index .flims img:nth-child(12)").addClass("flim9show");
                
                           	
                           }
                         
                           });
                    }