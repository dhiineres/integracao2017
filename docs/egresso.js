/**
 * @author Julien David
 * @version 1.0 MIT
 * @since 13/11/2017
 */

// Contador para as áreas de conhecimento
var numTotalAreas = 15;
var count = 0;

function setCount(value) {
    this.count = value;
}


/**
 * Passando para a direita aumenta o contador
 */
function changeContentPlus() {
    if (count < numTotalAreas) {
        count++;
    }
    changeContent();
    console.log(count);
}

/**
 * Passando para a esquerda diminui o contador
 */
function changeContentMinus() {
    if (count > 0) {
        count--;
    }
    changeContent();
    console.log(count);
}

/**
 * @param {} pageContent, objeto que contém o conteúdo da página
 */
function changeContent(pageContent) {
    var pageContent = this.pageContent;
    var content = document.getElementById('mainContent');

    content.innerHTML =
        '<h1 class="display-4">' + pageContent.content[count].title + '</h1>' +
        '<p class="lead">' + pageContent.content[count].subtitle + '</p>' +
        '<p>' + pageContent.content[count].text + '</p>' +
        '<h2 class="display-4"> Habilidades relacionadas à área </h2>' +
        '<ul>' + pageContent.content[count].habilidades + '</ul>';

}


/**
 * Essa variável contem todo o conteúdo da página e está dividida em:
 * @param title: O título, que é utilizado com .display-4
 * @param subtitle: O sub titulo do artigo, utilizado com .lead
 * @param text: O corpo do texto, todas as informaçõs e mais
 */
var pageContent = {
    "content": [
        {
            "title": "Habilidades do egresso",
            "subtitle": "A área de conhecimento relativa aos requisitos de software é responsável pelo processo de levantamento das necessidades (e restrições) que devem ser solucionadas por meio da construção de um produto de software. Para tal, são desenvolvidas as atividades de elicitação, análise, especificação e validação dos requisitos de software.",
            "text": "Ética é assunto de uma das disciplinas do primeiro semestre do curso, “Computação e Sociedade”, e volta a ser explicitamente tratada, junto com aspectos profissionais, na última disciplina do curso “Prática em Engenharia de Software”. Nesse caso, a postura ética e profissional é condição a ser observada para aprovação nessa disciplina. O comportamento ético e profissional será trabalhado nas atividades do curso, e não apenas na primeira e última disciplinas. A exigência de uma conduta apropriada em sala de aula, tanto dos docentes quanto dos estudantes, contribui com essa formação. Isso significa promover a qualidade de vida, o respeito à diversidade, o respeito ao meio ambiente. Nesse sentido, não apenas as disciplinas, mas toda e qualquer ação, deve ser pautada pela reflexão do impacto no contexto no qual se insere. Ainda convém destacar que a área possui um código de ética próprio, Código de Ética e Prática Profissional da Engenharia de Software [ACM/IEEE]. Esse código é uma das bases de fundamentação do curso e deve ser observado no convívio diário do curso.",
            "habilidades": "<br><br>"
        }, 
        {
            "title": "1 - Requisitos de Software",
            "subtitle": "A área de conhecimento relativa aos requisitos de software é responsável pelo processo de levantamento das necessidades (e restrições) que devem ser solucionadas por meio da construção de um produto de software. Para tal, são desenvolvidas as atividades de elicitação, análise, especificação e validação dos requisitos de software.",
            "text": "Ética é assunto de uma das disciplinas do primeiro semestre do curso, “Computação e Sociedade”, e volta a ser explicitamente tratada, junto com aspectos profissionais, na última disciplina do curso “Prática em Engenharia de Software”. Nesse caso, a postura ética e profissional é condição a ser observada para aprovação nessa disciplina. O comportamento ético e profissional será trabalhado nas atividades do curso, e não apenas na primeira e última disciplinas. A exigência de uma conduta apropriada em sala de aula, tanto dos docentes quanto dos estudantes, contribui com essa formação. Isso significa promover a qualidade de vida, o respeito à diversidade, o respeito ao meio ambiente. Nesse sentido, não apenas as disciplinas, mas toda e qualquer ação, deve ser pautada pela reflexão do impacto no contexto no qual se insere. Ainda convém destacar que a área possui um código de ética próprio, Código de Ética e Prática Profissional da Engenharia de Software [ACM/IEEE]. Esse código é uma das bases de fundamentação do curso e deve ser observado no convívio diário do curso.",
            "habilidades": "<li>Participar de atividades para eliciar, analisar, especificar, validar e gerenciar requisitos de software.</li>"
        },
        {
            "title": "2 - Design de Software",
            "subtitle": "Esta área de conhecimento é responsável por, a partir dos requisitos, analisar e gerar as definições para a arquitetura, os componentes, os módulos e as interfaces do software que será desenvolvido.",
            "text": "Em consequência, o conteúdo abordado no curso não diverge das orientações nacionais nem internacionais. A organização dele, contudo, é uma “contribuição” para a área, dado que se baseia em experiências aprendidas nos anos anteriores, juntamente com uma visão holística do aprendizado em Engenharia de Software, o que contrasta com a frequente apresentação cartesiana dessa área. As atividades do curso se aproximam do emprego da Engenharia de Software em projetos reais, no qual os conhecimentos e habilidades não são exigidos de forma fragmentada e isolada. O isolamento de conteúdo é adequado para a classificação do conhecimento que, sem o devido cuidado, pode induzir a definição de disciplinas.",
            "habilidades": "<li>Participar da definição da solução de software que atende requisitos, ou seja, da definição da arquitetura e do projeto detalhado desse software.</li>" +
                "<li>Participar da elaboração de modelos de análise e de projeto (design) de software.</li>" +
                "<li>Participar da avaliação de design de software considerando, dentre outros quesitos: abstração, coesão, acoplamento e encapsulamento.</li>" +
                "<li>Participar da aplicação de técnicas de tratamento de exceção e tolerância a falhas.</li>" +
                "<li>Auxiliar a revisão de design de software.</li>" +
                "<li>Participar do emprego de estilos, visões, modelos e padrões de arquitetura de software.</li>" +
                "<li>Participar do projeto de componentes e módulos de software usando modelos, padrões de projeto e notações.</li>" +
                "<li>Participar da criação de design detalhado que minimiza a complexidade e melhora a qualidade.</li>"
        },
        {
            "title": "3 - Construção de Software",
            "subtitle": "A construção de software é a área do conhecimento responsável por transformar em código fonte a solução proposta para o problema através dos requisitos e do design. Está área está fortemente atrelada às atividades de verificação, testes de unidade, testes de integração e debugging.",
            "text": "Em consequência, o conteúdo abordado no curso não diverge das orientações nacionais nem internacionais. A organização dele, contudo, é uma “contribuição” para a área, dado que se baseia em experiências aprendidas nos anos anteriores, juntamente com uma visão holística do aprendizado em Engenharia de Software, o que contrasta com a frequente apresentação cartesiana dessa área. As atividades do curso se aproximam do emprego da Engenharia de Software em projetos reais, no qual os conhecimentos e habilidades não são exigidos de forma fragmentada e isolada. O isolamento de conteúdo é adequado para a classificação do conhecimento que, sem o devido cuidado, pode induzir a definição de disciplinas.",
            "habilidades": "<li>Participar da definição da solução de software que atende requisitos, ou seja, da definição da arquitetura e do projeto detalhado desse software.</li>" +
                "<li>Participar da aplicação de técnicas de projeto ao desenvolver softwares concorrentes, distribuídos, orientados a objetos, orientados a eventos e que implementam a persistência de dados.</li>" +
                "<li>Participar da aplicação de técnicas de tratamento de exceção e tolerância a falhas.</li>" +
                "<li>Participar do emprego de estilos, visões, modelos e padrões de arquitetura de software.</li>" +
                "<li>Auxiliar a escolha de linguagens e ferramentas apropriadas para a construção de software.</li>" +
                "<li>Auxiliar a escolha de frameworks, plataformas e ambientes de construção de construção de software.</li>" +
                "<li>Participar da construção de software seguindo padrões de gerência de configuração e controle de versão.</li>" +
                "<li>Participar da criação de código que implementa projetos detalhados.</li>" +
                "<li>Participar da refatoração (refactoring) de código.</li>" +
                "<li>Participar da construção de software que segue padrões de código.</li>" +
                "<li>Participar da construção de software que faz uso de técnicas de codificação defensiva.</li>" +
                "<li>Participar da geração de código a partir de modelos de projeto.</li>" +
                "<li>Participar do uso apropriado de ferramentas e técnicas de depuração.</li>" +
                "<li>Participar da construção de software que satisfaz objetivos de cobertura de testes.</li>" +
                "<li>Participar da construção de software que segue estratégias e processos de integração e implantação.</li>" +
                "<li>Participar da construção e realização de testes de integração.</li>" +
                "<li>Participar da construção de software em equipe ao colaborar com outros membros da equipe.</li>" +
                "<li>Participar da construção de software que segue princípios recomendados para segurança de código.</li>" +
                "<li>Participar da construção de software que segue um plano de gerência de configuração de software.</li>"
        },
        {
            "title": "4 - Teste de Software",
            "subtitle": "O teste de software tem como objetivo verificar o comportamento da dinâmica de um software através de um conjunto finito de casos de teste. Os testes buscam averiguar a garantia em um produto de software, não por definí-lo como livre de erros, mas realizando a maior cobertura possíveis para que falhas encontradas possam ser corrigidas e minimizando a probabilidade de que qualquer outra ocorra com o produto nas mãos do usuário. Os casos de teste são definidos a partir dos critérios de adequação e seleção por meio da análise tanto do arquivo fonte como dos requisitos utilizados em sua criação.",
            "text": "Em consequência, o conteúdo abordado no curso não diverge das orientações nacionais nem internacionais. A organização dele, contudo, é uma “contribuição” para a área, dado que se baseia em experiências aprendidas nos anos anteriores, juntamente com uma visão holística do aprendizado em Engenharia de Software, o que contrasta com a frequente apresentação cartesiana dessa área. As atividades do curso se aproximam do emprego da Engenharia de Software em projetos reais, no qual os conhecimentos e habilidades não são exigidos de forma fragmentada e isolada. O isolamento de conteúdo é adequado para a classificação do conhecimento que, sem o devido cuidado, pode induzir a definição de disciplinas.",
            "habilidades": "<li>Participar de atividades para eliciar, analisar, especificar, validar e gerenciar requisitos de software.</li>" +
                "<li>Auxiliar a execução de análise estática.</li>" +
                "<li>Participar da refatoração (refactoring) de código.</li>" +
                "<li>Participar da criação de testes de unidade.</li>" +
                "<li>Participar da construção de software que satisfaz objetivos de cobertura de testes.</li>" +
                "<li>Participar da construção e realização de testes de integração.</li>" +
                "<li>Participar de revisões e inspeções.</li>" +
                "<li>Participar da elaboração e implementação de planos de testes.</li>" +
                "<li>Participar da definição de um ambiente de teste e da correspondente implementação.</li>" +
                "<li>Participar da identificação, design e implementação de testes.</li>" +
                "<li>Participar da elaboração de relatórios de testes.</li>"
        },
        {
            "title": "5 - Manutenção de Software",
            "subtitle": "É uma área definida como todas as atividades necessárias ao oferecimento de um suporte com custo benefício rasoaveis a um produto de software. Atividades de manutenção podem ocorrer em qualquer fase do desenvolvimento do produto, assim como em qualquer documento que faça parte do pacote do software. Essas atividades se dividem entre os tipos Corretiva, Evolutiva, Adaptativa e Preventiva. A maior parte do ciclo de vida de um software se passa no processo de manutenção.",
            "text": "Em consequência, o conteúdo abordado no curso não diverge das orientações nacionais nem internacionais. A organização dele, contudo, é uma “contribuição” para a área, dado que se baseia em experiências aprendidas nos anos anteriores, juntamente com uma visão holística do aprendizado em Engenharia de Software, o que contrasta com a frequente apresentação cartesiana dessa área. As atividades do curso se aproximam do emprego da Engenharia de Software em projetos reais, no qual os conhecimentos e habilidades não são exigidos de forma fragmentada e isolada. O isolamento de conteúdo é adequado para a classificação do conhecimento que, sem o devido cuidado, pode induzir a definição de disciplinas.",
            "habilidades": "<li>Participar da refatoração (refactoring) de código.</li>" +
                "<li>Participar de revisões e inspeções.</li>" +
                "<li>Auxiliar a elaboração e execução de planos de manutenção de software.</li>"
        },
        {
            "title": "6 - Gerência de Configuração de Software",
            "subtitle": "É uma área que tem foco na integridade e controle dos artefatos criados durante o desenvolvimento de um software. Contém atividades que fazem o versionamento do produto e seus artefatos componentes. Envolve atividades de identificação da configuração, controle e rastreabilidade de mudanças, e registro e controle de alterações, realizada por meio da criação de tags e baselines no repositório do projeto.",
            "text": "Em consequência, o conteúdo abordado no curso não diverge das orientações nacionais nem internacionais. A organização dele, contudo, é uma “contribuição” para a área, dado que se baseia em experiências aprendidas nos anos anteriores, juntamente com uma visão holística do aprendizado em Engenharia de Software, o que contrasta com a frequente apresentação cartesiana dessa área. As atividades do curso se aproximam do emprego da Engenharia de Software em projetos reais, no qual os conhecimentos e habilidades não são exigidos de forma fragmentada e isolada. O isolamento de conteúdo é adequado para a classificação do conhecimento que, sem o devido cuidado, pode induzir a definição de disciplinas.",
            "habilidades": "<li>Participar da construção de software seguindo padrões de gerência de configuração e controle de versão.</li>" +
                "<li>Participar da construção de software que segue um plano de gerência de configuração de software.</li>"
        },
        {
            "title": "7 – Gestão de Engenharia de Software",
            "subtitle": "Esta área de conhecimento(AC) trata da aplicação de atividades de gestão para garantir que produtos de software e engenharia aplicada atendam o cliente, mas diferente de outros projetos existem aspectos específicos do projeto e do ciclo de vida do software que dificulta atender as necessidades do cliente, como a mudança de requisitos. As atividades de gestão estão em 3 níveis, mas esta AC só trata as duas últimas, gestão de projeto e gestão do programa de medição, mas é necessário entender os aspectos de gestão que são afetados por projetos de software. Está AC consiste de 7 tópicos, que tratam tanto de gestão quanto de medição, normalmente tratadas separadamente, também é relacionada com as outras AC, então é útil saber o mínimo de cada uma delas.Adicionalmente, gestão organizacional e infra estrutural são relevantes e tem um impacto no projeto como um todo, o PMBOK fornece informações extensas sobre gestão de projetos e apresenta uma extensão somente para software, todas as suas AC são relevantes.",
            "text": "Em consequência, o conteúdo abordado no curso não diverge das orientações nacionais nem internacionais. A organização dele, contudo, é uma “contribuição” para a área, dado que se baseia em experiências aprendidas nos anos anteriores, juntamente com uma visão holística do aprendizado em Engenharia de Software, o que contrasta com a frequente apresentação cartesiana dessa área. As atividades do curso se aproximam do emprego da Engenharia de Software em projetos reais, no qual os conhecimentos e habilidades não são exigidos de forma fragmentada e isolada. O isolamento de conteúdo é adequado para a classificação do conhecimento que, sem o devido cuidado, pode induzir a definição de disciplinas.",
            "habilidades": "<li>Participar da documentação de software.</li>"
        },
        {
            "title": "8 – Processo de Engenharia de Software",
            "subtitle": "É uma área de conhecimento que se preocupa com as atividades de desenvolvimento, manutenção e operação como requisitos, design, construção, teste, e outros processos de software por parte do engenheiro de software. Processos de software são importantes por diversos motivos, entre eles, ajudar no entendimento humano, comunicação e coordenação, medir e melhorar a qualidade do produto de software de maneira eficiente, para ajudar a gestão de projetos de software, entre outros.",
            "text": "Em consequência, o conteúdo abordado no curso não diverge das orientações nacionais nem internacionais. A organização dele, contudo, é uma “contribuição” para a área, dado que se baseia em experiências aprendidas nos anos anteriores, juntamente com uma visão holística do aprendizado em Engenharia de Software, o que contrasta com a frequente apresentação cartesiana dessa área. As atividades do curso se aproximam do emprego da Engenharia de Software em projetos reais, no qual os conhecimentos e habilidades não são exigidos de forma fragmentada e isolada. O isolamento de conteúdo é adequado para a classificação do conhecimento que, sem o devido cuidado, pode induzir a definição de disciplinas.",
            "habilidades": "<li>Auxiliar a escolha de processo e de metodologia de design de software.</li>" +
                "<li>Auxiliar a escolha de processos e modelos apropriados para a construção de software.</li>" +
                "<li>Auxiliar a definição e personalização de processos de software.</li>" +
                "<li>Auxiliar a implementação e execução de processos de software.</li>" +
                "<li>Auxiliar a coleta de dados para avaliação de processos de software.</li>" +
                "<li>Participar da documentação de software.</li>"
        },
        {
            "title": "9 – Modelos e Métodos de Engenharia de Software",
            "subtitle": "Essa área de conhecimento tem como objetivo fazer com que a engenharia de software seja sistemática, repetitiva e tenha uma maior chance de sucesso e assim trata de modelos e métodos que abrangem múltiplas fases do clico de vida do software. Modelos fornecem uma abordagem para solução de problemas, uma notação e procedimentos para construção e análise de modelos. Métodos fornecem uma abordagem para especificação do sistema, verificação de itens finais e outros produtos de trabalho. O capitulo é dividido em 4 tópicos, 3 que tratam de modelos e o último que fala dos métodos.",
            "text": "Em consequência, o conteúdo abordado no curso não diverge das orientações nacionais nem internacionais. A organização dele, contudo, é uma “contribuição” para a área, dado que se baseia em experiências aprendidas nos anos anteriores, juntamente com uma visão holística do aprendizado em Engenharia de Software, o que contrasta com a frequente apresentação cartesiana dessa área. As atividades do curso se aproximam do emprego da Engenharia de Software em projetos reais, no qual os conhecimentos e habilidades não são exigidos de forma fragmentada e isolada. O isolamento de conteúdo é adequado para a classificação do conhecimento que, sem o devido cuidado, pode induzir a definição de disciplinas.",
            "habilidades": "<li>Auxiliar a escolha de processo e de metodologia de design de software.</li>" +
                "<li>Participar do emprego de estilos, visões, modelos e padrões de arquitetura de software.</li>" +
                "<li>Auxiliar a escolha de processos e modelos apropriados para a construção de software.</li>"
        },
        {
            "title": "10 – Qualidade de Software",
            "subtitle": "Relacionada tanto na qualidade de construção quanto a qualidade eleita pelo usuário final, aqui a verificação e a validação entram. Aqui, checklists e auditorias são feitas para controlar a qualidade geral tanto de processo quando de produto de software gerado durante todo o ciclo de vida do software. Além disso, todas as inconformidades encontradas são registradas e mapeadas, e o acompanhamento delas é feito desde seu registro até sua correção. Por isso, é um dos pilares da engenharia de software, já que o que se busca com engenharia é a sonhada qualidade pela visão do cliente.",
            "text": "Em consequência, o conteúdo abordado no curso não diverge das orientações nacionais nem internacionais. A organização dele, contudo, é uma “contribuição” para a área, dado que se baseia em experiências aprendidas nos anos anteriores, juntamente com uma visão holística do aprendizado em Engenharia de Software, o que contrasta com a frequente apresentação cartesiana dessa área. As atividades do curso se aproximam do emprego da Engenharia de Software em projetos reais, no qual os conhecimentos e habilidades não são exigidos de forma fragmentada e isolada. O isolamento de conteúdo é adequado para a classificação do conhecimento que, sem o devido cuidado, pode induzir a definição de disciplinas.",
            "habilidades": "<li>Participar da aplicação de técnicas de projeto ao desenvolver softwares concorrentes, distribuídos, orientados a objetos, orientados a eventos e que implementam a persistência de dados.</li>" +
                "<li>Participar da aplicação de técnicas de tratamento de exceção e tolerância a falhas.</li>" +
                "<li>Participar da coleta e do monitoramento de medidas de qualidade de código.</li>" +
                "<li>Auxiliar a definição e o desenvolvimento de software que satisfaz objetivos e atributos de qualidade.</li>" +
                "<li>Auxiliar a identificação de medidas de qualidade apropriadas.</li>" +
                "<li>Auxiliar a elaboração de planos e revisões de qualidade.</li>"
        },
        {
            "title": "11 – Prática do Profissional de Engenharia de Foftware",
            "subtitle": "Aqui, algumas definições quanto às práticas que um bom profissional de engenharia de software deve seguir, tanto a níveis subjetivos quanto ética e conduta em geral, quanto a certificações recomendadas, impacto da profissão em nível econômico, leis aplicadas e contratos de trabalho. Além disso, áreas de desenvolvimento de trabalho em grupo são abordadas, focado em introduzir ao profissional a forma como lidar em diferentes cenários de trabalho, tanto na questão das pessoas e na sua forma multicultural quanto nas diferentes formas de lidar com os diferentes cargos de profissionais que encontraremos em nossa carreira profissional como engenheiro. Por fim, mas não menos importante, a área trata de habilidades de comunicação, focando em 4 áreas: leitura em todos os aspectos, escrita, comunicação de times e equipes e habilidades de apresentação, reforçando que o profissional dessa área sempre terá um trabalho envolvido com diversas pessoas.",
            "text": "Em consequência, o conteúdo abordado no curso não diverge das orientações nacionais nem internacionais. A organização dele, contudo, é uma “contribuição” para a área, dado que se baseia em experiências aprendidas nos anos anteriores, juntamente com uma visão holística do aprendizado em Engenharia de Software, o que contrasta com a frequente apresentação cartesiana dessa área. As atividades do curso se aproximam do emprego da Engenharia de Software em projetos reais, no qual os conhecimentos e habilidades não são exigidos de forma fragmentada e isolada. O isolamento de conteúdo é adequado para a classificação do conhecimento que, sem o devido cuidado, pode induzir a definição de disciplinas.",
            "habilidades": "<li>Participar de forma harmoniosa, profissional e ética durante a elaboração de produtos de software atribuídos a equipes.</li>" +
                "<li>Liderar ação contínua de formação de sua própria reputação na área.</li>" +
                "<li>Participar da comunicação de ideias com clareza, seja na forma verbal ou escrita.</li>" +
                "<li>Auxiliar a execução de atividades de processos de software.</li>"
        },
        {
            "title": "12 – Economia em Engenharia de Software",
            "subtitle": "Aqui, a área de gestão em software é abordada, com forte enfoque na parte econômica. O Swebok v3 divide essa área em 5 subáreas que são: Fundamentos de economia em engenharia de software, ciclo de vida econômico, risco e incertezas, métodos de análise econômica e considerações práticas. Em fundamentos, alguns conceitos importantes são definidos, para quer dúvidas não sejam levadas para as próxima etapa do estudo na área, como finanças, controle econômico, tomada de decisão, taxação e produtividade, todos eles no contexto de software. Logo após, temos ciclo de vida definindo como funciona a parte econômica aplicado ao ciclo de vida do software, e como os diferentes produto de desenvolvimento são tratadas, como projeto, produto, portfólio e o processo de migração. Com riscos e incertezas, é dado o caminho para o correto tratamento dos riscos possíveis no projeto, com priorização, processo de decisão em conjunto de riscos e metas, estimativas e planos. Com isso, na próxima sessão vemos como o lucro pode ser obtido e controlado, com processos de plano de negócio, aceite mínimo de retorno para ser viável, e otimização de análises. Por fim, algumas considerações são feitas com o intuito de completar o conhecimento na área, como o ecossistema do produto e o princípio do bom suficiente.",
            "text": "Em consequência, o conteúdo abordado no curso não diverge das orientações nacionais nem internacionais. A organização dele, contudo, é uma “contribuição” para a área, dado que se baseia em experiências aprendidas nos anos anteriores, juntamente com uma visão holística do aprendizado em Engenharia de Software, o que contrasta com a frequente apresentação cartesiana dessa área. As atividades do curso se aproximam do emprego da Engenharia de Software em projetos reais, no qual os conhecimentos e habilidades não são exigidos de forma fragmentada e isolada. O isolamento de conteúdo é adequado para a classificação do conhecimento que, sem o devido cuidado, pode induzir a definição de disciplinas.",
            "habilidades": "<li>Não possui habilidades relacionadas</li>"
        },
        {
            "title": "13 - Fundamentos Computacionais",
            "subtitle": "O escopo da área de conhecimento de Fundamentos Computacionais engloba fatores que possui o ambiente operacional e de desenvolvimento no qual softwares são executados e evoluem. O SWEBOK argumenta que, como o software não existe no vácuo ou é executado sem um computador, o núcleo do ambiente ao qual o software pertende é o computador e seus vários componentes. Portanto, o conhecimento de vários de tais componentes está fortemente ligado à Engenharia de Software, sendo vital para todo engenheiro de software. Todos os temas discutidos nesta área de conhecimento são estudados com maior profundidade em Ciência da Computação. São eles: Técnicas de resolução de problemas, base de linguagens de programação, algoritmos e complexidade, base de comunicação de rede, base de sistemas operacionais, fatores básicos de desenvolvedor, abstração, técnicas e ferramentas de debugging, conceito básico de um sistema, base de compiladores, computação paralela e distribuída, desenvolvimento e manutenção seguros de software, fundamentos de programação, representação e estrutura de dados, organização computacional, base de banco de dados e manutenção de dados e fatores básicos de usuário.",
            "text": "Em consequência, o conteúdo abordado no curso não diverge das orientações nacionais nem internacionais. A organização dele, contudo, é uma “contribuição” para a área, dado que se baseia em experiências aprendidas nos anos anteriores, juntamente com uma visão holística do aprendizado em Engenharia de Software, o que contrasta com a frequente apresentação cartesiana dessa área. As atividades do curso se aproximam do emprego da Engenharia de Software em projetos reais, no qual os conhecimentos e habilidades não são exigidos de forma fragmentada e isolada. O isolamento de conteúdo é adequado para a classificação do conhecimento que, sem o devido cuidado, pode induzir a definição de disciplinas.",
            "habilidades": "<li>Participar da construção de software que segue princípios recomendados para segurança de código.</li>"
        },
        {
            "title": "14 - Fundamentos Matemáticos",
            "subtitle": "A área de conhecimento de Fundamentos Matemáticos aborda assuntos não tão relacionados com matemática no contexto da aritmética propriamente dita, mas sim no contexto da lógica. Softwares só podem ser feitos para algo que siga regras definidas, ou seja, uma lógica não ambígua e bem entendida por todos do meio. Esta área de conhecimento tem como objetivo ajudar os engenheiros de software a compreenderem essa lógica, que é posteriormente traduzida para código, mostrando técnicas básicas para identificação de conjuntos de regras que devem ser aplicados em quaisquer softwares que sejam desenvolvidos. Esta área de conhecimento se divide nos seguintes assuntos: Conjuntos, relações e funções, lógica básica, técnicas de prova, base de contagem, grafos e árvores, probabilidade discreta, máquinas de estados finitos, gramáticas, precisão numérica, acurácia e erros, teoria numérica e estruturas algébricas.",
            "text": "Em consequência, o conteúdo abordado no curso não diverge das orientações nacionais nem internacionais. A organização dele, contudo, é uma “contribuição” para a área, dado que se baseia em experiências aprendidas nos anos anteriores, juntamente com uma visão holística do aprendizado em Engenharia de Software, o que contrasta com a frequente apresentação cartesiana dessa área. As atividades do curso se aproximam do emprego da Engenharia de Software em projetos reais, no qual os conhecimentos e habilidades não são exigidos de forma fragmentada e isolada. O isolamento de conteúdo é adequado para a classificação do conhecimento que, sem o devido cuidado, pode induzir a definição de disciplinas.",
            "habilidades": "<li>Não possui habilidades relacionadas</li>"
        },
        {
            "title": "15 - Fundamentos de Engenharia",
            "subtitle": "A área de conhecimento de Fundamentos da Engenharia aborda fatores da Engenharia de Software que são comuns a outras engenharias, uma vez que a semelhança entre elas se torna mais notável à medida que a Engenharia de Software cresce, tanto em teoria quanto em prática. O foco desta área de conhecimento é abordar tópicos que servem de suporte a outras áreas de conhecimento, sem, porém, falar de assuntos já falados anteriormente. Podemos citar como principais assuntos (ao menos mais importantes para a Engenharia de Software) a análise estatística e medição, vitais para a tão importante análise e melhoria constante, que é umas das principais bandeiras da Engenharia de Software, padrões, importantíssimo para que se possa fazer estimativas, medição e análise mais facilmente em projetos maiores, e análise de causa raiz, que pode ser usado para o processo de melhoria constante, para que seja possível analisar a razão de algo ter acontecido de forma indevida e chegar a uma solução para que não aconteça da próxima vez. Além desses assuntos também podemos citar os assuntos de métodos empíricos e técnicas experimentais, design de engenharia e modelagem, simulação e prototipação.",
            "text": "Em consequência, o conteúdo abordado no curso não diverge das orientações nacionais nem internacionais. A organização dele, contudo, é uma “contribuição” para a área, dado que se baseia em experiências aprendidas nos anos anteriores, juntamente com uma visão holística do aprendizado em Engenharia de Software, o que contrasta com a frequente apresentação cartesiana dessa área. As atividades do curso se aproximam do emprego da Engenharia de Software em projetos reais, no qual os conhecimentos e habilidades não são exigidos de forma fragmentada e isolada. O isolamento de conteúdo é adequado para a classificação do conhecimento que, sem o devido cuidado, pode induzir a definição de disciplinas.",
            "habilidades": "<li>Participar da comunicação de ideias com clareza, seja na forma verbal ou escrita.</li>" +
                "<li>Auxiliar a escolha de linguagens e ferramentas apropriadas para a construção de software.</li>" +
                "<li>Auxiliar a elaboração e execução de plano de transição de software.</li>" +
                "<li>Auxiliar a execução de atividades de processos de software.</li>" +
                "<li>Participar da documentação de software.</li>"
        }
    ]
};