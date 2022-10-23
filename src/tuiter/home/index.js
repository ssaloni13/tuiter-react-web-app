import React from "react";
import postsArray from './items.json';
import PostItem from "./post-items";

const Posts = () => {
    return(
        <ul className="list-group">
            {
                postsArray.map(items =>
                    <PostItem
                        key={items._id} items={items}/> )
            }
        </ul>
    );
};
export default Posts;

