
let content = document.getElementById("img-container");
let content1 = document.getElementById("img-container1");
let jwl = document.getElementById("jewellery");
let jwlSelected = false;
let women = document.getElementById("women");
let womenSelected = false;
export let content2 = document.getElementById("img-container2");
export let men = document.getElementById("mens");
let imgContent = document.getElementById("container");
let text = document.getElementById("text-container");

//jewellery icon 
jwl.addEventListener('click', eventFunction);
async function eventFunction() {
  content.innerHTML = "";

  jwl.style.borderColor = 'orange';
  jwlSelected = !jwlSelected;
  if (jwlSelected == true) {
    let prodURL = " https://fakestoreapi.com/products/category/jewelery";
    try {
      const prodResponse = await fetch(prodURL);
      if (!prodResponse.ok) {
        throw new Error(`Response status: ${prodResponse.status}`);
      }

      const prodJson = await prodResponse.json();
      console.log(prodJson, "prodJson");

      prodJson.forEach(element => {
        //creating the div element to hold image and details
        let div = document.createElement("div")
        div.classList.add("main");
        let img = document.createElement("img");
        img.src = element.image;
        img.style.width = "100px";
        //creating elements for dettils
        let name = document.createElement("p");
        let price = document.createElement("p");
        let rating = document.createElement("p");
        let button = document.createElement("button");
        name.textContent = element.title;
        price.textContent = `PRICE: $${element.price}`;
        rating.textContent = `RATING: ${element.rating.rate}`;
        button.textContent = "Add to Cart";
        console.log(element.price);
        div.appendChild(img);
        div.appendChild(name);
        div.appendChild(price);
        div.appendChild(rating);
        div.appendChild(button);
        content.appendChild(div);

      });

    } catch (error) {
      console.error(error.message);
    }
  }
  else {
    content.innerHTML = "";
    jwl.style.borderColor = 'white';
  }
}
women.addEventListener('click', eventFunction1);
async function eventFunction1() {
  content1.innerHTML = "";
  women.style.borderColor = 'orange';
  womenSelected = !womenSelected;
  if (womenSelected == true) {
    let prodURL = " https://fakestoreapi.com/products/category/women's clothing";
    try {
      const prodResponse = await fetch(prodURL);
      if (!prodResponse.ok) {
        throw new Error(`Response status: ${prodResponse.status}`);
      }

      const prodJson = await prodResponse.json();
      console.log(prodJson, "prodJson");

      prodJson.forEach(element => {
        //creating the div element to hold image and details
        let div = document.createElement("div")
        div.classList.add("main");
        let img = document.createElement("img");
        img.src = element.image;
        img.style.width = "100px";
        //creating elements for dettils
        let name = document.createElement("p");
        let price = document.createElement("p");
        let rating = document.createElement("p");
        let button = document.createElement("button");
        name.textContent = element.title;
        price.textContent = `PRICE: $${element.price}`;
        rating.textContent = `RATING: ${element.rating.rate}`;
        button.textContent = "Add to Cart";
        console.log(element.price);
        //appending the child elements inside the div
        div.appendChild(img);
        div.appendChild(name);
        div.appendChild(price);
        div.appendChild(rating);
        div.appendChild(button);
        content1.appendChild(div);
      });

    } catch (error) {
      console.error(error.message);
    }
  }
  else {
    content1.innerHTML = "";
    women.style.borderColor = 'white';
  }
}