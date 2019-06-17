import React, {Component} from 'react';


class FilmForm extends Component {


  constructor(props) {
    super(props);
    this.state = {
      title: "",
      link: ""
    }

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleLinkChange =
    this.handleLinkChange.bind(this);
    this.handleSubmit =
    this.handleSubmit.bind(this);
  }

  handleTitleChange(event) {
    this.setState({title: event.target.value})
  }
  handleLinkChange(event) {
    this.setState({link: event.target.value})
  }
  handleSubmit(event) {
    event.preventDefault();
    if (!this.state.title.trim() ||
        !this.state.link.trim()){
          return
        }
    this.props.onFilmSubmit(this.state);
    this.setState({title:"", link:""});

  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Title"
        value={this.state.title}
        onChange = {this.handleTitleChange}/>

        <input type="text" placeholder="Link"
        value = {this.state.link}
        onChange = {this.handleLinkChange}/>

        <input type="submit" placeholder="Submit!"
        />
      </form>
    );
  }
}



export default FilmForm;
