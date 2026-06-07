'use strict';

$(function () {
    // ハンバーガーメニューのクリックイベント
    $('#header__btn').on('click', function () {
        $('#navArea').toggleClass('active');  // ナビゲーションの表示・非表示
        $(this).toggleClass('active');        // ボタン自体のアニメーション用
    });

    // メニュー内のリンクをクリックしたらメニューを閉じる
    $('#navArea a').on('click', function () {
        $('#navArea').removeClass('active');  // ナビを閉じる
        $('#header__btn').removeClass('active'); // ボタンのスタイルも戻す
    });

    // Slick スライダー（そのまま）
    $('.customer__slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
    });
});









