import Toast from 'react-native-simple-toast'
export default (matrix: number[]) => {
        const roots = []

        // replace the respective column
        const xMatrix = formMatrixColumn(matrix,0)
        const yMatrix = formMatrixColumn(matrix,1)
        const zMatrix = formMatrixColumn(matrix,2)

        const determinant = Determinant(matrix)
        const xdeterminant = Determinant(xMatrix)
        const ydeterminant = Determinant(yMatrix)
        const zdeterminant = Determinant(zMatrix)

       if( determinant == 0) {
           Toast.showWithGravity('There is no solution.', Toast.SHORT, Toast.CENTER)
       } else {
        roots.push(xdeterminant/determinant)
        roots.push(ydeterminant/determinant)
        roots.push(zdeterminant/determinant)
       }
        return roots
}

function Determinant(matrix: number[]) {
    return ( (matrix[0][0] * matrix[1][1] * matrix[2][2]) +  (matrix[0][1] * matrix[1][2] * matrix[2][0]) + (matrix[0][2] * matrix[1][0] * matrix[2][1]))
    - ( (matrix[2][0] * matrix[1][1] * matrix[0][2]) +  (matrix[2][1] * matrix[1][2] * matrix[0][0]) + (matrix[2][2] * matrix[1][0] * matrix[0][1]))
}

function formMatrixColumn(matrix: number[], index: number){
    let clone =  JSON.parse(JSON.stringify(matrix))

    clone.forEach(item => {
        item[index] = item[3]
    })

    console.log(clone)


    return clone
}