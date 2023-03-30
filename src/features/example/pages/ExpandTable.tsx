import React, { useMemo } from 'react';
import { MantineReactTable, MRT_ColumnDef } from 'mantine-react-table';
import { Box, Title, Text } from '@mantine/core';
import { useGetPostsQuery } from '../exampleService';

export default function ExpandTable() {
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
      renderDetailPanel={({ row }) => (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}
        >
          <Box sx={{ textAlign: 'center' }}>
            <Title>Signature Catch Phrase:</Title>
            <Text>&quot;{row.original.title}&quot;</Text>
          </Box>
        </Box>
      )}
    />
  );
}
