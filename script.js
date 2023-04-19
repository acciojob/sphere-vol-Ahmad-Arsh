function volume_sphere(event) {
  // Prevent the form from submitting
  event.preventDefault();

  // Get the value of the radius input field
  var radius = document.getElementById("radius").value;

  // Calculate the volume of the sphere
  var volume = (4/3) * Math.PI * Math.pow(radius, 3);

  // Display the volume in the volume input field
  document.getElementById("volume").value = volume.toFixed(2);
}

// Add an event listener to the form submit button
var form = document.getElementById("MyForm");
var submitButton = document.getElementById("submit");
submitButton.addEventListener("click", volume_sphere);
