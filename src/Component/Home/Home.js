import React, { Component } from "react";
import "../../asset/css/custom.css";
import Chart from 'chart.js/auto';
import Pro from "../../asset/image/profile.jpeg";
require("../../asset/js/index");


const ctx = document.getElementById('myChat');
        new Chart(ctx, {
            type: 'bar',
            data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
                label: '',
                data: [65, 59, 80, 81, 56, 55, 40],
                backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(255, 159, 64, 0.2)',
                  'rgba(255, 205, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(201, 203, 207, 0.2)'
                ],
                borderColor: [
                  'rgb(255, 99, 132)',
                  'rgb(255, 159, 64)',
                  'rgb(255, 205, 86)',
                  'rgb(75, 192, 192)',
                  'rgb(54, 162, 235)',
                  'rgb(153, 102, 255)',
                  'rgb(201, 203, 207)'
                ],
                borderWidth: 1
            },
                {
                    label: '',
                data: [65, 59, 80, 81, 56, 55, 40],
                backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(255, 159, 64, 0.2)',
                  'rgba(255, 205, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(201, 203, 207, 0.2)'
                ],
                borderColor: [
                  'rgb(255, 99, 132)',
                  'rgb(255, 159, 64)',
                  'rgb(255, 205, 86)',
                  'rgb(75, 192, 192)',
                  'rgb(54, 162, 235)',
                  'rgb(153, 102, 255)',
                  'rgb(201, 203, 207)'
                ],
                borderWidth: 1
              }
            ]
            },
            options: {
                scales: {
                  y: {
                    beginAtZero: true
                  }
                }
              }
            }
        );
        



export default class Home extends Component {
  render() {
    return (
      <div class="grid-container">
        <header class="header">
          <div class="menu-icon" onclick="openSidebar()">
            <span class="material-icons-outlined"><i class="fa-sharp fa-solid fa-bars"></i></span>
          </div>
          <div class="header-left">
            <span class="material-icons-outlined">
              <i class="fa-sharp fa-solid fa-magnifying-glass"></i> Search
            </span>
          </div>
          <div class="header-right">
            <span class="material-icons-outlined"><img src={Pro} alt=""/></span>
          </div>
        </header>

        <aside id="sidebar">
          <div class="sidebar-title">
            <div class="sidebar-brand">
              <span class="material-icons-outlined">DASHBOARD</span>
            </div>
            <span class="material-icons-outlined" onclick="closeSidebar()">
              close
            </span>
          </div>

          <ul class="sidebar-list">
            <p>Client Facing</p>
            <li class="sidebar-list-item">
              <span class="material-icons-outlined">
                <i class="fa-sharp fa-solid fa-gauge-high"></i> Products
              </span>
            </li>
            <li class="sidebar-list-item">
              <span class="material-icons-outlined">
                <i class="fa-sharp fa-solid fa-right-left"></i> Customers
              </span>
            </li>
            <li class="sidebar-list-item">
              <span class="material-icons-outlined">
                <i class="fa-sharp fa-solid fa-bars-staggered"></i> Transactions
              </span>
            </li>
            <li class="sidebar-list-item">
              <span class="material-icons-outlined">
                <i class="fa-sharp fa-solid fa-desktop"></i> Geography
              </span>
            </li>
          </ul>
          <ul class="sidebar-list">
            <p>Sales</p>
            <li class="sidebar-list-item">
              <span class="material-icons-outlined">
                <i class="fa-sharp fa-solid fa-gauge-high"></i> Overview
              </span>
            </li>
            <li class="sidebar-list-item">
              <span class="material-icons-outlined">
                <i class="fa-sharp fa-solid fa-right-left"></i> Daily
              </span>
            </li>
            <li class="sidebar-list-item">
              <span class="material-icons-outlined">
                <i class="fa-sharp fa-solid fa-bars-staggered"></i> Monthly
              </span>
            </li>
            <li class="sidebar-list-item">
              <span class="material-icons-outlined">
                <i class="fa-sharp fa-solid fa-desktop"></i> Breakdown
              </span>
            </li>
          </ul>
          <ul class="sidebar-list">
            <p>management</p>
            <li class="sidebar-list-item">
              <span class="material-icons-outlined">
                <i class="fa-sharp fa-solid fa-gauge-high"></i> Admin
              </span>
            </li>
            <li class="sidebar-list-item">
              <span class="material-icons-outlined">
                <i class="fa-sharp fa-solid fa-right-left"></i> performance
              </span>
            </li>
          </ul>
        </aside>

        <main class="main-container">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div class="main-cards">
                    <div className="row">
                        <div className="col-lg-6">
                            <div class="card">
                                <div class="card-inner">
                                <p class="text-primary">Total Customer</p>
                                <span class="material-icons-outlined text-orange"></span>
                                </div>
                                <span class="text-primary font-weight-bold">483</span>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div class="card">
                                <div class="card-inner">
                                <p class="text-primary">Sales Today</p>
                                <span class="material-icons-outlined text-orange"></span>
                                </div>
                                <span class="text-primary font-weight-bold">5583</span>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div class="card">
                                <div class="card-inner">
                                <p class="text-primary">Monthly Sales</p>
                                <span class="material-icons-outlined text-orange"></span>
                                </div>
                                <span class="text-primary font-weight-bold">54483</span>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div class="card">
                                <div class="card-inner">
                                <p class="text-primary">Yearly Sales</p>
                                <span class="material-icons-outlined text-orange"></span>
                                </div>
                                <span class="text-primary font-weight-bold">45464583</span>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
                 <div className="col-lg-6">
                    <div>
                        <canvas id="myChat" height="50px" width="100px"></canvas>
                    </div>
                </div>
            </div>
          </div>
        </main>
      </div>
    )
  }
}










