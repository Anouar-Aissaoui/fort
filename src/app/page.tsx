'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Header from '@/components/Header'
import TabContent from '@/components/TabContent'
import ParticlesBackground from '@/components/ParticlesBackground'
import PackagesModal from '@/components/PackagesModal'
import LoadingModal from '@/components/LoadingModal'

export default function Home() {
  const [activeTab, setActiveTab] = useState('menu1')
  const [showPackagesModal, setShowPackagesModal] = useState(false)
  const [showLoadingModal, setShowLoadingModal] = useState(false)
  const [showVerification, setShowVerification] = useState(false)
  const [username, setUsername] = useState('')
  const [selectedPlatform, setSelectedPlatform] = useState('pc')
  const [selectedAmount, setSelectedAmount] = useState(1000)
  const [showRightPanel, setShowRightPanel] = useState(false)

  return (
    <div>
      <ParticlesBackground />
      <div className="blur">
        <Header />
        <div className="container">
          <ul className="tab_links">
            <li className={activeTab === 'home' ? 'active' : ''}>
              <a 
                className="soundclick" 
                onClick={() => setActiveTab('home')}
                href="#"
              >
                <i className="fas fa-bars"></i>
                <span>Recent Activity</span>
              </a>
            </li>
            <li className={activeTab === 'menu1' ? 'active' : ''}>
              <a 
                className="soundclick" 
                onClick={() => setActiveTab('menu1')}
                href="#"
              >
                <i className="fas fa-bullseye"></i>
                <span>Generator</span>
              </a>
            </li>
            <li className={activeTab === 'menu2' ? 'active' : ''}>
              <a 
                className="soundclick" 
                onClick={() => setActiveTab('menu2')}
                href="#"
              >
                <i className="fas fa-database"></i>
                <span>Daily Items</span>
              </a>
            </li>
          </ul>
        </div>

        <TabContent 
          activeTab={activeTab}
          username={username}
          setUsername={setUsername}
          selectedPlatform={selectedPlatform}
          setSelectedPlatform={setSelectedPlatform}
          selectedAmount={selectedAmount}
          showVerification={showVerification}
          showRightPanel={showRightPanel}
          setShowRightPanel={setShowRightPanel}
          setShowPackagesModal={setShowPackagesModal}
          setShowLoadingModal={setShowLoadingModal}
        />
      </div>

      <PackagesModal 
        show={showPackagesModal}
        onHide={() => setShowPackagesModal(false)}
        onSelectPackage={(amount) => {
          setSelectedAmount(amount)
          setShowPackagesModal(false)
          setShowRightPanel(true)
        }}
      />

      <LoadingModal 
        show={showLoadingModal}
        onHide={() => setShowLoadingModal(false)}
        selectedAmount={selectedAmount}
        onComplete={() => {
          setShowLoadingModal(false)
          setShowVerification(true)
        }}
      />
    </div>
  )
}