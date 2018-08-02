import Toast from 'react-native-simple-toast'
export default (x1: number, y1: number, z1: number, x2: number, y2: number, z2: number) => {
        const roots = []

        const determinant = ( x1 * y2) - ( x2 * y1)
        const determinantXMatrix = ( z1 * y2) - ( z2 * y1)
        const determinantYMatrix = ( x1 * z2) - ( x2 * z1)

        if(determinant == 0){
            Toast.showWithGravity('There is no solution.', Toast.SHORT, Toast.CENTER)
        } else {
           roots.push(determinantXMatrix/determinant)
           roots.push(determinantYMatrix/determinant)
        }
        return roots
}