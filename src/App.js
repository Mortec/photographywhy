import React, { Component } from 'react';
import 'semantic-ui-less/semantic.less'
import { Segment, Image, Container, Header, Item } from 'semantic-ui-react';
import ajax from 'superagent';

import French from './contents/fr.js';
import English from './contents/en.js';
import Japanese from './contents/jp.js';
import Arabic from './contents/ar.js';

import NavBar from './components/NavBar';
import Slideshow from './components/Slideshow';
import Presentation from './components/Presentation';
import Artists from './components/Artists';
import Program from './components/Program';
import Infos from './components/Infos';


import './App.css';



const languages = {
  English: English,
  French: French,
  Japanese : Japanese,
  Arabic: Arabic
}

export default  class App extends Component  {

  constructor() {

    super();
    this.state = { ...languages.English, ...{language: 'English', input: '', submitIcon: 'paper plane' } }
  }

  changeLanguage = (e, data)=>{ 

    this.setState( {...languages[data.value], ...{language: data.value}} );
  }

  submit = (e, data)=> {

    ajax.post( "https://photographywhy.com/newsletter.php")
    .type('form')
    .send( "email="+this.state.input )
    .then( res => console.log('res',res.body))
    .catch( err => console.log('err',err))

    this.setState( {input : '', submitIcon: 'check circle' })
  }

  change = (e, data)=> {
    this.setState( {input : data.value, submitIcon: 'paper plane'})
  }

  render() {

    const content = this.state

    return (

      <div className="App">

        {/*NAVBAR_HEADER*/}
        <NavBar navItems={content.navitems} language={this.state.language} changeLanguage={this.changeLanguage}/>

        <Segment.Group  id={content.navitems[0]}>
        
          {/*SLIDESHOW*/}
          <Segment >
            <Slideshow imgs={content.slideimgs} title={content.title}> </Slideshow>
          </Segment>


          {/*PRESENTATION*/}
          <Segment id={content.navitems[1]}>
            <br/>
            <Header as='h1' >{content.title}</Header>
            <Presentation presentation={content.presentation} intro={content.intro} textAlign={content.textAlign}></Presentation>
          </Segment>


          {/*ARTISTS*/}
          <Segment id={content.navitems[2]}>
            <br/>      
            <Header as='h2' >{content.navitems[2]}</Header><br></br>
            <Artists artists={content.artists} textAlign={content.textAlign}/>
          </Segment>


          {/*PROGRAM*/}
          <Segment id={content.navitems[3]} size="large">
            <br/>
            <Header as='h2' >{content.navitems[3]}</Header>
            <Program program={content.program} textAlign={content.textAlign}/>
          </Segment>

          {/*FUTURE*/}
          <Segment id="futur" size="large">
            <br/>
            <Header as='h2' >{content.futur_title}</Header>
            <Container textAlign='center' >{content.futur.map( (txt, index) =><p key={index}>{txt}</p> )}</Container>
            <br/>
            <Image as="a" href="http://www.bunka.go.jp" size='small' src={'./imgs/'+content.partners[0]} wrapped ui={true}></Image>
            <Container textAlign='center' as="h4">
              <p>{content.credits[0]}</p>
              <Image as="a" href="http://rencontres-photos.com  " size='medium' src={'./imgs/'+content.partners[1]} wrapped ui={true}></Image>
              <p>{content.credits[1]}</p><br/><br/>
              <p>{content.credits[2]}</p><br/>
              <Item as="a" href="http://www.mikinitadori.com">{content.credits[3]}</Item >
            </Container><br/>
            <Container  textAlign='center'><br></br>{content.copyrights.map( (txt, index) =><p key={index}>{txt}</p> )}</Container>
            <br></br> <br></br>
          </Segment>


          {/*INFOS_FOOTER*/}
          <Segment as="footer" id={content.navitems[4]}>
            <br/>
            <Header as='h2' >{content.navitems[4]}</Header>
            <Infos infos={content.infos} keepintouch={content.keepintouch} input={content.input} submit={this.submit} change={this.change} submitIcon={content.submitIcon}></Infos>
          </Segment>

      </Segment.Group>


      </div>
    )
  }
}
