export const isBooleanTrue = (value: string): boolean => value === "true";
export const isBooleanFalse = (value: string): boolean => value === "false";
export const isNull = (value: string): boolean => value === "null";
export const isNumber = (value: string): boolean => 
    !isNaN(Number(value.toLocaleString())) && hasLeadingZeros(value) == false && isHex(value) == false;


function hasLeadingZeros(value: string) : boolean {
    return /^0[0-9].*/.test(value);
}
function isHex(value : string) : boolean {
    return /0[xX][0-9a-fA-F]+/.test(value);
}

function isJsonNumber(value: string) : boolean {
    if (value.includes('/s')) throw new Error('Extra space');
    const regex = new RegExp('-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?');
    return regex.test(value);
}
