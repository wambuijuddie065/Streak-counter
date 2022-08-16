const taskInput = document.querySelector("#taskInput");
const imageInput = document.querySelector("#imageInput");
const dateInput = document.querySelector("#dateInput");
const addTaskBtn = document.querySelector("#addTaskBtn");
const plusIcon = document.querySelector("#plusIcon");
const closeIcon = document.querySelector("#closeIcon");
const form = document.querySelector("#form");
const phoneDisplay = document.querySelector(".phoneDisplay");
const formDisplay = document.querySelector(".formDisplay");
let streaksList = document.querySelector("#streaksList");
const activityDesc = document.querySelector("#activityDesc");
const middle = document.querySelector("#middle");
const aStreak = document.querySelector(".aStreak");
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
class Streaks {
    constructor() {
        this.streaksArr = [];
        this.displayStreak();
    }
    getStreaks() {
        return this.streaksArr;
    }
    addStreak(newStreak) {
        this.streaksArr.push(newStreak);
        this.displayStreak();
    }
    deleteStreak(id) {
        this.streaksArr.splice(id, 1);
        this.displayStreak();
    }
    displayStreak() {
        if (this.streaksArr.length === 0) {
            activityDesc.textContent = "You Don't Have Any Activities!!!";
        }
        else {
            activityDesc.textContent = "Activities";
        }
        streaksList.innerHTML = '';
        this.streaksArr.map((streak, id) => {
            const aStreak = document.createElement('div');
            aStreak.classList.add('aStreak');
            const streakImage = document.createElement('h1');
            streakImage.classList.add('streakImage');
            const streakDate = document.createElement('p');
            streakDate.classList.add('streakDate');
            const streakText = document.createElement('p');
            streakText.classList.add('streakText');
            streakImage.innerHTML = `${streak.icon}`;
            streakDate.textContent = `${streak.date}`;
            streakText.textContent = `${streak.taskName}`;
            aStreak.appendChild(streakImage);
            aStreak.appendChild(streakDate);
            aStreak.appendChild(streakText);
            streaksList.appendChild(aStreak);
            aStreak.addEventListener('click', () => {
                this.displayModal(id);
            });
            aStreak.removeEventListener('click', () => { });
        });
    }
    displayModal(index) {
        var _a, _b, _c;
        console.log(index);
        const onePop = this.streaksArr[index];
        let todaysDate = new Date();
        let date = new Date(onePop.date);
        let strkStart = todaysDate.getTime();
        let beststreak = date.getTime();
        let diff = Math.ceil((beststreak - strkStart) / (24 * 3600 * 1000));
        middle.innerHTML = '';
        let modal = `
        <div class="popUp">
        <div class="icon">${onePop.icon}</div>
        <div class="date">${onePop.date}</div>
        <div class="desc">${onePop.taskName}</div>
       
        
        <div class="days">${diff} days</div>
        <div class="actions">
          <div class="btn1">
            <button type="button" id="closeBtn"> Close</button>
          </div>
          <div class="btn2">
            <button type="button" id="deleteBtn"> Delete</button>
          </div>
        </div>
      </div>
        `;
        middle.innerHTML = modal;
        const closeBtn = document.querySelector("#closeBtn");
        const parent = (_c = (_b = (_a = closeBtn.parentElement) === null || _a === void 0 ? void 0 : _a.parentElement) === null || _b === void 0 ? void 0 : _b.parentElement) === null || _c === void 0 ? void 0 : _c.parentElement;
        closeBtn.addEventListener('click', () => {
            middle.innerHTML = '';
        });
        const deleteBtn = document.querySelector("#deleteBtn");
        deleteBtn.addEventListener('click', () => {
            this.deleteStreak(index);
            middle.innerHTML = '';
        });
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
    if (streakItem.date === '' || streakItem.taskName === '' || streakItem.icon === '') {
        const topH = document.querySelector(".topH");
        topH.style.display = 'block';
        setTimeout(() => {
            topH.style.display = "none";
        }, 5000);
    }
    else {
        streak.addStreak(streakItem);
        form.reset();
    }
});
export {};
