function myFunction() {
    let text;
    let person = prompt("Please enter your name:", "Piper Perri");
    if (person == null || person == "") {
      text = "User cancelled the prompt.";
    } else {
      text = "Hello " + person + "! Are you ready for some pizza?";
    }
    document.getElementById("demo").innerHTML = text;
  }