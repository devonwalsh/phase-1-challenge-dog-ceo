let breedArray = [];

//Event listeners
document.addEventListener("DOMContentLoaded", () => { 
    callImageAPI();
    callBreedAPI();
})

function callImageAPI() {
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(response => response.json())
    .then(data => {
        let dogPics = data.message;
        addImages(dogPics);
    });
}

function addImages(images) {
    const dogContainer = document.getElementById("dog-image-container");
    images.forEach(dog => {
        const p = document.createElement("p");
        const img = document.createElement("img");
        img.src=dog;
        dogContainer.appendChild(img);
        dogContainer.appendChild(p);
    });
}

function callBreedAPI() {
    fetch("https://dog.ceo/api/breeds/list/all")
    .then(response => response.json())
    .then(data => {
        let breedObject = data.message;
        for (let breed in breedObject) {
            breedArray.push(breed);
        }

        addBreedList(breedArray);
        breedFilterListener();
        
    });
}

function addBreedList(breeds) {
    const breedContainer = document.getElementById("dog-breeds");
    
    breeds.forEach(breed => {
        const li = document.createElement("li");
        let breedItem = document.createTextNode(breed);
        li.appendChild(breedItem);
        breedContainer.appendChild(li);
    })
    fontColorListener();
}

function filterBreeds(firstLetter) {
    let ul = document.getElementById("dog-breeds");
    ul.innerHTML = '';
    let filteredBreeds = breedArray.filter(breed => breed[0] === firstLetter);
    addBreedList(filteredBreeds);
}

function fontColorListener() {
    const lis = document.querySelectorAll("li")
    lis.forEach(li => li.addEventListener("click", changeTextColor))
}

function changeTextColor() {
    this.style.color = "blue";
}

function breedFilterListener() {
    const breedContainer = document.getElementById("breed-dropdown");
    breedContainer.addEventListener("change", (e) => filterBreeds(e.target.value));
}
