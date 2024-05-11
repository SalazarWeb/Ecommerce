import { useContext } from 'react';
import { FiltersContext } from '../context/filters.jsx';

export function useFilters () {

    const {filters, setFilters} = useContext(FiltersContext)
  
    const filterProducts = (products) => {
      return products.filter(product => {
        return (
          product.price >= filters.minPrice && (
            filters.name === 'all' || 
            product.name === filters.name)
        )
      })
    }
  
    return { filters, filterProducts, setFilters }
  }