const PostSummaryItem = (post) => {
    return(`

                <div style="width: 100%; float: left; border: 1px solid gray; display: inline-flex; margin-top: -25px">
                    <div class="row">
                        <div class="col-6" style=" padding-top: 5px; padding-bottom: 5px;">
                            <p style="color: darkgrey; margin-top: -10px; margin-bottom: 0px">${post.topic}</p>
                            <span class="d-inline-flex" style="margin-top: 0px; margin-bottom: 0px;"><p style="font-weight: bold">${post.userName}</p><p style="padding-left: 4px; padding-right: 4px"><i class="fa fa-check-circle"></i> </p><p style="color: gray">  -${post.time}</p></span>
                            <p style="font-weight: bold; font-size: small; margin-top: -10px">${post.title}</p>
                        </div>
                        <div class="col-6" style=" padding-top: 5px; padding-bottom: 5px;">
                            <img src="${post.image}" style="margin-left: 240px; margin-top: 10px; width: 60px; height: 80px;">
                        </div>
                    </div>
                </div>
  `
    );
}
export default PostSummaryItem;