import models from '../../models/index';

class ProductsService {
    static async getAllProducts() {
      try {
        return await models.products.findAll()
      } catch (error) {
        throw error
      }
    }
  
    static async addProducts(newProducts) {
      try {
        return await models.products.create(newProducts)
      } catch (error) {
        throw error
      }
    }
  
    static async updateProducts(id, updateProducts) {
      try {
        const productsToUpdate = await models.products.findOne({
          where: { id: Number(id) }
        })
  
        if (productsToUpdate) {
          await models.products.update(updateProducts, { where: { id: Number(id) } })
  
          return updateProducts
        }
        return null
      } catch (error) {
        throw error
      }
    }
  
    static async getProducts(id) {
      try {
        const theProducts = await models.products.findOne({
          where: { id: Number(id) }
        })
  
        return theProducts
      } catch (error) {
        throw error
      }
    }
  
    static async deleteProducts(id) {
      try {
        const productsToDelete = await models.products.findOne({ where: { id: Number(id) } })
  
        if (productsToDelete) {
          const deletedProducts = await models.products.destroy({
            where: { id: Number(id) }
          })
          return deletedProducts
        }
        return null
      } catch (error) {
        throw error
      }
    }
  }
  
  export default ProductsService