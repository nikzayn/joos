import React, { Component } from 'react';
import Loader from 'react-loader-spinner';

class Loading extends Component {
    render() {
        return (
            <div className="text-center mt-4 pb-4">
            <Loader 
                type="Oval"
                color="#40E0D0"
                height="30"	
                width="30"

            /> 
            </div>
        );
    }
}

export default Loading;