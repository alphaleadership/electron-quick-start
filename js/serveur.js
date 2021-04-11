/*serveur*/
var net = require('net')
var sockets = [];
var serveur = net.createServer(function(socket){
    sockets.push(socket)
    console.log(`il y a ${sockets.length} clients connectés`)
    
    socket.on("data",function(chunk){
        if(chunk.toString().replace(/\r|\n/g,"")=="exit") socket.end()
        else {
            sockets.forEach(function(s){if(s!=socket)s.write(chunk)})
        }
    })
    socket.on("error",function(){socket.emit("end")})
    socket.on("end",function(){sockets.splice(sockets.indexOf(socket),1)
    console.log(`il reste ${sockets.length} clients connectés`)})
        }
    )
serveur.on("listening",function(){console.log("serveur lancée pret a la communication")})
serveur.listen(9999)