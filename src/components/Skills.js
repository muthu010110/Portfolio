import React from 'react';
import './Skills.scss'
import htmlicon from './assets/html.png'
import giticon from './assets/GitHub (1).png'
import cssicon from './assets/CSS3.png'
import postmanicon from './assets/Postman.png'
import reacticon from './assets/React.png'
import jsicon from './assets/JavaScript.png'
import javaicon from './assets/java.png'
const SKILLS = [
  { name: 'HTML5', icon: htmlicon },
  { name: 'CSS3 / SCSS', icon:cssicon },
  { name: 'JavaScript ', icon: jsicon },
  { name: 'React', icon: reacticon },
  { name: 'Git', icon: giticon },
  { name: 'JAVA', icon:javaicon },
  { name: 'Post Man', icon: postmanicon },
];

export default function Skills() {
  return (
    <section id="skills" className="skills container">
      <h2 className="section-title">Skills</h2>
      
      
      <ul className="skill-list">
        {SKILLS.map((skill) => (
          <li key={skill.name} className="skill">
            {skill.icon && <img src={skill.icon} alt={skill.name} />}
            <span>{skill.name}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
