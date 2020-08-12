import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {addItem} from '../../Store/Action/itemAction'
import { v4 as uuidv4 } from "uuid";


function AddItem() {

    const [item , setItem] =useState({
        id:uuidv4(),
        Name:'',
        Cost:'',
        Serving:1
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
            Name:'',
            Cost:'',
            Serving:1
        });
    }
    return (
        <div className="container center ">
            <h4 className="black-text "> MENU </h4>
            <form onSubmit={handleAdd} >
                <div className="input-field">
                    <label htmlFor="post_title" >Item Name </label>
                    <input 
                        onChange={handleChange}
                        value={item.Name||""}
                        type="text"
                        name="Name"
                        className="materialize-textarea"
                    />
                </div>
                <div className="input-field ">
                    <label> Cost </label>
                    <textarea
                        onChange={handleChange}
                        value={item.Cost||""}
                        name="Cost"
                        className="materialize-textarea black-text" >
                    </textarea>
                </div>
                    <button data-testid="add"  className="btn light-blue lighten-3  black-text">
                        Add Item
                        <i className="material-icons right">send</i>
                    </button>
            </form>
        </div>
    )
}

export default AddItem

