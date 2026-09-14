import http from 'http';

http.get('http://localhost:5000/api/forms', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    console.log('GET /api/forms Status:', res.statusCode);
    console.log('GET /api/forms Body:', data);
  });
});
