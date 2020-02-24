import React from 'react';
import {connect} from 'react-redux';
import {counterIncrement} from '../redux/actions'

class CounterDisplay extends React.Component{
render() {
  const {counterIncrement} = this.props;
  console.log("props",this.props);
    return (
        <div>
        Counter: {this.props.counter}<br/>
        <button onClick={counterIncrement}>
          Click Me
        </button>
        </div>
    )
}
}

const mapStateToProps = (state) => {
  console.log("map",state.counter);
return{
counter : state.counter
}
}

const mapDispatchToProps = (dispatch) => {
  console.log("some",dispatch);
  return {
    counterIncrement:()=>dispatch(counterIncrement())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CounterDisplay);