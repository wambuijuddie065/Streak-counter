import { streakInterface } from "./interfaces/streakInterface.js";
import {render} from "./render.js";


const taskInput = document.querySelector("#taskInput") as HTMLInputElement;
const imageInput = document.querySelector("#imageInput") as HTMLInputElement;
const dateInput = document.querySelector("#dateInput") as HTMLInputElement;
const addTaskBtn = document.querySelector("#addTaskBtn") as HTMLButtonElement;
const plusIcon = document.querySelector("#plusIcon") as HTMLButtonElement;
const form= document.querySelector("#form") as HTMLFormElement;
const phoneDisplay= document.querySelector(".phoneDisplay") as HTMLElement;
const formDisplay= document.querySelector(".formDisplay") as HTMLFormElement;
const streaksList= document.querySelector("#streaksList") as HTMLUListElement;


plusIcon.addEventListener("click", () => {
    myFunction()})


function myFunction() {
    
    if (formDisplay.style.display == "none" && phoneDisplay.style.display == "block") {
      formDisplay.style.display = "block";
      phoneDisplay.style.display = "none";
      plusIcon.setAttribute("class", "rotated");
    } else {
        phoneDisplay.style.display = "block";
        formDisplay.style.display = "none";
        plusIcon.removeAttribute("class");
      }
   
  }


export class Streaks{
    private streaksArr: streakInterface[] = [];
    constructor(){

    }
    getstreaksArr(){
        return this.streaksArr;

    }
    addStreak(streakItem:streakInterface){
        this.streaksArr.push(streakItem);
    }
    getAllStreaks(){
        return this.streaksArr;

    }
    getStreakById(id:number){
        return this.streaksArr.find((streak) => streak.id === id);

    }

}
const streak = new Streaks ();
form.addEventListener("submit", (e) => {
  e.preventDefault();

    let streakItem: streakInterface = {
        id:Math.ceil(Math.random() * 100),
        taskName: taskInput.value,
        date: dateInput.value,
        icon: imageInput.value,
     
    };


    

    streak.addStreak(streakItem);
    form.reset();
    streaksList.innerHTML = render(streak.getstreaksArr());
    myFunction();
    // 
  }
);



