import ListNamesEntry from './ListNamesEntry'
import { Action } from 'easy-peasy';

export default interface ListNamesModel {
  entries: ListNamesEntry[];
  name: ListNamesEntry,
  addEntry:  Action<ListNamesModel, ListNamesEntry>,
  removeEntry: Action<ListNamesModel, string>,
  randomEntry: Action<ListNamesModel, number>
}
