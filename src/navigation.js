import React from 'react';
import './Navigation.css';
import { Link } from 'react-scroll';

const tabs = [
    { name: 'Personal Data', link: 'personal-data' },
    { name: 'Academic Work Experience', link: 'academic-work-experience' },
    { name: 'Professional Summary', link: 'professional-summary' },
];

function Navigation() {
    return (
        <nav className="navbar">
            <ul className="nav-menu">
                {tabs.map((tab, index) => (
                    <li key={index}>
                        <Link
                            activeClass="active"
                            to={tab.link}
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            className="nav-link"
                        >
                            {tab.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Navigation;
