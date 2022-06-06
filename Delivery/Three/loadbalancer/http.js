import http from 'k6/http';

export default function () {
  /**
  * Make Http connection up to 200 User
  */
  for(let i = 0; i < 200; i ++){
    http.get('https://34.77.136.114/');
  }
  
}