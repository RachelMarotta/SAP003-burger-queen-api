import OrdersItemsService from '../server/ordersItemsService'
import Util from '../server/utils/Utils'

const util = new Util()

class OrdersItemsController {
  static async getAllOrdersItems(req, res) {
    try {
      const allOrdersItems = await OrdersItemsService.getAllOrders()
      if (allOrdersItems.length > 0) {
        util.setSuccess(200, 'OrdersItems retrieved', allOrdersItems)
      } else {
        util.setSuccess(200, 'No OrdersItems found')
      }
      return util.send(res)
    } catch (error) {
      util.setError(400, error)
      return util.send(res)
    }
  }

  static async addOrdersItems(req, res) {
    if (!req.body.productId || !req.body.ordersId || !req.body.quantity) {
      util.setError(400, 'Please provide complete details')
      return util.send(res)
    }
    const newOrdersItems = req.body
    try {
      const createdOrdersItems = await OrdersItemsService.addOrdersItems(newOrdersItems)
      util.setSuccess(201, 'OrdersItems Added!', createdOrdersItems)
      return util.send(res)
    } catch (error) {
      util.setError(400, error.message)
      return util.send(res)
    }
  }

  static async updatedOrdersItems(req, res) {
    const alteredOrdersItems = req.body
    const { id } = req.params
    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric value')
      return util.send(res)
    }
    try {
      const updateOrdersItems = await OrdersItemsService.updateOrdersItems(id, alteredOrdersItems)
      if (!updateOrdersItems) {
        util.setError(404, `Cannot find orders with the id: ${id}`)
      } else {
        util.setSuccess(200, 'OrdersItems updated', updateOrdersItems)
      }
      return util.send(res)
    } catch (error) {
      util.setError(404, error)
      return util.send(res)
    }
  }

  static async getOrdersItems(req, res) {
    const { id } = req.params

    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric value')
      return util.send(res)
    }

    try {
      const theOrdersItems = await OrdersItemsService.getOrdersItems(id)

      if (!theOrdersItems) {
        util.setError(404, `Cannot find OrdersItems with the id ${id}`)
      } else {
        util.setSuccess(200, 'Found OrdersItems', theOrdersItems)
      }
      return util.send(res)
    } catch (error) {
      util.setError(404, error)
      return util.send(res)
    }
  }

  static async deleteOrdersItems(req, res) {
    const { id } = req.params

    if (!Number(id)) {
      util.setError(400, 'Please provide a numeric value')
      return util.send(res)
    }

    try {
      const ordersItemsToDelete = await OrdersItemsService.deleteOrdersItems(id)

      if (ordersItemsToDelete) {
        util.setSuccess(200, 'OrdersItems deleted')
      } else {
        util.setError(404, `OrdersItems with the id ${id} cannot be found`)
      }
      return util.send(res)
    } catch (error) {
      util.setError(400, error)
      return util.send(res)
    }
  }
}

export default OrdersItemsController