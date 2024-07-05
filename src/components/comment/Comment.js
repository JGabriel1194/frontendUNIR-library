import React from 'react'

const Comment = ({comment}) => {

  return (
    <div className="container-fluid">
      <div className="col-12">
        <div className="card mb-2">
          <h5 className="card-header">{comment.fuente}</h5>
          <div className="card-body">
            <p className="card-text">{comment.comentario}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comment
