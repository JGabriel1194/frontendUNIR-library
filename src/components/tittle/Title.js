import React from "react";
import './Title.css';

const Title = ({title}) => {
    return (
      <div className="container p-5">
        <div className="row title-border">
          <div className="col">
            <h1>{title}</h1>
          </div>
        </div>
      </div>
    );
}

export default Title;