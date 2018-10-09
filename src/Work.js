
import React, {Component} from 'react'


class Work extends Component{
  constructor(props){
    super(props);
    this.state = {
      working: false
    };
  }

  handleClick = () => {
  this.setState({ working : !this.state.working })
};
  render() {
  return (
    <div>
    <button onClick {this.handleClick}
    className ="button1"> Is he working ? </button>
    </div>
  );
}
}
// this.state={
//   working: true
// };
// }
// this.setState({working : !this.state.false});


export default Work;
