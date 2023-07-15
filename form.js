const form = document.querySelector('[data-js="form"]');
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const elements = event.target.elements;
  const question = elements.question.value;
  const answer = elements.answer.value;
  const tag = elements.tags.value;
  const section = document.createElement("section");
  section.setAttribute("class", "question-card");

  const img = document.createElement("img");
  img.setAttribute("class", "question-card__icon");
  img.setAttribute("src", "./assets/bookmark.png");
  img.setAttribute("alt", "bookmark");
  img.setAttribute("data-js", "bookmark");

  const h2 = document.createElement("h2");
  h2.setAttribute("class", "question-card__title");

  h2.textContent = question;
  const button = document.createElement("button");
  button.setAttribute("class", "question-card__button");
  button.setAttribute("data-js", "show-answer");
  button.textContent = "Show Answer";

  const p = document.createElement("p");
  p.setAttribute("class", "question-card__answer");
  p.textContent = answer;

  const div = document.createElement("div");
  div.setAttribute("class", "question-card__tags");

  const div2 = document.createElement("div");
  div2.setAttribute("class", "question-card__tag");
  div2.textContent = tag;

  div.append(div2);
  section.append(img, h2, button, p, div);
  console.log(section);

  const main = document.querySelector("main");
  main.appendChild(section);
});

const questionArea = document.querySelector('[data-js="questionArea"]');
const answerArea = document.querySelector('[data-js="answerArea"]');

function leftCaracters(textArea, numOfChars) {
  const charNum = document.querySelector(`[data-js="${numOfChars}"]`);

  textArea.addEventListener("input", (event) => {
    charNum.textContent = `${150 - event.target.value.length} characters left`;
  });
}

leftCaracters(questionArea, "question-numb-of-char");
leftCaracters(answerArea, "answer-numb-of-char");
