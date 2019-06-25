import React, { Component, Fragment } from 'react';
import {
    Card,
    CardBody,
    CardHeader,
    Col,
    Row,
    Table,
    Button,
    ButtonGroup
  } from 'reactstrap';

class MonthlyTable extends Component {
  constructor(props){
    super(props);

    this.projectionChange = this.projectionChange.bind(this);
    this.metricChange = this.metricChange.bind(this);

    this.state = {
      projection: 1,
      metric: 1
    }    
  }

  projectionChange(projection){
    this.setState({
      projection: projection
    });
  }

  metricChange(metric){
    this.setState({
      metric: metric
    })
  }

    render() {
        return (
            <div>
                <br />
                <h4 className="display-4 text-center">Monthly Projection</h4>
                <br />
                
                <Row>
                <Col xs="12" sm="6" lg="2" className="p-3 transparent">
                <Card className="transparent">
                      {/* Projection Functionality */}
                      <ButtonGroup vertical>
                        <Button color="primary" onClick={() => this.projectionChange(1)} active={this.state.projection === 1}>
                          Overall
                        </Button>
                        <Button color="primary" onClick={() => this.projectionChange(2)} active={this.state.projection === 2}>
                          Mobile
                        </Button>
                        <Button color="primary" onClick={() => this.projectionChange(3)} active={this.state.projection === 3}>
                          Desktop
                        </Button>
                      </ButtonGroup>
                      <br />
                      {/* Metrics Functionality */}
                      <ButtonGroup vertical>
                      <Button color="primary" onClick={() => this.metricChange(1)} active={this.state.metric === 1}>
                        Users
                      </Button>
                      <Button color="primary" onClick={() => this.metricChange(2)} active={this.state.metric === 2}>
                        New Users
                      </Button>
                      <Button color="primary" onClick={() => this.metricChange(3)} active={this.state.metric === 3}>
                        Registration
                      </Button>
                      <Button color="primary" onClick={() => this.metricChange(4)} active={this.state.metric === 4}>
                        Order
                      </Button>
                      <Button color="primary" onClick={() => this.metricChange(5)} active={this.state.metric === 5}>
                        Revenue
                      </Button>
                      </ButtonGroup>
                </Card> 
              </Col>
              

                
                <Col md="10">
                  <br />
                  <Card>
                    <CardHeader>
                      {/*Users */}
                      {this.state.metric === 1 && this.state.projection === 1 ? <h4 className="text-center">Overall Users</h4>
                      : this.state.metric === 1 && this.state.projection === 2 ? <h4 className="text-center">Mobile Users</h4>
                      : this.state.metric === 1 && this.state.projection === 3 ? <h4 className="text-center">Desktop Users</h4>
                      : null
                      }

                      {/* New Users */}
                      {this.state.metric === 2 && this.state.projection === 1 ? <h4 className="text-center">Overall New Users</h4>
                        : this.state.metric === 2 && this.state.projection === 2 ? <h4 className="text-center">Mobile New Users</h4>
                        : this.state.metric === 2 && this.state.projection === 3 ? <h4 className="text-center">Desktop New Users</h4>
                        : null
                      }

                      {/* Registrations */}
                      {this.state.metric === 3 && this.state.projection === 1 ? <h4 className="text-center">Overall Registration</h4>
                        : this.state.metric === 3 && this.state.projection === 2 ? <h4 className="text-center">Mobile Registration</h4>
                        : this.state.metric === 3 && this.state.projection === 3 ? <h4 className="text-center">Desktop Registration</h4>
                        : null
                      }

                      {/* Order */}
                      {this.state.metric === 4 && this.state.projection === 1 ? <h4 className="text-center">Overall Order</h4>
                        : this.state.metric === 4 && this.state.projection === 2 ? <h4 className="text-center">Mobile Order</h4>
                        : this.state.metric === 4 && this.state.projection === 3 ? <h4 className="text-center">Desktop Order</h4>
                        : null
                      }

                      {/* Revenue */}
                      {this.state.metric === 5 && this.state.projection === 1 ? <h4 className="text-center">Overall Revenue</h4>
                        : this.state.metric === 5 && this.state.projection === 2 ? <h4 className="text-center">Mobile Revenue</h4>
                        : this.state.metric === 5 && this.state.projection === 3 ? <h4 className="text-center">Desktop Revenue</h4>
                        : null
                      }
                
                    </CardHeader>
                    <CardBody>
                        <Fragment>
                        <div className="table-responsive">
                        <Table className="table-hover table-bordered tablesorter">
                        <thead className="thead-light">
                        <tr>
                          <th className="text-center">Metrics</th>
                          <th className="text-center">Projection</th>
                          <th className="text-center">Monthly Projection Growth Rate</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                          <td className="text-center">Overall Traffic</td>
                            {/* Users */}
                            {this.state.projection === 1 && this.state.metric === 1 ? <td className="text-center">56953</td> : null}
                            {this.state.projection === 1 && this.state.metric === 1 ? <td className="growth text-center"><i className="fas fa-caret-up"></i> 14%</td> : null}
                            {this.state.projection === 2 && this.state.metric === 1 ? <td className="text-center">23553</td> : null}
                            {this.state.projection === 2 && this.state.metric === 1 ? <td className="down text-center"><i className="fas fa-caret-down"></i> 5%</td> : null}
                            {this.state.projection === 3 && this.state.metric === 1 ? <td className="text-center">63853</td> : null}
                            {this.state.projection === 3 && this.state.metric === 1 ? <td className="growth text-center"><i className="fas fa-caret-up"></i> 15%</td> : null}

                            {/* New Users */}
                            {this.state.projection === 1 && this.state.metric === 2 ? <td className="text-center">68391</td> : null}
                            {this.state.projection === 1 && this.state.metric === 2 ? <td className="growth text-center"><i className="fas fa-caret-up"></i> 14%</td> : null}
                            {this.state.projection === 2 && this.state.metric === 2 ? <td className="text-center">86621</td> : null}
                            {this.state.projection === 2 && this.state.metric === 2 ? <td className="down text-center"><i className="fas fa-caret-down"></i> 5%</td> : null}
                            {this.state.projection === 3 && this.state.metric === 2 ? <td className="text-center">44721</td> : null}
                            {this.state.projection === 3 && this.state.metric === 2 ? <td className="growth text-center"><i className="fas fa-caret-up"></i> 15%</td> : null}

                            {/* Registrations */}
                            {this.state.projection === 1 && this.state.metric === 3 ? <td className="text-center">95713</td> : null}
                            {this.state.projection === 1 && this.state.metric === 3 ? <td className="growth text-center"><i className="fas fa-caret-up"></i> 14%</td> : null}
                            {this.state.projection === 2 && this.state.metric === 3 ? <td className="text-center">56361</td> : null}
                            {this.state.projection === 2 && this.state.metric === 3 ? <td className="down text-center"><i className="fas fa-caret-down"></i> 5%</td> : null}
                            {this.state.projection === 3 && this.state.metric === 3 ? <td className="text-center">32513</td> : null}
                            {this.state.projection === 3 && this.state.metric === 3 ? <td className="growth text-center"><i className="fas fa-caret-up"></i> 15%</td> : null}

                            {/* Order */}
                            {this.state.projection === 1 && this.state.metric === 4 ? <td className="text-center">87517</td> : null}
                            {this.state.projection === 1 && this.state.metric === 4 ? <td className="growth text-center"><i className="fas fa-caret-up"></i> 14%</td> : null}
                            {this.state.projection === 2 && this.state.metric === 4 ? <td className="text-center">44123</td> : null}
                            {this.state.projection === 2 && this.state.metric === 4 ? <td className="down text-center"><i className="fas fa-caret-down"></i> 5%</td> : null}
                            {this.state.projection === 3 && this.state.metric === 4 ? <td className="text-center">54342</td> : null}
                            {this.state.projection === 3 && this.state.metric === 4 ? <td className="growth text-center"><i className="fas fa-caret-up"></i> 15%</td> : null}

                            {/* Revenue */}
                            {this.state.projection === 1 && this.state.metric === 5 ? <td className="text-center">87517</td> : null}
                            {this.state.projection === 1 && this.state.metric === 5 ? <td className="growth text-center"><i className="fas fa-caret-up"></i> 14%</td> : null}
                            {this.state.projection === 2 && this.state.metric === 5 ? <td className="text-center">44123</td> : null}
                            {this.state.projection === 2 && this.state.metric === 5 ? <td className="down text-center"><i className="fas fa-caret-down"></i> 5%</td> : null}
                            {this.state.projection === 3 && this.state.metric === 5 ? <td className="text-center">54342</td> : null}
                            {this.state.projection === 3 && this.state.metric === 5 ? <td className="growth text-center"><i className="fas fa-caret-up"></i> 15%</td> : null}
                        </tr>
                        <tr>
                          <td className="text-center">Organic Traffic</td>
                            {/* Users */}
                            {this.state.projection === 1 && this.state.metric === 1 ? <td className="text-center">56953</td> : null}
                            {this.state.projection === 1 && this.state.metric === 1 ? <td className="growth text-center"><i className="fas fa-caret-up"></i> 14%</td> : null}
                            {this.state.projection === 2 && this.state.metric === 1 ? <td className="text-center">23553</td> : null}
                            {this.state.projection === 2 && this.state.metric === 1 ? <td className="down text-center"><i className="fas fa-caret-down"></i> 5%</td> : null}
                            {this.state.projection === 3 && this.state.metric === 1 ? <td className="text-center">63853</td> : null}
                            {this.state.projection === 3 && this.state.metric === 1 ? <td className="growth text-center"><i className="fas fa-caret-up"></i> 15%</td> : null}

                            {/* New Users */}
                            {this.state.projection === 1 && this.state.metric === 2 ? <td className="text-center">68391</td> : null}
                            {this.state.projection === 1 && this.state.metric === 2 ? <td className="growth text-center"><i className="fas fa-caret-up"></i> 14%</td> : null}
                            {this.state.projection === 2 && this.state.metric === 2 ? <td className="text-center">86621</td> : null}
                            {this.state.projection === 2 && this.state.metric === 2 ? <td className="down text-center"><i className="fas fa-caret-down"></i> 5%</td> : null}
                            {this.state.projection === 3 && this.state.metric === 2 ? <td className="text-center">44721</td> : null}
                            {this.state.projection === 3 && this.state.metric === 2 ? <td className="growth text-center"><i className="fas fa-caret-up"></i> 15%</td> : null}

                            {/* Registrations */}
                            {this.state.projection === 1 && this.state.metric === 3 ? <td className="text-center">95713</td> : null}
                            {this.state.projection === 1 && this.state.metric === 3 ? <td className="growth text-center"><i className="fas fa-caret-up"></i> 14%</td> : null}
                            {this.state.projection === 2 && this.state.metric === 3 ? <td className="text-center">56361</td> : null}
                            {this.state.projection === 2 && this.state.metric === 3 ? <td className="down text-center"><i className="fas fa-caret-down"></i> 5%</td> : null}
                            {this.state.projection === 3 && this.state.metric === 3 ? <td className="text-center">32513</td> : null}
                            {this.state.projection === 3 && this.state.metric === 3 ? <td className="growth text-center"><i className="fas fa-caret-up"></i> 15%</td> : null}

                            {/* Order */}
                            {this.state.projection === 1 && this.state.metric === 4 ? <td className="text-center">87517</td> : null}
                            {this.state.projection === 1 && this.state.metric === 4 ? <td className="growth text-center"><i className="fas fa-caret-up"></i> 14%</td> : null}
                            {this.state.projection === 2 && this.state.metric === 4 ? <td className="text-center">44123</td> : null}
                            {this.state.projection === 2 && this.state.metric === 4 ? <td className="down text-center"><i className="fas fa-caret-down"></i> 5%</td> : null}
                            {this.state.projection === 3 && this.state.metric === 4 ? <td className="text-center">54342</td> : null}
                            {this.state.projection === 3 && this.state.metric === 4 ? <td className="growth text-center"><i className="fas fa-caret-up"></i> 15%</td> : null}

                            {/* Revenue */}
                            {this.state.projection === 1 && this.state.metric === 5 ? <td className="text-center">87517</td> : null}
                            {this.state.projection === 1 && this.state.metric === 5 ? <td className="growth text-center"><i className="fas fa-caret-up"></i> 14%</td> : null}
                            {this.state.projection === 2 && this.state.metric === 5 ? <td className="text-center">44123</td> : null}
                            {this.state.projection === 2 && this.state.metric === 5 ? <td className="down text-center"><i className="fas fa-caret-down"></i> 5%</td> : null}
                            {this.state.projection === 3 && this.state.metric === 5 ? <td className="text-center">54342</td> : null}
                            {this.state.projection === 3 && this.state.metric === 5 ? <td className="growth text-center"><i className="fas fa-caret-up"></i> 15%</td> : null}
                        </tr>
                        <tr>
                          <td className="text-center">Direct Traffic</td>
                            {/* Users */}
                            {this.state.projection === 1 && this.state.metric === 1 ? <td className="text-center">56953</td> : null}
                            {this.state.projection === 1 && this.state.metric === 1 ? <td className="growth text-center"><i className="fas fa-caret-up"></i> 14%</td> : null}
                            {this.state.projection === 2 && this.state.metric === 1 ? <td className="text-center">23553</td> : null}
                            {this.state.projection === 2 && this.state.metric === 1 ? <td className="down text-center"><i className="fas fa-caret-down"></i> 5%</td> : null}
                            {this.state.projection === 3 && this.state.metric === 1 ? <td className="text-center">63853</td> : null}
                            {this.state.projection === 3 && this.state.metric === 1 ? <td className="growth text-center"><i className="fas fa-caret-up"></i> 15%</td> : null}

                            {/* New Users */}
                            {this.state.projection === 1 && this.state.metric === 2 ? <td className="text-center">68391</td> : null}
                            {this.state.projection === 1 && this.state.metric === 2 ? <td className="growth text-center"><i className="fas fa-caret-up"></i> 14%</td> : null}
                            {this.state.projection === 2 && this.state.metric === 2 ? <td className="text-center">86621</td> : null}
                            {this.state.projection === 2 && this.state.metric === 2 ? <td className="down text-center"><i className="fas fa-caret-down"></i> 5%</td> : null}
                            {this.state.projection === 3 && this.state.metric === 2 ? <td className="text-center">44721</td> : null}
                            {this.state.projection === 3 && this.state.metric === 2 ? <td className="growth text-center"><i className="fas fa-caret-up"></i> 15%</td> : null}

                            {/* Registrations */}
                            {this.state.projection === 1 && this.state.metric === 3 ? <td className="text-center">95713</td> : null}
                            {this.state.projection === 1 && this.state.metric === 3 ? <td className="growth text-center"><i className="fas fa-caret-up"></i> 14%</td> : null}
                            {this.state.projection === 2 && this.state.metric === 3 ? <td className="text-center">56361</td> : null}
                            {this.state.projection === 2 && this.state.metric === 3 ? <td className="down text-center"><i className="fas fa-caret-down"></i> 5%</td> : null}
                            {this.state.projection === 3 && this.state.metric === 3 ? <td className="text-center">32513</td> : null}
                            {this.state.projection === 3 && this.state.metric === 3 ? <td className="growth text-center"><i className="fas fa-caret-up"></i> 15%</td> : null}

                            {/* Order */}
                            {this.state.projection === 1 && this.state.metric === 4 ? <td className="text-center">87517</td> : null}
                            {this.state.projection === 1 && this.state.metric === 4 ? <td className="growth text-center"><i className="fas fa-caret-up"></i> 14%</td> : null}
                            {this.state.projection === 2 && this.state.metric === 4 ? <td className="text-center">44123</td> : null}
                            {this.state.projection === 2 && this.state.metric === 4 ? <td className="down text-center"><i className="fas fa-caret-down"></i> 5%</td> : null}
                            {this.state.projection === 3 && this.state.metric === 4 ? <td className="text-center">54342</td> : null}
                            {this.state.projection === 3 && this.state.metric === 4 ? <td className="growth text-center"><i className="fas fa-caret-up"></i> 15%</td> : null}

                            {/* Revenue */}
                            {this.state.projection === 1 && this.state.metric === 5 ? <td className="text-center">87517</td> : null}
                            {this.state.projection === 1 && this.state.metric === 5 ? <td className="growth text-center"><i className="fas fa-caret-up"></i> 14%</td> : null}
                            {this.state.projection === 2 && this.state.metric === 5 ? <td className="text-center">44123</td> : null}
                            {this.state.projection === 2 && this.state.metric === 5 ? <td className="down text-center"><i className="fas fa-caret-down"></i> 5%</td> : null}
                            {this.state.projection === 3 && this.state.metric === 5 ? <td className="text-center">54342</td> : null}
                            {this.state.projection === 3 && this.state.metric === 5 ? <td className="growth text-center"><i className="fas fa-caret-up"></i> 15%</td> : null}
                        </tr>
                        </tbody>
                      </Table>
                      </div>
                      </Fragment>
                    </CardBody>
                  </Card>
                </Col>
        
                  {/* Desktop */}
                {/* <Col md="4">
                  <Card>
                    <CardHeader>
                    <h4 className="text-center">Desktop</h4>
                    </CardHeader>
                    <CardBody>
                          <Table className="table-hover table-bordered table-responsive tablesorter">
                        <thead className="thead-light">
                        <tr>
                          <th className="text-center">Metrics</th>
                          <th className="text-center">Projection</th>
                          <th className="text-center">Monthly Projection Growth Rate</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                          <td className="text-center">Overall Desktop</td>
                            {this.state.projection === 1 ? <td className="text-center">25733</td> : null}
                            {this.state.projection === 1 ? <td className="down text-center"><i className="fas fa-caret-up"></i> -4%</td> : null}
                            {this.state.projection === 2 ? <td className="text-center">1014</td> : null}
                            {this.state.projection === 2 ? <td className="growth text-center"><i className="fas fa-caret-up"></i> 116%</td> : null}
                        </tr>
                        <tr>
                          <td className="text-center">Organic Traffic</td>
                            {this.state.projection === 1 ? <td className="text-center">15189</td> : null}
                            {this.state.projection === 1 ? <td className="growth text-center"><i className="fas fa-caret-up"></i> 5%</td> : null}
                            {this.state.projection === 2 ? <td className="text-center">673</td> : null}
                            {this.state.projection === 2 ? <td className="growth text-center"><i className="fas fa-caret-up"></i> 31%</td> : null}
                        </tr>
                        <tr>
                          <td className="text-center">Direct Traffic</td>
                            {this.state.projection === 1 ? <td className="text-center">2757</td> : null}
                            {this.state.projection === 1 ? <td className="growth text-center"><i className="fas fa-caret-up"></i> 27%</td> : null}
                            {this.state.projection === 2 ? <td className="text-center">214</td> : null}
                            {this.state.projection === 2 ? <td className="growth text-center"><i className="fas fa-caret-up"></i> 171%</td> : null}
                        </tr>
                        </tbody>
                      </Table>
                    </CardBody>
                  </Card>
                </Col> */}
                </Row>
            </div>
        );
    }
}

export default MonthlyTable;