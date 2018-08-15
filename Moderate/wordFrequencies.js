
(function() {

    let book = "this is a book with many many words", queries = ["this", "many", "something"];
    console.log(lookInBook(book, queries));

})();


function lookInBook(book, queries) {
    let rv = [], obj = {}, words = book.split(" ");

    if (!book) throw Exception("Please provide a book")

    //pre-processing
    for (let word of words) {
        if (obj.hasOwnProperty(word)) obj[word]++;
        else obj[word] = 1;
    }

    //conditions
    if (!queries) return rv;

    //query processing
    for (let query of queries) {
        if (obj.hasOwnProperty(query)) rv.push(obj[query]);
        else rv.push(0);
    }
    return rv;
}