window.onload = function () {
    axios.post('https://acses-gim-maze-leaderboard.vercel.app/api/leaderboard/top')
        .then(response => {
            const data = response.data;
            console.log(data,"here")
            const leaderboardDiv = document.querySelector('.containeer');

            data.forEach((entry, index) => {
                const box = document.createElement('div');
                box.classList.add('w-[500px]', 'mt-5', 'ml-auto', 'mr-auto', 'py-5', 'px-3', 'rounded-sm', 'bg-slate-500', 'bg-opacity-80');
                
                box.innerHTML = `
                <div
        class="box flex justify-between items-center text-white text-2xl font-bold font-[cursive] border-2 border-black px-3 py-5 m-2"
      >
        <h1>${index + 1}. ${entry.username}</h1>
        <h1>${entry.points}</h1>
      </div>
                `;

                leaderboardDiv.appendChild(box);
            });
        })
        .catch(error => {
            console.error('There was an error fetching the leaderboard data:', error);
        });
};
