import React, { useState } from 'react';
import './services.css';
import { HiOutlineClipboardList, HiOutlineArrowSmRight, HiOutlineCheckCircle, HiX } from 'react-icons/hi';

const Services = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <section className="services section" id="services">
            <h2 className="section__title">Certification</h2>
            <span className="section__subtitle">Create + Collaborate + Experience + Certification</span>

            <div className="services__container container grid">
                <div className="services__content">
                    <div>
                        <HiOutlineClipboardList className="services__icon" />
                        <h3 className="services__title">Experience<br />Certification</h3>
                    </div>
                    <span className="services__button" onClick={() => toggleTab(1)}>
                        View More
                        <HiOutlineArrowSmRight className="services__button-icon" />
                    </span>
                    <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <HiX onClick={() => toggleTab(0)} className="services__modal-close" />
                            <h3 className="services__modal-title">Developer</h3>
                            <p className="services__modal-description">
Axieva | TechOps Engineer (Oct 2025 – Present)
Working on production system monitoring, incident management, and ensuring system reliability.

Kramate | DevOps Engineer (Jun 2025 – Sep 2025)
Handled CI/CD pipelines, Docker/Kubernetes deployments, and cloud monitoring tools.
                            </p>
                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <HiOutlineCheckCircle className="services__modal-icon" />
                                    <p className="services__modal-info">
                                        Work Experience Certificate – Kramate Pvt. Ltd.
                                    </p>
                                </li>
                                <li className="services__modal-service">
                                    <HiOutlineCheckCircle className="services__modal-icon" />
                                    <p className="services__modal-info">
                                        Work Experience Certificate – Axieva Pvt. Ltd.
                                    </p>
                                </li>
                                <li className="services__modal-service">
                                    <HiOutlineCheckCircle className="services__modal-icon" />
                                    <p className="services__modal-info">
                                        Work Experience Certificate – Indian Railway
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services__content">
                    <div>
                        <HiOutlineClipboardList className="services__icon" />
                        <h3 className="services__title">Academic<br />Certification</h3>
                    </div>
                    <span className="services__button" onClick={() => toggleTab(2)}>
                        View More
                        <HiOutlineArrowSmRight className="services__button-icon" />
                    </span>
                    <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <HiX onClick={() => toggleTab(0)} className="services__modal-close" />
                            <h3 className="services__modal-title">Certification</h3>
                            <p className="services__modal-description">
    "I have completed specialized courses in Deep Learning, Social Network Analysis, and Computer 
    Vision from various IITs through NPTEL, enhancing my skills in AI, machine learning,
    and data-driven problem solving."
                            </p>
                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <HiOutlineCheckCircle className="services__modal-icon" />
                                    <p className="services__modal-info">
                                        NPTEL – Computer Vision (Image Processing & CNNs)
                                    </p>
                                </li>
                                <li className="services__modal-service">
                                    <HiOutlineCheckCircle className="services__modal-icon" />
                                    <p className="services__modal-info">
                                        NPTEL – Deep Learning (AI/ML specialization)
                                    </p>
                                </li>
                                <li className="services__modal-service">
                                    <HiOutlineCheckCircle className="services__modal-icon" />
                                    <p className="services__modal-info">
                                        NPTEL – Social Network Analysis (Online Social Media & Analytics)
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services__content">
                    <div>
                        <HiOutlineClipboardList className="services__icon" />
                        <h3 className="services__title">Technical<br />Certification</h3>
                    </div>
                    <span className="services__button" onClick={() => toggleTab(3)}>
                        View More
                        <HiOutlineArrowSmRight className="services__button-icon" />
                    </span>
                    <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <HiX onClick={() => toggleTab(0)} className="services__modal-close" />
                            <h3 className="services__modal-title">Certification</h3>
                            <p className="services__modal-description">
                           "I have actively participated in multiple hackathons, including Smart India Hackathon 
                                and Malaviya Innovation Challenge, achieving finalist and top positions that demonstrate 
                                my skills in innovation, problem-solving, and teamwork."
                            </p>
                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <HiOutlineCheckCircle className="services__modal-icon" />
                                    <p className="services__modal-info">
                                        Smart India Hackathon 2022 – Finalist for developing an innovative 3D game project solution.
                                    </p>
                                </li>
                                <li className="services__modal-service">
                                    <HiOutlineCheckCircle className="services__modal-icon" />
                                    <p className="services__modal-info">
                                        Secured 3rd Position at Malaviya Innovation Challenge (State Level Hackathon 2023).
                                    </p>
                                </li>
                                <li className="services__modal-service">
                                    <HiOutlineCheckCircle className="services__modal-icon" />
                                    <p className="services__modal-info">
                                       2× Smart India Hackathon Internal Round Finalist, showcasing strong problem-solving and team collaboration skills.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}

export default Services;
