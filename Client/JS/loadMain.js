let mein = null;
let MyUrl = new URL(window.location);
//console.log(MyUrl);
let Model_ID = MyUrl.searchParams.get('id');
let downloadButton = document.getElementById('DOWNLOAD');
let deleteButton = document.getElementById('DELETE');
//deleteButton.addEventListener('click', deleteButton);

let cons = fetch('http://localhost:3000/api/models/:' + Model_ID)
  .then(response => response.text())
  .then(result => mein = result)
  .catch(error => console.log('error', error));

cons.then(() => {
  console.log(mein);
  let array = JSON.parse(mein);
  let component = document.getElementById('DESCRIPTION');
  component.innerHTML = array['Info'];
  component = document.getElementById('NAME');
  component.innerHTML = array['ModelName'];
  component = document.getElementById('VIEWINGS');
  component.innerHTML = `Просмотры: ${array['Viewings']}`;
  component.style.marginTop = '20px';
  component.style.marginBottom = '20px';
  component.style.fontSize = '20px';
  downloadButton.addEventListener('click', () => 
  {
    document.location.href = 'http://localhost:3000/models/' + array['Model'];
  });
  getComents(Model_ID);

  component = document.getElementById('CURRENTIMAGE');

  component.style.display = 'none';

  let ModelView = document.createElement('div');
  ModelView.style.width = '100%';
  ModelView.style.height = '400px';
  document.getElementById('FCLeft').append(ModelView);

  var SIZE = 50;
  var scene = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera( 50, ModelView.clientWidth / ModelView.clientHeight, 0.1, 100);
  var renderer = new THREE.WebGLRenderer();
  renderer.setSize( ModelView.clientWidth, ModelView.clientHeight );
  scene.background = new THREE.Color( 0xA0A0A0 );
  ModelView.appendChild( renderer.domElement );
  var geometry = new THREE.BoxGeometry( SIZE, SIZE, SIZE);
  var material = new THREE.MeshBasicMaterial( { color: 0x000000 } );
  var cube = new THREE.Mesh( geometry, material );
  camera.position.z = 3;
  try
  {
    const loader = new STLLoader();
    loader.load(`/models/${array['Model']}`, function ( geometry ) {
      const material = new THREE.MeshPhongMaterial( { color: 0xAAAAAA, specular: 0x111111, shininess: 200 } );
      mesh = new THREE.Mesh( geometry, material );
      let box = new THREE.Box3();
      let size = new THREE.Vector3();
      box.setFromObject(mesh).getSize(size);
      mesh.scale.set( 1/size.y , 1/size.y, 1/size.y );
      let center = new THREE.Vector3()
      box.setFromObject(mesh).getCenter(center);
      mesh.position.set( -center.x, 0, -center.z);
      mesh.castShadow = true;
      scene.add( mesh );
    });
  }
  catch(err){
    scene.add( cube );
  }
    function render() {
      requestAnimationFrame( render );
      //controls.update();
      //scene.rotation.y += 3.14159265359/2*3;
       scene.rotation.y -= 0.01;
      scene.rotation.x -= 0.015;
      renderer.render( scene, camera );
    }
    render();
});

async function getComents(model_id)
{
  let space = document.getElementById('COMMENTS');
  fetch('http://localhost:3000/api/comments/:' + model_id)
  .then(response => response.text())
  .then(result => {
    let arr = JSON.parse(result);
    if (arr.length == 0 || arr == undefined || !arr)
      return;
    for(let j = 0; j < arr.length; j++)
    {
      let CommentText = document.createElement('p');
      CommentText.style.margin = '0 auto';
      CommentText.style.marginTop = '10px';
      CommentText.style.border = '2px';
      CommentText.innerHTML = arr[j]['comment'];
      space.appendChild(CommentText);
    }
  })
  .catch(error => console.log(error));
}

function deleteElement(Event)
{
//  Event.stopPropagation();
  if(!confirm('Вы действительно желаете НАВСЕГДА удалить запись?'))
    return;
  fetch('http://localhost:3000/api/models/:' + Model_ID, {
    method: 'DELETE',
  })
   .then(response => response.text())
   .then(result => {
      console.log(result);
      document.location.href = 'http://localhost:3000';
  })
   .catch(error => console.log('error', error));
}

function openEditor()
{
  let url = new URL('http://localhost:3000/ModelEdit.html');
  url.searchParams.set('id', Model_ID);
  document.location.href = url;
}