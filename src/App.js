import "./App.css";
import { useState,useEffect } from "react";
import CreateNotes from "./modules/Createnotes/CreateNotes";
import Notes from "./modules/Createnotes/Notes";
import Navigation from "./modules/NavigationBar/Navigation";
import Todo from "./modules/CRUD/todo";
import { json } from "react-router-dom";
import Employee from "./NewCRUD/Employee";
// import Footer from './modules/Footer'
function App() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const addNotes = (notes) => {
    setData((prevData) => {
      return [...prevData, notes];
    },
    localStorage.setItem('notes',JSON.stringify(notes)) 
    );
    // console.log(notes)
  };
  const deleteItem = (id) => {
    setData((oldData) => {
      return oldData.filter((current, index) => {
        return index !== id;
      });
    });
  };

  useEffect(() => {
    localStorage.getItem('notes')
  }, [])
  

  
  
  return (
    <>
      {/* <Navigation />
      <CreateNotes postNote={addNotes} />

      <Notes />
      {!loading ? (
        data.map((elm, i) => {
          return (
            <Notes
              key={i}
              id={i}
              title={elm.title}
              content={elm.content}
              deleteItem={deleteItem}
            />
          );
        })
      ) : (
        <Notes />
      )} */}
      {/* <Footer/> */}

      {/* <Todo/> */}

      <Employee/>
    </>
  );
}

export default App;
