import React from 'react'
import Logo from '../../components/Logo'
import SearchBar from '../../components/SearchBar'
import Button from '../../components/Button'

import './style.css'

export default function Header(props) {
  return (
    <header>
      <div className="Logo-HeaderWrapper">
        <Logo/>
      </div>
      <div className="Search">
        <div className="SearchBar--JobTitle">
          <SearchBar title="Cong viec" subtitle="Intern, Junior, Senior"/>
        </div>
        <div className="SearchBar--JobLocation">
          <SearchBar title="Dia diem"  subtitle="Ho Chi Minh, Ha Noi, Da Nang"/>
        </div>
        <div className="SearchButton">
          <Button title="Xem Luong" />
        </div>
      </div>
    </header>
  )
}