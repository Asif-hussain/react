import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';

const History: React.FC = () => {
  const searches = useSelector((state: RootState) => state.history.searches);

  return (
    <div>
      <h2>Search History</h2>
      <ul>
        {searches.map((search, index) => (
          <li key={index}>{search}</li>
        ))}
      </ul>
    </div>
  );
};

export default History;
