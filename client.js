const net = require('net');
const { IP, PORT } = require('./constants');

const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log(`Successfully connected to game server`);
  });

  conn.on('connect', () => {
    conn.write('Name: Tom');
  });

  // conn.on('connect', () => {
  //   setInterval(() => {
  //     conn.write('Move: up');
  //   }, 500);

  // setTimeout(() => {
  //   conn.write("Move: up");

  // }, 100);
  // setTimeout(() => {
  //   conn.write("Move: left");

  // }, 300);
  // setTimeout(() => {
  //   conn.write('Move: down');

  // }, 500);
  // setTimeout(() => {
  //   conn.write('Move: down');

  // }, 700);
  // });
  return conn;
}

module.exports = { connect };