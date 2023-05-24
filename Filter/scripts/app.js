function makeTextWavy(element, delay) {
  let text = element.innerText;

  element.innerHTML = text
    .split("")
    .map(letter => {
      return /*html*/ `<span> ${letter} </span>`;
    })
    .join("");

  Array.from(element.children).forEach((child, index) => {
    setTimeout(() => {
      child.classList.add("wavy");
    }, index * 60 + delay);
  });
}

function LoadProducts() {
  var list = document.querySelector(".products");

  fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(products => {
      var html = products.map(product => {
        return /*html*/ `
              <li class="product">
              <a href="#" class="product__link">
                  <img src="${product.image}" alt="Bag">
                  <section class="product__info">
                  <h3 class="product__name">${product.title}</h3>
                  <span class="product__price">$${product.price}</span>
                  <p class="product__desc">${product.description}</p>
                  <section class="product__rating">
                      <span class="rate">
                      <i class="fa-solid fa-star"></i> ${product?.rating.rate}
                      </span>
                      <span class="count">
                      <i class="fa-solid fa-hashtag"></i> ${product?.rating.count}
                      </span>
                  </section>
                  <a href="" class="product__category">${product.category}</a>
                  </section>
              </a>
              </li>
              `;
      });

      list.innerHTML = html.join("\n");
      list.classList.add("loaded");
    });
}

function FilterProducts(by) {
  var input = document.querySelector("#filter__input"),
      products = document.querySelectorAll(".product"),
      txtValue = "",
      filter = "",
      searchBy = "";

  switch(by) {
    case "name":
      searchBy = document.querySelectorAll(".product__name");
      break;
    case "category":
      searchBy = document.querySelectorAll(".product__category");
      break;
  }

  console.log( searchBy );

  filter = new RegExp(input.value, "i");

  for (let i = 0; i < products.length; i++) {
    txtValue = searchBy[i].textContent || searchBy[i].innerText;
    if (~txtValue.search(filter)) {
      products[i].style.display = "";
    }
    else {
      products[i].style.display = "none";
    }
  }
}

makeTextWavy(document.querySelector(".products__loading"), 200);

LoadProducts();

document.querySelector("#filter__input").addEventListener("input", function(evt) {
  FilterProducts("name");
});