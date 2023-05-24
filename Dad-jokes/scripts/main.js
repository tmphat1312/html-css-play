const DAD_JOKE_URL = 'https://icanhazdadjoke.com';
const getJokeButton = 
      document.querySelector(".get-joke-btn");
const joke = document.querySelector(".joke");


getJokeButton.addEventListener("click", getJoke);


// using .then()
function getJoke() {
  const config = {
    headers: {
      Accept: 'application/json',
    }
  };

  fetch(DAD_JOKE_URL, config)
    .then(res => res.json())
    .then(data => {
      console.log( data );
      joke.innerText = data.joke;
    })
}

setTimeout(getJoke, 1000);

//! USING ASYNC/AWAIT
// async function generateJoke() {
//   const config = {
//     headers: {
//       Accept: 'application/json',
//     },
//   }

//   const res = await fetch('https://icanhazdadjoke.com', config)

//   const data = await res.json()

//   jokeEl.innerHTML = data.joke
// }
