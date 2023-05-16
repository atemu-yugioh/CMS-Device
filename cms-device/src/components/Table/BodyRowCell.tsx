import { get } from 'lodash'
import { IColumnType } from './Table'

interface Props<T> {
  item: T & { id: string }
  column: IColumnType<T>
  handleView: (id: string) => void
  handleEdit: (id: string) => void
  handleDelete: (id: string) => void
}

const BodyRowCell = <T,>({ item, column, handleView, handleEdit, handleDelete }: Props<T>) => {
  const id = item.id
  item = {
    ...item,
    action: {
      handleView: () => handleView(id),
      handleEdit: () => handleEdit(id),
      handleDelete: () => handleDelete(id)
    }
  }
  const value = get(item, column.key)
  return <td className='px-6 py-3'>{column.render ? column.render(column, item) : value}</td>
}

export default BodyRowCell
