const batteryLiquid = document.querySelector(".batteryLiquid");
const batteryStatus = document.querySelector(".Status");
const Bpercentage = document.querySelector(".percent");
window.onload = () => {
    if (!navigator.getBattery) {
      alert("Battery Status Api  Is Not Supported ");
      return false;
    }
  };
    navigator.getBattery().then((battery) => {
        updateBattery = () => {
            let level = Math.floor(battery.level * 100); //battery level is given as (current batery 44%->(0.44))
            Bpercentage.innerHTML = level + "%";  //to update current battery percentage
            batteryLiquid.style.height = `${parseInt(level)}%`;//to update the battery liquid level
            if (level == 100) {
                batteryStatus.innerHTML = `Battery is Full <i class="ri-battery-2-fill green-color"></i>`;
                batteryLiquid.style.height = "103%";  //to hide ellipse when it is full
            } else if (level <= 20 & !battery.charging) {
                batteryStatus.innerHTML = `Low Charge-- Plug-In <i class="ri-plug-line animated-red animated-red"></i>`;
            } else if (battery.charging) {
                batteryStatus.innerHTML = `Charging(plugged in) <i class="ri-flashlight-line animated-green"></i>`;
            } else {
                batteryStatus.innerHTML = "";
            }
            //changing colors
            if (level <= 20) {
                batteryLiquid.classList.add("gradient-color-red");
                batteryLiquid.classList.remove("gradient-color-green", "gradient-color-orange", "gradient-color-yellow");
            } else if (level<50) {
                batteryLiquid.classList.add("gradient-color-orange");
                batteryLiquid.classList.remove("gradient-color-green", "gradient-color-red", "gradient-color-yellow");
            } else if (level <= 80) {
                batteryLiquid.classList.add("gradient-color-yellow");
                batteryLiquid.classList.remove("gradient-color-green", "gradient-color-orange", "gradient-color-red");
            } else {
                batteryLiquid.classList.add("gradient-color-green");
                batteryLiquid.classList.remove("gradient-color-red", "gradient-color-orange", "gradient-color-yellow");
            }
        }
        updateBattery()
        //When The status of charging changes
        battery.addEventListener("chargingchange", () => { updateBattery() });
        battery.addEventListener("levelchange", () => { updateBattery() });
    })
