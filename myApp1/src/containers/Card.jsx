import React from 'react'

function Card({ task, index, onDelete, onEdit }) {
  return (
    <div>
        <li className="todo-item">
            <span>{task}</span>
            <div className="actions">
              <button 
              className="edit-btn"
              onClick={()=>{
                onEdit(index);
              }}
              >Edit</button>
              <button 
              className="delete-btn"
              onClick={()=>{
                onDelete(index);
              }}
              >Delete</button>
            </div>
          </li>
    </div>
  )
}

export default Card