import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fagraduationcap } from "@fortawesome/free-solid-svg-icons";
import { facodefork } from "@fortawesome/free-solid-svg-icons";
import { facodefork} from "@fortawesome/free-solid-svg-icons";
function Longnav() {
    return (
        <nav className="longbar">
            <div className="longbar-container">
                <ul className="longbar-list">
                    <li className="nav-item">
                        <Link to="/education"><FontAwesomeIcon icon={fagraduationcap}/></Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/projects"><FontAwesomeIcon icon={facodefork}/></Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/future"><FontAwesomeIcon icon={facodefork}/></Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}