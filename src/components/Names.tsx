import * as React from 'react';
import Name from './Name';
import { useStoreState } from '../hooks';
import ListNamesEntry from '../interfaces/ListNamesEntry';

const List: React.FC = () => {
  const entries = useStoreState(state => state.names.entries);
  const name = useStoreState(state => state.names.name);

  return (
    <div className="container">
      <div className="names">
        <h2>Random Name:</h2>
        {name != null ? <Name entry={name} /> : ''}
        <hr />
        {entries.length === 0 ? (
          <p>Add Name To Your List</p>
        ) : (
          entries.map(entry => <Name entry={entry} key={entry.id}/>)
        )}
      </div>
    </div>
  );
};

export default List;
