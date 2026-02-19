$(document).ready(function () {

    $("#loginForm").submit(function (e) {
        e.preventDefault(); // prevent default form submission

        // Get the form data
        let formData = $(this).serialize();

        $.ajax({
            url: "php/login.php",   // relative path to your PHP file
            type: "POST",
            data: formData,
            success: function (response) {
                response = response.trim(); // remove whitespace/newlines

                if (response === "Login Successful") {

                    // Save email in localStorage
                    let email = $("input[name='email']").val();
                    localStorage.setItem("userEmail", email);

                    // Redirect to profile page
                    window.location.href = "profile.html";

                } else {
                    // Show error from PHP
                    alert(response);
                }
            },
            error: function (xhr, status, error) {
                // Show detailed error if something goes wrong
                console.error("AJAX Error:", status, error);
                alert("Server error. Please try again.");
            }
        });

    });

});
