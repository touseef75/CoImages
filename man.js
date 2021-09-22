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
 const auth = "563492ad6f9170000100000192ce204c3d4d43f48315e56b93786c51";
 async function images(){
     const data = await fetch (`https://api.pexels.com/v1/curated?per_page=100`,
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
         pic.innerHTML = `<img src=${photo.src.Nature}
         <p> photo : ${photo.photographer}</p>
         <a href = ${photo.src.Nature}>download</a>
         `;
         document.querySelector(".gallery").appendChild(pic);

     });
     
 }
 images();



