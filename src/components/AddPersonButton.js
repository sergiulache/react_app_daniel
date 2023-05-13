import { Box, Button } from "@mui/material"

const AddPersonButton = ({ onClick }) => {
  return (
    <Box marginTop={2}>
      <Button variant="contained" color="primary" onClick={onClick}>
        Add person
      </Button>
    </Box>
  )
}

export default AddPersonButton
