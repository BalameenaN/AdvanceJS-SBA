
let content = document.getElementById("img-container");
let jwl = document.getElementById("jewellery");


jwl.addEventListener('click',eventFunction);
async function eventFunction(){
      content.innerHTML="";
      jwl.style.borderColor = 'red';
    let prodURL = " https://fakestoreapi.com/products/category/jewelery";
    try {
        const prodResponse = await fetch(prodURL);
        if (!prodResponse.ok) {
          throw new Error(`Response status: ${prodResponse.status}`);
        }
    
        const prodJson = await prodResponse.json();
        console.log(prodJson,"prodJson");
        
        prodJson.forEach(element => {
            let img = document.createElement("img");
           
            img.src=element.image;
            img.style.width = "100px";
            content.appendChild(img);
        });
    
      } catch (error) {
        console.error(error.message);
      }

}