import React, {Component} from 'react';
import "./Rank.css";

class Rank extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: "",
            rank: ""
        }
    }

    componentDidMount(){
        this.setState({name:this.props.name, rank:this.props.rank})
    }

    render(){
        return (
            <div>
                <div className="center topLabel">
                    {`${this.state.name}! Your current rank is...`}
                </div>
                <div className="center actualRank">
                    {this.state.rank}
                </div>
            </div>
        )
    }
}

export default Rank;