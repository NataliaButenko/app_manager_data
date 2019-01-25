import React, { Component } from 'react';
import { Dimmer, Loader, } from 'semantic-ui-react';
import connect from "react-redux/es/connect/connect";

export class LoadingComponent extends Component {
  render() {
    return (
        <Dimmer active>
          <Loader />
        </Dimmer>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
  };
};

export const Loading = connect(mapStateToProps)(LoadingComponent);
