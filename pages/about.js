import React from 'react'
import Head from 'next/head'
import Image from 'next/image';
import Link from 'next/link';

export default function about() {
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

</header>
<br />
<br />
<br /> 
<main>
<div className="container marketing">
  {/* Three columns of text below the carousel */}
  <div className="row">
    <div className="col-lg-4">
    <img src="/r31.jpg" className="bd-placeholder-img rounded-circle" alt="gtr2"width={160} height={140} />
      <h2 className="fw-normal">GTR 31</h2>
      <p>โฉมที่ 7 ใช้ชื่อโฉมว่า R31 เป็นโฉมที่มีการนำเทคโนโลยีใหม่ๆ มาลงเป็นจำนวนมาก และมีรูปทรงที่ทันสมัยกว่าโฉมที่ 6 อยู่มาก และเป็นโฉมแรกที่ใช้เครื่องยนต์กลุ่ม RB และเป็นโฉมที่ทำให้สกายไลน์ เป็นที่รู้จักอย่างกว้างขวางขึ้นในฐานะรถสปอร์ต แต่โฉมนี้ ก็ยังไม่มี GT-R และนอกจากนี้ R31 ก็ยังเป็นโฉมสุดท้ายที่มีระบบขับเคลื่อนล้อหลังเพียงระบบเดียว หลังจากโฉมนี้ไป จะมีระบบขับเคลื่อน 2 แบบ คือระบบขับเคลื่อนล้อหลัง กับขับเคลื่อนสี่ล้อจนถึงปัจจุบัน</p>
      <p><a className="btn btn-secondary" href="https://www.nissan.co.th/vehicles/new-vehicles/new-gt-r.html">View details »</a></p>
    </div>{/* /.col-lg-4 */}
    <div className="col-lg-4">
    <img src="/r32.jpg" className="bd-placeholder-img rounded-circle" alt="gtr2"width={160} height={140} />
      <h2 className="fw-normal">GTR 32</h2>
      <p>และโฉมนี้ กลับมาผลิตสกายไลน์ GT-R อีกครั้ง หลังจากหายไปตั้งแต่โฉมที่ 4 เป็นโฉมที่ทำให้สกายไลน์ GT-R เป็นที่รู้จักอย่างกว้างขวางและโด่งดังไปในวงกว้าง จากการที่สกายไลน์ R32 ชนะการแข่งขันรถยนต์ทางเรียบในญี่ปุ่น 29 รางวัล และชนะเลิศซูเปอร์จีที ถึง 2 ปีติดต่อกัน นอกเหนือจากการแข่งขันในประเทศ GT-R ยังได้ชนะการแข่งขันออสเตรเลียนทัวริง 3 ปีติดต่อกันระหว่างปี 2533-2535 </p>
      <p><a className="btn btn-secondary" href="https://www.nissan.co.th/vehicles/new-vehicles/new-gt-r.html">View details »</a></p>
    </div>{/* /.col-lg-4 */}
    <div className="col-lg-4">
    <img src="/r33.jpg" className="bd-placeholder-img rounded-circle" alt="gtr2"width={160} height={140} />
      <h2 className="fw-normal">GTR 33</h2>
      <p>โฉมที่ 9 ใช้ชื่อโฉมว่า R33 มีรถ 2 รุ่นที่สำคัญ คือ

Nissan Skyline GT-S R33 เครื่องยนต์ RB25DET 2.5 L 250 แรงม้า
Nissan Skyline GT-R R33 (BCNR33) เครื่องยนต์ RB26DETT 156.7 cu.in. / 2,568 c.c. 280 แรงม้า</p>
      <p><a className="btn btn-secondary" href="https://www.nissan.co.th/vehicles/new-vehicles/new-gt-r.html">View details »</a></p>
    </div>{/* /.col-lg-4 */}
  </div>{/* /.row */}
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <div className="row">
    <div className="col-lg-4">
    <img src="/r34.jpeg" className="bd-placeholder-img rounded-circle" alt="gtr2"width={160} height={140} />
      <h2 className="fw-normal">GTR 34</h2>
      <p>โฉมที่ 10 ใช้ชื่อโฉมว่า R34 ในโฉมนี้ เกียร์อัตโนมัติแบบ 5 สปีด ถูกยกเลิกชั่วคราว ทำให้สกายไลน์โฉมนี้มี 6 เกียร์ธรรมดา Magna (Getrag) 233 (GT-R) กับอัตโนมัติแบบ 4 สปีดเท่านั้น แต่ในโฉมนี้ สกายไลน์ได้มีการผลิตเกียร์แบบ Triptonic ออกขาย (เกียร์ Triptonic คือเกียร์ที่สามารถปรับใช้เป็นเกียร์ธรรมดาก็ได้ เกียร์อัตโนมัติก็ได้ ในเกียร์ชุดเดียวกัน) เป็นครั้งแรกของสกายไลน์ ในแบบ GT-S จะมี sunroof ในแบบ GT-R จะไม่มี sunroof</p>
      <p><a className="btn btn-secondary" href="https://www.nissan.co.th/vehicles/new-vehicles/new-gt-r.html">View details »</a></p>
    </div>{/* /.col-lg-4 */}
    <div className="col-lg-4">
    <img src="/r35.jpg" className="bd-placeholder-img rounded-circle" alt="gtr2"width={160} height={140} />
      <h2 className="fw-normal">GTR 35</h2>
      <p>Nissan GT-R เปิดตัวที่งาน Motor Expo 2019 มีให้เลือกออปชั่นตกแต่งให้เลือกมากมาย ทั้งนี้ยังมาพร้อมกับเครื่องยนต์ 3.8 ลิตร สามารถเลือกชมรายละเอียด ราคา Nissan GT-R 2023 รุ่นล่าสุดอย่างเป็นทางการ และสามารถหารุ่นอื่น ๆ ที่ท่านต้องการได้ ราคา Nissan GTR อยู่ที่ 13,500,000 บาท ตารางผ่อน GTR เริ่มต้นประมาณ 165,000 บาทต่องวด</p>
      <p><a className="btn btn-secondary" href="https://www.nissan.co.th/vehicles/new-vehicles/new-gt-r.html">View details »</a></p>
    </div>{/* /.col-lg-4 */}
    <div className="col-lg-4">
    <img src="/r36.jpg" className="bd-placeholder-img rounded-circle" alt="gtr2"width={160} height={140} />
      <h2 className="fw-normal">GTR 36</h2>
      <p>คาดการณ์เครื่องยนต์
มีการเรนเดอร์ภาพที่น่าจะเป็นการออกแบบของ Nissan GT-R R36 ใหม่ออกมา พร้อมการคาดคะเนเครื่องยนต์ ว่าจะใช้เป็นเครื่อง V6 3.8 ลิตร เทอร์โบคู่ พร้อมกำลังถึง 600 แรงม้าและแรงบิด 647 นิวตันเมตร</p>
      <p><a className="btn btn-secondary" href="https://www.nissan.co.th/vehicles/new-vehicles/new-gt-r.html">View details »</a></p>
    </div>{/* /.col-lg-4 */}
  </div>{/* /.row */}
</div>
<div>
  <div className="b-example-divider" />
  <div className="container col-xxl-8 px-4 py-5">
    <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div className="col-10 col-sm-8 col-lg-6">
        <img src="/nissan.jpg" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width={700} height={500} loading="lazy" />
      </div>
      <div className="col-lg-6">
        <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">NISSAN </h1>
        <p className="lead"> นิสสัน ถือกำเนิดขึ้นใน พ.ศ.2476 ในนามว่า จิโดชะเซโซ จำกัด ซึ่งมีสำนักงานอยู่ที่โยโกฮามา ญี่ปุ่น โดยผลิตรถที่มียี่ห้อว่านิสสัน(ปัจจุบัน พ.ศ.2549 สำนักงานใหญ่ตั้งอยู่ ณ กรุงโตเกียว)ในปีถัดมาได้จดทะเบียนเปลี่ยนชื่อเป็นนิสสันมอเตอร์ จำกัด ก่อตั้งโดย โยชิซุเกะ ไอกาวา ซึ่งได้ผลิตรถบรรทุก เครื่องบิน และเครื่องยนต์แก่ทหารญี่ปุ่นในยุคสมัยนั้น ในปี พ.ศ.2509 เป็นปีที่นิสสันได้รวมกิจการกับ พรินซ์ มอเตอร์ คอร์ป ของประเทศญี่ปุ่น และได้ผลิตรถยนต์อย่างจริงจัง รถสองรุ่นแรกหลังจากรวมกิจการของพรินซ์มอเตอร์ คือ นิสสันสกายไลน์ และ นิสสันกลอเรีย และในช่วงยุค 80 ปลาย นิสสันได้จัดตั้งยี่ห้อรถใหม่ในสหรัฐอเมริกา ในนาม “อินฟินิที (INFINITY)” ในยุค 80 กลางๆ นิสสันได้เปิดโรงงานที่ รัฐเทนเนสซี สหรัฐอเมริกา เพื่อผลิตรถบรรทุก</p>
        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
        <p><a className="btn btn-secondary" href="https://thaiautofilm.com/1198/">อ่านประวัติเพิ่มเติม</a></p>

        </div>
      </div>
    </div>
  </div>
</div>

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
