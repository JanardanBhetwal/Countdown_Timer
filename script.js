const end_date = "8 December 2024 7:52 PM";

document.querySelector("#date").innerHTML = end_date;
// document.querySelectorAll("input").value = 1;
function clock() {
  const end = new Date(end_date);
  const now = new Date();
  //   console.log(end);
  //   console.log(now);
  const diff = (end - now) / 1000;
  if (diff < 0) {
    return;
  }
  //   console.log(diff);
  const day = Math.trunc(diff / 86400);
  const hour = Math.trunc((diff - day * 86400) / 3600);
  const min = Math.trunc((diff - day * 86400 - hour * 3600) / 60);
  const sec = Math.trunc(diff - day * 86400 - hour * 3600 - min * 60);
  //   console.log(day);
  document.querySelector("#day").value = day;
  //   console.log(hour);
  document.querySelector("#hour").value = hour;
  //   console.log(min);
  document.querySelector("#minute").value = min;
  //   console.log(sec);
  document.querySelector("#second").value = sec;
}

// while (true) {
//   clock();
// }
// clock();

setInterval(() => {
  clock();
}, 1000);
