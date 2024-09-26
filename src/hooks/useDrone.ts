import { useContext } from 'react';
import {DroneContext, DroneContextType} from '../context/DroneContext'

export const useDrone = (): DroneContextType => {
    const context = useContext(DroneContext);
    if (!context) {
        throw new Error('useDrone must be used within a DroneProvider');
    }
    return context;
};