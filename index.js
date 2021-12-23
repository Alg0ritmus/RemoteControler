const robot = require("robotjs");
const express = require("express");
const app =express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

app.use(express.static('./view')); 

var PORT = 5500 || process.env.PORT

app.get("/home",(req,res)=>{
    res.sendFile('/view/index.html',{ root: './' })
})

io.on('connection', (client) => {
    client.on('muteAudio', () => { muteAudio(); console.log("audioMuted") });
    client.on('volumeUp', () => { volumeUp(); });
    client.on('volumeDown', () => { volumeDown(); });
    client.on('play', () => { play(); });
    client.on('stop', () => { stop(); });
    client.on('pause', () => { pause(); });
});


server.listen(PORT,()=>{console.log("server running")});

// Get mouse position.
//ar mouse = robot.getMousePos();
//var keyboard = robot.keyTap("audio_mute")

// Get pixel color in hex format.
//var hex = robot.getPixelColor(mouse.x, mouse.y);
//console.log("#" + hex + " at x:" + mouse.x + " y:" + mouse.y);

var muteAudio = () =>{
    robot.keyTap("audio_mute");
}

var volumeUp =()=>{
    robot.keyTap("audio_vol_up")
}

var volumeDown =()=>{
    robot.keyTap("audio_vol_down")
}


var play=()=>{
    robot.keyTap("audio_play")
}

var stop=()=>{
    robot.keyTap("audio_stop")
}

var pause=()=>{
    robot.keyTap("audio_pause")
}


