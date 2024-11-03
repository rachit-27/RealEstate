import React from 'react';
import SaveCountChart from '../SaveCount/SaveCountChart';
import { useParams } from 'react-router-dom';

const SaveCountPage = () => {
  const { postId } = useParams();
  // Get the post ID from the URL

  return (
    <div>
      <h1>Total Count For This Post</h1>
      <SaveCountChart postId={postId} /> {/* Pass the ID to SaveCountChart */}
    </div>
  );
};

export default SaveCountPage;
