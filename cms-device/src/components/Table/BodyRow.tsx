import BodyRowCell from './BodyRowCell'
import { IColumnType } from './Table'

interface Props<T> {
  data: (T & { id: string })[]
  columns: IColumnType<T>[]
  handleView: (id: string) => void
  handleEdit: (id: string) => void
  handleDelete: (id: string) => void
}

const BodyRow = <T,>({ data, columns, handleView, handleEdit, handleDelete }: Props<T>) => {
  return (
    <>
      {data.map((item, itemIndex) => (
        <tr
          key={`table-body-${itemIndex}`}
          className='border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600'
        >
          {columns.map((column, columnIndex) => (
            <BodyRowCell
              key={`table-row-cell-${columnIndex}`}
              item={item}
              column={column}
              handleView={handleView}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
            />
          ))}
        </tr>
      ))}
    </>
  )
}

export default BodyRow
