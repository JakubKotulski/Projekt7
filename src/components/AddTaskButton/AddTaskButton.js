import Button from '@restart/ui/esm/Button'
import './AddTaskButton.css'

const AddTaskButton = () => {
  return(
    <Button id="add-button">
      <img src="group.png" alt="Plus icon"></img>
      Add New
    </Button>
  )
}

export default AddTaskButton