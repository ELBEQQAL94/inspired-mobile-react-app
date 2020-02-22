import * as React from 'react';
import { useStoreActions } from '../hooks';

const Name: React.FC<Entry> = ({entry}) => {
  const removeEntry = useStoreActions((state) => state.names.removeEntry);
  return (
    <div className="name">
      <h2>{entry.name}</h2>
        <svg
          onClick={() => removeEntry(entry.id)}
          xmlns="http://www.w3.org/2000/svg"
          width="56"
          height="56"
          viewBox="0 0 24 24"
          fill="none"
          stroke="yellow"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="3 6 5 6 21 6"></polyline>
          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
          <line x1="10" y1="11" x2="10" y2="17"></line>
          <line x1="14" y1="11" x2="14" y2="17"></line>
        </svg>
    </div>
  );
};

interface Entry {
 entry: {
  name: string;
  id: string;
 }
};

export default Name;
