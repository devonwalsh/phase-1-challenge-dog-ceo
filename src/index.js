function getDogs() {
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        dogPics = json.message;
        addImages(dogPics);
    })
};

function addImages(images) {
    const dogHouse = document.getElementById("dog-image-container");
    images.forEach(dog => {
        const p = document.createElement("p");
        const img = document.createElement("img");
        img.src=dog
        dogHouse.appendChild(img);
        dogHouse.appendChild(p);
    })
}


console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", getDogs);