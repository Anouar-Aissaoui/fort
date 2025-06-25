import { useState } from 'react'
import Image from 'next/image'

interface GeneratorProps {
  username: string
  setUsername: (value: string) => void
  selectedPlatform: string
  setSelectedPlatform: (value: string) => void
  selectedAmount: number
  showRightPanel: boolean
  setShowRightPanel: (value: boolean) => void
  setShowPackagesModal: (value: boolean) => void
  setShowLoadingModal: (value: boolean) => void
}

export default function Generator({
  username,
  setUsername,
  selectedPlatform,
  setSelectedPlatform,
  selectedAmount,
  showRightPanel,
  setShowRightPanel,
  setShowPackagesModal,
  setShowLoadingModal
}: GeneratorProps) {
  const [isLoading, setIsLoading] = useState(false)

  const platforms = [
    { id: 'pc', name: 'Windows', icon: 'fab fa-windows' },
    { id: 'psn', name: 'Playstation', icon: 'fab fa-playstation' },
    { id: 'xbox', name: 'xBox', icon: 'fab fa-xbox' },
    { id: 'switch', name: 'Switch', icon: 'fab fa-nintendo-switch' },
    { id: 'ios', name: 'iOS', icon: 'fab fa-apple' },
    { id: 'android', name: 'Android', icon: 'fab fa-android' }
  ]

  const handleNext = async () => {
    if (!username || username.length <= 3) {
      // Add shake animation to input
      const input = document.querySelector('.usernameInput')
      if (input) {
        input.classList.add('shake')
        setTimeout(() => {
          input.classList.remove('shake')
        }, 1000)
      }
      return
    }

    setIsLoading(true)
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      setShowPackagesModal(true)
    }, 2000)
  }

  const handleGenerate = () => {
    setShowRightPanel(false)
    setShowLoadingModal(true)
  }

  return (
    <div className="row">
      <div className="leftside">
        <div className="left_panel generator-page">
          <div className="title_bar">
            <span>Generator</span>
          </div>
          <div className="main_bg">
            <div className="row">
              <div className="space">
                <div className="generator_avatar">
                  <Image 
                    src="/img/avatar_gen.png" 
                    alt="avatar" 
                    width={80} 
                    height={80}
                  />
                </div>
                <div className="generator_info">
                  <p>Username</p>
                  <input 
                    className="usernameInput" 
                    type="text" 
                    placeholder="Type here..."
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
              </div>
              <div className="generator_bar">Select your platform</div>
              <div className="generator_platform">
                <ul className="platforms">
                  {platforms.map((platform) => (
                    <li 
                      key={platform.id}
                      className={selectedPlatform === platform.id ? 'platform-active' : ''}
                      onClick={() => setSelectedPlatform(platform.id)}
                    >
                      <i className={platform.icon}></i>
                      <br />
                      {platform.name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="generator_bottom">
            <div className="row">
              <div className="btn_bg2 btnFirst">
                <div className={`btn_bg_yellow btnCheckData ${isLoading ? 'disabled-btn' : ''}`}>
                  <a className="soundclick" onClick={handleNext}>
                    <span>
                      {isLoading ? (
                        <i className="fas fa-spinner fa-spin" style={{fontSize: '24px', color: '#222a4c'}}></i>
                      ) : (
                        'Next'
                      )}
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="rightside">
        <div className={`right_panel ${showRightPanel ? '' : 'd-none'}`} style={{ display: showRightPanel ? 'block' : 'none' }}>
          <div className="title_bar2">
            <span>Your info</span>
          </div>
          <div className="first_block_right">
            NAME<br />
            <span className="prepare-usr">{username || 'Fortnite'}</span>
            <div className="generator_icons" style={{ display: 'block' }}>
              <ul>
                <li>
                  <Image src="/img/kills.png" alt="kills" width={35} height={35} />
                  <br />
                  <em className="player-kills normal-font">33</em>
                </li>
                <li>
                  <Image src="/img/wins.png" alt="wins" width={35} height={35} />
                  <br />
                  <em className="player-wins normal-font">40%</em>
                </li>
                <li>
                  <Image src="/img/matches.png" alt="matches" width={35} height={35} />
                  <br />
                  <em className="player-matches normal-font">28</em>
                </li>
                <li>
                  <Image src="/img/score.png" alt="score" width={35} height={35} />
                  <br />
                  <em className="player-score normal-font">5,728</em>
                </li>
              </ul>
            </div>
            <div className="total_coins">
              <Image src="/img/bucks.png" alt="coins" width={35} height={35} />
              <span className="prepare-value value-Counto">{selectedAmount.toLocaleString()}</span>
            </div>
          </div>
          <div className="second_block_right">
            <div className="btn_bg">
              <div className="btn_bg_yellow">
                <a className="btnStartGenerator soundclick" onClick={handleGenerate}>
                  <span>Generate</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}