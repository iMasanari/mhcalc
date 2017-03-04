export default returnTypes

function returnTypes<R1>(
    f1: (...args: any[]) => R1,
    _?: undefined,
): R1

function returnTypes<R1, R2>(
    f1: (...args: any[]) => R1,
    f2: (...args: any[]) => R2,
    _?: undefined,
): R1 | R2

function returnTypes<R1, R2, R3>(
    f1: (...args: any[]) => R1,
    f2: (...args: any[]) => R2,
    f3: (...args: any[]) => R3,
    _?: undefined,
): R1 | R2 | R3

function returnTypes<R1, R2, R3, R4>(
    f1: (...args: any[]) => R1,
    f2: (...args: any[]) => R2,
    f3: (...args: any[]) => R3,
    f4: (...args: any[]) => R4,
    _?: undefined,
): R1 | R2 | R3 | R4

function returnTypes<R1, R2, R3, R4, R5>(
    f1: (...args: any[]) => R1,
    f2: (...args: any[]) => R2,
    f3: (...args: any[]) => R3,
    f4: (...args: any[]) => R4,
    f5: (...args: any[]) => R5,
    _?: undefined,
): R1 | R2 | R3 | R4 | R5

function returnTypes<R1, R2, R3, R4, R5, R6>(
    f1: (...args: any[]) => R1,
    f2: (...args: any[]) => R2,
    f3: (...args: any[]) => R3,
    f4: (...args: any[]) => R4,
    f5: (...args: any[]) => R5,
    f6: (...args: any[]) => R6,
    _?: undefined,
): R1 | R2 | R3 | R4 | R5 | R6

function returnTypes<R1, R2, R3, R4, R5, R6, R7>(
    f1: (...args: any[]) => R1,
    f2: (...args: any[]) => R2,
    f3: (...args: any[]) => R3,
    f4: (...args: any[]) => R4,
    f5: (...args: any[]) => R5,
    f6: (...args: any[]) => R6,
    f7: (...args: any[]) => R7,
    _?: undefined,
): R1 | R2 | R3 | R4 | R5 | R6 | R7

function returnTypes<R1, R2, R3, R4, R5, R6, R7, R8>(
    f1: (...args: any[]) => R1,
    f2: (...args: any[]) => R2,
    f3: (...args: any[]) => R3,
    f4: (...args: any[]) => R4,
    f5: (...args: any[]) => R5,
    f6: (...args: any[]) => R6,
    f7: (...args: any[]) => R7,
    f8: (...args: any[]) => R8,
    _?: undefined,
): R1 | R2 | R3 | R4 | R5 | R6 | R7 | R8

function returnTypes<R1, R2, R3, R4, R5, R6, R7, R8, R9>(
    f1: (...args: any[]) => R1,
    f2: (...args: any[]) => R2,
    f3: (...args: any[]) => R3,
    f4: (...args: any[]) => R4,
    f5: (...args: any[]) => R5,
    f6: (...args: any[]) => R6,
    f7: (...args: any[]) => R7,
    f8: (...args: any[]) => R8,
    f9: (...args: any[]) => R9,
    _?: undefined,
): R1 | R2 | R3 | R4 | R5 | R6 | R7 | R8 | R9

function returnTypes(..._args: any[]) { return null as any }
