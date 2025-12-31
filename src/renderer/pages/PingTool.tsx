import React from "react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'

type PingResult = {
  type: string,
  name: string,
  ip: string,
  status: string,
  lastTime: number,
  avgTime: number,
  loss: number,
  lastUpdate: string
}

const columnHelper = createColumnHelper<PingResult>();

const columns = [
  columnHelper.accessor('type', {
    cell: (info) => info.getValue(),
    header: () => 'Type'
  }),
  columnHelper.accessor('name', {
    cell: (info) => info.getValue(),
    header: 'Name'
  })
]

export default function PingTool() {
  const [data, _setData] = React.useState(() => [])
  const rerender = React.useReducer(() => ({}), {})[1]
  const table = useReactTable({
    data: [],
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <div>
      <h2>Ping Tool</h2>
      <p>test</p>
      <div className="p-2">
        <table>
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
        </table>
      </div>
    </div>
  )
}