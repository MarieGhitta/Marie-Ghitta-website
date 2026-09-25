let menu = document.querySelector(".menuToggle");
let openBtn = document.getElementById("openBtn");
let closeBtn = document.getElementById("close");


// =========================
// MENU
// =========================

function openNav() {
    if (menu) {
        menu.classList.add("active");
    }
}

function closeNav() {
    if (menu) {
        menu.classList.remove("active");
    }
}


// On ajoute les événements seulement
// si les boutons existent sur la page

if (openBtn) {
    openBtn.onclick = openNav;
}

if (closeBtn) {
    closeBtn.onclick = closeNav;
}


window.addEventListener("resize", () => {

    if (window.innerWidth > 975 && menu) {
        menu.classList.remove("active");
    }

});


// =========================
// LANGUES — PAGE VIVALDI
// =========================

const vivaldiTranslations = {

    fr: {

        intro: "Six artistes vous proposent de (re-)découvrir Vivaldi, arrangé pour deux violons, un alto, un violoncelle, une contrebasse et… une guitare ! Un défi de taille, avec des musiciens de talent qui vous offriront des interprétations aussi épurées que chaleureuses dans des versions inédites.",

        programme: "Programme",

        work1: "Concerto pour cordes en ré majeur",
        work2: "Concerto pour cordes en fa mineur",
        work3: "Concerto pour cordes en sol mineur",
        work4: "Concerto pour luth en ré majeur",
        work5: "Les Quatre Saisons",

        violin: "violon",
        guitar: "guitare",
        viola: "alto",
        cello: "violoncelle",
        doubleBass: "contrebasse",

        download: "Télécharger"
    },


    nl: {

        intro: "Zes artiesten nodigen u uit om Vivaldi (opnieuw) te ontdekken, gearrangeerd voor twee violen, een altviool, een cello, een contrabas en… een gitaar! Een flinke uitdaging, met getalenteerde muzikanten die u zowel verfijnde als warme interpretaties bieden in deze volledig nieuwe arrangementen.",

        programme: "Programma",

        work1: "Concerto voor strijkers in D groot",
        work2: "Concerto voor strijkers in f klein",
        work3: "Concerto voor strijkers in g klein",
        work4: "Luitconcerto in D groot",
        work5: "De Vier Jaargetijden",

        violin: "viool",
        guitar: "gitaar",
        viola: "altviool",
        cello: "cello",
        doubleBass: "contrabas",

        download: "Downloaden"
    },


    en: {

        intro: "Six artists invite you to (re-)discover Vivaldi, arranged for two violins, a viola, a cello, a double bass, and… a guitar! A formidable challenge, with talented musicians offering refined yet warm interpretations in these brand-new arrangements.",

        programme: "Programme",

        work1: "Concerto for strings in D major",
        work2: "Concerto for strings in F minor",
        work3: "Concerto for strings in G minor",
        work4: "Lute Concerto in D major",
        work5: "The Four Seasons",

        violin: "violin",
        guitar: "guitar",
        viola: "viola",
        cello: "cello",
        doubleBass: "double bass",

        download: "Download"
    }

};


// =========================
// CHANGEMENT DE LANGUE
// =========================

function setVivaldiLanguage(lang) {

    const translations = vivaldiTranslations[lang];

    if (!translations) {
        return;
    }

    document.documentElement.lang = lang;


    document.querySelectorAll("[data-i18n]").forEach((element) => {

        const key = element.dataset.i18n;

        if (translations[key]) {
            element.textContent = translations[key];
        }

    });


    document.querySelectorAll(".language-switcher button").forEach((button) => {

        button.classList.toggle(
            "active",
            button.dataset.lang === lang
        );

    });


    localStorage.setItem("vivaldi-language", lang);
}


// =========================
// BOUTONS FR / NL / EN
// =========================

const languageButtons =
    document.querySelectorAll(".language-switcher button");


languageButtons.forEach((button) => {

    button.addEventListener("click", () => {

        setVivaldiLanguage(button.dataset.lang);

    });

});


// =========================
// LANGUE INITIALE
// =========================

const savedLanguage =
    localStorage.getItem("vivaldi-language");


if (languageButtons.length > 0) {

    setVivaldiLanguage(
        savedLanguage && vivaldiTranslations[savedLanguage]
            ? savedLanguage
            : "fr"
    );

}