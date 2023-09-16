function main() {
    var spooky = changeMode(9, "bold", "uppercase", "pink", "green");
    var darkMode = changeMode(12, "bold", "capitalize", "black", "white");
    var screamMode = changeMode(12, "normal", "lowercase", "white", "black");

    var paragraph = document.createElement("p");
    paragraph.textContent = "Welcome Holberton!";
    document.body.appendChild(paragraph);

    var spookyButton = document.createElement("button");
    spookyButton.textContent = "Spooky";
    spookyButton.addEventListener("click", spooky);
    document.body.appendChild(spookyButton);

    var darkButton = document.createElement("button");
    darkButton.textContent = "Dark mode";
    darkButton.addEventListener("click", darkMode);
    document.body.appendChild(darkButton);

    var screamButton = document.createElement("button");
    screamButton.textContent = "Scream mode";
    screamButton.addEventListener("click", screamMode);
    document.body.appendChild(screamButton);
}

main();
