import { Router } from 'express'
import OrdersItemsController from '../controllers/ordersItemsController'

const router = Router()
router.get('/', OrdersItemsController.getAllOrdersItems)
router.post('/', OrdersItemsController.addOrdersItems)
router.get('/:id', OrdersItemsController.getOrdersItems)
router.put('/:id', OrdersItemsController.updatedOrdersItems)
router.delete('/:id', OrdersItemsController.deleteOrdersItems)

export default router