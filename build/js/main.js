window.addEventListener("DOMContentLoaded", (function() {
    !function() {
        const e = document.querySelector("html"), t = document.querySelector(".menu"), n = document.querySelector(".header__burger"), i = document.querySelector(".menu__close"), c = document.querySelector(".header__overlay");
        let d = !1;
        const s = () => {
            // Активируем меню только на экранах <= 1024
            window.innerWidth <= 1024 && !d ? (d = !0, n.addEventListener("click", o), i.addEventListener("click", l), 
            c.addEventListener("click", l)) : window.addEventListener("resize", s);
        };
        function o() {
            c.style.display = "block", t.style.display = "block", e.classList.add("overflow-hidden"), 
            setTimeout((function() {
                c.classList.add("active"), t.classList.add("active");
            }), 50);
        }
        function l() {
            c.classList.remove("active"), t.classList.remove("active"), e.classList.remove("overflow-hidden"), 
            setTimeout((function() {
                c.style.display = "", t.style.display = "";
            }), 500);
        }
        s();
    }();
}));
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsIiRodG1sIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiJGhlYWRlck1lbnUiLCIkaGVhZGVyQnRuIiwiJGhlYWRlckNsb3NlQnRuIiwiJGhlYWRlck92ZXJsYXkiLCJpc0luaXQiLCJjaGVja1NjcmVlbldpZHRoIiwiaW5uZXJXaWR0aCIsIm9wZW5NZW51IiwiY2xvc2VNZW51Iiwic3R5bGUiLCJkaXNwbGF5IiwiY2xhc3NMaXN0IiwiYWRkIiwic2V0VGltZW91dCIsInJlbW92ZSIsImluaXRNZW51Il0sIm1hcHBpbmdzIjoiQUFBQUEsT0FBT0MsaUJBQWlCLHFCQUFvQjtLQUMzQztRQUNDLE1BQU1DLElBQVFDLFNBQVNDLGNBQWMsU0FDL0JDLElBQWNGLFNBQVNDLGNBQWMsVUFDckNFLElBQWFILFNBQVNDLGNBQWMsb0JBQ3BDRyxJQUFrQkosU0FBU0MsY0FBYyxpQkFDekNJLElBQWlCTCxTQUFTQyxjQUFjO1FBRzlDLElBQUlLLEtBQVM7UUFFYixNQUFNQyxJQUFtQjs7WUFHcEJWLE9BQU9XLGNBRm9CLFNBRXFCRixLQUNuREEsS0FBUyxHQUNUSCxFQUFXTCxpQkFBaUIsU0FBU1csSUFDckNMLEVBQWdCTixpQkFBaUIsU0FBU1k7WUFDMUNMLEVBQWVQLGlCQUFpQixTQUFTWSxNQUV6Q2IsT0FBT0MsaUJBQWlCLFVBQVVTOztRQU1wQyxTQUFTRTtZQUNSSixFQUFlTSxNQUFNQyxVQUFVLFNBQy9CVixFQUFZUyxNQUFNQyxVQUFVLFNBQzVCYixFQUFNYyxVQUFVQyxJQUFJO1lBRXBCQyxZQUFXO2dCQUNWVixFQUFlUSxVQUFVQyxJQUFJLFdBQzdCWixFQUFZVyxVQUFVQyxJQUFJO2dCQUN4Qjs7UUFHSixTQUFTSjtZQUNSTCxFQUFlUSxVQUFVRyxPQUFPLFdBQ2hDZCxFQUFZVyxVQUFVRyxPQUFPLFdBQzdCakIsRUFBTWMsVUFBVUcsT0FBTztZQUV2QkQsWUFBVztnQkFDVlYsRUFBZU0sTUFBTUMsVUFBVSxJQUMvQlYsRUFBWVMsTUFBTUMsVUFBVTtnQkFyQ0w7O1FBaUJ6Qkw7S0F3QkRVIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJ3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcclxuXHRmdW5jdGlvbiBpbml0TWVudSgpIHtcclxuXHRcdGNvbnN0ICRodG1sID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaHRtbCcpXHJcblx0XHRjb25zdCAkaGVhZGVyTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51JylcclxuXHRcdGNvbnN0ICRoZWFkZXJCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19idXJnZXInKVxyXG5cdFx0Y29uc3QgJGhlYWRlckNsb3NlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnVfX2Nsb3NlJylcclxuXHRcdGNvbnN0ICRoZWFkZXJPdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fb3ZlcmxheScpXHJcblx0XHRjb25zdCBUUkFOU0lUSU9OX0RFTEFZID0gNTAwXHJcblxyXG5cdFx0bGV0IGlzSW5pdCA9IGZhbHNlXHJcblxyXG5cdFx0Y29uc3QgY2hlY2tTY3JlZW5XaWR0aCA9ICgpID0+IHtcclxuXHRcdFx0Y29uc3QgTU9CSUxFX01FTlVfQlJFQUtQT0lOVCA9IDEwMjRcclxuXHRcdFx0Ly8g0JDQutGC0LjQstC40YDRg9C10Lwg0LzQtdC90Y4g0YLQvtC70YzQutC+INC90LAg0Y3QutGA0LDQvdCw0YUgPD0gMTAyNFxyXG5cdFx0XHRpZiAod2luZG93LmlubmVyV2lkdGggPD0gTU9CSUxFX01FTlVfQlJFQUtQT0lOVCAmJiAhaXNJbml0KSB7XHJcblx0XHRcdFx0aXNJbml0ID0gdHJ1ZVxyXG5cdFx0XHRcdCRoZWFkZXJCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvcGVuTWVudSlcclxuXHRcdFx0XHQkaGVhZGVyQ2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZU1lbnUpXHJcblx0XHRcdFx0JGhlYWRlck92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZU1lbnUpXHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGNoZWNrU2NyZWVuV2lkdGgpXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRjaGVja1NjcmVlbldpZHRoKClcclxuXHJcblx0XHRmdW5jdGlvbiBvcGVuTWVudSgpIHtcclxuXHRcdFx0JGhlYWRlck92ZXJsYXkuc3R5bGUuZGlzcGxheSA9ICdibG9jaydcclxuXHRcdFx0JGhlYWRlck1lbnUuc3R5bGUuZGlzcGxheSA9ICdibG9jaydcclxuXHRcdFx0JGh0bWwuY2xhc3NMaXN0LmFkZCgnb3ZlcmZsb3ctaGlkZGVuJylcclxuXHJcblx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdCRoZWFkZXJPdmVybGF5LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXHJcblx0XHRcdFx0JGhlYWRlck1lbnUuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcclxuXHRcdFx0fSwgNTApXHJcblx0XHR9XHJcblxyXG5cdFx0ZnVuY3Rpb24gY2xvc2VNZW51KCkge1xyXG5cdFx0XHQkaGVhZGVyT3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxyXG5cdFx0XHQkaGVhZGVyTWVudS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxyXG5cdFx0XHQkaHRtbC5jbGFzc0xpc3QucmVtb3ZlKCdvdmVyZmxvdy1oaWRkZW4nKVxyXG5cclxuXHRcdFx0c2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0JGhlYWRlck92ZXJsYXkuc3R5bGUuZGlzcGxheSA9ICcnXHJcblx0XHRcdFx0JGhlYWRlck1lbnUuc3R5bGUuZGlzcGxheSA9ICcnXHJcblx0XHRcdH0sIFRSQU5TSVRJT05fREVMQVkpXHJcblx0XHR9XHJcblx0fVxyXG5cdGluaXRNZW51KClcclxufSlcclxuIl19
