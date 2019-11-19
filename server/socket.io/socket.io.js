const io = require('socket.io')();

var online_users = 0;
io.on('connection',(client)=>{
    console.log('Made socket connection',client.id)
    client.on('user_connected',(data)=>{
        online_users++;
        console.log(`user ${data} connected, current online users: ${online_users}`);
    })

    client.on('logout',(data)=>{
        online_users--;
        console.log(`user ${data} disconnected, current online users: ${online_users}`)
    })

    client.on('component_unmounted',(data)=>{
        online_users--;
        console.log(`user ${data} disconnected, current online users: ${online_users}`)
    })

    client.on('send_message',(data)=>{
        io.sockets.emit('receive_message',data)
    })

    client.on('disconnect',()=>{
        console.log('socket disconnected')
    })
});
module.exports=io;