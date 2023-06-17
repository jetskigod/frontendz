import React from 'react'
import Head from 'next/head'
import Image from 'next/image';
import Link from 'next/link';

export default function contact() {
  return (
    <>
    <Head>
      <title>jett</title>
    </Head>
  
    <style dangerouslySetInnerHTML={{__html: "\n      .bd-placeholder-img {\n        font-size: 1.125rem;\n        text-anchor: middle;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        user-select: none;\n      }\n\n      @media (min-width: 768px) {\n        .bd-placeholder-img-lg {\n          font-size: 3.5rem;\n        }\n      }\n\n      .b-example-divider {\n        width: 100%;\n        height: 3rem;\n        background-color: rgba(0, 0, 0, .1);\n        border: solid rgba(0, 0, 0, .15);\n        border-width: 1px 0;\n        box-shadow: inset 0 .5em 1.5em rgba(0, 0, 0, .1), inset 0 .125em .5em rgba(0, 0, 0, .15);\n      }\n\n      .b-example-vr {\n        flex-shrink: 0;\n        width: 1.5rem;\n        height: 100vh;\n      }\n\n      .bi {\n        vertical-align: -.125em;\n        fill: currentColor;\n      }\n\n      .nav-scroller {\n        position: relative;\n        z-index: 2;\n        height: 2.75rem;\n        overflow-y: hidden;\n      }\n\n      .nav-scroller .nav {\n        display: flex;\n        flex-wrap: nowrap;\n        padding-bottom: 1rem;\n        margin-top: -1px;\n        overflow-x: auto;\n        text-align: center;\n        white-space: nowrap;\n        -webkit-overflow-scrolling: touch;\n      }\n\n      .btn-bd-primary {\n        --bd-violet-bg: #712cf9;\n        --bd-violet-rgb: 112.520718, 44.062154, 249.437846;\n\n        --bs-btn-font-weight: 600;\n        --bs-btn-color: var(--bs-white);\n        --bs-btn-bg: var(--bd-violet-bg);\n        --bs-btn-border-color: var(--bd-violet-bg);\n        --bs-btn-hover-color: var(--bs-white);\n        --bs-btn-hover-bg: #6528e0;\n        --bs-btn-hover-border-color: #6528e0;\n        --bs-btn-focus-shadow-rgb: var(--bd-violet-rgb);\n        --bs-btn-active-color: var(--bs-btn-hover-color);\n        --bs-btn-active-bg: #5a23c8;\n        --bs-btn-active-border-color: #5a23c8;\n      }\n      .bd-mode-toggle {\n        z-index: 1500;\n      }\n    " }} />

  <header>
<nav className="navbar navbar-expand-lg bg-danger">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">JETZ</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" href="/.">หน้าแรก</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/about">เกี่ยวกับเรา</Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            บริการของเรา
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">ขายไก่</a></li>
            <li><a className="dropdown-item" href="#">ขายหมา</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="#">ขายคน</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/contact"> ติดต่อเรา</Link>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-dark" type="submit">ค้นหา</button>
      </form>
    </div>
  </div>
</nav>

<div>




</div>
</header>
<br />
<br />
<br /> 
<main>
  <center>
<div className="w3-padding-64 w3-content w3-text-grey" id="contact">
  <h2 className="w3-text-light-grey">ช่องทางการติดต่อ</h2>
  <hr style={{width: 200}} className="w3-opacity" />
  <div className="w3-section">
    <p><i className="fa fa-map-marker fa-fw w3-text-white w3-xxlarge w3-margin-right" /> CHIANGMAI , THAILAND</p>
    <p><i className="fa fa-phone fa-fw w3-text-white w3-xxlarge w3-margin-right" /> Phone: 0970527606</p>
    <p><i className="fa fa-envelope fa-fw w3-text-white w3-xxlarge w3-margin-right"> </i> Email: jetskiyoungsins@gmail.com</p>
    <p><i className="fa fa-envelope fa-fw w3-text-white w3-xxlarge w3-margin-right"> </i> FB : Jetniphat Biturongsakun</p>
    <p><i className="fa fa-envelope fa-fw w3-text-white w3-xxlarge w3-margin-right"> </i> IG : Jxtsz</p>
    <p><i className="fa fa-envelope fa-fw w3-text-white w3-xxlarge w3-margin-right"> </i> LINE jnpbtrsk.</p>

    <div class="container py-4">

    <div class="p-5 mb-4 bg-body-tertiary rounded-3">
      <div class="container-fluid py-5">
        <h1 class="display-5 fw-bold">FACEBOOK</h1>
        <img src="/facebook.png" className="bd-placeholder-img " alt="facebook"width={1000} height={350} />
        <br></br>
        <br></br>
        <p><a className="btn btn-secondary" href="https://www.facebook.com/Cittesx/">GO TO FACEBOOK</a></p>
      </div>
    </div>

    <div class="row align-items-md-stretch">
      <div class="col-md-6">
      <div class="container-fluid py-5">
        <h1 class="display-5 fw-bold">INSTAGRAM</h1>
        <img src="/insta.png" className="bd-placeholder-img " alt="facebook"width={600} height={200} />
        <br></br>
        <br></br>
        <p><a className="btn btn-secondary" href="https://www.instagram.com/jxtsz/">GO TO INSTAGRAM</a></p>
      </div>
      </div>
      <div class="col-md-6">
      <div class="container-fluid py-5">
        <h1 class="display-5 fw-bold">EMAIL</h1>
        <img src="/mail.png" className="bd-placeholder-img " alt="facebook"width={410} height={350} />
        <br></br>
        <br></br>
        <p>Contact mail</p>
      </div>
      </div>
    </div>

    <footer class="pt-3 mt-4 text-body-secondary border-top">
      &copy; 2023
    </footer>
  </div>
    
  </div><br />

</div>
</center>
</main>
<br />
<br />
<br />

<footer>

<div className="container">
  <footer className="py-5">
    <div className="row">
      <div className="col-6 col-md-2 mb-3">
        <h5>Section</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Home</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Features</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Pricing</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">FAQs</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">About</a></li>
        </ul>
      </div>
      <div className="col-6 col-md-2 mb-3">
        <h5>Section</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Home</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Features</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Pricing</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">FAQs</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">About</a></li>
        </ul>
      </div>
      <div className="col-6 col-md-2 mb-3">
        <h5>Section</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Home</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Features</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Pricing</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">FAQs</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">About</a></li>
        </ul>
      </div>
      <div className="col-md-5 offset-md-1 mb-3">
        <form>
          <h5>Subscribe to our newsletter</h5>
          <p>Monthly digest of what's new and exciting from us.</p>
          <div className="d-flex flex-column flex-sm-row w-100 gap-2">
            <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
            <input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
            <button className="btn btn-primary" type="button">Subscribe</button>
          </div>
        </form>
      </div>
    </div>
    <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
      <p>© 2023 Company, Inc. All rights reserved.</p>
      <ul className="list-unstyled d-flex">
        <li className="ms-3"><a className="link-body-emphasis" href="#"><svg className="bi" width={24} height={24}><use xlinkHref="#twitter" /></svg></a></li>
        <li className="ms-3"><a className="link-body-emphasis" href="#"><svg className="bi" width={24} height={24}><use xlinkHref="#instagram" /></svg></a></li>
        <li className="ms-3"><a className="link-body-emphasis" href="#"><svg className="bi" width={24} height={24}><use xlinkHref="#facebook" /></svg></a></li>
      </ul>
    </div>
  </footer>
</div>


</footer>
    </>
  )
}
