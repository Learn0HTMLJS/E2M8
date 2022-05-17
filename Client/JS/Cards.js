const Cards = document.getElementsByClassName('CARD');
for(let i = 0; i < Cards.length; i++)
    Cards[i].addEventListener('click', ToPage);

function ToPage()
{
    document.location.href = 'model.html';
}