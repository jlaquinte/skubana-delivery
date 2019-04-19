import React, { Component } from 'react'
import DeliveryEvent from './DeliveryEvent'
import data from '../api/data'

class InventoryFilter extends Component {
    constructor(){
        super()

        this.state = {
        	data
        }
    }

    render() {
        return (
        	<section className="delivery-event-filter">
	        	<input type="text" className="active-delivery-events" size="75"/>
				<ul className="delivery-event-list">
					{data.map(entry =>
						<DeliveryEvent
							key={entry.id}
	        				name={entry.name}
	        				tagColor={entry.hexColor}
	        			/>
					)}
				</ul>
			</section>	
        );
    }
}


export default InventoryFilter
