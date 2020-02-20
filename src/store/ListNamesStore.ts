import ListNamesModel from '../interfaces/ListNamesModel';
import { action } from 'easy-peasy';

const ListNamesStore: ListNamesModel = {
  entries: [{
    name: 'youssef ELBEQQAL',
    id: '1',
  }], // initial store
  addEntry: action((state, payload) => {
    state.entries.unshift(payload);
  })
};

export default ListNamesStore;
