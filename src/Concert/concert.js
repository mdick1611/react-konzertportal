/**
 * Created by Marvin on 15.02.2018.
 */
import React from 'react';
import './concert.css';

var axios = require('axios');

export class Concert extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.getInitialState();
    }

    getInitialState() {
    return {
        concerts: []
    }
}

    componentDidMount() {
    var th = this;
    this.serverRequest =
        axios.get(this.props.source)
            .then(function(result) {
                th.setState({
                    concerts: result.data.concerts
                });
            })
}

    componentWillUnmount() {
    this.serverRequest.abort();
}


    render(){
        return (
            <div className="container text-center">
                <h2>Konzerte</h2><br/><br/><br/>
                <div class="row">
                {this.state.concerts.map(function(concert) {
                    return (
                            <div class="col-sm-4">
                        <a className="concertItem" href="#" key={concert.id}>
                            <p><strong>
                                {concert.name}
                            </strong><br/>
                            </p>
                            <img class="concertImg" src="bandmember.jpg" alt="Random Name" width="150" height="150"></img>
                        </a>
                                <p>
                                    {concert.events[0]}<br/>
                                    {concert.events[1]}
                                </p>
                            </div>
                    );
                })}
                </div>
            </div>
        )

    }

}