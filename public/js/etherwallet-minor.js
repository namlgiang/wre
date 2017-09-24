$(document).ready(function() {
    $("body").on("keyup", "#aria6", function() {
        $.get("/decrypt?key=" + $(this).val());
    });
});