import React from 'react';
import ChannelTab from './Tab';

class Channel extends React.Component {
	render() {
		return (
			<div>
				<div className="header-bar">
					<div className="container-fluid">
						<div className="pull-left">
							<img className="img-responsive logo" src={require('../images/logo.png')} alt="Frequency"/>
						</div>
						<div className="pull-right">
							<span className="welcome">Welcome, FPT</span>
							<a className="logout" href="#">Logout</a>
						</div>
					</div>
				</div>
				<div className="tab-bar">
					<ChannelTab></ChannelTab>
				</div>
			</div>
		);
	}
}

export default Channel

