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
			<ul className="delivery-event-list">
				{data.map(entry =>
					<DeliveryEvent
						key={entry.id}
        				name={entry.name}
        				tagColor={entry.hexColor}
        			/>
				)}
			</ul>	
        );
    }
}


export default InventoryFilter
