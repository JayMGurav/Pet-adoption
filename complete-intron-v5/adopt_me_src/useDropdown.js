import React, { useState } from "react";

const useDropDown = (label, defaultState, options) => {
  const [state, setState] = useState(defaultState);
  const id = `use-dropdown-${label.replace(" ", "").toLowerCase()}`;
  const dropDown = () => {
    return (
      <label htmlFor={id}>
        {label}
        <select
          id={id}
          value={state}
          onChange={e => setState(e.target.value)}
          onBlur={e => setState(e.target.value)}
          disabled={!options.length}
        >
          <option>All</option>
          {options.map(itm => (
            <option key={itm} value={itm}>
              {itm}
            </option>
          ))}
        </select>
      </label>
    );
  };
  return [state, dropDown, setState];
};

export default useDropDown;
