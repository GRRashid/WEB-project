const comments = 11;
let from = comments;
let data = [];

fetch('https://jsonplaceholder.typicode.com/comments').then(response => {
  document.querySelector('.inner-page').classList.add('loading');
  if (!response.ok) {
    throw `${response.status}`,
    document.querySelector('.inner-page').classList.remove('loading');
  }
  return response.json().then((result) => {
    data = result;
    listRender(data.slice(0, comments));
    setTimeout(() =>{
      document.querySelector('.inner-page').classList.remove('loading');
    }, 3000);
  })
})
 .catch(response => {
    document.querySelector(".testimonials").innerHTML="Что то пошло не так";
    document.querySelector('.inner-page').classList.remove('loading');
})

function listRender(items) {
  let itemsArr = items.map(function(item) {
    return createList(item);
  });

  let content = ``;
  itemsArr.forEach(function(itemInfo) {
    content += itemInfo;
  });

  document.querySelector(".testimonials").innerHTML = content
}

function createList(item) {
  return `
  <div class="testi-block">
    <div class="testi-block__wrapper">
      <span class="testi-block__name">Имя: ${item.name}</span>
      <span class="testi-block__email">Почта: <a href="mailto:${item.email}">${item.email}</a></span>
      <div class="testi-block__text">
        <span>Отзыв:</span>
        <div>${item.body}</div>
      </div>
    </div>
  </div>
`
}