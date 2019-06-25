import React, {Component} from 'react'; 
import { Bar, Pie, Line } from 'react-chartjs-2';
import {
  Button,
  ButtonGroup,
  ButtonToolbar,
  Card,
  CardBody,
  CardHeader,
  Table,
  CardFooter,
  CardTitle,
  Col,
  Row,
} from 'reactstrap';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';


//By Stores
const stores = {
  labels: [
    'Myntra',
    'Paytm',
    'Amazon',
    'Flipkart'
  ],
  datasets: [
    {
      data: [96, 12, 32, 24],
      backgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56',
        '#FFCC00',
      ],
      hoverBackgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56',
        '#FFCC00',
      ],
    }],
};


const storesOpts = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips,
    intersect: true,
    mode: 'index',
    position: 'nearest',
    labels: {
      render: 'label'
    },
    callbacks: {
      labelColor: function(tooltipItem, chart) {
        return { backgroundColor: chart.data.datasets[tooltipItem.datasetIndex].borderColor }
      }
    }
  },
  maintainAspectRatio: true,
  legend: {
    display: false,
  },
};


//By Category
const categories = {
  labels: [
    'Myntra',
    'Paytm',
    'Amazon',
    'Flipkart'
  ],
  datasets: [
    {
      data: [96, 12, 32, 24],
      backgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56',
        '#FFCC00',
      ],
      hoverBackgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56',
        '#FFCC00',
      ],
    }],
};


const categoriesOpts = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips,
    intersect: true,
    mode: 'index',
    position: 'nearest',
    labels: {
      render: 'label'
    },
    callbacks: {
      labelColor: function(tooltipItem, chart) {
        return { backgroundColor: chart.data.datasets[tooltipItem.datasetIndex].borderColor }
      }
    }
  },
  maintainAspectRatio: true,
  legend: {
    display: false,
  },
};


//By Order
const orders = {
  labels: [
    'Myntra',
    'Paytm',
    'Amazon',
    'Flipkart'
  ],
  datasets: [
    {
      data: [96, 12, 32, 24],
      backgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56',
        '#FFCC00',
      ],
      hoverBackgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56',
        '#FFCC00',
      ],
    }],
};


const orderOpts = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips,
    intersect: true,
    mode: 'index',
    position: 'nearest',
    callbacks: {
      labelColor: function(tooltipItem, chart) {
        return { backgroundColor: chart.data.datasets[tooltipItem.datasetIndex].borderColor }
      }
    }
  },
  maintainAspectRatio: true,
  legend: {
    display: false,
  },
};



//Understocking
const Understocking = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [
    {
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [65, 59, 80, 81, 56, 55, 40],
    },
  ],
};

const UnderstockingOpts = {
  responsive: true,
      scales: {
        xAxes: [ {
          display: true,
          scaleLabel: {
            display: true,
            labelString: 'Week'
          },
        } 
      ],
        yAxes: [ {
          display: true,
          scaleLabel: {
            display: true,
            labelString: 'Revenue(₹)'
          }
        } 
      ]
    },
    legend: false
}



class Projection extends Component {
    constructor(props) {
        super(props);
    
        this.onAcqData = this.onAcqData.bind(this);
        this.monweek = this.monweek.bind(this);

        this.state = {
          acqData: 1,
          monweek: 1
        };
      }
    
      //Graph function
      onAcqData(acqData) {
          this.setState({
            acqData: acqData
          });
      }

      //Monthly Function
      monweek(monweek){
        this.setState({
          monweek: monweek
        })
      }

    render() {
        return (
            <div>
                <br />
                {/* <Row className="justify-content-center p-2">
                    <Col xs="12" sm="6" md="2" className="text-center p-2">
                    <Button 
                      block color="dark" 
                      onClick={() => this.onAcqData(1)} active={this.state.acqData === 1}>Monthly
                    </Button>
                    </Col>
                    <Col xs="12" sm="6" md="2" className="text-center p-2">
                    <Button block color="dark" onClick={() => this.onAcqData(2)} active={this.state.acqData === 2}>Weekly</Button>
                    </Col>
                </Row> */}   

                    <Row className="justify-content-center">
                      <Card className="m-4">
                        <CardHeader className="text-center">
                          By Stores
                        </CardHeader>
                        <CardBody>
                          <div className="chart-wrapper" height={50}>
                            <Pie data={stores} options={storesOpts}/>
                          </div>
                        </CardBody>
                        <br /> 
                        <Col>
                        <Table responsive bordered>
                          <thead>
                          <tr>
                            <th className="text-center">Store</th>
                            <th className="text-center">Revenue</th>
                          </tr>
                          </thead>
                          <tbody>
                          <tr>
                            <td className="text-center">Mytnra</td>
                            <td className="text-center">48000</td>
                          </tr>
                          <tr>
                            <td className="text-center">Amazon</td>
                            <td className="text-center">34000</td>
                          </tr>
                          <tr>
                            <td className="text-center">Flipkart</td>
                            <td className="text-center">22000</td>
                          </tr>
                          <tr>
                            <td className="text-center">Paytm</td>
                            <td className="text-center">45000</td>
                          </tr>
                          </tbody>
                        </Table>
                        </Col>
                        </Card>
                      

                      
                      <Card className="m-4">
                        <CardHeader className="text-center">
                          By Category
                        </CardHeader>
                        <CardBody>
                          <div className="chart-wrapper" height={50}>
                            <Pie data={categories} options={categoriesOpts}/>
                          </div>
                        </CardBody>
                        <Col>
                        <Table responsive bordered>
                          <thead>
                          <tr>
                            <th className="text-center">Store</th>
                            <th className="text-center">Revenue</th>
                          </tr>
                          </thead>
                          <tbody>
                          <tr>
                            <td className="text-center">Mytnra</td>
                            <td className="text-center">48000</td>
                          </tr>
                          <tr>
                            <td className="text-center">Amazon</td>
                            <td className="text-center">34000</td>
                          </tr>
                          <tr>
                            <td className="text-center">Flipkart</td>
                            <td className="text-center">22000</td>
                          </tr>
                          <tr>
                            <td className="text-center">Paytm</td>
                            <td className="text-center">45000</td>
                          </tr>
                          </tbody>
                        </Table>
                        </Col> 
                        </Card>
                      

                      
                      <Card className="m-4">
                        <CardHeader className="text-center">
                          By Order
                        </CardHeader>
                        <CardBody>
                          <div className="chart-wrapper" height={50}>
                            <Pie data={orders} options={orderOpts}/>
                          </div>
                        </CardBody> 
                        <Col>
                        <Table responsive bordered>
                          <thead>
                          <tr>
                            <th className="text-center">Store</th>
                            <th className="text-center">Revenue</th>
                          </tr>
                          </thead>
                          <tbody>
                          <tr>
                            <td className="text-center">Mytnra</td>
                            <td className="text-center">48000</td>
                          </tr>
                          <tr>
                            <td className="text-center">Amazon</td>
                            <td className="text-center">34000</td>
                          </tr>
                          <tr>
                            <td className="text-center">Flipkart</td>
                            <td className="text-center">22000</td>
                          </tr>
                          <tr>
                            <td className="text-center">Paytm</td>
                            <td className="text-center">45000</td>
                          </tr>
                          </tbody>
                        </Table>
                        </Col>
                        </Card>
                      
                     </Row>

                     <br />
                     <br />
                      <hr />
                      <br />



                      {/* Yoghurt Advantage */}
                      <Card>
                        <br />
                     <h2 className="text-center display-4">Yoghurt Advantage</h2>
                     <p className="text-center">(Last 6 months)</p>
                      <br />
                     <Row className="justify-content-center">
                         <Button className="m-2" color="dark">All Stores</Button>
                         <Button className="m-2" color="dark">Amazon</Button>
                         <Button className="m-2" color="dark">Flipkart</Button>
                         <Button className="m-2" color="dark">Paytm</Button>
                         <Button className="m-2" color="dark">Myntra</Button>
                     </Row>
                      <br />
                      <br />
                     <h5 className="text-center">Total Revenue(₹): <span>1,24,000</span></h5>
                      <br />

                      <Row className="justify-content-center">
                      <Col className="text-center" xs="12" lg="6">
                        <CardHeader>
                          Additional Revenue from Yoghurt
                        </CardHeader>
                        <Table responsive bordered>
                          <tbody>
                          <tr>
                            <td className="text-center">21000</td>
                            <td className="text-center">8%</td>
                          </tr>
                          </tbody>
                        </Table>
                      </Col>
                      </Row>

                      <br />


                      <Row className="justify-content-center">
                      <Card className="m-4">
                        <CardHeader className="text-center">
                          Understocking
                        </CardHeader>
                        <CardBody>
                          <div className="chart-wrapper" height={50}>
                            <Line data={Understocking} options={UnderstockingOpts}/>
                          </div>
                        </CardBody> 
                        <Col className="text-center">
                        <CardHeader>
                          Additional Revenue from Yoghurt
                        </CardHeader>
                        <Table responsive bordered>
                          <tbody>
                          <tr>
                            <td className="text-center">12000</td>
                            <td className="text-center">5%</td>
                          </tr>
                          </tbody>
                        </Table>
                        </Col>
                        </Card>
                     
                      <Card className="m-4">
                        <CardHeader className="text-center">
                          Overstocking
                        </CardHeader>
                        <CardBody>
                          <div className="chart-wrapper" height={50}>
                          <Line data={Understocking} options={UnderstockingOpts}/>
                          </div>
                        </CardBody> 
                        <Col className="text-center">
                        <CardHeader>
                          Additional Revenue from Yoghurt
                        </CardHeader>
                        <Table responsive bordered>
                          <tbody>
                          <tr>
                            <td className="text-center">9000</td>
                            <td className="text-center">3%</td>
                          </tr>
                          </tbody>
                        </Table>
                        </Col>
                        </Card>
                      </Row>
                      </Card>



                      <br />
                     <br />
                      <hr />
                      <br />

                      {/* Revenue */}
                      <Card>
                        <br />
                     <h2 className="text-center display-4">Revenue Forecast</h2>
                     <p className="text-center">(Last 5 months)</p>
                      <br />
                     <Row className="justify-content-center">
                         <Button className="m-2" color="dark">All Stores</Button>
                         <Button className="m-2" color="dark">Amazon</Button>
                         <Button className="m-2" color="dark">Flipkart</Button>
                         <Button className="m-2" color="dark">Paytm</Button>
                         <Button className="m-2" color="dark">Myntra</Button>
                     </Row>
                      <br />
                      <br />
                      <Row className="justify-content-center">
                      <div className="chart-wrapper" style={{ height: 300, width: 500 }}>
                          <Bar data={Understocking} options={UnderstockingOpts}/>
                        </div>
                        </Row>
                      <br />


                      <Row className="p-3">
                      <Col xs="12" sm="6" lg="4">
                          <Card className="text-white bg-info">
                            <CardBody className="pb-0">
                              <div className="text-center text-value">Next 7 Days</div>
                              <div className="text-center">(03 - 09 July)</div>
                            </CardBody>
                            <br />
                              <div className="text-center">
                                <h2>55,000</h2>
                              </div>
                              <br />
                              <div className="text-center">
                                <h4>Range</h4>
                                <p>45,000 - 65,000</p>
                              </div>
                          </Card>
                        </Col>

                        <Col xs="12" sm="6" lg="4">
                          <Card className="text-white bg-info">
                            <CardBody className="pb-0">
                              <div className="text-center text-value">Next 7 Days</div>
                              <div className="text-center">(03 - 09 July)</div>
                            </CardBody>
                            <br />
                              <div className="text-center">
                                <h2>55,000</h2>
                              </div>
                              <br />
                              <div className="text-center">
                                <h4>Range</h4>
                                <p>45,000 - 65,000</p>
                              </div>
                          </Card>
                        </Col>

                        <Col xs="12" sm="6" lg="4">
                          <Card className="text-white bg-info">
                            <CardBody className="pb-0">
                              <div className="text-center text-value">Next 7 Days</div>
                              <div className="text-center">(03 - 09 July)</div>
                            </CardBody>
                            <br />
                              <div className="text-center">
                                <h2>55,000</h2>
                              </div>
                              <br />
                              <div className="text-center">
                                <h4>Range</h4>
                                <p>45,000 - 65,000</p>
                              </div>
                          </Card>
                        </Col>
                        </Row>

                      </Card>



                      
                    

                {/* <CardFooter>
                    <Row className="text-center">
                    <Col sm={12} md className="mb-sm-2 mb-0">
                        <div className="text-muted">Monthly Projection</div>
                        {this.state.acqData === 1 && this.state.monweek === 1 ? <strong>2,45,000</strong>
                          : this.state.acqData === 2 && this.state.monweek === 1 ? <strong>1,34,000</strong>
                          : null
                        }
                        {this.state.acqData === 1 && this.state.monweek === 2 ? <strong>4,45,000</strong>
                          : this.state.acqData === 2 && this.state.monweek === 2 ? <strong>67,000</strong>
                          : null
                        }
                        {this.state.acqData === 1 && this.state.monweek === 3 ? <strong>1,80,000</strong>
                          : this.state.acqData === 2 && this.state.monweek === 3 ? <strong>59,000</strong>
                          : null
                        }
                    </Col>
                    <Col sm={12} md className="mb-sm-2 mb-0">
                        <div className="text-muted">Projected Growth Rate</div>
                        {this.state.acqData === 1 && this.state.monweek === 1 ? <strong>9%</strong>
                          : this.state.acqData === 2 && this.state.monweek === 1 ? <strong>7%</strong>
                          : null
                        }
                        {this.state.acqData === 1 && this.state.monweek === 2 ? <strong>10%</strong>
                          : this.state.acqData === 2 && this.state.monweek === 2 ? <strong>17%</strong>
                          : null
                        }
                        {this.state.acqData === 1 && this.state.monweek === 3 ? <strong>5%</strong>
                          : this.state.acqData === 2 && this.state.monweek === 3 ? <strong>12%</strong>
                          : null
                        }
                    </Col>
                    <Col sm={12} md className="mb-sm-2 mb-0">
                        <div className="text-muted">Weightage</div>
                        {this.state.acqData === 1 && this.state.monweek === 1 ? <strong>19%</strong>
                          : this.state.acqData === 2 && this.state.monweek === 1 ? <strong>27%</strong>
                          : null
                        }
                        {this.state.acqData === 1 && this.state.monweek === 2 ? <strong>39%</strong>
                          : this.state.acqData === 2 && this.state.monweek === 2 ? <strong>47%</strong>
                          : null
                        }
                        {this.state.acqData === 1 && this.state.monweek === 3 ? <strong>29%</strong>
                          : this.state.acqData === 2 && this.state.monweek === 3 ? <strong>33%</strong>
                          : null
                        }
                    </Col>
                    </Row>
                </CardFooter> */}
            </div>
        );
    }
}

export default Projection;