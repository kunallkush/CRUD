import React from "react";

function Notes(props) {
  const handleDelete = () => {
    props.deleteItem(props.id);
  };
  return (
    <div className=" mt-3">
      <div className="card  w-50">
        <div className="card-body">
          <h1 className="fs-2">{props.title}</h1>
          <p className="font-monospace">{props.content}</p>
          <div className="d-flex justify-content-end">
            <button
              className="btn btn-primary btn-sm mt-2"
              onClick={handleDelete}
            >
              Delete{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notes;
