/**
 * @author Julien David
 * @version 1.0 MIT
 * @since 13/11/2017
 */
var numTotalAreas = 1;
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
        '<div class="card mx-auto mb-3 align-center">'+
        '<h3 class="card-header">'+pageContent.content[count].title+'</h3>'+
        '<div class="card-block p-2"><div class="row text-center text-capitalize"><span class="col-lg-10 row mx-auto">'+
        '<p class="card-text col-md-3 ">'+pageContent.content[count].body[1]+'</p>'+
        '<p class="card-text col-md-3 ">'+pageContent.content[count].body[2]+'</p>'+
        '<p class="card-text col-md-3 ">'+pageContent.content[count].body[3]+'</p>'+
        '<p class="card-text col-md-3 ">'+pageContent.content[count].body[4]+'</p>'+
        '</span><div class="col-lg-2"><p><button class="btn btn-secondary mt-2" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false"aria-controls="collapseExample">Saiba mais...</button></p></div></div><div class="collapse p-2" id="collapseExample">'+
        '<h4>'+pageContent.content[count].subtitle+'</h4>'+
        '<article class="bg-faded card card-body text-justify">'+pageContent.content[count].text+
        '</article></div></div></div>'

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
                    "body": {
                        "theme1":"Matemática",
                        "theme2":"Ciências da Computação",
                        "theme3":"Engenharia de Software",
                        "theme4":"",
                    },
                    "subtitle": "Some title",
                    "text": "Ética é assunto de uma das disciplinas do primeiro semestre do curso, “Computação e Sociedade”, e volta a ser explicitamente tratada, junto com aspectos profissionais, na última disciplina do curso “Prática em Engenharia de Software”. Nesse caso, a postura ética e profissional é condição a ser observada para aprovação nessa disciplina. O comportamento ético e profissional será trabalhado nas atividades do curso, e não apenas na primeira e última disciplinas. A exigência de uma conduta apropriada em sala de aula, tanto dos docentes quanto dos estudantes, contribui com essa formação. Isso significa promover a qualidade de vida, o respeito à diversidade, o respeito ao meio ambiente. Nesse sentido, não apenas as disciplinas, mas toda e qualquer ação, deve ser pautada pela reflexão do impacto no contexto no qual se insere. Ainda convém destacar que a área possui um código de ética próprio, Código de Ética e Prática Profissional da Engenharia de Software [ACM/IEEE]. Esse código é uma das bases de fundamentação do curso e deve ser observado no convívio diário do curso."
                }]
            };