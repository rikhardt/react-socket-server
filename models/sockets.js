
class Sockets {

    constructor(io) {

        this.io = io;
        this.socketEvents();
    }

    socketEvents() {
        // On connection
        this.io.on('connection', (socket) => { 

            // Escuchar el evento - cambiamos socket por io - envia mensaje global a todas las personas conectadas a este namespace
            socket.on('mensaje-to-server', (data) => {
                console.log(data);
                this.io.emit('mensaje-from-server', data);
            });


        
         });
        
    }

}

module.exports = Sockets;