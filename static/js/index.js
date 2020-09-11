//https://www.eclipse.org/paho/clients/js/

function enviar() {
		var msg=document.getElementById("datos").value;
        message = new Paho.MQTT.Message(msg);
        message.destinationName = "nelsonbenjamin05@gmail.com/ts";
        client.send(message);
		document.getElementById("tu").innerHTML=msg;
}


// Create a client instance
  //client = new Paho.MQTT.Client("postman.cloudmqtt.com", 14970);
  
  client = new Paho.MQTT.Client("maqiatto.com", 8883, "web_" + parseInt(Math.random() * 100, 10));

  // set callback handlers
  client.onConnectionLost = onConnectionLost;
  client.onMessageArrived = onMessageArrived;
  var options = {
   useSSL: false,
    userName: "nelsonbenjamin05@gmail.com",
    password: "123456789",
    onSuccess:onConnect,
    onFailure:doFail
  }

  // connect the client
  client.connect(options);
   
  // called when the client connects
  function onConnect() {
    // Once a connection has been made, make a subscription and send a message.
    console.log("Conectado...");
	
    client.subscribe("nelsonbenjamin05@gmail.com/ts1");
    message = new Paho.MQTT.Message("hola desde la web");
    message.destinationName = "nelsonbenjamin05@gmail.com/ts";
    client.send(message);
	
  }

  function doFail(e){
    console.log(e);
	
  }

  // called when the client loses its connection
  function onConnectionLost(responseObject) {
    if (responseObject.errorCode !== 0) {
      console.log("onConnectionLost:"+responseObject.errorMessage);
    }
  }

  // called when a message arrives
  function onMessageArrived(message) {
    //console.log("onMessageArrived:"+message.payloadString);
	var msg=message.payloadString;
	document.getElementById("bot").innerHTML=msg;
  }
  
