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
        		<input type="checkbox" onClick={ ()=>{ 
        			this.toggleChecked()
        			this.props.onSelected(this.props.name, !this.state.isSelected)} 
        		}/>
        		<span className="event-color-tag" style={{backgroundColor:this.props.tagColor}}></span>
        		<p className="event-name">{this.props.name}</p>
        	</li>
        );
    }
}


export default DeliveryEvent
