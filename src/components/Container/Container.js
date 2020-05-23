import React from "react";
import './Container.scss';

const Container = ({children, style, classNames}) => {
    return (
        <div className={`Container ${classNames}`} style={style}>{children}</div>
    )
}

export default Container;