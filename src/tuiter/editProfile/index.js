import React from "react";
import {ArrowLeft, GeoAlt, Balloon, Calendar3,X} from "react-bootstrap-icons";

const EditProfileComponent = () => {

    return(
        <>
            <div className="row">
                <div className="d-flex col-12">
                    <div className="wd-icons"><X/></div>
                    <div className="col-10 d-inline">
                        <div>Edit Profile</div>
                    </div>
                    <div>
                        <button className="btn btn-primary">Save</button>
                    </div>
                </div>
            </div>
        </>
    );
};
export default EditProfileComponent;

