import React, { Component } from 'react'

class DeliveryEvent extends Component {
    constructor(props){
        super(props)

        this.state = {}
    }

    render() {
        return (
        	<li className="delivery-event">
        		<input type="checkbox" />
        		<span className="event-color-tag" style={{backgroundColor:this.props.tagColor}}></span>
        		<p className="event-name">{this.props.name}</p>
        	</li>
        );
    }
}


export default DeliveryEvent
