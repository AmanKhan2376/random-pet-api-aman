let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let p1 = document.querySelector("#p1");
let p2 = document.querySelector("#p2");
let img = document.querySelector("img");

let url1 = "https://catfact.ninja/fact";
let url2 = "https://dog.ceo/api/breeds/image/random";

async function getFacts() {
  try {
    let res = await axios.get(url1);
    return res.data.fact;
  } catch (error) {
    console.log("Error - ", error);
    return "No Fact Found";
  }
}

async function getImg() {
  try {
    let res = await axios.get(url2);
    return res.data.message;
  } catch (error) {
    console.log("Error - ", error);
    return null;
  }
}

btn1.addEventListener("click", async () => {
  p1.innerText = "Generating Random Fact.....";
  let fact = await getFacts();
  p1.innerText = fact;
});

btn2.addEventListener("click", async () => {
  p2.innerText = "Generating Random Image...";
  let randomImg = await getImg();
  if (!randomImg) {
    p2.innerText = "Something went wrong. Try again...";
    img.style.display = "none";
  } else {
    p2.innerText = "";
    img.style.display = "block";
    img.src = randomImg;
  }
});
