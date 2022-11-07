import React from "react";
import postsArray from './tuits.json';
import TuitItem from "./TuitItem";

const Tuits = () => {
    return(
        <ul className="list-group">
            {
                postsArray.map(tuits =>
                    <TuitItem
                        key={tuits._id} tuits={tuits}/> )
            }
        </ul>
    );
};
export default Tuits;

