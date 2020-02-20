import * as React from 'react';
import Form from './Form';

const Header: React.FC = () => (
    <div className="container">
      <header>

      <div className="brand">
        list of names
      </div>
      <div className="add_name">
        <Form />
      </div>
  </header>
    </div>
);

export default Header;
