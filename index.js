const bookmarkIcon = document.querySelectorAll('[data-js="bookmark"]');

Array.from(bookmarkIcon).map((i) => {
  let bookmarked = true;
  i.addEventListener("click", () => {
    console.log("button clicked");
    if (bookmarked) {
      i.src = "./assets/bookmark_filled.png";
      console.log("filled");
    } else {
      i.src = "./assets/bookmark.png";
      console.log("gdgsd");
    }
    bookmarked = !bookmarked;
  });
});

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
