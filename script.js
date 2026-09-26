/* =====================================================
   CARL KHIAN W. AGUIRRE
   PERSONAL CV - JAVASCRIPT
   ===================================================== */


/* ================= MOBILE MENU ================= */

const menuBtn =
    document.getElementById("menuBtn");

const navMenu =
    document.getElementById("navMenu");

const navLinks =
    document.querySelectorAll(".nav-link");


menuBtn.addEventListener("click", function () {

    navMenu.classList.toggle("open");

    if (navMenu.classList.contains("open")) {

        menuBtn.textContent = "✕";

    } else {

        menuBtn.textContent = "☰";

    }

});


/* Close menu after clicking navigation */

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navMenu.classList.remove("open");

        menuBtn.textContent = "☰";

    });

});



/* ================= ACTIVE NAVIGATION ================= */

const sections =
    document.querySelectorAll("section[id]");


function updateActiveLink() {

    const scrollPosition =
        window.scrollY + 180;


    sections.forEach(function (section) {

        const sectionTop =
            section.offsetTop;

        const sectionHeight =
            section.offsetHeight;

        const sectionId =
            section.getAttribute("id");


        if (
            scrollPosition >= sectionTop &&
            scrollPosition <
            sectionTop + sectionHeight
        ) {

            navLinks.forEach(function (link) {

                link.classList.remove("active");


                if (
                    link.getAttribute("href") ===
                    "#" + sectionId
                ) {

                    link.classList.add("active");

                }

            });

        }

    });

}


window.addEventListener(
    "scroll",
    updateActiveLink
);



/* ================= HEADER ================= */

const header =
    document.getElementById("header");


function updateHeader() {

    if (window.scrollY > 40) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

}


window.addEventListener(
    "scroll",
    updateHeader
);



/* ================= REVEAL ANIMATION ================= */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "show"
                    );

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(function (element) {

    revealObserver.observe(element);

});



/* ================= SKILL BARS ================= */

const progressBars =
    document.querySelectorAll(
        ".progress-bar"
    );


const skillObserver =
    new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    const bar =
                        entry.target;

                    const width =
                        bar.getAttribute(
                            "data-width"
                        );

                    bar.style.width = width;

                    skillObserver.unobserve(bar);

                }

            });

        },
        {
            threshold: 0.5
        }
    );


progressBars.forEach(function (bar) {

    skillObserver.observe(bar);

});



/* ================= DARK MODE ================= */

const themeBtn =
    document.getElementById("themeBtn");


themeBtn.addEventListener(
    "click",
    function () {

        document.body.classList.toggle("dark");


        if (
            document.body.classList.contains(
                "dark"
            )
        ) {

            themeBtn.textContent = "☀";

            localStorage.setItem(
                "theme",
                "dark"
            );

        } else {

            themeBtn.textContent = "☾";

            localStorage.setItem(
                "theme",
                "light"
            );

        }

    }
);



/* ================= LOAD SAVED THEME ================= */

const savedTheme =
    localStorage.getItem("theme");


if (savedTheme === "dark") {

    document.body.classList.add("dark");

    themeBtn.textContent = "☀";

}



/* ================= PRINT CV ================= */

function printCV() {

    window.print();

}



/* ================= INITIALIZE ================= */

updateHeader();

updateActiveLink();
