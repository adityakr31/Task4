import React from 'react';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function ServerList({ servers, onDelete }) {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <strong>ID</strong>
            </TableCell>
            <TableCell>
              <strong>Name</strong>
            </TableCell>
            <TableCell>
              <strong>Language</strong>
            </TableCell>
            <TableCell>
              <strong>Framework</strong>
            </TableCell>
            <TableCell>
              <strong>Modify</strong>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {servers.map((server, index) => (
            <TableRow key={server.id} style={{ backgroundColor: index % 2 === 0 ? '#f2f2f2' : 'white' }}>
              <TableCell>{server.id}</TableCell>
              <TableCell>{server.name}</TableCell>
              <TableCell>{server.language}</TableCell>
              <TableCell>{server.framework}</TableCell>
              <TableCell>
                <Button variant="outlined" color="secondary" onClick={() => onDelete(server.id)}>
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default ServerList;
