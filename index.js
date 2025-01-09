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
      const colorColumn = document.createElement("div");
      colorColumn.style.display = "inline-block";
      colorColumn.style.textAlign = "center";
      colorColumn.style.margin = "0";
      colorColumn.style.width = "100px";

      const colorDiv = document.createElement("div");
      colorDiv.style.backgroundColor = color.hex.value;
      colorDiv.style.width = "100%";
      colorDiv.style.height = "500px";
      colorDiv.title = color.hex.value; // Tooltip to show the hex value

      const hexValue = document.createElement("p");
      hexValue.textContent = color.hex.value;
      hexValue.style.padding = "20px 0";
      hexValue.style.backgroundColor = "white";
      hexValue.style.fontSize = "12px"

      colorColumn.appendChild(colorDiv);
      colorColumn.appendChild(hexValue);
      container.appendChild(colorColumn);
    });
  })
    .catch((error) => console.error("Error fetching color scheme:", error));
  })
})
