
import React from "react";
import './../styles/App.css';
import Tooltip from "./ToolTip";

const App = () => {
  return (
    <div>
        <Tooltip text="This is a tooltip">
        <div>Hover over me</div>
        </Tooltip>

        <Tooltip text="This is another tooltip">
          <div>Hover over to see another tooltip</div>
        </Tooltip>
    </div>
  )
}

export default App
