import { TSpecification } from '../_types'

const stocks_specification: TSpecification = {
    market: 'indices',
    dl_data: [
        {
            from: 0.1,
            to: 5,
            leverage: 300,
        },
        {
            from: 5,
            to: 50,
            leverage: 200,
        },
        {
            from: 50,
            to: 100,
            leverage: 100,
        },
    ],
    data: [
        {
            symbol: 'STOCKSAUS200',
            instrument: 'Australia 200',
            contract_size: 1,
            base_currency: 'AUD',
            minimum_size: 0.1,
            minimum_spread: 2.09,
            target_spread: 4.38,
            max_effective_leverage: 100,
            margin_requirement: 1,
            swap_long: -159.919,
            swap_short: -15.284,
            trading_hours:
                'Sun 22:50-24:00 GMT\nMon-Thur 00:00-05:30, 06:10-20:00 22:50-24:00 GMT\nFri 00:00-05:30, 06:10-20:00 GMT',
        },
        {
            symbol: 'STOCKSNETHERLANDS25',
            instrument: 'Netherlands 25',
            contract_size: 1,
            base_currency: 'EUR',
            minimum_size: 0.1,
            minimum_spread: 0.32,
            target_spread: 0.32,
            max_effective_leverage: 100,
            margin_requirement: 1,
            swap_long: -10.26,
            swap_short: 0.084,
            trading_hours: 'Mon-Fri 07:00-21:00 GMT',
        },
        {
            symbol: 'STOCKSEUROPE50',
            instrument: 'Europe 50',
            contract_size: 1,
            base_currency: 'EUR',
            minimum_size: 0.1,
            minimum_spread: 1.8,
            target_spread: 1.96,
            max_effective_leverage: 100,
            margin_requirement: 1,
            swap_long: -91.457,
            swap_short: -31.157,
            trading_hours: 'Mon-Fri 07:00-21:00 GMT',
        },
        {
            symbol: 'STOCKSFRANCE40',
            instrument: 'France 40',
            contract_size: 1,
            base_currency: 'EUR',
            minimum_size: 0.1,
            minimum_spread: 1.11,
            target_spread: 1.24,
            max_effective_leverage: 100,
            margin_requirement: 1,
            swap_long: -155.521,
            swap_short: -52.982,
            trading_hours: 'Mon-Fri 07:00-21:00 GMT',
        },
        {
            symbol: 'STOCKSGERMANY40',
            instrument: 'Germany 40',
            contract_size: 1,
            base_currency: 'EUR',
            minimum_size: 0.1,
            minimum_spread: 1.37,
            target_spread: 1.5,
            max_effective_leverage: 100,
            margin_requirement: 1,
            swap_long: -218.46,
            swap_short: -79.44,
            trading_hours: 'Mon-Fri 07:00-21:00 GMT',
        },
        {
            symbol: 'STOCKSJAPAN225',
            instrument: 'Japan 225',
            contract_size: 1,
            base_currency: 'JPY',
            minimum_size: 10,
            minimum_spread: 7.65,
            target_spread: 9.98,
            max_effective_leverage: 100,
            margin_requirement: 1,
            swap_long: -423.413,
            swap_short: -466.907,
            trading_hours:
                'Sun 23:00-24:00 GMT\nMon-Thur 00:00-22:00, 23:00-24:00 GMT\nFri 00:00-22:00 GMT',
        },
        {
            symbol: 'STOCKSSPAIN35',
            instrument: 'Spain 35',
            contract_size: 1,
            base_currency: 'EUR',
            minimum_size: 0.1,
            minimum_spread: 5.94,
            target_spread: 5.94,
            max_effective_leverage: 100,
            margin_requirement: 1,
            swap_long: -192.966,
            swap_short: -65.737,
            trading_hours: 'Mon-Fri 08:00-19:00 GMT',
        },
        {
            symbol: 'STOCKSUK100',
            instrument: 'UK 100',
            contract_size: 1,
            base_currency: 'GBP',
            minimum_size: 0.1,
            minimum_spread: 0.9,
            target_spread: 1.51,
            max_effective_leverage: 100,
            margin_requirement: 1,
            swap_long: -156.016,
            swap_short: -1.311,
            trading_hours:
                'Sun 23:05-24:00 GMT\nMon-Thur 00:00-21:55, 23:05-24:00 GMT\nFri 00:00-21:00 GMT',
        },
        {
            symbol: 'STOCKSUS500',
            instrument: 'US 500',
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 0.1,
            minimum_spread: 0.52,
            target_spread: 0.57,
            max_effective_leverage: 100,
            margin_requirement: 1,
            swap_long: -87.874,
            swap_short: 11.648,
            trading_hours:
                'Sun 23:05-24:00 GMT\nMon-Thur 00:00-21:55, 23:05-24:00 GMT\nFri 00:00-21:55 GMT',
        },
        {
            symbol: 'STOCKSUSTECH100',
            instrument: 'US Tech 100',
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 0.1,
            minimum_spread: 1.23,
            target_spread: 1.44,
            max_effective_leverage: 100,
            margin_requirement: 1,
            swap_long: -269.026,
            swap_short: -31.65,
            trading_hours:
                'Sun 23:05-24:00 GMT\nMon-Thur 00:00-21:55, 23:05-24:00 GMT\nFri 00:00-21:55 GMT',
        },
        {
            symbol: 'STOCKSWALLSTREET30',
            instrument: 'Wall Street 30',
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 0.1,
            minimum_spread: 2.55,
            target_spread: 2.69,
            max_effective_leverage: 100,
            margin_requirement: 1,
            swap_long: -719.542,
            swap_short: -84.653,
            trading_hours:
                'Sun 23:05-24:00 GMT\nMon-Thur 00:00-21:55, 23:05-24:00 GMT\nFri 00:00-21:55 GMT',
        },
        {
            symbol: 'STOCKSAIRLINESGROUP',
            instrument: 'American Airlines Group Inc',
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 1,
            minimum_spread: 0.1,
            target_spread: 0.1,
            max_effective_leverage: 50,
            margin_requirement: 2,
            swap_long: -0.332,
            swap_short: 0.039,
            trading_hours: 'Mon-Fri 14:30-21:00 GMT',
        },
        {
            symbol: 'STOCKSAPPLE',
            instrument: 'Apple Inc',
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 1,
            minimum_spread: 0.66,
            target_spread: 0.68,
            max_effective_leverage: 50,
            margin_requirement: 2,
            swap_long: -3.312,
            swap_short: 0.394,
            trading_hours: 'Mon-Fri 14:30-21:00 GMT',
        },
        {
            symbol: 'STOCKSAIRBNB',
            instrument: 'Airbnb Inc',
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 1,
            minimum_spread: 0.47,
            target_spread: 0.62,
            max_effective_leverage: 50,
            margin_requirement: 2,
            swap_long: -2.158,
            swap_short: 0.257,
            trading_hours: 'Mon-Fri 14:30-21:00 GMT',
        },
        {
            symbol: 'STOCKSADIDASSALOMON',
            instrument: 'Adidas Salomon',
            contract_size: 1,
            base_currency: 'EUR',
            minimum_size: 1,
            minimum_spread: 1.06,
            target_spread: 1.09,
            max_effective_leverage: 50,
            margin_requirement: 2,
            swap_long: -1.697,
            swap_short: -0.452,
            trading_hours: 'Mon Fri 08:00 - 16:30 GMT',
        },
        {
            symbol: 'STOCKSAMERICANINTERNATIONAL',
            instrument: 'American International Group',
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 1,
            minimum_spread: 0.27,
            target_spread: 0.3,
            max_effective_leverage: 50,
            margin_requirement: 2,
            swap_long: -1.429,
            swap_short: 0.17,
            trading_hours: 'Mon-Fri 14:30-21:00 GMT',
        },
        {
            symbol: 'STOCKSAIRBUSSE',
            instrument: 'Airbus SE',
            contract_size: 1,
            base_currency: 'EUR',
            minimum_size: 1,
            minimum_spread: 0.46,
            target_spread: 0.62,
            max_effective_leverage: 50,
            margin_requirement: 2,
            swap_long: -1.581,
            swap_short: -0.421,
            trading_hours: 'Mon Fri 08:00 - 16:30 GMT',
        },
        {
            symbol: 'STOCKSAIRFRANCE',
            instrument: 'Air France KLM SA',
            contract_size: 1,
            base_currency: 'EUR',
            minimum_size: 1,
            minimum_spread: 0.06,
            target_spread: 0.06,
            max_effective_leverage: 50,
            margin_requirement: 2,
            swap_long: -0.018,
            swap_short: -0.005,
            trading_hours: 'Mon Fri 08:00 - 16:30 GMT',
        },
        {
            symbol: 'STOCKSADVANCEDMICRODEVICES',
            instrument: 'Advanced Micro Devices Inc',
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 1,
            minimum_spread: 0.53,
            target_spread: 0.56,
            max_effective_leverage: 50,
            margin_requirement: 2,
            swap_long: -1.63,
            swap_short: 0.194,
            trading_hours: 'Mon-Fri 14:30-21:00 GMT',
        },
        {
            symbol: 'STOCKSAMAZON',
            instrument: 'Amazon.com Inc',
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 1,
            minimum_spread: 0.68,
            target_spread: 0.7,
            max_effective_leverage: 50,
            margin_requirement: 2,
            swap_long: -2.046,
            swap_short: 0.244,
            trading_hours: 'Mon-Fri 14:30-21:00 GMT',
        },
        {
            symbol: 'STOCKSBOEING',
            instrument: 'Boeing',
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 1,
            minimum_spread: 0.9,
            target_spread: 1.09,
            max_effective_leverage: 50,
            margin_requirement: 2,
            swap_long: -4.138,
            swap_short: 0.492,
            trading_hours: 'Mon-Fri 14:30-21:00 GMT',
        },
        {
            symbol: 'STOCKSALIBABAGROUP',
            instrument: 'Alibaba Group Holding Ltd',
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 1,
            minimum_spread: 0.65,
            target_spread: 0.68,
            max_effective_leverage: 50,
            margin_requirement: 2,
            swap_long: -2.119,
            swap_short: 0.252,
            trading_hours: 'Mon-Fri 14:30-21:00 GMT',
        },
        {
            symbol: 'STOCKSBANKOFAMERICA',
            instrument: 'Bank of America',
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 1,
            minimum_spread: 0.21,
            target_spread: 0.21,
            max_effective_leverage: 50,
            margin_requirement: 2,
            swap_long: -0.764,
            swap_short: 0.091,
            trading_hours: 'Mon-Fri 14:30-21:00 GMT',
        },
        {
            symbol: 'STOCKSBAYERAG',
            instrument: 'Bayer AG',
            contract_size: 1,
            base_currency: 'EUR',
            minimum_size: 1,
            minimum_spread: 0.23,
            target_spread: 0.24,
            max_effective_leverage: 50,
            margin_requirement: 2,
            swap_long: -0.754,
            swap_short: -0.202,
            trading_hours: 'Mon Fri 08:00 - 16:30 GMT',
        },
        {
            symbol: 'STOCKSBIOGEN',
            instrument: 'Biogen Inc.',
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 1,
            minimum_spread: 0.86,
            target_spread: 1.37,
            max_effective_leverage: 50,
            margin_requirement: 2,
            swap_long: -6.761,
            swap_short: 0.804,
            trading_hours: 'Mon-Fri 14:30-21:00 GMT',
        },
        {
            symbol: 'STOCKSBMW',
            instrument: 'BMW',
            contract_size: 1,
            base_currency: 'EUR',
            minimum_size: 1,
            minimum_spread: 0.41,
            target_spread: 0.43,
            max_effective_leverage: 50,
            margin_requirement: 2,
            swap_long: -1.217,
            swap_short: -0.324,
            trading_hours: 'Mon Fri 08:00 - 16:30 GMT',
        },
        {
            symbol: 'STOCKSCITIGROUP',
            instrument: 'Citigroup',
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 1,
            minimum_spread: 0.28,
            target_spread: 0.3,
            max_effective_leverage: 50,
            margin_requirement: 2,
            swap_long: -1.043,
            swap_short: 0.124,
            trading_hours: 'Mon-Fri 14:30-21:00 GMT',
        },
        {
            symbol: 'STOCKSCONTINENTAL',
            instrument: 'Continental AG',
            contract_size: 1,
            base_currency: 'EUR',
            minimum_size: 1,
            minimum_spread: 0.41,
            target_spread: 0.44,
            max_effective_leverage: 50,
            margin_requirement: 2,
            swap_long: -0.796,
            swap_short: -0.212,
            trading_hours: 'Mon Fri 08:00 - 16:30 GMT',
        },
        {
            symbol: 'STOCKSSALESFORCE',
            instrument: 'Salesforce.com Inc',
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 1,
            minimum_spread: 0.78,
            target_spread: 0.88,
            max_effective_leverage: 50,
            margin_requirement: 2,
            swap_long: -3.088,
            swap_short: 0.368,
            trading_hours: 'Mon-Fri 14:30-21:00 GMT',
        },
        {
            symbol: 'STOCKSCISCO',
            instrument: 'Cisco Systems',
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 1,
            minimum_spread: 0.27,
            target_spread: 0.29,
            max_effective_leverage: 50,
            margin_requirement: 2,
            swap_long: -1.127,
            swap_short: 0.134,
            trading_hours: 'Mon-Fri 14:30-21:00 GMT',
        },
        {
            symbol: 'STOCKSDELTAAIRLINES',
            instrument: 'Delta Air Lines',
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 1,
            minimum_spread: 0.21,
            target_spread: 0.22,
            max_effective_leverage: 50,
            margin_requirement: 2,
            swap_long: -0.833,
            swap_short: 0.099,
            trading_hours: 'Mon-Fri 14:30-21:00 GMT',
        },
        {
            symbol: 'STOCKSDEUTSCHEBANK',
            instrument: 'Deutsche Bank AG',
            contract_size: 1,
            base_currency: 'EUR',
            minimum_size: 1,
            minimum_spread: 0.09,
            target_spread: 0.1,
            max_effective_leverage: 50,
            margin_requirement: 2,
            swap_long: -0.144,
            swap_short: -0.038,
            trading_hours: 'Mon Fri 08:00 - 16:30 GMT',
        },
        {
            symbol: 'STOCKSWALTDISNEY',
            instrument: 'Walt Disney Company',
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 1,
            minimum_spread: 0.72,
            target_spread: 0.75,
            max_effective_leverage: 50,
            margin_requirement: 2,
            swap_long: -2.14,
            swap_short: 0.255,
            trading_hours: 'Mon-Fri 14:30-21:00 GMT',
        },
        {
            symbol: 'STOCKSEBAY',
            instrument: 'eBay Inc',
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 1,
            minimum_spread: 0.28,
            target_spread: 0.3,
            max_effective_leverage: 50,
            margin_requirement: 2,
            swap_long: -1.005,
            swap_short: 0.12,
            trading_hours: 'Mon-Fri 14:30-21:00 GMT',
        },
        {
            symbol: 'STOCKSFACEBOOK',
            instrument: 'Meta Platforms Inc',
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 1,
            minimum_spread: 1.42,
            target_spread: 1.5,
            max_effective_leverage: 50,
            margin_requirement: 2,
            swap_long: -2.644,
            swap_short: 0.314,
            trading_hours: 'Mon-Fri 14:30-21:00 GMT',
        },
        {
            symbol: 'STOCKSFEDEX',
            instrument: 'Fedex',
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 1,
            minimum_spread: 0.93,
            target_spread: 1.13,
            max_effective_leverage: 50,
            margin_requirement: 2,
            swap_long: -4.012,
            swap_short: 0.477,
            trading_hours: 'Mon-Fri 14:30-21:00 GMT',
        },
        {
            symbol: 'STOCKSFOX',
            instrument: 'Fox Corporation B',
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 1,
            minimum_spread: 0.18,
            target_spread: 0.19,
            max_effective_leverage: 50,
            margin_requirement: 2,
            swap_long: -0.677,
            swap_short: 0.081,
            trading_hours: 'Mon-Fri 14:30-21:00 GMT',
        },
        {
            symbol: 'STOCKSGENERALMOTORSCOMP',
            instrument: 'General Motors Company',
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 1,
            minimum_spread: 0.23,
            target_spread: 0.25,
            max_effective_leverage: 50,
            margin_requirement: 2,
            swap_long: -0.881,
            swap_short: 0.105,
            trading_hours: 'Mon-Fri 14:30-21:00 GMT',
        },
        {
            symbol: 'STOCKSALPHABET',
            instrument: 'Alphabet Inc Class C',
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 1,
            minimum_spread: 10.45,
            target_spread: 10.47,
            max_effective_leverage: 50,
            margin_requirement: 2,
            swap_long: -2.257,
            swap_short: 0.268,
            trading_hours: 'Mon-Fri 14:30-21:00 GMT',
        },
        {
            symbol: 'STOCKSGOLDMANSACHS',
            instrument: 'Goldman Sachs Group',
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 1,
            minimum_spread: 1.55,
            target_spread: 1.86,
            max_effective_leverage: 50,
            margin_requirement: 2,
            swap_long: -8.408,
            swap_short: 1,
            trading_hours: 'Mon-Fri 14:30-21:00 GMT',
        },
        {
            symbol: 'STOCKSHOME',
            instrument: 'Home Depot Inc',
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 1,
            minimum_spread: 0.55,
            target_spread: 0.81,
            max_effective_leverage: 50,
            margin_requirement: 2,
            swap_long: -7.362,
            swap_short: 0.876,
            trading_hours: 'Mon-Fri 14:30-21:00 GMT',
        },
        {
            symbol: 'STOCKSHPINC',
            instrument: 'HP Inc',
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 1,
            minimum_spread: 0.15,
            target_spread: 0.17,
            max_effective_leverage: 50,
            margin_requirement: 2,
            swap_long: -0.657,
            swap_short: 0.078,
            trading_hours: 'Mon-Fri 14:30-21:00 GMT',
        },
        {
            symbol: 'STOCKSIBM',
            instrument: 'IBM',
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 1,
            minimum_spread: 0.63,
            target_spread: 0.69,
            max_effective_leverage: 50,
            margin_requirement: 2,
            swap_long: -3.419,
            swap_short: 0.407,
            trading_hours: 'Mon-Fri 14:30-21:00 GMT',
        },
        {
            symbol: 'STOCKSINTEL',
            instrument: 'Intel',
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 1,
            minimum_spread: 0.26,
            target_spread: 0.27,
            max_effective_leverage: 50,
            margin_requirement: 2,
            swap_long: -0.663,
            swap_short: 0.079,
            trading_hours: 'Mon-Fri 14:30-21:00 GMT',
        },
        {
            symbol: 'STOCKSJOHNSONJOHNSON',
            instrument: 'Johnson & Johnson',
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 1,
            minimum_spread: 0.73,
            target_spread: 0.76,
            max_effective_leverage: 50,
            margin_requirement: 2,
            swap_long: -4.079,
            swap_short: 0.485,
            trading_hours: 'Mon-Fri 14:30-21:00 GMT',
        },
        {
            symbol: 'STOCKSJPMORGANCHASE',
            instrument: 'JP Morgan Chase',
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 1,
            minimum_spread: 0.68,
            target_spread: 0.71,
            max_effective_leverage: 50,
            margin_requirement: 2,
            swap_long: -3.051,
            swap_short: 0.363,
            trading_hours: 'Mon-Fri 14:30-21:00 GMT',
        },
        {
            symbol: 'STOCKSCOCACOLA',
            instrument: 'Coca-Cola',
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 1,
            minimum_spread: 0.24,
            target_spread: 0.26,
            max_effective_leverage: 50,
            margin_requirement: 2,
            swap_long: -1.47,
            swap_short: 0.175,
            trading_hours: 'Mon-Fri 14:30-21:00 GMT',
        },
        {
            symbol: 'STOCKSLUFTHANSA',
            instrument: 'Lufthansa AG',
            contract_size: 1,
            base_currency: 'EUR',
            minimum_size: 1,
            minimum_spread: 0.06,
            target_spread: 0.06,
            max_effective_leverage: 50,
            margin_requirement: 2,
            swap_long: -0.109,
            swap_short: -0.029,
            trading_hours: 'Mon Fri 08:00 - 16:30 GMT',
        },
        {
            symbol: 'STOCKSMASTERCARDINC',
            instrument: 'Mastercard Inc',
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 1,
            minimum_spread: 1.31,
            target_spread: 1.65,
            max_effective_leverage: 50,
            margin_requirement: 2,
            swap_long: -8.044,
            swap_short: 0.957,
            trading_hours: 'Mon-Fri 14:30-21:00 GMT',
        },
        {
            symbol: 'STOCKSMCDONALDS',
            instrument: 'McDonalds',
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 1,
            minimum_spread: 0.97,
            target_spread: 1.14,
            max_effective_leverage: 50,
            margin_requirement: 2,
            swap_long: -6.299,
            swap_short: 0.749,
            trading_hours: 'Mon-Fri 14:30-21:00 GMT',
        },
        {
            symbol: 'STOCKSMODERNA',
            instrument: 'Moderna Inc.',
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 1,
            minimum_spread: 0.82,
            target_spread: 1.19,
            max_effective_leverage: 50,
            margin_requirement: 2,
            swap_long: -4.025,
            swap_short: 0.479,
            trading_hours: 'Mon-Fri 14:30-21:00 GMT',
        },
        {
            symbol: 'STOCKSMICROSOFT',
            instrument: 'Microsoft Corporation',
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 1,
            minimum_spread: 1.22,
            target_spread: 1.27,
            max_effective_leverage: 50,
            margin_requirement: 2,
            swap_long: -5.681,
            swap_short: 0.676,
            trading_hours: 'Mon-Fri 14:30-21:00 GMT',
        },
        {
            symbol: 'STOCKSNETFLIX',
            instrument: 'Netflix Inc',
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 1,
            minimum_spread: 1.96,
            target_spread: 2.29,
            max_effective_leverage: 50,
            margin_requirement: 2,
            swap_long: -7.084,
            swap_short: 0.843,
            trading_hours: 'Mon-Fri 14:30-21:00 GMT',
        },
        {
            symbol: 'STOCKSNIKE',
            instrument: 'Nike',
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 1,
            minimum_spread: 0.62,
            target_spread: 0.68,
            max_effective_leverage: 50,
            margin_requirement: 2,
            swap_long: -2.503,
            swap_short: 0.298,
            trading_hours: 'Mon-Fri 14:30-21:00 GMT',
        },
        {
            symbol: 'STOCKSNVIDIA',
            instrument: 'NVIDIA Corp',
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 1,
            minimum_spread: 1.49,
            target_spread: 1.6,
            max_effective_leverage: 50,
            margin_requirement: 2,
            swap_long: -3.708,
            swap_short: 0.441,
            trading_hours: 'Mon-Fri 14:30-21:00 GMT',
        },
        {
            symbol: 'STOCKSPEPSICO',
            instrument: 'PepsiCo Inc',
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 1,
            minimum_spread: 0.63,
            target_spread: 0.74,
            max_effective_leverage: 50,
            margin_requirement: 2,
            swap_long: -4.209,
            swap_short: 0.501,
            trading_hours: 'Mon-Fri 14:30-21:00 GMT',
        },
        {
            symbol: 'STOCKSPFIZER',
            instrument: 'Pfizer',
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 1,
            minimum_spread: 0.23,
            target_spread: 0.24,
            max_effective_leverage: 50,
            margin_requirement: 2,
            swap_long: -1.152,
            swap_short: 0.137,
            trading_hours: 'Mon-Fri 14:30-21:00 GMT',
        },
        {
            symbol: 'STOCKSPROCTERGAMBLE',
            instrument: 'Procter & Gamble',
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 1,
            minimum_spread: 0.64,
            target_spread: 0.72,
            max_effective_leverage: 50,
            margin_requirement: 2,
            swap_long: -3.463,
            swap_short: 0.412,
            trading_hours: 'Mon-Fri 14:30-21:00 GMT',
        },
        {
            symbol: 'STOCKSPORSCHE',
            instrument: 'Porsche Automobil Holding SE',
            contract_size: 1,
            base_currency: 'EUR',
            minimum_size: 1,
            minimum_spread: 0.35,
            target_spread: 0.37,
            max_effective_leverage: 50,
            margin_requirement: 2,
            swap_long: -0.831,
            swap_short: -0.221,
            trading_hours: 'Mon Fri 08:00 - 16:30 GMT',
        },
        {
            symbol: 'STOCKSPUMA',
            instrument: 'Puma SE',
            contract_size: 1,
            base_currency: 'EUR',
            minimum_size: 1,
            minimum_spread: 0.41,
            target_spread: 0.44,
            max_effective_leverage: 50,
            margin_requirement: 2,
            swap_long: -0.709,
            swap_short: -0.189,
            trading_hours: 'Mon Fri 08:00 - 16:30 GMT',
        },
        {
            symbol: 'STOCKSPAYPAL',
            instrument: 'Paypal',
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 1,
            minimum_spread: 0.81,
            target_spread: 0.85,
            max_effective_leverage: 50,
            margin_requirement: 2,
            swap_long: -1.674,
            swap_short: 0.2,
            trading_hours: 'Mon-Fri 14:30-21:00 GMT',
        },
        {
            symbol: 'STOCKSSONY',
            instrument: 'Sony Corporation',
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 1,
            minimum_spread: 0.6,
            target_spread: 0.81,
            max_effective_leverage: 50,
            margin_requirement: 2,
            swap_long: -1.84,
            swap_short: 0.219,
            trading_hours: 'Mon-Fri 14:30-21:00 GMT',
        },
        {
            symbol: 'STOCKSTEVAPHARMACEUTICAL',
            instrument: 'Teva Pharmaceutical Inds',
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 1,
            minimum_spread: 0.08,
            target_spread: 0.08,
            max_effective_leverage: 50,
            margin_requirement: 2,
            swap_long: -0.199,
            swap_short: 0.024,
            trading_hours: 'Mon-Fri 14:30-21:00 GMT',
        },
        {
            symbol: 'STOCKSTESLA',
            instrument: 'Tesla Inc',
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 1,
            minimum_spread: 1.2,
            target_spread: 1.31,
            max_effective_leverage: 50,
            margin_requirement: 2,
            swap_long: -4.17,
            swap_short: 0.496,
            trading_hours: 'Mon-Fri 14:30-21:00 GMT',
        },
        {
            symbol: 'STOCKSUBER',
            instrument: 'Uber Technologies Inc',
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 1,
            minimum_spread: 0.18,
            target_spread: 0.2,
            max_effective_leverage: 50,
            margin_requirement: 2,
            swap_long: -0.624,
            swap_short: 0.074,
            trading_hours: 'Mon-Fri 14:30-21:00 GMT',
        },
        {
            symbol: 'STOCKSVISA',
            instrument: 'Visa',
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 1,
            minimum_spread: 0.84,
            target_spread: 0.99,
            max_effective_leverage: 50,
            margin_requirement: 2,
            swap_long: -4.848,
            swap_short: 0.577,
            trading_hours: 'Mon-Fri 14:30-21:00 GMT',
        },
        {
            symbol: 'STOCKSWALMART',
            instrument: 'Wal-Mart Stores Inc',
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 1,
            minimum_spread: 0.61,
            target_spread: 0.68,
            max_effective_leverage: 50,
            margin_requirement: 2,
            swap_long: -3.471,
            swap_short: 0.413,
            trading_hours: 'Mon-Fri 14:30-21:00 GMT',
        },
        {
            symbol: 'STOCKSZOOM',
            instrument: 'Zoom Video Communications Inc',
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 1,
            minimum_spread: 0.66,
            target_spread: 0.82,
            max_effective_leverage: 50,
            margin_requirement: 2,
            swap_long: -1.658,
            swap_short: 0.197,
            trading_hours: 'Mon-Fri 14:30-21:00 GMT',
        },
    ],
}
export default stocks_specification
