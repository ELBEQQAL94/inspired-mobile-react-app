import * as React from 'react';
import Name from './Name';
import { useStoreState } from '../hooks';
import ListNamesEntry from '../interfaces/ListNamesEntry';

const List: React.FC = () => {
  let data:ListNamesEntry[] = JSON.parse(localStorage.getItem('Entry'));
  const entries = useStoreState(state => state.names.entries);
  return (
    <div className="container">
      <div className="names">
        {data.length === 0 ? (
          <p>Add Name To Your List</p>
        ) : (
          data.map(entry => <Name entry={entry} />)
        )}
      </div>
    </div>
  );
};

export default List;
