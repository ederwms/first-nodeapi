const express  = require('express') //* importa express
const mongoose = require('mongoose') //* importa mongoose
const cors     = require('cors') //* importa cors
require('dotenv').config();

//* inicializa o app
const app = express()
//* mandando o server permitir que eu envie dados para a aplicação no formato JSON
app.use(express.json())
//* adicionando cors ao server
app.use(cors())

//* criando o DB ->  connect('protocolo://endereco/schema utilizado', { options (OPCIONAL!) })
mongoose.connect(process.env.API_URL, { useNewUrlParser: true, useUnifiedTopology: true })

//* importa a model criada: Product
require('./src/models/Product')

//* definindo que sempre que a aplicação receber uma requisição do prefixo "/api", ela irá enviar para o arquivo "src/routes" para o tratamento.
app.use('/api', require('./src/routes'))

const PORT = process.env.PORT || 3001
//* server escuta na porta aleatória do HEROKU ou na 3001
app.listen(PORT)