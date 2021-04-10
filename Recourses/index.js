 var socket = io.connect();

 var canclick = "true";


var userid = 1;

var user = {};

socket.emit("GetUser", userid);

socket.on("OnUser", function(data) {
user=data;
  start();
});


 let mines = [0.01, 0.02, 0.03, 0.04, 0.05,0.1,0.2,0.3,0.4,0.5];
 let prosIvideo_prices = [1 , 2 , 3 , 4 , 5 , 8  , 11 , 14 , 17 , 20 , 27 , 34 , 41 , 48 , 55 , 60 , 75 , 90 , 115 , 130 , 165 , 200 , 235 , 270 , 305 , 400 , 500 , 600 , 700 , 800 , 900 , 1000 , 1250, 1500 , 1750 , 2000 , 2250 , 2750 , 3250 , 4000 , 4750 , 5500 , 6250 ,7000 , 7750 , 8500 , 9250, 10000 , 15000, 20000 ];

 var server_lvl = 1;
 var server_up_prices = [20,50,150,500,1750,5000,17500,50000,100000];


function serverSet() {
var serverI = document.getElementById('server_zanato');
serverI.innerText = user.video_cards_1 + user.pross_1 + '/' + user.server_max;
}

 function prow(){
 if(user.balance>=1000) {
   if(user.balance>=1000000) {
     if(user.balance>=1000000000) {
var balanceI = document.getElementById('balance');
balanceI.innerText = Math.round((user.balance/1000000000)*100)/100 + 'B R'
} else {
 var balanceI = document.getElementById('balance');
balanceI.innerText = Math.round((user.balance/1000000)*100)/100 + 'M R'
}
   }
else {
var balanceI = document.getElementById('balance');
balanceI.innerText =Math.round((user.balance/1000)*100)/100 + 'K R'
}
 }
 else {
 var balanceI = document.getElementById('balance');
 balanceI.innerText = user.balance + ' R'
 }}

 function click(){
 if(user.balance_click>=1000) {
   if(user.balance_click>=1000000) {
     if(user.balance_click>=1000000000) {
var clickI = document.getElementById('click');
clickI.innerText = Math.round((user.balance_click/1000000000)*100)/100 + 'B/клик'
} else {
 var clickI = document.getElementById('click');
clickI.innerText = Math.round((user.balance_click/1000000)*100)/100 + 'M/клик'
}
   }
else {
var clickI = document.getElementById('click');
clickI.innerText =Math.round((user.balance_click/1000)*100)/100 + 'K/клик'
}
 }
 else {
 var clickI = document.getElementById('click');
 clickI.innerText = Math.round(user.balance_click*100)/100 + '/клик'
 }}

 function pros_i_video() {
   var prosI = document.getElementById('pros_1');
   var videoI = document.getElementById('video_card_1');
   prosI.innerText = user.pross_1 + ' шт';
   videoI.innerText = user.video_cards_1 + ' шт';
 }

 function speed() {
   if(user.balance_speed>=1000) {
   if(user.balance_speed>=1000000) {
     if(user.balance_speed>=1000000000) {
       var speedI = document.getElementById('mining');
speedI.innerText = Math.round((user.balance_speed/1000000000)*100)/100 + 'B/сек'
} else {
 var speedI = document.getElementById('mining');
 speedI.innerText = Math.round((user.balance_speed/1000000)*100)/100 + 'M/сек'
}
   }
else {
 var speedI = document.getElementById('mining');
 speedI.innerText =Math.round((user.balance_speed/1000)*100)/100 + 'K/сек'
}
 }
 else {
   var speedI = document.getElementById('mining');
   speedI.innerText = (user.balance_speed*100)/100 + '/сек'
 }}

 function start() {
 prow();
 speed();
 click();
 serverSet();
 pros_i_video();
 }




 setInterval(mainingC,1000);
 function mainingC() {
  user.balance = Math.round((user.balance+user.balance_speed)*100)/100;
 prow();
 server_prow();
 
 }




 //меню
var coin = document.getElementById('coin');
var server= document.getElementById('server');
var ect = document.getElementById('ect');

var topp = document.getElementById('top_panel');

topp.onclick = function() {
document.getElementById("top_all_panel").style.display = 'block';
document.getElementById("top_panel").style.display = 'none';
document.getElementById('click_panel').style.display= 'none';
}

coin.onclick = function() {
document.getElementById('coin').style.color= 'black';
document.getElementById('server').style.color= 'grey';
document.getElementById('ect').style.color= 'grey';

document.getElementById('click_panel').style.display= 'block';
document.getElementById('top_panel').style.display= 'block';
document.getElementById('top_all_panel').style.display= 'none';

document.getElementById('server_panel').style.display= 'none';

document.getElementById('video_card_panel').style.display= 'none';
document.getElementById('pros_panel').style.display= 'none';
}

ect.onclick = function() {
document.getElementById('coin').style.color= 'grey';
document.getElementById('server').style.color= 'grey';
document.getElementById('ect').style.color= 'black';

document.getElementById('click_panel').style.display= 'none';
document.getElementById('top_panel').style.display= 'none';
document.getElementById('top_all_panel').style.display= 'none';

document.getElementById('server_panel').style.display= 'none';

document.getElementById('video_card_panel').style.display= 'none';
document.getElementById('pros_panel').style.display= 'none';
}

server.onclick = function() {
document.getElementById('coin').style.color= 'grey';
document.getElementById('server').style.color= 'black';
document.getElementById('ect').style.color= 'grey';

document.getElementById('click_panel').style.display= 'none';
document.getElementById('top_panel').style.display= 'none';
document.getElementById('top_all_panel').style.display= 'none';

document.getElementById('server_panel').style.display= 'block';

document.getElementById('video_card_panel').style.display= 'block';
document.getElementById('pros_panel').style.display= 'block';

server_prow();
}

function server_prow() {
var pros_price = prosIvideo_prices[user.pross_1];
if ( user.balance >= pros_price&user.video_cards_1+user.pross_1 < user.server_max&user.pross_1 < user.server_max/2) {
document.getElementById('pros_buy').style.opacity = 1;
} else {
 document.getElementById('pros_buy').style.opacity = 0.5;
}

var video_price = prosIvideo_prices[user.video_cards_1];
if ( user.balance >= video_price&user.video_cards_1+user.pross_1 < user.server_max&user.video_cards_1 < user.server_max/2) {
document.getElementById('video_buy').style.opacity = 1;
} else {
 document.getElementById('video_buy').style.opacity = 0.5;
}

var server_price = server_up_prices[user.server_lvl-1];
if (user.server_lvl <= 9&&user.balance>=server_price) {
 document.getElementById('server_up').style.opacity = 1;
} else {
 if (server_lvl == 10) {
   document.getElementById('server_up_name').innerText = 'MAX';
   document.getElementById('server_up_name').style.left = 0+'px';
   document.getElementById('server_up_name').style.top = -22+'px';
 }
 document.getElementById('server_up').style.opacity = 0.4;
}

 prow();
 speed();
 click();
 serverSet();
 pros_i_video();
}

//клик

document.getElementById('click_panel').onclick = function() {
  if(canclick=='true') {
    canclick='false';
    setTimeout(() => {
      canclick='true';
    }, 100);
  user.balance = Math.round((user.balance+user.balance_click)*100)/100;
prow();
server_prow();

  }
}

//сервер up
document.getElementById('server_up').onclick = function() {
var server_price = server_up_prices[user.server_lvl-1];
if (user.server_lvl <= 9&&user.balance>=server_price) {
  user.balance = Math.round((user.balance-server_price)*100)/100;
  user.server_lvl += 1;
  user.server_max += 10;
 server_prow();
}
}



//покупка видях
var videoBuy = document.getElementById('video_buy');

videoBuy.onclick = function() {
var remine = Math.floor(user.video_cards_1/5);
let mine = mines[remine];
var video_price = prosIvideo_prices[user.video_cards_1];
if (user.balance >= video_price&user.video_cards_1+user.pross_1 < user.server_max&user.video_cards_1 < user.server_max/2) {
  user.video_cards_1 += 1;
  user.balance_speed = Math.round((user.balance_speed+mine)*100)/100;
speed();
user.balance = Math.round((user.balance-video_price)*100)/100;
pros_i_video();
serverSet()
server_prow();
}
}




//покупка проц
var prosBuy = document.getElementById('pros_buy');

prosBuy.onclick = function() {
var remine = Math.floor(user.pross_1/5);
let mine = mines[remine];
var pros_price = prosIvideo_prices[user.pross_1];
if (user.balance >= pros_price&user.video_cards_1+user.pross_1 < user.server_max&user.pross_1 < user.server_max/2) {
  user.pross_1 += 1;
  user.balance_click = Math.round((user.balance_click+mine)*100)/100;
click();
user.balance = Math.round((user.balance-pros_price)*100)/100;
pros_i_video();
serverSet();
server_prow();
}
}


setInterval(function() {
  socket.emit("saveDB", user);
},5000);



socket.on("newTop", function(data) {
 document.getElementById("top_1_name").innerText = data[0].name;
 document.getElementById("top_1_photo").src = data[0].photo;
 document.getElementById("top_1_bal").innerText = data[0].balance + " Rush";

 document.getElementById("top_2_name").innerText = data[1].name;
 document.getElementById("top_2_photo").src = data[1].photo;
 document.getElementById("top_2_bal").innerText = data[1].balance + " Rush";

 document.getElementById("top_3_name").innerText = data[2].name;
 document.getElementById("top_3_photo").src = data[2].photo;
 document.getElementById("top_3_bal").innerText = data[2].balance + " Rush";

 document.getElementById("top_4_name").innerText = data[3].name;
 document.getElementById("top_4_photo").src = data[3].photo;
 document.getElementById("top_4_bal").innerText = data[3].balance + " Rush";

 document.getElementById("top_5_name").innerText = data[4].name;
 document.getElementById("top_5_photo").src = data[4].photo;
 document.getElementById("top_5_bal").innerText = data[4].balance + " Rush";

 document.getElementById("top_6_name").innerText = data[5].name;
 document.getElementById("top_6_photo").src = data[5].photo;
 document.getElementById("top_6_bal").innerText = data[5].balance + " Rush";
})