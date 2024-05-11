import { useId } from 'react'
import './Filters.css'
import { useFilters } from '../hooks/useFilters.js'

export function Filters () {

    const { filters, setFilters } = useFilters()

    const minPriceFilterId = useId()
    const nameFilterId = useId()

    const handleChangeMinPrice = (event) => {
        setFilters(prevState => ({
            ...prevState,
            minPrice: event.target.value
        }))
    }

    const handleChangeName = (event) => {
        setFilters(prevState => ({
            ...prevState,
            name: event.target.value
        }))
    }

    return (
        <section className='filters'>
            <div>
                <label htmlFor={minPriceFilterId}>Precio</label>
                <input 
                type='range'
                id={minPriceFilterId} 
                min='0'
                max='100'
                onChange={handleChangeMinPrice}
                value={filters.minPrice}
                />
                <span>${filters.minPrice}</span>
            </div>

            <div>
                <label htmlFor={nameFilterId}>Categoría</label>
                <select id={nameFilterId} onChange={handleChangeName}>
                    <option value='all'>Todas</option>
                    <option value='Clothes'>Ropa</option>
                    <option value='Electronics'>Electrónica</option>
                    <option value='Furniture'>Muebles</option>
                    <option value='Shoes'>Zapatos</option>
                    <option value='Miscellaneous'>Misceláneas</option>
                </select>
            </div>
        </section>
    )
}