// 🏆 Snack 1
// Ottieni il titolo di un post con una Promise.

// Crea una funzione getPostTitle(id) che accetta un id e restituisce una Promise che recupera il titolo di un post dal link https://dummyjson.com/posts/{id}

function getPostTitle(id) {
    return fetch(`https://dummyjson.com/posts/${id}`)
        .then((response) => response.json())
        .then((data) => data.title)
        .catch((error) => {
            console.error(error);
    });
}

getPostTitle(1)
    .then((title) => {
        console.log(title);
    });

// 🎯 Bonus: Ottieni l'intero post con l'autore
// Crea una funzione getPost(id) che recupera l'intero post. Concatena una seconda chiamata che aggiunge una proprietà user che contiene i dati dell'autore, recuperati dalla chiamata https://dummyjson.com/users/{post.userId}.

function getPost(id) {
    return fetch(`https://dummyjson.com/posts/${id}`)
        .then((response) => response.json())
        .then((post) => {
            return fetch(`https://dummyjson.com/users/${post.userId}`)
            .then((response) => response.json())
            .then((user) => {
            return {...post, user: user};
            })
        })
        .catch((error) => {
            console.error(error);
    });
}

getPost(1)
    .then((data) => {
        console.log(`Title: ${data.title}`);
        console.log(`Body: ${data.body}`);
        console.log(`Author: ${data.user.firstName} ${data.user.lastName}`);
    });




// 🏆 Snack 2
// Crea la funzione lanciaDado() che restituisce una Promise che, dopo 3 secondi, genera un numero casuale tra 1 e 6. Tuttavia, nel 20% dei casi, il dado si "incastra" e la Promise va in reject.
// 🎯 Bonus: HOF con closure per memorizzare l'ultimo lancio
// Modifica la funzione in creaLanciaDado(), che restituisce una closure che memorizza l'ultimo risultato. Se il numero esce due volte di fila, stampa "Incredibile!".