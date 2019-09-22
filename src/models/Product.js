const mongoose         = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')

//* definindo estrutura da model. ela terá os campos:
//* - title       -> do tipo String e será um campo obrigatório
//* - description -> do tipo String e será um campo obrigatório
//* - url         -> do tipo String e será um campo obrigatório
//* - createdAt   -> do tipo Date e será um campo preenchido automaticamente pela data atual do sistema
const ProductSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

ProductSchema.plugin(mongoosePaginate)

//* registrando a nova model
mongoose.model('Product', ProductSchema)
