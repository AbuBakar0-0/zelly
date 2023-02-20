import React from 'react'
import ProductCard from '../../components/cards/user/ProductCard';
import MainHeader from '../../components/header/MainHeader'
import Footer from '../../sections/user/Footer';
import TitleCard from '../../components/cards/user/TitleCard';

export default function Products() {
    return (
        <>
        <MainHeader/>
        <TitleCard name={"Products"}/>
            <section class="text-gray-400 body-font">
                <div class="container px-5 py-24 mx-auto ">
                    <div class="flex flex-wrap -m-4 justify-around">
                        <ProductCard/>
                        <ProductCard/>
                        <ProductCard/>
                        <ProductCard/>                        
                    </div>
                </div>
            </section>
        <Footer/>
        </>
    );
}
