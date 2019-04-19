import React, { Component } from 'react'

class DeliveryEvent extends Component {
    constructor(props){
        super(props)

        this.state = {}
    }

    render() {
        return (
        	<div className="delivery-event">
        		<input type="checkbox" />
        		<span className="event-color-tag"></span>
        		<p className="event-name">Address Check</p>
        	</div>
        );
    }
}


export default DeliveryEvent
