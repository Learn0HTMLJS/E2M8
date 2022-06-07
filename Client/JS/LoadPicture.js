const Dialog = document.getElementById('PictureDialog');
const Background = document.getElementById('Background');
const Button = document.getElementById('form1');
const CloseButton = document.getElementById('CloseButton');
const SendBtn = document.getElementById('SendPict');
const Image = document.getElementById('Image');
const ImageInfo = document.getElementById('ImageInfo');
Dialog.addEventListener('click', NoUp);
Button.addEventListener('click', ShowModal);
CloseButton.addEventListener('click', CloseModal);
Background.addEventListener('click', CloseModal);
SendBtn.addEventListener('click', Send);

if(Dialog == null || Background == null)
    console.log('vgdfbdf');

Dialog.style.background = 'white';
Dialog.style.width = '60%';
Dialog.style.position = 'fixed';
Dialog.style.top = '100px';
Dialog.style.left = '20%';

Background.style.opacity = '0';
Background.style.visibility = 'hidden';

Background.style.background = 'rgba(0, 0, 0, 0.3)';
Background.style.width = '100%';
Background.style.height = '100%';

Background.style.position = 'fixed';
Background.style.top = '0px';
Background.style.left = '0px';

function ShowModal()
{
    Background.style.opacity = '1';
    Background.style.visibility = 'visible';
    document.getElementsByTagName('body')[0].style.overflow = 'hidden';
}

function CloseModal()
{
    Background.style.opacity = '0';
    Background.style.visibility = 'hidden';
    document.getElementsByTagName('body')[0].style.overflow = 'visible';
}

function NoUp(Event)
{
    Event.stopPropagation();
}

function Send(Event)
{
    Event.preventDefault();
    document.getElementById('CURRENTIMAGE').src = Image;
    const formData = new FormData();
    formData.append('Picture', Image.files[0]);
    formData.append('Info', ImageInfo.value);
    // formData.append('Access-Control-Allow-Origin', '*');
    console.log(formData);
//    fetch('http://localhost:3000/api/models', {
    fetch('http://localhost:3000', {
        method: 'POST',
        body: formData,
    })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
    CloseModal();
}