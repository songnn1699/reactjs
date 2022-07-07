import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore} from 'redux'
import rootReducer from './reducers';


const devToolsEnhancer = composeWithDevTools();

const store = createStore(rootReducer, devToolsEnhancer);
export default store;

