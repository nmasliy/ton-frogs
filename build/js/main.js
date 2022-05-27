window.addEventListener("DOMContentLoaded", (function() {
    !function() {
        const e = document.querySelector("html"), n = document.querySelector(".menu"), t = document.querySelector(".header__burger"), c = document.querySelector(".menu__close");
        let d = !1;
        const i = () => {
            // Активируем меню только на экранах <= 1024
            window.innerWidth <= 1024 && !d ? (d = !0, t.addEventListener("click", o), c.addEventListener("click", r), 
            n.addEventListener("click", (function(e) {
                e.target.closest(".menu__navigation a") && r();
            }))) : window.addEventListener("resize", i);
        };
        function o() {
            n.classList.add("active"), e.classList.add("overflow-hidden");
        }
        function r() {
            n.classList.remove("active"), e.classList.remove("overflow-hidden");
        }
        i();
    }();
}));