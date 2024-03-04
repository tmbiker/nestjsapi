var botId = '105233795800723';
var phoneNbr = '3213213211';

var bearerToken = 'EAATZA9dPTFDoBAHzZAaM5FaDspyTHy66co2CQ1ipaJuVhzBHaLQsucZAI1PfnYgdIt3Q7SpbkWywPnE0A2Dew3mXSNwfghuE1sROgBkso9hU0iQbQbgubRGt1IoVdEujQIBdhaE0q2KkYCFctEXM5fcGdWQhfVi7uSXAmP3ryTr2LiwGiQLOiWwf611hnKHb3yUyOH21AZDZD';
var url = 'https://graph.facebook.com/v15.0/' + botId + '/messages';

var data = {
  messaging_product: 'whatsapp',
  to: phoneNbr,
  type: 'template',
  template: {
    name:'hello_world',
    language:{ code: 'en_US' }
  }
};

var postReq = {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer ' + bearerToken,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data),
  json: true
};

fetch(url, postReq)
  .then(data => {
    return data.json()
  })
  .then(res => {
    console.log(res)
  })
  .catch(error => console.log(error));