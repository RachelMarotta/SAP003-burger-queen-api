import models from '../../models/index';

class OrdersItemsService {
    static async getAllOrdersItems() {
      try {
        return await models.ordersItems.findAll()
      } catch (error) {
        throw error
      }
    }
  
    static async addOrdersItems(newOrdersItems) {
      try {
        return await models.ordersItems.create(newOrdersItems)
      } catch (error) {
        throw error
      }
    }
  
    static async updateOrdersItems(id, updateOrdersItems) {
      try {
        const ordersItemsToUpdate = await models.ordersItems.findOne({
          where: { id: Number(id) }
        })
  
        if (ordersItemsToUpdate) {
          await models.ordersItems.update(updateOrdersItems, { where: { id: Number(id) } })
  
          return updateOrdersItems
        }
        return null
      } catch (error) {
        throw error
      }
    }
  
    static async getOrdersItems(id) {
      try {
        const theOrdersItems = await models.ordersItems.findOne({
          where: { id: Number(id) }
        })
  
        return theOrdersItems
      } catch (error) {
        throw error
      }
    }
  
    static async deleteOrdersItems(id) {
      try {
        const ordersItemsToDelete = await models.ordersItems.findOne({ where: { id: Number(id) } })
  
        if (ordersItemsToDelete) {
          const deletedOrdersItems = await models.ordersItems.destroy({
            where: { id: Number(id) }
          })
          return deletedOrdersItems
        }
        return null
      } catch (error) {
        throw error
      }
    }
  }
  
  export default OrdersItemsService