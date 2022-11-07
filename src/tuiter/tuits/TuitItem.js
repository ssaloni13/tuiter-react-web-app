import React from "react";
// import tuitsReducer from "./tuits-reducer";
import {useDispatch, useSelector} from "react-redux";
import {createTuit,deleteTuit} from "./tuits-reducer";
import {Heart, Chat, Upload, Check2, Repeat, HeartFill} from "react-bootstrap-icons";


const TuitItem = (
    {

        tuits = {
            "_id": 234,
            "topic": "Space",
            "userName": "SpaceX",
            "time": "2h",
            "title": "100s of SpaceX Starships land on Mars after a 6 month journey. 1000s of Martian colonists being building Mars Base 1",
            "image": "spacex.jpg",
            "liked": true,
            "replies": 123,
            "retuits": 432,
            "likes": 2345,
            "handle": "@spacex",
            "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"

        }

    }

) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuit(id));
    }
    const createTuitHandler = (id) => {
        dispatch(createTuit(id))
    }
    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-2">
                    <img width={70} className="float-end rounded-5" src={`/images/${tuits.image}`}/>
                </div>
                <div className="col-10">
                    <div>{tuits.userName}<Check2/> {tuits.handle} . {tuits.time}
                        <i className="bi bi-x-lg float-end"
                           onClick={() => deleteTuitHandler(tuits._id)}></i></div>
                    <div>{tuits.tuit}</div>
                    <br/>
                </div>

                <div className="col-12 wd-dis">
                    <div className="wd-icons"><Chat/>  {tuits.replies}</div>
                    <div className="wd-icons"><Repeat/>  {tuits.retuits}</div>
                    <div className="wd-icons"><Heart/>{tuits.likes}</div>
                    <div className="wd-icons"><Upload/></div>
                </div>

            </div>
        </li>
    );
};
export default TuitItem;

