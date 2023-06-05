let url = "http://numbersapi.com";
const numbers = document.querySelector(".numbers");
//1

async function favoritenum() {
  let favorite = await axios.get(`${url}/23/trivia?json`);
  console.log(favorite.data);
}

favoritenum();

//2

async function multiplenum() {
  let multiplenum = [23, 5, 2, 3];

  let multnum = await axios.get(`${url}/${multiplenum}/trivia?json`);
  console.log(multnum.data.text);
}

multiplenum();

//3

async function facts() {
  let fourfacts = await Promise.all(
    Array.from({ length: 4 }, () => axios.get(`${url}/23/trivia?json`))
  );
  fourfacts.forEach((data) => {
    numbers.append(`<p>${data.name}</p>`);
  });
}
facts();
