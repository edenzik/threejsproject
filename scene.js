var scene = new THREE.Scene();
var geometry = new THREE.BoxGeometry( 5, 5, 5 );
var material = new THREE.MeshLambertMaterial( { color: 0xFF0000 } );
var mesh = new THREE.Mesh( geometry, material );
scene.add( mesh );

        // create the ground plane
        var planeGeometry = new THREE.PlaneGeometry(60, 40, 1, 1);
        var planeMaterial = new THREE.MeshLambertMaterial({color: 0xffffff});
        var plane = new THREE.Mesh(planeGeometry, planeMaterial);
        plane.receiveShadow = true;

        // rotate and position the plane
        plane.rotation.x = -0.5 * Math.PI;
        plane.position.x = 0;
        plane.position.y = 0;
        plane.position.z = 0;

        // add the plane to the scene
        scene.add(plane);
