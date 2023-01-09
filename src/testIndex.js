import store from '../app/store'
import { ordered } from '../features/coffee/latte'

const unsubscribe = subscribe(() => console.log('updated state', store.getState()))

console.log('Initial state', store.getState())
store.dispatch(latte.ordered(1))
store.dispatch(latte.ordered(5))

unsubscribe()
