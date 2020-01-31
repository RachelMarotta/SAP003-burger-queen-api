import { Router } from 'express'
import ProductsController from '../controllers/productsController'

const router = Router()
router.get('/', ProductsController.getAllProducts)
router.post('/', ProductsController.addProducts)
router.get('/:id', ProductsController.getProducts)
router.put('/:id', ProductsController.updatedProducts)
router.delete('/:id', ProductsController.deleteProducts)

export default router