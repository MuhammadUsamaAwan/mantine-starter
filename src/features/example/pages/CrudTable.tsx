import React, { useMemo } from 'react';
import { MantineReactTable, MRT_ColumnDef } from 'mantine-react-table';
import { Box, Tooltip, ActionIcon, Button } from '@mantine/core';
import { IconEdit, IconTrash } from '@tabler/icons-react';
import { useGetPostsQuery } from '../exampleService';

export default function CrudTable() {
  const { data, isLoading, isFetching } = useGetPostsQuery({ message: 'B' });

  const columns = useMemo<MRT_ColumnDef<Post>[]>(
    () => [
      {
        accessorKey: 'userId',
        header: 'userId',
      },
      {
        accessorKey: 'id',
        header: 'id',
      },
      {
        accessorKey: 'title',
        header: 'title',
      },
      {
        accessorFn: row => row.body.slice(0, 20),
        header: 'body',
      },
    ],
    []
  );

  return (
    <MantineReactTable
      columns={columns}
      data={data || []}
      state={{ isLoading, showProgressBars: isFetching }}
      enableFullScreenToggle={false}
      renderRowActions={({ row }) => (
        <Box sx={{ display: 'flex', gap: '16px' }}>
          <Tooltip withArrow position='left' label='Edit'>
            <ActionIcon onClick={() => console.log('Edit', row)}>
              <IconEdit />
            </ActionIcon>
          </Tooltip>
          <Tooltip withArrow position='right' label='Delete'>
            <ActionIcon color='red' onClick={() => console.log('Delete', row)}>
              <IconTrash />
            </ActionIcon>
          </Tooltip>
        </Box>
      )}
      enableRowActions
      renderTopToolbarCustomActions={() => (
        <Button color='teal' onClick={() => console.log('Create')} variant='filled'>
          Create New Account
        </Button>
      )}
    />
  );
}
