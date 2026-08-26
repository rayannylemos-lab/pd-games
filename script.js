const botao = document.getElementById("tema-btn");

if (localStorage.getItem("tema") === "escuro") {
    document.body.classList.add("tema-escuro");
    botao.textContent = "☀️ Tema claro";
}

botao.addEventListener("click", function() {

    document.body.classList.toggle("tema-escuro");

    if (document.body.classList.contains("tema-escuro")) {
        localStorage.setItem("tema", "escuro");
        botao.textContent = "☀️ Tema claro";
    } else {
        localStorage.setItem("tema", "claro");
        botao.textContent = "🌙 Tema escuro";
    }

});
