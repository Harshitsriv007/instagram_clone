import React from "react";
import './navbar.css';
import avator from '../pic/kindpng_787127.png';
import {MdNavigateNext} from 'react-icons/md';
export default function Header()
{
    const lead = 'BtwItsHarshitSrivastava';
    const trimmedAtLength = lead.substring(0, 10) + '...';
    const name = 'Harshit Srivastava';

    return <>
        <div className="container">
            <div className="row">
                <div className="col-sm-2"></div>
                <div className="col-sm-5 status">
                    <div className="row d-flex justify-content-evenly">
                        <div className="col-sm-2 statussection">
                            <img src={avator} alt="image" className="statusImage"/>
                            <span className="statusname">{trimmedAtLength}</span>
                        </div>
                        <div className="col-sm-2 statussection">
                            <img src={avator} alt="image" className="statusImage"/>
                            <span className="statusname">{trimmedAtLength}</span>
                        </div>
                        <div className="col-sm-2 statussection">
                            <img src={avator} alt="image" className="statusImage"/>
                            <span className="statusname">{trimmedAtLength}</span>
                        </div>
                        <div className="col-sm-2 statussection">
                            <img src={avator} alt="image" className="statusImage"/>
                            <span className="statusname">{trimmedAtLength}</span>
                        </div>
                        <div className="col-sm-2 statussection">
                            <img src={avator} alt="image" className="statusImage"/>
                            <span className="statusname">{trimmedAtLength}</span>
                        </div>
                        <div className="col-sm-2 statussection">
                            <img src={avator} alt="image" className="statusImage"/>
                            <span className="statusForward"><MdNavigateNext/></span>
                            <span className="statusname">{trimmedAtLength}</span>
                        </div>
                    </div>
                </div>
                <div className="col-sm-5">
                    <div className="row">
                    <div className="col-sm-2 profilePicsection">
                        <img src={avator} alt="image" className="profilePic"/>
                    </div>
                    <div className="col-sm-4  namesection">
                        <div className="row ">
                            <div className="col-sm-12 d-flex justify-content-start">
                            <span className="statusname name">{lead}</span>
                            </div>
                            <div className="col-sm-12 d-flex justify-content-start fullname">
                                {name}
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 profilePicsection SwicthSection d-flex justify-content-start"><a href ="#" className="SwicthAccount">Switch</a></div>
                    </div>
                </div>
            </div>
        </div>
    </>
}