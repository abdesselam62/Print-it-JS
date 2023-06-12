const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
];

// Sélection des flèches gauche et droite
const arrowLeft = document.querySelector('.arrow_left')
const arrowRight = document.querySelector('.arrow_right')

// Ajout des événements clic sur la flèche gauche et droite
arrowLeft.addEventListener ('click',() => {
	ChangeSlide(-1)
	console.log('previous slide'); // Test du fonctionnement des event listeners
})
arrowRight.addEventListener ('click',() => {
	ChangeSlide(1)
	console.log('next slide'); // Test du fonctionnement des event listeners
})

// Sélection de l'image de la bannière et du titre
const bannerImage = document.querySelector('.banner-img')
const bannerTagline = document.querySelector ('#banner p')

// Initialisation du compteur
let index = 0

 // Fonction pour mettre à jour l'image de la bannière et le titre
function ChangeSlide(sens) {	
	index += sens
	if (index > slides.length - 1 )
	index = 0
	if (index < 0)
	index = slides.length - 1
	bannerImage.src = "./assets/images/slideshow/" + slides[index].image
	bannerTagline.innerHTML = slides[index].tagLine
}



