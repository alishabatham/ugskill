import http from 'http';

const testData = JSON.stringify({
  role: 'student',
  fullName: 'Test User Alish',
  collegeName: 'UGSkill Test University',
  department: 'Computer Science & Engineering',
  email: 'alish.test@ugskill.com',
  phone: '+91 99999 88888',
  batchYear: '2022-2026',
  ugId: 'UG999888',
  formType: 'registration'
});

const req = http.request({
  hostname: 'localhost',
  port: 5000,
  path: '/api/forms',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(testData)
  }
}, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    console.log('Response status:', res.statusCode);
    console.log('Response body:', data);
  });
});

req.on('error', (err) => console.error('Req error:', err));
req.write(testData);
req.end();
