import React, { Component } from 'react';
import DataTable from '../components/DataTable';
import BarChart from '../components/BarChart';
import './Dashboard.scss';

interface DashboardState {
  data: any[];
  currentIndex: number;
}

class Dashboard extends Component<{}, DashboardState> {
  state: DashboardState = {
    data: [],
    currentIndex: 0,
  };

  componentDidMount() {
    fetch('/data.json')
      .then((response) => response.json())
      .then((data) => this.setState({ data }));
  }

  handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ currentIndex: parseInt(e.target.value) });
  };

  render() {
    const { data, currentIndex } = this.state;
    const currentItem = data[currentIndex];

    return (
      <div className="dashboard-container">
        {currentItem && (
          <>
            <h1>{currentItem.title}</h1>
            <div className="content">
              <DataTable attributes={currentItem.attributes} />
              <BarChart attributes={currentItem.attributes} />
            </div>
            <input
              type="range"
              min="0"
              max={data.length - 1}
              value={currentIndex}
              onChange={this.handleSliderChange}
            />
          </>
        )}
      </div>
    );
  }
}

export default Dashboard;
