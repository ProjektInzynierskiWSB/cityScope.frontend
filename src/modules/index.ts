import authorization from './authorization'
import home from './home'
import list from './list'

export const routes = [...home.routes, ...list.routes, ...authorization.routes]
