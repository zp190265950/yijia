//缓冲运动函数
function animate(obj,josn,callback){
	//清除当前元素下的定时器
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){//0-1 0--100 obj接收传递过来的样式集合。
		var current = 0;
		 var flag = true;
		 //遍历obj这个对象
		for (var attr in josn) {
			
			if(attr=="opacity"){
				current=parseFloat(getStyle(obj,attr))*100;
			}else{
				current=parseInt(getStyle(obj,attr));
			}
			var speed = (josn[attr]-current)/10;
			speed = speed>0? Math.ceil(speed):Math.floor(speed);
			if(current!=josn[attr]){
				flag = false;
			}
			if(attr=="opacity"){
				obj.style[attr]=(current+speed)/100;
			}else if(attr=="zIndex"){
				obj.style[attr] = josn[attr];
			}else{
				obj.style[attr]=current+speed+"px";
			}
		}
		if(flag){
			clearInterval(obj.timer);
			if(callback){
				callback();
			}
		}
	},20)
}
//获取浏览器计算后的属性//获取css样式的值
function getStyle(obj,attr){
	if(window.getComputedStyle){
		return window.getComputedStyle(obj)[attr];
	}else{
		return obj.currentStyle[attr];
	}
}


