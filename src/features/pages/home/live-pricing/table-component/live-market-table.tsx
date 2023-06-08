import React, { useMemo, useEffect, useState } from 'react'
import {
    flexRender,
    getCoreRowModel,
    getSortedRowModel,
    useReactTable,
} from '@tanstack/react-table'
import type { SortingState } from '@tanstack/react-table'
import { TAvailableLiveMarkets, TMarketData } from '../types'
import useLiveColumns from '../use-live-columns'
import { table_row_header, table_row_data } from './live-pricing.module.scss'
import Flex from 'features/components/atoms/flex-box'
import Link from 'features/components/atoms/link'
import { Localize } from 'components/localization'
import usePricingFeed from 'components/hooks/use-pricing-feed'
import Typography from 'features/components/atoms/typography'

export type TLiveMarketTableProps = {
    selected_market: TAvailableLiveMarkets
    link_to: string
}

const LiveMarketTable = ({ selected_market, link_to }: TLiveMarketTableProps) => {
    const [error, pricingData] = usePricingFeed()

    const rawMarketsData = pricingData
    const TABLE_VISIBLE_ROWS = 5
    const [markets_data, setMarketsData] = useState(() => {
        const temp = new Map<TAvailableLiveMarkets, TMarketData[]>()
        return temp
    })

    const [sorting, setSorting] = React.useState<SortingState>([])

    const updateData = useMemo(() => {
        return () => {
            if (rawMarketsData) {
                const stocks = rawMarketsData['stocks']
                const indices = rawMarketsData['indices']
                const stocks_indices = Object.assign(stocks, indices)
                const res = { ...rawMarketsData, indices: { ...stocks_indices } }

                Object.keys(res).map((item) => {
                    if (item === selected_market) {
                        const selected_market_data = res[item]
                        const result = Object.values(selected_market_data)
                        setMarketsData(result)
                    }
                })
            }
            return undefined
        }
    }, [rawMarketsData, selected_market])

    useEffect(() => {
        updateData()
    }, [updateData])

    const columns = useLiveColumns()

    const table = useReactTable({
        data: markets_data,
        columns,
        state: {
            sorting,
        },
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        onSortingChange: setSorting,
    })

    const rows = table.getRowModel().rows.slice(0, TABLE_VISIBLE_ROWS)

    if (error) {
        return (
            <Flex.Box justify="center" mt="5x">
                <Typography.Paragraph
                    align="left"
                    padding_block="3x"
                    padding_inline="6x"
                    font_family="UBUNTU"
                    textcolor="brand"
                >
                    There was an error fetching the live pricing data
                </Typography.Paragraph>
            </Flex.Box>
        )
    }
    return (
        <>
            <Flex.Box justify="center" mt="16x">
                <table>
                    <thead>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <Flex.Box key={headerGroup.id} justify="center">
                                <tr className={table_row_header}>
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
                            </Flex.Box>
                        ))}
                    </thead>
                    <tbody>
                        {rows.map((row) => (
                            <Flex.Box key={row.id} justify="center">
                                <tr className={table_row_data}>
                                    {row.getVisibleCells().map((cell) => (
                                        <td key={cell.id}>
                                            {flexRender(
                                                cell.column.columnDef.cell,
                                                cell.getContext(),
                                            )}
                                        </td>
                                    ))}
                                </tr>
                            </Flex.Box>
                        ))}
                    </tbody>
                </table>
            </Flex.Box>

            <Flex.Box justify="center" align="center" mt="18x" gap="10x">
                <Link url={{ type: 'internal', to: link_to }} font_family="UBUNTU" size="medium">
                    <Localize translate_text="_t_View all >_t_"></Localize>
                </Link>
            </Flex.Box>
        </>
    )
}

export default LiveMarketTable
