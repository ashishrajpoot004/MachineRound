import React,{useState} from 'react'

const TodoList = () => {
    const [value, setValue] = useState("")
    const [data,setData]=useState([]);
    // console.log(value)
    const handlerChange=(e)=>{
        e.preventDefault();
        if(value.trim()==="") return;
        setData([...data,value])
        setValue("")
    }
    const deleteItem=(e)=>{
        const update=data.filter((_,curr)=>curr!==e)
        setData(update)
    }

  return (
    <div className='todo'>
        <form onSubmit={handlerChange}>
            <input type="text"
            value={value}
            onChange={(parth)=>setValue(parth.target.value)}
            placeholder='write description here...' />
            <button className='btn'>Add</button>
        </form>
        {data.map((item,idx)=>{
            return(
                <div key={idx}>
                        {item}
                        <button onClick={()=>deleteItem(idx)}>Delete</button>
                        <button>update</button>
                </div>
            )
        })}
    </div>
  )
}

export default TodoList