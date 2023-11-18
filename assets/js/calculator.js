const hoursOfPhotos = document.querySelector("#hoursOfPhotos");
const attendant = document.querySelector("#attendant");
const luxUpLighting = document.querySelector("#luxUpLighting");
const props = document.querySelector("#props");
const backdrop = document.querySelector("#backdrop");
const branding = document.querySelector("#branding");
const prints = document.querySelector("#prints");

calculateTotal();

hoursOfPhotos.addEventListener("change", calculateTotal);
attendant.addEventListener("change", calculateTotal);
luxUpLighting.addEventListener("change", calculateTotal);
props.addEventListener("change", calculateTotal);
backdrop.addEventListener("change", calculateTotal);
branding.addEventListener("change", calculateTotal);
prints.addEventListener("change", calculateTotal);

function calculateTotal() {
  let total = 0;
  let hourlyRate = 150; // Default hourly rate

  // If attendant is set to Yes, adjust the hourly rate
  if (attendant.value == "1") {
    // Changed from 'yes' to '1'
    hourlyRate = 200;
  }

  total += Number(luxUpLighting.value);
  total += Number(props.value);
  total += Number(backdrop.value);
  total += Number(branding.value);
  total += Number(prints.value);

  total += Number(hoursOfPhotos.value) * hourlyRate;

  // Use toFixed(2) to format the total with two decimal places
  document.querySelector("#totalCost").textContent =
    "Total Price: $" + total.toFixed(2);
}
