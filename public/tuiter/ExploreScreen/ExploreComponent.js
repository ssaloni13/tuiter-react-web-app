import PostSummaryList from "../PostSummaryList/PostSummaryList.js";

const ExploreComponent = () => {
    return(`
            <div class="row">
                <div class="d-flex flex-fill">
                    <i class="fa fa-search" style="position:absolute; margin-top: 10px; margin-left: 10px;"> </i>
                    <input type="text" class="form-control" placeholder="Search Twitter" style="border: 1px solid darkgray;background-color: white;
                    border-radius: 15px;width: 100%;margin-bottom: 10px; padding-left: 30px;">
                    <i class="fa fa-cog fa-2x" style="color: dodgerblue; margin-left: 20px"></i>
                </div>
           </div>
           
           <div>
                    <ul class="nav nav-tabs">
                        <li class="nav-item" style="color: dodgerblue">
                            <a class="nav-link active" href="#"  style="color: white; background-color: dodgerblue">For you</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#" style="color: white">Trending</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#" style="color: white">News</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#" style="color: white">Sports</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#" style="color: white">Entertainment</a>
                        </li>
                    </ul>
            </div>

           <div>
                <img src="https://techcrunch.com/wp-content/uploads/2019/09/Starship-Mk1-Day.jpg" style="width: 100%; height: 100%;margin-bottom: 0px"><h1 style="margin-top: -70px; color: white; padding: 15px;">SpaceX's Starship</h1>
            </div>
           
           <div class="d-inline-flex" style="color: white">
                ${PostSummaryList()}
           </div>    
          
    `);
}
export default ExploreComponent;
