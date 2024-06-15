import { useState } from 'react'
import { nanoid } from 'nanoid'

export default function AddWatch({onAddWatch}) {
    const [form, setForm] = useState({
        id: '',
        name: '',
        offsetUTC: ''
    })

    const handleAddWatch = (ev) => {
        ev.preventDefault();
        const watch = {
            id: nanoid(),
            name: form.name,
            offsetUTC: Number(form.offsetUTC),
        }

        
        onAddWatch(watch)
        setForm({
            id: '',
            name: '',
            offsetUTC: ''
        })
    }

    const handleChange = ({target}) => {
        const {name, value} = target;
        setForm(prevStep => ({...prevStep, [name]: value}))
    }

    return (
        <form>
            <div className="row g-3 align-items-end">
                <div className="col">
                    <label className="form-label">Название</label>
                    <input type='string' name='name' className="form-control" value={form.name} onChange={handleChange} required/>
                </div>
                <div className="col">
                    <label className="form-label">Временная зона</label>
                    <input type='number' name='offsetUTC' className="form-control" value={form.offsetUTC} onChange={handleChange} required/>
                </div>
                <div className="col-3">
                    <button className='btn btn-primary text-end' onClick={handleAddWatch}>Добавить</button>
                </div>
            </div>

        </form>
    )
}


