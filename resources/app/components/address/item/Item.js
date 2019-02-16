const AddressItem = ({address={}, index}) =>
    <tr className="AddressList--Item">
        <td>{index}</td>
        <td>{address.name}</td>
        <td>{address.address}</td>
    </tr>

export default AddressItem