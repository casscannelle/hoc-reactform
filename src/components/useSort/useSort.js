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
      prevSortOrder === 'alphabetic'
        ? 'reverseAlphabetic'
        : prevSortOrder === 'reverseAlphabetic'
        ? 'alphabetic'
        : 'alphabetic'
    );
  };

  const toggleReverseAlphabeticOrder = () => {
    setSortOrder((prevSortOrder) =>
      prevSortOrder === 'reverseAlphabetic' ? 'alphabetic' : 'reverseAlphabetic'
    );
  };

  return {
    sortOrder,
    toggleSortOrder,
    toggleAlphabeticOrder,
    toggleReverseAlphabeticOrder,
  };
};

export default useSort;