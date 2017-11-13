/**
 * @author Julien David
 * @version 1.0 MIT
 * @since 13/11/2017
 */

// Contador para as áreas de conhecimento
var numTotalAreas = 14;
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
        '<p>' + pageContent.content[count].text + '</p>';

}


/**
 * Essa variável contem todo o conteúdo da página e está dividida em:
 * @param title: O título, que é utilizado com .display-4
 * @param subtitle: O sub titulo do artigo, utilizado com .lead
 * @param text: O corpo do texto, todas as informaçõs e mais
 */
var pageContent = {
    "content": [{
            "title": "1 Formação Ética e Função Social do Profissional",
            "subtitle": "A vivência de princípios éticos e o conhecimento sobre a responsabilidade social do Engenheiro de Software são elementos imprescindíveis para a formação da postura profissional do egresso do BES",
            "text": "Ética é assunto de uma das disciplinas do primeiro semestre do curso, “Computação e Sociedade”, e volta a ser explicitamente tratada, junto com aspectos profissionais, na última disciplina do curso “Prática em Engenharia de Software”. Nesse caso, a postura ética e profissional é condição a ser observada para aprovação nessa disciplina. O comportamento ético e profissional será trabalhado nas atividades do curso, e não apenas na primeira e última disciplinas. A exigência de uma conduta apropriada em sala de aula, tanto dos docentes quanto dos estudantes, contribui com essa formação. Isso significa promover a qualidade de vida, o respeito à diversidade, o respeito ao meio ambiente. Nesse sentido, não apenas as disciplinas, mas toda e qualquer ação, deve ser pautada pela reflexão do impacto no contexto no qual se insere. Ainda convém destacar que a área possui um código de ética próprio, Código de Ética e Prática Profissional da Engenharia de Software [ACM/IEEE]. Esse código é uma das bases de fundamentação do curso e deve ser observado no convívio diário do curso."
        },
        {
            "title": "2 Formação Técnica",
            "subtitle": "A formação técnica proposta para o BES está fundamentada em bases sólidas: as diretrizes curriculares nacionais [MEC 2012], o guia do corpo de conhecimento em Engenharia de Software [SWEBOK 2014], o corpo de conhecimento recomendado para ser trabalhado em um curso de graduação [SE 2014], e o modelo de competência em Engenharia de Software [SWECOM 2014].",
            "text": "Em consequência, o conteúdo abordado no curso não diverge das orientações nacionais nem internacionais. A organização dele, contudo, é uma “contribuição” para a área, dado que se baseia em experiências aprendidas nos anos anteriores, juntamente com uma visão holística do aprendizado em Engenharia de Software, o que contrasta com a frequente apresentação cartesiana dessa área. As atividades do curso se aproximam do emprego da Engenharia de Software em projetos reais, no qual os conhecimentos e habilidades não são exigidos de forma fragmentada e isolada. O isolamento de conteúdo é adequado para a classificação do conhecimento que, sem o devido cuidado, pode induzir a definição de disciplinas."
        },
        {
            "title": "3 Formação Técnica",
            "subtitle": "A formação técnica proposta para o BES está fundamentada em bases sólidas: as diretrizes curriculares nacionais [MEC 2012], o guia do corpo de conhecimento em Engenharia de Software [SWEBOK 2014], o corpo de conhecimento recomendado para ser trabalhado em um curso de graduação [SE 2014], e o modelo de competência em Engenharia de Software [SWECOM 2014].",
            "text": "Em consequência, o conteúdo abordado no curso não diverge das orientações nacionais nem internacionais. A organização dele, contudo, é uma “contribuição” para a área, dado que se baseia em experiências aprendidas nos anos anteriores, juntamente com uma visão holística do aprendizado em Engenharia de Software, o que contrasta com a frequente apresentação cartesiana dessa área. As atividades do curso se aproximam do emprego da Engenharia de Software em projetos reais, no qual os conhecimentos e habilidades não são exigidos de forma fragmentada e isolada. O isolamento de conteúdo é adequado para a classificação do conhecimento que, sem o devido cuidado, pode induzir a definição de disciplinas."
        },
        {
            "title": "4 Formação Técnica",
            "subtitle": "A formação técnica proposta para o BES está fundamentada em bases sólidas: as diretrizes curriculares nacionais [MEC 2012], o guia do corpo de conhecimento em Engenharia de Software [SWEBOK 2014], o corpo de conhecimento recomendado para ser trabalhado em um curso de graduação [SE 2014], e o modelo de competência em Engenharia de Software [SWECOM 2014].",
            "text": "Em consequência, o conteúdo abordado no curso não diverge das orientações nacionais nem internacionais. A organização dele, contudo, é uma “contribuição” para a área, dado que se baseia em experiências aprendidas nos anos anteriores, juntamente com uma visão holística do aprendizado em Engenharia de Software, o que contrasta com a frequente apresentação cartesiana dessa área. As atividades do curso se aproximam do emprego da Engenharia de Software em projetos reais, no qual os conhecimentos e habilidades não são exigidos de forma fragmentada e isolada. O isolamento de conteúdo é adequado para a classificação do conhecimento que, sem o devido cuidado, pode induzir a definição de disciplinas."
        },
        {
            "title": "5 Formação Técnica",
            "subtitle": "A formação técnica proposta para o BES está fundamentada em bases sólidas: as diretrizes curriculares nacionais [MEC 2012], o guia do corpo de conhecimento em Engenharia de Software [SWEBOK 2014], o corpo de conhecimento recomendado para ser trabalhado em um curso de graduação [SE 2014], e o modelo de competência em Engenharia de Software [SWECOM 2014].",
            "text": "Em consequência, o conteúdo abordado no curso não diverge das orientações nacionais nem internacionais. A organização dele, contudo, é uma “contribuição” para a área, dado que se baseia em experiências aprendidas nos anos anteriores, juntamente com uma visão holística do aprendizado em Engenharia de Software, o que contrasta com a frequente apresentação cartesiana dessa área. As atividades do curso se aproximam do emprego da Engenharia de Software em projetos reais, no qual os conhecimentos e habilidades não são exigidos de forma fragmentada e isolada. O isolamento de conteúdo é adequado para a classificação do conhecimento que, sem o devido cuidado, pode induzir a definição de disciplinas."
        },
        {
            "title": "6 Formação Técnica",
            "subtitle": "A formação técnica proposta para o BES está fundamentada em bases sólidas: as diretrizes curriculares nacionais [MEC 2012], o guia do corpo de conhecimento em Engenharia de Software [SWEBOK 2014], o corpo de conhecimento recomendado para ser trabalhado em um curso de graduação [SE 2014], e o modelo de competência em Engenharia de Software [SWECOM 2014].",
            "text": "Em consequência, o conteúdo abordado no curso não diverge das orientações nacionais nem internacionais. A organização dele, contudo, é uma “contribuição” para a área, dado que se baseia em experiências aprendidas nos anos anteriores, juntamente com uma visão holística do aprendizado em Engenharia de Software, o que contrasta com a frequente apresentação cartesiana dessa área. As atividades do curso se aproximam do emprego da Engenharia de Software em projetos reais, no qual os conhecimentos e habilidades não são exigidos de forma fragmentada e isolada. O isolamento de conteúdo é adequado para a classificação do conhecimento que, sem o devido cuidado, pode induzir a definição de disciplinas."
        },
        {
            "title": "7 Formação Técnica",
            "subtitle": "A formação técnica proposta para o BES está fundamentada em bases sólidas: as diretrizes curriculares nacionais [MEC 2012], o guia do corpo de conhecimento em Engenharia de Software [SWEBOK 2014], o corpo de conhecimento recomendado para ser trabalhado em um curso de graduação [SE 2014], e o modelo de competência em Engenharia de Software [SWECOM 2014].",
            "text": "Em consequência, o conteúdo abordado no curso não diverge das orientações nacionais nem internacionais. A organização dele, contudo, é uma “contribuição” para a área, dado que se baseia em experiências aprendidas nos anos anteriores, juntamente com uma visão holística do aprendizado em Engenharia de Software, o que contrasta com a frequente apresentação cartesiana dessa área. As atividades do curso se aproximam do emprego da Engenharia de Software em projetos reais, no qual os conhecimentos e habilidades não são exigidos de forma fragmentada e isolada. O isolamento de conteúdo é adequado para a classificação do conhecimento que, sem o devido cuidado, pode induzir a definição de disciplinas."
        },
        {
            "title": "8 Formação Técnica",
            "subtitle": "A formação técnica proposta para o BES está fundamentada em bases sólidas: as diretrizes curriculares nacionais [MEC 2012], o guia do corpo de conhecimento em Engenharia de Software [SWEBOK 2014], o corpo de conhecimento recomendado para ser trabalhado em um curso de graduação [SE 2014], e o modelo de competência em Engenharia de Software [SWECOM 2014].",
            "text": "Em consequência, o conteúdo abordado no curso não diverge das orientações nacionais nem internacionais. A organização dele, contudo, é uma “contribuição” para a área, dado que se baseia em experiências aprendidas nos anos anteriores, juntamente com uma visão holística do aprendizado em Engenharia de Software, o que contrasta com a frequente apresentação cartesiana dessa área. As atividades do curso se aproximam do emprego da Engenharia de Software em projetos reais, no qual os conhecimentos e habilidades não são exigidos de forma fragmentada e isolada. O isolamento de conteúdo é adequado para a classificação do conhecimento que, sem o devido cuidado, pode induzir a definição de disciplinas."
        },
        {
            "title": "9 Formação Técnica",
            "subtitle": "A formação técnica proposta para o BES está fundamentada em bases sólidas: as diretrizes curriculares nacionais [MEC 2012], o guia do corpo de conhecimento em Engenharia de Software [SWEBOK 2014], o corpo de conhecimento recomendado para ser trabalhado em um curso de graduação [SE 2014], e o modelo de competência em Engenharia de Software [SWECOM 2014].",
            "text": "Em consequência, o conteúdo abordado no curso não diverge das orientações nacionais nem internacionais. A organização dele, contudo, é uma “contribuição” para a área, dado que se baseia em experiências aprendidas nos anos anteriores, juntamente com uma visão holística do aprendizado em Engenharia de Software, o que contrasta com a frequente apresentação cartesiana dessa área. As atividades do curso se aproximam do emprego da Engenharia de Software em projetos reais, no qual os conhecimentos e habilidades não são exigidos de forma fragmentada e isolada. O isolamento de conteúdo é adequado para a classificação do conhecimento que, sem o devido cuidado, pode induzir a definição de disciplinas."
        },
        {
            "title": "10 Formação Técnica",
            "subtitle": "A formação técnica proposta para o BES está fundamentada em bases sólidas: as diretrizes curriculares nacionais [MEC 2012], o guia do corpo de conhecimento em Engenharia de Software [SWEBOK 2014], o corpo de conhecimento recomendado para ser trabalhado em um curso de graduação [SE 2014], e o modelo de competência em Engenharia de Software [SWECOM 2014].",
            "text": "Em consequência, o conteúdo abordado no curso não diverge das orientações nacionais nem internacionais. A organização dele, contudo, é uma “contribuição” para a área, dado que se baseia em experiências aprendidas nos anos anteriores, juntamente com uma visão holística do aprendizado em Engenharia de Software, o que contrasta com a frequente apresentação cartesiana dessa área. As atividades do curso se aproximam do emprego da Engenharia de Software em projetos reais, no qual os conhecimentos e habilidades não são exigidos de forma fragmentada e isolada. O isolamento de conteúdo é adequado para a classificação do conhecimento que, sem o devido cuidado, pode induzir a definição de disciplinas."
        },
        {
            "title": "11 Formação Técnica",
            "subtitle": "A formação técnica proposta para o BES está fundamentada em bases sólidas: as diretrizes curriculares nacionais [MEC 2012], o guia do corpo de conhecimento em Engenharia de Software [SWEBOK 2014], o corpo de conhecimento recomendado para ser trabalhado em um curso de graduação [SE 2014], e o modelo de competência em Engenharia de Software [SWECOM 2014].",
            "text": "Em consequência, o conteúdo abordado no curso não diverge das orientações nacionais nem internacionais. A organização dele, contudo, é uma “contribuição” para a área, dado que se baseia em experiências aprendidas nos anos anteriores, juntamente com uma visão holística do aprendizado em Engenharia de Software, o que contrasta com a frequente apresentação cartesiana dessa área. As atividades do curso se aproximam do emprego da Engenharia de Software em projetos reais, no qual os conhecimentos e habilidades não são exigidos de forma fragmentada e isolada. O isolamento de conteúdo é adequado para a classificação do conhecimento que, sem o devido cuidado, pode induzir a definição de disciplinas."
        },
        {
            "title": "12 Formação Técnica",
            "subtitle": "A formação técnica proposta para o BES está fundamentada em bases sólidas: as diretrizes curriculares nacionais [MEC 2012], o guia do corpo de conhecimento em Engenharia de Software [SWEBOK 2014], o corpo de conhecimento recomendado para ser trabalhado em um curso de graduação [SE 2014], e o modelo de competência em Engenharia de Software [SWECOM 2014].",
            "text": "Em consequência, o conteúdo abordado no curso não diverge das orientações nacionais nem internacionais. A organização dele, contudo, é uma “contribuição” para a área, dado que se baseia em experiências aprendidas nos anos anteriores, juntamente com uma visão holística do aprendizado em Engenharia de Software, o que contrasta com a frequente apresentação cartesiana dessa área. As atividades do curso se aproximam do emprego da Engenharia de Software em projetos reais, no qual os conhecimentos e habilidades não são exigidos de forma fragmentada e isolada. O isolamento de conteúdo é adequado para a classificação do conhecimento que, sem o devido cuidado, pode induzir a definição de disciplinas."
        },
        {
            "title": "13 Formação Técnica",
            "subtitle": "A formação técnica proposta para o BES está fundamentada em bases sólidas: as diretrizes curriculares nacionais [MEC 2012], o guia do corpo de conhecimento em Engenharia de Software [SWEBOK 2014], o corpo de conhecimento recomendado para ser trabalhado em um curso de graduação [SE 2014], e o modelo de competência em Engenharia de Software [SWECOM 2014].",
            "text": "Em consequência, o conteúdo abordado no curso não diverge das orientações nacionais nem internacionais. A organização dele, contudo, é uma “contribuição” para a área, dado que se baseia em experiências aprendidas nos anos anteriores, juntamente com uma visão holística do aprendizado em Engenharia de Software, o que contrasta com a frequente apresentação cartesiana dessa área. As atividades do curso se aproximam do emprego da Engenharia de Software em projetos reais, no qual os conhecimentos e habilidades não são exigidos de forma fragmentada e isolada. O isolamento de conteúdo é adequado para a classificação do conhecimento que, sem o devido cuidado, pode induzir a definição de disciplinas."
        },
        {
            "title": "14 Formação Técnica",
            "subtitle": "A formação técnica proposta para o BES está fundamentada em bases sólidas: as diretrizes curriculares nacionais [MEC 2012], o guia do corpo de conhecimento em Engenharia de Software [SWEBOK 2014], o corpo de conhecimento recomendado para ser trabalhado em um curso de graduação [SE 2014], e o modelo de competência em Engenharia de Software [SWECOM 2014].",
            "text": "Em consequência, o conteúdo abordado no curso não diverge das orientações nacionais nem internacionais. A organização dele, contudo, é uma “contribuição” para a área, dado que se baseia em experiências aprendidas nos anos anteriores, juntamente com uma visão holística do aprendizado em Engenharia de Software, o que contrasta com a frequente apresentação cartesiana dessa área. As atividades do curso se aproximam do emprego da Engenharia de Software em projetos reais, no qual os conhecimentos e habilidades não são exigidos de forma fragmentada e isolada. O isolamento de conteúdo é adequado para a classificação do conhecimento que, sem o devido cuidado, pode induzir a definição de disciplinas."
        },
        {
            "title": "15 Formação Técnica",
            "subtitle": "A formação técnica proposta para o BES está fundamentada em bases sólidas: as diretrizes curriculares nacionais [MEC 2012], o guia do corpo de conhecimento em Engenharia de Software [SWEBOK 2014], o corpo de conhecimento recomendado para ser trabalhado em um curso de graduação [SE 2014], e o modelo de competência em Engenharia de Software [SWECOM 2014].",
            "text": "Em consequência, o conteúdo abordado no curso não diverge das orientações nacionais nem internacionais. A organização dele, contudo, é uma “contribuição” para a área, dado que se baseia em experiências aprendidas nos anos anteriores, juntamente com uma visão holística do aprendizado em Engenharia de Software, o que contrasta com a frequente apresentação cartesiana dessa área. As atividades do curso se aproximam do emprego da Engenharia de Software em projetos reais, no qual os conhecimentos e habilidades não são exigidos de forma fragmentada e isolada. O isolamento de conteúdo é adequado para a classificação do conhecimento que, sem o devido cuidado, pode induzir a definição de disciplinas."
        }
    ]
};