// backend/socket.js
let io = null;

const socketHandler = (serverIO) => {
  io = serverIO;

  io.on('connection', (socket) => {
    console.log(`⚡️ New client connected: ${socket.id}`);

    // Join room for project-based collaboration
    socket.on('joinProject', (projectId) => {
      socket.join(projectId);
      console.log(`User joined project room: ${projectId}`);
    });

    // Task events
    socket.on('taskCreated', (data) => {
      io.to(data.projectId).emit('taskCreated', data);
    });

    socket.on('taskUpdated', (data) => {
      io.to(data.projectId).emit('taskUpdated', data);
    });

    socket.on('taskDeleted', (data) => {
      io.to(data.projectId).emit('taskDeleted', data);
    });

    // Notifications
    socket.on('sendNotification', (notification) => {
      io.emit('receiveNotification', notification);
    });

    socket.on('disconnect', () => {
      console.log(`❌ Client disconnected: ${socket.id}`);
    });
  });
};

export default socketHandler;
