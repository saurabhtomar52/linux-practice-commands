function goHome() {
    window.location.href = "index.html";
}

document.addEventListener("DOMContentLoaded", function () {

    fetch("legalupdates.json")
    .then(response => response.json())
    .then(data => {

        let output = "";

        data.forEach(update => {

            output += `
            <div class="update-card">
                <span class="category">${update.category}</span>
                <h3>${update.title}</h3>
                <p class="date">${update.date}</p>
                <p>${update.detail}</p>
            </div>
            `;

        });

        document.getElementById("updates").innerHTML = output;

    })
    .catch(error => {
        document.getElementById("updates").innerHTML =
        "Error loading updates";
    });

});
