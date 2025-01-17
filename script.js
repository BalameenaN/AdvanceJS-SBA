import {men, menSelected, content2} from './function.js';
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
        let img = document.createElement("img");

        img.src = element.image;
        img.style.width = "100px";
        content2.appendChild(img);
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