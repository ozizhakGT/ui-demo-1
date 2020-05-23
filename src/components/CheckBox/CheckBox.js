import React from "react";
import './CheckBox.scss';

const CheckBox = ({isChecked, defaultVal, themeColor}) => (
    <>
        <label className='CheckBox'>
            <input className='CheckBox' type='checkbox' onChange={isChecked} defaultChecked={defaultVal} />
            <span className='CheckBox__input' />
        </label>
   </>
)

export default CheckBox;