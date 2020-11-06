import React from 'react';
import CardData from '../mock_data/card_data'

class CheckListItem extends React.Component{

    constructor(){
        super();
        this.state = {
            isChecked: true,
        }
    }

    render(){
        const mappedArray = CardData.map(item => item.email);

        return(
            <div>{mappedArray}</div>
        )
    }
}

export default CheckListItem;