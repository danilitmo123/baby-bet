import React from 'react'
import Header from "../header";
import Card from "../card";
import './main-page.scss'
import InfoBlock from "./info-block";
import CharityBlock from "./charity-block";
import PayBlock from "./pay-block";
import Footer from "../footer";


const MainPage = () => {
    return (
        <>
            <Card
                title={'Угадай дату рождения ребенка'}
                text={'Cервис который позволит вам превратить получение подарков от друзей и родственников на день рождения ребенка в игру. '}
                activeBtn={true}
                btnText={'Заказать'}
                isLink={false}
            />
            <InfoBlock/>
            <CharityBlock/>
            <PayBlock/>
        </>
    )
}

export default MainPage