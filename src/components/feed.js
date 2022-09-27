import React from "react";
import './feed.css';
import avator from '../pic/kindpng_787127.png';
import image1 from '../pic/alexander-popov-3InMDrsuYrk-unsplash.jpg';
import image2 from '../pic/anders-jilden-GjwsHRIcQjU-unsplash.jpg';
import image3 from '../pic/chuttersnap-oKfCxcKnCo8-unsplash.jpg';
import {BsHeart,BsBookmark} from 'react-icons/bs';
import {FaRegComment,FaRegSmile} from 'react-icons/fa';
import {TbBrandTelegram} from 'react-icons/tb';


export default function Feed()
{
    const lead = 'BtwItsHarshitSrivastava';
    const suggestionanme ="Harshit008";
    const mutualfollow="followed by harshit";
    const trimmedAtLength = mutualfollow.substring(0, 10) + '...';

    return <>
    <div className="container">
        <div className="row">
            <div className="col-sm-2"></div>
            <div className="col-sm-5">
                <div className="row">
                    {/* 
                    FEED IMPORT
                     */}
                    <div className="col-sm-12 feed">
                        <div className="row">
                            <div className="col-sm-12 feedheder">
                                <div className="row">
                                    <div className="col-sm-1">
                                        <img src ={avator} alt="image" className="feedownerimage d-flex justify-content-start"/>
                                    </div>
                                    <div className="col-sm-9 d-flex justify-content-start feedownername feedownernamefont">{lead}</div>
                                    <div className="col-sm-2 d-flex justify-content-end editfeed">...</div>
                                </div>
                            </div>
                            <div className="col-sm-12">
                                <img src={image1} className="feeduploaded" alt="feed"/>
                            </div>
                            <div className="col-sm-12">
                                <div className="row">
                                    <div className="col-sm-3 d-flex justify-content-evenly">
                                        <div className="row">
                                            <div className="col-sm-4 reacticons"><BsHeart/></div>
                                        <div className="col-sm-4 reacticons"><FaRegComment/></div>
                                        <div className="col-sm-4 reacticons"><TbBrandTelegram/></div>
                                        </div>
                                    </div>
                                    <div className="col-sm-8 d-flex justify-content-start">
                                    </div>
                                    <div className="col-sm-1 d-flex justify-content-start">
                                        <span className="reacticons"><BsBookmark/></span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12">
                                <div className="likes d-flex justify-content-start">
                                    41,522 likes<br></br>
                                </div>
                                <div className="feedownernameComment d-flex justify-content-start">
                                   <span className="feedownernamefont">{lead} </span> <span className="commentShow">Happiness ❤️<br></br></span>
                                </div>
                                <div className="feedownernameComment d-flex justify-content-start">
                                    <a href="#" className="ancherforcommentload">View all 46 comments</a><br></br>
                                </div>
                                <div className="commentTime d-flex justify-content-start">9 HOURS AGO<br></br>
                                </div>
                            </div>
                            <hr className="Break"></hr>
                            <div className="col-sm-12">
                                <div className="row inputcomment">
                                    <div className="col-sm-1 smilesection"><span className="Smile"><FaRegSmile/></span></div>
                                    <div className="col-sm-9 d-flex justify-content-start">
                                        <input type="text" placeholder="Add a comment..." className="textcomment"></input>
                                    </div>
                                    <div className="col-sm-2 postsectionbutton">
                                        <span className="POST">POST</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*  */}
                    <div className="col-sm-12 feed">
                        <div className="row">
                            <div className="col-sm-12 feedheder">
                                <div className="row">
                                    <div className="col-sm-1">
                                        <img src ={avator} alt="image" className="feedownerimage d-flex justify-content-start"/>
                                    </div>
                                    <div className="col-sm-9 d-flex justify-content-start feedownername feedownernamefont">{lead}</div>
                                    <div className="col-sm-2 d-flex justify-content-end editfeed">...</div>
                                </div>
                            </div>
                            <div className="col-sm-12">
                                <img src={image2} className="feeduploaded" alt="feed"/>
                            </div>
                            <div className="col-sm-12">
                                <div className="row">
                                    <div className="col-sm-3 d-flex justify-content-evenly">
                                        <div className="row">
                                            <div className="col-sm-4 reacticons"><BsHeart/></div>
                                        <div className="col-sm-4 reacticons"><FaRegComment/></div>
                                        <div className="col-sm-4 reacticons"><TbBrandTelegram/></div>
                                        </div>
                                    </div>
                                    <div className="col-sm-8 d-flex justify-content-start">
                                    </div>
                                    <div className="col-sm-1 d-flex justify-content-start">
                                        <span className="reacticons"><BsBookmark/></span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12">
                                <div className="likes d-flex justify-content-start">
                                    41,522 likes<br></br>
                                </div>
                                <div className="feedownernameComment d-flex justify-content-start">
                                   <span className="feedownernamefont">{lead} </span> <span className="commentShow">Happiness ❤️<br></br></span>
                                </div>
                                <div className="feedownernameComment d-flex justify-content-start">
                                    <a href="#" className="ancherforcommentload">View all 46 comments</a><br></br>
                                </div>
                                <div className="commentTime d-flex justify-content-start">9 HOURS AGO<br></br>
                                </div>
                            </div>
                            <hr className="Break"></hr>
                            <div className="col-sm-12">
                                <div className="row inputcomment">
                                    <div className="col-sm-1 smilesection"><span className="Smile"><FaRegSmile/></span></div>
                                    <div className="col-sm-9 d-flex justify-content-start">
                                        <input type="text" placeholder="Add a comment..." className="textcomment"></input>
                                    </div>
                                    <div className="col-sm-2 postsectionbutton">
                                        <span className="POST">POST</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*  */}
                    <div className="col-sm-12 feed">
                        <div className="row">
                            <div className="col-sm-12 feedheder">
                                <div className="row">
                                    <div className="col-sm-1">
                                        <img src ={avator} alt="image" className="feedownerimage d-flex justify-content-start"/>
                                    </div>
                                    <div className="col-sm-9 d-flex justify-content-start feedownername feedownernamefont">{lead}</div>
                                    <div className="col-sm-2 d-flex justify-content-end editfeed">...</div>
                                </div>
                            </div>
                            <div className="col-sm-12">
                                <img src={image3} className="feeduploaded" alt="feed"/>
                            </div>
                            <div className="col-sm-12">
                                <div className="row">
                                    <div className="col-sm-3 d-flex justify-content-evenly">
                                        <div className="row">
                                            <div className="col-sm-4 reacticons"><BsHeart/></div>
                                        <div className="col-sm-4 reacticons"><FaRegComment/></div>
                                        <div className="col-sm-4 reacticons"><TbBrandTelegram/></div>
                                        </div>
                                    </div>
                                    <div className="col-sm-8 d-flex justify-content-start">
                                    </div>
                                    <div className="col-sm-1 d-flex justify-content-start">
                                        <span className="reacticons"><BsBookmark/></span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12">
                                <div className="likes d-flex justify-content-start">
                                    41,522 likes<br></br>
                                </div>
                                <div className="feedownernameComment d-flex justify-content-start">
                                   <span className="feedownernamefont">{lead} </span> <span className="commentShow">Happiness ❤️<br></br></span>
                                </div>
                                <div className="feedownernameComment d-flex justify-content-start">
                                    <a href="#" className="ancherforcommentload">View all 46 comments</a><br></br>
                                </div>
                                <div className="commentTime d-flex justify-content-start">9 HOURS AGO<br></br>
                                </div>
                            </div>
                            <hr className="Break"></hr>
                            <div className="col-sm-12">
                                <div className="row inputcomment">
                                    <div className="col-sm-1 smilesection"><span className="Smile"><FaRegSmile/></span></div>
                                    <div className="col-sm-9 d-flex justify-content-start">
                                        <input type="text" placeholder="Add a comment..." className="textcomment"></input>
                                    </div>
                                    <div className="col-sm-2 postsectionbutton">
                                        <span className="POST">POST</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*  */}
                </div>
            </div>

            {/* 
            Sidebar
            */}
            <div className="col-sm-4 ">
                <div className="row">
                    <div className="col-sm-12 d-flex justify-content-start suggestionsectionarea">
                        <div className="col-sm-7 suggestion d-flex justify-content-start">Suggestions for you</div>
                        <div className="col-sm-4 seemoresuggestion d-flex justify-content-start"><a href="#" className="seeallanchor">See All</a></div>
                    </div>
                    <div className="col-sm-12 followsectionarea">
                        <div className="row followsectionarealoop">
                            <div className="col-sm-2 suggestionsicon">
                                <img src={avator} className="suggestionspiclink" />
                            </div>
                            <div className="col-sm-5 ">
                                <div className="row">
                                    <div className="col-sm-12 d-flex justify-content-start">{suggestionanme}</div>
                                    <div className="col-sm-12 d-flex justify-content-start">{trimmedAtLength}</div>
                                </div>
                            </div>
                            <div className="col-sm-4 d-flex justify-content-start followsection"><a href="#" className="followbutton">Follow</a></div>
                        </div>
                        {/*  */}
                        <div className="row followsectionarealoop">
                            <div className="col-sm-2 suggestionsicon">
                                <img src={avator} className="suggestionspiclink" />
                            </div>
                            <div className="col-sm-5 ">
                                <div className="row">
                                    <div className="col-sm-12 d-flex justify-content-start">{suggestionanme}</div>
                                    <div className="col-sm-12 d-flex justify-content-start">{trimmedAtLength}</div>
                                </div>
                            </div>
                            <div className="col-sm-4 d-flex justify-content-start followsection"><a href="#" className="followbutton">Follow</a></div>
                        </div>
                        {/*  */}
                        <div className="row followsectionarealoop">
                            <div className="col-sm-2 suggestionsicon">
                                <img src={avator} className="suggestionspiclink" />
                            </div>
                            <div className="col-sm-5 ">
                                <div className="row">
                                    <div className="col-sm-12 d-flex justify-content-start">{suggestionanme}</div>
                                    <div className="col-sm-12 d-flex justify-content-start">{trimmedAtLength}</div>
                                </div>
                            </div>
                            <div className="col-sm-4 d-flex justify-content-start followsection"><a href="#" className="followbutton">Follow</a></div>
                        </div>
                        {/*  */} <div className="row followsectionarealoop">
                            <div className="col-sm-2 suggestionsicon">
                                <img src={avator} className="suggestionspiclink" />
                            </div>
                            <div className="col-sm-5 ">
                                <div className="row">
                                    <div className="col-sm-12 d-flex justify-content-start">{suggestionanme}</div>
                                    <div className="col-sm-12 d-flex justify-content-start">{trimmedAtLength}</div>
                                </div>
                            </div>
                            <div className="col-sm-4 d-flex justify-content-start followsection"><a href="#" className="followbutton">Follow</a></div>
                        </div>
                        {/*  */} <div className="row followsectionarealoop">
                            <div className="col-sm-2 suggestionsicon">
                                <img src={avator} className="suggestionspiclink" />
                            </div>
                            <div className="col-sm-5 ">
                                <div className="row">
                                    <div className="col-sm-12 d-flex justify-content-start">{suggestionanme}</div>
                                    <div className="col-sm-12 d-flex justify-content-start">{trimmedAtLength}</div>
                                </div>
                            </div>
                            <div className="col-sm-4 d-flex justify-content-start followsection"><a href="#" className="followbutton">Follow</a></div>
                        </div>
                        {/*  */}
                    </div>
                    <div className="col-sm-12 aboutsection">
                        <div className="row">
                            <div className="col-sm-10 about d-flex justify-content-start">
                                About . Help . Press . API . Jobs . Privacy . Terms . Locations. Language
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12">
                        <div className="row">
                            <div className="col-sm-10 copywrite d-flex justify-content-evenly">
                                © 2022 INSTAGRAM FROM ME
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>

}