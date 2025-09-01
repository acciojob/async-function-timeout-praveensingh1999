//your JS code here. If required.
async function submitformData() {
  const text = document.querySelector("#text").value;
  const delay = parseInt(document.querySelector("#delay").value);

  // wait for given delay using a Promise + async/await
  await new Promise(resolve => setTimeout(resolve, delay));
 
  // show text in output div
  document.getElementById("output").innerText = text; 
}

// attach event listener to button
document.getElementById("btn").addEventListener("click", submitformData);


