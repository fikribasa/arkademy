let mA = [[3,4],[1,2]];
let mB = [[7,5],[6,4],[3,4]];

// function multiply( mA, mB ) {
// 	var result = new Array( mA.length );
	
// 	for (var i = 0; i < result.length; i++ ) {
// 		result[i] = new Array( mB[ i ].length );
// 		for ( var j = 0; j < mA.length; j++ ) {
// 			result[i][j] = 0; // result[ i ][ j ] is NaN, force to be zero
// 			for ( var k = 0; k < mB.length; k++ ) {
// 				result[ i ][ j ] += mA[ i ][ k ] * mB[ k ][ j ];
// 			}
// 		}
// 	}
// 	return result;
// }

function multiply(mA,mB){
	if (mB.length==mA[0].length){

		
		let result=[];
		for(let i=0; i<mA.length;i++){
			result[i]=[];
			for (let j=0; j<mB[0].length;j++){
				let temp=0;
				for (let k=0; k<mB[0].length;k++){
					temp += mA[i][k]*mB[k][j]; 
				} result[i][j]=temp;
			}
		} return result;
	} 
	else {
		return 'Matriks Tidak Sesuai';
	}
}
console.log(multiply(mA,mB))
