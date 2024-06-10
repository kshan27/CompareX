
/* Data utility function */
export async function getMonthlyComparisions() {
    /* return all all months comparision data */
    try {
        // const response = await fetch('src/data/compareX-data.json');
        // const comparisions = await response.json();
        
        // Using local json content instead of fetching file content.
        return {status: true, comparisions:compareXData };
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


const compareXData = {
	"monthly_comparison": {
		"January": {
			"CompareAB": [
				"Product A offers superior data security compared to Product B.",
				"Product B's AI analytics outperforms Product A in terms of real-time insights.",
				"Enterprise users reported higher user satisfaction with Product A over Product B.",
				"Product A offers superior data security compared to Product B.",
				"Product B's AI analytics outperforms Product A in terms of real-time insights.",
				"Enterprise users reported higher user satisfaction with Product A over Product B.",
				"Product A offers superior data security compared to Product B.",
				"Product B's AI analytics outperforms Product A in terms of real-time insights.",
				"Enterprise users reported higher user satisfaction with Product A over Product B."
			],
			"CompareAC": [
				"Product A's scalability surpasses that of Product C.",
				"Product C provides advanced AI integration compared to Product A.",
				"Enterprise clients reported better cost-effectiveness with Product A over Product C.",
				"Product A's scalability surpasses that of Product C.",
				"Product C provides advanced AI integration compared to Product A.",
				"Enterprise clients reported better cost-effectiveness with Product A over Product C.",
				"Product A's scalability surpasses that of Product C.",
				"Product C provides advanced AI integration compared to Product A.",
				"Enterprise clients reported better cost-effectiveness with Product A over Product C."
			],
			"CompareAD": [
				"Product A and Product D both excel in data integration capabilities.",
				"Product D offers better AI-driven automation compared to Product A.",
				"Enterprise users found Product A's user interface more intuitive than Product D.",
				"Product D offers better AI-driven automation compared to Product A.",
				"Enterprise users found Product A's user interface more intuitive than Product D.",
				"Product D offers better AI-driven automation compared to Product A.",
				"Enterprise users found Product A's user interface more intuitive than Product D."
			],
			"CompareBC": [
				"Product B's machine learning algorithms are more sophisticated than Product C.",
				"Product C provides better compatibility with existing enterprise systems compared to Product B.",
				"Enterprise clients found Product B's pricing to be more competitive than Product C."
			],
			"CompareBD": [
				"Product B's real-time collaboration features outshine Product D.",
				"Product D offers stronger AI-driven predictive analytics compared to Product B.",
				"Enterprise users reported higher overall ROI with Product B over Product D."
			],
			"CompareCD": [
				"Product C's AI-powered customer support capabilities surpass those of Product D.",
				"Product D provides seamless integration with cloud services compared to Product C.",
				"Enterprise clients found Product C's customization options more suited to their needs than Product D."
			]
		},
		"February": {
			"CompareAB": [
				"Product A offers superior data security compared to Product B.",
				"Product B's AI analytics outperforms Product A in terms of real-time insights.",
				"Enterprise users reported higher user satisfaction with Product A over Product B."
			],
			"CompareAC": [
				"Product A's scalability surpasses that of Product C.",
				"Product C provides advanced AI integration compared to Product A.",
				"Enterprise clients reported better cost-effectiveness with Product A over Product C.",
				"Product A's scalability surpasses that of Product C.",
				"Product C provides advanced AI integration compared to Product A.",
				"Enterprise clients reported better cost-effectiveness with Product A over Product C."
			],
			"CompareAD": [
				"Product A and Product D both excel in data integration capabilities.",
				"Product D offers better AI-driven automation compared to Product A.",
				"Enterprise users found Product A's user interface more intuitive than Product D."
			],
			"CompareBC": [
				"Product B's machine learning algorithms are more sophisticated than Product C.",
				"Product C provides better compatibility with existing enterprise systems compared to Product B.",
				"Enterprise clients found Product B's pricing to be more competitive than Product C."
			],
			"CompareBD": [
				"Product B's real-time collaboration features outshine Product D.",
				"Product D offers stronger AI-driven predictive analytics compared to Product B.",
				"Enterprise users reported higher overall ROI with Product B over Product D."
			],
			"CompareCD": [
				"Product C's AI-powered customer support capabilities surpass those of Product D.",
				"Product D provides seamless integration with cloud services compared to Product C.",
				"Enterprise clients found Product C's customization options more suited to their needs than Product D."
			]
		},
		"March": {
			"CompareAB": [
				"In August, Product A's advanced data encryption outperforms Product B's security measures.",
				"Enterprise users reported more seamless integration with existing systems using Product B compared to Product A.",
				"Product B's AI-driven predictive maintenance offers a competitive advantage over Product A."
			],
			"CompareAC": [
				"Product A's AI-powered analytics provide deeper insights than those of Product C.",
				"Product C offers a more user-friendly interface for non-technical users compared to Product A.",
				"Enterprise clients found Product A's scalability to be a key differentiator over Product C."
			],
			"CompareAD": [
				"Product A and Product D both excel in data governance and compliance.",
				"Product D's AI-driven natural language processing capabilities outshine Product A's.",
				"Enterprise users found Product A's support and documentation to be more comprehensive than Product D."
			],
			"CompareBC": [
				"Product B's AI-driven recommendation engine provides personalized insights that surpass Product C.",
				"Product C offers more granular control over data access compared to Product B.",
				"Enterprise clients found Product B's machine learning model training to be more efficient than Product C."
			],
			"CompareBD": [
				"In August, Product B's real-time collaboration features continue to outperform Product D.",
				"Product D offers enhanced AI-driven anomaly detection compared to Product B.",
				"Enterprise users reported higher user adoption rates for Product B over Product D."
			],
			"CompareCD": [
				"Product C's AI-powered sentiment analysis offers more accurate customer insights than Product D.",
				"Product D provides a more intuitive user interface for configuring AI models compared to Product C.",
				"Enterprise clients found Product C's integration with legacy systems to be more seamless than Product D."
			]
		},
		"April": {
			"CompareAB": [
				"In August, Product A's advanced data encryption outperforms Product B's security measures.",
				"Enterprise users reported more seamless integration with existing systems using Product B compared to Product A.",
				"Product B's AI-driven predictive maintenance offers a competitive advantage over Product A."
			],
			"CompareAC": [
				"Product A's AI-powered analytics provide deeper insights than those of Product C.",
				"Product C offers a more user-friendly interface for non-technical users compared to Product A.",
				"Enterprise clients found Product A's scalability to be a key differentiator over Product C.",
				"Product A's scalability surpasses that of Product C.",
				"Product C provides advanced AI integration compared to Product A.",
				"Enterprise clients reported better cost-effectiveness with Product A over Product C.",
				"Product A's scalability surpasses that of Product C.",
				"Product C provides advanced AI integration compared to Product A.",
				"Enterprise clients reported better cost-effectiveness with Product A over Product C."
			],
			"CompareAD": [
				"Product A and Product D both excel in data governance and compliance.",
				"Product D's AI-driven natural language processing capabilities outshine Product A's.",
				"Enterprise users found Product A's support and documentation to be more comprehensive than Product D."
			],
			"CompareBC": [
				"Product B's AI-driven recommendation engine provides personalized insights that surpass Product C.",
				"Product C offers more granular control over data access compared to Product B.",
				"Enterprise clients found Product B's machine learning model training to be more efficient than Product C."
			],
			"CompareBD": [
				"In August, Product B's real-time collaboration features continue to outperform Product D.",
				"Product D offers enhanced AI-driven anomaly detection compared to Product B.",
				"Enterprise users reported higher user adoption rates for Product B over Product D."
			],
			"CompareCD": [
				"Product C's AI-powered sentiment analysis offers more accurate customer insights than Product D.",
				"Product D provides a more intuitive user interface for configuring AI models compared to Product C.",
				"Enterprise clients found Product C's integration with legacy systems to be more seamless than Product D."
			]
		},
		"May": {
			"CompareAB": [
				"In August, Product A's advanced data encryption outperforms Product B's security measures.",
				"Enterprise users reported more seamless integration with existing systems using Product B compared to Product A.",
				"Product B's AI-driven predictive maintenance offers a competitive advantage over Product A."
			],
			"CompareAC": [
				"Product A's AI-powered analytics provide deeper insights than those of Product C.",
				"Product C offers a more user-friendly interface for non-technical users compared to Product A.",
				"Enterprise clients found Product A's scalability to be a key differentiator over Product C."
			],
			"CompareAD": [
				"Product A and Product D both excel in data governance and compliance.",
				"Product D's AI-driven natural language processing capabilities outshine Product A's.",
				"Enterprise users found Product A's support and documentation to be more comprehensive than Product D."
			],
			"CompareBC": [
				"Product B's AI-driven recommendation engine provides personalized insights that surpass Product C.",
				"Product C offers more granular control over data access compared to Product B.",
				"Enterprise clients found Product B's machine learning model training to be more efficient than Product C."
			],
			"CompareBD": [
				"In August, Product B's real-time collaboration features continue to outperform Product D.",
				"Product D offers enhanced AI-driven anomaly detection compared to Product B.",
				"Enterprise users reported higher user adoption rates for Product B over Product D."
			],
			"CompareCD": [
				"Product C's AI-powered sentiment analysis offers more accurate customer insights than Product D.",
				"Product D provides a more intuitive user interface for configuring AI models compared to Product C.",
				"Enterprise clients found Product C's integration with legacy systems to be more seamless than Product D."
			]
		},
		"June": {
			"CompareAB": [
				"In August, Product A's advanced data encryption outperforms Product B's security measures.",
				"Enterprise users reported more seamless integration with existing systems using Product B compared to Product A.",
				"Product B's AI-driven predictive maintenance offers a competitive advantage over Product A."
			],
			"CompareAC": [
				"Product A's AI-powered analytics provide deeper insights than those of Product C.",
				"Product C offers a more user-friendly interface for non-technical users compared to Product A.",
				"Enterprise clients found Product A's scalability to be a key differentiator over Product C."
			],
			"CompareAD": [
				"Product A and Product D both excel in data governance and compliance.",
				"Product D's AI-driven natural language processing capabilities outshine Product A's.",
				"Enterprise users found Product A's support and documentation to be more comprehensive than Product D."
			],
			"CompareBC": [
				"Product B's AI-driven recommendation engine provides personalized insights that surpass Product C.",
				"Product C offers more granular control over data access compared to Product B.",
				"Enterprise clients found Product B's machine learning model training to be more efficient than Product C."
			],
			"CompareBD": [
				"In August, Product B's real-time collaboration features continue to outperform Product D.",
				"Product D offers enhanced AI-driven anomaly detection compared to Product B.",
				"Enterprise users reported higher user adoption rates for Product B over Product D."
			],
			"CompareCD": [
				"Product C's AI-powered sentiment analysis offers more accurate customer insights than Product D.",
				"Product D provides a more intuitive user interface for configuring AI models compared to Product C.",
				"Enterprise clients found Product C's integration with legacy systems to be more seamless than Product D."
			]
		},
		"July": {
			"CompareAB": [
				"In August, Product A's advanced data encryption outperforms Product B's security measures.",
				"Enterprise users reported more seamless integration with existing systems using Product B compared to Product A.",
				"Product B's AI-driven predictive maintenance offers a competitive advantage over Product A."
			],
			"CompareAC": [
				"Product A's AI-powered analytics provide deeper insights than those of Product C.",
				"Product C offers a more user-friendly interface for non-technical users compared to Product A.",
				"Enterprise clients found Product A's scalability to be a key differentiator over Product C."
			],
			"CompareAD": [
				"Product A and Product D both excel in data governance and compliance.",
				"Product D's AI-driven natural language processing capabilities outshine Product A's.",
				"Enterprise users found Product A's support and documentation to be more comprehensive than Product D."
			],
			"CompareBC": [
				"Product B's AI-driven recommendation engine provides personalized insights that surpass Product C.",
				"Product C offers more granular control over data access compared to Product B.",
				"Enterprise clients found Product B's machine learning model training to be more efficient than Product C."
			],
			"CompareBD": [
				"In August, Product B's real-time collaboration features continue to outperform Product D.",
				"Product D offers enhanced AI-driven anomaly detection compared to Product B.",
				"Enterprise users reported higher user adoption rates for Product B over Product D."
			],
			"CompareCD": [
				"Product C's AI-powered sentiment analysis offers more accurate customer insights than Product D.",
				"Product D provides a more intuitive user interface for configuring AI models compared to Product C.",
				"Enterprise clients found Product C's integration with legacy systems to be more seamless than Product D."
			]
		},
		"August": {
			"CompareAB": [
				"In August, Product A's advanced data encryption outperforms Product B's security measures.",
				"Enterprise users reported more seamless integration with existing systems using Product B compared to Product A.",
				"Product B's AI-driven predictive maintenance offers a competitive advantage over Product A.",
				"Product A offers superior data security compared to Product B.",
				"Product B's AI analytics outperforms Product A in terms of real-time insights.",
				"Enterprise users reported higher user satisfaction with Product A over Product B.",
				"Product A offers superior data security compared to Product B.",
				"Product B's AI analytics outperforms Product A in terms of real-time insights."
			],
			"CompareAC": [
				"Product A's AI-powered analytics provide deeper insights than those of Product C.",
				"Product C offers a more user-friendly interface for non-technical users compared to Product A.",
				"Enterprise clients found Product A's scalability to be a key differentiator over Product C."
			],
			"CompareAD": [
				"Product A and Product D both excel in data governance and compliance.",
				"Product D's AI-driven natural language processing capabilities outshine Product A's.",
				"Enterprise users found Product A's support and documentation to be more comprehensive than Product D."
			],
			"CompareBC": [
				"Product B's AI-driven recommendation engine provides personalized insights that surpass Product C.",
				"Product C offers more granular control over data access compared to Product B.",
				"Enterprise clients found Product B's machine learning model training to be more efficient than Product C."
			],
			"CompareBD": [
				"In August, Product B's real-time collaboration features continue to outperform Product D.",
				"Product D offers enhanced AI-driven anomaly detection compared to Product B.",
				"Enterprise users reported higher user adoption rates for Product B over Product D."
			],
			"CompareCD": [
				"Product C's AI-powered sentiment analysis offers more accurate customer insights than Product D.",
				"Product D provides a more intuitive user interface for configuring AI models compared to Product C.",
				"Enterprise clients found Product C's integration with legacy systems to be more seamless than Product D."
			]
		}
	}

}