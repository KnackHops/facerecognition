import React, {Component} from 'react';
import "./Rank.css";

class Rank extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: "",
            entries: ""
        }
    }

    componentDidMount(){
        this.setState({name:this.props.name, rank:this.props.rank})
    }

    render(){
        return (
            <div>
                <div className="center topLabel">
                    {`${this.state.name}! Your current entry is...`}
                </div>
                <div className="center actualRank">
                    {this.state.entries}
                </div>
            </div>
        )
    }
}

export default Rank;