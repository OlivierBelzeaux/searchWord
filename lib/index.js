// TODO: Autocomplete the input with AJAX calls.

// fetch("https://wagon-dictionary.herokuapp.com/autocomplete/u")
//   .then(response => response.json())
//   .then((data) => {
//     console.log(data.words);
//   });

const results = document.querySelector("#results");

const insertWords = (data) => {
  results.innerHTML = "";
  data.words.forEach((result) => {
    const word = `<li class="list-inline-item">
          <a target="_blank" href="https://www.google.com/search?q=${result}">${result}</a>
        </li>`;
    console.log(word);
    results.insertAdjacentHTML("beforeend", word);
  });
};

const searchWords = (event) => {
  fetch(
    `https://wagon-dictionary.herokuapp.com/autocomplete/${event.currentTarget.value}`
  )
    .then(response => response.json())
    .then(insertWords);
};

const input = document.querySelector("#search");
input.addEventListener("keyup", searchWords);
