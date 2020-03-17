import React, { memo } from 'react';


//背景遮罩
function Mask() {

    return <div style={{
        position: "fixed",
        left: 0,
        top: 0,
        bottom: 0,
        right: 0,
        zIndex: 5,
        background: "#000",
        opacity: 0.5,
    }}
    />
}


export default memo(Mask)