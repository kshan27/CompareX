import React from 'react';
import DownloadButton from '../components/downloadButton';
import { RxHamburgerMenu } from "react-icons/rx";

export default function Header({dataToDownload}) {
    return (
        <header className="bg-heading-bg border-b-2 border-black  flex justify-around py-4 px-4 md:px-8 lg:px-16 items-center  w-full">
            <h1 className="text-xl font-bold text-black">Marketplace Comparision</h1>
            <DownloadButton data={dataToDownload} fileName={'Comparisions'}/>
            <span className="flex flex-col-reverse align-middle text-right text-black text-lg h-12"> <RxHamburgerMenu className="grow" />
            </span>
        </header>
    );
}