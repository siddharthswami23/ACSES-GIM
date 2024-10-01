window.onload = function () {
  axios
    .post("https://acses-gim-maze-leaderboard.vercel.app/api/leaderboard/top")
    .then((response) => {
      const data = response.data;
      console.log(data, "here");
      const leaderboardDiv = document.querySelector("#containeer");

      data.forEach((entry, index) => {
        const box = document.createElement("div");
        box.classList.add(
          "w-[20vw]",
          "h-[10vh]",
          "my-5",
          "ml-auto",
          "mr-auto",
          "py-5",
          "px-3",
          "bg-blue-200",
          "bg-opacity-80",
          "flex",
          "items-center",
          "justify-center","rounded-xl"
        );

        box.innerHTML = `
                <div
        class="box flex flex-col justify-between capitalize items-center text-white text-2xl font-bold font-[cursive] px-3 py-5"
      >
        <h1>${index + 1}. ${entry.username}</h1>
      </div>
                `;

        leaderboardDiv.appendChild(box);
      });
    })
    .catch((error) => {
      console.error("There was an error fetching the leaderboard data:", error);
    });
};
