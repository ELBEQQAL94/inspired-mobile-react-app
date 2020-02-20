import ListNamesEntry from './ListNamesEntry'
import { Action } from 'easy-peasy';

export default interface ListNamesModel {
  entries: ListNamesEntry[];
  addEntry:  Action<ListNamesModel, ListNamesEntry>,
  removeEntry: Action<ListNamesModel, string>,
}
