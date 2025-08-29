// Heart Count
const hearts = document.getElementsByClassName("fa-heart");
const heartCount = document.getElementById("heart-count");
let heartCountNumber = parseInt(heartCount.innerText);
for (const heart of hearts) {
  heart.addEventListener("click", function () {
    heartCountNumber += 1;
    heartCount.innerText = heartCountNumber;
  });
}
// Call Buttons

const callButtons = document.getElementsByClassName("call-btn");
const defaultCoin = document.getElementById("default-coin");
let defaultCoinNumber = parseInt(defaultCoin.innerText);

const callHistoryContainer = document.getElementById("call-history-id");

const clearHistoryBtn = document.getElementById("clear-history-btn");

callHistoryContainer.innerHTML = "";

for (const callButton of callButtons) {
  callButton.addEventListener("click", function () {
    if (defaultCoinNumber < 20) {
      alert("❌ Not enough coins! You need at least 20 coins to make a call.");
      return;
    }

    defaultCoinNumber -= 20;
    defaultCoin.innerText = defaultCoinNumber;

    const card = callButton.parentNode.parentNode;
    const heading = card.querySelector(".heading").innerText;
    const subtitle = card.querySelector(".subtitle").innerText;
    const phNum = card.querySelector(".ph-num").innerText;

    alert(`📞 Calling ${subtitle} ${phNum}`);

    const currentTime = new Date().toLocaleTimeString();

    const newCallDiv = document.createElement("div");
    newCallDiv.className =
      "call-history-body mt-5 flex justify-between items-center bg-[#F5F5F5] rounded-lg p-2";

    newCallDiv.innerHTML = `
      <div>
        <p>${heading}</p>
        <p>${phNum}</p>
      </div>
      <p>${currentTime}</p>
    `;
    callHistoryContainer.appendChild(newCallDiv);
  });
}
// clear history
clearHistoryBtn.addEventListener("click", function () {
  callHistoryContainer.innerHTML = "";
});
// copy section

const copyButtons = document.getElementsByClassName("copy-btn");

const copyCountElement = document.getElementById("copy-count");
let copyCount = parseInt(copyCountElement.innerText);

for (const copyButton of copyButtons) {
  copyButton.addEventListener("click", function () {
    const card = copyButton.parentNode.parentNode;

    const phoneNumber = card.querySelector(".ph-num").innerText;

    navigator.clipboard
      .writeText(phoneNumber)
      .then(() => {
        alert(`📋 Copied ${phoneNumber} to clipboard!`);

        copyCount++;
        copyCountElement.innerText = copyCount;
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  });
}
