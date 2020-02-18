import * as React from 'react';

const Name: React.FC<NameProps> = (props) => <h2>{props.name}</h2>;

interface NameProps {
  name: string;
}

export default Name;
