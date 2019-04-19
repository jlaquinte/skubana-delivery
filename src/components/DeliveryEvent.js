import React, { Component } from 'react'

class DeliveryEvent extends Component {
    constructor(props){
        super(props)

        this.state = {
        	isSelected: false
        }
    }

    toggleChecked(){
    	this.setState({ isSelected: !this.state.isSelected})
    }

    render() {
        return (
        	<li className="delivery-event">
        	    <label title={this.props.name}>
        			<input type="checkbox" onClick={ ()=>{ 
        			this.toggleChecked()
        			this.props.onSelected(this.props.name, this.props.id, !this.state.isSelected)} 
        			}/>
        			<span className="event-color-tag" style={{backgroundColor:this.props.tagColor}}></span>
        			<p className="event-name">{this.props.name}</p>
        		</label>
        	</li>
        );
    }
}


export default DeliveryEvent
