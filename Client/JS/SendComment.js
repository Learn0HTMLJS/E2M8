const Dialog = document.getElementById('Dialog');
const Background = document.getElementById('Background');
const Button = document.getElementById('SEND_COMMENT');
const CloseButton = document.getElementById('CloseButton');
const SendBtn = document.getElementById('Send');
const Info = document.getElementById('Info');
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
    const formData2 = new FormData();
    formData2.append('model_id', Model_ID);
    formData2.append('comment', Info.value);
    fetch('http://localhost:3000/api/comments', {
        method: 'POST',
        body: formData2
    })
    .then((res) => { 
        console.log(res);
        location.reload();        
    })
    .catch((err) => console.log(err));
    CloseModal();
}