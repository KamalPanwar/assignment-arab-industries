import React from "react";
import './toggleButton.css'

const ToggleButton = () => {
  return (
    <div>
      <input id="checkbox_toggle" type="checkbox" class="check" />
      <div class="checkbox">
        <label class="slide" for="checkbox_toggle">
          <label class="toggle" for="checkbox_toggle"></label>
          <label class="text" for="checkbox_toggle">
            Monthly
          </label>
          <label class="text" for="checkbox_toggle">
            Annually
          </label>
        </label>
      </div>
    </div>
  );
};

export default ToggleButton;
