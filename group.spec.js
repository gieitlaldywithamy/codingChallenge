const group = require( './group' );

describe( 'groupArrayFunction', () => {
    test('group of 3 to be split into 1 group', () => {
        expect( group( [ 1, 2, 3 ], 1 ) ).toStrictEqual( [ [ 1, 2, 3 ] ] );
    } );
      
    test('group of 5 to be split into 3', () => {
        expect( group( [ 1, 2, 3, 4, 5 ], 3 ) ).toStrictEqual( [ [ 1, 2 ], [ 3, 4 ], [ 5 ] ] );
    } );

    test('group of 4 to be split into 2', () => {
        expect( group( [ 1, 2, 3, 4 ], 2 ) ).toStrictEqual( [ [ 1, 2 ], [ 3, 4 ] ] );
    } );
    
    test('group of 7 to be split into 7 groups', () => {
        expect( group( [ 1, 2, 3, 4, 5, 6, 7 ], 7 ) ).toStrictEqual( [ [ 1 ], [ 2 ], [ 3 ], [ 4 ], [ 5 ], [ 6 ], [ 7 ] ] );
    } );
    
    test('group of 5 to be split into 2 groups', () => {
        expect( group( [ 1, 2, 3, 4, 5 ], 2 ) ).toStrictEqual( [ [ 1, 2, 3 ], [ 4, 5 ] ] );
    } );
} );