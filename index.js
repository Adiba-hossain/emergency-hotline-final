// Heart Icons Click Event
const hearts = document.getElementsByClassName("fa-heart");
const heartCount = document.getElementById("heart-count");
let heartCountNumber = parseInt(heartCount.innerText);
for (const heart of hearts) {
  heart.addEventListener("click", function () {
    heartCountNumber += 1;
    heartCount.innerText = heartCountNumber;
  });
}
