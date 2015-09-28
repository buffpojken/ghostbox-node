var Bleacon = require('bleacon');
var mqtt    = require('mqtt');
var client  = mqtt.connect('mqtt://192.168.0.113');

Bleacon.on('discover', function(bleacon){
	console.log(bleacon.uuid);
});

Bleacon.startScanning("3DDD37E3-86D1-487E-9F4A-BA1DBF64D274", true); 