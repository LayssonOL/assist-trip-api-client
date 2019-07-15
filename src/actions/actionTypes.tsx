import {Action} from "redux";

export enum destinationsActionTypes {
    RECEIVE_DESTINATIONS,
    SHOW_DESTINATIONS
}


export default interface IDestination{
    id: number,
    name: string
}

export default interface DestinationInterface extends Action{
    type: destinationsActionTypes,
    destinations: Array<IDestination>
};