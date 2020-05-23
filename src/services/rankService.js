import Icon from "../components/Icon/Icon";
import React from "react";

export const renderRank = (score, icon, style, limit=4) => Array.from({length: limit}).map((star, i) => <Icon style={style} icon={`${icon}${score > i ? '-full' : ''}`} key={i} />)