import { useContext, useEffect, useState } from 'react';
import Context from '../Context';

export default function DropDownMenu({ onOptionChange }) {
    const handleOptionSelection = (e) => {
        const selectedOption = e.target.value;
        onOptionChange(selectedOption); 
    }

    return (
        <div className='drop-down-menu'>
            <select onChange={handleOptionSelection}>
                <option value="default">Projects</option>
                <option value="option1">Cost Groups</option>
                <option value="option2">Divisions</option>
            </select>
        </div>
    );
}