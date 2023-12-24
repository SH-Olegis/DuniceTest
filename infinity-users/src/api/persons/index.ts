import api from '@/api/api';
import type { PersonInterface } from '@/api/persons/interfaces';

export const getPersons = async (): Promise<PersonInterface[]> => {
    const response = await api.get('/person');

    return response.data
}