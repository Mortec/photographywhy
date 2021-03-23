import React from 'react'
import { Grid, Item  } from 'semantic-ui-react'


const ImgRow = ({imgs, copyright}) => {

    return(
        <Grid.Row >

            {imgs.map( (img, index) => 
            <Grid.Column align="center" key={index}>
            <Item>
                <Item.Image size='large' src={'./imgs/'+img}  ui={true} />
                <Item.Content>  
                <Item.Meta >{copyright}</Item.Meta>
                </Item.Content>
             </Item>
            </Grid.Column>
            )}
        </Grid.Row>
)}


const GridLayout = ( {grid, imgs, divide, copyright} ) => { 


    let cue = 0;

    const imgArrays = grid.map( n => {

        let spl = cue;
        let newImgs = imgs;
        cue += n;
        return newImgs.slice(spl, spl+n);
    })
    


    return (

        <Grid stackable columns='equal' divided={divide}>
            { grid.map( (n, index)=> ( <ImgRow key={index} imgs = {imgArrays[index]} divided={divide} copyright={copyright}/> ) ) }
        </Grid>
)}

export default GridLayout;