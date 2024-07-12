async function fetchData() {
  let req = await fetch("../data/restaurant.json");
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
      group: "السندوتشات",
      name: "السندوتشات",
      imgUrl: "./images/Vip.png",
      pageNum: 1,
    },
    {
      group: "برجر الفراخ ",
      name: "برجر الفراخ ",
      imgUrl: "./images/Appetizers.png",
      pageNum: 2,
    },
    {
      group: "برجر اللحم ",
      name: "برجر اللحم",
      imgUrl: "./images/Appetizers.png",
      pageNum: 3,
    },
    {
      group: "المقبلات ",
      name: "المقبلات",
      imgUrl: "./images/Appetizers.png",
      pageNum: 4,
    },
    {
      group: "وجبات الاطفال ",
      name: "وجبات الاطفال",
      imgUrl: "./images/Additions.png",
      pageNum: 5,
    },
    {
      group: "الشوربة ",
      name: "الشوربة",
      imgUrl: "./images/Additions.png",
      pageNum: 6,
    },
    {
      group: "الباستا",
      name: "الباستا",
      imgUrl: "./images/eastFood.png",
      pageNum: 7,
    },
    {
      group: "السلطات ",
      name: "السلطات",
      imgUrl: "./images/eastFood.png",
      pageNum: 8,
    },
    {
      group: "الاطباق ",
      name: "الاطباق",
      imgUrl: "./images/eastFood.png",
      pageNum: 9,
    },
    {
      group: "البيتزا ",
      name: "البيتزا",
      imgUrl: "./images/eastFood.png",
      pageNum: 10,
    },
  ];

  let htmlTagsContainer = "";

  for (const { group, name, imgUrl, pageNum } of categories) {
    const items = allData.Sheet1.filter(
      (element) =>
        element.group === group 
    );

    const itemRows = items.map(
      (element) => `
        <div class="rowContainer">
           <div class="infoContainer">
              <span class="groupName" >${element.name}</span>
              <div class="price">
               ${
                 element.single !== undefined
                   ? `<span>${element.single}</span>`
                   : ""
               }
             
               ${
                 element.double !== undefined
                   ? ` <span>${element.double}</span>`
                   : "<span>--</span> "
               }
              </div>
            </div>
          <div class="components">
            ${element.components !== undefined ? element.components : ""}
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
                    <span>السعر</span>
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

  const socialMedia =  `  <div class="swiper-slide">
  <div class="swipContainer">
    <div class="tableContainer socialCard">
     <a href="./index.html" id="backToHome"
          ><i class="fa-solid fa-house"></i
        ></a>
      <span> تفضلو بزيارة صفحاتنا علي مواقع التواصل الاجتماعي </span>
      <div class="socialLinks ">
      <a href="https://www.facebook.com/Paraisocafe99" target="blank" ><i class="fa-brands fa-facebook"></i></a>
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
