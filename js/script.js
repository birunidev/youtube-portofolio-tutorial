const sidedrawer = document.querySelector(".sidedrawer");
const backdrop = document.querySelector(".backdrop");
const bars = document.getElementById("bars");

bars.addEventListener("click", () => {
  sidedrawer.classList.add("active");
  backdrop.classList.add("show");
});

backdrop.addEventListener("click", () => {
  sidedrawer.classList.remove("active");
  backdrop.classList.remove("show");
});

// showcase part
const showcaseImageContainer = document.getElementById("showcase-image");
const indicators = document.querySelectorAll(".indicator");
console.log(indicators);
// <img src="assets/portfolio1.png" alt="" />
let images = [1, 2, 3, 4];

window.onload = () => {
  let i = 1;
  renderImage(1);
  // setInterval(() => {
  //   if (i > 4) {
  //     i = 1;
  //   }
  //   renderImage(i);
  //   i++;
  // }, 2000);
};

for (const indicator of indicators) {
  indicator.addEventListener("click", (e) => {
    renderImage(e.target.id);
  });
}

function renderImage(imageNum) {
  let imageHTMl = ``;

  for (const indicator of indicators) {
    if (imageNum === indicator.id) {
      indicator.classList.add("active");
    } else {
      indicator.classList.remove("active");
    }
  }

  showcaseImageContainer.innerHTML = `<img src="assets/portfolio${imageNum}.png" alt="" />`;
}

// showcase part

// testimonial part
const persons = document.querySelectorAll(".profile__picture");
const personName = document.querySelector(".testimonial__bio__name");
const personRole = document.querySelector(".testimonial__bio__role");
const personContent = document.querySelector(".testimonial__content__text");
const personStars = document.querySelector(".testimonial__content__stars");

let testimonials = [
  {
    id: "1",
    name: "Calvin Henry",
    role: "Restaurant Owner",
    content:
      "Finally, I can grow my business through digital products. All thanks to Steward",
    stars: 4,
  },
  {
    id: "2",
    name: "Arlene Cooper",
    role: "Photographer",
    content: "I would love to work with this guy. His work is perfect",
    stars: 4,
  },
  {
    id: "3",
    name: "Julie Bell",
    role: "Copywriter",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus sed vitae enim dui elementum, amet.",
    stars: 5,
  },
];

console.log(persons);

for (const person of persons) {
  person.addEventListener("click", (e) => {
    let index = e.target.id.split("-")[1];
    console.log(person.classList[1]);
    renderContent(index);
  });
}

renderContent(1);

function renderContent(index) {
  personName.innerText = `${testimonials[index].name}`;
  personRole.innerText = `${testimonials[index].role}`;
  personContent.innerText = `${testimonials[index].content}`;

  for (const person of persons) {
    if (index === person.classList[1]) {
      person.classList.add("active");
    } else {
      person.classList.remove("active");
    }
  }

  let starHTML = ``;
  for (let i = 0; i < testimonials[index].stars; i++) {
    starHTML += `<span
    class="iconify star active"
    data-icon="entypo:star"
    data-inline="false"
  ></span> `;
  }
  personStars.innerHTML = starHTML;
}

// testimonial part

// handle navbar background
const navbar = document.getElementById("navbar");

document.addEventListener("scroll", () => {
  if (window.top.scrollY > 199) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
