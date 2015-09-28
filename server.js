var Bleacon       = require('bleacon');
var mqtt          = require('mqtt');
var underscore    = require('underscore'); 
var client        = mqtt.connect('mqtt://192.168.0.113');

var throttled_publish = _.throttle(function(uuid){
  client.publish('btle', uuid); 
}, 12000); 

Bleacon.on('discover', function(bleacon){
  console.log("monkey");
  console.log(bleacon.uuid);
  throttled_publish(bleacon.uuid)
});

Bleacon.startScanning("3ddd37e386d1487e9f4aba1dbf64d274");

console.log("sanning");