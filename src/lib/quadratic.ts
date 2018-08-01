import Toast from 'react-native-simple-toast'
export default (a: number, b: number, c: number) => {
  const D = b * b - 4 * a * c
  const root = D >= 0 ? Math.sqrt(D): Math.sqrt(D*-1)
  const roots = []

  if( a === 0 )  { // edge case
    if(b === 0){
        Toast.showWithGravity('The input is not a quadratic equation.', Toast.SHORT, Toast.CENTER)
    } else {
        roots.push((-c/b))
    }

    return roots
  }

  if( D < 0){ // complex roots
       roots.push(( -b )/ ( 2 * a) +  "+"  + (( root ) / ( 2 * a)).toFixed(2) + "i" )
       roots.push(( -b )/ ( 2 * a) +  "-"  + (( root ) / ( 2 * a)).toFixed(2) + "i" )
  } else {  // two real roots
       roots.push((( -b + root ) / ( 2 * a)).toFixed(3))
       roots.push((( -b - root ) / ( 2 * a)).toFixed(3))
  }


  return roots
}