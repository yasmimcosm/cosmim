    const btn = document.getElementById("menu-btn");
    const menu = document.querySelector(".header__menu");

    btn.addEventListener("click", () => {
        menu.classList.toggle("ativo");
        btn.textContent = menu.classList.contains("ativo") ? "✕" : "☰";
    });

    document.querySelectorAll(".header__menu a").forEach(link => {
        link.addEventListener("click", () => {
            menu.classList.remove("ativo");
            btn.textContent = "☰";
        });
    });
