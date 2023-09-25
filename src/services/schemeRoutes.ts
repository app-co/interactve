export const schemeRoutes = {
  client: {
    create: '',
    update: '',
    delete: '',
    listAll: '',
    listByClientId: '',
  },

  atividades: {
    create: '/atividades',
    update: '/atividades-up',
    delete: '/atividades/:id',
    listAll: '/atividades',
    listById: 'atividades/:id',
  },

  grupos: {
    create: '/grupos',
    update: '/grupos/up',
    delete: '/grupos/:id',
    listAll: '/grupos',
    listById: 'grupos/:id',
  },

  contabilidade: {
    create: '/contabil',
    update: '/contabil/up',
    delete: '/contabil/:id',
    listAll: '/contabil',
    listById: 'contabil/:id',
  },
}
