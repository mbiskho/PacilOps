import http from 'k6/http';

export default function () {
  for(let i = 0; i < 10; i ++){
    http.get('https://34.130.0.122/');
  }
}