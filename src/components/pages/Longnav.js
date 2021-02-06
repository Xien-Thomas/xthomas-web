import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Icon, InlineIcon } from '@iconify/react';
import codeFork from '@iconify-icons/fa/code-fork';
import graduationCap from '@iconify-icons/fa/graduation-cap';

import EDUpanel from "./panels/education-panel.js"

import "./Longnav.css";
class Longnav extends Component{
    constructor() {
        super();
        this.state = {
            name: "longbarPanelShow",
            eduPanel: false,
            projectPanel: false,
            futurePanel: false
        };
        this.hideComponent = this.hideComponent.bind(this);
    }
    hideComponent(panel){
        switch (panel) {
            case "eduPanel":
                this.setState({
                    eduPanel: !this.state.eduPanel,
                    projectPanel: false,
                    futurePanel: false
                });
                break;
            case "projectPanel":
                this.setState({
                    eduPanel: false,
                    projectPanel: !this.state.projectPanel,
                    futurePanel: false
                });
                break;
            case "futurePanel":
                this.setState({
                    eduPanel: false,
                    projectPanel: false,
                    futurePanel: !this.state.futurePanel
                });
                break;
            default:
                this.setState({
                    eduPanel: false,
                    projectPanel: false,
                    futurePanel: false
                });
        }
    }
    render() {
        const { eduPanel, projectPanel, futurePanel } = this.state;
        return (
            <div className="longbar-panels">
                <nav className="longbar">
                    <div className="longbar-container">
                        <ul className="longbar-list">
                            <li className="nav-item">
                                <div className="nav-tab" onClick={() =>this.hideComponent("eduPanel")}>
                                    <Icon icon={graduationCap} /> Education
                                </div>
                                
                            </li>
                            <li className="nav-item">
                                <div className="nav-tab" onClick={() =>this.hideComponent("projectPanel")}>
                                    <Icon icon={codeFork} /> Projects
                                </div>
                                
                            </li>
                            <li className="nav-item">
                                <div className="nav-tab" onClick={() =>this.hideComponent("futurePanel")}>
                                    <Icon icon={codeFork} /> Future
                                </div>
                                
                            </li>
                        </ul>
                    </div>
                </nav>
                <div>
                    {eduPanel && <EDUpanel />}
                </div>
                
            </div>
        )
    }
}

export default Longnav;