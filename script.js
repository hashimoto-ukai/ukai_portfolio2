document.addEventListener( "DOMContentLoaded",function(){
  let canvas = null;  // キャンバス
  let g = null;       // 描画コンテキスト
  let x, y, r;        // ●のx座標、y座標、半径
  let vx, vy;            // x方向の速度、y方向の速度

function drawAnim(){
    // 背景をグレーに
    g.fillStyle = "#fff";
    g.fillRect(0, 0, canvas.width, canvas.height);
    // ●を描画
    g.beginPath();
    g.fillStyle = "steelblue";    // 塗りつぶす色
    g.arc(x, y, r, 0, Math.PI*2, false);
    g.fill();
    // ●の移動
    x += vx;
    y += vy;
    // 壁に当たったら跳ね返る（●のxy座標は中心点のため、半径を考慮）
    if(x < 0+r || x > canvas.width-r){
        vx = -vx;
    }
    if(y < 0+r || y > canvas.height-r){
        vy = -vy;
    }
    // 再帰呼び出しでアニメーションさせる
    requestAnimationFrame(drawAnim);
}
window.addEventListener("load", ()=>{
    // キャンバスの初期設定
    canvas = document.getElementById("canvas");
    g = canvas.getContext("2d");
    // 描画する●の初期設定
    x = 100; y = 50; r = 30;
    vx = 5; vy = 3;
    // アニメーション開始
    drawAnim();
});



});