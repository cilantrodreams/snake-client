const net = require('net');

const connect = function() {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541
  });

  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log(`Successfully connected to game server`);
  });

  conn.on('connect', () => {
    conn.write('Name: Tom');
  });

  // conn.on("connect", (name) => {
  //   console.log(`Name: ${name}`);
  // });

  return conn;
}

module.exports = { connect };