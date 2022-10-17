
const WhoToFollowListItem = (who) => {
    return(`
    <div style="width: 100%; float: left;">
                    <div class="row" style="color: white; display: inline-flex;">
                        <div class="col-5" style="position: relative; padding-top: 5px; padding-bottom: 5px; ">
                            <img src="${who.avatarIcon}" style="border-radius: 25px; width: 60px; height: 60px;">
                        </div>
                        <div class="col-5" style="position: relative; padding-top: -15px; padding-bottom: 5px; margin-left: 100px; margin-top: -70px; ">
                            <h2 style="font-weight: bold; font-size: small; display: inline-flex; width: max-content;">${who.userName}</h2>
                            <p style="color: grey; font-size: x-small">@${who.handle}</p>
                        </div>
                        <div class="col-3" style="position: relative; padding-top: 15px; padding-bottom: 10px; margin-left: 300px; margin-top: -70px; ">
                            <button type="button" class="btn btn-primary" style="border-radius: 20px">Follow</button>
                        </div>
                    </div>

                </div>`
    );
}
export default WhoToFollowListItem;
