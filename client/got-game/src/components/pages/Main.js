import React, { Component } from "react";
import API from "../../utils/API";
import Card from "../../components/Card/index";

class Main extends Component {
    state = {
        characters: [{}],
        image: "",
        name: "",
    }
    componentDidMount() {
        API.getCharacters().then((res) => {
            this.setState({
                characters: res.data.results
            });
        });
    }

    render() {
        return (
            <>
                <Card characters={this.state.characters} image={this.state.image} name={this.state.name} />
            </>
        )
    }

}
export default Main;