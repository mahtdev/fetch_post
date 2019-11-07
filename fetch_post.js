var header = new Headers();
var url = "http://keymonitor.net:8334/km-consulta/query";

header.append("Content-Type", "application/json");
header.append("Accept", "application/json");

var body_message = '{end_date: "2019-05-21", start_date: "2019-05-21"}';

var init = {
  method: "POST",
  mode: "no-cors",
  body: body_message.toString,
  Headers: header
};

function consulta() {
  fetch(url, init)
    .then(res => res.json())
    .catch(error => console.error("Error:", error))
    .then(response => console.log("Success:", response));
}

consulta();
