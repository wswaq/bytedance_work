import { app, h, reactive } from './src'

const App = {
  setup () {
    const add = () => {
      state.count++
    }
    const sub=()=> {
      state.count--
    }
    let state = reactive({ count: 0 })
    return () => (
      <div>
        {state.count > 0 &&
        <h2>
          我是if
        </h2>
        }
        <h1>{state.count}</h1>
        <button onClick={add}>+</button>
        <button onClick={sub}>-</button>
      </div>
    )
  }
}

app(App)
