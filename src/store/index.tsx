import { createStore } from 'easy-peasy';
import Store from '../interfaces/Store';
import ListNamesStore from './ListNamesStore';

const store: Store = {
  names: ListNamesStore,
};
export default createStore<Store>(store);
