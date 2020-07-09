import { combineReducers } from "redux"
import React from 'react'


const structure = [
    {
        content: 'Главная',
        href: '',
        icon: 'PlusOutlined'
    },
    {
        content: 'Открыть ИП',
        href: 'otkryt-ip',
        icon: 'ShoppingOutlined'
    },
    {
        content: 'Открыть ООО',
        href: 'otkryt-ooo',
        icon: 'UsergroupAddOutlined'
    },
    {
        content: 'Открыть счёт (РКО)',
        href: 'otkryt-raschetnyj-schet',
        icon: 'ReconciliationOutlined'
    },
    {
        content: 'Бухгалтерия',
        href: 'buhgalteriya',
        icon: 'AuditOutlined'
    },
    {
        content: 'Лицензии и СРО',
        href: 'licenzii-i-sro',
        icon: 'ContainerOutlined'
    },
    {
        content: 'Выпустить ЭЦП',
        href: 'vypustit-ecp',
        icon: 'UsbOutlined'
    },
    {
        content: 'Эквайринг',
        href: 'ekvajring',
        icon: 'CreditCardOutlined'
    },
    {
        content: 'Онлайн-касса',
        href: 'onlajn-kassa',
        icon: 'ShoppingCartOutlined'
    },
    {
        content: 'Оформить лизинг',
        href: 'oformit-lizing',
        icon: 'CarOutlined'
    },
    {
        content: 'Банковские гарантии',
        href: 'bankovskie-garantii',
        icon: 'SnippetsOutlined'
    },
    {
        content: 'Получить кредит',
        href: 'poluchit-kredit',
        icon: 'BankOutlined'
    },
    {
        content: 'Найти помещение',
        href: 'najti-pomeshchenie',
        icon: 'ShopOutlined'
    },
    {
        content: 'Сделать оценку',
        href: 'sdelat-ocenku',
        icon: 'FormOutlined'
    }
]








const chatsReducer = (state='state') =>{


    return state
}



const locationReducer = (state='state') =>{



    return state
    
}

const menuReducer = (state=structure)=>[...state]







const dataReducer = combineReducers({
    chats: chatsReducer
})


const uiReducer = combineReducers({
    menu: menuReducer
})




const rootReducer = combineReducers({
    data: dataReducer,
    ui: uiReducer

})



export default rootReducer