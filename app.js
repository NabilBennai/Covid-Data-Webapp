function afficher() {
  var pays = document.querySelector("#choix_pays").value;

  var data = null;

  var xhr = new XMLHttpRequest();
  xhr.withCredentials = true;

  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === this.DONE) {
      let raw_result = JSON.stringify(this.responseText);

      let lined_result = raw_result
        .replace(/\"|\[|]|{|}|\\"/g, "")
        .replace(/latitude.*/, "")
        .replace(/code:\w+/i, "")
        // .replace(/country:\w+/, "")
        .replace("confirmed:", "Confirmés : ")
        .replace("recovered:", "Remis : ")
        .replace("critical:", "Critiques : ")
        .replace("deaths:", "Morts : ")
        .replace("country:", "Pays : ")
        .replace(":", " : ")
        .replace(/\,/g, "<br>");

      document.getElementById("data").innerHTML = lined_result;
    }
  });

  xhr.open(
    "GET",
    "https://covid-19-data.p.rapidapi.com/country?format=json&name=" + pays
  );

  xhr.setRequestHeader("x-rapidapi-host", "covid-19-data.p.rapidapi.com");
  xhr.setRequestHeader(
    "x-rapidapi-key",
    "d30bfcc9d9msh9017ddb0dc94de0p16a542jsn57f2be62f2fc"
  );

  xhr.send(data);
}

function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}
