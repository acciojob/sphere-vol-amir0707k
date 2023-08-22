   function volume_sphere(){
        const radius = parseFloat(document.getElementById("radius").value);
        event.preventDefault();
        console.log(radius);
        console.log(typeof radius)
        const volume = (4/3)*Math.PI*Math.pow(radius,3);
        document.getElementById("volume").value = volume.toFixed(4);
    }

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
