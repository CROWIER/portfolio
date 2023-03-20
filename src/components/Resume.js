import React from "react";
import { Element } from 'react-scroll';
function Resume() {
    return (<>
            <Element  name="personal-data"></Element>
            <br/>
            <br/><br/><br/>
            <div className="intro">
                <img src="https://cdn-icons-png.flaticon.com/512/610/610120.png" alt="Profile Picture" className="profile-picture"/>
                <p>Hello and welcome! My name is Askar Bulabayev,
                    and I am a 20-year-old student with a passion for programming and technology. Here is my portfolio where I provided my resume, cover letter and
                work samples that I have.</p>
            </div>
            <div className="resume-title">
                <h1>Resume</h1>
            </div>
        <div className="resume">
            <h2>Bio:</h2>
            <p>
                Name: Askar Bulabayev
                <br />
                Address: 321 Elm street, Toronto, Ontario, M5G 3K5
                <br />
                Phone Number: +77064000043
                <br />
                Email: Askar.Bulabayev@georgebrown.ca
            </p>
            <h2>Highlights of Qualifications:</h2>
            <ul>
                <li>Collaborative work experience</li>
                <li>The ability to admit mistakes and correct them</li>
                <li>Experienced in creating web pages connected with databases</li>
                <li>Adaptability in a variety of situations</li>
                <li>Planning and organization skills</li>
            </ul>
            <h2>Technical Skills:</h2>
            <ul>
                <li>Swift</li>
                <li>Java</li>
                <li>C#</li>
                <li>C++</li>
                <li>Python</li>
                <li>JavaScript</li>
            </ul>
            <h2>Education:</h2>
            <p> Computer Programmer Analyst Program&nbsp;&emsp;&emsp;&emsp;September 2020-April 2023</p>
               <p> George Brown College, Toronto, ON
            </p>
        </div>
            <hr />
            <div className="letter-title">
                <h1>Cover Letter</h1>
            </div>
            <div className="cover-letter">
                <p>Dear Hiring Manager,

                <p>Please view my attached resume as an application for the position of software developer that was posted
                    on your site. I think I am suitable for this role for the following reasons:As
                    a recent graduate of the diploma program in computer programming and analysis at George Brown College </p>
                     <p>During my studies, I gained expertise in several programming languages, including object-oriented languages such as Java and Swift.
                         I also participated in numerous group projects that improved my communication skills and teamwork abilities. Additionally,
                         I took courses in competitive programming and participated in several competitions,
                         which enhanced my logical thinking and problem-solving skills. </p>
                   <p> I am really hoping for the opportunity to begin my career with your company as
                    long as I believe I am an excellent fit for the role and this is an excellent place for me.</p>


               <p> Thank you for your time and consideration, I look forward to an interview with you. I can be contacted at +77064000043 or Askar.Bulabayev@georgebrown.ca.</p>

                    Respectfully yours,</p>
                <p> Askar Bulabayev</p>
            </div>
            <hr/>
            );
        </>
    );
}

export default Resume;