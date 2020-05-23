import React, {useCallback, useRef} from "react";
import './ToggleBtn.scss';

const ToggleBtn = ({onChange}) => {
    // const sildeRef = useRef()
    const handleChange = useCallback(e => {
        const currentStatus = e.target.checked ? 'current' : 'optimal';

        onChange(currentStatus);
    }, [])

    return (
        <div className='ToggleBtn'>
            <input id='toggle' type="checkbox" defaultChecked={false} onChange={handleChange} />
            <label htmlFor="toggle">
                <span>Optimal</span>
                <span>Current</span>
                <span className='slide' />
            </label>
        </div>
    )
}

export default ToggleBtn;