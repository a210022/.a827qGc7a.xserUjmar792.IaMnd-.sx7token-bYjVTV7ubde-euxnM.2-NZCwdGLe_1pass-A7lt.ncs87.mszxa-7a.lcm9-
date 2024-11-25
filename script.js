$(document).on('turbolinks:load', function(){
  var circle       = $("#circle");
  var start_button = $("#start");
  var stop_button  = $("#stop");
  var reset_button = $("#reset");

  //初期状態ではリセットボタンを非表示、ストップボタンをクリック不可にしておく
  reset_button.css("display", "none");
  stop_button.prop("disabled", true);

  // スタートボタンを押した時の処理
  start_button.on("click", function () {
    //スタートボタンをクリック不可、ストップボタンをクリック可能にする
    $(this).prop("disabled", true);
    stop_button.prop("disabled", false);
    //ルーレット盤に .rotate を付与
    circle.addClass("rotate");
  });

  // ストップボタンを押した時の処理
  stop_button.on("click",function () {
    //ルーレット盤に .stop を付与
    circle.addClass("stop");
    //リセットボタンを表示、スタートボタンを非表示にする
    reset_button.css("display", "inline-block");
    start_button.css("display", "none");
  });

  // リセットボタンを押した時の処理
  reset_button.on("click",function () {
    //ルーレット盤から .rotate と .stop を取り除く
    circle.removeClass("rotate");
    circle.removeClass("stop");
    //リセットボタンを非表示、スタートボタンを表示
    reset_button.css("display", "none");
    start_button.css("display", "inline-block");
    //スタートボタンをクリック可、ストップボタンをクリック不可にする
    start_button.prop("disabled", false);
    stop_button.prop("disabled", true);
  });
});
