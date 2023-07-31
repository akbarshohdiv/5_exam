async function myFun() {
  const value = document.querySelector('.ct__section--input').value;
  let urlSearch;

  if (value) {
    urlSearch = `https://newsapi.org/v2/everything?q=${value}&apiKey=c288f71b04e6467cb2e519dc6ffb78f3`;
  } else {
    urlSearch = 'https://newsapi.org/v2/everything?q=Business&apiKey=c288f71b04e6467cb2e519dc6ffb78f3';
  }

  try {
    const urlKey = await fetch(urlSearch);
    const data = await urlKey.json();
    const articles = data.articles;

    const allRow = document.querySelector('.ct__section');
    allRow.innerHTML = '';

    articles.map((element) => {
      console.log(element);
      const { urlToImage, title, content } = element;
      allRow.innerHTML += `
            <div class="row g-5" style="margin-top: 32px;">
                <div class="col-lg-4">
                    <img src="${urlToImage}" class="img-fluid rounded-start w-100" alt="images">
                </div>
                <div class="col-lg-8">
                    <div class="card-body">
                        <span class="ct__card-body--span">Business</span>
                        <h2 class="ct__card-body--title">${title}</h2>
                        <p class="ct__card-body--text">${content}</p>
                    </div>
                </div>
            </div>
            `
    })
  } catch {
    console.error('ishlamayapti');
  } finally {
    const loader = document.querySelector('.loader');
    const loaderContainer = document.querySelector('.loader-container');
    if (loader) {
      loaderContainer.remove();
    }
  }
}
myFun();

const input = document.querySelector('.ct__section--input');
input.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    myFun();
    input.value = '';
  }
})