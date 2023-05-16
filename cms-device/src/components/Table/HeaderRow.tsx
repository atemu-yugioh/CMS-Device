import { IColumnType } from './Table'

interface Props<T> {
  columns: IColumnType<T>[]
}

const HeaderRow = <T,>({ columns }: Props<T>) => {
  return (
    <tr>
      {columns.map((column, columnIndex) => (
        <th key={`table-head-cell-${columnIndex}`} scope='col' className='px-6 py-3'>
          {column.title}
        </th>
      ))}
    </tr>
  )
}

export default HeaderRow
