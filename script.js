const box = document.getElementById("box");
        const startBtn = document.getElementById("startBtn");
        let start;

        function getRandomColor() {
            const letters = 'abcdef0123456789';
            let color = '#';
            for (let i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }

        function move() {
            let top = Math.random() * 300 + 200;
            let left = Math.random() * 500;
            let size = Math.random() * 100 + 50;
            box.style.top = top + "px";
            box.style.left = left + "px";
            box.style.width = size + "px";
            box.style.height = size + "px";
            box.style.display = "block";
            box.style.backgroundColor = getRandomColor();
            box.style.borderRadius = Math.random() > 0.5 ? "50%" : "0%";
            start = new Date().getTime();
        }

        box.onclick = () => {
            box.style.display = "none";
            let end = new Date().getTime();
            const ReactTime = (end - start) / 1000;
            document.getElementById("reactionTime").textContent = `Your Reaction time: ${ReactTime} sec`;
            setTimeout(move, 1000);
        }

        startBtn.onclick = () => {
            document.getElementById("reactionTime").textContent = "";
            startBtn.style.display = "none";
            setTimeout(move, 1000);
        }