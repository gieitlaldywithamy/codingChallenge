/**
 * Returns an array with N equally sized arrays, if not possible, final array contains remainder
 * @param items Array to be split ( length >= 0 )
 * @param groups #groups array should be split into ( 0 < groups <= items.length )
* 
*/

function groupArrayElements( items, noOfGroups ) {
    let itemsClone = [ ...items ];
    let groups = [];
    const groupSize = Math.ceil( items.length / noOfGroups );
    while( itemsClone.length > 0 ) {
        // if items still exist, grab another group
        groups.push( itemsClone.splice( 0, groupSize ) );
    }
    return groups;
}

module.exports = groupArrayElements;