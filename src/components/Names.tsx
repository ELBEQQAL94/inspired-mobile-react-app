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
        {name != null ? (
          <Name entry={name} />
        ) : entries.length === 0 ? (
          <p>Add Name To Your List</p>
        ) : (
          entries.map(entry => <Name entry={entry} />)
        )}
      </div>
    </div>
  );
};

export default List;
