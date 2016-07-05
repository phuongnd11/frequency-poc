import React from 'react'
import VideoItem from './VideoItem'

class ListVideo extends React.Component {

	constructor(props) {
		super(props)
	}

	eachVideo(item, i) {
		return (
			<VideoItem video={item} key={item.video_id}></VideoItem>
		);
	}

	render() {
		return (
			<div>
				{
					this.props.videos.map(this.eachVideo)
				}
			</div>
		);
	}
}

module.exports = ListVideo
