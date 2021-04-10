var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

const request = 'prequest';
let users = require('./users.json');

async function save()
{
require('fs').writeFileSync('./users.json', JSON.stringify(users, null, '\t'));
return true;
}

app.use(express.static(__dirname + '/Recourses'));
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/Recourses/index.html');
});

io.on("connection", function(socket) {
    setTop();
   setInterval( setTop, 10000);
    function setTop() {
        var usersTop = users.sort(function(a,b) {
return  b.balance - a.balance;
        });

        var thistop = [usersTop[0],usersTop[1], usersTop[2], usersTop[3], usersTop[4], usersTop[5]];

            socket.emit("newTop", thistop)
    }
   

    socket.on("saveDB", function(data) {
        if(users.find(x=>x.id===data.id)) {
        var user = users.find(x=>x.id===data.id);

    user.balance = data.balance;
user.balance_speed = data.balance_speed;
user.balance_click = data.balance_click;
user.server_max = data.server_max;
user.server_lvl = data.server_lvl;
user.server_zanato =  data.server_zanato;
user.video_cards_1 = data.video_cards_1;
user.pross_1 = data.pross_1;

        save();
        }
    });

    socket.on("GetUser", function(data) {
if(users.find(x=>x.id===data)) {
var user = users.find(x=>x.id===data);
socket.emit("OnUser", user);
} else {
    users.push({
        "id":data,
        "name":"No Name",
        "photo":"",
        "balance":0,
         "balance_speed":0,
         "balance_click":0.01,
       
         "server_max":10,
        "server_zanato":0,
       "server_lvl":1,
        "video_cards_1":0,
        "pross_1":0
    });
    save();
    var user = users.find(x=>x.id===data);
socket.emit("OnUser", user);
}
    })
})

server.listen(3000);