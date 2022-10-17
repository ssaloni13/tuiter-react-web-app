const NavigationSidebar = (active) => {
    return(`
   <div class="list-group" style="display: inline-flex; width: 100%;">
        <a class="list-group-item" href="#" style="background-color: darkgrey"><i class="fab fa-twitter" style="color: white"></i></a>
        <a class="list-group-item" href="public/tuiter/HomeScreen/index.html" style="background-color: darkgrey"><i class="fa fa-home" style="color: white">Home</i></a>
        <a class="list-group-item" href="public/tuiter/ExploreScreen/index.html" style="background-color: dodgerblue"><i class="fa fa-hashtag" style="color: white">Explore</i></a>
        <a class="list-group-item" href="/" style="background-color: darkgrey"><i class="fa fa-bell" style="color: white">Notifications</i></a>
        <a class="list-group-item" href="/" style="background-color: darkgrey"><i class="fa fa-envelope" style="color: white">Messages</i></a>
        <a class="list-group-item" href="/" style="background-color: darkgrey"><i class="fa fa-bookmark" style="color: white">Bookmarks</i></a>
        <a class="list-group-item" href="/" style="background-color: darkgrey"><i class="fa fa-list" style="color: white">Lists</i></a>
        <a class="list-group-item" href="/" style="background-color: darkgrey"><i class="fa fa-user" style="color: white">Profile</i></a>
        <a class="list-group-item" href="/" style="background-color: darkgrey"><i class="fas fa-circle" style="color: white">More</i> </a>
   </div>
   <div class="d-grid mt-2">
     <a href="<tweet.html" class="btn btn-primary btn-block rounded-pill" style="color: white; background-color: dodgerblue">Tweet</a>
   </div>
 `);
}
export default NavigationSidebar;

