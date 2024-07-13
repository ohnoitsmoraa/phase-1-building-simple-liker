// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = "♡";
const FULL_HEART = "♥";

// Your JavaScript code goes here!
const likeBtns = document.querySelectorAll(".like-glyph");
likeBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.innerText === EMPTY_HEART) {
      mimicServerCall()
        .then(() => {
          btn.innerText = FULL_HEART;
          btn.classList.add("activated-heart");
        })
        .catch((error) => {
          displayErrorModal(error);
        });
    } else {
      btn.innerText = EMPTY_HEART;
      btn.classList.remove("activated-heart");
    }
  });
});

function displayErrorModal(errorMessage) {
  const errorModal = document.getElementById("modal");
  const modalMessage = document.getElementById("modal-message");
  modalMessage.innerText = errorMessage;
  errorModal.classList.remove("hidden");
}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
