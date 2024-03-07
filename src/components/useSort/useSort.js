import { useState } from 'react';

const useSort = (initialOrder) => {
  const [sortOrder, setSortOrder] = useState(initialOrder);

  const toggleSortOrder = () => {
    setSortOrder((prevSortOrder) =>
      prevSortOrder === 'newest' ? 'oldest' : 'newest'
    );
  };

  const toggleAlphabeticOrder = () => {
    setSortOrder((prevSortOrder) =>
      prevSortOrder === 'alphabetic' ? 'reverseAlphabetic' : 'alphabetic'
    );
  };

  return { sortOrder, toggleSortOrder, toggleAlphabeticOrder };
};

export default useSort;