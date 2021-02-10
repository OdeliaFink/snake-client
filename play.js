const net = require('net');

const connect = function() {
  const conn = net.createConnection({
    host: '174.89.248.118',
    port: 50541
  });

  conn.setEncoding('utf8');

  conn.on('data', function(data) {
    console.log("you ded cuz you idled")
  })

  return conn;
}

console.log('Connecting...');
connect();