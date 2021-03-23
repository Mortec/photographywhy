import React from 'react'
import { Card } from 'semantic-ui-react'
import ArtistModal from './ArtistModal'



const Artists = ( {artists, textAlign} ) => (

  <Card.Group stackable itemsPerRow={6} >

    {[0,1,2,4,3,5].map( ( id, index ) =>
    <ArtistModal key={index} textAlign={textAlign} artist={artists[id]} 
    

        ></ArtistModal>
    )}

  </Card.Group>
)

export default Artists