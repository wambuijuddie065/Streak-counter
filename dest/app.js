import { render } from "./render.js";
const taskInput = document.querySelector("#taskInput");
const imageInput = document.querySelector("#imageInput");
const dateInput = document.querySelector("#dateInput");
const addTaskBtn = document.querySelector("#addTaskBtn");
const plusIcon = document.querySelector("#plusIcon");
const closeIcon = document.querySelector("#closeIcon");
const form = document.querySelector("#form");
const phoneDisplay = document.querySelector(".phoneDisplay");
const formDisplay = document.querySelector(".formDisplay");
const streaksList = document.querySelector("#streaksList");
plusIcon.addEventListener("click", () => {
    myFunctionPlus();
});
closeIcon.addEventListener("click", () => {
    myFunctionClose();
});
function myFunctionPlus() {
    formDisplay.style.display = "block";
    phoneDisplay.style.display = "none";
}
function myFunctionClose() {
    phoneDisplay.style.display = "block";
    formDisplay.style.display = "none";
}
export class Streaks {
    constructor() {
        this.streaksArr = [];
    }
    getstreaksArr() {
        return this.streaksArr;
    }
    addStreak(streakItem) {
        this.streaksArr.push(streakItem);
    }
    getAllStreaks() {
        return this.streaksArr;
    }
    getStreakById(id) {
        return this.streaksArr.find((streak) => streak.id === id);
    }
}
const streak = new Streaks();
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let streakItem = {
        id: Math.ceil(Math.random() * 100),
        taskName: taskInput.value,
        date: dateInput.value,
        icon: imageInput.value,
    };
    streak.addStreak(streakItem);
    form.reset();
    streaksList.innerHTML = render(streak.getstreaksArr());
});
