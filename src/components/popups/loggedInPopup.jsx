import React from "react";
import Popup from 'reactjs-popup';

const PopupExample = () => (
    <Popup trigger={<button> Trigger</button>} position="right center">
      <div>Popup content here !!</div>
    </Popup>
  );

  export default PopupExample;