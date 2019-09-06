import React from 'react';
import './style.css';

export default function SearchBar(props) {
  return (
    <div className={`SearchBar ${props.id}`}>
      <div className="SearchBar--Title">{props.title}</div>
      <div className="SearchBar--Subtitle">{props.subtitle}</div>

      <input id="text-input-what" class="icl-TextInput-control icl-TextInput-control--whatWhere"
        autocomplete="off" ></input>
    </div>
  )
}