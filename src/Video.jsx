import React from "react";

function Video({ liveID }) {
	return (
		<div>
			<iframe
				title="NPC Worldwide Festival Live Stream"
				id="ytplayer"
				type="text/html"
				width="1920"
				height="1080"
				src={`https://www.youtube.com/embed/${liveID}?modestbranding=1&autoplay=1&controls=0&showinfo=0&rel=0&enablejsapi=1`}
				allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
			/>
		</div>
	);
}

export default Video;
