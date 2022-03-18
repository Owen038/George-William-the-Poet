const express = require('express')
const app = express()
const port = 3000



app.use(express.static('static'));

app.get('/api/', (req, res) => {
  // require('./scripts/nlp')
  
  var url = require('url');
  var request = url.parse(req.url, true).query['text'];
  
  const NLPCloudClient = require('nlpcloud');
  const your_token = "94eba27b889747e49c4debf70f0f4cb0c0596c81"
  const is_gpu = true
  const lang = 'en'

  // the model from nlpcloud you want to
  const model = 'fast-gpt-j'
  const client = new NLPCloudClient(
    model, // the model you chose
    your_token, // the api token you copie,
    is_gpu
  )

/*   client.generation(request, null, 50).then(function (response) {

    const text = response.data.generated_text

    res.json({
      text: text
    })

  }).catch(function (err) {

    console.error(err.response.status);
    console.error(err.response.data.detail);

  }); */

  client.question(request).then(function (response) {
    const answer = response.data.answer
    const text = response.data.generated_text

    res.json({
      text: text,
      answer: answer
    })

  }).catch(function (err) {

    console.error(err.response.status);
    console.error(err.response.data.detail);

  });

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

