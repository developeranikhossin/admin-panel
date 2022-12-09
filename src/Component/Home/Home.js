import React, { Component } from 'react';
import "../../asset/css/custom.css";
require("../../asset/js/index");

export default class Home extends Component {
  render() {
    return (
        <div class="grid-container">
            <header class="header">
            <div class="menu-icon" onclick="openSidebar()">
                <span class="material-icons-outlined">Menu</span>
            </div>
            <div class="header-left">
                <span class="material-icons-outlined"><i class="fa-sharp fa-solid fa-magnifying-glass"></i> Search</span>
            </div>
            <div class="header-right">
                <span class="material-icons-outlined">Notifications</span>
                <span class="material-icons-outlined">Email</span>
                <span class="material-icons-outlined">Account</span>
            </div>
            </header>
        
            <aside id="sidebar">
                <div class="sidebar-title">
                    <div class="sidebar-brand">
                    <span class="material-icons-outlined">Wunder Trading</span>
                    </div>
                    <span class="material-icons-outlined" onclick="closeSidebar()">close</span>
                </div>
        
                <ul class="sidebar-list">
                    <li class="sidebar-list-item">
                    <span class="material-icons-outlined"><i class="fa-sharp fa-solid fa-gauge-high"></i> dashboard</span>
                    </li>
                    <li class="sidebar-list-item">
                    <span class="material-icons-outlined"><i class="fa-sharp fa-solid fa-right-left"></i> My Exchanges</span>
                    </li>
                    <li class="sidebar-list-item">
                    <span class="material-icons-outlined"><i class="fa-sharp fa-solid fa-bars-staggered"></i> Positions</span>
                    </li>
                    <li class="sidebar-list-item"> 
                    <span class="material-icons-outlined"><i class="fa-sharp fa-solid fa-desktop"></i> Terminal</span>
                    </li>
                    <li class="sidebar-list-item">
                    <span class="material-icons-outlined"><i class="fa-solid fa-volume-high"></i> Referrals</span>
                    </li>
                    <li class="sidebar-list-item">
                    <span class="material-icons-outlined"><i class="fa-solid fa-file"></i> Subscriptions</span>
                    </li>
                    <li class="sidebar-list-item">
                    <span class="material-icons-outlined"><i class="fa-solid fa-gear"></i> settings</span>
                    </li>
                    <li class="sidebar-list-item">
                    <span class="material-icons-outlined"><i class="fa-solid fa-headset"></i> Help Center</span>
                    </li>
                </ul>
                <ul className='header-icon-area'>
                    <li><a href="#"><i class="fa-brands fa-facebook"></i></a></li>
                    <li><a href="#"><i class="fa-brands fa-twitter"></i></a></li>
                    <li><a href="#"><i class="fa-brands fa-youtube"></i></a></li>
                    <li><a href="#"><i class="fa-brands fa-telegram"></i></a></li>
                </ul>
            </aside>
        
            <main class="main-container">
                <div class="main-title">
                    <p class="font-weight-bold">DASHBOARD</p>
                </div>
        
                <div class="main-cards">
        
                    <div class="card">
                    <div class="card-inner">
                        <p class="text-primary">PRODUCTS</p>
                        <span class="material-icons-outlined text-blue"></span>
                    </div>
                    <span class="text-primary font-weight-bold">249</span>
                    </div>
        
                    <div class="card">
                    <div class="card-inner">
                        <p class="text-primary">PURCHASE ORDERS</p>
                        <span class="material-icons-outlined text-orange"></span>
                    </div>
                    <span class="text-primary font-weight-bold">83</span>
                    </div>
        
                    <div class="card">
                    <div class="card-inner">
                        <p class="text-primary">SALES ORDERS</p>
                        <span class="material-icons-outlined text-green"></span>
                    </div>
                    <span class="text-primary font-weight-bold">79</span>
                    </div>
        
                    <div class="card">
                    <div class="card-inner">
                        <p class="text-primary">INVENTORY ALERTS</p>
                        <span class="material-icons-outlined text-red"></span>
                    </div>
                    <span class="text-primary font-weight-bold">56</span>
                    </div>
        
                </div>
        
                <div class="charts">
        
                    <div class="charts-card">
                    <p class="chart-title">Top 5 Products</p>
                    <div id="bar-chart"></div>
                    </div>
        
                    <div class="charts-card">
                    <p class="chart-title">Purchase and Sales Orders</p>
                    <div id="area-chart"></div>
                    </div>
        
                </div>
            </main>
        </div>
    )
  }
}
