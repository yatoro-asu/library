let books = [];
books.push({ title: "Жених по наследству и зоопарк в придачу", genre: "Любовная фантастика" });
books.push({ title: "Свадьба с драконом прилагается, или Трон для попаданки", genre: "Попаданцы / Любовная фантастика" });
books.push({ title: "Баллада Пепла и Льда", genre: "Фэнтези / Любовная фантастика" });
books.push({ title: "Злодейка твоего романа", genre: "Попаданцы / Любовная фантастика" });
books.push({ title: "Жена по требованию, или Мы так (не) договаривались!", genre: "Любовная фантастика" });
books.push({ title: "Новый мир для Элиз. Хозяйка пиццерии", genre: "Попаданцы / Любовная фантастика" });
books.push({ title: "Неждана из закрытого мира, или Очнись, дракон!", genre: "Попаданцы / Фэнтези" });
books.push({ title: "Хозяйка старой купальни", genre: "Попаданцы / Любовная фантастика" });
books.push({ title: "Портал к твоему сердцу, или Аукцион с последствиями", genre: "Любовная фантастика" });
books.push({ title: "Целительница для отставного генерала драконов", genre: "Фэнтези / Короткие любовные романы / Любовная фантастика" });
books.push({ title: "Украденное счастье феи", genre: "Фэнтези / Любовная фантастика" });
books.push({ title: "Синхронизация судеб", genre: "Фэнтези / Любовная фантастика" });
books.push({ title: "Истинная в бегах", genre: "Любовная фантастика" });
books.push({ title: "Среди туманов и снов", genre: "Фэнтези / Любовная фантастика" });

let fantasyBooks = [];
let romanceFantasyBooks = [];
let isekaiBooks = [];
let shortRomanceBooks = [];

let i = 0;
while (i < books.length) {
    let bookGenres = books[i].genre.split(' / ');

    bookGenres.forEach(function(genre, index) {
        if (genre === "Фэнтези" && index === 0) {
            fantasyBooks.push(books[i]);
        }
        if (genre === "Любовная фантастика" && index === 0) {
            romanceFantasyBooks.push(books[i]);
        }
        if (genre === "Попаданцы" && index === 0) {
            isekaiBooks.push(books[i]);
        }
        if (genre === "Короткие любовные романы") {
            shortRomanceBooks.push(books[i]);
        }
    });
    i++;
}

function sortBooksByTitle(booksArray) {
    return booksArray.sort(function(a, b) {
        return a.title.localeCompare(b.title);
    });
}

fantasyBooks = sortBooksByTitle(fantasyBooks);
romanceFantasyBooks = sortBooksByTitle(romanceFantasyBooks);
isekaiBooks = sortBooksByTitle(isekaiBooks);
shortRomanceBooks = sortBooksByTitle(shortRomanceBooks);

console.log("Фэнтези книги (отсортированы по алфавиту):");
fantasyBooks.forEach(book => console.log(book.title));

console.log("\nЛюбовная фантастика (отсортированы по алфавиту):");
romanceFantasyBooks.forEach(book => console.log(book.title));

console.log("\nПопаданцы (отсортированы по алфавиту):");
isekaiBooks.forEach(book => console.log(book.title));

console.log("\nКороткие любовные романы (отсортированы по алфавиту):");
shortRomanceBooks.forEach(book => console.log(book.title));