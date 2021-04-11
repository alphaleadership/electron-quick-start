var net = require("net")

var config = require("./config.json")
var hosts = config.host
var ports = config.port
var password =config.password

    function connect(hosts,ports,password) {
        var client = net.connect(ports,hosts)
        client.setEncoding("utf8");
        process.stdin.resume();
        process.stdin.pipe(client);
        client.pipe(process.stdout);
        client.write(password)
        client.on("error", function(){
            console.log("perte de co au serveur vérifié la configuration ")
            connect(hosts,ports)
        client.on("end",function(){
            process.stdin.pause()
        })
        })

    }

connect(hosts,ports,password)

