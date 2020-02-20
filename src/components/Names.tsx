import * as React from 'react';
import Name from './Name';
import { useStoreState } from '../hooks';

const List: React.FC = () => {
  const entries = useStoreState(state => state.names.entries);

  console.log(entries);

  return (
    <div className="container">
      <div className="names">
        {entries.map(entry => (
          <Name name={entry.name} key={entry.id} />
        ))}
      </div>
    </div>
  );
};

export default List;
