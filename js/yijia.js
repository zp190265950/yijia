
//function ImgPlay(){
//	this.banner=document.getElementById("banner_img").children;
//	this.banner_left=document.getElementById("banner_left");
//	this.banner_right=document.getElementById("banner_right");
//	this.index=0;
//	this.innit();
//}
//ImgPlay.prototype.innit=function(){
//	this.antoPlay();
//	this.imgLeft();
//	this.imgRight();
//}
//ImgPlay.prototype.anto=function(){
//	if(this.index==3){
//		this.index=0;
//	}
//	for (var i = 0; i < this.banner.length; i++) {
//		animate(this.banner[i],{"opacity":0});
//	}
//	animate(this.banner[this.index],{"opacity":100})
//}
//ImgPlay.prototype.antoPlay=function(){
//	
//	this.imgTimer = setInterval(function(){
//		this.index++;
//		this.anto();
//	}.bind(this),2000)
//}
//ImgPlay.prototype.imgLeft=function(){
//	this.banner_left.onclick=function(){
//		clearInterval(this.imgTimer);
//		this.index--;
//		if(this.index==-1){
//			this.index=2;
//		}
//		this.anto();
//	}.bind(this);
//}
//ImgPlay.prototype.imgRight=function(){
//	this.banner_right.onclick=function(){
//		this.index++;
//		clearInterval(this.imgTimer);
//		this.anto();
//	}.bind(this);
//}
//var imgPlay=new ImgPlay();
//轮播图;
 var imgIndex = 0;
 var imgTimer = setInterval(antoPlay,2000);
 function antoPlay(){
 	if(imgIndex==$("#banner_img>div").size()-1){
 		imgIndex=0;
 	}else{
 		imgIndex++;
 	}
   	$("#banner_img>div").eq(imgIndex).fadeIn(300).siblings().fadeOut(300);
 	
 }
$("#banner_left").click(function(){
	clearInterval(imgTimer);
	if(imgIndex==0){
		imgIndex=$("#banner_img>div").size()-1;
	}else{
		imgIndex--;
	}
	$("#banner_img>div").eq(imgIndex).fadeIn(300).siblings().fadeOut(300);
	
})
$("#banner_right").click(function(){
	clearInterval(imgTimer);
	antoPlay();
	
})
//轮播结束

$("#hint_join").mouseenter(function(){
	$(this).css("color","#000000").find("span").animate({width:this.clientWidth},150);
	
}).mouseleave(function(){
	$(this).css("color","#FFF").find("span").animate({width:0},150);
})
function loadLabel(obj){
	obj.mouseenter(function(){
		$(this).find("a").css("color","#fff");
		$(this).find("p").animate({width:this.clientWidth},150);
		
	}).mouseleave(function(){
		$(this).find("a").css("color","#000");
		$(this).find("p").animate({width:0},150);
	})
}
loadLabel($(".foot_right>span"));

//购物车的加载条
$(".shap").find("span").mouseenter(function(){
	$(this).find("a").css("color","#fff");
	$(this).find("p").animate({width:250},200);
	
}).mouseleave(function(){
	$(this).find("a").css("color","#000");
	$(this).find("p").animate({width:0},200);
})



function navBlock(obj,ele){
	obj.mouseover(function(){
		ele.css("display","block");
	}).mouseout(function(){
		ele.css("display","none");
	})
}
navBlock($("#regis"),$(".regis"));
navBlock($(".regis"),$(".regis"));
navBlock($("#shap"),$(".shap"));
navBlock($(".shap"),$(".shap"));

