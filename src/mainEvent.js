import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';




const mainEvent = () =>{

    let homeTitleDiv = document.querySelectorAll('.home--title div:first-child , .home--title div, .home--intro h1:first-child, .home--intro h2');

    let homeSubSpan = document.querySelectorAll('.home--intro span:nth-of-type(1), .home--intro span:nth-of-type(2) ,.home--intro span:nth-of-type(3) ');

    console.log(homeSubSpan);  // 이걸로 타이핑 효과를 줄 예정!!!

    // gsap.to(요소, 지속시간, 옵션);
    
    homeTitleDiv.forEach(( item)=>{
        gsap.set(item,{opacity: 0});
    });
    homeTitleDiv.forEach(( item , index )=>{
        gsap.to(item,{
            duration: 1,
            delay: (index + 1) * 0.7,
            opacity: 1
        });

    });

    // setTimeout( typeWriter , 3500);
    setTimeout(typeWriter, 4500);
    /**
     * 
     * 
     *  <span> </span>
        <span></span>
        <span></span>

     */


    // 타이핑
    const homeIntroTag = document.querySelector(".home--intro > div");

    // const intro1 =  document.querySelector(".home--intro span:nth-of-type(1)");
    // const intro2 =  document.querySelector(".home--intro span:nth-of-type(2)");
    // const intro3 =  document.querySelector(".home--intro span:nth-of-type(3)");
    // console.log(intro1, intro2, intro3);


    // const introSpan1 = "신입 개발자로서 고객들이 쉽게 사용할 수 있는 아름답고"; // 타이핑할 문구
    // const introSpan2 = "기능적인 웹 애플리케이션을 만드는 데 기여하고 싶습니다.";
    // const introSpan3 = "끊임없이 배우고 성장해 나가는 개발자가 되도록 하겠습니다.";

    const introSpanArray = [
        "신입 개발자로서 고객들이 쉽게 사용할 수 있는 아름답고",
        "기능적인 웹 애플리케이션을 만드는 데 기여하고 싶습니다.",
        "끊임없이 배우고 성장해 나가는 개발자가 되도록 하겠습니다."
    ];

    let textNum = 0;
    let speed = 100; // 글자 타이핑 속도 (밀리초 단위)
    let currentLine = 0;

    function typeWriter() {

        if (currentLine < introSpanArray.length) {
            let currentText = introSpanArray[currentLine]; // 현재 줄의 텍스트
    
            if (textNum < currentText.length) {
                // 현재 줄에서 한 글자씩 타이핑
                homeIntroTag.innerHTML += currentText.charAt(textNum);
                textNum++;
                setTimeout(typeWriter, speed);
            } else {
                // 한 줄 타이핑 완료 시 다음 줄로 이동
                homeIntroTag.innerHTML += "<br>"; // 줄바꿈
                currentLine++; // 다음 줄로 이동
                textNum = 0; // 다음 줄의 첫 글자부터 시작
                setTimeout(typeWriter, speed); // 다음 줄 타이핑 시작
            }
        }
    }

    function textTyping(item , i) {
        homeIntroTag.textContent += item.charAt(i);
    }
        // textNum = 0;

        // if (textNum < introSpanArray[i].length) {
        //     homeIntroTag.textContent += introSpan1.charAt(textNum);
        //     textNum++;
        //     setTimeout(typeWriter, speed);
        // }



    

  









    let canvas = document.querySelector('.home--canvas');
    let ctx = canvas.getContext('2d');


    // console.log(canvas);





    // var c = document.querySelector(".home--canvas");
    // var ctx = c.getContext("2d");

    // function resize() {
    //     var box = c.getBoundingClientRect();
    //     c.width = box.width;
    //     c.height = box.height;
    // }

    // var light = {
    //     x: 160,
    //     y: 200
    // }

    // var colors = ["#f5c156", "#e6616b", "#5cd3ad"];

    // function drawLight() {
    //     ctx.beginPath();
    //     ctx.arc(light.x, light.y, 1000, 0, 2 * Math.PI);
    //     var gradient = ctx.createRadialGradient(light.x, light.y, 0, light.x, light.y, 1000);
    //     gradient.addColorStop(0, "#3b4654");
    //     gradient.addColorStop(1, "#2c343f");
    //     ctx.fillStyle = gradient;
    //     ctx.fill();

    //     ctx.beginPath();
    //     ctx.arc(light.x, light.y, 20, 0, 2 * Math.PI);
    //     gradient = ctx.createRadialGradient(light.x, light.y, 0, light.x, light.y, 5);
    //     gradient.addColorStop(0, "#fff");
    //     gradient.addColorStop(1, "#3b4654");
    //     ctx.fillStyle = gradient;
    //     ctx.fill();
    // }

    // function Box() {
    //     this.half_size = Math.floor((Math.random() * 50) + 1);
    //     this.x = Math.floor((Math.random() * c.width) + 1);
    //     this.y = Math.floor((Math.random() * c.height) + 1);
    //     this.r = Math.random() * Math.PI;
    //     this.shadow_length = 2000;
    //     this.color = colors[Math.floor((Math.random() * colors.length))];
    
    //     this.getDots = function() {

    //         var full = (Math.PI * 2) / 4;


    //         var p1 = {
    //             x: this.x + this.half_size * Math.sin(this.r),
    //             y: this.y + this.half_size * Math.cos(this.r)
    //         };
    //         var p2 = {
    //             x: this.x + this.half_size * Math.sin(this.r + full),
    //             y: this.y + this.half_size * Math.cos(this.r + full)
    //         };
    //         var p3 = {
    //             x: this.x + this.half_size * Math.sin(this.r + full * 2),
    //             y: this.y + this.half_size * Math.cos(this.r + full * 2)
    //         };
    //         var p4 = {
    //             x: this.x + this.half_size * Math.sin(this.r + full * 3),
    //             y: this.y + this.half_size * Math.cos(this.r + full * 3)
    //         };

    //         return {
    //             p1: p1,
    //             p2: p2,
    //             p3: p3,
    //             p4: p4
    //         };
    //     }
    //     this.rotate = function() {
    //         var speed = (60 - this.half_size) / 20;
    //         this.r += speed * 0.002;
    //         this.x += speed;
    //         this.y += speed;
    //     }
    //     this.draw = function() {
    //         var dots = this.getDots();
    //         ctx.beginPath();
    //         ctx.moveTo(dots.p1.x, dots.p1.y);
    //         ctx.lineTo(dots.p2.x, dots.p2.y);
    //         ctx.lineTo(dots.p3.x, dots.p3.y);
    //         ctx.lineTo(dots.p4.x, dots.p4.y);
    //         ctx.fillStyle = this.color;
    //         ctx.fill();


    //         if (this.y - this.half_size > c.height) {
    //             this.y -= c.height + 100;
    //         }
    //         if (this.x - this.half_size > c.width) {
    //             this.x -= c.width + 100;
    //         }
    //     }
    //     this.drawShadow = function() {
    //         var dots = this.getDots();
    //         var angles = [];
    //         var points = [];

    //         dots.forEach(dot => {
    //             var angle = Math.atan2(light.y - dots[dot].y, light.x - dots[dot].x);
    //             var endX = dots[dot].x + this.shadow_length * Math.sin(-angle - Math.PI / 2);
    //             var endY = dots[dot].y + this.shadow_length * Math.cos(-angle - Math.PI / 2);
    //             angles.push(angle);
    //             points.push({
    //                 endX: endX,
    //                 endY: endY,
    //                 startX: dots[dot].x,
    //                 startY: dots[dot].y
    //             });
    //         });
            

    //         for (var i = points.length - 1; i >= 0; i--) {
    //             var n = i == 3 ? 0 : i + 1;
    //             ctx.beginPath();
    //             ctx.moveTo(points[i].startX, points[i].startY);
    //             ctx.lineTo(points[n].startX, points[n].startY);
    //             ctx.lineTo(points[n].endX, points[n].endY);
    //             ctx.lineTo(points[i].endX, points[i].endY);
    //             ctx.fillStyle = "#2c343f";
    //             ctx.fill();
    //         };
    //     }
    // }

    // var boxes = [];

    // function draw() {
    //     ctx.clearRect(0, 0, c.width, c.height);
    //     drawLight();

    //     for (var i = 0; i < boxes.length; i++) {
    //         boxes[i].rotate();
    //         boxes[i].drawShadow();
    //     };
    //     for (var i = 0; i < boxes.length; i++) {
    //         collisionDetection(i)
    //         boxes[i].draw();
    //     };
    //     requestAnimationFrame(draw);
    // }

    // resize();
    // draw();

    // while (boxes.length < 14) {
    //     boxes.push(new Box());
    // }

    // window.onresize = resize;
    // c.onmousemove = function(e) {
    //     light.x = e.offsetX == undefined ? e.layerX : e.offsetX;
    //     light.y = e.offsetY == undefined ? e.layerY : e.offsetY;
    // }


    // function collisionDetection(b){
    //   for (var i = boxes.length - 1; i >= 0; i--) {
    //     if(i != b){ 
    //       var dx = (boxes[b].x + boxes[b].half_size) - (boxes[i].x + boxes[i].half_size);
    //       var dy = (boxes[b].y + boxes[b].half_size) - (boxes[i].y + boxes[i].half_size);
    //       var d = Math.sqrt(dx * dx + dy * dy);
    //       if (d < boxes[b].half_size + boxes[i].half_size) {
    //           boxes[b].half_size = boxes[b].half_size > 1 ? boxes[b].half_size-=1 : 1;
    //           boxes[i].half_size = boxes[i].half_size > 1 ? boxes[i].half_size-=1 : 1;
    //       }
    //     }
    //   }
    // }




}


export default mainEvent;