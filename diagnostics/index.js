import diagnostics from 'node:diagnostics_channel'

const channel = diagnostics.channel('mi_app');

function onMessage(message){
  console.log("Mensaje reibido : ", message);
}

diagnostics.subscribe('mi_app', onMessage)

if(channel.hasSubscribers){
  channel.publish('mi_app', 'hola')
}

diagnostics.unsubscribe('mi_app', onMessage)