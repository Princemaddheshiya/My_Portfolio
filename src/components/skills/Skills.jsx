import React from 'react';
import "./skills.css";
import Frontend from './Frontend';
import Backend from './Backend';
import Other from './Other';
import SoftSkills from './SoftSkills';

const Skills = () => {
  return (
    <section className="skills section" id="skills">
        <h2 className="section__title">Skills</h2>
        <span className="section__subtitle">Technical Level</span>
        <div className="skills__container container grid">
            <Frontend />
            <Backend /> 
            <Other/>
            <SoftSkills/>
        </div>
    </section>
  );
}

export default Skills;