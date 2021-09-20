function press(){
    let values = document.getElementById("search").value;
    let li = document.querySelectorAll("li");
    for(let i of li){
        let ival = i.innerHTML;
        if(ival.indexOf(values) == -1){
            i.classList.add("hide")
        }else{
            i.classList.remove("hide")

        }
    }
}

press();