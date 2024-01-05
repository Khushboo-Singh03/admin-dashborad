// ParentComponent.js
import { useState } from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  const [dataFromChild, setDataFromChild] = useState(null);

  // Callback function to receive data from the child
  const receiveDataFromChild = (data) => {
    // Update the state with data received from the child
    setDataFromChild(data);
  };

  return (
    <div>
      <h2>Parent Component</h2>
      <p>Data received from child: {dataFromChild}</p>

      <ChildComponent sendDataToParent={receiveDataFromChild} />
    </div>
  );
};

export default ParentComponent;
