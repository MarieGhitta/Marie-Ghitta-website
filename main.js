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

// =====================================================
// NAVIGATION
// =====================================================

const navigationTranslations = {

    fr: {
        navHome: "Accueil",
        navBio: "Biographie",
        navProjects: "Projets",
        navDiscography: "Discographie",
        navAgenda: "Agenda",
        navContact: "Contact"
    },

    nl: {
        navHome: "Home",
        navBio: "Biografie",
        navProjects: "Projecten",
        navDiscography: "Discografie",
        navAgenda: "Agenda",
        navContact: "Contact"
    },

    en: {
        navHome: "Home",
        navBio: "Biography",
        navProjects: "Projects",
        navDiscography: "Discography",
        navAgenda: "Agenda",
        navContact: "Contact"
    }
};


function setNavigationLanguage(lang) {

    const translations = navigationTranslations[lang];

    if (!translations) return;

    document.querySelectorAll("[data-i18n^='nav']").forEach((element) => {

        const key = element.dataset.i18n;

        if (translations[key]) {
            element.textContent = translations[key];
        }

    });
}

// =====================================================
// LANGUES — PAGE VIVALDI
// =====================================================

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

    setNavigationLanguage(lang);
}


// =====================================================
// LANGUES — PAGE HOME
// =====================================================

const homeTranslations = {

    fr: {

        instrument: "Altiste",

        quote: `"La musique est un langage universel, sans frontières ni barrières, capable de relier les âmes à travers le temps, l’espace et les différences."`,

        bio1: "Après s’être formée dans les conservatoires royaux de Bruxelles, auprès de Thérèse-Marie Gilissen, Paul De Clerck et Vincent Hepp, Marie s’est rapidement investie dans des projets originaux.",

        bio2: "Elle aime casser les barrières entre les différents genres et styles musicaux, explorant les possibilités offertes par des univers musicaux variés.",

        bio3: "Son contact auprès de professeurs tels que Guy Danel, Shirly Laub et Kris Defoort lui a donné les outils d’ouverture et de perfectionnement nécessaires.",

        bio4: "Cette ouverture lui permet de construire un parcours en renouvellement constant, au gré des projets, des rencontres et des expériences musicales."
    },

    nl: {

        instrument: "Altvioliste",

        quote: `"Muziek is een universele taal, zonder grenzen of barrières, die zielen door tijd, ruimte en verschillen heen met elkaar kan verbinden."`,

        bio1: "Na haar opleiding aan de Koninklijke Conservatoria van Brussel, bij Thérèse-Marie Gilissen, Paul De Clerck en Vincent Hepp, legde Marie zich al snel toe op originele projecten.",

        bio2: "Ze houdt ervan de grenzen tussen verschillende muziekgenres en -stijlen te doorbreken en de mogelijkheden van uiteenlopende muzikale werelden te verkennen.",

        bio3: "Haar samenwerking met docenten zoals Guy Danel, Shirly Laub en Kris Defoort gaf haar de nodige instrumenten om zich verder te ontwikkelen en haar muzikale blik te verruimen.",

        bio4: "Deze openheid stelt haar in staat een voortdurend vernieuwend parcours uit te bouwen, naargelang de projecten, ontmoetingen en muzikale ervaringen."
    },

    en: {

        instrument: "Violist",

        quote: `"Music is a universal language, without borders or barriers, capable of connecting souls across time, space and differences."`,

        bio1: "After studying at the Royal Conservatories of Brussels with Thérèse-Marie Gilissen, Paul De Clerck and Vincent Hepp, Marie quickly became involved in original projects.",

        bio2: "She enjoys breaking down the boundaries between different musical genres and styles, exploring the possibilities offered by a wide range of musical worlds.",

        bio3: "Her work with teachers such as Guy Danel, Shirly Laub and Kris Defoort gave her the tools she needed to broaden her horizons and further develop her musicianship.",

        bio4: "This openness allows her to build a constantly evolving artistic journey, shaped by projects, encounters and musical experiences."
    }

};


function setHomeLanguage(lang) {

    const translations = homeTranslations[lang];

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

    localStorage.setItem("home-language", lang);

    setNavigationLanguage(lang);

}

// =====================================================
// LANGUES — PAGE BIOGRAPHIE
// =====================================================

const bioTranslations = {

    fr: {
        intro: "A l’âge de trois ans et demi, Marie commence la musique. Son attirance pour les fréquences graves la pousse à choisir l’alto comme instrument définitif.",

        formation: "Formation",

        formationText: "Voulant faire de sa passion son métier, Marie entre au Conservatoire Royal de Bruxelles où elle obtient sa licence avec distinction dans la classe de Thérèse-Marie Gilissen. Elle poursuit ses études au Koninklijk Conservatorium van Brussel dans la classe de Paul de Clerck où elle obtient son master avec distinction puis se perfectionne dans la classe de Vincent Hepp au Conservatoire Royal de Bruxelles où elle obtient un second master. Marie participe à des master classes notamment avec le quatuor Prazack, ainsi que les altistes Thomas Ribble et Tabea Zimmerman. Marie a fait partie du quatuor Akhtamar puis du quatuor Arca, ainsi que de l'ensemble PasSages de 2013 à 2017 et a intégré les Young Belgian Strings de 2014 à 2017.",

        openness: "Ouverture",

        opennessText: "Elle élargit ses horizons en suivant le cours d'improvisation libre de Kris Defoort grâce auquel elle rencontre un noyau de musiciens avec lesquels elle crée et joue régulièrement. En faisant partie d'un ensemble de musique folk, elle fera de nombreuses master classes à travers l'Europe afin de découvrir la musique des balkans, klezmer et orientale. De la diversité de ses intérêts naquit le Duo Dilemme dont le but est de transmettre à tout public les bienfaits de la musique classique ainsi que de la musique populaire.",

        career: "Parcours",

        careerText: "Depuis 2016, Marie a joué dans différents orchestres et ensembles classiques tels que : Orchestre National de Belgique, Brussels Chamber Orchestra, Orchestre du Festival Musiq’3, La Chapelle Sauvage, Nuove Musiche, La Chapelle Musicale de Tournai, Orchestre de Chambre de Bruges, Ataneres, l’orchestre de la Fondation Grumiaux, sextuor Vivaldi (Camille Babut du Marès, Maarten Vandenbemden). Marie est alto solo/cheffe de pupitre de l’orchestre SymphoniaAssai et de l’orchestre du XXIe siècle. Marie joue également dans des ensembles originaux alliant musique classique et autres genres, notamment aux côtés de Pauline Leblond dans le Pauline Leblond Double Quartet, Lorenzo Di Maio Trio avec le quatuor UFO (quatuor créé par Fabian Fiorini), Free Desmyster dans le projet « Takenouchi Document’s », Olivier Thomas dans le projet « Sans voix en l’air », Angelo Grégorio avec les projets « DAS700 » et « Orchestra Limadou », Fil Caporali dans le trio « Moon Souvenirs », Driss El Maloumi avec le Watar Quintet associé au Driss El Maloumi Trio, Veda Bartringer dans « Veda & The String Machine », Pavel Tchikov et son projet électro « SOPA BOBA ». Marie s’est produite dans les comédies musicales « La mélodie du bonheur » et « Le Magicien d’Oz » au sein de la compagnie Ars Lyrica. Marie a rejoint l’orchestre The Atomic Orchestra en 2025, avec lequel elle a participé au festival Pukkelpop ainsi qu’à l’émission télévisée de la VRT « Live Live Live! ». Marie joue également avec le célèbre groupe de doom metal AMENRA dans leur formule acoustique.",

        creation: "Création",

        creationText: "Depuis 2022, Marie est à l’initiative d’un projet à la croisée des univers classique et jazz : Bluesy Mary. Marie est à l’origine d’un projet jeune public, « Le grenier de Madame Léon », avec Camille Babut de Marès au violon."
    },

    nl: {
        intro: "Op drieënhalfjarige leeftijd begint Marie met muziek. Haar aantrekkingskracht tot lage frequenties brengt haar ertoe om de altviool als haar definitieve instrument te kiezen.",

        formation: "Opleiding",

        formationText: "Omdat ze van haar passie haar beroep wil maken, gaat Marie naar het Koninklijk Conservatorium Brussel, waar ze met onderscheiding haar bachelor behaalt in de klas van Thérèse-Marie Gilissen. Vervolgens zet ze haar studies voort aan het Koninklijk Conservatorium van Brussel in de klas van Paul de Clerck, waar ze met onderscheiding haar master behaalt. Daarna vervolmaakt ze zich bij Vincent Hepp aan het Koninklijk Conservatorium Brussel, waar ze een tweede master behaalt. Marie volgt masterclasses, onder meer met het Prazack Quartet en de altviolisten Thomas Ribble en Tabea Zimmerman. Ze maakte deel uit van het Akhtamar Quartet en vervolgens van het Arca Quartet, van ensemble PasSages van 2013 tot 2017 en van de Young Belgian Strings van 2014 tot 2017.",

        openness: "Openheid",

        opennessText: "Ze verruimt haar horizon door de cursus vrije improvisatie van Kris Defoort te volgen, waardoor ze een groep muzikanten ontmoet met wie ze regelmatig creëert en speelt. Als lid van een folkensemble volgt ze talrijke masterclasses in heel Europa om kennis te maken met Balkan-, klezmer- en Oosterse muziek. Uit de diversiteit van haar interesses ontstaat het Duo Dilemme, met als doel de voordelen van zowel klassieke als populaire muziek toegankelijk te maken voor een breed publiek.",

        career: "Parcours",

        careerText: "Sinds 2016 speelde Marie in verschillende klassieke orkesten en ensembles, waaronder: Orchestre National de Belgique, Brussels Chamber Orchestra, Orchestre du Festival Musiq’3, La Chapelle Sauvage, Nuove Musiche, La Chapelle Musicale de Tournai, Orchestre de Chambre de Bruges, Ataneres, het orkest van de Fondation Grumiaux en het Vivaldi-sextet (Camille Babut du Marès, Maarten Vandenbemden). Marie is solo-altvioliste en aanvoerder van de altvioolgroep van het orkest SymphoniaAssai en het orkest van de XXIe eeuw. Ze speelt ook in originele ensembles die klassieke muziek combineren met andere genres, onder meer met Pauline Leblond in het Pauline Leblond Double Quartet, Lorenzo Di Maio Trio met het UFO Quartet (opgericht door Fabian Fiorini), Free Desmyster in het project « Takenouchi Document’s », Olivier Thomas in het project « Sans voix en l’air », Angelo Grégorio met de projecten « DAS700 » en « Orchestra Limadou », Fil Caporali in het trio « Moon Souvenirs », Driss El Maloumi met het Watar Quintet in combinatie met het Driss El Maloumi Trio, Veda Bartringer in « Veda & The String Machine », en Pavel Tchikov met zijn elektroproject « SOPA BOBA ». Marie trad op in de musicals « La mélodie du bonheur » en « Le Magicien d’Oz » binnen het gezelschap Ars Lyrica. In 2025 sloot Marie zich aan bij The Atomic Orchestra, waarmee ze deelnam aan het festival Pukkelpop en aan het VRT-televisieprogramma « Live Live Live! ». Marie speelt ook met de bekende doommetalband AMENRA in hun akoestische bezetting.",

        creation: "Creatie",

        creationText: "Sinds 2022 staat Marie aan de basis van een project op het kruispunt van klassieke muziek en jazz: Bluesy Mary. Ze is ook de initiatiefneemster van een project voor een jong publiek, « Le grenier de Madame Léon », samen met Camille Babut de Marès op viool."
    },

    en: {
        intro: "At the age of three and a half, Marie began studying music. Her attraction to low frequencies led her to choose the viola as her instrument of choice.",

        formation: "Training",

        formationText: "Wanting to turn her passion into a profession, Marie entered the Royal Conservatory of Brussels, where she obtained her bachelor's degree with distinction in the class of Thérèse-Marie Gilissen. She continued her studies at the Royal Conservatory of Brussels with Paul de Clerck, obtaining her master's degree with distinction, and then furthered her studies with Vincent Hepp at the Royal Conservatory of Brussels, where she obtained a second master's degree. Marie has taken part in masterclasses with, among others, the Prazack Quartet, as well as violists Thomas Ribble and Tabea Zimmerman. She was a member of the Akhtamar Quartet and later the Arca Quartet, as well as the PasSages ensemble from 2013 to 2017 and the Young Belgian Strings from 2014 to 2017.",

        openness: "Broadening Horizons",

        opennessText: "She broadened her horizons by taking Kris Defoort's free improvisation course, through which she met a group of musicians with whom she regularly creates and performs. As a member of a folk ensemble, she attended numerous masterclasses throughout Europe to discover Balkan, klezmer and Eastern music. From the diversity of her interests emerged Duo Dilemme, whose aim is to share the benefits of both classical and popular music with a wide audience.",

        career: "Career",

        careerText: "Since 2016, Marie has performed with various classical orchestras and ensembles, including: Orchestre National de Belgique, Brussels Chamber Orchestra, Orchestre du Festival Musiq’3, La Chapelle Sauvage, Nuove Musiche, La Chapelle Musicale de Tournai, Orchestre de Chambre de Bruges, Ataneres, the Fondation Grumiaux orchestra and the Vivaldi sextet (Camille Babut du Marès, Maarten Vandenbemden). Marie is principal viola of SymphoniaAssai and the orchestra of the XXIe siècle. She also performs in original ensembles combining classical music with other genres, including with Pauline Leblond in the Pauline Leblond Double Quartet, Lorenzo Di Maio Trio with the UFO Quartet (founded by Fabian Fiorini), Free Desmyster in the project « Takenouchi Document’s », Olivier Thomas in the project « Sans voix en l’air », Angelo Grégorio with the projects « DAS700 » and « Orchestra Limadou », Fil Caporali in the trio « Moon Souvenirs », Driss El Maloumi with the Watar Quintet associated with the Driss El Maloumi Trio, Veda Bartringer in « Veda & The String Machine », and Pavel Tchikov with his electro project « SOPA BOBA ». Marie has performed in the musicals « La mélodie du bonheur » and « Le Magicien d’Oz » with the Ars Lyrica company. In 2025, Marie joined The Atomic Orchestra, with which she performed at the Pukkelpop festival and on the VRT television programme « Live Live Live! ». Marie also performs with the renowned doom metal band AMENRA in their acoustic format.",

        creation: "Creation",

        creationText: "Since 2022, Marie has been behind a project at the crossroads of classical music and jazz: Bluesy Mary. She is also the creator of a project for young audiences, « Le grenier de Madame Léon », with Camille Babut de Marès on violin."
    }
};


function setBioLanguage(lang) {

    const translations = bioTranslations[lang];

    if (!translations) return;

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

    localStorage.setItem("bio-language", lang);

    setNavigationLanguage(lang);
}

// =====================================================
// LANGUES — PAGE PROJETS
// =====================================================

const projetsTranslations = {

    fr: {
        classical: "Classique",
        fourSeasonsText: "Six artistes vous proposent de (re-)découvrir cette œuvre, arrangée pour l’occasion pour deux violons, un alto, un violoncelle, une contrebasse et… une guitare ! Un défi de taille, avec des musiciens de talent qui vous offriront une interprétation aussi épurée que chaleureuse dans une version inédite.",

        classicalJazz: "Classique & Jazz",

        bluesyMaryText: "Bluesy Mary est un projet à la croisée des mondes classique et jazz, ayant la particularité d'avoir comme point de départ, en grande partie, des chants issus du répertoire classique. Cette fusion est rendue profonde et subtile par le lien entre le jeu de célèbres musiciens jazz et les spécificités de chaque morceau classique. Ainsi, par exemple, le jeu de Bill Evans se lie à « la Méditation de Thaïs » de Massenet, les balades de Nat King Cole à « Après un rêve » de Fauré. Le tout étant de rendre ces deux mondes accessibles à tous par le biais de sonorités et thèmes inscrits dans le conscient et/ou l'inconscient collectif.",

        paulineLeblondText: "Le double quartet trouve ses racines quelque part entre Duke Ellington et Johann Sebastian Bach, ou peut-être entre Miles Davis et Henry Purcell. Le Pauline Leblond Double Quartet est une famille de huit musiciens, qui ont construit des ponts entre le jazz et la musique baroque. C’est un subtil mélange entre un quatuor à cordes et un quatuor de jazz, qui tantôt s’opposent, tantôt fusionnent. Ensemble, ils jouent des compositions originales de la trompettiste Pauline Leblond. Les contrastes de timbres, de couleurs et de sons rappellent des images oniriques, voire cinématographiques.",

        vedaText: "Pour ce projet, la musicienne et compositrice Veda Bartringer vise à chercher des nouvelles sonorités en incluant un quatuor à cordes à côté du quartet. Les compositions sont un mélange entre musique classique et jazz. Il est important pour la musicienne d'inclure le savoir en musique classique qu'elle a acquise au conservatoire avant et pendant ses études en musique jazz. La musique classique représente le début de la carrière pour la musicienne : elle a pris des cours d'harmonie, de contrepoint, d'arrangement et étant professionnelle aujourd'hui, elle veut inclure ce savoir dans les nouvelles compositions.",

        moonSouvenirsText: "Le trio de cordes Moon Souvenirs mélange délicatement des morceaux composés avec des moments d’improvisation, créant un paysage sonore magique et émouvant. A l’occasion de ce concert, le groupe présente « Memory Log Suite », leur premier opus. Cet album est un hommage au pouvoir des souvenirs et aux émotions qu'ils évoquent. Ancré dans le classique et le jazz mais s’imprégnant d'autres influences telles que la musique folk, brésilienne et rock, chaque morceau de cet album est un voyage à travers différentes pensées et sentiments, comme une errance sur la Lune.",

        arcoText: "Le guitariste Lorenzo Di Maio (Octave de la musique en 2017) nous revient avec une formule classique du trio contrebasse-batterie-guitare à laquelle il joint un quatuor à cordes. Cette association offre à sa musique une combinaison de couleurs et de textures sonores immensément riches. Agrémenté de la poésie de ses interprètes, le groupe dévoile un répertoire aux ambiances contrastées qui crée une passerelle entre la pureté acoustique des cordes et les atmosphères électriques de la guitare.",

        classicalWorld: "Classique & World Music",

        detailsText: "Le « magicien du oud » marocain originaire d’Agadir Driss El Maloumi qui s’accompagne ici de ses deux percussionnistes Saïd El Maloumi et de Lahoucine Baqir pour ce projet, réunit cinq musiciens belges pour concevoir un univers musical alliant le classique européen à la musique arabe ! Le Watar Quintet qui est composé de Amèle Metlini (1er violon), Silvia Bazantova (2e violon), Marie Ghitta (alto), Annemie Osborne (violoncelle) et d’Adrien Tyberghein (contrebasse) apporte ainsi tout l’univers des cordes classiques aux percussions et surtout au oud, cet instrument à cordes pincées répandu dans les pays arabes, en Arménie ou en Grèce.",

        classicalElectro: "Classique & Électro",

        sopaText: "Projet belgo-néerlandais porté par G.W.Sok (The Ex), Jean Vangeebergen (dramaturge) et par Pavel Tchikov (Ogives), celui-ci se décline en une étonnante combinaison entre lignes de synthés et travail d’un quatuor à cordes sans oublier du spoken word (narration, lecture) ! Le premier album de ce concept est basé sur le texte éponyme de l’autrice moldave Nicoleta Esinencu. Son adaptation musicale et narrative de cet écrit surprend tout d’abord par des sons industriels et des effluves synthétiques ! Ensuite, les instruments à cordes entrent en action puis arrive la narration, qui complète un tableau sonore étonnant voire surprenant.",

        classicalYouth: "Classique & Jeunesse",

        leonText: "Madame Léon, professeure de musique excentrique, se trompe de salle et se retrouve face à un public à qui elle croit devoir donner une conférence sérieuse. Seulement voilà : cet auditoire est venu assister à un spectacle et de fait, elle décide de rester et de lui partager sa passion pour la musique. Munie de sa baguette de chef d’orchestre et de sa montre magique, elle entraîne alors les petits dans un voyage dans le temps, empli d’humour, de fantaisie… et bien sûr de musique !"
    },

    nl: {
        classical: "Klassiek",
        fourSeasonsText: "Zes artiesten nodigen u uit om dit werk opnieuw te ontdekken, voor deze gelegenheid gearrangeerd voor twee violen, een altviool, een cello, een contrabas en… een gitaar! Een flinke uitdaging, met getalenteerde muzikanten die u een verfijnde en warme interpretatie bieden in een volledig nieuwe versie.",

        classicalJazz: "Klassiek & Jazz",

        bluesyMaryText: "Bluesy Mary is een project op het kruispunt van de klassieke muziek en jazz, met als bijzonder uitgangspunt voornamelijk liederen uit het klassieke repertoire. Deze fusie wordt diepgaand en subtiel door de verbinding tussen het spel van beroemde jazzmuzikanten en de specifieke kenmerken van elk klassiek werk. Zo wordt bijvoorbeeld het spel van Bill Evans verbonden met « La Méditation de Thaïs » van Massenet en de ballads van Nat King Cole met « Après un rêve » van Fauré. Het doel is om deze twee werelden toegankelijk te maken voor iedereen via klanken en thema’s die in het collectieve bewustzijn en/of onderbewustzijn aanwezig zijn.",

        paulineLeblondText: "Het double quartet vindt zijn wortels ergens tussen Duke Ellington en Johann Sebastian Bach, of misschien tussen Miles Davis en Henry Purcell. Het Pauline Leblond Double Quartet is een familie van acht muzikanten die bruggen hebben gebouwd tussen jazz en barokmuziek. Het is een subtiele mix van een strijkkwartet en een jazzkwartet, die elkaar soms tegenoverstaan en soms samensmelten. Samen spelen ze originele composities van trompettiste Pauline Leblond. De contrasten in timbres, kleuren en klanken roepen dromerige, soms zelfs filmische beelden op.",

        vedaText: "Voor dit project gaat muzikante en componiste Veda Bartringer op zoek naar nieuwe klanken door naast het kwartet een strijkkwartet te plaatsen. De composities zijn een mix van klassieke muziek en jazz. Voor de muzikante is het belangrijk om haar kennis van klassieke muziek, die ze aan het conservatorium heeft opgedaan vóór en tijdens haar jazzstudies, hierin te verwerken. Klassieke muziek vormt het begin van haar carrière: ze volgde lessen harmonie, contrapunt en arrangement en wil deze kennis vandaag als professionele muzikante integreren in haar nieuwe composities.",

        moonSouvenirsText: "Het strijktrio Moon Souvenirs combineert op subtiele wijze gecomponeerde stukken met momenten van improvisatie, waardoor een magisch en ontroerend klanklandschap ontstaat. Tijdens dit concert presenteert de groep « Memory Log Suite », hun eerste album. Dit album is een eerbetoon aan de kracht van herinneringen en aan de emoties die ze oproepen. Geworteld in klassieke muziek en jazz, maar beïnvloed door folk, Braziliaanse en rockmuziek, is elk nummer van dit album een reis door verschillende gedachten en gevoelens, als een zwerftocht op de maan.",

        arcoText: "Gitarist Lorenzo Di Maio (Octave de la musique in 2017) keert terug met een klassieke bezetting van contrabas, drums en gitaar, waaraan hij een strijkkwartet toevoegt. Deze combinatie biedt zijn muziek een immens rijke mix van kleuren en klanktexturen. Met de poëzie van zijn vertolkers onthult de groep een repertoire met contrasterende sferen, dat een brug vormt tussen de akoestische puurheid van de strijkers en de elektrische sfeer van de gitaar.",

        classicalWorld: "Klassiek & Wereldmuziek",

        detailsText: "De Marokkaanse « tovenaar van de oed » Driss El Maloumi, afkomstig uit Agadir, die hier wordt begeleid door zijn twee percussionisten Saïd El Maloumi en Lahoucine Baqir, brengt voor dit project vijf Belgische muzikanten samen om een muzikale wereld te creëren waarin Europese klassieke muziek en Arabische muziek samenkomen. Het Watar Quintet, bestaande uit Amèle Metlini (1e viool), Silvia Bazantova (2e viool), Marie Ghitta (altviool), Annemie Osborne (cello) en Adrien Tyberghein (contrabas), voegt zo de wereld van de klassieke strijkers toe aan de percussie en vooral aan de oed, een getokkeld snaarinstrument dat voorkomt in Arabische landen, Armenië en Griekenland.",

        classicalElectro: "Klassiek & Elektronisch",

        sopaText: "Dit Belgisch-Nederlandse project wordt gedragen door G.W.Sok (The Ex), Jean Vangeebergen (dramaturg) en Pavel Tchikov (Ogives). Het combineert op verrassende wijze synthesizerlijnen met het werk van een strijkkwartet, aangevuld met spoken word (vertelling, voordracht). Het eerste album van dit concept is gebaseerd op de gelijknamige tekst van de Moldavische schrijfster Nicoleta Esinencu. De muzikale en narratieve bewerking van deze tekst verrast eerst met industriële klanken en synthetische klankkleuren. Vervolgens komen de strijkinstrumenten in actie en daarna de vertelling, die het verrassende klankbeeld compleet maakt.",

        classicalYouth: "Klassiek & Jeugd",

        leonText: "Madame Léon, een excentrieke muzieklerares, vergist zich van zaal en komt terecht voor een publiek aan wie ze denkt een serieuze lezing te moeten geven. Maar dit publiek is gekomen om een voorstelling bij te wonen en daarom besluit ze te blijven en haar passie voor muziek met hen te delen. Met haar dirigeerstok en haar magische horloge neemt ze de kinderen mee op een reis door de tijd, vol humor, fantasie… en natuurlijk muziek!"
    },

    en: {
        classical: "Classical",
        fourSeasonsText: "Six artists invite you to (re-)discover this work, arranged especially for two violins, a viola, a cello, a double bass and… a guitar! A formidable challenge, with talented musicians offering a refined yet warm interpretation in a brand-new version.",

        classicalJazz: "Classical & Jazz",

        bluesyMaryText: "Bluesy Mary is a project at the crossroads of classical music and jazz, with the particularity of taking, for the most part, songs from the classical repertoire as its starting point. This fusion is made deep and subtle through the connection between the playing of renowned jazz musicians and the specific characteristics of each classical piece. For example, Bill Evans' playing is combined with Massenet's « Méditation de Thaïs », while Nat King Cole's ballads meet Fauré's « Après un rêve ». The aim is to make these two worlds accessible to everyone through sounds and themes rooted in the collective conscious and/or unconscious.",

        paulineLeblondText: "The double quartet finds its roots somewhere between Duke Ellington and Johann Sebastian Bach, or perhaps between Miles Davis and Henry Purcell. The Pauline Leblond Double Quartet is a family of eight musicians who have built bridges between jazz and baroque music. It is a subtle blend of a string quartet and a jazz quartet, sometimes opposing each other and sometimes merging. Together, they perform original compositions by trumpeter Pauline Leblond. The contrasts of timbres, colours and sounds evoke dreamlike, even cinematic images.",

        vedaText: "For this project, musician and composer Veda Bartringer seeks new sounds by including a string quartet alongside the quartet. The compositions are a blend of classical music and jazz. It is important for the musician to incorporate the classical music knowledge she acquired at the conservatory before and during her jazz studies. Classical music represents the beginning of her career: she studied harmony, counterpoint and arrangement, and today, as a professional musician, she wants to incorporate this knowledge into her new compositions.",

        moonSouvenirsText: "The string trio Moon Souvenirs delicately blends composed pieces with moments of improvisation, creating a magical and moving soundscape. On this occasion, the group presents « Memory Log Suite », their first album. This album is a tribute to the power of memories and the emotions they evoke. Rooted in classical music and jazz while drawing on other influences such as folk, Brazilian and rock music, each track on the album is a journey through different thoughts and feelings, like wandering on the Moon.",

        arcoText: "Guitarist Lorenzo Di Maio (Octave de la musique in 2017) returns with the classic bass-drums-guitar trio format, joined by a string quartet. This combination offers his music an immensely rich blend of colours and sound textures. Enhanced by the poetry of its performers, the group reveals a repertoire of contrasting atmospheres, creating a bridge between the acoustic purity of the strings and the electric atmospheres of the guitar.",

        classicalWorld: "Classical & World Music",

        detailsText: "Moroccan oud « magician » Driss El Maloumi, originally from Agadir, is joined here by his two percussionists Saïd El Maloumi and Lahoucine Baqir. For this project, they bring together five Belgian musicians to create a musical world combining European classical music with Arabic music. The Watar Quintet, composed of Amèle Metlini (1st violin), Silvia Bazantova (2nd violin), Marie Ghitta (viola), Annemie Osborne (cello) and Adrien Tyberghein (double bass), brings the world of classical strings to the percussion and above all to the oud, a plucked string instrument found throughout the Arab world, Armenia and Greece.",

        classicalElectro: "Classical & Electronic",

        sopaText: "This Belgian-Dutch project is led by G.W.Sok (The Ex), Jean Vangeebergen (playwright) and Pavel Tchikov (Ogives). It combines synthesizer lines with the work of a string quartet, together with spoken word (narration, reading). The first album of this concept is based on the eponymous text by Moldovan author Nicoleta Esinencu. Its musical and narrative adaptation first surprises with industrial sounds and synthetic textures. Then the string instruments come into action, followed by the narration, completing a striking and unexpected soundscape.",

        classicalYouth: "Classical & Young Audiences",

        leonText: "Madame Léon, an eccentric music teacher, takes the wrong room and finds herself facing an audience she believes she is supposed to give a serious lecture to. However, this audience has come to see a show, so she decides to stay and share her passion for music with them. Armed with her conductor's baton and her magical watch, she takes the children on a journey through time, filled with humour, fantasy… and, of course, music!"
    }
};


function setProjetsLanguage(lang) {

    const translations = projetsTranslations[lang];

    if (!translations) return;

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

    localStorage.setItem("projets-language", lang);

    setNavigationLanguage(lang);
}

// =====================================================
// INITIALISATION
// =====================================================

// PAGE VIVALDI

const languageButtons =
    document.querySelectorAll(".language-switcher button");

const isVivaldiPage =
    document.querySelector(".vivaldi-page");


if (isVivaldiPage && languageButtons.length > 0) {

    languageButtons.forEach((button) => {

        button.addEventListener("click", () => {

            setVivaldiLanguage(button.dataset.lang);

        });

    });

    const savedLanguage =
        localStorage.getItem("vivaldi-language");

    setVivaldiLanguage(
        savedLanguage && vivaldiTranslations[savedLanguage]
            ? savedLanguage
            : "fr"
    );
}


// PAGE HOME

const isHomePage =
    document.querySelector(".titre");


if (isHomePage && languageButtons.length > 0) {

    languageButtons.forEach((button) => {

        button.addEventListener("click", () => {

            setHomeLanguage(button.dataset.lang);

        });

    });

    const savedHomeLanguage =
        localStorage.getItem("home-language");

    setHomeLanguage(
        savedHomeLanguage && homeTranslations[savedHomeLanguage]
            ? savedHomeLanguage
            : "fr"
    );
}

// PAGE BIOGRAPHIE

const isBioPage =
    document.querySelector(".contenu");

if (isBioPage && languageButtons.length > 0) {

    languageButtons.forEach((button) => {

        button.addEventListener("click", () => {
            setBioLanguage(button.dataset.lang);
        });

    });

    const savedBioLanguage =
        localStorage.getItem("bio-language");

    setBioLanguage(
        savedBioLanguage && bioTranslations[savedBioLanguage]
            ? savedBioLanguage
            : "fr"
    );
}

// PAGE PROJETS

const isProjetsPage =
    document.querySelector(".projet");

if (isProjetsPage && languageButtons.length > 0) {

    languageButtons.forEach((button) => {

        button.addEventListener("click", () => {
            setProjetsLanguage(button.dataset.lang);
        });

    });

    const savedProjetsLanguage =
        localStorage.getItem("projets-language");

    setProjetsLanguage(
        savedProjetsLanguage && projetsTranslations[savedProjetsLanguage]
            ? savedProjetsLanguage
            : "fr"
    );
}