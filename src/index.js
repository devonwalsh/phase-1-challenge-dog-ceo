//Event listeners
document.addEventListener("DOMContentLoaded", () => { 
    callImageAPI();
    callBreedAPI();
    document.getElementById("breed-dropdown").addEventListener("change", (e) => {
        let dropdownValue = e.target.value;
    })
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
        addBreedList(breedObject);
    });
}

function addBreedList(breedObject) {
    const breedContainer = document.getElementById("dog-breeds");
    
    for (let breed in breedObject) {
        let breedList;
        const li = document.createElement("li");
        if (breedObject[breed].length > 0) {
            breedList = document.createTextNode(`${breed}: ${(breedObject[breed]).join(', ')}`)
        }
        else breedList = document.createTextNode(breed);
        li.appendChild(breedList);
        breedContainer.appendChild(li);
    }
    addEventListeners();
}

function changeTextColor() {
    this.style.color = "blue";
}

function addEventListeners() {
    const lis = document.querySelectorAll("li")
    lis.forEach(li => li.addEventListener("click", changeTextColor))
}
