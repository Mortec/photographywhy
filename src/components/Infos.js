import React from 'react'
import { Grid, Header, Input, Form, Item } from 'semantic-ui-react'



const Infos = ({infos, keepintouch, input, submit, change, submitIcon}) => (

    <Grid stackable columns='equal' divided padded>

    <Grid.Row textAlign='center'>

    {infos.map( (info, index) => 
            <Grid.Column key={index}> 
                  <Item size="large">
                    <Item.Header as='h3'>{info.name}</Item.Header>
                    
                    {/* <Header as='h4'>{info.date}</Header> */}
                    <Item.Content>{info.address1}</Item.Content>
                    <Item.Content>{info.address2}</Item.Content>
                    <Item.Content>___</Item.Content>
                    <Item.Content as="a"        href={info.site}>{info.site}</Item.Content>
                    <br/>
                    </Item>
            </Grid.Column>
    )}

            <Grid.Column >
                                <Header as='h3'>{keepintouch[0]}</Header>
                                <Item a="a" href={"mailto:"+keepintouch[1]}>email : {keepintouch[1]}</Item><br/><br/>
                                <Item>{keepintouch[2]}</Item>
                <Form onSubmit={submit}>
                        <Form.Field>
                                <Input name="email" onChange={change} action={{ type: 'submit', content: '' }} icon={submitIcon} placeholder='send me some news' value={input}/>
                        </Form.Field>
                </Form><br/>
          </Grid.Column>
    </Grid.Row>
  </Grid>
)

export default Infos