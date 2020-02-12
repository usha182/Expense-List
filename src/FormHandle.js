import React, {Component} from 'react';
import './FormHandle.css';
import './TotalSummary.css';
import TotalSummary from './TotalSummary';
import {connect} from 'react-redux';
import {income, spending} from './store/action/action';

class FormHandle extends Component {
  constructor (props) {
      super(props);
      this.cost = React.createRef();
      this.desc = React.createRef();
      this.expensive = React.createRef();
      this.state = {
          formValue: {
            cost: '',
            desc: ''
        }
      }
  }	

  inputOnChange = (e) => {
    if (e.target.name === 'cost') {
        this.setState({
            formValue: {                
                cost: e.target.value,
                desc: this.desc.current.value              
            }
        });
    } else if (e.target.name === 'desc') {
        this.setState({
            formValue:  {
                cost: this.cost.current.value,
                desc: e.target.value 
            }
        });
    }  	
  }
  resetForm = () => {
  	this.setState({
  		formValue: {
  		cost: '',
  		desc: ''
  		}
  	});
  	document.getElementById('expensive').style.display ='none';
  }
  render () {
  	let checkDisState = this.props.show;
  	let incomeButton;
  	let spentButton;
  	if (this.props.showincome === 'true') {
  		incomeButton = <button className="primary" type="reset" name="income" onClick={() => this.props.income("INCOME", this.cost.current.value, this.desc.current.value)}>Income</button>;
  	} else {
  		spentButton = <button className="primary" type="reset" name="spent" onClick={() => this.props.income("SPENDING", this.cost.current.value, this.desc.current.value)}>Spent</button>;
  	}
      if (checkDisState === 'true') {
        return (
            <form onSubmit={this.formSubmit} ref={form => this.expensive = form} id="expensive">
                <div>
                  <label>Add Rs:</label>	
                  <input type="number" value={this.state.formValue.cost} ref={this.cost} onChange={this.inputOnChange.bind(this.name)} name="cost"/>
                </div>
                <div>
                  <label>Describtion:</label>
                  <textarea value={this.state.formValue.desc} ref={this.desc} onChange={this.inputOnChange.bind(this.name)} name="desc"/>
                </div>
                {incomeButton}
                {spentButton}
                <button className="warning" onClick={this.resetForm} type='reset' name='cancel'>Cancel</button>
            </form>                       
        );
      } else {
          return (
              <div></div>
          );
      } 
  }
}

const mapStateToProps = (state) => {
  return {
    balance: state.balance
  }
}

const mapDispatchToProps = () => {
  return {
    income,
    spending
  }
}

export default connect(mapStateToProps,mapDispatchToProps())(FormHandle);
