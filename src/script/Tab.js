import React from 'react';
import ReactDOM from 'react-dom';
import ListChannel from './ListChannel';
import Dropdown from './ChannelDropdown';
import ListVideo from './ListVideo';
import ChannelDetails from './ChannelDetails';

const tabData = [
  { name: 'Channels', isActive: true },
  { name: 'Curate', isActive: false }
];

const Tabs = (props) => {
	return (
			<div className="col-md-12 tab-button">
				<ul className="nav nav-tabs pull-left">
					{
						tabData.map(function(tab, i){
							return (
								<Tab key={i} data={tab} isActive={props.activeTab === tab} handleClick={props.changeTab.bind(this,tab)} />
							);
						})
					}      
				</ul>
				<div className="dropdown-container pull-right">
					<Dropdown></Dropdown>
				</div>
			</div>
	)
}

const Tab = (props) => {
	return (
      <li onClick={props.handleClick} className={props.isActive ? "active" : null}>
        <a href="#">{props.data.name}
					<div className="selected"><span className="triagle"></span></div>
				</a>
      </li>		
	)
}

class Content extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			videos:[]
		}
		this.fetchVideos = this.fetchVideos.bind(this);
	}

	fetchVideos(channelId) {
		var $;
		$ = require('jquery');
		$.ajax({
			url : "https://jsonp.afeld.me/?url=https://dev.freq.us/api/2.0/channels/" + channelId + "/videos",
			type : "get",
			headers : {
				'Content-Type': 'application/json',
				'X-Frequency-DeviceId': '556a6dc3-1ea0-09b6',
				'X-Frequency-Auth': 'ba4cea0a-d4c4-4951-8991-029df07a4242'
			},
			success: function (data) {
				console.log(data);
				this.setState({ videos: data.videos });
			}.bind(this)
		});
	}	
		
	render() {
		const { activeTab } = this.props;
		return (
			<div className="col-md-12 tab-content">
				{activeTab.name === 'Channels' ? 
				<section className="panel">
					<div className="row content">
						<div className="col-md-8 list-channel">
							<div className="header">
								<span className="h1 text-right all-channels">All Channels</span>
								<div className="pull-right"><button type="button" className="btn btn-frequency btn-lg">Create New Channel</button></div>									
							</div>
							<ListChannel fetchVideos={this.fetchVideos}></ListChannel>
						</div>
						<div className="col-md-4 channel-details">
							<ListVideo videos={this.state.videos}></ListVideo>
						</div>
					</div>
				</section>
				:null} 
				{activeTab.name === 'Curate' ? 
				<section className="panel">
				<h2 className="panel-heading">Curation</h2>
				</section>
				:null} 
			</div>
		)
	}
}

class ChannelTab extends React.Component {
    constructor(){
        super();
        this.state = {activeTab: tabData[0]}
				this.handleClick = this.handleClickTab.bind(this)
    }
		handleClickTab(tab) {
			 this.setState({activeTab: tab});
		}
		render() {
			return (
				<div className="container-fluid">
					<div className="row">
							<Tabs activeTab={this.state.activeTab} changeTab={this.handleClick} />
							<Content activeTab={this.state.activeTab}></Content>       
					</div>
				</div>
			)
		}
}

export default ChannelTab