
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert("Obrigado! Sua mensagem foi enviada com sucesso.");
});

function myFunction() {
    document.querySelector(".main-container").classList.toggle("dark-theme");
}

let listaDePosts = [
    {
        texto: "O Giannis é uma lenda! MVP indiscutível.",
        curtidas: 5,
        curtidoPorMim: false
    }
];

function renderizarPosts() {
    const feed = document.getElementById("feed-posts");
    feed.innerHTML = "";

    listaDePosts.forEach((post, index) => {
        let novoPost = document.createElement("div");
        novoPost.className = "card mb-3 shadow-sm";

        let classeBotao = "";
        let classeIcone = "";
        
        if (post.curtidoPorMim == true) {
            classeBotao = "btn-danger";
            classeIcone = "fas";
        } else {
            classeBotao = "btn-outline-danger";
            classeIcone = "far";
        }

        novoPost.innerHTML = `
            <div class="card-body">
                <p class="card-text fs-5">${post.texto}</p>
                <hr>
                <button class="btn ${classeBotao} btn-sm" onclick="curtirPost(${index})">
                    <i class="${classeIcone} fa-heart"></i> Curtir 
                    <span class="badge bg-secondary ms-1">${post.curtidas}</span>
                </button>
            </div>
        `;

        feed.prepend(novoPost);
    });
}

function adicionarPost() {
    let campoTexto = document.getElementById("texto-post");
    let texto = campoTexto.value;

    if (texto == "") {
        alert("Por favor, escreva uma mensagem antes de postar!");
        return;
    }

    let novoObjetoPost = {
        texto: texto,
        curtidas: 0,
        curtidoPorMim: false
    };

    listaDePosts.push(novoObjetoPost);

    renderizarPosts();
    
    campoTexto.value = "";
}

function curtirPost(index) {
    let post = listaDePosts[index];

    if (post.curtidoPorMim == true) {
        post.curtidas = post.curtidas - 1;
        post.curtidoPorMim = false;
    } else {
        post.curtidas = post.curtidas + 1;
        post.curtidoPorMim = true;
    }

    renderizarPosts();
}

renderizarPosts();