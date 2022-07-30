export const render = (data) => {
    return data.
        map((streak) => `
        <div class="aStreak">
          <div class="streakImage">${streak.icon}</div>
          <div class="streakDate">${streak.date}</div>
          <div class="streakText">${streak.taskName}</div>
        </div>

    `)
        .join("");
    // streaksList.innerHTML =render;
};
