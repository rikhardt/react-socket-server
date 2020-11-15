// Servidor express
const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const path = require('path');
const Sockets = require('./sockets');

class Server {

    constructor() {

        this.app = express();
        this.port = process.env.PORT;

        // Http server
        this.Server = http.createServer(this.app);   

        // Configuraciones de sockets
        this.io = socketio(this.Server, {/*configuraciones*/});

    }

    middlewares() {
        // Desplegar el directoio publico
        this.app.use(express.static(path.resolve(__dirname, '../public')));

    }

    configurarSockets() {
        new Sockets(this.io);
    }

    execute() {

        // Inicializar Middlewares
        this.middlewares();

        // Inicializar Sockets
        this.configurarSockets();

        // Inicializar Server
        this.Server.listen(this.port, () => {
            console.log('Server corriendo en puerto :', this.port);
        });
    }
}

module.exports = Server;