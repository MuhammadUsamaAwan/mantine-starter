import { useMemo } from 'react';
import { MantineReactTable, MRT_ColumnDef } from 'mantine-react-table';
import { Badge, Button } from '@mantine/core';
import { useGetPostsQuery } from '../exampleService';

export default function SelectionTable() {
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
        header: 'Status',
        accessorKey: 'userId',
        Cell: ({ cell }) => (
          <Badge color='red' variant='filled'>
            {cell.getValue<string>()}
          </Badge>
        ),
      },
      {
        accessorKey: 'body',
        header: 'body',
      },
    ],
    []
  );

  return (
    <MantineReactTable
      enableRowSelection
      enableColumnResizing
      columns={columns}
      data={data || []}
      state={{ isLoading, showProgressBars: isFetching }}
      enableFullScreenToggle={false}
      renderTopToolbarCustomActions={({ table }) => (
        <Button color='teal' onClick={() => console.log(table.getSelectedRowModel())} variant='filled'>
          Log Selected
        </Button>
      )}
    />
  );
}
