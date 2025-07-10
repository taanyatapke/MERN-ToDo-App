import todoModel from "../models/todoModel.js"

class todoController
{
    static getAllTodos = async (req, res) => {
        try {
            const fetchAllTodos = await todoModel.find({});
            return res.status(200).json(fetchAllTodos);
        }   catch(error) {
            return res.status(400).json({ message: error.message });
        }
    };

    static addNewTodos = async(req, res) => {
        const { title, isCompleted } = req.body;
        try{
            if(title && title.trim()!=="") 
            {
                const addTodo = new todoModel({
                    title,
                    isCompleted: isCompleted ?? "false",
                });

                const savedTodo = await addTodo.save();
                return res.status(201).json({message: "todo created"});
            } 
            else{
                return res.status(400).json({message: "title is required"});
            }
        } catch(error){
          return res.status(400).json({message: error.message});
        }
    };

    static getSingleData = async(req, res) => {
        const {id} = req.params;
        try {
            if (id){
                const fetchSingleData = await todoModel.findById(id);
                return res.status(200).json(fetchSingleData);
            }
            else {
              return res.status(400).json({ message: "invalid URL" });  
            }    
        } catch (error) {
            return res.status(400).json({ message: error.message });
        }
    };

    static updateTodo = async(req, res) => {
        const {id} = req.params;
        try {
            if(id) {
                await todoModel.findByIdAndUpdate(id, req.body);
                return res.status(200).json({ message: "todo updated" });
            } else {
              return res.status(400).json({ message: "invalid URL" });  
            } 
        } catch (error) {
            return res.status(400).json({ message: error.message });
        }
    };

    static deleteTodo = async (req, res) => {
        const{id} = req.params;
        try {
            if(id)
            {
                await todoModel.findByIdAndDelete(id);
                return res.status(200).json({ message: "todo deleted" });
            } else {
              return res.status(400).json({ message: "invalid URL" });  
            } 
        } catch (error) {
             return res.status(400).json({ message: error.message });
        }
    }
}

export default todoController; 