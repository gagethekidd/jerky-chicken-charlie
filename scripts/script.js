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
        "https://akns-images.eonline.com/eol_images/Entire_Site/2016520/rs_1024x759-160620132133-1024.LeBron-James-NBA-Winner.ms.062016.jpg?fit=around%7C1024:759&output-quality=90&crop=1024:759;center,top"
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
