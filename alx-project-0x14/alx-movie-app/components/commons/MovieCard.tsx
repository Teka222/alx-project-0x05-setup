import React from 'react';

const MovieCard: React.FC = () => {
  return (
    <div className="border rounded shadow p-4">
      <h2 className="text-lg font-bold">Movie Title</h2>
      <p>Movie description...</p>
    </div>
  );
};

export default MovieCard;
