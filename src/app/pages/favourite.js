// /pages/favourite.js

import React from 'react';

const FavouritePage = () => {
  return (
    <div>
      <h1>Favourite Page</h1>
      {/* Your component code */}
    </div>
  );
};

// This runs on each request and ensures data fetching happens on the server
export async function getServerSideProps() {
  // Your data fetching logic or pass empty props if no data fetching is needed
  return { props: {} }; // Always return at least an empty object
}

export default FavouritePage;
