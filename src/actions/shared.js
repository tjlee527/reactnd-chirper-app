import { getInitialData } from '../utils/api'
import { receiveUsers } from '../actions/users.js'
import { receiveTweets } from '../actions/tweets.js'
import setAuthedUser from '../actions/authedUser.js'

const AUTHED_ID = 'tylermcginnis'

export function handleInitialData () {
  return (dispatch) => {
    return getInitialData()
      .then(({ users, tweets }) => {
        // add users to shared store
        dispatch(receiveUsers(users))
        // add tweets to shared store
        dispatch(receiveTweets(tweets))
        dispatch(setAuthedUser(AUTHED_ID))
      })
  }
}