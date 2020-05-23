import React from "react";
import './DataTable.scss';

export const HeadRow = ({children, fontSize='1.3rem'}) => (<div className='DataTable__row DataTable__head'><div style={{fontSize}}>{children}</div></div>)

export const BodyRow = ({children}) => (<div className='DataTable__row'><div>{children}</div></div>)

export const Column = ({children, size='medium', align='left', style={}}) => (<div className={`DataTable__column DataTable__column--${size}`} style={{textAlign: align, ...style}}>{children}</div>)

const DataTable = ({children}) => <div className='DataTable'>{children}</div>

export default DataTable;