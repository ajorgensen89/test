// // Not needed in new React but better to use for use with old.
import React from 'react'
import css from './css/Sidebar.module.css'

function Sidebar() {
    return (
        <div className={css.sidebar}>
            <a href = "#." target= "_blank">My Photos</a>
            <a href = "#." target= "_blank">My Illustrations</a>
            <a href = "#." target= "_blank">My Paintings</a>
        </div>
    )
}

// const Sidebar = () => <div>
//     <a>MyPhotos</a><br></br>
//     <a>MyIllustrations</a><br></br>
//     <a>MyPaintings</a><br></br>
//     </div>

// // Use default to import with any name.
export default Sidebar;
