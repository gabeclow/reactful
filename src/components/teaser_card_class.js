import React from 'react';


class ClassTeaserCard extends React.Component{

    constructor(){
        super();
        this.state={
            text: "test text"
        }
    }

    render(){
        return(
            <div>Hello {this.state.text}</div>
        )
    }
}

export default ClassTeaserCard;