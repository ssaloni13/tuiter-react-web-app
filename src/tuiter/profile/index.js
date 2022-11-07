import React from "react";
import { useNavigate } from "react-router-dom";
import {ArrowLeft, GeoAlt, Balloon, Calendar3} from "react-bootstrap-icons";
import "./index.css"

const ProfileComponent = () => {
    let navigate = useNavigate();
    const eProfile =() => {
        let r = `/tuiter/editProfile`;
        navigate(r);
    }
    const routeChange = () =>{
        let path = `/tuiter/home`;
        navigate(path);

}
    return(
        <>
        <div className="row">
            <div className="d-flex col-12">
                <div className="wd-icons" onClick={routeChange}><ArrowLeft/></div>
                <div className="col-10 d-inline">
                    <div>Joseph Aoun</div>
                    <div>6,114 Tweets</div>
                </div>
            </div>

            <div className="d-flex col-12">
                <img className="p-img" src="/images/prfBanner.jpg"/>
            </div>

            <div className="d-inline">
                <img className="p-img-pf" src="/images/aoun.jpg"/>
                <button className="wd-edit-pf" onClick={eProfile}> Edit Profile</button>
            </div>


            <div>
                <div className="d-inline-flex">
                    <h5>Joseph &nbsp;</h5>
                    <h5>Aoun</h5>
                </div>
                <div>
                    <h6>@jAoun</h6>
                </div>
                <div>
                    <p>Joseph Aoun (born March 26, 1953) is a Lebanese-born American linguist and the seventh president of Northeastern University in Boston, where he took office on August 15, 2006. Previously, Aoun was dean of the College of Letters, Arts, and Sciences at the University of Southern California. He joined USC in 1982 in the Department of Linguistics, and during his time at USC served as head of the academic Senate.</p>
                </div>
            </div>

            <div className="d-inline-flex col-12">
                <div className="wd-icons d-inline-flex">
                    <GeoAlt></GeoAlt><p>&nbsp;Boston, MA</p>
                </div>
                <div className="wd-icons d-inline-flex">
                    <Balloon></Balloon>
                    <p> &nbsp;Born 03/26/1953</p>
                </div>
                <div className="wd-icons d-inline-flex">
                    <Calendar3></Calendar3>
                    <p>&nbsp;Joined April 2005</p>
                </div>
            </div>

            <div className="d-flex col-12">
                <div className="d-flex">
                    <p className="fandf">340&nbsp;</p>
                    <p>Following &nbsp; &nbsp;</p>
                </div>
                <div className="d-inline-flex">
                    <p className="fandf">223&nbsp;</p>
                    <p>Followers</p>
                </div>


            </div>

        </div>
        </>
    );
};
export default ProfileComponent;

