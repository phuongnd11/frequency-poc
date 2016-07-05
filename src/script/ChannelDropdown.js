import React from 'react';
import DropdownButton from 'react-bootstrap/lib/DropdownButton';
import MenuItem from 'react-bootstrap/lib/MenuItem';
import ButtonGroup from 'react-bootstrap/lib/ButtonGroup';

class Dropdown extends React.Component {
    render() {
        return (
            <ButtonGroup>
                <DropdownButton title="Option One" id="dropdown-a">
                    <MenuItem eventKey="1">Dropdown link</MenuItem>
                    <MenuItem eventKey="2">Dropdown link</MenuItem>
                </DropdownButton> 
                <DropdownButton title="Option One" id="dropdown-b">
                    <MenuItem eventKey="1">Dropdown link</MenuItem>
                    <MenuItem eventKey="2">Dropdown link</MenuItem>
                </DropdownButton>                       
            </ButtonGroup>     
        )
    }
}

export default Dropdown    