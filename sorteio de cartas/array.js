
var nipes = ['♥','♦','♣','♠'];
var faces = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];

var nipe = nipes[Math.floor(Math.random() * nipes.length)];
var face = faces[Math.floor(Math.random() * faces.length)];
//  document.write(faces[0] + nipes[1]);
if (nipe == '♥' || nipe == '♦'){
window.document.body.style.color = "red"}
document.write(face + nipe)