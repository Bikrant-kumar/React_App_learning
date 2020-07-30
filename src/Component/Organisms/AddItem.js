import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {addItem} from '../../Store/Action/itemAction'
import { v4 as uuidv4 } from "uuid";


function AddItem() {

    const [item , setItem] =useState({
        id:'',
        item:'',
        serving:''
    }); 
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setItem({ ...item,[e.target.name]:e.target.value})
    };

    const handleAdd = (e) => {
        e.preventDefault();
        dispatch(addItem(item))
        setItem({
            id:uuidv4(),
            Name:"",
            Cost:"",
        });
    }
    return (
        <div className="container">
            <h4 className="blue-text "> MENU </h4>
            <form onSubmit={handleAdd}>
                <div className="input-field">
                    <label htmlFor="post_title" >Item Name </label>
                    <input 
                        onChange={handleChange}
                        value={item.Name}
                        type="text"
                        name="Name"
                        className="materialize-textarea"
                    />
                </div>
                <div className="input-field">
                    <label> Cost </label>
                    <textarea
                        onChange={handleChange}
                        value={item.Cost}
                        name="Cost"
                        className="materialize-textarea" >
                    </textarea>
                </div>
                    <button data-testid="add"  className="btn blue">
                        Add Item
                        <i className="material-icons right">send</i>
                    </button>
            </form>
        </div>
    )
}

export default AddItem

