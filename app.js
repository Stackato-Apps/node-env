var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('<title>Cloudfoundry environment variables</title>');
  res.write('<h1>Cloudfoundry environment variables</h1>');
  for (var env in process.env){
      res.write('<li><b>' + env + '</b>: ');
      res.write('<tt>' + process.env[env] + '</tt></li>');
  }
  res.end();
}).listen(process.env.VCAP_APP_PORT || 1337,
          process.env.VCAP_APP_HOST || "127.0.0.1");
console.log('Server running');