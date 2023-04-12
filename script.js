// var canvas1 = document.getElementById('l-canvas');←ここと
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var raf;

var ball = {
    x: Math.floor(Math.random() * (100 - 0)) + 0,
    y: Math.floor(Math.random() * (800- 701)) + 701,
    vx: 1,
    vy: 1,
    radius: 35,
    color: 'blue',
    draw: function() { //パスを指定する（）
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true); //丸を描画する関数
        ctx.closePath();
        ctx.fillStyle = this.color; //ぬりつぶす
        ctx.fill();
    }
};
var redBall = {
    x: Math.floor(Math.random() * (900 - 800)) + 800,
    y: Math.floor(Math.random() * (900 - 800)) + 800,
    vx: -1,
    vy: -1,
    radius: 30,
    color: 'red',
    draw: function() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fillStyle = this.color;
        ctx.fill();
    }
};
var greenBall = {
    x: Math.floor(Math.random() * (500 -301)) + 301,
    y: Math.floor(Math.random() * (500 - 301)) + 301,
    vx: 1,
    vy: -1,
    radius: 50,
    color: 'green',
    draw: function() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fillStyle = this.color;
        ctx.fill();
    }
};
var pinkBall = {
    x: Math.floor(Math.random() * (200 - 0)) + 0,
    y: Math.floor(Math.random() * (300 - 0)) + 0,
    vx: -1,
    vy: 1,
    radius: 60,
    color: 'pink',
    draw: function() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fillStyle = this.color;
        ctx.fill();
    }
};
var orangeBall = {
    x: Math.floor(Math.random() * (600 - 501)) + 501,
    y: Math.floor(Math.random() * (400 - 301)) + 301,
    vx: -1,
    vy: -1,
    radius: 70,
    color: '#ff8c00',
    draw: function() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fillStyle = this.color;
        ctx.fill();
    }
};
var yellowBall = {
    x: Math.floor(Math.random() * (400 - 200)) + 200,
    y: Math.floor(Math.random() * (700 - 301)) + 301,
    vx: 1,
    vy: -1,
    radius: 80,
    color: 'yellow',
    draw: function() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fillStyle = this.color;
        ctx.fill();
    }
};
var royalBlueBall = {
    x: Math.floor(Math.random() * (600 - 100)) + 100,
    y: Math.floor(Math.random() * (600 - 100)) + 100,
    vx: -1,
    vy: 1,
    radius: 40,
    color: '#4169e1',
    draw: function() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fillStyle = this.color;
        ctx.fill();
    }
};


var w = $('.l-canvas').width();
var h = $('.l-canvas').height();
$('#canvas').attr('width', w);
$('#canvas').attr('height', h);





// function getSize() {
//     canvas.width = canvas1.offsetWidth;
//     canvas.height = canvas1.offsetHeight;

// }      ←ここです




function draw() {
    ctx.clearRect(0,0, canvas.width, canvas.height); //キャンバスをりせっと
    ball.draw(); // 宣言しているものを描画する関数
    ball.x += ball.vx;
    ball.y += ball.vy;
    redBall.draw();
    redBall.x += redBall.vx;
    redBall.y += redBall.vy;
    greenBall.draw();
    greenBall.x += greenBall.vx;
    greenBall.y += greenBall.vy;
    pinkBall.draw();
    pinkBall.x += pinkBall.vx;
    pinkBall.y += pinkBall.vy;
    orangeBall.draw();
    orangeBall.x += orangeBall.vx;
    orangeBall.y += orangeBall.vy;
    yellowBall.draw();
    yellowBall.x += yellowBall.vx;
    yellowBall.y += yellowBall.vy;
    royalBlueBall.draw();
    royalBlueBall.x += royalBlueBall.vx;
    royalBlueBall.y += royalBlueBall.vy;

    if (ball.y + ball.vy > canvas.height ||
        ball.y + ball.vy < 0) {
        ball.vy = -ball.vy;
    }
    if (ball.x + ball.vx > canvas.width ||
        ball.x + ball.vx < 0) {
        ball.vx = -ball.vx;
    }
    if (redBall.y + redBall.vy > canvas.height ||
        redBall.y + redBall.vy < 0) {
        redBall.vy = -redBall.vy;
    }
    if (redBall.x + redBall.vx > canvas.width ||
        redBall.x + redBall.vx < 0) {
        redBall.vx = -redBall.vx;
    }
    if (greenBall.y + greenBall.vy > canvas.height ||
        greenBall.y + greenBall.vy < 0) {
        greenBall.vy = -greenBall.vy;
    }
    if (greenBall.x + greenBall.vx > canvas.width ||
        greenBall.x + greenBall.vx < 0) {
        greenBall.vx = -greenBall.vx;
    }
    if (pinkBall.y + pinkBall.vy > canvas.height ||
        pinkBall.y + pinkBall.vy < 0) {
        pinkBall.vy = -pinkBall.vy;
    }
    if (pinkBall.x + pinkBall.vx > canvas.width ||
        pinkBall.x + pinkBall.vx < 0) {
        pinkBall.vx = -pinkBall.vx;
    }
    if (orangeBall.y + orangeBall.vy > canvas.height ||
        orangeBall.y + orangeBall.vy < 0) {
        orangeBall.vy = -orangeBall.vy;
    }
    if (orangeBall.x + orangeBall.vx > canvas.width ||
        orangeBall.x + orangeBall.vx < 0) {
        orangeBall.vx = -orangeBall.vx;
    }
    if (yellowBall.y + yellowBall.vy > canvas.height ||
        yellowBall.y + yellowBall.vy < 0) {
        yellowBall.vy = -yellowBall.vy;
    }
    if (yellowBall.x + yellowBall.vx > canvas.width ||
        yellowBall.x + yellowBall.vx < 0) {
        yellowBall.vx = -yellowBall.vx;
    }
    if (royalBlueBall.y + royalBlueBall.vy > canvas.height ||
        royalBlueBall.y + royalBlueBall.vy < 0) {
        royalBlueBall.vy = -royalBlueBall.vy;
    }
    if (royalBlueBall.x + royalBlueBall.vx > canvas.width ||
        royalBlueBall.x + royalBlueBall.vx < 0) {
        royalBlueBall.vx = -royalBlueBall.vx;
    }


    raf = window.requestAnimationFrame(draw);
}

canvas.addEventListener('mouseover', function(e) {
    raf = window.requestAnimationFrame(draw);
});

canvas.addEventListener('mouseout', function(e) {
window.cancelAnimationFrame(raf);
});

ball.draw();



















// // グローバル変数
// let wrapper = null;             // キャンバスの親要素
// let canvas = null;                  // キャンバス
// let ctx = null;                     // コンテキスト
// let $id = function (id) { return document.getElementById(id); };    // DOM取得用
// // キャンバスのサイズをウインドウに合わせて変更
// function getSize() {
//     // キャンバスのサイズを再設定
//     canvas.width = wrapper.offsetWidth;
//     canvas.height = wrapper.offsetHeight;
// }
// // リサイズ時
// window.addEventListener("resize", function () {
//     getSize();
// });
// // 起動処理
// window.addEventListener("load", function () {
//     // キャンバスの親要素情報取得（親要素が無いとキャンバスのサイズが画面いっぱいに表示できないため）
//     wrapper = $id("canvasParent");
//     // キャンバス情報取得
//     canvas = $id("canvas");
//     ctx = canvas.getContext("2d");
//     // キャンバスをウインドウサイズにする
//     getSize();
// });
// var ball = {
//     x: 50,
//     y: 100,
//     vx: 4,
//     vy: 3,
//     radius: 60,
//     color: 'blue',
//     draw: function () {
//         ctx.beginPath();
//         ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
//         ctx.closePath();
//         ctx.fillStyle = this.color;
//         ctx.fill();
//     }
// };
// function draw() {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     ball.draw();
//     ball.x += ball.vx;
//     ball.y += ball.vy;
//     if (ball.y + ball.vy > canvas.height ||
//         ball.y + ball.vy < 0) {
//         ball.vy = -ball.vy;
//     }
//     if (ball.x + ball.vx > canvas.width ||
//         ball.x + ball.vx < 0) {
//         ball.vx = -ball.vx;
//     }
//     window.requestAnimationFrame(draw);
// }
// window.requestAnimationFrame(draw);





// 11:37
// html にid付与　
// <div id="canvasParent" class="l-canvas canvas__box">




