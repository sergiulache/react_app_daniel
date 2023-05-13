import { TextField, FormControl, Select, MenuItem, Button } from "@mui/material"

const PersonForm = ({ person, onSubmit, form, handleFieldChange }) => {
  // Handle form submit
  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit()
  }

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Name"
        variant="outlined"
        value={form.name}
        onChange={(event) => handleFieldChange("name", event.target.value)}
      />
      <FormControl
        variant="outlined"
        style={{ minWidth: 170, marginLeft: "0.5rem" }}
      >
        <Select
          labelId="department-label"
          id="department-select"
          value={form.department}
          onChange={(e) =>
            handleFieldChange("department", parseInt(e.target.value))
          }
        >
          <MenuItem value={1}>IT</MenuItem>
          <MenuItem value={2}>Marketing</MenuItem>
        </Select>
      </FormControl>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        style={{ marginLeft: "1rem", marginTop: "0.5rem" }}
      >
        Submit
      </Button>
    </form>
  )
}

export default PersonForm
