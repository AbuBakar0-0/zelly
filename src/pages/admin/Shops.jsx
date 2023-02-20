import React from 'react'
import ShopCard from '../../components/cards/admin/ShopCard';
import AddCard from '../../components/cards/admin/AddCard';
import AdminHeader from '../../components/header/AdminHeader'
import TitleCard from '../../components/cards/admin/TitleCard';

export default function Shops() {
    return (
        <>
        <AdminHeader/>
        <TitleCard name={"Shops"}/>
            <section class="text-gray-600 body-font my-10">
                <div class="container px-5 mx-auto">
                    <div class="flex flex-wrap -m-4">
                        <ShopCard />
                        <ShopCard />
                        <ShopCard />
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
