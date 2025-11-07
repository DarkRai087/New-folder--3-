import React from 'react';
import Header from './components/Header';
import DateFilter from './components/DateFilter';
import TopMetrics from './components/TopMetrics';
import LocationsMap from './components/LocationsMap';
import Services from './components/Services';
import Compliances from './components/Compliances';
import ExpensesChart from './components/ExpensesChart';
import GenderChart from './components/GenderChart';
import AgeDistribution from './components/AgeDistribution';
import TrainingChart from './components/TrainingChart';
import FinanceChart from './components/FinanceChart';
import CombinedCharts from './components/CombinedCharts';
import Budget from './components/Budget';
import './App.css';

function  Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto px-6 py-6">
        <Header />
        <DateFilter />
        
        <TopMetrics />
        
        <div className="mb-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <LocationsMap />
          </div>
          <div className="lg:col-span-1 space-y-6">
            <Services />
            <Compliances />
          </div>
        </div>
        <div>
          <CombinedCharts />
        </div>
      

        <div className="mb-6 mt-6">
          <TrainingChart />
        </div>

        <FinanceChart />

        <div className="mt-6">
          <Budget />
        </div>
      </main>
    </div>
  );
}

export default  Dashboard;
