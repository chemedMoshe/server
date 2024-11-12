import { Socket } from "socket.io";
import { io } from "../app";

export const startConnection = (socket: Socket) => {
    console.log(`a user connected ${socket.id}`);
    socket.on('disconnect', () => {
        console.log('Bye bye user');
    })
    socket.on('newVote', () => {
        console.log('[new vote]' + socket.id + 'Has voted');
        io.emit('newDataHasAccord');
    })
}
