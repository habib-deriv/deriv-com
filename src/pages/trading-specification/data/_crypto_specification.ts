import { TSpecification } from '../_types'

const crypto_specification: TSpecification = {
    market: 'cryptocurrency',
    dl_data: [
        {
            from: 0.01,
            to: 1,
            leverage: 300,
        },
        {
            from: 1,
            to: 3,
            leverage: 200,
        },
        {
            from: 3,
            to: 5,
            leverage: 100,
        },
        {
            from: 5,
            to: 10,
            leverage: 50,
        },
    ],
    data: [
        {
            is_row: true,
            symbol: 'ADAUSD',
            instrument: 'ADA/USD',
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 100,
            minimum_spread: 0.00039,
            target_spread: 0.00064,
            max_effective_leverage: 100,
            margin_requirement: 1,
            swap_long: -0.04,
            swap_short: -0.04,
            trading_hours: 'Sun 00:00 - Sat 23:59',
        },
        {
            is_row: true,
            symbol: 'ALGORAND',
            instrument: 'ALG/USD',
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 500,
            minimum_spread: 0.0005,
            target_spread: 0.0006,
            max_effective_leverage: 100,
            margin_requirement: 1,
            swap_long: -0.04,
            swap_short: -0.04,
            trading_hours: 'Sun 00:00 - Sat 23:59',
        },
        {
            is_row: true,
            symbol: 'AVALANCHE',
            instrument: 'AVA/USD',
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 0.1,
            minimum_spread: 0.03,
            target_spread: 0.03,
            max_effective_leverage: 100,
            margin_requirement: 1,
            swap_long: -0.07,
            swap_short: -0.07,
            trading_hours: 'Sun 00:00 - Sat 23:59',
        },
        {
            is_row: true,
            symbol: 'BAT',
            instrument: 'BAT/USD',
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 500,
            minimum_spread: 0.00031,
            target_spread: 0.00043,
            max_effective_leverage: 100,
            margin_requirement: 1,
            swap_long: -0.04,
            swap_short: -0.04,
            trading_hours: 'Sun 00:00 - Sat 23:59',
        },
        {
            is_row: true,
            symbol: 'BCHNEW',
            instrument: 'BCH/USD',
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 0.1,
            minimum_spread: 0.277,
            target_spread: 0.73,
            max_effective_leverage: 100,
            margin_requirement: 1,
            swap_long: -0.05,
            swap_short: -0.05,
            trading_hours: 'Sun 00:00 - Sat 23:59',
        },
        {
            is_row: true,
            symbol: 'BNBUSD',
            instrument: 'BNB/USD',
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 0.1,
            minimum_spread: 0.276,
            target_spread: 0.337,
            max_effective_leverage: 100,
            margin_requirement: 1,
            swap_long: -0.06,
            swap_short: -0.06,
            trading_hours: 'Sun 00:00 - Sat 23:59',
        },
        {
            is_row: true,
            symbol: 'BTCETH',
            instrument: 'BTC/ETH',
            contract_size: 1,
            base_currency: 'ETH',
            minimum_size: 0.01,
            minimum_spread: 0.0386,
            target_spread: 0.03993,
            max_effective_leverage: 100,
            margin_requirement: 1,
            swap_long: -0.06,
            swap_short: -0.06,
            trading_hours: 'Sun 00:00 - Sat 23:59',
        },
        {
            is_row: true,
            symbol: 'BTCLTC',
            instrument: 'BTC/LTC',
            contract_size: 1,
            base_currency: 'LTC',
            minimum_size: 0.01,
            minimum_spread: 0.63735,
            target_spread: 0.72504,
            max_effective_leverage: 100,
            margin_requirement: 1,
            swap_long: -0.06,
            swap_short: -0.06,
            trading_hours: 'Sun 00:00 - Sat 23:59',
        },
        {
            is_row: true,
            symbol: 'BTCUSD',
            instrument: 'BTC/USD',
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 0.01,
            minimum_spread: 18.15,
            target_spread: 20.905,
            max_effective_leverage: 100,
            margin_requirement: 1,
            swap_long: -0.06,
            swap_short: -0.06,
            trading_hours: 'Sun 00:00 - Sat 23:59',
        },
        {
            is_row: true,
            symbol: 'BTCETH',
            is_eu: true,
            instrument: 'BTC/XAG',
            contract_size: 1,
            base_currency: 'XAG',
            minimum_size: 0.01,
            minimum_spread: 1.7984,
            target_spread: 1.7984,
            max_effective_leverage: 100,
            margin_requirement: 1,
            swap_long: -0.06,
            swap_short: -0.06,
            trading_hours: 'Sun 00:00 - Sat 23:59',
        },
        {
            is_row: true,
            is_eu: true,
            symbol: 'BTCETH',
            instrument: 'BTC/XAU',
            contract_size: 1,
            base_currency: 'XAU',
            minimum_size: 0.01,
            minimum_spread: 0.0217,
            target_spread: 0.0217,
            max_effective_leverage: 100,
            margin_requirement: 1,
            swap_long: -0.06,
            swap_short: -0.06,
            trading_hours: 'Sun 00:00 - Sat 23:59',
        },
        {
            is_row: true,
            symbol: 'DOGUSD',
            instrument: 'DOG/USD',
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 1500,
            minimum_spread: 0.0001,
            target_spread: 0.00015,
            max_effective_leverage: 100,
            margin_requirement: 1,
            swap_long: -0.04,
            swap_short: -0.04,
            trading_hours: 'Sun 00:00 - Sat 23:59',
        },
        {
            is_row: true,
            symbol: 'DOTUSD',
            instrument: 'DOT/USD',
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 1,
            minimum_spread: 0.009,
            target_spread: 0.011,
            max_effective_leverage: 100,
            margin_requirement: 1,
            swap_long: -0.04,
            swap_short: -0.04,
            trading_hours: 'Sun 00:00 - Sat 23:59',
        },
        {
            is_row: true,
            symbol: 'DSHUSD1',
            instrument: 'DSH/USD',
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 0.1,
            minimum_spread: 0.056,
            target_spread: 0.075,
            max_effective_leverage: 100,
            margin_requirement: 1,
            swap_long: -0.06,
            swap_short: -0.06,
            trading_hours: 'Sun 00:00 - Sat 23:59',
        },
        {
            is_row: true,
            symbol: 'EOSUSD1',
            instrument: 'EOS/USD',
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 100,
            minimum_spread: 0.00095,
            target_spread: 0.00292,
            max_effective_leverage: 100,
            margin_requirement: 1,
            swap_long: -0.07,
            swap_short: -0.07,
            trading_hours: 'Sun 00:00 - Sat 23:59',
        },
        {
            is_row: true,
            symbol: 'ETCUSD',
            instrument: 'ETC/USD',
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 1,
            minimum_spread: 0.022,
            target_spread: 0.028,
            max_effective_leverage: 100,
            margin_requirement: 1,
            swap_long: -0.04,
            swap_short: -0.04,
            trading_hours: 'Sun 00:00 - Sat 23:59',
        },
        {
            is_row: true,
            symbol: 'ETHUSD',
            instrument: 'ETH/USD',
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 0.1,
            minimum_spread: 0.902,
            target_spread: 1.51564,
            max_effective_leverage: 100,
            margin_requirement: 1,
            swap_long: -0.04,
            swap_short: -0.04,
            trading_hours: 'Sun 00:00 - Sat 23:59',
        },
        {
            is_row: true,
            symbol: 'FILUSD',
            instrument: 'FIL/USD',
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 1,
            minimum_spread: 0.03,
            target_spread: 0.03,
            max_effective_leverage: 100,
            margin_requirement: 1,
            swap_long: -0.04,
            swap_short: -0.04,
            trading_hours: 'Sun 00:00 - Sat 23:59',
        },
        {
            is_row: true,
            symbol: 'IOTUSD',
            instrument: 'IOT/USD',
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 500,
            minimum_spread: 0.0005,
            target_spread: 0.0007,
            max_effective_leverage: 100,
            margin_requirement: 1,
            swap_long: -0.04,
            swap_short: -0.04,
            trading_hours: 'Sun 00:00 - Sat 23:59',
        },
        {
            is_row: true,
            symbol: 'LNKUSD',
            instrument: 'LNK/USD',
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 1,
            minimum_spread: 0.008,
            target_spread: 0.01,
            max_effective_leverage: 100,
            margin_requirement: 1,
            swap_long: -0.04,
            swap_short: -0.04,
            trading_hours: 'Sun 00:00 - Sat 23:59',
        },
        {
            is_row: true,
            symbol: 'LTCUSD',
            instrument: 'LTC/USD',
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 0.1,
            minimum_spread: 0.13751,
            target_spread: 0.24618,
            max_effective_leverage: 100,
            margin_requirement: 1,
            swap_long: -0.06,
            swap_short: -0.06,
            trading_hours: 'Sun 00:00 - Sat 23:59',
        },
        {
            is_row: true,
            symbol: 'MKRUSD',
            instrument: 'MKR/USD',
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 0.01,
            minimum_spread: 0.71,
            target_spread: 0.91,
            max_effective_leverage: 100,
            margin_requirement: 1,
            swap_long: -0.04,
            swap_short: -0.04,
            trading_hours: 'Sun 00:00 - Sat 23:59',
        },
        {
            is_row: true,
            symbol: 'MTCUSD',
            instrument: 'MTC/USD',
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 100,
            minimum_spread: 0.00099,
            target_spread: 0.00114,
            max_effective_leverage: 100,
            margin_requirement: 1,
            swap_long: -0.04,
            swap_short: -0.04,
            trading_hours: 'Sun 00:00 - Sat 23:59',
        },
        {
            is_row: true,
            symbol: 'NEOUSD',
            instrument: 'NEO/USD',
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 1,
            minimum_spread: 0.03,
            target_spread: 0.03,
            max_effective_leverage: 100,
            margin_requirement: 1,
            swap_long: -0.04,
            swap_short: -0.04,
            trading_hours: 'Sun 00:00 - Sat 23:59',
        },
        {
            is_row: true,
            symbol: 'OMGUSD',
            instrument: 'OMG/USD',
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 10,
            minimum_spread: 0.002,
            target_spread: 0.006,
            max_effective_leverage: 100,
            margin_requirement: 1,
            swap_long: -0.04,
            swap_short: -0.04,
            trading_hours: 'Sun 00:00 - Sat 23:59',
        },
        {
            is_row: true,
            symbol: 'SOLUSD',
            instrument: 'SOL/USD',
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 0.1,
            minimum_spread: 0.016,
            target_spread: 0.02,
            max_effective_leverage: 100,
            margin_requirement: 1,
            swap_long: -0.04,
            swap_short: -0.04,
            trading_hours: 'Sun 00:00 - Sat 23:59',
        },
        {
            is_row: true,
            symbol: 'TRXUSD',
            instrument: 'TRX/USD',
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 1500,
            minimum_spread: 0.00009,
            target_spread: 0.00016,
            max_effective_leverage: 100,
            margin_requirement: 1,
            swap_long: -0.06,
            swap_short: -0.06,
            trading_hours: 'Sun 00:00 - Sat 23:59',
        },
        {
            is_row: true,
            symbol: 'UNIUSD',
            instrument: 'UNI/USD',
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 1,
            minimum_spread: 0.0059,
            target_spread: 0.0096,
            max_effective_leverage: 100,
            margin_requirement: 1,
            swap_long: -0.04,
            swap_short: -0.04,
            trading_hours: 'Sun 00:00 - Sat 23:59',
        },
        {
            is_row: true,
            symbol: 'XLMUSD',
            instrument: 'XLM/USD',
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 1000,
            minimum_spread: 0.00012,
            target_spread: 0.00016,
            max_effective_leverage: 100,
            margin_requirement: 1,
            swap_long: -0.03,
            swap_short: -0.03,
            trading_hours: 'Sun 00:00 - Sat 23:59',
        },
        {
            is_row: true,
            symbol: 'XMRUSD',
            instrument: 'XMR/USD',
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 0.1,
            minimum_spread: 0.152,
            target_spread: 0.29,
            max_effective_leverage: 100,
            margin_requirement: 1,
            swap_long: -0.04,
            swap_short: -0.04,
            trading_hours: 'Sun 00:00 - Sat 23:59',
        },
        {
            is_row: true,
            symbol: 'XRPUSD1',
            instrument: 'XRP/USD',
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 500,
            minimum_spread: 0.0002,
            target_spread: 0.0006,
            max_effective_leverage: 100,
            margin_requirement: 1,
            swap_long: -0.04,
            swap_short: -0.04,
            trading_hours: 'Sun 00:00 - Sat 23:59',
        },
        {
            is_row: true,
            symbol: 'XTZUSD',
            instrument: 'XTZ/USD',
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 10,
            minimum_spread: 0.00095,
            target_spread: 0.00515,
            max_effective_leverage: 100,
            margin_requirement: 1,
            swap_long: -0.04,
            swap_short: -0.04,
            trading_hours: 'Sun 00:00 - Sat 23:59',
        },
        {
            is_row: true,
            symbol: 'ZECUSD',
            instrument: 'ZEC/USD',
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 0.1,
            minimum_spread: 0.055,
            target_spread: 0.076,
            max_effective_leverage: 100,
            margin_requirement: 1,
            swap_long: -0.04,
            swap_short: -0.04,
            trading_hours: 'Sun 00:00 - Sat 23:59',
        },
    ],
}
export default crypto_specification
