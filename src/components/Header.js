import React from 'react';

function Header(props){
    return(
        <>
            <h2 className="count"> Number of Orders: {props.count.length}</h2>
        </>
    )
}

export default Header;
