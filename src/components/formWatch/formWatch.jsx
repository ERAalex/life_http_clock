
import ListWatches from "./listWatch"
import AddWatch from "./addWatch"
import {useState} from 'react'
import './css/formWatch.css'

export default function FormWatch({initialState}) {
    const [list, setList] = useState(initialState)

    const handleAddWatch = (watch) => {
        setList(prevList => {
            return [...prevList.filter(el => el.id !== watch.id), watch]
        })
    }

    const handleDelete = (watch) => {
        setList(prevList => {
            return prevList.filter(el => { 
                if (watch.id === el.id) return false
                else return true
            })
        })
    }

    return (
        <div className='container mb-3' style={{width: '50vw', 
        position: 'absolute', left: '50%', backgroundColor: 'grey', translate: '-50%'}}>
            <ListWatches list={list} onRemove={handleDelete} />
            <div>
                <AddWatch onAddWatch={handleAddWatch} />
            </div>
        </div>
        
    )
}
