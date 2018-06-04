import React from 'react';
import { connect } from 'react-redux';
import styled from "styled-components";
import Search from './Components/Search';
import CardList from './Components/CardList';
import ErrorHandler from '../Common/Components/ErrorHandler';


const Container = styled.div`
height:100vh;
display:flex;
justify-content:center;
flex-flow: wrap;
`
// RepoSearchPage is container component containing `Search` and `CardList` Components.

const RepoSearchPage=({ errMsg })=>(
            <ErrorHandler error={errMsg}>
                    <Container>
                            <Search/>
                            <CardList />
                    </Container>
            </ErrorHandler>
 )

const mapStateToProps = state => ({
    errMsg: state.repository.errMsg
})


export default connect(mapStateToProps)(RepoSearchPage)
