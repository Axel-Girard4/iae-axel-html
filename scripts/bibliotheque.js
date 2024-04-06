window.addEventListener("load", function () {
    // Ajout de la fonctionnalité de recherche de livre
    document.getElementById("search-a-book").addEventListener("keyup", function () {
        const search = document.getElementById("search-a-book").value.toLowerCase();
        let books = document.getElementsByClassName("book-card");
        for (let book of books) {
            let title = book.getElementsByTagName("h2")[0].innerText.toLowerCase();
            if (title.includes(search)) {
                book.style.display = "block";
            } else {
                book.style.display = "none";
            }
        }
    });
});