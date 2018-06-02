import React from 'react';
import styled from 'styled-components';
import {connect } from 'react-redux';

const Container=styled.div`
height: 80vh;
width: 100%;
`
const CardList = ({ orderArray, repositories }) => (<Container>
     {orderArray ? orderArray.map((id)=><div key={id}>{repositories[id].full_name}</div>) : ''}
     </Container>)


const mapStateToProps = (state) => {
  const {result, entities }= state.repository.repositoryData;
  return {
      orderArray: result,
      repositories: entities
  }
}

export default connect(mapStateToProps)(CardList);