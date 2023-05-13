import { TableRow, TableCell } from "@mui/material"
import { IconButton, Menu, MenuItem } from "@mui/material"
import MoreVertIcon from "@mui/icons-material/MoreVert"
import React from "react"

const PersonRow = ({ person, onActionSelect }) => {
  // State for menu anchor element
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)

  // Handle menu click
  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  // Handle menu close
  const handleMenuClose = () => {
    setAnchorEl(null)
  }

  // Handle edit action
  const handleEdit = () => {
    onActionSelect("Edit", person.name)
    handleMenuClose()
  }

  // Handle delete action
  const handleDelete = () => {
    onActionSelect("Delete", person.name)
    handleMenuClose()
  }

  return (
    <TableRow>
      <TableCell>{person.name}</TableCell>
      <TableCell>{person.department === 1 ? "IT" : "Marketing"}</TableCell>
      <TableCell>
        <IconButton
          aria-label="more"
          aria-controls="long-menu"
          aria-haspopup="true"
          onClick={handleMenuClick}
        >
          <MoreVertIcon />
        </IconButton>
        <Menu
          id="long-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleMenuClose}
          PaperProps={{
            style: {
              maxHeight: 48 * 4.5,
              width: "20ch",
            },
          }}
        >
          <MenuItem onClick={handleEdit}>Edit</MenuItem>
          <MenuItem onClick={handleDelete}>Delete</MenuItem>
        </Menu>
      </TableCell>
    </TableRow>
  )
}

export default PersonRow
