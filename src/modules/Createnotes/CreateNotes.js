import React ,{useState}from "react";
function CreateNotes(props) {
  const [notes, setNotes] = useState({
    title: "",
    content: "",
  });
  const handleChange = (event) => {
    const{name,value}=event.target;
    setNotes((prevData) => {
      return {
        ...prevData,
        [name]:value
      };
    },
    );
  };
  const handleAddNotes=()=>{
    props.postNote(notes)
    setNotes({
        title:'',
        content:''
    })
  }
  return (
    <>
      <div className=" d-flex justify-content-center mt-3">
        <div className="card  w-50">
          <div className="card-header">Add Notes</div>
          <div className="card-body">
            <form className="d-flex  flex-column">
              <input
                type="text"
                value={notes.title}
                name='title'
                onChange={handleChange}
                className="form-control"
                id=""
                aria-describedby=""
                placeholder="Title"
                autoComplete="off"
              />
              <div className="form-floating mt-2">
                <textarea
                  value={notes.content}
                  name='content'
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Leave a comment here"
                ></textarea>
             </div>{" "}
            </form>
            <div className="d-flex justify-content-end">
              <button className="btn btn-primary btn-sm mt-2 " onClick={handleAddNotes} >Add </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateNotes;
