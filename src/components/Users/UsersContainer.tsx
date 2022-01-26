import React from 'react'
import { connect } from 'react-redux'
import { follow, setCurrentPage, setTotalUsersCount, setUsers, toggleIsFetching, unfollow } from '../../redux/users-reducer'
import axios from "axios"; 
import { Users } from './Users';
import preloader from './../../assets/img/Rocket.gif'

class UsersContainer extends React.Component<any> {
    componentDidMount() {
      this.props.toggleIsFetching(true)
      axios
        .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        .then((response: any) => {
          this.props.toggleIsFetching(false)
          this.props.setUsers(response.data.items);
          this.props.setTotalUsersCount(response.data.totalCount);
        });
    }
  
    onPageChanged = (pageNumber: number) => {
      this.props.setCurrentPage(pageNumber);
      this.props.toggleIsFetching(true)
      axios
        .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
        .then((response: any) => {
          this.props.toggleIsFetching(false)
          this.props.setUsers(response.data.items);
        });
    }
  
    render(): any {
      return <>
      {this. props.isFetching ? <img src={preloader}/> : null }
        <Users totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize} 
        currentPage={this.props.currentPage}
        onPageChanged={this.onPageChanged}
        users={this.props.users}
        follow={this.props.follow}
        unfollow={this.props.unfollow}/>
      ;
      </>}
  }
  

let mapStateToProps = (state:any) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
    }
}

let mapDispatchToProps = (dispatch: any) => {
    return {
        follow: (userId: any) => {
            dispatch(follow(userId))
        },
        unfollow: (userId: any) => {
            dispatch(unfollow(userId))
        },
        setUsers: (users: any) => {
            dispatch(setUsers(users))
        },
        setCurrentPage: (pageNumber: any) => {
            dispatch(setCurrentPage(pageNumber))
        },
        setTotalUsersCount: (totalCount: any) => {
            dispatch(setTotalUsersCount(totalCount))
        },
        toggleIsFetching: (isFetching: boolean) => {
            dispatch(toggleIsFetching(isFetching))
        },
    }
}

export default connect(mapStateToProps, {follow,unfollow, setUsers,
  setCurrentPage, setTotalUsersCount,toggleIsFetching}) (UsersContainer)