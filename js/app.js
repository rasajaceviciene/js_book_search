// Data structure for book inventory
const inventory = [
    {
        "category": "Informacinės technologijos",
        "books": [
            {
                "title": "Programavimas linksmai",
                "ISBN": "IT-12345",
                "publishing_year": 2019, // New book
                "pages": 250,
                "quantity": 12,
                "price": 25
            },
            {
                "title": "JavaScript for Beginners",
                "ISBN": "IT-12346",
                "publishing_year": 2024,
                "pages": 300,
                "quantity": 8,
                "price": 30
            },
            {
                "title": "Web Development 101",
                "ISBN": "IT-12347",
                "publishing_year": 2018,
                "pages": 350,
                "quantity": 5,
                "price": 40
            },
            {
                "title": "AI Programming",
                "ISBN": "IT-12348",
                "publishing_year": 2021,
                "pages": 450,
                "quantity": 10,
                "price": 50
            },
            {
                "title": "Advanced Python",
                "ISBN": "IT-12349",
                "publishing_year": 2017,
                "pages": 500,
                "quantity": 7,
                "price": 60
            }
        ]
    },
    {
        "category": "Fizika",
        "books": [
            {
                "title": "Mechanika ir Judėjimas",
                "ISBN": "PH-12345",
                "publishing_year": 2015,
                "pages": 320,
                "quantity": 15,
                "price": 20
            },
            {
                "title": "Elektromagnetizmas",
                "ISBN": "PH-12346",
                "publishing_year": 2019,
                "pages": 280,
                "quantity": 10,
                "price": 22
            },
            {
                "title": "Šviesos teorija",
                "ISBN": "PH-12347",
                "publishing_year": 2024,
                "pages": 200,
                "quantity": 18,
                "price": 25
            },
            {
                "title": "Termodinamika",
                "ISBN": "PH-12348",
                "publishing_year": 2021,
                "pages": 400,
                "quantity": 12,
                "price": 30
            },
            {
                "title": "Kvantinė fizika",
                "ISBN": "PH-12349",
                "publishing_year": 2018,
                "pages": 450,
                "quantity": 8,
                "price": 40
            }
        ]
    },
    {
        "category": "Literatūra",
        "books": [
            {
                "title": "Shakespeare: Asmenybė ir kūryba",
                "ISBN": "LT-12345",
                "publishing_year": 2016,
                "pages": 350,
                "quantity": 20,
                "price": 15
            },
            {
                "title": "Poezija ir pasaka",
                "ISBN": "LT-12346",
                "publishing_year": 2018,
                "pages": 280,
                "quantity": 30,
                "price": 18
            },
            {
                "title": "Romanų pasaulis",
                "ISBN": "LT-12347",
                "publishing_year": 2017,
                "pages": 400,
                "quantity": 25,
                "price": 22
            },
            {
                "title": "Klasikiniai kūriniai",
                "ISBN": "LT-12348",
                "publishing_year": 2015,
                "pages": 500,
                "quantity": 10,
                "price": 35
            },
            {
                "title": "Moderni literatūra",
                "ISBN": "LT-12349",
                "publishing_year": 2024,
                "pages": 350,
                "quantity": 8,
                "price": 28
            }
        ]
    },
    {
        "category": "Matematika",
        "books": [
            {
                "title": "Algebra pradedantiesiems",
                "ISBN": "MA-12345",
                "publishing_year": 2016,
                "pages": 250,
                "quantity": 18,
                "price": 15
            },
            {
                "title": "Matematikos pagrindai",
                "ISBN": "MA-12346",
                "publishing_year": 2018,
                "pages": 300,
                "quantity": 12,
                "price": 20
            },
            {
                "title": "Geometrijos pradžiamokslis",
                "ISBN": "MA-12347",
                "publishing_year": 2019,
                "pages": 350,
                "quantity": 14,
                "price": 25
            },
            {
                "title": "Kalkuliacija",
                "ISBN": "MA-12348",
                "publishing_year": 2021,
                "pages": 400,
                "quantity": 10,
                "price": 30
            },
            {
                "title": "Statistika ir tikimybė",
                "ISBN": "MA-12349",
                "publishing_year": 2020,
                "pages": 500,
                "quantity": 5,
                "price": 40
            }
        ]
    },
    {
        "category": "Psichologija",
        "books": [
            {
                "title": "Psichologijos pagrindai",
                "ISBN": "PS-12345",
                "publishing_year": 2017,
                "pages": 280,
                "quantity": 25,
                "price": 20
            },
            {
                "title": "Kognityvinė psichologija",
                "ISBN": "PS-12346",
                "publishing_year": 2019,
                "pages": 320,
                "quantity": 12,
                "price": 22
            },
            {
                "title": "Psichologija ir žmogaus elgsena",
                "ISBN": "PS-12347",
                "publishing_year": 2020,
                "pages": 300,
                "quantity": 10,
                "price": 25
            },
            {
                "title": "Psichoterapija",
                "ISBN": "PS-12348",
                "publishing_year": 2021,
                "pages": 350,
                "quantity": 8,
                "price": 30
            },
            {
                "title": "Socialinė psichologija",
                "ISBN": "PS-12349",
                "publishing_year": 2020,
                "pages": 280,
                "quantity": 15,
                "price": 28
            }
        ]
    }
];

// Ivestis pagal knygos pavadinima
const titleInput = document.querySelector("input[list='book-title']");
const titleDatalist = document.querySelector("#book-title");
// Ivestis pagal kategorija
const categoryInput = document.querySelector("input[list='book-category']");
const categoryDatalist = document.querySelector("#book-category");
// Vieta, kur bus isvedamos knygos
const booksList = document.querySelector(".books-list .row"); 

// Funkcija knygos elementui sukurti
const createBook = (book) => {
    const div = document.createElement("div");
    div.classList.add("col-12", "col-lg-4", "block"); // prideda klase neistrinant jau esamu klasiu
    const article = document.createElement("article");
    const title = document.createElement("h3");
    title.textContent = book.title;
    const isbn = document.createElement("p");
    isbn.textContent = `ISBN: ${book.ISBN}`;
    const publishingYear = document.createElement("p");
    publishingYear.textContent = `Leidimo metai: ${book.publishing_year}`;
    const pages = document.createElement("p");
    pages.textContent = `Puslapių sk.: ${book.pages}`;
    const quantity = document.createElement("p");
    quantity.textContent = `Kiekis: ${book.quantity}`;
    const price = document.createElement("p");
    price.textContent = `Kaina: ${book.price} EUR`;
    article.appendChild(title);
    article.appendChild(isbn);
    article.appendChild(publishingYear);
    article.appendChild(pages);
    article.appendChild(quantity);
    article.appendChild(price);
    div.appendChild(article);
    booksList.appendChild(div);
};
// Funkcija rodyti pranesimui, jei nieko nerasta
const showNoResultMessage = () => {
    const message = document.createElement("p");
    message.classList.add("message");
    message.textContent = "Pagal pasirinktus parametrus nieko nerasta";
    booksList.appendChild(message);
};

// Knygu pavadinimu sugeneravimas i datalist kaip "option"
// "focus" veikia naudojant ir klaviatura ir pele
titleInput.addEventListener("focus", () => {
    titleDatalist.innerHTML = ""; // Isvalomos senos reiksmes
    categoryInput.value = "";     // Isvaloma kategorijos input reiksme

    // Pavadinimai pridedami kaip "option" į datalist
    inventory.forEach(item => {
        item.books.forEach(book => {
            const option = document.createElement("option");
            option.value = book.title; // Pavadinimai nustatomi kaip value
            titleDatalist.appendChild(option);
        });        
    });
});

// Kategoriju sugeneravimas i datalist kaip "option"
// "focus" veikia naudojant ir klaviatura ir pele
categoryInput.addEventListener("focus", () => {
    categoryDatalist.innerHTML = ""; // Isvalomos senos reiksmes
    titleInput.value = "";           // Isvaloma pavadinimo input reiksme

    // Kategorijos pridedamos kaip "option" į datalist
    inventory.forEach(item => {
        const option = document.createElement("option");
        option.value = item.category; // Kategorijos nustatomos kaip value
        categoryDatalist.appendChild(option);
    });
});

// Filtravimas pagal knygos pavadinima
// "input" ivykis leidzia suzinoti, kokia reiksme buvo ivesta
titleInput.addEventListener("input", () => {
    const searchByTitle = titleInput.value.toLowerCase(); // Uztikrinama, kad paieskos neitakotu didziosios ir mazosios raides
    booksList.innerHTML = ""; // Isvalomos senos reiksmes
    if (searchByTitle.length < 3) { // Paieska nevykdoma, kol ivesta per mazai simboliu    
        return; 
    } 
    let foundBook = false;
    inventory.forEach(item => {
        item.books.forEach(book => {
            if (book.title.toLowerCase().includes(searchByTitle)) { // Patikrinama, ar pavadinimas atitinka vartotojo ivesti
               createBook(book);
               foundBook = true;
            }
        });
    });
    if(!foundBook){
        showNoResultMessage();
    }
});

// Filtravimas pagal kategorija
// "input" ivykis leidzia suzinoti, kokia reiksme buvo ivestaa
categoryInput.addEventListener("input", () => {
    const searchByCategory = categoryInput.value.toLowerCase();
    booksList.innerHTML = ""; // Isvalomos senos reiksmes
    if(searchByCategory.length < 3) { // Paieska nevykdoma, kol ivesta per mazai simboliu
        return
    }
    let foundBook = false;
    inventory.forEach(item => {
        if(item.category.toLowerCase().includes(searchByCategory)){ // Patikrinama, ar kategorija atitinka vartotojo ivesti
            item.books.forEach(book => {
                createBook(book);
                foundBook = true;
            });
        }
    });
    if(!foundBook){
        showNoResultMessage();
    }
});
