import React from 'react'
import Logo from '../../components/Logo'
import SearchBar from '../../components/SearchBar'
import Button from '../../components/Button'

import './style/index.scss'

export default function Header(props) {
  return (
    <header>
      <div className="Logo-HeaderWrapper">
        <Logo/>
      </div>
      <div className="Search">
        <div className="SearchBar--JobTitle">
          <SearchBar title="Công việc" subtitle="Software Engineer, Data Scientist, etc."/>
        </div>
        <div className="SearchBar--JobLocation">
          <SearchBar title="Địa điểm"  subtitle="Ho Chi Minh, Ha Noi, Da Nang"/>
        </div>
        <div className="SearchButton">
          <Button title="Xem Lương" />
        </div>
      </div>
    </header>
  )
}