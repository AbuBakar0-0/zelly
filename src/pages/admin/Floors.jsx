import React from 'react'
import FloorCard from '../../components/cards/admin/FloorCard';
import AddCard from '../../components/cards/admin/AddCard';
import AdminHeader from '../../components/header/AdminHeader'
import TitleCard from '../../components/cards/admin/TitleCard';

export default function Floors() {
    return (
        <>
        <AdminHeader/>
        <TitleCard name={"Floors"}/>
            <section class="text-gray-600 body-font my-10">
                <div class="container px-5 mx-auto">
                    <div class="flex flex-wrap -m-4">
                        <FloorCard/>
                        <FloorCard />
                        <FloorCard />
                    </div>
                </div>
            </section>
            <section class="text-gray-600 body-font my-10">
                <div class="container px-5 mx-auto">
                    <div class="flex flex-wrap -m-4">
                    <AddCard />
                    </div>
                </div>
            </section>
        </>
    );
}
