function getDogs() {
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        let dogPics = json.message;
        addImages(dogPics);
    });
}

function addImages(images) {
    const dogHouse = document.getElementById("dog-image-container");
    images.forEach(dog => {
        const p = document.createElement("p");
        const img = document.createElement("img");
        img.src=dog;
        dogHouse.appendChild(img);
        dogHouse.appendChild(p);
    });
}

function getBreeds() {
    fetch("https://dog.ceo/api/breeds/list/all")
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        let breedArray = json.message;
        addBreeds(breedArray);
    });
}

function addBreeds(breedJSON) {
    const breedList = document.getElementById("dog-breeds");
    
    for (let breed in breedJSON) {
        let breedText;
        const li = document.createElement("li");
        if (breedJSON[breed].length > 0) {
            breedText = document.createTextNode(`${breed}: ${(breedJSON[breed]).join(', ')}`)
        }
        else breedText = document.createTextNode(breed);
        li.appendChild(breedText);
        breedList.appendChild(li);
    }
}

document.addEventListener("DOMContentLoaded", getDogs);
document.addEventListener("DOMContentLoaded", getBreeds);