$(function() {
  $(".change-devour").on("click", function(event) {
    var id = $(this).data("id");
    var newdevour = $(this).data("newdevour");

    var newdevourState = {
      devoured: newdevour
    };

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newdevourState
    }).then(
      function() {
        console.log("changed devour to", newdevour);
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    event.preventDefault();

    var newburger = {
      name: $("#burg").val(),
      devoured: $("[name=devoured]:checked").val()
    };

    $.ajax("/api/burgers", {
      type: "POST",
      data: newburger
    }).then(
      function() {
        console.log("created new burger");
        location.reload();
      }
    );
  });

  $(".delete-burger").on("click", function(event) {
    var id = $(this).data("id");

    $.ajax("/api/burgers/" + id, {
      type: "DELETE"
    }).then(
      function() {
        console.log("deleted burger", id);
        location.reload();
      }
    );
  });
});
