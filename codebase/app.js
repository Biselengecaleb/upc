   
  const toggle = document.querySelector('.toggle');
  const toggleIcon = document.querySelector('.toggle i');
  const toggleMenu = document.querySelector('.toggle_menu');

  toggle.onclick = function () {
    toggleMenu.classList.toggle('toggle_menu_open');
    const isOpen = toggleMenu.classList.contains('toggle_menu_open')
    toggleIcon.classList = isOpen
    ?'fa-solid fa-xmark'
    :'fa-solid fa-bars'
  }

  

  const modalContainer = document.querySelector(".modal-container");
const modalTriggers = document.querySelectorAll(".modal-trigger");
modalTriggers.forEach(trigger => trigger.addEventListener("click", toggleModal))
function toggleModal(){
   modalContainer.classList.toggle("active")
}




   // Ouvrir la modale avec le bon contenu
document.querySelectorAll('.modal-btn').forEach(button => {
  button.addEventListener('click', () => {
    const content = button.getAttribute('data-content');
    document.getElementById('modal-content').innerHTML = content;
    document.getElementById('modal').style.display = 'block';
  });
});

// Fermer la modale
document.getElementById('close').addEventListener('click', () => {
  document.getElementById('modal').style.display = 'none';
});



















const galleryItem =document.getElementsByClassName("gallery-item");
  const lightBoxContainer = document.createElement("div");
  const lightBoxContent = document.createElement("div");
  const lightBoxImg = document.createElement("img");
  const lightBoxPrev = document.createElement("div");
  const lightBoxNext = document.createElement("div");

  lightBoxContainer.classList.add('lightbox');
  lightBoxContent.classList.add('lightbox-content');
  lightBoxPrev.classList.add("fa","fa-angle-left","lightbox-prev");
  lightBoxNext.classList.add("fa","fa-angle-right","lightbox-next");

   lightBoxContainer.appendChild(lightBoxContent);
   lightBoxContent.appendChild(lightBoxImg);
   lightBoxContent.appendChild(lightBoxPrev);
   lightBoxContent.appendChild(lightBoxNext);
   document.body.appendChild(lightBoxContainer);

   let index = 1;
   //creer une fonction 

   function showlightBox(n) {
    if (n > galleryItem.length){
        index = 1;
    } else if(n < 1){
        index = galleryItem.length;
    }
    let imagelocation = galleryItem[index-1].children[0].getAttribute("src");
    lightBoxImg.setAttribute("src",imagelocation);
   }
   function currentImage(){
    lightBoxContainer.style.display="block";

    let imageIndex = parseInt(this.getAttribute("data-index"));
    showlightBox(index = imageIndex);
   }

   for (let i = 0; i<galleryItem.length; i++){
    galleryItem[i].addEventListener("click",currentImage);
   }

   function sliderImage(n){
    showlightBox(index += n);
   }

   function prevImage(){
    sliderImage(-1);
   }
   function nextImage(){
    sliderImage(1);
   }

   lightBoxPrev.addEventListener("click",prevImage);
   lightBoxNext.addEventListener("click",nextImage);

   //fermer la lightbox

   function closeLightBox(event){
    if(this === event.target){
        lightBoxContainer.style.display = "none";
    }
   }

   lightBoxContainer.addEventListener("click", closeLightBox);