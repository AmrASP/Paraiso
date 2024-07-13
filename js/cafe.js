async function fetchData() {
  let req = await fetch("../data/coffeeData.json");
  let res = await req.json();
  return res;
}

async function getData() {
  let allData = await fetchData();

  if (!Array.isArray(allData.Sheet1)) {
    console.error("Unexpected data structure in menuData.json");
    return;
  }

  const categories = [
    {
      group: "Espresso",
      name: "Espresso",
      imgUrl: "./images/Espresso.png",
      pageNum: 1,
    },

    {
      group: "Hot Coffe",
      name: "Hot Coffe",
      imgUrl: "./images/Hot Coffe.png",
      pageNum: 2,
    },
    {
      group: "Hot Drink's",
      name: "Hot Drink's",
      imgUrl: "./images/Hot Drink's.png",
      pageNum: 3,
    },
    {
      group: " Juice Cocktail ",
      name: "Juice Cocktail",
      imgUrl: "./images/Juice Cocktail.png",
      pageNum: 4,
    },
    {
      group: "Fresh Juice",
      name: "Fresh Juice",
      imgUrl: "./images/cold.png",
      pageNum: 5,
    },
    {
      group: "Mix Fresh",
      name: "Mix Fresh",
      imgUrl: "./images/drinks.png",
      pageNum: 6,
    },
    {
      group: "Smothie",
      name: "Smothie",
      imgUrl: "./images/Smothie.png",
      pageNum: 7,
    },
    {
      group: "Yogurt",
      name: "Yogurt",
      imgUrl: "./images/Yogurt.png",
      pageNum: 8,
    },
    {
      group: "Milk Shake ",
      name: "Milk Shake ",
      imgUrl: "./images/Milk Shake.png",
      pageNum: 9,
    },
    {
      group: "Cocktails Soda",
      name: "Cocktails Soda",
      imgUrl: "./images/drinks.png",
      pageNum: 10,
    },
    {
      group: "Iced Frappe",
      name: "Iced Frappe",
      imgUrl: "./images/Iced Frappe.png",
      pageNum: 10,
    },
    {
      group: "Iced Coffe",
      name: "Iced Coffe",
      imgUrl: "./images/Iced Coffe.png",
      pageNum: 11,
    },
    {
      group: "Iced Frappaccino",
      name: "Iced Frappaccino",
      imgUrl: "./images/Iced Frappe.png",
      pageNum: 12,
    },
    {
      group: "Madnes",
      name: "Madnes",
      imgUrl: "./images/Madnes.png",
      pageNum: 13,
    },
    {
      group: "Fruite Salad",
      name: "Fruite Salad",
      imgUrl: "./images/fruit salad.png",
      pageNum: 14,
    },
    {
      group: "Waffel's",
      name: "Waffel's",
      imgUrl: "./images/waffel.png",
      pageNum: 15,
    },
    {
      group: "Pan Cake",
      name: "Pan Cake",
      imgUrl: "./images/pan cacke.png",
      pageNum: 16,
    },
    {
      group: "Dessert",
      name: "Dessert",
      imgUrl: "./images/Dessert.png",
      pageNum: 17,
    },
    {
      group: "Om Ali",
      name: "Om Ali",
      imgUrl: "./images/om Ali.png",
      pageNum: 18,
    },
    {
      group: "Ice Cream",
      name: "Ice Cream",
      imgUrl: "./images/iceCreem.png",
      pageNum: 19,
    },
    {
      group: "Additions",
      name: "Additions",
      imgUrl: "./images/drinks.png",
      pageNum: 20,
    },
  ];

  let htmlTagsContainer = "";

  for (const { group, name, imgUrl, pageNum } of categories) {
    const items = allData.Sheet1.filter((element) => element.group === group);

    const itemRows = items.map(
      (element) => `
          <div class="rowContainer">
            <div class="infoContainer">
              <span>${element.name}</span>
              <div class="price">
               ${
                 element.single !== undefined
                   ? `<span>${element.single}</span>`
                   : " "
               }
             
               ${
                 element.double !== undefined
                   ? ` <span>${element.double}</span>`
                   : " "
               }
              </div>
            </div>
            <div class="components">
              ${
                element.components !== undefined
                  ? `(${element.components})`
                  : ""
              }
            </div>
          </div>
        `
    );

    htmlTagsContainer += `
          <div class="swiper-slide">
              <div class="swipContainer">
                <div class="tableContainer">
                  <div class="photoContainer">
                    <h1>${name}</h1>
                    <img
                      src="${imgUrl}"
                      alt=""
                    />
                  </div>
                  <div class="cardContainer">
                  <div class="title">
          <span>اسم الصنف</span>
          <div class="price">
          <span>S</span>
          <span>D</span>
          </div>
          </div>
                  ${itemRows.join("")}
                  
                  </div>

                  <div class="pageNumber"><span>${pageNum}</span></div>
                   <div class="pagnation">
        <div class="swiper-button-prev">Prev</div>
        <a href="./index.html" id="backToHome"
          ><i class="fa-solid fa-house"></i
        ></a>
        <div class="swiper-button-next">Next</div>
      </div>
                </div>
              </div>
            </div>
      `;
  }

  const socialMedia = `  <div class="swiper-slide">
  <div class="swipContainer">
    <div class="tableContainer socialCard">
     <a href="./index.html" id="backToHome"
          ><i class="fa-solid fa-house"></i
        ></a>
      <span> تفضلو بزيارة صفحاتنا علي مواقع التواصل الاجتماعي </span>
      <div class="socialLinks ">
       <a href="https://www.facebook.com/Paraisocafe99" target="blank"><i class="fa-brands fa-facebook"></i></a>
      <a href="https://www.instagram.com/paraisocafe99?igsh=a2JtcXF6amxyZTM4" target="blank"><i class="fa-brands fa-instagram"></i></a>
      </div>
     
    </div>
  </div>
</div>`;

  document.getElementById("test").innerHTML = htmlTagsContainer + socialMedia;
  let swiper = new Swiper(".Slider-container", {
    effect: "flip",
    grabCursor: true,
    centerdSlides: true,
    loop: false,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  // swiper.changeDirection('vertical');
}

getData();
