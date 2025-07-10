import React, { useState, useEffect } from 'react' ;
import axios from 'axios'
import { Link } from "react-router-dom";

const Home = () => {
    const [todos, setTodos] = useState([]);
    const [render, setRender] = useState(false);
    const [input, setInput] = useState({
        title : "",
        isCompleted: "false",
    });

    useEffect(() => {
        const fetchAllTodos = async () => {
            const res = await axios.get("http://localhost:9000/api/v1/todos");
            setTodos(res.data);
        }; 
        fetchAllTodos();       
    }, [render]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:9000/api/v1/todos", { 
            title: input.title.trim(), 
            isCompleted: "false", });
            setInput ({title: ""});
            setRender(!render);
        } catch (error) {
            alert(error.response?.data?.message || "something went wrong");
        }
    };

    const handleDelete = async (id) => {
        await axios.delete(`http://localhost:9000/api/v1/todos/${id}`);
        const remainingItems = todos.filter((item) => {
            return item._id !== id;
        });
        setTodos(remainingItems);
    };

  return (
    <>
     <div className = "container shadow-lg d-flex align-items-center my-4">
        <div className= "col-md-8 m-4">
            <div className="row">
                <h1 className="text-center">My Todos</h1>
                <form onSubmit={handleSubmit}>
                    <div class="form-group">
                        <label for="exampleInputEmail">Todo Title</label>
                        <input
                        type="text"
                        name="title"
                        value={input.title}
                        onChange={(e) => 
                            setInput({...input,[e.target.name] : e.target.value})
                        }
                        class="form-control"
                        id="exampleInputEmail"
                        aria-describedby="emailHelp"
                        placeholder="Enter Title"
                        />
                    </div>
                    {/* <div class="form-check mt-3">
                        <input
                        name="isCompleted"
                        onChange={(e) => 
                            setInput({ ...input,[e.target.name] : e.target.checked})
                        }
                        class="form-check-input"
                        type="checkbox"
                        id="defaultCheck1"
                        />
                        <label class = "form-check-label" for="defaultCheck1">
                            is Completed?
                        </label>
                    </div> */}
                    <button type="submit" class="btn btn-primary mt-3">
                        Add Todo
                    </button>
                </form>
                <table class="table table-hover mt-4">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Title</th>
                            <th scope="col">Status</th>
                            <th scope="col">Edit</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            todos && todos.length > 0 ? ( 
                                todos.map((item) => {
                                    return (
                                        <tr key={item._id}>
                                            <td>{item._id}</td>
                                            <td>{item.title}</td>
                                            <td>{item.isCompleted === "true" ? ( 
                                                <span class="badge text-bg-success">Completed</span> 
                                ) : (
                                    <span class="badge text-bg-warning">Pending</span>
                                ) }</td>
                                            <td>
                                                <Link to={`/edit/${item._id}`}>
                                                <button className = "btn btn-primary">Edit</button>
                                                </Link>
                                            </td>
                                            <td>
                                                <button onClick={() => handleDelete(item._id)} className="btn btn-danger">Delete</button>
                                            </td>
                                        </tr>
                                    );
                                })
                            ) : ( 
                            <tr>
                                <td colSpan = "5">No Todos Found</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    </div>            
    </>
  );
};

export default Home;
