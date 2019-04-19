import React, { Component } from 'react'
import DeliveryEvent from './DeliveryEvent'
import data from '../api/data'

class InventoryFilter extends Component {
    constructor(props){
        super(props)

        this.state = {
        	data,
        	selectedEvents: [],
        	ids:[]
        }
    }

    filterItems(selectedItem, itemId, isSelected){
    	let itemList = this.state.selectedEvents
    	let idList = this.state.ids

    	if(isSelected){
    		itemList.push(selectedItem)
    		idList.push(itemId)
    	}
    	else{
    		itemList.splice(itemList.indexOf(selectedItem),1)
    		idList.splice(idList.indexOf(itemId),1)
    	}

    	this.setState({selectedEvents: itemList, ids:idList})
    }


    render() {
        return (
        	<section className="delivery-event-filter">
	        	<input 
	        		type="text" 
	        		onChange= {()=>{}}
	        		value= {this.state.selectedEvents.join(', ')} 
	        		className= "active-delivery-events" 
	        		size="75"
	        		data-curr-ids={this.state.ids.join(',')} 
	        		placeholder="Select..."
	        	/>
				<ul className="delivery-event-list">
					{data.map(entry =>
						<DeliveryEvent
							key={entry.id}
							id={entry.id}
	        				name={entry.name}
	        				tagColor={entry.hexColor}
	        				onSelected={ (selectedEvent, itemId, isSelected) =>{
	        					this.filterItems(selectedEvent, itemId, isSelected)
	        				}}
	        			/>
					)}
				</ul>
			</section>
        );
    }
}

export default InventoryFilter
