import React from "react";

class EditContact extends React.Component {
  constructor(props) {
    super(props);
    console.log(props.location.state.contact);
    let { id, name, email } = props.location.state.contact;
    this.state = {
      id,
      name,
      email,
    };
  }

  update = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.email === "") {
      alert("Fill the form");
      return;
    } else {
      this.props.updateContactHandler(this.state);
      this.setState({ name: "", email: "" });
      this.props.history.push("/");
      // console.log(this.props.history.push.name)
      // console.dir(this.props.history.push.name)
      // console.dir(this.props)
    }
  };

  render() {
    return (
      <div className="iu main container">
        <h2>Edit Contact</h2>
        <form className="ui form" onSubmit={this.update}>
          <div className="feild">
            <label>Name</label>
            <input
              type="text"
              name="Name"
              placeholder="Enter your name"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
              onInput={(e) => "INPUT"}
            />
          </div>
          <div className="feild">
            <label>Email</label>
            <input
              type="text"
              name="Name"
              placeholder="Enter your Email"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>
          <button className="ui button blue">Update</button>
        </form>
      </div>
    );
  }
}

export default EditContact;
