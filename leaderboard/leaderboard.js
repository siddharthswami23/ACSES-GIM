window.onload = function () {
    fetch('https://acses-gim-maze-leaderboard.vercel.app/api/leaderboard/top')
    .then(response => response.json())
        .then(data => {
            const leaderboardDiv = document.querySelector('.containeer');

            data.forEach((entry, index) => {
                const box = document.createElement('div');
                box.classList.add('w-[500px]', 'mt-5', 'ml-auto', 'mr-auto', 'py-5', 'px-3', 'rounded-sm', 'bg-slate-500', 'bg-opacity-80');
                
                box.innerHTML = `
                <div
        class="box flex justify-between items-center text-white text-2xl font-bold font-[cursive] border-2 border-black px-3 py-5 m-2"
      >
        <h1>${index + 1}. ${entry.name}</h1>
        <h1>${entry.score}</h1>
      </div>
            `;

                leaderboardDiv.appendChild(box);
            });
        })
};