import './Status.css'

const Status = ({idName, value}) => {
  return(
    <div className="status">
      <div className="status-first" id={idName}>{value}</div>
    </div>
  )
}

export default Status