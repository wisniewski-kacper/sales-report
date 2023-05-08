import {CustomerModel} from '@/common';

export interface CustomerStateModel {
    list: CustomerModel[];
    loaded: boolean;
    loading: boolean
    error: string|null;
}