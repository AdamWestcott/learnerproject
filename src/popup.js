import React from 'react'

function Popup(props){
    return(props.trigger) ?(
        <div className ="popup">
            <div className ="popupinner"></div>
        <button className="closebtn" onClick ={() => props.setTrigger(false)}> close</button>
        {props.children}
</div>
    ): "";
}

export default Popup