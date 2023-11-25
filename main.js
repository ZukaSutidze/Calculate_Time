const monacemi = document.querySelector(".B-day");
const error = document.querySelector(".Error");
const Button = document.querySelector("button");
const Days = document.querySelector(".Day");
const Hours = document.querySelector(".Hour");
const Mins = document.querySelector(".Min");
const Seconds = document.querySelector(".Second");
const validation =  /^(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;

function countdownTimer(targetDate) {
    const interval = setInterval(() => {
        const dro = targetDate.getTime() - new Date().getTime();

        if (dro < 0) {
            clearInterval(interval);
            return;
        }

        const Dgeebi = Math.floor(dro / (1000 * 60 * 60 * 24));
        const Saatebi = Math.floor((dro % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const Wutebi = Math.floor((dro % (1000 * 60 * 60)) / (1000 * 60));
        const Wamebi = Math.floor((dro % (1000 * 60)) / 1000);

        Days.textContent = Dgeebi;
        Hours.textContent = Saatebi;
        Mins.textContent = Wutebi;
        Seconds.textContent = Wamebi;
    }, 1000);
}

monacemi.addEventListener("focus", function () {
    monacemi.classList.toggle("Zuka");
});
monacemi.addEventListener("blur", function () {
    monacemi.classList.remove("Zuka");
});

Button.addEventListener("click", function () {
    error.innerHTML = " ";
    Button.classList.toggle("Zuka")
    setTimeout(() => {
        Button.classList.remove("Zuka")
    }, 250)
    if (!validation.test(monacemi.value)) {
        error.innerHTML = "Invalid Date , Just enter MM-DD";
    } else {
        const birthday = new Date();
        const currentMonth = birthday.getMonth();
        const currentDate = birthday.getDate();
        const nextYearDate = new Date(birthday.getFullYear() + 1, currentMonth, currentDate);
        const [month, day] = monacemi.value.split("-");
        const targetDate = new Date(nextYearDate.getFullYear(), parseInt(month) - 1, parseInt(day));
        countdownTimer(targetDate);
    }


});