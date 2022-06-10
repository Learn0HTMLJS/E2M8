let mein = null;
let MyUrl = new URL(window.location);
//console.log(MyUrl);
let Model_ID = MyUrl.searchParams.get('id');

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
  camera.position.z = 100;
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
      scene.rotation.y = 3.14159265359/2*3;
      // scene.rotation.y -= 0.01;
      //scene.rotation.x -= 0.015;
      renderer.render( scene, camera );
    }
    render();
});

