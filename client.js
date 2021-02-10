const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: '174.89.248.118',
    port: 50542
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  conn.on('connect', () => {
    console.log('Successfully connected to fame server');
    conn.write('Name: OCF');
  });

  return conn;
}


console.log('Connecting ...');
var establishConn = connect();

establishConn.on('data', function(data) {
console.log(data)
})

module.exports = {connect};