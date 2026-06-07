import React from 'react'
import { Link } from 'react-router-dom'

const TopBar = () => {
    return (
            <section className="topBarSection">
                <div className="companyTitle">
                    <Link to="/" className='link'>
                    <h2 style={{color:"orangered"}}>SUBY</h2>
                    </Link>
                </div>
                <div className="searchBar">
                    <input type="text" placeholder="search..." />
                </div>
<a
  href="http://localhost:5174/"
  style={{ color: "red", textDecoration: "none" }}
  className="userAuth"
>
  Login/Sign-Up
</a>
            </section>
    )
}

export default TopBar
