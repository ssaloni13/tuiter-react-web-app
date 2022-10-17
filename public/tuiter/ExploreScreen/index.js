import NavigationSidebar from "../NavigationSidebar/index.js";
import WhoToFollowList from "../WhoToFollowList/WhoToFollowList.js";
import ExploreComponent from "./ExploreComponent.js";

function exploreComponent() {
    $('#wd-explore').append(`
         <div class="row mt-2">
   <div class="col-2 col-md-2 col-lg-1 col-xl-2">
    ${NavigationSidebar()}
   </div>
   
   
   <div class="col-10 col-lg-7 col-xl-6">
        ${ExploreComponent()};
   </div>
   
   
   <div class="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4" style="display: inline-flex;">
        <div style="width: 100%; float: left; background-color: rgb(27,30,30)">
             <p style="color: black; font-size: large; font-weight: bold; color: white">Who to follow</p>
        </div>
        <div style=" background-color: rgb(27,30,30)">
            <div class="row">
                    <div class="col-4">
                        ${WhoToFollowList()}
                    </div>
            </div>
        </div>
    
   </div>
  </div>

   `);
}
$(exploreComponent);

