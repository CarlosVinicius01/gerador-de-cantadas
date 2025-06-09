const cantadas = {
    romanticas: [
        "Se beleza fosse tempo, você seria eternidade.",
        "Se eu fosse um gato, gastaria todas as minhas 7 vidas com você.",
        "Se você fosse um sonho, eu nunca ia querer acordar.",
        "Se eu fosse o sol, brilharia só para te ver sorrir.",
        "Você é a razão pela qual meu coração bate mais forte.",
        "Se amar você fosse crime, eu viveria preso com prazer.",
        "Seu sorriso é o pôr do sol mais bonito que já vi.",
        "Se eu tivesse uma estrela para cada vez que pensei em você, teria um universo inteiro.",
        "Você não é GPS, mas dá direção à minha vida.",
        "Com você, até os dias nublados ganham cor.",
        "Você não é poesia, mas faz meu coração rimar.",
        "Se beleza fosse melodia, você seria minha canção preferida.",
        "Se estar com você é sonho, por favor, nunca me acorde."
    ],
    engracadas: [
        "Você não é Wi-Fi, mas sinto uma conexão.",
        "Me chama de gol da final e vem comemorar comigo.",
        "Você é um cupom? Porque eu te vejo e só penso em desconto... do meu juízo!",
        "Se você fosse um sanduíche, seria o X-Princesa!",
        "Seu nome é Google? Porque você tem tudo o que eu procuro (e ainda sugere coisa que eu nem pedi).",
        "Você não é enxaqueca, mas não sai da minha cabeça!",
        "Me chama de boleto vencido e me dá atenção, nem que seja por cobrança.",
        "Você é tipo feriado em segunda: inesperada, mas maravilhosa!",
        "Se você fosse uma atualização, eu aceitaria sem ler os termos!",
        "Você deve ser figurinha rara do WhatsApp, porque eu tô louco pra te colecionar."
    ],
    ousadas: [
        "Você é o Wi-Fi? Porque quando conecta, eu fico sem roupa rapidinho.",
        "Se sua roupa falasse, ela pediria pra eu te despir com mais calma.",
        "Você é igual a madrugada: tira meu sono e me deixa com pensamentos proibidos.",
        "Você tem mapa? Porque me perdi na sua cintura e não quero achar a saída.",
        "Se eu fosse um travesseiro, dormia grudado em você todas as noites… sem descanso.",
        "Seus lábios deviam ser declarados área de lazer, porque eu só quero brincar neles.",
        "Você é tipo sexta-feira à noite: só penso em te aproveitar até não aguentar mais.",
        "Você me deixa com mais calor que o sol do meio-dia em dia de blackout.",
        "Seu olhar tem mais intenção que muito toque por aí.",
        "Se você fosse uma senha, com certeza seria algo que eu digitava de olhos fechados... e com as mãos ocupadas.",
        "Você é daqueles pecados que eu cometeria de olhos abertos... e ainda pediria bis com um sorriso no rosto.",
        "Se sua boca fosse crime, eu aceitaria a pena... desde que fosse perpétua em você.",
        "Não sou fotógrafo, mas já tô imaginando cenas que nem podem passar no cinema.",
        "Me chama de noite mal dormida, porque depois de você, descanso vai ser a última coisa na lista.",
        "Seu corpo é poesia... mas confesso que o que eu quero mesmo é a versão sem censura.",
        "Você tem cara de quem dá problema... e eu tô doido pra ser sua confusão favorita.",
        "Se sua pele fosse livro, eu passava horas lendo... com a língua.",
        "Você não é tempestade, mas só de te ver, já molha minha imaginação inteira.",
        "Esquece o jantar... me serve você à meia-luz, que eu prometo devorar com todos os sentidos.",
        "Sua presença é afrodisíaca... se você chegar mais perto, eu não respondo pelos instintos."
    ]
}

let ultimaCategoria = "romanticas";

function verificarCategoria() {
    const select = document.getElementById("categoria");
    const categoriaSelecionada = select.value;

    if (categoriaSelecionada === "ousadas") {
        const confirmar = confirm("Essa categoria contém conteúdo +18. Deseja continuar?");
        if (!confirmar) {
            select.value = ultimaCategoria; 
            return;
        }
    }

    ultimaCategoria = categoriaSelecionada; 
}

function gerarCantadas() {
    const categoriaSelecionada = document.getElementById("categoria").value
    const lista = cantadas[categoriaSelecionada]
    const index = Math.floor(Math.random() * lista.length)
    document.getElementById("cantada").textContent = lista[index]
}