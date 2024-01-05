import { useState } from 'react';

const ChildComponent = ({ sendDataToParent }) => {
  const [childData, setChildData] = useState('');

  // Function to send data to the parent using the callback
  const sendDataToParentHandler = () => {
    // Call the callback function and pass data to the parent
    sendDataToParent(childData);
  };

  return (
    <div>
      <h3>Child Component</h3>
      <input
        type="text"
        style={{color:"black"}}
        value={childData}
        onChange={(e) => setChildData(e.target.value)}
        placeholder="Enter data"
      />
      <button onClick={sendDataToParentHandler}>Send Data to Parent</button>
    </div>
  );
};

export default ChildComponent;
