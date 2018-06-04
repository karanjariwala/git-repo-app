import React from 'react';
import { connect } from 'react-redux';
import { Actions } from './Actions';
import ContributorsList from './Components/ContributorList';

/* 
    -ContributorsPage on did mount fetches the contributors.
    -ContributorsList gets rendered accordingly
   
*/
class ContributorsPage extends React.Component{
    componentDidMount(){
        const { match, fetchContributors} = this.props;
        fetchContributors(match.params.accountName, match.params.repositoryName, true);
    }

    render(){
        const { match } = this.props;
        return  <ContributorsList 
                    accountName={match.params.accountName} 
                    repositoryName={match.params.repositoryName}  
                    /> 
    }
}


const mapDispatchToProps = dispatch => ({
    fetchContributors: (accountName, repositoryName , firstLoad) => dispatch(Actions.fetchContributorsPage(accountName, repositoryName, firstLoad))
})

export default connect(null, mapDispatchToProps)(ContributorsPage);