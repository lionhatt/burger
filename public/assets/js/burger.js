// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
    $(".devour-burger").on("click", function(event) {
        let id = $(this).data("id");

        // Send the PUT request.
        $.ajax(`/api/burgers/${id}`, {
            type: "PUT",
            data: {
                devoured: 1
            }
        }).then(
            function () {
                console.log("change devoured to true");
                // Reload the page to get the updated list
                location.reload();
            }
        )
    });

    $(".create-form").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        $.ajax("/api/burgers", {
            type: "POST",
            data: {
                burger_name: $("#burger_name").val().trim()
            }
        }).then(
            function() {
                console.log("created new burger");
                location.reload();
            }
        )

    })
})