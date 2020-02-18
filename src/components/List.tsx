import * as React from 'react';
import Name from './Name';
import { useStoreState } from '../hooks';

const List: React.FC = () => {
  const entries = useStoreState(state => state.names.entries);

  return (
    <section className="list">
      <h1>List Of Names</h1>
      <div className="names">

      {
        entries.map((entry) => (
          <Name name={entry.name} key={entry.id} />
        ))
      }
      </div>
    </section>
  );
}

export default List;
