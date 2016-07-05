import React from 'react';

class VideoItem extends React.Component {

	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div className="row">
				<div className="col-md-5">
					<img className="img-responsive" src={this.props.video.image_url}></img>
				</div>
				<div className="col-md-7">
					<div>{this.props.video.title}</div>
					<div>{this.props.video.last_updated}</div>
				</div>
			</div>
		)
	}
}

module.exports = VideoItem
