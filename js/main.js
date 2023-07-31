
const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=c288f71b04e6467cb2e519dc6ffb78f3`

async function getData() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    const articles = data.articles;
    console.log(articles);
    for (let i = 0; i < 3; i++) {
      const homeRow = document.querySelector('#homeRow');
      homeRow.innerHTML += `
            <div class="col-12 col-md-5 col-lg-3 flex-grow-1">
                <img src="${articles[i].urlToImage}" alt="images" class="section__col--img">
                <span class="section__col--span">By                                        <a href="#" style="color: #592EA9; text-decoration: none">
                    ${articles[i].author}</a>   |   ${articles[i].publishedAt} 
                </span>
                <h3 class="section__col--title">${articles[i].title}</h3>
                <p class="section__col--text">${articles[i].content}</p>
            </div>
            `;
    }
  } catch (error) {
    console.error(error);
  } finally {
    const loader = document.querySelector('.loader');
    const loaderContainer = document.querySelector('.loader-container');
    if (loader) {
      loaderContainer.remove();
    }
  }
}

getData();

// navbar

window.addEventListener("scroll", function () {
  shrink();
});

let navbar = document.getElementById("navbar");

function shrink() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    navbar.classList.add("navbarshrink");
  } else {
    navbar.classList.remove("navbarshrink");
  }
}

function openNavbar() {
  // document.getElementById("navbar-responsive").style.left = "0";
  document.getElementById("navbar-responsive").style.top = "0";
}
function closeNavbar() {
  // document.getElementById("navbar-responsive").style.left = "-100%";
  document.getElementById("navbar-responsive").style.top = "-100%";
}

document.getElementById("navbar-close").addEventListener("click", closeNavbar);

window.addEventListener("scroll", function () {
  toggleBacktop();
});

// backtop

let backtop = document.getElementById("backtop");

function toggleBacktop() {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    backtop.style.opacity = 1;
  } else {
    backtop.style.opacity = 0;
  }
}

// chekkeds

let btn = document.querySelector("#btn-category-chekked");

btn.addEventListener("click", function () {
  mychek();
});

function mychek() {
  window.location.href = "../category.html";
}

let homechek = document.querySelector("#all_post_chek");

btn.addEventListener("click", function () {
  myhome();
});

function myhome() {
  window.location.href = "../all-post.html";
}
