async function fetchData() {
  try {
    const req = await fetch("../data/hotDrinks.json");
    const res = await req.json();
    return res;
  } catch (error) {
    console.error("Error fetching data:", error);
    // Handle the error gracefully (e.g., display an error message to the user)
  }
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
      imgUrl: "../images/Espresso.png",
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
      imgUrl: "../images/Hot Drink's.png",
      pageNum: 3,
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

  if (typeof Swiper !== "undefined") {
    // Check if Swiper is defined
    let swiper = new Swiper(".Slider-container", {
      effect: "flip",
      grabCursor: true,
      centeredSlides: true,
      loop: false,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  } else {
    console.warn("Swiper library not found");
  }
  // swiper.changeDirection('vertical');
}

getData();
