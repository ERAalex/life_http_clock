import ItemWatch from './itemWatch'

export default function ListWatches({list, onRemove}) {
    return (
        <div className="row align-items-start p-3 g-3">
            {list.map(el => <ItemWatch key={el.id} watch={el} onRemove={onRemove} />)}
        </div>
    )
}

