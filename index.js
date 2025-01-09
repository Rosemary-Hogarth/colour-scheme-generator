document.addEventListener("DOMContentLoaded", () => {
const btn = document.getElementById("btn")
const container = document.getElementById("color-container")
const colorPicker = document.querySelector('input[type="color"]')
const colorSelect = document.querySelector("#color-select")

btn.addEventListener("click", (e) => {
  e.preventDefault()
  console.log("clicked")

  const selectedColor = colorPicker.value.slice(1)
  const selectedScheme = colorSelect.value
  const url = `https://www.thecolorapi.com/scheme?hex=${selectedColor}&mode=${selectedScheme}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      container.innerHTML = "";

        // Loop through the colors and create divs
        data.colors.forEach(color => {
          const colorDiv = document.createElement("div");
          colorDiv.style.backgroundColor = color.hex.value; // Set the background color
          colorDiv.style.width = "100px";
          colorDiv.style.height = "100vh";
          colorDiv.style.margin = "0";
          colorDiv.style.display = "inline-block";
          colorDiv.title = color.hex.value; // Tooltip to show the hex value



          container.appendChild(colorDiv); // Add the div to the container
        });



    })
    .catch((error) => console.error("Error fetching color scheme:", error));
})
})
