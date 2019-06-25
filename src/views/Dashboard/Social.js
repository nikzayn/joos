import React, { Component } from 'react';

import axios from 'axios';

import OrganicOverallMonthlyUsersChart from './Charts/Organic/Users/OverallMonthly/OrganicOverallMonthlyUsersChart';
import OrganicOverallMonthlyNewUsersChart from './Charts/Organic/Users/OverallMonthly/OrganicOverallMonthlyNewUsersChart';

import OrganicOverallMonthlyChart from './Charts/Organic/OrganicOverallMonthlyChart';
import OrganicOverallWeeklyChart from './Charts/Organic/OrganicOverallWeeklyChart';

import OrganicMobileMonthlyChart from './Charts/Organic/OrganicMobileMonthlyChart';
import OrganicMobileWeeklyChart from './Charts/Organic/OrganicMobileWeeklyChart';

import OrganicDesktopMonthlyChart from './Charts/Organic/OrganicDesktopMonthlyChart';
import OrganicDesktopWeeklyChart from './Charts/Organic/OrganicDesktopWeeklyChart';


import Loading from './Loading'; 
import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  Col,
  Collapse,
  Row
} from 'reactstrap';

const styles = ({
  up: {
    color: '#42DF2A'
  },
  down: {
    color: '#FDA1A1'
  },

})


class Social extends Component {
    constructor(props) {
        super(props);
    
        this.overallBtnClick = this.overallBtnClick.bind(this);
        this.toggleBtnClick = this.toggleBtnClick.bind(this);
        this.monweek = this.monweek.bind(this);
    
        this.state = {
          overall: 1,
          monweek: 1,
          collapse: true,
          //Overall Monthly
          organicOverallMonthlyUsersLabels: [],
          organicOverallMonthlyUsersData: [],

          //Mobile Monthly
          organicMobileMonthlyData: [],
          organicMobileMonthlyLabels: [],

          //Desktop Monthly
          organicDesktopMonthlyData: [],
          organicDesktopMonthlyLabels: [],

          //Overall Weekly
          organicDesktopWeeklyData: [],
          organicDesktopWeeklyLabels: [],

          //Mobile Weekly
          organicMobileWeeklyData: [],
          organicMobileWeeklyLabels: [],

          //Desktop Weekly
          organicDesktopWeeklyData: [],
          organicDesktopWeeklyLabels: [],


          // //metrics
          // //Overall Monthly
          // metricsUsersOverallMon,
          // metricsNewUsersOverallMon,
          // metricsConversionOverallMon,
          // metricsRevenueOverallMon,

          // //Overall Weekly
          // metricsUsersOverallWeek,
          // metricsNewUsersOverallWeek,
          // metricsConversionOverallWeek,
          // metricsRevenueOverallWeek,

          // //Mobile Monthly
          // metricsUsersMobileMon,
          // metricsNewUsersMobileMon,
          // metricsConversionMobileMon,
          // metricsRevenueMobileMon,

          // //Mobile Weekly
          // metricsUsersMobileWeek,
          // metricsNewUsersMobileWeek,
          // metricsConversionMobileWeek,
          // metricsRevenueMobileWeek,

          // //Desktop Monthly
          // metricsUsersDesktopMon,
          // metricsNewUsersDesktopMon,
          // metricsConversionDesktopMon,
          // metricsRevenueDesktopMon,

          // //Desktop Weekly
          // metricsUsersDesktopWeek,
          // metricsNewUsersDesktopWeek,
          // metricsConversionDesktopWeek,
          // metricsRevenueDesktopWeek,

          loading: true,

          
        };
      }

      componentDidMount(){
        //Overall Monthly
        this.organicOverallMonthlyUsersChart();
        // this.organicOverallMonthlyNewUsersChart();
        
        //Mobile Monthly
        this.organicMobileMonthlyUsersChart();

        //Desktop Monthly
        this.organicDesktopMonthlyChart();

        //Overall Weekly
        this.organicOverallWeeklyUsersChart();

        // Mobile Weekly
        this.organicMobileWeeklyChart();

        //Desktop Weekly
        this.organicDesktopWeeklyChart();
      }


      //// Organic Overall Monthly // //

      // Organic Overall Monthly Users Chart
      organicOverallMonthlyUsersChart = () => {
        Date.prototype.formatMMDDYYYY = function() {
          return (
            this.getMonth() + 1 + "/" + this.getDate() + "/" + this.getFullYear()
          );
        };
    
        axios
          .get(
            "https://cors-anywhere.herokuapp.com/https://r900b03jwg.execute-api.ap-southeast-1.amazonaws.com/production/api"
          )
          .then(results => {
            // Split timestamp and data into separate arrays
            const organicOverallMonthlyUsersLabels = [];
            const organicOverallMonthlyUsersData = [];
            results.data.forEach(packet => {
              organicOverallMonthlyUsersLabels.push(new Date(packet.updated).formatMMDDYYYY());
              organicOverallMonthlyUsersData.push(parseFloat(packet.month5));
              organicOverallMonthlyUsersData.push(parseFloat(packet.month4));
            })
            
            this.setState({ 
              organicOverallMonthlyUsersData,   
              organicOverallMonthlyUsersLabels,
              loading: false,
              
              //Metrics
              metricsUsersOverallMon: results.data[0].metrics,
              metricsNewUsersOverallMon: results.data[1].metrics,
              metricsConversionOverallMon: results.data[2].metrics,
              metricsOrderOverallMon: results.data[3].metrics,
              metricsRevenueOverallMon: results.data[4].metrics,

              //Up and Down Monthly Overall
              projectionUsersOverallMon: results.data[0].month0,
              projectionNewUsersOverallMon: results.data[1].month0,
              projectionConversionOverallMon: results.data[2].month0,
              projectionOrderOverallMon: results.data[3].month0,
              projectionRevenueOverallMon: results.data[4].month0,

              //Users Monthly Overall
              classNameUsersOverallMonthly: results.data[0].projectiongrowthrate,
              classNameNewUsersOverallMonthly: results.data[1].projectiongrowthrate,
              classNameConversionOverallMonthly: results.data[2].projectiongrowthrate,
              classNameOrderOverallMonthly: results.data[3].projectiongrowthrate,
              classNameRevenueOverallMonthly: results.data[4].projectiongrowthrate,

              //Projection Monthly Overall
              projectionUsersOverallMonthly: results.data[0].projectiongrowthrate,
              projectionNewUsersOverallMonthly: results.data[1].projectiongrowthrate,
              projectionConversionOverallMonthly: results.data[2].projectiongrowthrate,
              projectionOrderOverallMonthly: results.data[3].projectiongrowthrate,
              projectionRevenueOverallMonthly: results.data[4].projectiongrowthrate,

            });
          }) 
          
                              
          .catch(error => {
            console.log(error);
          });
      }


      // // Organic Overall Monthly New Users Chart
      // organicOverallMonthlyNewUsersChart = () => {  
      //   Date.prototype.formatMMDDYYYY = function() {
      //     return (
      //       this.getMonth() + 1 + "/" + this.getDate() + "/" + this.getFullYear()
      //     );
      //   };
    
      //   axios
      //     .get(
      //       "https://cors-anywhere.herokuapp.com/https://r900b03jwg.execute-api.ap-southeast-1.amazonaws.com/production/api"
      //     )
      //     .then(results => {
      //       // Split timestamp and data into separate arrays
      //       const organicOverallMonthlyNewUsersLabels = [];
      //       const organicOverallMonthlyNewUsersData = [];
      //       results.data.forEach(packet => {
      //         organicOverallMonthlyNewUsersLabels.push(new Date(packet.updated).formatMMDDYYYY());
      //         organicOverallMonthlyNewUsersData.push(parseFloat(packet.month5));
      //         organicOverallMonthlyNewUsersData.push(parseFloat(packet.month4));
      //         organicOverallMonthlyNewUsersData.push(parseFloat(packet.month3));
      //         organicOverallMonthlyNewUsersData.push(parseFloat(packet.month2));
      //         organicOverallMonthlyNewUsersData.push(parseFloat(packet.month1));
      //       })
            
      //       this.setState({ 
      //         organicOverallMonthlyNewUsersData,   
      //         organicOverallMonthlyNewUsersLabels,
      //         loading: false,
              
      //         //Metrics 
      //         metricsNewUsersOverallMon: results.data[1].metrics,

      //         //Up and Down Monthly Overall
      //         projectionUsersOverallMon: results.data[0].month0,
      //         projectionNewUsersOverallMon: results.data[1].month0,
      //         projectionConversionOverallMon: results.data[2].month0,
      //         projectionOrderOverallMon: results.data[3].month0,
      //         projectionRevenueOverallMon: results.data[4].month0,

      //         //Users Monthly Overall
      //         classNameUsersOverallMonthly: results.data[0].projectiongrowthrate,
      //         classNameNewUsersOverallMonthly: results.data[1].projectiongrowthrate,
      //         classNameConversionOverallMonthly: results.data[2].projectiongrowthrate,
      //         classNameOrderOverallMonthly: results.data[3].projectiongrowthrate,
      //         classNameRevenueOverallMonthly: results.data[4].projectiongrowthrate,

      //         //Projection Monthly Overall
      //         projectionUsersOverallMonthly: results.data[0].projectiongrowthrate,
      //         projectionNewUsersOverallMonthly: results.data[1].projectiongrowthrate,
      //         projectionConversionOverallMonthly: results.data[2].projectiongrowthrate,
      //         projectionOrderOverallMonthly: results.data[3].projectiongrowthrate,
      //         projectionRevenueOverallMonthly: results.data[4].projectiongrowthrate,

      //       });
      //     }) 
                              
      //     .catch(error => {
      //       console.log(error);
      //     });
           
      // }



      //Organic Overall Weekly Users Chart
      organicOverallWeeklyUsersChart = () => {
        Date.prototype.formatMMDDYYYY = function() {
          return (
            this.getMonth() + 1 + "/" + this.getDate() + "/" + this.getFullYear()
          );
        };
    
        axios
          .get(
            "https://cors-anywhere.herokuapp.com/https://dtbkfidi5j.execute-api.ap-southeast-1.amazonaws.com/organicoverallweekly/api"
          )
          .then(results => {
            // Split timestamp and data into separate arrays
            const organicOverallWeeklyUsersLabels = [];
            const organicOverallWeeklyUsersData = [];
            results.data.forEach(packet => {
              organicOverallWeeklyUsersLabels.push(new Date(packet.updated).formatMMDDYYYY());
              organicOverallWeeklyUsersData.push(parseFloat(packet.month0));
            })
            
            this.setState({ 
              organicOverallWeeklyUsersData,   
              organicOverallWeeklyUsersLabels,
              loading: false,

              //metrics
              metricsUsersOverallWeek: results.data[0].metrics,
              metricsNewUsersOverallWeek: results.data[1].metrics,
              metricsConversionOverallWeek: results.data[2].metrics,
              metricsOrderOverallWeek: results.data[3].metrics,
              metricsRevenueOverallWeek: results.data[4].metrics,

              //Up and Down Weekly Overall
              projectionUsersOverallWeek: results.data[0].month5,
              projectionNewUsersOverallWeek: results.data[1].month5,
              projectionConversionOverallWeek: results.data[2].month5,
              projectionOrderOverallWeek: results.data[3].month5,
              projectionRevenueOverallWeek: results.data[4].month5,

              //Users Weekly Overall
              classNameUsersOverallWeekly: results.data[0].projectiongrowthrate,
              classNameNewUsersOverallWeekly: results.data[1].projectiongrowthrate,
              classNameConversionOverallWeekly: results.data[2].projectiongrowthrate,
              classNameOrderOverallWeekly: results.data[3].projectiongrowthrate,
              classNameRevenueOverallWeekly: results.data[4].projectiongrowthrate,

              //Projection Weekly Overall
              projectionUsersOverallWeekly: results.data[0].projectiongrowthrate,
              projectionNewUsersOverallWeekly: results.data[1].projectiongrowthrate,
              projectionConversionOverallWeekly: results.data[2].projectiongrowthrate,
              projectionOrderOverallWeekly: results.data[3].projectiongrowthrate,
              projectionRevenueOverallWeekly: results.data[4].projectiongrowthrate,

            });
            
          }) 

                              
          .catch(error => {
            console.log(error);
          });
      }


      //Organic Mobile Monthly Users Chart
      organicMobileMonthlyUsersChart = () => {
        Date.prototype.formatMMDDYYYY = function() {
          return (
            this.getMonth() + 1 + "/" + this.getDate() + "/" + this.getFullYear()
          );
        };
    
        axios
          .get(
            "https://cors-anywhere.herokuapp.com/https://oe4frfmqyk.execute-api.ap-southeast-1.amazonaws.com/organicmobilemonthly/api"
          )
          .then(results => {
            // Split timestamp and data into separate arrays
            const organicMobileMonthlyUsersLabels = [];
            const organicMobileMonthlyUsersData = [];
            results.data.forEach(packet => {
              organicMobileMonthlyUsersLabels.push(new Date(packet.updated).formatMMDDYYYY());
              organicMobileMonthlyUsersData.push(parseFloat(packet.month0));
            })
            
            this.setState({ 
              organicMobileMonthlyUsersLabels,   
              organicMobileMonthlyUsersData,
              loading: false,

              //metrics
              metricsUsersMobileMon: results.data[0].metrics,
              metricsNewUsersMobileMon: results.data[1].metrics,
              metricsConversionMobileMon: results.data[2].metrics,
              metricsOrderMobileMon: results.data[3].metrics,
              metricsRevenueMobileMon: results.data[4].metrics,

              //Up and Down Monthly Mobile
              projectionUsersMobileMon: results.data[0].month5,
              projectionNewUsersMobileMon: results.data[1].month5,
              projectionConversionMobileMon: results.data[2].month5,
              projectionOrderMobileMon: results.data[3].month5,
              projectionRevenueMobileMon: results.data[4].month5,

              //Users Monthly Mobile
              classNameUsersMobileMonthly: results.data[0].projectiongrowthrate,
              classNameNewUsersMobileMonthly: results.data[1].projectiongrowthrate,
              classNameConversionMobileMonthly: results.data[2].projectiongrowthrate,
              classNameOrderMobileMonthly: results.data[3].projectiongrowthrate,
              classNameRevenueMobileMonthly: results.data[4].projectiongrowthrate,

              //Projection Monthly Mobile
              projectionUsersMobileMonthly: results.data[0].projectiongrowthrate,
              projectionNewUsersMobileMonthly: results.data[1].projectiongrowthrate,
              projectionConversionMobileMonthly: results.data[2].projectiongrowthrate,
              projectionOrderMobileMonthly: results.data[3].projectiongrowthrate,
              projectionRevenueMobileMonthly: results.data[4].projectiongrowthrate

            });
            
          }) 
                              
          .catch(error => {
            console.log(error);
          });
      }


      //Organic Mobile Weekly Chart
      organicMobileWeeklyChart = () => {
        Date.prototype.formatMMDDYYYY = function() {
          return (
            this.getMonth() + 1 + "/" + this.getDate() + "/" + this.getFullYear()
          );
        };
    
        axios
          .get(
            "https://cors-anywhere.herokuapp.com/https://7cwr9egvp2.execute-api.ap-southeast-1.amazonaws.com/organicmobileweekly/api"
          )
          .then(results => {
            // Split timestamp and data into separate arrays
            const organicMobileWeeklyLabels = [];
            const organicMobileWeeklyData = [];
            results.data.forEach(packet => {
              organicMobileWeeklyLabels.push(new Date(packet.updated).formatMMDDYYYY());
              organicMobileWeeklyData.push(parseFloat(packet.month0));
            })
            
            this.setState({ 
              organicMobileWeeklyLabels,   
              organicMobileWeeklyData,
              loading: false,

              //metrics
              metricsUsersMobileWeek: results.data[0].metrics,
              metricsNewUsersMobileWeek: results.data[1].metrics,
              metricsConversionMobileWeek: results.data[2].metrics,
              metricsOrderMobileWeek: results.data[3].metrics,
              metricsRevenueMobileWeek: results.data[4].metrics,

              //Up and Down Weekly Mobile
              projectionUsersMobileWeek: results.data[0].month5,
              projectionNewUsersMobileWeek: results.data[1].month5,
              projectionConversionMobileWeek: results.data[2].month5,
              projectionOrderMobileWeek: results.data[3].month5,
              projectionRevenueMobileWeek: results.data[4].month5,

              //Users Weekly Mobile
              classNameUsersMobileWeekly: results.data[0].projectiongrowthrate,
              classNameNewUsersMobileWeekly: results.data[1].projectiongrowthrate,
              classNameConversionMobileWeekly: results.data[2].projectiongrowthrate,
              classNameOrderMobileWeekly: results.data[3].projectiongrowthrate,
              classNameRevenueMobileWeekly: results.data[4].projectiongrowthrate,

              //Projection Weekly Mobile
              projectionUsersMobileWeekly: results.data[0].projectiongrowthrate,
              projectionNewUsersMobileWeekly: results.data[1].projectiongrowthrate,
              projectionConversionMobileWeekly: results.data[2].projectiongrowthrate,
              projectionOrderMobileWeekly: results.data[3].projectiongrowthrate,
              projectionRevenueMobileWeekly: results.data[4].projectiongrowthrate

            });
            
          }) 
                              
          .catch(error => {
            console.log(error);
          });
      }


      //Organic Desktop Monthly Chart
      organicDesktopMonthlyChart = () => {
        Date.prototype.formatMMDDYYYY = function() {
          return (
            this.getMonth() + 1 + "/" + this.getDate() + "/" + this.getFullYear()
          );
        };
    
        axios
          .get(
            "https://cors-anywhere.herokuapp.com/https://nuns65o1e6.execute-api.ap-southeast-1.amazonaws.com/organicdesktopmonthly/api"
          )
          .then(results => {
            // Split timestamp and data into separate arrays
            const organicDesktopMonthlyLabels = [];
            const organicDesktopMonthlyData = [];
            results.data.forEach(packet => {
              organicDesktopMonthlyLabels.push(new Date(packet.updated).formatMMDDYYYY());
              organicDesktopMonthlyData.push(parseFloat(packet.month0));
            })
            
            this.setState({ 
              organicDesktopMonthlyLabels,   
              organicDesktopMonthlyData,
              loading: false,

              //metrics
              metricsUsersDesktopMon: results.data[0].metrics,
              metricsNewUsersDesktopMon: results.data[1].metrics,
              metricsConversionDesktopMon: results.data[2].metrics,
              metricsOrderDesktopMon: results.data[3].metrics,
              metricsRevenueDesktopMon: results.data[4].metrics,

              //Up and Down Monthly Desktop
              projectionUsersDesktopMon: results.data[0].month5,
              projectionNewUsersDesktopMon: results.data[1].month5,
              projectionConversionDesktopMon: results.data[2].month5,
              projectionOrderDesktopMon: results.data[3].month5,
              projectionRevenueDesktopMon: results.data[4].month5,

              //Users Monthly Desktop
              classNameUsersDesktopMonthly: results.data[0].projectiongrowthrate,
              classNameNewUsersDesktopMonthly: results.data[1].projectiongrowthrate,
              classNameConversionDesktopMonthly: results.data[2].projectiongrowthrate,
              classNameOrderDesktopMonthly: results.data[3].projectiongrowthrate,
              classNameRevenueDesktopMonthly: results.data[4].projectiongrowthrate,

              //Projection Monthly Desktop
              projectionUsersDesktopMonthly: results.data[0].projectiongrowthrate,
              projectionNewUsersDesktopMonthly: results.data[1].projectiongrowthrate,
              projectionConversionDesktopMonthly: results.data[2].projectiongrowthrate,
              projectionOrderDesktopMonthly: results.data[3].projectiongrowthrate,
              projectionRevenueDesktopMonthly: results.data[4].projectiongrowthrate

            });
            
          }) 
                              
          .catch(error => {
            console.log(error);
          });
      }


      //Organic Desktop Weekly Chart
      organicDesktopWeeklyChart = () => {
        Date.prototype.formatMMDDYYYY = function() {
          return (
            this.getMonth() + 1 + "/" + this.getDate() + "/" + this.getFullYear()
          );
        };
    
        axios
          .get(
            "https://cors-anywhere.herokuapp.com/https://2ih6slj0w8.execute-api.ap-southeast-1.amazonaws.com/organicdesktopweekly/api"
          )
          .then(results => {
            // Split timestamp and data into separate arrays
            const organicDesktopWeeklyLabels = [];
            const organicDesktopWeeklyData = [];
            results.data.forEach(packet => {
              organicDesktopWeeklyLabels.push(new Date(packet.updated).formatMMDDYYYY());
              organicDesktopWeeklyData.push(parseFloat(packet.month0));
            })
            
            this.setState({ 
              organicDesktopWeeklyLabels,   
              organicDesktopWeeklyData,
              loading: false,

              //metrics
              metricsUsersDesktopWeek: results.data[0].metrics,
              metricsNewUsersDesktopWeek: results.data[1].metrics,
              metricsConversionDesktopWeek: results.data[2].metrics,
              metricsOrderDesktopWeek: results.data[3].metrics,
              metricsRevenueDesktopWeek: results.data[4].metrics,

              //Up and Down Weekly Desktop
              projectionUsersDesktopWeek: results.data[0].month5,
              projectionNewUsersDesktopWeek: results.data[1].month5,
              projectionConversionDesktopWeek: results.data[2].month5,
              projectionOrderDesktopWeek: results.data[3].month5,
              projectionRevenueDesktopWeek: results.data[4].month5,

              //Users Weekly Desktop
              classNameUsersDesktopWeekly: results.data[0].projectiongrowthrate,
              classNameNewUsersDesktopWeekly: results.data[1].projectiongrowthrate,
              classNameConversionDesktopWeekly: results.data[2].projectiongrowthrate,
              classNameOrderDesktopWeekly: results.data[3].projectiongrowthrate,
              classNameRevenueDesktopWeekly: results.data[4].projectiongrowthrate,

              //Projection Weekly Desktop
              projectionUsersDesktopWeekly: results.data[0].projectiongrowthrate,
              projectionNewUsersDesktopWeekly: results.data[1].projectiongrowthrate,
              projectionConversionDesktopWeekly: results.data[2].projectiongrowthrate,
              projectionOrderDesktopWeekly: results.data[3].projectiongrowthrate,
              projectionRevenueDesktopWeekly: results.data[4].projectiongrowthrate

            });
            
          }) 
                              
          .catch(error => {
            console.log(error);
          });
      }
      

      overallBtnClick(overall){
        this.setState({
          overall: overall
        })
      }

      toggleBtnClick(){
        this.setState({
          collapse: !this.state.collapse
        })
      }
      
      monweek(monweek){
        this.setState({
          monweek: monweek
        })
      }

      

    render() {
      console.log(this.state.metricsNewUsersOverallMon);
      //Overall Monthly
      const classNameUsersOverallMonthly= this.state.classNameUsersOverallMonthly >= 0 ? 'fas fa-caret-up' : 'fas fa-caret-down';
      const classNameNewUsersOverallMonthly= this.state.classNameNewUsersOverallMonthly >= 0 ? 'fas fa-caret-up' : 'fas fa-caret-down';
      const classNameConversionOverallMonthly= this.state.classNameConversionOverallMonthly >= 0 ? 'fas fa-caret-up' : 'fas fa-caret-down';
      const classNameOrderOverallMonthly= this.state.classNameOrderOverallMonthly >= 0 ? 'fas fa-caret-up' : 'fas fa-caret-down';
      const classNameRevenueOverallMonthly= this.state.classNameRevenueOverallMonthly >= 0 ? 'fas fa-caret-up' : 'fas fa-caret-down';

      //Overall Weekly
      const classNameUsersOverallWeekly= this.state.classNameUsersOverallWeekly >= 0 ? 'fas fa-caret-up' : 'fas fa-caret-down';
      const classNameNewUsersOverallWeekly= this.state.classNameNewUsersOverallWeekly >= 0 ? 'fas fa-caret-up' : 'fas fa-caret-down';
      const classNameConversionOverallWeekly= this.state.classNameConversionOverallWeekly >= 0 ? 'fas fa-caret-up' : 'fas fa-caret-down';
      const classNameOrderOverallWeekly= this.state.classNameOrderOverallWeekly >= 0 ? 'fas fa-caret-up' : 'fas fa-caret-down';
      const classNameRevenueOverallWeekly= this.state.classNameRevenueOverallWeekly >= 0 ? 'fas fa-caret-up' : 'fas fa-caret-down';
      
      //Mobile Monthly
      const classNameUsersMobileMonthly= this.state.classNameUsersMobileMonthly >= 0 ? 'fas fa-caret-up' : 'fas fa-caret-down';
      const classNameNewUsersMobileMonthly= this.state.classNameNewUsersMobileMonthly >= 0 ? 'fas fa-caret-up' : 'fas fa-caret-down';
      const classNameConversionMobileMonthly= this.state.classNameConversionMobileMonthly >= 0 ? 'fas fa-caret-up' : 'fas fa-caret-down';
      const classNameOrderMobileMonthly= this.state.classNameOrderMobileMonthly >= 0 ? 'fas fa-caret-up' : 'fas fa-caret-down';
      const classNameRevenueMobileMonthly= this.state.classNameRevenueMobileMonthly >= 0 ? 'fas fa-caret-up' : 'fas fa-caret-down';

      //Mobile Weekly
      const classNameUsersMobileWeekly= this.state.classNameUsersMobileWeekly >= 0 ? 'fas fa-caret-up' : 'fas fa-caret-down';
      const classNameNewUsersMobileWeekly= this.state.classNameNewUsersMobileWeekly >= 0 ? 'fas fa-caret-up' : 'fas fa-caret-down';
      const classNameConversionMobileWeekly= this.state.classNameConversionMobileWeekly >= 0 ? 'fas fa-caret-up' : 'fas fa-caret-down';
      const classNameOrderMobileWeekly= this.state.classNameOrderMobileWeekly >= 0 ? 'fas fa-caret-up' : 'fas fa-caret-down';
      const classNameRevenueMobileWeekly= this.state.classNameRevenueMobileWeekly >= 0 ? 'fas fa-caret-up' : 'fas fa-caret-down';
      
      //Desktop Monthly
      const classNameUsersDesktopMonthly= this.state.classNameUsersDesktopMonthly >= 0 ? 'fas fa-caret-up' : 'fas fa-caret-down';
      const classNameNewUsersDesktopMonthly= this.state.classNameNewUsersDesktopMonthly >= 0 ? 'fas fa-caret-up' : 'fas fa-caret-down';
      const classNameConversionDesktopMonthly= this.state.classNameConversionDesktopMonthly >= 0 ? 'fas fa-caret-up' : 'fas fa-caret-down';
      const classNameOrderDesktopMonthly= this.state.classNameOrderDesktopMonthly >= 0 ? 'fas fa-caret-up' : 'fas fa-caret-down';
      const classNameRevenueDesktopMonthly= this.state.classNameRevenueDesktopMonthly >= 0 ? 'fas fa-caret-up' : 'fas fa-caret-down';

      //Desktop Weekly
      const classNameUsersDesktopWeekly= this.state.classNameUsersDesktopWeekly >= 0 ? 'fas fa-caret-up' : 'fas fa-caret-down';
      const classNameNewUsersDesktopWeekly= this.state.classNameNewUsersDesktopWeekly >= 0 ? 'fas fa-caret-up' : 'fas fa-caret-down';
      const classNameConversionDesktopWeekly= this.state.classNameConversionDesktopWeekly >= 0 ? 'fas fa-caret-up' : 'fas fa-caret-down';
      const classNameOrderDesktopWeekly= this.state.classNameOrderDesktopWeekly >= 0 ? 'fas fa-caret-up' : 'fas fa-caret-down';
      const classNameRevenueDesktopWeekly= this.state.classNameRevenueDesktopWeekly >= 0 ? 'fas fa-caret-up' : 'fas fa-caret-down';

      return (
            <div>
            <br />
            <h4 className="text-center display-4" onClick={this.toggleBtnClick}>Social{this.state.collapse === true ? <i className="fas fa-caret-up" /> : <i className="fas fa-caret-down" />}</h4>
                
            <br />
            <Collapse isOpen={this.state.collapse}>
            
            <Row className="organic">    
          {/* Users */}
        <Col xs="12" sm="6" lg="2" className="p-3 transparent">
          <Card className="transparent">
                
                {/* Monthly Weekly Functionality */}
                <ButtonGroup vertical>
                <Button color="primary" onClick={() => this.monweek(1)} active={this.state.monweek === 1}>
                  Monthly
                </Button>
                <Button color="primary" onClick={() => this.monweek(2)} active={this.state.monweek === 2}>
                  Weekly
                </Button>
                </ButtonGroup>

                <br />
                {/* Overall Functionality */}
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
        </Col>                   
                    
        <Col xs="12" sm="6" lg="2" className="p-3">

            <Card className="cards">
            {this.state.loading ? <Loading /> :
              <CardBody className="pb-0">
                {this.state.metricsUsersOverallMon === "Users" ?
                 <div className="text-center">{this.state.metricsUsersOverallMon}</div> : <div className="text-center">No Data</div>}

                <h1 className="text-center">
                  {this.state.overall === 1 && this.state.monweek === 1 && this.state.metricsUsersOverallMon === "Users" ? <h2>{this.state.projectionUsersOverallMon}</h2> 
                    : this.state.overall === 1 && this.state.monweek === 2 && this.state.metricsUsersOverallWeek === "Users" ? <h2>{this.state.projectionUsersOverallWeek}</h2> 
                    : null}
                  {this.state.overall === 2 && this.state.monweek === 1 && this.state.metricsUsersMobileMon === "Users" ? <h2>{this.state.projectionUsersMobileMon}</h2>
                    : this.state.overall === 2 && this.state.monweek === 2 && this.state.metricsUsersMobileWeek === "Users" ? <h2>{this.state.projectionUsersMobileWeek}</h2> 
                    : null}
                  {this.state.overall === 3 && this.state.monweek === 1 && this.state.metricsUsersDesktopMon === "Users" ? <h2>{this.state.projectionUsersDesktopMon}</h2>
                    : this.state.overall === 3 && this.state.monweek === 2 && this.state.metricsUsersDesktopWeek === "Users" ? <h2>{this.state.projectionUsersDesktopWeek}</h2> 
                    : null}
                </h1>
                <div className="text-center" style={this.state.overall === 1 && this.state.monweek === 1 
                  ? (this.state.projectionUsersOverallMonthly >= 0 ? styles.up : styles.down) 
                  : this.state.overall === 1 && this.state.monweek === 2 
                  ? (this.state.projectionUsersOverallWeekly >= 0 ? styles.up : styles.down)
                  :null}>
                  {this.state.overall === 1 && this.state.monweek === 1 && this.state.metricsUsersOverallMon === "Users" ? <div><i className={classNameUsersOverallMonthly} style={(this.state.projectionUsersOverallMonthly >= 0) ? styles.up : styles.down}></i> {this.state.projectionUsersOverallMonthly}%</div>
                  : this.state.overall === 1 && this.state.monweek === 2 && this.state.metricsUsersOverallWeek === "Users" ? <div><i className={classNameUsersOverallWeekly} style={(this.state.projectionUsersOverallWeekly >= 0) ? styles.up : styles.down}></i> {this.state.projectionUsersOverallWeekly}%</div> : null}
                </div> 
                <div className="text-center" style={this.state.overall === 2 && this.state.monweek === 1 
                  ? (this.state.projectionUsersMobileMonthly >= 0 ? styles.up : styles.down) 
                  : this.state.overall === 2 && this.state.monweek === 2 
                  ? (this.state.projectionUsersMobileWeekly >= 0 ? styles.up : styles.down)
                  :null}>
                {this.state.overall === 2 && this.state.monweek === 1 && this.state.metricsUsersMobileMon === "Users" ? <div><i className={classNameUsersMobileMonthly} style={(this.state.projectionUsersMobileMonthly >= 0) ? styles.up : styles.down}></i> {this.state.projectionUsersMobileMonthly}%</div> 
                  : this.state.overall === 2 && this.state.monweek === 2 && this.state.metricsUsersMobileWeek === "Users" ? <div><i className={classNameUsersMobileWeekly} style={(this.state.projectionUsersMobileWeekly >= 0) ? styles.up : styles.down}></i> {this.state.projectionUsersMobileWeekly}%</div> : null}
                </div> 
                <div className="text-center" style={this.state.overall === 3 && this.state.monweek === 1 
                  ? (this.state.projectionUsersDesktopMonthly >= 0 ? styles.up : styles.down) 
                  : this.state.overall === 3 && this.state.monweek === 2 
                  ? (this.state.projectionUsersDesktopWeekly >= 0 ? styles.up : styles.down)
                  :null}>
                {this.state.overall === 3 && this.state.monweek === 1 && this.state.metricsUsersDesktopMon === "Users" ? <div><i className={classNameUsersDesktopMonthly} style={(this.state.projectionUsersDesktopMonthly >= 0) ? styles.up : styles.down}></i> {this.state.projectionUsersDesktopMonthly}%</div> 
                  : this.state.overall === 3 && this.state.monweek === 2 && this.state.metricsUsersDesktopWeek === "Users" ? <div><i className={classNameUsersDesktopWeekly} style={(this.state.projectionUsersDesktopWeekly >= 0) ? styles.up : styles.down}></i> {this.state.projectionUsersDesktopWeekly}%</div> : null}
                </div> 
                  
              </CardBody>} 
               <div className="chart-wrapper">
                {this.state.overall === 1 && this.state.monweek === 1 && this.state.metricsUsersOverallMon === "Users" ? <OrganicOverallMonthlyUsersChart data={this.state.organicOverallMonthlyUsersData} labels=
                {this.state.organicOverallMonthlyUsersLabels}/>
                  : this.state.overall === 1 && this.state.monweek === 2 && this.state.metricsUsersOverallWeek === "Users" ? <OrganicOverallWeeklyChart data={this.state.organicOverallWeeklyUsersData} labels=
                {this.state.organicOverallWeeklyUsersLabels}/>
                  : null
                }
                {this.state.overall === 2 && this.state.monweek === 1 && this.state.metricsUsersMobileMon === "Users" ? <OrganicMobileMonthlyChart data={this.state.organicMobileMonthlyUsersData} 
                labels={this.state.organicMobileMonthlyUsersLabels}/> 
                  : this.state.overall === 2 && this.state.monweek === 2 && this.state.metricsUsersMobileWeek === "Users" ? <OrganicMobileWeeklyChart data={this.state.organicMobileWeeklyData} labels=
                {this.state.organicMobileWeeklyLabels}/>
                  : null
                }
                {this.state.overall === 3 && this.state.monweek === 1 && this.state.metricsUsersDesktopMon === "Users" ? <OrganicDesktopMonthlyChart data={this.state.organicDesktopMonthlyData} labels={this.state.organicDesktopMonthlyLabels}/> 
                  : this.state.overall === 3 && this.state.monweek === 2 && this.state.metricsUsersDesktopWeek === "Users" ? <OrganicDesktopWeeklyChart data={this.state.organicDesktopWeeklyData} labels=
                {this.state.organicDesktopWeeklyLabels}/> 
                  : null
                }
              </div>
            </Card>
          </Col>
    

          {/* New Users  */}
          <Col xs="12" sm="6" lg="2" className="p-3">
            <Card className="cards">
            {this.state.loading ? <Loading /> :
              <CardBody className="pb-0">
                {this.state.metricsNewUsersOverallMon === "New Users" ?
                 <div className="text-center">{this.state.metricsNewUsersOverallMon}</div> : <div className="text-center">No Data</div>}
                <h1 className="text-center">
                  {this.state.overall === 1 && this.state.monweek === 1 && this.state.metricsNewUsersOverallMon === "New Users" ? <h2>{this.state.projectionNewUsersOverallMon}</h2> 
                    : this.state.overall === 1 && this.state.monweek === 2 && this.state.metricsNewUsersOverallWeek === "New Users" ? <h2>{this.state.projectionNewUsersOverallWeek}</h2> : null}
                  {this.state.overall === 2 && this.state.monweek === 1 && this.state.metricsNewUsersMobileMon === "New Users" ? <h2>{this.state.projectionNewUsersMobileMon}</h2>
                    : this.state.overall === 2 && this.state.monweek === 2 && this.state.metricsNewUsersMobileWeek === "New Users" ? <h2>{this.state.projectionNewUsersMobileWeek}</h2> : null}
                  {this.state.overall === 3 && this.state.monweek === 1 && this.state.metricsNewUsersDesktopMon === "New Users" ? <h2>{this.state.projectionNewUsersDesktopMon}</h2>
                    : this.state.overall === 3 && this.state.monweek === 2 && this.state.metricsNewUsersMobileWeek === "New Users" ? <h2>{this.state.projectionNewUsersDesktopWeek}</h2> : null}
                </h1>
                <div className="text-center" style={this.state.overall === 1 && this.state.monweek === 1 
                  ? (this.state.projectionNewUsersOverallMonthly >= 0 ? styles.up : styles.down) 
                  : this.state.overall === 1 && this.state.monweek === 2 
                  ? (this.state.projectionNewUsersOverallWeekly >= 0 ? styles.up : styles.down)
                  :null}>
                  {this.state.overall === 1 && this.state.monweek === 1 && this.state.metricsNewUsersOverallMon === "New Users" ? <div><i className={classNameNewUsersOverallMonthly} style={(this.state.projectionNewUsersOverallMonthly >= 0) ? styles.up : styles.down}></i> {this.state.projectionNewUsersOverallMonthly}%</div> 
                  : this.state.overall === 1 && this.state.monweek === 2 && this.state.metricsNewUsersOverallWeek === "New Users" ? <div><i className={classNameNewUsersOverallWeekly} style={(this.state.projectionNewUsersOverallWeekly >= 0) ? styles.up : styles.down}></i> {this.state.projectionNewUsersOverallWeekly}%</div> : null}
                </div> 
                <div className="text-center" style={this.state.overall === 2 && this.state.monweek === 1 
                  ? (this.state.projectionNewUsersMobileMonthly >= 0 ? styles.up : styles.down) 
                  : this.state.overall === 2 && this.state.monweek === 2 
                  ? (this.state.projectionNewUsersMobileWeekly >= 0 ? styles.up : styles.down)
                  :null}>
                {this.state.overall === 2 && this.state.monweek === 1 && this.state.metricsNewUsersMobileMon === "New Users" ? <div><i className={classNameNewUsersMobileMonthly} style={(this.state.projectionNewUsersMobileMonthly >= 0) ? styles.up : styles.down}></i> {this.state.projectionNewUsersMobileMonthly}%</div> 
                  : this.state.overall === 2 && this.state.monweek === 2 && this.state.metricsNewUsersMobileWeek === "New Users" ? <div><i className={classNameNewUsersMobileWeekly} style={(this.state.projectionNewUsersMobileWeekly >= 0) ? styles.up : styles.down}></i> {this.state.projectionNewUsersMobileWeekly}%</div> : null}
                </div> 
                <div className="text-center" style={this.state.overall === 3 && this.state.monweek === 1 
                  ? (this.state.projectionNewUsersDesktopMonthly >= 0 ? styles.up : styles.down) 
                  : this.state.overall === 3 && this.state.monweek === 2 
                  ? (this.state.projectionNewUsersDesktopWeekly >= 0 ? styles.up : styles.down)
                  :null}>
                {this.state.overall === 3 && this.state.monweek === 1 && this.state.metricsNewUsersDesktopMon === "New Users" ? <div><i className={classNameNewUsersDesktopMonthly} style={(this.state.projectionNewUsersDesktopMonthly >= 0) ? styles.up : styles.down}></i> {this.state.projectionNewUsersDesktopMonthly}%</div> 
                  : this.state.overall === 3 && this.state.monweek === 2 && this.state.metricsNewUsersDesktopWeek === "New Users" ? <div><i className={classNameNewUsersDesktopWeekly} style={(this.state.projectionNewUsersDesktopWeekly >= 0) ? styles.up : styles.down}></i> {this.state.projectionNewUsersDesktopWeekly}%</div> : null}
                </div>   
                  
              </CardBody>}
              <div className="chart-wrapper">
                {this.state.overall === 1 && this.state.monweek === 1 && this.state.metricsNewUsersOverallMon === "New Users" ? <OrganicOverallMonthlyUsersChart data={this.state.organicOverallMonthlyUsersData} labels=
                {this.state.organicOverallMonthlyUsersLabels} /> 
                  : this.state.overall === 1 && this.state.monweek === 2 && this.state.metricsNewUsersOverallWeek === "New Users" ? <OrganicOverallWeeklyChart data={this.state.organicOverallWeeklyUsersData} labels=
                {this.state.organicOverallWeeklyUsersLabels}/>
                  : null
                }
                {this.state.overall === 2 && this.state.monweek === 1 && this.state.metricsNewUsersMobileMon === "New Users" ? <OrganicMobileMonthlyChart data={this.state.organicMobileMonthlyUsersData} 
                labels={this.state.organicMobileMonthlyUsersLabels}/> 
                  : this.state.overall === 2 && this.state.monweek === 2 && this.state.metricsNewUsersMobileWeek === "New Users" ? <OrganicMobileWeeklyChart data={this.state.organicMobileWeeklyData} labels=
                {this.state.organicMobileWeeklyLabels}/>
                  : null
                }
                {this.state.overall === 3 && this.state.monweek === 1 && this.state.metricsNewUsersDesktopMon === "New Users" ? <OrganicDesktopMonthlyChart data={this.state.organicDesktopMonthlyData} labels={this.state.organicDesktopMonthlyLabels}/> 
                  : this.state.overall === 3 && this.state.monweek === 2 && this.state.metricsNewUsersDesktopMon === "New Users" ? <OrganicDesktopWeeklyChart data={this.state.organicDesktopWeeklyData} labels=
                {this.state.organicDesktopWeeklyLabels}/> 
                  : null
                }
              </div>
            </Card>
          </Col>

        {/* Conversion */}
        <Col xs="12" sm="6" lg="2" className="p-3">
            <Card className="cards">
            {this.state.loading ? <Loading /> :
              <CardBody className="pb-0">
                <div className="text-center">
                {this.state.metricsConversionOverallMon === "Registration" ?
                 <div className="text-center">{this.state.metricsConversionOverallMon}</div> : <div className="text-center">No Data</div>}
                </div>
                <h1 className="text-center">
                  {this.state.overall === 1 && this.state.monweek === 1 && this.state.metricsConversionOverallMon === "Registration" ? <h2>{this.state.projectionConversionOverallMon}</h2> 
                    : this.state.overall === 1 && this.state.monweek === 2 && this.state.metricsConversionOverallWeek === "Registration" ? <h2>{this.state.projectionConversionOverallWeek}</h2> : null}
                  {this.state.overall === 2 && this.state.monweek === 1 && this.state.metricsConversionMobileMon === "Registration" ? <h2>{this.state.projectionConversionMobileMon}</h2>
                    : this.state.overall === 2 && this.state.monweek === 2 && this.state.metricsConversionMobileWeek === "Registration" ? <h2>{this.state.projectionConversionMobileWeek}</h2> : null}
                  {this.state.overall === 3 && this.state.monweek === 1 && this.state.metricsConversionDesktopMon === "Registration" ? <h2>{this.state.projectionConversionDesktopMon}</h2>
                    : this.state.overall === 3 && this.state.monweek === 2 && this.state.metricsConversionDesktopWeek === "Registration" ? <h2>{this.state.projectionConversionDesktopWeek}</h2> : null}
                </h1>
                <div className="text-center" style={this.state.overall === 1 && this.state.monweek === 1 
                  ? (this.state.projectionConversionOverallMonthly >= 0) ? styles.up : styles.down
                  : this.state.overall === 1 && this.state.monweek === 2 
                  ? (this.state.projectionConversionOverallWeekly >= 0) ? styles.up : styles.down
                  : null}>
                  {this.state.overall === 1 && this.state.monweek === 1 && this.state.metricsConversionOverallMon === "Registration" ? <div><i className={classNameConversionOverallMonthly} style={(this.state.projectionConversionOverallMonthly >= 0) ? styles.up : styles.down}></i> {this.state.projectionConversionOverallMonthly}%</div> 
                  : this.state.overall === 1 && this.state.monweek === 2 && this.state.metricsConversionOverallWeek === "Registration" ? <div><i className={classNameConversionOverallWeekly} style={(this.state.projectionConversionOverallWeekly >= 0) ? styles.up : styles.down}></i> {this.state.projectionConversionOverallWeekly}%</div> : null}
                </div> 
                <div className="text-center" style={this.state.overall === 2 && this.state.monweek === 1 
                  ? (this.state.projectionConversionMobileMonthly >= 0) ? styles.up : styles.down
                  : this.state.overall === 2 && this.state.monweek === 2 
                  ? (this.state.projectionConversionMobileWeekly >= 0) ? styles.up : styles.down
                  : null}>
                {this.state.overall === 2 && this.state.monweek === 1 && this.state.metricsConversionMobileMon === "Registration" ? <div><i className={classNameConversionMobileMonthly} style={(this.state.projectionConversionMobileMonthly >= 0) ? styles.up : styles.down}></i> {this.state.projectionConversionMobileMonthly}%</div> 
                  : this.state.overall === 2 && this.state.monweek === 2 && this.state.metricsConversionMobileWeek === "Registration" ? <div><i className={classNameConversionMobileWeekly} style={(this.state.projectionConversionMobileWeekly >= 0) ? styles.up : styles.down}></i> {this.state.projectionConversionMobileWeekly}%</div> : null}
                </div> 
                <div className="text-center" style={this.state.overall === 3 && this.state.monweek === 1 
                  ? (this.state.projectionConversionDesktopMonthly >= 0) ? styles.up : styles.down
                  : this.state.overall === 3 && this.state.monweek === 2 
                  ? (this.state.projectionConversionDesktopWeekly >= 0) ? styles.up : styles.down
                  : null}>
                {this.state.overall === 3 && this.state.monweek === 1 && this.state.metricsConversionDesktopMon === "Registration" ? <div><i className={classNameConversionDesktopMonthly} style={(this.state.projectionConversionDesktopMonthly >= 0) ? styles.up : styles.down}></i> {this.state.projectionConversionDesktopMonthly}%</div> 
                  : this.state.overall === 3 && this.state.monweek === 2 && this.state.metricsConversionDesktopWeek === "Registration" ? <div><i className={classNameConversionDesktopWeekly} style={(this.state.projectionConversionDesktopWeekly >= 0) ? styles.up : styles.down}></i> {this.state.projectionConversionDesktopWeekly}%</div> : null}
                </div>   
                  
              </CardBody>}
              <div className="chart-wrapper">
                {this.state.overall === 1 && this.state.monweek === 1 && this.state.metricsConversionOverallMon === "Registration" ? <OrganicOverallMonthlyChart data={this.state.organicOverallMonthlyUsersData} labels=
                {this.state.organicOverallMonthlyUsersLabels}/> 
                  : this.state.overall === 1 && this.state.monweek === 2 && this.state.metricsConversionOverallWeek === "Registration" ? <OrganicOverallWeeklyChart data={this.state.organicOverallWeeklyUsersData} labels=
                {this.state.organicOverallWeeklyUsersLabels}/>
                  : null
                }
                {this.state.overall === 2 && this.state.monweek === 1 && this.state.metricsConversionMobileMon === "Registration" ? <OrganicMobileMonthlyChart data={this.state.organicMobileMonthlyUsersData} 
                labels={this.state.organicMobileMonthlyUsersLabels}/> 
                  : this.state.overall === 2 && this.state.monweek === 2 && this.state.metricsConversionMobileWeek === "Registration" ? <OrganicMobileWeeklyChart data={this.state.organicMobileWeeklyData} labels=
                {this.state.organicMobileWeeklyLabels}/>
                  : null
                }
                {this.state.overall === 3 && this.state.monweek === 1 && this.state.metricsConversionDesktopMon === "Registration" ? <OrganicDesktopMonthlyChart data={this.state.organicDesktopMonthlyData} labels={this.state.organicDesktopMonthlyLabels}/> 
                  : this.state.overall === 3 && this.state.monweek === 2 && this.state.metricsConversionDesktopWeek === "Registration" ? <OrganicDesktopWeeklyChart data={this.state.organicDesktopWeeklyData} labels=
                {this.state.organicDesktopWeeklyLabels}/> 
                  : null
                }
              </div>
            </Card>
          </Col>

        {/* Order */}
        <Col xs="12" sm="6" lg="2" className="p-3">
            <Card className="cards">
            {this.state.loading ? <Loading /> :
              <CardBody className="pb-0">
                <div className="text-center">
                {this.state.metricsOrderOverallMon === "Orders" ?
                 <div className="text-center">{this.state.metricsOrderOverallMon}</div> : <div className="text-center">No Data</div>}
                </div>
                <h1 className="text-center">
                  {this.state.overall === 1 && this.state.monweek === 1 && this.state.metricsOrderOverallMon === "Orders" ? <h2>{this.state.projectionOrderOverallMon}</h2> 
                    : this.state.overall === 1 && this.state.monweek === 2 && this.state.metricsOrderOverallWeek === "Orders" ? <h2>{this.state.projectionOrderOverallWeek}</h2> : null}
                  {this.state.overall === 2 && this.state.monweek === 1 && this.state.metricsOrderMobileMon === "Orders" ? <h2>{this.state.projectionOrderMobileMon}</h2>
                    : this.state.overall === 2 && this.state.monweek === 2 && this.state.metricsOrderMobileWeek === "Orders" ? <h2>{this.state.projectionOrderMobileWeek}</h2> : null}
                  {this.state.overall === 3 && this.state.monweek === 1 && this.state.metricsOrderDesktopMon === "Orders" ? <h2>{this.state.projectionOrderDesktopMon}</h2>
                    : this.state.overall === 3 && this.state.monweek === 2 && this.state.metricsOrderDesktopWeek === "Orders" ? <h2>{this.state.projectionOrderDesktopWeek}</h2> : null}
                </h1>
                <div className="text-center" style={this.state.overall === 1 && this.state.monweek === 1 
                  ? (this.state.projectionOrderOverallMonthly >= 0) ? styles.up : styles.down
                  : this.state.overall === 1 && this.state.monweek === 2 
                  ? (this.state.projectionOrderOverallWeekly >= 0) ? styles.up : styles.down
                  : null}>
                  {this.state.overall === 1 && this.state.monweek === 1 && this.state.metricsOrderOverallMon === "Orders" ? <div><i className={classNameOrderOverallMonthly} style={(this.state.projectionOrderOverallMonthly >= 0) ? styles.up : styles.down}></i> {this.state.projectionOrderOverallMonthly}%</div> 
                  : this.state.overall === 1 && this.state.monweek === 2 && this.state.metricsOrderOverallWeek === "Orders" ? <div><i className={classNameOrderOverallWeekly} style={(this.state.projectionOrderOverallWeekly >= 0) ? styles.up : styles.down}></i> {this.state.projectionOrderOverallWeekly}%</div> : null}
                </div> 
                <div className="text-center" style={this.state.overall === 2 && this.state.monweek === 1 
                  ? (this.state.projectionOrderMobileMonthly >= 0) ? styles.up : styles.down
                  : this.state.overall === 2 && this.state.monweek === 2 
                  ? (this.state.projectionOrderMobileWeekly >= 0) ? styles.up : styles.down
                  : null}>
                {this.state.overall === 2 && this.state.monweek === 1 && this.state.metricsOrderMobileMon === "Orders" ? <div><i className={classNameOrderMobileMonthly} style={(this.state.projectionOrderMobileMonthly >= 0) ? styles.up : styles.down}></i> {this.state.projectionOrderMobileMonthly}%</div> 
                  : this.state.overall === 2 && this.state.monweek === 2 && this.state.metricsOrderMobileWeek === "Orders" ? <div><i className={classNameOrderMobileWeekly} style={(this.state.projectionOrderMobileWeekly >= 0) ? styles.up : styles.down}></i> {this.state.projectionOrderMobileWeekly}%</div> : null}
                </div> 
                <div className="text-center" style={this.state.overall === 3 && this.state.monweek === 1 
                  ? (this.state.projectionOrderDesktopMonthly >= 0) ? styles.up : styles.down
                  : this.state.overall === 3 && this.state.monweek === 2 
                  ? (this.state.projectionOrderDesktopWeekly >= 0) ? styles.up : styles.down
                  : null}>
                {this.state.overall === 3 && this.state.monweek === 1 && this.state.metricsOrderDesktopMon === "Orders" ? <div><i className={classNameOrderDesktopMonthly} style={(this.state.projectionOrderDesktopMonthly >= 0) ? styles.up : styles.down}></i> {this.state.projectionOrderDesktopMonthly}%</div> 
                  : this.state.overall === 3 && this.state.monweek === 2 && this.state.metricsOrderDesktopWeek === "Orders" ? <div><i className={classNameOrderDesktopWeekly} style={(this.state.projectionOrderDesktopWeekly >= 0) ? styles.up : styles.down}></i> {this.state.projectionOrderDesktopWeekly}%</div> : null}
                </div>   
                  
              </CardBody>}
              <div className="chart-wrapper">
                {this.state.overall === 1 && this.state.monweek === 1 && this.state.metricsOrderOverallMon === "Orders" ? <OrganicOverallMonthlyChart data={this.state.organicOverallMonthlyUsersData} labels=
                {this.state.organicOverallMonthlyUsersLabels}/> 
                  : this.state.overall === 1 && this.state.monweek === 2 && this.state.metricsOrderOverallWeek === "Orders" ? <OrganicOverallWeeklyChart data={this.state.organicOverallWeeklyUsersData} labels=
                {this.state.organicOverallWeeklyUsersLabels}/>
                  : null
                }
                {this.state.overall === 2 && this.state.monweek === 1 && this.state.metricsOrderMobileMon === "Orders" ? <OrganicMobileMonthlyChart data={this.state.organicMobileMonthlyUsersData} 
                labels={this.state.organicMobileMonthlyUsersLabels}/> 
                  : this.state.overall === 2 && this.state.monweek === 2 && this.state.metricsOrderMobileWeek === "Orders" ? <OrganicMobileWeeklyChart data={this.state.organicMobileWeeklyData} labels=
                {this.state.organicMobileWeeklyLabels}/>
                  : null
                }
                {this.state.overall === 3 && this.state.monweek === 1 && this.state.metricsOrderDesktopMon === "Orders" ? <OrganicDesktopMonthlyChart data={this.state.organicDesktopMonthlyData} labels={this.state.organicDesktopMonthlyLabels}/> 
                  : this.state.overall === 3 && this.state.monweek === 2 && this.state.metricsOrderDesktopWeek === "Orders" ? <OrganicDesktopWeeklyChart data={this.state.organicDesktopWeeklyData} labels=
                {this.state.organicDesktopWeeklyLabels}/> 
                  : null
                }
              </div>
            </Card>
          </Col>

        {/* Revenue */}
        <Col xs="12" sm="6" lg="2" className="p-3">
            <Card className="cards">
            {this.state.loading ? <Loading /> :
              <CardBody className="pb-0">
                <div className="text-center">
                {this.state.metricsRevenueOverallMon === "Revenue" ?
                 <div className="text-center">{this.state.metricsRevenueOverallMon}</div> : <div className="text-center">No Data</div>}
                </div>
                <h1 className="text-center">
                  {this.state.overall === 1 && this.state.monweek === 1 && this.state.metricsRevenueOverallMon === "Revenue" ? <h2>{this.state.projectionRevenueOverallMon}</h2> 
                    : this.state.overall === 1 && this.state.monweek === 2 && this.state.metricsRevenueOverallWeek === "Revenue" ? <h2>{this.state.projectionRevenueOverallWeek}</h2> : null}
                  {this.state.overall === 2 && this.state.monweek === 1 && this.state.metricsRevenueMobileMon === "Revenue" ? <h2>{this.state.projectionRevenueMobileMon}</h2>
                    : this.state.overall === 2 && this.state.monweek === 2 && this.state.metricsRevenueMobileWeek === "Revenue" ? <h2>{this.state.projectionRevenueMobileWeek}</h2> : null}
                  {this.state.overall === 3 && this.state.monweek === 1 && this.state.metricsRevenueDesktopMon === "Revenue" ? <h2>{this.state.projectionRevenueDesktopMon}</h2>
                    : this.state.overall === 3 && this.state.monweek === 2 && this.state.metricsRevenueDesktopWeek === "Revenue" ? <h2>{this.state.projectionRevenueDesktopWeek}</h2> : null}
                </h1>
                <div className="text-center" style={this.state.overall === 1 && this.state.monweek === 1 
                  ? (this.state.projectionRevenueOverallMonthly >= 0) ? styles.up : styles.down
                  : this.state.overall === 1 && this.state.monweek === 2 
                  ? (this.state.projectionRevenueOverallWeekly >= 0) ? styles.up : styles.down
                  : null}>
                  {this.state.overall === 1 && this.state.monweek === 1 && this.state.metricsRevenueOverallMon === "Revenue" ? <div><i className={classNameRevenueOverallMonthly} style={(this.state.projectionRevenueOverallMonthly >= 0) ? styles.up : styles.down}></i> {this.state.projectionRevenueOverallMonthly}%</div> 
                  : this.state.overall === 1 && this.state.monweek === 2 && this.state.metricsRevenueOverallWeek === "Revenue" ? <div><i className={classNameRevenueOverallWeekly} style={(this.state.projectionRevenueOverallWeekly >= 0) ? styles.up : styles.down}></i> {this.state.projectionRevenueOverallWeekly}%</div> : null}
                </div> 
                <div className="text-center" style={this.state.overall === 2 && this.state.monweek === 1 
                  ? (this.state.projectionRevenueMobileMonthly >= 0) ? styles.up : styles.down
                  : this.state.overall === 2 && this.state.monweek === 2 
                  ? (this.state.projectionRevenueMobileWeekly >= 0) ? styles.up : styles.down
                  : null}>
                {this.state.overall === 2 && this.state.monweek === 1 && this.state.metricsRevenueMobileMon === "Revenue" ? <div><i className={classNameRevenueMobileMonthly} style={(this.state.projectionRevenueMobileMonthly >= 0) ? styles.up : styles.down}></i> {this.state.projectionRevenueMobileMonthly}%</div> 
                  : this.state.overall === 2 && this.state.monweek === 2 && this.state.metricsRevenueMobileWeek === "Revenue" ? <div><i className={classNameRevenueMobileWeekly} style={(this.state.projectionRevenueMobileWeekly >= 0) ? styles.up : styles.down}></i> {this.state.projectionRevenueMobileWeekly}%</div> : null}
                </div>  
                <div className="text-center" style={this.state.overall === 3 && this.state.monweek === 1 
                  ? (this.state.projectionRevenueDesktopMonthly >= 0) ? styles.up : styles.down
                  : this.state.overall === 3 && this.state.monweek === 2 
                  ? (this.state.projectionRevenueDesktopWeekly >= 0) ? styles.up : styles.down
                  : null}>
                {this.state.overall === 3 && this.state.monweek === 1 && this.state.metricsRevenueDesktopMon === "Revenue" ? <div><i className={classNameRevenueDesktopMonthly} style={(this.state.projectionRevenueDesktopMonthly >= 0) ? styles.up : styles.down}></i> {this.state.projectionRevenueDesktopMonthly}%</div> 
                  : this.state.overall === 3 && this.state.monweek === 2 && this.state.metricsRevenueDesktopWeek === "Revenue" ? <div><i className={classNameRevenueDesktopWeekly} style={(this.state.projectionRevenueDesktopWeekly >= 0) ? styles.up : styles.down}></i> {this.state.projectionRevenueDesktopWeekly}%</div> : null}
                </div>   
                  
              </CardBody>}
              <div className="chart-wrapper">
                {this.state.overall === 1 && this.state.monweek === 1 && this.state.metricsRevenueOverallMon === "Revenue" ? <OrganicOverallMonthlyChart data={this.state.organicOverallMonthlyUsersData} labels=
                {this.state.organicOverallMonthlyUsersLabels}/> 
                  : this.state.overall === 1 && this.state.monweek === 2 && this.state.metricsRevenueOverallWeek === "Revenue" ? <OrganicOverallWeeklyChart data={this.state.organicOverallWeeklyUsersData} labels=
                {this.state.organicOverallWeeklyUsersLabels}/>
                  : null
                }
                {this.state.overall === 2 && this.state.monweek === 1 && this.state.metricsRevenueMobileMon === "Revenue" ? <OrganicMobileMonthlyChart data={this.state.organicMobileMonthlyUsersData} 
                labels={this.state.organicMobileMonthlyUsersLabels}/> 
                  : this.state.overall === 2 && this.state.monweek === 2 && this.state.metricsRevenueMobileWeek === "Revenue" ? <OrganicMobileWeeklyChart data={this.state.organicMobileWeeklyData} labels=
                {this.state.organicMobileWeeklyLabels}/>
                  : null
                }
                {this.state.overall === 3 && this.state.monweek === 1 && this.state.metricsRevenueDesktopMon === "Revenue" ? <OrganicDesktopMonthlyChart data={this.state.organicDesktopMonthlyData} labels=
                {this.state.organicDesktopMonthlyLabels}/> 
                  : this.state.overall === 3 && this.state.monweek === 2 && this.state.metricsRevenueDesktopWeek === "Revenue" ? <OrganicDesktopWeeklyChart data={this.state.organicDesktopWeeklyData} labels=
                {this.state.organicDesktopWeeklyLabels}/> 
                  : null
                }
              </div>
            </Card>
          </Col>
        </Row>
        </Collapse>
      </div>
        );
    }
}

export default Social;