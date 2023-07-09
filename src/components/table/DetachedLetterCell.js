const DetachedLetterCell = ({tableItem}) => {
    return (
        <td>{ tableItem.truthValue ? 'T' : 'F' }</td>
    )
}

export default DetachedLetterCell;