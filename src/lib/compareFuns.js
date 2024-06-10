

/* Data utility function */
export async function getMonthlyComparisions() {
    /* return all all months comparision data */
    try {
        const response = await fetch('src/data/compareX-data.json');
        const comparisions = await response.json();
        return {status: true, comparisions }
    } catch (error) {
        console.error("Error while loading data");
        console.log(error);
        return {status: false}
    }
}

export function getMonthComparision(comparisions, monthStr) {
    /* Returns comparision belongs to input month string */
    /* ex: January, February, March etc. */
    if(comparisions && monthStr && typeof comparisions === 'object') {
        const monthComparisions = comparisions[monthStr];
        return monthComparisions;
    }
    return null;
}

export function getMonthComparisionByProducts(comparisions, monthStr, productsStr) {
    /* Returns product comparison from given month data */
    const monthComparisions = getMonthComparision(comparisions, monthStr);
    if(monthComparisions && productsStr && typeof comparisions === 'object') {
        return monthComparisions[productsStr];
    }
    return [];
}

export function getCurrentMonthString() {
    const now = new Date();
    const monthStr = now.toLocaleDateString('en-us', {month: 'long'});
    return monthStr;
}

export function getAllMonthsComparisions(comparisions) {
    const allMonthCompares = [];
    const monthKeys = Object.keys(comparisions);
    monthKeys.forEach((month) => {
        const monthCompares = comparisions[month];
        if(monthCompares) {
            const productKeys = Object.keys(monthCompares);
            productKeys.forEach((prodcompObj) => {
                const prodCompArray = monthCompares[prodcompObj] || [];
                allMonthCompares.push(...prodCompArray);
            })
        }
    });
    
    return allMonthCompares;
}

export function getProducts() {
    /* Return Products */
    /* This data should be fetched either from API or generate from compareX-data.json file */
    return ['A', 'B', 'C', 'D'];
}

export function getFilteredComparisions(comparisions, searchTerm) {
    /* Filter given comparisions by searchTerm and return all matched comparisions */
    /* General string matching */
    if(!comparisions) {
        return []
    }

    if(!searchTerm || searchTerm.length === 0) {
        return comparisions;
    }

    let filteredComp = [];
    const lowerSearchVal = searchTerm.toLowerCase();
    filteredComp = comparisions.filter((item, index) => {
        const lowerItem = item.toLowerCase();
        if(lowerItem.indexOf(lowerSearchVal) >= 0) {
            return true;
        }else {
            return false;
        }
    })
    return filteredComp;
}

