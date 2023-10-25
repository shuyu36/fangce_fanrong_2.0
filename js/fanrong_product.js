document.addEventListener("DOMContentLoaded", function () {
    // 获取所有列表项
    var listItems = document.querySelectorAll('.dropdown-menu li');
  
    // 获取所有产品内容
    var productContents = document.querySelectorAll('.product_text');


    // // 隐藏其他产品内容
    // productContents.forEach(function (content) {
    //         content.style.display = 'flex';
    // });

       // 隐藏除第四个产品内容外的所有内容
       productContents.forEach(function (content, index) {
        if (index !== 0) {
            content.style.display = 'none';
        } else {
            content.style.display = 'flex';
        }
    });
    // 为每个列表项添加点击事件监听器
    listItems.forEach(function (item, index) {
      item.addEventListener('click', function () {
        // 隐藏所有产品内容
        productContents.forEach(function (content) {
          content.style.display = 'none';
        });
  
        // 显示点击的列表项对应的产品内容
        productContents[index].style.display = 'flex';
      });
    });
});