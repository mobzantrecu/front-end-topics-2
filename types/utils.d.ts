import { ReactElement } from "react";
import "reflect-metadata";
interface Columns {
    renderCell?: (params: any) => ReactElement<any, any>;
    headerName?: any;
    fieldName?: any;
}
declare const getColumns: (arg: any) => Columns[];
export default getColumns;
