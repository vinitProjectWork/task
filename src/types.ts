export interface ITableData {
    id: number;
    user_id: number;
    title: string;
    body: string;
}

export interface IData {
    data: any[];
}

export interface IAction {
    type: string;
    payload: ITableData[];
}
