import React, {Component} from 'react'
class Bio extends Component {
    render(){
        const myStyle={color:"blue" , fontSize:"1.2rem",margin:"7px",};
    return (
        <div className="media">
            <img src=".https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.pngitem.com%2Fpimgs%2Fm%2F358-3586144_icy-logo-bioimage-hd-png-download.png&imgrefurl=https%3A%2F%2Fwww.pngitem.com%2Fmiddle%2FhiTmwhb_icy-logo-bioimage-hd-png-download%2F&tbnid=lPk2qUNmAwnjPM&vet=10CAMQMyhlahcKEwjojr20sdr6AhUAAAAAHQAAAAAQAw..i&docid=Zj5HlcgW52cP2M&w=860&h=662&q=bioimage&ved=0CAMQMyhlahcKEwjojr20sdr6AhUAAAAAHQAAAAAQAw" className="mr-3" alt="Biophoto"  style={{width:"50px"}}/>
            <div className="media-body">
            <h5 className="mt-0" style={{textTransform: "uppercase",margin:"10px",}}>{this.props.FullName}</h5>
            <span style = {myStyle}>Age:</span> {this.props.Age} <br/>
            <span style= {myStyle}>Gender:</span>{this.props.Gender}<br/>
            <span style= {myStyle}>Interests:</span>{this.props.Interests}<br/>
            <span style= {myStyle}>Bio:</span>{this.props.FullName} is {this.props.Age} years old, I like {this.props.Interests}
            </div>
        </div>
    )
}}

export default Bio;
