import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as NumActions from '../actions/numeros';

class Sumas extends Component {

  handleClick = () => {
    this.props.actions.incrementar();
  }

  render() {
    return (
      <div>
        <h1>Sumas</h1>
        <h3>{this.props.numeros}</h3>
        <div>
          <button onClick={this.handleClick}>Incremento</button>
        </div>
      </div>
    );
  }
}

Sumas.propTypes = {
  numeros: PropTypes.number,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    numeros: state.numeros
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(NumActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sumas);
