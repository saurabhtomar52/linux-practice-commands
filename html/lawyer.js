function verifyPhone() {
    alert("Phone OTP Sent for Verification (Demo)");
}

function verifyEmail() {
    alert("Email Verification Link Sent (Demo)");
}

document.getElementById("lawyerForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;
    let barid = document.getElementById("barid").value;
    let location = document.getElementById("location").value;
    let practice = document.getElementById("practice").value;

    if(name && phone && email && barid && location) {
        document.getElementById("msg").innerHTML =
        "Registration Successful for " + name;
    } 
    else {
        document.getElementById("msg").innerHTML =
        "Please fill all details";
    }
});
