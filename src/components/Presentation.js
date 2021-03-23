import React from 'react'
import { Grid, Container} from 'semantic-ui-react'



const Presentation = ({intro, presentation, textAlign }) => {

      return (
         <Grid>

            <Grid.Row>
            <Grid.Column width="1"> 
               </Grid.Column>
               <Grid.Column as="h3" width="14" textAlign='center'>

                  {intro.map( (p, index) => <Container text key={index}> {p} </Container>)}

               </Grid.Column>
            </Grid.Row>

            <Grid.Row >
               {/* <Grid.Column width="1">
               </Grid.Column> */}
               {/* <Grid.Column width="14" textAlign='justified'> */}
                  <Container text textAlign={textAlign}>
                  {presentation.map( (txt, index) =><p key={index}>{txt}</p> ) }
                  </Container>
               {/* </Grid.Column> */}
            </Grid.Row>
        </Grid>
      )
}

export default Presentation