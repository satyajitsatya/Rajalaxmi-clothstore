let maincontainer = document.getElementById("main-container");
let productcontainer = document.getElementById("product-container");
let slider1 = document.getElementById("slider1")
let slider2 = document.getElementById("slider2")
let slider3 = document.getElementById("slider3")
let pasize = document.getElementById("asize")
let pname = document.getElementById("name")
let pcolor = document.getElementById("color")
let pfabric = document.getElementById("fabric")
let psleeve = document.getElementById("sleeve")




let pcard = document.querySelectorAll(".p-card");
pcard.forEach((value)=>{
    value.addEventListener("click",()=>{
        console.log(value.childnodess)
        let imgsrc1 = value.childNodes[1].src;
        let imgsrc2 = value.childNodes[3].src;
        let imgsrc3 = value.childNodes[5].src;
        let asize = value.childNodes[9].innerHTML;
        let name = value.childNodes[11].innerText;
        let color = value.childNodes[13].innerText;
        let fabric = value.childNodes[15].innerText;
        let sleeve = value.childNodes[17].innerText;
        let fevicon = "http://127.0.0.1:5500/favicon.ico"

        slider1.src = imgsrc1;
        slider2.src = imgsrc2;
        slider3.src = imgsrc3;
       pname.innerText = name;
       pasize.innerHTML = asize;
       pcolor.innerText = color;
       pfabric.innerText = fabric;
       psleeve.innerText = sleeve;
       
        maincontainer.style.display="none"
        productcontainer.style.display="inline"
        console.log(imgsrc1,imgsrc2,imgsrc3,asize,color,name,fabric,sleeve,fevicon)
    })
})
let button1= document.getElementById("control-button1")
let button2= document.getElementById("control-button2")
button1.addEventListener("click",()=>{
  button1.className="carousel-control-prev-icon"
})
button2.addEventListener("click",()=>{
  button2.className="carousel-control-next-icon"
})

// let botton =document.querySelectorAll("control-botton");
// botton.forEach((target)=>{
//     target.addEventListener("click",()=>{
//         target.removeClass("bg-dark")
//     })
//     console.log(target.childNodes)
 
// })