import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js";
const WhoToFollowList = () => {
    return(`
      <div class="list-group" style="width: 100%; display: inline-flex;">
         ${
        who.map(who => {
            return(WhoToFollowListItem(who));
        }).join('<br>')
    }
      </div>
   `);
}
export default WhoToFollowList;