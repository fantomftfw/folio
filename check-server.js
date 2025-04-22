const http = require('http');

console.log('Checking if the development server is running...');

const options = {
  hostname: 'localhost',
  port: 3000,
  path: '/',
  method: 'GET',
  timeout: 5000
};

const req = http.request(options, (res) => {
  console.log(`Server response status code: ${res.statusCode}`);
  if (res.statusCode === 200) {
    console.log('Development server is running! You can now access your portfolio at:');
    console.log('http://localhost:3000');
  } else {
    console.log('Server responded but with a non-200 status code.');
  }
});

req.on('error', (e) => {
  console.error('Server connection error:', e.message);
  console.log('Make sure the development server is running with "npm run dev"');
});

req.on('timeout', () => {
  console.log('Request timed out. The server may be starting up or not running.');
  req.destroy();
});

req.end(); 