import { useDispatch,useSelector } from 'react-redux';
function App() {

    const dispatch = useDispatch();
    const {c}=useSelector(state=>state.customReducer)
    const addBtn = () => {
      dispatch({
        type:'increment'
      })
    }
    const subBtn = () => {
      dispatch({
        type:'decrement'
      })
    }
    const addbyValue = () => {
      dispatch({
        type:'incrementByValue',
        payload:25
      })
    }
    return (
      <div className="App">
        <p>{c}</p>
        <button onClick={addBtn}>Increment</button>
        <button onClick={subBtn}>Decrement</button>
        <button onClick={addbyValue}>AddbyValue</button>


      </div>
    );
  }

export default App;
