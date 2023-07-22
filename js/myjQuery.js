$("document").ready(function () {
  console.log("i am in a new file now.");
  console.log("We are using jQuery!!!");
    $("p").click(function () {
      console.log("Clicked on p.", this);
    });
    $("p").dblclick(function () {
      console.log("Double clicked on p.", this);
    });
    $("p").mouseenter(function () {
      console.log("Entered : ", this);
    });
    $("p").hover(
      function () {
        console.log("Clicked on p.", this);
      },
      function () {
        console.log("Thanks for coming.");
      }
    );
  $('p').click();
  $('#second').click();
  $('.odd').click();
  $('*').click();
  $('p.odd').click();
  $('p:first').click();

  There are basically three selectors out there.
  1. Element selector - $('p').click();
  2. Id selector - $('#second').click();
  3. Class selector - $('.third').click();
  4. Other selectors - $('*').click();
                       $('p.odd').click();
                       $('p.odd').click();
                       $('p:first').click();

  Events in jQuery
  Mouse events = click, dblclick, mouseenter, mouseleave
  KeyboardEvent = keypress, keydown, MediaKeyStatusMap
  form events = submit, change, focus, blur
  document/window events = load, resize, scroll, unload

    $("p").on({
      click: function() {
        console.log("Thanks for clicking", this);
      },
      mouseleave: function () {
        console.log("mouseleave");
      },
    });
    $('#divo').hide(1000, function () {
      console.log("hidden.");
    });
    $('#divo').show(1000, function () {
      console.log("Showed");
    });
    $('#but').click(function () {
      $('#divo').toggle(1000);
    });

    Slide Methods - callback methods
    $('#but').click(function () {
      $('#divo').slideToggle(1000);
    });

  Animation function in jQuery
    $("#divo").animate({ opacity: 0.5, height: '150px', width: '350px' }, "slow");
    $("#divo").animate({ opacity: 0.3 }, 2000);
    $("#divo").animate({ opacity: 0.7 }, 2000);
    $("#divo").animate({ width: "350px" }, 1000);

    $("#ta").val("setting it to Rohan");
    $("#ta").html("setting it to Rohan");
    $("#ta").html("setting it to Rohan3");
    $("#inp").html("setting it to Rhan3");
    $("#inp").val("setting it to Rohan3");
    $("#inp").empty();
    $("#divo").empty();
    $("#divo").text("you are good");

  $("#divo").addClass("myclass");                                         
  $("#divo").addClass("myclass2");
  $("#divo").removeClass("myclass2");
  $("#divo").css("background-color", "red");
  $("#divo").css("background-color");

  $.get('https://code.jquery.com/jquery-3.7.0.min.js', function(data, status) {
    alert:{status};
  })

});
