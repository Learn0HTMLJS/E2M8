const Dialog1 = document.getElementById('Dialog1');
const Background1 = document.getElementById('Background1');
const Button1 = document.getElementById('SelectModel');
const CloseButton1 = document.getElementById('CloseButton1');
const SendBtn1 = document.getElementById('SendModel');
const ModelName1 = document.getElementById('ModelName1');
const Model1 = document.getElementById('Model1');
const UserName1 = document.getElementById('InputUserName1');
const Info1 = document.getElementById('Info1');
Dialog1.addEventListener('click', NoUp);
Button1.addEventListener('click', ShowModal);
CloseButton1.addEventListener('click', CloseModal);
Background1.addEventListener('click', CloseModal);
SendBtn1.addEventListener('click', Send);

if(Dialog1 == null || Background1 == null)
    console.log('vgdfbdf');

Dialog1.style.background = 'white';
Dialog1.style.width = '60%';
Dialog1.style.position = 'fixed';
Dialog1.style.top = '100px';
Dialog1.style.left = '20%';

Background1.style.opacity = '0';
Background1.style.visibility = 'hidden';

Background1.style.background = 'rgba(0, 0, 0, 0.3)';
Background1.style.width = '100%';
Background1.style.height = '100%';

Background1.style.position = 'fixed';
Background1.style.top = '0px';
Background1.style.left = '0px';

function ShowModal()
{
    Background1.style.opacity = '1';
    Background1.style.visibility = 'visible';
    document.getElementsByTagName('body')[0].style.overflow = 'hidden';
}

function CloseModal()
{
    Background1.style.opacity = '0';
    Background1.style.visibility = 'hidden';
    document.getElementsByTagName('body')[0].style.overflow = 'visible';
}

function NoUp(Event)
{
    Event.stopPropagation();
}

function Send(Event)
{
    Event.preventDefault();
   const formData = new FormData();

    formData.append('Model', Model1.files[0]);
    formData.append('Name', ModelName1.value);
    formData.append('Info', Info1.value);
    formData.append('Username', UserName1.value);
 
    let d = {
        'Model': Model1.files[0],
        'Name': ModelName1.value,
        'Info': Info1.value,
        'Username': UserName1.value
    }
  //  console.log(d.Model);

  fetch('http://localhost:3000/api/models', {
        method: 'POST',
        body: formData
    })
    .then((res) =>
    {
        console.log(res);
        document.model_id = res[0]['id'];
    })
    .catch((err) => console.log(err));
    CloseModal();
}