Barba.Pjax.start();

var curtainA = document.querySelector('.curtain-a');
var curtainB = document.querySelector('.curtain-b');
var curtainC = document.querySelector('.curtain-c');
var curtainD = document.querySelector('.curtain-d');

var ShutterAnimation = Barba.BaseTransition.extend({

  // Barba.jsで定義されている。コンストラクタと考えてよいそうです。
  start: function () {
    this.curtain(400)
      .then(this.newContainerLoading)
      .then(this.finish.bind(this));
  },

  // シャッターが閉まるようなアニメーションをさせる処理
  curtain: function (timer) {
    return new Promise(function (resolve) {
      // クラスを付け替え、移動させる
      console.log("yobareteruyo")
      curtainA.classList.toggle('moved');
      curtainB.classList.toggle('moved');
      curtainC.classList.toggle('moved');
      curtainD.classList.toggle('moved');

      // 画面が黄色く埋まるまで（400ms）待つ
      setTimeout(function () {
        resolve();
      }, timer);

    });
  },

  // アニメーションの終了を示すためにthis.done()を呼ぶことが必須
  finish: function () {
    document.body.scrollTop = 0;
    this.done();
  }

});

Barba.Pjax.getTransition = function () {
  return ShutterAnimation;
};

Barba.Dispatcher.on('newPageReady', function () {
  $(document).ready(function () {

    console.log("ready")
    $('.introduction_anime').each(function (index) {
      $(this).delay($(this).data('delay')).queue(function () {
        $(this).addClass('introanimate-in');
      });
    });

    $('.arc-img').onmouseover(function () {
      $('.title').toggleClass('on');
    });


  });

  $(".hamburger").on('click', function () {
    console.log("click")
    $(".bokasitai").toggleClass("bokasu");
    $(this).toggleClass('open');
    $('.menu-overlay').toggleClass('open');
  })

  $(".cursorbig").on({
    "mouseenter": function () {
      cursor.addClass("is-active");
      follower.addClass("is-active");
    },
    "mouseleave": function () {
      cursor.removeClass("is-active");
      follower.removeClass("is-active");
    }
  });

  var rellax = new Rellax('.rellax');

});
