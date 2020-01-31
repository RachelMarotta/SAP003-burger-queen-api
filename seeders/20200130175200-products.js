'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('products', [
      {
        name: 'Café com leite',
        price: 7,
        category: 'Café da manhã',
        type: '',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Café americano',
        price: 5,
        category: 'Café da manhã',
        type: '',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Suco de fruta natural',
        price: 7,
        category: 'Café da manhã',
        type: '',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Misto quente',
        price: 10,
        category: 'Café da manhã',
        type: '',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Hambúrguer simples',
        price: 10,
        category: 'Lanches',
        type: 'Hambúgueres',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Hambúrguer duplo',
        price: 15,
        category: 'Lanches',
        type: 'Hambúrgueres',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Anéis de cebola',
        price: 5,
        category: 'Lanches',
        type: 'Acompanhamentos',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Batata frita',
        price: 5,
        category: 'Lanches',
        type: 'Acompanhamentos',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Refrigerante 750ml',
        price: 10,
        category: 'Lanches',
        type: 'Bebidas',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Refrigerante 500ml',
        price: 7,
        category: 'Lanches',
        type: 'Bebidas',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Água 500ml',
        price: 5,
        category: 'Lanches',
        type: 'Bebidas',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Água 750ml',
        price: 7,
        category: 'Lanches',
        type: 'Bebidas',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ],{});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('products', null, {});
    
  }
};
