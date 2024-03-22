import { useContext, useEffect, useState } from 'react';
import Context from '../Context';

export default function DropDownMenu({ onOptionChange}) {
    const handleOptionSelection = (e) => {
        const selectedOption = e.target.value;
        onOptionChange(selectedOption); 
    }

    return (
        <div className='drop-down-menu'>
            <select onChange={handleOptionSelection}>
                <option value="project">Projects</option>
                <option value="costGroup">Cost Groups</option>
                <option value="approvalStatus">Approval Statuses</option>
            </select>
        </div>
    );
}