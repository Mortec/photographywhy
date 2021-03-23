import React from 'react'
import { Grid, Image, Item } from 'semantic-ui-react'

const Program = ({program, textAlign}) => (
  <Grid stackable >
      {program.map( (item, index) => (
         <Grid.Row key={index}>
          <Grid.Column width={2}>

          </Grid.Column>
          <Grid.Column width={2}>
          <Image size='medium' src={'./imgs/'+item.img} wrapped ui={true}/>
          </Grid.Column>

          <Grid.Column width={8}>
            <Item key={index}>
              <Item.Content align={textAlign}>
                  <Item.Header as='h4'>{item.date}</Item.Header>
                  <Item.Meta as='h4'>{item.place}</Item.Meta>
                  <Item.Description><div dangerouslySetInnerHTML={{ __html: item.presentation }}/></Item.Description>
              </Item.Content>
            </Item>
          </Grid.Column>

        </Grid.Row>
      )
      )}

</Grid>
)

export default Program
