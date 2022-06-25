var array;
document.getElementById('Sample').style.display = 'none';
let mein = null;
let cons = fetch('http://localhost:3000/api/models')
  .then(response => response.text())
  .then(result => mein = result)
  .catch(error => console.log('error', error));

cons.then(() => {
    array = JSON.parse(mein);
    for(let i = 0; i < array.length; i++)
    {
        let INDIV = document.getElementById("HERE");
        let divm = document.createElement('div');
        divm.className = 'CARD card m-2 justify-content-center';
        divm.id = `Card_id${array[i]['id']}`;
        divm.style = 'width: 18rem;';
        INDIV.appendChild(divm);
        let txt = document.createElement('p');
        txt.innerHTML = array[i]['ModelName'];
        divm.appendChild(txt);
        let pd = document.createElement('div');
        pd.className = 'img-fluid text-center';
        divm.appendChild(pd);

        let pict = document.createElement('img');
        pict.style.width = '100%';
        pd.append(pict);
        findImage(array[i]['id'], pict);
//        let views = document.createElement('p');
//        views.innerHTML = array[i]['Viewings'];
//        divm.appendChild(views);
    }
    let Cards = document.getElementsByClassName('CARD');
    for(let i = 0; i < Cards.length; i++)
    {
        Cards[i].addEventListener('click', () => {
            let url = new URL('http://localhost:3000/model.html');
            let cid = Cards[i].id.slice(7);
            console.log(cid);
            url.searchParams.set('id', cid);
            document.location.href = url;
        });    
    }
//    console.log(text);
});

async function findImage(id, component)
{
    let meinpict = null;
    let image = fetch('http://localhost:3000/api/pictures/:' + id)
    .then(response => response.text())
    .then(result => meinpict = result)
    .catch(error => console.log('error', error));   
    let pat = null;
    image.then(()=>{
        if(!meinpict)
        {
            component.src = '../img/null.png';
            return;
        }
        component.src = 'http://localhost:3000/img/' + JSON.parse(meinpict)['Image'];
    });
}