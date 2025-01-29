// Attraverso l'apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail
//  generare 10 indirizzi email e stamparli in pagina all'interno di una lista.


const htmlList = document.getElementById('email')

// ciclo for che verrà eseguito 10 volte
for( i=0; i < 10; i++){

    // richiesta GET all'API per ottenere un indirizzo email casuale
    fetch("https://flynn.boolean.careers/exercises/api/random/mail", {method: "GET"})
    .then(response => response.json())
    .then( data => {

        console.log(data.response);

        //aggiunge l'email ricevuta alla lista HTML
        htmlList.innerHTML += `<li>${data.response}</li>`

    })

}