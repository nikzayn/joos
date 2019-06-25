import React, { Component } from 'react';
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

class WeeklyTable extends Component {
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
                <h4 className="display-4 text-center">Weekly Projection</h4>
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
                        <div className="table-responsive">
                        <Table className="table-hover table-bordered tablesorter">
                        <thead className="thead-light">
                        <tr>
                          <th className="text-center">Metrics</th>
                          <th className="text-center">Projection</th>
                          <th className="text-center">Accuracy</th>
                          <th className="text-center">Impact</th>
                          <th className="text-center">Monthly Projection Growth Rate</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                          <td className="text-center">Overall Traffic</td>
                            {/* Users */}
                            {this.state.projection === 1 && this.state.metric === 1 ? <td className="text-center">56953</td> : null}
                            {this.state.projection === 1 && this.state.metric === 1 ? <td className="text-center">90%</td> : null}
                            {this.state.projection === 1 && this.state.metric === 1 ? <td className="growth text-center"><i className="fas fa-caret-up"></i> 14%</td> : null}
                            {this.state.projection === 1 && this.state.metric === 1 ? <td className="growth text-center"><i className="fas fa-caret-up"></i> 7%</td> : null}

                            {this.state.projection === 2 && this.state.metric === 1 ? <td className="text-center">23553</td> : null}
                            {this.state.projection === 2 && this.state.metric === 1 ? <td className="text-center">93%</td> : null}
                            {this.state.projection === 2 && this.state.metric === 1 ? <td className="growth text-center"><i className="fas fa-caret-up"></i> 10%</td> : null}
                            {this.state.projection === 2 && this.state.metric === 1 ? <td className="growth text-center"><i className="fas fa-caret-up"></i> 7%</td> : null}

                            {this.state.projection === 3 && this.state.metric === 1 ? <td className="text-center">25893</td> : null}
                            {this.state.projection === 3 && this.state.metric === 1 ? <td className="text-center">93%</td> : null}
                            {this.state.projection === 3 && this.state.metric === 1 ? <td className="growth text-center"><i className="fas fa-caret-up"></i> 11%</td> : null}
                            {this.state.projection === 3 && this.state.metric === 1 ? <td className="growth text-center"><i className="fas fa-caret-up"></i> 7%</td> : null}

                            {/* New Users */}
                            {this.state.projection === 1 && this.state.metric === 2 ? <td className="text-center">56953</td> : null}
                            {this.state.projection === 1 && this.state.metric === 2 ? <td className="text-center">90%</td> : null}
                            {this.state.projection === 1 && this.state.metric === 2 ? <td className="growth text-center"><i className="fas fa-caret-up"></i> 14%</td> : null}
                            {this.state.projection === 1 && this.state.metric === 2 ? <td className="growth text-center"><i className="fas fa-caret-up"></i> 7%</td> : null}

                            {this.state.projection === 2 && this.state.metric === 2 ? <td className="text-center">23553</td> : null}
                            {this.state.projection === 2 && this.state.metric === 2 ? <td className="text-center">93%</td> : null}
                            {this.state.projection === 2 && this.state.metric === 2 ? <td className="growth text-center"><i className="fas fa-caret-up"></i> 10%</td> : null}
                            {this.state.projection === 2 && this.state.metric === 2 ? <td className="growth text-center"><i className="fas fa-caret-up"></i> 7%</td> : null}

                            {this.state.projection === 3 && this.state.metric === 2 ? <td className="text-center">25893</td> : null}
                            {this.state.projection === 3 && this.state.metric === 2 ? <td className="text-center">93%</td> : null}
                            {this.state.projection === 3 && this.state.metric === 2 ? <td className="growth text-center"><i className="fas fa-caret-up"></i> 11%</td> : null}
                            {this.state.projection === 3 && this.state.metric === 2 ? <td className="growth text-center"><i className="fas fa-caret-up"></i> 7%</td> : null}

                            {/* Registrations */}
                            {this.state.projection === 1 && this.state.metric === 3 ? <td className="text-center">56953</td> : null}
                            {this.state.projection === 1 && this.state.metric === 3 ? <td className="text-center">90%</td> : null}
                            {this.state.projection === 1 && this.state.metric === 3 ? <td className="growth text-center"><i className="fas fa-caret-up"></i> 14%</td> : null}
                            {this.state.projection === 1 && this.state.metric === 3 ? <td className="growth text-center"><i className="fas fa-caret-up"></i> 7%</td> : null}

                            {this.state.projection === 2 && this.state.metric === 3 ? <td className="text-center">23553</td> : null}
                            {this.state.projection === 2 && this.state.metric === 3 ? <td className="text-center">93%</td> : null}
                            {this.state.projection === 2 && this.state.metric === 3 ? <td className="growth text-center"><i className="fas fa-caret-up"></i> 10%</td> : null}
                            {this.state.projection === 2 && this.state.metric === 3 ? <td className="growth text-center"><i className="fas fa-caret-up"></i> 7%</td> : null}

                            {this.state.projection === 3 && this.state.metric === 3 ? <td className="text-center">25893</td> : null}
                            {this.state.projection === 3 && this.state.metric === 3 ? <td className="text-center">93%</td> : null}
                            {this.state.projection === 3 && this.state.metric === 3 ? <td className="growth text-center"><i className="fas fa-caret-up"></i> 11%</td> : null}
                            {this.state.projection === 3 && this.state.metric === 3 ? <td className="growth text-center"><i className="fas fa-caret-up"></i> 7%</td> : null}

                            {/* Order */}
                            {this.state.projection === 1 && this.state.metric === 4 ? <td className="text-center">56953</td> : null}
                            {this.state.projection === 1 && this.state.metric === 4 ? <td className="text-center">90%</td> : null}
                            {this.state.projection === 1 && this.state.metric === 4 ? <td className="growth text-center"><i className="fas fa-caret-up"></i> 14%</td> : null}
                            {this.state.projection === 1 && this.state.metric === 4 ? <td className="growth text-center"><i className="fas fa-caret-up"></i> 7%</td> : null}

                            {this.state.projection === 2 && this.state.metric === 4 ? <td className="text-center">23553</td> : null}
                            {this.state.projection === 2 && this.state.metric === 4 ? <td className="text-center">93%</td> : null}
                            {this.state.projection === 2 && this.state.metric === 4 ? <td className="growth text-center"><i className="fas fa-caret-up"></i> 10%</td> : null}
                            {this.state.projection === 2 && this.state.metric === 4 ? <td className="growth text-center"><i className="fas fa-caret-up"></i> 7%</td> : null}

                            {this.state.projection === 3 && this.state.metric === 4 ? <td className="text-center">25893</td> : null}
                            {this.state.projection === 3 && this.state.metric === 4 ? <td className="text-center">93%</td> : null}
                            {this.state.projection === 3 && this.state.metric === 4 ? <td className="growth text-center"><i className="fas fa-caret-up"></i> 11%</td> : null}
                            {this.state.projection === 3 && this.state.metric === 4 ? <td className="growth text-center"><i className="fas fa-caret-up"></i> 7%</td> : null}

                            {/* Revenue */}
                            {this.state.projection === 1 && this.state.metric === 5 ? <td className="text-center">56953</td> : null}
                            {this.state.projection === 1 && this.state.metric === 5 ? <td className="text-center">90%</td> : null}
                            {this.state.projection === 1 && this.state.metric === 5 ? <td className="growth text-center"><i className="fas fa-caret-up"></i> 14%</td> : null}
                            {this.state.projection === 1 && this.state.metric === 5 ? <td className="growth text-center"><i className="fas fa-caret-up"></i> 7%</td> : null}

                            {this.state.projection === 2 && this.state.metric === 5 ? <td className="text-center">23553</td> : null}
                            {this.state.projection === 2 && this.state.metric === 5 ? <td className="text-center">93%</td> : null}
                            {this.state.projection === 2 && this.state.metric === 5 ? <td className="growth text-center"><i className="fas fa-caret-up"></i> 10%</td> : null}
                            {this.state.projection === 2 && this.state.metric === 5 ? <td className="growth text-center"><i className="fas fa-caret-up"></i> 7%</td> : null}

                            {this.state.projection === 3 && this.state.metric === 5 ? <td className="text-center">25893</td> : null}
                            {this.state.projection === 3 && this.state.metric === 5 ? <td className="text-center">93%</td> : null}
                            {this.state.projection === 3 && this.state.metric === 5 ? <td className="growth text-center"><i className="fas fa-caret-up"></i> 11%</td> : null}
                            {this.state.projection === 3 && this.state.metric === 5 ? <td className="growth text-center"><i className="fas fa-caret-up"></i> 7%</td> : null}
                        </tr>

                        <tr>
                          <td className="text-center">Organic Traffic</td>
                            {/* Users */}
                            {this.state.projection === 1 && this.state.metric === 1 ? <td className="text-center">56953</td> : null}
                            {this.state.projection === 1 && this.state.metric === 1 ? <td className="text-center">90%</td> : null}
                            {this.state.projection === 1 && this.state.metric === 1 ? <td className="growth text-center"><i className="fas fa-caret-up"></i> 14%</td> : null}
                            {this.state.projection === 1 && this.state.metric === 1 ? <td className="growth text-center"><i className="fas fa-caret-up"></i> 7%</td> : null}

                            {this.state.projection === 2 && this.state.metric === 1 ? <td className="text-center">23553</td> : null}
                            {this.state.projection === 2 && this.state.metric === 1 ? <td className="text-center">93%</td> : null}
                            {this.state.projection === 2 && this.state.metric === 1 ? <td className="growth text-center"><i className="fas fa-caret-up"></i> 10%</td> : null}
                            {this.state.projection === 2 && this.state.metric === 1 ? <td className="growth text-center"><i className="fas fa-caret-up"></i> 7%</td> : null}

                            {this.state.projection === 3 && this.state.metric === 1 ? <td className="text-center">25893</td> : null}
                            {this.state.projection === 3 && this.state.metric === 1 ? <td className="text-center">93%</td> : null}
                            {this.state.projection === 3 && this.state.metric === 1 ? <td className="growth text-center"><i className="fas fa-caret-up"></i> 11%</td> : null}
                            {this.state.projection === 3 && this.state.metric === 1 ? <td className="growth text-center"><i className="fas fa-caret-up"></i> 7%</td> : null}

                            {/* New Users */}
                            {this.state.projection === 1 && this.state.metric === 2 ? <td className="text-center">56953</td> : null}
                            {this.state.projection === 1 && this.state.metric === 2 ? <td className="text-center">90%</td> : null}
                            {this.state.projection === 1 && this.state.metric === 2 ? <td className="growth text-center"><i className="fas fa-caret-up"></i> 14%</td> : null}
                            {this.state.projection === 1 && this.state.metric === 2 ? <td className="growth text-center"><i className="fas fa-caret-up"></i> 7%</td> : null}

                            {this.state.projection === 2 && this.state.metric === 2 ? <td className="text-center">23553</td> : null}
                            {this.state.projection === 2 && this.state.metric === 2 ? <td className="text-center">93%</td> : null}
                            {this.state.projection === 2 && this.state.metric === 2 ? <td className="growth text-center"><i className="fas fa-caret-up"></i> 10%</td> : null}
                            {this.state.projection === 2 && this.state.metric === 2 ? <td className="growth text-center"><i className="fas fa-caret-up"></i> 7%</td> : null}

                            {this.state.projection === 3 && this.state.metric === 2 ? <td className="text-center">25893</td> : null}
                            {this.state.projection === 3 && this.state.metric === 2 ? <td className="text-center">93%</td> : null}
                            {this.state.projection === 3 && this.state.metric === 2 ? <td className="growth text-center"><i className="fas fa-caret-up"></i> 11%</td> : null}
                            {this.state.projection === 3 && this.state.metric === 2 ? <td className="growth text-center"><i className="fas fa-caret-up"></i> 7%</td> : null}

                            {/* Registrations */}
                            {this.state.projection === 1 && this.state.metric === 3 ? <td className="text-center">56953</td> : null}
                            {this.state.projection === 1 && this.state.metric === 3 ? <td className="text-center">90%</td> : null}
                            {this.state.projection === 1 && this.state.metric === 3 ? <td className="growth text-center"><i className="fas fa-caret-up"></i> 14%</td> : null}
                            {this.state.projection === 1 && this.state.metric === 3 ? <td className="growth text-center"><i className="fas fa-caret-up"></i> 7%</td> : null}

                            {this.state.projection === 2 && this.state.metric === 3 ? <td className="text-center">23553</td> : null}
                            {this.state.projection === 2 && this.state.metric === 3 ? <td className="text-center">93%</td> : null}
                            {this.state.projection === 2 && this.state.metric === 3 ? <td className="growth text-center"><i className="fas fa-caret-up"></i> 10%</td> : null}
                            {this.state.projection === 2 && this.state.metric === 3 ? <td className="growth text-center"><i className="fas fa-caret-up"></i> 7%</td> : null}

                            {this.state.projection === 3 && this.state.metric === 3 ? <td className="text-center">25893</td> : null}
                            {this.state.projection === 3 && this.state.metric === 3 ? <td className="text-center">93%</td> : null}
                            {this.state.projection === 3 && this.state.metric === 3 ? <td className="growth text-center"><i className="fas fa-caret-up"></i> 11%</td> : null}
                            {this.state.projection === 3 && this.state.metric === 3 ? <td className="growth text-center"><i className="fas fa-caret-up"></i> 7%</td> : null}

                            {/* Order */}
                            {this.state.projection === 1 && this.state.metric === 4 ? <td className="text-center">56953</td> : null}
                            {this.state.projection === 1 && this.state.metric === 4 ? <td className="text-center">90%</td> : null}
                            {this.state.projection === 1 && this.state.metric === 4 ? <td className="growth text-center"><i className="fas fa-caret-up"></i> 14%</td> : null}
                            {this.state.projection === 1 && this.state.metric === 4 ? <td className="growth text-center"><i className="fas fa-caret-up"></i> 7%</td> : null}

                            {this.state.projection === 2 && this.state.metric === 4 ? <td className="text-center">23553</td> : null}
                            {this.state.projection === 2 && this.state.metric === 4 ? <td className="text-center">93%</td> : null}
                            {this.state.projection === 2 && this.state.metric === 4 ? <td className="growth text-center"><i className="fas fa-caret-up"></i> 10%</td> : null}
                            {this.state.projection === 2 && this.state.metric === 4 ? <td className="growth text-center"><i className="fas fa-caret-up"></i> 7%</td> : null}

                            {this.state.projection === 3 && this.state.metric === 4 ? <td className="text-center">25893</td> : null}
                            {this.state.projection === 3 && this.state.metric === 4 ? <td className="text-center">93%</td> : null}
                            {this.state.projection === 3 && this.state.metric === 4 ? <td className="growth text-center"><i className="fas fa-caret-up"></i> 11%</td> : null}
                            {this.state.projection === 3 && this.state.metric === 4 ? <td className="growth text-center"><i className="fas fa-caret-up"></i> 7%</td> : null}

                            {/* Revenue */}
                            {this.state.projection === 1 && this.state.metric === 5 ? <td className="text-center">56953</td> : null}
                            {this.state.projection === 1 && this.state.metric === 5 ? <td className="text-center">90%</td> : null}
                            {this.state.projection === 1 && this.state.metric === 5 ? <td className="growth text-center"><i className="fas fa-caret-up"></i> 14%</td> : null}
                            {this.state.projection === 1 && this.state.metric === 5 ? <td className="growth text-center"><i className="fas fa-caret-up"></i> 7%</td> : null}

                            {this.state.projection === 2 && this.state.metric === 5 ? <td className="text-center">23553</td> : null}
                            {this.state.projection === 2 && this.state.metric === 5 ? <td className="text-center">93%</td> : null}
                            {this.state.projection === 2 && this.state.metric === 5 ? <td className="growth text-center"><i className="fas fa-caret-up"></i> 10%</td> : null}
                            {this.state.projection === 2 && this.state.metric === 5 ? <td className="growth text-center"><i className="fas fa-caret-up"></i> 7%</td> : null}

                            {this.state.projection === 3 && this.state.metric === 5 ? <td className="text-center">25893</td> : null}
                            {this.state.projection === 3 && this.state.metric === 5 ? <td className="text-center">93%</td> : null}
                            {this.state.projection === 3 && this.state.metric === 5 ? <td className="growth text-center"><i className="fas fa-caret-up"></i> 11%</td> : null}
                            {this.state.projection === 3 && this.state.metric === 5 ? <td className="growth text-center"><i className="fas fa-caret-up"></i> 7%</td> : null}
                        </tr>

                        <tr>
                          <td className="text-center">Direct Traffic</td>
                            {/* Users */}
                            {this.state.projection === 1 && this.state.metric === 1 ? <td className="text-center">56953</td> : null}
                            {this.state.projection === 1 && this.state.metric === 1 ? <td className="text-center">90%</td> : null}
                            {this.state.projection === 1 && this.state.metric === 1 ? <td className="growth text-center"><i className="fas fa-caret-up"></i> 14%</td> : null}
                            {this.state.projection === 1 && this.state.metric === 1 ? <td className="growth text-center"><i className="fas fa-caret-up"></i> 7%</td> : null}

                            {this.state.projection === 2 && this.state.metric === 1 ? <td className="text-center">23553</td> : null}
                            {this.state.projection === 2 && this.state.metric === 1 ? <td className="text-center">93%</td> : null}
                            {this.state.projection === 2 && this.state.metric === 1 ? <td className="growth text-center"><i className="fas fa-caret-up"></i> 10%</td> : null}
                            {this.state.projection === 2 && this.state.metric === 1 ? <td className="growth text-center"><i className="fas fa-caret-up"></i> 7%</td> : null}

                            {this.state.projection === 3 && this.state.metric === 1 ? <td className="text-center">25893</td> : null}
                            {this.state.projection === 3 && this.state.metric === 1 ? <td className="text-center">93%</td> : null}
                            {this.state.projection === 3 && this.state.metric === 1 ? <td className="growth text-center"><i className="fas fa-caret-up"></i> 11%</td> : null}
                            {this.state.projection === 3 && this.state.metric === 1 ? <td className="growth text-center"><i className="fas fa-caret-up"></i> 7%</td> : null}

                            {/* New Users */}
                            {this.state.projection === 1 && this.state.metric === 2 ? <td className="text-center">56953</td> : null}
                            {this.state.projection === 1 && this.state.metric === 2 ? <td className="text-center">90%</td> : null}
                            {this.state.projection === 1 && this.state.metric === 2 ? <td className="growth text-center"><i className="fas fa-caret-up"></i> 14%</td> : null}
                            {this.state.projection === 1 && this.state.metric === 2 ? <td className="growth text-center"><i className="fas fa-caret-up"></i> 7%</td> : null}

                            {this.state.projection === 2 && this.state.metric === 2 ? <td className="text-center">23553</td> : null}
                            {this.state.projection === 2 && this.state.metric === 2 ? <td className="text-center">93%</td> : null}
                            {this.state.projection === 2 && this.state.metric === 2 ? <td className="growth text-center"><i className="fas fa-caret-up"></i> 10%</td> : null}
                            {this.state.projection === 2 && this.state.metric === 2 ? <td className="growth text-center"><i className="fas fa-caret-up"></i> 7%</td> : null}

                            {this.state.projection === 3 && this.state.metric === 2 ? <td className="text-center">25893</td> : null}
                            {this.state.projection === 3 && this.state.metric === 2 ? <td className="text-center">93%</td> : null}
                            {this.state.projection === 3 && this.state.metric === 2 ? <td className="growth text-center"><i className="fas fa-caret-up"></i> 11%</td> : null}
                            {this.state.projection === 3 && this.state.metric === 2 ? <td className="growth text-center"><i className="fas fa-caret-up"></i> 7%</td> : null}

                            {/* Registrations */}
                            {this.state.projection === 1 && this.state.metric === 3 ? <td className="text-center">56953</td> : null}
                            {this.state.projection === 1 && this.state.metric === 3 ? <td className="text-center">90%</td> : null}
                            {this.state.projection === 1 && this.state.metric === 3 ? <td className="growth text-center"><i className="fas fa-caret-up"></i> 14%</td> : null}
                            {this.state.projection === 1 && this.state.metric === 3 ? <td className="growth text-center"><i className="fas fa-caret-up"></i> 7%</td> : null}

                            {this.state.projection === 2 && this.state.metric === 3 ? <td className="text-center">23553</td> : null}
                            {this.state.projection === 2 && this.state.metric === 3 ? <td className="text-center">93%</td> : null}
                            {this.state.projection === 2 && this.state.metric === 3 ? <td className="growth text-center"><i className="fas fa-caret-up"></i> 10%</td> : null}
                            {this.state.projection === 2 && this.state.metric === 3 ? <td className="growth text-center"><i className="fas fa-caret-up"></i> 7%</td> : null}

                            {this.state.projection === 3 && this.state.metric === 3 ? <td className="text-center">25893</td> : null}
                            {this.state.projection === 3 && this.state.metric === 3 ? <td className="text-center">93%</td> : null}
                            {this.state.projection === 3 && this.state.metric === 3 ? <td className="growth text-center"><i className="fas fa-caret-up"></i> 11%</td> : null}
                            {this.state.projection === 3 && this.state.metric === 3 ? <td className="growth text-center"><i className="fas fa-caret-up"></i> 7%</td> : null}

                            {/* Order */}
                            {this.state.projection === 1 && this.state.metric === 4 ? <td className="text-center">56953</td> : null}
                            {this.state.projection === 1 && this.state.metric === 4 ? <td className="text-center">90%</td> : null}
                            {this.state.projection === 1 && this.state.metric === 4 ? <td className="growth text-center"><i className="fas fa-caret-up"></i> 14%</td> : null}
                            {this.state.projection === 1 && this.state.metric === 4 ? <td className="growth text-center"><i className="fas fa-caret-up"></i> 7%</td> : null}

                            {this.state.projection === 2 && this.state.metric === 4 ? <td className="text-center">23553</td> : null}
                            {this.state.projection === 2 && this.state.metric === 4 ? <td className="text-center">93%</td> : null}
                            {this.state.projection === 2 && this.state.metric === 4 ? <td className="growth text-center"><i className="fas fa-caret-up"></i> 10%</td> : null}
                            {this.state.projection === 2 && this.state.metric === 4 ? <td className="growth text-center"><i className="fas fa-caret-up"></i> 7%</td> : null}

                            {this.state.projection === 3 && this.state.metric === 4 ? <td className="text-center">25893</td> : null}
                            {this.state.projection === 3 && this.state.metric === 4 ? <td className="text-center">93%</td> : null}
                            {this.state.projection === 3 && this.state.metric === 4 ? <td className="growth text-center"><i className="fas fa-caret-up"></i> 11%</td> : null}
                            {this.state.projection === 3 && this.state.metric === 4 ? <td className="growth text-center"><i className="fas fa-caret-up"></i> 7%</td> : null}

                            {/* Revenue */}
                            {this.state.projection === 1 && this.state.metric === 5 ? <td className="text-center">56953</td> : null}
                            {this.state.projection === 1 && this.state.metric === 5 ? <td className="text-center">90%</td> : null}
                            {this.state.projection === 1 && this.state.metric === 5 ? <td className="growth text-center"><i className="fas fa-caret-up"></i> 14%</td> : null}
                            {this.state.projection === 1 && this.state.metric === 5 ? <td className="growth text-center"><i className="fas fa-caret-up"></i> 7%</td> : null}

                            {this.state.projection === 2 && this.state.metric === 5 ? <td className="text-center">23553</td> : null}
                            {this.state.projection === 2 && this.state.metric === 5 ? <td className="text-center">93%</td> : null}
                            {this.state.projection === 2 && this.state.metric === 5 ? <td className="growth text-center"><i className="fas fa-caret-up"></i> 10%</td> : null}
                            {this.state.projection === 2 && this.state.metric === 5 ? <td className="growth text-center"><i className="fas fa-caret-up"></i> 7%</td> : null}

                            {this.state.projection === 3 && this.state.metric === 5 ? <td className="text-center">25893</td> : null}
                            {this.state.projection === 3 && this.state.metric === 5 ? <td className="text-center">93%</td> : null}
                            {this.state.projection === 3 && this.state.metric === 5 ? <td className="growth text-center"><i className="fas fa-caret-up"></i> 11%</td> : null}
                            {this.state.projection === 3 && this.state.metric === 5 ? <td className="growth text-center"><i className="fas fa-caret-up"></i> 7%</td> : null}
                        </tr>    
                        </tbody>
                      </Table>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
        
                  -
                </Row>
            </div>
        );
    }
}

export default WeeklyTable;