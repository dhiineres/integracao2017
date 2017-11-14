/**
 * @author Julien David
 * @version 1.0 MIT
 * @since 13/11/2017
 */
var numTotalAreas = 2;
var count = 0;
var indexDisciplina = 0;
var content = document.getElementById('mainContent');

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
    content.innerHTML = '';
    for(indexDisciplina in pageContent.content[count]) {
        changeContent();
    }
    console.log(count);
    indexDisciplina = 0;
}

/**
 * Passando para a esquerda diminui o contador
 */
function changeContentMinus() {
    if (count > 0) {
        count--;
    }
    content.innerHTML = '';
    for(indexDisciplina in pageContent.content[count]) {
        changeContent();
    }
    console.log(count);
    indexDisciplina = 0;
}

/**
 * @param {} pageContent, objeto que contém o conteúdo da página
 */
function changeContent(pageContent) {
    var pageContent = this.pageContent;
    content.innerHTML +=
        '<div class="card mx-auto mb-3 align-center" id="mainContent">' +
            '<h3 class="card-header">'+pageContent.content[count][indexDisciplina].title+'</h3>'+
            '<div class="card-block p-2">' +
                '<div class="row text-center text-capitalize">' +
                    '<span class="col-lg-10 row mx-auto">'+
                        '<p class="card-text col-md">'+pageContent.content[count][indexDisciplina].body.theme1+'</p>'+
                        '<p class="card-text col-md">'+pageContent.content[count][indexDisciplina].body.theme2+'</p>'+
                        '<p class="card-text col-md">'+pageContent.content[count][indexDisciplina].body.theme3+'</p>'+
                        '<p class="card-text col-md">'+pageContent.content[count][indexDisciplina].body.theme4+'</p>'+
                        '<p class="card-text col-md">'+pageContent.content[count][indexDisciplina].body.theme5+'</p>'+
                        '<p class="card-text col-md">'+pageContent.content[count][indexDisciplina].body.theme6+'</p>'+
                        '<p class="card-text col-md">'+pageContent.content[count][indexDisciplina].body.theme7+'</p>'+
                        '<p class="card-text col-md">'+pageContent.content[count][indexDisciplina].body.theme8+'</p>'+
                    '</span>' +
                    '<div class="col-lg-2">' +
                        '<p><button class="btn btn-secondary mt-2" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false"aria-controls="collapseExample">Saiba mais...</button></p>' +
                    '</div>' +
                '</div>' +
                '<div class="collapse p-2" id="collapseExample">'+
                    '<h4>'+pageContent.content[count][indexDisciplina].subtitle+'</h4>'+
                    '<article class="bg-faded card card-body text-justify">'+pageContent.content[count][indexDisciplina].text+
                    '</article>' +
                    '<h4>'+pageContent.content[count][indexDisciplina].subtitle2+'</h4>'+
                    '<article class="bg-faded card card-body text-justify">'+pageContent.content[count][indexDisciplina].bibliografia+
                    '</article>' +
                '</div>' +
            '</div>' +
        '</div>';
}


/**
 * Essa variável contem todo o conteúdo da página e está dividida em:
 * @param title: O título, que é utilizado com .display-4
 * @param subtitle: O sub titulo do artigo, utilizado com .lead
 * @param text: O corpo do texto, todas as informaçõs e mais
 */
var pageContent = {
    "content": [
        [  // Primeiro Semestre
            {
                "title": "Computação e Sociedade",
                "body": {
                    "theme1": "Núcleo <br>NC",
                    "theme2": "Teórica <br>32",
                    "theme3": "Prática <br>0",
                    "theme4": "Total <br>32",
                    "theme5": "Período <br>1º",
                    "theme6": "Unidade <br>INF",
                    "theme7": "Obrigatória <br>Sim",
                    "theme8": "Pré-requisito <br>Nenhum",
                },
                "subtitle": "Ementa",
                "text": "História da computação. <br>" +
                    "Estudo e análise de casos de aplicação de computadores na sociedade e para o meio ambiente. <br>" +
                    "Subáreas da computação e áreas interdisciplinares. <br>" +
                    "Importância e desafios da computação no Brasil e no mundo. <br>" +
                    "Cursos de computação e aspectos profissionais: tipos de cursos, perfis profissionais, demanda do mercado, organizações e associações na área, regulamentação da profissão. <br>" +
                    "Leis e normas relacionadas à Informática. <br>" +
                    "Questões ambientais, raciais, de saúde e de inclusão digital relacionadas à Computação. <br>" +
                    "Ética na Computação. <br>" +
                    "Empresas de tecnologia da informação. <br>" +
                    "Incubadoras de empresas.<br>",
                "subtitle2": "Bibliografia Básica",
                "bibliografia": "FONSECA FILHO, C. História da computação: O Caminho do Pensamento e da Tecnologia. Porto Alegre: EDIPUCRS, 2007.\n" +
                    "MASIERO, P. Ética em Computação. Editora da USP, 2000.\n" +
                    "VELOSO, R. Tecnologias da Informação e Comunicação: Desafios e Perspectivas. São Paulo: Saraiva, 2011.\n" +
                    "\nBibliografia Complementar\n\n" +
                    "CHALITA, G. Os Dez Mandamentos da Ética. Editora Nova Fronteira, 2003.\n" +
                    "DRUMMOND, V. Internet, Privacidade e Dados Pessoais. Editora Lumen Juris, 2003.\n" +
                    "KACZMARCZYK, L. C. Computers and Society: Computing for Good. Chapman & Hall/CRC Textbooks in Computing. CRC Press, 2011.\n" +
                    "LUCCA, N.; FILHO, A. S. Direito & Internet. Editora Edipro, 2001.\n" +
                    "PAESANI, L. M. Direito de Informática. Editora Atlas, 2005.\n"
            },
            {
                "title": "Introdução à Programação",
                "body": {
                    "theme1": "Núcleo <br>NC",
                    "theme2": "Teórica <br>48",
                    "theme3": "Prática <br>80",
                    "theme4": "Total <br>128",
                    "theme5": "Período <br>1º",
                    "theme6": "Unidade <br>INF",
                    "theme7": "Obrigatória <br>Sim",
                    "theme8": "Pré-requisito <br>Nenhum",
                },
                "subtitle": "Ementa",
                "text": "Introdução a algoritmos. <br>" +
                    "Conceitos básicos de programas: constantes; tipos de dados primitivos; variáveis; atribuição; entrada e saída de dados; expressões; estruturas de decisão; estruturas de repetição. <br>" +
                    "Ponteiro. <br>" +
                    "Estruturas de dados homogêneas e heterogêneas: vetores, matrizes, cadeias de caracteres, registros. Subprogramas: funções; passagens de parâmetros por valor e por referência, recursividade. <br>" +
                    "Manipulação de arquivos: abertura, fechamento, leitura e gravação. <br>" +
                    "Tipos de acesso a arquivos: sequencial e indexado. <br>" +
                    "Tipos de arquivos (texto e binário). <br>" +
                    "Transcrição de algoritmos para uma linguagem de programação.  <br>" +
                    "Domínio de uma linguagem de programação: sintaxe e semântica; interpretação e compilação de programas; ambiente de desenvolvimento de programas; estilo de codificação; documentação de código; técnicas de depuração e técnicas de profiling; desenvolvimento e uso de bibliotecas.<br>",
                "subtitle2": "Bibliografia Básica",
                "bibliografia": "FOBERLONE, A. L. V.; EBERSPACHER, H. F. Lógica de Programação: A construção de algoritmos e estruturas de dados. 3.a edição. São Paulo: Prentice Hall, 2005.\n" +
                    "ASCENCIO, A. F. G.; CAMPOS, E. A. V. Fundamentos da Programação de Computadores. 3.a edição. Editora Pearson, 2010. \n" +
                    "SCHILDT, H. C Completo e Total. 3a Ed.  São Paulo: Makron Books, 1996.\n" +
                    "Bibliografia complementar\n" +
                    "FEOFILOFF, P. Algoritmos em Linguagem C. Editora Campus/Elsevier, 2009. \n" +
                    "FARRER, H. at al. Programação Estruturada de Computadores: Algoritmos Estruturados. 3.a edição. Rio de Janeiro: LTC, 1989.\n" +
                    "SEDGEWICK, R. Algorithms in C. 3rd ed. Reading, Mss: Addison-Wesley, 1998.  ISBN 0201314525.\n" +
                    "SALVETTI, D. D.; BARBOSA, L. M. Algoritmos, São Paulo: Makron Books, 1998.\n" +
                    "CORMEN, T. H et al., Algoritmos: Teoria e Prática. 2.a edição. Rio de Janeiro: Editora Campus, 2002."
            },
            {
                "title": "Cálculo 1A",
                "body": {
                    "theme1": "Núcleo <br>NC",
                    "theme2": "Teórica <br>96",
                    "theme3": "Prática <br>0",
                    "theme4": "Total <br>96",
                    "theme5": "Período <br>1º",
                    "theme6": "Unidade <br>IME",
                    "theme7": "Obrigatória <br>Sim",
                    "theme8": "Pré-requisito <br>Nenhum",
                },
                "subtitle": "Ementa",
                "text": "Números reais. Funções reais de uma variável real e suas inversas. <br>" +
                    "Noções sobre cônicas. <br>" +
                    "Limite e continuidade. <br>" +
                    "Derivadas e aplicações. <br>" +
                    "Polinômio de Taylor. <br>" +
                    "Integrais. Técnicas de Integração. Integrais impróprias. <br>" +
                    "Aplicações.<br>",
                "subtitle2": "Bibliografia Básica",
                "bibliografia": "GUIDORIZZI, H. L. Um Curso de Cálculo, vol. 1. LTC, Rio de Janeiro, Brasil, 2006.\n" +
                    "LEITHOLD, L. O Cálculo com Geometria Analítica, 3.a edição. vol. 1. Harbra, São Paulo, 1994.\n" +
                    "STEWART, J. Cálculo, 5.a edição. vol. 1. Cengage Learning, São Paulo, 2006.\n" +
                "\nBibliografia Complementar\n\n" +
                "ÁVILA, G. S. S. Cálculo: Funções de Uma Variável, 7.a edição. vol. 1. LTC: Rio de Janeiro, 1994.\n" +
                "FLEMMING, D. M.; GONÇALVES, M. B. Cálculo A: Funções, limite, derivação e integração. Makron Books do Brasil, São Paulo, 2006.\n" +
                "HOFFMANN, L. D.; BRADLEY, G. L. Cálculo: Um curso moderno com aplicações, 9.a edição. LTC, Rio de Janeiro, 2008.\n" +
                "REIS, G. L; SILVA, V. V. Geometria Analítica. LTC, São Paulo.\t\t\n" +
                "SIMMONS, G. F. Cálculo com Geometria Analítica, vol. 1. McGraw-Hill do Brasil, São Paulo, Brasil, 1987.\n"
            },
            {
                "title": "Fundamentos de Matemática para Computação",
                "body": {
                    "theme1": "Núcleo <br>NC",
                    "theme2": "Teórica <br>64",
                    "theme3": "Prática <br>0",
                    "theme4": "Total <br>64",
                    "theme5": "Período <br>1º",
                    "theme6": "Unidade <br>INF",
                    "theme7": "Obrigatória <br>Sim",
                    "theme8": "Pré-requisito <br>Nenhum",
                },
                "subtitle": "Ementa",
                "text": "Noções de lógica. <br>" +
                    "Introdução a demonstrações.<br>" +
                    "Indução matemática, Recursividade e Relações de Recorrência, Conjuntos e Combinatória. <br>" +
                    "Séries e sequências. <br>" +
                    "Relações e Funções. <br>" +
                    "Representações numéricas e Mudança de base numérica.<br>",
                "subtitle2": "Bibliografia Básica",
                "bibliografia": "GERSTING, J. L. Fundamentos Matemáticos para a Ciência da Computação, 5.a edição, Editora LTC, Rio de Janeiro, 2004.\n" +
                    "SCHEINERMAN, E. R. Matemática Discreta: Uma introdução, Cengage Learning, Thompson Pioneira, 2003\n" +
                    "GRIMALDI, R. P. Discrete and Combinatorial Mathematics: An Applied Introduction, 5th edition, Pearson - Addison-Wesley, Boston, 2003.\n" +
                    "\nBibliografia Complementar\n\n" +
                    "GONÇALVES, A. Introdução à Álgebra, 5.a edição, CNPQ-IMPA, Rio de Janeiro, 2013.\n" +
                    "MATTSON, Jr.; H. F. Discrete Mathematics with applications, John Wiley & Sons, New York, 1993.\n" +
                    "ROSEN, K. H. Discrete Mathematics and Its Applications, 6.a edição, Boston: McGraw-Hill, 2009. \n" +
                    "ROSS, K. A.; Wright, C. R. B. Discrete mathematics, Prentice Hall, 1998.\n" +
                    "SANTOS, J. P. O. Introdução à Teoria dos Números, Coleção Matemática Universitária, CNPQ-IMPA, Rio de Janeiro, 2003.\n"
            }
        ], // Fecha o Primeiro
        [  // Segundo Semestre
            {
                "title": "Arquitetura de Computadores",
                "body": {
                    "theme1": "Núcleo <br>NC",
                    "theme2": "Teórica <br>48",
                    "theme3": "Prática <br>16",
                    "theme4": "Total <br>64",
                    "theme5": "Período <br>2º",
                    "theme6": "Unidade <br>INF",
                    "theme7": "Obrigatória <br>Sim",
                    "theme8": "Pré-requisito <br>Fundamentos de Matemática para Computação",
                },
                "subtitle": "Ementa",
                "text": "Visão geral dos computadores modernos.<br>" +
                    "Evolução da arquitetura dos computadores.<br>" +
                    "Memória e representação de dados e instruções.<br>" +
                    "Processador, ciclo de instrução, formato e endereçamento.<br>" +
                    "Noções básicas de programação em linguagem de montagem.<br>" +
                    "Dispositivos de entrada e saída.<br>" +
                    "Sistemas de interconexão (barramentos).<br>" +
                    "Interfaceamento e técnicas de entrada e saída. <br>" +
                    "Hierarquia de memória.<br>" +
                    "Introdução a arquiteturas paralelas e métricas de desempenho.<br>",
                "subtitle2": "Bibliografia Básica",
                "bibliografia": "BRYANT, R.; O'RALLARON, D. Computer Systems: A Programmer's Perspective, 2nd Edition, Addison Wesley, 2010.\n" +
                    "STALLINGS, W. Arquitetura e Organização de Computadores, 5a. Edição, Prentice-Hall, 2002.\n" +
                    "TANENBAUM, A. Organização Estruturada de Computadores, Editora LTC, 2006.\n" +
                    "\nBibliografia Complementar\n\n" +
                    "HENNESSY, J. L.; PATTERSON, D. A. Computer Architecture: A Quantitative Approach, 4th Edition, Morgan Kaufmann, 2007. \n" +
                    "MONTEIRO, M. A.  Introdução à Organização de Computadores.  4ª.  Edição. Editora LTC, Rio de Janeiro, 2001. ISBN: 8521612915.\n" +
                    "PATTERSON, D. A.; HENNESSY, J. L. Computer Organization and Design: The Hardware/Software Interface, 3rd edition, Morgan Kaufmann, 2007.\n" +
                    "STALLINGS, W. Computer Organization and Architecture: Designing for Performance. 10th Edition. Prentice-Hall, Inc., Upper Saddle River, NJ, USA.  2010.\n" +
                    "WEBER, R. F. Fundamentos de Arquiteturas de Computadores, 2.a Edição, Editora Sagra-Luzzatto, 2001."
            },
            {
                "title": "Algoritmos e Estruturas de Dados 1",
                "body": {
                    "theme1": "Núcleo <br>NC",
                    "theme2": "Teórica <br>32",
                    "theme3": "Prática <br>32",
                    "theme4": "Total <br>64",
                    "theme5": "Período <br>2º",
                    "theme6": "Unidade <br>INF",
                    "theme7": "Obrigatória <br>Sim",
                    "theme8": "Pré-requisito <br>Introdução à Programação",
                },
                "subtitle": "Ementa",
                "text": "Noções de complexidade de algoritmos (notações de complexidade). <br>" +
                    "Algoritmos de pesquisa: pesquisa sequencial e binária. <br>" +
                    "Algoritmos de ordenação. <br>" +
                    "Tipos abstratos de dados. <br>" +
                    "Estruturas de dados utilizando vetores: pilhas, filas, listas (simples e circulares). <br>" +
                    "Estruturas de dados com alocação dinâmica de memória: pilhas, filas, listas (simplesmente encadeadas, duplamente encadeadas e circulares).<br>",
                "subtitle2": "Bibliografia Básica",
                "bibliografia": "FEOFILOFF, P. Algoritmos em Linguagem C. Editora Campus/Elsevier, 2009.\n" +
                    "SZWARCFITER, J. L.; MARKENZON, L. Estruturas de Dados e seus Algoritmos. 2ª edição, LTC, 1994.\n" +
                    "TENENBAUM, A. M.; LANGSAM, Y.; AUGENSTEIN, M. Estruturas de Dados Usando C, São Paulo, Makron Books, 1995. \n" +
                    "\nBibliografia Complementar\n\n" +
                    "CORMEN, T. H. et al., Algoritmos: Teoria e Prática. 2.ª edição, Rio de Janeiro: Editora Campus, 2002.\n" +
                    "SALVETTI, D. D.; BARBOSA, L. M.; Algoritmos, Makron Books, São Paulo, 1998.\n" +
                    "SEDGEWICK, R. Algorithms in C++ (Parts 1-4), Addison-Wesley, 3rd Edition, 1998.\n" +
                    "ZIVIANI, N. Projeto de Algoritmos com implementação em Pascal e C. São Paulo: Editora Thomson, 3.ª edição, 2010.\n" +
                    "ZIVIANI, N. Projeto de Algoritmos com implementação em Java e C++. São Paulo: Editora Thomson, 2006.\n"
            },
            {
                "title": "Probabilidade e Estatística A",
                "body": {
                    "theme1": "Núcleo <br>NC",
                    "theme2": "Teórica <br>64",
                    "theme3": "Prática <br>0",
                    "theme4": "Total <br>64",
                    "theme5": "Período <br>2º",
                    "theme6": "Unidade <br>IME",
                    "theme7": "Obrigatória <br>Sim",
                    "theme8": "Pré-requisito <br>Cálculo 1A",
                },
                "subtitle": "Ementa",
                "text": "Estatística descritiva. Noções sobre amostragem. <br>" +
                    "Introdução à teoria de conjuntos. <br>" +
                    "Introdução à teoria de probabilidade: espaço amostral, eventos, frequência relativa, fundamentos de probabilidade, probabilidade condicional, eventos independentes e teorema de Bayes. <br>" +
                    "Variáveis aleatórias: conceitos básicos, esperança e variância. <br>" +
                    "Distribuições discretas de probabilidade: uniforme, binomial e Poisson. <br>" +
                    "Distribuições contínuas de probabilidade: uniforme, exponencial, normal e t-Student. <br>" +
                    "Estimação pontual e intervalar para uma população: média e proporção. <br>" +
                    "Teste de hipóteses para uma população: média e proporção. <br>" +
                    "Correlação linear e regressão linear simples.<br>",
                "subtitle2": "Bibliografia Básica",
                "bibliografia": "MAGALHÃES, M. N. Noções de Probabilidade e Estatística. São Paulo: EDUSP, 7.a ed., 2010.\n" +
                    "MEYER, P. L. Probabilidade: Aplicações à Estatística. Rio de Janeiro: LTC, 1969.\n" +
                    "WALPOLE, R. E.; MYERS, R. H.; MYERS, S. L.; YE, K. Probabilidade e Estatística para Engenharia e Ciências. São Paulo: Pearson, 8.a ed., 2009.\n" +
                    "\nBibliografia Complementar\n\n" +
                    "BUSSAB, W. O.; MORETTIN, P. A. Estatística Básica. 6.a ed. São Paulo: Saraiva, 2010.\n" +
                    "DANTAS, C. A. B. Probabilidade: um Curso Introdutório. 3.a ed. São Paulo: EDUSP, 2008.\n" +
                    "MORETTIN, L. G. Estatística básica: probabilidade e inferência. São Paulo: Prentice Hall, 2010.\n" +
                    "ROSS, S. Probabilidade. Um Curso Moderno com Aplicações. 8.a ed. Porto Alegre: Bookman, 2010.\n" +
                    "TRIOLA, M. F. Introdução à Estatística. 10. ed. Rio de Janeiro: LTC, 2008."
            },
            {
                "title": "Álgebra Linear",
                "body": {
                    "theme1": "Núcleo <br>NC",
                    "theme2": "Teórica <br>64",
                    "theme3": "Prática <br>0",
                    "theme4": "Total <br>64",
                    "theme5": "Período <br>2º",
                    "theme6": "Unidade <br>IME",
                    "theme7": "Obrigatória <br>Sim",
                    "theme8": "Pré-requisito <br>Nenhum",
                },
                "subtitle": "Ementa",
                "text": "Sistemas lineares e matrizes. <br>" +
                    "Espaços vetoriais. <br>" +
                    "Transformações lineares. <br>" +
                    "Autovalores e autovetores. <br>" +
                    "Espaços com produto interno. <br>",
                "subtitle2": "Bibliografia Básica",
                "bibliografia": "BOLDRINI, J. L.; COSTA, S. I. R; FIGUEIREDO, V. L; WETZLER, H. G. Álgebra Linear, 3.a ed. Harbra, São Paulo, 2003.\n" +
                    "CALLIOLI, C. A.; DOMINGUES, H. H; COSTA, R. C. F. Álgebra Linear e Aplicações. Atual, Brasil, 1983.\n" +
                    "LIPSCHUTZ, S. Álgebra Linear, 2.a ed. Makrom-Books, São Paulo, Brasil, 1974.\n" +
                    "\nBibliografia Complementar\n\n" +
                    "APOSTOL, T. Linear Algebra: A First Course with Applications to Differential Equations, 1st ed. Wiley-Interscience, 1997. \n" +
                    "HOFFMAN, K.; KUNZE, R. Álgebra Linear. Polígono, São Paulo, 1971.\n" +
                    "HOWARD, A.; RORRES, C. Álgebra Linear com Aplicações, 8.a ed. Bookman, Porto Alegre, Brasil, 2001.\n" +
                    "LIMA, E. L. Álgebra Linear: Coleção Matemática Universitária. IMPA, Rio de Janeiro, Brasil, 2006.\n" +
                    "SHOKRANIAN, S. Introdução à Álgebra Linear e Aplicações, 1 ed. UNB, 2004."
            },
            {
                "title": "Lógica Matemática",
                "body": {
                    "theme1": "Núcleo <br>NC",
                    "theme2": "Teórica <br>64",
                    "theme3": "Prática <br>0",
                    "theme4": "Total <br>64",
                    "theme5": "Período <br>2º",
                    "theme6": "Unidade <br>IME",
                    "theme7": "Obrigatória <br>Sim",
                    "theme8": "Pré-requisito <br>Fundamentos de Matemática para Computação",
                },
                "subtitle": "Ementa",
                "text": "Noções básicas: linguagem natural vs linguagens formais; verdade, validade, satisfatibilidade; lógica proposicional (sintaxe e semântica, propriedades e relações semânticas, consequência lógica, simplificação de fórmulas); lógica de primeira ordem (sintaxe e semântica, propriedades e relações semânticas, formas normais);<br>" +
                    "Métodos de validação: métodos diretos de prova; métodos de prova por contradição; indução estrutural.<br>" +
                    "Linguagem para experimentação.<br>" +
                    "Aplicações básicas.<br>",
                "subtitle2": "Bibliografia Básica",
                "bibliografia": "SOUZA, J. N. Lógica para Ciência da Computação. Editora Campus, 3.a Edição, 2015.\n" +
                    "SILVA, F. C.; FINGER, M.; MELO, A. C. V. Lógica para Computação. Thomson Learning, 2006.\n" +
                    "HUTH, M.; RYAN, M. Lógica em Ciência da Computação: modelagem e argumentação sobre sistemas. 2.a edição. Editora LTC, 2008.\n" +
                    "\nBibliografia Complementar\n\n" +
                    "MORTARI, C. Introdução à Lógica. São Paulo: UNESP. 2001.\n" +
                    "MENDELSON, E. Introduction to Mathematical Logic, Academic Press, 2000.\n" +
                    "ENDERTON, H. A. Mathematical Introduction to Logic. Academic Press 2000.\n" +
                    "SMULLYAN, R. Lógica de Primeira Ordem. São Paulo: UNESP. 2009.\n" +
                    "CASANOVA, M. A.; GIORNO, F. A. C.; FURTADO, A. L. Programação em Lógica e a Linguagem PROLOG. Edgard Blucher, 1987.\n"
            }
        ], // Fecha o Segundo
        [  // Terceiro Semestre
            {
                "title": "Algoritmos e Estruturas de Dados 2",
                "body": {
                    "theme1": "Núcleo <br>NC",
                    "theme2": "Teórica <br>64",
                    "theme3": "Prática <br>0",
                    "theme4": "Total <br>64",
                    "theme5": "Período <br>3º",
                    "theme6": "Unidade <br>INF",
                    "theme7": "Obrigatória <br>Sim",
                    "theme8": "Pré-requisito <br>Algoritmos e Estruturas de Dados 1",
                },
                "subtitle": "Ementa",
                "text": "Árvores: formas de representação, recursão em árvores, árvores binárias, árvores binárias de busca, árvores balanceadas (AVL e rubro-negras). <br>" +
                    "Filas de prioridades. Heaps, Heapsort.  Hashing: tipos de funções de hashing; tratamento de colisões. <br>" +
                    "Definições de Grafos. <br>" +
                    "Estruturas de Dados para representação de grafos. <br>" +
                    "Algoritmos básicos em grafos. <br>",
                "subtitle2": "Bibliografia Básica",
                "bibliografia": "FEOFILOFF, P. Algoritmos em Linguagem C. Editora Campus/Elsevier, 2009.\n" +
                    "SZWARCFITER, J. L.; Markenzon, L. Estruturas de Dados e seus Algoritmos. 2ª edição, LTC, 1994. \n" +
                    "TENENBAUM, A. M.; LANGSAM, Y.; AUGENSTEIN, M. Estruturas de Dados Usando C, São Paulo, Makron Books, 1995. \n" +
                    "\nBibliografia Complementar\n\n" +
                    "CORMEN, T. H. et al., Algoritmos: Teoria e Prática. 2ª edição, Rio de Janeiro: Editora Campus, 2002.\n" +
                    "SALVETTI, D. D. e BARBOSA, L. M., Algoritmos, Makron Books, São Paulo, 1998.\n" +
                    "SEDGEWICK, R. Algorithms in C++ (Parts 1-4), 3rd edition, Addison-Wesley, 1998.\n" +
                    "ZIVIANI, N. Projeto de Algoritmos com implementação em Pascal e C. 3ª edição, São Paulo: Editora Thomson, 2010.\n" +
                    "ZIVIANI, N. Projeto de Algoritmos com implementação em Java e C++. São Paulo: Editora Thomson, 2006.\n"
            },
            {
                "title": "Linguagens e Paradigmas de Programação",
                "body": {
                    "theme1": "Núcleo <br>NC",
                    "theme2": "Teórica <br>32",
                    "theme3": "Prática <br>32",
                    "theme4": "Total <br>64",
                    "theme5": "Período <br>3º",
                    "theme6": "Unidade <br>INF",
                    "theme7": "Obrigatória <br>Sim",
                    "theme8": "Pré-requisito <br>Introdução à Programação",
                },
                "subtitle": "Ementa",
                "text": "Estudo dos conceitos de linguagens de programação e dos paradigmas de programação: procedural, funcional, lógico, orientado a objeto e script. <br>" +
                    "Reflexão sobre as características desejáveis em uma linguagem de programação e os critérios de seleção de linguagens de acordo com as especificidades dos domínios de aplicação. <br>" +
                    "Descrição de sintaxe e semântica. <br>" +
                    "Estudo sobre tipos de dados, estruturas de controle, ambientes de execução, variáveis, expressões e subprogramas em linguagens de programação. <br>",
                "subtitle2": "Bibliografia Básica",
                "bibliografia": "GHEZZI, C.; JAZYERI, M. Programming Language Concepts, 3rd Edition, Wiley; 3rd Edition; 1997.\n" +
                    "SCOTT, M. L. S. Programming Language Pragmatics, 3rd Edition, Morgan Kaufmann, 2009.\n" +
                    "SEBESTA, R. W. Concepts of Programming Languages; 10th Edition, Pearson, 2012.\n" +
                    "\nBibliografia Complementar\n\n" +
                    "FRIEDMAN, D. P.; WAND, M. Essentials of Programming Languages, 3rd Edition, The MIT Press, 2008.\n" +
                    "PRATT, T. W.; ZELKOWITZ, M. V. Programming Languages: Design and Implementation, 4th Edition, Prentice Hall, 2000.\n" +
                    "ROY, P. V.; HARIFI, S. Concepts, Techniques, and Models of Computer Programming, 1st Edition, The MIT Press, 2004.\n" +
                    "TURBAK, F.; GIFFORD, D. Design Concepts in Programming Languages, 1st Edition, The MIT Press, 2008.\n" +
                    "VAREJÃO, F. Linguagens de Programação, 1.a Edição, Editora. Campus, 2004.\n"
            },
            {
                "title": "Engenharia de Software",
                "body": {
                    "theme1": "Núcleo <br>NC",
                    "theme2": "Teórica <br>64",
                    "theme3": "Prática <br>0",
                    "theme4": "Total <br>64",
                    "theme5": "Período <br>3º",
                    "theme6": "Unidade <br>INF",
                    "theme7": "Obrigatória <br>Sim",
                    "theme8": "Pré-requisito <br>Nenhum",
                },
                "subtitle": "Ementa",
                "text": "Requisitos de software. <br>" +
                    "Projeto (design) de software. <br>" +
                    "Construção de software. <br>" +
                    "Teste de software. <br>" +
                    "Manutenção de software. <br>" +
                    "Gerência de configuração de software. <br>" +
                    "Gerência de projeto de software. <br>" +
                    "Processo de engenharia de software. <br>" +
                    "Modelos e métodos de engenharia de software. <br>" +
                    "Qualidade de software. <br>" +
                    "Prática profissional de engenharia de software. <br>" +
                    "Economia para engenharia de software. <br>" +
                    "Fundamentos de engenharia.<br>",
                "subtitle2": "Bibliografia Básica",
                "bibliografia": "PRESSMAN, R.; MAXIM, B. Software Engineering: A Practitioner’s Approach, 8th edition, McGraw-Hill, 2014.\n" +
                    "SOMMERVILLE, I. Software Engineering, 10th Edition, Pearson, 2016.\n" +
                    "WAZLAWICK, R. S. Engenharia de software: teoria e prática. Campus, 2013.\n" +
                    "\nBibliografia Complementar\n\n" +
                    "ISO/IEC/IEEE 24765. Systems and software engineering - Vocabulary, 2010. Portal de periódicos da CAPES (http://goo.gl/FrGm7c).\n" +
                    "MAGELA, R. Engenharia de software aplicada. Alta Books, 2006.\n" +
                    "MPS.BR.  Melhoria de Processos do Software Brasileiro. Disponível em http://www.softex.br/mpsbr/, último acesso julho/2016.\n" +
                    "Software Engineering Body of Knowledge (SWEBOK), V3, IEEE, Disponível em https://www.computer.org/web/swebok. \n" +
                    "Software Engineering Competency Model (SWECOM), IEEE. Disponível em https://www.computer.org/web/peb/swecom. "
            },
            {
                "title": "Sistemas Operacionais",
                "body": {
                    "theme1": "Núcleo <br>NE",
                    "theme2": "Teórica <br>32",
                    "theme3": "Prática <br>32",
                    "theme4": "Total <br>64",
                    "theme5": "Período <br>3º",
                    "theme6": "Unidade <br>INF",
                    "theme7": "Obrigatória <br>Não",
                    "theme8": "Pré-requisito <br>Arquitetura de Computadores",
                },
                "subtitle": "Ementa",
                "text": "Conceitos de Hardware e Software. <br>" +
                    "Tipos de Sistemas Operacionais. Organização da Estrutura Interna do Sistema Operacional. Gerência de Processos. Gerência do Processador. Gerência de Memória. Gerência de Dispositivos de Entrada e Saída. Sistemas de Arquivos. <br>" +
                    "Estudos de casos de sistemas operacionais atuais.<br>",
                "subtitle2": "Bibliografia Básica",
                "bibliografia": "OLIVEIRA, R. S.; CARISSIMI, A. S.; TOSCANI, S. S. Sistemas Operacionais. 3.a edição. Porto Alegre: Instituto de Informática da UFRGS: Editora Sagra Luzzatto, 2004.\n" +
                    "SILBERSCHATZ, A. Fundamentos de Sistemas Operacionais, 8.a edição, LTC, 2011.\n" +
                    "TANEMBAUM, A. S. Sistemas Operacionais Modernos. 3.a edição. São Paulo: Editora Prentice Hall, 2010. ISBN 9788576052371.\n" +
                    "\nBibliografia Complementar\n\n" +
                    "DEITEL, H. Sistemas Operacionais, Prentice Hall, 2005.\n" +
                    "MACHADO, F. B. Arquitetura de Sistemas Operacionais. 2.a edição. LTC, 1997.\n" +
                    "NEMETH E.; SNYDER, G.; HEIN, T. R. Unix system administration handbook. Pearson Prentice Hall, 1997. ISBN 9788576051121.\n" +
                    "O'GORMAN, J. Operating Systems with Linux. Palgrave, 2001.\n" +
                    "SHAY, W. Sistemas Operacionais, Makron Books, 1996.\n"
            },
            {
                "title": "Pesquisa Operacional",
                "body": {
                    "theme1": "Núcleo <br>NE",
                    "theme2": "Teórica <br>64",
                    "theme3": "Prática <br>0",
                    "theme4": "Total <br>64",
                    "theme5": "Período <br>3º",
                    "theme6": "Unidade <br>INF",
                    "theme7": "Obrigatória <br>Não",
                    "theme8": "Pré-requisito <br>Álgebra Linear",
                },
                "subtitle": "Ementa",
                "text": "Modelagem. <br>" +
                    "Problema de Programação Linear (PL). Resolução gráfica de PL. <br>" +
                    "Algoritmo Simplex. Dualidade. Algoritmo Simplex-Dual. <br>" +
                    "Pós-otimização e Análise de Sensibilidade.<br>",
                "subtitle2": "Bibliografia Básica",
                "bibliografia": "BREGALDA, P. F.; OLIVEIRA, A. A. F.; BORNSTEIN, C. T. Introdução à programação linear. 3. ed. Rio de Janeiro: Campus, 1983.\n" +
                    "GOLBARG, M.; LUNA, H. Otimização combinatória e programação linear. 2. ed. Campus, 2005.\n" +
                    "TAHA, H. Pesquisa operacional. 8. ed. Prentice Hall, 2008. \n" +
                    "\nBibliografia complementar\n\n" +
                    "BAZARAA M. S.; JARVIS, J. J.; SHERALI, H. D. Linear programming and network Flows.  Wiley, 2009.\n" +
                    "HILLIER, F. S.; LIEBERMAN, G. J. Introdução à pesquisa operacional. 9.a edição. Amgh Editora, 2013.\n" +
                    "PARLAR, M. Interactive operations research with Maple: methods and models. Birkhauser, 2000.\n" +
                    "SILVA, E. M. et al. Pesquisa Operacional: programação linear, simulação. 3.a ed. Atlas, 1998.\n" +
                    "WINSTON, W. L. Operations research applications and algorithms. 3rd ed. Duxbury Press, 1997.\n"
            },
            {
                "title": "Linguagens Formais e Autômatos",
                "body": {
                    "theme1": "Núcleo <br>NE",
                    "theme2": "Teórica <br>64",
                    "theme3": "Prática <br>0",
                    "theme4": "Total <br>64",
                    "theme5": "Período <br>3º",
                    "theme6": "Unidade <br>INF",
                    "theme7": "Obrigatória <br>Não",
                    "theme8": "Pré-requisito <br>Fundamentos de Matemática para Computação",
                },
                "subtitle": "Ementa",
                "text": "Conceitos básicos de linguagens. <br>" +
                    "Mecanismos geradores (gramáticas) e reconhecedores (determinísticos e não determinísticos) de linguagens regulares, livres de contexto e sensíveis ao contexto; relação entre estas classes de linguagens e suas principais propriedades. <br>" +
                    "Hierarquia de Chomsky.<br>",
                "subtitle2": "Bibliografia Básica",
                "bibliografia": "SUDKAMP, T. A. Languages and machines. 3.a edição. Addison Wesley, 2006.\n" +
                    "SIPSER, M. Introduction to the theory of computation. ITP, 1997. ISBN 053494728X.\n" +
                    "HOPCROFT, J. E.; MOTWANI, R.; ULLMAN, J. D. Introdução à teoria de autômatos: linguagens e computação. Campus, 2002.\n" +
                    "\nBibliografia complementar\n\n" +
                    "RAMOS, M. V. M.; NETO, J. J.; VEGA, I. S. Linguagens formais: teoria, modelagem e implementação. Bookman, 2009.\n" +
                    "CARROLL, J.; LONG, D. Theory of finite automata. New Jersey: Prentice-Hall International Editions, 1989.\n" +
                    "LEWIS, H. R.; PAPADIMITRIOU, C. H. Elementos de teoria da computação. 2.a edição. Porto Alegre: Bookman, 2000.\n" +
                    "MENEZES, P. F. B. Linguagens formais e autônomos. 5.a edição. Porto Alegre: Sagra Luzzatto, 2005. \n" +
                    "ROSEN, K. H. Matemática discreta e suas aplicações. 6.a ed. Rio de Janeiro: McGraw Hill, 2009.\n"
            }
        ], // Fecha o Terceiro
        [  // Quarto Semestre
            {
                "title": "Análise e Projeto de Algoritmos",
                "body": {
                    "theme1": "Núcleo <br>NC",
                    "theme2": "Teórica <br>64",
                    "theme3": "Prática <br>0",
                    "theme4": "Total <br>64",
                    "theme5": "Período <br>4º",
                    "theme6": "Unidade <br>INF",
                    "theme7": "Obrigatória <br>Sim",
                    "theme8": "Pré-requisito <br>Fundamentos de Matemática para Computação<br>" +
                    "Algoritmos e Estruturas de Dados 2",
                },
                "subtitle": "Ementa",
                "text": "Medidas de complexidade, análise assintótica de limites de complexidade para algoritmos iterativos e recursivos, técnicas de prova de cotas inferiores. <br>" +
                "Corretude de Algoritmos. <br>" +
                "Exemplos de análise de algoritmos. <br>" +
                "Técnicas de projeto de algoritmos: dividir para conquistar, programação dinâmica, algoritmos gulosos. <br>" +
                "Introdução à NP-Completude. <br>",
                "subtitle2": "Bibliografia Básica",
                "bibliografia": "BRASSARD, G.; BRATLEY, P. Fundamentals of Algorithmics. Prentice-Hall, Inc., Upper Saddle River, NJ, 1996. ISBN: 0-13-335068-1. \n" +
                    "CORMEN, T. H.; LEISERSON, C. E.; RIVEST, R. L.; STEIN,  C. Algoritmos: Teoria e Prática, 3.a edição, Campus, 2012.\n" +
                    "PAPADIMITRIOU, C. H.; VAZIRANI, U. V.; DASGUPTA, S. Algoritmos. 2009. McGraw-Hill Brasil. ISBN 9788577260324.\n" +
                    "\nBibliografia Complementar\n\n" +
                    "AHO, A. V.; HOPCROFT, J. E.; ULLMAN, J. D. The Design and Analysis of Computer Algorithms, Addison-Wesley Publishing Company, 1974. ISBN 0-201-00029-6.\n" +
                    "BAASE, S.; GELDER, A. V. Computer Algorithms: Introduction to Design and Analysis, 3rd Edition, Pearson, 1999.\n" +
                    "MAMBER, U. Introduction to Algorithms. Addison Wesley Publishing Company. 1989.\n" +
                    "SEDGEWICK, R.; WAYNE, K. Algorithms. 4th edition, Addison-Wesley Professional, 2011. ISBN: 978-0321573513\n" +
                    "SZWARCFITER, J. L.; MARKENZON, L. Estrutura de Dados e seus Algoritmos. 3.a edição, LTC Editora, 2010. ISBN 978852161750."
            },
            {
                "title": "Interação Humano-Computador",
                "body": {
                    "theme1": "Núcleo <br>NC",
                    "theme2": "Teórica <br>32",
                    "theme3": "Prática <br>32",
                    "theme4": "Total <br>64",
                    "theme5": "Período <br>4º",
                    "theme6": "Unidade <br>INF",
                    "theme7": "Obrigatória <br>Sim",
                    "theme8": "Pré-requisito <br>Probabilidade e Estatística <br>" +
                    "Algoritmos e Estruturas de Dados 1",
                },
                "subtitle": "Ementa",
                "text": "Aspectos gerais sobre interação humano-computador. ​<br>" +
                "Características humanísticas e biológicas, envolvendo questões sobre genealogia, gênero, aspectos étnicos, raciais e culturais, direitos e aspectos políticos, deficiências, limitações e capacidades, dentre outros. <br>" +
                "Ciclo da interação e principais problemas. Metas de usabilidade e experiência do usuário. <br>" +
                "Fatores humanos em software interativo: teoria, princípios e regras básicas. Modelos conceituais e metáforas. <br>" +
                "Estilos de interação. Elementos de interação (menus, formulários, manipulação direta e outros). Voz, linguagem natural, sons, páginas Web. Padrões para interface. <br>" +
                "Localização e internacionalização. <br>" +
                "Princípios de projeto de interfaces humano-computador. Métodos de projeto de interação. Projeto visual (cores, ícones, fontes e outros). Tempo de resposta e retroalimentação. <br>" +
                "Dispositivos de interação. <br>" +
                "Métodos de avaliação de interfaces: avaliação heurística, abordagens para testes realizados com apoio de usuários, técnicas de testes para páginas Web, entre outros. <br>" +
                "Visão geral de ferramentas de desenvolvimento de interfaces humano-computador.<br>",
                "subtitle2": "Bibliografia Básica",
                "bibliografia": "DIX, A.; FINLAY, J. E.; ABOWD, G. D.; BEALE, R. Human­Computer Interaction (3rd Edition). Prentice­Hall, Inc., Upper Saddle River, NJ, USA, 2003.\n" +
                    "ROGERS, Y.; SHARP, H.; PREECE, J. Design de Interação ­ Além da Interação Homem­computador. 3a Ed., Porto Alegre: Bookman, 2013.\n" +
                    "TIDWELL, J. Designing Interfaces: Patterns for Effective Interaction Design. O’Reilly. Segunda edição, 2011.\n" +
                    "\nBibliografia Complementar\n\n" +
                    "BARBOSA, S. D. J.; SILVA, B. S. Interação Humano­Computador. Elsevier Editora. 1.a edição. 2010.\n" +
                    "JACKO, Julie A. The human­computer interaction handbook: fundamentals, evolving technologies, and emerging applications. CRC Press, 2012.\n" +
                    "LAZAR, J.; FENG, J. H.; HOCHHEISER, H. Research Methods in Human­Computer Interaction. Wiley, 2009.\n" +
                    "MACKENZIE, I. S. Human­computer Interaction: An Empirical Research Perspective. Morgan Kaufmann, 201 3. ISBN: 978­0­1 2­405865­1\n" +
                    "SCOTT, B.; NEIL, T. Designing Web Interfaces: Principles and Patterns for Rich Interactions. O'Reilly Media; 1st edition. 2009.\n"
            },
            {
                "title": "Banco de Dados",
                "body": {
                    "theme1": "Núcleo <br>NC",
                    "theme2": "Teórica <br>48",
                    "theme3": "Prática <br>16",
                    "theme4": "Total <br>64",
                    "theme5": "Período <br>4º",
                    "theme6": "Unidade <br>INF",
                    "theme7": "Obrigatória <br>Sim",
                    "theme8": "Pré-requisito <br>Lógica Matemática"
                },
                "subtitle": "Ementa",
                "text": "Conceitos básicos de Banco de Dados. <br>" +
                    "Modelo relacional. <br>" +
                    "Linguagens para Banco de Dados: álgebra relacional, cálculo relacional e SQL. <br>" +
                    "Modelo Entidade-Relacionamento e extensões. <br>" +
                    "Mapeamento ER-relacional. <br>" +
                    "Normalização.<br>",
                "subtitle2": "Bibliografia Básica",
                "bibliografia": "ELMASRI, R.; NAVATHE, S. B. Sistemas de Banco de Dados, 6.ª ed., Pearson - Addison Wesley, 2011.\n" +
                    "HEUSER, C. A. Projeto de Banco de Dados, 6.ª edição, Bookman, Porto Alegre, 2009.\n" +
                    "SILBERSCHATZ, A.; KORTH, H. F.; SUDARSHAN, S. Sistema de Banco de Dados, 5.ª edição, Editora Campus, Rio de Janeiro, 2006.\n" +
                    "\nBibliografia Complementar\n\n" +
                    "CONNOLLY, T. M.; BEGG, C. E.; STRACHAN, A. D. Database systems: a practical approach to design, implementation and management, 3rd. Edition, Addison Wesley, 2010.\n" +
                    "DATE, C. J. Introdução a Sistemas de Banco de Dados, tradução da 8.a edição americana, Editora Campus, Rio de Janeiro, 2004.\n" +
                    "GARCIA-MOLINA, H.; ULLMAN, J. D.; WIDOM, J. D. Database Systems: The Complete Book, 2.a edição, Prentice Hall, 2009\n" +
                    "RAMAKRISHNAN, R.; GEHRKE, J. Sistemas de Gerenciamento de Banco de Dados, tradução da 3.a edição, São Paulo, McGraw-Hill, 2008.\n" +
                    "TEOREY, T.; LIGHTSTONE, S.; NADEAU, T. Projeto e Modelagem de Bancos de Dados, Editora Campus, Rio de Janeiro, 2007.\n"
            },
            {
                "title": "Projeto de Software",
                "body": {
                    "theme1": "Núcleo <br>NC",
                    "theme2": "Teórica <br>64",
                    "theme3": "Prática <br>0",
                    "theme4": "Total <br>64",
                    "theme5": "Período <br>4º",
                    "theme6": "Unidade <br>INF",
                    "theme7": "Obrigatória <br>Sim",
                    "theme8": "Pré-requisito <br>Engenharia de Software<br>" +
                                "Programação Orientada a Objetos",
                },
                "subtitle": "Ementa",
                "text": "Fundamentos de design de software. <br>" +
                    "Questões básicas de design de software: concorrência, controle e tratamento de eventos, persistência de dados, distribuição, tratamento de erro e exceção, tolerância a falhas, interação e apresentação, e segurança. Estrutura e arquitetura de software. <br>" +
                    "Projeto de interface de usuário. <br>" +
                    "Análise de qualidade e avaliação de design de software. <br>" +
                    "Notação de design de software. <br>" +
                    "Métodos e estratégias de design de software. <br>" +
                    "Ferramentas de design de software.<br>",
                "subtitle2": "Bibliografia Básica",
                "bibliografia": "BUDGEN, B. Software Design, 2nd edition, Addison­Wesley, 2003.\n" +
                    "BASS, L. et al. Software Architecture in Practice, 3rd edition, Addison­Wesley, 2012.\n" +
                    "LARMAN, C. Utilizando UML e padrões: uma introdução à análise e ao projeto orientados a objetos e ao desenvolvimento interativo. Bookman, 2008.\n" +
                    "\nBibliografia Complementar\n\n" +
                    "BOOCH, G. UML guia do usuário: o mais avançado tutorial sobre Unified Modeling Language (UML). Elsevier, 2006.\n" +
                    "FREEMAN, E. et al. Use a cabeça!: padrões de projetos, (design patterns), Alta Books, 2007.\n" +
                    "FOWLER, M. Patterns of enterprise application architecture. Addison­Wesley, 2003.\n" +
                    "GAMMA, E. et al. Design patterns elements of reusable object-oriented software. Reading: Addison Wesley, 1995. \n" +
                    "NYGARD, M. Release It!: Design and Deploy Production­Ready Software, Pragmatic Bookshelf, 2007.\n"
            },
            {
                "title": "Redes de Computadores",
                "body": {
                    "theme1": "Núcleo <br>NE",
                    "theme2": "Teórica <br>32",
                    "theme3": "Prática <br>32",
                    "theme4": "Total <br>64",
                    "theme5": "Período <br>4º",
                    "theme6": "Unidade <br>INF",
                    "theme7": "Obrigatória <br>Não",
                    "theme8": "Pré-requisito <br>Sistemas Operacionais",
                },
                "subtitle": "Ementa",
                "text": "Fundamentos. <br>" +
                    "Arquitetura de Redes TCP/IP (Internet). <br>" +
                    "Camadas de Aplicação, Transporte, Rede, Enlace e Física. <br>" +
                    "Gerenciamento de Redes. <br>" +
                    "Redes Sem Fio e Mobilidade. <br>" +
                    "Estudo de Caso de Tópicos Emergentes em Redes.<br>",
                "subtitle2": "Bibliografia Básica",
                "bibliografia": "KUROSE, J.F.; ROSS, K. Redes de Computadores e a Internet, 6.a edição. Pearson Education, 2013.\n" +
                    "LAUDON, K. C.; LAUDON, J. P. Sistemas de Informação Gerenciais. 9.a edição. São Paulo: Pearson Education, 2013.\n" +
                    "TANENBAUM, A. S. Computer Networks, 4th edition, Prentice Hall, 2003.\n" +
                    "\nBibliografia complementar\n\n" +
                    "DANTAS, M. Redes de comunicação e computadores: abordagem quantitativa. Visual Books, 2009. ISBN 9788575022559.\n" +
                    "PETERSON, L. L.; DAVIE, B. S. Redes de Computadores: Uma Abordagem de Sistemas, 3.a edição. Campus Elsevier, 2004.\n" +
                    "SOARES, L. F. G; SOUZA FILHO, G. L.; COLCHER, S. Redes de computadores: das LANS, MANS e WANS às Redes ATM. Editora Campus, 1995. ISBN 857001998X.\n" +
                    "STALLINGS, W. Data and Computer Communications, 8th edition, Pearson/Prentice Hall, 2007.\n" +
                    "TORRES, G. Redes de computadores: curso completo. Axcel Books, 2001.\n"
            },
            {
                "title": "Introdução à Língua Brasileira de Sinais",
                "body": {
                    "theme1": "Núcleo <br>NE",
                    "theme2": "Teórica <br>64",
                    "theme3": "Prática <br>0",
                    "theme4": "Total <br>64",
                    "theme5": "Período <br>4º",
                    "theme6": "Unidade <br>LETRAS",
                    "theme7": "Obrigatória <br>Não",
                    "theme8": "Pré-requisito <br>Nenhum",
                },
                "subtitle": "Ementa",
                "text": "Introdução às práticas de compreensão e produção em LIBRAS através do uso de estruturas e funções comunicativas elementares. <br>" +
                    "Concepções sobre a Língua de Sinais. <br>" +
                    "O surdo e a sociedade.<br>",
                "subtitle2": "Bibliografia Básica",
                "bibliografia": "FELIPE, T.; MONTEIRO, M. S. LIBRAS em contexto. Curso Básico. Brasília: Ministério da Educação e do Desporto/Secretaria de Educação Especial, 2001.\n" +
                    "PEREIRA, M. C. C.; et al. LIBRAS – Conhecimento além dos sinais. São Paulo: Pearson, 2011.\n" +
                    "PIMENTA, N.; QUADROS, R. M. Curso de LIBRAS 1 – Iniciante. 3.a edição. Porto Alegre: Pallotti, 2008.\n" +
                    "\nBibliografia Complementar\n\n" +
                    "ALMEIDA, E. C.; DUARTE, P. M. Atividades ilustradas em sinais da Libras. São Paulo: Revinter, 2004.\n" +
                    "BRITO, L. F. Por uma gramática de língua de sinais. Rio de Janeiro: Tempo Brasileiro, 1995.\n" +
                    "CAPOVILLA, F. C.; RAPHAEL, W. D.; MAURÍCIO, A. C. L. Dicionário Enciclopédico Ilustrado Trilíngue da Língua de Sinais Brasileira, v 1 e 2. São Paulo: Editora da Universidade de São Paulo, 2010.\n" +
                    "CAPOVILLA, F. C.; RAPHAEL, W. D. (ed.). Enciclopédia da Língua de Sinais Brasileira. v. 1 e 2. São Paulo: EDUSP, 2004.\n" +
                    "GESSER, A. LIBRAS? Que língua é essa?: Crenças e preconceitos em torno da língua de sinais e da realidade surda. São Paulo: Parábola Editorial, 2009.\n" +
                    "QUADROS, R. M.; KARNOPP, L. Língua de sinais brasileira: estudos linguísticos. ARTMED: Porto Alegre, 2004.\n"
            },
            {
                "title": "Compiladores",
                "body": {
                    "theme1": "Núcleo <br>NE",
                    "theme2": "Teórica <br>64",
                    "theme3": "Prática <br>0",
                    "theme4": "Total <br>64",
                    "theme5": "Período <br>4º",
                    "theme6": "Unidade <br>INF",
                    "theme7": "Obrigatória <br>Não",
                    "theme8": "Pré-requisito <br>Linguagens Formais e Autômatos<br>" +
                                "Algoritmos e Estruturas de Dados 2",
                },
                "subtitle": "Ementa",
                "text": "A estrutura de um compilador. <br>" +
                    "Análises léxica e sintática. <br>" +
                    "Definições dirigidas por sintaxe e análise semântica. <br>" +
                    "Organização da tabela de símbolos. <br>" +
                    "Representação intermediária do programa-fonte. <br>" +
                    "Geração do código-objeto da compilação. <br>" +
                    "Introdução à otimização do código-objeto. <br>" +
                    "Implementação de um compilador.<br>",
                "subtitle2": "Bibliografia Básica",
                "bibliografia": "AHO, A. V; LAM, M. S.; SETHI, R.; ULLMAN, J. D. Compiladores: Princípios, técnicas e ferramentas. 2.a ed. Pearson-Addison-Wesley, 2008.\n" +
                    "LOUDEN, K. C. Compiladores - Princípios e Práticas. Editora Thompson 2004.\n" +
                    "APPEL, A. W. Modern Compiler Implementation in C - Basic Techiniques. Cambridge University Press, 1997.\n" +
                    "\nBibliografia complementar\n\n" +
                    "APPEL, A. W. Modern Compiler Implementation in Java. 2nd edition. New York: Cambridge University Press, 2002.\n" +
                    "HOLMES, J. Modern Compiler Implementation in Java. Prentice Hall, 1995.\n" +
                    "MUCHNICK, S. S. Advanced Compiler Design and Implementation. Morgan Kaufmann, 1997.\n" +
                    "HANSON, D. R.; FRASER, C. W. A Retargetable C Compiler: Design and Implementation. Benjamin Cummings Pub., 1995.\n" +
                    "LEBLANC, R. J.; FISCHER, C. N. Crafting a Compiler with C.  Benjamin/Cummings, 1991.\n"
            }
        ], // Fecha o Quarto
        [  // Quinto Semestre
            {
                "title": "Construção de Software",
                "body": {
                    "theme1": "Núcleo <br>NC",
                    "theme2": "Teórica <br>48",
                    "theme3": "Prática <br>80",
                    "theme4": "Total <br>128",
                    "theme5": "Período <br>5º",
                    "theme6": "Unidade <br>INF",
                    "theme7": "Obrigatória <br>Sim",
                    "theme8": "Pré-requisito <br>Nenhum",
                },
                "subtitle": "Ementa",
                "text": "Visão geral (4h): construção (minimizar complexidade, antecipação de mudança, verificação, padrões), projeto de software (software design), qualidade de produto. <br>" +
                    "Planejamento (8h): linguagens de programação e processos de construção. <br>" +
                    "Gerência de construção (16h): controle de versão, inspeção e revisão de código.<br>" +
                    "Fundamentos de codificação (32h): estratégias recomendadas para criar código, variáveis, classes, interfaces, polimorfismo, rotinas, recursão, condições, laços, tratamento de exceção, reflexão, programação defensiva, padrão de codificação (leiaute e estilo), documentação, ferramentas de programação.<br>" +
                    "Projeto (design) detalhado e codificação (32h): noções de projeto detalhado, especificação de projeto, análise sintática (parsing), expressões regulares, parametrização (generics), closure, logging, configuração de software em tempo de execução. Internacionalização. Técnicas de construção baseadas em estado e tabelas. <br>" +
                    "Refatoração (8h). <br>" +
                    "Testes de unidade (16h).<br>" +
                    "Detecção e remoção de defeitos (debugging) (8h). <br>" +
                    "Integração (4h): integração contínua. <br>" +
                    "<br>Condições mínimas (estar apto a):<br><br>" +
                    "(Segue instruções). Explicar a construção de software, a relação dessa área de conhecimento com as demais da engenharia de software e a relação com o conceito de sistema.<br>" +
                    "(Faz com orientação). Usar e configurar ferramentas para edição, documentação, compilação, depuração (debugging), build, teste, controle de versão, coleta de medidas (desempenho, consumo de memória, análise estática e cobertura), integração contínua, e aplicativos fundamentais de linha de comandos.<br>" +
                    "(Faz com orientação). Criar código orientado a objetos em conformidade com o projeto (design) detalhado seguindo estratégias recomendadas.<br>" +
                    "(Segue instruções). Usar processos para a construção de software (criação de código, controle de versão, inspeção e integração).<br>" +
                    "(Segue instruções). Detalhar projeto (design) em conformidade com requisitos de software.<br>" +
                    "(Segue instruções). Depurar (debugging) código.<br>" +
                    "(Segue instruções). Criar testes de unidade básicos empregando estratégias recomendadas.<br>" +
                    "(Segue instruções). Localizar e reutilizar código (bibliotecas e frameworks).<br>" +
                    "(Segue instruções). Colaborar com a construção de código em equipe.<br>" +
                    "(Segue instruções). Avaliar a qualidade interna de código e, quando apropriado, aplicar estratégias recomendadas de refatoração.<br>",
                "subtitle2": "Bibliografia Básica",
                "bibliografia": "MCCONNELL, S. Code Complete: um guia prático para a construção de software 2.a edição. Porto Alegre, RS: Bookman, 2005. ISBN 8536305045.\n" +
                    "GOODLIFFE, P. Como ser um programador melhor. Novatec, 2015. ISBN 978-85-7522-415-1.\n" +
                    "ORAM, A.; WILSON, G. Beautiful code. O'Reilly, 2007. ISBN 9780596510046.\n" +
                    "\nBibliografia complementar\n\n" +
                    "FOWLER, M. Refatoração: aperfeiçoando o projeto de código existente Porto Alegre: Bookman, 2004, ISBN 8536303956.\n" +
                    "IRVINE, K. R. C++ and object-oriented programming Upper Saddle River: Prentice-Hall, 1997. 526 p. Bibliografia e indice ISBN 0023598522 (broch.)\n" +
                    "BECK, K. Implementation patterns Upper Saddle River, NJ: Addison-Wesley, 2008. ISBN 0321413091.\n" +
                    "MARTIN, R. C. Clean code: a handbook of agile software craftsmanship. Prentice Hall, 2009. ISBN 0132350882.\n" +
                    "AGANS, D. J. Debugging the nine indispensable rules for finding even the most elusive software and hardware problems. AMACOM, 2002. ISBN 0814471684.\n"
            },
            {
                "title": "Modelagem de Software",
                "body": {
                    "theme1": "Núcleo <br>NC",
                    "theme2": "Teórica <br>16",
                    "theme3": "Prática <br>48",
                    "theme4": "Total <br>64",
                    "theme5": "Período <br>5º",
                    "theme6": "Unidade <br>INF",
                    "theme7": "Obrigatória <br>Sim",
                    "theme8": "Pré-requisito <br>Nenhum",
                },
                "subtitle": "Ementa",
                "text": "Conceitos (4h): software, qualidade de software, requisitos de software, projeto de software.<br>" +
                    "Processo de projeto de software (4h).<br>" +
                    "Notações para registro de modelos orientados a objetos (16h).<br>" +
                    "Modelagem de software orientado a objetos (40h). <br>" +
                    "<br>Condições mínimas (estar apto a)<br><br>" +
                    "(Faz com orientação). Explicar o que é software, qualidade de software, requisitos de software e a relação entre eles.<br>" +
                    "(Faz sem orientação). Empregar notações para registro de projeto de software orientado a objetos.<br>" +
                    "(Segue instruções). Criar modelos de projeto de software orientado a objetos.<br>",
                "subtitle2": "Bibliografia Básica",
                "bibliografia": "EVANS, E. Domain-driven design: tackling complexity in the heart of software Boston, MA: Addison-Wesley, 2004, ISBN 0321125215.\n" +
                    "MCLAUGHLIN, B. D.; POLLICE, G.; WEST, D. Head First Object-Oriented Analysis & Design, O’Reilly, 2006.\n" +
                    "AMBLER, S. W. Agile modeling: effective practices for eXtreme programming and the unified process. Wiley, 2002. ISBN 0471202827.\n" +
                    "\nBibliografia complementar\n\n" +
                    "MILLETT, S.; TUNE, N. Patterns, Principles and Practices of Domain-Driven Design. Wrox, 2015.\n" +
                    "FOWLER, M. Analysis patternsreusable object models. Addison-Wesley, 1997. ISBN 0201895420.\n" +
                    "MELLOR, S. J; SHLAER, S. Análise de sistemas orientada para objetos. São Paulo: McGraw-Hill, 1990.\n" +
                    "KOWAL, J. A Behavior models: specifying user's expectations. Prentice Hall, 1992. ISBN 0132927152.\n" +
                    "WAGNER, F. Modeling software with finite state machinesa practical approach. Auerbach, 2006. ISBN 9780849380860\n"
            },
            {
                "title": "Processos de Software",
                "body": {
                    "theme1": "Núcleo <br>NC",
                    "theme2": "Teórica <br>32",
                    "theme3": "Prática <br>32",
                    "theme4": "Total <br>64",
                    "theme5": "Período <br>5º",
                    "theme6": "Unidade <br>INF",
                    "theme7": "Obrigatória <br>Sim",
                    "theme8": "Pré-requisito <br>Nenhum",
                },
                "subtitle": "Ementa",
                "text": "Visão geral (8h): processo, método e modelo.<br>" +
                    "Processos específicos de software: processos de implementação (12h), processos de suporte (12h) e processos de reutilização (2h).<br>" +
                    "Qualidade de Processo: modelos de qualidade de processos (12h), avaliação da qualidade do processo (12h) e abordagens de implementação de processo (6h).<br>" +
                    "<br>Condições mínimas (estar apto a)<br><br>" +
                    "(Segue instruções). Explicar processos de software, a relação dessa área de conhecimento com as demais da engenharia de software e a relação com o conceito de sistema.<br>" +
                    "(Faz sem orientação). Correlacionar os conceitos de processo de software, método de software, modelo de software, modelo de processo e modelo de qualidade de processo.<br>" +
                    "(Faz sem orientação). Explicar quais são os processos específicos de software: objetivo de cada processo e principais resultados.<br>" +
                    "(Segue instruções). Explicar o uso de modelos de qualidade de processo: implementação e avaliação.<br>" +
                    "(Segue instruções). Obter resultados de processo usando métodos e modelos.<br>",
                "subtitle2": "Bibliografia Básica",
                "bibliografia": "FAIRLEY, R. E. Managing and Leading Software Projects, Wiley-IEEE Computer Society Press, 2009.\n" +
                    "ISO/IEC/IEEE 12207:2008. Standard for Systems and Software Engineering-Software Life Cycle Processes. Portal: http://goo.gl/5ixAtq.\n" +
                    "LARMAN, C. Agile and iterative development: a manager's guide. Addison-Wesley, 2004. ISBN 9780131111554.\n" +
                    "\nBibliografia Complementar\n\n" +
                    "JOHNSON, K. A.; KULPA, M. K. Interpreting the CMMIa process improvement approach. Auerbach, 2003. ISBN 0849316545.\n" +
                    "BEEDLE, M.; SCHWABER, K. Agile software development with Scrum. Prentice Hall, 2002. ISBN 0130676349.\n" +
                    "PROWELL, S. J. Cleanroom software engineering technology and process Reading, Mass.: Addison-Wesley, 1999. ISBN 0201854805.\n" +
                    "CAPUTO, K. CMM implementation guide choreographing software process improvement. Addison-Wesley, 1998. ISBN 0201379384.\n" +
                    "MAGUIRE, S. Debugging the development processpractical strategies for staying focused, hitting ship dates, and building solid teams. Microsoft, 1994. ISBN 1556156502.\n"
            },
            {
                "title": "Engenharia de Sistemas",
                "body": {
                    "theme1": "Núcleo <br>NC",
                    "theme2": "Teórica <br>64",
                    "theme3": "Prática <br>0",
                    "theme4": "Total <br>64",
                    "theme5": "Período <br>5º",
                    "theme6": "Unidade <br>INF",
                    "theme7": "Obrigatória <br>Sim",
                    "theme8": "Pré-requisito <br>Nenhum",
                },
                "subtitle": "Ementa",
                "text": "Fundamentos de engenharia (16h): métodos empíricos e técnicas experimentais; análise estatística; medição; design; modelagem, prototipação e simulação; normas e padrões; análise de causa raiz. <br>" +
                    "Fundamentos de sistema (16h): taxonomias de sistema; sistemas de engenharia (sistemas produzidos por engenharia - engineered systems); sistemas intensivos em software (software-intensive systems); sistemas de sistemas; complexidade de sistemas; propriedades emergentes; princípios do pensamento sistêmico; representação de sistemas por modelos. <br>" +
                    "Engenharia de Sistemas (32h): abordagens e metodologias; partes interessadas (stakeholders) e suas necessidades; ciclo de vida de sistemas de engenharia (concepção, conceitos operacionais, design, validação de design, construção, validação de construção, implantação, sustentação e descontinuação); processos do ciclo de vida de sistemas (negociação, preparação para projeto organizacional, gestão técnica, processos técnicos); qualidade de processo. <br>" +
                    "<br>Condições mínimas (estar apto a)<br><br>" +
                    "(Segue instruções). Modelar o ciclo de vida de um sistema intensivo em software, considerando as implicações e perspectivas dos processos do ciclo de vida de sistemas.<br>" +
                    "(Faz com orientação). Definir o conceito do sistema proposto (propósito desejado, contexto operacional, partes interessadas e conceito de uso do sistema).<br>" +
                    "(Segue instruções). Selecionar um modelo de ciclo de vida de software adequado ao modelo de ciclo de vida de engenharia de sistemas e integrar os dois modelos.<br>" +
                    "(Faz com orientação). Desenvolver conceitos operacionais do sistema (ambientes operacionais, características priorizadas, atributos de qualidade, cenários operacionais, suposições, dependências, limitações e exclusões).<br>",
                "subtitle2": "Bibliografia Básica",
                "bibliografia": "SCHNEIDEWIND, N. Systems and Software Engineering with Applications. New York, NY: IEEE, 2009.\n" +
                    "INCOSE. Systems Engineering Handbook: A Guide for System Life Cycle Processes and Activities, version 3.2.2. International Council on Systems Engineering (INCOSE), INCOSE-TP-2003-002-03.2.2, 2012. \n" +
                    "WIDRIG, D.; LEFFINGWELL, D. Managing software requirements: a unified approach Boston: Addison-Wesley, 2001. ISBN 0201615932.\n" +
                    "\nBibliografia complementar\n\n" +
                    "MADACHY, R. J. Systems Engineering Principles for Software Engineers (Chapman & Hall/CRC Innovations in Software Engineering and Software Development Series) 1st Edition, CRC Press, 2016.\n" +
                    "WILSON, W. E. Conceptos sobre ingenieria de sistemas Buenos Aires: Centro regional de Ayuda Tecnica, 1968. 254 p., il.\n" +
                    "SILVA FILHO, B. S.; NISE, N. S. Engenharia de sistemas de controle. 3.a edição. LTC, 2002, ISBN 85-216-1301-6.\n" +
                    "MAFFEO, B. Engenharia de software e especificação de sistemas. Rio de Janeiro: Campus, 1992. 484 p. ISBN 8570017014.\n" +
                    "NASCIMENTO, J. B. Metodologias de desenvolvimento de sistemas. São Paulo: Erica, 1993, ISBN 8571941483.\n"
            }
        ], // Fecha o Quinto
        [
            {
                "title": "Design de Software",
                "body": {
                    "theme1": "Núcleo <br>NC",
                    "theme2": "Teórica <br>48",
                    "theme3": "Prática <br>80",
                    "theme4": "Total <br>128",
                    "theme5": "Período <br>6º",
                    "theme6": "Unidade <br>INF",
                    "theme7": "Obrigatória <br>Sim",
                    "theme8": "Pré-requisito <br>Nenhum",
                },
                "subtitle": "Ementa",
                "text": "Conceitos (8h): design, software, qualidade de software, requisitos de software, arquitetura de software e projeto detalhado.<br>" +
                    "Contexto de projeto de software (4h).<br>" +
                    "Processos e artefatos de projeto de software (8h).<br>" +
                    "Notações de projeto de software (8h).<br>" +
                    "Princípios e fundamentos de projeto de software (16h): abstração, acoplamento, coesão, decomposição, encapsulamento, separar interface e implementação, suficiência, completitude, simplicidade e separation of concerns. <br>" +
                    "Aspectos de projeto de software (16h): concorrência, controle e tratamento de eventos, tratamento de exceção, persistência, distribuição, interação (apresentação). <br>" +
                    "Qualidade de projeto de software (8h): técnicas de avaliação, medidas, ferramentas.<br>" +
                    "Métodos e estratégias de projeto (4h).<br>" +
                    "Método para projeto orientado a objetos (4h). <br>" +
                    "Padrões de projeto orientado a objetos (16h).<br>" +
                    "Prática de projeto de software orientado a objetos (36h).<br>" +
                    "<br>Condições mínimas (estar apto a):<br><br>" +
                    "(Faz sem orientação). Explicar o que é software, qualidade de software, requisitos de software, arquitetura de software, projeto detalhado, design, e a relação entre eles.<br>" +
                    "(Faz com orientação). Aplicar princípios de projeto de software.<br>" +
                    "(Faz com orientação). Empregar aspectos de projeto de software.<br>" +
                    "(Faz com orientação). Fazer uso de medidas de qualidade de projeto de software.<br>" +
                    "(Segue instruções). Criar projeto de software a partir de um problema.<br>",
                "subtitle2": "Bibliografia Básica",
                "bibliografia": "BUDGEN, D. Software Design, International Edition, 2nd Edition, Pearson Education, 2011.\n" +
                    "HALL, G. M. Adptive Code via C#: Agile coding with design patterns and SOLID principles. Microsoft Press, 2014.\n" +
                    "RUPING, A. Agile documentationa pattern guide to producing lightweight documents for software projects. Wiley, 2003. ISBN 0470856173.\n" +
                    "\nBibliografia complementar \n\n" +
                    "MILLETT, S.; TUNE, N. Patterns, Principles, and Practices of Domain-Driven Design, John Wiley & Sons, 2015.\n" +
                    "ARGILA, C.; YOURDON, E. Análise e projeto orientados a objetos: estudos de casos São Paulo: Makron Books, 1999. ISBN 8534609756.\n" +
                    "LARMAN, C. Applyng UML and patternsan introduction to object-oriented analysis and design. Prentice Hall PTR, 1997. ISBN 0137488807.\n" +
                    "EVANS, E. Domain-driven designtackling complexity in the heart of software Boston, MA: Addison-Wesley, 2004. ISBN 0321125215.\n" +
                    "HORSTMANN, C. S. Object-oriented design & patterns. 2nd edition. Hoboken, NJ: Wiley, 2006. ISBN 0471744875.\n"
            },
            {
                "title": "Domínios de Software",
                "body": {
                    "theme1": "Núcleo <br>NC",
                    "theme2": "Teórica <br>16",
                    "theme3": "Prática <br>48",
                    "theme4": "Total <br>64",
                    "theme5": "Período <br>6º",
                    "theme6": "Unidade <br>INF",
                    "theme7": "Obrigatória <br>Sim",
                    "theme8": "Pré-requisito <br>Nenhum",
                },
                "subtitle": "Ementa",
                "text": "Visão ampla de domínios de desenvolvimento (4h): sistemas, componentes e a relação entre eles.<br>" +
                    "Especificidades de alguns domínios de desenvolvimento (8h).<br>" +
                    "Especificidades de um domínio (12h): requisitos, projeto, construção.<br>" +
                    "Desenvolvimento de software em um domínio (ênfase na construção) (40h).<br>" +
                    "<br>Condições mínimas (estar apto a):<br><br>" +
                    "(Faz com orientação). Explicar a construção de software, a relação dessa área de conhecimento com as demais da engenharia de software e a relação com o conceito de sistema.<br>" +
                    "(Faz com orientação). Usar e configurar ferramentas para edição, documentação, compilação, depuração (debugging), build, teste, controle de versão, coleta de medidas (desempenho, consumo de memória, análise estática e cobertura), integração contínua, e aplicativos fundamentais de linha de comandos.<br>" +
                    "(Faz com orientação). Criar código orientado a objetos em conformidade com o projeto (design) detalhado seguindo estratégias recomendadas.<br>" +
                    "(Segue instruções). Usar processos para a construção de software (criação de código, controle de versão, inspeção e integração).<br>" +
                    "(Segue instruções). Detalhar projeto (design) em conformidade com requisitos de software.<br>" +
                    "(Segue instruções). Colaborar com a construção de código em equipe.<br>" +
                    "(Segue instruções). Explicar domínios de desenvolvimento (categorias) e as especificidades correspondentes.<br>" +
                    "(Segue instruções). Explicar um domínio de software e as estratégias de desenvolvimento correspondentes.<br>",
                "subtitle2": "Bibliografia Básica",
                "bibliografia": "PILONE, D.; MILES, R.; Head-First Software Development, O’Reilly, 2008.\n" +
                    "MCLAUGHLIN, B. D.; POLLICE, G.; WEST, D. Head First Object-Oriented Analysis & Design, O’Reilly, 2006.\n" +
                    "BOOCH, G. Object-oriented analysis and design with applications. 2nd edition. Addison-Wesley, 1994. ISBN 0805353402.\n" +
                    "\nBibliografia complementar\n\n" +
                    "WAZLAWICK, R. S. Análise e design orientados a objetos para sistemas de informação: Modelagem com UML, OCL e IFML. 3.a edição. Campus, 2010.\n" +
                    "PENKER, M.; ERIKSSON, H. E. Business modeling with UML: business patterns at work. John Wiley & Sons, 2000. ISBN 0471295515. \n" +
                    "ODELL, J. J. Advanced object-oriented analysis and design using UML. Cambridge University Press, SIGS Books, 1998. ISBN 052164819X\n" +
                    "COCKBURN, A. Agile software development Boston: Addison-Wesley, 2002. (Agile software development series). ISBN 0201699699.\n" +
                    "BEEDLE, M.; SCHWABER, K. Agile software development with Scrum. Prentice Hall, 2002. (Series in agile software development). ISBN 0130676349.\n"
            },
            {
                "title": "Processos de Qualidade de Software",
                "body": {
                    "theme1": "Núcleo <br>NC",
                    "theme2": "Teórica <br>48",
                    "theme3": "Prática <br>16",
                    "theme4": "Total <br>64",
                    "theme5": "Período <br>6º",
                    "theme6": "Unidade <br>INF",
                    "theme7": "Obrigatória <br>Sim",
                    "theme8": "Pré-requisito <br>Nenhum",
                },
                "subtitle": "Ementa",
                "text": "Visão Geral de Qualidade de Software (4h): custos e impactos da qualidade de software, questões éticas e culturais da qualidade de software.<br>" +
                    "Processo de garantia da qualidade de software (10h): garantia do produto e garantia do processo.<br>" +
                    "Processo de Verificação e Validação de Software (36h): requisito, projeto (design), código, integração, documentação. <br>" +
                    "Processos de Revisão e Auditoria de Software (14h): revisões gerenciais e revisões técnicas.<br>" +
                    "<br>Condições mínimas (estar apto a)<br><br>" +
                    "(Faz sem orientação). Explicar processos de qualidade de software, a relação dessa área de conhecimento com as demais da engenharia de software e a relação com o conceito de sistema.<br>" +
                    "(Faz com orientação). Explicar a diferença e a relação entre a garantia do produto e a garantia do processo.<br>" +
                    "(Segue instruções). Usar um processo da garantia da qualidade de software<br>" +
                    "(Segue instruções). Usar um processo para a verificação e validação de software.<br>" +
                    "(Segue instruções). Usar um processo para a revisão e auditoria de software. <br>" +
                    "(Faz sem orientação). Colaborar em uma equipe na execução de um processo de qualidade.<br>" +
                    "(Segue instruções). Documentar resultados dos processos de qualidade de software.<br>" +
                    "(Segue instruções). Identificar e utilizar ferramentas de apoio ao controle de qualidade de artefatos de software.<br>",
                "subtitle2": "Bibliografia Básica",
                "bibliografia": "Stefan Wagner. Software Product Quality Control. Springer-Verlag Berlin Heidelberg. 2013.\n" +
                    "Software Quality Assurance: From Theory to Implementation, Daniel Galin, Addison-Wesley, 2004\n" +
                    "MURPHY, Mark L C/C++ software quality tools Upper Saddle River: Prentice Hall PTR, 1996. ISBN 0134451236.\n" +
                    "\nBibliografia Complementar\n\n" +
                    "OSCIANSK, A.; SOARES, M. S. Qualidade de Software. Editora Novatec, 2007.\n" +
                    "CERTIFICAÇÃO CERTICS: um instrumento de política pública para inovação tecnológica em software. CTI Renato Archer, 2015. ISBN 9788565163088.\n" +
                    "KELLIHER, T. P.; KEEGAN, J. G.; OLIVER, D. W. Engineering complex systems with models and objects. McGraw-Hill, 1997. ISBN 0070481881.\n" +
                    "KAN, S. H. Metrics and models in software quality engineering. 2nd edition. Addison-Wesley, 2003. ISBN 0201729156.\n" +
                    "BARTIÉ, A. Garantia da qualidade de software. Campus, 2002. ISBN 8535211245.\n"
            },
            {
                "title": "Gerência de Projeto de Software",
                "body": {
                    "theme1": "Núcleo <br>NC",
                    "theme2": "Teórica <br>32",
                    "theme3": "Prática <br>32",
                    "theme4": "Total <br>64",
                    "theme5": "Período <br>6º",
                    "theme6": "Unidade <br>INF",
                    "theme7": "Obrigatória <br>Sim",
                    "theme8": "Pré-requisito <br>Nenhum",
                },
                "subtitle": "Ementa",
                "text": "Projeto e gerência de projeto (4h): ciclo de vida de produto, serviço e projeto; partes interessadas (stakeholders); correlação entre projetos, operações e programas; gerência de portfólio de projetos; escritório de projetos (PMO). <br>" +
                    "Tipos de projeto de software (4h): aquisição, desenvolvimento, refatoração, descontinuação. <br>" +
                    "Tipos de ciclo de vida de projeto de software (4h): preditivo, iterativo, adaptativo; processos empíricos e processos definidos e sua relação com métodos ágeis e métodos planejados para gerência de projeto de software. <br>" +
                    "Modelos de qualidade de processo de gerência de projeto de software (4h). <br>" +
                    "Áreas de conhecimento da gerência de projetos aplicadas a projetos de software (48h): escopo, tempo, custo, qualidade, recursos humanos, comunicações, riscos, aquisições, integração e partes interessadas.<br>" +
                    "<br>Condições mínimas (estar apto a)<br><br>" +
                    "(Segue instruções). Usar normas, modelos e ferramentas de gerência de projeto para planejamento e acompanhamento de projeto de software.<br>" +
                    "(Faz com orientação). Selecionar e implementar o tipo de modelo de processo (dirigido por plano, incremental ou adaptativo) de acordo com as características do contexto do projeto de software.<br>" +
                    "(Segue instruções). Selecionar e implementar o tipo de ciclo de vida de software (ou paradigma de engenharia de software - cascata, espiral, iterativo, baseado em modelo de maturidade, etc.) de acordo com as características do contexto do projeto de software.<br>",
                "subtitle2": "Bibliografia Básica",
                "bibliografia": "PMI. Um Guia do Conhecimento em Gerenciamento de Projetos. 5.a edição. São Paulo: Saraiva, 2012. ISBN 9788502223721.\n" +
                    "CHEMUTURI, M. K.; CAGLEY, T. M. Jr. Mastering Software Project Management: Best Practices, Tools and Techniques. J. Ross Publishing, 2010. ISBN-13: 978-1604270341.\n" +
                    "COHN, M. Agile estimating and planning Upper Saddle River, NJ: Prentice Hall Professional Technical Reference, 2006. ISBN 0131479415.\n" +
                    "\nBibliografia complementar\n\n" +
                    "FAIRLEY, R.E. Managing and Leading Software Projects. John Wiley & Sons, 2009.\n" +
                    "HIGHSMITH, J. A. Agile project management: creating innovative products 2nd. edition. Addison-Wesley, 2010. ISBN 0321658396.\n" +
                    "SCHWABER, K. Agile project management with Scrum. Microsoft Press, 2004. ISBN 073561993X.\n" +
                    "DEMARCO, T. Controle de projetos de software: gerenciamento, avaliação, estimativa. Campus, 1991. ISBN 8570015283.\n" +
                    "MARTINS, J. C. C. Gerenciando projetos de desenvolvimento de software com PMI, RUP e UML. 4.a edição. Brasport, 2007.\n"
            },
        ], // Fecha o Sexto
        [
            {
                "title": "Software Concorrente e Distribuído",
                "body": {
                    "theme1": "Núcleo <br>NC",
                    "theme2": "Teórica <br>32",
                    "theme3": "Prática <br>32",
                    "theme4": "Total <br>64",
                    "theme5": "Período <br>7º",
                    "theme6": "Unidade <br>INF",
                    "theme7": "Obrigatória <br>Sim",
                    "theme8": "Pré-requisito <br>Nenhum",
                },
                "subtitle": "Ementa",
                "text": "Qualidade de produto (4h): escalabilidade, tolerância a falhas, disponibilidade, desempenho.<br>" +
                    "Conceitos (4h): middleware, distribuição, paralelismo, concorrência, RESTful, web, internet das coisas, contêineres, troca de mensagens, micro-serviços, serviços web.<br>" +
                    "Métodos para construção de software distribuído e para construção de software concorrente (8h).<br>" +
                    "Concorrência (16h): paralelismo, aplicações IO-intensive e CPU-intensive, thread safe, memória compartilhada, Software Transactional Memory, atores, abordagens para explorar concorrência. <br>" +
                    "Distribuição (24h): projeto, implementação e uso de interface de programação, RESTful, serviços web e micro-serviços (microservices).<br>" +
                    "Troca de mensagens (messaging) (8h).<br>" +
                    "<br>Condições mínimas (estar apto a)<br><br>" +
                    "(Faz com orientação). Explicar a construção de software, concorrência/distribuição e a relação desses com a engenharia de software e de sistema.<br>" +
                    "(Faz com orientação). Usar e configurar ferramentas para edição, documentação, compilação, depuração (debugging), build, teste, controle de versão, coleta de medidas (desempenho, consumo de memória, análise estática e cobertura), integração contínua, e aplicativos fundamentais de linha de comandos.<br>" +
                    "(Faz com orientação). Criar código orientado a objetos em conformidade com o projeto (design) detalhado seguindo estratégias recomendadas.<br>" +
                    "(Segue instruções). Usar processos para a construção de software (criação de código, controle de versão, inspeção e integração).<br>" +
                    "(Segue instruções). Detalhar projeto (design) em conformidade com requisitos de software.<br>" +
                    "(Segue instruções). Localizar e reutilizar código (bibliotecas e frameworks).<br>" +
                    "(Segue instruções). Colaborar com a construção de código em equipe.<br>" +
                    "(Segue instruções). Avaliar a qualidade interna de código e, quando apropriado, aplicar estratégias recomendadas de refatoração.<br>" +
                    "(Segue instruções). Explicar conceitos de concorrência e distribuição. <br>" +
                    "(Segue instruções). Criar código que faz uso de concorrência, distribuição e ferramentas correlatas.<br>",
                "subtitle2": "Bibliografia Básica",
                "bibliografia": "BUTCHER, P. Seven Concurrent Models in Seven Weeks. Pragmatic Bookshelf, 2014. ISBN-10: 1937785653\n" +
                    "DAIGNEAU, R. Service Design Pattern. Addison-Wesley, 2011. ISBN 032154420X.\n" +
                    "FOSTER, I. Designing and building parallel programsconcepts and tools for parallel software engineering Reading, Mass.: Addison-Wesley, 1995. ISBN 0201575949.\n" +
                    "\nBibliografia complementar\n\n" +
                    "NEWMAN, S. Building Microservices. O’Reilly, 2015. \n" +
                    "BARNES, L. L. Client/server & beyound strategies for 21st century. Prentice-Hall, 1997. ISBN 0135325161.\n" +
                    "SHATZ, S. M. Development of distributed software concepts and tools. Macmillan, 1993. ISBN 0024096113.\n" +
                    "PAGE-JONES, M. Fundamentals of object-oriented design in UML.  Addison-Wesley, 2003. ISBN 020169946X.\n" +
                    "RODRIGUES, L.; GUERRAOUI, R. Introduction to reliable distributed programming. Springer, 2006. ISBN 9783540288459.\n"
            },
            {
                "title": "Experiência do Usuário de Software",
                "body": {
                    "theme1": "Núcleo <br>NC",
                    "theme2": "Teórica <br>32",
                    "theme3": "Prática <br>32",
                    "theme4": "Total <br>64",
                    "theme5": "Período <br>7º",
                    "theme6": "Unidade <br>INF",
                    "theme7": "Obrigatória <br>Sim",
                    "theme8": "Pré-requisito <br>Nenhum",
                },
                "subtitle": "Ementa",
                "text": "Qualidade em uso (4h): usabilidade, acessibilidade.<br>" +
                    "Design centrado no usuário (8h): diretrizes, pesquisa, personas, jornadas de usuário, modelagem (especificação) e ferramentas. <br>" +
                    "Projeto de interação (16h): diretrizes, criação, modelagem (especificação) e ferramentas.<br>" +
                    "Design de software e interfaces gráficas (8): padrões arquiteturais para design da camada de apresentação (MVC, MVP, MVVM e outros).<br>" +
                    "Implementação de interfaces (20h).<br>" +
                    "Modelos de validação de experiência (8h): modelos, métodos e técnicas para validação de experiência do usuário.<br>" +
                    "<br>Condições mínimas (estar apto a)<br><br>" +
                    "(Faz com orientação). Explicar a construção de software, experiência do usuário e a relação com a Engenharia de Software e a noção se sistema.<br>" +
                    "(Faz com orientação). Usar e configurar ferramentas para edição, documentação, compilação, depuração (debugging), build, teste, controle de versão, coleta de medidas (desempenho, consumo de memória, análise estática e cobertura), integração contínua, e aplicativos fundamentais de linha de comandos.<br>" +
                    "(Faz com orientação). Criar código orientado a objetos em conformidade com o projeto (design) detalhado seguindo estratégias recomendadas.<br>" +
                    "(Segue instruções). Usar processos para a construção de software (criação de código, controle de versão, inspeção e integração).<br>" +
                    "(Segue instruções). Detalhar projeto (design) em conformidade com requisitos de software.<br>" +
                    "(Segue instruções). Colaborar com a construção de código em equipe.<br>" +
                    "(Segue instruções). Auxiliar na criação de requisitos de usabilidade.<br>" +
                    "(Segue instruções). Criar e registrar projeto de interação que atende requisitos de usabilidade.<br>" +
                    "(Faz com orientação). Usar ferramentas e bibliotecas para o desenvolvimento de código de interfaces.<br>" +
                    "(Faz com orientação). Criar código em conformidade com o projeto de interação correspondente.<br>",
                "subtitle2": "Bibliografia Básica",
                "bibliografia": "GOTHELF, J.; SEIDEN, J. Lean UX: Applying Lean Principles to Improve User Experience, O’Reilly, 2013.\n" +
                    "KRUG, S., Don´t make me think: revisited. New Riders, 2014. ISBN 978-0321965516.\n" +
                    "BORBA, F. E. Ajax: guia de programação. São Paulo: Erica, 2006. ISBN 8536501375.\n" +
                    "\nBibliografia complementar\n\n" +
                    "PREECE, J.; SHARP, H.; ROGERS, Y. Interaction Design: Beyond Human-Computer Interaction, Wiley, 2015. ISBN 978-1119020752.\n" +
                    "CYBIS, W. O. Ergonomia e usabilidade: conhecimentos, métodos e aplicações. 2a. edição. São Paulo: Novatec, 2010. ISBN 9788575222324.\n" +
                    "COUTAZ, J.; BASS, L. Developing software for the user interface. Addison-Wesley, 1991. ISBN 0201510464.\n" +
                    "HARTSON, H. R.; HIX, D. Developing user interfaces: ensuring usability through product & process. Wiley, 1993. ISBN 0471578134.\n" +
                    "OLSEN, D. R. Developing user interfaces. Morgan Kaufmann, 1998. ISBN 1558604189.\n"
            },
            {
                "title": "Arquitetura de Software",
                "body": {
                    "theme1": "Núcleo <br>NC",
                    "theme2": "Teórica <br>32",
                    "theme3": "Prática <br>32",
                    "theme4": "Total <br>64",
                    "theme5": "Período <br>7º",
                    "theme6": "Unidade <br>INF",
                    "theme7": "Obrigatória <br>Sim",
                    "theme8": "Pré-requisito <br>Nenhum",
                },
                "subtitle": "Ementa",
                "text": "Conceitos (4h): software, qualidade de software, requisitos de software, arquitetura de software e projeto detalhado.<br>" +
                    "Requisitos funcionais e requisitos de qualidade (8h): conceituação e identificação de requisitos relevantes para a arquitetura.<br>" +
                    "Documentação de arquitetura de software (8h).<br>" +
                    "Fundamentos de arquitetura de software (4h): importância, contexto, estilos.<br>" +
                    "Método de desenvolvimento de arquitetura de software (8h).<br>" +
                    "Técnicas para satisfazer requisitos de qualidade (16h).<br>" +
                    "Criação de arquiteturas de software (16h). <br>" +
                    "<br>Condições mínimas (estar apto a)<br><br>" +
                    "(Faz sem orientação). Explicar o que é software, qualidade de software, requisitos de software, arquitetura de software, projeto detalhado, e a relação entre eles.<br>" +
                    "(Faz com orientação). Compreender a documentação de arquitetura de software.<br>" +
                    "(Segue instruções). Documentar arquitetura de software.<br>" +
                    "(Segue instruções). Criar arquitetura de software.<br>",
                "subtitle2": "Bibliografia Básica",
                "bibliografia": "BASS, L.; CLEMENTS, P.; KAZMAN, R. Software Architecture in Practice, 3rd edition, Pearson Education, Inc., 2013.\n" +
                    "CLEMENTS, P.; et al. Documenting Software Architectures: Views and Beyond. 2nd edition, Pearson Eduction, 2011. \n" +
                    "MENDES, A. Arquitetura de software: desenvolvimento orientado para arquitetura. Rio de Janeiro: Campus, 2002. ISBN 853521013X.\n" +
                    "\nBibliografia Complementar\n\n" +
                    "CERVANTES, H.; KAZMAN, R. Designing Software Archtectures: A Practical Approach, ISBN-13: 978-0134390789, Addison-Wesley, 2016.\n" +
                    "PUTMAN, J. Architecting with RM-ODP. Prentice Hall, 2001. ISBN 0130191167.\n" +
                    "HEINEMAN, G. T.; COUNCILL, W. T. Component-based software engineering: putting the pieces together. Addison-Wesley, 2001. ISBN 0201704854.\n" +
                    "BOSCH, J. Design and use of software architectures: adopting and evolving a product-line approach. Addison-Wesley, 2000. ISBN 0201674947.\n" +
                    "JOHNSON, R. Expert one-on-one J2EE development without EJB. Wiley Publishing, 2004. ISBN 0764558315.\n"
            },
            {
                "title": "Requisitos de Software",
                "body": {
                    "theme1": "Núcleo <br>NC",
                    "theme2": "Teórica <br>32",
                    "theme3": "Prática <br>32",
                    "theme4": "Total <br>64",
                    "theme5": "Período <br>7º",
                    "theme6": "Unidade <br>INF",
                    "theme7": "Obrigatória <br>Sim",
                    "theme8": "Pré-requisito <br>Nenhum",
                },
                "subtitle": "Ementa",
                "text": "Processo de requisitos (16h): definições básicas, eliciação de requisitos, análise de requisitos, especificação de requisitos, verificação e validação de requisitos.<br>" +
                    "Modelos e métodos da engenharia de requisitos (32).<br>" +
                    "Gerência de projetos de engenharia de requisitos (8).<br>" +
                    "Processo de projeto arquitetural (8h): relação com requisitos.<br>" +
                    "<br>Condições mínimas (estar apto a)<br><br>" +
                    "(Faz sem orientação). Explicar requisitos de software, a relação dessa área de conhecimento com as demais da engenharia de software, arquitetura de software em especial, e a relação com o conceito de sistema.<br>" +
                    "(Segue instruções). Usar um processo de requisitos de software.<br>" +
                    "(Segue instruções). Eliciar de requisitos de software.<br>" +
                    "(Segue instruções). Construir modelos conceituais de software.<br>" +
                    "(Segue instruções). Especificar requisitos de software.<br>" +
                    "(Faz com orientação). Verificar e validar requisitos de software.<br>" +
                    "(Segue instruções). Identificar e utilizar ferramentas de requisitos de software. <br>" +
                    "(Faz sem orientação). Colaborar em uma equipe na execução de um processo de requisitos.<br>",
                "subtitle2": "Bibliografia Básica",
                "bibliografia": "WIEGERS, K. E. Software Requirements. Microsoft Press, 3rd edition, 2013.\n" +
                    "ROBERTSON, S. Mastering the Requirements Process: Getting Requirements Right. Addison-Wesley Professional, 3rd edition, 2012.\n" +
                    "WINTERS, J. P.; SCHNEIDER, G. Applying use cases: a practical guide, 2nd edition. Addison-Wesley, 2001. (The Addison-Wesley object technology series). ISBN 0201708531.\n" +
                    "\nBibliografia Complementar\n\n" +
                    "COCKBURN, A. Writing Effective Use Cases. Addison-Wesley, 2000.\n" +
                    "MELLOR, S. J; SHLAER, S. Análise de sistemas orientada para objetos. São Paulo: McGraw-Hill, 1990.\n" +
                    "MILLER, G.; ARMOUR, F. Advanced use case modeling: software systems. Boston: Addison-Wesley, 2001. (Addison-Wesley object technology series) ISBN 0201615924.\n" +
                    "YOURDON, E.; COAD, P. Análise baseada em objetos. 2a. edição. Rio de Janeiro: Campus, 1996. ISBN 8535200428.\n" +
                    "WIEGERS, K. E. More about software requirements: thorny issues and practical advice. Microsoft Press, 2006. ISBN 9780735622678.\n"
            },
            {
                "title": "Governança e Gestão de Serviços de Software",
                "body": {
                    "theme1": "Núcleo <br>NC",
                    "theme2": "Teórica <br>48",
                    "theme3": "Prática <br>16",
                    "theme4": "Total <br>64",
                    "theme5": "Período <br>7º",
                    "theme6": "Unidade <br>INF",
                    "theme7": "Obrigatória <br>Sim",
                    "theme8": "Pré-requisito <br>Nenhum",
                },
                "subtitle": "Ementa",
                "text": "Governança (8h): governança corporativa; governança de TI (GTI); governança de Software (GS); princípios da GS; conformidade (compliance); alinhamento dos serviços de software ao negócio da organização; normas, frameworks, padrões, modelos de qualidade e de maturidade de GS. <br>" +
                    "Abordagens para GS (8h): aplicação de abordagens de GS em um contexto organizacional. Objetivos de controle para GS; indicadores e avaliação de desempenho de software; direcionamento, avaliação e controle do uso de serviços de software para apoiar os objetivos de uma organização. <br>" +
                    "Planejamento e controle estratégico de software (8h): alinhamento entre objetivos organizacionais e objetivos relacionados a software; avaliação, direcionamento e monitoramento de processos de software; diagnóstico de maturidade de processos de software; alinhamento de políticas de software ao plano diretor de TI de uma organização. Gestão de riscos de software; riscos organizacionais; riscos relacionados à segurança física e lógica de software. <br>" +
                    "Governança de dados (8h): Segurança da informação em uma organização; Segurança de software.<br>" +
                    "Software como um serviço (SaaS) (8h): serviços de Software (SS); gestão de Serviços de Software (GSS); Estratégia organizacional para SS; Modelos, normas e padrões relacionados à GSS. <br>" +
                    "Ciclo de vida de SS (8h): planejamento; desenvolvimento; implantação e sustentação; Operação de SS e apoio (suporte) à operação de SS; Descontinuação de SS. <br>" +
                    "Manutenção de SS (8h): correção, adaptação e evolução de SS; gestão de incidentes e problemas em SS; controle de mudança e de configuração; controle de qualidade. <br>" +
                    "Gerência de processos de negócio (BPM – Business Process Management) aplicada à GSS (8h): representação de SS como processos de negócio; notação para modelagem de processos de negócio (BPMN); análise, validação e evolução de processos de negócio e de SS. <br>" +
                    "<br>Condições mínimas (estar apto a)<br><br>" +
                    "(Segue instruções). Planejar a estratégia de software para uma organização, considerando a pouca disponibilidade de informações de longo prazo, a escassez de recursos para implementação dessa estratégia e a necessidade de alinhamento entre a GS e a governança corporativa.<br>" +
                    "(Faz com orientação). Controlar o uso atual e futuro de software, otimizando o seu valor agregado para o negócio da organização.<br>" +
                    "(Segue instruções). Planejar e implementar (projetar, desenvolver, implantar, monitorar, medir, controlar e sustentar) uma estratégia organizacional para GSS em conformidade com o plano estratégico da organização.<br>" +
                    "(Faz com orientação). Modelar SS e processos de negócio, usando BPMN, em conformidade com os requisitos organizacionais dos processos e serviços.<br>",
                "subtitle2": "Bibliografia Básica",
                "bibliografia": "GREMBERGEN, W. V.; HAES, S. Enterprise Governance of Information Technology: Achieving Strategic Alignment and Value. Springer, 2010. ISBN-13 978-1441946621.\n" +
                    "BROOKS, P. Metrics for Service Management: Designing for ITIL. 1st edition. Van Haren Publishing, 2012.\n" +
                    "SHIAVON, M. Acordos de nível operacional para controle do processo de manutenção de software, Mestrado em Engenharia Elétrica, Universidade Federal de Goiás, 2009. \n" +
                    "\nBibliografia complementar \n\n" +
                    "GUTH, S. Contract Negotiation Handbook: Software as a Service. Guth Ventures LLC, 2013.\n" +
                    "ERDOGMUS, H.; TANIR, O. Advances in software engineering comprehension, evaluation, and evolution. Springer, 2002. ISBN 0387951091.\n" +
                    "HASS, A. M. J. Configuration management principles and practice. Addison-Wesley, 2003. (The Agile software development series). ISBN 0321117662.\n" +
                    "MARSHALL, C. Enterprise modeling with UML: designing successful software through business analysis. Addison-Wesley, 2000. ISBN 0201433133.\n" +
                    "CENTRO DE GESTÃO E ESTUDOS ESTRATÉGICOS. Ciência, tecnologia e sociedade: novos modelos de governança. Brasilia, CGEE, 2005.\n"
            }
        ], // Fecha o Sétimo
        [  // Oitavo Semestre
            {
                "title": "Software para Sistemas Ubíquos",
                "body": {
                    "theme1": "Núcleo <br>NC",
                    "theme2": "Teórica <br>32",
                    "theme3": "Prática <br>32",
                    "theme4": "Total <br>64",
                    "theme5": "Período <br>8º",
                    "theme6": "Unidade <br>INF",
                    "theme7": "Obrigatória <br>Sim",
                    "theme8": "Pré-requisito <br>Nenhum",
                },
                "subtitle": "Ementa",
                "text": "Sistemas de informação que fazem uso de dispositivos (ubíquos) (16h): smartphones, sensores, internet das coisas (IoT), stream analytics e aspectos de segurança (vulnerabilidades, criptografia, certificados digitais).<br>" +
                    "Definição de arquiteturas para soluções móveis (16): conectar serviços, possivelmente de grande volume, fluxo e em tempo real, com a necessidade de analisá-los.<br>" +
                    "Desenvolvimento de código para smartphone, sensor ou outro dispositivo capaz de alimentar/receber informações de sistema de informação (32h).<br>" +
                    "<br>Condições mínimas (estar apto a):<br><br>" +
                    "(Faz com orientação). Explicar a construção de software, dispositivos e a relação desses com a engenharia de software e de sistema.<br>" +
                    "(Faz sem orientação). Explicar a construção de software e a relação dessa área de conhecimento com as demais da engenharia de software.<br>" +
                    "(Faz com orientação). Usar e configurar ferramentas para edição, compilação, depuração (debugging), build, teste, controle de versão, coleta de medidas (desempenho, consumo de memória, análise estática e cobertura), integração contínua, e aplicativos de linha de comandos para busca e encadear comandos.<br>" +
                    "(Faz com orientação). Criar código orientado a objetos em conformidade com o projeto (design) detalhado seguindo estratégias recomendadas.<br>" +
                    "(Faz com orientação). Usar processos para a construção de software (criação de código, controle de versão, inspeção e integração).<br>" +
                    "(Faz com orientação). Detalhar projeto (design) em conformidade com requisitos de software.<br>" +
                    "(Faz com orientação). Detalhar projeto de interação (design) em conformidade com requisitos de software.<br>" +
                    "(Faz com orientação). Localizar e reutilizar código (bibliotecas e frameworks).<br>" +
                    "(Faz com orientação). Colaborar com a construção de código em equipe.<br>" +
                    "(Faz com orientação). Explicar a construção de software, segurança e a relação desses com a engenharia de software e de sistema.<br>" +
                    "(Segue instruções). Auxiliar na criação de modelo de ameaça.<br>" +
                    "(Segue instruções). Criar código que faz uso de recursos de segurança (criptografia de dados, assinatura e verificação de assinatura digital).<br>",
                "subtitle2": "Bibliografia Básica",
                "bibliografia": "MCGRAW, G. Software Security: Build Security In. Addison-Wesley, 2006.\n" +
                    "GREENGARD, S. The Internet of Things. The MIT Press, 2015.\n" +
                    "WILMSHURST, T. An introduction to the design of small-scale embedded systems. Palgrave, 2001. ISBN 0333929942.\n" +
                    "\nBibliografia complementar\n\n" +
                    "MANICO, J.; DETLEFESEN, A. Iron-Clad Java: Building Secure Web Applications. McGraw-Hill, 2014.\n" +
                    "HOWARD, M. 19 deadly sins of software securityprogramming flaws and how to fix them. McGraw-Hill/Osborne, 2005. ISBN 0072260858.\n" +
                    "MARK, D. Dominando o desenvolvimento no iPhone: explorando o SDK do iPhone. Alta Books, 2009. ISBN 97885760833757.\n" +
                    "VAHID, F. Embedded system design: a unified hardware/software introduction. John Wiley & Sons, 2002. ISBN 0471386782.\n" +
                    "KERN, C.; KESAVAN, A.; DASWANI, N. Foundations of security: what every programmer needs to know. Apress, 2007. ISBN 9781590597842.\n"
            },
            {
                "title": "Software para Persistência de Dados",
                "body": {
                    "theme1": "Núcleo <br>NC",
                    "theme2": "Teórica <br>32",
                    "theme3": "Prática <br>32",
                    "theme4": "Total <br>64",
                    "theme5": "Período <br>8º",
                    "theme6": "Unidade <br>INF",
                    "theme7": "Obrigatória <br>Sim",
                    "theme8": "Pré-requisito <br>Nenhum",
                },
                "subtitle": "Ementa",
                "text": "Visão geral de persistência (12h): arquivos em formato texto/binário. Serialização de objetos. Documentos XML. JSON. Bancos de dados relacionais. Bancos NoSql. <br>" +
                    "Modelagem e implementação de bancos de dados (28h). <br>" +
                    "Mapeamento entre OO e relacional (8h). <br>" +
                    "Refatoração de bancos de dados (8h).<br>" +
                    "Integração de bancos de dados (8h).<br>" +
                    "<br>Condições mínimas (estar apto a)<br><br>" +
                    "(Faz com orientação). Explicar a construção de software, persistência e a relação desses com a engenharia de software e de sistema.<br>" +
                    "(Segue instruções). Identificar e usar estratégia adequada de persistência de dados para um dado problema.<br>" +
                    "(Faz com orientação). Usar ferramentas para definição e manipulação de bancos de dados.<br>" +
                    "(Faz com orientação). Criar código que cria, busca, atualiza e remove dados em bancos de dados.<br>" +
                    "(Segue instruções) Refatorar (refactoring) bases de dados.<br>" +
                    "Faltou exigências de construção (anteriores).<br>",
                "subtitle2": "Bibliografia Básica",
                "bibliografia": "REDMOND, E.; WILSON, J. Seven databases in Seven Weeks. Pragmatic Bookshelf, 2012. \n" +
                    "MCMURTRY, D. et al. Data Access for Highly-Scalable Solutions: Using SQL, NoSQL, and Polyglot Persistence. Microsoft Press, 2013.\n" +
                    "AMBLER, S. W. Agile database techniques: effective strategies for the agile software developer. Wiley, 2003. ISBN 0471202835.\n" +
                    "\nBibliografia complementar\n\n" +
                    "AMBLER, S. J.; SADALAGE, P. J. Refactoring Databases. Addison-Wesley, 2006.\n" +
                    "GOLENDZINER, L. G.; PRICE, R. T. Bancos de dados para aplicações não convencionais. EBAI, 1989. ISBN 950139879.\n" +
                    "FALINO, J.; HERION, D.; MARTINER, W. Building distributed applications with ADO. John Wiley & Sons, 1999. ISBN 0471317012.\n" +
                    "KING, G.; BAUER, C. Java Persistence com Hibernate. Ciencia Moderna, 2007. ISBN 9788573936148.\n" +
                    "MANNINO, M. V. Projeto, desenvolvimento de aplicações e administração de banco de dados. McGraw-Hill, 2008. ISBN 9788577260201.\n"
            },
            {
                "title": "Padrões de Arquitetura de Software",
                "body": {
                    "theme1": "Núcleo <br>NC",
                    "theme2": "Teórica <br>32",
                    "theme3": "Prática <br>32",
                    "theme4": "Total <br>64",
                    "theme5": "Período <br>8º",
                    "theme6": "Unidade <br>INF",
                    "theme7": "Obrigatória <br>Sim",
                    "theme8": "Pré-requisito <br>Nenhum",
                },
                "subtitle": "Ementa",
                "text": "Conceitos (12h): arquitetura de software e padrões de arquitetura (blackboard, microservices, invocação implícita, arquitetura orientada a serviços, multitier, arquitetura orienta a eventos, plugin, filtros e pipes, MVC.<br>" +
                    "Norma ISO/IEC/IEEE 42010:2011 (8h).<br>" +
                    "Análise (avaliação) de arquiteturas de software (12h). <br>" +
                    "Criação de arquiteturas de software (32h). <br>" +
                    "<br>Condições mínimas (estar apto a)<br><br>" +
                    "(Faz sem orientação). Compreender a documentação de arquitetura de software.<br>" +
                    "(Faz com orientação). Explicar padrões de arquitetura e ilustrar o uso.<br>" +
                    "(Faz com orientação). Documentar arquitetura de software.<br>" +
                    "(Segue instruções). Realizar análise de arquitetura de software.<br>" +
                    "(Segue instruções). Criar arquitetura de software que se beneficia de padrões de arquitetura.<br>",
                "subtitle2": "Bibliografia Básica",
                "bibliografia": "FOWLER, M., Patterns of Enterprise Application Architecture, ISBN-13: 978-0321127426, Addison-Wesley, 2002.\n" +
                    "DAIGNEAU, R., Service Design Patterns, ISBN-13: 978-0321544209, Addison-Wesley, 2011.\n" +
                    "BUSCHMAN, F. Pattern-oriented software architecture. Wiley, 2001. ISBN 0471606952.\n" +
                    "\nBibliografia Complementar\n\n" +
                    "VERNON, V. Implementing Domain-Driven Design. Addison-Wesley, 2013. ISBN 978-0-321-83457-7.\n" +
                    "GAMMA, E. Design patterns elements of reusable object-oriented software. Addison Wesley, 1995. ISBN 0201633612.\n" +
                    "TROTT, J.; SHALLOWAY, A. Design patterns explained: a new perspective on object-oriented design. 2nd ed. Addison-Wesley, 2005. ISBN 0321247140.\n" +
                    "PREE, W. Design patterns for object-oriented software development. Addison-Wesley, 1995. ISBN 0201422948.\n" +
                    "FREEMAN, E. et al. Head First design patterns. O'Reilly, 2004. ISBN 0596007124.\n"
            },
            {
                "title": "Teste de Software",
                "body": {
                    "theme1": "Núcleo <br>NC",
                    "theme2": "Teórica <br>32",
                    "theme3": "Prática <br>32",
                    "theme4": "Total <br>64",
                    "theme5": "Período <br>8º",
                    "theme6": "Unidade <br>INF",
                    "theme7": "Obrigatória <br>Sim",
                    "theme8": "Pré-requisito <br>Nenhum",
                },
                "subtitle": "Ementa",
                "text": "Processo de construção (8h): definições básicas, atividades e documentação. <br>" +
                    "Processo de Teste de Software (56): definições básicas, técnicas de teste, teste baseado em intuição e experiência do engenheiro de software, atividades do processo, documentação e ferramentas.<br>" +
                    "<br>Condições mínimas (estar apto a)<br><br>" +
                    "(Faz sem orientação). Explicar o teste de software, a relação dessa área de conhecimento com as demais da engenharia de software e a relação com o conceito de sistema.<br>" +
                    "(Segue instruções). Usar um processo de teste de software.<br>" +
                    "(Segue instruções). Desenvolver planos de teste para o teste de unidade.<br>" +
                    "(Faz com orientação). Propor casos de teste segundo algum critério da técnica de teste funcional para o teste de unidade.<br>" +
                    "(Faz com orientação). Propor casos de teste segundo algum critério da técnica de teste estrutural para o teste de unidade.<br>" +
                    "(Faz com orientação). Construir código para automação do teste de software.<br>" +
                    "(Segue instruções). Aplicar teste exploratório no teste de sistema.<br>" +
                    "(Faz sem orientação). Executar casos de teste.<br>" +
                    "(Faz sem orientação). Citar e explicar métricas de teste de software.<br>" +
                    "(Segue instruções). Realizar medições pertinentes a teste de software.<br>" +
                    "(Faz com orientação). Documentar atividades do teste de software.<br>" +
                    "(Segue instruções). Identificar e utilizar ferramentas de teste de software. <br>",
                "subtitle2": "Bibliografia Básica",
                "bibliografia": "MYERS, G. J. The Art of Software Testing. Wiley. 2011.\n" +
                    "COPELAND, L. A Practitioner’s Guide to Software Test Design. Artech House, 2003.\n" +
                    "SYKES, D. A.; MCGREGOR, J. D. A practical guide to testing object-oriented software. Addison-Wesley, 2001. ISBN 0201325640.\n" +
                    "\nBibliografia Complementar\n\n" +
                    "MESZAROS, G. xUnit test patternsrefactoring test code. Addison-Wesley, 2007. ISBN 0131495054.\n" +
                    "MOSLEY, D. J. Client-server software testing on the desktop and the Web. Prentice Hall, 2000. ISBN 0131838806.\n" +
                    "GROSS, H. Component-based software testing with UML. Springer, 2005. ISBN 354020864X.\n" +
                    "PERRY, W. E. Effective methods for software testing. 2nd edition. J. Wiley, 1999. ISBN 047135418X.\n" +
                    "WU, M.; LI, K. Effective software test automationdeveloping an automated software testing tool. SYBEX, 2004. ISBN 0782143202.\n"
            },
            {
                "title": "Metodologia e Experimentação em Engenharia de Software",
                "body": {
                    "theme1": "Núcleo <br>NC",
                    "theme2": "Carga Horária <br>64",
                    "theme3": "Teórica <br>48",
                    "theme4": "Prática <br>80",
                    "theme5": "Período <br>8º",
                    "theme6": "Unidade <br>INF",
                    "theme7": "Obrigatória <br>Não",
                    "theme8": "Pré-requisito <br>Nenhum",
                },
                "subtitle": "Ementa",
                "text": "Metodologia Científica (16h): aplicação de metodologia científica em atividades de Engenharia de Software. <br>" +
                    "Fundamentos da Engenharia de Software Experimental (16h): contexto da experimentação na Engenharia de Software; principais tipos de experimentos aplicados à Engenharia de Software; estudos primários e secundários; revisão e mapeamento sistemático da literatura. <br>" +
                    "Realização de Experimentos em Engenharia de Software (32h).<br>" +
                    "<br>Condições mínimas (estar apto a)<br><br>" +
                    "(Faz com orientação). Aplicar princípios científicos da Engenharia de Software Experimental na realização de experimentos com software.<br>" +
                    "(Segue instruções). Realizar estudo secundário sistemático em Engenharia de Software.<br>",
                "subtitle2": "Bibliografia Básica",
                "bibliografia": "JURISTO, N. Basics of software engineering experimentation. Kluwer Academic Publishers, 2001. ISBN 079237990X.\n" +
                    "WOHLIN, C. et al. Experimentation in Software Engineering. 2nd edition. Springer, 2012.\n" +
                    "GETTINBY, G; GARDINER, W. P. Experimental design techniques in statistical practice: a practical software-based approach. Horwood Pub., 1998. ISBN 1898563357.\n" +
                    "\nBibliografia complementar\n\n" +
                    "WAZLAWICK, R. S. Metodologia de Pesquisa para Ciência da Computação. Editora Campus, 2009.\n" +
                    "WOHLIN, C. Experimentation in software engineering: an introduction. Kluwer Academic, 2000. ISBN 0792386825.\n" +
                    "POLYAK, B. T. Introduction to optimization. Optimization Software, 1987. ISBN 0911575146.\n" +
                    "HALL, E. M. Managing risk methods for software systems development. Addison-Wesley, 1998. ISBN 0201255928.\n" +
                    "QUALIDADE no setor de software brasileiro. Brasilia, D.F.: MCT, 1997.\n"
            },
            {
                "title": "Mercado e Economia de Software",
                "body": {
                    "theme1": "Núcleo <br>NC",
                    "theme2": "Carga horária <br>64",
                    "theme3": "Teórica <br>48",
                    "theme4": "Prática <br>80",
                    "theme5": "Período <br>8º",
                    "theme6": "Unidade <br>INF",
                    "theme7": "Obrigatória <br>Não",
                    "theme8": "Pré-requisito <br>Nenhum",
                },
                "subtitle": "Ementa",
                "text": "Modelos de negócio para software (aluguel, serviço, código aberto). <br>" +
                    "Leis, normas, impostos e legislação brasileira para o mercado local e para a exportação de software. <br>" +
                    "Programas de incentivo à exportação e à produção de software.<br>" +
                    "Características e exigências do mercado interno e externo. <br>" +
                    "Identificação de oportunidades de inovação em software. <br>" +
                    "Planos de negócio de software para o mercado nacional e global.<br>" +
                    "Engenharia Econômica. Fornecimento, demanda e produção. Lucro produzido por capital (interest). Análise custo-benefício. Análise breakeven. Retorno de investimento. Avaliação de alternativas. Economia aplicada ao desenvolvimento de software.<br>" +
                    "<br>Condições mínimas (estar apto a)<br><br>" +
                    "(Segue instruções). Explicar a relação entre decisões técnicas e o alinhamento com objetivos de negócio no qual software está inserido.<br>" +
                    "(Segue instruções). Explicar as principais leis e normas pertinentes à indústria de software no Brasil.<br>" +
                    "(Segue instruções). Elaborar plano de negócio para software inovador.<br>",
                "subtitle2": "Bibliografia Básica",
                "bibliografia": "TOCKEY, S. Return on Software: Maximizing the Return on Your Software Investment, Addison-Wesley, 2004.\n" +
                    "GRADY, S. O. The software paradox: the rise and fall of the commercial software market. O’Reilly, 2015.\n" +
                    "SALIM, C. S. Construindo planos de negócios: todos os passos necessários para planejar e desenvolver negócios de sucesso. 3.a edição. Rio de Janeiro: Elsevier, 2005. ISBN 8535217363.\n" +
                    "\nBibliografia complementar\n\n" +
                    "BROOKS J., F. P. O mítico homem-mês: ensaios sobre engenharia de software. Elsevier, 2009. ISBN 9788535234879.\n" +
                    "ENGHOLM J. H. Engenharia de software na prática. São Paulo: Novatec, 2010. ISBN 9788575222171.\n" +
                    "PIMENTEL, L. O. A proteção jurídica da propriedade intelectual de software: noções básicas e temas relacionados. IEL, 2008. ISBN 9788587683045.\n" +
                    "ORRICO J, H. Pirataria de Software. MM Livros, 2004. ISBN 8590424219.\n" +
                    "LINS, B. F. E. et al. O mercado de software no Brasil: problemas institucionais e fiscais Brasília (DF): Câmara dos Deputados, Coordenação de Publicações, 2007. ISBN 9788573654998.\n"
            },
            {
                "title": "Sistemas Distribuídos",
                "body": {
                    "theme1": "Núcleo <br>NE",
                    "theme2": "Teórica <br>32",
                    "theme3": "Prática <br>32",
                    "theme4": "Total <br>64",
                    "theme5": "Período <br>8º",
                    "theme6": "Unidade <br>INF",
                    "theme7": "Obrigatória <br>Não",
                    "theme8": "Pré-requisito <br>Programação Orientada a Objetos",
                },
                "subtitle": "Ementa",
                "text": "Introdução a Sistemas Distribuídos. <br>" +
                    "Invocação Remota. <br>" +
                    "Objetos Distribuídos. <br>" +
                    "Arquiteturas Orientadas a Serviços e utilização de serviços Web. <br>" +
                    "Computação Móvel e Ubíqua. Estudo de Casos de Tópicos Emergentes em Sistemas Distribuídos.<br>",
                "subtitle2": "Bibliografia Básica",
                "bibliografia": "ANDREWS, G. R. Foundations of multithreaded, parallel, and distributed programming. Addison-Wesley, 2000.\n" +
                    "COULOURIS, G. F. et al. Distributed Systems: Concepts and Design, 5th edition, Addison-Wesley, 2012.\n" +
                    "KUROSE, J. F.; ROSS, K. Redes de Computadores e a Internet, 6.a edição. Pearson Education, 2013.\n" +
                    "\nBibliografia complementar\n\n" +
                    "BIRMAN, K. P. Reliable distributed systems: technologies, web services, and applications, New York: Springer, 2005. ISBN 0387215093.\n" +
                    "CLARK, M. et al. Web services business strategies and architectures. Expert Press, 2002. ISBN 1904284132.\n" +
                    "JOSUTTIS, N. M. SOA in practice. O'Reilly, 2007. ISBN 0596529554.\n" +
                    "LYNCH, N. A Distributed algorithms. M. Kaufmann, 1997.\n" +
                    "TANENBAUM, A.S.; STEEN, M. van. Distributed Systems: Principles and Paradigms. Prentice Hall, 2nd Edition, 2006.\n"
            }
        ], // Fecha o Oitavo
        [  // Nono Semestre
            {
                "title": "Prática em Engenharia de Sotware",
                "body": {
                    "theme1": "Núcleo <br>NC",
                    "theme2": "Carga horária <br>320",
                    "theme3": "Teórica <br>0",
                    "theme4": "Prática <br>320",
                    "theme5": "Período <br>9º",
                    "theme6": "Unidade <br>INF",
                    "theme7": "Obrigatória <br>Sim",
                    "theme8": "Pré-requisito <br>Nenhum",
                },
                "subtitle": "",
                "text": "O egresso do BES passa pela vivência de dois tipos de experiências práticas diferentes em suas essências.<br>" +
                "<br>" +
                "O primeiro grupo de experiências é composto pelas experiências promovidas nas atividades práticas realizadas de maneira contínua e integrada desde o início do curso, no contexto das diversas disciplinas teórico-práticas que compõem a grade curricular do BES. <br>" +
                "<br>" +
                "O segundo tipo de experiências é proporcionado pela disciplina “Prática em Engenharia de Software”, que envolve a participação integral do aluno em projetos reais de Engenharia de Software realizados em ambiente típico da indústria de software. É importante contrapor esse cenário de “projeto real”, onde todas as competências são exigidas, com o cenário das atividades práticas realizadas dentro do contexto de uma disciplina, normalmente limitado pelo conteúdo da própria disciplina. <br>" +
                "<br>" +
                "A Engenharia de Software compreende o uso de processos. Tais processos são claramente explicitados no projeto pedagógico do curso e podem ser classificados em dois grandes tipos: Processos Técnicos de Engenharia de Software e Processos de Gestão de Engenharia de Software. Além disso, o domínio de Tecnologias de Engenharia de Software, aplicadas tanto a processos técnicos quanto a processos de gestão de Engenharia de Software, é uma competência obrigatória para o profissional que trabalha com software. Assim, pode-se considerar que o Engenheiro de Software deve ser capaz de realizar atividades que envolvem três tipos de competências: técnicas, gerenciais e tecnológicas.<br>" +
                "<br>" +
                "A disciplina “Prática em Engenharia de Software” fornece o ambiente necessário para o amadurecimento das competências dos estudantes, pela aquisição de conhecimentos e desenvolvimento de habilidades e atitudes como profissional de Engenharia de Software. Esta prática acontece na fase final do currículo, na qual são reforçadas as habilidades, competências e conhecimentos adquiridos ao longo das disciplinas teórico-práticas do curso, em um ambiente que representa de forma realista os cenários que serão experimentados na vida profissional do Engenheiro de Software.<br>" +
                "<br>" +
                "O INF possui uma Fábrica de Software (FS/INF) [CUSUMANO]. O termo “Fábrica” indica um comprometimento de longo prazo e de esforços integrados, acima do nível de projetos individuais, para aprimorar todas as operações de obtenção de software [AAEN]. NA FS/INF, os projetos têm como objetivo atender as necessidades de usuários e patrocinadores reais, ou seja, visam a geração de produtos e/ou a prestação de serviços em Engenharia de Software para a sociedade. Dessa forma, os projetos precisam atender, por exemplo, requisitos de qualidade, de escopo e restrições de custo e prazo definidos pelas partes interessadas do projeto em questão. Além disso, a FS/INF também é responsável por garantir os requisitos definidos pelas normas técnicas aplicáveis de Engenharia de Software.<br>" +
                "<br>" +
                "Todas as atividades da Prática em Engenharia de Software previstas no BES são realizadas na FS/INF, sob a supervisão direta de docentes do Instituto de Informática. Portanto, a cada semestre letivo, a FS/INF recebe docentes e estudantes que atuarão nos seus projetos. Cabe ressaltar que, embora os projetos e as atividades da FS/INF não estejam limitados pelo calendário acadêmico, existe um compromisso entre a FS/INF e o curso de BES assegurando que o processo de Gestão do Portfólio da Fábrica selecionará os projetos e as atividades que apresentem condições adequadas ao exercício das práticas de Engenharia de Software pelos estudantes como descritas nesse PPC. Desta forma, o estudante terá a oportunidade concreta de integrar teoria e prática, envolvendo-se em situações-problema geradas pela experiência de campo e que exigem atividades de pesquisa, consultorias, debates e adoção de novas condutas. É também uma oportunidade para que o estudante seja avaliado quanto à sua atitude ética e profissional, quanto ao respeito às normas institucionais da FS/INF e quanto à sua relação com os demais envolvidos no projeto, incluindo usuários e patrocinadores.<br>" +
                "<br>" +
                "A “Prática em Engenharia de Software” é realizada pelo estudante preferencialmente após ter obtido aprovação nas demais disciplinas do BES. A disciplina é integralizada com 320 horas de atividades relacionadas a projetos da FS/INF, é ofertada a cada semestre letivo e os docentes atuam como preceptores. Neste sentido, o docente é o profissional responsável pela integração teoria-prática ao longo do projeto, ensinando, supervisionando, orientando e conduzindo o aluno na prática efetiva de sua futura profissão. <br>" +
                "<br>" +
                "Os estudantes são divididos em três grupos para melhor acompanhamento das atividades. Cada grupo, em um dado instante, realiza um tipo de atividade típica do exercício profissional: processos técnicos, processos de gestão ou domínio de tecnologias. Ao final da disciplina, é garantido que todos os grupos vivenciaram atividades dos três tipos. A avaliação do estudante é formativa, enfatizando o seu acompanhamento durante todo o período letivo, com o intuito de não apenas verificar se o estudante está alcançando os objetivos propostos, mas também informando seus erros e acertos, além de promover o estímulo necessário para continuar os estudos e o seu desenvolvimento. <br>" +
                "<br>" +
                "Concluindo, a disciplina “Prática em Engenharia de Software” favorece um ensino baseado na prática, com foco centrado na ética e na postura do profissional de Engenharia de Software perante os desafios que ocorrem quando se trabalha com software, que é um dos artefatos mais complexos que a humanidade produz. Quando o estudante atua em atividades práticas relevantes para a sua futura vida profissional, enfrentando os desafios reais de sua profissão ainda durante sua formação, sua compreensão se torna cada vez mais crítica e comprometida com a sociedade na qual se insere. Portanto, essa disciplina estimula e valoriza as dimensões ética e humanística na formação do Engenheiro de Software, desenvolvendo atitudes e valores orientados para a cidadania e para o desenvolvimento da sociedade.<br>",
                "subtitle2": "Ementa",
                "bibliografia": "Aplicação do corpo de conhecimento da Engenharia de Software no contexto de projetos realizados em uma Fábrica de Software (320h): emprego de processos de Engenharia de Software em abrangência e profundidade; seleção e utilização de normas, métodos, técnicas e ferramentas de Engenharia de Software para atingir objetivos estabelecidos no projeto; integração e consolidação de conhecimentos e habilidades esperadas do profissional de Engenharia de Software; exercício de práticas e atitudes profissionais embasadas no código de ética e na postura profissional da Engenharia de Software; prática em processos técnicos de Engenharia de Software; prática em Gestão de Engenharia de Software; prática em Tecnologias de Engenharia de Software.<br>" +
                    "<br>Condições mínimas (estar apto a)<br><br>" +
                    "(Faz sem orientação). Realizar pacotes de trabalho, desenvolvendo produtos ou serviços dentro de um projeto na Fábrica de Software, aplicando as disciplinas que formam o corpo de conhecimento da Engenharia de Software.<br>" +
                    "(Faz sem orientação). Planejar, realizar e modificar de forma apropriada produtos e serviços pertinentes a processos organizacionais da Engenharia de Software, dentro do contexto da Fábrica de Software.<br>" +
                    "(Faz sem orientação). Atuar individualmente e nas equipes de trabalho segundo o código de ética e a postura profissional da Engenharia de Software.<br>"
            }
        ]  // Fecha o Nono
    ]
};