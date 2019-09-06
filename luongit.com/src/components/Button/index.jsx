import React from 'react';
import './style.css';

export default function Button(props) {
  return (
    <div className={`Button ${props.id}`}>
        <button>
            <a href={props.href}>{props.title}</a>
        </button>
    </div>
  )
}