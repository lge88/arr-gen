
var arrGen = require( 'arr-gen' );
var expect = require( 'expect.js' );

describe( 'arrGen', function() {

  it( 'should generate correct 1d array', function() {
    var arr = arrGen( 5, function( i ) { return i*2; } );
    expect( arr ).to.eql( [ 0, 2, 4, 6, 8 ] );
  } );

  it( 'should generate correct 2D array', function() {
    var arr = arrGen( 5, 2, function( i, j ) { return i + j; } );
    expect( arr ).to.eql( [
      [ 0, 1 ],
      [ 1, 2 ],
      [ 2, 3 ],
      [ 3, 4 ],
      [ 4, 5 ]
    ] );
  } );

  it( 'should generate correct nD array', function() {
    var arr = arrGen( 2, 2, 2, function( i, j, k ) { return i + j + k; } );
    var arr2 = [ [ [], [] ], [ [], [] ] ];
    arr2[0][0][0] = 0;
    arr2[1][0][0] = 1;
    arr2[0][1][0] = 1;
    arr2[1][1][0] = 2;
    arr2[0][0][1] = 1;
    arr2[1][0][1] = 2;
    arr2[0][1][1] = 2;
    arr2[1][1][1] = 3;
    expect( arr ).to.eql( arr2 );
  } );

  it( 'should generate correct Kronecker delta', function() {
    var kdelta = arrGen( [3, 3], function( i, j ) {
      if ( i === j ) {
        return 1;
      } else {
        return 0;
      }
    } );

    var arr2 = [
      [ 1, 0, 0 ],
      [ 0, 1, 0 ],
      [ 0, 0, 1 ]
    ];

    expect( arr2 ).to.eql( kdelta );
  } );

} );
