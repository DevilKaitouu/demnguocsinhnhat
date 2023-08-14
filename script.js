async function getVietnamTime() {
  const response = await fetch("https://api.timezonedb.com/v2.1/get-time-zone?key=7LXE0AXE51O6&format=json&by=zone&zone=Asia/Ho_Chi_Minh");
  const data = await response.json();
  const vietnamTime = new Date(data.formatted);
  return vietnamTime;
}

function calculateCountdown() {
  getVietnamTime().then((vietnamTime) => {
    const targetDate = new Date("2023-08-16T00:00:00");

    const timeDiff = targetDate - vietnamTime;

    if (timeDiff <= 0) {
      document.getElementById("countdown").innerHTML = "Đã đến ngày 16 tháng 8!";
      document.getElementById("closeButton").style.display = "block";
      document.getElementById("closeButton").addEventListener("click", function() {
        window.location.href = "https://devilkaitouu.github.io/sinhnhatebecuatui/"; // Thay đổi đường dẫn tới trang web mới
      });
    } else {
      const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));

      document.getElementById("countdown").innerHTML = `${days} ngày ${hours} giờ ${minutes} phút`;
    }
  });
}

calculateCountdown();

  
  