import React, {useState} from "react";
import './DropDown.scss';

const DropDown = ({children, className='',border='', optionsWidth='initial', width, label, placeholder='Select Option', options=null, isCloseOnBlur=true, isCloseOnChoose=true}) => {
    const [value, setValue] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    const onToggleDropDown = () => isCloseOnChoose ? setIsOpen(!isOpen) : setIsOpen(true);

    const renderOptions = () => options  ?
        options.map(option => <li onClick={() => setValue(option.name)}>{option.name}</li>) : ''

    const onOpen = () => setIsOpen(true);
    const onClose = () => (isCloseOnBlur || isCloseOnChoose) ? setIsOpen(false) : '';

    return (
        <div className={`DropDown ${className}`} style={{width: width}}>
            {label && <div className='DropDown__label'>{label}</div>}
            <div tabIndex='-1' className='DropDown__select' style={{border: border}} onClick={isCloseOnChoose ? onOpen : onToggleDropDown} onBlur={onClose}>
                {value ?
                    <span className='DropDown__value'>{value}</span> :
                    <span className='DropDown__placeholder'>{placeholder}</span>}
                    <span className={`DropDown__arrow ${isOpen && 'DropDown__arrow-open'}`}>&#8964;</span>
                {isOpen && <ul className='DropDown__options' style={{width: optionsWidth}}>
                    {(options || children) ? <>
                            {placeholder && <li className='DropDown__placeholder' onClick={() => setValue('')}>{placeholder}</li>}
                    {children ? children : renderOptions()}
                    </> :
                        <li className='DropDown__placeholder'>Empty</li>
                    }
                </ul>}
            </div>
        </div>
    )
}

export default DropDown;