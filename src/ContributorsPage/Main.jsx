import React from 'react';
import { connect } from 'react-redux';
import { Actions } from './Actions';
import ContributorsList from './Components/ContributorList';
import ErrorHandler from '../Common/Components/ErrorHandler';

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
        const { match, errorMsg } = this.props;
        return (
            <ErrorHandler error={errorMsg} >
                <ContributorsList 
                        accountName={match.params.accountName} 
                        repositoryName={match.params.repositoryName}  
                        /> 
            </ErrorHandler>)
    }
}


const mapStateToProps = ( state )=> ({
    errorMsg: state.contributors.errorMsg
})

const mapDispatchToProps = dispatch => ({
    fetchContributors: (accountName, repositoryName , firstLoad) => dispatch(Actions.fetchContributorsPage(accountName, repositoryName, firstLoad))
})

export default connect(mapStateToProps, mapDispatchToProps)(ContributorsPage);