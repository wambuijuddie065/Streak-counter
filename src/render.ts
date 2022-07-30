import { Streaks } from "./app.js";
import { streakInterface } from "./interfaces/streakInterface";


export const render = (data: streakInterface[]): string=> {

    return data.
    map((streak)=>`
        <div class="aStreak">
          <div class="streakImage">${streak.icon}</div>
          <div class="streakDate">${streak.date}</div>
          <div class="streakText">${streak.taskName}</div>
        </div>

    `)
    .join("")
    // streaksList.innerHTML =render;
}