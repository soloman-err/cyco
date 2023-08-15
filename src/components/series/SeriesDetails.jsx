import React from "react";

import YouTubePlaylist from "@codesweetly/react-youtube-playlist";
const SeriesDetails = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
        <YouTubePlaylist className='mx-auto z-10'
            apiKey="AIzaSyAG0Lqn0DeDWDg3xG1oGdwKnf0hCQ6OBi8"
            playlistId="PL1pf33qWCkmjWcACm71NzSkb72r6YtDon"
            uniqueName="THIS_PLAYLIST_INSTANCE_NAME"
          />

          
        </div>
      </div>
    </div>
  );
};

export default SeriesDetails;
