// import React from "react";
// import postsArray from './items.json';
// import PostItem from "./post-items";
//
// const Posts = () => {
//     return(
//         <ul className="list-group">
//             {
//                 postsArray.map(items =>
//                     <PostItem
//                         key={items._id} items={items}/> )
//             }
//         </ul>
//     );
// };
// export default Posts;
//

import React from "react";
import TuitsList from "../tuits/TuitsList";
import WhatsHappening from "./whats-happening";

const HomeComponent = () => {
    return(
        <>
            <h4>Home</h4>
            <WhatsHappening/>
            <TuitsList/>
        </>
    );
};
export default HomeComponent;

