import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const NavbarComp = () => {
  return (
    <>
      <nav className="navbar sticky-top navbar-expand-lg shadow-sm p-3 mb-4 bg-body rounded mx-lg-5 mt-3 mx-md-3 mx-3">
        <div className="container-fluid">
          <Link className="navbar-brand" href="/">
            <Image src="/next.svg" alt="Logo" width="30" height="24" className="d-inline-block align-text-top" />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" href="/stores">Stores</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/about">About</Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Categories
                </Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" href="/categories/electronics">Electronics</Link></li>
                  <li><Link className="dropdown-item" href="/categories/jewelery">Jewelery</Link></li>
                  <li><Link className="dropdown-item" href="/categories/men's%20clothing">Men's clothing</Link></li>
                  <li><Link className="dropdown-item" href="/categories/women's%20clothing">Women's clothing</Link></li>
                </ul>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </>
  )
}

export default NavbarComp