import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {findTuitsThunk} from "../../services/tuits-thunks";
import postsArray from './tuits.json';
import TuitItem from "./TuitItem";

const Tuits = () => {
    const {tuits, loading} = useSelector(
        state => state.tuitsData)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findTuitsThunk())
        }, []
    )
    return(
        <ul className="list-group">
            {
                loading &&
                <li className="list-group-item">
                    Loading...
                </li>
            }

            {
                postsArray.map(tuits =>
                    <TuitItem
                        key={tuits._id} tuits={tuits}/> )
            }
        </ul>
    );
};
export default Tuits;

