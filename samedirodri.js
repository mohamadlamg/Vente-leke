const link = document.querySelector(".icon-whatsapp");

 
function ContacterLeVendeur(){

    const message = encodeURIComponent("Salut ! je suis tombé sur votre site te j'aimerais avoir plus d'informations sur certains produits.")
    const lien = "https://wa.me/2250574763038" + "?text="+ message
    window.open(lien,"_blank")
    
}

const Btn = document.querySelector(".icon-whatsapp")
Btn.addEventListener("click",()=>{
    ContacterLeVendeur();
}
)

function ContacterRodri(){

    const message = encodeURIComponent("Wahoo ! Vous avez une très belle collection de chaussures. J'en suis tombé amoureux.😍😍 ")
    const link = "https://wa.me/2250594965524" + "?text="+ message
    window.open(link,"_blank")
    
}

const Rd = document.querySelector(".btn")






const Images = document.querySelectorAll(".image");
let i = 0

function afficher(){
    for(let j = 0; j < Images.length; j++){
        Images[j].style.display="none"
    }
    Images[i].style.display="block"
}
afficher()

setInterval( ()=>{
    i++
    if (i >= Images.length){
        i = 0
    }
    afficher()

},3000);

function Achat(produit,prix){
    const message = encodeURIComponent("Salut, j'ai trouvé ce magnifique produit sur votre site et je voudrais avoir plus d'informations " +produit + " au prix de " + prix)
    const lien = "https://wa.me/2250574763038" + "?text="+ message
    window.open(lien,"_blank")

}
 



const Menubar = document.querySelector(".icon-menu");
const Navitems = document.querySelector(".list-items");

Menubar.addEventListener('click',()=>{
    Navitems.classList.toggle('active')
})




