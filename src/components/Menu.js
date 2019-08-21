import React from 'react';
import {Router,Route} from 'react-router-dom'
const menus=[
    {
        name:'home',
        to:'/',
        exact:true
    },
    {
        name:'about',
        to:'/about',
        exact:false
    }
]


class Menu extends React.Component{
    listMenu =(menu)=>{
        var result=null;
        if(menu.length>0){
            result=menus.map((menu,index)=>{
                result=result+
                <Route key={index} label={menu.name} to={menu.to} activeOnlyWhenExact={menu.exact}/>
            });
        }
         return result;
        // console.log(menu)
     
    }
    render(){
        this.listMenu(menus)
        return(
            <div>
                {()=>{this.listMenu(menus)}}
            </div>  
        )
    }
}

export default Menu;