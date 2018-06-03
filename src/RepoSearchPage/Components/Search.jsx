import React from 'react';
import {connect } from 'react-redux';
import styled from 'styled-components';
import Input from '../../Common/Components/Input'
import Button from '../../Common/Components/Button'
import { Actions } from '../Actions'

const SearchContainer=styled.div`
width:100%;
height:20vh;
display: flex;
align-items: center;
justify-content: center;
`

/*
- Basic Search Component using Input and a Button. 
- onClick of Button fetch action is fiered.
*/

const Search = ({ searchValue, handleChange, onButtonClick }) => (
            <SearchContainer> 
                <Input
                    placeholder="search repository name"
                    value={searchValue}
                    onChange={handleChange}
                    />
                <Button primary onClick={onButtonClick} > go</Button>
            </SearchContainer>)

 const mapStateToProps=(state)=> ({
     searchValue:state.repository.searchValue,
 })

 const mapDisptachToProps=dispatch=>({
     handleChange:(e)=>dispatch(Actions.onInputChange(e.target.value)),
     onButtonClick: () => dispatch(Actions.fetchRepositories())
 })

export default connect(mapStateToProps, mapDisptachToProps)(Search);