var commentList = `<ul class="comment-list">
 <newComment/>
  </ul>`;

for (i = 0; i < (document.getElementById("comments").querySelector("#contents").childElementCount - 1); i++) {
	var authorText = document.getElementById("comments").querySelector("#contents").children[i].querySelector("#author-text").children[0].innerHTML;
	var commentText = document.getElementById("comments").querySelector("#contents").children[i].querySelector("#content-text").innerHTML;
	var date = document.getElementById("comments").querySelector("#contents").children[i].querySelector(".published-time-text").children[0].innerHTML;
	var likes = document.getElementById("comments").querySelector("#contents").children[i].querySelector(".style-scope .yt-icon-button").getAttribute("aria-label").replace(/(Like this comment along with )|( other people)|( other person)|(,)/g, "");
	var pfp = document.getElementById("comments").querySelector("#contents").children[i].querySelector(".style-scope .yt-img-shadow").src;
	
	try {
	if (document.getElementById("comments").querySelector("#contents").children[i].querySelector(".style-scope .ytd-author-comment-badge-renderer").tagName == "A") {
		var authorFull = `<span class="author ">
          <a href="/web/20130606145343/https://www.youtube.com/user/LastProspitDreamer" data-sessionlink="ei=d6KwUePaMYSJkgLGtoDoAQ" dir="ltr" class="yt-uix-sessionlink yt-user-name">` + authorText +`</a>
        </span>`;
	}
	}
	catch(err) {
		var authorFull = `<span class="author ">
          <a href="/web/20130606145343/https://www.youtube.com/user/LastProspitDreamer" data-sessionlink="ei=d6KwUePaMYSJkgLGtoDoAQ" dir="ltr" class="yt-uix-sessionlink yt-user-name">` + authorText +`</a>
        </span>`;
	}
	
	var commentList = commentList.replace("<newComment/>", (`<li class="clearfix comment" data-author-id="HTKJiRMV0hk9PY0Wv3aepA" data-id="h9CSjLt9ZEIT-zAOha0TluW8PrpNyT9KPC0w84grC1w">
   <button onclick=";return false;" type="button" class="flip close yt-uix-button yt-uix-button-link yt-uix-button-empty" data-button-has-sibling-menu="true" role="button" aria-pressed="false" aria-expanded="false" aria-haspopup="true" aria-activedescendant="">
      <span class="yt-uix-button-icon-wrapper"><img class="yt-uix-button-icon yt-uix-button-icon-comment-close" src="http://web-old.archive.org/web/20121229102009im_/http://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt=""><span class="yt-uix-button-valign"></span></span><img class="yt-uix-button-arrow" src="http://web-old.archive.org/web/20121229102009im_/http://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="">
      <div class=" yt-uix-button-menu yt-uix-button-menu-link" style="display: none;">
         <ul>
            <li class="comment-action-remove comment-action" data-action="remove"><span class="yt-uix-button-menu-item">Remove</span></li>
            <li class="comment-action" data-action="flag-profile-pic"><span class="yt-uix-button-menu-item">Report profile image</span></li>
            <li class="comment-action" data-action="flag"><span class="yt-uix-button-menu-item">Flag for spam</span></li>
            <li class="comment-action-block comment-action" data-action="block"><span class="yt-uix-button-menu-item">Block User</span></li>
            <li class="comment-action-unblock comment-action" data-action="unblock"><span class="yt-uix-button-menu-item">Unblock User</span></li>
         </ul>
      </div>
   </button>
   <a href="profile?id=UCM-jd2ad13nI9Qot3L1jfDg" class="yt-user-photo "><span class="video-thumb ux-thumb yt-thumb-square-48 "><span class="yt-thumb-clip"><span class="yt-thumb-clip-inner"><img alt="RyanDo2000" data-thumb="` + pfp + `" src="` + pfp + `" data-group-key="thumb-group-0" width="48"><span class="vertical-align"></span></span></span></span></a>
   <div class="comment-body">
      <div class="content-container">
         <div class="content">
            <p class="metadata">
               ` + authorFull + `
               <span class="time" dir="ltr">
               <a dir="ltr" href="#">
               ` + date + `
               </a>
               </span>
            </p>
            <div class="comment-text" dir="ltr">
               <p>` + commentText.replace(`<span dir="auto" class="style-scope yt-formatted-string">
</span>`, `<p><p/>`) +`</p>
            </div>
         </div>
         <div class="comment-actions">
            <button onclick=";return false;" type="button" class="start comment-action yt-uix-button yt-uix-button-link" data-action="reply" role="button"><span class="yt-uix-button-content">Reply </span></button>
            <span class="separator">·</span><span class="comments-rating-positive">` + likes + `</span>
            <span class="yt-uix-button-group">
               <span class="yt-uix-clickcard">
                  <button title="" onclick=";return false;" type="button" class="start comment-action-vote-up comment-action yt-uix-clickcard-target yt-uix-button yt-uix-button-link yt-uix-tooltip yt-uix-button-empty" data-tooltip-show-delay="300" data-action="" role="button"><span class="yt-uix-button-icon-wrapper"><img class="yt-uix-button-icon yt-uix-button-icon-watch-comment-vote-up" src="http://web-old.archive.org/web/20121229102009im_/http://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt=""><span class="yt-uix-button-valign"></span></span></button>  
                  <div class="watch7-hovercard yt-uix-clickcard-content">
                     <h3 class="watch7-hovercard-header">Sign in to YouTube</h3>
                     <div class="watch7-hovercard-message">
                        Sign in with your YouTube Account (YouTube, Google+, Gmail, Orkut, Picasa, or Chrome) to rate <span class="yt-user-name " dir="ltr">this</span>'s comment.
                     </div>
                     <ul class="watch7-hovercard-icon-strip clearfix">
                        <li class="watch7-hovercard-icon">
                           <div class="watch7-hovercard-youtube-icon"></div>
                        </li>
                        <li class="watch7-hovercard-icon">
                           <div class="watch7-hovercard-gplus-icon"></div>
                        </li>
                        <li class="watch7-hovercard-icon">
                           <div class="watch7-hovercard-gmail-icon"></div>
                        </li>
                        <li class="watch7-hovercard-icon">
                           <div class="watch7-hovercard-picasa-icon"></div>
                        </li>
                        <li class="watch7-hovercard-icon">
                           <div class="watch7-hovercard-chrome-icon"></div>
                        </li>
                     </ul>
                     <div class="watch7-hovercard-account-line">
                        <a href="http://web-old.archive.org/web/20121229102009/https://accounts.google.com/ServiceLogin?hl=en_US&amp;continue=http%3A%2F%2Fwww.youtube.com%2Fsignin%3Faction_handle_signin%3Dtrue%26hl%3Den_US%26next%3D%252Fwatch%253Fv%253D<?php echo sq0JXaLSTFY; ?>%26nomobiletemp%3D1&amp;passive=true&amp;service=youtube&amp;uilel=3" class="yt-uix-button   yt-uix-sessionlink yt-uix-button-hh-primary" data-sessionlink="ei=CJCpxP-xv7QCFQnbRAodKGVivw%3D%3D"><span class="yt-uix-button-content">Sign in</span></a>
                     </div>
                  </div>
               </span>
               <span class="yt-uix-clickcard">
                  <button title="" onclick=";return false;" type="button" class="end comment-action-vote-down comment-action yt-uix-clickcard-target yt-uix-button yt-uix-button-link yt-uix-tooltip yt-uix-button-empty" data-tooltip-show-delay="300" data-action="" role="button"><span class="yt-uix-button-icon-wrapper"><img class="yt-uix-button-icon yt-uix-button-icon-watch-comment-vote-down" src="http://web-old.archive.org/web/20121229102009im_/http://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt=""><span class="yt-uix-button-valign"></span></span></button>  
                  <div class="watch7-hovercard yt-uix-clickcard-content">
                     <h3 class="watch7-hovercard-header">Sign in to YouTube</h3>
                     <div class="watch7-hovercard-message">
                        Sign in with your YouTube Account (YouTube, Google+, Gmail, Orkut, Picasa, or Chrome) to rate <span class="yt-user-name " dir="ltr">this</span> comment.
                     </div>
                     <ul class="watch7-hovercard-icon-strip clearfix">
                        <li class="watch7-hovercard-icon">
                           <div class="watch7-hovercard-youtube-icon"></div>
                        </li>
                        <li class="watch7-hovercard-icon">
                           <div class="watch7-hovercard-gplus-icon"></div>
                        </li>
                        <li class="watch7-hovercard-icon">
                           <div class="watch7-hovercard-gmail-icon"></div>
                        </li>
                        <li class="watch7-hovercard-icon">
                           <div class="watch7-hovercard-picasa-icon"></div>
                        </li>
                        <li class="watch7-hovercard-icon">
                           <div class="watch7-hovercard-chrome-icon"></div>
                        </li>
                     </ul>
                     <div class="watch7-hovercard-account-line">
                        <a href="http://web-old.archive.org/web/20121229102009/https://accounts.google.com/ServiceLogin?hl=en_US&amp;continue=http%3A%2F%2Fwww.youtube.com%2Fsignin%3Faction_handle_signin%3Dtrue%26hl%3Den_US%26next%3D%252Fwatch%253Fv%253D<?php echo sq0JXaLSTFY; ?>%26nomobiletemp%3D1&amp;passive=true&amp;service=youtube&amp;uilel=3" class="yt-uix-button   yt-uix-sessionlink yt-uix-button-hh-primary" data-sessionlink="ei=CJCpxP-xv7QCFQnbRAodKGVivw%3D%3D"><span class="yt-uix-button-content">Sign in</span></a>
                     </div>
                  </div>
               </span>
            </span>
         </div>
      </div>
   </div>
</li><newComment/>`).replace(`<span class="comments-rating-positive">0</span>`, ""));

// replies
	try {
		if (document.getElementById("comments").querySelector("#contents").children[i].querySelector("#less-replies").children[0].tagName = "A") {
			for (o = 0; o < (document.getElementById("comments").querySelector("#contents").children[6].querySelector("#loaded-replies").childElementCount - 1); o++) {
			var replyName = document.getElementById("comments").querySelector("#contents").children[i].querySelector("#loaded-replies").children[o].querySelector("#author-text").children[0].innerHTML;
			var replyDate = document.getElementById("comments").querySelector("#contents").children[i].querySelector("#loaded-replies").children[o].querySelector(".published-time-text").children[0].innerHTML;
			var replyLikes = document.getElementById("comments").querySelector("#contents").children[i].querySelector("#loaded-replies").children[o].querySelector(".style-scope .yt-icon-button").getAttribute("aria-label").replace(/(Like this reply along with )|( other people)|( other person)|(,)/g, "");
			var replyPfp = document.getElementById("comments").querySelector("#contents").children[i].querySelector("#loaded-replies").children[o].querySelector(".style-scope .yt-img-shadow").src;
			if (document.getElementById("comments").querySelector("#contents").children[i].querySelector("#loaded-replies").children[o].querySelector("#content-text").outerHTML.search(`class="style-scope ytd-comment-renderer"><a`) > -1) {
				var replyTo = document.getElementById("comments").querySelector("#contents").children[i].querySelector("#loaded-replies").children[o].querySelector("#content-text").children[0].innerHTML.replace(/(@)|(&nbsp;)/g, "");
				var replyText = document.getElementById("comments").querySelector("#contents").children[i].querySelector("#loaded-replies").children[o].querySelector("#content-text").innerHTML.replace((document.getElementById("comments").querySelector("#contents").children[i].querySelector("#loaded-replies").children[o].querySelector("#content-text").children[0].innerHTML), "");
			} else {
				var replyTo = authorText;
				var replyText = document.getElementById("comments").querySelector("#contents").children[i].querySelector("#loaded-replies").children[o].querySelector("#content-text").innerHTML;
			}
			
			
			var commentList = commentList.replace("<newComment/>", (`<li class="clearfix comment" data-author-id="HTKJiRMV0hk9PY0Wv3aepA" data-id="h9CSjLt9ZEIT-zAOha0TluW8PrpNyT9KPC0w84grC1w">
   <button onclick=";return false;" type="button" class="flip close yt-uix-button yt-uix-button-link yt-uix-button-empty" data-button-has-sibling-menu="true" role="button" aria-pressed="false" aria-expanded="false" aria-haspopup="true" aria-activedescendant="">
      <span class="yt-uix-button-icon-wrapper"><img class="yt-uix-button-icon yt-uix-button-icon-comment-close" src="http://web-old.archive.org/web/20121229102009im_/http://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt=""><span class="yt-uix-button-valign"></span></span><img class="yt-uix-button-arrow" src="http://web-old.archive.org/web/20121229102009im_/http://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="">
      <div class=" yt-uix-button-menu yt-uix-button-menu-link" style="display: none;">
         <ul>
            <li class="comment-action-remove comment-action" data-action="remove"><span class="yt-uix-button-menu-item">Remove</span></li>
            <li class="comment-action" data-action="flag-profile-pic"><span class="yt-uix-button-menu-item">Report profile image</span></li>
            <li class="comment-action" data-action="flag"><span class="yt-uix-button-menu-item">Flag for spam</span></li>
            <li class="comment-action-block comment-action" data-action="block"><span class="yt-uix-button-menu-item">Block User</span></li>
            <li class="comment-action-unblock comment-action" data-action="unblock"><span class="yt-uix-button-menu-item">Unblock User</span></li>
         </ul>
      </div>
   </button>
   <a href="profile?id=UCM-jd2ad13nI9Qot3L1jfDg" class="yt-user-photo "><span class="video-thumb ux-thumb yt-thumb-square-48 "><span class="yt-thumb-clip"><span class="yt-thumb-clip-inner"><img alt="RyanDo2000" data-thumb="` + replyPfp + `" src="` + replyPfp + `" data-group-key="thumb-group-0" width="48"><span class="vertical-align"></span></span></span></span></a>
   <div class="comment-body">
      <div class="content-container">
         <div class="content">
            <p class="metadata">
               <span class="author ">
          <a href="/web/20130606145343/https://www.youtube.com/user/LastProspitDreamer" data-sessionlink="ei=d6KwUePaMYSJkgLGtoDoAQ" dir="ltr" class="yt-uix-sessionlink yt-user-name">` + replyName +`</a>
        </span>
               <span class="time" dir="ltr">
               <a dir="ltr" href="#">
               ` + replyDate + `
               </a>
               </span>
            </p>
            <div class="comment-text" dir="ltr">
               <p>` + replyText.replace(`<span dir="auto" class="style-scope yt-formatted-string">
</span>`, `<p><p/>`) +`</p>
            </div>
         </div>
        <div class="comment-actions">
    <button onclick=";return false;" class="start comment-action yt-uix-button yt-uix-button-link" type="button" data-action="reply" role="button"><span class="yt-uix-button-content">Reply </span></button>
    <span class="separator">·</span><span class="comments-rating-positive">` + replyLikes + `</span>


    <span class="yt-uix-clickcard"><button title="" onclick=";return false;" class="start comment-action-vote-up comment-action yt-uix-clickcard-target yt-uix-button yt-uix-button-link yt-uix-tooltip yt-uix-button-empty" type="button" data-tooltip-show-delay="300" data-action="" role="button"><span class="yt-uix-button-icon-wrapper"><img class="yt-uix-button-icon yt-uix-button-icon-watch-comment-vote-up" src="//web.archive.org/web/20130203101827im_/http://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt=""><span class="yt-uix-button-valign"></span></span></button>  <div class="watch7-hovercard yt-uix-clickcard-content">
    <h3 class="watch7-hovercard-header">Sign in to YouTube</h3>
    <div class="watch7-hovercard-message">
      Sign in with your YouTube Account (YouTube, Google+, Gmail, Orkut, Picasa, or Chrome) to rate <span class="yt-user-name " dir="ltr">smoothnews</span>'s comment.

    </div>
    <ul class="watch7-hovercard-icon-strip clearfix">
      <li class="watch7-hovercard-icon">
        <div class="watch7-hovercard-youtube-icon"></div>
      </li>
      <li class="watch7-hovercard-icon">
        <div class="watch7-hovercard-gplus-icon"></div>
      </li>
      <li class="watch7-hovercard-icon">
        <div class="watch7-hovercard-gmail-icon"></div>
      </li>
      <li class="watch7-hovercard-icon">
        <div class="watch7-hovercard-picasa-icon"></div>
      </li>
      <li class="watch7-hovercard-icon">
        <div class="watch7-hovercard-chrome-icon"></div>
      </li>
    </ul>
    <div class="watch7-hovercard-account-line">
      <a href="http://web.archive.org/web/20130203101827/https://accounts.google.com/ServiceLogin?continue=http%3A%2F%2Fwww.youtube.com%2Fsignin%3Faction_handle_signin%3Dtrue%26hl%3Den_US%26next%3D%252Fwatch%253Fv%253DbNb8kqmxO7I%26nomobiletemp%3D1&amp;passive=true&amp;uilel=3&amp;hl=en_US&amp;service=youtube" class="yt-uix-button   yt-uix-sessionlink yt-uix-button-primary" data-sessionlink="ei=CKrHjuH0mbUCFUKXRAodcgGhOA%3D%3D"><span class="yt-uix-button-content">Sign in</span></a>
    </div>
  </div>
</span><span class="yt-uix-clickcard"><button title="" onclick=";return false;" class="end comment-action-vote-down comment-action yt-uix-clickcard-target yt-uix-button yt-uix-button-link yt-uix-tooltip yt-uix-button-empty" type="button" data-tooltip-show-delay="300" data-action="" role="button"><span class="yt-uix-button-icon-wrapper"><img class="yt-uix-button-icon yt-uix-button-icon-watch-comment-vote-down" src="//web.archive.org/web/20130203101827im_/http://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt=""><span class="yt-uix-button-valign"></span></span></button>  <div class="watch7-hovercard yt-uix-clickcard-content">
    <h3 class="watch7-hovercard-header">Sign in to YouTube</h3>
    <div class="watch7-hovercard-message">
      Sign in with your YouTube Account (YouTube, Google+, Gmail, Orkut, Picasa, or Chrome) to rate <span class="yt-user-name " dir="ltr">smoothnews</span>'s comment.

    </div>
    <ul class="watch7-hovercard-icon-strip clearfix">
      <li class="watch7-hovercard-icon">
        <div class="watch7-hovercard-youtube-icon"></div>
      </li>
      <li class="watch7-hovercard-icon">
        <div class="watch7-hovercard-gplus-icon"></div>
      </li>
      <li class="watch7-hovercard-icon">
        <div class="watch7-hovercard-gmail-icon"></div>
      </li>
      <li class="watch7-hovercard-icon">
        <div class="watch7-hovercard-picasa-icon"></div>
      </li>
      <li class="watch7-hovercard-icon">
        <div class="watch7-hovercard-chrome-icon"></div>
      </li>
    </ul>
    <div class="watch7-hovercard-account-line">
      <a href="http://web.archive.org/web/20130203101827/https://accounts.google.com/ServiceLogin?continue=http%3A%2F%2Fwww.youtube.com%2Fsignin%3Faction_handle_signin%3Dtrue%26hl%3Den_US%26next%3D%252Fwatch%253Fv%253DbNb8kqmxO7I%26nomobiletemp%3D1&amp;passive=true&amp;uilel=3&amp;hl=en_US&amp;service=youtube" class="yt-uix-button   yt-uix-sessionlink yt-uix-button-primary" data-sessionlink="ei=CKrHjuH0mbUCFUKXRAodcgGhOA%3D%3D"><span class="yt-uix-button-content">Sign in</span></a>
    </div>
  </div>
</span>
in reply to <a href="/web/20130203101827/http://www.youtube.com/user/AnotherAnotherJosh" class="yt-uix-sessionlink yt-user-name " data-sessionlink="ei=CKrHjuH0mbUCFUKXRAodcgGhOA%3D%3D" dir="ltr">
            ` + replyTo + `
          </a>
      <a href="#" class="comment-action comment-action-showparent" onclick="return false;" data-action="show-parent">(Show the comment)</a>
  </div>
                  </div>
               </span>
            </span>
         </div>
      </div>
   </div>
</li><newComment/>`).replace(`<span class="comments-rating-positive">0</span>`, ""));
			}
			
		}
	}
	catch(err) {
		var throwaway = 1;
	}
}

console.log(commentList.replace(/(\/")/, `"`))