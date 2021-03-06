Fixtures = {
    users: [
        {
            _id : '74GDdWHJ3JotoRgLy',
            name: 'Bob', // Buyer
            balance: 0
        },
        {
            _id: 'qmxstpBMSrHwf5N7g',
            name: 'Sally', // Seller
            balance: 0
        },
        {
            _id: 'PZWmf9YMJp3XsMjd5',
            name: 'Kent', // v1
            balance: 150
        },
        {
            _id: 'DLKZZeSJEBFQKLNGT',
            name: 'Lex', // v2
            balance: 50
        },
        {
            _id: 'GhpmzJz9aodzkbWaR',
            name: 'Mike', // v3
            balance: 150
        }
    ],
    trades: [
        {
            _id: 'kGErvKsgiLSNDffh6',
            type: 'sell',
            description: 'Garden gnome',
            price: 150,
            buyerId: '74GDdWHJ3JotoRgLy', // Bob
            sellerId: 'qmxstpBMSrHwf5N7g', // Sally
            status: 'insured',
            expiration: '2015-06-15'
        },
        {
            _id: 'SLsL9iQs6cgujmQEz',
            type: 'buy',
            description: 'Lawnmower',
            price: 66,
            buyerId: '74GDdWHJ3JotoRgLy', // Bob
            status: 'new',
            expiration: '2014-10-15'
        },
        {
            _id: 'GFaGCaaNKPCbaF2vw',
            type: 'sell',
            description: 'Monkey',
            price: 42,
            sellerId: 'qmxstpBMSrHwf5N7g', // Sally
            status: 'cancelled',
            expiration: '2014-10-15'
        }
    ],
    references: [
        {
            _id: 'iPDyEpW3iro254vpj',
            tradeId: 'kGErvKsgiLSNDffh6', // Gnome Trade
            peerId: 'itcGwbhTW7QFs78nk',
            traderId: '74GDdWHJ3JotoRgLy', // Bob / buyer
            fromId: 'PZWmf9YMJp3XsMjd5', // Kent / v1
            objectId: 'qmxstpBMSrHwf5N7g', // Sally / seller
            amount: 100,
            premiumPct: 5
        },
        {
            _id: 'M5zW87MjWCtBiGRvL',
            tradeId: 'kGErvKsgiLSNDffh6', // Gnome Trade
            peerId: 'y72HWQgztkha8Mx4S',
            traderId: '74GDdWHJ3JotoRgLy', // Bob / buyer
            fromId: 'PZWmf9YMJp3XsMjd5', // Kent / v1
            objectId: 'DLKZZeSJEBFQKLNGT', // Lex / v2
            amount: 50,
            premiumPct: 1
        },
        {
            _id: 'bcoLELMoA3oHdKLXd',
            tradeId: 'kGErvKsgiLSNDffh6', // Gnome Trade
            peerId: 'vsmETMKbD8fyCHMPX',
            traderId: '74GDdWHJ3JotoRgLy', // Bob / buyer
            fromId: 'DLKZZeSJEBFQKLNGT', // Lex / v2
            objectId: 'qmxstpBMSrHwf5N7g', // Sally / seller
            amount: 50,
            premiumPct: 8
        },
        {
            _id: 'NXog25NXRq74EMMLx',
            tradeId: 'kGErvKsgiLSNDffh6', // Gnome Trade
            peerId: 'NzKi9Trb4FWyw7kaM',
            traderId: 'qmxstpBMSrHwf5N7g', // Sally / seller
            fromId: 'GhpmzJz9aodzkbWaR', // Mike / v3
            objectId: '74GDdWHJ3JotoRgLy', // Bob / buyer
            amount: 150,
            premiumPct: 5
        }
    ],
    peers: [
        {
            _id: 'KSAnCFRmh9BAdsZpB',
            fromId: '74GDdWHJ3JotoRgLy', // Bob / buyer
            objectId: 'PZWmf9YMJp3XsMjd5', // Kent / v1
            lockedLiability: 0,
            maxLiability: 0,
            premiumPct: 0
        },
        {
            _id: 'p3SEPCJcQk62gQmwK',
            fromId: 'PZWmf9YMJp3XsMjd5', // Kent / v1
            objectId: '74GDdWHJ3JotoRgLy', // Bob / buyer
            lockedLiability: 150,
            maxLiability: 150,
            premiumPct: 0
        },
        {
            _id: 'itcGwbhTW7QFs78nk',
            fromId: 'PZWmf9YMJp3XsMjd5', // Kent / v1
            objectId: 'qmxstpBMSrHwf5N7g', // Sally / seller
            lockedLiability: 100,
            maxLiability: 100,
            premiumPct: 5
        },
        {
            _id: 'y72HWQgztkha8Mx4S',
            fromId: 'PZWmf9YMJp3XsMjd5', // Kent / v1
            objectId: 'DLKZZeSJEBFQKLNGT', // Lex / v2
            lockedLiability: 50,
            maxLiability: 50,
            premiumPct: 1
        },
        {
            _id: 'vsmETMKbD8fyCHMPX',
            fromId: 'DLKZZeSJEBFQKLNGT', // Lex / v2
            objectId: 'qmxstpBMSrHwf5N7g', // Sally / seller
            lockedLiability: 50,
            maxLiability: 50,
            premiumPct: 8
        },
        {
            _id: 'HbqC6FRF7hnCgxEWt',
            fromId: 'qmxstpBMSrHwf5N7g', // Sally / seller,
            objectId: 'GhpmzJz9aodzkbWaR', // Mike / v3
            lockedLiability: 0,
            maxLiability: 0,
            premiumPct: 0
        },
        {
            _id: 'vjCq7s8K64YyvxKT7',
            fromId: 'GhpmzJz9aodzkbWaR', // Mike / v3,
            objectId: 'qmxstpBMSrHwf5N7g', // Sally / seller,
            lockedLiability: 150,
            maxLiability: 150,
            premiumPct: 5
        },
        {
            _id: 'NzKi9Trb4FWyw7kaM',
            fromId: 'GhpmzJz9aodzkbWaR', // Mike / v3,
            objectId: '74GDdWHJ3JotoRgLy', // Bob / buyer,
            lockedLiability: 150,
            maxLiability: 150,
            premiumPct: 5
        },
    ]
};
