import ProductsService from '../server/productsService'
import Util from '../server/utils/Utils'

const util = new Util()

class ProductsController {
  static async getAllProducts(req, res) {
    try {
      const allProducts = await ProductsService.getAllProducts()
      if (allProducts.length > 0) {
        util.setSuccess(200, 'Products retrieved', allProducts)
      } else {
        util.setSuccess(200, 'No Products found')
      }
      return util.send(res)
    } catch (error) {
      util.setError(400, error)
      return util.send(res)
    }
  }

  static async addProducts(req, res) {
    if (!req.body.name || !req.body.price || !req.body.category || !req.body.type ) {
      util.setError(400, 'Please provide complete details')
      return util.send(res)
    }
    const newProducts = req.body
    try {
      const createdProducts = await ProductsService.addProducts(newProducts)
      util.setSuccess(201, 'Products Added!', createdProducts)
      return util.send(res)
    } catch (error) {
      util.setError(400, error.message)
      return util.send(res)
    }
  }

  static async updatedProducts(req, res) {
    const alteredProducts = req.body
    const { id } = req.params
    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric value')
      return util.send(res)
    }
    try {
      const updateProducts = await ProductsService.updateProducts(id, alteredProducts)
      if (!updateProducts) {
        util.setError(404, `Cannot find products with the id: ${id}`)
      } else {
        util.setSuccess(200, 'Products updated', updateProducts)
      }
      return util.send(res)
    } catch (error) {
      util.setError(404, error)
      return util.send(res)
    }
  }

  static async getProducts(req, res) {
    const { id } = req.params

    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric value')
      return util.send(res)
    }

    try {
      const theProducts = await ProductsService.getProducts(id)

      if (!theProducts) {
        util.setError(404, `Cannot find Products with the id ${id}`)
      } else {
        util.setSuccess(200, 'Found Products', theProducts)
      }
      return util.send(res)
    } catch (error) {
      util.setError(404, error)
      return util.send(res)
    }
  }

  static async deleteProducts(req, res) {
    const { id } = req.params

    if (!Number(id)) {
      util.setError(400, 'Please provide a numeric value')
      return util.send(res)
    }

    try {
      const productsToDelete = await ProductsService.deleteProducts(id)

      if (productsToDelete) {
        util.setSuccess(200, 'Products deleted')
      } else {
        util.setError(404, `Products with the id ${id} cannot be found`)
      }
      return util.send(res)
    } catch (error) {
      util.setError(400, error)
      return util.send(res)
    }
  }
}

export default ProductsController


// const getAll = async (req, res) => {

//   const products = await models.products.findAll({raw: true});
//   res.json(products);
// };

// const addProducts = async (req, res) => {

//   const newProducts = await models.products.send({raw: true})
//   res.json(newProducts)
// };

// const updateProducts = async (req, res) => {

//   const alteredProducts = await models.products.send({raw: true})
//   res.json(alteredProducts)
// };

// export default {
//   getAll,
//   addProducts,
//   updateProducts
// }