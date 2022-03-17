
console.log(Date.now(), 'server script starter')

const NLPCloudClient = require('nlpcloud');

// copy token
const your_token = "94eba27b889747e49c4debf70f0f4cb0c0596c81"

// choose whether to use GPU
const is_gpu = true

// choose language
const lang = 'en'

// the model from nlpcloud you want to
const model = 'gpt-j'


/* 
this is the actual function 
that will talk to nlp cloud and give us results 
*/

/* 
const client = new NLPCloudClient(
  model, // the model you chose
  your_token, // the api token you copied
  is_gpu, // choose whether to use GPU
  lang // choose language
) */

const client = new NLPCloudClient(
  model, // the model you chose
  your_token, // the api token you copie,
  is_gpu
)

module.export = {
  client
}