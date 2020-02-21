import ListNamesModel from '../interfaces/ListNamesModel';
import { action } from 'easy-peasy';

const ListNamesStore: ListNamesModel = {
  entries: [],
  name: null, // initial store
  addEntry: action((state, payload) => {
    // check if the name exists...
    // Add localstorage here ashole using food ref
    state.entries.unshift(payload);
  }),
  removeEntry: action((state, payload) => {
    //let entries = JSON.parse(localStorage.getItem('Entry'));
    //entries.splice(entries.findIndex(entry => entry.id === payload), 1);
    state.entries.splice(state.entries.findIndex(entry => entry.id === payload), 1);
    localStorage.setItem('Entry', JSON.stringify(state.entries));
  }),
  randomEntry: action((state, payload) => {
    state.name = state.entries[payload];
    console.log('state name: ', state.name);
  })
};

export default ListNamesStore;
