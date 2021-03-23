import React, { Component } from 'react'
import { Dropdown, Menu, Responsive } from 'semantic-ui-react'

const languageOptions = [
  { key: 'English', text: 'English', value: 'English' },
  { key: 'French', text: 'French', value: 'French' },
  { key: 'Japanese', text: 'Japanese', value: 'Japanese' },
  { key: 'Arabic', text: 'Arabic', value: 'Arabic' },
]

//width >= Responsive.onlyComputer.minWidth

export default class NavBar extends Component  {

    constructor( navItems, language, changeLanguage ) {

      super( navItems, language, changeLanguage );
      this.state = { activeItem: this.props.navItems[0], language: language }
    }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    handleOnUpdate = (e, { width }) => this.setState({ width })
  
    render() {

      const { width } = this.state
      const computer = (width >= Responsive.onlyComputer.minWidth);

      const { activeItem } = this.state;
  
      return (
        <Responsive fireOnMount onUpdate={this.handleOnUpdate}>
          <>
          {computer&&
          <Menu  fixed='top' stackable widths={this.props.navItems.length+1}>

            { this.props.navItems.map( (item, index) => 
                <Menu.Item key={index} name={item} active={activeItem === item} onClick={this.handleItemClick} as='a' href={'#'+item}/>
            )}

          <Menu.Item>
          <Dropdown
            thistext='Language'
            pointing
            onChange={this.props.changeLanguage}
            options={languageOptions}
            value={this.props.language}>
          </Dropdown>
          </Menu.Item>
            
          </Menu>}
          </>

          <>
          {!computer&& 
          <Menu fixed="top" widths={1}>
          <Dropdown basic fluid button icon="bars">
            <Dropdown.Menu icon="bars">
            { this.props.navItems.map( (item, index) => 
                <Dropdown.Item key={index} name={item} active={activeItem === item} onClick={this.handleItemClick} as='a' href={'#'+item}>{item}</Dropdown.Item>
            )}

            <Dropdown.Item>
            <Dropdown
            thistext='Language'
            pointing
            onChange={this.props.changeLanguage}
            options={languageOptions}
            value={this.props.language}>
            </Dropdown>
            </Dropdown.Item>  

              </Dropdown.Menu>
          </Dropdown>
          </Menu>}
          </>
          </Responsive>
      )
    }
  }