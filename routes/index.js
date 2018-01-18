var express = require('express');
var router = express.Router();
/* GET home page. */

router.get('/',function(req,res,next){
    res.render("index",{
        title:"Express"
    })
});
/* Страница Джереми Кларксона */
router.get("/Jeremy", function (req, res, next) {
    res.render('hero', {
        title: "Джереми Кларксон",
        picture: "images/Jeremy.jpg",
        about: "Публичная личность"
    })
});
/* Страница Ричерда Хамонда */
router.get("/Richard", function (req, res, next) {
    res.render('hero', {
        title: "Ричерд Хамонд",
        picture: "images/Richard.jpg",
        about: "Домашнее животное"
    })
});
/* Страница Джеймса мея */
router.get("/James", function (req, res, next) {
    res.render('hero', {
        title: "Джеймс мея",
        picture: "images/James.jpg",
        about: "Вымышленный персонаж"
    })
});
/* Страница Второго сезона The Grand Tour */
router.get("/season2", function (req, res, next) {
    res.render('hero', {
        title: "The Grand Tour season 2",
        picture: "images/season2.jpg",
        about: " Итак, до такого долгожданного второго сезона шоу The Grand Tour" +
        " нам остается ждать все меньше и меньше времени – уже через 2,5 недели – 8 декабря" +
        " - мы вновь сможем насладиться любимыми Джереми, Ричардом и Джеймсом" +
        " и их нескончаемыми путешествиями, авариями и спорами. И, дабы еще сильнее" +
        " привлечь наше внимание, Ричард Портер" +
        " – сценарист шоу – решил приоткрыть завесу тайны" +
        " и рассказать, что же ожидает зрителей в новом сезоне. "
    })
});
/* Страница Первого сезона The Grand Tour */
router.get("/season1", function (req, res, next) {
    res.render('hero', {
        title: "The Grand Tour season 1",
        picture: "images/season1.jpg",
        about: " Спустя год работы и примерно миллион миль в" +
        " дороге, наше новое автошоу скоро дебютирует на Amazon Prime," +
        " и почти каждый, кого я встречаю, "
    })
});

    module.exports = router;

