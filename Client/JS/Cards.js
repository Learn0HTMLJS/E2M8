document.getElementById('Sample').style.display = 'none';
let mein = null;
let cons = fetch('http://localhost:3000/api/models')
  .then(response => response.text())
  .then(result => mein = result)
  .catch(error => console.log('error', error));

cons.then(() => {
    let array = JSON.parse(mein);
    for(let i = 0; i < array.length; i++)
    {
        let INDIV = document.getElementById("HERE");
        let divm = document.createElement('div');
        divm.className = 'CARD card m-2 justify-content-center';
        divm.style = 'width: 18rem;';
        INDIV.append(divm);
        let txt = document.createElement('p');
        txt.innerHTML = array[i]['ModelName'];
        divm.append(txt);
        let pd = document.createElement('div');
        pd.className = 'img-fluid text-center';
        divm.append(pd);

        let pict = document.createElement('img');
        pd.append(pict);
//        let ii = getPict(array[i]['id']);
//        if(ii)
//            pict.src = ii;
//        else
            pict.src = '../img/null.png'; 
        let views = document.createElement('p');
        views.innerHTML = array[i]['Viewings'];
        divm.append(views);
    }
    let Cards = document.getElementsByClassName('CARD');
    for(let i = 0; i < Cards.length; i++)
        Cards[i].addEventListener('click', ToPage);    
//    console.log(text);
});

async function getPict(id)
{
    let meinpict = null;
    let image = fetch('http://localhost:3000/api/picture/:' + id)
    .then(response => response.text())
    .then(result => meinpict = result)
    let pat = null
    image.then(()=>{
        let path = fetch('http://localhost:3000/img/' + JSON.parse(meinpict)[0]['Patch'])
        .then(response => response.text())
        .then(result => pat = result)         
        path.then(() => { return pat});    
    });
}


function ToPage()
{
    document.location.href = 'model.html';
}