import React from 'react'

const Comment = ({comment}) => {

  return (
    <div className="container-fluid">
      <div className="col-12">
        <div class="card mb-2">
          <h5 class="card-header">{comment.fuente}</h5>
          <div class="card-body">
            <p class="card-text">{comment.comentario}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comment
