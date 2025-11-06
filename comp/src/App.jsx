import React from 'react';
import Header from './components/Header';
import DateFilter from './components/DateFilter';
import TopMetrics from './components/TopMetrics';
import LocationsMap from './components/LocationsMap';
import ExpensesChart from './components/ExpensesChart';
import GenderChart from './components/GenderChart';
import AgeDistribution from './components/AgeDistribution';
import TrainingChart from './components/TrainingChart';
import FinanceChart from './components/FinanceChart';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto px-6 py-6">
        <Header />
        <DateFilter />
        
        <TopMetrics />
        
        <div className="mb-6">
          <LocationsMap />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <ExpensesChart />
          <div className="space-y-6">
            <GenderChart />
            <AgeDistribution />
          </div>
        </div>

        <div className="mb-6">
          <TrainingChart />
        </div>

        <FinanceChart />
      </main>
    </div>
  );
}

export default App;
