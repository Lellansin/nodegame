var io = require('../io');

function say(data) {
    var socket = this;
    var msg = data.msg;
    var name = socket.name;

    // content limit
    if (data.msg.length > 100) {
        // send for single one
        io.sockets.socket(socket.id).emit('error', { msg: 'content is to long'});
        return;
    }

    console.log('chat -> ' + name + ': ' + msg);

    io.sockets.emit('say', {
        name: name,
        msg: msg
    });
}

module.exports = {
    clientSay: say
}