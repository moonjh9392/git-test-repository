const fs = require("fs");
// const [A,...B] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [A, ...B] = ["5 3", "1", "4", "6"];
let arr = B.map((v) => Number(v)).sort();
const [n, c] = A.split(" ").map((v) => Number(v));

let start = arr[1] - arr[0];
let end = arr[arr.length - 1] - arr[0];
let result = 0;

while (start <= end) {
  //같을때 멈춤
  let value = arr[0]; //초기 설치 위치
  let count = 1; //arr[0]에 시작할때 설치하기 때문에 count = 1
  let mid = Math.floor((start + end) / 2); //중간값 소숫점 내림

  for (let i in arr) {
    if (arr[i] >= value + mid) {
      //설치가능한 위치일 경우
      value = arr[i];
      count++;
    }
  }
  if (count >= c) {
    //c개 이상의 공유기를 설치할 수 있는 경우
    start = mid + 1;
    result = mid;
  } else {
    //c개 이상의 공유기를 설치할 수 없는 경우
    end = mid - 1;
  }
}

console.log(result);
