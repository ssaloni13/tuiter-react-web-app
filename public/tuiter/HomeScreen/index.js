import NavigationSidebar from "../NavigationSidebar/index.js";

import PostSummaryList from "../PostSummaryList/PostSummaryList.js";
import PostListItem from "../PostList/PostListItem.js";

function exploreComponent() {
    $('#wd-explore').append(`
         <div class="row mt-2">
   <div class="col-2 col-md-2 col-lg-1 col-xl-2">
    ${NavigationSidebar()}
   </div>
   
   
   <div class="col-10 col-lg-7 col-xl-6">
        <!--Post List-->
        ${PostListItem()}
   </div>
   
   
   <div class="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4" style="display: inline-flex; background-color: rgb(27,30,30)">
        <div style="width: 100%; float: left;">
        </div>
        <div>
            <div class="row">
                    <div class="col-4">
                        ${PostSummaryList()}
                    </div>
            </div>
        </div>
    
   </div>
  </div>

   `);
}
$(exploreComponent);

