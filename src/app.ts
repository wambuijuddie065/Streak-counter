import { streakInterface } from "./interfaces/streakInterface.js";



const taskInput = document.querySelector("#taskInput") as HTMLInputElement;
const imageInput = document.querySelector("#imageInput") as HTMLInputElement;
const dateInput = document.querySelector("#dateInput") as HTMLInputElement;
const addTaskBtn = document.querySelector("#addTaskBtn") as HTMLButtonElement;
const plusIcon = document.querySelector("#plusIcon") as HTMLButtonElement;
const closeIcon = document.querySelector("#closeIcon") as HTMLButtonElement;
const form= document.querySelector("#form") as HTMLFormElement;
const phoneDisplay= document.querySelector(".phoneDisplay") as HTMLElement;
const formDisplay= document.querySelector(".formDisplay") as HTMLFormElement;
let streaksList= document.querySelector("#streaksList") as HTMLUListElement;
const activityDesc = document.querySelector("#activityDesc") as HTMLDivElement;
const middle = document.querySelector("#middle") as HTMLDivElement;
const aStreak= document.querySelector(".aStreak") as HTMLDivElement


plusIcon.addEventListener("click", () => {
    myFunctionPlus()})
closeIcon.addEventListener("click", () => {
        myFunctionClose()})


function myFunctionPlus() {

      formDisplay.style.display = "block";
      phoneDisplay.style.display = "none"; 
  }
function myFunctionClose() {  
    phoneDisplay.style.display = "block";
    formDisplay.style.display = "none";
 }

class Streaks{
    private streaksArr: streakInterface[] = [];
    constructor(){
        this.displayStreak()

    }
    getStreaks(){
        return this.streaksArr;

    }
    addStreak(newStreak:streakInterface){
        this.streaksArr.push(newStreak);
        this.displayStreak()
    }
    deleteStreak(id:number){
        this.streaksArr.splice(id,1)
        this.displayStreak()

    }

    displayStreak(){

      
            if(this.streaksArr.length===0){
                activityDesc.textContent="You Don't Have Any Activities!!!"
    
            }else{
                activityDesc.textContent="Activities"

            }
          
            streaksList.innerHTML='';
          
                this.streaksArr.map((streak:streakInterface,id)=>{
          
                const aStreak = document.createElement('div')
                aStreak.classList.add('aStreak')
                const streakImage = document.createElement('h1')
                streakImage.classList.add('streakImage')
                const streakDate = document.createElement('p')
                streakDate.classList.add('streakDate')
                const streakText = document.createElement('p')
                streakText.classList.add('streakText')


                streakImage.innerHTML=`${streak.icon}`
                streakDate.textContent=`${streak.date}`
                streakText.textContent=`${streak.taskName}`

                aStreak.appendChild(streakImage);
                aStreak.appendChild(streakDate);
                aStreak.appendChild(streakText);
                streaksList.appendChild(aStreak);

                

                
                aStreak.addEventListener('click', () =>{
                    this.displayModal(id);
             
                        
                })
                aStreak.removeEventListener('click', () =>{});

            })
               
        
    }
    displayModal(index:number){
        
       console.log(index);
       
        const onePop=this.streaksArr[index]
        
        
        let todaysDate = new Date();
        let date = new Date(onePop.date);
        let strkStart = todaysDate.getTime();
        let beststreak = date.getTime();
        let diff = Math.ceil((beststreak - strkStart) / (24 * 3600 * 1000));
        middle.innerHTML=''
        let modal= `
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
        `
        middle.innerHTML=modal
        const closeBtn = document.querySelector("#closeBtn") as HTMLButtonElement
        const parent =closeBtn.parentElement?.parentElement?.parentElement?.parentElement as HTMLElement;
        closeBtn.addEventListener('click', () =>{                     
            middle.innerHTML=''
        })
        const deleteBtn = document.querySelector("#deleteBtn") as HTMLButtonElement
        deleteBtn.addEventListener('click', () => {
            this.deleteStreak(index)
            middle.innerHTML=''
            
            
        })

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

    if(streakItem.date===''||streakItem.taskName ===''||streakItem.icon === '') {
        const topH= document.querySelector(".topH") as HTMLParagraphElement
       
        topH.style.display='block'
        setTimeout(()=>{  
            topH.style.display="none"
         },5000)
        
        
        
    } else{
        



    

    streak.addStreak(streakItem);
    form.reset();
    }
    
   
  }
);





