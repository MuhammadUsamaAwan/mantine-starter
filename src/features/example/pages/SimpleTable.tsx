import React, { useMemo } from 'react';
import { MantineReactTable, MRT_ColumnDef } from 'mantine-react-table';
import { useGetPostsQuery } from '../exampleService';

export default function SimpleTable() {
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
        accessorKey: 'body',
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
    />
  );
}
