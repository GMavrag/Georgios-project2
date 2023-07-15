const bookmarkIcon = document.querySelector('[data-js="bookmark"]');

let bookmarked = true;
bookmarkIcon.addEventListener("click", () => {
  console.log("button clicked");
  if (bookmarked) {
    bookmarkIcon.src = "./assets/bookmark_filled.png";
    console.log("filled");
  } else {
    bookmarkIcon.src = "./assets/bookmark.png";
    console.log("gdgsd");
  }
  bookmarked = !bookmarked;
});

/* const bookmarkImage = document.querySelector('[data-js="bookmark"]');
let isBookmarked = true;
bookmarkImage.addEventListener("click", () => {
  console.log("button clicked");
  if (isBookmarked) {
    bookmarkImage.src = "./image/bookmark_filled.png";
  } else {
    bookmarkImage.src = "./image/bookmark_transparent.png";
  }
  isBookmarked = !isBookmarked;
}); */
const showAnswer = document.querySelector('[data-js="show-answer"]');
const answer = document.querySelector(".question-card__answer");
showAnswer.addEventListener("click", function () {
  answer.classList.toggle("hidden");
  if (answer.classList.contains("hidden")) {
    showAnswer.textContent = "Show Answer";
  } else {
    showAnswer.textContent = "Hide Answer";
  }
});
// answer.classList.add("hidden");

/* const answerButton = document.querySelector('[data-js="answerButton"]');
const answer = document.querySelector(".answer");
answerButton.addEventListener("click", function () {
  answer.classList.toggle("hidden");
  if (answer.classList.contains("hidden")) {
    answerButton.textContent = "Show Answer";
  } else {
    answerButton.textContent = "Hide Answer";
  }
});
answer.classList.add("hidden"); */
