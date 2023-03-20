import React from "react";
import "../styles.css";
import img1 from "./img/pict9.png";
import {Element} from "react-scroll";


const AWK = () => {
    const imageList = [
        {
            id: 1,
            src: img1,
            alt: "Image 1",
            description: "WEB PARSER",
            link: "https://github.com/CROWIER/EX_ws",
        },
    ];

    return (
        <>
            <Element  name="professional-summary"></Element>
            <div className="resume-title">
                <h1>Professional Summary</h1>
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
                During my work period at a startup, I was entrusted with the responsibility of developing a web parser capable of extracting data from over 6000 websites to be used in our search engine. Using my knowledges in Python and relevant libraries like Beautiful Soup, Kafka, and others, I was able to develop an simple parser that could extract data from these websites.

                To streamline the process, I utilized an excel sheet containing all the links to be parsed, and through Kafka, I was able to send these links for parsing. My parser then consumed the links and extracted the relevant information from each website. With the parsed data, we were able to further improve our search engine's accuracy and provide a better user experience for our users.
                <br/><br/>
            </div>
        </>
    );
};

export default AWK;
