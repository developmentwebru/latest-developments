
import { useState, useEffect } from 'react'

export const useApartments = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const getApartments = async () => {
            setIsLoading(true);
            try {
                const response = await fetch('https://603e38c548171b0017b2ecf7.mockapi.io/homes')
                const results = await response.json();
                setData(results);
                setIsError(false);
            } catch (e) {
                setIsError(true);
            } finally {
                setIsLoading(false);
            }
        }
        getApartments();

    }, []);

    return {
        data,
        isLoading,
        isError
    }

}
