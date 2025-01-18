import {men, content2} from './function.js';

export let user= document.getElementById("user");
//men's clothing category
let menSelected = false;
men.addEventListener('click', eventFunction2);
async function eventFunction2() {
  content2.innerHTML = "";
  men.style.borderColor = 'orange';
  menSelected = !menSelected;
  if (menSelected == true) {
    let prodURL = " https://fakestoreapi.com/products/category/men's clothing";
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
        content2.appendChild(div);
      });

    } catch (error) {
      console.error(error.message);
    }
  }
  else {
    content2.innerHTML = "";
    men.style.borderColor = 'white';
  }
}