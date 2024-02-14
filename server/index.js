const server = require('live-server');

const params = {
  host: 'localhost',
  port: 3000,
  open: false,
  root: './client',
};

server.start(params);

// 전역객체 예시로 사용 
// 노드에선 전역객체 === global -> 그러나 표준화하여 globalThis 권장
console.log(globalThis);