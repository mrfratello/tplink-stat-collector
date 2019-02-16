import AddressItem from '../item/Item'


const AddressList = ({addresses=[]}) =>
    <div className="AddressList">
        <table>
            <thead>
                <tr>
                    <th>№</th>
                    <th>Name</th>
                    <th>MAC address</th>
                </tr>
            </thead>
            <tbody>
                { addresses.map((address, i) => <AddressItem key={i} address={address} index={i + 1} />) }
            </tbody>
        </table>
    </div>


export default AddressList