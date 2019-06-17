import React, {Component} from 'react';
import FilmList from '../components/FilmList';
import FooterLink from '../components/FooterLink';
import FilmForm from "../components/FilmForm";



class FilmBox extends Component {
//calling props from Component
  constructor(props){
    super(props);

    this.state = {
      data: [
        {
          id: 1,
          title: "Spider-Man: Into the Spider Verse",
          link: "https://www.imdb.com/title/tt4633694/?ref_=nv_sr_2?ref_=nv_sr_2"
        },
        {
          id: 2,
          title: "Life Itself",
          link: "https://www.imdb.com/title/tt5989218/?ref_=nv_sr_1?ref_=nv_sr_1"
        },
        {
          id: 3,
          title: "Mary Queen Of Scots",
          link: "https://www.imdb.com/title/tt2328900/?ref_=nv_sr_1?ref_=nv_sr_1"
        },
        {
          id: 4,
          title: "The Lego Movie 2: The Second Part",
          link: "https://www.imdb.com/title/tt3513498/?ref_=nv_sr_1?ref_=nv_sr_1"
        },
        {
          id: 5,
          title: "Captain Marvel",
          link: "https://www.imdb.com/title/tt4154664/?ref_=nv_sr_1?ref_=nv_sr_1"
        }
      ]
    }
    this.handleFilmSubmit =
    this.handleFilmSubmit.bind(this);
  }

  handleFilmSubmit(newFilm){
    newFilm.id = Date.now();
    const updatedFilms = [...this.state.data, newFilm];
    this.setState({data: updatedFilms})
  }

  render(){
    return(
      <div>
      <h1>Upcoming Film Releases for UK</h1>
      < hr />
      <FilmForm onFilmSubmit={this.handleFilmSubmit}/>
      <FilmList data={this.state.data}/>
      < hr />
      <FooterLink />
      </div>
    )
  }


}


export default FilmBox;
