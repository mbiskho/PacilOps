import http from 'k6/http';
import { check } from 'k6';
import { FormData } from 'https://jslib.k6.io/formdata/0.0.2/index.js';

const img1 = open('./one.png', 'b');
const img2 = open('./two.png', 'b');
const txt = open('./text.txt');

export default function () {
  const fd = new FormData();

  /**
   * Input files to form data
   */
  fd.append('someTextField', 'someValue');
  fd.append('anotherTextField', 'anotherValue');
  fd.append('images', http.file(img1, 'image1.png', 'image/png'));
  fd.append('images', http.file(img2, 'image2.jpg', 'image/jpeg'));
  fd.append('text', http.file(txt, 'text.txt', 'text/plain'));

  /**
   * Post the request
   */
  const res = http.post('https://34.77.136.114', fd.body(), {
    headers: { 'Content-Type': 'multipart/form-data; boundary=' + fd.boundary },
  });
  check(res, {
    'is status 200': (r) => r.status === 200,
  });
}
