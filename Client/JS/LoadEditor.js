let mein = null;
let MyUrl = new URL(window.location);
let Model_ID = MyUrl.searchParams.get('id');

const Button1 = document.getElementById('SelectModel');
const ModelName1 = document.getElementById('ModelName');
const Model1 = document.getElementById('Model');
const UserName1 = document.getElementById('InputUserName');
const Info1 = document.getElementById('Info');

const BackButton = document.getElementById('BACK');
BackButton.addEventListener('click', GoBack);

let cons = fetch('http://localhost:3000/api/models/:' + Model_ID)
  .then(response => response.text())
  .then(result => mein = result)
  .catch(error => console.log('error', error));

cons.then(() => {
  console.log(mein);
  let array = JSON.parse(mein);

  ModelName1.value = array['ModelName'];
  UserName1.value = array['username'];
  Info1.value = array['Info'];  
});

function GoBack()
{
  let OldUrl = new URL('http://localhost:3000/model.html');
  OldUrl.searchParams.append('id', Model_ID);
  document.location.href = OldUrl;
}