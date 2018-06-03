import React from 'react';
import { connect } from 'react-redux';
import { Actions } from './Actions';
import ContributorsList from './Components/ContributorList';


class ContributorsPage extends React.Component{
    componentDidMount(){
        const { match, fetchContributors} = this.props;
        fetchContributors(match.params.accountName, match.params.repositoryName);
    }

    render(){
        return  <ContributorsList /> 
    }
}


const mapDispatchToProps = dispatch => ({
    fetchContributors: (accountName, repositoryName) => dispatch(Actions.fetchContributors(accountName, repositoryName))
})

export default connect(null, mapDispatchToProps)(ContributorsPage);