const SendBtn = document.getElementById('SendModel');
const ModelName = document.getElementById('ModelName');
const Model = document.getElementById('Model');
const UserName = document.getElementById('InputUserName');
const Info = document.getElementById('Info');
const Image = document.getElementById('Image');
SendBtn.addEventListener('click', Send);

function Check()
{
    if(!ModelName.value)
    {
        ModelName.focus;
        return;
    }
    if(!Info.value)
    {
        Info.focus;
        return;
    }
    if(!UserName.value)
    {
        UserName.focus;
        return;
    }   
}

function Send(Event)
{
    Event.preventDefault();
    Check();
    const formData = new FormData();
    formData.append('Model', Model.files[0]);
    formData.append('Name', ModelName.value);
    formData.append('Info', Info.value);
    formData.append('Username', UserName.value);  
    fetch('http://localhost:3000/api/models/:' + Model_ID, {
        method: 'PUT',
        body: formData
    })
    .then(response => response.text()) 
    .then(result =>
    {
        let datum = JSON.parse(result);
        //console.log(result);
        //document.model_id = res[0]['id'];
        if(Image.files[0])
            SendImage(datum['id']);     
    })
    .catch((err) => console.log(err));
}

async function SendImage(model_id)
{
    const formData = new FormData();
    formData.append('Model_ID', model_id);
    formData.append('Picture', Image.files[0]);
    formData.append('Info', 'empty');
    formData.append('Username', UserName.value);
    fetch('http://localhost:3000/api/pictures/:' + model_id, {
        method: 'POST',
        body: formData
    })
    .then(res => {
        console.log(res);
        document.location.href = 'index.html';
    })
    .catch(err => console.log(err));
}