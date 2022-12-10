'use strict';

const animalsQuantity = 6;

document.addEventListener("DOMContentLoaded", () => {
    let arrowLeft = document.querySelector("#animals-left-btn");
    let arrowRight = document.querySelector("#animals-right-btn");
    let scrollBox = document.querySelector("#scroll");
    
    let animals;
    fetch('animals.json')
        .then(response => {
            return response.json();
        })
        .then(data => {
            animals = data;
            scrollBox.appendChild(getRandomAnimalCardsGrid())
            scrollBox.appendChild(getRandomAnimalCardsGrid())
            scrollBox.appendChild(getRandomAnimalCardsGrid())
        });

    arrowRight.addEventListener("click", scrollRight);
    arrowLeft.addEventListener("click", scrollLeft);

    let direction;
    let isScrolling = false;

    function scrollRight() {
        if (!isScrolling) {
            isScrolling = true;
            direction = 1;
            scrollBox.style.transform = 'translate(-33.3333%)';
        }
    }

    function scrollLeft() {
        if (!isScrolling) {
            isScrolling = true;
            direction = -1;
            scrollBox.style.transform = 'translate(33.3333%)';
        }
    }

    scrollBox.addEventListener("transitionend", (e) => {
        if (e.target == scrollBox) {
            scrollBox.style.transition = 'none';
            scrollBox.style.transform = 'translate(0)';
            setTimeout(() => scrollBox.style.transition = 'all ease 0.5s');

            if (direction >= 1) {
                scrollBox.appendChild(scrollBox.children[0]);
                scrollBox.replaceChild(getRandomAnimalCardsGrid(animalsQuantity), scrollBox.children[0]);
                scrollBox.replaceChild(getRandomAnimalCardsGrid(animalsQuantity), scrollBox.children[2]);
            } else {
                scrollBox.prepend(scrollBox.children[2]);
                scrollBox.replaceChild(getRandomAnimalCardsGrid(animalsQuantity), scrollBox.children[0]);
                scrollBox.replaceChild(getRandomAnimalCardsGrid(animalsQuantity), scrollBox.children[2]);
            }
            setTimeout(() => isScrolling = false, 50)
        }
    });

    let count = 0;
    function createAnimals(animals) {
        let animalScroll = document.createElement("div");
        animalScroll.classList.add("animals-grid");
        animalScroll.setAttribute("Number", count++);

        animals.forEach(animal => {
            let animalCard = document.createElement("div");
            animalCard.classList.add("animal-card");
            let animalCardImageBox = document.createElement("div");
            animalCardImageBox.classList.add("animal-card-image-box");
            let animalImage = document.createElement("img");
            animalImage.classList.add("animal-card-image");
            animalImage.src = animal.imageLink;

            let animalCardHoverBox = document.createElement("div");
            animalCardHoverBox.classList.add("animal-card-hover-box");
            let animalHoverTitle = document.createElement("h3");
            animalHoverTitle.classList.add("animal-card-hover-title");
            animalHoverTitle.textContent = animal.name;
            let animalHoverDescription = document.createElement("p");
            animalHoverDescription.classList.add("animal-card-hover-description");
            animalHoverDescription.textContent = animal.description;

            let animalCardDescription = document.createElement("div");
            animalCardDescription.classList.add("animal-card-description");
            let animalCardDescriptionText = document.createElement("div");
            animalCardDescriptionText.classList.add("animal-card-description-text");
            let animalTitle = document.createElement("h2");
            animalTitle.classList.add("animal-title");
            animalTitle.textContent = animal.name;
            let animalDescription = document.createElement("p");
            animalDescription.classList.add("animal-description");
            animalDescription.textContent = animal.description;

            let animalMealImage = document.createElement("img");
            animalMealImage.classList.add("animal-card-description-image");
            animalMealImage.src = animal.mealLink;

            animalCardHoverBox.appendChild(animalHoverDescription);
            animalCardHoverBox.appendChild(animalHoverTitle);
            animalCardImageBox.appendChild(animalImage);
            animalCardImageBox.appendChild(animalCardHoverBox);
            animalCard.appendChild(animalCardImageBox);

            animalCardDescriptionText.appendChild(animalTitle);
            animalCardDescriptionText.appendChild(animalDescription);
            animalCardDescription.appendChild(animalCardDescriptionText);
            animalCardDescription.appendChild(animalMealImage);
            animalCard.appendChild(animalCardDescription);
            animalScroll.appendChild(animalCard);
        });

        return animalScroll;
    }

    function getRandomAnimalCardsGrid() {
        let randomAnimals = animals.map(value => ({ value, sort: Math.random() }))
            .sort((a, b) => a.sort - b.sort)
            .map(({ value }) => value);

        return createAnimals([...randomAnimals].slice(0, animalsQuantity));
    }
});