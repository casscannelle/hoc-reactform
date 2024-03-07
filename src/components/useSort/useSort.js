import { useState } from 'react';

const useSort = (initialOrder) => {
  const [sortOrder, setSortOrder] = useState(initialOrder);

  const toggleSortOrder = () => {
    setSortOrder((prevSortOrder) =>
      prevSortOrder === 'newest' ? 'alphabetic' : 'newest'
    );
  };

  return { sortOrder, toggleSortOrder };
};

export default useSort;