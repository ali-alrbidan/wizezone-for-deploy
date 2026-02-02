import {http} from "./http"

export type ClientApi = {
    id: number,
    ArName: string,
    EnName: string,
    LogoUrl: string,
    Order: number,
    Links: string,
}

export const ClientsService = {
    getAll: () => http<ClientApi[]>("/api/client"),
};