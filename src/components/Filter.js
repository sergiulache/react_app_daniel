import React, { useState } from "react"
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
  Button,
} from "@mui/material"

const Filter = ({ onFilterChange, onSearchClick }) => {
  // State for name filter
  const [name, setName] = useState("")

  // State for department filter
  const [department, setDepartment] = useState("")

  // Handle name change
  const handleNameFilterChange = (event) => {
    setName(event.target.value)
    onFilterChange({ name: event.target.value, department: department || "" })
  }

  // Handle department change
  const handleDepartmentChange = (event) => {
    setDepartment(event.target.value)
    onFilterChange({ name, department: event.target.value || "" })
  }

  return (
    <div>
      <Box display="flex" alignItems="center">
        <TextField
          label="Name..."
          value={name}
          onChange={handleNameFilterChange}
        />
        <FormControl
          variant="outlined"
          style={{ minWidth: 170, marginLeft: "1rem" }}
        >
          <InputLabel id="department-label">Department filter</InputLabel>
          <Select
            label="Department filter"
            labelId="department-label"
            value={department}
            onChange={handleDepartmentChange}
            displayEmpty
            renderValue={(value) =>
              value === "" ? null : value === 1 ? "IT" : "Marketing"
            }
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={1}>IT</MenuItem>
            <MenuItem value={2}>Marketing</MenuItem>
          </Select>
        </FormControl>
        <Button
          variant="contained"
          color="primary"
          onClick={onSearchClick}
          style={{ marginLeft: "0.5rem" }}
        >
          Search
        </Button>
      </Box>
    </div>
  )
}

export default Filter
