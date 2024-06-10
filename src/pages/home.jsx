import { useEffect, useState } from "react";
import MainSection from "../components/mainSection";
import { getCurrentMonthString, getAllMonthsComparisions, getMonthComparisionByProducts, getMonthComparision, getMonthlyComparisions } from '../lib/compareFuns';
import Header from "../components/header";
import SideNav from "../components/sideNav";

export default function Home() {
    const [comparisions, setComparisions] = useState([]);
    const [selectedProducts, setSelectedProducts] = useState(['A', 'B']);
    const [currentMonthComparisions, setCurrentMonthCompares] = useState({});
    const [selectedComparisions, setSelectedComparisions] = useState([]);
    const [searchTerm, setSearchTerm] = useState(null);

    async function loadComparisions() {
        try {
            const comparisionData = await getMonthlyComparisions();
            if (comparisionData && comparisionData?.status === true) {
                setComparisions(comparisionData.comparisions.monthly_comparison);
                getMonthProductsCompares(comparisionData.comparisions.monthly_comparison);
            }
        } catch (error) {
            console.log("Error reported while loading Data");
            console.log(error)
        }
    }

    function getCurrentMonthComparision(comparisions) {
        const currentMonthStr = getCurrentMonthString();
        const currentMonthCompares = getMonthComparision(comparisions, currentMonthStr);
        setCurrentMonthCompares(currentMonthCompares);
    }

    function getMonthProductsCompares(comparisions) {
        const prodOne = selectedProducts[0];
        const prodTwo = selectedProducts[1];
        const productStr = `Compare${prodOne}${prodTwo}`;
        const compares = getMonthComparisionByProducts(comparisions, getCurrentMonthString(), productStr);
        setSelectedComparisions(compares);
    }


    function onProductChange(e, index) {
        const newSelectedProducts = [...selectedProducts];
        newSelectedProducts[index] = e.target.value;
        setSelectedProducts(newSelectedProducts);
    }

    function doSearch(searchTerm) {
        setSearchTerm(searchTerm);
    }

    useEffect(() => {
        loadComparisions();
    }, []);

    useEffect(() => {
        if (comparisions && Object.keys(comparisions).length > 0) {
            getMonthProductsCompares(comparisions);
        }
    }, [selectedProducts]);

    return (
        <div className="flex w-screen bg-heading-bg">
            <SideNav />
            <div className="container mx-auto h-screen">
                <Header dataToDownload={comparisions} />
                <main className="bg-heading-bg ">
                    <MainSection selectedCompares={selectedComparisions} allCompares={getAllMonthsComparisions(comparisions)} onProductChange={onProductChange} selectedProducts={selectedProducts} doSearch={doSearch} searchTerm={searchTerm} />
                </main>
            </div>
        </div>
    );
}