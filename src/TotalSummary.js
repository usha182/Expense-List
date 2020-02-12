import React, {Component} from 'react';
import './TotalSummary.css'
import FormHandle from './FormHandle';
import ExpenseList from './ExpenseList';
import {connect} from 'react-redux';
import {income, spending} from './store/action/action';

class TotalSummary extends Component {
  constructor (props) {
    super(props);
    this.state = {
      displaySte:  'false',
      in: 'false',
      out: 'false'
    }
    // this.nodeElement = document.getElementById('appendList');
  }
  addIncome = () => {
    this.setState({
      displaySte: 'true',
      in: 'true',
      out: 'false'
    });
    if (document.getElementById('expensive') != null) {
      document.getElementById('expensive').style.display = 'block';
    }
  }
  addSpent = () => {
    this.setState({
      displaySte: 'true',
      in: 'false',
      out: 'true'
    });
    if (document.getElementById('expensive') != null) {
      document.getElementById('expensive').style.display = 'block';
    }    
  }
  render () {
    return (
      <React.Fragment>
        <header>
          <span className="subTitle">Balance</span>
          <h1>{this.props.balance} <b>Rs</b></h1>
          <span className="income">Income: {this.props.ttlincome.income || 0} </span>
          <span className="spent">Spending: {this.props.ttlspending.spending || 0}</span>
        </header>
        <div id='appendList'>
          <ExpenseList />
        </div>
        <button className="primary" onClick={this.addIncome}>Add Income</button>
        <button className="warning" onClick={this.addSpent}>Add Spending</button>
        <FormHandle show={this.state.displaySte} showincome={this.state.in} showspent={this.state.out} />
        
      </React.Fragment>
    )
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

export default connect(mapStateToProps,mapDispatchToProps())(TotalSummary);