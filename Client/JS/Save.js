const savebtn = document.getElementById('APPLY');
//savebtn.addEventListener('click', Send);

/*const ModelName1 = document.getElementById('ModelName1');
const Model1 = document.getElementById('Model1');
const UserName1 = document.getElementById('InputUserName1');
const Info1 = document.getElementById('Info1');

const Image = document.getElementById('Image');
const ImageInfo = document.getElementById('ImageInfo');


function Send(Event)
{
    alert('dnttt');
    Event.preventDefault();
    let formData = new FormData();
    formData.append('Model', Model1.files[0]);
    formData.append('Name', ModelName1.value);
    formData.append('Info', Info1.value);
    formData.append('Username', UserName1.value);
    let id;
    fetch('http://localhost:3000/api/models', {
        method: 'POST',
        body: formData
    })
    .then((res) => {
        console.log(res);
        id = res['Model_ID'];
    })
    .catch((err) => console.log(err));

    formData = new FormData();
    formData.append('Picture', Image.files[0]);
    formData.append('Info', ImageInfo.value);
    formData.append('Username', UserName1.value);
    console.log(formData);
    fetch('http://localhost:3000/api/pictures/:' + id, {
        method: 'POST',
        body: formData,
    })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));    
}*/