
// ==========================================
// NanoMedice - SISTEMA PRINCIPAL DO JOGO
// ==========================================

const questions = [

{
title: "O diagnóstico da MED.AI",
story: "Um paciente chega ao hospital com sintomas desconhecidos. A inteligência artificial MED.AI apresenta um diagnóstico em segundos, mas o médico responsável desconfia do resultado. O paciente precisa de atendimento seguro.",
options: [
{ id: "a", text: "Confiar totalmente na inteligência artificial e iniciar o tratamento imediatamente.", correct: false, feedback: "A IA pode cometer erros. Um diagnóstico sem avaliação adequada pode prejudicar o paciente." },
{ id: "b", text: "Utilizar a IA como apoio e solicitar uma avaliação completa do médico.", correct: true, feedback: "Correto! A tecnologia deve auxiliar os profissionais, sem substituir o julgamento médico." },
{ id: "c", text: "Ignorar todos os exames digitais e abandonar o sistema tecnológico.", correct: false, feedback: "Ignorar recursos tecnológicos úteis também pode prejudicar o atendimento." }
]
},

{
title: "A pulseira inteligente",
story: "A NEXUS lança uma pulseira que monitora batimentos cardíacos, sono e atividade física. A empresa pretende compartilhar os dados dos usuários com outras organizações sem explicar claramente a finalidade.",
options: [
{ id: "a", text: "Compartilhar todos os dados automaticamente para acelerar as pesquisas.", correct: false, feedback: "Dados de saúde são sensíveis e precisam de proteção e autorização adequada." },
{ id: "b", text: "Desativar todos os dispositivos inteligentes da população.", correct: false, feedback: "A tecnologia pode trazer benefícios quando utilizada com segurança." },
{ id: "c", text: "Exigir transparência, segurança e autorização dos usuários antes do compartilhamento.", correct: true, feedback: "Correto! Privacidade e consentimento são fundamentais na saúde digital." }
]
},

{
title: "Os robôs hospitalares",
story: "Um hospital pretende substituir parte dos profissionais por robôs para reduzir custos. Os equipamentos conseguem transportar medicamentos e acompanhar pacientes, mas não possuem a mesma capacidade de acolhimento humano.",
options: [
{ id: "a", text: "Defender a colaboração entre robôs e profissionais de saúde.", correct: true, feedback: "Correto! A automação pode melhorar o atendimento sem eliminar o cuidado humano." },
{ id: "b", text: "Substituir todos os médicos e enfermeiros por máquinas.", correct: false, feedback: "A saúde exige responsabilidade profissional, empatia e avaliação humana." },
{ id: "c", text: "Impedir qualquer utilização de robôs nos hospitais.", correct: false, feedback: "Os robôs podem auxiliar em tarefas importantes e melhorar a eficiência." }
]
},

{
title: "A inteligência artificial preditiva",
story: "A NEXUS desenvolve uma IA capaz de prever doenças antes dos primeiros sintomas. Entretanto, os testes mostram resultados incorretos em determinados grupos de pacientes.",
options: [
{ id: "a", text: "Lançar imediatamente para garantir vantagem comercial.", correct: false, feedback: "Uma tecnologia médica sem validação suficiente pode colocar vidas em risco." },
{ id: "b", text: "Cancelar definitivamente toda a pesquisa.", correct: false, feedback: "A pesquisa pode continuar com melhorias, testes e acompanhamento adequado." },
{ id: "c", text: "Ampliar os testes, corrigir falhas e validar os resultados antes do lançamento.", correct: true, feedback: "Correto! Segurança e evidências científicas devem vir antes da comercialização." }
]
},

{
title: "A saúde nas regiões afastadas",
story: "Você descobre que pequenas cidades não possuem hospitais especializados. A NEXUS pode criar um sistema de telemedicina para conectar pacientes a médicos de grandes centros.",
options: [
{ id: "a", text: "Oferecer o sistema apenas para hospitais particulares.", correct: false, feedback: "Isso aumenta a desigualdade no acesso à saúde." },
{ id: "b", text: "Desenvolver uma plataforma acessível, segura e integrada aos serviços públicos de saúde.", correct: true, feedback: "Correto! A telemedicina pode ampliar o acesso e reduzir desigualdades." },
{ id: "c", text: "Substituir todas as consultas presenciais por videochamadas.", correct: false, feedback: "Alguns casos exigem exames físicos e atendimento presencial." }
]
},

{
title: "O vazamento de informações",
story: "Um funcionário informa que dados médicos de milhares de pessoas foram expostos após um ataque hacker. A direção da empresa pede que o caso seja escondido para evitar prejuízos financeiros.",
options: [
{ id: "a", text: "Apagar os registros do ataque e continuar as operações normalmente.", correct: false, feedback: "Esconder o incidente impede medidas de proteção e pode agravar os danos." },
{ id: "b", text: "Culpar os pacientes pelo vazamento das informações.", correct: false, feedback: "A empresa precisa assumir suas responsabilidades e proteger os usuários." },
{ id: "c", text: "Comunicar o incidente pelos canais adequados, proteger os dados e investigar a invasão.", correct: true, feedback: "Correto! Transparência e resposta rápida são essenciais para proteger os pacientes." }
]
},

{
title: "A dependência tecnológica",
story: "Você percebe que muitos pacientes passaram a depender excessivamente de aplicativos de saúde. Alguns deixam de procurar médicos porque acreditam que o celular consegue resolver todos os problemas.",
options: [
{ id: "a", text: "Criar campanhas educativas explicando os limites dos aplicativos e a importância do acompanhamento médico.", correct: true, feedback: "Correto! A educação digital ajuda a população a utilizar a tecnologia com consciência." },
{ id: "b", text: "Incentivar a população a abandonar os médicos e utilizar somente aplicativos.", correct: false, feedback: "Aplicativos não substituem diagnósticos e tratamentos profissionais." },
{ id: "c", text: "Proibir todos os aplicativos relacionados à saúde.", correct: false, feedback: "Essas ferramentas podem ajudar no monitoramento e na prevenção de doenças." }
]
},

{
title: "A desigualdade tecnológica",
story: "A NEXUS desenvolve um equipamento capaz de detectar doenças rapidamente, mas seu preço é muito alto. Apenas pessoas com grande poder aquisitivo conseguem utilizá-lo.",
options: [
{ id: "a", text: "Vender o equipamento somente para clínicas de luxo.", correct: false, feedback: "Essa decisão limita o acesso aos benefícios da inovação." },
{ id: "b", text: "Criar parcerias e modelos de acesso que permitam disponibilizar a tecnologia a diferentes comunidades.", correct: true, feedback: "Correto! A inovação deve contribuir para ampliar o acesso à saúde." },
{ id: "c", text: "Parar de produzir equipamentos médicos avançados.", correct: false, feedback: "O problema está na falta de acessibilidade, não necessariamente na tecnologia." }
]
},

{
title: "A decisão ética",
story: "Um sistema de inteligência artificial começa a recomendar tratamentos diferentes para pacientes com condições semelhantes. A equipe descobre que os dados utilizados no treinamento podem conter preconceitos e distorções.",
options: [
{ id: "a", text: "Manter o sistema funcionando porque ele já está gerando lucro.", correct: false, feedback: "Ignorar possíveis discriminações coloca pacientes em situação de risco." },
{ id: "b", text: "Retirar permanentemente toda a inteligência artificial da empresa.", correct: false, feedback: "É possível corrigir e aprimorar o sistema com responsabilidade." },
{ id: "c", text: "Auditar os dados, corrigir os vieses e monitorar os resultados com supervisão profissional.", correct: true, feedback: "Correto! A IA precisa ser justa, transparente e constantemente avaliada." }
]
},

{
title: "O futuro da humanidade",
story: "O diretor da NEXUS apresenta o maior projeto da empresa: um sistema mundial de saúde inteligente. Ele promete transformar a medicina, mas exige que todas as decisões sejam controladas exclusivamente pela inteligência artificial.",
options: [
{ id: "a", text: "Aprovar o projeto sem exigir supervisão, pois a IA é mais rápida que os humanos.", correct: false, feedback: "Velocidade não garante decisões seguras. A supervisão humana é indispensável." },
{ id: "b", text: "Rejeitar qualquer utilização da tecnologia na medicina.", correct: false, feedback: "A tecnologia pode transformar positivamente a saúde quando utilizada de forma responsável." },
{ id: "c", text: "Aprovar o desenvolvimento com supervisão humana, proteção de dados, testes e responsabilidade médica.", correct: true, feedback: "Correto! O futuro da medicina depende do equilíbrio entre inovação e responsabilidade." }
]
}];


// ==========================================
// ESTADO DO JOGO
// ==========================================

let currentQuestion = 0;
let answers = {};
let displayedOptions = {};
let currentSelection = null;
let consecutiveErrors = 0;
let totalCorrect = 0;


// ==========================================
// CONTROLE DAS TELAS
// ==========================================

function showScreen(screenId) {
    document.querySelectorAll(".screen").forEach(screen => {
        screen.classList.remove("active");
    });

    document.getElementById(screenId).classList.add("active");
}

function startIntro() {
    showScreen("intro");
}

function beginGame() {
    currentQuestion = 0;
    answers = {};
    displayedOptions = {};
    consecutiveErrors = 0;
    totalCorrect = 0;

    showScreen("quiz");
    renderQuestion(false);
}


// ==========================================
// EMBARALHAR ALTERNATIVAS
// ==========================================

function shuffle(array) {
    const copy = [...array];

    for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));

        [copy[i], copy[j]] = [copy[j], copy[i]];
    }

    return copy;
}

function shuffleOptions(questionIndex, question) {
    const previousOptions = displayedOptions[questionIndex];
    let options = shuffle(question.options);

    if (
        previousOptions &&
        options.every((option, index) => option.id === previousOptions[index].id)
    ) {
        options = [...options.slice(1), options[0]];
    }

    return options;
}


// ==========================================
// CALCULAR PONTUAÇÃO E ERROS
// ==========================================

function calculateStats(throughIndex = questions.length - 1) {
    totalCorrect = 0;
    consecutiveErrors = 0;

    for (let i = 0; i <= throughIndex; i++) {
        const selectedId = answers[i];

        if (!selectedId) {
            consecutiveErrors = 0;
            continue;
        }

        const selected = questions[i].options.find(
            option => option.id === selectedId
        );

        if (selected && selected.correct) {
            totalCorrect++;
            consecutiveErrors = 0;
        } else {
            consecutiveErrors++;
        }
    }
}


// ==========================================
// MOSTRAR PERGUNTA
// ==========================================

function renderQuestion(revisit = false) {

    const question = questions[currentQuestion];

    // Ao revisitar uma pergunta, as alternativas mudam de posição.
    if (!displayedOptions[currentQuestion] || revisit) {
        displayedOptions[currentQuestion] = shuffleOptions(currentQuestion, question);
    }

    const options = displayedOptions[currentQuestion];

    currentSelection = answers[currentQuestion] || null;

    document.getElementById("phase-title").textContent =
        `FASE ${String(currentQuestion + 1).padStart(2, "0")}`;

    document.getElementById("phase-number").textContent =
        `FASE ${currentQuestion + 1} / 10`;

    document.getElementById("question-title").textContent = question.title;

    document.getElementById("question-story").textContent = question.story;

    const progress = document.getElementById("progress");

    progress.style.width =
        `${((currentQuestion + 1) / questions.length) * 100}%`;
    progress.parentElement.setAttribute("aria-valuenow", currentQuestion + 1);

    calculateStats(currentQuestion);

    document.getElementById("score").textContent =
        `Acertos: ${totalCorrect}`;

    document.getElementById("mistakes").textContent =
        `Erros seguidos: ${consecutiveErrors}/3`;

    const answerArea = document.getElementById("answers");

    answerArea.innerHTML = "";

    options.forEach((option, index) => {

        const button = document.createElement("button");

        button.className = "answer";

        button.textContent =
            `${String.fromCharCode(65 + index)}. ${option.text}`;

        if (currentSelection === option.id) {
            button.classList.add("selected");
        }

        button.onclick = () => selectAnswer(option.id);

        answerArea.appendChild(button);
    });

    document.getElementById("back-btn").disabled =
        currentQuestion === 0;

    document.getElementById("next-btn").disabled =
        !currentSelection;

    const feedback = document.getElementById("feedback");

    feedback.textContent = "";
    feedback.className = "feedback";

    if (currentSelection) {
        showFeedback(currentSelection);
    }
}


// ==========================================
// SELECIONAR ALTERNATIVA
// ==========================================

function selectAnswer(optionId) {

    answers[currentQuestion] = optionId;

    calculateStats(currentQuestion);

    // Três erros consecutivos encerram a missão.
    if (consecutiveErrors >= 3) {
        showGameOver();
        return;
    }

    renderQuestion(false);
}

function showGameOver() {
    document.getElementById("gameover-score").textContent =
        `Acertos até o momento: ${totalCorrect}`;

    showScreen("gameover");
}


// ==========================================
// FEEDBACK DA RESPOSTA
// ==========================================

function showFeedback(optionId) {

    const question = questions[currentQuestion];

    const option = question.options.find(
        item => item.id === optionId
    );

    const feedback = document.getElementById("feedback");

    if (option.correct) {
        feedback.textContent = "✓ RESPOSTA CORRETA! " + option.feedback;
        feedback.className = "feedback good";
    } else {
        feedback.textContent = "✕ RESPOSTA INCORRETA! " + option.feedback;
        feedback.className = "feedback bad";
    }
}


// ==========================================
// VOLTAR UMA FASE
// ==========================================

function previousQuestion() {

    if (currentQuestion > 0) {

        currentQuestion--;

        renderQuestion(true);
    }
}


// ==========================================
// AVANÇAR UMA FASE
// ==========================================

function nextQuestion() {

    if (!answers[currentQuestion]) return;

    calculateStats(currentQuestion);

    if (consecutiveErrors >= 3) {
        showGameOver();
        return;
    }

    if (currentQuestion < questions.length - 1) {

        currentQuestion++;

        renderQuestion(false);

    } else {

        calculateStats(questions.length - 1);

        showEnding();
    }
}


// ==========================================
// DEFINIR OS TRÊS FINAIS
// ==========================================

function showEnding() {

    calculateStats(questions.length - 1);

    const endingTitle = document.getElementById("ending-title");
    const endingText = document.getElementById("ending-text");
    const endingIcon = document.getElementById("ending-icon");

    if (totalCorrect >= 8) {

        // FINAL BOM
        endingTitle.textContent = "FUTURO PROMISSOR";

        endingIcon.textContent = "🏆";

        endingText.textContent =
            "Suas decisões responsáveis transformaram a NEXUS. " +
            "A inteligência artificial passou a trabalhar em conjunto " +
            "com os profissionais de saúde. A privacidade foi protegida, " +
            "os hospitais ficaram mais eficientes e a tecnologia " +
            "se tornou acessível a milhares de pessoas. Você ajudou " +
            "a construir um futuro mais saudável e humano.";

    } else if (totalCorrect >= 5) {

        // FINAL MÉDIO
        endingTitle.textContent = "UM FUTURO INCERTO";

        endingIcon.textContent = "⚖️";

        endingText.textContent =
            "A NEXUS conseguiu avançar tecnologicamente, mas algumas " +
            "decisões causaram dificuldades. Parte da população recebeu " +
            "benefícios, enquanto outros enfrentaram problemas de acesso " +
            "e segurança. Você percebeu que a inovação precisa caminhar " +
            "junto com planejamento, ética e responsabilidade.";

    } else {

        // FINAL RUIM
        endingTitle.textContent = "A QUEDA DA NEXUS";

        endingIcon.textContent = "💀";

        endingText.textContent =
            "Suas decisões contribuíram para uma grave crise. " +
            "Falhas de segurança, desigualdade e utilização inadequada " +
            "da inteligência artificial prejudicaram a população. " +
            "A confiança na empresa foi perdida. A humanidade agora " +
            "precisa reconstruir seu sistema de saúde.";

    }

    document.getElementById("final-score").textContent =
        `RESULTADO: ${totalCorrect} / 10 ACERTOS`;

    showScreen("ending");
}


// ==========================================
// REINICIAR JOGO
// ==========================================

function restartGame() {

    currentQuestion = 0;
    answers = {};
    displayedOptions = {};
    currentSelection = null;
    consecutiveErrors = 0;
    totalCorrect = 0;

    startIntro();
}
