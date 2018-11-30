import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <div>
      <h1 className="display-4">404 Page Not Found</h1>
      <p className="lead">
        Sorry, that page does not exist. Navigate to <Link to="/">home</Link>.
      </p>
    </div>
  );
};
