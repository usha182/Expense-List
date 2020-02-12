import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import TotalSummary from './TotalSummary';
import {connect} from 'react-redux';
import {income, spending} from './store/action/action';
import './ExpenseList.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 

class ExpenseList extends Component {
  constructor (props) {
    super(props);
  }
  render () {
      if (this.props.ttlspending.type == 'SPENDING') {
    return (
        <div>
          <span className='spent'><i></i>{this.props.ttlspending.spent}</span>
          <span>{this.props.ttlspending.desc}</span>
          <span><i className="fa fa-trash"></i></span>
        </div>      
       ) 
      } else if (this.props.ttlincome.type == 'INCOME') {
        return (
        <div>
          <span className='income'><i></i>{this.props.ttlincome.in}</span>
          <span>{this.props.ttlincome.desc}</span>
          <span><i className="fa fa-trash"></i></span>
        </div>  
        )      
      }
      else {
        return (
          ''
        )
      }
  }
}

const mapStateToProps = (state) => {
  return {
    balance: state.balance,
    ttlincome: state.ttlincome,
    ttlspending: state.ttlspending
  }
}

const mapDispatchToProps = () => {
  return {
    income,
    spending
  }
}

export default connect(mapStateToProps,mapDispatchToProps())(ExpenseList);
