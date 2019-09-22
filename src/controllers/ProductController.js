const mongoose = require('mongoose')
const Product = mongoose.model('Product')

module.exports = {
  //* isso é basicamente pegar todos os produtos que tem no banco de dados
  async index(req, res) {
    const { page = 1 } = req.query
    //* paginate({ query }, options)
    const products = await Product.paginate({}, { page: page, limit: 10 })
    return res.json(products)
  },
  async show(req, res) {
    const product = await Product.findById(req.params.id)
    return res.json(product)
  },
  async store(req, res) {
    const product = await Product.create(req.body)
    return res.json(product)
  },
  async update(req, res) {
    //* "new: true" diz para o mongoose retornar o produto já atualizado
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true })
    return res.json(product)
  },
  async destroy(req, res) {
    const product = await Product.findByIdAndRemove(req.params.id)
    return res.send()
  }
}