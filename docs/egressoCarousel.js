function setup()
{
    var link = document.createElement('a');
    link.setAttribute('href', 'http://juixe.com');
    link.innerHTML = "Hello, Juixe!";
    document.body.appendChild(link);
}

function changeSlide()
{
    var currentIndex = $('div.active').index() + 1;

    // get text corresponding to the current slide

    // set text element and put it on the page

    var gradSkillsRow = document.createElement('div');
    gradSkillsRow.setAttribute('class', 'row');

    var leftBorder = document.createElement('div');
    leftBorder.setAttribute('class', 'col-2');
    gradSkillsRow.appendChild(leftBorder);

    var gradSkillsCol = document.createElement('div');
    gradSkillsCol.setAttribute('class', 'col-8');
    gradSkillsRow.appendChild(gradSkillsCol);

    var rightBorder = document.createElement('div');
    rightBorder.setAttribute('class', 'col-2');
    gradSkillsRow.appendChild(rightBorder);

    var gradSkillsText = document.createElement('p');
    gradSkillsText.innerHTML = "text";
    gradSkillsCol.appendChild(gradSkillsText);

    document.body.insertBefore(gradSkillsRow, document.body.lastChild);
    switch (currentIndex)
    {
        case 0:
            // insert
            break;
        case 1:
            break;
        case 2:
            break;
        case 3:
            break;
        case 4:
            break;
        case 5:
            break;
        case 6:
            break;
        case 7:
            break;
        case 8:
            break;
        case 9:
            break;
        case 10:
            break;
        case 11:
            break;
        case 12:
            break;
        case 13:
            break;
        case 14:
            break;
        case 15:
            break;
    }
}