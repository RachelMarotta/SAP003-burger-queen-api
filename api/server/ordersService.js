import models from '../../models/index';

class OrdersService {
    static async getAllOrders() {
      try {
        return await models.orders.findAll()
      } catch (error) {
        throw error
      }
    }
  
    static async addOrders(newOrders) {
      try {
        return await models.orders.create(newOrders)
      } catch (error) {
        throw error
      }
    }
  
    static async updateOrders(id, updateOrders) {
      try {
        const ordersToUpdate = await models.orders.findOne({
          where: { id: Number(id) }
        })
  
        if (ordersToUpdate) {
          await models.orders.update(updateOrders, { where: { id: Number(id) } })
  
          return updateOrders
        }
        return null
      } catch (error) {
        throw error
      }
    }
  
    static async getOrders(id) {
      try {
        const theOrders = await models.orders.findOne({
          where: { id: Number(id) }
        })
  
        return theOrders
      } catch (error) {
        throw error
      }
    }
  
    static async deleteOrders(id) {
      try {
        const ordersToDelete = await models.orders.findOne({ where: { id: Number(id) } })
  
        if (ordersToDelete) {
          const deletedOrders = await models.orders.destroy({
            where: { id: Number(id) }
          })
          return deletedOrders
        }
        return null
      } catch (error) {
        throw error
      }
    }
  }
  
  export default OrdersService