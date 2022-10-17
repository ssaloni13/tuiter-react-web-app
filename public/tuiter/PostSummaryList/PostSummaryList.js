import PostSummaryItem from "./PostSummaryItem.js";
import post from "./post.js";
const PostSummaryList = () => {
    return(`
      <div class="list-group" style="width: 100%; display: inline-flex;">
         ${
        post.map(post => {
            return(PostSummaryItem(post));
        }).join('<br>')
    }
      </div>
   `);
}
export default PostSummaryList;