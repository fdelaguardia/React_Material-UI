
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper  } from "@mui/material";

export const MuiTable = () => {
    return <TableContainer component={Paper} sx={{ maxHeight: '500px' }} >
        <Table aria-label='simple table' stickyHeader >
            <TableHead>
                <TableRow>
                    <TableCell>Id</TableCell>
                    <TableCell>FirstName</TableCell>
                    <TableCell>Last Name</TableCell>
                    <TableCell align='center' >Email</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    tableData.map(row => (
                        <TableRow key={row.id} 
                        sx={{ '&:last-child td, &:last-child th': {border: 0} }}>
                            <TableCell>{row.id}</TableCell>
                            <TableCell>{row.first_name}</TableCell>
                            <TableCell>{row.last_name}</TableCell>
                            <TableCell align="center" >{row.email}</TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
    </TableContainer>
}

const tableData = [{
    "id": 1,
    "first_name": "Malva",
    "last_name": "Baccup",
    "email": "mbaccup0@independent.co.uk"
  }, {
    "id": 2,
    "first_name": "Axel",
    "last_name": "Fozzard",
    "email": "afozzard1@symantec.com"
  }, {
    "id": 3,
    "first_name": "Sadye",
    "last_name": "Coombes",
    "email": "scoombes2@businesswire.com"
  }, {
    "id": 4,
    "first_name": "Natala",
    "last_name": "Eberle",
    "email": "neberle3@imgur.com"
  }, {
    "id": 5,
    "first_name": "Willard",
    "last_name": "Charteris",
    "email": "wcharteris4@google.com.au"
  }, {
    "id": 6,
    "first_name": "Simmonds",
    "last_name": "Hember",
    "email": "shember5@smugmug.com"
  }, {
    "id": 7,
    "first_name": "Dar",
    "last_name": "Brooks",
    "email": "dbrooks6@toplist.cz"
  }, {
    "id": 8,
    "first_name": "Pietra",
    "last_name": "McIlmurray",
    "email": "pmcilmurray7@go.com"
  }, {
    "id": 9,
    "first_name": "Katine",
    "last_name": "Villa",
    "email": "kvilla8@amazon.de"
  }, {
    "id": 10,
    "first_name": "Gale",
    "last_name": "Seer",
    "email": "gseer9@vimeo.com"
  }]