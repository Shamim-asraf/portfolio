import React from 'react';
import { useLocation } from 'react-router-dom';
import profilePic from "../image/minhaz1.jpeg"
import Education from './Education';
import Experiences from './Experiences';
import Skills from './Skills';


const About = () => {
    const location = useLocation();
    return (
        <div className='container-fluid aboutSection mt-0'>
            <div className='container' style={{ color: "white" }}>
                {/* <h1 className='text-center pt-3 pb-0 mb-0 aboutHeading'>ABOUT <span className='text-warning'>ME</span></h1> */}
                <div className='d-flex contactHead'>
                    <h1 className='text-center fw-bold backFont'>RESUME</h1>
                    <h1 className='text-center frontFont'>ABOUT  <span className='text-warning'>ME</span></h1>
                </div>
                <div className='row'>
                    <div className='col-lg-4 col-12 m-0 p-0'>
                        {/* <img className={`aboutPic ${location.pathname==="/"?'invisible':'visible'}`} src={profilePic}></img> */}
                        <img className="aboutPic" src={profilePic}></img>
                    </div>
                    <div className='col-lg-8 col-12 row'>
                        <h4 className="personalInfo px-lg-5 px-4 py-lg-0 py-3 mb-0">Personal Infos:</h4>
                        <div className='col-6 col-lg-6 ps-4 ps-lg-5 columnOne'>
                            <h5><span style={{ opacity: ".7" }}>First Name:</span> <strong className="infos"></strong>Shamim</h5>
                            <h5><span style={{ opacity: ".7" }}>Date of Birth:</span> <strong className="infos">21/01/1999</strong></h5>
                            <h5><span style={{ opacity: ".7" }}>Profession:</span> <strong className="infos">Student</strong></h5>
                            <h5><span style={{ opacity: ".7" }}>Phone:</span> <strong className="infos">+880-1631194055</strong></h5>
                            <h5><span style={{ opacity: ".7" }}>Email:</span> <strong className="infos">shamimasraf334007@gmail.com</strong></h5>
                        </div>
                        <div className='col-6 col-lg-6 px-4 ps-lg-5 columnTwo'>
                            <h5><span style={{ opacity: ".7" }}>Last Name:</span> <strong className="infos">Asraf</strong></h5>
                            <h5><span style={{ opacity: ".7" }}>Blood-Group:</span> <strong className="infos">o+</strong></h5>
                            <h5><span style={{ opacity: ".7" }}>Nationality:</span> <strong className="infos">Bangladeshi</strong></h5>
                            <h5><span style={{ opacity: ".7" }}>Address:</span> <strong className="infos">Lakshmipur</strong></h5>
                        </div>
                    </div>
                </div>
            </div><hr className='horizon'></hr>
            {/* Skills */}
            <div className='skillSection mx-lg-5 px-lg-5 mx-0 px-0 mt-5 mb-5'>
                <h2 className='mt-4 mt-lg-5 text-center mb-5 fs-3'>MY SKILLS</h2>
                <div className='row px-3 px-lg-5'>


                 {/*Add your Skills*/}
                    
                    <div className='col-6 col-md-4 col-sm-4 col-lg-3'>
                        <Skills title={"AUTOCAD"} number={"70%"} percentage={70} />
                    </div>
                    <div className='col-6 col-md-4 col-sm-4 col-lg-3'>
                        <Skills title={"Solidworks"} number={"60%"} percentage={60} />
                    </div>
                    <div className='col-6 col-md-4 col-sm-4 col-lg-3'>
                        <Skills title={"MS OFFICE"} number={"70%"} percentage={60} />
                    </div>
                    <div className='col-6 col-md-4 col-sm-4 col-lg-3'>
                        <Skills title={"Python"} number={"40%"} percentage={40} />
                    </div>
                    
                    <div className='col-6 col-md-4 col-sm-4 col-lg-3'>
                        <Skills title={"Arena Simulation"} number={"65%"} percentage={65} />
                    </div>
                    <div className='col-6 col-md-4 col-sm-4 col-lg-3'>
                        <Skills title={"Matlab"} number={"75%"} percentage={75} />
                    </div>
                    
                </div>
            </div><hr className='horizon mt-0'></hr>

            {/* Education And Experiences Part */}
            <div className='container eduAndExp mt-5' style={{ paddingBottom: "5rem" }}>
                <div className='row text-light'>
                    <div className='col-12'>
                        <h2 className='mt-4 mt-lg-5 text-center text-light mb-5 mx-0 px-0 fs-3'>EDUCATION & EXPERIENCE</h2>
                    </div>
                    <div className='col-12 col-lg-6'>
                        <p className='fs-3 fw-bold text-center text-warning'>Education:</p>
                        <Education session="2018-2022" degree="Industrial & Production Engineering" institute="Shahjalal University of Science & Technology, Sylhet, Bangladesh." />
                        <Education session="2017" degree="Higher Secondery Certificate" institute="Lakshmipu Govt. college.Lakshmipur." />
                        <Education session="2015" degree="Secondery School Certificate" institute="Lakshmipur Adarsha Samad Govt. High School,Lakshmipur." />
                    </div>
                    <div className='col-12 col-lg-6'>
                        <p className='fs-3 fw-bold text-center text-warning'>Experiences:</p>
                        <Experiences session="Nov 2022- Dec 2022" designation="Training on Mechanical Engineering" organization="Training Institute for Chemical Industries(TICI), Narshingdi, Bangladesh." />
                        
                        <Experiences session="Feb-2021" designation="Industrial Training" organization="Bangladesh Industrial Technical Assistance Centre - BITAC, Dhaka, Bangladesh." />
                        <Experiences session="Dec-2019" designation="Industry Visit" organization="Alim Industy, Sylhet, Bangladesh." />
                        <Experiences session="2019-2020" designation="Sports Secratary" organization="IPE Association, SUST, Sylhet, Bangladesh." />
                        <Experiences session="2022-2023" designation="General Secratary" organization="IPE Association, SUST, Sylhet, Bangladesh." />
                    </div>
                </div>
            </div><hr className='horizon mt-0'></hr>

            {/* THESIS */}
            <div className='container eduAndExp mt-5' style={{ paddingBottom: "5rem" }}>
                <div className='row text-light'>
                    <div className='col-12'>
                        <h2 className='mt-4 mt-lg-5 text-center text-light mb-5 mx-0 px-0 fs-3'>THESIS & RESEARCH</h2>
                    </div>
                    <div>
                        <h4><strong style={{color:"rgb(186,186,18)"}}>TITLE: </strong> 
                        EVALUATING THE RELATIONSHIP AND PRIORITIZATION OF THE KEY FACTORS OF A SUSTAINABLE SUPPLY CHAIN: DEMATEL AND SEM BASED ANALYSIS IN SELECTED ELECTRONICS GOODS MANUFACTURER OF BANGLADESH.
                        </h4>
                        <h4 style={{color:"rgb(186,186,18)"}}>OBJECTIVES:</h4>
                        <ol>
                            <li>	To identify the key factors of supply chain sustainability.</li>
                            <li>	To develop the interrelation among the key factors by DEMATEL technique using Multi -Criteria Decision Making (MCDM) approach.</li>
                            <li>	To Evaluate the interrelation among the key factors related to three pillars of sustainable supply chain by PLS-SEM method.</li>
                            <li>	To suggest guideline for improving the company situation toward sustainability</li>
                            
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
