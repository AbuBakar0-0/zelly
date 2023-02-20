import React from 'react'
import ProductCard from '../../components/cards/admin/ProductCard';
import AddCard from '../../components/cards/admin/AddCard';
import AdminHeader from '../../components/header/AdminHeader'
import TitleCard from '../../components/cards/admin/TitleCard';

export default function Products() {
    return (
        <>
        <AdminHeader/>
        <TitleCard name="Products"/>
            <section class="text-gray-600 body-font my-10">
                <div class="container px-5 mx-auto">
                    <div class="flex flex-wrap -m-4">
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                    </div>
                </div>
            </section>
            <section class="text-gray-600 body-font">
                <div class="container px-5 mx-auto">
                    <div class="flex flex-wrap -m-4">
                        <AddCard />
                    </div>
                </div>
            </section>
        </>
    );
}
