import {DataTable} from 'primereact/datatable'
import {Column} from 'primereact/column';


export const AddressList = ({addresses=[]}) =>
    <div className="AddressList">
        <DataTable value={addresses}>
            <Column field="name" header="Name" />
            <Column field="address" header="MAC address" />
        </DataTable>
    </div>
