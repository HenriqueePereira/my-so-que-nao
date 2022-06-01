// Verificar se o email foi preenchdo
const verificarCampoPreenchido = (evento)=> {

    console.log(evento.target);

    if (evento.target.value == "") {
        evento.target.style.outline = "2px solid red";
        evento.target.setAttribute("placeholder", `Preencha o campo ${evento.target.name}!`)

    } else {
        evento.target.style.outline = "none"
        evento.target.setAttribute("placeholder", "")
    }
};

const onFileChange = evento => {
   let img = document.getElementById("output");
   img.src = URL.createObjectURL(evento.target.files[0])
}

// 1 - Capturar o elemento input 
let inputEmail = document.querySelector("#registro > form input[type=email]");
let inputSenha = document.querySelector("#registro > form input[type=password]");
let inputFile = document.querySelector("#registro > form input[type=file]")
let inputConfirmacao = document.querySelector("#registro > form input[type=password]", id="confirmacao")

// 2 - Associar ao evento "perdeu o foco" uma função


// 3 - A função vai avisar ao usuário que o campo de
//     email foi deixado em branco
inputEmail.addEventListener("blur", verificarCampoPreenchido);
inputSenha.addEventListener("blur", verificarCampoPreenchido);
inputConfirmacao.addEventListener("blur", verificarCampoPreenchido);
inputFile.addEventListener("change", onFileChange)





// Criando um array de amigos
let amigos = [{
        id: 1,
        nome: "Wendel Cultrim",
        email: "wendel@digitalhouse.com",
        foto: "baixados1.png"
    },
    {
        id: 2,
        nome: "Sérgio Moura",
        email: "ssiqueira@digitalhouse.com",
        foto: "baixados.jpeg"
    },
    {
        id: 3,
        nome: "Silvia Fiacador",
        email: "silvia@digitalhouse.com",
        foto: "baixados2.png"
    }
]



// localizar/carregar elementos do html aqui para o mundo JS
// Exemplo: carregar elemento que mostra lista de amigos

let listaDeAmigos = document.getElementById("listaDeAmigos");

//  documennt.querySelector("Seletor CSS");
console.log(document.querySelector("#listaDeAmigos > article"))
// criar um string com a estrutura html que exibe um usuario

// document.querySelectorAll("Seletor CSS");
console.log(document.querySelectorAll("#listaDeAmigos > article"));


let string = '';
for (let i = 0; i < amigos.length; i++) {
    const amigo = amigos[i];
    string += `
    <article>
        <img src="img/${amigo.foto}" alt="Foto de ${amigo.nome}">
        <span>${amigo.nome}</span>
        <a href="mailto:${amigo.email}">${amigo.email}</a>
    </article>
    `
}

// injetar essa string no elemento listaDeAmigos;
listaDeAmigos.innerHTML = string;


// alterar elementos
// exemplo 1: sumindo com o corpo da pagina!
//document.body.innerHTML = "Essa página foi hackeada!!"

// Remover elementos

// criar elementos