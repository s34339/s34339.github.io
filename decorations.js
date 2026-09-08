/* decorations.js
   ตกแต่งพื้นหลัง (กากเพชร, ฟองสบู่, คลื่น, ดาว, อิโมจิลอยตก ฯลฯ)
   ใช้ไฟล์เดียวร่วมกันทุกหน้า เพื่อไม่ต้องคัดลอก HTML ซ้ำในทุกไฟล์
*/
(function () {
  const decorHTML = `
<div class="garden-sun"></div>
<div class="garden-grass"></div>

<div class="glitter g1" style="left:5%;top:18%"></div>
<div class="glitter g2" style="left:18%;top:25%;animation-delay:.8s"></div>
<div class="glitter g3" style="left:39%;top:82%;animation-delay:1.7s"></div>
<div class="glitter g4" style="left:59%;top:30%;animation-delay:.2s"></div>
<div class="glitter g5" style="left:79%;top:48%;animation-delay:1.3s"></div>
<div class="glitter g6" style="left:92%;top:65%;animation-delay:1.6s"></div>
<div class="glitter g7" style="left:15%;top:88%;animation-delay:2s"></div>
<div class="glitter g8" style="left:66%;top:75%;animation-delay:1.8s"></div>

<div class="diamond d1"></div>
<div class="diamond small d2"></div>
<div class="diamond d3"></div>
<div class="diamond big d4"></div>
<div class="diamond small d5"></div>
<div class="diamond d6"></div>

<div class="bubble b1"></div>
<div class="bubble b2"></div>
<div class="bubble b3"></div>
<div class="bubble b4"></div>
<div class="bubble b5"></div>
<div class="bubble b6"></div>

<div class="wave"></div>
<div class="wave two"></div>
<div class="wave three"></div>

<div class="shimmer-overlay"></div>

<span class="emoji-fall sway-b" style="left:67%;font-size:28px;animation-delay:.8s;animation-duration:8.3s">💗</span>
<span class="emoji-fall sway-c" style="left:19%;font-size:24px;animation-delay:2s;animation-duration:7s">🍓</span>
<span class="emoji-fall" style="left:15%;font-size:24px;animation-delay:3s;animation-duration:11s">🍃</span>
<span class="emoji-fall sway-c" style="left:75%;font-size:32px;animation-delay:1s;animation-duration:7.2s">🍃</span>
<span class="emoji-fall sway-c" style="left:49%;font-size:20px;animation-delay:2.5s;animation-duration:12.6s">🦋</span>
<span class="emoji-fall" style="left:72%;font-size:20px;animation-delay:1s;animation-duration:12.5s">🌸</span>
<span class="emoji-fall" style="left:54%;font-size:28px;animation-delay:3.2s;animation-duration:7.9s">🍓</span>
<span class="emoji-fall sway-b" style="left:84%;font-size:24px;animation-delay:.6s;animation-duration:8.2s">🌸</span>
<span class="emoji-fall" style="left:55%;font-size:32px;animation-delay:1.6s;animation-duration:12.5s">✨</span>
<span class="emoji-fall sway-b" style="left:36%;font-size:32px;animation-delay:4s;animation-duration:8.9s">🍃</span>
<span class="emoji-fall" style="left:11%;font-size:20px;animation-delay:2.4s;animation-duration:8s">🌷</span>
<span class="emoji-fall sway-b" style="left:89%;font-size:24px;animation-delay:2.7s;animation-duration:10.5s">⭐</span>

<span class="floaty-sticker" style="left:89%;top:40%;font-size:26px;animation-delay:.3s">🌻</span>
<span class="floaty-sticker" style="left:56%;top:86%;font-size:32px;animation-delay:.2s">🌻</span>
<span class="floaty-sticker" style="left:24%;top:54%;font-size:26px;animation-delay:3.3s">🌸</span>
<span class="floaty-sticker" style="left:6%;top:81%;font-size:38px;animation-delay:1.7s">🦋</span>
<span class="floaty-sticker" style="left:65%;top:43%;font-size:38px;animation-delay:1.9s">🌷</span>
<span class="floaty-sticker" style="left:73%;top:16%;font-size:32px;animation-delay:1.6s">🦋</span>
<span class="floaty-sticker" style="left:42%;top:12%;font-size:28px;animation-delay:.9s">🌼</span>
<span class="floaty-sticker" style="left:18%;top:25%;font-size:24px;animation-delay:2.1s">🌈</span>

<span class="star-sparkle" style="left:73%;top:54%;font-size:16px;animation-delay:2.3s">✦</span>
<span class="star-sparkle" style="left:58%;top:49%;font-size:24px;animation-delay:.3s">✦</span>
<span class="star-sparkle" style="left:25%;top:56%;font-size:28px;animation-delay:.2s">✦</span>
<span class="star-sparkle" style="left:78%;top:94%;font-size:20px;animation-delay:1.6s">✦</span>
<span class="star-sparkle" style="left:9%;top:6%;font-size:20px;animation-delay:1.7s">✦</span>
<span class="star-sparkle" style="left:86%;top:83%;font-size:20px;animation-delay:.2s">✦</span>

`;
  document.body.insertAdjacentHTML('afterbegin', decorHTML);
})();
