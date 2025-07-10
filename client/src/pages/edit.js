import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Edit = () => {
    const{id} = useParams();
    const navigate = useNavigate ();
    const [input, setInput] = useState({
            title : "",
            isCompleted: "false",
        });

    useEffect (()=>{
        const fetchSingleData = async () => {
        const res = await axios.get(`http://localhost:9000/api/v1/todos/${id}`);
        setInput(res.data);
        };
        fetchSingleData();
    }, [id] );

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
           const res = await axios.put(`http://localhost:9000/api/v1/todos/${id}`, input);
           if(res.status === 200){
            navigate("/");
           }
        } catch (error) {
            alert(error.response.data.message);
        }
    }

  return (
    <>
    <div className="container shadow-lg d-flex align-items-center justify-content-center my-4">
        <div className="col-md-8 m-4">
            <div className="row">
                <h1 className="text-center">Update Todo</h1>
                <form onSubmit={handleUpdate}>
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
                    <div class="form-check mt-3">
                        <input
                        class="form-check-input"
                        name="isCompleted"
                        type="checkbox"
                        id="defaultCheck1"
                        checked = {input.isCompleted === "true"} 
                        onChange={(e) => 
                            setInput({ ...input, isCompleted:e.target.checked ? "true":"false"})
                        }
                        />
                        <label class = "form-check-label" for="defaultCheck1">
                            is Completed?
                        </label>
                    </div>
                    <button type="submit" class="btn btn-primary mt-3">
                        Update Todos
                    </button>
                </form>
            </div>
        </div>
    </div>
    </>
  );
};

export default Edit;
