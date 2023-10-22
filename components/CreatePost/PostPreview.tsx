import React from 'react'
import { useEffect, useState } from 'react';

const PostPreview = () => {

    const [storedData, setStoredData] = useState(null);

    useEffect(() => {
        // Retrieve JSON data from local storage
        const jsonData = localStorage.getItem('novel__content');
    
        if (jsonData) {
          // Parse and set the data in the component's state
          setStoredData(JSON.parse(jsonData));
        }
      }, []);
  return (
    <div>
      <h1>JSON Data from Local Storage</h1>
      <div className='text-xs'>
        {storedData && (
          <pre>{JSON.stringify(storedData, null, 2)}</pre>
        )}
      </div>
    </div>
  )
}

export default PostPreview