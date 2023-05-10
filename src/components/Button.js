import React from "react";


function Button() {
    const refresh = () => window.location.reload(true)
return(
    <button onClick={refresh}>Refresh</button>
    )
}

export default Button;