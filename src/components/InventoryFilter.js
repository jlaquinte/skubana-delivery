import React, { Component } from 'react'
import DeliveryEvent from './DeliveryEvent'
import data from '../api/data'

class InventoryFilter extends Component {
    constructor(props){
        super(props)

        this.state = {
        	data,
        	selectedEvents: []
        }
    }

    filterItems(selectedItem, isSelected){
    	let itemList = this.state.selectedEvents

    	if(isSelected)
    		itemList.push(selectedItem)
    	else
    		itemList.splice(itemList.indexOf(selectedItem),1)

    	this.setState({selectedEvents: itemList})
    }


    render() {
        return (
        	<section className="delivery-event-filter">
	        	<input 
	        		type="text" 
	        		onChange= {()=>{}}
	        		value= {this.state.selectedEvents} 
	        		className= "active-delivery-events" 
	        		size="75" 
	        		placeholder="Select..."
	        	/>
				<ul className="delivery-event-list">
					{data.map(entry =>
						<DeliveryEvent
							key={entry.id}
							id={entry.id}
	        				name={entry.name}
	        				tagColor={entry.hexColor}
	        				onSelected={ (selectedEvent, isSelected) =>{
	        					this.filterItems(selectedEvent, isSelected)
	        				}}
	        			/>
					)}
				</ul>
			</section>
        );
    }
}

export default InventoryFilter
