import React, { Component } from 'react';
import './Bootstrap/bootstrap/css/bootstrap.min.css'


class MemeGenerator extends Component {
    //using this instead of constructor
    state = {
        topText: "",
        bottomText: "",
        randomImg: "http://i.imgflip.com/1bij.jpg",
        allMemeImgs: []
    }
    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                const { memes } = response.data
                this.setState({ allMemeImgs: memes })
            })
    }
    //arrow function ...so need to bind it to the class
    handleChange=(event)=>{
        const {name, value} = event.target
        this.setState({[name]:value})
    }

    handleSubmit =(event)=>{
        event.preventDefault()
        const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length)
        const allRanMeme = this.state.allMemeImgs[randNum].url
        this.setState({randomImg:allRanMeme})
        // eslint-disable-next-line
        this.state.topText = ''
        // eslint-disable-next-line
        this.state.bottomText = ''
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <form className="form-inline" onSubmit={this.handleSubmit}>
                         
                            <div className="form-group">
                                <input
                                    className="form-control border border-primary"
                                    type="text"
                                    name="topText"
                                    value={this.state.topText}
                                    onChange={this.handleChange}
                                    placeholder="Top Text"
                                />
                                </div>
                            <div className="form-group">
                                <input
                                    className="form-control border border-primary"
                                    type="text"
                                    name="bottomText"
                                    value={this.state.bottomText}
                                    onChange={this.handleChange}
                                    placeholder="Bottom Text"
                                />
                                </div>
                            <button className="btn btn-success">Gen</button>
                        </form>
                        <div className="">
                            <img src={this.state.randomImg} style={{width:'550px',height:'500px',}}alt=""/>
                            <h1 className="top-txt"> {this.state.topText}</h1>
                            <h1 className="bottom-txt">{this.state.bottomText}</h1>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MemeGenerator