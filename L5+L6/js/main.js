// 這裡開始寫入JavaScript主程式
//$('CSS選擇器規則') : jQuery選擇器

//============jQuery的解決方案=========
//1. 為.ingredients>li綁定點擊事件
$('.ingredients>li').click(function () {
    //2. 當這個li被點擊時切換它的class="done"
    //.addClass() 為元素新增一個class
    //.removeClass() 為元素移除一個class
    //.toggleClass() 切換class
    $(this).toggleClass('done');
});


//=========原生JavaScript的解決方案=========
// document.querySelectorAll('.ingredients>li').forEach(function (listItem) {
//     listItem.addEventListener('click', function () {
//         this.classList.toggle('done');
//     });
// });