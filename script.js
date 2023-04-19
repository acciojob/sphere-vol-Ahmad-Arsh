function volume_sphere() {
    //Write your code here
   var radiusInput = document.getElementById("Radius");
  var volumeOutput = document.getElementById("volume");
  
  // Get the radius value and calculate the volume of the sphere
  var radius = parseFloat(radiusInput.value);
  var volume = (4/3) * Math.PI * Math.pow(radius, 3);
  
  // Set the volume output element value to the calculated volume
  volumeOutput.value = volume.toFixed(2);
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
