// var canvas1 = document.getElementById('l-canvas');←ここと
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var raf;

var ball = {
    x: 50,
    y: 100,
    vx: 4,
    vy: 3,
    radius: 40,
    color: 'blue',
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
    ctx.clearRect(0,0, canvas.width, canvas.height);
    ball.draw();
    ball.x += ball.vx;
    ball.y += ball.vy;

    if (ball.y + ball.vy > canvas.height ||
        ball.y + ball.vy < 0) {
        ball.vy = -ball.vy;
    }
    if (ball.x + ball.vx > canvas.width ||
        ball.x + ball.vx < 0) {
        ball.vx = -ball.vx;
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




