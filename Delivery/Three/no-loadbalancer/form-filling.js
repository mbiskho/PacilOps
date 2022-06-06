import { check, sleep } from 'k6';
import http from 'k6/http';
export let options = {
    scenarios: {
        vus_10: {
            executor: "constant-vus",
            vus: 10,
            duration: "30s",
            startTime: "1s",
            gracefulStop: "10s",
        },
        vus_25: {
            executor: "constant-vus",
            vus: 25,
            duration: "30s",
            startTime: "40s",
            gracefulStop: "10s",
        },
        vus_50: {
            executor: "constant-vus",
            vus: 50,
            duration: "30s",
            startTime: "1m20s",
            gracefulStop: "10s",
        }
    }
};
export default function () {
    const query = "Hello+world";
    const result = http.get(`https://34.77.136.114/?s=${query}`);
    check(result, { "status was 200": (r) => r.status == 200 });
    sleep(1);
}
