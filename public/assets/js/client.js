$(function() {

    $(".devoured_form").on("submit", function(event) {
        event.preventDefault();
        const burgerId = $(this).children(".inputId").val();

        $.ajax({
            method: "PUT",
            url: `/burgers/${burgerId}`
        }).then(function() {
            location.reload();
            console.log("end");
        })

    });

});