import BodyRow from './BodyRow'
import HeaderRow from './HeaderRow'

export interface IColumnType<T> {
  key: string
  title: string
  render?: (column: IColumnType<T>, item: T) => void
}

interface Props<T> {
  data: (T & { id: string })[]
  columns: IColumnType<T>[]
  handleView: (id: string) => void
  handleEdit: (id: string) => void
  handleDelete: (id: string) => void
}

const Table = <T,>({ data, columns, handleView, handleEdit, handleDelete }: Props<T>) => {
  return (
    <table className='max-h-screen w-full text-left text-sm text-gray-500 dark:text-gray-400'>
      <thead className='bg-gray-50 text-center text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400'>
        <HeaderRow columns={columns} />
      </thead>
      <tbody className='text-center'>
        <BodyRow
          data={data}
          columns={columns}
          handleView={handleView}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      </tbody>
    </table>
  )
}

export default Table
