import React from "react";



class AddContact extends React.Component {

    state = {
        name: "",
        email: ""
    }

    add = (e) => {
        e.preventDefault();
        if (this.state.name === "" || this.state.email === "") {
            alert("Fill the form")
            return 
        } else {
            this.props.addContactHandler(this.state)
            this.setState({name: "", email: ""})
            this.props.history.push("/")
            // console.log(this.props.history.push.name)
            // console.dir(this.props.history.push.name)
            // console.dir(this.props)
        }
    }

    render() {
        return (
            <div className="iu main container">
                <h2>Add Contact</h2>
                <form className="ui form" onSubmit={this.add}>
                    <div className="feild">
                        <label>Name</label>
                        <input 
                        type="text" 
                        name="Name" 
                        placeholder="Enter your name" 
                        value={this.state.name}
                        onChange={ (e) => this.setState({name: e.target.value}) }
                        onInput={ (e) => "INPUT" } />
                    </div>
                    <div className="feild">
                        <label>Email</label>
                        <input 
                        type="text" 
                        name="Name" 
                        placeholder="Enter your Email" 
                        value={this.state.email}
                        onChange={ (e) => this.setState({email: e.target.value}) }/>
                    </div>
                    <button className="ui button blue">Add</button>
                </form>
            </div>
        );
    };
}

export default AddContact;