import React from 'react';
import Dropdown from './ChannelDropdown';
import Content from './Content';

const tabData = [
  { name: 'Channels', isActive: true },
  { name: 'Curate', isActive: false },
];

function Tabs(props) {
  return (
    <div className="col-md-12 tab-button">
      <ul className="nav nav-tabs pull-left">
        {
          tabData.map((tab, i) =>
            <Tab
              key={i}
              data={tab}
              isActive={props.activeTab === tab}
              handleClick={() => props.changeTab(tab)}
            />
          )
        }
      </ul>
      <div className="dropdown-container pull-right">
        <Dropdown />
      </div>
    </div>
  );
}

Tabs.propTypes = {
  activeTab: React.PropTypes.object,
  changeTab: React.PropTypes.func,
};

function Tab(props) {
  return (
    <li onClick={props.handleClick} className={props.isActive ? 'active' : null}>
      <a href="#">{props.data.name}
        <div className="selected">
          <span className="triagle"></span>
        </div>
      </a>
    </li>
  );
}

Tab.propTypes = {
  handleClick: React.PropTypes.func,
  isActive: React.PropTypes.bool,
  data: React.PropTypes.object,
};

class ChannelTab extends React.Component {
  constructor() {
    super();
    this.state = { activeTab: tabData[0] };
    this.handleClick = this.handleClickTab.bind(this);
  }

  handleClickTab(tab) {
    this.setState({ activeTab: tab });
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <Tabs activeTab={this.state.activeTab} changeTab={this.handleClick} />
          <Content activeTab={this.state.activeTab} />
        </div>
      </div>
    );
  }
}

export default ChannelTab;
