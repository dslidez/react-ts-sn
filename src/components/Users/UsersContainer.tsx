import React from 'react'
import { connect } from 'react-redux'
import { followAC, unfollowAC } from '../../redux/users-reducer'
import Users from './Users'

let mapStateToProps = (state:any) => {
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch: any) => {
    return {
        follow: (userId: any) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: any) => {
            dispatch(unfollowAC(userId))
        },

    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Users)