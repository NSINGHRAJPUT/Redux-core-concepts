const redux = require('redux');

const counterReducer = (state = { counter : 50},action) =>{
    return {
        counter: state.counter-5
    }
}

const store = redux.createStore(counterReducer);

const counterSubscriber = () =>{
    const latestState = store.getState();
    console.log(latestState)
}

store.subscribe(counterSubscriber)

store.dispatch({ type : 'decrement'});
