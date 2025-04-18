//use map() over an array of objects
const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img:
      "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img:
      "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img:
      "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img:
      "https://i2.wp.com/seonkyounglongest.com/wp-content/uploads/2019/10/Dan-Dan-Noodles-11.jpg?fit=2000%2C1333&ssl=1",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img:
      "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img:
      "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img:
      "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img:
      "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img:
      "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];

const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");

const menuList = () =>{
  let displayMenu = menu.map((item) => {
  return `<div class="menu-items col-lg-6 col-sm-12">
          <img src=${item.img} alt=${item.title} class="photo" />          
           <div class="menu-info">
            <div class="menu-title">
              <h4>${item.title}</h4>
              <h4 class="price">$${item.price}</h4>
            </div>
            <div class="menu-text">
              ${item.desc}
            </div>
           </div>
          </div>
        `;
});

displayMenu = displayMenu.join("");
sectionCenter.innerHTML = displayMenu;
}

menuList();

let displayCategories = menu.reduce((acc, item) => {
  let category = item.category;
  if (!acc.includes(category)) {
    acc.push(category);
  }
   return acc;
}, ["All"]).map(category => {
  return `<div class="btn-container">
           <button type="button" class="btn-item btn-outline-dark btn" data-id=${category}>
            ${category}
          </button>
          </div>`;
}).join("");

/* 
reduce() Metodunu Ne Zaman Kullanmalı?
Bir diziniz üzerinde yineleme yaparak tek bir değer döndürmeniz gerektiğinde reduce() metodu önerilir.

Şunları içerir:

-Değerlerinizi tek bir değerde özetlemek
-Benzer öğeleri birlikte gruplamak
-Bir diziden yinelenenleri kaldırmak
Metot tarafından döndürülen tek değer aynı zamanda bir nesne dizisi olabilir, bu nedenle birden çok değer içerebilir.
*/

btnContainer.innerHTML = displayCategories;

//Category Filter
const filterBtns = document.querySelectorAll(".btn");
filterBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const category = e.currentTarget.dataset.id;   /* Bu kod satırı, bir HTML elementinin data-id özelliğini alarak category değişkenine atar. Daha detaylı açıklamak gerekirse:
    
    "e.currentTarget: Bu, olayın (event) tetiklendiği HTML elementini temsil eder. Bu durumda, bir butona tıklama olayıdır.
    
    "dataset.id": HTML elementinin data-id özelliğine erişir. Örneğin, <button data-id="breakfast"> gibi bir butonunuz varsa, dataset.id bu butonun data-id değerini döndürür.
    
    Bu kod, tıklanan butonun hangi kategoriye ait olduğunu belirlemek için kullanılır. Örneğin, "breakfast", "lunch" veya "dinner" gibi kategoriler olabilir.
    
    Örnek:
    <button class="btn" data-id="breakfast">Breakfast</button>
    <button class="btn" data-id="lunch">Lunch</button>
    <button class="btn" data-id="dinner">Dinner</button>
    
    Bu butonlardan birine tıkladığınızda, category değişkeni tıklanan butonun data-id değerini alır.
    
    btn.addEventListener("click", (e) => {
      const category = e.currentTarget.dataset.id;
      console.log(category); // Örneğin, "breakfast" yazdırır
    });
    Bu sayede, tıklanan butona göre ilgili kategoriye ait menü öğelerini filtreleyebilirsiniz.*/

    const menuCategory = menu.filter((menuItem) => {
      if (menuItem.category === category) {
        return menuItem;
      }
    });
    if (category === "All") {
      menuList();
    } 
    else {
      displayMenu = menuCategory.map((item) => {
        return `<div class="menu-items col-lg-6 col-sm-12">
          <img src=${item.img} alt=${item.title} class="photo" />          
           <div class="menu-info">
            <div class="menu-title">
              <h4>${item.title}</h4>
              <h4 class="price">$${item.price}</h4>
            </div>
            <div class="menu-text">
              ${item.desc}
            </div>
           </div>
          </div>`;
      }).join("");
      sectionCenter.innerHTML = displayMenu;
    }
  });
});