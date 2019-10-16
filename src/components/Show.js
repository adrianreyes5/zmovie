import React, { Component } from 'react'
import ShowService from '../utils/ShowService'

class Show extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: []
        }
    }

    componentDidMount() {
        window.scrollTo(0, 350);
        let that = this;
        const show_id = this.props.match.params.show_id;
        console.log(show_id);
        // ShowService.getShowDb(show_id).then(function (show) {
        //     // that.setState({
        //     //     show: show
        //     // })
        // })
    }
    render() {
        return (
            <div>
        
            </div>
        )
    }
}

export default Show