import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import Projection from './Projection';
import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  Col,
  Row,
} from 'reactstrap';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { getStyle } from '@coreui/coreui/dist/js/coreui-utilities';

const brandSuccess = getStyle('--success')
const brandDanger = getStyle('--danger')

// start Overall Chart
const overall = { 
  labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN'],
  datasets: [
    {
      label: 'Users',
      backgroundColor: '#B3F6AA',
      borderColor: brandSuccess,
      data: [78, 81, 80, 45, 34, 40],
    },
    ],
  }

const optionsOverall = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        display: false,
      }],
    yAxes: [
      {
        display: false,
      }],
  },
  elements: {
    line: {
      borderWidth: 2,
    },
  },
}

const overallMobile = { 
  labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN'],
  datasets: [
    {
      label: 'Users',
      backgroundColor: '#B3F6AA',
      borderColor: brandSuccess,
      data: [58, 34, 87, 32, 22, 46],
    },
    ],
  }

const optionsOverallMobile = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        display: false,
      }],
    yAxes: [
      {
        display: false,
      }],
  },
  elements: {
    line: {
      borderWidth: 2,
    },
  },
}

const overallDesktop = { 
  labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN'],
  datasets: [
    {
      label: 'Users',
      backgroundColor: '#B3F6AA',
      borderColor: brandSuccess,
      data: [55, 81, 33, 49, 36, 25],
    },
    ],
  }

const optionsOverallDesktop = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        display: false,
      }],
    yAxes: [
      {
        display: false,
      }],
  },
  elements: {
    line: {
      borderWidth: 2,
    },
  },
}
//End Overall Chart


//Start Mobile Chart
const mobile = {
  labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN'],
  datasets: [
    {
      label: 'New Users',
      backgroundColor: '#B3F6AA',
      borderColor: brandSuccess,
      data: [78, 81, 80, 45, 34, 12],
    },
  ],
};

const optionsMobile = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        display: false,
      }],
    yAxes: [
      {
        display: false,
      }],
  },
  elements: {
    line: {
      borderWidth: 2,
    },
  },
}

const mobileMobile = {
  labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN'],
  datasets: [
    {
      label: 'New Users',
      backgroundColor: '#B3F6AA',
      borderColor: brandSuccess,
      data: [45, 78, 34, 54, 56, 31],
    },
  ],
};

const optionsMobileMobile = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        display: false,
      }],
    yAxes: [
      {
        display: false,
      }],
  },
  elements: {
    line: {
      borderWidth: 2,
    },
  },
}

const mobileDesktop = {
  labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN'],
  datasets: [
    {
      label: 'New Users',
      backgroundColor: '#B3F6AA',
      borderColor: brandSuccess,
      data: [66, 43, 78, 22, 53, 48],
    },
  ],
};

const optionsMobileDesktop = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        display: false,
      }],
    yAxes: [
      {
        display: false,
      }],
  },
  elements: {
    line: {
      borderWidth: 2,
    },
  },
}

//End Mobile Chart

//Start Desktop Chart
const desktop = {
  labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN'],
  datasets: [
    {
      label: 'Conversion',
      backgroundColor: '#B3F6AA',
      borderColor: brandSuccess,
      data: [56, 34, 41, 66, 33, 29],
    },
  ],
};

const optionsDesktop = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        display: false,
      }],
    yAxes: [
      {
        display: false,
      }],
  },
  elements: {
    line: {
      borderWidth: 2,
    },
  },
}

const desktopMobile = {
  labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN'],
  datasets: [
    {
      label: 'Conversion',
      backgroundColor: '#B3F6AA',
      borderColor: brandSuccess,
      data: [78, 52, 43, 39, 23, 65],
    },
  ],
};

const optionsDesktopMobile = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        display: false,
      }],
    yAxes: [
      {
        display: false,
      }],
  },
  elements: {
    line: {
      borderWidth: 2,
    },
  },
}

const desktopDesktop = {
  labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN'],
  datasets: [
    {
      label: 'Conversion',
      backgroundColor: '#FDA1A1',
      borderColor: brandDanger,
      data: [36, 77, 42, 31, 29, 66],
    },
  ],
};

const optionsDesktopDesktop = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        display: false,
      }],
    yAxes: [
      {
        display: false,
      }],
  },
  elements: {
    line: {
      borderWidth: 2,
    },
  },
}

//End Desktop Chart

//Start Order Chart
const order = {
  labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN'],
  datasets: [
    {
      label: 'Order',
      backgroundColor: '#B3F6AA',
      borderColor: brandSuccess,
      data: [44, 80, 67, 54, 43, 39],
    },
  ],
};

const optionsOrder = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        display: false,
      }],
    yAxes: [
      {
        display: false,
      }],
  },
  elements: {
    line: {
      borderWidth: 2,
    },
  },
}

const orderMobile = {
  labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN'],
  datasets: [
    {
      label: 'Order',
      backgroundColor: '#B3F6AA',
      borderColor: brandSuccess,
      data: [40, 33, 69, 54, 24, 35],
    },
  ],
};

const optionsOrderMobile = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        display: false,
      }],
    yAxes: [
      {
        display: false,
      }],
  },
  elements: {
    line: {
      borderWidth: 2,
    },
  },
}

const orderDesktop = {
  labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN'],
  datasets: [
    {
      label: 'Order',
      backgroundColor: '#B3F6AA',
      borderColor: brandSuccess,
      data: [35, 46, 65, 71, 76, 50],
    },
  ],
};

const optionsOrderDesktop = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        display: false,
      }],
    yAxes: [
      {
        display: false,
      }],
  },
  elements: {
    line: {
      borderWidth: 2,
    },
  },
}
//End Order Chart

//Start Revenue Chart
const revenue = {
  labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN'],
  datasets: [
    {
      label: 'Revenue',
      backgroundColor: '#B3F6AA',
      borderColor: brandSuccess,
      data: [23, 44, 65, 29, 36, 51],
    },
  ],
};

const optionsRevenue = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        display: false,
      }],
    yAxes: [
      {
        display: false,
      }],
  },
  elements: {
    line: {
      borderWidth: 2,
    },
  },
}

const revenueMobile = {
  labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN'],
  datasets: [
    {
      label: 'Revenue',
      backgroundColor: '#B3F6AA',
      borderColor: brandSuccess,
      data: [22, 41, 30, 52, 69, 72],
    },
  ],
};

const optionsRevenueMobile = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        display: false,
      }],
    yAxes: [
      {
        display: false,
      }],
  },
  elements: {
    line: {
      borderWidth: 2,
    },
  },
}

const revenueDesktop = {
  labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN'],
  datasets: [
    {
      label: 'Revenue',
      backgroundColor: '#FDA1A1',
      borderColor: brandDanger,
      data: [39, 44, 21, 38, 66, 76],
    },
  ],
};

const optionsRevenueDesktop = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        display: false,
      }],
    yAxes: [
      {
        display: false,
      }],
  },
  elements: {
    line: {
      borderWidth: 2,
    },
  },
}

const monthNames = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"
];

const d = new Date();



class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      overall: 1
    };
  }

  overallBtnClick = (overall) => {
    this.setState({
      overall: overall
    })
  }

  
  loading = () => <div className="animated fadeIn pt-1 text-center align-center justify-center">Joosworks...</div>
 
  render() {
    return (
      
      <div className="animated fadeIn">
        <h2 className="text-center display-4"> {monthNames[d.getMonth()]} Monthly Projection</h2>
        <br />
        <div>
          <h2 className="text-center display-4">Revenue</h2>
          <br/>
            <h5 className="text-center">Total Revenue(₹): <span>1,24,000</span></h5>
            <p className="text-center">(Jan 19 - Jun 19)</p>
        </div>
       <Projection />
        {/* <Row className="insight p-3"> */}
        {/* Users */}
        {/* <Col xs="12" sm="6" lg="2">
          <Card className="transparent">
                <ButtonGroup vertical>
                <Button color="primary" onClick={() => this.overallBtnClick(1)} active={this.state.overall === 1}>
                  Overall
                </Button>
                <Button color="primary" onClick={() => this.overallBtnClick(2)} active={this.state.overall === 2}>
                  Mobile
                </Button>
                <Button color="primary" onClick={() => this.overallBtnClick(3)} active={this.state.overall === 3}>
                  Desktop
                </Button>
                </ButtonGroup>
          </Card> 
        </Col>            */}
      
        {/* Users */}
        {/* <Col xs="12" sm="6" lg="2">
            <Card className="cards">
              <CardBody className="pb-0">
                <div className="text-center">
                  Users
                </div>
                <h1 className="text-center">
                  {this.state.overall === 1 ? <h1>2390</h1> : null}
                  {this.state.overall === 2 ? <h1>4390</h1> : null}
                  {this.state.overall === 3 ? <h1>3390</h1> : null}
                </h1>
                <div className="text-center growth">
                  {this.state.overall === 1 ? <div><i className="fas fa-caret-up"></i> 7%</div> : null}
                </div> 
                <div className="text-center growth">
                  {this.state.overall === 2 ? <div><i className="fas fa-caret-up"></i> 4%</div> : null}
                </div> 
                <div className="text-center growth">
                  {this.state.overall === 3 ? <div><i className="fas fa-caret-up"></i> 8%</div> : null}
                </div>   
                  
              </CardBody>
              <div className="chart-wrapper" style={{ height: '70px' }}>
                {this.state.overall === 1 ? <Line data={overall} options={optionsOverall} height={70} /> : null}
                {this.state.overall === 2 ? <Line data={overallMobile} options={optionsOverallMobile} height={70} /> : null}
                {this.state.overall === 3 ? <Line data={overallDesktop} options={optionsOverallDesktop} height={70} /> : null}
              </div>
            </Card>
          </Col> */}

          {/* New Users */}
          {/* <Col xs="12" sm="6" lg="2">
            <Card className="cards">
              <CardBody className="pb-0">
                <div className="text-center">
                  New Users
                </div>
                <h1 className="text-center">
                  {this.state.overall === 1 ? <h1>4580</h1> : null}
                  {this.state.overall === 2 ? <h1>5560</h1> : null}
                  {this.state.overall === 3 ? <h1>2356</h1> : null}
                </h1>
                <div className="text-center growth">
                  {this.state.overall === 1 ? <div><i className="fas fa-caret-up"></i> 9%</div> : null}
                </div> 
                <div className="text-center growth">
                  {this.state.overall === 2 ? <div><i className="fas fa-caret-up"></i> 5%</div> : null}
                </div> 
                <div className="text-center growth">
                  {this.state.overall === 3 ? <div><i className="fas fa-caret-up"></i> 2%</div> : null}
                </div>   
                  
              </CardBody>
              <div className="chart-wrapper" style={{ height: '70px' }}>
                {this.state.overall === 1 ? <Line data={mobile} options={optionsOverall} height={70} /> : null}
                {this.state.overall === 2 ? <Line data={mobileMobile} options={optionsOverallMobile} height={70} /> : null}
                {this.state.overall === 3 ? <Line data={mobileDesktop} options={optionsOverallDesktop} height={70} /> : null}
              </div>
            </Card>
          </Col> */}

        {/* Conversion */}
        {/* <Col xs="12" sm="6" lg="2">
            <Card className="cards">
              <CardBody className="pb-0">
                <div className="text-center">
                  Coversion
                </div>
                <h1 className="text-center">
                  {this.state.overall === 1 ? <h1>9390</h1> : null}
                  {this.state.overall === 2 ? <h1>4390</h1> : null}
                  {this.state.overall === 3 ? <h1>3390</h1> : null}
                </h1>
                <div className="text-center growth">
                  {this.state.overall === 1 ? <div><i className="fas fa-caret-up"></i> 11%</div> : null}
                </div> 
                <div className="text-center growth">
                  {this.state.overall === 2 ? <div><i className="fas fa-caret-up"></i> 8%</div> : null}
                </div> 
                <div className="text-center down">
                  {this.state.overall === 3 ? <div><i className="fas fa-caret-down"></i> 3%</div> : null}
                </div>   
                  
              </CardBody>
              <div className="chart-wrapper" style={{ height: '70px' }}>
                {this.state.overall === 1 ? <Line data={desktop} options={optionsDesktop} height={70} /> : null}
                {this.state.overall === 2 ? <Line data={desktopMobile} options={optionsDesktopMobile} height={70} /> : null}
                {this.state.overall === 3 ? <Line data={desktopDesktop} options={optionsDesktopDesktop} height={70} /> : null}
              </div>
            </Card>
          </Col> */}

        {/* Order */}
        {/* <Col xs="12" sm="6" lg="2">
            <Card className="cards">
              <CardBody className="pb-0">
                <div className="text-center">
                  Order
                </div>
                <h1 className="text-center">
                  {this.state.overall === 1 ? <h1>7339</h1> : null}
                  {this.state.overall === 2 ? <h1>4390</h1> : null}
                  {this.state.overall === 3 ? <h1>3390</h1> : null}
                </h1>
                <div className="text-center growth">
                  {this.state.overall === 1 ? <div><i className="fas fa-caret-up"></i> 15%</div> : null}
                </div> 
                <div className="text-center growth">
                  {this.state.overall === 2 ? <div><i className="fas fa-caret-up"></i> 4%</div> : null}
                </div> 
                <div className="text-center growth">
                  {this.state.overall === 3 ? <div><i className="fas fa-caret-up"></i> 7%</div> : null}
                </div>   
                  
              </CardBody>
              <div className="chart-wrapper" style={{ height: '70px' }}>
                {this.state.overall === 1 ? <Line data={order} options={optionsOrder} height={70} /> : null}
                {this.state.overall === 2 ? <Line data={orderMobile} options={optionsOrderMobile} height={70} /> : null}
                {this.state.overall === 3 ? <Line data={orderDesktop} options={optionsOrderDesktop} height={70} /> : null}
              </div>
            </Card>
          </Col> */}

        {/* Revenue */}
        {/* <Col xs="12" sm="6" lg="2">
            <Card className="cards">
              <CardBody className="pb-0">
                <div className="text-center">
                  Revenue
                </div>
                <h1 className="text-center">
                  {this.state.overall === 1 ? <h1>5590</h1> : null}
                  {this.state.overall === 2 ? <h1>4390</h1> : null}
                  {this.state.overall === 3 ? <h1>3390</h1> : null}
                </h1>
                <div className="text-center growth">
                  {this.state.overall === 1 ? <div><i className="fas fa-caret-up"></i> 5%</div> : null}
                </div> 
                <div className="text-center growth">
                  {this.state.overall === 2 ? <div><i className="fas fa-caret-up"></i> 9%</div> : null}
                </div> 
                <div className="text-center down">
                  {this.state.overall === 3 ? <div><i className="fas fa-caret-down"></i> 2%</div> : null}
                </div>   
                  
              </CardBody>
              <div className="chart-wrapper" style={{ height: '70px' }}>
                {this.state.overall === 1 ? <Line data={revenue} options={optionsRevenue} height={70} /> : null}
                {this.state.overall === 2 ? <Line data={revenueMobile} options={optionsRevenueMobile} height={70} /> : null}
                {this.state.overall === 3 ? <Line data={revenueDesktop} options={optionsRevenueDesktop} height={70} /> : null}
              </div>
            </Card>
          </Col>
        </Row> */}
        <br />
        <br />
        
        
            {/* Insights */}
              {/* <div className="card">
                        <div className="card-header">
                          <h4 className="text-center display-4">Insights</h4>
                        </div>
                        <div className="card-body">
                          <ul>
                            <li>Continous good performance every week where growth is sustained at 7% overall this week</li>
                            <li>Registration also saw an increase of 83% overall as comapred to the projected line</li>
                            <li>Excellent week for registrations where channel rest, direct desktop, overall growth 
                            increased by 212%, 171% & 116% respectively i.e. more than 100% growth from the version rate increased by 71%.</li>
                            <li>This week Organic mobile saw a slight decrease in user (5%) but conversion rate increased by 71%.</li>
                            <li>Monthly outlook for Febuary user would be around 4,50,00 and registration would be around 50,000</li>
                            <li>With respect to May 50K per day strategy, with the current growth rate we are still short of additional 1 Million users to be added to our regular users.</li>
                            <li>For Users, in January we are going to be around 29% short with the current January Target of 10,00,000.</li>
                            <li>For registration, in January we are going to be around 34% short with the current January Target of 1,00,000.</li>
                            <li>Excellent week performance overall where conversion rate was highest in January for last week.</li>
                            <li>It seems like last week performance for State Change Urls dropped significantly where the trends in overall indicates otherwise.
                              Might be a technical issue, needto be looked into it.
                            </li>
                          </ul>
                    </div>
                </div>             */}
      </div>
    );
  }
}

export default Dashboard;
