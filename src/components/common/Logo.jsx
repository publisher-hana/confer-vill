import React from 'react'
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <h1>
      <Link to="/">
        <img src='/confer-vill/images/logo.png' alt='conference ville' />
      </Link>
    </h1>
  )
}

export default Logo