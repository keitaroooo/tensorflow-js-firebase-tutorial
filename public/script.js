const button = document.getElementById("predict-button");
const input = document.getElementById("input");
const output = document.getElementById("output");

let model;

// Load our saved model from current directory (which will be
// hosted via Firebase Hosting)
async function loadModel() {
  // Relative URL provided for my-model.json.
  model = await tf.loadLayersModel("my-model.json");
}

loadModel();

function updateButton() {
  output.textContent = model.predict(tf.tensor2d([[Number(input.value)]]));
}
button.addEventListener("click", updateButton);
