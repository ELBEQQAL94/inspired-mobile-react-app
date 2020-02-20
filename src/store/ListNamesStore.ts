import ListNamesModel from '../interfaces/ListNamesModel';
import { action } from 'easy-peasy';

const ListNamesStore: ListNamesModel = {
  entries: [], // initial store
  addEntry: action((state, payload) => {
    state.entries.unshift(payload);
  }),
  removeEntry: action((state, payload) => {
    state.entries.splice(state.entries.findIndex(entry => entry.id === payload), 1)
  }),
  randomEntry: action((state, payload) => {
    // get random index
    // filter entries base on random index
    // return new entries
  })
};

export default ListNamesStore;
