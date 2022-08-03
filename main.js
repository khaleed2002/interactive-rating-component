let rate = document.querySelectorAll("li");
let helloBox = document.querySelector(".hello-box");
let thankBox = document.querySelector(".thank-box")
let rateMessage = document.querySelector(".stars div");
for (let i = 0; i < 5; i++) {
    rate[i].onclick = () => {

        removeStyle(rate);
        rate[i].classList.add("rate-on-click");
        if (i !== 0) {
            rate[i - 1].style.backgroundColor = "#7c8898";
            rate[i - 1].style.color = "#fff"
        }
    }
}

function removeStyle(list) {
    for (let i = 0; i < 5; i++) {
        list[i].classList.remove("rate-on-click");
        if (i !== 0) {
            rate[i - 1].style.backgroundColor = "#223039";
            rate[i - 1].style.color = "hsl(217, 12%, 63%)"
        }
    }
}

let submit = document.querySelector("button");
submit.onclick = () => {
    let chosenRate = document.querySelector(".rate-on-click");
    rateMessage.innerHTML = `You selected ${chosenRate.textContent} out of 5`
    helloBox.remove();
    thankBox.style.display = "flex";
}