import React from "react";
import {Heart, Chat, Upload, Check2, Repeat} from "react-bootstrap-icons";


const PostItem = (
    {
        items = {
            "userName": "SpaceX",
            "handle" : "@Spacex",
            "time": "23h",
            "title": "Dennis and Akiko Tito are the first two crewmembers on Starship's second commercial spaceflight around the moon." ,
            "image": "spacex.jpg",
            "postImage": "dennis.jpg",
            "comments": "595",
            "reshares": "1,168",
            "likes": "11.1K"

        }
    }
) => {
    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-2">
                    <img width={70} className="float-end rounded-5" src={`/images/${items.image}`}/>
                </div>
                <div className="col-10">
                    <div>{items.userName}<Check2/> {items.handle} - {items.time}</div>
                    <div>{items.title}</div>
                    <br/>
                </div>
                <div>
                    <img className="wd-post-image" src={`/images/${items.postImage}`}/>
                    <br/>
                </div>
                <div className="col-12 wd-dis">
                    <div className="wd-icons"><Chat/>  {items.comments}</div>
                    <div className="wd-icons"><Repeat/>  {items.reshares}</div>
                    <div className="wd-icons"><Heart/>  {items.likes}</div>
                    <div className="wd-icons"><Upload/></div>
                </div>

            </div>
        </li>
    );
};
export default PostItem;

