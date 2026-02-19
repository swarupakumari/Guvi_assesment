$("#registerForm").submit(function (e) {
    e.preventDefault();
    alert("Form submitted");   // ADD THIS LINE

    $.ajax({
        url: "/internship-project/php/register.php",
        type: "POST",
        data: $(this).serialize(),
        success: function (response) {
            alert(response);
        }
    });
});
