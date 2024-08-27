
function App() {
    const [counters, setCounters] = React.useState([
        { id: 1, number: 0 },
        { id: 2, number: 0 },
        { id: 3, number: 0 },
        { id: 4, number: 0 },
        { id: 5, number: 0 }

    ])
    const updateCounter = (id, n) => {
        let idx = counters.findIndex(el => el.id === id)
        const newCounter = [...counters]
        if (newCounter[idx].number + n < 0) { return }
        newCounter[idx].number += n
        setCounters(newCounter)

    }

    
    const remove = (id) => {
        setCounters(item => item.filter(el => el.id != id))
    }
    const add = () => {
        setCounters([...counters,{id:counters.length+1,number:0}])
    }

    return (
        <div className="app">
            <h1 className="show-sum">Sum = {counters.reduce((prev,curr)=>{
                prev += curr.number
                return prev
            },0)} </h1>
            <button onClick={() => {add()}} className="btn-add">Add Counter</button>
            <hr />
            {counters.map(el => <Counter key={el.id} item={el} updateCounter={updateCounter} remove={remove} add={add} />)}
        </div>
    )


}


function Counter(props) {
    const { item, updateCounter, remove } = props
    console.log(props);

    return (

        <div className="counter">
            <button onClick={() => updateCounter(item.id, -1)} className="btn btn-dec">-</button>
            <h3 className="number">{item.number}</h3>
            <button onClick={() => updateCounter(item.id, 1)} className="btn btn-inc">+</button>
            <button onClick={() => updateCounter(item.id, -item.number)} className="btn btn-clr">C</button>
            <button onClick={() => remove(item.id)} className="btn btn-rem">X</button>
        </div>

    )
}





































ReactDOM.createRoot(document.querySelector("#root")).render(<App />);