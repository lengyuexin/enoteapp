import React, { memo } from 'react';

//信息修改
function Modify({
    children,
    style
}) {

    return <div style={{
        position: "fixed",
        width: `480px`,
        height: `320px`,
        left: 0,
        top: 0,
        bottom: 0,
        right: 0,
        zIndex: 6,
        margin: "120px auto 0 auto",
        background: "#fff",
    }}
    >{children}</div>
}


export default memo(Modify)