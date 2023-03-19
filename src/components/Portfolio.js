import React, { useState } from 'react';
import Lathe1 from "../image/lathe1.png"
import Lathe2 from "../image/lathe2.png"
import Lathe3 from "../image/lathe3.png"
import Lathe4 from "../image/lathe4.png"
import BIKEE1 from "../image/BIKEE1.png"
import BIKEE2 from "../image/BIKEE2.png"
import BIKEE3 from "../image/BIKEE3.png"
import BIKEE4 from "../image/BIKEE4.png"
import robot1 from "../image/robot1.png"
import robot2 from "../image/robot2.png"
import robot3 from "../image/robot3.png"
import robot4 from "../image/robot4.png"
import robot5 from "../image/robot5.png"
import Fan1 from "../image/fan1.png"
import Fan2 from "../image/fan2.png"
import Fan3 from "../image/fan3.png"
import Fan4 from "../image/fan4.png"
import Cycle1 from "../image/cycle1.png"
import Cycle2 from "../image/cycle2.png"
import Cycle3 from "../image/cycle3.png"
import Cycle4 from "../image/cycle4.png"
import Chair1 from "../image/chair1.png"
import Chair2 from "../image/chair2.png"
import Chair3 from "../image/chair3.png"
import Chair4 from "../image/chair4.png"
import Other5 from "../image/other5.png"
import Other6 from "../image/other6.png"
import Other7 from "../image/other7.png"
import Other8 from "../image/other8.png"
import PortfolioModal from './PortfolioModal';



const Portfolio = () => {
  // const [modalImage, setModalImage] = useState({Lathe});
  // const modalHover =()=>{
  //   setModalImage({Lathes})
  // }
  return (
    <div className='container-fluid contactSection text-light' style={{ height: "auto" }}>
      <div className='d-flex contactHead'>
        <h1 className='text-center fw-bold backFont'>WORKS</h1>
        <h1 className='text-center frontFont'>MY <span className='text-warning'>PORTFOLIO</span></h1>
      </div>

      {/* Works tab */}
      <div className='workNav mt-0 mt-md-2 mt-lg-4'>
        <ul className="nav nav-pills mb-3 mb-lg-4" id="pills-tab" role="tablist" style={{ justifyContent: "center" }}>
          <li className="nav-item xyz p-0" role="presentation">
            <button className="nav-link active fs-5 px-2 mx-0 mx-lg-2 py-1" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">AUTOCAD</button>
          </li>
          <li className="nav-item xyz p-0" role="presentation">
            <button className="nav-link fs-5 px-2 py-1" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">SOLID WORKS</button>
          </li>
        </ul>
      </div>

      <div className="tab-content px-0 px-lg-5" id="pills-tabContent">
        

        {/* AUTOCAD DESIGN */}
        <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
          <div className='row pb-5'>
            <div className='col-12 col-sm-6 col-md-6 col-lg-4 mb-3'>
              <PortfolioModal imgId="lathe" imgHover="latheHover" imageSrc1={Lathe1} imageSrc2={Lathe2} imageSrc3={Lathe3} imageSrc4={Lathe4} prTitle="Engine Lathe" project="3D Modeling" software="AutoCad" />
            </div>
            <div className='col-12 col-sm-6 col-md-6 col-lg-4 mb-3'>
              <PortfolioModal imgId="BIKE" imgHover="BIKEHover" imageSrc1={BIKEE1} imageSrc2={BIKEE2} imageSrc3={BIKEE3} imageSrc4={BIKEE4} prTitle="MOTOR BIKE" project="3D Modeling" software="AutoCad" />
            </div>
            <div className='col-12 col-sm-6 col-md-6 col-lg-4 mb-3'>
              <PortfolioModal imgId="Drill" imgHover="drillHover" imageSrc1={robot1} imageSrc2={robot2} imageSrc3={robot3} imageSrc4={robot4} imageSrc5={robot5}prTitle="Radial Drill" project="3D Modeling" software="AutoCad" />
            </div>
            
            <div className='col-12 col-sm-6 col-md-6 col-lg-4 mb-3'>
              <PortfolioModal imgId="chair" imgHover="chairHover" imageSrc1={Chair1} imageSrc2={Chair2} imageSrc3={Chair3} imageSrc4={Chair4} prTitle="Flexible Chair" project="3d Modeling" software="AutoCad" />
            </div>
            <div className='col-12 col-sm-6 col-md-6 col-lg-4 mb-3'>
              <PortfolioModal imgId="others" imgHover="othersHover" imageSrc1={Other5} imageSrc2={Other6} imageSrc3={Other7} imageSrc4={Other8} prTitle="Other Designs" project="3d Modeling" software="AutoCad" />
            </div>
          </div>
        </div>
        {/* WEB DESIGN */}
        <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
          <div className='row pb-5'>
            
          <div className='col-12 col-sm-6 col-md-6 col-lg-4 mb-3'>
          <PortfolioModal imgId="cycle" imgHover="cycleHover" imageSrc1={Cycle1} imageSrc2={Cycle2} imageSrc3={Cycle3} imageSrc4={Cycle4} prTitle="Bi-Cycle" project="3D Modeling" software="AutoCad" />
        </div>
        <div className='col-12 col-sm-6 col-md-6 col-lg-4 mb-3'>
              <PortfolioModal imgId="fan" imgHover="fanHover" imageSrc1={Fan1} imageSrc2={Fan2} imageSrc3={Fan3} imageSrc4={Fan4} prTitle="Table Fan" project="3d Modeling" software="AutoCad" />
            </div>


          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
