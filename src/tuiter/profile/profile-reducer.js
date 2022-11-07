// const initialState = {
//     tds: [
//         {
//             firstName: "Joseph", lastName: "Aoun", handle:"@jAoun",
//             profilePicture: "/images/aoun.jpg", bannerPicture:"/images/prfBanner.jpg",
//             bio: "Joseph Aoun (born March 26, 1953) is a Lebanese-born American linguist and the seventh president of Northeastern University in Boston, where he took office on August 15, 2006. Previously, Aoun was dean of the College of Letters, Arts, and Sciences at the University of Southern California. He joined USC in 1982 in the Department of Linguistics, and during his time at USC served as head of the academic Senate.",
//             website: "northeastern.edu/joseph-aoun",
//             location: "Boston, MA", dateOfBirth: "7/7/1954", dateJoined: "4/2005",
//             followingCount: 340, followersCount: 223
//         }
//     ]
// }
//
// export default function appReducer(state = initialState, action) {
//     // The reducer normally looks at the action type field to decide what happens
//     switch (action.type) {
//         // Do something here based on the different types of actions
//         case 'todos/todoAdded': {
//             // We need to return a new state object
//             return {
//                 // that has all the existing state data
//                 ...state,
//                 // but has a new array for the `todos` field
//                 tds: [
//                     // with all of the old todos
//                     ...state.tds,
//                     // and the new todo object
//                     {
//                         // Use an auto-incrementing numeric ID for this example
//                         id: nextTodoId(state.tds),
//                         text: action.payload,
//                     }
//                 ]
//             }
//         }
//         default:
//             // If this reducer doesn't recognize the action type, or doesn't
//             // care about this specific action, return the existing state unchanged
//             return state
//     }
// }