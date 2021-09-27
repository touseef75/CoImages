// function press(){
//     let values = document.getElementById("search").value;
//     let li = document.querySelectorAll("li");
//     for(let i of li){
//         let ival = i.innerHTML;
//         if(ival.indexOf(values) == -1){
//             i.classList.add("hide")
//         }else{
//             i.classList.remove("hide")

//         }
//     }
// }

// press();
let pagener = 1;
let search = false;
let next = document.getElementById("btn2");
 const auth = "563492ad6f9170000100000192ce204c3d4d43f48315e56b93786c51";
 async function images(pagener){
     const data = await fetch (`https://api.pexels.com/v1/curated?per_page=15&page=${pagener}
`,
     {
         method:"GET",
         headers:{
             Accept : "application/json",
             Authorization : auth,
         },
     }
     )
     const result = await data.json();
     console.log(result)
     result.photos.forEach(photo => {
         const pic = document.createElement("div");
         pic.innerHTML = `<img src=${photo.src.large}
         <p> photo : ${photo.photographer}</p>
         <a href = ${photo.src.large}>download</a>
         `;
         document.querySelector(".gallery").appendChild(pic);

     });
     
 }
 images();


 

//  next button 
 next.addEventListener("click",function(){
     if(!search){
         pagener++;
         images(pagener);
     }
 })









//  search value 
  
let input = document.getElementById("input");

let searchs = document.getElementById("button-addon2");

 searchs.addEventListener("click",function(){
 const auth = "563492ad6f9170000100000192ce204c3d4d43f48315e56b93786c51";
 async function ser(){
     const data = await fetch (`https://api.pexels.com/v1/search?query=${input.value}e&per_page=10`,
     {
         method:"GET",
         headers:{
             Accept : "application/json",
             Authorization : auth,
         },
     }
     )
     const result = await data.json();
     console.log(result)
     result.photos.forEach(photo => {
         const pic = document.createElement("div");
         pic.innerHTML = `<img src=${photo.src.large}
         <p> photo : ${photo.photographer}</p>
         <a href = ${photo.src.large}>download</a>
         `;
         document.querySelector(".gallery").appendChild(pic);

     });

     
 }
 ser();
 input.value = "";
 search = true;
 
})
 


