window.onload = function () {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    const renderer = new THREE.WebGLRenderer(
        {
            alpha: true
        }
    );
    renderer.setSize(window.innerWidth, window.innerHeight);
    
    document.body.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry();

    const materialRed = new THREE.MeshBasicMaterial({
        color: 0xff0000,
        wireframe: true,
    });

    const materialBlack = new THREE.MeshBasicMaterial({
        color: 0x333333
    });

    const redCube = new THREE.Mesh(geometry, materialRed);
    const blackCube = new THREE.Mesh(geometry, materialBlack);

    scene.add(redCube);
    scene.add(blackCube);

    camera.position.z = 5;

    function animate() {
        requestAnimationFrame(animate);
        redCube.rotation.x += 0.05;
        redCube.rotation.y += 0.10;

        blackCube.rotation.x += 0.30;
        blackCube.rotation.y += 0.30;

        renderer.render(scene, camera);
    }
    animate();
}