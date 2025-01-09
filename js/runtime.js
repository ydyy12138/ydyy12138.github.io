const now = new Date();
const startDate = new Date("08/08/2023 00:00:00");
const earthStartDate = new Date("08/08/2023 00:00:00");
const workBoard = document.getElementById("workboard");

function formatTime(num) {
  return num < 10 ? `0${num}` : num;
}

function getTimeElapsed() {
  const timeDiff = now.getTime() - earthStartDate.getTime();
  const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
  return { days, hours, minutes, seconds };
}

function getVoyagerDistance() {
  const timeDiff = now.getTime() - startDate.getTime();
  const distanceInKm = Math.trunc(234e8 + (timeDiff / 1000) * 17);
  const distanceInAU = (distanceInKm / 149600000).toFixed(6);
  return { distanceInKm, distanceInAU };
}

function updateDisplay() {
  now.setTime(now.getTime() + 1000); // Increment time by one second

  const { days, hours, minutes, seconds } = getTimeElapsed();
  const { distanceInKm, distanceInAU } = getVoyagerDistance();

  const isWorkingHours = hours >= 9 && hours < 18;
  const badgeTitle = isWorkingHours
    ? "什么时候能够实现财富自由呀~"
    : "下班了就该开开心心地玩耍~";

  const timeStr = `${days} 天 ${formatTime(hours)} 小时 ${formatTime(minutes)} 分 ${formatTime(seconds)} 秒`;
  const distanceStr = `旅行者 1 号当前距离地球 ${distanceInKm} 千米，约为 ${distanceInAU} 个天文单位 🚀`;

  const content = `
    <div style="font-size:13px;font-weight:bold">
      ${badgeTitle} <br>
      本站居然运行了 ${timeStr} <i id="heartbeat" class='fas fa-heartbeat'></i> 
      <br>
      ${distanceStr}
    </div>
  `;

  if (workBoard) {
    workBoard.innerHTML = content;
  }
}

setInterval(updateDisplay, 1000);
