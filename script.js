function volume_sphere() {
    //Write your code here
  let radius = document.querySelector('#radius').value;
    let volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
    document.querySelector('#volume').value = volume.toFixed(4);
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
