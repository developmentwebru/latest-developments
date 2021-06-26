import { useState } from 'react'
import { useApartments } from "./useApartments"
import { Loader } from "../Loader";
import { ApartmentsList } from "../ApartmentsList";

import './Apartments.scss'

const FiltersDefaultValues = {
    fulltitle: '',
}

export const Apartments = () => {
    const apartments = useApartments();

    const [filters, setFilters] = useState(FiltersDefaultValues)
    const handleChangeFilter = (event) => {
        setFilters(prevfilters => ({
            ...prevfilters,
            [event.target.name]: event.target.value
        }))
    }

    const filteredContacts = apartments.data.filter(function (c) {
        if (filters.fulltitle.length > 2) {
            return (c.title.toLowerCase().includes(filters.fulltitle.toLowerCase()))
        } else {
            return apartments.data
        }
    })

    return (
        <div className='container'>
            <h1 className='apart__title'>Our Latest Developments</h1>
            <div className='apart__filters'>
                <label className='apart__filters_label'>
                    Filter
                </label>
                <input
                    name='fulltitle'
                    className='apart__filters_input'
                    value={filters.fulltitle}
                    onChange={handleChangeFilter}
                >

                </input>
            </div>
            <div>
                {(() => {
                    if (apartments.isLoading) {
                        return <Loader />
                    }
                    if (apartments.isError) {
                        return <div>...error</div>;
                    }
                    if (apartments.data) {
                        return <ApartmentsList data={filteredContacts.slice(0, 6)} />;
                    }
                })()}

            </div>
            <div className='apart__button'>
                <button>See more</button>
            </div>
        </div>
    );
}