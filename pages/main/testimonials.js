"use strict"
document.addEventListener("DOMContentLoaded", () => {
    let body = document.querySelector("body");
    let scroll = document.querySelector("#testimotionals-content-scroll");

    let popupElement;

    fetch('testimotionals.json')
        .then(response => {
            return response.json();
        })
        .then(data => {
            data.forEach(testimonialData => scroll.appendChild(createTestimonialCard(testimonialData)));
        });

    function createTestimonialCard(data) {
        let testimonialCard = createTestimonialCardElement(data);

        testimonialCard.addEventListener("click", () => {
                let popupElement = createTestimonialPopupElement(data, () => {
                    body.removeChild(popupElement)
                });
                body.appendChild(popupElement);
        });

        return testimonialCard;
    }

    function createTestimonialPopupElement(data, onClose) {
        let popup = document.createElement("div");
        popup.className = "popup";

        let testimonialCardBorder = document.createElement("div");
        testimonialCardBorder.className = "testimotionals-card-border";
        
        let testimonialCard = document.createElement("div");
        testimonialCard.className = "testimotionals-card";

        let testimonialCardBox = document.createElement("div");
        testimonialCardBox.className = "testimotionals-card-box";

        let testimonialCardHeaderBox = document.createElement("div");
        testimonialCardHeaderBox.className = "testimotionals-card-header-box";
        
        let testimonialAvatarImg = document.createElement("img");
        testimonialAvatarImg.src = data.avatarImg;
        testimonialAvatarImg.className = "testimotionals-avatar-img";
        testimonialCardHeaderBox.appendChild(testimonialAvatarImg);

        let testimonialCardTitleDescription = document.createElement("div");
        testimonialCardTitleDescription.className = "testimotionals-card-title-description";

        let testimonialsCardTitleBox = document.createElement("div");
        testimonialsCardTitleBox.className = "testimotionals-card-title-box";
        testimonialsCardTitleBox.appendChild(testimonialCardTitleDescription);

        let testimonialCardTitle = document.createElement("p");
        testimonialCardTitle.className = "testimotionals-card-title";
        testimonialCardTitle.textContent = data.title;

        let birthPlace = document.createElement("p");
        birthPlace.textContent = data.birthPlace;
        let padding = document.createElement("p");
        padding.textContent = "•";
        let date = document.createElement("p");
        date.textContent = data.date;

        let cross = document.createElement("div");
        cross.className = "popup-close-btn";
        cross.addEventListener("click", onClose);

        let testimonialCardContent = document.createElement("div");
        testimonialCardContent.className = "testimotionals-card-content";

        let content = document.createElement("p");
        content.textContent = data.comment;
        testimonialCardContent.appendChild(content);
        testimonialCardTitleDescription.appendChild(birthPlace);
        testimonialCardTitleDescription.appendChild(padding);
        testimonialCardTitleDescription.appendChild(date);
        testimonialCardTitleDescription.appendChild(cross);
        testimonialsCardTitleBox.appendChild(testimonialCardTitle);
        testimonialsCardTitleBox.appendChild(testimonialCardTitleDescription);
        testimonialCardHeaderBox.appendChild(testimonialsCardTitleBox);
        testimonialCardBox.appendChild(testimonialCardHeaderBox);
        testimonialCardBox.appendChild(testimonialCardContent);
        testimonialCard.appendChild(testimonialCardBox);
        testimonialCardBorder.appendChild(testimonialCard);
        popup.appendChild(testimonialCardBorder);

        popup.addEventListener("click", (e) => {
            if(e.target == popup) {
                onClose();
            }
        });

        return popup;
    }

    function createTestimonialCardElement(data) {
        let testimonialCardBorder = document.createElement("div");
        testimonialCardBorder.className = "testimotionals-card-border";
        
        let testimonialCard = document.createElement("div");
        testimonialCard.className = "testimotionals-card";

        let testimonialCardBox = document.createElement("div");
        testimonialCardBox.className = "testimotionals-card-box";

        let testimonialCardHeaderBox = document.createElement("div");
        testimonialCardHeaderBox.className = "testimotionals-card-header-box";
        
        let testimonialAvatarImg = document.createElement("img");
        testimonialAvatarImg.src = data.avatarImg;
        testimonialAvatarImg.className = "testimotionals-avatar-img";
        testimonialCardHeaderBox.appendChild(testimonialAvatarImg);

        let testimonialCardTitleDescription = document.createElement("div");
        testimonialCardTitleDescription.className = "testimotionals-card-title-description";

        let testimonialsCardTitleBox = document.createElement("div");
        testimonialsCardTitleBox.className = "testimotionals-card-title-box";
        testimonialsCardTitleBox.appendChild(testimonialCardTitleDescription);

        let testimonialCardTitle = document.createElement("p");
        testimonialCardTitle.className = "testimotionals-card-title";
        testimonialCardTitle.textContent = data.title;

        let birthPlace = document.createElement("p");
        birthPlace.textContent = data.birthPlace;
        let padding = document.createElement("p");
        padding.textContent = "•";
        let date = document.createElement("p");
        date.textContent = data.date;

        let cross = document.createElement("div");
        cross.className = "header-menu-close-btn";

        let testimonialCardContent = document.createElement("div");
        testimonialCardContent.className = "testimotionals-card-content";

        let content = document.createElement("p");
        content.textContent = data.comment;
        testimonialCardContent.appendChild(content);
        testimonialCardTitleDescription.appendChild(birthPlace);
        testimonialCardTitleDescription.appendChild(padding);
        testimonialCardTitleDescription.appendChild(date);
        testimonialsCardTitleBox.appendChild(testimonialCardTitle);
        testimonialsCardTitleBox.appendChild(testimonialCardTitleDescription);
        testimonialCardHeaderBox.appendChild(testimonialsCardTitleBox);
        testimonialCardBox.appendChild(testimonialCardHeaderBox);
        testimonialCardBox.appendChild(testimonialCardContent);
        testimonialCard.appendChild(testimonialCardBox);
        testimonialCardBorder.appendChild(testimonialCard);

        return testimonialCardBorder;
    }
});

document.addEventListener("DOMContentLoaded", () => {
    let scroll = document.querySelector("#testimotionals-content-scroll");
    let input = document.querySelector("#testimotionals-progressbar");

    let blockSize;
    if (window.matchMedia('(max-width: 1000px)').matches) {
        blockSize = 293 + 29;
        input.max = 7;
    } else {
        blockSize = 268 + 29;
        input.max = 6;
    }

    input.addEventListener('input', () => {
        let position = input.value;

        scroll.style.transform = `translate(-${position*blockSize}px)`;
      });
});