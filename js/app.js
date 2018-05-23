function sortArray() {
    let versions = ['2.11', '2.2', '2.2.12', '2.2.110', '1.0'];

    for (var travel = 0; travel < versions.length ; travel++) {

        for(var j = 0; j < versions.length - 1; j++){

            if (versions[j] > versions[j + 1]) {

                var change = versions[j];
                versions[j] = versions[j+1];
                versions[j + 1] = change;

            }
        }
    }
    return versions;
}

console.log(sortArray());

