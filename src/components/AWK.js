import React from "react";
import "../styles.css";
import { Element } from 'react-scroll';

import img1 from "./img/pict1.png";
import img2 from "./img/pict2.png";
import img3 from "./img/pict3.png";
import img4 from "./img/pict4.png";
import img5 from "./img/pict5.png";
import img6 from "./img/pict6.png";
import img7 from "./img/pict7.png";
import img8 from "./img/pict8.png";

const AWK = () => {
    const imageList = [
        {
            id: 1,
            src: img1,
            alt: "Image 1",
            description: "Flight manager",
            link: "https://github.com/CROWIER/MyWork",
        },
        {
            id: 2,
            src: img2,
            alt: "Image 2",
            description: "Restaurant rate",
            link: "https://github.com/CROWIER/Mob_project",
        },
        {
            id: 3,
            src: img3,
            alt: "Image 3",
            description: "CRUD NODE.JS",
            link: "https://github.com/CROWIER/Student101322619_COMP3133_Assignment1",
        },
        {
            id: 4,
            src: img4,
            alt: "Image 4",
            description: "Kitchen app",
            link: "https://github.com/CROWIER/web_java_a2",
        },
    ];

    return (
        <>
            <Element  name="academic-work-experience"></Element>
            <div className="resume-title">
                <h1>Academic Work Experience</h1>
            </div>
            <div className="image-container">
                {imageList.map((image) => (
                    <a key={image.id} href={image.link}>
                        <div className="image-wrapper">
                            <img src={image.src} alt={image.alt} className="awk-img" />
                            <div className="image-description">{image.description}</div>
                        </div>
                    </a>
                ))}
            </div>
            <p className="disclaimer">Images are clickable and contain links</p>
            <div className="proj-desc">
                <ul>
                    <li>Flight Manager -  is an object-oriented C# application designed to provide users with an experience of booking, changing, editing, and canceling flights.
                        This application has been developed for the backend only </li>
                    <br/>
                    <li>Restaurant Rate -  is a mobile application developed using React Native, where users can create a list
                        of restaurants and share their reviews and ratings.
                        The app aims to provide users with an easy-to-use platform for discovering
                        new restaurants and sharing their experiences with others</li>
                    <br/>
                    <li>CRUD NODE.JS - is a web application developed using Node.js that allows users to perform CRUD (Create, Read, Update, Delete) operations on employee data.
                        The application also has a registration form for users to register and log in to the system</li>
                    <br/>
                    <li>Kitchen app - is a web application developed using Spring Boot and MVC framework that provides users with an easy-to-use platform for creating and managing their recipes. The application allows users to sign up, log in, create/update/delete recipes, add them to favorites, and add them to their meal plan.</li>
                </ul>
                <br/><br/>
                <div className="cap-title">
                <h2>Capstone Project</h2>
                </div>
                <table className="table-container">
                    <tbody>
                    <tr>
                        <td className="table-cell">Project Summary</td>
                        <td className="table-cell">Enzo is a web application that provides a solution to food waste by interfacing its users with an array
                            of resourceful functionalities. Enzo would provide suggestions to its users to better
                            manage their personal pantry.</td>
                    </tr>
                    <tr>
                        <td className="table-cell">Project Vision</td>
                        <td className="table-cell">Our main goal is to reduce the cost and amount of food wasted by providing Enzo functionality</td>
                    </tr>
                    <tr>
                        <td className="table-cell">Project/Business Requirements</td>
                        <td className="table-cell">
                            <ul>
                                <li>The application would depend on externally generated QR codes from assumed third-party grocery partners, and end-user account registration to provide full functionalities </li>
                            <li>The application would suggest appropriate recipe options for pantry items to users </li>
                            <li>The application would remind users about pantry items approaching BB/EXP dates</li>
                            <li>The application would suggest food donation of pantry items to users</li> </ul> </td>

                    </tr>
                    <tr>
                        <td className="table-cell">Project Plan</td>
                        <td className="table-cell"><ul>
                            <li>Sprint 1 - Week 4, Sep 26 - Oct 2. Completed</li>
                            <li>Sprint 2 - Week 5, Oct 3-9. Completed</li>
                            <li>Sprint 3 - Week 9, Oct 31 - Nov 6. Completed</li>
                            <li>Sprint 4 - Week 12, Nov 21-27. Completed</li>
                            <li>First Prototype - Week 12, Nov 21-27. Completed</li>
                            <li>Sprint 5 - Sem 2 - Week 4, Jan 30 - Feb 5. Completed</li>
                            <li>Sprint 6 - Sem 2 - Week 7, Feb 20-26. Completed</li>
                            <li>Sprint 7 - Sem 2 - Week 10, March 13-19. Completed</li>
                            <li>Sprint 8, Project closure - Sem 2 - Week 15, Apr 17-23. Upcoming</li></ul> </td>
                    </tr>
                    <tr>
                        <td className="table-cell">Requirements Analysis and Design</td>
                        <td className="table-cell">
                            <ul>
                                <li>Overview of the application's purpose and goals</li>
                                <li>Data requirements, such as storage and retrieval of product information</li>
                                <li>Technical design considerations, such as choice of programming languages, frameworks, and databases</li>
                                <li>Project timeline and milestones</li>
                                <li>Defined database requirements, including data structure, data types, and relationships between tables</li>
                                <li>An analysis of possible risks was carried out and measures were taken to prevent them</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td className="table-cell">Wireframes/Mock ups</td>
                        <td className="table-cell">
                            <div className="image-wrapper">
                                <img src={img5} alt="Image 1" className="awk-img" />
                            </div>
                            <div className="image-wrapper">
                                <img src={img6} alt="Image 2" className="awk-img" />
                            </div>
                            <div className="image-wrapper">
                                <img src={img7} alt="Image 3" className="awk-img" />
                            </div>
                            <div className="image-wrapper">
                                <img src={img8} alt="Image 4" className="awk-img" />
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="table-cell">Status Reports</td>
                        <td className="table-cell">The status of the project is updated on each sprint with the advent of new tasks.
                            At the moment the overall health of the project is Good</td>
                    </tr>
                    <tr>
                        <td className="table-cell">System Implementation</td>
                        <td className="table-cell">Technologies Used:
                            <ul><li>React</li>
                                <li>Firebase Firestore</li>
                                    <li>Third-party QR code generating app</li>
                                        <li>Figma for mock-ups</li></ul></td>
                    </tr>
                    <tr>
                        <td className="table-cell">Link to the project</td>
                        <td className="table-cell"><a href="https://github.com/rungxanh1995/enzo-gbc-capstone">https://github.com/rungxanh1995/enzo-gbc-capstone</a> </td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <hr/>
        </>
    );
};

export default AWK;
