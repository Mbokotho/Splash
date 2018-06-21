function RegNumber(storedUsers) {

    var namesStored = {};

    if (storedUsers) {
        for (i = 0; i < storedUsers.length; i++) {
            var regIndex = storedUsers[i]
            namesStored[regIndex] = 0;
        }

    }

    function getReg() {
        if (storedUsers) {
            namesStored = storedUsers;
        }
        return namesStored;
    }

    function filterThePlaces(places) {

        var list = Object.keys(namesStored);

        if (places === 'All') {
            return list;
        }
        var filteredList = list.filter(function (regNum) {
            return regNum.startsWith(places);

        });

        return filteredList;

    }

    function returnRegMap() {
        return namesStored;
    }

    function returnRegList() {
        return Object.keys(namesStored);
    }


    return {
        return: returnRegMap,
        getting: getReg,
        split: filterThePlaces,
        list: returnRegList,
    };

}