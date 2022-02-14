import React from 'react'
import { connect } from 'react-redux'
import { follow, setCurrentPage, setTotalUsersCount, setUsers, toggleIsFetching, unfollow , toggleFollowingProgress} from '../../redux/users-reducer'
import axios from "axios"; 
import { Users } from './Users';
import preloader from './../../assets/img/Rocket.gif'
import { usersAPI } from './../../api/api';
import { getUsersThunkCreator, followThunkCreator, unfollowThunkCreator } from './../../redux/users-reducer';
import s from './users.module.css'


class UsersContainer extends React.Component<any> {
    componentDidMount() {

      this.props.getUsers(this.props.currentPage, this.props.pageSize)
      // this.props.toggleIsFetching(true)
      // usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then((data: any) => {
      //     this.props.toggleIsFetching(false)
      //     this.props.setUsers(data.items);
      //     this.props.setTotalUsersCount(data.totalCount);
      //   });
    }
  
    onPageChanged = (pageNumber: number) => {
      this.props.getUsers(pageNumber, this.props.pageSize)
      this.props.setCurrentPage(pageNumber);
      // this.props.toggleIsFetching(true)
      // usersAPI.getUsers(pageNumber, this.props.pageSize).then((data: any) => {
      //     this.props.toggleIsFetching(false)
      //     this.props.setUsers(data.items);
      //   });
    }
  
    render(): any {
      return <>
      {this. props.isFetching ?  <img src={preloader}/> : null }
        <Users totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize} 
        currentPage={this.props.currentPage}
        onPageChanged={this.onPageChanged}
        users={this.props.users}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
        unfollowThunkCreator={this.props.unfollowThunkCreator}
        followThunkCreator={this.props.followThunkCreator}
        toggleFollowingProgress={this.props.toggleFollowingProgress}
        followingInProgress={this.props.followingInProgress}/>
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
        followingInProgress: state.usersPage.followingInProgress
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

export default connect(mapStateToProps, {follow,unfollow,
  setCurrentPage,
   toggleFollowingProgress,getUsers: getUsersThunkCreator, followThunkCreator, unfollowThunkCreator}) (UsersContainer)