import React from 'react';

function Select() {
  return (
    <div>
      <label htmlFor="rare">
        Raridade
        <select id="rare" name="rare" data-testid="rare-input">
          <option value="normal">Normal</option>
          <option value="raro">Raro</option>
          <option value="muito raro">Muito Raro</option>
        </select>
      </label>
    </div>
  );
}

export default Select;
