window.onload = function(){
	var canvas1 = document.getElementById("canvas1");
var canvas2 = document.getElementById("canvas2");
var canvas3 = document.getElementById("canvas3");
document.body.style.backgroundImage = "url('slide1.png')";
var but = document.getElementById("but");

var ctx1 = canvas1.getContext('2d');
var ctx2 = canvas2.getContext('2d');
var ctx3 = canvas3.getContext('2d');
phot = new Image();
 phot.src = 'O.png';

phot1 = new Image();
 phot1.src = 'RE.png';
var y1 = 0,y2 = 0,y3 = 0,z1 = 0 , z2 = 0, z3 = 0;
 var x = -1;
 var resize = document.querySelector("#resize");
 //resize.addEventListener("click",function(){
 	if(x === 0){
 		ctx.beginPath();
        ctx.moveTo(100, 650);
        ctx.lineTo(100, 650 - y1);
        ctx.strokeStyle = '#73c2fb';
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(100, 650 - y1);
        ctx.lineTo(100+200*(z1),650 - y1);
        ctx.strokeStyle = '#73c2fb';
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(100+200*(z1),650 - y1);
        ctx.lineTo(100+200*(z1), 650);
        ctx.strokeStyle = '#73c2fb';
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(100+200*(z1), 650);
        ctx.lineTo(100, 650);
        ctx.strokeStyle = '#73c2fb';
        ctx.stroke();
ctx.fillStyle = '#73c2fb';
        ctx.beginPath();
        ctx.fillRect(100-5, 650-5, 10, 10);
        ctx.beginPath();
        ctx.fillRect(100-5, 650 - y1-5, 10, 10);
        ctx.beginPath();
        ctx.fillRect(100+200*(z1)-5,650 - y1-5, 10, 10);
        ctx.beginPath();
        ctx.fillRect(100+200*(z1)-5 , 650-5, 10, 10);
         ctx.beginPath();

        ctx.fillRect(100-5, 650-5 - (y1)/2, 10, 10);
        ctx.beginPath();
        ctx.fillRect(100-5 +(200*(z1))/2, 650 - y1-5, 10, 10);
        ctx.beginPath();
        ctx.fillRect(100+200*(z1)-5,650 - y1/2-5, 10, 10);
        ctx.beginPath();
        ctx.fillRect(100+(200*(z1))/2 -5 , 650-5, 10, 10);
 	}
 //})
 var oreo1,oreo2,oreo3,size1,size2,size3;
 var oreof1=true, oreof2=true, oreof3=true;
 function  oreosss(event){
event.preventDefault();
 	
 	x = x+1
 	if(x === 0 && oreof1){
 		oreof1 = false;
    oreo1 = document.querySelector("#input").value ;
 	document.querySelector("#input").placeholder = "another oreo";
 	document.querySelector("#input").value = "";
 	size1 = document.querySelector("#inputs").value;
 	}
 	else if(x === 1 && oreof2){
 		oreof2 = false;
    oreo2 = document.querySelector("#input").value ;
 	document.querySelector("#input").value = "";
 		document.querySelector("#input").placeholder = "last oreo";
 	size2 = document.querySelector("#inputs").value;
 	}
 	else if(x === 2 && oreof3){

 		oreof3 = false;
    oreo3 = document.querySelector("#input").value ;
 	size3 = document.querySelector("#inputs").value;
 	}
 	if(oreo1 !== undefined){
 		makeOreo(oreo1,0,(size1)/10,ctx1);
 	};
 	if(oreo2 !== undefined){
 		makeOreo(oreo2,1,(size2)/10,ctx2);
 	}
 	if(oreo3 !== undefined){
 		makeOreo(oreo3,2,(size3)/10,ctx3);
 	}
 	
 	 	
 }

//window.addEventListener('mousemove', logKey);
window.addEventListener("mousemove",function(e){
    		 if(!drag && o === "o1"){
    		console.log(";;")
    		var xc = 415 - dx1 + e.clientX;
            var yc = 110 - dy1 + e.clientY;
    		canvas1.style.top = yc + "px" 
    		canvas1.style.left = xc + "px"; }
    		else if(!drag && o === "o2"){
    		console.log(";;")
    		var xc1 = 655 - dx2 + e.clientX;
            var yc1 =110 - dy2 + e.clientY;
    		canvas2.style.top = yc1+ "px" 
    		canvas2.style.left = xc1 + "px"; }
    		else if(!drag && o === "o3"){
    		console.log(";;")
    		var xc2 = 895 - dx3 + e.clientX;
            var yc2 = 110 - dy3 + e.clientY;
    		canvas3.style.top = yc2 + "px" 
    		canvas3.style.left = xc2 + "px"; }
    	})
var imgs = document.querySelectorAll(".oreoim")
window.addEventListener('click', logKey);
var screenLog = document.getElementById("screen-log");
var drag = true,dx,dx1,dy,dy1,dx2,dy2,dx3,dy3,t = "",ty = "";
function logKey(e) {
    if(e.clientX<1495  && e.clientX>1178){
    	drag = true;
    	console.log("---------");
    	if(o === "o1"){
		var k =1,l=0;

    		var data = canvas1.toDataURL('image/png');
		while(k !== 0){
			if(imgs[l].getAttribute("src") === null){
			imgs[l].setAttribute('src', data);
				k = 0;
			}
		   l++;
		}		
					canvas1.style.top = 110 + "px" ;
		var sdf =  (Number(dx)+300) ;
canvas1.style.left = 415 + "px";
ctx1.clearRect(0,0,300,150);
x =-1;
		o = "";
 		oreof1 = true;

    	}
    	if(o === "o2"){
    		var k =1,l=0;

    		var data = canvas2.toDataURL('image/png');
		while(k !== 0){
			if(imgs[l].getAttribute('src') === null){
			imgs[l].setAttribute('src', data);
				k = 0;
			}
		   l++;
		}
					canvas2.style.top = 111 + "px" ;
		var sdf = (Number(dx)+600);
		
		o = "";
canvas2.style.left = 655 + "px";
ctx2.clearRect(0,0,300,150);
x =0;
 		oreof2 = true;

    	}
    	if(o === "o3"){
    		var k =1,l=0;

    		var data = canvas3.toDataURL('image/png');
		while(k !== 0){
			if(imgs[l].getAttribute('src') === null){
			imgs[l].setAttribute('src', data);
				k = 0;
			}
		   l++;
		}
					canvas3.style.top = 112 + "px" ;
		var sdf = (Number(dx)+900);
		o = "";
canvas3.style.left = 895 + "px";
ctx3.clearRect(0,0,300,150);
x =1;
 		oreof3 = true;

    	}

	else if(e.clientX<645  && e.clientX>415){
		console.log("----------");
		o = "o1";
    if(drag){
    	dx1 = e.clientX;
    	dy1 = e.clientY;
    	dx  = canvas1.style.top ;
    	dy  = canvas1.style.left;
    	drag = false;
       for(var i =0 ; i<3; i++){
             t = t+ dx[i];
       }
       for(var i =0 ; i<3; i++){
             ty = ty+ dy[i];
       }
       dx = t;
       dy = ty
    }    
}
else if(e.clientX>645  && e.clientX<895){
	o = "o2";
    if(drag){
    	dx2 = e.clientX;
    	dy2 = e.clientY;
    	dx  = canvas2.style.top ;
    	dy  = canvas2.style.left;
    	drag = false;
       for(var i =0 ; i<3; i++){
             t = t+ dx[i];
       }
       for(var i =0 ; i<3; i++){
             ty = ty+ dy[i];
       }
       dx = t;
       dy = ty
    }    
}
else if(e.clientX<1125  && e.clientX>895){
	o = "o3";
    if(drag){
    	dx3 = e.clientX;
    	dy3 = e.clientY;
    	dx  = canvas3.style.top ;
    	dy  = canvas3.style.left;
    	drag = false;
       for(var i =0 ; i<3; i++){
             t = t+ dx[i];
       }
       for(var i =0 ; i<3; i++){
             ty = ty+ dy[i];
       }
       dx = t;
       dy = ty
    }    
}

}



 function makeOreo(ob,x,z,ctx){
 	if(ob !== ""){
 		var oreo = ob;
 		var y = 0;
 	for(var i = oreo.length - 1;i >= 0;i--){
 		if(oreo[i] === "O" || oreo[i] === "o"  ){
 			console.log("o");
 			y=  y+ 15*z
 			ctx.drawImage(phot,25+100*(1-z),150-y,250*z,15*z);
 			if(i === 0){
 				if(x === 0){
 				    y1 = y;
 				    z1 = z;
 				}
 				else if(x === 1){
 				    y2 = y;
 				    z2 = z;
 				}
 				else if(x === 2){
 				    y3 = y;
 				    z3 = z;
 				}

 			}
 		}
 		else if((oreo[i-1]+oreo[i]) === "RE" || (oreo[i-1]+oreo[i]) === "re" ){
 			console.log("re");
 			y = y+ 10*z
 			ctx.drawImage(phot1,25 + 20*z +100*(1-z),150-y, 210*z, 10*z);
 			if(i === 0){
 				if(x === 0){
 				    y1 = y;
 				    z1 = z;
 				}
 				else if(x === 1){
 				    y2 = y;
 				    z2 = z;
 				}
 				else if(x === 2){
 				    y3 = y;
 				    z3 = z;
 				}
 			}	
 		}
 		else if(oreo[i] === "&"){
 			if((i !== oreo.length - 1)&&(i !== 0)){
 			    y=  y+ 100*z
 			}
 			else if(i === 0){
 				if(x === 0){
 				    y1 = y;
 				    z1 = z;
 				}
 				else if(x === 1){
 				    y2 = y;
 				    z2 = z;
 				}
 				else if(x === 2){
 				    y3 = y;
 				    z3 = z;
 				}
 			}
 		}
 	}}
 }
}
