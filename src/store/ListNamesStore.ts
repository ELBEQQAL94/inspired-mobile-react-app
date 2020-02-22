import ListNamesModel from '../interfaces/ListNamesModel';
import { action } from 'easy-peasy';

const ListNamesStore: ListNamesModel = {
  entries: [],
  name: null, // initial store
  addEntry: action((state, payload) => {
    state.entries.unshift(payload);
  }),
  removeEntry: action((state, payload) => {
    state.entries.splice(state.entries.findIndex(entry => entry.id === payload), 1);
    localStorage.setItem('Entry', JSON.stringify(state.entries));
  }),
  randomEntry: action((state, payload) => {
    state.name = state.entries[payload];
    console.log('state name: ', state.name);
  })
};

export default ListNamesStore;
