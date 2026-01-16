// -------- MAIN WEBSITE NAVIGATION --------

// Open Lawyer Login Page
function openLawyer() {
    window.location.href = "lawyer.html";
}

// Open Aam Aadmi Login Page
function openAadmi() {
    window.location.href = "aamaadmi.html";
}
// open update news page
function openUpdates() {
    window.location.href = "updates.html";
}


// Handle card clicks on index page
document.addEventListener("DOMContentLoaded", function () {

    let cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        card.addEventListener("click", function () {

            let title = this.querySelector("h3").innerText;

            if (title === "Lawyer Login") {
                openLawyer();
            }
            else if (title === "Aam Aadmi Login") {
                openAadmi();
            }
            else {
                alert(title + " Clicked!");
            }
        });
    });

});


// -------- COMMON VERIFICATION FUNCTIONS --------

function verifyPhone() {
    alert("OTP Sent to Phone (Demo Verification)");
}

function verifyEmail() {
    alert("Verification Link Sent to Email (Demo Verification)");
}


// -------- LAWYER REGISTRATION LOGIC --------

document.addEventListener("DOMContentLoaded", function () {

    let lawyerForm = document.getElementById("lawyerForm");

    if (lawyerForm) {

        lawyerForm.addEventListener("submit", function (e) {
            e.preventDefault();

            let name = document.getElementById("name").value;
            let phone = document.getElementById("phone").value;
            let email = document.getElementById("email").value;
            let barid = document.getElementById("barid").value;
            let location = document.getElementById("location").value;
            let practice = document.getElementById("practice").value;

            if (name && phone && email && barid && location) {

                document.getElementById("msg").innerHTML =
                    "Registration Successful for " + name +
                    "<br>Field: " + practice +
                    "<br>Location: " + location;

            } else {

                document.getElementById("msg").innerHTML =
                    "Please fill all details correctly";

            }
        });

    }

});


// -------- AAM AADMI REGISTRATION LOGIC --------

document.addEventListener("DOMContentLoaded", function () {

    let aadmiForm = document.getElementById("aadmiForm");

    if (aadmiForm) {

        aadmiForm.addEventListener("submit", function (e) {
            e.preventDefault();

            let name = document.getElementById("jname").value;
            let phone = document.getElementById("jphone").value;
            let email = document.getElementById("jemail").value;
            let location = document.getElementById("jlocation").value;
            let caseType = document.getElementById("jcase").value;

            if (name && phone && email && location) {

                document.getElementById("aadmiMsg").innerHTML =
                    "Registration Successful for " + name +
                    "<br>Case Type: " + caseType +
                    "<br>Location: " + location;

            } else {

                document.getElementById("aadmiMsg").innerHTML =
                    "Please fill all details correctly";

            }
        });

    }

});
