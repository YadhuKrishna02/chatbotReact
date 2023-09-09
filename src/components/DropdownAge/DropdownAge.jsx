import React, { useState } from "react";
import "./DropdownAge.css";
import { useDispatch } from 'react-redux';
import { setAge } from "../../redux/AgeReducer/AgeReducer";

function AgeDropdown(props) {
    const dispatch = useDispatch()
    const [selectedAge, setSelectedAge] = useState(null);
    const [isDropdownVisible, setIsDropdownVisible] = useState(true);

    const ageOptions = [];
    for (let age = 18; age <= 40; age++) {
        ageOptions.push(age);
    }

    const handleChange = (event) => {
        setSelectedAge(event.target.value);
        setIsDropdownVisible(false);
        props.actionProvider.handleAgeInput(event.target.value);
        props.actionProvider.thankyouMessage()
        dispatch(setAge(event.target.value))
    };

    return (
        <div>
            {isDropdownVisible ? (
                <select
                    id="ageDropdown"
                    value={selectedAge}
                    onChange={handleChange}
                    className="dropdown"
                >
                    <option value="">Select an age</option>
                    {ageOptions.map((age) => (
                        <option key={age} value={age}>
                            {age}
                        </option>
                    ))}
                </select>
            ) : null}
        </div>
    );
}

export default AgeDropdown;
