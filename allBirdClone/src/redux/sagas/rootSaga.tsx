import watcherActionFunction from './saga'

export default function* rootSaga(){
    yield watcherActionFunction()
}
