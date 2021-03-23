import React, {Component} from 'react'
import { Card, Item, Grid, Divider, Modal, Button, Icon, Image  } from 'semantic-ui-react'
import GridLayout from './GridLayout'


export default class ArtistModal  extends Component  { 

    state = { open: false }

    openModal = () => this.setState({ open: true })

    closeModal = () => this.setState({ open: false })

    handleButton(evt) {
        evt.preventDefault()
        this.closeModal();
      }
    
    
        
    render() { 
        
        const { artist, textAlign} = this.props;

        return(

            <Modal size='large' closeIcon onClose={this.closeModal} open={this.state.open} 
            
            trigger={
                <Card  onClick={this.openModal}>
                   <Image src={'./imgs/'+artist.cardimg} wrapped ui={true} />
                  
                  <Card.Content >
                    
                    <br/>
                    <Card.Header>{artist.name}</Card.Header>
                    <br/>
                    <Card.Meta>____</Card.Meta>
                    <br/>
                    <Card.Description>{artist.description}</Card.Description>
                    <br/>
                  </Card.Content>
                </Card> }
            > 
                <Modal.Header>{artist.name}</Modal.Header>
                <Modal.Content  >

            <Grid  >
            <Grid.Row>
                </Grid.Row>
            <Grid.Column width={1}>
            
            </Grid.Column>

            <Grid.Column  width={14}>
            <Item>
                <Item.Content align={textAlign}>
                <Item.Meta as="h4">{artist.quote}</Item.Meta>
                {/* <Item.Description>{artist.text}</Item.Description> */}
                </Item.Content>
            </Item>

            <Divider></Divider>
            
            {/* IMAGES */}

            <GridLayout grid={artist.grid} imgs={artist.imgs} divide="true" copyright={artist.copyright}/>

            {/* text / bio */}

            {artist.text && <>
            <Divider></Divider>
            <Item>
                <Item.Content align={textAlign}>
                {/* <Item.Meta as="h4">{artist.quote}</Item.Meta> */}
                <Item.Description>{artist.text}</Item.Description>
                </Item.Content>
            </Item>
            </>}

            <Divider></Divider>
            <Item>
                <Item.Content align={textAlign}>
                <Item.Description>{artist.bio.map( (p, index) => <p key={index}> {p} </p>)}</Item.Description><br/>
                <Item.Meta as="a" href={artist.site}>{artist.site}</Item.Meta>
                </Item.Content>    
            </Item>


            </Grid.Column>

            <Grid.Column width={2}>
            </Grid.Column>

        </Grid>


        </Modal.Content>

        <Modal.Actions>
        <Button basic animated onClick={ (evt)=>this.handleButton(evt)}>
                <Button.Content visible>Close</Button.Content>
            <Button.Content hidden>
                <Icon name='arrow right' />
            </Button.Content>
                </Button>
        </Modal.Actions>

        </Modal>
    )}  
}