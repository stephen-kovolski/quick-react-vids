import React from "react";


function Button() {
    const refresh = () => window.location.reload(true)
return(
    <div>
    <button onClick={refresh}>Refresh</button>
    </div>
    )
}

export default Button;