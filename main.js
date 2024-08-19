

function generateText() {
  let text = document.getElementById('textToGenerate').value;
  const num = document.getElementById('numToGenerate').value;
  let output = ""; // Reset output each time the function runs

  for (let i = 0; i < num; i++) {
    output += text + "\n";
  }

  document.getElementById('result').textContent = output; // Use innerHTML to interpret the <br> tags
}

document.getElementById("copyIcon").addEventListener("click", function() {
    // Select the text field
    var text = document.getElementById("result");

    // Select the text inside the input field
    text.select();
    text.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text inside the input field
    navigator.clipboard.writeText(text.value).then(function() {
        alert("Text copied to clipboard!");
    }).catch(function(error) {
        alert("Failed to copy text: " + error);
    });
});
