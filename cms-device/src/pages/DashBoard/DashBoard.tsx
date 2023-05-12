interface Prop {
  title: string
}

const DashBoard = ({ title }: Prop) => {
  return <div>{title}</div>
}

export default DashBoard
