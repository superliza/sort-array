function sortArray() {
    var versions = ['2.11', '2.2', '2.2.12', '2.2.110', '1.0'];

    for (var travel = 0; travel < versions.length ; travel++) {

        for(var leftElement = 0; leftElement < versions.length - 1; leftElement++){

            if (versions[leftElement] > versions[leftElement + 1]) {

                var change = versions[leftElement];
                versions[leftElement] = versions[leftElement + 1];
                versions[leftElement + 1] = change;

            }
        }
    }
    return versions;
}

console.log(sortArray());

