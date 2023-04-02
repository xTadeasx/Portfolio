var imgArray = [
    'https://static.toprecepty.cz/fotky/images/3/2385-860-484.jpg',
    'https://www.zdrave.cz/media/cache/article_detail/files/img/article/351/000012088223.jpg',
    'https://prima-receptar.cz/wp-content/uploads/2016/05/jahody-zdravi-rozpulene.jpg'
];
var curIndex = 0;
var imgDuration = 5000;

function slideShow() {
    document.getElementById('image1').src = imgArray[curIndex];
    curIndex++;
    if (curIndex == imgArray.length) { curIndex = 0; }
    setTimeout("slideShow()", imgDuration);
}
slideShow();