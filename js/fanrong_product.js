document.addEventListener("DOMContentLoaded", function () {
  // 抓所有品項
  var listItems = document.querySelectorAll(".dropdown-menu li");
  var listItems919 = document.querySelectorAll(".dropdown-menu991 li");

  // 產品介紹
  var productContents = document.querySelectorAll(".product_text");
  var productContents919 = document.querySelectorAll(".product_text919");
  // console.log(productContents);

  // 隱藏所有內容
  productContents.forEach(function (content, index) {
    if (index !== 0) {
      content.style.display = "none";
    } else {
      content.style.display = "flex";
    }
  });

  listItems.forEach(function (item, index) {
    item.addEventListener("click", function () {
      productContents.forEach(function (content) {
        content.style.display = "none";
      });
      // 檢查 index 是否在有效範圍內
      if (index >= 0 && index < productContents.length) {
        // 顯示點擊的內容
        productContents[index].style.display = "flex";
      } else {
        // console.log("Invalid index: " + index);
      }
    });
  });

  productContents919.forEach(function (content, index) {
    if (index !== 0) {
      content.style.display = "none";
    } else {
      content.style.display = "flex";
    }
  });
  listItems919.forEach(function (item, index) {
    item.addEventListener("click", function () {
      productContents.forEach(function (content) {
        content.style.display = "none";
      });

      // 檢查 index 是否在有效範圍內
      if (index >= 0 && index < productContents.length) {
        // 顯示點擊的內容
        productContents[index].style.display = "flex";
      } else {
        // console.log("Invalid index: " + index);
      }
    });
  });
});
