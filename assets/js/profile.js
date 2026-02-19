$(document).ready(function () {

    let email = localStorage.getItem("userEmail");

    if (!email) {
        window.location.href = "login.html";
        return;
    }

    // 🔹 Fetch existing user data (MySQL + MongoDB)
    $.ajax({
        url: "php/profile.php",
        type: "POST",
        dataType: "json",
        data: { email: email },

        success: function (data) {
            if (data.error) {
                alert(data.error);
                localStorage.removeItem("userEmail");
                window.location.href = "login.html";
                return;
            }

            // Show profile info
            $("#name").text(data.name);
            $("#email").text(data.email);

            // ✅ Autofill form
            $("#inputName").val(data.name);
            $("#age").val(data.age || "");
            $("#contact").val(data.contact || "");
        },

        error: function (xhr, status, error) {
            console.error("AJAX error:", status, error);
            alert("Server error. Check console.");
        }
    });


    // 🔹 Update profile → MongoDB
    $("#saveProfile").click(function () {

        let name = $("#inputName").val().trim();
        let age = $("#age").val().trim();
        let contact = $("#contact").val().trim();

        if (!name || !age || !contact) {
            alert("Please fill all fields");
            return;
        }

        $.ajax({
            url: "php/update_profile.php",
            type: "POST",

            // 🔥 Send JSON (for MongoDB PHP)
            contentType: "application/json",
            dataType: "json",

            data: JSON.stringify({
                user_id: email,
                name: name,
                age: age,
                contact: contact
            }),

            success: function (data) {
                if (data.status === "success") {
                    alert("Profile updated successfully");

                    // Update display name
                    $("#name").text(name);
                } else {
                    alert(data.message || "Update failed");
                }
            },

            error: function (xhr, status, error) {
                console.error("AJAX error:", status, error);
                alert("Server error. Check console.");
            }
        });
    });

});


// 🔹 Logout
function logout() {
    localStorage.removeItem("userEmail");
    window.location.href = "login.html";
}
