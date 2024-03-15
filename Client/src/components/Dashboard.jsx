import React, { useState } from 'react';
import Sidebar from './Sidebar';
import TopBar from './TopBar';
import HomeSection from './HomeSection';
import Chatbot2 from './Chatbot2';

const Dashboard = () => {
  // State variable to track whether the sidebar is open or closed
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Function to toggle the sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Pass isSidebarOpen state and toggleSidebar function to Sidebar component */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      <div className="flex-1 flex flex-col overflow-hidden">
        <TopBar />

        <div className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          <HomeSection />
        </div>
      </div>
      <Chatbot2 />
    </div>
  );
};

export default Dashboard;
