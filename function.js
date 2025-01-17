
let content = document.getElementById("img-container");
let content1 = document.getElementById("img-container1");
let jwl = document.getElementById("jewellery");
let jwlSelected = false;
let women = document.getElementById("women");
let womenSelected = false;
export let content2 = document.getElementById("img-container2");
export let men = document.getElementById("mens");
let imgContent = document.getElementById("img-content");

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
        let img = document.createElement("img");
        img.src = element.image;
        img.style.width = "100px";
        content.appendChild(img);
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
        let img = document.createElement("img");

        img.src = element.image;
        img.style.width = "100px";
        content1.appendChild(img);
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