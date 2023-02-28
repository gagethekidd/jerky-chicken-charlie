$(function () {
  console.log("bring the wow");


// i have literally no idea how to use an action or anything in here
  counts = 0;

  $("#resetGame").dblclick(function () {
    console.log("double clicked button");
    counts = 0;

    $("span.count").text(counts);
    $("#gameOutput").text("");

    $("#draggable").fadeOut(30).animate({ left: 0 }).fadeIn(30);
  });

  $("#draggable").draggable({
    containment: "#doge-row",
    drag: function () {
      counts++;
      updateCounterStatus(counts);
    },
  });

  function updateCounterStatus(new_count) {


    var game_msg = "";

    if (new_count < 69) {
      game_msg = "Get to a nice number";
    } else if (new_count == 69) {
      game_msg = "Nice";
    } else {
      game_msg = "Too nice";
      $("img").attr(
        "src",
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.eonline.com%2Fnews%2F774181%2F10-best-crying-lebron-james-memes-that-are-currently-breaking-the-internet&psig=AOvVaw3sBuv-1QtHMvl6DnOWO50X&ust=1677653284348000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCODOzdLPt_0CFQAAAAAdAAAAABAE"
      );
    }

    console.table("About to update count", new_count);

    $("#gameOutput").text(game_msg);
    $("span.count").text(new_count);
  }
});

$("p").click(function(){
  $(this).hide();
});
