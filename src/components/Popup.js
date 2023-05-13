import { Dialog, DialogTitle, DialogContent, Box } from "@mui/material"

const Popup = ({ children, open, onClose, title }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{title}</DialogTitle>
      <Box>
        <DialogContent>{children}</DialogContent>
      </Box>
    </Dialog>
  )
}

export default Popup
