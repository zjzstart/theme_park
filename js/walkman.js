let imgWalker = document.querySelector(".walkman > img"),
	speed_walk = 0,
	sr = 1;
	imgWalker.style.left = '-200px';
	
setInterval(function(){
	
	
	if(sr > 0){
		imgWalker.style.transform = '';
		speed_walk = parseInt(speed_walk) + 20;
		imgWalker.style.left = speed_walk + 'px';
		if(speed_walk > 1223){
			sr = -sr;
		}
	}else{
		imgWalker.style.transform = 'rotateY(180deg)';
		speed_walk = parseInt(speed_walk) - 20;
		imgWalker.style.left = speed_walk + 'px';
		if(speed_walk < -150){
			sr = -sr;
		}
	}
},100);