import PropTypes from 'prop-types'
import moment from 'moment'
import { useState, useEffect } from 'react';

export default function ItemWatch({watch, onRemove}) {
    const {name, offsetUTC} = watch;
    const time = moment.utc().utcOffset(offsetUTC);
    const [timeW, setTimeW] = useState({
        hour: time.hour() * 15,
        minute: time.minute() * 6,
        second: time.second() * 6,
    })

    const addSecond = () => {
        setTimeW(prevTimeW => {
            return {
                hour: (prevTimeW.hour + 0.00416) % 360,
                minute: (prevTimeW.minute + 0.1) % 360,
                second: (prevTimeW.second + 6) % 360,
            }
        })
    }

    useEffect(addSecond, [])

    useEffect(() => {
        const timeout = window.setTimeout(addSecond, 1 * 1000);
        return () => {
            clearTimeout(timeout)
        }
    }, [time])

    return (
            <div className='col-3 position-relative text-center g-3'>
                <div>{name}</div>
                <div className="clock">
                    <span className="clock__hand clock__hand--hour" style={{transform: `rotate(${timeW.hour}deg)`}}></span>
                    <span className="clock__hand clock__hand--minute" style={{transform: `rotate(${timeW.minute}deg)`}}></span>
                    <span className="clock__hand clock__hand--second" style={{transform: `rotate(${timeW.second}deg)`}}></span>
                </div>    
                <span className="position-absolute top-0 start-100 translate-middle" onClick={() => onRemove(watch)}><span className="material-icons">close</span></span>
            </div>
            
    )
}
