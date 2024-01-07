import auth from './auth'
import * as selectors from './auth.selectors'

const store = { ...auth, selectors }

export default store
