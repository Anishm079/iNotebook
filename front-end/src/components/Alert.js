import React from "react";

function Alert(props) {
  //style
  let styles={
    backgroundColor : props.theme==="dark" ? "#2c2b2b" :"#eeeeee" ,
    color: props.theme==="dark" ? "white":"black",
    border:'none',
    margin: '0 5px'
  }

//About Cumulative layout Shift :- moving following elements of current elements to a certain position based on events of current element
//It should be minimal
  return (
    <div style={{height:'50px'}}>
    {props.alert && <div>
      <div className={`alert alert-${props.theme}`} role="alert" style={styles}>
        <strong>{props.alert.message + " : "} </strong>{props.alert.type}
      </div>
    </div>}
    </div>
  );
}

export default Alert;
