async function LoadBlogs() {
    let url = "https://www.googleapis.com/youtube/v3/search?key=AIzaSyClUKKrRGKmg1WF5haEcHaate4JGS946ng&channelId=UCOHDGgkYejVdkeuKXZ_P5DA&part=snippet,id&order=date&maxResults=20"
    try {
        let data = await (await fetch(`${url}`)).json();
        let dp = data.items

        const featured_html = dp.map((f, i) => {
            return `
        <div class="col-xl-4 col-lg-4">
                   <div class="float-left w-100 post-item border mb-lg-4 mb-0">
                      <div class="post-item-wrap position-relative">
                         <div class="post-video">
                            <div class="fluid-width-video-wrapper">
                               <iframe width="560" height="376" src="https://www.youtube.com/embed/${dp[i].id.videoId}"></iframe>
                               <!--fluid-width-video-wrapper-->
                            </div>
                            <span class="post-meta-category"><a href="">Video</a></span>
                            <!--post-video-->
                         </div>
                         <div class="float-left w-100 post-item-description">
                            <span class="post-meta-date"><i class="fa fa-calendar-o"></i>${new Date(dp[i].snippet.publishedAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                            <h2><a href="https://www.youtube.com/watch?v=${dp[i].id.videoId}">${dp[i].snippet.title}</a></h2>
                            <a href="https://www.youtube.com/watch?v=${dp[i].id.videoId}" class="item-link">Watch On Youtube <i class="fa fa-arrow-right"></i></a>
                            <!--post-item-description-->
                         </div>
                         <!--post-item-wrap-->
                      </div>
                      <!--post-item-->
                   </div>
                   <!--col-->
                </div>`;
        }).join('');
        document.querySelector("#archiablogs").insertAdjacentHTML("afterbegin", featured_html);
    } catch (error) {
        console.log(error)
    }
}
LoadBlogs()

