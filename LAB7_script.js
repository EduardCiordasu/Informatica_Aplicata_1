//Cache the DOM
var buton = document.getElementById("button")
var body = document.getElementById("body")
var nume = document.getElementById("nume")
var prenume = document.getElementById("prenume")
var an = document.getElementById("an")
var img = document.getElementById("imagine")
var asteptari = document.getElementById("asteptari")

const d = new Date()
var year = d.getFullYear()

//Add ecent listener to button
buton.addEventListener("click", FastForward)
function FastForward()
{
	buton.style.width = "150px"
    buton.style.height = "100px" 
    buton.style.background = "red" 
    buton.style.color = "white" 
    buton.style.fontSize = "30px"

	nume.innerHTML = "Functie: Inginer Toleranțe și Control Dimensional"
	prenume.innerHTML = "Firma: Porsche Engineering Cluj"
	img.src = "imagine.jpg"
    asteptari.innerHTML = "Experiență: <ol> Internship la firma Yardi (2024) </ol> <ol> Internship la firma Fortech (2025) </ol> <ol> Internship la firma Electrogroup (2026) </ol>"
	body.style.backgroundImage = "url(Porsche-LMDh.jpg)"
}


function displayAge()
{
    year.innerHTML = an - year.innerHTML	
}