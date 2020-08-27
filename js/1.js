//轮播图 ----------------------------------------------------------------
// let	ulRight = document.querySelector("#ulRight"),
// 	dist=0,
// 	i,
// 	lo,
// 	j;

// ulRight.style.width = ulRight.childElementCount * 995 + "px";

// function move(){
// 	let timer00 = setInterval(function(){
// 		lo = ulRight.style.left;
// 		if(parseInt(lo) % 995 === 0){
// 			clearInterval(timer00);
// 		}
		
// 		if(parseInt(lo) === -3980){
// 			ulRight.style.left = '0px';
// 		}

// 		dist = ulRight.style.left;
// 		dist = parseInt(dist) - 5;
// 		ulRight.style.left = dist + 'px';

// 	}, 5);
// }

// setInterval(move,2000);

// move();

let offset0 = 0,
	timer_0,
	$width = $('#ulRight > li').length * 995 + 'px';
$('#ulRight').width($width);

function move(){
	timer_0 = setInterval(function(){
		if(offset0 % 995 === 0){
			clearInterval(timer_0);
		}
		if(offset0 === -3980){
			offset0 = 0;
		}
		offset0 -= 5;
		$('#ulRight').css('left',offset0 + 'px');
	},0.1);
}
// move();


setInterval(move,2500);

// header-picture	--------------------------------------------------------------------------

let left = document.querySelector("#left");	
let speed = 0;
left.addEventListener('mouseenter', function(){
	let timer2 = setInterval(function(){
		left.style.backgroundPosition = speed;
		speed = parseInt(speed) - 8;
		left.style.backgroundPosition = speed + 'px';
		if(speed === -56){
			clearInterval(timer2);
		}
	},8);
}, false);
left.addEventListener('mouseleave', function(){
	let timer3 = setInterval(function(){
		speed = left.style.backgroundPosition;
		speed = parseInt(speed) + 8;
		left.style.backgroundPosition = speed + 'px';
		if(speed === 0){
			clearInterval(timer3);
		}
	},8);
}, false);

// Selector浮层---------------------------------------------------
let select3 = document.querySelector("#select3"),
	ulLeft = document.querySelector('#ulLeft'),
	ass = document.querySelectorAll("#ulLeft li a"),
	imgList = ['img/1.jpg','img/2.jpg','img/3.jpg','img/4.jpg',
				'img/5.jpg','img/6.jpg','img/7.jpg','img/8.jpg'];

for(let i=0; i<ass.length; i++){
	ass[i].addEventListener('mouseenter', function(){
		select3.style.visibility = 'visible';
		select3.src = imgList[i];
	}, false);
	ass[i].addEventListener('mouseleave', function(){
		select3.style.visibility = 'hidden';
		ulLeft.style.boxShadow = "";
	}, false);
}


//------------------------------------------------------------------
// let intro = document.querySelectorAll('.intro');
// for(let i=0; i<intro.length; i++){
// 	intro[i].addEventListener('mouseenter',function(){
// 		this.style.boxShadow = "2px 2px 50px rgba(255,255,255,.7)";
// 	},false);
// 	intro[i].addEventListener('mouseleave',function(){
// 		this.style.boxShadow = "";
// 	},false);
// }

$('.intro').hover(function(){
	$(this).css('boxShadow','2px 2px 50px rgba(255,255,255,.7)');
},function(){
	$(this).css('boxShadow','');
});

//轮播图2 ----------------------------------------------

// let ul22 = document.querySelector('.rotationChart2 > ul'),
// 	li22 = document.querySelectorAll('.rotationChart2 > ul > li'),
// 	dist2 = 0;
	
// setInterval(function(){
// 	if(parseInt(dist2) === -1050){
// 		ul22.style.left = '0px';
// 	}
// 	dist2 = ul22.style.left;
// 	dist2 = parseInt(dist2) - 10;
// 	ul22.style.left = dist2 + 'px';
// }, 100);

let timer,
	offset = 0;

function autoPlayB(){
	timer = setInterval(function(){
		if(offset === -1050){
			offset = 0;
		}
		offset -= 10;
		$('.rotationChart2 > ul').css('marginLeft',offset+'px');
	},50);
}
autoPlayB();

$('.rotationChart2 > ul li').hover(function(){
	clearInterval(timer);
	$(this).siblings().fadeTo(100,.5);
},function(){
	autoPlayB();
	$(this).siblings().fadeTo(100,1);
});